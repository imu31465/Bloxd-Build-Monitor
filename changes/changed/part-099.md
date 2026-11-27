# Changed — Bundle Modifications Report (Part 099 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `99 / 154` (**402** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 098](part-098.md) · [Part 100 →](part-100.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (4895 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 2242. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16728-L16729` → after: `L16412-L16413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16412-L16413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16412-L16413) · [Before (L16728-L16729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16728-L16729)

```diff
-           const EW = iW.rD,
-             NW = WW.EY.getState(EW, "humanoidMesh");
+           const tR = JR.Rm,
+             uR = RR.zC.getState(tR, "humanoidMesh");
```

#### 2243. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16732` → after: `L16416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16416) · [Before (L16732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16732)

```diff
-             const iW = WW.EY.aiW(EW);
+             const JR = RR.zC.oGR(tR);
```

#### 2244. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16735-L16737` → after: `L16419-L16421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16419-L16421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16419-L16421) · [Before (L16735-L16737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16735-L16737)

```diff
-               const NW = null === (OW = WW.EY.uOW(iW)) || void 0 === OW ? void 0 : OW.MA;
-               return null === (mW = null !== (EW = NW ? WW.EY.aiW(NW) : null) && void 0 !== EW ? EW : WW.EY.aiW(iW)) || void 0 === mW ? void 0 : mW.speed
-             }(WW, EW)) && void 0 !== PW ? PW : iW.speed, void(ZW = null !== (LW = NW.maxWalkingAngleOverride) && void 0 !== LW ? LW : iW.crouching ? .5 : null)
+               const uR = null === (GR = RR.zC.nyR(JR)) || void 0 === GR ? void 0 : GR.pe;
+               return null === (yR = null !== (tR = uR ? RR.zC.oGR(uR) : null) && void 0 !== tR ? tR : RR.zC.oGR(JR)) || void 0 === yR ? void 0 : yR.speed
+             }(RR, tR)) && void 0 !== ZR ? ZR : JR.speed, void(KR = null !== (qR = uR.maxWalkingAngleOverride) && void 0 !== qR ? qR : JR.crouching ? .5 : null)
```

#### 2245. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16739` → after: `L16423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16423) · [Before (L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16739)

```diff
-           tW = iW.drawnSpeed, ZW = null !== (OW = null === (mW = WW.EY.getState(EW, "fourLeggedMesh")) || void 0 === mW ? void 0 : mW.maxWalkingAngleOverride) && void 0 !== OW ? OW : null
+           VR = JR.drawnSpeed, KR = null !== (GR = null === (yR = RR.zC.getState(tR, "fourLeggedMesh")) || void 0 === yR ? void 0 : yR.maxWalkingAngleOverride) && void 0 !== GR ? GR : null
```

#### 2246. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16746` → after: `L16430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16430) · [Before (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16746)

```diff
-       const LW = (NW ? mW : 1.3 * PW) * OW / (2 * iW.walkingLegSwingDuration);
+       const qR = (uR ? yR : 1.3 * ZR) * GR / (2 * JR.walkingLegSwingDuration);
```

#### 2247. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16755` → after: `L16439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16439) · [Before (L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16755)

```diff
-       return null !== iW ? iW : (0, mW.f)(.16 * (WW - PW) + .9, .9, 1.4)
+       return null !== JR ? JR : (0, yR.e)(.16 * (RR - ZR) + .9, .9, 1.4)
```

#### 2248. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16763` → after: `L16447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16447) · [Before (L16763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16763)

```diff
-   38879: (WW, iW, OW) => {
+   38866: (RR, JR, GR) => {
```

#### 2249. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16765-L16766` → after: `L16449-L16450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16449-L16450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16449-L16450) · [Before (L16765-L16766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16765-L16766)

```diff
-       b: () => LW,
-       d: () => PW
+       e: () => qR,
+       f: () => ZR
```

#### 2250. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16768` → after: `L16452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16452) · [Before (L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16768)

```diff
-     const mW = new(OW(37646).e)(new URL(OW.p + OW.u(56), OW.b), {
+     const yR = new(GR(37561).b)(new URL(GR.p + GR.u(56), GR.b), {
```

#### 2251. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16772-L16774` → after: `L16456-L16458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16456-L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16456-L16458) · [Before (L16772-L16774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16772-L16774)

```diff
-     var EW = OW(38881),
-       NW = OW(3880);
-     const PW = new EW.c((async () => {
+     var tR = GR(38872),
+       uR = GR(3973);
+     const ZR = new tR.b((async () => {
```

#### 2252. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16792` → after: `L16476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16476) · [Before (L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16792)

```diff
-         const WW = await OW.e(238).then((() => OW(53694)));
+         const RR = await GR.e(238).then((() => GR(53522)));
```

#### 2253. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16806` → after: `L16490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16490) · [Before (L16806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16806)

```diff
-         WW instanceof ErrorEvent || (0, NW.e)("The world couldn't load. Refresh the page to keep playing.")
+         RR instanceof ErrorEvent || (0, uR.b)("The world couldn't load. Refresh the page to keep playing.")
```

#### 2254. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16811` → after: `L16495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16495) · [Before (L16811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16811)

```diff
-   39139: (WW, iW, OW) => {
+   39117: (RR, JR, GR) => {
```

#### 2255. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16813-L16819` → after: `L16497-L16503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16497-L16503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16497-L16503) · [Before (L16813-L16819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16813-L16819)

```diff
-       b: () => NW,
-       f: () => PW,
-       i: () => LW,
-       l: () => sW,
-       n: () => ZW,
-       p: () => lW,
-       q: () => AW
+       e: () => uR,
+       g: () => ZR,
+       h: () => qR,
+       k: () => WR,
+       o: () => KR,
+       q: () => rR,
+       r: () => eR
```

#### 2256. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16821` → after: `L16505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16505) · [Before (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16821)

```diff
-     var mW = OW(5747);
+     var yR = GR(5879);
```

#### 2257. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16843` → after: `L16527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16527) · [Before (L16843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16843)

```diff
-         boxes: mW.u.map(EW),
+         boxes: yR.o.map(tR),
```

#### 2258. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16848` → after: `L16532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16532) · [Before (L16848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16848)

```diff
-         boxes: mW.y.map(EW),
+         boxes: yR.w.map(tR),
```

#### 2259. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16861-L16862` → after: `L16545-L16546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16545-L16546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16545-L16546) · [Before (L16861-L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16861-L16862)

```diff
-         inner: wW("innerStairs", mW.v.innerLeft),
-         outer: wW("outerStairs", mW.v.outerLeft)
+         inner: fR("innerStairs", yR.s.innerLeft),
+         outer: fR("outerStairs", yR.s.outerLeft)
```

#### 2260. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16865-L16866` → after: `L16549-L16550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16549-L16550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16549-L16550) · [Before (L16865-L16866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16865-L16866)

```diff
-         inner: wW("upsideDownInnerStairs", mW.A.innerLeft),
-         outer: wW("upsideDownOuterStairs", mW.A.outerLeft)
+         inner: fR("upsideDownInnerStairs", yR.x.innerLeft),
+         outer: fR("upsideDownOuterStairs", yR.x.outerLeft)
```

#### 2261. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16872` → after: `L16556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16556) · [Before (L16872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16872)

```diff
-           if (null === iW) return WW ? cW : LW;
+           if (null === JR) return RR ? iR : qR;
```

#### 2262. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16877` → after: `L16561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16561) · [Before (L16877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16877)

```diff
-       return 0 === EW ? mW : {
+       return 0 === tR ? yR : {
```

#### 2263. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16879` → after: `L16563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16563) · [Before (L16879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16879)

```diff
-         key: `${mW.key}|turn${EW}`,
+         key: `${yR.key}|turn${tR}`,
```

#### 2264. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16920` → after: `L16604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16604) · [Before (L16920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16920)

```diff
-         throw new Error(`Box face ${iW} has no axis for uv ${WW}`)
+         throw new Error(`Box face ${JR} has no axis for uv ${RR}`)
```

#### 2265. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16976` → after: `L16660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16660) · [Before (L16976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16976)

```diff
-   38782: (WW, iW, OW) => {
+   38779: (RR, JR, GR) => {
```

#### 2266. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16978` → after: `L16662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16662) · [Before (L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16978)

```diff
-       b: () => wW
+       e: () => fR
```

#### 2267. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16980` → after: `L16664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16664) · [Before (L16980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16980)

```diff
-     var mW = OW(352),
+     var yR = GR(385),
```

#### 2268. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16982` → after: `L16666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16666) · [Before (L16982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16982)

```diff
-       NW = OW(38787);
+       uR = GR(38788);
```

#### 2269. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16988` → after: `L16672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16672) · [Before (L16988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16988)

```diff
-       return wW.isCameraDetachedFromPlayer(WW) && null !== (iW = PW.get(WW)) && void 0 !== iW ? iW : null
+       return fR.isCameraDetachedFromPlayer(RR) && null !== (JR = ZR.get(RR)) && void 0 !== JR ? JR : null
```

#### 2270. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L16993` → after: `L16677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16677) · [Before (L16993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L16993)

```diff
-         return !WW.EY.uOW(WW.camera.lG)
+         return !RR.zC.nyR(RR.camera.R6)
```

#### 2271. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17000` → after: `L16684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16684) · [Before (L17000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17000)

```diff
-         const LW = WW.EY.uOW(WW.camera.lG);
+         const qR = RR.zC.nyR(RR.camera.R6);
```

#### 2272. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17006` → after: `L16690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16690) · [Before (L17006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17006)

```diff
-           wW = WW.TZ.o4().f4;
+           fR = RR.lK.Z2().y5;
```

#### 2273. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17008-L17009` → after: `L16692-L16693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16692-L16693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16692-L16693) · [Before (L17008-L17009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17008-L17009)

```diff
-           followEntity: LW.MA,
-           DOW: LW.DOW,
+           followEntity: qR.pe,
+           MyR: qR.MyR,
```

#### 2274. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17011` → after: `L16695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16695) · [Before (L17011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17011)

```diff
-           savedZoomDistance: WW.camera.yG,
+           savedZoomDistance: RR.camera.w6,
```

#### 2275. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17013` → after: `L16697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16697) · [Before (L17013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17013)

```diff
-           facingMode: null !== (OW = NW.facingMode) && void 0 !== OW ? OW : "frozen",
+           facingMode: null !== (GR = uR.facingMode) && void 0 !== GR ? GR : "frozen",
```

#### 2276. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17016-L17018` → after: `L16700-L16702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16700-L16702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16700-L16702) · [Before (L17016-L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17016-L17018)

```diff
-         }), WW.camera.yG = 0, WW.camera.JG = 0, wW[0] = 0, wW[1] = 0, WW.EY.aiW(WW.Dv).heading = cW.heading, WW.EY.mV(WW.camera.lG, WW.EY.names.qS);
-         const tW = null !== (EW = NW.position) && void 0 !== EW ? EW : WW.camera.kF();
-         return WW.EY.setPosition(WW.camera.lG, [tW[0], tW[1], tW[2]]), mW(WW), !0
+         }), RR.camera.w6 = 0, RR.camera.I6 = 0, fR[0] = 0, fR[1] = 0, RR.zC.oGR(RR.WH).heading = iR.heading, RR.zC.Zm(RR.camera.R6, RR.zC.names.bC);
+         const VR = null !== (tR = uR.position) && void 0 !== tR ? tR : RR.camera.v_();
+         return RR.zC.setPosition(RR.camera.R6, [VR[0], VR[1], VR[2]]), yR(RR), !0
```

#### 2277. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17023` → after: `L16707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16707) · [Before (L17023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17023)

```diff
-         null === (iW = WW.EY.kOW(WW.Dv)) || void 0 === iW || iW.qwW()
+         null === (JR = RR.zC.uyR(RR.WH)) || void 0 === JR || JR.DVR()
```

#### 2278. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17033` → after: `L16717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16717) · [Before (L17033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17033)

```diff
-         return null !== (iW = null === (OW = cW(WW)) || void 0 === OW ? void 0 : OW.facing.heading) && void 0 !== iW ? iW : WW.camera.heading
+         return null !== (JR = null === (GR = iR(RR)) || void 0 === GR ? void 0 : GR.facing.heading) && void 0 !== JR ? JR : RR.camera.heading
```

#### 2279. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17038-L17039` → after: `L16722-L16723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16722-L16723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16722-L16723) · [Before (L17038-L17039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17038-L17039)

```diff
-         if (!OW) return EW().copy(iW, WW.camera.uF());
-         const mW = (0, NW.d)(OW.facing.heading, OW.facing.pitch);
+         if (!GR) return tR().copy(JR, RR.camera.m_());
+         const yR = (0, uR.e)(GR.facing.heading, GR.facing.pitch);
```

#### 2280. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17050-L17051` → after: `L16734-L16735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16734-L16735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16734-L16735) · [Before (L17050-L17051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17050-L17051)

```diff
-         WW.EY.zD(WW.camera.lG, WW.EY.names.qS, {
-           MA: OW.followEntity,
+         RR.zC.Jm(RR.camera.R6, RR.zC.names.bC, {
+           pe: GR.followEntity,
```

#### 2281. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17053-L17055` → after: `L16737-L16739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16737-L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16737-L16739) · [Before (L17053-L17055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17053-L17055)

```diff
-           DOW: OW.DOW
-         }), WW.camera.yG = OW.savedZoomDistance, WW.camera.JG = OW.savedZoomDistance;
-         const EW = WW.TZ.o4().f4;
+           MyR: GR.MyR
+         }), RR.camera.w6 = GR.savedZoomDistance, RR.camera.I6 = GR.savedZoomDistance;
+         const tR = RR.lK.Z2().y5;
```

#### 2282. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17059` → after: `L16743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16743) · [Before (L17059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17059)

```diff
-         return null !== (iW = null === (OW = cW(WW)) || void 0 === OW ? void 0 : OW.savedZoomDistance) && void 0 !== iW ? iW : 0
+         return null !== (JR = null === (GR = iR(RR)) || void 0 === GR ? void 0 : GR.savedZoomDistance) && void 0 !== JR ? JR : 0
```

#### 2283. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17062` → after: `L16746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16746) · [Before (L17062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17062)

```diff
-         return null !== (iW = null === (OW = cW(WW)) || void 0 === OW ? void 0 : OW.savedRigShift) && void 0 !== iW ? iW : LW
+         return null !== (JR = null === (GR = iR(RR)) || void 0 === GR ? void 0 : GR.savedRigShift) && void 0 !== JR ? JR : qR
```

#### 2284. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17065-L17066` → after: `L16749-L16750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16749-L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16749-L16750) · [Before (L17065-L17066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17065-L17066)

```diff
-           mW = OW && WW.EY.YG(OW.followEntity);
-         return !!mW && (OW.DOW ? OW.DOW(iW, !0, OW.followOffset) : EW().copy(iW, OW.followOffset), EW().add(iW, mW.Yz, iW), !0)
+           yR = GR && RR.zC.f6(GR.followEntity);
+         return !!yR && (GR.MyR ? GR.MyR(JR, !0, GR.followOffset) : tR().copy(JR, GR.followOffset), tR().add(JR, yR.B_, JR), !0)
```

#### 2285. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17075` → after: `L16759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16759) · [Before (L17075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17075)

```diff
-         return null !== (iW = null === (OW = cW(WW)) || void 0 === OW ? void 0 : OW.facing.pitch) && void 0 !== iW ? iW : WW.camera.pitch
+         return null !== (JR = null === (GR = iR(RR)) || void 0 === GR ? void 0 : GR.facing.pitch) && void 0 !== JR ? JR : RR.camera.pitch
```

#### 2286. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17079` → after: `L16763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16763) · [Before (L17079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17079)

```diff
-         return xW(WW) ? ZW(WW, iW) : EW().copy(iW, WW.camera.uF())
+         return wR(RR) ? KR(RR, JR) : tR().copy(JR, RR.camera.m_())
```

#### 2287. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17088` → after: `L16772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16772) · [Before (L17088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17088)

```diff
-         iW(WW) ? WW.EY.setPosition(WW.camera.lG, mW) : OW(WW, {
+         JR(RR) ? RR.zC.setPosition(RR.camera.R6, yR) : GR(RR, {
```

#### 2288. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17093` → after: `L16777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16777) · [Before (L17093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17093)

```diff
-         const cW = WW.EY.aiW(WW.Dv);
+         const iR = RR.zC.oGR(RR.WH);
```

#### 2289. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17098` → after: `L16782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16782) · [Before (L17098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17098)

```diff
-   38952: (WW, iW, OW) => {
+   38943: (RR, JR, GR) => {
```

#### 2290. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17101-L17102` → after: `L16785-L16786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16785-L16786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16785-L16786) · [Before (L17101-L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17101-L17102)

```diff
-       d: () => cW,
-       h: () => wW
+       c: () => iR,
+       d: () => fR
```

#### 2291. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17104` → after: `L16788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16788) · [Before (L17104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17104)

```diff
-     var mW = OW(5713);
+     var yR = GR(5836);
```

#### 2292. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17113` → after: `L16797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16797) · [Before (L17113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17113)

```diff
-         Sj: mW
+         BL: yR
```

#### 2293. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17147` → after: `L16831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16831) · [Before (L17147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17147)

```diff
-       return (iW, OW, EW) => WW.oZ.kR(iW, OW, EW) ? "ground" : WW.oZ.U_(iW, OW, EW) ? "water" === (0, mW.e)(WW.oZ.jR(iW, OW, EW)) ? "ground" : "hazard" : "empty"
+       return (JR, GR, tR) => RR.NK.aT(JR, GR, tR) ? "ground" : RR.NK.yRR(JR, GR, tR) ? "water" === (0, yR.f)(RR.NK.eT(JR, GR, tR)) ? "ground" : "hazard" : "empty"
```

#### 2294. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17150` → after: `L16834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16834) · [Before (L17150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17150)

```diff
-   39622: (WW, iW, OW) => {
+   39598: (RR, JR, GR) => {
```

#### 2295. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17152` → after: `L16836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16836) · [Before (L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17152)

```diff
-       c: () => oW
+       b: () => xR
```

#### 2296. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17154-L17155` → after: `L16838-L16839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16838-L16839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16838-L16839) · [Before (L17154-L17155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17154-L17155)

```diff
-     var mW = OW(39396),
-       EW = OW(352),
+     var yR = GR(39383),
+       tR = GR(385),
```

#### 2297. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17157-L17165` → after: `L16841-L16849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16841-L16849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16841-L16849) · [Before (L17157-L17165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17157-L17165)

```diff
-       PW = OW(182),
-       LW = OW(39629),
-       cW = OW(39422),
-       wW = OW(37555),
-       tW = OW(37559),
-       ZW = OW(2350),
-       xW = OW(2478),
-       lW = OW(632),
-       AW = OW(2937);
+       ZR = GR(203),
+       qR = GR(39603),
+       iR = GR(39410),
+       fR = GR(37466),
+       VR = GR(37470),
+       KR = GR(2421),
+       wR = GR(2532),
+       rR = GR(664),
+       eR = GR(3017);
```

#### 2298. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17189` → after: `L16873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16873) · [Before (L17189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17189)

```diff
-           blendMode: AW.d.Standard
+           blendMode: eR.c.Standard
```

#### 2299. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17192` → after: `L16876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16876) · [Before (L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17192)

```diff
-           WW.playParticleEffect(iW, LW ? OW : null)
+           RR.playParticleEffect(JR, qR ? GR : null)
```

#### 2300. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17254-L17256` → after: `L16938-L16940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16938-L16940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16938-L16940) · [Before (L17254-L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17254-L17256)

```diff
-     var kW = OW(349),
-       sW = OW(639),
-       MW = OW(344);
+     var UR = GR(382),
+       WR = GR(671),
+       AR = GR(377);
```

#### 2301. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17283` → after: `L16967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16967) · [Before (L17283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17283)

```diff
-         zx: 2.5,
+         Yw: 2.5,
```

#### 2302. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17314` → after: `L16998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R16998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L16998) · [Before (L17314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17314)

```diff
-           blendMode: AW.d.OneOne
+           blendMode: eR.c.OneOne
```

#### 2303. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17433` → after: `L17117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17117) · [Before (L17433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17433)

```diff
-           zx: 0,
+           Yw: 0,
```

#### 2304. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17451` → after: `L17135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17135) · [Before (L17451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17451)

```diff
-           zx: 0,
+           Yw: 0,
```

#### 2305. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17471` → after: `L17155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17155) · [Before (L17471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17471)

```diff
-           zx: 0,
+           Yw: 0,
```

#### 2306. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17530` → after: `L17214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17214) · [Before (L17530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17530)

```diff
-         ...Object.fromEntries(sW.t.map((WW => [(0, MW.Zb)(WW), {
+         ...Object.fromEntries(WR.v.map((RR => [(0, AR._b)(RR), {
```

#### 2307. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17650` → after: `L17334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17334) · [Before (L17650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17650)

```diff
-         ...Object.fromEntries(kW.j.map((WW => [WW, HW]))),
+         ...Object.fromEntries(UR.g.map((RR => [RR, bR]))),
```

#### 2308. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17655` → after: `L17339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17339) · [Before (L17655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17655)

```diff
-           zx: 0,
+           Yw: 0,
```

#### 2309. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17664` → after: `L17348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17348) · [Before (L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17664)

```diff
-           zx: 0,
+           Yw: 0,
```

#### 2310. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17690` → after: `L17374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17374) · [Before (L17690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17690)

```diff
-           zx: .05,
+           Yw: .05,
```

#### 2311. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17706` → after: `L17390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17390) · [Before (L17706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17706)

```diff
-         this.bloxd = WW, this.eId = iW, this.Hx = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.Hx = WW.Hx, this.type = (0, mW.f)(OW).item, this.spawnTime = Date.now()
+         this.bloxd = RR, this.eId = JR, this.xw = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.xw = RR.xw, this.type = (0, yR.e)(GR).item, this.spawnTime = Date.now()
```

#### 2312. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17710` → after: `L17394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17394) · [Before (L17710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17710)

```diff
-         this.Hx.EY.deleteEntity(this.eId)
+         this.xw.zC.deleteEntity(this.eId)
```

#### 2313. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17717` → after: `L17401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17401) · [Before (L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17717)

```diff
-           Hx: iW
+           xw: JR
```

#### 2314. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17719` → after: `L17403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17403) · [Before (L17719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17719)

```diff
-           EY: OW
+           zC: GR
```

#### 2315. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17724` → after: `L17408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17408) · [Before (L17724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17724)

```diff
-         OW.add([WW.x, WW.y, WW.z], EW, NW, null, null, !1, !1, this.eId), OW.zD(this.eId, OW.names.smoothToServerPos);
+         GR.add([RR.x, RR.y, RR.z], tR, uR, null, null, !1, !1, this.eId), GR.Jm(this.eId, GR.names.smoothToServerPos);
```

#### 2316. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17727-L17730` → after: `L17411-L17414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17411-L17414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17411-L17414) · [Before (L17727-L17730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17727-L17730)

