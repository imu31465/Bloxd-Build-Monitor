# Changed — Bundle Modifications Report (Part 105 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `105 / 142` (**427** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 104](part-104.md) · [Part 106 →](part-106.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (3956 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 2497. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22317` → after: `L22165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22165) · [Before (L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22317)

```diff
-             const ju = (0, Zu.m)(uu._planeTexture);
+             const ZG = (0, LG.k)(GG._planeTexture);
```

#### 2498. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22320-L22321` → after: `L22168-L22169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22168-L22169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22168-L22169) · [Before (L22320-L22321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22320-L22321)

```diff
-               const Uu = null !== (ju = null === (su = Eu.healthbar) || void 0 === su ? void 0 : su.display) && void 0 !== ju ? ju : "onDamage";
-               return "never" === Uu ? null : "always" === Uu ? null !== (Zu = uu.ru) && void 0 !== Zu ? Zu : 1 : uu.healthTimeout ? uu.ru : null;
+               const SG = null !== (ZG = null === (wG = bG.healthbar) || void 0 === wG ? void 0 : wG.display) && void 0 !== ZG ? ZG : "onDamage";
+               return "never" === SG ? null : "always" === SG ? null !== (LG = GG.aG) && void 0 !== LG ? LG : 1 : GG.healthTimeout ? GG.aG : null;
```

#### 2499. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22325-L22327` → after: `L22173-L22175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22173-L22175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22173-L22175) · [Before (L22325-L22327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22325-L22327)

```diff
-       }(0, Gu.b)((() => {
-         for (const uu of Tu) tu(uu.HV) !== xu.has(uu.HV) && UE(uu)
-       })), (0, Ju.g)(uu.tO.hV(), (() => {
+       }(0, oG.e)((() => {
+         for (const GG of HG) RG(GG.RP) !== TG.has(GG.RP) && Sb(GG)
+       })), (0, iG.e)(GG.HK.Dv(), (() => {
```

#### 2500. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22341` → after: `L22189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22189) · [Before (L22341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22341)

```diff
-         const su = (0, Ou.b)().getLifeformType(Eu);
+         const wG = (0, KG.e)().getLifeformType(bG);
```

#### 2501. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22343` → after: `L22191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22191) · [Before (L22343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22343)

```diff
-         return !!(null === (ju = uu.YG.Cju(Eu)) || void 0 === ju ? void 0 : ju.jO)
+         return !!(null === (ZG = GG.Hr.XZG(bG)) || void 0 === ZG ? void 0 : ZG.SK)
```

#### 2502. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22351` → after: `L22199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22199) · [Before (L22351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22351)

```diff
-             uu.OY("Error updating a nametag", Eu)
+             GG.Jh("Error updating a nametag", bG)
```

#### 2503. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22363` → after: `L22211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22211) · [Before (L22363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22363)

```diff
-         return null !== (ju = uu.FQ !== Eu && (null === (su = uu.EQ[uu.FQ][Eu]) || void 0 === su ? void 0 : su.hasPriorityNametag)) && void 0 !== ju && ju
+         return null !== (ZG = GG.sA !== bG && (null === (wG = GG.JA[GG.sA][bG]) || void 0 === wG ? void 0 : wG.hasPriorityNametag)) && void 0 !== ZG && ZG
```

#### 2504. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22374` → after: `L22222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22222) · [Before (L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22374)

```diff
-         if (Uu === Zu && !du.d.getTexture(Zu, au.i.ICON).notFound) {
+         if (SG === LG && !CG.e.getTexture(LG, WG.i.ICON).notFound) {
```

#### 2505. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22379` → after: `L22227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22227) · [Before (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22379)

```diff
-             !Xu || null !== (lu = (0, Ou.b)().client) && void 0 !== lu && lu.isReplayMode() || (Eu = setTimeout((() => {
+             !yG || null !== (kG = (0, KG.e)().client) && void 0 !== kG && kG.isReplayMode() || (bG = setTimeout((() => {
```

#### 2506. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22392` → after: `L22240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22240) · [Before (L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22392)

```diff
-         CE(Eu) && ju > qu.f && (su = qu.f);
+         Vb(bG) && ZG > UG.g && (wG = UG.g);
```

#### 2507. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22399` → after: `L22247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22247) · [Before (L22399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22399)

```diff
-         const Zu = uu.tO.engine.getRenderWidth();
+         const LG = GG.HK.engine.getRenderWidth();
```

#### 2508. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22406-L22414` → after: `L22254-L22262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22254-L22262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22254-L22262) · [Before (L22406-L22414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22406-L22414)

```diff
-         const su = uu.YG.PEu(Eu.HV),
-           Zu = CE(Eu.HV),
-           Cu = (0, eu.x)(Eu._planeMesh, uu.sG.canSeeNametagsThroughWalls, null === su || void 0 === su ? void 0 : su.crouching, Zu),
-           bu = uu.YG.wT(Eu.planeEId).xH,
-           cu = uu.camera.nH(),
-           Nu = Uu().LX(bu, cu),
-           Ou = uu.YG.GEu(Eu.planeEId).offset,
-           Yu = ju ? (0, qu.x)(uu, Eu.HV, Eu.planeEId, Cu) : 1;
-         if (Zu && Cu && Nu > qu.f) {
+         const wG = GG.Hr.qbG(bG.RP),
+           LG = Vb(bG.RP),
+           VG = (0, EG.D)(bG._planeMesh, GG.Qr.canSeeNametagsThroughWalls, null === wG || void 0 === wG ? void 0 : wG.crouching, LG),
+           pG = GG.Hr.kN(bG.planeEId).Zx,
+           fG = GG.camera.Xx(),
+           QG = SG().ey(pG, fG),
+           KG = GG.Hr.lbG(bG.planeEId).offset,
+           hG = ZG ? (0, UG.t)(GG, bG.RP, bG.planeEId, VG) : 1;
+         if (LG && VG && QG > UG.g) {
```

#### 2509. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22417` → after: `L22265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22265) · [Before (L22417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22417)

```diff
-           const Eu = Uu().scale(uu, uu, qu.f),
+           const bG = SG().scale(GG, GG, UG.g),
```

#### 2510. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22421-L22422` → after: `L22269-L22270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22269-L22270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22269-L22270) · [Before (L22421-L22422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22421-L22422)

```diff
-         ju && (0, qu.l)(uu, Eu.planeEId);
-         const hu = (0, qu.r)(Nu, Zu, Cu) * Yu,
+         ZG && (0, UG.i)(GG, bG.planeEId);
+         const dG = (0, UG.o)(QG, LG, VG) * hG,
```

#### 2511. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22424` → after: `L22272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22272) · [Before (L22424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22424)

```diff
-         if (Eu._layoutHeight = Du, uu.tO.aY && Eu._planeMesh.isEnabled() && Eu._planeMesh.isVisible) {
+         if (bG._layoutHeight = JG, GG.HK.Fh && bG._planeMesh.isEnabled() && bG._planeMesh.isVisible) {
```

#### 2512. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22426` → after: `L22274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22274) · [Before (L22426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22426)

```diff
-           const ju = (0, Xu.f)(uu, Eu.HV),
+           const ZG = (0, yG.c)(GG, bG.RP),
```

#### 2513. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22430-L22431` → after: `L22278-L22279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22278-L22279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22278-L22279) · [Before (L22430-L22431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22430-L22431)

```diff
-           const qu = Pu.b.clamp(su / Uu, 0, 1),
-             Cu = Pu.b.lerp(null !== (Mu = Zu) && void 0 !== Mu ? Mu : XE, lE, qu);
+           const UG = mG.c.clamp(wG / SG, 0, 1),
+             VG = mG.c.lerp(null !== (zG = LG) && void 0 !== zG ? zG : yb, kb, UG);
```

#### 2514. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22433-L22434` → after: `L22281-L22282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22281-L22282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22281-L22282) · [Before (L22433-L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22433-L22434)

```diff
-           const bu = (0, fu.applyHeldLightTint)(uu, Eu.HV, ju, iu);
-           iu[0] = Math.max(bu[0], Zu), iu[1] = Math.max(bu[1], Zu), iu[2] = Math.max(bu[2], Zu), iu[3] = Math.max(bu[3], Zu), (0, lu.j)(Eu._lightState, iu)
+           const pG = (0, YG.applyHeldLightTint)(GG, bG.RP, ZG, MG);
+           MG[0] = Math.max(pG[0], LG), MG[1] = Math.max(pG[1], LG), MG[2] = Math.max(pG[2], LG), MG[3] = Math.max(pG[3], LG), (0, kG.l)(bG._lightState, MG)
```

#### 2515. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22448` → after: `L22296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22296) · [Before (L22448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22448)

```diff
-           ru: null,
+           aG: null,
```

#### 2516. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22480-L22481` → after: `L22328-L22329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22328-L22329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22328-L22329) · [Before (L22480-L22481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22480-L22481)

```diff
-         lG: function(Eu, ju) {
-           ju.effects = {}, Tu.add(ju), ju._lightId = `nt_${Eu}`, ju._visibilityCombinator = new gu.b((Eu => {
+         Kr: function(bG, ZG) {
+           ZG.effects = {}, HG.add(ZG), ZG._lightId = `nt_${bG}`, ZG._visibilityCombinator = new rG.e((bG => {
```

#### 2517. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22483-L22485` → after: `L22331-L22333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22331-L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22331-L22333) · [Before (L22483-L22485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22483-L22485)

```diff
-             const su = uu.YG.AEu(ju.HV);
-             su ? su.meshEnabledCombinator.forceUpdate() : (0, ku.q)(uu, ju.planeEId, Eu)
-           })), ju.entityMeshScalingSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|meshScaling`, (uu => {
+             const wG = GG.Hr.kZG(ZG.RP);
+             wG ? wG.meshEnabledCombinator.forceUpdate() : (0, FG.n)(GG, ZG.planeEId, bG)
+           })), ZG.entityMeshScalingSub = VG.l.subscribe(`otherEntitySettingsClientifiedEId|${bG}|meshScaling`, (GG => {
```

#### 2518. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22487` → after: `L22335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22335) · [Before (L22487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22487)

```diff
-           })), ju.nameTagInfoSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|nameTagInfo`, (uu => {
+           })), ZG.nameTagInfoSub = VG.l.subscribe(`otherEntitySettingsClientifiedEId|${bG}|nameTagInfo`, (GG => {
```

#### 2519. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22489` → after: `L22337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22337) · [Before (L22489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22489)

```diff
-           })), ju.priorityNametagSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|hasPriorityNametag`, (uu => {
+           })), ZG.priorityNametagSub = VG.l.subscribe(`otherEntitySettingsClientifiedEId|${bG}|hasPriorityNametag`, (GG => {
```

#### 2520. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22491` → after: `L22339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22339) · [Before (L22491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22491)

```diff
-           })), ju.rankUpdateSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|ranks`, (uu => {
+           })), ZG.rankUpdateSub = VG.l.subscribe(`otherEntitySettingsClientifiedEId|${bG}|ranks`, (GG => {
```

#### 2521. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22493` → after: `L22341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22341) · [Before (L22493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22493)

