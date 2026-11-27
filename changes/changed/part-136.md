# Changed — Bundle Modifications Report (Part 136 / 154)

- **Updated at**: `2026-11-28T07:18 JST`
- **Part**: `136 / 154` (**418** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 135](part-135.md) · [Part 137 →](part-137.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/playGameSources.js` (1yqdn.8419f1e1 → 4udp6d.2845de07 · continued)

- **File**: `bundles/bloxd.io/chunks/js/playGameSources.js` (354 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c)

#### 87. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L688-L690` → after: `L688-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L688-L690) · [Before (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L688-L690)

```diff
-         null !== WW.game && iW.push(`Game: ${WW.game}.`);
-         const OW = null === WW.health ? "" : `, health ${Math.round(WW.health)}${null===WW.maxHealth?"":` of ${Math.round(WW.maxHealth)}`}`;
-         iW.push(`The player (the creator) stands at ${PW(WW.position)}${OW}, ${WW.creative?"in":"not in"} creative mode.`);
+         null !== RR.game && JR.push(`Game: ${RR.game}.`);
+         const GR = null === RR.health ? "" : `, health ${Math.round(RR.health)}${null===RR.maxHealth?"":` of ${Math.round(RR.maxHealth)}`}`;
+         JR.push(`The player (the creator) stands at ${ZR(RR.position)}${GR}, ${RR.creative?"in":"not in"} creative mode.`);
```

#### 88. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L692-L694` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L692-L694) · [Before (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L692-L694)

```diff
-         iW.push(mW ? `Holding (slot ${WW.heldSlot}): ${LW(mW)}.` : `Holding nothing (slot ${WW.heldSlot} is empty).`);
-         const EW = WW.slots.flatMap(((WW, iW) => WW ? [`slot ${iW}: ${LW(WW)}`] : []));
-         iW.push(EW.length > 0 ? `Inventory: ${EW.join(", ")}.` : "Inventory: empty.");
+         JR.push(yR ? `Holding (slot ${RR.heldSlot}): ${qR(yR)}.` : `Holding nothing (slot ${RR.heldSlot} is empty).`);
+         const tR = RR.slots.flatMap(((RR, JR) => RR ? [`slot ${JR}: ${qR(RR)}`] : []));
+         JR.push(tR.length > 0 ? `Inventory: ${tR.join(", ")}.` : "Inventory: empty.");
```

#### 89. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L701)

```diff
-             const OW = "player" === WW.kind ? `player "${WW.name||"?"}"` : WW.name && WW.name !== WW.kind ? `${WW.kind} "${WW.name}"` : WW.kind,
+             const GR = "player" === RR.kind ? `player "${RR.name||"?"}"` : RR.name && RR.name !== RR.kind ? `${RR.kind} "${RR.name}"` : RR.kind,
```

#### 90. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L703)

```diff
-             iW.push(`- ${OW} at ${PW(WW.position)}, ${mW} block${1===mW?"":"s"} away`)
+             JR.push(`- ${GR} at ${ZR(RR.position)}, ${yR} block${1===yR?"":"s"} away`)
```

#### 91. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L705)

```diff
-           wW.length > NW && iW.push(`- and ${wW.length-NW} more further away`)
+           fR.length > uR && JR.push(`- and ${fR.length-uR} more further away`)
```

#### 92. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L707` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L707) · [Before (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L707)

```diff
-         return WW.droppedItems > 0 && iW.push(`${WW.droppedItems} dropped item${1===WW.droppedItems?" is":"s are"} on the ground nearby.`), iW.join("\n")
+         return RR.droppedItems > 0 && JR.push(`${RR.droppedItems} dropped item${1===RR.droppedItems?" is":"s are"} on the ground nearby.`), JR.join("\n")
```

#### 93. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L709)

```diff
-         game: null !== (iW = (0, tW.d)().gameNameWithVariation) && void 0 !== iW ? iW : null,
+         game: null !== (JR = (0, VR.d)().gameNameWithVariation) && void 0 !== JR ? JR : null,
```

#### 94. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L711-L713` → after: `L711-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L711-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L711-L713) · [Before (L711-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L711-L713)

```diff
-         health: null !== (OW = wW.d.get("_health")) && void 0 !== OW ? OW : null,
-         maxHealth: null !== (mW = wW.d.get("_totalMaxHealth")) && void 0 !== mW ? mW : null,
-         creative: !0 === wW.d.get("creative"),
+         health: null !== (GR = fR.c.get("_health")) && void 0 !== GR ? GR : null,
+         maxHealth: null !== (yR = fR.c.get("_totalMaxHealth")) && void 0 !== yR ? yR : null,
+         creative: !0 === fR.c.get("creative"),
```

#### 95. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L721)

```diff
-   42495: (WW, iW, OW) => {
+   42538: (RR, JR, GR) => {
```

#### 96. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L726-L730` → after: `L726-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L726-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L726-L730) · [Before (L726-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L726-L730)

```diff
-     var mW = OW(2037),
-       EW = OW(42373),
-       NW = OW(5533),
-       PW = OW(42109),
-       LW = OW(42479),
+     var yR = GR(2134),
+       tR = GR(42394),
+       uR = GR(5665),
+       ZR = GR(42118),
+       qR = GR(42523),
```

#### 97. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L732-L740` → after: `L732-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L732-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L732-L740) · [Before (L732-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L732-L740)

```diff
-       wW = OW(27),
-       tW = OW(5551),
-       ZW = OW(5546),
-       xW = OW(42137),
-       lW = OW(42174),
-       AW = OW(42502),
-       bW = OW(42149);
-     (0, bW.j)(tW.uc.Chat, (WW => {
-       if (WW.payloadKind !== ZW.hc.Msgpack) return;
+       fR = GR(32),
+       VR = GR(5685),
+       KR = GR(5676),
+       wR = GR(42154),
+       rR = GR(42185),
+       eR = GR(42543),
+       aR = GR(42164);
+     (0, aR.l)(VR.sc.Chat, (RR => {
+       if (RR.payloadKind !== KR.gc.Msgpack) return;
```

#### 98. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L751-L752` → after: `L751-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L751-L752) · [Before (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L751-L752)

```diff
-           serverChatMsgId: null !== iW && void 0 !== iW ? iW : void 0,
-           worldCodeLineId: null !== OW && void 0 !== OW ? OW : void 0,
+           serverChatMsgId: null !== JR && void 0 !== JR ? JR : void 0,
+           worldCodeLineId: null !== GR && void 0 !== GR ? GR : void 0,
```

#### 99. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L757-L760` → after: `L757-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L757-L760) · [Before (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L757-L760)

```diff
-       }((0, xW.d)(WW.payload));
-       null !== iW && wW.l.iZ("chat", iW, !0)
-     })), (0, bW.j)(tW.uc.ChatRemoved, (WW => {
-       if (WW.payloadKind === ZW.hc.Msgpack) {
+       }((0, wR.e)(RR.payload));
+       null !== JR && fR.n.JK("chat", JR, !0)
+     })), (0, aR.l)(VR.sc.ChatRemoved, (RR => {
+       if (RR.payloadKind === KR.gc.Msgpack) {
```

#### 100. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L763-L764` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L763-L764) · [Before (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L763-L764)

```diff
-         } = (0, xW.d)(WW.payload);
-         wW.l.iZ("chatRemoved", iW, !0)
+         } = (0, wR.e)(RR.payload);
+         fR.n.JK("chatRemoved", JR, !0)
```

#### 101. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L768` → after: `L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L768) · [Before (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L768)

```diff
-         chatReceived: (0, cW.k)((function(WW) {
+         chatReceived: (0, iR.n)((function(RR) {
```

#### 102. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L772-L774` → after: `L772-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L772-L774) · [Before (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L772-L774)

```diff
-             name: null !== (iW = AW.i.getName(WW)) && void 0 !== iW ? iW : null,
-             local: (0, lW.g)() === WW,
-             profileEffect: null !== (OW = null === (mW = (0, AW.m)(WW)) || void 0 === mW ? void 0 : mW.profileEffect) && void 0 !== OW ? OW : null
+             name: null !== (JR = eR.f.getName(RR)) && void 0 !== JR ? JR : null,
+             local: (0, rR.e)() === RR,
+             profileEffect: null !== (GR = null === (yR = (0, eR.i)(RR)) || void 0 === yR ? void 0 : yR.profileEffect) && void 0 !== GR ? GR : null
```

#### 103. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L777)

```diff
-         chatRemoved: cW.o
+         chatRemoved: iR.q
```

#### 104. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L783)

```diff
-             tP: mW,
+             LZ: yR,
```

#### 105. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L786)

```diff
-           return null !== (iW = null === (OW = (0, PW.f)()) || void 0 === OW ? void 0 : OW.clientApi.sendChat(mW, EW)) && void 0 !== iW && iW
+           return null !== (JR = null === (GR = (0, ZR.l)()) || void 0 === GR ? void 0 : GR.clientApi.sendChat(yR, tR)) && void 0 !== JR && JR
```

#### 106. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L789-L792` → after: `L789-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L789-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L789-L792) · [Before (L789-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L789-L792)

```diff
-     var kW = OW(182),
-       sW = OW(2061),
-       MW = OW(42094),
-       KW = OW(40943);
+     var UR = GR(203),
+       WR = GR(2163),
+       AR = GR(42106),
+       CR = GR(40942);
```

#### 107. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L797)

```diff
-           const OW = (0, PW.f)();
+           const GR = (0, ZR.l)();
```

#### 108. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L800-L801` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L800-L801) · [Before (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L800-L801)

```diff
-           if (0 !== (MW.z.playerFlags(mW.apiView, 0) & MW.Ud.Crouching)) return !1;
-           const EW = mW.queries.directorEntity(mW.localId) >= MW.zb.BYTES ? mW.memoryData(mW.scratch(), MW.zb.BYTES, 8, "the local player's DirectorEntity") : null;
+           if (0 !== (AR.s.playerFlags(yR.apiView, 0) & AR.xd.Crouching)) return !1;
+           const tR = yR.queries.directorEntity(yR.localId) >= AR.pb.BYTES ? yR.memoryData(yR.scratch(), AR.pb.BYTES, 8, "the local player's DirectorEntity") : null;
```

#### 109. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L803-L804` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L803-L804) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L803-L804)

```diff
-           for (let NW = 0; NW < 3; NW++) SW[NW] = MW.zb.feet(EW, 0, NW);
-           return SW[1] += MW.zb.eyeHeight(EW, 0), (0, KW.b)(SW, WW, null !== (iW = sW.d.get("blockReach")) && void 0 !== iW ? iW : kW.f.lU)
+           for (let uR = 0; uR < 3; uR++) XR[uR] = AR.pb.feet(tR, 0, uR);
+           return XR[1] += AR.pb.eyeHeight(tR, 0), (0, CR.e)(XR, RR, null !== (JR = WR.c.get("blockReach")) && void 0 !== JR ? JR : UR.g.Ln)
```

#### 110. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L810)

```diff
-           null === (iW = (0, PW.f)()) || void 0 === iW || iW.clickCodeBlock(WW)
+           null === (JR = (0, ZR.l)()) || void 0 === JR || JR.clickCodeBlock(RR)
```

#### 111. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L813-L820` → after: `L813-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L813-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L813-L820) · [Before (L813-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L813-L820)

```diff
-     var TW = OW(42118),
-       JW = OW(42508),
-       hW = OW(1052),
-       HW = OW(40242),
-       nW = OW(5525),
-       uW = OW(42131),
-       oW = OW(42116),
-       dW = OW(42134);
+     var lR = GR(42130),
+       pR = GR(42552),
+       gR = GR(1127),
+       bR = GR(40283),
+       vR = GR(5658),
+       OR = GR(42137),
+       xR = GR(42126),
+       NR = GR(42145);
```

#### 112. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L827)

```diff
-         if ("Ii" === WW) {
+         if ("EJ" === RR) {
```

#### 113. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L832)

```diff
-           } = OW.Ii, NW = Object.keys(WW)[0], PW = WW[NW];
+           } = GR.EJ, uR = Object.keys(RR)[0], ZR = RR[uR];
```

#### 114. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L845)

```diff
-         return null !== (iW = null === (OW = (0, PW.f)()) || void 0 === OW ? void 0 : OW.renderFrame.projectWorldPosToScreenPos(WW)) && void 0 !== iW ? iW : {
+         return null !== (JR = null === (GR = (0, ZR.l)()) || void 0 === GR ? void 0 : GR.renderFrame.projectWorldPosToScreenPos(RR)) && void 0 !== JR ? JR : {
```

#### 115. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L854-L862` → after: `L854-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L854-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L854-L862) · [Before (L854-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L854-L862)

```diff
-       gW || (gW = !0, (0, bW.j)(tW.uc.ProgressBarUpdate, (WW => {
-         const iW = (0, dW.j)(WW);
-         (0, dW.d)(iW) && wW.l.iZ("progressBarUpdate", iW, !0)
-       })), (0, bW.j)(uW.v, (WW => {
-         const iW = (0, dW.g)(uW.v, WW);
-         iW && wW.l.iZ("middleScreenBarInitiate", {
-           duration: iW.xN,
-           lN: iW.lN,
-           horizBarRemOffset: iW.bN
+       oR || (oR = !0, (0, aR.l)(VR.sc.ProgressBarUpdate, (RR => {
+         const JR = (0, NR.k)(RR);
+         (0, NR.e)(JR) && fR.n.JK("progressBarUpdate", JR, !0)
+       })), (0, aR.l)(OR.s, (RR => {
+         const JR = (0, NR.i)(OR.s, RR);
+         JR && fR.n.JK("middleScreenBarInitiate", {
+           duration: JR.Wu,
+           Au: JR.Au,
+           horizBarRemOffset: JR.Cu
```

#### 116. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L864-L867` → after: `L864-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L864-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L864-L867) · [Before (L864-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L864-L867)

```diff
-       })), (0, bW.j)(tW.uc.RemoveMiddleScreenBar, (() => {
-         wW.l.iZ("middleScreenBarRemove")
-       })), (0, bW.j)(uW.hb, (WW => {
-         const iW = (0, dW.g)(uW.hb, WW);
+       })), (0, aR.l)(VR.sc.RemoveMiddleScreenBar, (() => {
+         fR.n.JK("middleScreenBarRemove")
+       })), (0, aR.l)(OR.fb, (RR => {
+         const JR = (0, NR.i)(OR.fb, RR);
```

#### 117. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L870-L872` → after: `L870-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L870-L872) · [Before (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L870-L872)

```diff
-           const WW = iW.oi ? null === (OW = (0, PW.f)()) || void 0 === OW ? void 0 : OW.renderFrame.projectDirectionToScreenPos(iW.oi) : void 0;
-           wW.l.iZ("sendHitmarker", {
-             ui: iW.ui,
+           const RR = JR.NJ ? null === (GR = (0, ZR.l)()) || void 0 === GR ? void 0 : GR.renderFrame.projectDirectionToScreenPos(JR.NJ) : void 0;
+           fR.n.JK("sendHitmarker", {
+             xJ: JR.xJ,
```

#### 118. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L876-L877` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L876-L877) · [Before (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L876-L877)

```diff
-       })), (0, bW.j)(uW.mb, (WW => {
-         const iW = (0, dW.g)(uW.mb, WW);
+       })), (0, aR.l)(OR.kb, (RR => {
+         const JR = (0, NR.i)(OR.kb, RR);
```

#### 119. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L883-L884` → after: `L883-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L883-L884) · [Before (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L883-L884)

```diff
-             Gi: EW,
-             zi: NW
+             dJ: tR,
+             QJ: uR
```

#### 120. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L886` → after: `L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L886) · [Before (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L886)

```diff
-           wW.l.iZ("setDirectionArrow", {
+           fR.n.JK("setDirectionArrow", {
```

#### 121. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L891)

```diff
-             zi: NW
+             QJ: uR
```

#### 122. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L894-L896` → after: `L894-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L894-L896) · [Before (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L894-L896)

```diff
-       })), (0, bW.j)(uW.d, (WW => {
-         const iW = (0, dW.g)(uW.d, WW);
-         iW && wW.l.iZ("clearDirectionArrow", {
+       })), (0, aR.l)(OR.d, (RR => {
+         const JR = (0, NR.i)(OR.d, RR);
+         JR && fR.n.JK("clearDirectionArrow", {
```

#### 123. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L899-L904` → after: `L899-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L899-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L899-L904) · [Before (L899-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L899-L904)

```diff
-       })), (0, bW.j)(uW.n, (WW => {
-         const iW = (0, dW.g)(uW.n, WW);
-         iW && wW.l.iZ("flyingMiddleMessage", {
-           content: eW(iW.qN),
-           RN: iW.RN,
-           GN: iW.GN
+       })), (0, aR.l)(OR.l, (RR => {
+         const JR = (0, NR.i)(OR.l, RR);
+         JR && fR.n.JK("flyingMiddleMessage", {
+           content: DR(JR.su),
+           hu: JR.hu,
+           RZ: JR.RZ
```

#### 124. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L906-L907` → after: `L906-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L906-L907) · [Before (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L906-L907)

```diff
-       })), (0, bW.j)(tW.uc.WorldVariation, (WW => {
-         const iW = (0, dW.j)(WW);
+       })), (0, aR.l)(VR.sc.WorldVariation, (RR => {
+         const JR = (0, NR.k)(RR);
```

#### 125. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L909-L910` → after: `L909-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L909-L910) · [Before (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L909-L910)

```diff
-           const WW = iW === hW.e ? null : {
-             message: `Currently loaded as variation: ${iW}`,
+           const RR = JR === gR.i ? null : {
+             message: `Currently loaded as variation: ${JR}`,
```

#### 126. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L913)

```diff
-           wW.l.iZ("showPermanentBottomMessage", WW, !0)
+           fR.n.JK("showPermanentBottomMessage", RR, !0)
```

#### 127. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L915-L916` → after: `L915-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L915-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L915-L916) · [Before (L915-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L915-L916)

```diff
-       })), (0, bW.j)(uW.J, (WW => {
-         const iW = (0, dW.g)(uW.J, WW);
+       })), (0, aR.l)(OR.I, (RR => {
+         const JR = (0, NR.i)(OR.I, RR);
```

#### 128. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L921` → after: `L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L921) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L921)

```diff
-           } = (0, HW.f)(iW), EW = {
+           } = (0, bR.g)(JR), tR = {
```

#### 129. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L924)

```diff
-           for (const NW of HW.c) EW[NW] && (EW[NW] = eW(EW[NW]));
+           for (const uR of bR.e) tR[uR] && (tR[uR] = DR(tR[uR]));
```

#### 130. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L927` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L927) · [Before (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L927)

```diff
-             "boolean" === typeof iW && (null === (OW = (0, PW.f)()) || void 0 === OW || OW.send(oW.e.QteResponse, {
+             "boolean" === typeof JR && (null === (GR = (0, ZR.l)()) || void 0 === GR || GR.send(xR.d.QteResponse, {
```

#### 131. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L932-L934` → after: `L932-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L932-L934) · [Before (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L932-L934)

```diff
-         }(iW.id, iW.jN)
-       })), (0, bW.j)(uW.Y, (WW => {
-         const iW = (0, dW.g)(uW.Y, WW);
+         }(JR.id, JR.Xu)
+       })), (0, aR.l)(OR.Y, (RR => {
+         const JR = (0, NR.i)(OR.Y, RR);
```

#### 132. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L936)

```diff
-       })), (0, bW.e)((() => {
+       })), (0, aR.f)((() => {
```

#### 133. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L940-L942` → after: `L940-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L940-L942) · [Before (L940-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L940-L942)

```diff
-       })), (0, bW.j)(tW.uc.EditItemCraftingRecipes, (WW => {
-         const iW = (0, dW.j)(WW);
-         (0, dW.d)(iW) && wW.l.iZ("craftingRecipesEdited", {
+       })), (0, aR.l)(VR.sc.EditItemCraftingRecipes, (RR => {
+         const JR = (0, NR.k)(RR);
+         (0, NR.e)(JR) && fR.n.JK("craftingRecipesEdited", {
```

#### 134. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L946-L949` → after: `L946-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L946-L949) · [Before (L946-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L946-L949)

```diff
-       })), (0, bW.j)(uW.V, (WW => {
-         const iW = (0, dW.g)(uW.V, WW);
-         iW && wW.l.iZ("craftingRecipesEdited", {
-           itemName: iW.Oi,
+       })), (0, aR.l)(OR.V, (RR => {
+         const JR = (0, NR.i)(OR.V, RR);
+         JR && fR.n.JK("craftingRecipesEdited", {
+           itemName: JR.tJ,
```

#### 135. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L970)

```diff
-       return MW.z.playerFlags(WW.api.apiView, 0)
+       return AR.s.playerFlags(RR.api.apiView, 0)
```

#### 136. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L973-L974` → after: `L973-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L973-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L973-L974) · [Before (L973-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L973-L974)

```diff
-         freeCamera: (0, lW.e)((WW => () => {
-           const iW = WW.isSessionLive && 0 !== (fW(WW) & MW.Ud.FreeCamMoves),
+         freeCamera: (0, rR.c)((RR => () => {
+           const JR = RR.isSessionLive && 0 !== (mR(RR) & AR.xd.FreeCamMoves),
```

#### 137. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L977` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L977) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L977)

```diff
-         }), pW[0], (WW => (0, NW.v)(WW)))
+         }), IR[0], (RR => (0, uR.n)(RR)))
```

#### 138. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L982` → after: `L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L982) · [Before (L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L982)

```diff
-           null === (iW = (0, PW.f)()) || void 0 === iW || iW.setFreeCameraMovesFly(WW)
+           null === (JR = (0, ZR.l)()) || void 0 === JR || JR.setFreeCameraMovesFly(RR)
```

#### 139. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L987-L988` → after: `L987-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L987-L988) · [Before (L987-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L987-L988)

```diff
-           const WW = (0, PW.f)();
-           return null !== WW && void 0 !== WW && WW.isSessionLive && WW.renderFrame.hasView && 0 !== (fW(WW) & MW.Ud.FreeCam) ? WW.renderFrame.cameraPosition : null
+           const RR = (0, ZR.l)();
+           return null !== RR && void 0 !== RR && RR.isSessionLive && RR.renderFrame.hasView && 0 !== (mR(RR) & AR.xd.FreeCam) ? RR.renderFrame.cameraPosition : null
```

#### 140. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L991` → after: `L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L991) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L991)

```diff
-     var qW = OW(40416);
+     var dR = GR(40464);
```

#### 141. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L996)

```diff
-       const WW = (0, PW.f)();
+       const RR = (0, ZR.l)();
```

#### 142. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L998)

```diff
-       const iW = 0 !== (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.FreeCam);
+       const JR = 0 !== (AR.s.playerFlags(RR.api.apiView, 0) & AR.xd.FreeCam);
```

#### 143. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1001-L1005` → after: `L1001-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1001-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1001-L1005) · [Before (L1001-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1001-L1005)

```diff
-     var aW = OW(344),
-       rW = OW(38195),
-       zW = OW(2072);
-     var FW = OW(42513),
-       QW = OW(42165);
+     var QR = GR(377),
+       FR = GR(38150),
+       TR = GR(2170);
+     var sR = GR(42555),
+       hR = GR(42177);
```

#### 144. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1016)

```diff
-         label: null !== (iW = (0, FW.c)(WW, "interactionPrompt")) && void 0 !== iW ? iW : null
+         label: null !== (JR = (0, sR.b)(RR, "interactionPrompt")) && void 0 !== JR ? JR : null
```

#### 145. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1020` → after: `L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1020) · [Before (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1020)

```diff
-       [MW.Jc.Open, {
+       [AR.qc.Open, {
```

#### 146. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1023` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1023) · [Before (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1023)

```diff
-       [MW.Jc.Close, {
+       [AR.qc.Close, {
```

#### 147. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1026` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1026) · [Before (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1026)

```diff
-       [MW.Jc.Milk, {
+       [AR.qc.Milk, {
```

#### 148. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1029` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1029) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1029)

```diff
-       [MW.Jc.Shear, {
+       [AR.qc.Shear, {
```

#### 149. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1032` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1032) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1032)

```diff
-       [MW.Jc.Tame, {
+       [AR.qc.Tame, {
```

#### 150. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1035` → after: `L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1035) · [Before (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1035)

```diff
-       [MW.Jc.Feed, {
+       [AR.qc.Feed, {
```

#### 151. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1038` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1038) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1038)

```diff
-       [MW.Jc.Ride, {
+       [AR.qc.Ride, {
```

#### 152. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1044` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1044) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1044)

```diff
-         this.target = Wi, this.NL = MW.nd, this.optionName = null, this.pickaxe = new cW.d
+         this.target = RJ, this.Vq = AR.Yc, this.optionName = null, this.pickaxe = new iR.e
```

#### 153. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1048-L1050` → after: `L1048-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1050) · [Before (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1050)

```diff
-         const OW = MW.z.targetBlockId(WW.api.apiView, 0);
-         OW !== this.NL && (this.NL = OW, this.optionName = OW === MW.nd ? null : `${WW.tables.getMetaInfo(OW).rootName}CrosshairText`);
-         const mW = null === this.optionName ? null : null !== (iW = WW.tables.getClientOption(this.optionName)) && void 0 !== iW ? iW : null;
+         const GR = AR.s.targetBlockId(RR.api.apiView, 0);
+         GR !== this.Vq && (this.Vq = GR, this.optionName = GR === AR.Yc ? null : `${RR.tables.getMetaInfo(GR).rootName}CrosshairText`);
+         const yR = null === this.optionName ? null : null !== (JR = RR.tables.getClientOption(this.optionName)) && void 0 !== JR ? JR : null;
```

#### 154. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1053` → after: `L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1053) · [Before (L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1053)

```diff
-           if (0 === (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.Breaking) || iW === MW.nd || 0 === iW) return null;
+           if (0 === (AR.s.playerFlags(RR.api.apiView, 0) & AR.xd.Breaking) || JR === AR.Yc || 0 === JR) return null;
```

#### 155. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1059-L1061` → after: `L1059-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1059-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1059-L1061) · [Before (L1059-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1059-L1061)

```diff
-             LW = null === (OW = WW.items.BL()) || void 0 === OW ? void 0 : OW.name,
-             cW = null !== (mW = NW.getItemStat(PW, "harvestLevel")) && void 0 !== mW ? mW : 0;
-           return (0, aW.uc)({
+             qR = null === (GR = RR.items.Qq()) || void 0 === GR ? void 0 : GR.name,
+             iR = null !== (yR = uR.getItemStat(ZR, "harvestLevel")) && void 0 !== yR ? yR : 0;
+           return (0, QR.yc)({
```

#### 156. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1067` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1067) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1067)

```diff
-           }) && null !== (EW = rW.p[cW]) && void 0 !== EW ? EW : null
+           }) && null !== (tR = FR.p[iR]) && void 0 !== tR ? tR : null
```

#### 157. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1072-L1074` → after: `L1072-L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1072-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1072-L1074) · [Before (L1072-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1072-L1074)

```diff
-           return OW === MW.Jc.Entity ? Oi(WW.promptEntity) : OW === MW.Jc.TameWith ? {
-             label: (0, cW.v)(WW.tables.nameOfId(WW.interactIcon))
-           } : null !== (iW = mi.get(OW)) && void 0 !== iW ? iW : null
+           return GR === AR.qc.Entity ? GJ(RR.promptEntity) : GR === AR.qc.TameWith ? {
+             label: (0, iR.z)(RR.tables.nameOfId(RR.interactIcon))
+           } : null !== (JR = yJ.get(GR)) && void 0 !== JR ? JR : null
```

#### 158. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1076)

```diff
-         return this.target = (0, zW.t)(this.target, {
+         return this.target = (0, TR.m)(this.target, {
```

#### 159. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1087` → after: `L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1087) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1087)

```diff
-         return null !== (WW = null === (iW = Ni) || void 0 === iW ? void 0 : iW.target) && void 0 !== WW ? WW : Wi
+         return null !== (RR = null === (JR = uJ) || void 0 === JR ? void 0 : JR.target) && void 0 !== RR ? RR : RJ
```

#### 160. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1092)

```diff
-         const OW = (0, lW.k)((OW => {
+         const GR = (0, rR.g)((GR => {
```

#### 161. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1095)

```diff
-           const EW = (0, NW.x)((() => {
+           const tR = (0, uR.r)((() => {
```

#### 162. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1111-L1116` → after: `L1111-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1111-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1111-L1116) · [Before (L1111-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1111-L1116)

```diff
-         health: cW.r,
-         aura: cW.i,
-         hotbar: QW.c.states.hotbar,
-         heldItemAim: QW.c.states.heldItemAim,
-         crouching: (0, lW.e)((WW => function(WW) {
-           const iW = () => 0 !== (MW.z.playerFlags(WW.apiView, 0) & MW.Ud.Crouching);
+         health: iR.t,
+         aura: iR.l,
+         hotbar: hR.e.states.hotbar,
+         heldItemAim: hR.e.states.heldItemAim,
+         crouching: (0, rR.c)((RR => function(RR) {
+           const JR = () => 0 !== (AR.s.playerFlags(RR.apiView, 0) & AR.xd.Crouching);
```

#### 163. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1121)

```diff
-               return (0, NW.v)((() => {
+               return (0, uR.n)((() => {
```

#### 164. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1127-L1132` → after: `L1127-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1127-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1132) · [Before (L1127-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1132)

```diff
-         }(WW.api).current), !1, (WW => (0, NW.v)(WW))),
-         flight: (0, lW.e)((WW => () => function(WW) {
-           const iW = MW.z.playerFlags(WW.apiView, 0);
-           return (0, cW.p)(0 !== (iW & MW.Ud.CanFly), 0 !== (iW & MW.Ud.Flying))
-         }(WW.api)), (0, cW.p)(!1, !1), (WW => (0, NW.v)(WW))),
-         gliderBoostFuel: (0, lW.e)((WW => () => MW.z.gliderBoostFuel(WW.api.apiView, 0)), 0, (WW => (0, NW.v)(WW))),
+         }(RR.api).current), !1, (RR => (0, uR.n)(RR))),
+         flight: (0, rR.c)((RR => () => function(RR) {
+           const JR = AR.s.playerFlags(RR.apiView, 0);
+           return (0, iR.s)(0 !== (JR & AR.xd.CanFly), 0 !== (JR & AR.xd.Flying))
+         }(RR.api)), (0, iR.s)(!1, !1), (RR => (0, uR.n)(RR))),
+         gliderBoostFuel: (0, rR.c)((RR => () => AR.s.gliderBoostFuel(RR.api.apiView, 0)), 0, (RR => (0, uR.n)(RR))),
```

#### 165. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1136-L1139` → after: `L1136-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1136-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1136-L1139) · [Before (L1136-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1136-L1139)

```diff
-         hotbarSlotRequested: QW.c.events.hotbarSlotRequested,
-         hotbarScrolled: QW.c.events.hotbarScrolled,
-         numberKeyPressed: QW.c.events.numberKeyPressed,
-         shotDamageToShow: (0, cW.t)((WW => !0 === (0, FW.c)(WW, "showDamageAmounts")))
+         hotbarSlotRequested: hR.e.events.hotbarSlotRequested,
+         hotbarScrolled: hR.e.events.hotbarScrolled,
+         numberKeyPressed: hR.e.events.numberKeyPressed,
+         shotDamageToShow: (0, iR.v)((RR => !0 === (0, sR.b)(RR, "showDamageAmounts")))
```

#### 166. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1142` → after: `L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1142) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1142)

```diff
-         selectHotbarSlot: QW.c.commands.selectHotbarSlot,
+         selectHotbarSlot: hR.e.commands.selectHotbarSlot,
```

#### 167. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1150` → after: `L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1150) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1150)

```diff
-           const mW = (0, PW.f)(),
+           const yR = (0, ZR.l)(),
```

#### 168. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1152-L1153` → after: `L1152-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1152-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1152-L1153) · [Before (L1152-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1152-L1153)

```diff
-             NW = null === mW || void 0 === mW || null === (WW = mW.items.BL()) || void 0 === WW || null === (iW = WW.attributes) || void 0 === iW || null === (OW = iW.customAttributes) || void 0 === OW ? void 0 : OW.enchantments;
-           return Li = null !== mW && null !== NW && void 0 !== NW && NW.Momentum ? 0 !== (MW.z.playerFlags(mW.api.apiView, 0) & MW.Ud.Breaking) ? Math.max(0, MW.z.momentumFrac(mW.api.apiView, 0)) : Math.max(0, Li - (EW - ci) / 1500) : 0, ci = EW, Li
+             uR = null === yR || void 0 === yR || null === (RR = yR.items.Qq()) || void 0 === RR || null === (JR = RR.attributes) || void 0 === JR || null === (GR = JR.customAttributes) || void 0 === GR ? void 0 : GR.enchantments;
+           return qJ = null !== yR && null !== uR && void 0 !== uR && uR.Momentum ? 0 !== (AR.s.playerFlags(yR.api.apiView, 0) & AR.xd.Breaking) ? Math.max(0, AR.s.momentumFrac(yR.api.apiView, 0)) : Math.max(0, qJ - (tR - iJ) / 1500) : 0, iJ = tR, qJ
```

#### 169. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1156` → after: `L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1156) · [Before (L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1156)

```diff
-     var li = OW(42103);
+     var rJ = GR(42114);
```

#### 170. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1160)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.LobbyManage, WW)
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.LobbyManage, RR)
```

#### 171. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1163-L1168` → after: `L1163-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1163-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1163-L1168) · [Before (L1163-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1163-L1168)

```diff
-     var bi = OW(1230),
-       ji = OW(37735),
-       Ui = OW(10027),
-       ki = OW(1729),
-       si = OW(3305),
-       Mi = OW(5560);
+     var aJ = GR(1336),
+       LJ = GR(37651),
+       nJ = GR(10149),
+       UJ = GR(1800),
+       WJ = GR(3428),
+       AJ = GR(5692);
```

#### 172. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1176` → after: `L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1176) · [Before (L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1176)

```diff
-       "inGame" !== VW.d.get("gameState") || (0, ki.m)() || wW.l.iZ("ctrlCrouchWithoutFullscreen")
+       "inGame" !== PR.d.get("gameState") || (0, UJ.r)() || fR.n.JK("ctrlCrouchWithoutFullscreen")
```

#### 173. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1182` → after: `L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1182) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1182)

```diff
-             yi && (yi = !1, wW.l.iZ("requestEmoteWheelHoldOpen"))
+             BJ && (BJ = !1, fR.n.JK("requestEmoteWheelHoldOpen"))
```

#### 174. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1186` → after: `L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1186) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1186)

```diff
-           wW.l.iZ("toggleFullCoordinateOverlay")
+           fR.n.JK("toggleFullCoordinateOverlay")
```

#### 175. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1189` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1189) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1189)