```diff
-         } = (0, mW.f)(WW.type);
-         if (null !== PW && mW.d.includes(this.type)) {
-           if (PW === iW.Av) return;
-           const WW = iW.sV[iW.Dv][PW];
+         } = (0, yR.e)(RR.type);
+         if (null !== ZR && yR.b.includes(this.type)) {
+           if (ZR === JR.UH) return;
+           const RR = JR.Qm[JR.WH][ZR];
```

#### 2317. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17733` → after: `L17417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17417) · [Before (L17733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17733)

```diff
-         OW.zD(this.eId, "doOnFirstTick", {
+         GR.Jm(this.eId, "doOnFirstTick", {
```

#### 2318. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17735` → after: `L17419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17419) · [Before (L17735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17735)

```diff
-             OW.zD(this.eId, "hidingMeshManager", {
+             GR.Jm(this.eId, "hidingMeshManager", {
```

#### 2319. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17737` → after: `L17421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17421) · [Before (L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17737)

```diff
-                 OW.zD(this.eId, OW.names.mesh, {
+                 GR.Jm(this.eId, GR.names.mesh, {
```

#### 2320. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17739` → after: `L17423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17423) · [Before (L17739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17739)

```diff
-                   oLW: !1
+                   niR: !1
```

#### 2321. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17743` → after: `L17427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17427) · [Before (L17743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17743)

```diff
-                 OW.mV(this.eId, OW.names.mesh)
+                 GR.Zm(this.eId, GR.names.mesh)
```

#### 2322. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17754` → after: `L17438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17438) · [Before (L17754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17754)

```diff
-           Hx: mW
+           xw: yR
```

#### 2323. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17756-L17757` → after: `L17440-L17441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17440-L17441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17440-L17441) · [Before (L17756-L17757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17756-L17757)

```diff
-           EY: EW
-         } = mW, AW = mW.Dv, kW = this.getSpawnPos(AW), sW = {
+           zC: tR
+         } = yR, eR = yR.WH, UR = this.getSpawnPos(eR), WR = {
```

#### 2324. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17763` → after: `L17447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17447) · [Before (L17763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17763)

```diff
-               } = nW[this.type], cW = EW.Vk(this.eId), kW = this.bloxd.getClosestSolidBlock(cW), [sW, MW, KW] = cW;
+               } = vR[this.type], iR = tR.vW(this.eId), UR = this.bloxd.getClosestSolidBlock(iR), [WR, AR, CR] = iR;
```

#### 2325. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17767-L17770` → after: `L17451-L17454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17451-L17454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17451-L17454) · [Before (L17767-L17770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17767-L17770)

```diff
-                 return void(0, ZW.sendColyMessage)(xW.kg, {
-                   cL: this.eId,
-                   wL: cW,
-                   tL: WW
+                 return void(0, KR.sendColyMessage)(wR.Eg, {
+                   rq: this.eId,
+                   eq: iR,
+                   aq: RR
```

#### 2326. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17773` → after: `L17457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17457) · [Before (L17773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17773)

```diff
-               const SW = null !== (WW = LW.type) && void 0 !== WW ? WW : bW.Boom;
+               const XR = null !== (RR = qR.type) && void 0 !== RR ? RR : aR.Boom;
```

#### 2327. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17775` → after: `L17459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17459) · [Before (L17775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17775)

```diff
-               const YW = EW.Vk(AW),
+               const MR = tR.vW(eR),
```

#### 2328. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17780` → after: `L17464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17464) · [Before (L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17780)

```diff
-               NW().TP(YW, yW) < TW + 1 && wW.c.play((0, tW.h)("cannonFire"), null !== (hW = null !== (HW = LW.volume) && void 0 !== HW ? HW : nW[this.type].volume) && void 0 !== hW ? hW : 1, yW, TW, JW).rate(.8 + .2 * Math.random());
+               uR().xZ(MR, BR) < lR + 1 && fR.d.play((0, VR.f)("cannonFire"), null !== (gR = null !== (bR = qR.volume) && void 0 !== bR ? bR : vR[this.type].volume) && void 0 !== gR ? gR : 1, BR, lR, pR).rate(.8 + .2 * Math.random());
```

#### 2329. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17784` → after: `L17468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17468) · [Before (L17784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17784)

```diff
-                 if (NW().set(jW, 0, 0, 0), cW && !lW.i.includes(OW) && "Mesh" !== OW) return {
+                 if (uR().set(LR, 0, 0, 0), iR && !rR.k.includes(GR) && "Mesh" !== GR) return {
```

#### 2330. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17788` → after: `L17472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17472) · [Before (L17788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17788)

```diff
-                 const wW = WW.bloxd.isClient ? [...WW.EY.Vk(iW)] : WW.room.api.Vk(iW);
+                 const fR = RR.bloxd.isClient ? [...RR.zC.vW(JR)] : RR.room.api.vW(JR);
```

#### 2331. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17794` → after: `L17478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17478) · [Before (L17794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17794)

```diff
-                   const EW = WW.EY.jB(iW);
+                   const tR = RR.zC.Lk(JR);
```

#### 2332. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17796` → after: `L17480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17480) · [Before (L17796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17796)

```diff
-                   EW && (NW = EW.Mx.vec[1] / 2);
+                   tR && (uR = tR.Xw.vec[1] / 2);
```

#### 2333. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17803` → after: `L17487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17487) · [Before (L17803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17803)

```diff
-                   return mW >= LW ? PW : NW + (mW - OW) / (LW - OW) * (PW - NW)
+                   return yR >= qR ? ZR : uR + (yR - GR) / (qR - GR) * (ZR - uR)
```

#### 2334. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17813-L17817` → after: `L17497-L17501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17497-L17501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17497-L17501) · [Before (L17813-L17817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17813-L17817)

```diff
-               }(this.Hx, AW, "Player", SW, null !== (iW = null === (OW = LW.knockbackFactor) || void 0 === OW ? void 0 : OW.terrain) && void 0 !== iW ? iW : 1, 2 * LW.power, yW, LW.ignoreProjectiles);
-               NW().scale(oW, oW, 1 / PW.f.clientTicksPerSecond), EW.jB(mW.Dv).applyImpulse([oW[0], oW[1], oW[2]]), (0, ZW.sendColyMessage)(xW.kg, {
-                 cL: this.eId,
-                 wL: cW,
-                 tL: oW
+               }(this.xw, eR, "Player", XR, null !== (JR = null === (GR = qR.knockbackFactor) || void 0 === GR ? void 0 : GR.terrain) && void 0 !== JR ? JR : 1, 2 * qR.power, BR, qR.ignoreProjectiles);
+               uR().scale(xR, xR, 1 / ZR.g.clientTicksPerSecond), tR.Lk(yR.WH).applyImpulse([xR[0], xR[1], xR[2]]), (0, KR.sendColyMessage)(wR.Eg, {
+                 rq: this.eId,
+                 eq: iR,
+                 aq: xR
```

#### 2335. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17823` → after: `L17507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17507) · [Before (L17823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17823)

```diff
-           EW.zD(this.eId, "doOnFirstTick", {
+           tR.Jm(this.eId, "doOnFirstTick", {
```

#### 2336. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17832-L17837` → after: `L17516-L17521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17516-L17521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17516-L17521) · [Before (L17832-L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17832-L17837)

```diff
-         this.eId = EW.add(kW, KW, SW, null, null, !0, !1).toString(), (0, ZW.sendColyMessage)(xW.ng, {
-             cL: this.eId,
-             Qt: this.type,
-             WZ: WW,
-             bP: this.Hx.camera.pG
-           }), wW.c.play((0, tW.h)("bow"), .6 * (null !== (iW = nW[this.type].volume) && void 0 !== iW ? iW : 1)).rate(.6 + .2 * Math.random()), EW.zD(this.eId, "doOnFirstTick", {
+         this.eId = tR.add(UR, CR, XR, null, null, !0, !1).toString(), (0, KR.sendColyMessage)(wR.Gg, {
+             rq: this.eId,
+             hV: this.type,
+             RK: RR,
+             CZ: this.xw.camera.q_
+           }), fR.d.play((0, VR.f)("bow"), .6 * (null !== (JR = vR[this.type].volume) && void 0 !== JR ? JR : 1)).rate(.6 + .2 * Math.random()), tR.Jm(this.eId, "doOnFirstTick", {
```

#### 2337. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17839` → after: `L17523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17523) · [Before (L17839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17839)

```diff
-               EW.zD(this.eId, "hidingMeshManager", {
+               tR.Jm(this.eId, "hidingMeshManager", {
```

#### 2338. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17841` → after: `L17525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17525) · [Before (L17841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17841)

```diff
-                   EW.zD(this.eId, EW.names.mesh, {
+                   tR.Jm(this.eId, tR.names.mesh, {
```

#### 2339. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17843` → after: `L17527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17527) · [Before (L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17843)

```diff
-                     oLW: !0
+                     niR: !0
```

#### 2340. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17847` → after: `L17531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17531) · [Before (L17847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17847)

```diff
-                   EW.mV(this.eId, EW.names.mesh)
+                   tR.Zm(this.eId, tR.names.mesh)
```

#### 2341. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17855-L17856` → after: `L17539-L17540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17539-L17540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17539-L17540) · [Before (L17855-L17856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17855-L17856)

```diff
-             NW().sqrDist(EW.Vk(this.eId), EW.Vk(AW)) > 1e4 && ((0, ZW.sendColyMessage)(xW.og, {
-               cL: this.eId
+             uR().sqrDist(tR.vW(this.eId), tR.vW(eR)) > 1e4 && ((0, KR.sendColyMessage)(wR.Ig, {
+               rq: this.eId
```

#### 2342. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17859-L17860` → after: `L17543-L17544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17543-L17544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17543-L17544) · [Before (L17859-L17860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17859-L17860)

```diff
-             (0, ZW.sendColyMessage)(xW.og, {
-               cL: this.eId
+             (0, KR.sendColyMessage)(wR.Ig, {
+               rq: this.eId
```

#### 2343. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17862` → after: `L17546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17546) · [Before (L17862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17862)

```diff
-           }), null !== (OW = nW[this.type].autoRemoveAfterTime) && void 0 !== OW ? OW : 6e4, this.eId), EW.zD(this.eId, "collideTerrain", {
+           }), null !== (GR = vR[this.type].autoRemoveAfterTime) && void 0 !== GR ? GR : 6e4, this.eId), tR.Jm(this.eId, "collideTerrain", {
```

#### 2344. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17865` → after: `L17549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17549) · [Before (L17865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17865)

```diff
-               (0, cW.BLW)(EW.getState(this.eId, "physics"), EW.YG(this.eId)), EW.OcW(this.eId, EW.YG(this.eId));
+               (0, iR.giR)(tR.getState(this.eId, "physics"), tR.f6(this.eId)), tR.ziR(this.eId, tR.f6(this.eId));
```

#### 2345. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17867-L17868` → after: `L17551-L17552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17551-L17552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17551-L17552) · [Before (L17867-L17868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17867-L17868)

```diff
-                 mW = EW.jB(this.eId);
-               NW().length(mW.Sj) > .1 && OW && ((0, LW.d)(this.Hx, this.eId), !EW.liW(this.eId, "collideTerrain")) || (null === (WW = (iW = sW[this.type]).onHitTerrain) || void 0 === WW || WW.call(iW), OW && MW())
+                 yR = tR.Lk(this.eId);
+               uR().length(yR.BL) > .1 && GR && ((0, qR.g)(this.xw, this.eId), !tR.RGR(this.eId, "collideTerrain")) || (null === (RR = (JR = WR[this.type]).onHitTerrain) || void 0 === RR || RR.call(JR), GR && AR())
```

#### 2346. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17870` → after: `L17554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17554) · [Before (L17870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17870)

```diff
-           }), EW.zD(this.eId, "collideEntitiesProjectile", {
+           }), tR.Jm(this.eId, "collideEntitiesProjectile", {
```

#### 2347. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17877-L17878` → after: `L17561-L17562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17561-L17562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17561-L17562) · [Before (L17877-L17878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17877-L17878)

```diff
-             const tW = WW.EY.jB(iW),
-               ZW = NW().copy(tW.Sj, mW),
+             const VR = RR.zC.Lk(JR),
+               KR = uR().copy(VR.BL, yR),
```

#### 2348. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17880-L17881` → after: `L17564-L17565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17564-L17565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17564-L17565) · [Before (L17880-L17881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17880-L17881)

```diff
-             NW().normalize(ZW, ZW), NW().scale(ZW, ZW, xW.speed * cW), tW.gravityMultiplier = (null !== (EW = xW.gravityMult) && void 0 !== EW ? EW : 1) * wW, tW.FP = .02, tW.zx = (null !== (PW = xW.zx) && void 0 !== PW ? PW : .1) * tW.FP, tW.fluidDrag = null !== (LW = xW.fluidDr … [truncated]
-           }(this.Hx, this.eId, this.type, this.Hx.camera.pG)
+             uR().normalize(KR, KR), uR().scale(KR, KR, wR.speed * iR), VR.gravityMultiplier = (null !== (tR = wR.gravityMult) && void 0 !== tR ? tR : 1) * fR, VR.yq = .02, VR.Yw = (null !== (ZR = wR.Yw) && void 0 !== ZR ? ZR : .1) * VR.yq, VR.fluidDrag = null !== (qR = wR.fluidDr … [truncated]
+           }(this.xw, this.eId, this.type, this.xw.camera.q_)
```

#### 2349. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17885` → after: `L17569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17569) · [Before (L17885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17885)

```diff
-         if ("torso" === nW[this.type].spawnOffset) iW = NW().clone(this.Hx.EY.Vk(WW)), iW[1] += PW.f.ZU / 2;
+         if ("torso" === vR[this.type].spawnOffset) JR = uR().clone(this.xw.zC.vW(RR)), JR[1] += ZR.g.Kn / 2;
```

#### 2350. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17892-L17893` → after: `L17576-L17577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17576-L17577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17576-L17577) · [Before (L17892-L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17892-L17893)

```diff
-           width: null !== (WW = null !== (iW = null === (OW = nW[this.type]) || void 0 === OW ? void 0 : OW.collisionWidth) && void 0 !== iW ? iW : null === (mW = nW[this.type]) || void 0 === mW ? void 0 : mW.collisionHeight) && void 0 !== WW ? WW : .1,
-           height: null !== (EW = null !== (NW = null === (PW = nW[this.type]) || void 0 === PW ? void 0 : PW.collisionHeight) && void 0 !== NW ? NW : null === (LW = nW[this.type]) || void 0 === LW ? void 0 : LW.collisionWidth) && void 0 !== EW ? EW : .1
+           width: null !== (RR = null !== (JR = null === (GR = vR[this.type]) || void 0 === GR ? void 0 : GR.collisionWidth) && void 0 !== JR ? JR : null === (yR = vR[this.type]) || void 0 === yR ? void 0 : yR.collisionHeight) && void 0 !== RR ? RR : .1,
+           height: null !== (tR = null !== (uR = null === (ZR = vR[this.type]) || void 0 === ZR ? void 0 : ZR.collisionHeight) && void 0 !== uR ? uR : null === (qR = vR[this.type]) || void 0 === qR ? void 0 : qR.collisionWidth) && void 0 !== tR ? tR : .1
```

#### 2351. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17898` → after: `L17582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17582) · [Before (L17898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17898)

```diff
-   38767: (WW, iW, OW) => {
+   38771: (RR, JR, GR) => {
```

#### 2352. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17900-L17903` → after: `L17584-L17587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17584-L17587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17584-L17587) · [Before (L17900-L17903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17900-L17903)

```diff
-       b: () => NW,
-       d: () => PW,
-       f: () => EW,
-       h: () => LW
+       c: () => uR,
+       g: () => ZR,
+       h: () => tR,
+       i: () => qR
```

#### 2353. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17905` → after: `L17589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17589) · [Before (L17905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17905)

```diff
-     var mW = OW(2365);
+     var yR = GR(2435);
```

#### 2354. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17909-L17910` → after: `L17593-L17594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17593-L17594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17593-L17594) · [Before (L17909-L17910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17909-L17910)

```diff
-       const EW = (0, mW.h)();
-       return null !== (iW = null === (OW = EW.sV[EW.Dv][WW]) || void 0 === OW ? void 0 : OW.canAttack) && void 0 !== iW && iW || PW(WW)
+       const tR = (0, yR.i)();
+       return null !== (JR = null === (GR = tR.Qm[tR.WH][RR]) || void 0 === GR ? void 0 : GR.canAttack) && void 0 !== JR && JR || ZR(RR)
```

#### 2355. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17915-L17916` → after: `L17599-L17600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17599-L17600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17599-L17600) · [Before (L17915-L17916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17915-L17916)

```diff
-       const EW = (0, mW.h)();
-       return null !== (iW = null === (OW = EW.sV[EW.Dv][WW]) || void 0 === OW ? void 0 : OW.interactionPrompt) && void 0 !== iW ? iW : null
+       const tR = (0, yR.i)();
+       return null !== (JR = null === (GR = tR.Qm[tR.WH][RR]) || void 0 === GR ? void 0 : GR.interactionPrompt) && void 0 !== JR ? JR : null
```

#### 2356. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17922-L17923` → after: `L17606-L17607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17606-L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17606-L17607) · [Before (L17922-L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17922-L17923)

```diff
-       const EW = (0, mW.h)();
-       return null !== (iW = null === (OW = EW.sV[EW.Dv][WW]) || void 0 === OW ? void 0 : OW.interactable) && void 0 !== iW && iW
+       const tR = (0, yR.i)();
+       return null !== (JR = null === (GR = tR.Qm[tR.WH][RR]) || void 0 === GR ? void 0 : GR.interactable) && void 0 !== JR && JR
```

#### 2357. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17929-L17930` → after: `L17613-L17614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17613-L17614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17613-L17614) · [Before (L17929-L17930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17929-L17930)

```diff
-           const WW = (0, mW.h)(),
-             iW = WW.sV[WW.Dv];
+           const RR = (0, yR.i)(),
+             JR = RR.Qm[RR.WH];
```

#### 2358. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17937` → after: `L17621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17621) · [Before (L17937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17937)

```diff
-       const NW = null !== WW && void 0 !== WW ? WW : mW.l.localPlayerPickActionHelper;
+       const uR = null !== RR && void 0 !== RR ? RR : yR.k.localPlayerPickActionHelper;
```

#### 2359. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17939-L17941` → after: `L17623-L17625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17623-L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17623-L17625) · [Before (L17939-L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17939-L17941)

```diff
-       const LW = (0, mW.h)(),
-         cW = null !== (OW = NW.getPickEntityResult(null !== (EW = null !== iW && void 0 !== iW ? iW : LW.jiW) && void 0 !== EW ? EW : LW.camera.uF())) && void 0 !== OW ? OW : null;
-       return PW(cW) ? cW : null
+       const qR = (0, yR.i)(),
+         iR = null !== (GR = uR.getPickEntityResult(null !== (tR = null !== JR && void 0 !== JR ? JR : qR.yGR) && void 0 !== tR ? tR : qR.camera.m_())) && void 0 !== GR ? GR : null;
+       return ZR(iR) ? iR : null
```

#### 2360. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17944` → after: `L17628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17628) · [Before (L17944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17944)

```diff
-   38314: (WW, iW, OW) => {
+   38267: (RR, JR, GR) => {
```

#### 2361. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17946` → after: `L17630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17630) · [Before (L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17946)

```diff
-       e: () => tW
+       c: () => VR
```

#### 2362. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17948-L17950` → after: `L17632-L17634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17632-L17634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17632-L17634) · [Before (L17948-L17950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17948-L17950)

```diff
-     var mW = OW(2937),
-       EW = OW(38307),
-       NW = OW(38320);
+     var yR = GR(3017),
+       tR = GR(38265),
+       uR = GR(38275);
```

#### 2363. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17954` → after: `L17638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17638) · [Before (L17954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17954)

```diff
-         this.Hx = WW, this.now = iW, this.animations = new Map, this.warned = new Set
+         this.xw = RR, this.now = JR, this.animations = new Map, this.warned = new Set
```

#### 2364. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17963` → after: `L17647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17647) · [Before (L17963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17963)

```diff
-         "clip" === (null === ZW || void 0 === ZW ? void 0 : ZW.kind) && (null === tW || void 0 === tW || null === (xW = tW.getRigController()) || void 0 === xW || xW.stopClip(ZW.bO));
+         "clip" === (null === KR || void 0 === KR ? void 0 : KR.kind) && (null === VR || void 0 === VR || null === (wR = VR.getRigController()) || void 0 === wR || wR.stopClip(KR.rG));
```

#### 2365. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17965-L17966` → after: `L17649-L17650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17649-L17650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17649-L17650) · [Before (L17965-L17966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17965-L17966)

```diff
-           lO: mW,
-           AO: Math.max(NW, 0),
+           KG: yR,
+           wG: Math.max(uR, 0),
```

#### 2366. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17974` → after: `L17658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17658) · [Before (L17974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17974)

```diff
-         if (null === tW || void 0 === tW || tW.stopAnimation(iW), null === cW || iW !== EW.d.Custom) return void this.forget(WW, iW);
+         if (null === VR || void 0 === VR || VR.stopAnimation(JR), null === iR || JR !== tR.h.Custom) return void this.forget(RR, JR);
```

#### 2367. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17977-L17978` → after: `L17661-L17662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17661-L17662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17661-L17662) · [Before (L17977-L17978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17977-L17978)

```diff
-           bO: cW,
-           jO: Math.max(wW, 0),
+           rG: iR,
+           eG: Math.max(fR, 0),
```

#### 2368. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17982` → after: `L17666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17666) · [Before (L17982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17982)

```diff
-         const bW = null !== (LW = null === tW || void 0 === tW ? void 0 : tW.getRigController()) && void 0 !== LW ? LW : null;
+         const aR = null !== (qR = null === VR || void 0 === VR ? void 0 : VR.getRigController()) && void 0 !== qR ? qR : null;
```

#### 2369. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L17993-L17994` → after: `L17677-L17678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17677-L17678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17677-L17678) · [Before (L17993-L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L17993-L17994)

```diff
-             AO: LW,
-             lO: cW,
+             wG: qR,
+             KG: iR,
```

#### 2370. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18002` → after: `L17686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17686) · [Before (L18002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18002)

```diff
-         const mW = null === (OW = this.animations.get(WW)) || void 0 === OW ? void 0 : OW.get(EW.d.Custom);
+         const yR = null === (GR = this.animations.get(RR)) || void 0 === GR ? void 0 : GR.get(tR.h.Custom);
```

#### 2371. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18007` → after: `L17691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17691) · [Before (L18007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18007)

```diff
-         return [...null !== (iW = null === (OW = this.animations.get(WW)) || void 0 === OW ? void 0 : OW.keys()) && void 0 !== iW ? iW : []]
+         return [...null !== (JR = null === (GR = this.animations.get(RR)) || void 0 === GR ? void 0 : GR.keys()) && void 0 !== JR ? JR : []]
```