```diff
-           })), ju.hideNameSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|hideNameSeed`, (uu => {
+           })), ZG.hideNameSub = VG.l.subscribe(`otherEntitySettingsClientifiedEId|${bG}|hideNameSeed`, (GG => {
```

#### 2522. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22495` → after: `L22343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22343) · [Before (L22495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22495)

```diff
-           })), ju.nameChangedSub = Cu.h.subscribe(`entityNameChanged|${Eu}`, (() => {
+           })), ZG.nameChangedSub = VG.l.subscribe(`entityNameChanged|${bG}`, (() => {
```

#### 2523. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22497` → after: `L22345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22345) · [Before (L22497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22497)

```diff
-           })), ju.nameColourSub = Cu.h.subscribe(`otherEntitySettingsClientifiedEId|${Eu}|nameColour`, (uu => {
+           })), ZG.nameColourSub = VG.l.subscribe(`otherEntitySettingsClientifiedEId|${bG}|nameColour`, (GG => {
```

#### 2524. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22499` → after: `L22347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22347) · [Before (L22499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22499)

```diff
-           })), ju.effectInfoSub = Cu.h.subscribe("EffectUpdate", (uu => {
+           })), ZG.effectInfoSub = VG.l.subscribe("EffectUpdate", (GG => {
```

#### 2525. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22501-L22502` → after: `L22349-L22350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22349-L22350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22349-L22350) · [Before (L22501-L22502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22501-L22502)

```diff
-             (null === (su = uu.showInNametag) || void 0 === su || su) && (0, hu.d)(uu.Qu) === Eu && bE(ju, uu)
-           })), ju.removeEffectSub = Cu.h.subscribe("RemoveEffect", (uu => {
+             (null === (wG = GG.showInNametag) || void 0 === wG || wG) && (0, dG.d)(GG.cG) === bG && pb(ZG, GG)
+           })), ZG.removeEffectSub = VG.l.subscribe("RemoveEffect", (GG => {
```

#### 2526. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22504-L22505` → after: `L22352-L22353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22352-L22353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22352-L22353) · [Before (L22504-L22505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22504-L22505)

```diff
-             (0, hu.d)(uu.Qu) === Eu && (clearTimeout(null === (su = ju.effects[uu.name]) || void 0 === su ? void 0 : su.timeout), delete ju.effects[uu.name], UE(ju))
-           })), ju.leaveGameSub = Cu.h.subscribe("leaveGame", (() => {
+             (0, dG.d)(GG.cG) === bG && (clearTimeout(null === (wG = ZG.effects[GG.name]) || void 0 === wG ? void 0 : wG.timeout), delete ZG.effects[GG.name], Sb(ZG))
+           })), ZG.leaveGameSub = VG.l.subscribe("leaveGame", (() => {
```

#### 2527. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22508` → after: `L22356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22356) · [Before (L22508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22508)

```diff
-           })), ju.lifeformHurtSub = Cu.h.subscribe("lifeformHurt", (uu => {
+           })), ZG.lifeformHurtSub = VG.l.subscribe("lifeformHurt", (GG => {
```

#### 2528. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22511` → after: `L22359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22359) · [Before (L22511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22511)

```diff
-               ru: Uu
+               aG: SG
```

#### 2529. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22515-L22516` → after: `L22363-L22364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22363-L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22363-L22364) · [Before (L22515-L22516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22515-L22516)

```diff
-             }), 2e3), ju.ru = Uu, UE(ju))
-           })), ju.lifeformHealthChangedSub = Cu.h.subscribe("lifeformHealthChanged", (su => {
+             }), 2e3), ZG.aG = SG, Sb(ZG))
+           })), ZG.lifeformHealthChangedSub = VG.l.subscribe("lifeformHealthChanged", (wG => {
```

#### 2530. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22519-L22520` → after: `L22367-L22368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22367-L22368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22367-L22368) · [Before (L22519-L22520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22519-L22520)

```diff
-               aE: Zu,
-               PE: Xu
+               Wb: LG,
+               Ib: yG
```

#### 2531. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22525-L22526` → after: `L22373-L22374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22373-L22374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22373-L22374) · [Before (L22525-L22526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22525-L22526)

```diff
-             }), 2e3)), ju.ru = Xu, uu.bloxd.client.gameRecorder.recordLifeformHealth(Uu, Zu, Xu), UE(ju)
-           })), ju.hideNametagSub = Cu.h.subscribe("appManagerUpdated|areNametagsHidden", (uu => {
+             }), 2e3)), ZG.aG = yG, GG.bloxd.client.gameRecorder.recordLifeformHealth(SG, LG, yG), Sb(ZG)
+           })), ZG.hideNametagSub = VG.l.subscribe("appManagerUpdated|areNametagsHidden", (GG => {
```

#### 2532. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22529` → after: `L22377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22377) · [Before (L22529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22529)

```diff
-           ju.unsubscribeKeyPromptChanges = (0, bu.q)((() => {
+           ZG.unsubscribeKeyPromptChanges = (0, pG.l)((() => {
```

#### 2533. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22531-L22532` → after: `L22379-L22380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22379-L22380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22379-L22380) · [Before (L22531-L22532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22531-L22532)

```diff
-             (null !== (uu = ju.nameTagInfo) && void 0 !== uu && null !== (Eu = uu.content) && void 0 !== Eu && Eu.some(cu.tb) || null !== (su = ju.nameTagInfo) && void 0 !== su && null !== (Uu = su.subtitle) && void 0 !== Uu && Uu.some(cu.tb)) && UE(ju)
-           })), ju._visibilityCombinator.setBooleanType("nametagEnabled", !ou.d.get("areNametagsHidden"));
+             (null !== (GG = ZG.nameTagInfo) && void 0 !== GG && null !== (bG = GG.content) && void 0 !== bG && bG.some(fG.Qb) || null !== (wG = ZG.nameTagInfo) && void 0 !== wG && null !== (SG = wG.subtitle) && void 0 !== SG && SG.some(fG.Qb)) && Sb(ZG)
+           })), ZG._visibilityCombinator.setBooleanType("nametagEnabled", !IG.e.get("areNametagsHidden"));
```

#### 2534. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22534` → after: `L22382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22382) · [Before (L22534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22534)

```diff
-           ju.ru = su.getHealthFrac(Eu);
+           ZG.aG = wG.getHealthFrac(bG);
```

#### 2535. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22544` → after: `L22392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22392) · [Before (L22544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22544)

```diff
-           uu.FQ in uu.EQ && Eu in uu.EQ[uu.FQ] && ("nameTagInfo" in uu.EQ[uu.FQ][Eu] && (ju.nameTagInfo = uu.EQ[uu.FQ][Eu].nameTagInfo), "nameColour" in uu.EQ[uu.FQ][Eu] && (ju.nameColour = uu.EQ[uu.FQ][Eu].nameColour)), UE(ju)
+           GG.sA in GG.JA && bG in GG.JA[GG.sA] && ("nameTagInfo" in GG.JA[GG.sA][bG] && (ZG.nameTagInfo = GG.JA[GG.sA][bG].nameTagInfo), "nameColour" in GG.JA[GG.sA][bG] && (ZG.nameColour = GG.JA[GG.sA][bG].nameColour)), Sb(ZG)
```

#### 2536. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22549` → after: `L22397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22397) · [Before (L22549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22549)

```diff
-             const uu = ZE(ju.HV);
+             const GG = Lb(ZG.RP);
```

#### 2537. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22555` → after: `L22403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22403) · [Before (L22555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22555)

```diff
-             CE(ju.HV) && Lu(ju) && UE(ju)
+             Vb(ZG.RP) && eG(ZG) && Sb(ZG)
```

#### 2538. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22558` → after: `L22406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22406) · [Before (L22558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22558)

```diff
-         hG: function(uu, Eu) {
+         Yz: function(GG, bG) {
```

#### 2539. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22561` → after: `L22409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22409) · [Before (L22561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22561)

```diff
-         jK: function(uu, Eu) {
+         MI: function(GG, bG) {
```

#### 2540. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22563` → after: `L22411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22411) · [Before (L22563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22563)

```diff
-           nu(Eu), Tu.delete(Eu), xu.delete(Eu.HV), Cu.h.unsubscribe(Eu.entityMeshScalingSub), Cu.h.unsubscribe(Eu.nameTagInfoSub), Cu.h.unsubscribe(Eu.priorityNametagSub), Cu.h.unsubscribe(Eu.rankUpdateSub), Cu.h.unsubscribe(Eu.hideNameSub), Cu.h.unsubscribe(Eu.nameChangedSub), C … [truncated]
+           NG(bG), HG.delete(bG), TG.delete(bG.RP), VG.l.unsubscribe(bG.entityMeshScalingSub), VG.l.unsubscribe(bG.nameTagInfoSub), VG.l.unsubscribe(bG.priorityNametagSub), VG.l.unsubscribe(bG.rankUpdateSub), VG.l.unsubscribe(bG.hideNameSub), VG.l.unsubscribe(bG.nameChangedSub), V … [truncated]
```

#### 2541. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22574` → after: `L22422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22422) · [Before (L22574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22574)

```diff
-   39216: (uu, Eu, ju) => {
+   39283: (GG, bG, ZG) => {
```

#### 2542. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22578` → after: `L22426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22426) · [Before (L22578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22578)

```diff
-     var su = ju(38298),
+     var wG = ZG(38304),
```

#### 2543. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22580-L22581` → after: `L22428-L22429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22428-L22429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22428-L22429) · [Before (L22580-L22581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22580-L22581)

```diff
-       Zu = ju(37841),
-       Xu = ju(366),
+       LG = ZG(37816),
+       yG = ZG(364),
```

#### 2544. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22583-L22585` → after: `L22431-L22433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22431-L22433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22431-L22433) · [Before (L22583-L22585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22583-L22585)

```diff
-       qu = ju(38013),
-       fu = ju(37693);
-     const Cu = ju(39222).d,
+       UG = ZG(38027),
+       YG = ZG(37639);
+     const VG = ZG(39289).c,
```

#### 2545. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22590-L22591` → after: `L22438-L22439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22438-L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22438-L22439) · [Before (L22590-L22591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22590-L22591)

```diff
-       const Eu = uu.tO.hV(),
-         ju = (0, su.o)(uu.tO, "phBox", (0, Uu.b)({
+       const bG = GG.HK.Dv(),
+         ZG = (0, wG.q)(GG.HK, "phBox", (0, SG.b)({
```

#### 2546. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22596` → after: `L22444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22444) · [Before (L22596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22596)

```diff
-       ju.material = (0, fu.d)({
+       ZG.material = (0, YG.e)({
```

#### 2547. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22598` → after: `L22446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22446) · [Before (L22598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22598)

```diff
-         vY: Eu,
+         Ah: bG,
```

#### 2548. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22606` → after: `L22454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22454) · [Before (L22606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22606)

```diff
-       }).mirror, ju.visibility = .5, ju.Wk(!1);
+       }).mirror, ZG.visibility = .5, ZG.DW(!1);
```

#### 2549. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22616` → after: `L22464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22464) · [Before (L22616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22616)

```diff
-         lG: function(Eu, su) {
+         Kr: function(bG, wG) {
```

#### 2550. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22618` → after: `L22466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22466) · [Before (L22618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22618)

```diff
-           su.instance = ju.createInstance(`mesh overlay ${Eu}`), uu.tO.QY(su.instance, !1, null), su.lastFlash = Date.now(), null === (Uu = uu.YG.AEu(Eu)) || void 0 === Uu || Uu.meshEnabledCombinator.forceUpdate()
+           wG.instance = ZG.createInstance(`mesh overlay ${bG}`), GG.HK.gh(wG.instance, !1, null), wG.lastFlash = Date.now(), null === (SG = GG.Hr.kZG(bG)) || void 0 === SG || SG.meshEnabledCombinator.forceUpdate()
```

#### 2551. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22620` → after: `L22468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22468) · [Before (L22620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22620)

```diff
-         jK: function(uu, Eu) {
+         MI: function(GG, bG) {
```

#### 2552. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22623` → after: `L22471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22471) · [Before (L22623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22623)

```diff
-         hG: function(Eu, ju) {
+         Yz: function(bG, ZG) {
```

#### 2553. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22626-L22627` → after: `L22474-L22475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22474-L22475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22474-L22475) · [Before (L22626-L22627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22626-L22627)

```diff
-             const Eu = (0, qu.getCaughtUpMeshRotation)(uu, Xu.HV).renderRotation,
-               ju = uu.YG.wT(Xu.HV).xH;
+             const bG = (0, UG.getCaughtUpMeshRotation)(GG, yG.RP).renderRotation,
+               ZG = GG.Hr.kN(yG.RP).Zx;
```

#### 2554. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22629` → after: `L22477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22477) · [Before (L22629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22629)

```diff
-             if (lu().set(Ou, ju[0], ju[1] + Cu.playerHitboxHeights.head / 2, ju[2] + .1), lu().gq(Ou, Ou, ju, Eu[2]), lu().nX(Ou, Ou, ju, Eu[0]), lu().sq(Ou, Ou, ju, Eu[1]), (0, Zu.o)(Xu.instance, Ou[0], Ou[1], Ou[2]), Xu.instance.rotation.set(Eu[0], Eu[1], Eu[2]), su > Xu.lastFl … [truncated]
+             if (kG().set(KG, ZG[0], ZG[1] + VG.playerHitboxHeights.head / 2, ZG[2] + .1), kG().ek(KG, KG, ZG, bG[2]), kG().pk(KG, KG, ZG, bG[0]), kG().ck(KG, KG, ZG, bG[1]), (0, LG.v)(yG.instance, KG[0], KG[1], KG[2]), yG.instance.rotation.set(bG[0], bG[1], bG[2]), wG > yG.lastFl … [truncated]
```

#### 2555. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22636` → after: `L22484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22484) · [Before (L22636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22636)

```diff
-   39225: (uu, Eu, ju) => {
+   39297: (GG, bG, ZG) => {
```

#### 2556. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22640-L22641` → after: `L22488-L22489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22488-L22489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22488-L22489) · [Before (L22640-L22641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22640-L22641)

```diff
-     var su = ju(692),
-       Uu = ju(37841);
+     var wG = ZG(641),
+       SG = ZG(37816);
```

#### 2557. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22652` → after: `L22500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22500) · [Before (L22652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22652)

```diff
-           Vj: null,
+           lZ: null,
```

#### 2558. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22656` → after: `L22504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22504) · [Before (L22656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22656)

```diff
-         lG: function(uu, Eu) {
+         Kr: function(GG, bG) {
```

#### 2559. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22659` → after: `L22507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22507) · [Before (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22659)

```diff
-         jK: function(uu, Eu) {
+         MI: function(GG, bG) {
```

#### 2560. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22662` → after: `L22510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22510) · [Before (L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22662)

```diff
-         hG: function(Eu, ju) {
+         Yz: function(bG, ZG) {
```

#### 2561. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22668` → after: `L22516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22516) · [Before (L22668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22668)

```diff
-             const Eu = null === su.Vj ? 0 : Cu(uu, uu.YG.wT(su.HV).Kju, su.Vj);
+             const bG = null === wG.lZ ? 0 : VG(GG, GG.Hr.kN(wG.RP).HZG, wG.lZ);
```

#### 2562. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22670` → after: `L22518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22518) · [Before (L22670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22670)

```diff
-               for (let ju = 0; ju < Zu; ju++) su.meshes.push(cu(uu, su.HV));
+               for (let ZG = 0; ZG < LG; ZG++) wG.meshes.push(fG(GG, wG.RP));
```

#### 2563. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22673` → after: `L22521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22521) · [Before (L22673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22673)

```diff
-               Uu && Nu(uu, su, ju, Xu[ju], su.Vj, lu[ju]), su._shown[ju] !== Uu && (su._shown[ju] = Uu, su.meshes[ju].Wk(Uu))
+               SG && QG(GG, wG, ZG, yG[ZG], wG.lZ, kG[ZG]), wG._shown[ZG] !== SG && (wG._shown[ZG] = SG, wG.meshes[ZG].DW(SG))
```

#### 2564. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22686` → after: `L22534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22534) · [Before (L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22686)

```diff
-       const su = uu.ec;
+       const wG = GG.zf;
```

#### 2565. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22691` → after: `L22539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22539) · [Before (L22691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22691)

```diff
-         bu(Zu, Eu, su, qu, fu) || uu.zb.tL(qu, ju, fu) || (Xu[Uu] = qu, lu[Uu] = fu, Uu++)
+         pG(LG, bG, wG, UG, YG) || GG.Op.dD(UG, ZG, YG) || (yG[SG] = UG, kG[SG] = YG, SG++)
```

#### 2566. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22703-L22704` → after: `L22551-L22552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22551-L22552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22551-L22552) · [Before (L22703-L22704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22703-L22704)

```diff
-       const ju = uu.tO.Vju.createInstance(`floatingMesh_${Eu}_${(0,su.e)()}`);
-       return uu.tO.QY(ju), ju.Wk(!1), ju
+       const ZG = GG.HK.tZG.createInstance(`floatingMesh_${bG}_${(0,wG.d)()}`);
+       return GG.HK.gh(ZG), ZG.DW(!1), ZG
```

#### 2567. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22708` → after: `L22556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22556) · [Before (L22708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22708)

```diff
-       const lu = uu.ec,
+       const kG = GG.zf,
```

#### 2568. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22713` → after: `L22561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22561) · [Before (L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22713)

```diff
-       bu[3 * ju] === qu && bu[3 * ju + 1] === fu && bu[3 * ju + 2] === Cu || (bu[3 * ju] = qu, bu[3 * ju + 1] = fu, bu[3 * ju + 2] = Cu, (0, Uu.o)(Eu.meshes[ju], qu, fu, Cu))
+       pG[3 * ZG] === UG && pG[3 * ZG + 1] === YG && pG[3 * ZG + 2] === VG || (pG[3 * ZG] = UG, pG[3 * ZG + 1] = YG, pG[3 * ZG + 2] = VG, (0, SG.v)(bG.meshes[ZG], UG, YG, VG))
```

#### 2569. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22716` → after: `L22564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22564) · [Before (L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22716)

```diff
-   39228: (uu, Eu, ju) => {
+   39301: (GG, bG, ZG) => {
```

#### 2570. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22720-L22722` → after: `L22568-L22570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22568-L22570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22568-L22570) · [Before (L22720-L22722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22720-L22722)

```diff
-     var su = ju(2011),
-       Uu = ju(3879),
-       Zu = ju(37807);
+     var wG = ZG(1923),
+       SG = ZG(3683),
+       LG = ZG(37772);
```

#### 2571. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22741-L22742` → after: `L22589-L22590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22589-L22590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22589-L22590) · [Before (L22741-L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22741-L22742)

```diff
-         lG: function(Eu, ju) {
-           const qu = [su.e.subscribe("forcedCameraDirection", (Eu => {
+         Kr: function(bG, ZG) {
+           const UG = [wG.c.subscribe("forcedCameraDirection", (bG => {
```

#### 2572. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22744-L22745` → after: `L22592-L22593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22592-L22593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22592-L22593) · [Before (L22744-L22745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22744-L22745)

```diff
-               if (uu.sG.forcedCameraDirectionTransitionMs <= 0 || null === Eu) {
-                 if (null === Eu) uu.camera.DH = null, uu.camera.gH = null;
+               if (GG.Qr.forcedCameraDirectionTransitionMs <= 0 || null === bG) {
+                 if (null === bG) GG.camera.vN = null, GG.camera.aN = null;
```

#### 2573. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22748-L22749` → after: `L22596-L22597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22596-L22597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22596-L22597) · [Before (L22748-L22749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22748-L22749)

```diff
-                     nf: ju,
-                     lju: su
+                     pp: ZG,
+                     zZG: wG
```

#### 2574. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22751` → after: `L22599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22599) · [Before (L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22751)

```diff
-                   uu.camera.DH = su, uu.camera.gH = ju
+                   GG.camera.vN = wG, GG.camera.aN = ZG
```

#### 2575. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22761-L22762` → after: `L22609-L22610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22609-L22610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22609-L22610) · [Before (L22761-L22762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22761-L22762)

```diff
-                 nf: Uu,
-                 lju: Xu
+                 pp: SG,
+                 zZG: yG
```

#### 2576. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22769` → after: `L22617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22617) · [Before (L22769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22769)

```diff
-               ju.directionTransitionStart = lu, ju.directionTransitionEnd = lu + uu.sG.forcedCameraDirectionTransitionMs, uu.camera.DH = su.pitch, uu.camera.gH = su.heading
+               ZG.directionTransitionStart = kG, ZG.directionTransitionEnd = kG + GG.Qr.forcedCameraDirectionTransitionMs, GG.camera.vN = wG.pitch, GG.camera.aN = wG.heading
```

#### 2577. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22771` → after: `L22619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22619) · [Before (L22771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22771)

```diff
-           })), su.e.subscribe("cameraRoll", (Eu => {
+           })), wG.c.subscribe("cameraRoll", (bG => {
```

#### 2578. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22773-L22774` → after: `L22621-L22622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22621-L22622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22621-L22622) · [Before (L22773-L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22773-L22774)

```diff
-               if (uu.sG.cameraRollTransitionMs <= 0) return uu.camera.rc = Eu, ju.rollTransitionFrom = null, ju.rollTransitionTo = null, ju.rollTransitionStart = null, void(ju.rollTransitionEnd = null);
-               ju.rollTransitionFrom = uu.camera.rc, ju.rollTransitionTo = Eu;
+               if (GG.Qr.cameraRollTransitionMs <= 0) return GG.camera.gp = bG, ZG.rollTransitionFrom = null, ZG.rollTransitionTo = null, ZG.rollTransitionStart = null, void(ZG.rollTransitionEnd = null);
+               ZG.rollTransitionFrom = GG.camera.gp, ZG.rollTransitionTo = bG;
```

#### 2579. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22776` → after: `L22624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22624) · [Before (L22776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22776)

```diff
-               ju.rollTransitionStart = su, ju.rollTransitionEnd = su + uu.sG.cameraRollTransitionMs
+               ZG.rollTransitionStart = wG, ZG.rollTransitionEnd = wG + GG.Qr.cameraRollTransitionMs
```

#### 2580. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22778` → after: `L22626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22626) · [Before (L22778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22778)

```diff
-           })), su.e.subscribe("forcedCameraDirectionTransitionMs", (uu => {
+           })), wG.c.subscribe("forcedCameraDirectionTransitionMs", (GG => {
```

#### 2581. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22785` → after: `L22633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22633) · [Before (L22785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22785)

```diff
-           })), su.e.subscribe("cameraRollTransitionMs", (uu => {
+           })), wG.c.subscribe("cameraRollTransitionMs", (GG => {
```

#### 2582. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22792` → after: `L22640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22640) · [Before (L22792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22792)

```diff
-           })), su.e.subscribe("cameraRotationOffset", (uu => {
+           })), wG.c.subscribe("cameraRotationOffset", (GG => {
```

#### 2583. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22794` → after: `L22642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22642) · [Before (L22794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22794)

```diff
-           })), su.e.subscribe("cameraPositionOffset", (uu => {
+           })), wG.c.subscribe("cameraPositionOffset", (GG => {
```

#### 2584. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22807-L22808` → after: `L22655-L22656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22655-L22656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22655-L22656) · [Before (L22807-L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22807-L22808)

```diff
-           }, fu(uu.sG.cameraRotationOffset), Cu(uu.sG.cameraPositionOffset), (0, Uu.onGameReset)((() => {
-             uu.camera.DH = null, uu.camera.gH = null, uu.camera.rc = 0, fu(Xu), Cu(lu), ju.directionTransitionFrom = null, ju.directionTransitionTo = null, ju.directionTransitionStart = null, ju.directionTransitionEnd = null, ju.rollTransitionFrom = null, ju.rollTransitionTo = nu … [truncated]
+           }, YG(GG.Qr.cameraRotationOffset), VG(GG.Qr.cameraPositionOffset), (0, SG.onGameReset)((() => {
+             GG.camera.vN = null, GG.camera.aN = null, GG.camera.gp = 0, YG(yG), VG(kG), ZG.directionTransitionFrom = null, ZG.directionTransitionTo = null, ZG.directionTransitionStart = null, ZG.directionTransitionEnd = null, ZG.rollTransitionFrom = null, ZG.rollTransitionTo = nu … [truncated]
```

#### 2585. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22811` → after: `L22659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22659) · [Before (L22811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22811)

```diff
-         jK: function(uu, Eu) {
+         MI: function(GG, bG) {
```

#### 2586. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22814` → after: `L22662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22662) · [Before (L22814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22814)

```diff
-         hG: function(Eu, ju) {
+         Yz: function(bG, ZG) {
```

#### 2587. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22823` → after: `L22671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22671) · [Before (L22823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22823)

```diff
-             Zu >= 1 ? (uu.camera.DH = ju.pitch, uu.camera.gH = Cu(ju.heading), su.directionTransitionFrom = null, su.directionTransitionTo = null, su.directionTransitionStart = null, su.directionTransitionEnd = null) : (uu.camera.DH = Eu.pitch + (ju.pitch - Eu.pitch) * Xu, uu.cam … [truncated]
+             LG >= 1 ? (GG.camera.vN = ZG.pitch, GG.camera.aN = VG(ZG.heading), wG.directionTransitionFrom = null, wG.directionTransitionTo = null, wG.directionTransitionStart = null, wG.directionTransitionEnd = null) : (GG.camera.vN = bG.pitch + (ZG.pitch - bG.pitch) * yG, GG.cam … [truncated]
```

#### 2588. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22828` → after: `L22676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22676) · [Before (L22828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22828)

```diff
-             Eu >= 1 ? (uu.camera.rc = su.rollTransitionTo, su.rollTransitionFrom = null, su.rollTransitionTo = null, su.rollTransitionStart = null, su.rollTransitionEnd = null) : uu.camera.rc = su.rollTransitionFrom + (su.rollTransitionTo - su.rollTransitionFrom) * ju
+             bG >= 1 ? (GG.camera.gp = wG.rollTransitionTo, wG.rollTransitionFrom = null, wG.rollTransitionTo = null, wG.rollTransitionStart = null, wG.rollTransitionEnd = null) : GG.camera.gp = wG.rollTransitionFrom + (wG.rollTransitionTo - wG.rollTransitionFrom) * ZG
```

#### 2589. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22835` → after: `L22683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22683) · [Before (L22835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22835)

```diff
-       return uu < .5 ? 4 * uu * uu * uu : 1 - Math.pow(-2 * uu + 2, 3) / 2
+       return GG < .5 ? 4 * GG * GG * GG : 1 - Math.pow(-2 * GG + 2, 3) / 2
```

#### 2590. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22847` → after: `L22695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22695) · [Before (L22847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22847)

```diff
-       return Uu > Math.PI ? Uu -= ju : Uu < -Math.PI && (Uu += ju), uu + Uu
+       return SG > Math.PI ? SG -= ZG : SG < -Math.PI && (SG += ZG), GG + SG
```

#### 2591. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22854` → after: `L22702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22702) · [Before (L22854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22854)

```diff
-       }(uu) ? uu : ju;
+       }(GG) ? GG : ZG;
```

#### 2592. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22858` → after: `L22706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22706) · [Before (L22858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22858)

```diff
-   39119: (uu, Eu, ju) => {
+   39176: (GG, bG, ZG) => {
```

#### 2593. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22864-L22865` → after: `L22712-L22713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22712-L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22712-L22713) · [Before (L22864-L22865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22864-L22865)

```diff
-     var su = ju(37482),
-       Uu = ju(38439);
+     var wG = ZG(37429),
+       SG = ZG(38474);
```

#### 2594. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22868` → after: `L22716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22716) · [Before (L22868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22868)

```diff
-         this.mV = null, this.rju = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.HV = void 0
+         this.Ql = null, this.DZG = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.RP = void 0
```

#### 2595. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22877-L22878` → after: `L22725-L22726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22725-L22726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22725-L22726) · [Before (L22877-L22878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22877-L22878)

```diff
-         hG: function(Eu, ju) {
-           for (const Uu of ju) Uu.rju.Qju && ((0, su.pausesOutOfView)(uu, Uu.HV, Uu.mV) ? Uu._posePaused = !0 : qu(uu, Uu))
+         Yz: function(bG, ZG) {
+           for (const SG of ZG) SG.DZG.NZG && ((0, wG.pausesOutOfView)(GG, SG.RP, SG.Ql) ? SG._posePaused = !0 : UG(GG, SG))
```

#### 2596. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22884` → after: `L22732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22732) · [Before (L22884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22884)

```diff
-       const ju = uu.YG.uju(Eu);
+       const ZG = GG.Hr.fZG(bG);
```

#### 2597. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22890` → after: `L22738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22738) · [Before (L22890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22890)

```diff
-       const ju = Eu.HV;
+       const ZG = bG.RP;
```

#### 2598. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22894` → after: `L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22742) · [Before (L22894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22894)

```diff
-       } = uu.YG.getState(ju, "updateWalkingState");
+       } = GG.Hr.getState(ZG, "updateWalkingState");
```

#### 2599. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22897` → after: `L22745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22745) · [Before (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22897)

```diff
-       const Zu = uu.YG.getState(ju, "animator");
+       const LG = GG.Hr.getState(ZG, "animator");
```

#### 2600. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22901` → after: `L22749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22749) · [Before (L22901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22901)

```diff
-   39232: (uu, Eu, ju) => {
+   39303: (GG, bG, ZG) => {
```

#### 2601. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22905-L22909` → after: `L22753-L22757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22753-L22757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22753-L22757) · [Before (L22905-L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22905-L22909)

```diff
-     var su = ju(37194),
-       Uu = ju(24),
-       Zu = ju(38511),
-       Xu = ju(37646),
-       lu = ju(38465);
+     var wG = ZG(37154),
+       SG = ZG(19),
+       LG = ZG(38577),
+       yG = ZG(37587),
+       kG = ZG(38511);
```

#### 2602. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22925` → after: `L22773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22773) · [Before (L22925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22925)

```diff
-         lG: function(Eu, ju) {
+         Kr: function(bG, ZG) {
```

#### 2603. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22927-L22929` → after: `L22775-L22777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22775-L22777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22775-L22777) · [Before (L22927-L22929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22927-L22929)

```diff
-           ju.isAlive = (0, lu.e)("_isAlive", null === (fu = uu.EQ[uu.FQ]) || void 0 === fu || null === (Cu = fu[ju.HV]) || void 0 === Cu ? void 0 : Cu._isAlive), ju._isAliveSub = Uu.h.subscribe(`otherEntitySettingsClientifiedEId|${ju.HV}|_isAlive`, (uu => {
-             ju.isAlive = (0, lu.e)("_isAlive", uu), (0, Zu.updateLocalPlayerHeldItem)()
-           })), ju.addedTime = Date.now(), ju._hasPriorityNametagSub = Uu.h.subscribe(`otherEntitySettingsClientifiedEId|${ju.HV}|hasPriorityNametag`, (uu => {
+           ZG.isAlive = (0, kG.d)("_isAlive", null === (YG = GG.JA[GG.sA]) || void 0 === YG || null === (VG = YG[ZG.RP]) || void 0 === VG ? void 0 : VG._isAlive), ZG._isAliveSub = SG.l.subscribe(`otherEntitySettingsClientifiedEId|${ZG.RP}|_isAlive`, (GG => {
+             ZG.isAlive = (0, kG.d)("_isAlive", GG), (0, LG.updateLocalPlayerHeldItem)()
+           })), ZG.addedTime = Date.now(), ZG._hasPriorityNametagSub = SG.l.subscribe(`otherEntitySettingsClientifiedEId|${ZG.RP}|hasPriorityNametag`, (GG => {
```

#### 2604. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22933` → after: `L22781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22781) · [Before (L22933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22933)

```diff
-             YG: bu
+             Hr: pG
```

#### 2605. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22935` → after: `L22783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22783) · [Before (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22935)

```diff
-           ju.meshEnabledCombinator = new su.b(((su, Zu) => {
+           ZG.meshEnabledCombinator = new wG.e(((wG, LG) => {
```

#### 2606. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22937` → after: `L22785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22785) · [Before (L22937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22937)

```diff
-             (0, Xu.q)(uu, Eu, su);
+             (0, yG.n)(GG, bG, wG);
```

#### 2607. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22939` → after: `L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22787) · [Before (L22939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22939)

```diff
-               Cu = bu.zEu(Eu),
+               VG = pG.VZG(bG),
```

#### 2608. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22945` → after: `L22793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22793) · [Before (L22945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22945)

```diff
-               if (null !== (Ou = null === (Yu = uu.EQ[uu.FQ][ju.HV]) || void 0 === Yu ? void 0 : Yu.hasPriorityNametag) && void 0 !== Ou && Ou)
+               if (null !== (KG = null === (hG = GG.JA[GG.sA][ZG.RP]) || void 0 === hG ? void 0 : hG.hasPriorityNametag) && void 0 !== KG && KG)
```

#### 2609. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22948` → after: `L22796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22796) · [Before (L22948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22948)

```diff
-               (Nu || ju.drawnHidden) && (Eu = !1), (0, Xu.q)(uu, cu, Eu)
+               (QG || ZG.drawnHidden) && (bG = !1), (0, yG.n)(GG, fG, bG)
```

#### 2610. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22952-L22954` → after: `L22800-L22802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22800-L22802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22800-L22802) · [Before (L22952-L22954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22952-L22954)

```diff
-             hu && (hu.forceSetEnabled = !!fu && null, hu.instance.Wk(null !== (Du = hu.forceSetEnabled) && void 0 !== Du ? Du : hu.isEnabled));
-             ju.HV !== uu.FQ && (su ? bu.xuu(Eu, "collideTerrain") || bu.yV(Eu, "collideTerrain") : bu.xuu(Eu, "collideTerrain") && bu.zV(Eu, "collideTerrain")), Eu === uu.FQ && Uu.h.TY("clientPlayerModelVisible", fu)
-           })), bu.getState(Eu, bu.names.nN).enabledCombinator = new su.b
+             dG && (dG.forceSetEnabled = !!YG && null, dG.instance.DW(null !== (JG = dG.forceSetEnabled) && void 0 !== JG ? JG : dG.isEnabled));
+             ZG.RP !== GG.sA && (wG ? pG.SbG(bG, "collideTerrain") || pG.bM(bG, "collideTerrain") : pG.SbG(bG, "collideTerrain") && pG.YM(bG, "collideTerrain")), bG === GG.sA && SG.l.xh("clientPlayerModelVisible", YG)
+           })), pG.getState(bG, pG.names.xQ).enabledCombinator = new wG.e
```

#### 2611. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22956-L22957` → after: `L22804-L22805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22804-L22805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22804-L22805) · [Before (L22956-L22957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22956-L22957)

```diff
-         jK: function(uu, Eu) {
-           Uu.h.unsubscribe(Eu._isAliveSub), Uu.h.unsubscribe(Eu._hasPriorityNametagSub)
+         MI: function(GG, bG) {
+           SG.l.unsubscribe(bG._isAliveSub), SG.l.unsubscribe(bG._hasPriorityNametagSub)
```

#### 2612. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22962` → after: `L22810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22810) · [Before (L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22962)

```diff
-   39241: (uu, Eu, ju) => {
+   39309: (GG, bG, ZG) => {
```

#### 2613. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22966-L22967` → after: `L22814-L22815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22814-L22815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22814-L22815) · [Before (L22966-L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22966-L22967)

```diff
-     var su = ju(38197),
-       Uu = ju(38416);
+     var wG = ZG(38205),
+       SG = ZG(38447);
```

#### 2614. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22980` → after: `L22828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22828) · [Before (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22980)

```diff
-           Uu.d.dropExpired(Date.now())
+           SG.b.dropExpired(Date.now())
```

#### 2615. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22982` → after: `L22830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22830) · [Before (L22982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22982)

```diff
-         hG: function(Eu, ju) {
+         Yz: function(bG, ZG) {
```

#### 2616. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22985` → after: `L22833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22833) · [Before (L22985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22985)

```diff
-             const Eu = uu.YG.GEu(Zu.HV);
+             const bG = GG.Hr.lbG(LG.RP);
```

#### 2617. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22987-L22988` → after: `L22835-L22836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22835-L22836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22835-L22836) · [Before (L22987-L22988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22987-L22988)

```diff
-             const ju = (0, su.h)(Zu.startedAtMs, Zu.endsAtMs, Uu);
-             Eu.mesh.Of.set(ju, ju, ju), Eu.offset[1] = Zu.centreOffsetY + Zu.halfHeight * (ju - su.j)
+             const ZG = (0, wG.g)(LG.startedAtMs, LG.endsAtMs, SG);
+             bG.mesh.nY.set(ZG, ZG, ZG), bG.offset[1] = LG.centreOffsetY + LG.halfHeight * (ZG - wG.k)
```

#### 2618. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22994` → after: `L22842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22842) · [Before (L22994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22994)

```diff
-   39245: (uu, Eu, ju) => {
+   39311: (GG, bG, ZG) => {
```

#### 2619. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L22999-L23000` → after: `L22847-L22848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22847-L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22847-L22848) · [Before (L22999-L23000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L22999-L23000)

```diff
-     var su = ju(202),
-       Uu = ju(366),
+     var wG = ZG(188),
+       SG = ZG(364),
```

#### 2620. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23002-L23004` → after: `L22850-L22852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22850-L22852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22850-L22852) · [Before (L23002-L23004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23002-L23004)

```diff
-       Xu = ju(37194),
-       lu = ju(2893),
-       qu = ju(37472);
+       yG = ZG(37154),
+       kG = ZG(2751),
+       UG = ZG(37422);
```

#### 2621. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23008` → after: `L22856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22856) · [Before (L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23008)

```diff
-       cu = su.e.hO,
+       fG = wG.d.rK,
```

#### 2622. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23024` → after: `L22872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22872) · [Before (L23024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23024)

```diff
-       let Gu = new Float64Array(2 * su.e.maxNumVisibleEntitiesOfSingleType);
+       let oG = new Float64Array(2 * wG.d.maxNumVisibleEntitiesOfSingleType);
```

#### 2623. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23031` → after: `L22879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22879) · [Before (L23031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23031)

```diff
-         const su = `${uu}|${Eu}|${ju}`,
+         const wG = `${GG}|${bG}|${ZG}`,
```

#### 2624. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23049` → after: `L22897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22897) · [Before (L23049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23049)

```diff
-           nl: null,
+           bU: null,
```

#### 2625. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23059-L23062` → after: `L22907-L22910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22907-L22910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22907-L22910) · [Before (L23059-L23062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23059-L23062)

```diff
-         lG: function(ju, su) {
-           if (!su.addMeshComponent || !su.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${su.addMeshComponent} ${su.removeMeshComponent}`);
-           if (su._lastPos = Zu().create(), Zu().copy(su._lastPos, uu.YG.bM(ju)), null !== su.movingHideDist && Uu.add(su), 0 === Eu.size && (Zu().set(wu, 1 / 0, 1 / 0, 1 / 0), Zu().copy(pu, wu)), vu(su), mu(su, su._competesForCap), su.immediatelyUpdate) {
-             ou(su, uu.YG.bM(uu.FQ))
+         Kr: function(ZG, wG) {
+           if (!wG.addMeshComponent || !wG.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${wG.addMeshComponent} ${wG.removeMeshComponent}`);
+           if (wG._lastPos = LG().create(), LG().copy(wG._lastPos, GG.Hr.HJ(ZG)), null !== wG.movingHideDist && SG.add(wG), 0 === bG.size && (LG().set(uG, 1 / 0, 1 / 0, 1 / 0), LG().copy(XG, uG)), aG(wG), vG(wG, wG._competesForCap), wG.immediatelyUpdate) {
+             IG(wG, GG.Hr.HJ(GG.sA))
```

#### 2626. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23065` → after: `L22913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22913) · [Before (L23065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23065)

```diff
-         jK: function(uu, Eu) {
+         MI: function(GG, bG) {
```

#### 2627. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23069` → after: `L22917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22917) · [Before (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23069)

```diff
-           const qu = uu.camera.bM(),
+           const UG = GG.camera.HJ(),
```

#### 2628. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23082` → after: `L22930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22930) · [Before (L23082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23082)

```diff
-                 if (Uu.size < su.e.maxNumVisibleEntitiesOfSingleType) {
+                 if (SG.size < wG.d.maxNumVisibleEntitiesOfSingleType) {
```

#### 2629. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23088-L23089` → after: `L22936-L22937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22936-L22937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22936-L22937) · [Before (L23088-L23089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23088-L23089)

```diff
-                 for (const ju of Uu) Gu[Xu++] = Zu().sqrDist(Eu, uu.YG.bM(ju.HV));
-                 eu.set(ju, hu(Gu, Xu, su.e.maxNumVisibleEntitiesOfSingleType - 1))
+                 for (const ZG of SG) oG[yG++] = LG().sqrDist(bG, GG.Hr.HJ(ZG.RP));
+                 EG.set(ZG, dG(oG, yG, wG.d.maxNumVisibleEntitiesOfSingleType - 1))
```

#### 2630. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23093` → after: `L22941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22941) · [Before (L23093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23093)

```diff
-             const ju = uu.YG.bM(Eu.HV);
+             const ZG = GG.Hr.HJ(bG.RP);
```

#### 2631. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23098` → after: `L22946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22946) · [Before (L23098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23098)

```diff
-           if (!au) uu: for (const uu of ju)
+           if (!WG) GG: for (const GG of ZG)
```

#### 2632. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23112-L23113` → after: `L22960-L22961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22960-L22961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22960-L22961) · [Before (L23112-L23113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23112-L23113)

```diff
-           YG: Uu
-         } = uu, Cu = Eu.HV, bu = Uu.bM(Cu);
+           Hr: SG
+         } = GG, VG = bG.RP, pG = SG.HJ(VG);
```

#### 2633. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23121` → after: `L22969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22969) · [Before (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23121)

```diff
-           Ou = Math.max(cu, null !== (su = Eu.movingHideDist) && void 0 !== su ? su : 0),
+           KG = Math.max(fG, null !== (wG = bG.movingHideDist) && void 0 !== wG ? wG : 0),
```

#### 2634. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23123` → after: `L22971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22971) · [Before (L23123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23123)

```diff
-           hu = Yu && (Eu.displayOutsideLoadedChunk || (0, lu.b)().Zx(Math.floor(bu[0]), Math.floor(bu[1]), Math.floor(bu[2])));
+           dG = hG && (bG.displayOutsideLoadedChunk || (0, kG.e)().zD(Math.floor(pG[0]), Math.floor(pG[1]), Math.floor(pG[2])));
```

#### 2635. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23125` → after: `L22973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22973) · [Before (L23125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23125)

```diff
-         const Du = eu.get(Eu.nl),
+         const JG = EG.get(bG.bU),
```

#### 2636. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23127` → after: `L22975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22975) · [Before (L23127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23127)

```diff
-         Eu.isMeshShown !== gu && (gu ? (Uu.GEu(Cu) || (Eu.addMeshComponent(), (0, qu.j)(uu, Cu)), Eu.addShadow && !Uu.getState(Cu, Uu.names.nN) && (Uu.yV(Cu, Uu.names.nN, {
+         bG.isMeshShown !== rG && (rG ? (SG.lbG(VG) || (bG.addMeshComponent(), (0, UG.m)(GG, VG)), bG.addShadow && !SG.getState(VG, SG.names.xQ) && (SG.bM(VG, SG.names.xQ, {
```

#### 2637. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23129` → after: `L22977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22977) · [Before (L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23129)

```diff
-         }), Uu.getState(Cu, Uu.names.nN).enabledCombinator = new Xu.b)) : (Eu.removeMeshComponent(), Eu.addShadow && Uu.getState(Cu, Uu.names.nN) && Uu.zV(Cu, Uu.names.nN)), Eu.isMeshShown = gu)
+         }), SG.getState(VG, SG.names.xQ).enabledCombinator = new yG.e)) : (bG.removeMeshComponent(), bG.addShadow && SG.getState(VG, SG.names.xQ) && SG.YM(VG, SG.names.xQ)), bG.isMeshShown = rG)
```

#### 2638. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23147-L23149` → after: `L22995-L22997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R22995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L22995-L22997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L22995-L22997) · [Before (L23147-L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23147-L23149)

```diff
-         if (uu._competesForCap = Eu, !uu.nl) return;
-         let ju = Mu.get(uu.nl);
-         Eu ? (ju || (ju = new Set, Mu.set(uu.nl, ju)), ju.add(uu)) : ju && (ju.delete(uu), 0 === ju.size && (Mu.delete(uu.nl), eu.delete(uu.nl)))
+         if (GG._competesForCap = bG, !GG.bU) return;
+         let ZG = zG.get(GG.bU);
+         bG ? (ZG || (ZG = new Set, zG.set(GG.bU, ZG)), ZG.add(GG)) : ZG && (ZG.delete(GG), 0 === ZG.size && (zG.delete(GG.bU), EG.delete(GG.bU)))
```

#### 2639. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23153` → after: `L23001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23001) · [Before (L23153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23153)

```diff
-         let su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu.YG.bM(ju.HV);
+         let wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.Hr.HJ(ZG.RP);
```

#### 2640. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23160` → after: `L23008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23008) · [Before (L23160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23160)

```diff
-         const qu = `${Uu}|${Zu}|${Xu}`,
+         const UG = `${SG}|${LG}|${yG}`,
```

#### 2641. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23225` → after: `L23073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23073) · [Before (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23225)

```diff
-       return Math.max(uu.hideDist, null !== (Eu = uu.movingHideDist) && void 0 !== Eu ? Eu : 0)
+       return Math.max(GG.hideDist, null !== (bG = GG.movingHideDist) && void 0 !== bG ? bG : 0)
```

#### 2642. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23231` → after: `L23079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23079) · [Before (L23231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23231)

```diff
-       return Eu < ju ? ju - Eu : Eu > su ? Eu - su : 0
+       return bG < ZG ? ZG - bG : bG > wG ? bG - wG : 0
```

#### 2643. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23234` → after: `L23082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23082) · [Before (L23234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23234)

```diff
-   39112: (uu, Eu, ju) => {
+   39167: (GG, bG, ZG) => {
```

#### 2644. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23239-L23245` → after: `L23087-L23093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23087-L23093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23087-L23093) · [Before (L23239-L23245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23239-L23245)

```diff
-     var su = ju(37749),
-       Uu = ju(37482),
-       Zu = ju(37554),
-       Xu = ju(37541),
-       lu = ju(37803),
-       qu = ju(38439),
-       fu = ju(38449);
+     var wG = ZG(37703),
+       SG = ZG(37429),
+       LG = ZG(37503),
+       yG = ZG(37491),
+       kG = ZG(37763),
+       UG = ZG(38474),
+       YG = ZG(38488);
```

#### 2645. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23252-L23253` → after: `L23100-L23101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23100-L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23100-L23101) · [Before (L23252-L23253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23252-L23253)

```diff
-           mV: null,
-           rju: null,
+           Ql: null,
+           DZG: null,
```

#### 2646. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23269-L23270` → after: `L23117-L23118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23117-L23118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23117-L23118) · [Before (L23269-L23270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23269-L23270)

```diff
-         hG: function(Eu, ju) {
-           for (const su of ju) su.rju.Qju && ((0, Uu.pausesOutOfView)(uu, su.HV, su.mV) ? (su._posePaused = !0, cu(uu, su, Eu)) : Ou(uu, su, Eu))
+         Yz: function(bG, ZG) {
+           for (const wG of ZG) wG.DZG.NZG && ((0, SG.pausesOutOfView)(GG, wG.RP, wG.Ql) ? (wG._posePaused = !0, fG(GG, wG, bG)) : KG(GG, wG, bG))
```

#### 2647. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23276` → after: `L23124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23124) · [Before (L23276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23276)

```diff
-       const ju = uu.YG.REu(Eu);
+       const ZG = GG.Hr.pZG(bG);
```

#### 2648. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23281` → after: `L23129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23129) · [Before (L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23281)

```diff
-       const su = uu.YG.PEu(Eu.HV);
+       const wG = GG.Hr.qbG(bG.RP);
```

#### 2649. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23284` → after: `L23132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23132) · [Before (L23284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23284)

```diff
-       (0, fu.b)(uu, Eu.HV) || "gliding" === Uu || "driving" === Uu || (gu(uu, Eu) ? Mu(uu, Eu, su) : "zombie" !== Uu && eu(uu, Eu, su, Nu(uu, Eu), ju))
+       (0, YG.d)(GG, bG.RP) || "gliding" === SG || "driving" === SG || (rG(GG, bG) ? zG(GG, bG, wG) : "zombie" !== SG && EG(GG, bG, wG, QG(GG, bG), ZG))
```

#### 2650. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23288` → after: `L23136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23136) · [Before (L23288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23288)

```diff
-       return uu.YG.getState(Eu.HV, "animator")
+       return GG.Hr.getState(bG.RP, "animator")
```

#### 2651. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23294` → after: `L23142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23142) · [Before (L23294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23294)

```diff
-       const Uu = uu.YG.PEu(Eu.HV),
+       const SG = GG.Hr.qbG(bG.RP),
```

#### 2652. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23298-L23299` → after: `L23146-L23147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23146-L23147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23146-L23147) · [Before (L23298-L23299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23298-L23299)

```diff
-         bu = Eu.HV === uu.FQ ? lu.d.getPlayerFacingPitch(uu) : Uu.cameraPitch,
-         cu = null === (su = uu.YG.nEu(Eu.HV)) || void 0 === su ? void 0 : su.nG,
+         pG = bG.RP === GG.sA ? kG.d.getPlayerFacingPitch(GG) : SG.cameraPitch,
+         fG = null === (wG = GG.Hr.UZG(bG.RP)) || void 0 === wG ? void 0 : wG.qE,
```

#### 2653. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23301` → after: `L23149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23149) · [Before (L23301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23301)

```diff
-         hu = (0, fu.b)(uu, Eu.HV),
+         dG = (0, YG.d)(GG, bG.RP),
```

#### 2654. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23303` → after: `L23151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23151) · [Before (L23303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23303)

```diff
-         ou = (0, qu.getRigController)(uu, Eu.HV),
+         IG = (0, UG.getRigController)(GG, bG.RP),
```

#### 2655. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23331` → after: `L23179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23179) · [Before (L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23331)

```diff
-         fu = lu ? uu.YG.getState(Eu.HV, "updateWalkingState").walkingAngle : 0;
+         YG = kG ? GG.Hr.getState(bG.RP, "updateWalkingState").walkingAngle : 0;
```

#### 2656. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23344` → after: `L23192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23192) · [Before (L23344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23344)

```diff
-       return (0, qu.rigHasAction)(uu, Eu.HV, su.n)
+       return (0, UG.rigHasAction)(GG, bG.RP, wG.q)
```

#### 2657. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23348` → after: `L23196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23196) · [Before (L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23348)

```diff
-       (!Eu.consumedNetworkArmSwing || ju.armSwinging && !(0, qu.rigActionPlaying)(uu, Eu.HV, su.n)) && (0, qu.playRigAction)(uu, Eu.HV, su.n), Eu.consumedNetworkArmSwing = !0, Eu._queuedSwing = !1
+       (!bG.consumedNetworkArmSwing || ZG.armSwinging && !(0, UG.rigActionPlaying)(GG, bG.RP, wG.q)) && (0, UG.playRigAction)(GG, bG.RP, wG.q), bG.consumedNetworkArmSwing = !0, bG._queuedSwing = !1
```

#### 2658. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23353` → after: `L23201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23201) · [Before (L23353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23353)

```diff
-       const lu = uu.euu,
+       const kG = GG.lGG,
```

#### 2659. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23356` → after: `L23204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23204) · [Before (L23356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23356)

```diff
-           UU: fu
+           tw: YG
```

#### 2660. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23358` → after: `L23206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23206) · [Before (L23358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23358)

```diff
-       ju.armSwinging || !Eu.consumedNetworkArmSwing ? (Eu.consumedNetworkArmSwing = !0, qu >= fu ? (Zu = Uu / fu, Eu._queuedSwing = !1) : qu >= .65 * fu && !Eu._queuedSwing && (Eu._queuedSwing = !0)) : Eu._queuedSwing && qu >= fu && (Zu = Math.min(Uu, qu - fu) / fu, Eu._queuedSwi … [truncated]
+       ZG.armSwinging || !bG.consumedNetworkArmSwing ? (bG.consumedNetworkArmSwing = !0, UG >= YG ? (LG = SG / YG, bG._queuedSwing = !1) : UG >= .65 * YG && !bG._queuedSwing && (bG._queuedSwing = !0)) : bG._queuedSwing && UG >= YG && (LG = Math.min(SG, UG - YG) / YG, bG._queuedSwi … [truncated]
```

#### 2661. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23372-L23373` → after: `L23220-L23221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23220-L23221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23220-L23221) · [Before (L23372-L23373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23372-L23373)

```diff
-       const ju = uu.YG.PEu(Eu.HV),
-         su = Eu.HV === uu.FQ ? lu.d.getPlayerFacingPitch(uu) : ju.cameraPitch,
+       const ZG = GG.Hr.qbG(bG.RP),
+         wG = bG.RP === GG.sA ? kG.d.getPlayerFacingPitch(GG) : ZG.cameraPitch,
```

#### 2662. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23381` → after: `L23229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23229) · [Before (L23381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23381)

```diff
-       } = uu.YG.getState(Eu.HV, "updateWalkingState"), Uu = Nu(uu, Eu);
+       } = GG.Hr.getState(bG.RP, "updateWalkingState"), SG = QG(GG, bG);
```

#### 2663. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23392-L23394` → after: `L23240-L23242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23240-L23242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23240-L23242) · [Before (L23392-L23394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23392-L23394)

```diff
-     const Pu = (0, Zu.d)({
-       UU: 250,
-       XU: {
+     const mG = (0, LG.i)({
+       tw: 250,
+       Nw: {
```

#### 2664. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23399` → after: `L23247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23247) · [Before (L23399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23399)

```diff
-               fU: "catmull-rom-spline",
+               Bw: "catmull-rom-spline",
```

#### 2665. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23405` → after: `L23253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23253) · [Before (L23405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23405)

```diff
-               fU: "catmull-rom-spline",
+               Bw: "catmull-rom-spline",
```

#### 2666. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23411` → after: `L23259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23259) · [Before (L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23411)

```diff
-               fU: "catmull-rom-spline",
+               Bw: "catmull-rom-spline",
```

#### 2667. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23417` → after: `L23265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23265) · [Before (L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23417)

```diff
-               fU: "catmull-rom-spline",
+               Bw: "catmull-rom-spline",
```

#### 2668. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23423` → after: `L23271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23271) · [Before (L23423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23423)

```diff
-               fU: "catmull-rom-spline",
+               Bw: "catmull-rom-spline",
```

#### 2669. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23431` → after: `L23279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23279) · [Before (L23431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23431)

```diff
-   39252: (uu, Eu, ju) => {
+   39315: (GG, bG, ZG) => {
```

#### 2670. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23435` → after: `L23283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23283) · [Before (L23435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23435)

```diff
-     var su = ju(2893);
+     var wG = ZG(2751);
```

#### 2671. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23447` → after: `L23295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23295) · [Before (L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23447)

```diff
-         lG: function(uu, ju) {
+         Kr: function(GG, ZG) {
```

#### 2672. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23456-L23457` → after: `L23304-L23305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23304-L23305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23304-L23305) · [Before (L23456-L23457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23456-L23457)

```diff
-         const ju = uu.YG.bM(Eu.HV),
-           Uu = (0, su.b)().Zx(ju[0], ju[1], ju[2]);
+         const ZG = GG.Hr.HJ(bG.RP),
+           SG = (0, wG.e)().zD(ZG[0], ZG[1], ZG[2]);
```

#### 2673. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23462` → after: `L23310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23310) · [Before (L23462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23462)

```diff
-   39153: (uu, Eu, ju) => {
+   39200: (GG, bG, ZG) => {
```

#### 2674. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23467-L23474` → after: `L23315-L23322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23315-L23322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23315-L23322) · [Before (L23467-L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23467-L23474)

```diff
-     var su = ju(37671),
-       Uu = ju(37162),
-       Zu = ju(37488),
-       Xu = ju(38298),
-       lu = ju(37841);
-     const qu = Zu.dO.Up(),
-       fu = new Zu.dO(0, -.5, .5),
-       Cu = new Zu.dO(.16, .01, .1).scaleInPlace(1.4),
+     var wG = ZG(37618),
+       SG = ZG(37122),
+       LG = ZG(37432),
+       yG = ZG(38304),
+       kG = ZG(37816);
+     const UG = LG.mK.Up(),
+       YG = new LG.mK(0, -.5, .5),
+       VG = new LG.mK(.16, .01, .1).scaleInPlace(1.4),
```

#### 2675. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23501-L23503` → after: `L23349-L23351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23349-L23351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23349-L23351) · [Before (L23501-L23503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23501-L23503)

```diff
-         lG: function(Eu, ju) {
-           if (ju._targetEId = (0, Uu.d)(ju.lineToEId), !uu.YG.wT(ju.HV)) return console.warn(`Skipping line from entity ${ju.HV}, which has no position`), void uu.YG.zV(ju.HV, "lineToEntity");
-           ju._thisPos = Zu.dO.Zero(), ju._targetPos = Zu.dO.Zero(), ju._forward = Zu.dO.Zero(), ju._right = Zu.dO.Zero(), ju._up = Zu.dO.Zero(), ju._quat = Zu.Quaternion.Zero(), ju._displacement = Zu.dO.Zero(), ju._cameraOffset = Zu.dO.Zero(), ju._initialCameraOffset = Zu.dO.Zero … [truncated]
+         Kr: function(bG, ZG) {
+           if (ZG._targetEId = (0, SG.d)(ZG.lineToEId), !GG.Hr.kN(ZG.RP)) return console.warn(`Skipping line from entity ${ZG.RP}, which has no position`), void GG.Hr.YM(ZG.RP, "lineToEntity");
+           ZG._thisPos = LG.mK.Zero(), ZG._targetPos = LG.mK.Zero(), ZG._forward = LG.mK.Zero(), ZG._right = LG.mK.Zero(), ZG._up = LG.mK.Zero(), ZG._quat = LG.Quaternion.Zero(), ZG._displacement = LG.mK.Zero(), ZG._cameraOffset = LG.mK.Zero(), ZG._initialCameraOffset = LG.mK.Zero … [truncated]
```

#### 2676. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23514` → after: `L23362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23362) · [Before (L23514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23514)

```diff
-           }()), ju._line.color = cu, ju._line.VY = !1, uu.tO.QY(ju._line)
+           }()), ZG._line.color = fG, ZG._line.qh = !1, GG.HK.gh(ZG._line)
```

#### 2677. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23516` → after: `L23364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23364) · [Before (L23516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23516)

```diff
-         jK: function(uu, Eu) {
+         MI: function(GG, bG) {
```

#### 2678. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23519` → after: `L23367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23367) · [Before (L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23519)

```diff
-         hG: function(Eu, ju) {
+         Yz: function(bG, ZG) {
```

#### 2679. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23526-L23529` → after: `L23374-L23377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23374-L23377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23374-L23377) · [Before (L23526-L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23526-L23529)

```diff
-       const ju = uu.YG.wT(Eu._targetEId);
-       if (!ju) return Eu._line.Wk(!1), void(Eu._enabled = null);
-       const su = Eu._thisPos.sju(uu.YG.wT(Eu.HV).xH);
-       (0, lu.o)(Eu._line, su.x, su.y, su.z);
+       const ZG = GG.Hr.kN(bG._targetEId);
+       if (!ZG) return bG._line.DW(!1), void(bG._enabled = null);
+       const wG = bG._thisPos.hZG(GG.Hr.kN(bG.RP).Zx);
+       (0, kG.v)(bG._line, wG.x, wG.y, wG.z);
```

#### 2680. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23533-L23535` → after: `L23381-L23383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23381-L23383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23381-L23383) · [Before (L23533-L23535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23533-L23535)

```diff
-               Xu = uu.YG.REu(Eu._targetEId);
-             if (!Xu) return Uu.sju(su.xH), Mu.NON_HUMANOID;
-             const lu = uu.tO.oV,
+               yG = GG.Hr.pZG(bG._targetEId);
+             if (!yG) return SG.hZG(wG.Zx), zG.NON_HUMANOID;
+             const kG = GG.HK.Vl,
```

#### 2681. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23537` → after: `L23385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23385) · [Before (L23537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23537)

```diff
-                 mV: qu
+                 Ql: UG
```

#### 2682. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23542` → after: `L23390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23390) · [Before (L23542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23542)

```diff
-               return Zu.dO.TransformCoordinatesToRef(fu, uu, Uu), Mu.THIRD_PERSON_HUMANOID
+               return LG.mK.TransformCoordinatesToRef(YG, GG, SG), zG.THIRD_PERSON_HUMANOID
```

#### 2683. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23544-L23547` → after: `L23392-L23395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23392-L23395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23392-L23395) · [Before (L23544-L23547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23544-L23547)

```diff
-             if (Eu._targetEId !== uu.FQ) return Uu.sju(su.xH), Uu.y += .8, Mu.THIRD_PERSON_HUMANOID;
-             const cu = uu.camera.pitch + uu.camera.tY[0],
-               Nu = uu.camera.heading + uu.camera.tY[1],
-               Ou = uu.camera.rc + uu.camera.tY[2];
+             if (bG._targetEId !== GG.sA) return SG.hZG(wG.Zx), SG.y += .8, zG.THIRD_PERSON_HUMANOID;
+             const fG = GG.camera.pitch + GG.camera.Of[0],
+               QG = GG.camera.heading + GG.camera.Of[1],
+               KG = GG.camera.gp + GG.camera.Of[2];
```

#### 2684. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23549` → after: `L23397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23397) · [Before (L23549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23549)

```diff
-             const Yu = uu.YG.wT(uu.camera.eT).xH;
+             const hG = GG.Hr.kN(GG.camera.ZN).Zx;
```

#### 2685. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23553` → after: `L23401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23401) · [Before (L23553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23553)

```diff
-           Eu._targetPos.subtractToRef(ju, Eu._displacement), null === Eu._enabled ? Uu === Mu.FIRST_PERSON_HUMANOID ? (Eu._initialCameraOffset.yJ(Eu._cameraOffset), Eu._enabled = !1, Eu._line.Wk(!1)) : (Eu._enabled = !0, Eu._line.Wk(!0)) : !1 !== Eu._enabled || Uu === Mu.FIRST_PE … [truncated]
+           bG._targetPos.subtractToRef(ZG, bG._displacement), null === bG._enabled ? SG === zG.FIRST_PERSON_HUMANOID ? (bG._initialCameraOffset.oW(bG._cameraOffset), bG._enabled = !1, bG._line.DW(!1)) : (bG._enabled = !0, bG._line.DW(!0)) : !1 !== bG._enabled || SG === zG.FIRST_PE … [truncated]
```

#### 2686. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23558-L23559` → after: `L23406-L23407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23406-L23407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23406-L23407) · [Before (L23558-L23559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23558-L23559)

```diff
-         hu = Zu.dO.CrossToRef(qu, cu, Eu._right).normalizeToRef(Eu._right),
-         Du = Zu.dO.CrossToRef(cu, hu, Eu._up),
+         dG = LG.mK.CrossToRef(UG, fG, bG._right).normalizeToRef(bG._right),
+         JG = LG.mK.CrossToRef(fG, dG, bG._up),
```

#### 2687. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23561` → after: `L23409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23409) · [Before (L23561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23561)

```diff
-       (0, lu.p)(Eu._line, gu.x, gu.y, gu.z, gu.w);
+       (0, kG.z)(bG._line, rG.x, rG.y, rG.z, rG.w);
```

#### 2688. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23563` → after: `L23411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23411) · [Before (L23563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23563)

```diff
-       Eu._line.Of.set(1, eu, Xu)
+       bG._line.nY.set(1, EG, yG)
```

#### 2689. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23569` → after: `L23417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23417) · [Before (L23569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23569)

```diff
-   39258: (uu, Eu, ju) => {
+   39320: (GG, bG, ZG) => {
```

#### 2690. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23574-L23576` → after: `L23422-L23424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23422-L23424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23422-L23424) · [Before (L23574-L23576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23574-L23576)

```diff
-     var su = ju(3879),
-       Uu = ju(37194),
-       Zu = ju(366),
+     var wG = ZG(3683),
+       SG = ZG(37154),
+       LG = ZG(364),
```

#### 2691. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23578-L23586` → after: `L23426-L23434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23426-L23434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23426-L23434) · [Before (L23578-L23586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23578-L23586)

```diff
-       lu = ju(24),
-       qu = ju(2011),
-       fu = ju(1955),
-       Cu = ju(6677),
-       bu = ju(22),
-       cu = ju(785),
-       Nu = ju(2893),
-       Ou = ju(1278),
-       Yu = ju(349);
+       kG = ZG(19),
+       UG = ZG(1923),
+       YG = ZG(1873),
+       VG = ZG(6488),
+       pG = ZG(17),
+       fG = ZG(717),
+       QG = ZG(2751),
+       KG = ZG(1177),
+       hG = ZG(352);
```

#### 2692. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23591` → after: `L23439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23439) · [Before (L23591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23591)

```diff
-       return (0, cu.k)(bu.d.get("clientEscMenuOptions").cameraFOV)
+       return (0, fG.k)(pG.e.get("clientEscMenuOptions").cameraFOV)
```

#### 2693. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23596-L23597` → after: `L23444-L23445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23444-L23445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23444-L23445) · [Before (L23596-L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23596-L23597)

```diff
-       return qu.e.subscribe("movementBasedFovScale", (uu => {
-         Eu = "number" === typeof uu && isFinite(uu) ? uu : 1
+       return UG.c.subscribe("movementBasedFovScale", (GG => {
+         bG = "number" === typeof GG && isFinite(GG) ? GG : 1
```

#### 2694. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23600-L23602` → after: `L23448-L23450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23448-L23450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23448-L23450) · [Before (L23600-L23602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23600-L23602)

```diff
-       })), lu.h.subscribe(`entityScale|${uu.FQ}`, (function() {
-         const Eu = uu.YG.Cju(uu.camera.eT);
-         Eu && ((0, Nu.b)().removeFromEyeHeightCache(uu.FQ), Eu.offset[1] = (0, Nu.b)().getLifeformEyeHeight(uu.FQ))
+       })), kG.l.subscribe(`entityScale|${GG.sA}`, (function() {
+         const bG = GG.Hr.XZG(GG.camera.ZN);
+         bG && ((0, QG.e)().removeFromEyeHeightCache(GG.sA), bG.offset[1] = (0, QG.e)().getLifeformEyeHeight(GG.sA))
```

#### 2695. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23615` → after: `L23463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23463) · [Before (L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23615)

```diff
-         hG: function(ju, su) {
+         Yz: function(ZG, wG) {
```

#### 2696. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23617-L23621` → after: `L23465-L23469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23465-L23469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23465-L23469) · [Before (L23617-L23621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23617-L23621)

```diff
-             const su = uu.YG.Cju(uu.camera.eT),
-               Zu = uu.YG.getState(Uu.HV, "movement"),
-               lu = uu.YG.qEu(Uu.HV).physicsState,
-               qu = uu.YG.SF(Uu.HV);
-             Xu().set(hu, qu.RY[0], lu.type === Cu.v.GLIDER ? qu.RY[1] : 0, qu.RY[2]);
+             const wG = GG.Hr.XZG(GG.camera.ZN),
+               LG = GG.Hr.getState(SG.RP, "movement"),
+               kG = GG.Hr.EbG(SG.RP).physicsState,
+               UG = GG.Hr.qT(SG.RP);
+             yG().set(dG, UG.Sd[0], kG.type === VG.q.GLIDER ? UG.Sd[1] : 0, UG.Sd[2]);
```

#### 2697. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23623-L23629` → after: `L23471-L23477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23471-L23477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23471-L23477) · [Before (L23623-L23629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23623-L23629)

```diff
-               Mu = 4 * (Zu._flying ? uu.sG.flySpeedMultiplier : 1);
-             let eu = cu.j;
-             gu > Mu && (eu += Math.min(.033 * (gu - 4), .5) * Eu), eu *= Uu.fovMultiplier.getTotalMultipliedVal(), Uu.zoomKeyPressed && uu.sG.canUseZoomKey && (eu *= .2), eu *= bu.d.get("clientEscMenuOptions").cameraFOV / 100, eu = Math.min(eu, cu.g), Uu.movementBasedFov = Uu.mov … [truncated]
-             const Gu = (0, Nu.b)().getLifeformEyeHeight(Uu.HV);
-             if (Du[1] += Gu, !1 === bu.d.get("clientEscMenuOptions").disableBobbing) {
-               const Eu = (0, Nu.b)().getIsStoodOnBlock(Uu.HV);
-               0 === gu || !1 === Eu || 0 !== uu.camera.aT ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += ju / (140 - 2 * (0, fu.c)(gu, 1, 100));
+               zG = 4 * (LG._flying ? GG.Qr.flySpeedMultiplier : 1);
+             let EG = fG.g;
+             rG > zG && (EG += Math.min(.033 * (rG - 4), .5) * bG), EG *= SG.fovMultiplier.getTotalMultipliedVal(), SG.zoomKeyPressed && GG.Qr.canUseZoomKey && (EG *= .2), EG *= pG.e.get("clientEscMenuOptions").cameraFOV / 100, EG = Math.min(EG, fG.d), SG.movementBasedFov = SG.mov … [truncated]
+             const oG = (0, QG.e)().getLifeformEyeHeight(SG.RP);
+             if (JG[1] += oG, !1 === pG.e.get("clientEscMenuOptions").disableBobbing) {
+               const bG = (0, QG.e)().getIsStoodOnBlock(SG.RP);
+               0 === rG || !1 === bG || 0 !== GG.camera.pN ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += ZG / (140 - 2 * (0, YG.d)(rG, 1, 100));
```

#### 2698. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23631` → after: `L23479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23479) · [Before (L23631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23631)

```diff
-               this.state.bobbleValue = (0, Ou.vb)(this.state.bobbleValue, su, .1);
+               this.state.bobbleValue = (0, KG.Ab)(this.state.bobbleValue, wG, .1);
```

#### 2699. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23635-L23636` → after: `L23483-L23484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23483-L23484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23483-L23484) · [Before (L23635-L23636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23635-L23636)

```diff
-             const pu = (0, Nu.b)().sA(Uu.HV),
-               wu = Yu.b.clamp(pu / 3 * .08, .04, 1);
+             const XG = (0, QG.e)().Ix(SG.RP),
+               uG = hG.c.clamp(XG / 3 * .08, .04, 1);
```

#### 2700. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23638` → after: `L23486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23486) · [Before (L23638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23638)

```diff
-               for (let uu = 0; uu < 3; uu++) su.offset[uu] = (0, Ou.vb)(su.offset[uu], Du[uu], wu);
+               for (let GG = 0; GG < 3; GG++) wG.offset[GG] = (0, KG.Ab)(wG.offset[GG], JG[GG], uG);
```

#### 2701. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23645` → after: `L23493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23493) · [Before (L23645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23645)

```diff
-   39263: (uu, Eu, ju) => {
+   39325: (GG, bG, ZG) => {
```

#### 2702. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23649-L23650` → after: `L23497-L23498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23497-L23498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23497-L23498) · [Before (L23649-L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23649-L23650)

```diff
-     var su = ju(5026),
-       Uu = ju(202);
+     var wG = ZG(4883),
+       SG = ZG(188);
```

#### 2703. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23676-L23679` → after: `L23524-L23527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23524-L23527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23524-L23527) · [Before (L23676-L23679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23676-L23679)

```diff
-           const fu = uu.YG.bM(uu.FQ),
-             Cu = uu.camera.Gy(),
-             bu = uu.camera.fn();
-           Eu[0] = fu[2], Eu[1] = fu[1] + Uu.e.Ih * Uu.e.playerEyeToHeightRatio, Eu[2] = fu[0], Eu[3] = Cu[2], Eu[4] = Cu[1], Eu[5] = Cu[0], Eu[6] = bu[2], Eu[7] = bu[1], Eu[8] = bu[0];
+           const YG = GG.Hr.HJ(GG.sA),
+             VG = GG.camera.zB(),
+             pG = GG.camera.yB();
+           bG[0] = YG[2], bG[1] = YG[1] + SG.d.td * SG.d.playerEyeToHeightRatio, bG[2] = YG[0], bG[3] = VG[2], bG[4] = VG[1], bG[5] = VG[0], bG[6] = pG[2], bG[7] = pG[1], bG[8] = pG[0];
```

#### 2704. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23685` → after: `L23533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23533) · [Before (L23685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23685)

```diff
-         hG: null
+         Yz: null
```

#### 2705. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23689` → after: `L23537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23537) · [Before (L23689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23689)

```diff
-   39265: (uu, Eu, ju) => {
+   39333: (GG, bG, ZG) => {
```

#### 2706. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23693` → after: `L23541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23541) · [Before (L23693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23693)

```diff
-     var su = ju(366),
+     var wG = ZG(364),
```

#### 2707. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23695` → after: `L23543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23543) · [Before (L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23695)

```diff
-       Zu = ju(24);
+       LG = ZG(19);
```

#### 2708. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23712-L23713` → after: `L23560-L23561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23560-L23561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23560-L23561) · [Before (L23712-L23713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23712-L23713)

```diff
-         lG: function(Eu, ju) {
-           ju.thisPlayerTeleportSub = Zu.h.subscribe(`otherPlayerTeleported|${Eu}`, (Eu => {
+         Kr: function(bG, ZG) {
+           ZG.thisPlayerTeleportSub = LG.l.subscribe(`otherPlayerTeleported|${bG}`, (bG => {
```

#### 2709. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23717` → after: `L23565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23565) · [Before (L23717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23717)

```diff
-             const Uu = uu.YG.bM(uu.FQ);
+             const SG = GG.Hr.HJ(GG.sA);
```

#### 2710. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23719` → after: `L23567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23567) · [Before (L23719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23719)

```diff
-           })), ju.localPlayerTeleportSub = Zu.h.subscribe("localPlayerTeleported", (su => {
+           })), ZG.localPlayerTeleportSub = LG.l.subscribe("localPlayerTeleported", (wG => {
```

#### 2711. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23725` → after: `L23573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23573) · [Before (L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23725)

```diff
-             const Xu = uu.YG.getState(Eu, "smoothToServerPos");
+             const yG = GG.Hr.getState(bG, "smoothToServerPos");
```

#### 2712. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23729-L23730` → after: `L23577-L23578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23577-L23578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23577-L23578) · [Before (L23729-L23730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23729-L23730)

```diff
-         jK: function(Eu, ju) {
-           Zu.h.unsubscribe(ju.thisPlayerTeleportSub), Zu.h.unsubscribe(ju.localPlayerTeleportSub);
+         MI: function(bG, ZG) {
+           LG.l.unsubscribe(ZG.thisPlayerTeleportSub), LG.l.unsubscribe(ZG.localPlayerTeleportSub);
```

#### 2713. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23732-L23733` → after: `L23580-L23581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23580-L23581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23580-L23581) · [Before (L23732-L23733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23732-L23733)

```diff
-             YG: su
-           } = uu, Uu = su.AEu(Eu);
+             Hr: wG
+           } = GG, SG = wG.kZG(bG);
```

#### 2714. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23735` → after: `L23583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23583) · [Before (L23735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23735)

```diff
-           const Xu = su.getState(Eu, su.names.nN);
+           const yG = wG.getState(bG, wG.names.xQ);
```

#### 2715. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23739` → after: `L23587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23587) · [Before (L23739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23739)

```diff
-           const su = uu.YG.bM(uu.FQ);
+           const wG = GG.Hr.HJ(GG.sA);
```

#### 2716. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23746` → after: `L23594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23594) · [Before (L23746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23746)

```diff
-             const Eu = uu.YG.getState(Uu.HV, "smoothToServerPos");
+             const bG = GG.Hr.getState(SG.RP, "smoothToServerPos");
```

#### 2717. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23757-L23758` → after: `L23605-L23606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23605-L23606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23605-L23606) · [Before (L23757-L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23757-L23758)

```diff
-         YG: su
-       } = uu, Uu = su.AEu(Eu.HV);
+         Hr: wG
+       } = GG, SG = wG.kZG(bG.RP);
```

#### 2718. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23760` → after: `L23608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23608) · [Before (L23760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23760)

```diff
-       const Zu = su.getState(Eu.HV, su.names.nN);
+       const LG = wG.getState(bG.RP, wG.names.xQ);
```

#### 2719. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23775-L23776` → after: `L23623-L23624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23623-L23624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23623-L23624) · [Before (L23775-L23776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23775-L23776)

```diff
-       const Uu = null === (ju = uu.YG.PEu(uu.FQ)) || void 0 === ju ? void 0 : ju.ridingVehicleEId;
-       return !!Uu && Uu === (null === (su = uu.YG.PEu(Eu.HV)) || void 0 === su ? void 0 : su.ridingVehicleEId)
+       const SG = null === (ZG = GG.Hr.qbG(GG.sA)) || void 0 === ZG ? void 0 : ZG.ridingVehicleEId;
+       return !!SG && SG === (null === (wG = GG.Hr.qbG(bG.RP)) || void 0 === wG ? void 0 : wG.ridingVehicleEId)
```

#### 2720. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23787` → after: `L23635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23635) · [Before (L23787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23787)

```diff
-   39267: (uu, Eu, ju) => {
+   39337: (GG, bG, ZG) => {
```

#### 2721. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23793` → after: `L23641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23641) · [Before (L23793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23793)

```diff
-     var su = ju(366),
+     var wG = ZG(364),
```

#### 2722. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23795-L23800` → after: `L23643-L23648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23643-L23648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23643-L23648) · [Before (L23795-L23800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23795-L23800)

```diff
-       Zu = ju(37151),
-       Xu = ju(37145),
-       lu = ju(9409),
-       qu = ju(2893),
-       fu = ju(38368),
-       Cu = ju(38439);
+       LG = ZG(37105),
+       yG = ZG(37102),
+       kG = ZG(9249),
+       UG = ZG(2751),
+       YG = ZG(38399),
+       VG = ZG(38474);
```

#### 2723. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23813` → after: `L23661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23661) · [Before (L23813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23813)

```diff
-         lG: (uu, Eu) => {
+         Kr: (GG, bG) => {
```

#### 2724. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23816` → after: `L23664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23664) · [Before (L23816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23816)

```diff
-         jK: null,
+         MI: null,
```

#### 2725. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23818` → after: `L23666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23666) · [Before (L23818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23818)

```diff
-           const su = (0, qu.b)();
+           const wG = (0, UG.e)();
```

#### 2726. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23820-L23821` → after: `L23668-L23669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23668-L23669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23668-L23669) · [Before (L23820-L23821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23820-L23821)

```diff
-             if (!uu.YG.AEu(qu.HV).isAlive) continue;
-             const Eu = uu.YG.qEu(qu.HV);
+             if (!GG.Hr.kZG(UG.RP).isAlive) continue;
+             const bG = GG.Hr.EbG(UG.RP);
```

#### 2727. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23824-L23826` → after: `L23672-L23674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23672-L23674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23672-L23674) · [Before (L23824-L23826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23824-L23826)

```diff
-             if (uu.bloxd.getResolvedPhysicsSettings(qu.HV, ju).disableFootstepSounds) continue;
-             const cu = uu.YG.bM(qu.HV);
-             let Ou = su.zD(Math.floor(cu[0]), Math.ceil(cu[1]) - 1, Math.floor(cu[2]));
+             if (GG.bloxd.getResolvedPhysicsSettings(UG.RP, ZG).disableFootstepSounds) continue;
+             const fG = GG.Hr.HJ(UG.RP);
+             let KG = wG.qJ(Math.floor(fG[0]), Math.ceil(fG[1]) - 1, Math.floor(fG[2]));
```

#### 2728. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23831` → after: `L23679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23679) · [Before (L23831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23831)

```diff
-             const Yu = Uu().LX(qu.lastPos, cu);
+             const hG = SG().ey(UG.lastPos, fG);
```

#### 2729. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23833` → after: `L23681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23681) · [Before (L23833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23833)

```diff
-             const hu = (0, Cu.getRigFootfallPhase)(uu, qu.HV);
+             const dG = (0, VG.getRigFootfallPhase)(GG, UG.RP);
```

#### 2730. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23835-L23838` → after: `L23683-L23686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23683-L23686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23683-L23686) · [Before (L23835-L23838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23835-L23838)

```diff
-             const Du = Number.isNaN(hu) ? qu.distSinceLastSound > bu : qu.stepPending;
-             if (Eu.isOnGround() && 0 !== Ou && (Du && !lu.f[Ou].XN)) {
-               const uu = (0, Zu.e)(`step_${(0,fu.e)(Ou,!1)}`);
-               Xu.e.play(uu, .15), qu.distSinceLastSound = 0, qu.stepPending = !1
+             const JG = Number.isNaN(dG) ? UG.distSinceLastSound > pG : UG.stepPending;
+             if (bG.isOnGround() && 0 !== KG && (JG && !kG.l[KG].UQ)) {
+               const GG = (0, LG.g)(`step_${(0,YG.d)(KG,!1)}`);
+               yG.c.play(GG, .15), UG.distSinceLastSound = 0, UG.stepPending = !1
```

#### 2731. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23851` → after: `L23699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23699) · [Before (L23851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23851)

```diff
-   39276: (uu, Eu, ju) => {
+   39341: (GG, bG, ZG) => {
```

#### 2732. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23857-L23858` → after: `L23705-L23706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23705-L23706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23705-L23706) · [Before (L23857-L23858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23857-L23858)

```diff
-         lG: function(uu, Eu) {},
-         jK: function(uu, Eu) {},
+         Kr: function(GG, bG) {},
+         MI: function(GG, bG) {},
```

#### 2733. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23866` → after: `L23714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23714) · [Before (L23866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23866)

```diff
-   39175: (uu, Eu, ju) => {
+   39233: (GG, bG, ZG) => {
```

#### 2734. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23871-L23872` → after: `L23719-L23720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23719-L23720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23719-L23720) · [Before (L23871-L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23871-L23872)

```diff
-     var su = ju(3879),
-       Uu = ju(366),
+     var wG = ZG(3683),
+       SG = ZG(364),
```

#### 2735. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23874-L23878` → after: `L23722-L23726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23722-L23726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23722-L23726) · [Before (L23874-L23878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23874-L23878)

```diff
-       Xu = ju(3946),
-       lu = ju(39158),
-       qu = ju(1309),
-       fu = ju(38038),
-       Cu = ju(37803);
+       yG = ZG(3766),
+       kG = ZG(39210),
+       UG = ZG(1213),
+       YG = ZG(38047),
+       VG = ZG(37763);
```

#### 2736. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23887` → after: `L23735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23735) · [Before (L23887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23887)

```diff
-           if (console.assert(1 === ju.length, "There should only be one entity with updateServerOfMovement."), uu.YG.AEu(uu.FQ).isAlive)
+           if (console.assert(1 === ZG.length, "There should only be one entity with updateServerOfMovement."), GG.Hr.kZG(GG.sA).isAlive)
```

#### 2737. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23890` → after: `L23738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23738) · [Before (L23890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23890)

```diff
-               const Eu = uu.YG.wT(uu.FQ).XEu;
+               const bG = GG.Hr.kN(GG.sA).rbG;
```

#### 2738. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23892-L23893` → after: `L23740-L23741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23740-L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23740-L23741) · [Before (L23892-L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23892-L23893)

```diff
-               const ju = uu.YG.PEu(lu.HV),
-                 cu = uu.YG.qEu(lu.HV),
+               const ZG = GG.Hr.qbG(kG.RP),
+                 fG = GG.Hr.EbG(kG.RP),
```

#### 2739. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23895-L23912` → after: `L23743-L23760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23743-L23760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23743-L23760) · [Before (L23895-L23912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23895-L23912)

```diff
-                   cX: Eu[0],
-                   NX: Eu[1],
-                   OX: Eu[2],
-                   hX: (0, fu.s)(uu.bloxd.getResolvedPhysicsSettings(lu.HV, cu.physicsState), cu.steeringHeading, Cu.d.getPlayerFacingHeading(uu)),
-                   YX: ju.heading,
-                   DX: ju.speed,
-                   gX: ju.jumping,
-                   MX: ju.crouching,
-                   eX: ju.cameraPitch,
-                   GX: ju.armSwinging,
-                   pX: null !== (Uu = uu.nuu) && void 0 !== Uu ? Uu : Zu().copy(bu, uu.camera.Gy()),
-                   wX: ju.cameraDirection,
-                   JX: (0, su.getLastReceivedPacketId)(),
-                   dX: uu.ec,
-                   aX: ju.bunnyHopDisabled,
-                   PX: ju.toggleFly,
- ... (2 more removed lines; see GitHub link above)
+                   Ly: bG[0],
+                   yy: bG[1],
+                   ky: bG[2],
+                   Yy: (0, YG.q)(GG.bloxd.getResolvedPhysicsSettings(kG.RP, fG.physicsState), fG.steeringHeading, VG.d.getPlayerFacingHeading(GG)),
+                   Uy: ZG.heading,
+                   Vy: ZG.speed,
+                   py: ZG.jumping,
+                   Qy: ZG.crouching,
+                   Ky: ZG.cameraPitch,
+                   hy: ZG.armSwinging,
+                   Jy: null !== (SG = GG.UbG) && void 0 !== SG ? SG : LG().copy(pG, GG.camera.zB()),
+                   zy: ZG.cameraDirection,
+                   Ey: (0, wG.getLastReceivedPacketId)(),
+                   Xy: GG.zf,
+                   iy: ZG.bunnyHopDisabled,
+                   Cy: ZG.toggleFly,
+ ... (2 more added lines; see GitHub link above)
```

#### 2740. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23914` → after: `L23762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23762) · [Before (L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23914)

```diff
-               isNaN(Nu.DX) && (console.error("speed was NaN! Setting to 0"), Nu.DX = 0);
+               isNaN(QG.Vy) && (console.error("speed was NaN! Setting to 0"), QG.Vy = 0);
```

#### 2741. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23928` → after: `L23776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23776) · [Before (L23928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23928)

```diff
-               Ou.pitch = uu.camera.pitch, Yu.speed = ju.speed, 0 === Ou.pitch && (Yu.speed *= 1.3), (0, su.sendColyMessage)(Xu.Vh, Nu)
+               KG.pitch = GG.camera.pitch, hG.speed = ZG.speed, 0 === KG.pitch && (hG.speed *= 1.3), (0, wG.sendColyMessage)(yG.Bh, QG)
```

#### 2742. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23938` → after: `L23786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23786) · [Before (L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23938)

```diff
-   39072: (uu, Eu, ju) => {
+   39140: (GG, bG, ZG) => {
```

#### 2743. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23940` → after: `L23788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23788) · [Before (L23940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23940)

```diff
-       d: () => Mu,
+       e: () => zG,
```

#### 2744. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23942` → after: `L23790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23790) · [Before (L23942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23942)

```diff
-       g: () => pu,
+       h: () => XG,
```

#### 2745. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23944` → after: `L23792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23792) · [Before (L23944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23944)

```diff
-       m: () => gu
+       l: () => rG
```

#### 2746. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23946-L23959` → after: `L23794-L23807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23794-L23807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23794-L23807) · [Before (L23946-L23959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23946-L23959)

```diff
-     var su = ju(337),
-       Uu = ju(39093),
-       Zu = ju(2906),
-       Xu = ju(2908),
-       lu = ju(39081),
-       qu = ju(39084),
-       fu = ju(22),
-       Cu = ju(103),
-       bu = ju(3061),
-       cu = ju(91),
-       Nu = ju(124),
-       Ou = ju(31),
-       Yu = ju(3774),
-       hu = ju(115);
+     var wG = ZG(333),
+       SG = ZG(39152),
+       LG = ZG(2761),
+       yG = ZG(2768),
+       kG = ZG(39144),
+       UG = ZG(39148),
+       YG = ZG(17),
+       VG = ZG(86),
+       pG = ZG(2889),
+       fG = ZG(80),
+       QG = ZG(111),
+       KG = ZG(29),
+       hG = ZG(3559),
+       dG = ZG(101);
```

#### 2747. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23967` → after: `L23815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23815) · [Before (L23967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23967)

```diff
-       const ju = null !== (Eu = Cu.currentUrl.getSearchParam(uu)) && void 0 !== Eu ? Eu : Ou.k.getItem(uu);
+       const ZG = null !== (bG = VG.currentUrl.getSearchParam(GG)) && void 0 !== bG ? bG : KG.h.getItem(GG);
```

#### 2748. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23971-L23972` → after: `L23819-L23820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23819-L23820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23819-L23820) · [Before (L23971-L23972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23971-L23972)

```diff
-       (0, Zu.z)(null);
-       const ju = (0, Xu.o)((0, Xu.k)(Eu.useWebGpu, !0));
+       (0, LG.E)(null);
+       const ZG = (0, yG.q)((0, yG.o)(bG.useWebGpu, !0));
```

#### 2749. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23974-L23975` → after: `L23822-L23823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23822-L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23822-L23823) · [Before (L23974-L23975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23974-L23975)

```diff
-       const lu = (0, Xu.f)(ju.source);
-       null !== lu && console.info(`Renderer: ${ju.requested} from ${lu}`), null !== ju.fallbackReason && console.warn(`Renderer: ${ju.fallbackReason}`);
+       const kG = (0, yG.g)(ZG.source);
+       null !== kG && console.info(`Renderer: ${ZG.requested} from ${kG}`), null !== ZG.fallbackReason && console.warn(`Renderer: ${ZG.fallbackReason}`);
```

#### 2750. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23981` → after: `L23829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23829) · [Before (L23981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23981)

```diff
-           if (ju && !0 === Ou.k.getItem(hu.L) && !0 !== Ou.k.getItem(su.jc)) return (0, cu.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), hu.d;
+           if (ZG && !0 === KG.h.getItem(dG.B) && !0 !== KG.h.getItem(wG.Cc)) return (0, fG.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), dG.b;
```

#### 2751. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23986` → after: `L23834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23834) · [Before (L23986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23986)

```diff
-             } = await (0, Zu.r)(Xu).load();
+             } = await (0, LG.u)(yG).load();
```

#### 2752. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23988-L23991` → after: `L23836-L23839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23836-L23839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23836-L23839) · [Before (L23988-L23991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23988-L23991)

```diff
-             const su = fu.d.antiAliasingOnWebGpuAdapter((0, Nu.l)()),
-               Uu = (0, qu.f)(uu),
-               lu = (0, qu.d)(Uu, {
-                 size: uu => (0, bu.j)(Uu, uu)
+             const wG = YG.e.antiAliasingOnWebGpuAdapter((0, QG.i)()),
+               SG = (0, UG.g)(GG),
+               kG = (0, UG.e)(SG, {
+                 size: GG => (0, pG.k)(SG, GG)
```

#### 2753. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L23994` → after: `L23842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23842) · [Before (L23994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L23994)

```diff
-               Jju: su,
+               MZG: wG,
```

#### 2754. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24000` → after: `L23848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23848) · [Before (L24000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24000)

```diff
-             const uu = (0, Uu.e)(Yu);
+             const GG = (0, SG.c)(hG);
```

#### 2755. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24003` → after: `L23851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23851) · [Before (L24003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24003)

```diff
-             return "string" === typeof Eu ? (console.warn(`Lite could not start, falling back to WebGL: ${String(Yu)}`), Eu) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", Yu), "it failed to start (see the console)")
+             return "string" === typeof bG ? (console.warn(`Lite could not start, falling back to WebGL: ${String(hG)}`), bG) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", hG), "it failed to start (see the console)")
```

#### 2756. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24006` → after: `L23854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23854) · [Before (L24006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24006)

```diff
-         if ("lite" === ju.choice && Ou.k.setItem(hu.u, "string" === typeof lu), "string" !== typeof lu) return fu.d.followGameGpu((0, Nu.l)()), (0, cu.setWebGpuFallbackReason)("none"), (0, Xu.r)(ju), (0, Zu.z)(lu), {
+         if ("lite" === ZG.choice && KG.h.setItem(dG.p, "string" === typeof kG), "string" !== typeof kG) return YG.e.followGameGpu((0, QG.i)()), (0, fG.setWebGpuFallbackReason)("none"), (0, yG.u)(ZG), (0, LG.E)(kG), {
```

#### 2757. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24011` → after: `L23859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23859) · [Before (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24011)

```diff
-       return (0, Xu.r)({
+       return (0, yG.u)({
```

#### 2758. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24015` → after: `L23863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23863) · [Before (L24015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24015)

```diff
-       }), fu.d.followGameGpu(null), {
+       }), YG.e.followGameGpu(null), {
```

#### 2759. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24020` → after: `L23868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23868) · [Before (L24020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24020)

```diff
-       Promise.all([ju.e(258), ju.e(307)]).then((() => ju(41800))).then((uu => {
+       Promise.all([ZG.e(258), ZG.e(307)]).then((() => ZG(41972))).then((GG => {
```

#### 2760. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24023-L24024` → after: `L23871-L23872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23871-L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23871-L23872) · [Before (L24023-L24024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24023-L24024)

```diff
-       const [uu, Eu] = await Promise.all([Promise.all([ju.e(258), ju.e(259), ju.e(256), ju.e(266), ju.e(260), ju.e(265), ju.e(263), ju.e(255), ju.e(268), ju.e(279), ju.e(267), ju.e(261), ju.e(262), ju.e(308), ju.e(0)]).then((() => ju(41810))), Promise.all([ju.e(258), ju.e(259), j … [truncated]
-       return (0, lu.e)(Eu.SkyMaterial), uu.default
+       const [GG, bG] = await Promise.all([Promise.all([ZG.e(258), ZG.e(259), ZG.e(256), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(268), ZG.e(279), ZG.e(267), ZG.e(261), ZG.e(262), ZG.e(308), ZG.e(0)]).then((() => ZG(41988))), Promise.all([ZG.e(258), ZG.e(259), Z … [truncated]
+       return (0, kG.g)(bG.SkyMaterial), GG.default
```

#### 2761. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24028` → after: `L23876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23876) · [Before (L24028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24028)

```diff
-       return "lite" === (0, Xu.o)((0, Xu.k)(uu, !1)).choice && (0, cu.getWebGpuSupported)() && !Ou.k.getItem(hu.u)
+       return "lite" === (0, yG.q)((0, yG.o)(GG, !1)).choice && (0, fG.getWebGpuSupported)() && !KG.h.getItem(dG.p)
```

#### 2762. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24038-L24039` → after: `L23886-L23887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23886-L23887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23886-L23887) · [Before (L24038-L24039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24038-L24039)

```diff
-       (0, Yu.e)((() => {
-         Gu(uu) ? (0, Zu.o)().load().catch((uu => {
+       (0, hG.c)((() => {
+         oG(GG) ? (0, LG.r)().load().catch((GG => {
```

#### 2763. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24045` → after: `L23893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23893) · [Before (L24045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24045)

```diff
-   39084: (uu, Eu, ju) => {
+   39148: (GG, bG, ZG) => {
```

#### 2764. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24047-L24048` → after: `L23895-L23896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23895-L23896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23895-L23896) · [Before (L24047-L24048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24047-L24048)

```diff
-       d: () => lu,
-       f: () => Xu
+       e: () => kG,
+       g: () => yG
```

#### 2765. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24050-L24052` → after: `L23898-L23900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23898-L23900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23898-L23900) · [Before (L24050-L24052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24050-L24052)

```diff
-     var su = ju(22),
-       Uu = ju(34501),
-       Zu = ju(3061);
+     var wG = ZG(17),
+       SG = ZG(34425),
+       LG = ZG(2889);
```

#### 2766. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24056` → after: `L23904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23904) · [Before (L24056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24056)

```diff
-       return null !== (Eu = uu.parentElement) && void 0 !== Eu ? Eu : uu
+       return null !== (bG = GG.parentElement) && void 0 !== bG ? bG : GG
```

#### 2767. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24061` → after: `L23909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23909) · [Before (L24061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24061)

```diff
-       const ju = (0, Zu.k)(),
+       const ZG = (0, LG.n)(),
```

#### 2768. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24063` → after: `L23911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23911) · [Before (L24063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24063)

```diff
-       return (0, Zu.m)(Xu, lu, ju, su.d.get("clientEscMenuOptions").pixelScale)
+       return (0, LG.s)(yG, kG, ZG, wG.e.get("clientEscMenuOptions").pixelScale)
```

#### 2769. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24066` → after: `L23914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23914) · [Before (L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24066)

```diff
-   39423: (uu, Eu, ju) => {
+   39531: (GG, bG, ZG) => {
```

#### 2770. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24068-L24069` → after: `L23916-L23917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23916-L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23916-L23917) · [Before (L24068-L24069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24068-L24069)

```diff
-       b: () => eu,
-       f: () => Mu
+       e: () => EG,
+       i: () => zG
```

#### 2771. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24071-L24082` → after: `L23919-L23930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23919-L23930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23919-L23930) · [Before (L24071-L24082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24071-L24082)

```diff
-     var su = ju(202),
-       Uu = ju(3017),
-       Zu = ju(1128),
-       Xu = ju(3108),
-       lu = ju(36668),
-       qu = ju(4688),
-       fu = ju(3900),
-       Cu = ju(3774),
-       bu = ju(36675),
-       cu = ju(36866),
-       Nu = ju(36868),
-       Ou = ju(24);
+     var wG = ZG(188),
+       SG = ZG(2868),
+       LG = ZG(1032),
+       yG = ZG(2928),
+       kG = ZG(36586),
+       UG = ZG(4514),
+       YG = ZG(3711),
+       VG = ZG(3559),
+       pG = ZG(36599),
+       fG = ZG(36816),
+       QG = ZG(36820),
+       KG = ZG(19);
```

#### 2772. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24089` → after: `L23937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23937) · [Before (L24089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24089)

```diff
-       let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nu.u,
+       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QG.t,
```

#### 2773. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24104-L24105` → after: `L23952-L23953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23952-L23953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23952-L23953) · [Before (L24104-L24105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24104-L24105)

```diff
-         Mu = new Nu.c(Xu, (() => 0), (uu => {
-           (0, fu.f)("memory", uu)
+         zG = new QG.e(yG, (() => 0), (GG => {
+           (0, YG.g)("memory", GG)
```

#### 2774. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24109` → after: `L23957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23957) · [Before (L24109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24109)

```diff
-           const [Eu, ju] = uu.zb.Im, Uu = Math.max(su.e.defaultChunkHorizAddDistance, Eu - Yu);
+           const [bG, ZG] = GG.Op.bI, SG = Math.max(wG.d.defaultChunkHorizAddDistance, bG - hG);
```

#### 2775. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24115` → after: `L23963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23963) · [Before (L24115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24115)

```diff
-           return (0, qu.o)(Uu), (0, qu.d)(uu.zb, Zu), (0, cu.t)(...(0, qu.f)(Zu))
+           return (0, UG.l)(SG), (0, UG.b)(GG.Op, LG), (0, fG.q)(...(0, UG.c)(LG))
```

#### 2776. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24117` → after: `L23965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23965) · [Before (L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24117)

```diff
-         return null === ju ? lu = Eu : Zu = -1 / 0, ju
+         return null === ZG ? kG = bG : LG = -1 / 0, ZG
```

#### 2777. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24119-L24120` → after: `L23967-L23968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23967-L23968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23967-L23968) · [Before (L24119-L24120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24119-L24120)

```diff
-         1 === ju ? Gu("shed", uu, su, Eu.memoryBytes()) : console.warn(`wasm memory: shed again (${uu}): shed ${ju}`, su.wasmMemoryShed)
-       }), (() => uu.zb.Im[0])), (0, Uu.W)((() => {
+         1 === ZG ? oG("shed", GG, wG, bG.memoryBytes()) : console.warn(`wasm memory: shed again (${GG}): shed ${ZG}`, wG.wasmMemoryShed)
+       }), (() => GG.Op.bI[0])), (0, SG.X)((() => {
```

#### 2778. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24127-L24128` → after: `L23975-L23976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23975-L23976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23975-L23976) · [Before (L24127-L24128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24127-L24128)

```diff
-       const eu = Ou.h.subscribe("appManagerUpdated|gameState", (uu => {
-         "inGame" === uu && (Ou.h.unsubscribe(eu), (0, Cu.e)((() => {
+       const EG = KG.l.subscribe("appManagerUpdated|gameState", (GG => {
+         "inGame" === GG && (KG.l.unsubscribe(EG), (0, VG.c)((() => {
```

#### 2779. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24151-L24153` → after: `L23999-L24001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R23999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L23999-L24001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L23999-L24001) · [Before (L24151-L24153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24151-L24153)

```diff
-       const Uu = `wasm memory was refused (${Eu}): ${"shed"===uu?"the JS client lowered its view distance":"the JS client's view distance is at its floor"}`,
-         qu = `wasm_memory_${uu}_${Eu}_m${(0,bu.k)(su)}`;
-       (0, Zu.YY)(new Error(Uu), {
+       const SG = `wasm memory was refused (${bG}): ${"shed"===GG?"the JS client lowered its view distance":"the JS client's view distance is at its floor"}`,
+         UG = `wasm_memory_${GG}_${bG}_m${(0,pG.i)(wG)}`;
+       (0, LG.rh)(new Error(SG), {
```

#### 2780. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24161` → after: `L24009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24009) · [Before (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24161)

```diff
-   39213: (uu, Eu, ju) => {
+   39274: (GG, bG, ZG) => {
```

#### 2781. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24163` → after: `L24011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24011) · [Before (L24163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24163)

```diff
-       b: () => su
+       c: () => wG
```

#### 2782. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24167` → after: `L24015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24015) · [Before (L24167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24167)

```diff
-   39194: (uu, Eu, ju) => {
+   39253: (GG, bG, ZG) => {
```

#### 2783. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24169-L24170` → after: `L24017-L24019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24017-L24019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24017-L24019) · [Before (L24169-L24170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24169-L24170)

```diff
-       c: () => Xu,
-       f: () => lu,
+       d: () => yG,
+       g: () => kG,
+       h: () => LG,
```

#### 2784. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24172-L24173` → after: `L24021-L24022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24021-L24022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24021-L24022) · [Before (L24172-L24173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24172-L24173)

```diff
-       l: () => Nu,
-       p: () => qu,
+       m: () => UG,
+       o: () => VG,
```

#### 2785. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24175-L24176` → after: `L24024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24024) · [Before (L24175-L24176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24175-L24176)

```diff
-       v: () => fu,
-       x: () => cu
+       t: () => fG
```

#### 2786. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24178-L24179` → after: `L24026-L24027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24026-L24027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24026-L24027) · [Before (L24178-L24179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24178-L24179)

```diff
-     var su = ju(37488),
-       Uu = ju(37841);
+     var wG = ZG(37432),
+       SG = ZG(37816);
```

#### 2787. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24189` → after: `L24037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24037) · [Before (L24189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24189)

```diff
-       return null !== uu && void 0 !== uu ? uu : Eu
+       return null !== GG && void 0 !== GG ? GG : bG
```

#### 2788. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24198` → after: `L24046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24046) · [Before (L24198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24198)

```diff
-       const Zu = uu.YG.GEu(ju),
+       const LG = GG.Hr.lbG(ZG),
```

#### 2789. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24201` → after: `L24049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24049) · [Before (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24201)

```diff
-       const lu = uu.YG.GEu(Eu);
+       const kG = GG.Hr.lbG(bG);
```

#### 2790. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24203-L24205` → after: `L24051-L24053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24051-L24053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24051-L24053) · [Before (L24203-L24205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24203-L24205)

```diff
-       const qu = uu.YG.wT(ju).xH,
-         fu = uu.camera.nH(),
-         Cu = uu.camera.Py(),
+       const UG = GG.Hr.kN(ZG).Zx,
+         YG = GG.camera.Xx(),
+         VG = GG.camera.oB(),
```

#### 2791. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24210` → after: `L24058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24058) · [Before (L24210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24210)

```diff
-       const Yu = uu.tO.hV().getFrameId();
+       const hG = GG.HK.Dv().getFrameId();
```

#### 2792. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24214-L24215` → after: `L24062-L24063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24062-L24063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24062-L24063) · [Before (L24214-L24215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24214-L24215)

```diff
-           minimum: new su.dO,
-           maximum: new su.dO,
+           minimum: new wG.mK,
+           maximum: new wG.mK,
```

#### 2793. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24218` → after: `L24066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24066) · [Before (L24218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24218)

```diff
-         if (hu.frame = Yu, lu.rju) hu.valid = uu.tO.oV.getObjectBounds(lu.mV, hu.minimum, hu.maximum);
+         if (dG.frame = hG, kG.DZG) dG.valid = GG.HK.Vl.getObjectBounds(kG.Ql, dG.minimum, dG.maximum);
```

#### 2794. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24220` → after: `L24068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24068) · [Before (L24220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24220)

```diff
-           hu.minimum.k_(1 / 0), hu.maximum.k_(-1 / 0), hu.valid = !1;
+           dG.minimum.N7(1 / 0), dG.maximum.N7(-1 / 0), dG.valid = !1;
```

#### 2795. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24225` → after: `L24073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24073) · [Before (L24225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24225)

```diff
-             const uu = Eu.EW().boundingBox;
+             const GG = bG.HA().boundingBox;
```

#### 2796. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24239` → after: `L24087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24087) · [Before (L24239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24239)

```diff
-       }(qu, fu, hu.minimum, hu.maximum, uu.camera.Py());
+       }(UG, YG, dG.minimum, dG.maximum, GG.camera.oB());
```

#### 2797. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24248-L24249` → after: `L24096-L24097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24096-L24097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24096-L24097) · [Before (L24248-L24249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24248-L24249)

```diff
-       } = uu.YG.GEu(Eu), Zu = uu.YG.wT(Eu).xH, Xu = Zu[0] + su[0], lu = Zu[1] + su[1], qu = Zu[2] + su[2];
-       (0, Uu.o)(ju, Xu, lu, qu)
+       } = GG.Hr.lbG(bG), LG = GG.Hr.kN(bG).Zx, yG = LG[0] + wG[0], kG = LG[1] + wG[1], UG = LG[2] + wG[2];
+       (0, SG.v)(ZG, yG, kG, UG)
```

#### 2798. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24252` → after: `L24100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24100) · [Before (L24252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24252)

```diff
-   39040: (uu, Eu, ju) => {
+   39101: (GG, bG, ZG) => {
```

#### 2799. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24254-L24255` → after: `L24102-L24103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24102-L24103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24102-L24103) · [Before (L24254-L24255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24254-L24255)

```diff
-       e: () => Zu,
-       g: () => Xu
+       d: () => LG,
+       e: () => yG
```

#### 2800. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24257-L24258` → after: `L24105-L24106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24105-L24106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24105-L24106) · [Before (L24257-L24258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24257-L24258)

```diff
-     var su = ju(37708),
-       Uu = ju(2906);
+     var wG = ZG(37656),
+       SG = ZG(2761);
```

#### 2801. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24263-L24264` → after: `L24111-L24112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24111-L24112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24111-L24112) · [Before (L24263-L24264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24263-L24264)

```diff
-       } = uu.tO;
-       return "pO" in Eu && Eu._gl.isContextLost()
+       } = GG.HK;
+       return "iK" in bG && bG._gl.isContextLost()
```

#### 2802. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24271` → after: `L24119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24119) · [Before (L24271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24271)

```diff
-       if (!("wV" in uu)) {
+       if (!("Gl" in GG)) {
```

#### 2803. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24274` → after: `L24122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24122) · [Before (L24274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24274)

```diff
-         const uu = (0, Uu.l)();
+         const GG = (0, SG.o)();
```

#### 2804. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24277` → after: `L24125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24125) · [Before (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24277)

```diff
-           lu = (0, su.b)(Eu);
+           kG = (0, wG.d)(bG);
```

#### 2805. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24282-L24283` → after: `L24130-L24131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24130-L24131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24130-L24131) · [Before (L24282-L24283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24282-L24283)

```diff
-       const Xu = uu.wO(),
-         lu = Xu.pO.add((() => {
+       const yG = GG.CK(),
+         kG = yG.iK.add((() => {
```

#### 2806. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24290-L24291` → after: `L24138-L24139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24138-L24139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24138-L24139) · [Before (L24290-L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24290-L24291)

```diff
-         qu = uu.wV.addOnce((() => {
-           Xu.pO.remove(lu)
+         UG = GG.Gl.addOnce((() => {
+           yG.iK.remove(kG)
```

#### 2807. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24294` → after: `L24142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24142) · [Before (L24294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24294)

```diff
-         Xu.pO.remove(lu), uu.wV.remove(qu)
+         yG.iK.remove(kG), GG.Gl.remove(UG)
```

#### 2808. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24298` → after: `L24146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24146) · [Before (L24298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24298)

```diff
-   39141: (uu, Eu, ju) => {
+   39195: (GG, bG, ZG) => {
```

#### 2809. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24300` → after: `L24148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24148) · [Before (L24300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24300)

```diff
-       d: () => cu
+       c: () => fG
```

#### 2810. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24302-L24306` → after: `L24150-L24154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24150-L24154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24150-L24154) · [Before (L24302-L24306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24302-L24306)

```diff
-     var su = ju(37577),
-       Uu = ju(37589),
-       Zu = ju(37833),
-       Xu = ju(37595),
-       lu = ju(37582);
+     var wG = ZG(37523),
+       SG = ZG(37541),
+       LG = ZG(37803),
+       yG = ZG(37547),
+       kG = ZG(37532);
```

#### 2811. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24309` → after: `L24157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24157) · [Before (L24309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24309)

```diff
-       return `\n\t\t\t\t${(0,lu.D)(uu,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,kG.z)(GG,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 2812. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24311` → after: `L24159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24159) · [Before (L24311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24311)

```diff
-         (0, lu.I)(uu, "float", "s", "sin(ang)")
+         (0, kG.B)(GG, "float", "s", "sin(ang)")
```

#### 2813. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24314` → after: `L24162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24162) · [Before (L24314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24314)

```diff
-         (0, lu.I)(uu, "float", "c", "cos(ang)")
+         (0, kG.B)(GG, "float", "c", "cos(ang)")
```

#### 2814. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24317` → after: `L24165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24165) · [Before (L24317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24317)

```diff
-         (0, lu.r)(uu, "mat2", "c", "s", "-s", "c")
+         (0, kG.m)(GG, "mat2", "c", "s", "-s", "c")
```

#### 2815. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24323-L24324` → after: `L24171-L24172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24171-L24172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24171-L24172) · [Before (L24323-L24324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24323-L24324)

```diff
-       let ju = (0, lu.Ab)(uu, "skele" + (Eu - 1));
-       for (let Uu = Eu - 2; Uu >= 0; Uu--) ju = (0, lu.ub)(uu, `boneIdx == ${Uu}`, (0, lu.Ab)(uu, `skele${Uu}`), ju);
+       let ZG = (0, kG.ub)(GG, "skele" + (bG - 1));
+       for (let SG = bG - 2; SG >= 0; SG--) ZG = (0, kG.nb)(GG, `boneIdx == ${SG}`, (0, kG.ub)(GG, `skele${SG}`), ZG);
```

#### 2816. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24326` → after: `L24174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24174) · [Before (L24326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24326)

```diff
-       return `\n\t\t\t\t${(0,lu.I)(uu,"int","boneIdx",(0,lu.xb)(uu,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,lu.I)(uu,"vec3","bone",ju)}\n\t\t\t\t${(0,lu.I)(uu,"vec2","pivot",(0,lu.r)(uu,"vec2","0.0",`${(0,lu.Fb)(uu,"position")}.z`))}\n\t\t\t\t${(0,lu.bb)(uu)?`posit … [truncated]
+       return `\n\t\t\t\t${(0,kG.B)(GG,"int","boneIdx",(0,kG.qb)(GG,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,kG.B)(GG,"vec3","bone",ZG)}\n\t\t\t\t${(0,kG.B)(GG,"vec2","pivot",(0,kG.m)(GG,"vec2","0.0",`${(0,kG.Cb)(GG,"position")}.z`))}\n\t\t\t\t${(0,kG.V)(GG)?`positi … [truncated]
```

#### 2817. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24330` → after: `L24178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24178) · [Before (L24330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24330)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,lu.r)(uu,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,kG.m)(GG,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 2818. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24336` → after: `L24184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24184) · [Before (L24336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24336)

```diff
-         sju(uu, Eu) {
+         hZG(GG, bG) {
```

#### 2819. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24345-L24347` → after: `L24193-L24195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24193-L24195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24193-L24195) · [Before (L24345-L24347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24345-L24347)

```diff
-           ...(0, su.b)("CAPE"),
-           BLOXD_CAPE_BONES: `${uu}`,
-           BLOXD_CAPE_MAX_Y: (0, Uu.fb)(Eu)
+           ...(0, wG.c)("CAPE"),
+           BLOXD_CAPE_BONES: `${GG}`,
+           BLOXD_CAPE_MAX_Y: (0, SG.tb)(bG)
```

#### 2820. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24350` → after: `L24198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24198) · [Before (L24350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24350)

```diff
-           return (0, Zu.b)(function(uu) {
+           return (0, LG.d)(function(GG) {
```

#### 2821. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24353` → after: `L24201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24201) · [Before (L24353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24353)

```diff
-               name: `skele${ju}`,
+               name: `skele${ZG}`,
```

#### 2822. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24360` → after: `L24208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24208) · [Before (L24360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24360)

```diff
-           for (let Eu = 0; Eu < this.skeleLen; Eu++) uu.updateVector3(`skele${Eu}`, bu.sju(this.skele, 3 * Eu))
+           for (let bG = 0; bG < this.skeleLen; bG++) GG.updateVector3(`skele${bG}`, pG.hZG(this.skele, 3 * bG))
```

#### 2823. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24373` → after: `L24221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24221) · [Before (L24373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24373)

```diff
-     (0, Xu.m)(cu)
+     (0, yG.n)(fG)
```

#### 2824. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24375` → after: `L24223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24223) · [Before (L24375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24375)

```diff
-   39038: (uu, Eu, ju) => {
+   39097: (GG, bG, ZG) => {
```

#### 2825. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24378` → after: `L24226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24226) · [Before (L24378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24378)

```diff
-       e: () => bu
+       f: () => pG
```

#### 2826. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24380-L24383` → after: `L24228-L24231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24228-L24231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24228-L24231) · [Before (L24380-L24383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24380-L24383)

```diff
-     var su = ju(37577),
-       Uu = ju(37833),
-       Zu = ju(37582),
-       Xu = ju(37595);
+     var wG = ZG(37523),
+       SG = ZG(37803),
+       LG = ZG(37532),
+       yG = ZG(37547);
```

#### 2827. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24398-L24399` → after: `L24246-L24247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24246-L24247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24246-L24247) · [Before (L24398-L24399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24398-L24399)

```diff
-         defines: () => (0, su.b)("TEXT_SAMPLER"),
-         getUniforms: uu => (0, Uu.b)(qu, "fragment", uu),
+         defines: () => (0, wG.c)("TEXT_SAMPLER"),
+         getUniforms: GG => (0, SG.d)(UG, "fragment", GG),
```

#### 2828. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24406-L24409` → after: `L24254-L24257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24254-L24257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24254-L24257) · [Before (L24406-L24409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24406-L24409)

```diff
-           const ju = (0, Zu.M)(Eu, `vec4 ${fu}(sampler2D s, vec2 uv, float bias)`, `fn ${fu}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             su = (0, Zu.M)(Eu, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             Uu = `${(0,Zu.V)(Eu,"vDiffuseUV")} + uvOffset`,
-             Xu = (0, Zu.M)(Eu, `${fu}(diffuseSampler, ${Uu}, ${(0,Zu.Ab)(Eu,lu)})`, `${fu}(diffuseSampler, diffuseSamplerSampler, ${Uu}, ${(0,Zu.Ab)(Eu,lu)})`);
+           const ZG = (0, LG.G)(bG, `vec4 ${YG}(sampler2D s, vec2 uv, float bias)`, `fn ${YG}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             wG = (0, LG.G)(bG, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             SG = `${(0,LG.P)(bG,"vDiffuseUV")} + uvOffset`,
+             yG = (0, LG.G)(bG, `${YG}(diffuseSampler, ${SG}, ${(0,LG.ub)(bG,kG)})`, `${YG}(diffuseSampler, diffuseSamplerSampler, ${SG}, ${(0,LG.ub)(bG,kG)})`);
```

#### 2829. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24411-L24412` → after: `L24259-L24260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24259-L24260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24259-L24260) · [Before (L24411-L24412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24411-L24412)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ju} {\n\t\t\t\t\t${(0,Zu.I)(Eu,"vec4","texel",su)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Zu … [truncated]
-             [(0, Zu.J)(Eu)]: `baseColor = ${Xu};`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZG} {\n\t\t\t\t\t${(0,LG.B)(bG,"vec4","texel",wG)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,LG … [truncated]
+             [(0, LG.C)(bG)]: `baseColor = ${yG};`
```

#### 2830. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24416` → after: `L24264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24264) · [Before (L24416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24416)

```diff
-     (0, Xu.m)(bu)
+     (0, yG.n)(pG)
```

#### 2831. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24418` → after: `L24266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24266) · [Before (L24418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24418)

```diff
-   39081: (uu, Eu, ju) => {
+   39144: (GG, bG, ZG) => {
```

#### 2832. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24421-L24422` → after: `L24269-L24270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24269-L24270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24269-L24270) · [Before (L24421-L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24421-L24422)

```diff
-       e: () => lu,
-       h: () => qu
+       g: () => kG,
+       k: () => UG
```

#### 2833. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24424-L24425` → after: `L24272-L24273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24272-L24273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24272-L24273) · [Before (L24424-L24425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24424-L24425)

```diff
-     var su = ju(37837),
-       Uu = ju(37603);
+     var wG = ZG(37808),
+       SG = ZG(37550);
```

#### 2834. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24439` → after: `L24287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24287) · [Before (L24439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24439)

```diff
-       if (!(0, su.g)(uu)) return void uu.material.forceCompilation(uu, Eu);
+       if (!(0, wG.e)(GG)) return void GG.material.forceCompilation(GG, bG);
```

#### 2835. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24441-L24442` → after: `L24289-L24290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24289-L24290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24289-L24290) · [Before (L24441-L24442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24441-L24442)

```diff
-         if (uu.Gw()) return void Zu.delete(uu);
-         const su = (0, Uu.$)(uu.material);
+         if (GG.Tu()) return void LG.delete(GG);
+         const wG = (0, SG.eb)(GG.material);
```

#### 2836. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24449` → after: `L24297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24297) · [Before (L24449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24449)

```diff
-   39189: (uu, Eu, ju) => {
+   39250: (GG, bG, ZG) => {
```

#### 2837. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24462` → after: `L24309-L24310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24309-L24310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24309-L24310) · [Before (L24462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24462)

```diff
-       x: () => CE
+       v: () => tG,
+       z: () => gG
```

#### 2838. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24464-L24473` → after: `L24312-L24321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24312-L24321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24312-L24321) · [Before (L24464-L24473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24464-L24473)

```diff
-     var su = ju(1244),
-       Uu = ju(1303),
-       Zu = ju(337),
-       Xu = ju(1125),
-       lu = ju(4653),
-       qu = ju(4679),
-       fu = ju(2893),
-       Cu = ju(37704),
-       bu = ju(37630),
-       cu = ju(38298),
+     var wG = ZG(1151),
+       SG = ZG(1204),
+       LG = ZG(333),
+       yG = ZG(1025),
+       kG = ZG(4487),
+       UG = ZG(4508),
+       YG = ZG(2751),
+       VG = ZG(37647),
+       pG = ZG(37567),
+       fG = ZG(38304),
```

#### 2839. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24475-L24493` → after: `L24323-L24341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24323-L24341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24323-L24341) · [Before (L24475-L24493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24475-L24493)

```diff
-       Ou = ju(37874),
-       Yu = ju(37664),
-       hu = ju(39194),
-       Du = ju(38314),
-       gu = ju(39036),
-       Mu = ju(37693),
-       eu = ju(37811),
-       Gu = ju(649),
-       pu = ju(1314),
-       wu = ju(1995),
-       Ju = ju(2091),
-       du = ju(3340),
-       au = ju(3336),
-       Pu = ju(2040),
-       ou = ju(22),
-       ku = ju(9032),
- ... (3 more removed lines; see GitHub link above)
+       KG = ZG(37855),
+       hG = ZG(37613),
+       dG = ZG(39253),
+       JG = ZG(38333),
+       rG = ZG(39095),
+       zG = ZG(37639),
+       EG = ZG(37782),
+       oG = ZG(604),
+       XG = ZG(1222),
+       uG = ZG(1903),
+       iG = ZG(2013),
+       CG = ZG(3137),
+       WG = ZG(3135),
+       mG = ZG(1956),
+       IG = ZG(17),
+       FG = ZG(8862),
+ ... (3 more added lines; see GitHub link above)
```

#### 2840. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24509` → after: `L24357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24357) · [Before (L24509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24509)

```diff
-         text: uu => `bolder ${uu}px 'Jetbrains Mono'`
+         text: GG => `bolder ${GG}px 'Jetbrains Mono'`
```

#### 2841. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24528` → after: `L24376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24376) · [Before (L24528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24528)

```diff
-         if ((0, Zu.ub)(uu)) return [{
+         if ((0, LG.Tb)(GG)) return [{
```

#### 2842. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24531-L24532` → after: `L24379-L24380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24379-L24380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24379-L24380) · [Before (L24531-L24532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24531-L24532)

```diff
-         if ((0, Zu.tb)(uu)) {
-           const ju = (0, ku.e)(uu.action);
+         if ((0, LG.Qb)(GG)) {
+           const ZG = (0, FG.b)(GG.action);
```

#### 2843. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24537` → after: `L24385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24385) · [Before (L24537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24537)

```diff
-               icon: (0, ku.h)(ju),
+               icon: (0, FG.c)(ZG),
```

#### 2844. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24539` → after: `L24387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24387) · [Before (L24539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24539)

```diff
-                 fontSize: null !== (Xu = null === su || void 0 === su ? void 0 : su.fontSize) && void 0 !== Xu ? Xu : `${Eu}px`,
+                 fontSize: null !== (yG = null === wG || void 0 === wG ? void 0 : wG.fontSize) && void 0 !== yG ? yG : `${bG}px`,
```

#### 2845. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24544-L24547` → after: `L24392-L24395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24392-L24395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24392-L24395) · [Before (L24544-L24547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24544-L24547)

```diff
-           const su = (0, Pu.v)(uu.action, ou.d.get("isTouchScreen")),
-             Uu = (0, Pu.r)(uu.action);
-           null === su && null === Uu && console.warn(`No key binding found for action: ${uu.action}`), uu = {
-             str: null !== su && void 0 !== su ? su : (0, Pu.q)(Uu),
+           const wG = (0, mG.y)(GG.action, IG.e.get("isTouchScreen")),
+             SG = (0, mG.x)(GG.action);
+           null === wG && null === SG && console.warn(`No key binding found for action: ${GG.action}`), GG = {
+             str: null !== wG && void 0 !== wG ? wG : (0, mG.t)(SG),
```

#### 2846. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24552` → after: `L24400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24400) · [Before (L24552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24552)

```diff
-         return lu = "string" !== typeof uu && "str" in uu ? uu : {
+         return kG = "string" !== typeof GG && "str" in GG ? GG : {
```

#### 2847. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24554-L24555` → after: `L24402-L24403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24402-L24403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24402-L24403) · [Before (L24554-L24555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24554-L24555)

```diff
-           }, null !== (ju = lu.style) && void 0 !== ju && ju.fontSize ? lu.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : lu.style ? lu.style.fontSize = `${Eu}px` : lu.style = {
-             fontSize: `${Eu}px`
+           }, null !== (ZG = kG.style) && void 0 !== ZG && ZG.fontSize ? kG.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : kG.style ? kG.style.fontSize = `${bG}px` : kG.style = {
+             fontSize: `${bG}px`
```

#### 2848. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24559-L24561` → after: `L24407-L24409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24407-L24409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24407-L24409) · [Before (L24559-L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24559-L24561)

```diff
-             const Eu = Uu.h.get().getCurrentLanguageCode(),
-               ju = (0, su.r)(uu.str.params, wu.e.shown),
-               Zu = (0, su.w)(Eu, uu.str.translationKey, ju);
+             const bG = SG.d.get().getCurrentLanguageCode(),
+               ZG = (0, wG.k)(GG.str.params, uG.b.shown),
+               LG = (0, wG.q)(bG, GG.str.translationKey, ZG);
```

#### 2849. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24599` → after: `L24447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24447) · [Before (L24599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24599)

```diff
-       const su = null !== (Eu = Bu(uu) ? null === (ju = uu.style) || void 0 === ju ? void 0 : ju.fontSize : void 0) && void 0 !== Eu ? Eu : `${Qu.DEFAULT_FONT_SIZE}px`;
+       const wG = null !== (bG = gG(GG) ? null === (ZG = GG.style) || void 0 === ZG ? void 0 : ZG.fontSize : void 0) && void 0 !== bG ? bG : `${PG.DEFAULT_FONT_SIZE}px`;
```

#### 2850. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24604-L24605` → after: `L24452-L24453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24452-L24453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24452-L24453) · [Before (L24604-L24605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24604-L24605)

```diff
-       const Eu = (0, Xu.b)(uu, (0, Xu.e)(uu));
-       return Eu || console.warn(`Unknown rank icon "${uu}" \u2014 not in the bundled Font Awesome subset.`), Eu
+       const bG = (0, yG.d)(GG, (0, yG.n)(GG));
+       return bG || console.warn(`Unknown rank icon "${GG}" \u2014 not in the bundled Font Awesome subset.`), bG
```

#### 2851. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24616-L24618` → after: `L24464-L24466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24464-L24466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24464-L24466) · [Before (L24616-L24618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24616-L24618)

```diff
-         const Eu = Uu.h.get().getCurrentLanguageCode(),
-           ju = (0, su.r)(uu.str.params, wu.e.shown);
-         return (0, su.x)(Eu, uu.str.translationKey, ju)
+         const bG = SG.d.get().getCurrentLanguageCode(),
+           ZG = (0, wG.k)(GG.str.params, uG.b.shown);
+         return (0, wG.r)(bG, GG.str.translationKey, ZG)
```

#### 2852. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24620` → after: `L24468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24468) · [Before (L24620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24620)

```diff
-       return "entityName" in uu.str ? (0, pu.e)(uu.str.entityName, wu.e.shown) : ""
+       return "entityName" in GG.str ? (0, XG.g)(GG.str.entityName, uG.b.shown) : ""
```

#### 2853. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24624` → after: `L24472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24472) · [Before (L24624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24624)

```diff
-       if ((0, Gu.H)(uu) || 0 === uu.length) return {
+       if ((0, oG.L)(GG) || 0 === GG.length) return {
```

#### 2854. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24701` → after: `L24549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24549) · [Before (L24701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24701)

```diff
-           const bu = (0, Cu.m)(Uu);
+           const pG = (0, VG.k)(SG);
```

#### 2855. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24704` → after: `L24552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24552) · [Before (L24704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24704)

```diff
-             Nu = (0, ku.k)(uu.icon),
+             QG = (0, FG.g)(GG.icon),
```

#### 2856. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24717` → after: `L24565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24565) · [Before (L24717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24717)

```diff
-           const Yu = (0, mu.k)(uu.icon, su);
+           const hG = (0, vG.j)(GG.icon, wG);
```

#### 2857. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24720` → after: `L24568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24568) · [Before (L24720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24720)

```diff
-               const Eu = (0, ku.i)(uu);
+               const bG = (0, FG.f)(GG);
```

#### 2858. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24725-L24726` → after: `L24573-L24574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24573-L24574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24573-L24574) · [Before (L24725-L24726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24725-L24726)

```diff
-               if (lu.c.includes(uu)) return {
-                 url: au.d.getTexture(uu, du.i.ICON).url,
+               if (kG.b.includes(GG)) return {
+                 url: WG.e.getTexture(GG, CG.i.ICON).url,
```

#### 2859. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24731-L24732` → after: `L24579-L24580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24579-L24580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24579-L24580) · [Before (L24731-L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24731-L24732)

```diff
-                 const Eu = null === (ju = fu.e.itemsClient[uu]) || void 0 === ju ? void 0 : ju.type;
-                 return lE.includes(Eu) ? (console.error(new Error(`Invalid icon type ${Eu} is not supported in nametags`).stack), {
+                 const bG = null === (ZG = YG.m.itemsClient[GG]) || void 0 === ZG ? void 0 : ZG.type;
+                 return kb.includes(bG) ? (console.error(new Error(`Invalid icon type ${bG} is not supported in nametags`).stack), {
```

#### 2860. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24738-L24739` → after: `L24586-L24587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24586-L24587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24586-L24587) · [Before (L24738-L24739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24738-L24739)

```diff
-                 } : "GrayscaleArmour" === Eu || qu.e[uu] ? {
-                   url: (0, Ku.g)(uu),
+                 } : "GrayscaleArmour" === bG || UG.c[GG] ? {
+                   url: (0, cG.d)(GG),
```

#### 2861. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24741` → after: `L24589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24589) · [Before (L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24741)

```diff
-                   tint: (0, qu.g)(uu)
+                   tint: (0, UG.d)(GG)
```

#### 2862. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24743` → after: `L24591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24591) · [Before (L24743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24743)

```diff
-                   url: (0, Ku.g)(uu),
+                   url: (0, cG.d)(GG),
```

#### 2863. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24750` → after: `L24598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24598) · [Before (L24750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24750)

```diff
-           if ((0, vu.b)(null === (Zu = fu.e.itemsClient[uu.icon]) || void 0 === Zu ? void 0 : Zu.type)) {
+           if ((0, aG.b)(null === (LG = YG.m.itemsClient[GG.icon]) || void 0 === LG ? void 0 : LG.type)) {
```

#### 2864. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24752` → after: `L24600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24600) · [Before (L24752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24752)

```diff
-             if (!fu.e.itemsClient[Eu].itemTexture) return void(0, mu.g)(Eu, su).then((uu => {
+             if (!YG.m.itemsClient[bG].itemTexture) return void(0, vG.i)(bG, wG).then((GG => {
```

#### 2865. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24755` → after: `L24603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24603) · [Before (L24755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24755)

```diff
-             Mu = (0, Ku.g)(Eu)
+             zG = (0, cG.d)(bG)
```

#### 2866. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24766` → after: `L24614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24614) · [Before (L24766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24766)

```diff
-               return Xu.drawImage(uu, 0, 0), Xu.globalCompositeOperation = "multiply", Xu.fillStyle = `rgb(${ju}, ${su}, ${Uu})`, Xu.fillRect(0, 0, Zu.width, Zu.height), Xu.globalCompositeOperation = "destination-in", Xu.drawImage(uu, 0, 0), Zu
+               return yG.drawImage(GG, 0, 0), yG.globalCompositeOperation = "multiply", yG.fillStyle = `rgb(${ZG}, ${wG}, ${SG})`, yG.fillRect(0, 0, LG.width, LG.height), yG.globalCompositeOperation = "destination-in", yG.drawImage(GG, 0, 0), LG
```

#### 2867. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24775` → after: `L24623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24623) · [Before (L24775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24775)

```diff
-       const Nu = (0, Cu.m)(Uu);
+       const QG = (0, VG.k)(SG);
```

#### 2868. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24777` → after: `L24625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24625) · [Before (L24777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24777)

```diff
-         const Uu = null !== Xu && void 0 !== Xu ? Xu : yu(uu, Nu);
+         const SG = null !== yG && void 0 !== yG ? yG : OG(GG, QG);
```

#### 2869. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24786` → after: `L24634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24634) · [Before (L24786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24786)

```diff
-             Ou = "string" === typeof Nu ? Nu : Nu.join(" "),
+             KG = "string" === typeof QG ? QG : QG.join(" "),
```

#### 2870. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24801-L24802` → after: `L24649-L24650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24649-L24650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24649-L24650) · [Before (L24801-L24802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24801-L24802)

```diff
-       const hu = null !== Xu && void 0 !== Xu ? Xu : yu(uu, Nu),
-         Du = Bu(uu) && null !== (bu = (0, Zu.Yb)(uu.style)) && void 0 !== bu ? bu : "white";
+       const dG = null !== yG && void 0 !== yG ? yG : OG(GG, QG),
+         JG = gG(GG) && null !== (pG = (0, LG.qc)(GG.style)) && void 0 !== pG ? pG : "white";
```

#### 2871. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24825` → after: `L24673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24673) · [Before (L24825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24825)

```diff
-         const su = null !== (Eu = null === (ju = uu.style) || void 0 === ju ? void 0 : ju.fontSize) && void 0 !== Eu ? Eu : `${Qu.DEFAULT_FONT_SIZE}px`;
+         const wG = null !== (bG = null === (ZG = GG.style) || void 0 === ZG ? void 0 : ZG.fontSize) && void 0 !== bG ? bG : `${PG.DEFAULT_FONT_SIZE}px`;
```

#### 2872. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24835-L24838` → after: `L24683-L24686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24683-L24686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24683-L24686) · [Before (L24835-L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24835-L24838)

```diff
-       const Xu = uu.tO.hV(),
-         lu = (0, gu.f)(uu, `${ju}Tex`, su, Uu, {
-           mipped: bu.i.nearestLinearMipLinear,
-           unmipped: bu.i.nearestLinearMipNearest
+       const yG = GG.HK.Dv(),
+         kG = (0, rG.d)(GG, `${ZG}Tex`, wG, SG, {
+           mipped: pG.g.nearestLinearMipLinear,
+           unmipped: pG.g.nearestLinearMipNearest
```

#### 2873. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24840` → after: `L24688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24688) · [Before (L24840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24840)

```diff
-         qu = (0, cu.o)(uu.tO, ju, (0, Nu.d)({
+         UG = (0, fG.q)(GG.HK, ZG, (0, QG.i)({
```

#### 2874. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24844-L24845` → after: `L24692-L24693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24692-L24693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24692-L24693) · [Before (L24844-L24845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24844-L24845)

```diff
-       qu.metadata = new uu.tO.rY, qu.metadata[Ou.B] = !0, qu.billboardMode = Yu.b.BILLBOARDMODE_ALL, qu.renderingGroupId = hu.c;
-       const fu = uu.YG.add([0, 0, 0], 1, 1, qu, [0, 0, 0]);
+       UG.metadata = new GG.HK.nh, UG.metadata[KG.F] = !0, UG.billboardMode = hG.e.BILLBOARDMODE_ALL, UG.renderingGroupId = dG.d;
+       const YG = GG.Hr.add([0, 0, 0], 1, 1, UG, [0, 0, 0]);
```

#### 2875. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24847-L24848` → after: `L24695-L24696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24695-L24696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24695-L24696) · [Before (L24847-L24848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24847-L24848)

```diff
-       uu.YG.yV(fu, uu.YG.names.yG, {
-         jO: Eu
+       GG.Hr.bM(YG, GG.Hr.names.TE, {
+         SK: bG
```

#### 2876. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24852-L24854` → after: `L24700-L24702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24700-L24702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24700-L24702) · [Before (L24852-L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24852-L24854)

```diff
-       } = (0, Mu.d)({
-         name: `${ju}Mat`,
-         vY: Xu,
+       } = (0, zG.e)({
+         name: `${ZG}Mat`,
+         Ah: yG,
```

#### 2877. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24859` → after: `L24707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24707) · [Before (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24859)

```diff
-           ...(0, gu.h)(lu)
+           ...(0, rG.g)(kG)
```

#### 2878. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24862` → after: `L24710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24710) · [Before (L24862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24862)

```diff
-           (0, gu.d)(Eu, "planes"), Cu = (0, eu.c)(Eu, uu.tO, Zu ? {
+           (0, rG.b)(bG, "planes"), VG = (0, EG.b)(bG, GG.HK, LG ? {
```

#### 2879. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24872` → after: `L24720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24720) · [Before (L24872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24872)

```diff
-       return qu.material = Gu, Zu ? uu.YG.GEu(fu).iju = !1 : (0, Du.e)(qu), qu.wV.add((() => {
+       return UG.material = oG, LG ? GG.Hr.lbG(YG).OZG = !1 : (0, JG.e)(UG), UG.Gl.add((() => {
```

#### 2880. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24885-L24886` → after: `L24733-L24734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24733-L24734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24733-L24734) · [Before (L24885-L24886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24885-L24886)

```diff
-       const Uu = (0, hu.p)(Eu, ju, su);
-       return uu.renderingGroupId = Uu ? hu.c : hu.i, Uu
+       const SG = (0, dG.m)(bG, ZG, wG);
+       return GG.renderingGroupId = SG ? dG.d : dG.h, SG
```

#### 2881. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24889` → after: `L24737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24737) · [Before (L24889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24889)

```diff
-   39036: (uu, Eu, ju) => {
+   39095: (GG, bG, ZG) => {
```

#### 2882. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24892-L24893` → after: `L24741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24741) · [Before (L24892-L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24892-L24893)

```diff
-       f: () => Xu,
-       h: () => qu,
+       g: () => UG,
```

#### 2883. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24896-L24898` → after: `L24744-L24746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24744-L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24744-L24746) · [Before (L24896-L24898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24896-L24898)

```diff
-     var su = ju(37704),
-       Uu = ju(37603),
-       Zu = ju(39038);
+     var wG = ZG(37647),
+       SG = ZG(37550),
+       LG = ZG(39097);
```

#### 2884. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24902` → after: `L24750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24750) · [Before (L24902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24902)

```diff
-           return !uu.tO.engine.needPOTTextures
+           return !GG.HK.engine.needPOTTextures
```

#### 2885. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24905` → after: `L24753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24753) · [Before (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24905)

```diff
-       return (0, su.q)(uu.tO.hV(), Eu, {
+       return (0, wG.o)(GG.HK.Dv(), bG, {
```

#### 2886. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24915` → after: `L24763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24763) · [Before (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24915)

```diff
-       (0, su.V)(uu, !0, !uu.sampler.noMipmap)
+       (0, wG.S)(GG, !0, !GG.sampler.noMipmap)
```

#### 2887. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24930` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24778) · [Before (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24930)

```diff
-       uu.diffuseTexture.sampler.noMipmap || (0, Uu.u)(uu, Zu.e, {
+       GG.diffuseTexture.sampler.noMipmap || (0, SG.u)(GG, LG.f, {
```

#### 2888. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24935` → after: `L24783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24783) · [Before (L24935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24935)

```diff
-   39525: (uu, Eu, ju) => {
+   39633: (GG, bG, ZG) => {
```

#### 2889. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24942-L24946` → after: `L24790-L24794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24790-L24794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24790-L24794) · [Before (L24942-L24946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24942-L24946)

```diff
-     var su = ju(91),
-       Uu = ju(31),
-       Zu = (ju(3653), ju(5206), ju(3651)),
-       Xu = ju(6854);
-     ju(6827);
+     var wG = ZG(80),
+       SG = ZG(29),
+       LG = (ZG(3444), ZG(5055), ZG(3441)),
+       yG = ZG(6661);
+     ZG(6627);
```

#### 2890. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24956-L24957` → after: `L24804-L24805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24804-L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24804-L24805) · [Before (L24956-L24957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24956-L24957)

```diff
-           if ((0, Zu.e)(su.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), fu().then((uu => {
-             uu && Uu.k.removeItem(Zu.c)
+           if ((0, LG.g)(wG.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), YG().then((GG => {
+             GG && SG.h.removeItem(LG.d)
```

#### 2891. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24964` → after: `L24812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24812) · [Before (L24964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24964)

```diff
-         return (0, Zu.d)(su.featureFlags.settings.canUseShaderPacks)
+         return (0, LG.e)(wG.featureFlags.settings.canUseShaderPacks)
```

#### 2892. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24985` → after: `L24833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24833) · [Before (L24985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24985)

```diff
-         return this.compiling ??= Promise.all([ju.e(78), ju.e(136), ju.e(142)]).then((() => ju(42003))).then((uu => (uu.prefetchCompiler(), uu))), this.compiling
+         return this.compiling ??= Promise.all([ZG.e(78), ZG.e(136), ZG.e(142)]).then((() => ZG(42184))).then((GG => (GG.prefetchCompiler(), GG))), this.compiling
```

#### 2893. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L24999` → after: `L24847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24847) · [Before (L24999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L24999)

```diff
-       if (!(0, Zu.i)(su.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, LG.j)(wG.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 2894. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25002` → after: `L24850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24850) · [Before (L25002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25002)

```diff
-         return uu || Uu.k.setItem(Zu.c, !1), uu
+         return GG || SG.h.setItem(LG.d, !1), GG
```

#### 2895. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25004` → after: `L24852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24852) · [Before (L25004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25004)

```diff
-         return console.error("Failed to read the stored shader pack", uu), Uu.k.removeItem(Zu.c), null
+         return console.error("Failed to read the stored shader pack", GG), SG.h.removeItem(LG.d), null
```

#### 2896. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25015` → after: `L24863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24863) · [Before (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25015)

```diff
-   39561: (uu, Eu, ju) => {
+   39678: (GG, bG, ZG) => {
```

#### 2897. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25017-L25018` → after: `L24865-L24866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24865-L24866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24865-L24866) · [Before (L25017-L25018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25017-L25018)

```diff
-       e: () => bu,
-       f: () => cu
+       c: () => pG,
+       d: () => fG
```

#### 2898. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25020-L25027` → after: `L24868-L24875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24868-L24875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24868-L24875) · [Before (L25020-L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25020-L25027)

```diff
-     var su = ju(166),
-       Uu = ju(193),
-       Zu = ju(1547),
-       Xu = ju(3099),
-       lu = ju(1559),
-       qu = ju(36856),
-       fu = ju(701),
-       Cu = ju(39525);
+     var wG = ZG(140),
+       SG = ZG(171),
+       LG = ZG(1423),
+       yG = ZG(2920),
+       kG = ZG(1431),
+       UG = ZG(36808),
+       YG = ZG(647),
+       VG = ZG(39633);
```

#### 2899. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25030` → after: `L24878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24878) · [Before (L25030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25030)

```diff
-       (0, Xu.reportClientError)("matchmake_failed", uu, su.j[su.j.SHADER_PACK])
+       (0, yG.reportClientError)("matchmake_failed", GG, wG.h[wG.h.SHADER_PACK])
```

#### 2900. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25035-L25036` → after: `L24883-L24884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24883-L24884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24883-L24884) · [Before (L25035-L25036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25035-L25036)

```diff
-         Xu = (0, qu.c)();
-       su && null !== Xu && await lu.b.reportShaderPackSession(uu, {
+         yG = (0, UG.d)();
+       wG && null !== yG && await kG.d.reportShaderPackSession(GG, {
```

#### 2901. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25039` → after: `L24887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24887) · [Before (L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25039)

```diff
-         game: (0, Zu.f)(Eu, Uu.x, "other"),
+         game: (0, LG.g)(bG, SG.s, "other"),
```

#### 2902. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25045` → after: `L24893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24893) · [Before (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25045)

```diff
-   6827: (uu, Eu, ju) => {
+   6627: (GG, bG, ZG) => {
```

#### 2903. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25050` → after: `L24898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24898) · [Before (L25050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25050)

```diff
-     var su = ju(5209);
+     var wG = ZG(5062);
```

#### 2904. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25055` → after: `L24903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24903) · [Before (L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25055)

```diff
-       return Zu ??= Promise.all([ju.e(73), ju.e(190)]).then((() => ju(40746))).then((uu => {
+       return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
```

#### 2905. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25070` → after: `L24918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24918) · [Before (L25070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25070)

```diff
-   34483: (uu, Eu, ju) => {
+   34405: (GG, bG, ZG) => {
```

#### 2906. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25075` → after: `L24923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24923) · [Before (L25075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25075)

```diff
-       c: () => su
+       b: () => wG
```

#### 2907. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25078` → after: `L24926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24926) · [Before (L25078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25078)

```diff
-   39553: (uu, Eu, ju) => {
+   39663: (GG, bG, ZG) => {
```

#### 2908. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25080` → after: `L24928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24928) · [Before (L25080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25080)

```diff
-       e: () => Uu
+       c: () => SG
```

#### 2909. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25091` → after: `L24939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24939) · [Before (L25091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25091)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => ju(1779))), Promise.resolve().then((() => ju(1405)))]);
+           }] = await Promise.all([Promise.resolve().then((() => ZG(1702))), Promise.resolve().then((() => ZG(1311)))]);
```

#### 2910. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25107` → after: `L24955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24955) · [Before (L25107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25107)

```diff
-   39910: (uu, Eu, ju) => {
+   40001: (GG, bG, ZG) => {
```

#### 2911. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25109` → after: `L24957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24957) · [Before (L25109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25109)

```diff
-       e: () => su,
+       c: () => wG,
```

#### 2912. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25111` → after: `L24959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24959) · [Before (L25111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25111)

```diff
-       j: () => Uu
+       g: () => SG
```

#### 2913. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25145` → after: `L24993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24993) · [Before (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25145)

```diff
-   39891: (uu, Eu, ju) => {
+   39982: (GG, bG, ZG) => {
```

#### 2914. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25149` → after: `L24997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R24997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L24997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L24997) · [Before (L25149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25149)

```diff
-     var su = ju(1955);
+     var wG = ZG(1873);
```

#### 2915. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25152` → after: `L25000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25000) · [Before (L25152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25152)

```diff
-       return (0, su.m)(uu, Eu) < ju
+       return (0, wG.n)(GG, bG) < ZG
```

#### 2916. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25155` → after: `L25003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25003) · [Before (L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25155)

```diff
-   37417: (uu, Eu, ju) => {
+   37386: (GG, bG, ZG) => {
```

#### 2917. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25157` → after: `L25005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25005) · [Before (L25157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25157)

```diff
-       b: () => su.f
+       c: () => wG.l
```

#### 2918. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25159` → after: `L25007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25007) · [Before (L25159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25159)

```diff
-     var su = ju(9409)
+     var wG = ZG(9249)
```

#### 2919. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25161` → after: `L25009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25009) · [Before (L25161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25161)

```diff
-   37420: (uu, Eu, ju) => {
+   37392: (GG, bG, ZG) => {
```

#### 2920. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25163` → after: `L25011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25011) · [Before (L25163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25163)

```diff
-       d: () => su.l
+       e: () => wG.l
```

#### 2921. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25165` → after: `L25013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25013) · [Before (L25165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25165)

```diff
-     var su = ju(37428)
+     var wG = ZG(37396)
```

#### 2922. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25167` → after: `L25015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25015) · [Before (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25167)

```diff
-   37415: (uu, Eu, ju) => {
+   37382: (GG, bG, ZG) => {
```

#### 2923. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L25171` → after: `L25019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R25019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L25019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/94.js#L25019) · [Before (L25171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/94.js#L25171)

```diff
-     const su = [() => ju(37417).b, () => ju(37420).d, () => ju(36896).b, () => ju(37472).f, () => ju(38013).getCaughtUpMeshRotation, () => ju(38057).tickMovementPrePhysics, () => ju(38082).b, () => [ju(38136).tickMovementInputsPrePhysics, ju(38178).y, ju(38395).b, ju(38413).b], ( … [truncated]
+     const wG = [() => ZG(37386).c, () => ZG(37392).e, () => ZG(36848).c, () => ZG(37422).i, () => ZG(38027).getCaughtUpMeshRotation, () => ZG(38059).tickMovementPrePhysics, () => ZG(38090).c, () => [ZG(38149).tickMovementInputsPrePhysics, ZG(38192).z, ZG(38425).e, ZG(38445).c], ( … [truncated]
```