```diff
-           (0, ji.e)() || wW.l.iZ("YKeyPressed")
+           (0, LJ.e)() || fR.n.JK("YKeyPressed")
```

#### 176. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1192)

```diff
-           (0, ji.e)() || wW.l.iZ("XKeyPressed")
+           (0, LJ.e)() || fR.n.JK("XKeyPressed")
```

#### 177. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1196-L1197` → after: `L1196-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1196-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1196-L1197) · [Before (L1196-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1196-L1197)

```diff
-           wW.l.iZ("mouseState", {
-             IL: bi.c.DownFirePrimary,
+           fR.n.JK("mouseState", {
+             hq: aJ.e.DownFirePrimary,
```

#### 178. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1202-L1203` → after: `L1202-L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1202-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1202-L1203) · [Before (L1202-L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1202-L1203)

```diff
-           wW.l.iZ("mouseState", {
-             IL: bi.c.DownFireSecondary,
+           fR.n.JK("mouseState", {
+             hq: aJ.e.DownFireSecondary,
```

#### 179. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1208-L1209` → after: `L1208-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1208-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1208-L1209) · [Before (L1208-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1208-L1209)

```diff
-           wW.l.iZ("mouseState", {
-             IL: bi.c.TouchDownLong,
+           fR.n.JK("mouseState", {
+             hq: aJ.e.TouchDownLong,
```