#### 2372. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18011` → after: `L17695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17695) · [Before (L18011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18011)

```diff
-         for (const [mW, EW] of null !== (OW = this.animations.get(WW)) && void 0 !== OW ? OW : []) {
+         for (const [yR, tR] of null !== (GR = this.animations.get(RR)) && void 0 !== GR ? GR : []) {
```

#### 2373. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18015` → after: `L17699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17699) · [Before (L18015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18015)

```diff
-             AO: EW.AO
+             wG: tR.wG
```

#### 2374. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18017-L18018` → after: `L17701-L17702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17701-L17702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17701-L17702) · [Before (L18017-L18018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18017-L18018)

```diff
-             bO: EW.bO,
-             AO: EW.AO
+             rG: tR.rG,
+             wG: tR.wG
```

#### 2375. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18031` → after: `L17715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17715) · [Before (L18031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18031)

```diff
-             if (null === mW || void 0 === mW || mW.stopAnimation(iW), "clip" === EW.kind) null === mW || void 0 === mW || null === (WW = mW.getRigController()) || void 0 === WW || WW.stopClip(EW.bO)
+             if (null === yR || void 0 === yR || yR.stopAnimation(JR), "clip" === tR.kind) null === yR || void 0 === yR || null === (RR = yR.getRigController()) || void 0 === RR || RR.stopClip(tR.rG)
```

#### 2376. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18038` → after: `L17722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17722) · [Before (L18038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18038)

```diff
-         return null !== (iW = this.Hx.EY.getState(WW, "animator")) && void 0 !== iW ? iW : null
+         return null !== (JR = this.xw.zC.getState(RR, "animator")) && void 0 !== JR ? JR : null
```

#### 2377. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18050-L18053` → after: `L17734-L17737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17734-L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17734-L17737) · [Before (L18050-L18053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18050-L18053)

```diff
-           bO: OW,
-           lO: mW,
-           AO: EW,
-           jO: NW,
+           rG: GR,
+           KG: yR,
+           wG: tR,
+           eG: uR,
```

#### 2378. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18056` → after: `L17740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17740) · [Before (L18056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18056)

```diff
-         "noClip" === cW ? this.warnOnce(`${OW}|${wW}`, `Can't play "${OW}": ${wW} has no clip by that name`) : "ambiguous" === cW && this.warnOnce(`${OW}|${wW}`, `Can't play "${OW}" on ${wW}: several clips are called that, so give its full name`)
+         "noClip" === iR ? this.warnOnce(`${GR}|${fR}`, `Can't play "${GR}": ${fR} has no clip by that name`) : "ambiguous" === iR && this.warnOnce(`${GR}|${fR}`, `Can't play "${GR}" on ${fR}: several clips are called that, so give its full name`)
```

#### 2379. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18067` → after: `L17751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17751) · [Before (L18067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18067)

```diff
-         this.now = iW, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.UE = new Set, this.healthFracs = new M … [truncated]
+         this.now = JR, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.Mt = new Set, this.healthFracs = new M … [truncated]
```

#### 2380. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18070` → after: `L17754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17754) · [Before (L18070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18070)

```diff
-         ZW(this.attachments, WW).set(iW.Li, iW)
+         KR(this.attachments, RR).set(JR.fJ, JR)
```

#### 2381. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18077` → after: `L17761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17761) · [Before (L18077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18077)

```diff
-         return [...null !== (iW = null === (OW = this.attachments.get(WW)) || void 0 === OW ? void 0 : OW.values()) && void 0 !== iW ? iW : []]
+         return [...null !== (JR = null === (GR = this.attachments.get(RR)) || void 0 === GR ? void 0 : GR.values()) && void 0 !== JR ? JR : []]
```

#### 2382. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18095` → after: `L17779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17779) · [Before (L18095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18095)

```diff
-         EW || (EW = Object.create(null), this.particleSystemUpdates.set(WW, EW)), (0, mW.r)(EW[iW] ??= {}, OW)
+         tR || (tR = Object.create(null), this.particleSystemUpdates.set(RR, tR)), (0, yR.l)(tR[JR] ??= {}, GR)
```

#### 2383. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18117` → after: `L17801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17801) · [Before (L18117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18117)

```diff
-         return null !== (iW = this.effects.get(WW)) && void 0 !== iW ? iW : LW
+         return null !== (JR = this.effects.get(RR)) && void 0 !== JR ? JR : qR
```

#### 2384. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18125` → after: `L17809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17809) · [Before (L18125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18125)

```diff
-           zN: iW ? OW : null
+           yZ: JR ? GR : null
```

#### 2385. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18132` → after: `L17816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17816) · [Before (L18132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18132)

```diff
-         iW ? this.UE.add(WW) : this.UE.delete(WW)
+         JR ? this.Mt.add(RR) : this.Mt.delete(RR)
```

#### 2386. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18135` → after: `L17819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17819) · [Before (L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18135)

```diff
-         return this.UE.has(WW)
+         return this.Mt.has(RR)
```

#### 2387. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18142` → after: `L17826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17826) · [Before (L18142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18142)

```diff
-         return null !== (iW = this.healthFracs.get(WW)) && void 0 !== iW ? iW : null
+         return null !== (JR = this.healthFracs.get(RR)) && void 0 !== JR ? JR : null
```

#### 2388. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18145` → after: `L17829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17829) · [Before (L18145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18145)

```diff
-         this.animations.remove(WW), this.attachments.delete(WW), this.attachmentGenerations.delete(WW), this.particleSystemUpdates.delete(WW), this.effects.delete(WW), this.floating.delete(WW), this.UE.delete(WW), this.healthFracs.delete(WW)
+         this.animations.remove(RR), this.attachments.delete(RR), this.attachmentGenerations.delete(RR), this.particleSystemUpdates.delete(RR), this.effects.delete(RR), this.floating.delete(RR), this.Mt.delete(RR), this.healthFracs.delete(RR)
```

#### 2389. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18148` → after: `L17832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17832) · [Before (L18148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18148)

```diff
-         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.UE.clear(), this.healthFracs.clear()
+         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.Mt.clear(), this.healthFracs.clear()
```

#### 2390. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18161-L18164` → after: `L17845-L17848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17845-L17848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17845-L17848) · [Before (L18161-L18164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18161-L18164)

```diff
-               Li: iW,
-               ci: OW,
-               wi: mW,
-               ti: EW
+               fJ: JR,
+               VJ: GR,
+               KJ: yR,
+               wJ: tR
```

#### 2391. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18167-L18169` → after: `L17851-L17853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17851-L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17851-L17853) · [Before (L18167-L18169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18167-L18169)

```diff
-               ci: OW,
-               wi: mW,
-               ti: EW
+               VJ: GR,
+               KJ: yR,
+               wJ: tR
```

#### 2392. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18173` → after: `L17857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17857) · [Before (L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18173)

```diff
-           vY: JSON.parse(JSON.stringify(null !== (iW = this.particleSystemUpdates.get(WW)) && void 0 !== iW ? iW : {})),
+           pM: JSON.parse(JSON.stringify(null !== (JR = this.particleSystemUpdates.get(RR)) && void 0 !== JR ? JR : {})),
```

#### 2393. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18175-L18177` → after: `L17859-L17861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17859-L17861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17859-L17861) · [Before (L18175-L18177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18175-L18177)

```diff
-           floating: null !== (OW = this.floating.get(WW)) && void 0 !== OW ? OW : null,
-           UE: this.UE.has(WW),
-           DE: this.getHealthFrac(WW)
+           floating: null !== (GR = this.floating.get(RR)) && void 0 !== GR ? GR : null,
+           Mt: this.Mt.has(RR),
+           Et: this.getHealthFrac(RR)
```

#### 2394. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18181` → after: `L17865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17865) · [Before (L18181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18181)

```diff
-         return this.animations.retainedTypes(WW).length > 0 || this.attachments.has(WW) || this.attachmentGenerations.has(WW) || this.particleSystemUpdates.has(WW) || this.effects.has(WW) || this.floating.has(WW) || this.UE.has(WW) || this.healthFracs.has(WW)
+         return this.animations.retainedTypes(RR).length > 0 || this.attachments.has(RR) || this.attachmentGenerations.has(RR) || this.particleSystemUpdates.has(RR) || this.effects.has(RR) || this.floating.has(RR) || this.Mt.has(RR) || this.healthFracs.has(RR)
```

#### 2395. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18201` → after: `L17885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17885) · [Before (L18201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18201)

```diff
-   39274: (WW, iW, OW) => {
+   39256: (RR, JR, GR) => {
```

#### 2396. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18205` → after: `L17890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17890) · [Before (L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18205)

```diff
-       k: () => Ti,
+       i: () => AJ,
```

#### 2397. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18207` → after: `L17892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17892) · [Before (L18207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18207)

```diff
-       p: () => Hi,
+       m: () => LJ,
```

#### 2398. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18209-L18212` → after: `L17894-L17896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17894-L17896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17894-L17896) · [Before (L18209-L18212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18209-L18212)

```diff
-       s: () => Ki,
-       v: () => ki,
-       z: () => ui,
-       B: () => Si
+       r: () => UJ,
+       u: () => vJ,
+       x: () => XJ
```

#### 2399. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18214-L18241` → after: `L17898-L17925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17898-L17925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17898-L17925) · [Before (L18214-L18241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18214-L18241)

```diff
-     var mW = OW(38369),
-       EW = OW(38235),
-       NW = OW(2350),
-       PW = OW(37575),
-       LW = OW(39280),
-       cW = OW(39285),
-       wW = OW(38219),
-       tW = OW(38314),
-       ZW = OW(38918),
-       xW = OW(38839),
-       lW = OW(632),
-       AW = OW(154),
-       bW = OW(39311),
-       jW = OW(3083),
-       UW = OW(3540),
-       kW = OW(3095),
- ... (12 more removed lines; see GitHub link above)
+     var yR = GR(38329),
+       tR = GR(38195),
+       uR = GR(2421),
+       ZR = GR(37494),
+       qR = GR(39259),
+       iR = GR(39261),
+       fR = GR(38178),
+       VR = GR(38267),
+       KR = GR(38909),
+       wR = GR(38831),
+       rR = GR(664),
+       eR = GR(163),
+       aR = GR(39291),
+       LR = GR(3178),
+       nR = GR(3644),
+       UR = GR(3188),
+ ... (12 more added lines; see GitHub link above)
```

#### 2400. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18243-L18249` → after: `L17927-L17933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17927-L17933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17927-L17933) · [Before (L18243-L18249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18243-L18249)

```diff
-       dW = OW(2061);
-     var eW = OW(27),
-       vW = OW(4337),
-       gW = OW(643),
-       DW = OW(4344),
-       VW = OW(38358),
-       pW = OW(4390);
+       NR = GR(2163);
+     var DR = GR(32),
+       HR = GR(4422),
+       oR = GR(679),
+       cR = GR(4428),
+       PR = GR(38317),
+       IR = GR(4479);
```

#### 2401. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18251-L18252` → after: `L17935-L17936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17935-L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17935-L17936) · [Before (L18251-L18252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18251-L18252)

```diff
-     var CW = OW(2365),
-       XW = OW(38224),
+     var zR = GR(2435),
+       SR = GR(38181),
```

#### 2402. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18254-L18273` → after: `L17938-L17957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17938-L17957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17938-L17957) · [Before (L18254-L18273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18254-L18273)

```diff
-       qW = OW(39291),
-       RW = OW(38336),
-       GW = OW(39294),
-       IW = OW(39308),
-       aW = OW(38500),
-       rW = OW(38502),
-       zW = OW(39198),
-       FW = OW(39025),
-       QW = OW(38485),
-       Wi = OW(38411),
-       ii = OW(38454),
-       Oi = OW(38333),
-       mi = OW(39314),
-       Ei = OW(39322),
-       Ni = OW(38364),
-       Pi = OW(38526),
- ... (4 more removed lines; see GitHub link above)
+       dR = GR(39270),
+       ER = GR(38296),
+       YR = GR(39274),
+       kR = GR(39288),
+       QR = GR(38460),
+       FR = GR(38466),
+       TR = GR(39172),
+       sR = GR(39010),
+       hR = GR(38453),
+       RJ = GR(38371),
+       JJ = GR(38417),
+       GJ = GR(38287),
+       yJ = GR(39297),
+       tJ = GR(39300),
+       uJ = GR(38325),
+       ZJ = GR(38489),
+ ... (4 more added lines; see GitHub link above)
```

#### 2403. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18276` → after: `L17960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17960) · [Before (L18276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18276)

```diff
-         this.Hx = WW, this.vehicleEId = null, this.previousHeading = 0
+         this.xw = RR, this.vehicleEId = null, this.previousHeading = 0
```

#### 2404. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18284` → after: `L17968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17968) · [Before (L18284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18284)

```diff
-           EY: EW,
+           zC: tR,
```

#### 2405. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18286` → after: `L17970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17970) · [Before (L18286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18286)

```diff
-           Dv: PW,
+           WH: ZR,
```

#### 2406. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18288-L18290` → after: `L17972-L17974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17972-L17974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17972-L17974) · [Before (L18288-L18290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18288-L18290)

```diff
-         } = this.Hx, cW = null === (WW = EW.aiW(PW)) || void 0 === WW ? void 0 : WW.ridingVehicleEId, wW = cW && (null === (iW = EW.uOW(PW)) || void 0 === iW ? void 0 : iW.MA) === cW, tW = (null === (OW = EW.uOW(NW.lG)) || void 0 === OW ? void 0 : OW.MA) === PW;
-         if (!wW || !tW || null !== NW.xI || null !== (mW = LW.client) && void 0 !== mW && mW.isReplayMode()) return this.reset(), 0;
-         const ZW = (0, ti.getCaughtUpMeshRotation)(this.Hx, cW);
+         } = this.xw, iR = null === (RR = tR.oGR(ZR)) || void 0 === RR ? void 0 : RR.ridingVehicleEId, fR = iR && (null === (JR = tR.nyR(ZR)) || void 0 === JR ? void 0 : JR.pe) === iR, VR = (null === (GR = tR.nyR(uR.R6)) || void 0 === GR ? void 0 : GR.pe) === ZR;
+         if (!fR || !VR || null !== uR.L_ || null !== (yR = qR.client) && void 0 !== yR && yR.isReplayMode()) return this.reset(), 0;
+         const KR = (0, VJ.getCaughtUpMeshRotation)(this.xw, iR);
```

#### 2407. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18297-L18299` → after: `L17981-L17983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17981-L17983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17981-L17983) · [Before (L18297-L18299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18297-L18299)

```diff
-     var xi = OW(38767),
-       li = OW(39259),
-       Ai = OW(5371);
+     var wJ = GR(38771),
+       rJ = GR(39235),
+       eJ = GR(5474);
```

#### 2408. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18302-L18303` → after: `L17986-L17987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17986-L17987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17986-L17987) · [Before (L18302-L18303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18302-L18303)

```diff
-       li.g.setPlayerRigCheck((WW => lW.i.includes(WW) && oi(WW))), (0, ii.k)(), await vW.d.requiredAssetsAreGenerated();
-       const iW = vW.d.getGenerationFailure();
+       rJ.g.setPlayerRigCheck((RR => rR.k.includes(RR) && OJ(RR))), (0, JJ.l)(), await HR.b.requiredAssetsAreGenerated();
+       const JR = HR.b.getGenerationFailure();
```

#### 2409. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18305` → after: `L17989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17989) · [Before (L18305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18305)

```diff
-       const OW = WW.TZ.bD();
+       const GR = RR.lK.jH();
```

#### 2410. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18307-L18311` → after: `L17991-L17995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17991-L17995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17991-L17995) · [Before (L18307-L18311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18307-L18311)

```diff
-       const EW = await Promise.all(lW.i.map((WW => {
-           const iW = mW.then((() => (0, Ai.m)(`lifeform ${WW}`)));
-           return mW = iW, iW.then((() => ki(WW, OW))).then((WW => (eW.l.iZ("matchmakeAndPlayStepCompleted", {
-             step: AW.k.SETUP_LIFEFORMS,
-             totalSubSteps: lW.i.length
+       const tR = await Promise.all(rR.k.map((RR => {
+           const JR = yR.then((() => (0, eJ.q)(`lifeform ${RR}`)));
+           return yR = JR, JR.then((() => UJ(RR, GR))).then((RR => (DR.n.JK("matchmakeAndPlayStepCompleted", {
+             step: eR.j.SETUP_LIFEFORMS,
+             totalSubSteps: rR.k.length
```

#### 2411. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18315-L18316` → after: `L17999-L18000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R17999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L17999-L18000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L17999-L18000) · [Before (L18315-L18316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18315-L18316)

```diff
-       for (let NW = 0; NW < lW.i.length; NW++) {
-         PW[lW.i[NW]] = EW[NW]
+       for (let uR = 0; uR < rR.k.length; uR++) {
+         ZR[rR.k[uR]] = tR[uR]
```

#### 2412. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18318` → after: `L18002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18002) · [Before (L18318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18318)

```diff
-       return bi = PW, await (0, Ai.m)("local player"),
+       return aJ = ZR, await (0, eJ.q)("local player"),
```

#### 2413. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18322-L18323` → after: `L18006-L18007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18006-L18007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18006-L18007) · [Before (L18322-L18323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18322-L18323)

```diff
-               EY: OW,
-               Dv: mW
+               zC: GR,
+               WH: yR
```

#### 2414. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18325-L18328` → after: `L18009-L18012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18009-L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18009-L18012) · [Before (L18325-L18328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18325-L18328)

```diff
-           Ki(iW, WW, mW), (0, RW.p)(WW, mW), OW.zD(mW, OW.names.movementInputs), OW.zD(mW, OW.names.movement), OW.zD(mW, OW.names.updateServerOfMovement), OW.zD(mW, OW.names.playerCameraAdjustment), OW.zD(mW, OW.names.crouchingHandler), OW.zD(mW, "stepSoundOnWalk"), OW.zD(mW, "pl … [truncated]
-           const EW = OW.jB(mW);
-           EW.alwaysApplyHorizFriction = !0, EW.zx = 0;
-           const PW = OW.uOW(WW.camera.lG),
+           CJ(JR, RR, yR), (0, ER.q)(RR, yR), GR.Jm(yR, GR.names.movementInputs), GR.Jm(yR, GR.names.movement), GR.Jm(yR, GR.names.updateServerOfMovement), GR.Jm(yR, GR.names.playerCameraAdjustment), GR.Jm(yR, GR.names.crouchingHandler), GR.Jm(yR, "stepSoundOnWalk"), GR.Jm(yR, "pl … [truncated]
+           const tR = GR.Lk(yR);
+           tR.alwaysApplyHorizFriction = !0, tR.Yw = 0;
+           const ZR = GR.nyR(RR.camera.R6),
```

#### 2415. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18330` → after: `L18014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18014) · [Before (L18330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18330)

```diff
-           WW.camera.yI = () => LW.yI(), PW.DOW = (iW, EW, NW) => {
+           RR.camera.n_ = () => qR.n_(), ZR.MyR = (JR, tR, uR) => {
```

#### 2416. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18332-L18334` → after: `L18016-L18018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18016-L18018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18016-L18018) · [Before (L18332-L18334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18332-L18334)

```diff
-             const PW = OW.aiW(mW).ridingVehicleEId;
-             if (PW && !OW.liW(mW, OW.names.qS)) {
-               const NW = OW.aiW(mW).meshOffset,
+             const ZR = GR.oGR(yR).ridingVehicleEId;
+             if (ZR && !GR.RGR(yR, GR.names.bC)) {
+               const uR = GR.oGR(yR).meshOffset,
```

#### 2417. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18341` → after: `L18025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18025) · [Before (L18341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18341)

```diff
-             (0, ZW.tickMovementInputsPrePhysics)(WW, iW), OW.liW(mW, OW.names.qS) || (0, xW.tickMovementPrePhysics)(WW, iW)
+             (0, KR.tickMovementInputsPrePhysics)(RR, JR), GR.RGR(yR, GR.names.bC) || (0, wR.tickMovementPrePhysics)(RR, JR)
```

#### 2418. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18345` → after: `L18029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18029) · [Before (L18345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18345)

```diff
-           } = (0, Ei.b)(iW);
+           } = (0, tJ.c)(JR);
```

#### 2419. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18347` → after: `L18031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18031) · [Before (L18347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18347)

```diff
-             LW.reset(), oW().set(EW.Sj, 0, 0, 0), oW().set(EW.eC, 0, 0, 0), oW().set(EW.gC, 0, 0, 0), WW.bloxd.takeHeldPlayerBodySize(mW), OW.mcW(mW, OW.names.movement), OW.mcW(mW, OW.names.moveState);
+             qR.reset(), xR().set(tR.BL, 0, 0, 0), xR().set(tR.bY, 0, 0, 0), xR().set(tR.vY, 0, 0, 0), RR.bloxd.takeHeldPlayerBodySize(yR), GR.SiR(yR, GR.names.movement), GR.SiR(yR, GR.names.moveState);
```

#### 2420. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18351-L18352` → after: `L18035-L18036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18035-L18036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18035-L18036) · [Before (L18351-L18352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18351-L18352)

```diff
-                   uD: iW,
-                   OmW: EW,
+                   JI: JR,
+                   SyR: tR,
```

#### 2421. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18359-L18361` → after: `L18043-L18045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18043-L18045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18043-L18045) · [Before (L18359-L18361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18359-L18361)

```diff
-               if (OW.mcW(mW, WW, {
-                   uD: iW,
-                   OmW: EW,
+               if (GR.SiR(yR, RR, {
+                   JI: JR,
+                   SyR: tR,
```

#### 2422. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18364-L18366` → after: `L18048-L18050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18048-L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18048-L18050) · [Before (L18364-L18366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18364-L18366)

```diff
-                 }), OW.mcW(mW, "animator", {
-                   uD: iW,
-                   OmW: EW,
+                 }), GR.SiR(yR, "animator", {
+                   JI: JR,
+                   SyR: tR,
```

#### 2423. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18368` → after: `L18052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18052) · [Before (L18368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18368)

```diff
-                 }), OW.liW(mW, "rigAnimation")) {
+                 }), GR.RGR(yR, "rigAnimation")) {
```

#### 2424. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18372` → after: `L18056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18056) · [Before (L18372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18372)

```diff
-                 OW.mcW(mW, "rigAnimation", {
+                 GR.SiR(yR, "rigAnimation", {
```

#### 2425. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18374` → after: `L18058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18058) · [Before (L18374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18374)

```diff
-                   uD: iW
+                   JI: JR
```

#### 2426. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18378-L18379` → after: `L18062-L18063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18062-L18063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18062-L18063) · [Before (L18378-L18379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18378-L18379)

```diff
-             OW.mcW(mW, OW.names.meshAttachments)
-           })), OW.zD(mW, OW.names.cameraShake), OW.zD(mW, "forcedCameraTransition"),
+             GR.SiR(yR, GR.names.meshAttachments)
+           })), GR.Jm(yR, GR.names.cameraShake), GR.Jm(yR, "forcedCameraTransition"),
```

#### 2427. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18381-L18383` → after: `L18065-L18067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18065-L18067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18065-L18067) · [Before (L18381-L18383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18381-L18383)

```diff
-               const iW = WW.Dv;
-               dW.d.subscribe("useInventory", (OW => {
-                 if (!0 === OW && !WW.EY.QiW(iW)) {
+               const JR = RR.WH;
+               NR.c.subscribe("useInventory", (GR => {
+                 if (!0 === GR && !RR.zC.mGR(JR)) {
```

#### 2428. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18385-L18386` → after: `L18069-L18070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18069-L18070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18069-L18070) · [Before (L18385-L18386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18385-L18386)

```diff
-                     const mW = WW.EY.ziW(iW);
-                     eW.l.iZ("updatedInventory", mW.getItems())
+                     const yR = RR.zC.PGR(JR);
+                     DR.n.JK("updatedInventory", yR.getItems())
```

#### 2429. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18388` → after: `L18072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18072) · [Before (L18388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18388)

```diff
-                   WW.EY.zD(iW, WW.EY.names.inventory, {
+                   RR.zC.Jm(JR, RR.zC.names.inventory, {
```

#### 2430. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18391-L18396` → after: `L18075-L18080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18075-L18080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18075-L18080) · [Before (L18391-L18396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18391-L18396)

```diff
-                   }), WW.EY.FiW(WW.Dv).inCreative = WW.gM.creative, eW.l.iZ("playerInventoryComponentChanged")
-                 }!1 === OW && WW.EY.QiW(iW) && (WW.EY.mV(iW, WW.EY.names.inventory), eW.l.iZ("playerInventoryComponentChanged"))
-               })), dW.d.subscribe("creative", (OW => {
-                 WW.EY.liW(iW, "inventory") && (WW.EY.FiW(WW.Dv).inCreative = OW)
-               })), eW.l.subscribe("leaveGame", (() => {
-                 WW.EY.QiW(iW) && WW.EY.mV(iW, WW.EY.names.inventory)
+                   }), RR.zC.IGR(RR.WH).inCreative = RR.jW.creative, DR.n.JK("playerInventoryComponentChanged")
+                 }!1 === GR && RR.zC.mGR(JR) && (RR.zC.Zm(JR, RR.zC.names.inventory), DR.n.JK("playerInventoryComponentChanged"))
+               })), NR.c.subscribe("creative", (GR => {
+                 RR.zC.RGR(JR, "inventory") && (RR.zC.IGR(RR.WH).inCreative = GR)
+               })), DR.n.subscribe("leaveGame", (() => {
+                 RR.zC.mGR(JR) && RR.zC.Zm(JR, RR.zC.names.inventory)
```

#### 2431. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18404` → after: `L18088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18088) · [Before (L18404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18404)

```diff
-               EY: mW
+               zC: yR
```

#### 2432. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18406` → after: `L18090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18090) · [Before (L18406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18406)

```diff
-           dW.d.subscribe("numClosestPlayersVisible", (OW => {
+           NR.c.subscribe("numClosestPlayersVisible", (GR => {
```

#### 2433. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18409-L18410` → after: `L18093-L18094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18093-L18094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18093-L18094) · [Before (L18409-L18410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18409-L18410)

```diff
-               const iW = WW.EY.RD("genericLifeformState");
-               for (const WW of iW) WW.meshEnabledCombinator.removeBoolean("closestVisibleX"), mW.getState(WW.rD, mW.names.nZ).enabledCombinator.removeBoolean("closestVisibleX")
+               const JR = RR.zC.mI("genericLifeformState");
+               for (const RR of JR) RR.meshEnabledCombinator.removeBoolean("closestVisibleX"), yR.getState(RR.Rm, yR.names.vK).enabledCombinator.removeBoolean("closestVisibleX")
```

#### 2434. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18421` → after: `L18105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18105) · [Before (L18421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18421)

```diff
-             const LW = mW.Vk(WW.Dv);
+             const qR = yR.vW(RR.WH);
```

#### 2435. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18423` → after: `L18107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18107) · [Before (L18423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18423)

```diff
-             const cW = mW.RD("genericLifeformState");
+             const iR = yR.mI("genericLifeformState");
```

#### 2436. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18425` → after: `L18109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18109) · [Before (L18425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18425)

```diff
-             OW.length = cW.length, OW.sort(((WW, iW) => oW().TP(mW.Vk(WW.rD), LW) - oW().TP(mW.Vk(iW.rD), LW)));
+             GR.length = iR.length, GR.sort(((RR, JR) => xR().xZ(yR.vW(RR.Rm), qR) - xR().xZ(yR.vW(JR.Rm), qR)));
```

#### 2437. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18427` → after: `L18111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18111) · [Before (L18427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18427)

```diff
-             for (const EW of OW) EW.rD !== WW.Dv && (wW < iW ? (EW.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), mW.getState(EW.rD, mW.names.nZ).enabledCombinator.setBooleanType("closestVisibleX", !0), wW++) : (EW.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
+             for (const tR of GR) tR.Rm !== RR.WH && (fR < JR ? (tR.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), yR.getState(tR.Rm, yR.names.vK).enabledCombinator.setBooleanType("closestVisibleX", !0), fR++) : (tR.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
```

#### 2438. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18429-L18431` → after: `L18113-L18115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18113-L18115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18113-L18115) · [Before (L18429-L18431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18429-L18431)

```diff
-           WW.on("hZ", (function(iW) {
-             const OW = mW.Vk(WW.Dv),
-               LW = oW().TP(OW, EW);
+           RR.on("gK", (function(JR) {
+             const GR = yR.vW(RR.WH),
+               qR = xR().xZ(GR, tR);
```

#### 2439. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18460-L18461` → after: `L18144-L18145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18144-L18145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18144-L18145) · [Before (L18460-L18461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18460-L18461)

```diff
-       const PW = (0, Ei.b)(WW),
-         LW = null !== (OW = PW.meshMetadata.lifeformTypeForModelOverride) && void 0 !== OW ? OW : WW,
+       const ZR = (0, tJ.c)(RR),
+         qR = null !== (GR = ZR.meshMetadata.lifeformTypeForModelOverride) && void 0 !== GR ? GR : RR,
```

#### 2440. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18465` → after: `L18149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18149) · [Before (L18465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18465)

```diff
-         for (const WW of bW.c) cW.push(jW.e[WW][(0, UW.d)(WW)].atlasIdx);
+         for (const RR of aR.b) iR.push(LR.f[RR][(0, nR.c)(RR)].atlasIdx);
```

#### 2441. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18470` → after: `L18154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18154) · [Before (L18470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18470)

```diff
-         for (cW.push(OW.atlasIdx1), cW.push(OW.atlasIdx2), cW.push(OW.atlasIdx3); wW * wW < MW.m[iW].length;) wW *= 2
+         for (iR.push(GR.atlasIdx1), iR.push(GR.atlasIdx2), iR.push(GR.atlasIdx3); fR * fR < AR.p[JR].length;) fR *= 2
```

#### 2442. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18480` → after: `L18164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18164) · [Before (L18480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18480)

```diff
-         } = (0, Ei.b)(WW), mW = (0, nW.e)() || !1, EW = null !== (iW = OW.lifeformTypeForModelOverride) && void 0 !== iW ? iW : WW, NW = mW ? vW.d.getModel(`${EW}_Model`, DW.e.LIFEFORM) : null, PW = NW && !NW.notFound;
+         } = (0, tJ.c)(RR), yR = (0, vR.f)() || !1, tR = null !== (JR = GR.lifeformTypeForModelOverride) && void 0 !== JR ? JR : RR, uR = yR ? HR.b.getModel(`${tR}_Model`, cR.h.LIFEFORM) : null, ZR = uR && !uR.notFound;
```

#### 2443. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18483-L18486` → after: `L18167-L18170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18167-L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18167-L18170) · [Before (L18483-L18486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18483-L18486)

```diff
-           const WW = PW ? DW.g.LIFEFORM_ATLAS : DW.g.PLAYER_ASSET;
-           LW = vW.d.getTexture("Player_Atlas", WW).url
-         } else LW = vW.d.getTexture(`${WW}_Atlas`, DW.g.LIFEFORM_ATLAS).url;
-         let cW = PW ? NW.url : (0, RW.h)(EW, `${EW}_Model.glb`);
+           const RR = ZR ? cR.k.LIFEFORM_ATLAS : cR.k.PLAYER_ASSET;
+           qR = HR.b.getTexture("Player_Atlas", RR).url
+         } else qR = HR.b.getTexture(`${RR}_Atlas`, cR.k.LIFEFORM_ATLAS).url;
+         let iR = ZR ? uR.url : (0, ER.k)(tR, `${tR}_Model.glb`);
```

#### 2444. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18488` → after: `L18172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18172) · [Before (L18488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18488)

```diff
-         const wW = (0, KW.d)(EW),
+         const fR = (0, CR.b)(tR),
```

#### 2445. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18492` → after: `L18176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18176) · [Before (L18492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18492)

```diff
-               mW = (0, RW.h)(WW, `${WW}${fW}`)
+               yR = (0, ER.k)(RR, `${RR}${mR}`)
```

#### 2446. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18496-L18499` → after: `L18180-L18183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18180-L18183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18180-L18183) · [Before (L18496-L18499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18496-L18499)