#### 180. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1216` → after: `L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1216) · [Before (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1216)

```diff
-           Si(!1), yi ? (yi = !1, (0, Ui.d)() || wW.l.iZ("requestEmoteWheelHoldOpen")) : wW.l.iZ("requestEmoteWheelHoldRelease")
+           XJ(!1), BJ ? (BJ = !1, (0, nJ.b)() || fR.n.JK("requestEmoteWheelHoldOpen")) : fR.n.JK("requestEmoteWheelHoldRelease")
```

#### 181. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1220-L1221` → after: `L1220-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1220-L1221) · [Before (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1220-L1221)

```diff
-           wW.l.iZ("mouseState", {
-             IL: bi.c.UpFirePrimary,
+           fR.n.JK("mouseState", {
+             hq: aJ.e.UpFirePrimary,
```

#### 182. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1226-L1227` → after: `L1226-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1226-L1227) · [Before (L1226-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1226-L1227)

```diff
-           wW.l.iZ("mouseState", {
-             IL: bi.c.UpFireSecondary,
+           fR.n.JK("mouseState", {
+             hq: aJ.e.UpFireSecondary,
```

#### 183. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1232-L1233` → after: `L1232-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1232-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1232-L1233) · [Before (L1232-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1232-L1233)

```diff
-           wW.l.iZ("mouseState", {
-             IL: bi.c.UpFirePrimary,
+           fR.n.JK("mouseState", {
+             hq: aJ.e.UpFirePrimary,
```

#### 184. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1241-L1243` → after: `L1241-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1241-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1241-L1243) · [Before (L1241-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1241-L1243)

```diff
-       Hi || (Hi = !0, (0, Mi.g)((WW => {
-         if ((0, EW.d)()) return;
-         const iW = (0, Mi.f)(WW) ? "primary-fire" : WW.action;
+       gJ || (gJ = !0, (0, AJ.f)((RR => {
+         if ((0, tR.b)()) return;
+         const JR = (0, AJ.d)(RR) ? "primary-fire" : RR.action;
```

#### 185. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1246` → after: `L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1246) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1246)

```diff
-           if (0 === (WW.flags & si.e.Synthetic)) {
+           if (0 === (RR.flags & WJ.b.Synthetic)) {
```

#### 186. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1253-L1258` → after: `L1253-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1253-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1253-L1258) · [Before (L1253-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1253-L1258)

```diff
-     var ui = OW(327),
-       oi = OW(100),
-       di = OW(39),
-       ei = OW(42394),
-       vi = OW(1351),
-       gi = OW(3323);
+     var vJ = GR(359),
+       OJ = GR(103),
+       xJ = GR(46),
+       NJ = GR(42423),
+       DJ = GR(1449),
+       HJ = GR(3452);
```

#### 187. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1263` → after: `L1263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1263) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1263)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.CodeCollab, (0, oW.r)(WW), (0, gi.h)(WW))
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.CodeCollab, (0, xR.q)(RR), (0, HJ.e)(RR))
```

#### 188. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1266-L1267` → after: `L1266-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1266-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1266-L1267) · [Before (L1266-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1266-L1267)

```diff
-     var fi = OW(40305),
-       Ci = OW(9957);
+     var PJ = GR(40356),
+       IJ = GR(10057);
```

#### 189. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1277)

```diff
-           (0, ki.t)(WW, "inventory", (0, li.h)())
+           (0, UJ.y)(RR, "inventory", (0, rJ.p)())
```

#### 190. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1280` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1280) · [Before (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1280)

```diff
-           Xi && Ri() && (0, ki.s)(WW, ui.m.SHOP, !Xi.shopIsEmpty(sW.d.get("shopInfo")))
+           mJ && jJ() && (0, UJ.v)(RR, vJ.o.SHOP, !mJ.shopIsEmpty(WR.c.get("shopInfo")))
```

#### 191. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1284-L1287` → after: `L1284-L1287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1284-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1284-L1287) · [Before (L1284-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1284-L1287)

```diff
-           Ri() && (0, ki.x)(WW, (0, fi.d)({
-             lobbyLeaderboardInfo: sW.d.get("lobbyLeaderboardInfo"),
-             lobbyManage: sW.d.get("lobbyManage")
-           }), null !== (iW = null === (OW = Xi) || void 0 === OW ? void 0 : OW.getClientGameLeaderboardKey()) && void 0 !== iW ? iW : null)
+           jJ() && (0, UJ.A)(RR, (0, PJ.b)({
+             lobbyLeaderboardInfo: WR.c.get("lobbyLeaderboardInfo"),
+             lobbyManage: WR.c.get("lobbyManage")
+           }), null !== (JR = null === (GR = mJ) || void 0 === GR ? void 0 : GR.getClientGameLeaderboardKey()) && void 0 !== JR ? JR : null)
```

#### 192. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1292)

```diff
-           OW ? (0, ki.A)(WW, !0, OW) : (0, ki.t)(WW, "retentionFeatures", !(!sW.d.get("_tasks") && !sW.d.get("_availableLeaderboards")))
+           GR ? (0, UJ.B)(RR, !0, GR) : (0, UJ.y)(RR, "retentionFeatures", !(!WR.c.get("_tasks") && !WR.c.get("_availableLeaderboards")))
```

#### 193. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1295` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1295) · [Before (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1295)

```diff
-           (0, ki.t)(WW, "inviteLink", oi.featureFlags.canUseInviteLinks)
+           (0, UJ.y)(RR, "inviteLink", OJ.featureFlags.canUseInviteLinks)
```

#### 194. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1299)

```diff
-             const iW = (0, PW.f)(),
+             const JR = (0, ZR.l)(),
```

#### 195. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1301-L1302` → after: `L1301-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1301-L1302) · [Before (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1301-L1302)

```diff
-               mW = OW ? OW.Vk(OW.localId) : null;
-             (0, ki.A)(WW, null !== mW && (0, gi.d)((0, vi.d)()), (() => {
+               yR = GR ? GR.vW(GR.localId) : null;
+             (0, UJ.B)(RR, null !== yR && (0, HJ.b)((0, DJ.d)()), (() => {
```

#### 196. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1308` → after: `L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1308) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1308)

```diff
-           wW.l.iZ("showUi", !1)
+           fR.n.JK("showUi", !1)
```

#### 197. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1313` → after: `L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1313) · [Before (L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1313)

```diff
-           wW.l.iZ("showUi", !0)
+           fR.n.JK("showUi", !0)
```

#### 198. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1318` → after: `L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1318) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1318)

```diff
-       Bi || (Bi = !0, OW.e(183).then((() => OW(64355))).then((WW => {
+       zJ || (zJ = !0, GR.e(183).then((() => GR(64110))).then((RR => {
```

#### 199. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1322-L1324` → after: `L1322-L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1322-L1324) · [Before (L1322-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1322-L1324)

```diff
-       })), (0, ei.z)((WW => {
-         WW || !(0, ei.i)() || (0, oi.isMobile)() || !di.i.getItem("disableFullscreen") || (0, ki.l)() || VW.d.set({
-           openEverythingMenuName: ui.m.SETTINGS
+       })), (0, NJ.A)((RR => {
+         RR || !(0, NJ.k)() || (0, OJ.isMobile)() || !xJ.i.getItem("disableFullscreen") || (0, UJ.o)() || PR.d.set({
+           openEverythingMenuName: vJ.o.SETTINGS
```

#### 200. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1326` → after: `L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1326) · [Before (L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1326)

```diff
-       })), (0, Mi.g)((WW => {
+       })), (0, AJ.f)((RR => {
```

#### 201. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1333)

```diff
-         (0, EW.d)() || (OW ? null === (NW = Gi[iW]) || void 0 === NW || NW.call(Gi, function(WW) {
+         (0, tR.b)() || (GR ? null === (uR = dJ[JR]) || void 0 === uR || uR.call(dJ, function(RR) {
```

#### 202. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1348-L1350` → after: `L1348-L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1348-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1348-L1350) · [Before (L1348-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1348-L1350)

```diff
-     var ri = OW(40229),
-       zi = OW(40216),
-       Fi = OW(40213);
+     var kJ = GR(40270),
+       QJ = GR(40258),
+       FJ = GR(40256);
```

#### 203. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1354` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1354) · [Before (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1354)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.CompleteTask, (0, oW.s)(WW))
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.CompleteTask, (0, xR.s)(RR))
```

#### 204. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1362-L1364` → after: `L1362-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1362-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1362-L1364) · [Before (L1362-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1362-L1364)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.GeneralCookieSet, (0, oW.A)({
-           bt: OW,
-           jt: mW
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.GeneralCookieSet, (0, xR.y)({
+           WV: GR,
+           AV: yR
```

#### 205. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1371)

```diff
-           ct: mW
+           wV: yR
```

#### 206. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1373-L1376` → after: `L1373-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1373-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1373-L1376) · [Before (L1373-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1373-L1376)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.UiRequestResp, (0, oW.V)({
-           jP: OW,
-           UP: mW,
-           kP: 5
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.UiRequestResp, (0, xR.U)({
+           XZ: GR,
+           MZ: yR,
+           BZ: 5
```

#### 207. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1383` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1383) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1383)

```diff
-           ct: mW
+           wV: yR
```

#### 208. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1385)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.UiRequestResponded, (0, oW.U)({
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.UiRequestResponded, (0, xR.T)({
```

#### 209. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1387` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1387) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1387)

```diff
-           ct: mW
+           wV: yR
```