```diff
-             const EW = (0, pW.h)(mW);
-             if (!EW) return console.error(`Pre-reconstructed GLB for ${WW} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
-             const NW = (0, pW.h)(iW);
-             if (!NW) return console.error(`GLB for ${WW} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
+             const tR = (0, IR.g)(yR);
+             if (!tR) return console.error(`Pre-reconstructed GLB for ${RR} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
+             const uR = (0, IR.g)(JR);
+             if (!uR) return console.error(`GLB for ${RR} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
```

#### 2447. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18501-L18502` → after: `L18185-L18186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18185-L18186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18185-L18186) · [Before (L18501-L18502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18501-L18502)

```diff
-               LW = (0, VW.k)(OW, NW.base64);
-             if ((0, VW.A)(PW) !== LW) return console.error(`Stale pre-reconstructed model for ${WW} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
+               qR = (0, PR.g)(GR, uR.base64);
+             if ((0, PR.t)(ZR) !== qR) return console.error(`Stale pre-reconstructed model for ${RR} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
```

#### 2448. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18511` → after: `L18195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18195) · [Before (L18511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18511)

```diff
-       await (0, Ai.m)(`lifeform ${WW} materials`);
+       await (0, eJ.q)(`lifeform ${RR} materials`);
```

#### 2449. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18522` → after: `L18206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18206) · [Before (L18522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18522)

```diff
-       if (!(0, gW.K)(PW.getArmourMetadata)) {
+       if (!(0, oR.I)(ZR.getArmourMetadata)) {
```

#### 2450. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18531` → after: `L18215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18215) · [Before (L18531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18531)

```diff
-             rb: OW,
+             tL: GR,
```

#### 2451. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18533` → after: `L18217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18217) · [Before (L18533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18533)

```diff
-               transparencyMode: Ni.e.MATERIAL_OPAQUE,
+               transparencyMode: uJ.d.MATERIAL_OPAQUE,
```

#### 2452. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18538` → after: `L18222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18222) · [Before (L18538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18538)

```diff
-                 samplingMode: Li.k.nearest,
+                 samplingMode: qJ.f.nearest,
```

#### 2453. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18548` → after: `L18232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18232) · [Before (L18548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18548)

```diff
-               (0, ci.q)(WW, zW.b, {
+               (0, iJ.y)(RR, TR.e, {
```

#### 2454. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18550` → after: `L18234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18234) · [Before (L18550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18550)

```diff
-               }), (0, rW.e)(WW, (0, CW.h)().TZ), (0, QW.c)(WW), (0, ci.q)(WW, FW.f), (0, ci.O)(WW)
+               }), (0, FR.c)(RR, (0, zR.i)().lK), (0, hR.b)(RR), (0, iJ.y)(RR, sR.f), (0, iJ.Q)(RR)
```

#### 2455. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18554` → after: `L18238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18238) · [Before (L18554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18554)

```diff
-         }(`${WW}ArmourMaterial`, OW, iW), JW = OW.textureOffsets, hW = OW.isArmourVisibleByDefault
+         }(`${RR}ArmourMaterial`, GR, JR), pR = GR.textureOffsets, gR = GR.isArmourVisibleByDefault
```

#### 2456. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18556` → after: `L18240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18240) · [Before (L18556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18556)

```diff
-       const HW = (0, KW.d)(LW);
+       const bR = (0, CR.b)(qR);
```

#### 2457. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18558` → after: `L18242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18242) · [Before (L18558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18558)

```diff
-         const EW = await (0, ii.f)(OW, mW, {}).catch((WW => (console.error(`Failed to parse pre-reconstructed model for ${iW} - falling back to runtime reconstruction.`, WW, ...null !== WW && void 0 !== WW && WW.innerError ? [WW.innerError] : []), null)));
+         const tR = await (0, JJ.g)(GR, yR, {}).catch((RR => (console.error(`Failed to parse pre-reconstructed model for ${JR} - falling back to runtime reconstruction.`, RR, ...null !== RR && void 0 !== RR && RR.innerError ? [RR.innerError] : []), null)));
```

#### 2458. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18560-L18562` → after: `L18244-L18246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18244-L18246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18244-L18246) · [Before (L18560-L18562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18560-L18562)

```diff
-         await (0, Ai.m)(`lifeform ${WW} model`), EW.addAllToScene();
-         const NW = (0, mi.l)(EW, mW);
-         if (!NW) return EW.dispose(), console.error(`Corrupt pre-reconstructed model for ${iW} (no __root__) - falling back to runtime reconstruction.`), null;
+         await (0, eJ.q)(`lifeform ${RR} model`), tR.addAllToScene();
+         const uR = (0, yJ.i)(tR, yR);
+         if (!uR) return tR.dispose(), console.error(`Corrupt pre-reconstructed model for ${JR} (no __root__) - falling back to runtime reconstruction.`), null;
```

#### 2459. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18566` → after: `L18250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18250) · [Before (L18566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18566)

```diff
-         const OW = await (0, ii.f)("", iW, {
+         const GR = await (0, JJ.g)("", JR, {
```

#### 2460. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18569` → after: `L18253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18253) · [Before (L18569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18569)

```diff
-         await (0, Ai.m)(`lifeform ${WW} model`), uW = HW ? mi.h.reconstructModel(OW, HW.reconstructionSchema, iW, ZW) : {
+         await (0, eJ.q)(`lifeform ${RR} model`), OR = bR ? yJ.e.reconstructModel(GR, bR.reconstructionSchema, JR, KR) : {
```

#### 2461. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18574-L18575` → after: `L18258-L18259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18258-L18259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18258-L18259) · [Before (L18574-L18575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18574-L18575)

```diff
-       await (0, Ai.m)(`lifeform ${WW} meshes`);
-       const oW = (0, CW.h)(),
+       await (0, eJ.q)(`lifeform ${RR} meshes`);
+       const xR = (0, zR.i)(),
```

#### 2462. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18577` → after: `L18261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18261) · [Before (L18577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18577)

```diff
-           TZ: dW
+           lK: NR
```

#### 2463. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18579-L18580` → after: `L18263-L18264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18263-L18264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18263-L18264) · [Before (L18579-L18580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18579-L18580)

```diff
-         eW = dW.nD,
-         XW = NW || !dW.Lb;
+         DR = NR.RP,
+         SR = uR || !NR.La;
```

#### 2464. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18583-L18584` → after: `L18267-L18268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18267-L18268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18267-L18268) · [Before (L18583-L18584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18583-L18584)

```diff
-         const WW = (0, RW.d)(EW) ? TW : null !== (BW = null !== lW && void 0 !== lW && lW.includes(EW.name) ? yW : null) && void 0 !== BW ? BW : YW;
-         WW && XW && (NW ? iW.xEW(EW, !1) : dW.qD(EW)), (0, VW.r)(EW) || (0, VW.z)(EW, 1 / 512), EW.dD(), EW.material = WW, EW.sideOrientation = Ni.e.CounterClockWiseSideOrientation, (0, Pi.f)(EW) ? null !== AW && void 0 !== AW && AW.includes(EW.name) && (EW.noSunShadowVertices =  … [truncated]
+         const RR = (0, ER.i)(tR) ? lR : null !== (jR = null !== rR && void 0 !== rR && rR.includes(tR.name) ? BR : null) && void 0 !== jR ? jR : MR;
+         RR && SR && (uR ? JR.stR(tR, !1) : NR.xI(tR)), (0, PR.l)(tR) || (0, PR.q)(tR, 1 / 512), tR.yI(), tR.material = RR, tR.sideOrientation = uJ.d.CounterClockWiseSideOrientation, (0, ZJ.d)(tR) ? null !== eR && void 0 !== eR && eR.includes(tR.name) && (tR.noSunShadowVertices =  … [truncated]
```

#### 2465. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18587` → after: `L18271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18271) · [Before (L18587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18587)

```diff
-         ((0, Pi.f)(EW) ? !EW.material : !EW.bD().meshes.includes(EW)) && 0 === EW.getChildMeshes().length && EW.WK(!1)
+         ((0, ZJ.d)(tR) ? !tR.material : !tR.jH().meshes.includes(tR)) && 0 === tR.getChildMeshes().length && tR.JA(!1)
```

#### 2466. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18593` → after: `L18277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18277) · [Before (L18593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18593)

```diff
-           "ArmLeftMesh" === bW.name && bW.translate(EW.fA.LeftReadOnly, WW), "ArmRightMesh" === bW.name && bW.translate(EW.fA.RightReadOnly, WW), "HeadMesh" === bW.name && bW.translate(EW.fA.DownReadOnly, WW), "LegLeftMesh" === bW.name && bW.translate(EW.fA.UpReadOnly, WW), "LegR … [truncated]
+           "ArmLeftMesh" === aR.name && aR.translate(tR.Fe.LeftReadOnly, RR), "ArmRightMesh" === aR.name && aR.translate(tR.Fe.RightReadOnly, RR), "HeadMesh" === aR.name && aR.translate(tR.Fe.DownReadOnly, RR), "LegLeftMesh" === aR.name && aR.translate(tR.Fe.UpReadOnly, RR), "LegR … [truncated]
```

#### 2467. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18600` → after: `L18284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18284) · [Before (L18600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18600)

```diff
-         for (const EW of IW) EW.material && dW.qD(EW);
+         for (const tR of kR) tR.material && NR.xI(tR);
```

#### 2468. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18602-L18603` → after: `L18286-L18287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18286-L18287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18286-L18287) · [Before (L18602-L18603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18602-L18603)

```diff
-         const WW = (0, RW.h)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
-           OW = await (0, ii.e)("", iW, {
+         const RR = (0, ER.k)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
+           GR = await (0, JJ.c)("", JR, {
```

#### 2469. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18609-L18611` → after: `L18293-L18295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18293-L18295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18293-L18295) · [Before (L18609-L18611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18609-L18611)

```diff
-           } = iW.KV();
-           if (EW.fA.DistanceSquared(WW.minimum, WW.maximum)) {
-             (0, VW.r)(iW) || (0, VW.z)(iW, 1 / 128), iW.name = "Cape", iW.YZ = iW.YZ.scale(.12), iW.Fb = !1, qW = iW;
+           } = JR.Tm();
+           if (tR.Fe.DistanceSquared(RR.minimum, RR.maximum)) {
+             (0, PR.l)(JR) || (0, PR.q)(JR, 1 / 128), JR.name = "Cape", JR.MK = JR.MK.scale(.12), JR.ZL = !1, dR = JR;
```

#### 2470. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18618` → after: `L18302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18302) · [Before (L18618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18618)

```diff
-           rb: iW,
+           tL: JR,
```

#### 2471. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18624` → after: `L18308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18308) · [Before (L18624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18624)

```diff
-           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (mW = PW.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== mW ? mW : {}).map((iW => {
+           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (yR = ZR.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== yR ? yR : {}).map((JR => {
```

#### 2472. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18627` → after: `L18311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18311) · [Before (L18627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18627)

```diff
-               numTexturesInAtlas: "default" === mW.numTexturesInAtlas ? "Player" === LW ? wW : MW.m[WW].length : mW.numTexturesInAtlas
+               numTexturesInAtlas: "default" === yR.numTexturesInAtlas ? "Player" === qR ? fR : AR.p[RR].length : yR.numTexturesInAtlas
```

#### 2473. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18631` → after: `L18315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18315) · [Before (L18631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18631)

```diff
-         wi = NW ? `${WW}Preview` : WW;
+         fJ = uR ? `${RR}Preview` : RR;
```

#### 2474. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18633` → after: `L18317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18317) · [Before (L18633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18633)

```diff
-         aZ: 32,
+         hK: 32,
```

#### 2475. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18666-L18667` → after: `L18350-L18351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18350-L18351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18350-L18351) · [Before (L18666-L18667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18666-L18667)

```diff
-         name: `${WW}SpriteSheet${NW?"":"WithVisibleBackFaces"}`,
-         rb: iW,
+         name: `${RR}SpriteSheet${uR?"":"WithVisibleBackFaces"}`,
+         tL: JR,
```

#### 2476. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18675` → after: `L18359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18359) · [Before (L18675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18675)

```diff
-             samplingMode: Li.k.nearest
+             samplingMode: qJ.f.nearest
```

#### 2477. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18686` → after: `L18370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18370) · [Before (L18686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18686)

```diff
-           (0, IW.d)(WW, mW, mW, EW), (0, ci.q)(WW, aW.c), (0, rW.e)(WW, (0, CW.h)().TZ), (0, QW.c)(WW), (0, ci.O)(WW)
+           (0, kR.e)(RR, yR, yR, tR), (0, iJ.y)(RR, QR.b), (0, FR.c)(RR, (0, zR.i)().lK), (0, hR.b)(RR), (0, iJ.Q)(RR)
```

#### 2478. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18696-L18698` → after: `L18380-L18382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18380-L18382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18380-L18382) · [Before (L18696-L18698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18696-L18698)

```diff
-       const NW = (0, CW.h)().TZ.nD,
-         PW = EW ? `${WW}Preview` : WW;
-       if (!NW.hasType(PW)) throw new Error(`Thin instance manager not set up for ${WW}`);
+       const uR = (0, zR.i)().lK.RP,
+         ZR = tR ? `${RR}Preview` : RR;
+       if (!uR.hasType(ZR)) throw new Error(`Thin instance manager not set up for ${RR}`);
```

#### 2479. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18700` → after: `L18384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18384) · [Before (L18700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18700)

```diff
-       OW && NW.WK(LW, !0);
+       GR && uR.JA(qR, !0);
```

#### 2480. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18704` → after: `L18388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18388) · [Before (L18704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18704)

```diff
-       return NW.setGroupEnabled(LW, "armour", cW), cW && NW.setGroup(LW, "armour", "aArmourTint", 1, 1, 1, 0), bi[WW].meshApi.updateMeshOverlayColour(LW, new mW.c(0, 0, 0, 0)), bi[WW].meshApi.updateMeshLightLevels(LW, wi.d), NW.getScale(LW).scaleInPlace(iW), NW.setDirty(LW, 0), L … [truncated]
+       return uR.setGroupEnabled(qR, "armour", iR), iR && uR.setGroup(qR, "armour", "aArmourTint", 1, 1, 1, 0), aJ[RR].meshApi.updateMeshOverlayColour(qR, new yR.e(0, 0, 0, 0)), aJ[RR].meshApi.updateMeshLightLevels(qR, fJ.e), uR.getScale(qR).scaleInPlace(JR), uR.setDirty(qR, 0), q … [truncated]
```

#### 2481. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18710` → after: `L18394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18394) · [Before (L18710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18710)

```diff
-         EY: KW
+         zC: CR
```

#### 2482. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18713` → after: `L18397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18397) · [Before (L18713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18713)

```diff
-       } = (0, Ei.b)(WW), HW = iW.TZ.nD, nW = Mi(WW), uW = HW.AmW(nW, 0);
+       } = (0, tJ.c)(RR), bR = JR.lK.RP, vR = AJ(RR), OR = bR.JtR(vR, 0);
```

#### 2483. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18715` → after: `L18399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18399) · [Before (L18715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18715)

```diff
-       "humanoidMesh" === hW.type ? (vW = SW.s, gW = SW.o) : (vW = SW.k, gW = SW.g), KW.zD(OW, KW.names.moveState), KW.zD(OW, "genericLifeformState"), KW.zD(OW, "genericLifeform", {
+       "humanoidMesh" === gR.type ? (HR = XR.p, oR = XR.m) : (HR = XR.g, oR = XR.f), CR.Jm(GR, CR.names.moveState), CR.Jm(GR, "genericLifeformState"), CR.Jm(GR, "genericLifeform", {
```

#### 2484. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18717-L18719` → after: `L18401-L18403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18401-L18403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18401-L18403) · [Before (L18717-L18719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18717-L18719)

```diff
-           uD: nW,
-           OmW: uW
-         }), KW.zD(OW, "nS"), KW.zD(OW, "meshRotation", {
+           JI: vR,
+           SyR: OR
+         }), CR.Jm(GR, "gC"), CR.Jm(GR, "meshRotation", {
```

#### 2485. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18725` → after: `L18409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18409) · [Before (L18725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18725)

```diff
-           modelYRotationOffset: null !== (EW = hW.modelYRotationOffset) && void 0 !== EW ? EW : 0
+           modelYRotationOffset: null !== (tR = gR.modelYRotationOffset) && void 0 !== tR ? tR : 0
```

#### 2486. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18728` → after: `L18412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18412) · [Before (L18728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18728)

```diff
-           const OW = WW.EY.jOW(iW),
+           const GR = RR.zC.yyR(JR),
```

#### 2487. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18730` → after: `L18414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18414) · [Before (L18730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18730)

```diff
-             EW = WW.gM.showPlayersInUnloadedChunks || !1;
+             tR = RR.jW.showPlayersInUnloadedChunks || !1;
```

#### 2488. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18734` → after: `L18418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18418) · [Before (L18734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18734)

```diff
-           WW.EY.zD(iW, "inLoadedChunk", {
+           RR.zC.Jm(JR, "inLoadedChunk", {
```

#### 2489. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18736` → after: `L18420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18420) · [Before (L18736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18736)

```diff
-               NW = EW, PW || (mW.setBooleanType("inLoadedChunk", EW), iW !== WW.Dv && (OW.isLifeformMeshEnabled = EW))
+               uR = tR, ZR || (yR.setBooleanType("inLoadedChunk", tR), JR !== RR.WH && (GR.isLifeformMeshEnabled = tR))
```

#### 2490. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18739-L18740` → after: `L18423-L18424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18423-L18424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18423-L18424) · [Before (L18739-L18740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18739-L18740)

```diff
-           const LW = dW.d.subscribe("showPlayersInUnloadedChunks", (EW => {
-               PW = EW, PW ? (mW.setBooleanType("inLoadedChunk", !0), OW.isLifeformMeshEnabled = !0) : (mW.setBooleanType("inLoadedChunk", NW), iW !== WW.Dv && (OW.isLifeformMeshEnabled = NW))
+           const qR = NR.c.subscribe("showPlayersInUnloadedChunks", (tR => {
+               ZR = tR, ZR ? (yR.setBooleanType("inLoadedChunk", !0), GR.isLifeformMeshEnabled = !0) : (yR.setBooleanType("inLoadedChunk", uR), JR !== RR.WH && (GR.isLifeformMeshEnabled = uR))
```

#### 2491. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18742-L18743` → after: `L18426-L18427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18426-L18427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18426-L18427) · [Before (L18742-L18743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18742-L18743)

```diff
-             cW = eW.l.subscribe(`lifeformDisposed|${iW}`, (() => {
-               LW(), eW.l.unsubscribe(cW)
+             iR = DR.n.subscribe(`lifeformDisposed|${JR}`, (() => {
+               qR(), DR.n.unsubscribe(iR)
```

#### 2492. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18745-L18747` → after: `L18429-L18431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18429-L18431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18429-L18431) · [Before (L18745-L18747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18745-L18747)

```diff
-         }(iW, OW), KW.zD(OW, "updateWalkingState", {
-           uD: nW,
-           OmW: uW,
+         }(JR, GR), CR.Jm(GR, "updateWalkingState", {
+           JI: vR,
+           SyR: OR,
```

#### 2493. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18749-L18758` → after: `L18433-L18442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18433-L18442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18433-L18442) · [Before (L18749-L18758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18749-L18758)

```diff
-         }), KW.zD(OW, KW.names[hW.type], {
-           uD: nW,
-           OmW: uW,
-           heldItemPositionParams: null !== (NW = hW.heldItemPositionParams) && void 0 !== NW ? NW : {},
-           maxWalkingAngleOverride: null !== (ZW = hW.walkingLegSwingAngle) && void 0 !== ZW ? ZW : null
-         }), KW.zD(OW, "animator", {
-           uD: nW,
-           OmW: uW,
-           modelLifeformType: null !== (xW = hW.lifeformTypeForModelOverride) && void 0 !== xW ? xW : WW
-         }), li.g.hasAnimation(WW) && KW.zD(OW, "rigAnimation", {
+         }), CR.Jm(GR, CR.names[gR.type], {
+           JI: vR,
+           SyR: OR,
+           heldItemPositionParams: null !== (uR = gR.heldItemPositionParams) && void 0 !== uR ? uR : {},
+           maxWalkingAngleOverride: null !== (KR = gR.walkingLegSwingAngle) && void 0 !== KR ? KR : null
+         }), CR.Jm(GR, "animator", {
+           JI: vR,
+           SyR: OR,
+           modelLifeformType: null !== (wR = gR.lifeformTypeForModelOverride) && void 0 !== wR ? wR : RR
+         }), rJ.g.hasAnimation(RR) && CR.Jm(GR, "rigAnimation", {
```

#### 2494. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18760` → after: `L18444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18444) · [Before (L18760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18760)

```diff
-           uD: nW
+           JI: vR
```

#### 2495. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18764-L18765` → after: `L18448-L18449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18448-L18449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18448-L18449) · [Before (L18764-L18765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18764-L18765)

```diff
-             EY: mW
-           } = iW, EW = (0, Ei.b)(WW), NW = mW.jOW(OW), cW = mW.getState(OW, mW.names.nZ);
+             zC: yR
+           } = JR, tR = (0, tJ.c)(RR), uR = yR.yyR(GR), iR = yR.getState(GR, yR.names.vK);
```

#### 2496. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18768` → after: `L18452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18452) · [Before (L18768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18768)

```diff
-               NW.meshEnabledCombinator.setBooleanType(WW, iW), mW.getState(OW, mW.names.nZ).enabledCombinator.setBooleanType(WW, iW)
+               uR.meshEnabledCombinator.setBooleanType(RR, JR), yR.getState(GR, yR.names.vK).enabledCombinator.setBooleanType(RR, JR)
```

#### 2497. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18771` → after: `L18455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18455) · [Before (L18771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18771)

```diff
-               const NW = mW.getState((0, PW.b)(OW), EW.meshMetadata.type);
+               const uR = yR.getState((0, ZR.d)(GR), tR.meshMetadata.type);
```

#### 2498. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18773` → after: `L18457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18457) · [Before (L18773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18773)

```diff
-                 iW.TZ.nD.setVisibility(NW.uD, WW)
+                 JR.lK.RP.setVisibility(uR.JI, RR)
```

#### 2499. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18775` → after: `L18459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18459) · [Before (L18775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18775)

```diff
-               const LW = (0, CW.d)().getFollowingEntities(OW);
+               const qR = (0, zR.e)().getFollowingEntities(GR);
```

#### 2500. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18777` → after: `L18461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18461) · [Before (L18777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18777)

```diff
-                 const EW = mW.XiW(OW);
+                 const tR = yR.vGR(GR);
```

#### 2501. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18780` → after: `L18464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18464) · [Before (L18780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18780)

```diff
-                     uD: OW
+                     JI: GR
```

#### 2502. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18783` → after: `L18467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18467) · [Before (L18783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18783)

```diff
-                     iW.TZ.nD.WK(OW, WW)
+                     JR.lK.RP.JA(GR, RR)
```

#### 2503. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18787` → after: `L18471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18471) · [Before (L18787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18787)

```diff
-               mW.getState(OW, mW.names.nZ).enabledCombinator.setBooleanType("visible", WW)
+               yR.getState(GR, yR.names.vK).enabledCombinator.setBooleanType("visible", RR)
```

#### 2504. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18790-L18791` → after: `L18474-L18475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18474-L18475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18474-L18475) · [Before (L18790-L18791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18790-L18791)

```diff
-               const NW = (0, LW.b)("meshScaling", mW),
-                 cW = iW.EY.getState((0, PW.b)(OW), EW.meshMetadata.type);
+               const uR = (0, qR.d)("meshScaling", yR),
+                 iR = JR.zC.getState((0, ZR.d)(GR), tR.meshMetadata.type);
```

#### 2505. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18793` → after: `L18477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18477) · [Before (L18793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18793)

```diff
-               const wW = (0, CW.h)().TZ.nD,
+               const fR = (0, zR.i)().lK.RP,
```

#### 2506. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18795` → after: `L18479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18479) · [Before (L18795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18795)

```diff
-                   uD: tW
+                   JI: VR
```

#### 2507. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18798` → after: `L18482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18482) · [Before (L18798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18798)

```diff
-               const ZW = iW.EY.getState((0, PW.b)(OW), "animator"),
+               const KR = JR.zC.getState((0, ZR.d)(GR), "animator"),
```

#### 2508. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18800` → after: `L18484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18484) · [Before (L18800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18800)

```diff
-                 AW = xW ? lW.j : wW.getNodeNames(tW);
+                 eR = wR ? rR.l : fR.getNodeNames(VR);
```

#### 2509. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18805` → after: `L18489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18489) · [Before (L18805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18805)

```diff
-                   OW = null !== (bW = NW[WW]) && void 0 !== bW ? bW : [1, 1, 1];
+                   GR = null !== (aR = uR[RR]) && void 0 !== aR ? aR : [1, 1, 1];
```

#### 2510. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18809-L18812` → after: `L18493-L18496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18493-L18496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18493-L18496) · [Before (L18809-L18812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18809-L18812)

```diff
-             xW = iW.sV[iW.Dv][OW];
-           xW && (wW("notDead", (0, LW.b)("_isAlive", xW._isAlive)), wW("canSeeSetting", (0, LW.b)("canSee", xW.canSee)), tW(!xW._invisibleEffect), ZW(xW.meshScaling));
-           const AW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW}|_isAlive`, (WW => {
-               wW("notDead", (0, LW.b)("_isAlive", WW))
+             wR = JR.Qm[JR.WH][GR];
+           wR && (fR("notDead", (0, qR.d)("_isAlive", wR._isAlive)), fR("canSeeSetting", (0, qR.d)("canSee", wR.canSee)), VR(!wR._invisibleEffect), KR(wR.meshScaling));
+           const eR = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR}|_isAlive`, (RR => {
+               fR("notDead", (0, qR.d)("_isAlive", RR))
```

#### 2511. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18814-L18815` → after: `L18498-L18499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18498-L18499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18498-L18499) · [Before (L18814-L18815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18814-L18815)

```diff
-             bW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW}|canSee`, (WW => {
-               wW("canSeeSetting", (0, LW.b)("canSee", WW))
+             aR = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR}|canSee`, (RR => {
+               fR("canSeeSetting", (0, qR.d)("canSee", RR))
```

#### 2512. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18817` → after: `L18501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18501) · [Before (L18817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18817)

```diff
-             jW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW}|_invisibleEffect`, (WW => {
+             LR = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR}|_invisibleEffect`, (RR => {
```

#### 2513. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18820` → after: `L18504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18504) · [Before (L18820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18820)

```diff
-             UW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW}|meshScaling`, (WW => {
+             nR = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR}|meshScaling`, (RR => {
```

#### 2514. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18824` → after: `L18508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18508) · [Before (L18824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18824)

```diff
-           if (OW === iW.Dv) {
+           if (GR === JR.WH) {
```

#### 2515. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18828-L18830` → after: `L18512-L18514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18512-L18514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18512-L18514) · [Before (L18828-L18830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18828-L18830)

```diff
-             kW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${iW.Dv}|_isAlive`, (OW => {
-               const mW = iW.EY.jB(iW.Dv);
-               if ((0, LW.b)("_isAlive", OW)) {
+             UR = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${JR.WH}|_isAlive`, (GR => {
+               const yR = JR.zC.Lk(JR.WH);
+               if ((0, qR.d)("_isAlive", GR)) {
```

#### 2516. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18833` → after: `L18517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18517) · [Before (L18833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18833)

```diff
-               } else WW.gravityMultiplier = mW.gravityMultiplier, mW.gravityMultiplier = 0, mW.Sj[0] = 0, mW.Sj[1] = 0, mW.Sj[2] = 0, mW.eC[0] = 0, mW.eC[1] = 0, mW.eC[2] = 0, mW.gC[0] = 0, mW.gC[1] = 0, mW.gC[2] = 0
+               } else RR.gravityMultiplier = yR.gravityMultiplier, yR.gravityMultiplier = 0, yR.BL[0] = 0, yR.BL[1] = 0, yR.BL[2] = 0, yR.bY[0] = 0, yR.bY[1] = 0, yR.bY[2] = 0, yR.vY[0] = 0, yR.vY[1] = 0, yR.vY[2] = 0
```

#### 2517. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18836-L18837` → after: `L18520-L18521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18520-L18521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18520-L18521) · [Before (L18836-L18837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18836-L18837)

```diff
-           const sW = eW.l.subscribe(`lifeformDisposed|${OW}`, (() => {
-             eW.l.unsubscribe(AW), eW.l.unsubscribe(bW), eW.l.unsubscribe(jW), eW.l.unsubscribe(UW), eW.l.unsubscribe(kW), eW.l.unsubscribe(sW)
+           const WR = DR.n.subscribe(`lifeformDisposed|${GR}`, (() => {
+             DR.n.unsubscribe(eR), DR.n.unsubscribe(aR), DR.n.unsubscribe(LR), DR.n.unsubscribe(nR), DR.n.unsubscribe(UR), DR.n.unsubscribe(WR)
```

#### 2518. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18839-L18840` → after: `L18523-L18524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18523-L18524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18523-L18524) · [Before (L18839-L18840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18839-L18840)

```diff
-         }(WW, iW, OW), KW.zD(OW, KW.names.mesh, {
-           uLW: "humanoidMesh" === hW.type ? WW => {
+         }(RR, JR, GR), CR.Jm(GR, CR.names.mesh, {
+           LiR: "humanoidMesh" === gR.type ? RR => {
```

#### 2519. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18842` → after: `L18526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18526) · [Before (L18842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18842)

```diff
-             const EW = KW.aiW(OW),
+             const tR = CR.oGR(GR),
```

#### 2520. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18846` → after: `L18530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18530) · [Before (L18846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18846)

```diff
-               PW = null !== (mW = EW.ridingVehicleEId) && void 0 !== mW ? mW : null;
+               ZR = null !== (yR = tR.ridingVehicleEId) && void 0 !== yR ? yR : null;
```

#### 2521. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18849-L18850` → after: `L18533-L18534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18533-L18534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18533-L18534) · [Before (L18849-L18850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18849-L18850)

```diff
-               const mW = iW.bloxd.getEntityHeading(null !== PW && void 0 !== PW ? PW : OW, !0);
-               oW().wj(WW, NW, oW().ZERO, mW)
+               const yR = JR.bloxd.getEntityHeading(null !== ZR && void 0 !== ZR ? ZR : GR, !0);
+               xR().ta(RR, uR, xR().ZERO, yR)
```

#### 2522. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18852` → after: `L18536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18536) · [Before (L18852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18852)

```diff
-             null !== PW && (0, qW.b)(iW, PW, WW)
+             null !== ZR && (0, dR.d)(JR, ZR, RR)
```

#### 2523. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18854-L18855` → after: `L18538-L18539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18538-L18539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18538-L18539) · [Before (L18854-L18855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18854-L18855)

```diff
-           uD: nW,
-           OmW: uW,
+           JI: vR,
+           SyR: OR,
```

#### 2524. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18857-L18861` → after: `L18541-L18545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18541-L18545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18541-L18545) · [Before (L18857-L18861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18857-L18861)

```diff
-           Fb: !1,
-           dLW: !1
-         }), KW.zD(OW, KW.names.cape);
-       const DW = (0, tW.e)(iW).getFloating((0, PW.b)(OW));
-       KW.zD(OW, "floating", DW ? {
+           ZL: !1,
+           UiR: !1
+         }), CR.Jm(GR, CR.names.cape);
+       const cR = (0, VR.c)(JR).getFloating((0, ZR.d)(GR));
+       CR.Jm(GR, "floating", cR ? {
```

#### 2525. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18863` → after: `L18547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18547) · [Before (L18863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18863)

```diff
-         zN: DW.zN
+         yZ: cR.yZ
```

#### 2526. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18865-L18867` → after: `L18549-L18551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18549-L18551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18549-L18551) · [Before (L18865-L18867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18865-L18867)

```diff
-       const VW = KW.jOW(OW).meshEnabledCombinator.getTotalBooleanVal();
-       if (HW.WK(nW, VW), HW.setEntityId(nW, OW), HW.setPickable(nW, (0, xi.f)(OW)), oi(WW)) {
-         KW.zD(OW, KW.names.meshAttachments);
+       const PR = CR.yyR(GR).meshEnabledCombinator.getTotalBooleanVal();
+       if (bR.JA(vR, PR), bR.setEntityId(vR, GR), bR.setPickable(vR, (0, wJ.h)(GR)), OJ(RR)) {
+         CR.Jm(GR, CR.names.meshAttachments);
```

#### 2527. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18870` → after: `L18554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18554) · [Before (L18870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18870)

```diff
-           for (const iW of lW.d) {
+           for (const JR of rR.c) {
```

#### 2528. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18875` → after: `L18559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18559) · [Before (L18875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18875)

```diff
-       if ((0, wW.h)(iW, (0, PW.b)(OW)), "Player" === WW) {
+       if ((0, fR.i)(JR, (0, ZR.d)(GR)), "Player" === RR) {
```

#### 2529. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18877-L18878` → after: `L18561-L18562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18561-L18562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18561-L18562) · [Before (L18877-L18878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18877-L18878)

```diff
-         if (cW.d[OW]) {
-           const iW = (0, PW.b)(OW),
+         if (iR.e[GR]) {
+           const JR = (0, ZR.d)(GR),
```

#### 2530. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18880` → after: `L18564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18564) · [Before (L18880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18880)

```diff
-           for (const WW of YW.p) cW.d[OW][WW] && mW.updatePlayerCosmetic(iW, nW, WW, cW.d[OW][WW])
+           for (const RR of MR.w) iR.e[GR][RR] && yR.updatePlayerCosmetic(JR, vR, RR, iR.e[GR][RR])
```

#### 2531. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18882-L18883` → after: `L18566-L18567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18566-L18567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18566-L18567) · [Before (L18882-L18883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18882-L18883)

```diff
-         OW === iW.Dv || null !== (pW = (0, CW.d)().client) && void 0 !== pW && pW.isReplayMode() || (KW.zD(OW, "proximityHide"), eW.l.iZ(`otherPlayerTeleported|${OW}`, {
-           pos: iW.EY.Vk(OW)
+         GR === JR.WH || null !== (IR = (0, zR.e)().client) && void 0 !== IR && IR.isReplayMode() || (CR.Jm(GR, "proximityHide"), DR.n.JK(`otherPlayerTeleported|${GR}`, {
+           pos: JR.zC.vW(GR)
```

#### 2532. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18886-L18887` → after: `L18570-L18571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18570-L18571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18570-L18571) · [Before (L18886-L18887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18886-L18887)

```diff
-       KW.getState(OW, KW.names.nZ).size = yW.c, KW.zD(OW, "proximityFade", {
-         serverOpacity: null !== (AW = null === (bW = iW.sV[iW.Dv][OW]) || void 0 === bW ? void 0 : bW.opacity) && void 0 !== AW ? AW : 1
+       CR.getState(GR, CR.names.vK).size = BR.d, CR.Jm(GR, "proximityFade", {
+         serverOpacity: null !== (eR = null === (aR = JR.Qm[JR.WH][GR]) || void 0 === aR ? void 0 : aR.opacity) && void 0 !== eR ? eR : 1
```

#### 2533. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18890-L18891` → after: `L18574-L18575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18574-L18575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18574-L18575) · [Before (L18890-L18891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18890-L18891)

```diff
-       OW === iW.Dv && (fW = iW.Av, eW.l.subscribe("initInfoReceived", (() => {
-         fW = iW.Av
+       GR === JR.WH && (mR = JR.UH, DR.n.subscribe("initInfoReceived", (() => {
+         mR = JR.UH
```

#### 2534. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18893-L18895` → after: `L18577-L18579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18577-L18579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18577-L18579) · [Before (L18893-L18895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18893-L18895)

```diff
-       const XW = (0, CW.d)().lF(OW);
-       yi[(0, PW.b)(OW)] = XW, FW(iW, OW, WW, XW);
-       const BW = eW.l.subscribe("otherEntitySettings|opacity", (WW => {
+       const SR = (0, zR.e)().p_(GR);
+       BJ[(0, ZR.d)(GR)] = SR, sR(JR, GR, RR, SR);
+       const jR = DR.n.subscribe("otherEntitySettings|opacity", (RR => {
```

#### 2535. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18901-L18902` → after: `L18585-L18586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18585-L18586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18585-L18586) · [Before (L18901-L18902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18901-L18902)

```diff
-           const NW = iW.EY.SOW(OW);
-           NW && (NW.serverOpacity = (0, LW.b)("opacity", EW))
+           const uR = JR.zC.fyR(GR);
+           uR && (uR.serverOpacity = (0, qR.d)("opacity", tR))
```

#### 2536. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18904` → after: `L18588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18588) · [Before (L18904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18904)

```diff
-         RW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW}|_invincible`, (WW => {
+         ER = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR}|_invincible`, (RR => {
```

#### 2537. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18909` → after: `L18593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18593) · [Before (L18909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18909)

```diff
-         !WW && KW.liW(OW, "flashingMeshOverlay") && KW.mV(OW, "flashingMeshOverlay"), WW && !KW.liW(OW, "flashingMeshOverlay") && KW.zD(OW, "flashingMeshOverlay")
+         !RR && CR.RGR(GR, "flashingMeshOverlay") && CR.Zm(GR, "flashingMeshOverlay"), RR && !CR.RGR(GR, "flashingMeshOverlay") && CR.Jm(GR, "flashingMeshOverlay")
```

#### 2538. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18911-L18912` → after: `L18595-L18596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18595-L18596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18595-L18596) · [Before (L18911-L18912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18911-L18912)

```diff
-       GW(null === (jW = iW.sV[iW.Dv][OW]) || void 0 === jW ? void 0 : jW._invincible);
-       const IW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW}|zIndex`, (WW => {
+       YR(null === (LR = JR.Qm[JR.WH][GR]) || void 0 === LR ? void 0 : LR._invincible);
+       const kR = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR}|zIndex`, (RR => {
```

#### 2539. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18915-L18916` → after: `L18599-L18600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18599-L18600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18599-L18600) · [Before (L18915-L18916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18915-L18916)

```diff
-       HW.setRenderingGroupId(nW, null !== (UW = null === (kW = iW.sV[iW.Dv][OW]) || void 0 === kW ? void 0 : kW.zIndex) && void 0 !== UW ? UW : 0);
-       const aW = eW.l.subscribe(`otherEntitySettingsClientifiedEId|${OW}|overlayColour`, (WW => {
+       bR.setRenderingGroupId(vR, null !== (nR = null === (UR = JR.Qm[JR.WH][GR]) || void 0 === UR ? void 0 : UR.zIndex) && void 0 !== nR ? nR : 0);
+       const QR = DR.n.subscribe(`otherEntitySettingsClientifiedEId|${GR}|overlayColour`, (RR => {
```

#### 2540. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18923-L18924` → after: `L18607-L18608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18607-L18608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18607-L18608) · [Before (L18923-L18924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18923-L18924)

```diff
-           const iW = (0, TW.Y)(WW);
-           EW = new mW.c(iW[0] / 255, iW[1] / 255, iW[2] / 255, .5)
+           const JR = (0, lR.P)(RR);
+           tR = new yR.e(JR[0] / 255, JR[1] / 255, JR[2] / 255, .5)
```

#### 2541. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18926` → after: `L18610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18610) · [Before (L18926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18926)

```diff
-         iW.EY.ZOW(OW).overlayColourOverride = EW
+         JR.zC.sGR(GR).overlayColourOverride = tR
```

#### 2542. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18928-L18930` → after: `L18612-L18614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18612-L18614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18612-L18614) · [Before (L18928-L18930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18928-L18930)

```diff
-       rW(null !== (sW = null === (MW = iW.sV[iW.Dv][OW]) || void 0 === MW ? void 0 : MW.overlayColour) && void 0 !== sW ? sW : null);
-       const zW = eW.l.subscribe(`entityScale|${OW}`, (mW => {
-         yi[(0, PW.b)(OW)] = mW, FW(iW, OW, WW, mW)
+       FR(null !== (WR = null === (AR = JR.Qm[JR.WH][GR]) || void 0 === AR ? void 0 : AR.overlayColour) && void 0 !== WR ? WR : null);
+       const TR = DR.n.subscribe(`entityScale|${GR}`, (yR => {
+         BJ[(0, ZR.d)(GR)] = yR, sR(JR, GR, RR, yR)
```

#### 2543. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18935-L18936` → after: `L18619-L18620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18619-L18620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18619-L18620) · [Before (L18935-L18936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18935-L18936)

```diff
-         const NW = (0, Ei.b)(OW),
-           LW = WW.EY.getState((0, PW.b)(iW), NW.meshMetadata.type);
+         const uR = (0, tJ.c)(GR),
+           qR = RR.zC.getState((0, ZR.d)(JR), uR.meshMetadata.type);
```

#### 2544. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18939` → after: `L18623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18623) · [Before (L18939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18939)

```diff
-           uD: cW
+           JI: iR
```

#### 2545. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18944` → after: `L18628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18628) · [Before (L18944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18944)

```diff
-         } = (0, yW.e)(mW, OW), tW = WW.TZ.nD, ZW = (0, PW.b)(iW);
+         } = (0, BR.f)(yR, GR), VR = RR.lK.RP, KR = (0, ZR.d)(JR);
```

#### 2546. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18947` → after: `L18631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18631) · [Before (L18947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18947)

```diff
-           const WW = tW.AmW(cW, 0).scale;
+           const RR = VR.JtR(iR, 0).scale;
```

#### 2547. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18950-L18952` → after: `L18634-L18636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18634-L18636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18634-L18636) · [Before (L18950-L18952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18950-L18952)

```diff
-         const lW = mW * (null !== (EW = NW.modelScale) && void 0 !== EW ? EW : 1);
-         WW.EY.getState(ZW, "animator").setNodeOwnScale(0, xW[0] * lW, xW[1] * lW, xW[2] * lW);
-         const AW = WW.EY.getState(ZW, WW.EY.names.nZ);
+         const rR = yR * (null !== (tR = uR.modelScale) && void 0 !== tR ? tR : 1);
+         RR.zC.getState(KR, "animator").setNodeOwnScale(0, wR[0] * rR, wR[1] * rR, wR[2] * rR);
+         const eR = RR.zC.getState(KR, RR.zC.names.vK);
```

#### 2548. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18955-L18956` → after: `L18639-L18640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18639-L18640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18639-L18640) · [Before (L18955-L18956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18955-L18956)

```diff
-       const QW = eW.l.subscribe(`lifeformDisposed|${OW}`, (() => {
-         eW.l.unsubscribe(BW), eW.l.unsubscribe(RW), eW.l.unsubscribe(IW), eW.l.unsubscribe(aW), eW.l.unsubscribe(zW), eW.l.unsubscribe(QW), OW !== iW.Dv && delete Yi[OW]
+       const hR = DR.n.subscribe(`lifeformDisposed|${GR}`, (() => {
+         DR.n.unsubscribe(jR), DR.n.unsubscribe(ER), DR.n.unsubscribe(kR), DR.n.unsubscribe(QR), DR.n.unsubscribe(TR), DR.n.unsubscribe(hR), GR !== JR.WH && delete MJ[GR]
```

#### 2549. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18958` → after: `L18642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18642) · [Before (L18958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18958)

```diff
-       eW.l.iZ(`lifeformSetupFinished|${OW}`)
+       DR.n.JK(`lifeformSetupFinished|${GR}`)
```

#### 2550. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18964-L18966` → after: `L18648-L18650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18648-L18650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18648-L18650) · [Before (L18964-L18966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18964-L18966)

```diff
-         EE: OW,
-         NE: mW,
-         PE: EW
+         Zt: GR,
+         ft: yR,
+         Vt: tR
```

#### 2551. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18968-L18970` → after: `L18652-L18654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18652-L18654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18652-L18654) · [Before (L18968-L18970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18968-L18970)

```diff
-       const NW = (0, PW.b)(OW);
-       cW.d[OW] = {
-         ...cW.d[OW],
+       const uR = (0, ZR.d)(GR);
+       iR.e[GR] = {
+         ...iR.e[GR],
```

#### 2552. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18972-L18973` → after: `L18656-L18657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18656-L18657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18656-L18657) · [Before (L18972-L18973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18972-L18973)

```diff
-       }, cW.d[NW] = {
-         ...cW.d[NW],
+       }, iR.e[uR] = {
+         ...iR.e[uR],
```

#### 2553. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18976` → after: `L18660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18660) · [Before (L18976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18976)

```diff
-       const LW = (0, CW.h)().EY.MOW(NW);
+       const qR = (0, zR.i)().zC.qyR(uR);
```

#### 2554. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18978-L18979` → after: `L18662-L18663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18662-L18663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18662-L18663) · [Before (L18978-L18979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18978-L18979)

```diff
-       const wW = null !== (iW = LW.uD) && void 0 !== iW ? iW : null;
-       null !== wW && bi ? bi.Player.meshApi.updatePlayerCosmetic(NW, LW.uD, mW, EW) : console.error(`Error: ${NW} not ready for updateIngamePlayerCustomisation, ${null!==wW} ${!!bi}`)
+       const fR = null !== (JR = qR.JI) && void 0 !== JR ? JR : null;
+       null !== fR && aJ ? aJ.Player.meshApi.updatePlayerCosmetic(uR, qR.JI, yR, tR) : console.error(`Error: ${uR} not ready for updateIngamePlayerCustomisation, ${null!==fR} ${!!aJ}`)
```

#### 2555. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18986` → after: `L18670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18670) · [Before (L18986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18986)

```diff
-       return null !== (iW = Yi[(0, PW.b)(WW)]) && void 0 !== iW ? iW : {}
+       return null !== (JR = MJ[(0, ZR.d)(RR)]) && void 0 !== JR ? JR : {}
```

#### 2556. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18991` → after: `L18675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18675) · [Before (L18991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18991)

```diff
-       return null !== (iW = yi[(0, PW.b)(WW)]) && void 0 !== iW ? iW : 1
+       return null !== (JR = BJ[(0, ZR.d)(RR)]) && void 0 !== JR ? JR : 1
```

#### 2557. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L18996` → after: `L18680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18680) · [Before (L18996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L18996)

```diff
-       return null !== (iW = null === (OW = Yi[(0, PW.b)(WW)]) || void 0 === OW || null === (mW = OW.Helmet) || void 0 === mW ? void 0 : mW.itemName) && void 0 !== iW ? iW : null
+       return null !== (JR = null === (GR = MJ[(0, ZR.d)(RR)]) || void 0 === GR || null === (yR = GR.Helmet) || void 0 === yR ? void 0 : yR.itemName) && void 0 !== JR ? JR : null
```

#### 2558. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19002-L19003` → after: `L18686-L18687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18686-L18687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18686-L18687) · [Before (L19002-L19003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19002-L19003)

```diff
-       const NW = (0, CW.h)(),
-         LW = (0, PW.b)(WW);
+       const uR = (0, zR.i)(),
+         qR = (0, ZR.d)(RR);
```

#### 2559. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19011-L19013` → after: `L18695-L18697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18695-L18697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18695-L18697) · [Before (L19011-L19013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19011-L19013)

```diff
-       const cW = NW.EY.MOW(LW);
-       if (null === (null !== (EW = null === cW || void 0 === cW ? void 0 : cW.uD) && void 0 !== EW ? EW : null) || !bi) return;
-       const wW = (0, CW.d)().getLifeformType(LW),
+       const iR = uR.zC.qyR(qR);
+       if (null === (null !== (tR = null === iR || void 0 === iR ? void 0 : iR.JI) && void 0 !== tR ? tR : null) || !aJ) return;
+       const fR = (0, zR.e)().getLifeformType(qR),
```

#### 2560. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19016` → after: `L18700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18700) · [Before (L19016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19016)

```diff
-       const ZW = OW ? hW.l[OW] : void 0;
+       const KR = GR ? gR.o[GR] : void 0;
```

#### 2561. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19020-L19021` → after: `L18704-L18705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18704-L18705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18704-L18705) · [Before (L19020-L19021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19020-L19021)

```diff
-         const WW = OW ? (0, hW.j)(OW) : null,
-           EW = OW ? (0, HW.c)(OW) : null;
+         const RR = GR ? (0, gR.l)(GR) : null,
+           tR = GR ? (0, bR.f)(GR) : null;
```

#### 2562. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19027` → after: `L18711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18711) · [Before (L19027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19027)

```diff
-       return "Player" === WW || "Player" === (0, Ei.b)(WW).meshMetadata.lifeformTypeForModelOverride
+       return "Player" === RR || "Player" === (0, tJ.c)(RR).meshMetadata.lifeformTypeForModelOverride
```

#### 2563. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19030-L19032` → after: `L18714-L18716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18714-L18716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18714-L18716) · [Before (L19030-L19032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19030-L19032)

```diff
-         Dv: WW
-       } = (0, CW.h)();
-       for (const iW of lW.d) ui(WW, iW, null, null);
+         WH: RR
+       } = (0, zR.i)();
+       for (const JR of rR.c) vJ(RR, JR, null, null);
```

#### 2564. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19036` → after: `L18720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18720) · [Before (L19036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19036)

```diff
-   39303: (WW, iW, OW) => {
+   39283: (RR, JR, GR) => {
```

#### 2565. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19040-L19044` → after: `L18724-L18728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18724-L18728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18724-L18728) · [Before (L19040-L19044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19040-L19044)

```diff
-     var mW = OW(38369),
-       EW = OW(2365),
-       NW = OW(38663),
-       PW = OW(38235),
-       LW = OW(39308);
+     var yR = GR(38329),
+       tR = GR(2435),
+       uR = GR(38648),
+       ZR = GR(38195),
+       qR = GR(39288);
```

#### 2566. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19058` → after: `L18742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18742) · [Before (L19058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19058)

```diff
-           if (void 0 !== OW[cW.name]) cW.lV("aAtlasIdx1", 1), cW.lV("aArmourTint", 4), cW.lV("aEnchantmentColour", 3), cW.lV("aEnchantmentSpeed", 1), cW.bV.aAtlasIdx1 = 0, cW.bV.aArmourTint = new mW.c(1, 1, 1, 0), cW.bV.aEnchantmentColour = new mW.Color3(0, 0, 0), cW.bV.aEnchantm … [truncated]
+           if (void 0 !== GR[iR.name]) iR.Am("aAtlasIdx1", 1), iR.Am("aArmourTint", 4), iR.Am("aEnchantmentColour", 3), iR.Am("aEnchantmentSpeed", 1), iR.Im.aAtlasIdx1 = 0, iR.Im.aArmourTint = new yR.e(1, 1, 1, 0), iR.Im.aEnchantmentColour = new yR.Color3(0, 0, 0), iR.Im.aEnchantm … [truncated]
```

#### 2567. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19060-L19062` → after: `L18744-L18746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18744-L18746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18744-L18746) · [Before (L19060-L19062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19060-L19062)

```diff
-             const WW = (0, LW.l)(EW.length);
-             for (let iW = 1; iW <= WW; iW++) cW.lV((0, LW.f)(iW), 4);
-             for (let iW = 1; iW <= WW; iW++) cW.bV[(0, LW.f)(iW)] = PW.Vector4.FromArray(EW, 4 * (iW - 1))
+             const RR = (0, qR.m)(tR.length);
+             for (let JR = 1; JR <= RR; JR++) iR.Am((0, qR.i)(JR), 4);
+             for (let JR = 1; JR <= RR; JR++) iR.Im[(0, qR.i)(JR)] = ZR.Vector4.FromArray(tR, 4 * (JR - 1))
```

#### 2568. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19064` → after: `L18748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18748) · [Before (L19064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19064)

```diff
-           cW.lV("aOpacity", 1), cW.bV.aOpacity = 1, cW.lV("aLightLevels", 4), cW.bV.aLightLevels = (0, NW.m)()
+           iR.Am("aOpacity", 1), iR.Im.aOpacity = 1, iR.Am("aLightLevels", 4), iR.Im.aLightLevels = (0, uR.o)()
```

#### 2569. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19068` → after: `L18752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18752) · [Before (L19068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19068)

```diff
-         const OW = (0, EW.h)().TZ.nD;
+         const GR = (0, tR.i)().lK.RP;
```

#### 2570. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19073` → after: `L18757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18757) · [Before (L19073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19073)

```diff
-         (0, EW.h)().TZ.nD.setGroupEnabled(WW, iW, OW)
+         (0, tR.i)().lK.RP.setGroupEnabled(RR, JR, GR)
```

#### 2571. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19076-L19077` → after: `L18760-L18761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18760-L18761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18760-L18761) · [Before (L19076-L19077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19076-L19077)

```diff
-         const OW = (0, EW.h)().TZ.nD;
-         OW.set(WW, "aOpacity", iW), OW.YV(WW, "aOpacity", iW)
+         const GR = (0, tR.i)().lK.RP;
+         GR.set(RR, "aOpacity", JR), GR.Yz(RR, "aOpacity", JR)
```

#### 2572. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19080-L19081` → after: `L18764-L18765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18764-L18765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18764-L18765) · [Before (L19080-L19081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19080-L19081)

```diff
-         const OW = (0, EW.h)().TZ.nD;
-         OW.set(WW, "aLightLevels", iW), OW.YV(WW, "aLightLevels", iW)
+         const GR = (0, tR.i)().lK.RP;
+         GR.set(RR, "aLightLevels", JR), GR.Yz(RR, "aLightLevels", JR)
```

#### 2573. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19084` → after: `L18768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18768) · [Before (L19084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19084)

```diff
-         const OW = (0, EW.h)().TZ.nD;
+         const GR = (0, tR.i)().lK.RP;
```

#### 2574. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19090-L19091` → after: `L18774-L18775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18774-L18775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18774-L18775) · [Before (L19090-L19091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19090-L19091)

```diff
-           } = (0, LW.i)(Number(mW));
-           this.playerAtlasVec4s[WW][EW - 1][NW] = iW[mW], OW.setGroup(WW, "notArmour", `aAtlasIdx${EW}`, this.playerAtlasVec4s[WW][EW - 1])
+           } = (0, qR.l)(Number(yR));
+           this.playerAtlasVec4s[RR][tR - 1][uR] = JR[yR], GR.setGroup(RR, "notArmour", `aAtlasIdx${tR}`, this.playerAtlasVec4s[RR][tR - 1])
```

#### 2575. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19096` → after: `L18780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18780) · [Before (L19096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19096)

```diff
-   39294: (WW, iW, OW) => {
+   39274: (RR, JR, GR) => {
```

#### 2576. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19100` → after: `L18784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18784) · [Before (L19100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19100)

```diff
-     var mW = OW(352),
+     var yR = GR(385),
```

#### 2577. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19102-L19110` → after: `L18786-L18794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18786-L18794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18786-L18794) · [Before (L19102-L19110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19102-L19110)

```diff
-       NW = OW(4379),
-       PW = OW(39045),
-       LW = OW(3083),
-       cW = OW(39303),
-       wW = OW(2365),
-       tW = OW(344),
-       ZW = OW(39311),
-       xW = OW(3540),
-       lW = OW(38224),
+       uR = GR(4464),
+       ZR = GR(39020),
+       qR = GR(3178),
+       iR = GR(39283),
+       fR = GR(2435),
+       VR = GR(377),
+       KR = GR(39291),
+       wR = GR(3644),
+       rR = GR(38181),
```

#### 2578. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19112` → after: `L18796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18796) · [Before (L19112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19112)

```diff
-       bW = OW(39037);
+       aR = GR(39017);
```

#### 2579. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19121-L19124` → after: `L18805-L18808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18805-L18808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18805-L18808) · [Before (L19121-L19124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19121-L19124)

```diff
-         mW ??= (0, xW.d)(OW);
-         const NW = (0, LW.l)(OW, mW);
-         if (!NW) return void console.error(`Error: ${mW} not a valid cosmetic of type ${OW}`);
-         const PW = (0, wW.h)();
+         yR ??= (0, wR.c)(GR);
+         const uR = (0, qR.m)(GR, yR);
+         if (!uR) return void console.error(`Error: ${yR} not a valid cosmetic of type ${GR}`);
+         const ZR = (0, fR.i)();
```

#### 2580. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19126` → after: `L18810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18810) · [Before (L19126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19126)

```diff
-         const tW = ZW.c.indexOf(OW);
+         const VR = KR.b.indexOf(GR);
```

#### 2581. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19129` → after: `L18813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18813) · [Before (L19129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19129)

```diff
-           const WW = null !== (bW = NW.atlasIdx) && void 0 !== bW ? bW : (0, LW.l)(OW, `${OW}_none`).atlasIdx;
+           const RR = null !== (aR = uR.atlasIdx) && void 0 !== aR ? aR : (0, qR.m)(GR, `${GR}_none`).atlasIdx;
```

#### 2582. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19136` → after: `L18820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18820) · [Before (L19136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19136)

```diff
-             EY: iW
+             zC: JR
```

#### 2583. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19149-L19151` → after: `L18833-L18835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18833-L18835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18833-L18835) · [Before (L19149-L19151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19149-L19151)

```diff
-         const cW = (0, wW.h)(),
-           ZW = cW.EY.MOW(WW);
-         if (!ZW) return void console.error(`Error: ${WW} not ready for updatePlayerArmour, ${ZW}`);
+         const iR = (0, fR.i)(),
+           KR = iR.zC.qyR(RR);
+         if (!KR) return void console.error(`Error: ${RR} not ready for updatePlayerArmour, ${KR}`);
```

#### 2584. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19153` → after: `L18837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18837) · [Before (L19153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19153)

```diff
-           lW = cW.TZ.nD,
+           rR = iR.lK.RP,
```

#### 2585. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19155` → after: `L18839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18839) · [Before (L19155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19155)

```diff
-             uD: AW
+             JI: eR
```

#### 2586. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19161` → after: `L18845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18845) · [Before (L19161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19161)

```diff
-             lW.setNode(AW, WW, "aAtlasIdx1", NW.g[OW]);
+             rR.setNode(eR, RR, "aAtlasIdx1", uR.h[GR]);
```

#### 2587. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19164` → after: `L18848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18848) · [Before (L19164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19164)

```diff
-             const LW = null !== (jW = PW.m[EW]) && void 0 !== jW ? jW : PW.m.None;
+             const qR = null !== (LR = ZR.o[tR]) && void 0 !== LR ? LR : ZR.o.None;
```

#### 2588. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19166` → after: `L18850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18850) · [Before (L19166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19166)

```diff
-             const cW = null !== (UW = tW.hb[EW]) && void 0 !== UW ? UW : tW.hb.None;
+             const iR = null !== (nR = VR.gb[tR]) && void 0 !== nR ? nR : VR.gb.None;
```

#### 2589. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19173` → after: `L18857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18857) · [Before (L19173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19173)

```diff
-         const OW = (0, wW.h)(),
+         const GR = (0, fR.i)(),
```

#### 2590. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19175` → after: `L18859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18859) · [Before (L19175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19175)

```diff
-             EY: mW
+             zC: yR
```

#### 2591. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19177-L19179` → after: `L18861-L18863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18861-L18863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18861-L18863) · [Before (L19177-L19179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19177-L19179)

```diff
-           NW = WW === OW.Dv ? mW.YG(WW).Yz : mW.Vk(WW),
-           PW = WW === OW.Dv ? EW().ZERO : OW.Wl,
-           LW = OW.TZ.nD;
+           uR = RR === GR.WH ? yR.f6(RR).B_ : yR.vW(RR),
+           ZR = RR === GR.WH ? tR().ZERO : GR.Fw,
+           qR = GR.lK.RP;
```

#### 2592. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19184` → after: `L18868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18868) · [Before (L19184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19184)

```diff
-           NW = WW.AmW(iW, 0);
+           uR = RR.JtR(JR, 0);
```

#### 2593. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19212` → after: `L18896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18896) · [Before (L19212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19212)

```diff
-   39322: (WW, iW, OW) => {
+   39300: (RR, JR, GR) => {
```

#### 2594. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19214` → after: `L18898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18898) · [Before (L19214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19214)

```diff
-       b: () => Ei
+       c: () => ZJ
```

#### 2595. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19216-L19223` → after: `L18900-L18907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18900-L18907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18900-L18907) · [Before (L19216-L19223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19216-L19223)

```diff
-     var mW = OW(39654),
-       EW = OW(39661),
-       NW = OW(37575),
-       PW = OW(39274),
-       LW = OW(39326),
-       cW = OW(27),
-       wW = OW(38336),
-       tW = OW(38767);
+     var yR = GR(39627),
+       tR = GR(39630),
+       uR = GR(37494),
+       ZR = GR(39256),
+       qR = GR(39308),
+       iR = GR(32),
+       fR = GR(38296),
+       VR = GR(38771);
```

#### 2596. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19226` → after: `L18910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18910) · [Before (L19226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19226)

```diff
-         this.bloxd = WW, this.eId = iW, this.lifeformType = void 0, this.Hx = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = OW, this.Hx = WW.Hx
+         this.bloxd = RR, this.eId = JR, this.lifeformType = void 0, this.xw = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = GR, this.xw = RR.xw
```

#### 2597. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19230` → after: `L18914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18914) · [Before (L19230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19230)

```diff
-         !this.bloxd.getEntityName(this.eId) && iW.defaultName && this.bloxd.setEntityName(this.eId, iW.defaultName), this.Hx.EY.add([WW.x, WW.y, WW.z], iW.physicsBodyDimensions.width, iW.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.Hx.EY.zD(this.eId, this.Hx. … [truncated]
+         !this.bloxd.getEntityName(this.eId) && JR.defaultName && this.bloxd.setEntityName(this.eId, JR.defaultName), this.xw.zC.add([RR.x, RR.y, RR.z], JR.physicsBodyDimensions.width, JR.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.xw.zC.Jm(this.eId, this.xw. … [truncated]
```

#### 2598. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19233-L19236` → after: `L18917-L18920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18917-L18920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18917-L18920) · [Before (L19233-L19236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19233-L19236)

```diff
-           const OW = this.Hx.TZ.nD,
-             mW = null !== (WW = null === (iW = this.Hx.EY.XiW(this.eId)) || void 0 === iW ? void 0 : iW.uD) && void 0 !== WW ? WW : null,
-             EW = (0, tW.f)(this.eId);
-           null === mW && console.error(`Error: ${this.eId} not ready for pickability change to ${EW}`), OW.setPickable(mW, EW)
+           const GR = this.xw.lK.RP,
+             yR = null !== (RR = null === (JR = this.xw.zC.vGR(this.eId)) || void 0 === JR ? void 0 : JR.JI) && void 0 !== RR ? RR : null,
+             tR = (0, VR.h)(this.eId);
+           null === yR && console.error(`Error: ${this.eId} not ready for pickability change to ${tR}`), GR.setPickable(yR, tR)
```

#### 2599. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19238` → after: `L18922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18922) · [Before (L19238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19238)

```diff
-         this.canAttackSub = cW.l.subscribe(`otherEntitySettings|${this.eId}|canAttack`, OW), this.interactableSub = cW.l.subscribe(`otherEntitySettings|${this.eId}|interactable`, OW), this.multilineTextBoxSub = (0, wW.p)(this.Hx, this.eId), (0, PW.s)(this.lifeformType, this.Hx, t … [truncated]
+         this.canAttackSub = iR.n.subscribe(`otherEntitySettings|${this.eId}|canAttack`, GR), this.interactableSub = iR.n.subscribe(`otherEntitySettings|${this.eId}|interactable`, GR), this.multilineTextBoxSub = (0, fR.q)(this.xw, this.eId), (0, ZR.q)(this.lifeformType, this.xw, t … [truncated]
```

#### 2600. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19241` → after: `L18925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18925) · [Before (L19241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19241)

```diff
-         const OW = this.Hx.EY.aiW(this.eId);
+         const GR = this.xw.zC.oGR(this.eId);
```

#### 2601. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19245-L19246` → after: `L18929-L18930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18929-L18930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18929-L18930) · [Before (L19245-L19246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19245-L19246)

```diff
-             if ("yRotation" === WW ? OW.heading = iW : void 0 !== OW[WW] && (OW[WW] = iW), "armSwinging" === WW && iW) {
-               const WW = this.Hx.EY.MOW(this.eId);
+             if ("yRotation" === RR ? GR.heading = JR : void 0 !== GR[RR] && (GR[RR] = JR), "armSwinging" === RR && JR) {
+               const RR = this.xw.zC.qyR(this.eId);
```

#### 2602. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19248` → after: `L18932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18932) · [Before (L19248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19248)

```diff
-             } else if ("xRotation" === WW || "yRotation" === WW || "zRotation" === WW)(0, wW.t)(this.Hx, this.eId, WW, iW);
+             } else if ("xRotation" === RR || "yRotation" === RR || "zRotation" === RR)(0, fR.r)(this.xw, this.eId, RR, JR);
```

#### 2603. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19251-L19252` → after: `L18935-L18936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18935-L18936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18935-L18936) · [Before (L19251-L19252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19251-L19252)

```diff
-               const WW = this.Hx.EY.UOW(this.eId);
-               WW.networkedHeldItemName = iW, (0, LW.updateHeldItemState)(this.Hx, WW)
+               const RR = this.xw.zC.tyR(this.eId);
+               RR.networkedHeldItemName = JR, (0, qR.updateHeldItemState)(this.xw, RR)
```

#### 2604. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19254-L19255` → after: `L18938-L18939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18938-L18939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18938-L18939) · [Before (L19254-L19255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19254-L19255)

```diff
-               const WW = this.Hx.EY.UOW(this.eId);
-               WW.networkedHeldItemEnchantmentTier = iW, (0, LW.updateHeldItemState)(this.Hx, WW)
+               const RR = this.xw.zC.tyR(this.eId);
+               RR.networkedHeldItemEnchantmentTier = JR, (0, qR.updateHeldItemState)(this.xw, RR)
```

#### 2605. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19261` → after: `L18945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18945) · [Before (L19261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19261)

```diff
-         this.Hx.EY.deleteEntity(this.eId), cW.l.iZ(`lifeformDisposed|${(0,NW.b)(this.eId)}`), "Player" === this.lifeformType && cW.l.iZ("playerNamesUpdated"), cW.l.unsubscribe(this.canAttackSub), cW.l.unsubscribe(this.interactableSub), cW.l.unsubscribe(this.multilineTextBoxSub)
+         this.xw.zC.deleteEntity(this.eId), iR.n.JK(`lifeformDisposed|${(0,uR.d)(this.eId)}`), "Player" === this.lifeformType && iR.n.JK("playerNamesUpdated"), iR.n.unsubscribe(this.canAttackSub), iR.n.unsubscribe(this.interactableSub), iR.n.unsubscribe(this.multilineTextBoxSub)
```

#### 2606. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19264-L19266` → after: `L18948-L18950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18948-L18950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18948-L18950) · [Before (L19264-L19266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19264-L19266)

```diff
-         this.bloxd.setEntityName(this.eId, WW), this.bloxd.setEntityName((0, NW.b)(this.eId), WW);
-         const iW = this.Hx.EY;
-         if (iW.sOW(this.eId)) cW.l.iZ(`entityNameChanged|${this.eId}`);
+         this.bloxd.setEntityName(this.eId, RR), this.bloxd.setEntityName((0, uR.d)(this.eId), RR);
+         const JR = this.xw.zC;
+         if (JR.ZyR(this.eId)) iR.n.JK(`entityNameChanged|${this.eId}`);
```

#### 2607. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19269` → after: `L18953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18953) · [Before (L19269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19269)

```diff
-           iW.zD(this.eId, iW.names.entityName, {
+           JR.Jm(this.eId, JR.names.entityName, {
```

#### 2608. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19273` → after: `L18957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18957) · [Before (L19273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19273)

```diff
-         "Player" === this.lifeformType && cW.l.iZ("playerNamesUpdated")
+         "Player" === this.lifeformType && iR.n.JK("playerNamesUpdated")
```

#### 2609. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19276-L19282` → after: `L18960-L18966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18960-L18966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18960-L18966) · [Before (L19276-L19282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19276-L19282)

```diff
-     var xW, lW, AW = OW(39294),
-       bW = OW(639),
-       jW = OW(38715),
-       UW = OW(2365),
-       kW = OW(2350),
-       sW = OW(2478),
-       MW = OW(39255);
+     var wR, rR, eR = GR(39274),
+       aR = GR(671),
+       LR = GR(38707),
+       nR = GR(2435),
+       UR = GR(2421),
+       WR = GR(2532),
+       AR = GR(39227);
```

#### 2610. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19291-L19292` → after: `L18975-L18976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18975-L18976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18975-L18976) · [Before (L19291-L19292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19291-L19292)

```diff
-           (0, MW.setRigAiState)(this.Hx, this.eId, null !== (OW = bW.h[iW]) && void 0 !== OW ? OW : null)
-         } else "armSwinging" === WW && iW && !this.Hx.EY.MOW(this.eId) && (0, MW.playRigAction)(this.Hx, this.eId, jW.n)
+           (0, AR.setRigAiState)(this.xw, this.eId, null !== (GR = aR.k[JR]) && void 0 !== GR ? GR : null)
+         } else "armSwinging" === RR && JR && !this.xw.zC.qyR(this.eId) && (0, AR.playRigAction)(this.xw, this.eId, LR.n)
```

#### 2611. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19296` → after: `L18980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18980) · [Before (L19296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19296)

```diff
-         return this.Hx.EY.getState(this.eId, WW.meshMetadata.type).uD
+         return this.xw.zC.getState(this.eId, RR.meshMetadata.type).JI
```

#### 2612. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19299` → after: `L18983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18983) · [Before (L19299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19299)

```diff
-         PW.d[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, WW)
+         ZR.b[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, RR)
```

#### 2613. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19302` → after: `L18986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18986) · [Before (L19302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19302)

```diff
-     const SW = [33, 0, 1, "h", 240, "a", 9, 214, 5, 30, 4, 8, 255, "length", "c", "d", 100, "undefined", void 0, 39, 63, 6, "fromCodePoint", 7, 12, "push", 3, 145, 166, 163, "g", 91, "e", 96, 8191, 88, 13, 14, 2, 98, 147, 71, 246, 179, 131, "i", 221, 235, 206, 119, 85, !1, !0, 22 … [truncated]
+     const XR = [136, 0, 1, 219, 3, "a", 9, 26, "e", "f", 44, 8, 255, "length", 13, 204, "d", 16, "undefined", void 0, 35, 2, 58, 63, 6, "fromCodePoint", 7, 12, "push", 39, "b", 61, "g", 91, 5, 8191, 88, 14, 241, 50, "c", 93, 192, 60, "=", ";", 174, !1, 4, 207, !0, 107, 18, 130, 1 … [truncated]
```

#### 2614. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19305` → after: `L18989-L19021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R18989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L18989-L19021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L18989-L19021) · [Before (L19305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19305)

```diff
-       return WW[SW[13]] = SW[2], typeof nW !== SW[17] && nW ? (new nW).decode(new uW(WW[SW[1]])) : typeof oW !== SW[17] && oW ? oW.from(WW[SW[1]]).toString("utf-8") : vW(WW[SW[1]])
+       return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = function(...RR) {
+         for (gR(RR[XR[13]] = XR[2], RR[XR[5]] = '>z25416:sgV,fTDqC)FN^hMu/*p`8l[jQL=?7vKB"d$ay|r~{UH<+E]RmAPGb&(_9iZ!IYxSJo3n@}twkecXO.%W#0;', RR[-XR[0]] = "" + (RR[XR[1]] || ""), RR[XR[4]] = RR[-XR[0]].length, RR[-XR[10]] = [], RR[XR[8]] = XR[1], RR[XR[9]] = XR[1], RR[-XR[7]] =  … [truncated]
+           if (RR[XR[6]] = RR[XR[5]].indexOf(RR[-XR[0]][RR[-XR[3]]]), RR[XR[6]] !== -XR[2])
+             if (RR[-XR[7]] < XR[1]) RR[-XR[7]] = RR[XR[6]];
+             else {
+               gR(RR[-XR[7]] += RR[XR[6]] * XR[33], RR[XR[8]] |= RR[-XR[7]] << RR[XR[9]], RR[XR[9]] += (RR[-XR[7]] & XR[35]) > XR[36] ? XR[14] : XR[37]);
+               do {
+                 gR(RR[-XR[10]].push(RR[XR[8]] & XR[12]), RR[XR[8]] >>= XR[11], RR[XR[9]] -= XR[11])
+               } while (RR[XR[9]] > XR[26]);
+               RR[-XR[7]] = -XR[2]
+             } return RR[-XR[7]] > -XR[2] && RR[-XR[10]].push((RR[XR[8]] | RR[-XR[7]] << RR[XR[9]]) & XR[12]), BR(RR[-XR[10]])
+       }(rR[RR[XR[1]]]) : wR[RR[XR[1]]]
+     }
+ 
+     function BR(...RR) {
+       return RR[XR[13]] = XR[2], typeof xR !== XR[18] && xR ? (new xR).decode(new NR(RR[XR[1]])) : typeof DR !== XR[18] && DR ? DR.from(RR[XR[1]]).toString("utf-8") : cR(RR[XR[1]])
+ ... (17 more added lines; see GitHub link above)
```

#### 2615. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19313-L19314` → after: `L19029-L19030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19029-L19030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19029-L19030) · [Before (L19313-L19314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19313-L19314)

```diff
-     TW(xW = {}, lW = ["R))aH?:IwQ", "j>_,Vb{Q^>2", "J|K7Tc+<lr", "1g{r.Jsz@WnJ<B*yD5&kY49", "%4ga1v/Itb(k>5ts{fiMjBYEL0XqOusC^,Zj,P`2FS>n^]uh72Um_P]~9W", "ZI(7o^2Iow_", "k|kd+09", ";2%diaL:hodJzW~Ip.O", "K4[79PwQI>t$_j<Pzi)r", 'ud$ZO^I7{_S(EW<Cx!W8Q%)"B>F$wu^P,!QS<+YEkI:")to~_CO' … [truncated]
-       TW(WW[SW[13]] = SW[1], WW[SW[5]] = [function() {
+     gR(wR = {}, rR = ['w,_UHc0?A(l@3x5)O<#]7"Ld|F6]z', 'ciS4XXM2XfI*8GX=emTj~vxf}sqJ"GJpb)3<yI[FTGC=z', "1bT:vn>", "Vu}jRPTNITrR[1Wlt<fRx3??{FKj=v#M{in3?.1Nyh", 'MpJga<nl>Zt*obQ/^p[:Grgz!9"5{59Fk>', 'U"GE1EMkcb0}zCR=n(M@uKt+yE){}4E"G=^3X|.u5', "x<!1wH1YXNgI#SnpE^Djym;=DF}k|49l&{L … [truncated]
+       gR(RR[XR[13]] = XR[1], RR[XR[14]] = [function() {
```

#### 2616. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19322` → after: `L19038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19038) · [Before (L19322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19322)

```diff
-       }], WW[SW[2]] = SW[18], WW[SW[14]] = []);
+       }], RR[XR[2]] = XR[19], RR[XR[15]] = []);
```

#### 2617. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19324` → after: `L19040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19040) · [Before (L19324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19324)

```diff
-         TW(WW[SW[2]] = Object, WW[SW[14]][SW[25]]("".__proto__.constructor.name))
+         gR(RR[XR[2]] = Object, RR[XR[15]][XR[28]]("".__proto__.constructor.name))
```

#### 2618. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19326-L19328` → after: `L19042-L19044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19042-L19044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19042-L19044) · [Before (L19326-L19328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19326-L19328)

```diff
-       WW: for (WW[SW[15]] = SW[1]; WW[SW[15]] < WW[SW[5]][SW[13]]; WW[SW[15]]++) try {
-         for (WW[SW[2]] = WW[SW[5]][WW[SW[15]]](), WW[-SW[16]] = SW[1]; WW[-SW[16]] < WW[SW[14]][SW[13]]; WW[-SW[16]]++)
-           if (typeof WW[SW[2]][WW[SW[14]][WW[-SW[16]]]] === SW[17]) continue WW;
+       RR: for (RR[XR[16]] = XR[1]; RR[XR[16]] < RR[XR[14]][XR[13]]; RR[XR[16]]++) try {
+         for (RR[XR[2]] = RR[XR[14]][RR[XR[16]]](), RR[-XR[17]] = XR[1]; RR[-XR[17]] < RR[XR[15]][XR[13]]; RR[-XR[17]]++)
+           if (typeof RR[XR[2]][RR[XR[15]][RR[-XR[17]]]] === XR[18]) continue RR;
```

#### 2619. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19332-L19333` → after: `L19048-L19049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19048-L19049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19048-L19049) · [Before (L19332-L19333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19332-L19333)

```diff
-     }() || {}, nW = HW.TextDecoder, uW = HW.Uint8Array, oW = HW.OZ, dW = HW.String || String, eW = HW.Array || Array, vW = function(...WW) {
-       return TW(WW[SW[13]] = SW[1], WW[SW[5]] = new eW(128), WW[SW[2]] = dW[SW[22]] || dW.fromCharCode, WW[SW[14]] = []),
+     }() || {}, xR = OR.TextDecoder, NR = OR.Uint8Array, DR = OR.GK, HR = OR.String || String, oR = OR.Array || Array, cR = function(...RR) {
+       return gR(RR[XR[13]] = XR[1], RR[-XR[29]] = new oR(XR[85]), RR[XR[30]] = HR[XR[25]] || HR.fromCharCode, RR[XR[20]] = []),
```

#### 2620. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19335-L19336` → after: `L19051-L19052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19051-L19052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19051-L19052) · [Before (L19335-L19336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19335-L19336)

```diff
-           for (TW(iW[SW[13]] = SW[2], iW[SW[5]] = SW[18], iW[-SW[19]] = SW[18], iW[SW[14]] = iW[SW[1]][SW[13]], WW[SW[14]][SW[13]] = SW[1]), iW[SW[15]] = SW[1]; iW[SW[15]] < iW[SW[14]];) TW(iW[-SW[19]] = iW[SW[1]][iW[SW[15]]++], iW[-SW[19]] <= SW[75] ? iW[SW[5]] = iW[-SW[19]] : i … [truncated]
-           return WW[SW[14]].join("")
+           for (gR(JR[XR[13]] = XR[2], JR[-XR[22]] = XR[19], JR[XR[21]] = XR[19], JR[XR[4]] = JR[XR[1]][XR[13]], RR[XR[20]][XR[13]] = XR[1]), JR[XR[16]] = XR[1]; JR[XR[16]] < JR[XR[4]];) gR(JR[XR[21]] = JR[XR[1]][JR[XR[16]]++], JR[XR[21]] <= XR[78] ? JR[-XR[22]] = JR[XR[21]] : JR[ … [truncated]
+           return RR[XR[20]].join("")
```

#### 2621. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19338` → after: `L19054-L19056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19054-L19056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19054-L19056) · [Before (L19338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19338)

```diff
-     }()), (() => {
+     }()), MR(103) + "0" in pR && function(...RR) {
+       RR[XR[13]] = XR[1]
+     }(), (() => {
```

#### 2622. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19340-L19343` → after: `L19058-L19063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19058-L19063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19058-L19063) · [Before (L19340-L19343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19340-L19343)

```diff
-           WW[SW[13]] = SW[2], typeof xW[WW[SW[1]]] === SW[17] ? xW[WW[SW[1]]] = function(...WW) {
-             for (TW(WW[SW[13]] = SW[2], WW[SW[5]] = 'zw#H?nM.heP*QT6S!+l|OEFA3bNBCd8{`"c}D;mX^$aoU=&%g<Y_]~/1qJ9tjuvV)45yfWx,2i>krR(@07pKZ:ILGs[', WW[SW[27]] = "" + (WW[SW[1]] || ""), WW[SW[26]] = WW[SW[27]].length, WW[SW[15]] = [], WW[SW[32]] = SW[1], WW[-SW[33]] = SW[1], WW[SW[ … [truncated]
-               if (WW[-SW[29]] = WW[SW[5]].indexOf(WW[SW[27]][WW[-SW[28]]]), WW[-SW[29]] !== -SW[2])
-                 if (WW[SW[30]] < SW[1]) WW[SW[30]] = WW[-SW[29]];
+           return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = function(RR) {
+             var JR, GR, yR, tR, uR, ZR, qR;
+             for (gR(JR = "" + (RR || ""), GR = JR.length, yR = [], tR = XR[1], uR = XR[1], ZR = -XR[2]), qR = XR[1]; qR < GR; qR++) {
+               var iR = 'B`u%C<kv9mbS,;ZHY}1GyhiPqw^2EI&X3r=!A6J@+oL"*4[5R8K:p.s|#xdgQcD/)fzTMO>UVF0N]$?ntja7_l(~We{'.indexOf(JR[qR]);
+               if (iR !== -XR[2])
+                 if (ZR < XR[1]) ZR = iR;
```

#### 2623. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19345` → after: `L19065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19065) · [Before (L19345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19345)

```diff
-                   TW(WW[SW[30]] += WW[-SW[29]] * SW[31], WW[SW[32]] |= WW[SW[30]] << WW[-SW[33]], WW[-SW[33]] += (WW[SW[30]] & SW[34]) > SW[35] ? SW[36] : SW[37]);
+                   gR(ZR += iR * XR[33], tR |= ZR << uR, uR += (ZR & XR[35]) > XR[36] ? XR[14] : XR[37]);
```

#### 2624. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19347-L19350` → after: `L19067-L19072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19067-L19072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19067-L19072) · [Before (L19347-L19350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19347-L19350)

```diff
-                     TW(WW[SW[15]].push(WW[SW[32]] & SW[12]), WW[SW[32]] >>= SW[11], WW[-SW[33]] -= SW[11])
-                   } while (WW[-SW[33]] > SW[23]);
-                   WW[SW[30]] = -SW[2]
-                 } return WW[SW[30]] > -SW[2] && WW[SW[15]].push((WW[SW[32]] | WW[SW[30]] << WW[-SW[33]]) & SW[12]), YW(WW[SW[15]])
+                     gR(yR.push(tR & XR[12]), tR >>= XR[11], uR -= XR[11])
+                   } while (uR > XR[26]);
+                   ZR = -XR[2]
+                 }
+             }
+             return ZR > -XR[2] && yR.push((tR | ZR << uR) & XR[12]), BR(yR)
```

#### 2625. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19352` → after: `L19074-L19080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19074-L19080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19074-L19080) · [Before (L19352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19352)

```diff
-         }(101), SW[52]) {
+         }(XR[51]) in pR && function(...RR) {
+           gR(RR[XR[13]] = XR[1], RR[-XR[49]] = function(...JR) {
+             return gR(JR[XR[13]] = XR[4], JR[-XR[46]] = {}), JR[XR[21]].length !== JR[XR[1]].length + JR[XR[2]].length ? XR[47] : RR[XR[2]](JR[XR[1]], JR[XR[2]], JR[XR[21]], XR[1], XR[1], XR[1], JR[-XR[46]])
+           }, RR[XR[2]] = function(...JR) {
+             return gR(JR[XR[13]] = XR[26], JR[XR[5]] = XR[47]), JR[XR[34]] >= JR[XR[21]].length ? XR[50] : JR[XR[24]]["" + JR[XR[4]] + JR[XR[48]] + JR[XR[34]]] !== XR[19] ? JR[XR[24]]["" + JR[XR[4]] + JR[XR[48]] + JR[XR[34]]] : (JR[XR[21]][JR[XR[34]]] === JR[XR[1]][JR[XR[4]]] &&  … [truncated]
+           }, console.log(RR[-XR[49]]))
+         }(), XR[50]) {
```

#### 2626. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19354-L19356` → after: `L19082-L19084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19082-L19084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19082-L19084) · [Before (L19354-L19356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19354-L19356)

```diff
-           for (TW(WW[SW[13]] = SW[2], WW[SW[2]] = '(;{w</sOu4M}+.mba%,J38A=_zy|F^@ot#f:>"e&q$`0]dIZD~UXv)Gj5c?W6RVkHYli1g9prxPhK[!7N2B*TLQEnSC', WW[SW[38]] = "" + (WW[SW[1]] || ""), WW[SW[14]] = WW[SW[38]].length, WW[SW[10]] = [], WW[-SW[42]] = SW[1], WW[SW[21]] = SW[1], WW[SW[41 … [truncated]
-             if (WW[SW[16]] = WW[SW[2]].indexOf(WW[SW[38]][WW[SW[3]]]), WW[SW[16]] !== -SW[2])
-               if (WW[SW[41]] < SW[1]) WW[SW[41]] = WW[SW[16]];
+           for (gR(RR[XR[13]] = XR[2], RR[XR[53]] = 'E$7,b+2}B1=u_XMpe:"Ak4;YPQo6~ahOqm{n9F)cNC>Z!ULK(r*RI0H?s8vVS5G&J@]g`Dzl#%wWy^di<xj3.[|fTt/', RR[XR[21]] = "" + (RR[XR[1]] || ""), RR[XR[4]] = RR[XR[21]].length, RR[XR[48]] = [], RR[XR[8]] = XR[1], RR[XR[55]] = XR[1], RR[-XR[54] … [truncated]
+             if (RR[XR[52]] = RR[XR[53]].indexOf(RR[XR[21]][RR[XR[51]]]), RR[XR[52]] !== -XR[2])
+               if (RR[-XR[54]] < XR[1]) RR[-XR[54]] = RR[XR[52]];
```

#### 2627. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19358` → after: `L19086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19086) · [Before (L19358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19358)

```diff
-                 TW(WW[SW[41]] += WW[SW[16]] * SW[31], WW[-SW[42]] |= WW[SW[41]] << WW[SW[21]], WW[SW[21]] += (WW[SW[41]] & SW[34]) > SW[35] ? SW[36] : SW[37]);
+                 gR(RR[-XR[54]] += RR[XR[52]] * XR[33], RR[XR[8]] |= RR[-XR[54]] << RR[XR[55]], RR[XR[55]] += (RR[-XR[54]] & XR[35]) > XR[36] ? XR[14] : XR[37]);
```

#### 2628. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19360-L19363` → after: `L19088-L19091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19088-L19091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19088-L19091) · [Before (L19360-L19363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19360-L19363)

```diff
-                   TW(WW[SW[10]].push(WW[-SW[42]] & SW[12]), WW[-SW[42]] >>= SW[11], WW[SW[21]] -= SW[11])
-                 } while (WW[SW[21]] > SW[23]);
-                 WW[SW[41]] = -SW[2]
-               } return WW[SW[41]] > -SW[2] && WW[SW[10]].push((WW[-SW[42]] | WW[SW[41]] << WW[SW[21]]) & SW[12]), YW(WW[SW[10]])
+                   gR(RR[XR[48]].push(RR[XR[8]] & XR[12]), RR[XR[8]] >>= XR[11], RR[XR[55]] -= XR[11])
+                 } while (RR[XR[55]] > XR[26]);
+                 RR[-XR[54]] = -XR[2]
+               } return RR[-XR[54]] > -XR[2] && RR[XR[48]].push((RR[XR[8]] | RR[-XR[54]] << RR[XR[55]]) & XR[12]), BR(RR[XR[48]])
```

#### 2629. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19367` → after: `L19095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19095) · [Before (L19367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19367)

```diff
-           return iW[SW[13]] = SW[2], typeof xW[iW[SW[1]]] === SW[17] ? xW[iW[SW[1]]] = WW(lW[iW[SW[1]]]) : xW[iW[SW[1]]]
+           return JR[XR[13]] = XR[2], typeof wR[JR[XR[1]]] === XR[18] ? wR[JR[XR[1]]] = RR(rR[JR[XR[1]]]) : wR[JR[XR[1]]]
```

#### 2630. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19400` → after: `L19142-L19159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19142-L19159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19142-L19159) · [Before (L19400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19400)

```diff
-                 return iW[SW[13]] = SW[2], typeof xW[iW[SW[1]]] === SW[17] ? xW[iW[SW[1]]] = WW(lW[iW[SW[1]]]) : xW[iW[SW[1]]]
+                 return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = function(...RR) {
+                   for (gR(RR[XR[13]] = XR[2], RR[XR[2]] = '5DJdeCBnAWIMXFyb,7^](oT`G9j6?Zv#P.18Ku[Rq_2Q"Y=mrl&t+p;:wUH!VLSfxEgizc</})@hO|0$k{3>%4*Nsa~', RR[-XR[67]] = "" + (RR[XR[1]] || ""), RR[-XR[69]] = RR[-XR[67]].length, RR[-XR[71]] = [], RR[XR[34]] = XR[1], RR[-XR[68]] = XR[ … [truncated]
+                     if (RR[-XR[70]] = RR[XR[2]].indexOf(RR[-XR[67]][RR[XR[11]]]), RR[-XR[70]] !== -XR[2])
+                       if (RR[XR[26]] < XR[1]) RR[XR[26]] = RR[-XR[70]];
+                       else {
+                         gR(RR[XR[26]] += RR[-XR[70]] * XR[33], RR[XR[34]] |= RR[XR[26]] << RR[-XR[68]], RR[-XR[68]] += (RR[XR[26]] & XR[35]) > XR[36] ? XR[14] : XR[37]);
+                         do {
+                           gR(RR[-XR[71]].push(RR[XR[34]] & XR[12]), RR[XR[34]] >>= XR[11], RR[-XR[68]] -= XR[11])
+                         } while (RR[-XR[68]] > XR[26]);
+                         RR[XR[26]] = -XR[2]
+                       } return RR[XR[26]] > -XR[2] && RR[-XR[71]].push((RR[XR[34]] | RR[XR[26]] << RR[-XR[68]]) & XR[12]), BR(RR[-XR[71]])
+                 }(rR[RR[XR[1]]]) : wR[RR[XR[1]]]
+               }
+               JR[XR[13]] = XR[2];
+               try {
+                 RR[XR[72]]
+ ... (2 more added lines; see GitHub link above)
```

#### 2631. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19404-L19407` → after: `L19167-L19178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19167-L19178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19167-L19178) · [Before (L19404-L19407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19404-L19407)

```diff
-                 WW[SW[13]] = SW[2];
-                 const iW = {};
-                 for (let OW of WW[SW[1]].replace(/[^w]/g, "").toLowerCase()) iW[OW] = iW[OW] + SW[2] || SW[2];
-                 return iW
+                 return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = function(...RR) {
+                   for (gR(RR[XR[13]] = XR[2], RR[XR[2]] = 'mIKATeogsiRrWpBqdHtlVZULNGPy0FSO]kCj(Xb5"Yc9}^*3|/unhM8zx{E,Q;Df?2a_w@[!=<.4`#>)~&:+v$61%7J', RR[XR[76]] = "" + (RR[XR[1]] || ""), RR[XR[4]] = RR[XR[76]].length, RR[XR[16]] = [], RR[XR[8]] = XR[1], RR[XR[24]] = XR[1], RR[ … [truncated]
+                     if (RR[XR[59]] = RR[XR[2]].indexOf(RR[XR[76]][RR[XR[39]]]), RR[XR[59]] !== -XR[2])
+                       if (RR[-XR[77]] < XR[1]) RR[-XR[77]] = RR[XR[59]];
+                       else {
+                         gR(RR[-XR[77]] += RR[XR[59]] * XR[33], RR[XR[8]] |= RR[-XR[77]] << RR[XR[24]], RR[XR[24]] += (RR[-XR[77]] & XR[35]) > XR[36] ? XR[14] : XR[37]);
+                         do {
+                           gR(RR[XR[16]].push(RR[XR[8]] & XR[12]), RR[XR[8]] >>= XR[11], RR[XR[24]] -= XR[11])
+                         } while (RR[XR[24]] > XR[26]);
+                         RR[-XR[77]] = -XR[2]
+                       } return RR[-XR[77]] > -XR[2] && RR[XR[16]].push((RR[XR[8]] | RR[-XR[77]] << RR[XR[24]]) & XR[12]), BR(RR[XR[16]])
+                 }(rR[RR[XR[1]]]) : wR[RR[XR[1]]]
```

#### 2632. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19409-L19416` → after: `L19180-L19184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19180-L19184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19180-L19184) · [Before (L19409-L19416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19409-L19416)

```diff
- 
-               function mW(...WW) {
-                 WW[SW[13]] = SW[38];
-                 const iW = buildCharMap(WW[SW[1]]),
-                   OW = buildCharMap(WW[SW[2]]);
-                 for (let mW in iW)
-                   if (iW[mW] !== OW[mW]) return SW[51];
-                 return Object.keys(iW).length !== Object.keys(OW).length ? SW[51] : SW[52]
+               JR[XR[13]] = XR[2];
+               try {
+                 RR[XR[2]]
+               } catch (GR) {
+                 RR[XR[2]] = ""
```

#### 2633. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19419-L19422` → after: `L19191-L19195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19191-L19195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19191-L19195) · [Before (L19419-L19422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19419-L19422)

```diff
-               function EW(...WW) {
-                 WW[SW[13]] = SW[2];
-                 return NW(WW[SW[1]]) !== 1 / 0
-               }
+             function ZR(...RR) {
+               var JR, GR;
+               for (gR(RR[XR[13]] = XR[2], RR[XR[30]] = "", RR[XR[21]] = -XR[2]); ++RR[XR[21]] < RR[XR[1]].length;) gR(JR = RR[XR[1]].charCodeAt(RR[XR[21]]), GR = RR[XR[21]] + XR[2] < RR[XR[1]].length ? RR[XR[1]].charCodeAt(RR[XR[21]] + XR[2]) : XR[1]), 55296 <= JR && JR <= 56319  … [truncated]
+               return RR[XR[30]]
+             }
```

#### 2634. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19424-L19436` → after: `L19197-L19244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19197-L19244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19197-L19244) · [Before (L19424-L19436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19424-L19436)

```diff
-               function NW(...WW) {
-                 if (WW[SW[13]] = SW[2], !WW[SW[1]]) return -SW[2];
-                 const iW = NW(WW[SW[1]].left),
-                   OW = NW(WW[SW[1]].right),
-                   mW = Math.abs(iW - OW);
-                 if (iW === 1 / 0 || OW === 1 / 0 || mW > SW[2]) return 1 / 0;
-                 return Math.max(iW, OW) + SW[2]
-               }
-               window[iW(103) + iW(104) + iW(105) + "_"] = {
-                 buildCharacterMap: OW,
-                 isAnagrams: mW,
-                 isBalanced: EW,
-                 getHeightBalanced: NW
+             function qR(...RR) {
+               for (gR(RR[XR[13]] = XR[2], RR[XR[5]] = Array(RR[XR[1]].length >> XR[21])), RR[XR[30]] = XR[1]; RR[XR[30]] < RR[XR[5]].length; RR[XR[30]]++) RR[XR[5]][RR[XR[30]]] = XR[1];
+               for (RR[XR[30]] = XR[1]; RR[XR[30]] < RR[XR[1]].length * XR[11]; RR[XR[30]] += XR[11]) RR[XR[5]][RR[XR[30]] >> XR[34]] |= (RR[XR[1]].charCodeAt(RR[XR[30]] / XR[11]) & XR[12]) << XR[87] - RR[XR[30]] % XR[69];
+               return RR[XR[5]]
+             }
+ 
+             function iR(...RR) {
+               for (gR(RR[XR[13]] = XR[2], RR[XR[2]] = ""), RR[XR[21]] = XR[1]; RR[XR[21]] < RR[XR[1]].length * XR[69]; RR[XR[21]] += XR[11]) RR[XR[2]] += String.fromCharCode(RR[XR[1]][RR[XR[21]] >> XR[34]] >>> XR[87] - RR[XR[21]] % XR[69] & XR[12]);
+               return RR[XR[2]]
+             }
+ 
+             function fR(...RR) {
+               return RR[XR[13]] = XR[21], RR[XR[1]] >>> RR[XR[2]] | RR[XR[1]] << XR[69] - RR[XR[2]]
+             }
+ 
+             function VR(...RR) {
+ ... (32 more added lines; see GitHub link above)
```

#### 2635. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19438` → after: `L19246-L19307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19246-L19307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19246-L19307) · [Before (L19438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19438)

```diff
-             }(), !OW && (0, UW[SW[3]])()) {
+               return JR[XR[22]]
+             }
+ 
+             function AR(...RR) {
+               return gR(RR[XR[13]] = XR[21], RR[XR[5]] = (RR[XR[1]] & XR[91]) + (RR[XR[2]] & XR[91]), RR[XR[4]] = (RR[XR[1]] >> XR[17]) + (RR[XR[2]] >> XR[17]) + (RR[XR[5]] >> XR[17])), RR[XR[4]] << XR[17] | RR[XR[5]] & XR[91]
+             }
+             return gR(RR[XR[13]] = XR[1], RR[XR[72]] = XR[1], RR[XR[2]] = ""), RR[XR[21]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -16800791 … [truncated]
+               hex: function(...RR) {
+                 return RR[XR[13]] = XR[2], tR(function(...RR) {
+                   return RR[XR[13]] = XR[2], iR(WR(qR(RR[XR[1]]), RR[XR[1]].length * XR[11]))
+                 }(ZR(RR[XR[1]])))
+               },
+               b64: JR,
+               any: GR,
+               hex_hmac: function(...RR) {
+                 return RR[XR[13]] = XR[21], tR(yR(ZR(RR[XR[1]]), ZR(RR[XR[2]])))
+ ... (46 more added lines; see GitHub link above)
```

#### 2636. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19440-L19442` → after: `L19309-L19311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19309-L19311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19309-L19311) · [Before (L19440-L19442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19440-L19442)

```diff
-               for (TW(WW[SW[13]] = SW[2], WW[SW[2]] = 'RdoO+"Wnu%l!Q6N~;Tf3vV2ZmrAh_?8Bqwbk9L54SxPIG[XJta{gH]p`isy|}/&:@(<F)Y$CUezD0.#,MK*j^=7>1Ec', WW[SW[38]] = "" + (WW[SW[1]] || ""), WW[SW[26]] = WW[SW[38]].length, WW[SW[10]] = [], WW[SW[8]] = SW[1], WW[SW[56]] = SW[1], WW[SW[ … [truncated]
-                 if (WW[-SW[54]] = WW[SW[2]].indexOf(WW[SW[38]][WW[-SW[53]]]), WW[-SW[54]] !== -SW[2])
-                   if (WW[SW[55]] < SW[1]) WW[SW[55]] = WW[-SW[54]];
+               for (gR(RR[XR[13]] = XR[2], RR[XR[5]] = '"beZoFGKAhPdRiVDw1WJ&Bv$n2sU>t^u(*3LCg#/4c;THq5y`|{Y}Ea<!6p=kQl9~fSI:+jrm8,.MOXN@z[7x?]%_)0', RR[XR[30]] = "" + (RR[XR[1]] || ""), RR[-XR[99]] = RR[XR[30]].length, RR[-XR[79]] = [], RR[XR[34]] = XR[1], RR[XR[24]] = XR[1], RR[ … [truncated]
+                 if (RR[-XR[100]] = RR[XR[5]].indexOf(RR[XR[30]][RR[-XR[85]]]), RR[-XR[100]] !== -XR[2])
+                   if (RR[XR[32]] < XR[1]) RR[XR[32]] = RR[-XR[100]];
```

#### 2637. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19444` → after: `L19313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19313) · [Before (L19444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19444)

```diff
-                     TW(WW[SW[55]] += WW[-SW[54]] * SW[31], WW[SW[8]] |= WW[SW[55]] << WW[SW[56]], WW[SW[56]] += (WW[SW[55]] & SW[34]) > SW[35] ? SW[36] : SW[37]);
+                     gR(RR[XR[32]] += RR[-XR[100]] * XR[33], RR[XR[34]] |= RR[XR[32]] << RR[XR[24]], RR[XR[24]] += (RR[XR[32]] & XR[35]) > XR[36] ? XR[14] : XR[37]);
```

#### 2638. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19446-L19449` → after: `L19315-L19318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19315-L19318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19315-L19318) · [Before (L19446-L19449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19446-L19449)

```diff
-                       TW(WW[SW[10]].push(WW[SW[8]] & SW[12]), WW[SW[8]] >>= SW[11], WW[SW[56]] -= SW[11])
-                     } while (WW[SW[56]] > SW[23]);
-                     WW[SW[55]] = -SW[2]
-                   } return WW[SW[55]] > -SW[2] && WW[SW[10]].push((WW[SW[8]] | WW[SW[55]] << WW[SW[56]]) & SW[12]), YW(WW[SW[10]])
+                       gR(RR[-XR[79]].push(RR[XR[34]] & XR[12]), RR[XR[34]] >>= XR[11], RR[XR[24]] -= XR[11])
+                     } while (RR[XR[24]] > XR[26]);
+                     RR[XR[32]] = -XR[2]
+                   } return RR[XR[32]] > -XR[2] && RR[-XR[79]].push((RR[XR[34]] | RR[XR[32]] << RR[XR[24]]) & XR[12]), BR(RR[-XR[79]])
```

#### 2639. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19453` → after: `L19322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19322) · [Before (L19453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19453)

```diff
-               return WW[SW[13]] = SW[2], typeof xW[WW[SW[1]]] === SW[17] ? xW[WW[SW[1]]] = mW(lW[WW[SW[1]]]) : xW[WW[SW[1]]]
+               return RR[XR[13]] = XR[2], typeof wR[RR[XR[1]]] === XR[18] ? wR[RR[XR[1]]] = JR(rR[RR[XR[1]]]) : wR[RR[XR[1]]]
```

#### 2640. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19456-L19457` → after: `L19325-L19326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19325-L19326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19325-L19326) · [Before (L19456-L19457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19456-L19457)

```diff
-               [iW(106) + EW(107) + "y"]: EW(SW[70]) + EW(109) + "uw",
-               [EW(110)]: EW(SW[66]) + EW(112)
+               [GR(129) + GR(XR[53]) + "y"]: GR(XR[70]) + GR(XR[98]) + "uw",
+               [GR(133)]: GR(134) + GR(135)
```

#### 2641. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19459` → after: `L19328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19328) · [Before (L19459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19459)

```diff
-             TW(OW = SW[52], (0, kW[EW(113)])(sW.Ii, NW))
+             gR(yR = XR[50], (0, UR[GR(XR[0])])(WR.Yi, tR))
```

#### 2642. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19461-L19497` → after: `L19330-L19331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19330-L19331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19330-L19331) · [Before (L19461-L19497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19461-L19497)

```diff
-         }), 10249), (0, kW[iW(114) + iW(115)])(((...WW) => {
-           WW[SW[13]] = SW[1],
-             function(...WW) {
-               return WW[SW[13]] = SW[2], typeof xW[WW[SW[1]]] === SW[17] ? xW[WW[SW[1]]] = function(...WW) {
-                 for (TW(WW[SW[13]] = SW[2], WW[SW[5]] = '0HJZAF6@%VkB:Uq,?Sw^=8OGN>zja)(|Y4f57`9]QC3gEXhoWTrK;_RMc/x}mn*i+[2e#y!b."1p&~sdv<uLlPI{$Dt', WW[-SW[57]] = "" + (WW[SW[1]] || ""), WW[SW[14]] = WW[-SW[57]].length, WW[SW[10]] = [], WW[SW[32]] = SW[1], WW[SW[21]] = SW[1], W … [truncated]
-                   if (WW[-SW[29]] = WW[SW[5]].indexOf(WW[-SW[57]][WW[SW[11]]]), WW[-SW[29]] !== -SW[2])
-                     if (WW[SW[30]] < SW[1]) WW[SW[30]] = WW[-SW[29]];
-                     else {
-                       TW(WW[SW[30]] += WW[-SW[29]] * SW[31], WW[SW[32]] |= WW[SW[30]] << WW[SW[21]], WW[SW[21]] += (WW[SW[30]] & SW[34]) > SW[35] ? SW[36] : SW[37]);
-                       do {
-                         TW(WW[SW[10]].push(WW[SW[32]] & SW[12]), WW[SW[32]] >>= SW[11], WW[SW[21]] -= SW[11])
-                       } while (WW[SW[21]] > SW[23]);
-                       WW[SW[30]] = -SW[2]
-                     } return WW[SW[30]] > -SW[2] && WW[SW[10]].push((WW[SW[32]] | WW[SW[30]] << WW[SW[21]]) & SW[12]), YW(WW[SW[10]])
-               }(lW[WW[SW[1]]]) : xW[WW[SW[1]]]
-             }(116) in yW && function(...WW) {
- ... (21 more removed lines; see GitHub link above)
+         }), 4888), (0, UR[JR(137) + JR(138)])((() => {
+           yR = XR[47]
```

#### 2643. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L19501` → after: `L19335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R19335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L19335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/90.js#L19335) · [Before (L19501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/90.js#L19501)

```diff
-       if (SW[52]) {
+       if (XR[50]) {
```