#### 210. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1397` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1397) · [Before (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1397)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.LeaderboardRequest, {
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.LeaderboardRequest, {
```

#### 211. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1405` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1405) · [Before (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1405)

```diff
-     const iO = kW.f.tU / 2,
+     const hJ = UR.g.Vn / 2,
```

#### 212. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1416` → after: `L1416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1416) · [Before (L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1416)

```diff
-         const WW = (0, PW.f)();
+         const RR = (0, ZR.l)();
```

#### 213. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1432)

```diff
-           const xW = OW.NL(NW, cW, ZW);
+           const wR = GR.Vq(uR, iR, KR);
```

#### 214. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1438-L1439` → after: `L1438-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1438-L1439) · [Before (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1438-L1439)

```diff
-         const WW = (0, PW.f)();
-         return null !== WW && 0 !== (MW.z.playerFlags(WW.api.apiView, 0) & MW.Ud.DropAhead)
+         const RR = (0, ZR.l)();
+         return null !== RR && 0 !== (AR.s.playerFlags(RR.api.apiView, 0) & AR.xd.DropAhead)
```

#### 215. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1442-L1445` → after: `L1442-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1442-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1442-L1445) · [Before (L1442-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1442-L1445)

```diff
-     var PO = OW(38107),
-       LO = OW(40287),
-       cO = OW(1422),
-       wO = OW(42176);
+     var tG = GR(38060),
+       uG = GR(40333),
+       ZG = GR(1493),
+       qG = GR(42188);
```

#### 216. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1467` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1467) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1467)

```diff
-       const PW = () => (OW = (0, zW.t)(OW, WW()), OW);
+       const ZR = () => (GR = (0, TR.m)(GR, RR()), GR);
```

#### 217. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1475-L1477` → after: `L1475-L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1475-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1475-L1477) · [Before (L1475-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1475-L1477)

```diff
-           let OW = (0, lW.g)();
-           const LW = (0, NW.x)((() => {
-             const iW = (0, lW.g)();
+           let GR = (0, rR.e)();
+           const qR = (0, uR.r)((() => {
+             const JR = (0, rR.e)();
```

#### 218. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1488` → after: `L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1488) · [Before (L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1488)

```diff
-           const WW = AW.i.ids(),
+           const RR = eR.f.ids(),
```

#### 219. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1493-L1495` → after: `L1493-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1493-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1493-L1495) · [Before (L1493-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1493-L1495)

```diff
-               name: null !== (OW = AW.i.getName(NW)) && void 0 !== OW ? OW : null,
-               ranks: null !== (mW = AW.i.getSetting(NW, "ranks")) && void 0 !== mW ? mW : lO,
-               cosmetics: null !== (EW = (0, AW.m)(NW)) && void 0 !== EW ? EW : null
+               name: null !== (GR = eR.f.getName(uR)) && void 0 !== GR ? GR : null,
+               ranks: null !== (yR = eR.f.getSetting(uR, "ranks")) && void 0 !== yR ? yR : KG,
+               cosmetics: null !== (tR = (0, eR.i)(uR)) && void 0 !== tR ? tR : null
```

#### 220. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1501` → after: `L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1501) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1501)

```diff
-             localId: (0, lW.g)()
+             localId: (0, rR.e)()
```

#### 221. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1509` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1509) · [Before (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1509)

```diff
-           for (const EW of AW.i.ids()) {
+           for (const tR of eR.f.ids()) {
```

#### 222. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1512-L1514` → after: `L1512-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1512-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1512-L1514) · [Before (L1512-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1512-L1514)

```diff
-               colour: null !== (iW = AW.i.getSetting(EW, "colorInLobbyLeaderboard")) && void 0 !== iW ? iW : null,
-               values: null !== (OW = AW.i.getSetting(EW, "lobbyLeaderboardValues")) && void 0 !== OW ? OW : null,
-               tags: null !== (mW = AW.i.getSetting(EW, "lobbyLeaderboardTags")) && void 0 !== mW ? mW : null
+               colour: null !== (JR = eR.f.getSetting(tR, "colorInLobbyLeaderboard")) && void 0 !== JR ? JR : null,
+               values: null !== (GR = eR.f.getSetting(tR, "lobbyLeaderboardValues")) && void 0 !== GR ? GR : null,
+               tags: null !== (yR = eR.f.getSetting(tR, "lobbyLeaderboardTags")) && void 0 !== yR ? yR : null
```

#### 223. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1534)

```diff
-             const OW = (0, lW.g)();
+             const GR = (0, rR.e)();
```

#### 224. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1537-L1539` → after: `L1537-L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1537-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1537-L1539) · [Before (L1537-L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1537-L1539)

```diff
-                 EE: iW,
-                 NE: mW,
-                 PE: EW
+                 Zt: JR,
+                 ft: yR,
+                 Vt: tR
```

#### 225. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1543-L1544` → after: `L1543-L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1543-L1544) · [Before (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1543-L1544)

```diff
-                 NE: mW,
-                 PE: EW
+                 ft: yR,
+                 Vt: tR
```

#### 226. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1550-L1553` → after: `L1550-L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1550-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1550-L1553) · [Before (L1550-L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1550-L1553)

```diff
-     var UO = OW(3960),
-       kO = OW(1856),
-       sO = OW(683),
-       MO = OW(42432);
+     var aG = GR(4053),
+       LG = GR(1943),
+       nG = GR(726),
+       UG = GR(42463);
```

#### 227. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1559)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.ShopMenuChanged, (0, oW.P)(WW))
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.ShopMenuChanged, (0, xR.O)(RR))
```

#### 228. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1568)

```diff
-         null === (iW = (0, PW.f)()) || void 0 === iW || iW.send(oW.e.ItemBought, {
+         null === (JR = (0, ZR.l)()) || void 0 === JR || JR.send(xR.d.ItemBought, {
```

#### 229. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1571)

```diff
-           shopVersion: sW.d.get("_shopVersion"),
+           shopVersion: WR.c.get("_shopVersion"),
```

#### 230. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1577-L1578` → after: `L1577-L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1577-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1577-L1578) · [Before (L1577-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1577-L1578)

```diff
-     var TO = OW(5575);
-     const JO = si.y.LookFrozen | si.y.ClicksSuppressed;
+     var MG = GR(5699);
+     const BG = WJ.C.LookFrozen | WJ.C.ClicksSuppressed;
```

#### 231. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1582-L1585` → after: `L1582-L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1582-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1582-L1585) · [Before (L1582-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1582-L1585)

```diff
-       null !== (OW = (0, PW.f)()) && void 0 !== OW && OW.send(WW, iW) || console.warn(`[bloxd-wasm-client] message ${WW} not sent: no live game or the core's command ring is full`)
-     }(0, bW.j)(uW.pb, (WW => {
-       const iW = (0, dW.g)(uW.pb, WW);
-       void 0 !== iW && wW.l.iZ("setDiscordReportKey", iW)
+       null !== (GR = (0, ZR.l)()) && void 0 !== GR && GR.send(RR, JR) || console.warn(`[bloxd-wasm-client] message ${RR} not sent: no live game or the core's command ring is full`)
+     }(0, aR.l)(OR.ob, (RR => {
+       const JR = (0, NR.i)(OR.ob, RR);
+       void 0 !== JR && fR.n.JK("setDiscordReportKey", JR)
```

#### 232. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1589-L1590` → after: `L1589-L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1589-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1589-L1590) · [Before (L1589-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1589-L1590)

```diff
-         hO(oW.e.IgnoreUser, (0, oW.B)({
-           Nt: WW
+         lG(xR.d.IgnoreUser, (0, xR.z)({
+           fV: RR
```

#### 233. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1601-L1603` → after: `L1601-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1601-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1601-L1603) · [Before (L1601-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1601-L1603)

```diff
-         hO(oW.e.UserReport, (0, oW.gb)({
-           et: iW,
-           vt: OW,
+         lG(xR.d.UserReport, (0, xR.cb)({
+           PV: JR,
+           IV: GR,
```

#### 234. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1605-L1606` → after: `L1605-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1605-L1606) · [Before (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1605-L1606)

```diff
-           PL: NW,
-           gt: mW
+           Kq: uR,
+           mV: yR
```

#### 235. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1615-L1617` → after: `L1615-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1615-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1615-L1617) · [Before (L1615-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1615-L1617)

```diff
-         hO(oW.e.UserReport, (0, oW.gb)({
-           et: "",
-           vt: iW,
+         lG(xR.d.UserReport, (0, xR.cb)({
+           PV: "",
+           IV: JR,
```

#### 236. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1619-L1620` → after: `L1619-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1619-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1619-L1620) · [Before (L1619-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1619-L1620)

```diff
-           PL: mW,
-           gt: []
+           Kq: yR,
+           mV: []
```

#### 237. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1624)

```diff
-         hO(oW.e.ReqDiscordReportKey, (0, oW.L)(WW))
+         lG(xR.d.ReqDiscordReportKey, (0, xR.M)(RR))
```

#### 238. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1632)

```diff
-         "customGame" === iW ? hO(oW.e.CustomGameReport, (0, oW.w)({
+         "customGame" === JR ? lG(xR.d.CustomGameReport, (0, xR.w)({
```

#### 239. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1634-L1635` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1634-L1635) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1634-L1635)

```diff
-           PL: mW
-         })) : hO(oW.e.LobbyReport, (0, oW.E)({
+           Kq: yR
+         })) : lG(xR.d.LobbyReport, (0, xR.D)({
```

#### 240. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1637` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1637) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1637)

```diff
-           PL: mW
+           Kq: yR
```

#### 241. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1641)

```diff
-         hO(oW.e.UpdateMyCosmetic, (0, oW.db)(WW))
+         lG(xR.d.UpdateMyCosmetic, (0, xR.bb)(RR))
```

#### 242. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1644` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1644) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1644)

```diff
-         !WW || Ki ? (0, TO.j)(JO, WW ? JO : 0) : wW.l.iZ("requestEmoteWheelHoldRelease")
+         !RR || CJ ? (0, MG.i)(BG, RR ? BG : 0) : fR.n.JK("requestEmoteWheelHoldRelease")
```

#### 243. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1647-L1649` → after: `L1647-L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1647-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1647-L1649) · [Before (L1647-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1647-L1649)

```diff
-     var nO = OW(42519),
-       uO = OW(5725),
-       oO = OW(40960);
+     var gG = GR(42563),
+       bG = GR(5844),
+       vG = GR(40965);
```

#### 244. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1659)

```diff
-           const mW = (0, PW.f)();
+           const yR = (0, ZR.l)();
```

#### 245. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1667)

```diff
-           return (0, oO.h)(((WW, iW, OW) => (cW = NW.getBlockId(WW, iW, OW), 0 !== cW)), EW.cameraPosition, (0, oO.k)((WW => MW.z.viewProj(LW.apiView, 0, WW)), iW, OW, dO), oO.d, eO, vO) ? {
+           return (0, vG.e)(((RR, JR, GR) => (iR = uR.getBlockId(RR, JR, GR), 0 !== iR)), tR.cameraPosition, (0, vG.f)((RR => AR.s.viewProj(qR.apiView, 0, RR)), JR, GR, OG), vG.d, xG, NG) ? {
```

#### 246. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1670` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1670) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1670)

```diff
-             name: (0, uO.f)(cW)
+             name: (0, bG.h)(iR)
```

#### 247. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1677)

```diff
-           null === (iW = (0, PW.f)()) || void 0 === iW || iW.setBlockHighlight(WW)
+           null === (JR = (0, ZR.l)()) || void 0 === JR || JR.setBlockHighlight(RR)
```

#### 248. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1680-L1685` → after: `L1680-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1680-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1680-L1685) · [Before (L1680-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1680-L1685)

```diff
-     var VO = OW(2047),
-       pO = OW(42427),
-       fO = OW(42528),
-       CO = OW(2077),
-       XO = OW(37640),
-       BO = OW(232);
+     var oG = GR(2144),
+       cG = GR(42454),
+       PG = GR(42568),
+       IG = GR(2177),
+       mG = GR(37558),
+       zG = GR(271);
```

#### 249. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1708` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1708) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1708)

```diff
-       return rO && (0, XO.f)()
+       return kG && (0, mG.m)()
```

#### 250. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1716)

```diff
-           if (null !== OW) Nm(null !== (iW = OW.icon) && void 0 !== iW ? iW : OW.name, qO)
+           if (null !== GR) yy(null !== (JR = GR.icon) && void 0 !== JR ? JR : GR.name, SG)
```

#### 251. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1718` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1718) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1718)

```diff
-         for (const WW of [...MW.P, ...aO]) Nm(WW, RO);
+         for (const RR of [...AR.I, ...YG]) yy(RR, jG);
```

#### 252. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1735` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1735) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1735)

```diff
-       !FO || zO || null !== Om || 0 === Wm.length || im >= IO || (Om = (0, BO.d)((() => {
+       !FG || QG || null !== Ry || 0 === sG.length || hG >= EG || (Ry = (0, zG.e)((() => {
```

#### 253. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1740-L1741` → after: `L1740-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1740-L1741) · [Before (L1740-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1740-L1741)

```diff
-           if (await (0, XO.h)(), !FO) return void iW.asked.delete(WW);
-           if (!(0, XO.f)()) return void(zO = !0);
+           if (await (0, mG.r)(), !FG) return void JR.asked.delete(RR);
+           if (!(0, mG.m)()) return void(QG = !0);
```

#### 254. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1743)

```diff
-             PW = null !== (OW = null === (EW = document.querySelector(iW.icon)) || void 0 === EW ? void 0 : EW.getBoundingClientRect().width) && void 0 !== OW ? OW : 0,
+             ZR = null !== (GR = null === (tR = document.querySelector(JR.icon)) || void 0 === tR ? void 0 : tR.getBoundingClientRect().width) && void 0 !== GR ? GR : 0,
```

#### 255. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1745` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1745) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1745)

```diff
-             cW = Math.round((PW > 0 ? PW : iW.fallbackRem * LW) * NW);
+             iR = Math.round((ZR > 0 ? ZR : JR.fallbackRem * qR) * uR);
```

#### 256. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1750)

```diff
-               lineWidth: (0, CO.d)(NW)
+               lineWidth: (0, IG.e)(uR)
```

#### 257. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1762-L1766` → after: `L1762-L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1762-L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1762-L1766) · [Before (L1762-L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1762-L1766)

```diff
-     var cm = OW(5199),
-       wm = OW(5178),
-       tm = OW(42533),
-       Zm = OW(4454),
-       xm = OW(4459);
+     var Zy = GR(5303),
+       qy = GR(5276),
+       iy = GR(42577),
+       fy = GR(4555),
+       Vy = GR(4563);
```

#### 258. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1771-L1772` → after: `L1771-L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1771-L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1771-L1772) · [Before (L1771-L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1771-L1772)

```diff
-       const iW = WW.startsWith(xm.k),
-         [OW, mW = OW, EW = OW] = (iW ? WW.slice(xm.k.length) : WW).split(xm.i);
+       const JR = RR.startsWith(Vy.h),
+         [GR, yR = GR, tR = GR] = (JR ? RR.slice(Vy.h.length) : RR).split(Vy.e);
```

#### 259. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1786-L1790` → after: `L1786-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1786-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1786-L1790) · [Before (L1786-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1786-L1790)

```diff
-     var Um = OW(4448),
-       km = OW(5166),
-       sm = OW(5195),
-       Mm = OW(37436),
-       Km = OW(37441);
+     var ay = GR(4546),
+       Ly = GR(5263),
+       ny = GR(5299),
+       Uy = GR(37346),
+       Wy = GR(37353);
```

#### 260. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1800-L1802` → after: `L1800-L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1800-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1800-L1802) · [Before (L1800-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1800-L1802)

```diff
-       return Hm || (Hm = !0, (0, sm.n)().then((WW => {
-         WW && (0, VO.b)()
-       }))), Tm ??= Promise.all([(0, Um.f)(), (Am ??= OW.e(1).then((() => OW(64378))).then((WW => {
+       return py || (py = !0, (0, ny.m)().then((RR => {
+         RR && (0, oG.e)()
+       }))), My ??= Promise.all([(0, ay.d)(), (wy ??= GR.e(1).then((() => GR(64123))).then((RR => {
```

#### 261. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1810)

```diff
-           pool: OW.split(xm.s).map(bm)
+           pool: GR.split(Vy.r).map(ry)
```

#### 262. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1814)

```diff
-       })), Am), (0, Km.d)(), OW.e(224).then((() => OW(35231)))]).then((WW => {
+       })), wy), (0, Wy.e)(), GR.e(224).then((() => GR(35162)))]).then((RR => {
```

#### 263. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1816)

```diff
-         iW.followBundledTextures(), Ym = iW, ym = OW, (0, VO.b)()
+         JR.followBundledTextures(), Cy = JR, Xy = GR, (0, oG.e)()
```

#### 264. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1824)

```diff
-       return null !== (iW = null === (OW = (0, Mm.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : Ym.itemSpriteUrl(WW)
+       return null !== (JR = null === (GR = (0, Uy.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : Cy.itemSpriteUrl(RR)
```

#### 265. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1829` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1829) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1829)

```diff
-       return null !== (iW = null === (OW = (0, Mm.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : Ym.blockTextureUrl(WW)
+       return null !== (JR = null === (GR = (0, Uy.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : Cy.blockTextureUrl(RR)
```

#### 266. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1834)

```diff
-       return null !== (iW = (0, Um.b)(WW)) && void 0 !== iW ? iW : WW
+       return null !== (JR = (0, ay.c)(RR)) && void 0 !== JR ? JR : RR
```

#### 267. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1839` → after: `L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1839) · [Before (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1839)

```diff
-       return null !== (OW = null !== (mW = null !== (EW = om(WW)) && void 0 !== EW ? EW : null === iW || void 0 === iW ? void 0 : iW.rotated[WW]) && void 0 !== mW ? mW : null === iW || void 0 === iW ? void 0 : iW.animated[WW]) && void 0 !== OW ? OW : Ym.notFoundUrl()
+       return null !== (GR = null !== (yR = null !== (tR = vy(RR)) && void 0 !== tR ? tR : null === JR || void 0 === JR ? void 0 : JR.rotated[RR]) && void 0 !== yR ? yR : null === JR || void 0 === JR ? void 0 : JR.animated[RR]) && void 0 !== GR ? GR : Cy.notFoundUrl()
```

#### 268. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1843)

```diff
-       return void 0 !== (0, Zm.b)(WW) ? WW : /^[1-9][0-9]*$/.test(WW) ? (0, Zm.d)(Number(WW)) : void 0
+       return void 0 !== (0, fy.b)(RR) ? RR : /^[1-9][0-9]*$/.test(RR) ? (0, fy.c)(Number(RR)) : void 0
```

#### 269. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1850-L1851` → after: `L1850-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1850-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1850-L1851) · [Before (L1850-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1850-L1851)

```diff
-         const iW = (0, Um.b)(WW.slice(5));
-         return null !== (OW = void 0 === iW ? null : um(iW)) && void 0 !== OW ? OW : Ym.notFoundUrl()
+         const JR = (0, ay.c)(RR.slice(5));
+         return null !== (GR = void 0 === JR ? null : by(JR)) && void 0 !== GR ? GR : Cy.notFoundUrl()
```

#### 270. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1853)

```diff
-       return null !== (iW = Ym.particleUrl(WW)) && void 0 !== iW ? iW : Ym.notFoundUrl()
+       return null !== (JR = Cy.particleUrl(RR)) && void 0 !== JR ? JR : Cy.notFoundUrl()
```

#### 271. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1857` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1857) · [Before (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1857)

```diff
-       return "StairsBlock" === WW ? WW : iW ? "SlabBlock" : "CubeBlock"
+       return "StairsBlock" === RR ? RR : JR ? "SlabBlock" : "CubeBlock"
```

#### 272. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1868-L1869` → after: `L1868-L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1868-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1868-L1869) · [Before (L1868-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1868-L1869)

```diff
-           const PW = null !== (iW = gm(mW)) && void 0 !== iW ? iW : mW,
-             LW = (0, sm.e)(PW, EW, NW);
+           const ZR = null !== (JR = Ny(yR)) && void 0 !== JR ? JR : yR,
+             qR = (0, ny.g)(ZR, tR, uR);
```

#### 273. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1876` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1876) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1876)

```diff
-             xW = ZW ? await (Jm ??= OW.e(234).then((() => OW(35332))).then((WW => (hm && (hm = !1, (0, VO.b)()), {
+             wR = KR ? await (By ??= GR.e(234).then((() => GR(35257))).then((RR => (ly && (ly = !1, (0, oG.e)()), {
```

#### 274. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1887-L1889` → after: `L1887-L1889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1887-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1887-L1889) · [Before (L1887-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1887-L1889)

```diff
-             AW = (0, Mm.d)(),
-             bW = 0 === AW ? PW : `${PW}#${AW}`;
-           return (await (0, km.e)()).drawBlockIconUrl(bW, EW, NW, (() => lW))
+             eR = (0, Uy.f)(),
+             aR = 0 === eR ? ZR : `${ZR}#${eR}`;
+           return (await (0, Ly.d)()).drawBlockIconUrl(aR, tR, uR, (() => rR))
```

#### 275. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1896)

```diff
-           if ((0, wm.h)(WW)) return {
+           if ((0, qy.l)(RR)) return {
```

#### 276. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1898` → after: `L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1898) · [Before (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1898)

```diff
-             url: null !== (OW = null !== (EW = null === (NW = (0, Mm.f)()) || void 0 === NW ? void 0 : NW.textureUrl(WW)) && void 0 !== EW ? EW : Ym.ingameIconUrl(WW)) && void 0 !== OW ? OW : Ym.notFoundUrl()
+             url: null !== (GR = null !== (tR = null === (uR = (0, Uy.g)()) || void 0 === uR ? void 0 : uR.textureUrl(RR)) && void 0 !== tR ? tR : Cy.ingameIconUrl(RR)) && void 0 !== GR ? GR : Cy.notFoundUrl()
```

#### 277. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1904-L1905` → after: `L1904-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1904-L1905) · [Before (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1904-L1905)

```diff
-           if (0 === (0, Zm.f)()) return (0, tm.e)(), mW.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(WW);
-           const PW = null !== (iW = gm(WW)) && void 0 !== iW ? iW : WW,
+           if (0 === (0, fy.f)()) return (0, iy.c)(), yR.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(RR);
+           const ZR = null !== (JR = Ny(RR)) && void 0 !== JR ? JR : RR,
```

#### 278. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1913)

```diff
-             return null !== (iW = um(dm(WW))) && void 0 !== iW ? iW : Ym.notFoundUrl()
+             return null !== (JR = by(Oy(RR))) && void 0 !== JR ? JR : Cy.notFoundUrl()
```

#### 279. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1915-L1917` → after: `L1915-L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1915-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1915-L1917) · [Before (L1915-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1915-L1917)

```diff
-           if ((0, sm.k)(PW) && ! function(WW) {
-               const iW = (0, Mm.f)();
-               return null !== iW && (null !== iW.textureUrl(dm(WW)) || (0, sm.d)(WW).some((WW => null !== iW.modelUrl(WW))))
+           if ((0, ny.l)(ZR) && ! function(RR) {
+               const JR = (0, Uy.g)();
+               return null !== JR && (null !== JR.textureUrl(Oy(RR)) || (0, ny.c)(RR).some((RR => null !== JR.modelUrl(RR))))
```

#### 280. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1921)

```diff
-             drawn: (0, sm.h)(PW)
+             drawn: (0, ny.i)(ZR)
```

#### 281. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1927)

```diff
-           if (void 0 !== LW && "GrayscaleArmour" === ym.itemTypeOf(LW) || Object.hasOwn(cm.b, PW)) {
+           if (void 0 !== qR && "GrayscaleArmour" === Xy.itemTypeOf(qR) || Object.hasOwn(Zy.d, ZR)) {
```

#### 282. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1929` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1929) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1929)

```diff
-             const iW = null !== (tW = (0, cm.c)(WW)) && void 0 !== tW ? tW : (0, cm.c)(PW);
+             const JR = null !== (VR = (0, Zy.f)(RR)) && void 0 !== VR ? VR : (0, Zy.f)(ZR);
```

#### 283. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1942)

```diff
-           return void 0 !== gm(WW) || (0, wm.h)(WW) || WW.startsWith(wm.d)
+           return void 0 !== Ny(RR) || (0, qy.l)(RR) || RR.startsWith(qy.d)
```

#### 284. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1953` → after: `L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1953) · [Before (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1953)

```diff
-           setChunkAddDistance: pO.m,
+           setChunkAddDistance: cG.o,
```

#### 285. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1960-L1961` → after: `L1960-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1960-L1961) · [Before (L1960-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1960-L1961)

```diff
-           YM: pO.f,
-           drawCallStats: fO.f,
+           zW: cG.g,
+           drawCallStats: PG.g,
```

#### 286. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1964)

```diff
-       }), (0, VO.b)(), nm(), rO || (rO = !0, wW.l.subscribe("gameJoined", (() => {
+       }), (0, oG.e)(), gy(), kG || (kG = !0, fR.n.subscribe("gameJoined", (() => {
```

#### 287. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1972)

```diff
-       })), wW.l.subscribe("gamePlayable", (() => {
+       })), fR.n.subscribe("gamePlayable", (() => {
```

#### 288. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1978-L1979` → after: `L1978-L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1978-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1978-L1979) · [Before (L1978-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1978-L1979)

```diff
-     var Xm = OW(632),
-       Bm = OW(40969);
+     var Iy = GR(664),
+       my = GR(40974);
```

#### 289. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1991-L1992` → after: `L1991-L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1991-L1992) · [Before (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1991-L1992)

```diff
-           const WW = iW.Vk(iW.localId);
-           return null !== WW && void 0 !== WW && WW.every(Number.isFinite) ? WW : null
+           const RR = JR.vW(JR.localId);
+           return null !== RR && void 0 !== RR && RR.every(Number.isFinite) ? RR : null
```

#### 290. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1994` → after: `L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L1994) · [Before (L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L1994)

```diff
-         chunkBlocks: WW => OW.isLoaded(WW[0], WW[1], WW[2]) ? (WW, iW, mW) => OW.NL(WW, iW, mW) : null,
+         chunkBlocks: RR => GR.isLoaded(RR[0], RR[1], RR[2]) ? (RR, JR, yR) => GR.Vq(RR, JR, yR) : null,
```

#### 291. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2010-L2012` → after: `L2010-L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2010-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2010-L2012) · [Before (L2010-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2010-L2012)

```diff
-             if (null === NW || iW.isLocal(PW) || LW >>> MW.e !== MW.v.Lifeform) continue;
-             const cW = iW.Vk(PW),
-               wW = Xm.i[LW & MW.g];
+             if (null === uR || JR.isLocal(ZR) || qR >>> AR.d !== AR.q.Lifeform) continue;
+             const iR = JR.vW(ZR),
+               fR = Iy.k[qR & AR.e];
```

#### 292. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2015` → after: `L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2015) · [Before (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2015)

```diff
-               name: null !== (mW = WW.clientApi.getEntityName(NW)) && void 0 !== mW ? mW : null,
+               name: null !== (yR = RR.clientApi.getEntityName(uR)) && void 0 !== yR ? yR : null,
```

#### 293. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2023` → after: `L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2023) · [Before (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2023)

```diff
-           for (let OW = 0; OW < iW.idStr.length; OW++) null !== iW.idStr[OW] && iW.kinds[OW] >>> MW.e === MW.v.Item && WW++;
+           for (let GR = 0; GR < JR.idStr.length; GR++) null !== JR.idStr[GR] && JR.kinds[GR] >>> AR.d === AR.q.Item && RR++;
```

#### 294. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2029-L2030` → after: `L2029-L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2029-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2029-L2030) · [Before (L2029-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2029-L2030)

```diff
-         worldCodeAiChunk: WW => Promise.resolve((0, Bm.d)(qm((0, PW.f)()), WW)),
-         worldCodeAiGameState: () => Promise.resolve((0, Bm.e)(qm((0, PW.f)())))
+         worldCodeAiChunk: RR => Promise.resolve((0, my.b)(zy((0, ZR.l)()), RR)),
+         worldCodeAiGameState: () => Promise.resolve((0, my.d)(zy((0, ZR.l)())))
```

#### 295. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2039` → after: `L2039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2039) · [Before (L2039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2039)

```diff
-             return null !== (iW = null === (OW = WW.runtime()) || void 0 === OW ? void 0 : OW.currentViewer) && void 0 !== iW ? iW : null
+             return null !== (JR = null === (GR = RR.runtime()) || void 0 === GR ? void 0 : GR.currentViewer) && void 0 !== JR ? JR : null
```

#### 296. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2061)

```diff
-             iW && OW && iW.seek(Math.max(0, Math.min(OW.totalTicks - 1, OW.hZ + WW * ZW.Jd)))
+             JR && GR && JR.seek(Math.max(0, Math.min(GR.totalTicks - 1, GR.gK + RR * KR.Bd)))
```

#### 297. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2067-L2068` → after: `L2067-L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2067-L2068) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2067-L2068)

```diff
-                 OW = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null;
-               return null === iW || null === OW || OW.state === ZW.td.None ? (LW = null, null) : (LW = (0, zW.t)(LW, {
+                 GR = null !== (RR = null === JR || void 0 === JR ? void 0 : JR.view) && void 0 !== RR ? RR : null;
+               return null === JR || null === GR || GR.state === KR.ld.None ? (qR = null, null) : (qR = (0, TR.m)(qR, {
```

#### 298. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2070` → after: `L2070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2070) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2070)

```diff
-                 hZ: OW.hZ,
+                 gK: GR.gK,
```

#### 299. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2072-L2073` → after: `L2072-L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2072-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2072-L2073) · [Before (L2072-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2072-L2073)

```diff
-                 Fv: ZW.Jd,
-                 playing: OW.state === ZW.td.Playing,
+                 lH: KR.Bd,
+                 playing: GR.state === KR.ld.Playing,
```

#### 300. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2082-L2083` → after: `L2082-L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2082-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2082-L2083) · [Before (L2082-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2082-L2083)

```diff
-                 OW = null !== (WW = null === iW || void 0 === iW ? void 0 : iW.view) && void 0 !== WW ? WW : null;
-               return null === iW || null === OW || OW.state === ZW.td.None ? (cW = null, null) : (cW = (0, zW.t)(cW, {
+                 GR = null !== (RR = null === JR || void 0 === JR ? void 0 : JR.view) && void 0 !== RR ? RR : null;
+               return null === JR || null === GR || GR.state === KR.ld.None ? (iR = null, null) : (iR = (0, TR.m)(iR, {
```

#### 301. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2093` → after: `L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2093) · [Before (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2093)

```diff
-               return null !== (iW = null === (OW = WW.runtime()) || void 0 === OW ? void 0 : OW.recorder.current) && void 0 !== iW ? iW : wO.c.states.replayRecorder.current()
+               return null !== (JR = null === (GR = RR.runtime()) || void 0 === GR ? void 0 : GR.recorder.current) && void 0 !== JR ? JR : qG.c.states.replayRecorder.current()
```

#### 302. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2097` → after: `L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2097) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2097)

```diff
-               watch: WW => (0, wW.n)("replayViewer|videoExportChanged", (() => {
+               watch: RR => (0, fR.q)("replayViewer|videoExportChanged", (() => {
```

#### 303. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2111` → after: `L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2111) · [Before (L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2111)

```diff
-             !0 === (null === (mW = PW()) || void 0 === mW ? void 0 : mW.isOpen) && Promise.all([OW.e(113), OW.e(79)]).then((() => OW(64363))).then((OW => {
+             !0 === (null === (yR = ZR()) || void 0 === yR ? void 0 : yR.isOpen) && Promise.all([GR.e(113), GR.e(79)]).then((() => GR(64117))).then((GR => {
```

#### 304. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2119)

```diff
-                   return null !== (iW = null === (OW = WW.canvas) || void 0 === OW ? void 0 : OW.call(WW)) && void 0 !== iW ? iW : null
+                   return null !== (JR = null === (GR = RR.canvas) || void 0 === GR ? void 0 : GR.call(RR)) && void 0 !== JR ? JR : null
```

#### 305. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2146)

```diff
-                   null !== iW && void 0 !== iW && iW.view && iW.setSpeed((0, PO.k)(iW.view.speed, "replaySpeedUp" === WW ? "up" : "down"));
+                   null !== JR && void 0 !== JR && JR.view && JR.setSpeed((0, tG.i)(JR.view.speed, "replaySpeedUp" === RR ? "up" : "down"));
```

#### 306. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2159` → after: `L2159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2159) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2159)

```diff
-                 hZ: OW,
+                 gK: GR,
```

#### 307. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2204` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2204) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2204)

```diff
-                 OW.e(138).then((() => OW(40448))).then((iW => {
+                 GR.e(138).then((() => GR(40495))).then((JR => {
```

#### 308. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2235)

```diff
-               (0, ji.g)(iW) && (null === (OW = WW.runtime()) || void 0 === OW || OW.recorder.viewerShown(iW))
+               (0, LJ.i)(JR) && (null === (GR = RR.runtime()) || void 0 === GR || GR.recorder.viewerShown(JR))
```

#### 309. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2241` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2241) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2241)

```diff
-                 RN: EW,
+                 hu: tR,
```

#### 310. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2243` → after: `L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2243) · [Before (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2243)

```diff
-                 GN: PW
+                 RZ: ZR
```

#### 311. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2263)

```diff
-                 BL: EW
+                 Qq: tR
```

#### 312. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2271)

```diff
-               mW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.view) && void 0 !== iW ? iW : null;
+               yR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.view) && void 0 !== JR ? JR : null;
```

#### 313. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2274` → after: `L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2274) · [Before (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2274)

```diff
-             })(WW) : ZO.has(WW) ? kW.replayAction(WW) : "replayPlayPause" === WW ? OW && mW && mW.state !== ZW.td.None && kW.setReplayPlaying(mW.state !== ZW.td.Playing) : "replayChangeCameraMode" === WW ? null === OW || void 0 === OW || OW.cycleCameraMode() : "replayExit" === WW … [truncated]
+             })(RR) : fG.has(RR) ? UR.replayAction(RR) : "replayPlayPause" === RR ? GR && yR && yR.state !== KR.ld.None && UR.setReplayPlaying(yR.state !== KR.ld.Playing) : "replayChangeCameraMode" === RR ? null === GR || void 0 === GR || GR.cycleCameraMode() : "replayExit" === RR … [truncated]
```

#### 314. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2284` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2284) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2284)

```diff
-               return !0 !== (null === (iW = PW()) || void 0 === iW ? void 0 : iW.isOpen) ? null : null !== (OW = null === (mW = WW.cameraView) || void 0 === mW ? void 0 : mW.call(WW)) && void 0 !== OW ? OW : null
+               return !0 !== (null === (JR = ZR()) || void 0 === JR ? void 0 : JR.isOpen) ? null : null !== (GR = null === (yR = RR.cameraView) || void 0 === yR ? void 0 : yR.call(RR)) && void 0 !== GR ? GR : null
```

#### 315. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2295` → after: `L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2295) · [Before (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2295)

```diff
-               OW !== MW && (MW = OW, wW.l.iZ("connectedGameChanged")), iW.fire()
+               GR !== AR && (AR = GR, fR.n.JK("connectedGameChanged")), JR.fire()
```

#### 316. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2310)

```diff
-         runtime: EW.n,
+         runtime: tR.l,
```

#### 317. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2313` → after: `L2313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2313) · [Before (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2313)

```diff
-           const iW = null === (WW = (0, PW.f)()) || void 0 === WW ? void 0 : WW.renderFrame;
+           const JR = null === (RR = (0, ZR.l)()) || void 0 === RR ? void 0 : RR.renderFrame;
```

#### 318. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2323` → after: `L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2323) · [Before (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2323)

```diff
-           return null !== (WW = null === (iW = (OW = (0, NW.K)()).canvas) || void 0 === iW ? void 0 : iW.call(OW)) && void 0 !== WW ? WW : null
+           return null !== (RR = null === (JR = (GR = (0, uR.E)()).canvas) || void 0 === JR ? void 0 : JR.call(GR)) && void 0 !== RR ? RR : null
```

#### 319. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2325` → after: `L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2325) · [Before (L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2325)

```diff
-         freecam: EW.j
+         freecam: tR.i
```

#### 320. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2330` → after: `L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2330) · [Before (L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2330)

```diff
-           ...li.f,
+           ...rJ.l,
```

#### 321. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2338-L2340` → after: `L2338-L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2338-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2338-L2340) · [Before (L2338-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2338-L2340)

```diff
-           ...li.d,
-           ...JW.b,
-           ...nO.k,
+           ...rJ.e,
+           ...pR.c,
+           ...gG.j,
```

#### 322. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2343)

```diff
-           ...TW.k
+           ...lR.j
```

#### 323. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2352` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2352) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2352)

```diff
-           ...TW.g,
+           ...lR.f,
```

#### 324. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2361)

```diff
-           ...li.e,
+           ...rJ.i,
```

#### 325. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2377-L2379` → after: `L2377-L2379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2377-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2377-L2379) · [Before (L2377-L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2377-L2379)

```diff
-       (0, LW.e)(bW.k), (0, EW.q)(Gm.feed), (0, JW.c)(), WO || (WO = !0, (0, bW.j)(uW.g, (WW => {
-         const iW = (0, dW.g)(uW.g, WW);
-         "string" === typeof iW && Promise.resolve().then((() => OW(4866))).then((WW => {
+       (0, qR.g)(aR.o), (0, tR.n)(jy.feed), (0, pR.g)(), sJ || (sJ = !0, (0, aR.l)(OR.h, (RR => {
+         const JR = (0, NR.i)(OR.h, RR);
+         "string" === typeof JR && Promise.resolve().then((() => GR(4983))).then((RR => {
```

#### 326. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2385-L2390` → after: `L2385-L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2385-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2385-L2390) · [Before (L2385-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2385-L2390)

```diff
-       })), (0, bW.j)(uW.kb, (WW => {
-         const iW = (0, dW.g)(uW.kb, WW);
-         "number" === typeof iW && wW.l.iZ("serverUpdating", Date.now() + iW, !0)
-       })), (0, bW.j)(uW.F, (WW => {
-         const iW = (0, dW.g)(uW.F, WW);
-         if ((0, dW.d)(iW)) {
+       })), (0, aR.l)(OR.jb, (RR => {
+         const JR = (0, NR.i)(OR.jb, RR);
+         "number" === typeof JR && fR.n.JK("serverUpdating", Date.now() + JR, !0)
+       })), (0, aR.l)(OR.F, (RR => {
+         const JR = (0, NR.i)(OR.F, RR);
+         if ((0, NR.e)(JR)) {
```

#### 327. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2392-L2393` → after: `L2392-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2392-L2393) · [Before (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2392-L2393)

```diff
-             cN: WW,
-             wN: OW
+             au: RR,
+             Lu: GR
```

#### 328. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2396-L2397` → after: `L2396-L2397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2396-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2396-L2397) · [Before (L2396-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2396-L2397)

```diff
-             cN: "string" === typeof WW ? WW : null,
-             wN: "string" === typeof OW ? OW : null
+             au: "string" === typeof RR ? RR : null,
+             Lu: "string" === typeof GR ? GR : null
```

#### 329. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2400-L2408` → after: `L2400-L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2400-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2400-L2408) · [Before (L2400-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2400-L2408)

```diff
-       })), (0, bW.j)(tW.uc.NewUiRequest, (WW => {
-         const iW = (0, dW.j)(WW);
-         (0, dW.d)(iW) && "number" === typeof iW.id && (0, dW.d)(iW.clientParameters) && (0, Fi.f)(iW.id, iW.clientParameters)
-       })), (0, bW.j)(uW.ab, (WW => {
-         const iW = (0, dW.g)(uW.ab, WW);
-         "number" === typeof iW && (0, Fi.h)(iW)
-       })), (0, bW.i)(Fi.c), (0, bW.j)(tW.uc.UiRequestPopup, (WW => {
-         const iW = (0, dW.j)(WW);
-         if ((0, dW.d)(iW) && "number" === typeof iW.id && ("string" === typeof iW.text || (0, dW.d)(iW.text) && "string" === typeof iW.text.translationKey)) {
+       })), (0, aR.l)(VR.sc.NewUiRequest, (RR => {
+         const JR = (0, NR.k)(RR);
+         (0, NR.e)(JR) && "number" === typeof JR.id && (0, NR.e)(JR.clientParameters) && (0, FJ.f)(JR.id, JR.clientParameters)
+       })), (0, aR.l)(OR._, (RR => {
+         const JR = (0, NR.i)(OR._, RR);
+         "number" === typeof JR && (0, FJ.g)(JR)
+       })), (0, aR.i)(FJ.c), (0, aR.l)(VR.sc.UiRequestPopup, (RR => {
+         const JR = (0, NR.k)(RR);
+         if ((0, NR.e)(JR) && "number" === typeof JR.id && ("string" === typeof JR.text || (0, NR.e)(JR.text) && "string" === typeof JR.text.translationKey)) {
```

#### 330. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2410)

```diff
-           (0, Fi.j)(WW, iW.text, !0 === iW.destructive, (iW => {
+           (0, FJ.i)(RR, JR.text, !0 === JR.destructive, (JR => {
```

#### 331. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2413` → after: `L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2413) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2413)

```diff
-               ct: iW
+               wV: JR
```

#### 332. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2417-L2422` → after: `L2417-L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2417-L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2417-L2422) · [Before (L2417-L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2417-L2422)

```diff
-       })), (0, bW.j)(tW.uc.TopRightHelper, (WW => {
-         const iW = (0, dW.j)(WW);
-         void 0 !== iW && wW.l.iZ("TopRightHelper", iW, !0)
-       })), (0, bW.j)(tW.uc.TaskProgress, (WW => {
-         const iW = (0, dW.j)(WW);
-         (0, dW.d)(iW) && "string" === typeof iW.taskId && "number" === typeof iW.progress && (0, ri.d)({
+       })), (0, aR.l)(VR.sc.TopRightHelper, (RR => {
+         const JR = (0, NR.k)(RR);
+         void 0 !== JR && fR.n.JK("TopRightHelper", JR, !0)
+       })), (0, aR.l)(VR.sc.TaskProgress, (RR => {
+         const JR = (0, NR.k)(RR);
+         (0, NR.e)(JR) && "string" === typeof JR.taskId && "number" === typeof JR.progress && (0, kJ.e)({
```

#### 333. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2426-L2430` → after: `L2426-L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2426-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2426-L2430) · [Before (L2426-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2426-L2430)

```diff
-       }))), yO || (yO = !0, (0, bW.j)(uW.o, (WW => {
-         const iW = (0, dW.g)(uW.o, WW);
-         (0, dW.d)(iW) && wW.l.iZ("showShopFromServer", {
-           toggle: iW.Hi,
-           ni: iW.ni
+       }))), XG || (XG = !0, (0, aR.l)(OR.n, (RR => {
+         const JR = (0, NR.i)(OR.n, RR);
+         (0, NR.e)(JR) && fR.n.JK("showShopFromServer", {
+           toggle: JR.vJ,
+           OJ: JR.OJ
```

#### 334. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2432-L2437` → after: `L2432-L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2432-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2432-L2437) · [Before (L2432-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2432-L2437)

```diff
-       })), (0, bW.j)(tW.uc.OverShopInfo, (WW => {
-         const iW = (0, dW.j)(WW);
-         (0, dW.d)(iW) && wW.l.iZ("overShopInfo", iW.info, !0)
-       })), (0, bW.j)(tW.uc.ShowShopTutorial, (() => {
-         wW.l.iZ("showShopTutorial", null, !0)
-       }))), KO || (KO = !0, (0, bW.e)((() => {
+       })), (0, aR.l)(VR.sc.OverShopInfo, (RR => {
+         const JR = (0, NR.k)(RR);
+         (0, NR.e)(JR) && fR.n.JK("overShopInfo", JR.info, !0)
+       })), (0, aR.l)(VR.sc.ShowShopTutorial, (() => {
+         fR.n.JK("showShopTutorial", null, !0)
+       }))), WG || (WG = !0, (0, aR.f)((() => {
```

#### 335. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2439-L2441` → after: `L2439-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2439-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2439-L2441) · [Before (L2439-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2439-L2441)

```diff
-         (0, UO.resetLeaveEvents)(), null === (WW = SO) || void 0 === WW || WW(), SO = (0, bW.c)() ? (0, sO.onVisitSessionGameServerConnected)(bW.c) : null, (0, bW.c)() || wW.l.pU()
-       })), (0, bW.j)(tW.uc.SetCookie, (WW => {
-         const iW = (0, dW.j)(WW),
+         (0, aG.resetLeaveEvents)(), null === (RR = AG) || void 0 === RR || RR(), AG = (0, aR.c)() ? (0, nG.onVisitSessionGameServerConnected)(aR.c) : null, (0, aR.c)() || fR.n.PU()
+       })), (0, aR.l)(VR.sc.SetCookie, (RR => {
+         const JR = (0, NR.k)(RR),
```

#### 336. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2443-L2446` → after: `L2443-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2443-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2443-L2446) · [Before (L2443-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2443-L2446)

```diff
-         (0, dW.d)(iW) && "string" === typeof iW.key && null !== OW && (0, kO.setCookie)(OW, iW.key, iW.value)
-       })), (0, bW.j)(tW.uc.LeaveValues, (WW => {
-         const iW = (0, dW.j)(WW);
-         if ((0, dW.d)(iW) && "string" === typeof iW.leaveEventType) {
+         (0, NR.e)(JR) && "string" === typeof JR.key && null !== GR && (0, LG.setCookie)(GR, JR.key, JR.value)
+       })), (0, aR.l)(VR.sc.LeaveValues, (RR => {
+         const JR = (0, NR.k)(RR);
+         if ((0, NR.e)(JR) && "string" === typeof JR.leaveEventType) {
```

#### 337. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2460-L2462` → after: `L2460-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2460-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2460-L2462) · [Before (L2460-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2460-L2462)

```diff
-       })), (0, bW.j)(tW.uc.CustomAnalyticsEvent, (WW => {
-         const iW = (0, dW.j)(WW);
-         if ((0, dW.d)(iW) && "string" === typeof iW.cat1) {
+       })), (0, aR.l)(VR.sc.CustomAnalyticsEvent, (RR => {
+         const JR = (0, NR.k)(RR);
+         if ((0, NR.e)(JR) && "string" === typeof JR.cat1) {
```

#### 338. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2476-L2478` → after: `L2476-L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2476-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2476-L2478) · [Before (L2476-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2476-L2478)

```diff
-       })), (0, bW.j)(tW.uc.ProgressionEvent, (WW => {
-         const iW = (0, dW.j)(WW);
-         if ((0, dW.d)(iW)) {
+       })), (0, aR.l)(VR.sc.ProgressionEvent, (RR => {
+         const JR = (0, NR.k)(RR);
+         if ((0, NR.e)(JR)) {
```

#### 339. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2494-L2496` → after: `L2494-L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2494-L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2494-L2496) · [Before (L2494-L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2494-L2496)

```diff
-       })), (0, bW.j)(tW.uc.ResourceEvent, (WW => {
-         const iW = (0, dW.j)(WW);
-         if ((0, dW.d)(iW)) {
+       })), (0, aR.l)(VR.sc.ResourceEvent, (RR => {
+         const JR = (0, NR.k)(RR);
+         if ((0, NR.e)(JR)) {
```

#### 340. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2512-L2514` → after: `L2512-L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2512-L2514) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2512-L2514)

```diff
-       })), (0, bW.j)(tW.uc.LeaderboardResponse, (WW => {
-         const iW = (0, dW.j)(WW);
-         if ((0, dW.d)(iW)) {
+       })), (0, aR.l)(VR.sc.LeaderboardResponse, (RR => {
+         const JR = (0, NR.k)(RR);
+         if ((0, NR.e)(JR)) {
```

#### 341. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2520` → after: `L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2520) · [Before (L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2520)

```diff
-           wW.l.iZ("leaderboardResponse", {
+           fR.n.JK("leaderboardResponse", {
```

#### 342. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2526-L2535` → after: `L2526-L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2526-L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2526-L2535) · [Before (L2526-L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2526-L2535)

```diff
-       })), (0, bW.j)(uW.z, (WW => {
-         const iW = (0, dW.g)(uW.z, WW);
-         "string" === typeof iW && (0, MO.b)(WW.conn, iW)
-       })), (0, bW.j)(uW.C, (WW => {
-         const iW = (0, dW.g)(uW.C, WW);
-         "string" === typeof iW && console.error(`[logErrorToConsole]: ${iW}`)
-       }))), DW(), (0, nO.c)(), Di || (Di = !0, (0, bW.j)(uW.f, (WW => {
-         const iW = (0, dW.g)(uW.f, WW);
-         void 0 !== iW && (0, gi.k)(iW)
-       }))), ai(), ni(), GW || (GW = !0, (0, NW.v)(IW)), mW.gameBridge.attach(Im), Cm()
+       })), (0, aR.l)(OR.w, (RR => {
+         const JR = (0, NR.i)(OR.w, RR);
+         "string" === typeof JR && (0, UG.e)(RR.conn, JR)
+       })), (0, aR.l)(OR.z, (RR => {
+         const JR = (0, NR.i)(OR.z, RR);
+         "string" === typeof JR && console.error(`[logErrorToConsole]: ${JR}`)
+       }))), cR(), (0, gG.c)(), oJ || (oJ = !0, (0, aR.l)(OR.g, (RR => {
+         const JR = (0, NR.i)(OR.g, RR);
+         void 0 !== JR && (0, HJ.m)(JR)
+       }))), YJ(), bJ(), YR || (YR = !0, (0, uR.n)(kR)), yR.gameBridge.attach(dy), Py()
```

#### 343. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2538` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2538) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2538)

```diff
-   37441: (WW, iW, OW) => {
+   37353: (RR, JR, GR) => {
```

#### 344. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2540-L2541` → after: `L2540-L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2540-L2541) · [Before (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2540-L2541)

```diff
-       c: () => PW,
-       d: () => LW
+       d: () => ZR,
+       e: () => qR
```

#### 345. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2543)

```diff
-     var mW = OW(37444);
+     var yR = GR(37357);
```

#### 346. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2548)

```diff
-       return EW ??= OW.e(74).then((() => OW(42663))).catch((WW => {
+       return tR ??= GR.e(74).then((() => GR(42743))).catch((RR => {
```

#### 347. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2554)

```diff
-       return NW ??= Promise.all([PW(), (0, mW.e)()]).then((WW => {
+       return uR ??= Promise.all([ZR(), (0, yR.h)()]).then((RR => {
```

#### 348. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2562` → after: `L2562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2562) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2562)

```diff
-   37646: (WW, iW, OW) => {
+   37561: (RR, JR, GR) => {
```

#### 349. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2564` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2564) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2564)

```diff
-       e: () => EW
+       b: () => tR
```

#### 350. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2602` → after: `L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2602) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2602)

```diff
-           if (iW > 0 && OW.searchParams.set("cache-bust", `${Date.now()}-${iW}`), await this.fetchWhole(OW, WW)) return this.scriptUrl = OW, !0;
+           if (JR > 0 && GR.searchParams.set("cache-bust", `${Date.now()}-${JR}`), await this.fetchWhole(GR, RR)) return this.scriptUrl = GR, !0;
```

#### 351. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2644` → after: `L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2644) · [Before (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2644)

```diff
-   38214: (WW, iW, OW) => {
+   38176: (RR, JR, GR) => {
```

#### 352. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2646` → after: `L2646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2646) · [Before (L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2646)

```diff
-       c: () => mW
+       e: () => yR
```

#### 353. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2808` → after: `L2808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2808) · [Before (L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2808)

```diff
-   40242: (WW, iW, OW) => {
+   40283: (RR, JR, GR) => {
```

#### 354. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2810-L2811` → after: `L2810-L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2810-L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/playGameSources.js#L2810-L2811) · [Before (L2810-L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/playGameSources.js#L2810-L2811)

```diff
-       c: () => mW,
-       f: () => EW
+       e: () => yR,
+       g: () => tR
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (1yqdn.8419f1e1 → 4udp6d.2845de07)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1516 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1)

```diff
- /*! For license information please see 1yqdn.procGenWorker.f4246b8e.chunk.js.LICENSE.txt */
+ /*! For license information please see 4udp6d.procGenWorker.843b23cd.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L4)

```diff
-       1738: WW => {
+       1805: RR => {
```

#### 3. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L82)

```diff
-             return iW === 1 / 0 ? iW : void 0 !== iW ? Math.max(0, Math.ceil(iW - OW())) : 0
+             return JR === 1 / 0 ? JR : void 0 !== JR ? Math.max(0, Math.ceil(JR - GR())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L151)

```diff
-       428: WW => {
+       451: RR => {
```

#### 5. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L156)

```diff
-       382: (WW, iW, OW) => {
+       406: (RR, JR, GR) => {
```

#### 6. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L164-L166` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166) · [Before (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166)

```diff
-         var mW = OW(387),
-           EW = OW(396),
-           NW = OW(400)
+         var yR = GR(411),
+           tR = GR(414),
+           uR = GR(420)
```

#### 7. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L168)

```diff
-       478: WW => {
+       511: RR => {
```

#### 8. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L173)

```diff
-       378: WW => {
+       399: RR => {
```

#### 9. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L179)

```diff
-       406: WW => {
+       426: RR => {
```

#### 10. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L184)

```diff
-       360: WW => {
+       393: RR => {
```

#### 11. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L190)

```diff
-       557: WW => {
+       593: RR => {
```

#### 12. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202)

```diff
-       501: (WW, iW, OW) => {
-         WW.exports = OW(497)
+       540: (RR, JR, GR) => {
+         RR.exports = GR(537)
```

#### 13. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L204)

```diff
-       497: WW => {
+       537: RR => {
```

#### 14. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213)

```diff
-       454: (WW, iW, OW) => {
-         WW.exports = OW(449)
+       485: (RR, JR, GR) => {
+         RR.exports = GR(479)
```

#### 15. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L215)

```diff
-       449: WW => {
+       479: RR => {
```

#### 16. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L220)

```diff
-       400: WW => {
+       420: RR => {
```

#### 17. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L225)

```diff
-       369: WW => {
+       397: RR => {
```

#### 18. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L228)

```diff
-       416: (WW, iW, OW) => {
+       443: (RR, JR, GR) => {
```

#### 19. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L238)

```diff
-         var mW = OW(369)
+         var yR = GR(397)
```

#### 20. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L240)

```diff
-       419: WW => {
+       449: RR => {
```

#### 21. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L245)

```diff
-       472: WW => {
+       507: RR => {
```

#### 22. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L250)

```diff
-       610: (WW, iW, OW) => {
+       638: (RR, JR, GR) => {
```

#### 23. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L259)

```diff
-         var mW = OW(360)()
+         var yR = GR(393)()
```

#### 24. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L261)

```diff
-       387: WW => {
+       411: RR => {
```

#### 25. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268)

```diff
-       352: (WW, iW, OW) => {
-         var mW = OW(360);
+       385: (RR, JR, GR) => {
+         var yR = GR(393);
```

#### 26. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L270)

```diff
-           EPSILON: OW(369),
+           EPSILON: GR(397),
```

#### 27. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L273-L318` → after: `L273-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318) · [Before (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318)

```diff
-           clone: OW(378),
-           angle: OW(382),
-           fi: OW(387),
-           copy: OW(406),
-           set: OW(411),
-           equals: OW(416),
-           exactEquals: OW(419),
-           add: OW(428),
-           subtract: OW(431),
-           sub: OW(433),
-           multiply: OW(439),
-           mul: OW(447),
-           divide: OW(449),
-           div: OW(454),
-           min: OW(458),
-           max: OW(465),
- ... (30 more removed lines; see GitHub link above)
+           clone: GR(399),
+           angle: GR(406),
+           fi: GR(411),
+           copy: GR(426),
+           set: GR(435),
+           equals: GR(443),
+           exactEquals: GR(449),
+           add: GR(451),
+           subtract: GR(456),
+           sub: GR(461),
+           multiply: GR(469),
+           mul: GR(476),
+           divide: GR(479),
+           div: GR(485),
+           min: GR(490),
+           max: GR(499),
+ ... (30 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324)

```diff
-       525: (WW, iW, OW) => {
-         WW.exports = OW(517)
+       559: (RR, JR, GR) => {
+         RR.exports = GR(553)
```

#### 29. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L326)

```diff
-       517: WW => {
+       553: RR => {
```

#### 30. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L334)

```diff
-       565: WW => {
+       598: RR => {
```

#### 31. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L342)

```diff
-       465: WW => {
+       499: RR => {
```

#### 32. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L347)

```diff
-       458: WW => {
+       490: RR => {
```

#### 33. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353)

```diff
-       447: (WW, iW, OW) => {
-         WW.exports = OW(439)
+       476: (RR, JR, GR) => {
+         RR.exports = GR(469)
```

#### 34. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L355)

```diff
-       439: WW => {
+       469: RR => {
```

#### 35. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L360)

```diff
-       544: WW => {
+       579: RR => {
```

#### 36. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L365)

```diff
-       396: WW => {
+       414: RR => {
```

#### 37. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L375)

```diff
-       571: WW => {
+       606: RR => {
```

#### 38. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L384)

```diff
-       595: WW => {
+       628: RR => {
```

#### 39. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L395)

```diff
-       602: WW => {
+       631: RR => {
```

#### 40. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L406)

```diff
-       605: WW => {
+       635: RR => {
```

#### 41. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L417)

```diff
-       486: WW => {
+       519: RR => {
```

#### 42. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L422)

```diff
-       488: WW => {
+       527: RR => {
```

#### 43. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L427)

```diff
-       490: WW => {
+       531: RR => {
```

#### 44. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L432)

```diff
-       411: WW => {
+       435: RR => {
```

#### 45. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438)

```diff
-       512: (WW, iW, OW) => {
-         WW.exports = OW(506)
+       549: (RR, JR, GR) => {
+         RR.exports = GR(542)
```

#### 46. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441)

```diff
-       540: (WW, iW, OW) => {
-         WW.exports = OW(534)
+       571: (RR, JR, GR) => {
+         RR.exports = GR(562)
```

#### 47. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L443)

```diff
-       506: WW => {
+       542: RR => {
```

#### 48. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L451)

```diff
-       534: WW => {
+       562: RR => {
```

#### 49. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460)

```diff
-       433: (WW, iW, OW) => {
-         WW.exports = OW(431)
+       461: (RR, JR, GR) => {
+         RR.exports = GR(456)
```

#### 50. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L462)

```diff
-       431: WW => {
+       456: RR => {
```

#### 51. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L467)

```diff
-       586: WW => {
+       621: RR => {
```

#### 52. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L475)

```diff
-       579: WW => {
+       615: RR => {
```

#### 53. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L484)

```diff
-       592: WW => {
+       626: RR => {
```

#### 54. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L500)

```diff
-       3897: WW => {
+       3998: RR => {
```

#### 55. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L506)

```diff
-       3902: WW => {
+       4e3: RR => {
```

#### 56. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L516)

```diff
-       41291: WW => {
+       41294: RR => {
```

#### 57. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L520)

```diff
-             for (var PW = EW[NW] = new Array(iW), LW = NW < mW / 2 ? NW : NW + 1, cW = 1; cW <= iW; cW++) {
+             for (var ZR = tR[uR] = new Array(JR), qR = uR < yR / 2 ? uR : uR + 1, iR = 1; iR <= JR; iR++) {
```

#### 58. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L527-L529` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529)

```diff
-       3891: (WW, iW, OW) => {
-         var mW = OW(3897),
-           EW = OW(3902),
+       3991: (RR, JR, GR) => {
+         var yR = GR(3998),
+           tR = GR(4e3),
```

#### 59. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L675-L677` → after: `L675-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L675-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L675-L677) · [Before (L675-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L675-L677)

```diff
-         var mW = OW(41280).integer,
-           EW = OW(41283),
-           NW = OW(41286);
+         var yR = GR(41282).integer,
+           tR = GR(41287),
+           uR = GR(41292);
```

#### 60. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L741-L744` → after: `L741-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744) · [Before (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744)

```diff
-       41295: (WW, iW, OW) => {
-         var mW = OW(41280).array,
-           EW = OW(41283),
-           NW = OW(41286);
+       41297: (RR, JR, GR) => {
+         var yR = GR(41282).array,
+           tR = GR(41287),
+           uR = GR(41292);
```

#### 61. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828)

```diff
-       41286: (WW, iW, OW) => {
-         var mW = OW(41291);
+       41292: (RR, JR, GR) => {
+         var yR = GR(41294);
```

#### 62. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L847)

```diff
-       41266: (WW, iW, OW) => {
+       41265: (RR, JR, GR) => {
```

#### 63. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L849` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L849) · [Before (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L849)

```diff
-           EW = OW(41295);
+           tR = GR(41297);
```

#### 64. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L870)

```diff
-       41283: WW => {
+       41287: RR => {
```

#### 65. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L884)

```diff
-       41280: WW => {
+       41282: RR => {
```

#### 66. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L910-L911` → after: `L910-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911)

```diff
-       38900: (WW, iW, OW) => {
-         var mW = OW(38905);
+       38891: (RR, JR, GR) => {
+         var yR = GR(38898);
```

#### 67. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L943)

```diff
-       38905: (WW, iW) => {
+       38898: (RR, JR) => {
```

#### 68. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L997-L998` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L997-L998) · [Before (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L997-L998)

```diff
-       5727: (WW, iW) => {
-         iW.d = function(WW) {
+       5850: (RR, JR) => {
+         JR.i = function(RR) {
```

#### 69. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012)

```diff
-       41221: (WW, iW, OW) => {
+       41208: (RR, JR, GR) => {
```

#### 70. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1016-L1018` → after: `L1016-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018)

```diff
-         var mW = OW(41238),
-           EW = OW(41231),
-           NW = OW(41306);
+         var yR = GR(41234),
+           tR = GR(41219),
+           uR = GR(41309);
```

#### 71. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027)

```diff
-           return PW(`${WW}Wasteland`)
+           return ZR(`${RR}Wasteland`)
```

#### 72. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062)

```diff
-           return 36 * (1 === mW ? WW : iW) + 2 + Math.floor(32 * cW(WW, iW, OW ^ xW ^ mW))
+           return 36 * (1 === yR ? RR : JR) + 2 + Math.floor(32 * iR(RR, JR, GR ^ wR ^ yR))
```

#### 73. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1064-L1065` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065)

```diff
-         var jW = OW(41228),
-           UW = OW(41236);
+         var LR = GR(41210),
+           nR = GR(41226);
```

#### 74. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141)

```diff
-               return mW > OW && (NW = .25 - NW), WW < 0 && (NW = .5 - NW), iW < 0 ? 1 - NW : NW
+               return yR > GR && (uR = .25 - uR), RR < 0 && (uR = .5 - uR), JR < 0 ? 1 - uR : uR
```

#### 75. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174)

```diff
-             return OW && oW(OW, WW, iW) ? OW : null
+             return GR && xR(GR, RR, JR) ? GR : null
```

#### 76. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181)

```diff
-                 if (NW && EW >= NW.floorY - UW.h && mW <= NW.topY + sW) {
+                 if (uR && tR >= uR.floorY - nR.f && yR <= uR.topY + WR) {
```

#### 77. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206)

```diff
-         var pW = OW(41256);
+         var IR = GR(41254);
```

#### 78. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210)

```diff
-             this.jZ = iW, this.chances = EW, this.mound = NW, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = OW.salt ^ PW(mW), this.sinkholes = OW.sinkholes;
+             this.LK = JR, this.chances = tR, this.mound = uR, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = GR.salt ^ ZR(yR), this.sinkholes = GR.sinkholes;
```

#### 79. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231)

```diff
-               for (let EW = 0; EW < LW.height && cW + EW < this.jZ; EW++) cW + EW >= 0 && WW.set(mW - iW, cW + EW, NW - OW, LW.block);
+               for (let tR = 0; tR < qR.height && iR + tR < this.LK; tR++) iR + tR >= 0 && RR.set(yR - JR, iR + tR, uR - GR, qR.block);
```

#### 80. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238)

```diff
-               if (tW += null !== (ZW = this.chances[xW]) && void 0 !== ZW ? ZW : 0, wW < tW) return void(fW.has(xW) && this.sinkholes.taking(mW, NW) || this.place(WW, mW - iW, PW + 1 - EW, NW - OW, xW, cW(mW, NW, 1540483477 ^ this.salt)))
+               if (VR += null !== (KR = this.chances[wR]) && void 0 !== KR ? KR : 0, fR < VR) return void(mR.has(wR) && this.sinkholes.taking(yR, uR) || this.place(RR, yR - JR, ZR + 1 - tR, uR - GR, wR, iR(yR, uR, 1540483477 ^ this.salt)))
```

#### 81. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243)

```diff
-                 OW + EW >= 0 && OW + EW < this.jZ && WW.set(iW, OW + EW, mW, NW)
+                 GR + tR >= 0 && GR + tR < this.LK && RR.set(JR, GR + tR, yR, uR)
```

#### 82. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252)

```diff
-         class XW extends pW.f {
+         class SR extends IR.j {
```

#### 83. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260)

```diff
-             super.init(), this.floraGenerator = new CW(this.blockMetadata, this.jZ, this.noise, this.seed, this.floraChances, ((WW, iW) => this.mound(WW, iW)))
+             super.init(), this.floraGenerator = new zR(this.blockMetadata, this.LK, this.noise, this.seed, this.floraChances, ((RR, JR) => this.mound(RR, JR)))
```

#### 84. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298)

```diff
-               return 0 === mW || 1 === mW && cW(WW, iW, OW ^ xW ^ 3) < .5 ? 2 - mW : 0
+               return 0 === yR || 1 === yR && iR(RR, JR, GR ^ wR ^ 3) < .5 ? 2 - yR : 0
```

#### 85. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327)

```diff
-             })), this.canyon = new EW.i([{
+             })), this.canyon = new tR.g([{
```

#### 86. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330)

```diff
-             }], `${WW}WastelandCanyon`), this.canyonWarp = new EW.i([{
+             }], `${RR}WastelandCanyon`), this.canyonWarp = new tR.g([{
```

#### 87. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333)

```diff
-             }], `${WW}WastelandCanyonWarp`), this.canyonMask = new EW.i([{
+             }], `${RR}WastelandCanyonWarp`), this.canyonMask = new tR.g([{
```

#### 88. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1336` → after: `L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336)

```diff
-             }], `${WW}WastelandCanyonMask`), this.patchNoise = new EW.i([{
+             }], `${RR}WastelandCanyonMask`), this.patchNoise = new tR.g([{
```

#### 89. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342)

```diff
-             }], `${WW}WastelandPatch`), this.fineNoise = new EW.i([{
+             }], `${RR}WastelandPatch`), this.fineNoise = new tR.g([{
```

#### 90. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348)

```diff
-             }], `${WW}WastelandFine`)
+             }], `${RR}WastelandFine`)
```

#### 91. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1371-L1374` → after: `L1371-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374) · [Before (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374)

```diff
-         var RW = OW(2955),
-           GW = OW(643),
-           IW = OW(40358),
-           aW = OW(41244);
+         var ER = GR(3031),
+           YR = GR(679),
+           kR = GR(40416),
+           QR = GR(41249);
```

#### 92. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1384-L1385` → after: `L1384-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1384-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1384-L1385) · [Before (L1384-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1384-L1385)

```diff
-             const WW = new IW.c;
-             return WW.set(0, 0, 0, zW("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             const RR = new kR.e;
+             return RR.set(0, 0, 0, TR("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448)

```diff
-           return (0, pW.ib)(WW, [{
+           return (0, IR.db)(RR, [{
```

#### 94. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1451)

```diff
-           }, ...pW.d.map((WW => ({
+           }, ...IR.g.map((RR => ({
```

#### 95. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458)

```diff
-             super(WW, iW, OW, `${NW}DustFlats`, PW, LW, mi(mW.i.MEDIUM, 1.25, Wi)), this.key = "dustFlats", this.floraChances = {
+             super(RR, JR, GR, `${uR}DustFlats`, ZR, qR, yJ(yR.l.MEDIUM, 1.25, RJ)), this.key = "dustFlats", this.floraChances = {
```

#### 96. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462)

```diff
-             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = lW.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new EW.i([{
+             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = rR.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new tR.g([{
```

#### 97. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1468` → after: `L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468) · [Before (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468)

```diff
-             }], `${NW}DustFlatsHeight`)
+             }], `${uR}DustFlatsHeight`)
```

#### 98. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483)

```diff
-             super(WW, iW, OW, `${mW}ScorchedMesa`, NW, PW), this.key = "scorchedMesa", this.floraChances = {
+             super(RR, JR, GR, `${yR}ScorchedMesa`, uR, ZR), this.key = "scorchedMesa", this.floraChances = {
```

#### 99. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487)

```diff
-             }, this.outcropChance = lW.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
+             }, this.outcropChance = rR.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493)

```diff
-             }], `${mW}ScorchedMesaHeight`);
+             }], `${yR}ScorchedMesaHeight`);
```

#### 101. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1525` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525) · [Before (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525)

```diff
-             super(WW, iW, OW, `${mW}ShatteredHighlands`, NW, PW), this.key = "shatteredHighlands", this.floraChances = {
+             super(RR, JR, GR, `${yR}ShatteredHighlands`, uR, ZR), this.key = "shatteredHighlands", this.floraChances = {
```

#### 102. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528)

```diff
-             }, this.outcropChance = lW.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
+             }, this.outcropChance = rR.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531)

```diff
-             }], `${mW}HighlandsRidge1`), this.ridge2 = new EW.i([{
+             }], `${yR}HighlandsRidge1`), this.ridge2 = new tR.g([{
```

#### 104. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534)

```diff
-             }], `${mW}HighlandsRidge2`), this.bumps = new EW.i([{
+             }], `${yR}HighlandsRidge2`), this.bumps = new tR.g([{
```

#### 105. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1537` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537)

```diff
-             }], `${mW}HighlandsBumps`)
+             }], `${yR}HighlandsBumps`)
```

#### 106. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548)

```diff
-             return 0 !== EW ? EW : iW > 50 ? this.ids.Stone : iW > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== tR ? tR : JR > 50 ? this.ids.Stone : JR > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 107. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559)

```diff
-               return null === PW || wW(WW >> 2, iW, OW >> 2, EW) >= .25 ? null : wW(WW, iW, OW, EW) < .65 ? PW : null
+               return null === ZR || fR(RR >> 2, JR, GR >> 2, tR) >= .25 ? null : fR(RR, JR, GR, tR) < .65 ? ZR : null
```

#### 108. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1566` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566) · [Before (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566)

```diff
-             super(WW, iW, OW, `${NW}RuinFields`, PW, LW, mi(mW.i.HIGH, 2.25, ii)), this.key = "ruinFields", this.floraChances = {
+             super(RR, JR, GR, `${uR}RuinFields`, ZR, qR, yJ(yR.l.HIGH, 2.25, JJ)), this.key = "ruinFields", this.floraChances = {
```

#### 109. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571)

```diff
-             }, this.outcropChance = lW.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new EW.i([{
+             }, this.outcropChance = rR.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new tR.g([{
```

#### 110. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1577` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577)

```diff
-             }], `${NW}RuinFieldsHeight`)
+             }], `${uR}RuinFieldsHeight`)
```

#### 111. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589)

```diff
-             super(WW, iW, OW, `${mW}SaltFlats`, NW, PW), this.key = "saltFlats", this.floraChances = {
+             super(RR, JR, GR, `${yR}SaltFlats`, uR, ZR), this.key = "saltFlats", this.floraChances = {
```

#### 112. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592)

```diff
-             }, this.outcropChance = lW.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new EW.i([{
+             }, this.outcropChance = rR.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new tR.g([{
```

#### 113. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1598` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598)

```diff
-             }], `${mW}SaltFlatsHeight`)
+             }], `${yR}SaltFlatsHeight`)
```

#### 114. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616)

```diff
-             super(WW, iW, OW, `${mW}SurvivorGrove`, NW, PW), this.key = "survivorGrove", this.floraChances = {
+             super(RR, JR, GR, `${yR}SurvivorGrove`, uR, ZR), this.key = "survivorGrove", this.floraChances = {
```

#### 115. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1620` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620)

```diff
-             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = lW.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new EW.i([{
+             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = rR.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new tR.g([{
```

#### 116. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626)

```diff
-             }], `${mW}SurvivorGroveHeight`)
+             }], `${yR}SurvivorGroveHeight`)
```

#### 117. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641)

```diff
-               jZ: iW,
+               LK: JR,
```

#### 118. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667)

```diff
-       622: (WW, iW, OW) => {
+       649: (RR, JR, GR) => {
```

#### 119. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1677-L1678` → after: `L1677-L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678) · [Before (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678)

```diff
-               if (void 0 !== OW[WW]) throw new Error(`Duplicate value found in bi-directional table: ${String(WW)}`);
-               OW[WW] = "string" === iW ? mW : Number(mW)
+               if (void 0 !== GR[RR]) throw new Error(`Duplicate value found in bi-directional table: ${String(RR)}`);
+               GR[RR] = "string" === JR ? yR : Number(yR)
```

#### 120. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1690` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690)

```diff
-       41244: (WW, iW, OW) => {
+       41249: (RR, JR, GR) => {
```

#### 121. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1692)

```diff
-           c: () => EW
+           d: () => tR
```

#### 122. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1694)

```diff
-         var mW = OW(40358);
+         var yR = GR(40416);
```

#### 123. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1697)

```diff
-             let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new mW.c,
+             let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new yR.e,
```

#### 124. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1723)

```diff
-       40358: (WW, iW, OW) => {
+       40416: (RR, JR, GR) => {
```

#### 125. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1725` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1725) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1725)

```diff
-           c: () => mW
+           e: () => yR
```

#### 126. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1850` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1850) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1850)

```diff
-             super(`${mW.name} has been mutated during iteration`)
+             super(`${yR.name} has been mutated during iteration`)
```

#### 127. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1854` → after: `L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1854) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1854)

```diff
-       41304: (WW, iW, OW) => {
+       41301: (RR, JR, GR) => {
```

#### 128. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1856-L1857` → after: `L1856-L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1856-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1856-L1857) · [Before (L1856-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1856-L1857)

```diff
-           c: () => mW,
-           e: () => PW
+           b: () => yR,
+           c: () => ZR
```

#### 129. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1862` → after: `L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1862) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1862)

```diff
-             this.name = WW, this.max = iW, this.xj = OW, this.head = new LW(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
+             this.name = RR, this.max = JR, this.GL = GR, this.head = new qR(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
```

#### 130. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1894)

```diff
-             WW - this.epochStartMs >= this.xj && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = WW)
+             RR - this.epochStartMs >= this.GL && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = RR)
```

#### 131. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1924` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1924) · [Before (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1924)

```diff
-           return WW > -NW && WW < NW && iW > -NW && iW < NW ? WW * (2 * NW) + iW : `${WW}|${iW}`
+           return RR > -uR && RR < uR && JR > -uR && JR < uR ? RR * (2 * uR) + JR : `${RR}|${JR}`
```

#### 132. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1936)

```diff
-       41248: (WW, iW, OW) => {
+       41251: (RR, JR, GR) => {
```

#### 133. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1947)

```diff
-       41256: (WW, iW, OW) => {
+       41254: (RR, JR, GR) => {
```

#### 134. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1949-L1952` → after: `L1949-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1949-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1949-L1951) · [Before (L1949-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1949-L1952)

```diff
-           c: () => XW,
-           d: () => JW,
-           f: () => nW,
-           i: () => GW,
+           e: () => SR,
+           g: () => pR,
+           j: () => vR,
```

#### 135. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1954` → after: `L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1953) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1954)

```diff
-           m: () => QW,
+           l: () => kR,
```

#### 136. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1956-L1958` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1955) · [Before (L1956-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1956-L1958)

```diff
-           r: () => pW,
-           u: () => FW,
-           v: () => zW,
+           s: () => OR,
```

#### 137. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1960-L1962` → after: `L1957-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1957-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1957-L1961) · [Before (L1960-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1960-L1962)

```diff
-           A: () => oW,
-           D: () => DW,
-           E: () => dW,
+           y: () => sR,
+           B: () => TR,
+           C: () => jR,
+           F: () => xR,
+           H: () => cR,
```

#### 138. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1965-L1966` → after: `L1965-L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1965-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1965-L1966) · [Before (L1965-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1965-L1966)

```diff
-           O: () => vW,
-           Q: () => fW,
+           P: () => HR,
+           S: () => mR,
```

#### 139. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1968-L1970` → after: `L1968-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1968-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1968-L1971) · [Before (L1968-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1968-L1970)

```diff
-           W: () => aW,
-           X: () => rW,
-           $: () => RW,
+           U: () => QR,
+           Y: () => FR,
+           Z: () => ER,
+           ab: () => PR,
```

#### 140. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1972-L1973` → after: `L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1973) · [Before (L1972-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1972-L1973)

```diff
-           eb: () => gW,
-           ib: () => HW
+           db: () => bR
```

#### 141. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1975-L1978` → after: `L1975-L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1975-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1975-L1978) · [Before (L1975-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1975-L1978)

```diff
-         var mW = OW(41231),
-           EW = OW(643),
-           NW = OW(41259),
-           PW = OW(2955);
+         var yR = GR(41219),
+           tR = GR(679),
+           uR = GR(41262),
+           ZR = GR(3031);
```

#### 142. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1985` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L1985) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L1985)

```diff
-             this.columnRandom = new PW.g(""), this.flowerPatchRandom = new PW.g(""), this.cactusRandom = new PW.g(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
+             this.columnRandom = new ZR.i(""), this.flowerPatchRandom = new ZR.i(""), this.cactusRandom = new ZR.i(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = v … [truncated]
```

#### 143. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2125)

```diff
-             this.doFlowerGen = null !== bW.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new NW.b("flwrPtch", bW.flowerPatchDistApart, !1, !0, OW, 4, iW)), this.grassId = WW.Grass.id, this.tallGrassId = WW["Tall Grass"].id, this.tallGrassTopId = WW["Tall G … [truncated]
+             this.doFlowerGen = null !== aR.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new uR.d("flwrPtch", aR.flowerPatchDistApart, !1, !0, GR, 4, JR)), this.grassId = RR.Grass.id, this.tallGrassId = RR["Tall Grass"].id, this.tallGrassTopId = RR["Tall G … [truncated]
```

#### 144. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2128)

```diff
-             if (LW + 3 >= NW && LW + 1 < NW + this.jZ) {
+             if (qR + 3 >= uR && qR + 1 < uR + this.LK) {
```

#### 145. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2130` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2130) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2130)

```diff
-               cW.reseed(`${EW}${PW}${this.seed}flora`);
+               iR.reseed(`${tR}${ZR}${this.seed}flora`);
```

#### 146. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2134)

```diff
-                 0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.grassId)
+                 0 <= yR && yR < this.LK && RR.set(tR - JR, yR, ZR - GR, this.grassId)
```

#### 147. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2139)

```diff
-                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.tallGrassId)
+                     0 <= yR && yR < this.LK && RR.set(tR - JR, yR, ZR - GR, this.tallGrassId)
```

#### 148. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2142` → after: `L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2142) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2142)

```diff
-                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.tallGrassTopId)
+                     0 <= yR && yR < this.LK && RR.set(tR - JR, yR, ZR - GR, this.tallGrassTopId)
```

#### 149. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2149)

```diff
-                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.cornSeedsId)
+                     0 <= yR && yR < this.LK && RR.set(tR - JR, yR, ZR - GR, this.cornSeedsId)
```

#### 150. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e...build/bloxd.io/4udp6d.2845de07#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/4udp6d.2845de07/bundles/bloxd.io/chunks/js/procGenWorker.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/de86cc251ccbc490e9e4e47e3d1928aa50df6d4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L2152)

```diff
-                     0 <= mW && mW < this.jZ && WW.set(EW - iW, mW, PW - OW, this.cornPlantId)
+                     0 <= yR && yR < this.LK && RR.set(tR - JR, yR, ZR - GR, this.cornPlantId)
```
