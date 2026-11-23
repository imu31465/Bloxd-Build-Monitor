# Changed — Bundle Modifications Report (Part 120 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `120 / 137` (**419** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 119](part-119.md) · [Part 121 →](part-121.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/playGameSources.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/playGameSources.js` (342 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c)

#### 67. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L464)

```diff
-       }), ZC) : `The chunk from ${nC.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ZC.map(Math.floor).join(" ")}.`
+       }), Ik) : `The chunk from ${yk.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${Ik.map(Math.floor).join(" ")}.`
```

#### 68. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L478-L480` → after: `L478-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L478-L480) · [Before (L478-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L478-L480)

```diff
-         null !== CC.game && zC.push(`Game: ${CC.game}.`);
-         const ZC = null === CC.health ? "" : `, health ${Math.round(CC.health)}${null===CC.maxHealth?"":` of ${Math.round(CC.maxHealth)}`}`;
-         zC.push(`The player (the creator) stands at ${nC(CC.position)}${ZC}, ${CC.creative?"in":"not in"} creative mode.`);
+         null !== kk.game && Fk.push(`Game: ${kk.game}.`);
+         const Ik = null === kk.health ? "" : `, health ${Math.round(kk.health)}${null===kk.maxHealth?"":` of ${Math.round(kk.maxHealth)}`}`;
+         Fk.push(`The player (the creator) stands at ${yk(kk.position)}${Ik}, ${kk.creative?"in":"not in"} creative mode.`);
```

#### 69. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L482-L484` → after: `L482-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L482-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L482-L484) · [Before (L482-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L482-L484)

```diff
-         zC.push(QC ? `Holding (slot ${CC.heldSlot}): ${fC(QC)}.` : `Holding nothing (slot ${CC.heldSlot} is empty).`);
-         const wC = CC.slots.flatMap(((CC, zC) => CC ? [`slot ${zC}: ${fC(CC)}`] : []));
-         zC.push(wC.length > 0 ? `Inventory: ${wC.join(", ")}.` : "Inventory: empty.");
+         Fk.push(Xk ? `Holding (slot ${kk.heldSlot}): ${lk(Xk)}.` : `Holding nothing (slot ${kk.heldSlot} is empty).`);
+         const Tk = kk.slots.flatMap(((kk, Fk) => kk ? [`slot ${Fk}: ${lk(kk)}`] : []));
+         Fk.push(Tk.length > 0 ? `Inventory: ${Tk.join(", ")}.` : "Inventory: empty.");
```

#### 70. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L491)

```diff
-             const ZC = "player" === CC.kind ? `player "${CC.name||"?"}"` : CC.name && CC.name !== CC.kind ? `${CC.kind} "${CC.name}"` : CC.kind,
+             const Ik = "player" === kk.kind ? `player "${kk.name||"?"}"` : kk.name && kk.name !== kk.kind ? `${kk.kind} "${kk.name}"` : kk.kind,
```

#### 71. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L493)

```diff
-             zC.push(`- ${ZC} at ${nC(CC.position)}, ${QC} block${1===QC?"":"s"} away`)
+             Fk.push(`- ${Ik} at ${yk(kk.position)}, ${Xk} block${1===Xk?"":"s"} away`)
```

#### 72. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L495)

```diff
-           qC.length > bC && zC.push(`- and ${qC.length-bC} more further away`)
+           qk.length > ik && Fk.push(`- and ${qk.length-ik} more further away`)
```

#### 73. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L497)

```diff
-         return CC.droppedItems > 0 && zC.push(`${CC.droppedItems} dropped item${1===CC.droppedItems?" is":"s are"} on the ground nearby.`), zC.join("\n")
+         return kk.droppedItems > 0 && Fk.push(`${kk.droppedItems} dropped item${1===kk.droppedItems?" is":"s are"} on the ground nearby.`), Fk.join("\n")
```

#### 74. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L499)

```diff
-         game: null !== (zC = (0, FC.d)().gameNameWithVariation) && void 0 !== zC ? zC : null,
+         game: null !== (Fk = (0, Lk.d)().gameNameWithVariation) && void 0 !== Fk ? Fk : null,
```

#### 75. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L501-L502` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L501-L502) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L501-L502)

```diff
-         health: null !== (ZC = qC.e.get("_health")) && void 0 !== ZC ? ZC : null,
-         maxHealth: null !== (QC = qC.e.get("_totalMaxHealth")) && void 0 !== QC ? QC : null,
+         health: null !== (Ik = qk.e.get("_health")) && void 0 !== Ik ? Ik : null,
+         maxHealth: null !== (Xk = qk.e.get("_totalMaxHealth")) && void 0 !== Xk ? Xk : null,
```

#### 76. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L511` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L511) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L511)

```diff
-   38868: (CC, zC, ZC) => {
+   39020: (kk, Fk, Ik) => {
```

#### 77. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L514-L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L515)

```diff
-       h: () => qC
+       f: () => ak,
+       g: () => qk
```

#### 78. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L517-L520` → after: `L517-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L517-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L517-L520) · [Before (L517-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L517-L520)

```diff
-     var QC = ZC(1169),
-       wC = ZC(970),
-       bC = ZC(36725),
-       nC = ZC(28);
+     var Xk = Ik(1217),
+       Tk = Ik(1018),
+       ik = Ik(36899),
+       yk = Ik(34);
```

#### 79. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L527)

```diff
-       return !(0, QC.U)(zC) || null !== ZC && (ZC.startsWith("testGym") || (0, wC.i)(ZC))
+       return !(0, Xk.K)(Fk) || null !== Ik && (Ik.startsWith("testGym") || (0, Tk.j)(Ik))
```

#### 80. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L531)

```diff
-       return CC.rb === bC.d.Leave || CC.rb === bC.d.Cursor
+       return kk.Wi === ik.e.Leave || kk.Wi === ik.e.Cursor
```

#### 81. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L535-L549` → after: `L535-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L535-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L535-L549) · [Before (L535-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L535-L549)

```diff
-       nC.o.bp("codeCollab", {
-         type: CC.rb,
-         docKey: CC.sb,
-         version: CC.Tb,
-         editorCount: CC.ab,
-         peers: CC.tb,
-         updates: CC.Db,
-         playerId: CC.jb,
-         playerName: CC.yb,
-         colour: CC.Lb,
-         anchor: CC.Ub,
-         head: CC.Bb,
-         existingCursors: CC.Ob,
-         files: CC.kb,
-         engineSettings: CC.Vb
+       yk.g.GL("codeCollab", {
+         type: kk.Wi,
+         docKey: kk.Bi,
+         version: kk.Yi,
+         editorCount: kk.Ai,
+         peers: kk.gi,
+         updates: kk.mi,
+         playerId: kk.ri,
+         playerName: kk.Di,
+         colour: kk.Mi,
+         anchor: kk.ky,
+         head: kk.Fy,
+         existingCursors: kk.Iy,
+         files: kk.Xy,
+         engineSettings: kk.Ty
```

#### 82. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L553)

```diff
-   40717: (CC, zC, ZC) => {
+   40891: (kk, Fk, Ik) => {
```

#### 83. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L555-L556` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L555) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L555-L556)

```diff
-       A: () => EC,
-       D: () => HC,
+       C: () => uk,
```

#### 84. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L559-L565` → after: `L558-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L558-L563) · [Before (L559-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L559-L565)

```diff
-       J: () => YC,
-       N: () => lC,
-       O: () => KC,
-       R: () => DC,
-       T: () => tC,
-       W: () => mC,
-       c: () => jC,
+       I: () => nk,
+       M: () => Rk,
+       Q: () => Ok,
+       U: () => Yk,
+       X: () => dk,
+       _: () => pk,
```

#### 85. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L567-L572` → after: `L565-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L565-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L565-L572) · [Before (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L567-L572)

```diff
-       g: () => eC,
-       k: () => yC,
-       o: () => hC,
-       s: () => vC,
-       u: () => cC,
-       x: () => dC
+       e: () => Nk,
+       h: () => vk,
+       l: () => gk,
+       n: () => Ek,
+       p: () => Sk,
+       t: () => Ck,
+       x: () => Gk,
+       z: () => bk
```

#### 86. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L574-L579` → after: `L574-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L574-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L574-L579) · [Before (L574-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L574-L579)

```diff
-     var QC = ZC(1347),
-       wC = ZC(28),
-       bC = ZC(1240),
-       nC = ZC(2348),
-       fC = ZC(4752),
-       oC = ZC(4711);
+     var Xk = Ik(1364),
+       Tk = Ik(34),
+       ik = Ik(1270),
+       yk = Ik(2331),
+       lk = Ik(4814),
+       ak = Ik(4792);
```

#### 87. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L609)

```diff
-       return (0, bC.x)() && !JC
+       return (0, ik.n)() && !sk
```

#### 88. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L628` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L628) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L628)

```diff
-       (0, fC.e)(nC.v.Menu, (0, bC.x)() ? 0 : nC.v.Menu)
+       (0, lk.g)(yk.A.Menu, (0, ik.n)() ? 0 : yk.A.Menu)
```

#### 89. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L654)

```diff
-       return (!WC || performance.now() - pC > SC) && (WC = (0, oC.E)().lockPointer(), pC = performance.now()), WC
+       return (!tk || performance.now() - Hk > wk) && (tk = (0, ak.I)().lockPointer(), Hk = performance.now()), tk
```

#### 90. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L662)

```diff
-       return KC() && !FC && !PC && !(0, QC.h)()
+       return Ok() && !Lk && !Jk && !(0, Xk.f)()
```

#### 91. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L679)

```diff
-       GC ? navigator.vendor.startsWith("Apple") ? LC() : RC = AC : tC()
+       xk ? navigator.vendor.startsWith("Apple") ? mk() : Pk = Kk : dk()
```

#### 92. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L695)

```diff
-       xC = !0, (0, oC.E)().unlockPointer()
+       Qk = !0, (0, ak.I)().unlockPointer()
```

#### 93. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L706)

```diff
-       wC.o.bp("pointerLockUpdate", FC)
+       Tk.g.GL("pointerLockUpdate", Lk)
```

#### 94. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L709)

```diff
-   40518: (CC, zC, ZC) => {
+   40685: (kk, Fk, Ik) => {
```

#### 95. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L714-L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L715) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L714-L715)

```diff
-       k: () => qC,
-       m: () => nC,
+       n: () => yk,
```

#### 96. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L717)

```diff
-       s: () => oC
+       r: () => ak
```

#### 97. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L752)

```diff
-   40832: (CC, zC, ZC) => {
+   41011: (kk, Fk, Ik) => {
```

#### 98. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L757-L771` → after: `L757-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L757-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L757-L771) · [Before (L757-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L757-L771)

```diff
-     var QC = ZC(1840),
-       wC = ZC(40518),
-       bC = ZC(4711),
-       nC = ZC(40423),
-       fC = ZC(40817),
-       oC = ZC(39421),
-       qC = ZC(28),
-       FC = ZC(4733),
-       WC = ZC(4727),
-       NC = ZC(40457),
-       MC = ZC(40485),
-       gC = ZC(40838),
-       SC = ZC(40470);
-     (0, SC.l)(FC.Bc.Chat, (CC => {
-       if (CC.payloadKind !== WC.hc.Msgpack) return;
+     var Xk = Ik(1875),
+       Tk = Ik(40685),
+       ik = Ik(4792),
+       yk = Ik(40596),
+       lk = Ik(40994),
+       ak = Ik(39601),
+       qk = Ik(34),
+       Lk = Ik(4799),
+       tk = Ik(4797),
+       Zk = Ik(40623),
+       jk = Ik(40658),
+       ek = Ik(41020),
+       wk = Ik(40636);
+     (0, wk.l)(Lk.sc.Chat, (kk => {
+       if (kk.payloadKind !== tk.fc.Msgpack) return;
```

#### 99. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L780` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L780) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L780)

```diff
-           serverChatMsgId: null !== zC && void 0 !== zC ? zC : void 0,
+           serverChatMsgId: null !== Fk && void 0 !== Fk ? Fk : void 0,
```

#### 100. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L784-L785` → after: `L784-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L784-L785) · [Before (L784-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L784-L785)

```diff
-       }((0, NC.c)(CC.payload));
-       null !== zC && qC.o.bp("chat", zC, !0)
+       }((0, Zk.b)(kk.payload));
+       null !== Fk && qk.g.GL("chat", Fk, !0)
```

#### 101. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L788)

```diff
-         chatReceived: (0, oC.k)((function(CC) {
+         chatReceived: (0, ak.o)((function(kk) {
```

#### 102. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L792-L794` → after: `L792-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L792-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L792-L794) · [Before (L792-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L792-L794)

```diff
-             name: null !== (zC = gC.f.getName(CC)) && void 0 !== zC ? zC : null,
-             local: (0, MC.g)() === CC,
-             profileEffect: null !== (ZC = null === (QC = (0, gC.j)(CC)) || void 0 === QC ? void 0 : QC.profileEffect) && void 0 !== ZC ? ZC : null
+             name: null !== (Fk = ek.f.getName(kk)) && void 0 !== Fk ? Fk : null,
+             local: (0, jk.d)() === kk,
+             profileEffect: null !== (Ik = null === (Xk = (0, ek.g)(kk)) || void 0 === Xk ? void 0 : Xk.profileEffect) && void 0 !== Ik ? Ik : null
```

#### 103. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L802` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L802) · [Before (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L802)

```diff
-             cq: ZC,
+             oq: Ik,
```

#### 104. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L808-L811` → after: `L808-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L808-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L808-L811) · [Before (L808-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L808-L811)

```diff
-     var GC = ZC(184),
-       RC = ZC(1865),
-       AC = ZC(40412),
-       xC = ZC(39413);
+     var xk = Ik(187),
+       Pk = Ik(1894),
+       Kk = Ik(40583),
+       Qk = Ik(39598);
```

#### 105. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L819-L820` → after: `L819-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L819-L820) · [Before (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L819-L820)

```diff
-           if (0 !== (AC.w.playerFlags(QC.apiView, 0) & AC.ce.Crouching)) return !1;
-           const wC = QC.queries.directorEntity(QC.localId) >= AC.xb.BYTES ? QC.memoryData(QC.scratch(), AC.xb.BYTES, 8, "the local player's DirectorEntity") : null;
+           if (0 !== (Kk.y.playerFlags(Xk.apiView, 0) & Kk.Ed.Crouching)) return !1;
+           const Tk = Xk.queries.directorEntity(Xk.localId) >= Kk.tb.BYTES ? Xk.memoryData(Xk.scratch(), Kk.tb.BYTES, 8, "the local player's DirectorEntity") : null;
```

#### 106. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L822-L823` → after: `L822-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L822-L823) · [Before (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L822-L823)

```diff
-           for (let bC = 0; bC < 3; bC++) JC[bC] = AC.xb.feet(wC, 0, bC);
-           return JC[1] += AC.xb.eyeHeight(wC, 0), (0, xC.e)(JC, CC, null !== (zC = RC.e.get("blockReach")) && void 0 !== zC ? zC : GC.f.yp)
+           for (let ik = 0; ik < 3; ik++) sk[ik] = Kk.tb.feet(Tk, 0, ik);
+           return sk[1] += Kk.tb.eyeHeight(Tk, 0), (0, Qk.b)(sk, kk, null !== (Fk = Pk.e.get("blockReach")) && void 0 !== Fk ? Fk : xk.f.WH)
```

#### 107. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L832-L839` → after: `L832-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L832-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L832-L839) · [Before (L832-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L832-L839)

```diff
-     var vC = ZC(40431),
-       eC = ZC(40842),
-       hC = ZC(970),
-       KC = ZC(38874),
-       YC = ZC(4706),
-       dC = ZC(40446),
-       mC = ZC(40427),
-       HC = ZC(40449);
+     var Sk = Ik(40602),
+       vk = Ik(41029),
+       Ek = Ik(1018),
+       Ok = Ik(39028),
+       nk = Ik(4784),
+       Gk = Ik(40609),
+       pk = Ik(40598),
+       uk = Ik(40614);
```

#### 108. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L846)

```diff
-         if ("KZ" === CC) {
+         if ("OI" === kk) {
```

#### 109. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L851)

```diff
-           } = ZC.KZ, bC = Object.keys(CC)[0], nC = CC[bC];
+           } = Ik.OI, ik = Object.keys(kk)[0], yk = kk[ik];
```

#### 110. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L864` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L864) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L864)

```diff
-         return null !== (zC = null === (ZC = (0, nC.k)()) || void 0 === ZC ? void 0 : ZC.renderFrame.projectWorldPosToScreenPos(CC)) && void 0 !== zC ? zC : {
+         return null !== (Fk = null === (Ik = (0, yk.k)()) || void 0 === Ik ? void 0 : Ik.renderFrame.projectWorldPosToScreenPos(kk)) && void 0 !== Fk ? Fk : {
```

#### 111. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L873-L881` → after: `L873-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L873-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L873-L881) · [Before (L873-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L873-L881)

```diff
-       XC || (XC = !0, (0, SC.l)(FC.Bc.ProgressBarUpdate, (CC => {
-         const zC = (0, HC.j)(CC);
-         (0, HC.e)(zC) && qC.o.bp("progressBarUpdate", zC, !0)
-       })), (0, SC.l)(dC.y, (CC => {
-         const zC = (0, HC.h)(dC.y, CC);
-         zC && qC.o.bp("middleScreenBarInitiate", {
-           duration: zC.rQ,
-           sQ: zC.sQ,
-           horizBarRemOffset: zC.TQ
+       Uk || (Uk = !0, (0, wk.l)(Lk.sc.ProgressBarUpdate, (kk => {
+         const Fk = (0, uk.g)(kk);
+         (0, uk.c)(Fk) && qk.g.GL("progressBarUpdate", Fk, !0)
+       })), (0, wk.l)(Gk.t, (kk => {
+         const Fk = (0, uk.e)(Gk.t, kk);
+         Fk && qk.g.GL("middleScreenBarInitiate", {
+           duration: Fk.WX,
+           fX: Fk.fX,
+           horizBarRemOffset: Fk.BX
```

#### 112. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L883-L886` → after: `L883-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L883-L886) · [Before (L883-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L883-L886)

```diff
-       })), (0, SC.l)(FC.Bc.RemoveMiddleScreenBar, (() => {
-         qC.o.bp("middleScreenBarRemove")
-       })), (0, SC.l)(dC.db, (CC => {
-         const zC = (0, HC.h)(dC.db, CC);
+       })), (0, wk.l)(Lk.sc.RemoveMiddleScreenBar, (() => {
+         qk.g.GL("middleScreenBarRemove")
+       })), (0, wk.l)(Gk.W, (kk => {
+         const Fk = (0, uk.e)(Gk.W, kk);
```

#### 113. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L889-L891` → after: `L889-L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L889-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L889-L891) · [Before (L889-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L889-L891)

```diff
-           const CC = zC.AQ ? null === (ZC = (0, nC.k)()) || void 0 === ZC ? void 0 : ZC.renderFrame.projectDirectionToScreenPos(zC.AQ) : void 0;
-           qC.o.bp("sendHitmarker", {
-             RQ: zC.RQ,
+           const kk = Fk.QX ? null === (Ik = (0, yk.k)()) || void 0 === Ik ? void 0 : Ik.renderFrame.projectDirectionToScreenPos(Fk.QX) : void 0;
+           qk.g.GL("sendHitmarker", {
+             KX: Fk.KX,
```

#### 114. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L895-L896` → after: `L895-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L895-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L895-L896) · [Before (L895-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L895-L896)

```diff
-       })), (0, SC.l)(dC.hb, (CC => {
-         const zC = (0, HC.h)(dC.hb, CC);
+       })), (0, wk.l)(Gk.$, (kk => {
+         const Fk = (0, uk.e)(Gk.$, kk);
```

#### 115. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L902-L903` → after: `L902-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L902-L903) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L902-L903)

```diff
-             WQ: wC,
-             MQ: bC
+             ZX: Tk,
+             eX: ik
```

#### 116. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L905)

```diff
-           qC.o.bp("setDirectionArrow", {
+           qk.g.GL("setDirectionArrow", {
```

#### 117. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L910)

```diff
-             MQ: bC
+             eX: ik
```

#### 118. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L913-L915` → after: `L913-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L913-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L913-L915) · [Before (L913-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L913-L915)

```diff
-       })), (0, SC.l)(dC.h, (CC => {
-         const zC = (0, HC.h)(dC.h, CC);
-         zC && qC.o.bp("clearDirectionArrow", {
+       })), (0, wk.l)(Gk.f, (kk => {
+         const Fk = (0, uk.e)(Gk.f, kk);
+         Fk && qk.g.GL("clearDirectionArrow", {
```

#### 119. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L918-L923` → after: `L918-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L918-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L918-L923) · [Before (L918-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L918-L923)

```diff
-       })), (0, SC.l)(dC.o, (CC => {
-         const zC = (0, HC.h)(dC.o, CC);
-         zC && qC.o.bp("flyingMiddleMessage", {
-           content: EC(zC.xb),
-           Jb: zC.Jb,
-           Ib: zC.Ib
+       })), (0, wk.l)(Gk.p, (kk => {
+         const Fk = (0, uk.e)(Gk.p, kk);
+         Fk && qk.g.GL("flyingMiddleMessage", {
+           content: bk(Fk.Vi),
+           zi: Fk.zi,
+           Si: Fk.Si
```

#### 120. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L925-L926` → after: `L925-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L925-L926) · [Before (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L925-L926)

```diff
-       })), (0, SC.l)(FC.Bc.WorldVariation, (CC => {
-         const zC = (0, HC.j)(CC);
+       })), (0, wk.l)(Lk.sc.WorldVariation, (kk => {
+         const Fk = (0, uk.g)(kk);
```

#### 121. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L928-L929` → after: `L928-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L928-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L928-L929) · [Before (L928-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L928-L929)

```diff
-           const CC = zC === hC.e ? null : {
-             message: `Currently loaded as variation: ${zC}`,
+           const kk = Fk === Ek.f ? null : {
+             message: `Currently loaded as variation: ${Fk}`,
```

#### 122. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L932)

```diff
-           qC.o.bp("showPermanentBottomMessage", CC, !0)
+           qk.g.GL("showPermanentBottomMessage", kk, !0)
```

#### 123. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L934-L935` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L934-L935) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L934-L935)

```diff
-       })), (0, SC.l)(dC.N, (CC => {
-         const zC = (0, HC.h)(dC.N, CC);
+       })), (0, wk.l)(Gk.G, (kk => {
+         const Fk = (0, uk.e)(Gk.G, kk);
```

#### 124. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L940` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L940) · [Before (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L940)

```diff
-           } = (0, KC.h)(zC), wC = {
+           } = (0, Ok.e)(Fk), Tk = {
```

#### 125. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L943-L944` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L943-L944) · [Before (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L943-L944)

```diff
-           for (const bC of KC.e) wC[bC] && (wC[bC] = EC(wC[bC]));
-           YC.c.queueQTE(CC, ZC, wC).getResult().then((zC => {
+           for (const ik of Ok.d) Tk[ik] && (Tk[ik] = bk(Tk[ik]));
+           nk.b.queueQTE(kk, Ik, Tk).getResult().then((Fk => {
```

#### 126. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L946)

```diff
-             "boolean" === typeof zC && (null === (ZC = (0, nC.k)()) || void 0 === ZC || ZC.send(mC.b.QteResponse, {
+             "boolean" === typeof Fk && (null === (Ik = (0, yk.k)()) || void 0 === Ik || Ik.send(pk.e.QteResponse, {
```

#### 127. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L951-L956` → after: `L951-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L951-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L951-L956) · [Before (L951-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L951-L956)

```diff
-         }(zC.id, zC.AZ)
-       })), (0, SC.l)(dC.X, (CC => {
-         const zC = (0, HC.h)(dC.X, CC);
-         "number" === typeof zC && YC.c.cancelQTE(zC)
-       })), (0, SC.i)((() => {
-         YC.c.reset()
+         }(Fk.id, Fk.QI)
+       })), (0, wk.l)(Gk.P, (kk => {
+         const Fk = (0, uk.e)(Gk.P, kk);
+         "number" === typeof Fk && nk.b.cancelQTE(Fk)
+       })), (0, wk.f)((() => {
+         nk.b.reset()
```

#### 128. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L958-L961` → after: `L958-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L958-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L958-L961) · [Before (L958-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L958-L961)

```diff
-         YC.c.reset()
-       })), (0, SC.l)(FC.Bc.EditItemCraftingRecipes, (CC => {
-         const zC = (0, HC.j)(CC);
-         (0, HC.e)(zC) && qC.o.bp("craftingRecipesEdited", {
+         nk.b.reset()
+       })), (0, wk.l)(Lk.sc.EditItemCraftingRecipes, (kk => {
+         const Fk = (0, uk.g)(kk);
+         (0, uk.c)(Fk) && qk.g.GL("craftingRecipesEdited", {
```

#### 129. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L965-L968` → after: `L965-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L965-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L965-L968) · [Before (L965-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L965-L968)

```diff
-       })), (0, SC.l)(dC.V, (CC => {
-         const zC = (0, HC.h)(dC.V, CC);
-         zC && qC.o.bp("craftingRecipesEdited", {
-           itemName: zC.Gb,
+       })), (0, wk.l)(Gk.N, (kk => {
+         const Fk = (0, uk.e)(Gk.N, kk);
+         Fk && qk.g.GL("craftingRecipesEdited", {
+           itemName: Fk.Ki,
```

#### 130. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L973` → after: `L973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L973) · [Before (L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L973)

```diff
-     var uC = ZC(20);
+     var Nk = Ik(25);
```

#### 131. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L989` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L989) · [Before (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L989)

```diff
-       return AC.w.playerFlags(CC.api.apiView, 0)
+       return Kk.y.playerFlags(kk.api.apiView, 0)
```

#### 132. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L992-L994` → after: `L992-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L992-L994) · [Before (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L992-L994)

```diff
-         freeCamera: (0, MC.e)((CC => () => {
-           const zC = CC.isSessionLive && 0 !== (sC(CC) & AC.ce.FreeCamMoves),
-             ZC = CC.freeCameraAllowed() && null === uC.b.get("scriptedCameraFacing");
+         freeCamera: (0, jk.b)((kk => () => {
+           const Fk = kk.isSessionLive && 0 !== (Wk(kk) & Kk.Ed.FreeCamMoves),
+             Ik = kk.freeCameraAllowed() && null === Nk.d.get("scriptedCameraFacing");
```

#### 133. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L996` → after: `L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L996) · [Before (L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L996)

```diff
-         }), rC[0], (CC => (0, bC.p)(CC)))
+         }), ck[0], (kk => (0, ik.u)(kk)))
```

#### 134. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1007)

```diff
-           return null !== CC && void 0 !== CC && CC.isSessionLive && CC.renderFrame.hasView && 0 !== (sC(CC) & AC.ce.FreeCam) ? CC.renderFrame.cameraPosition : null
+           return null !== kk && void 0 !== kk && kk.isSessionLive && kk.renderFrame.hasView && 0 !== (Wk(kk) & Kk.Ed.FreeCam) ? kk.renderFrame.cameraPosition : null
```

#### 135. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1010` → after: `L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1010) · [Before (L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1010)

```diff
-     var DC = ZC(39008);
+     var Yk = Ik(39190);
```

#### 136. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1017-L1024` → after: `L1017-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1017-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1017-L1024) · [Before (L1017-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1017-L1024)

```diff
-       const zC = 0 !== (AC.w.playerFlags(CC.api.apiView, 0) & AC.ce.FreeCam);
-       zC !== jC && (jC = zC, (0, DC.e)(zC))
-     }
-     var UC = ZC(326),
-       BC = ZC(36897),
-       OC = ZC(1872);
-     var kC = ZC(40845),
-       VC = ZC(40479);
+       const Fk = 0 !== (Kk.y.playerFlags(kk.api.apiView, 0) & Kk.Ed.FreeCam);
+       Fk !== Ak && (Ak = Fk, (0, Yk.c)(Fk))
+     }
+     var hk = Ik(337),
+       rk = Ik(37079),
+       Dk = Ik(1905);
+     var Mk = Ik(41037),
+       kF = Ik(40649);
```

#### 137. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1035` → after: `L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1035) · [Before (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1035)

```diff
-         label: null !== (zC = (0, kC.c)(CC, "interactionPrompt")) && void 0 !== zC ? zC : null
+         label: null !== (Fk = (0, Mk.c)(kk, "interactionPrompt")) && void 0 !== Fk ? Fk : null
```

#### 138. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1039-L1040` → after: `L1039-L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1039-L1040) · [Before (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1039-L1040)

```diff
-       [AC.Gc.Open, {
-         label: oC.h.open
+       [Kk.pc.Open, {
+         label: ak.g.open
```

#### 139. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1042-L1043` → after: `L1042-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043)

```diff
-       [AC.Gc.Close, {
-         label: oC.h.close
+       [Kk.pc.Close, {
+         label: ak.g.close
```

#### 140. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1045-L1046` → after: `L1045-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1045-L1046) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1045-L1046)

```diff
-       [AC.Gc.Milk, {
-         label: oC.h.milk
+       [Kk.pc.Milk, {
+         label: ak.g.milk
```

#### 141. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1048-L1049` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1049) · [Before (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1048-L1049)

```diff
-       [AC.Gc.Shear, {
-         label: oC.h.shear
+       [Kk.pc.Shear, {
+         label: ak.g.shear
```

#### 142. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1051-L1052` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1051-L1052) · [Before (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1051-L1052)

```diff
-       [AC.Gc.Tame, {
-         label: oC.h.tame
+       [Kk.pc.Tame, {
+         label: ak.g.tame
```

#### 143. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1054-L1055` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1054-L1055) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1054-L1055)

```diff
-       [AC.Gc.Feed, {
-         label: oC.h.feed
+       [Kk.pc.Feed, {
+         label: ak.g.feed
```

#### 144. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1057-L1058` → after: `L1057-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1057-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1057-L1058) · [Before (L1057-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1057-L1058)

```diff
-       [AC.Gc.Ride, {
-         label: oC.h.ride
+       [Kk.pc.Ride, {
+         label: ak.g.ride
```

#### 145. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1063` → after: `L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1063) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1063)

```diff
-         this.target = Cz, this.SF = AC.rd, this.optionName = null, this.pickaxe = new oC.d
+         this.target = FF, this.iL = Kk._c, this.optionName = null, this.pickaxe = new ak.c
```

#### 146. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1067-L1069` → after: `L1067-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1067-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1067-L1069) · [Before (L1067-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1067-L1069)

```diff
-         const ZC = AC.w.targetBlockId(CC.api.apiView, 0);
-         ZC !== this.SF && (this.SF = ZC, this.optionName = ZC === AC.rd ? null : `${CC.tables.getMetaInfo(ZC).rootName}CrosshairText`);
-         const QC = null === this.optionName ? null : null !== (zC = CC.tables.getClientOption(this.optionName)) && void 0 !== zC ? zC : null;
+         const Ik = Kk.y.targetBlockId(kk.api.apiView, 0);
+         Ik !== this.iL && (this.iL = Ik, this.optionName = Ik === Kk._c ? null : `${kk.tables.getMetaInfo(Ik).rootName}CrosshairText`);
+         const Xk = null === this.optionName ? null : null !== (Fk = kk.tables.getClientOption(this.optionName)) && void 0 !== Fk ? Fk : null;
```

#### 147. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1072` → after: `L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1072) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1072)

```diff
-           if (0 === (AC.w.playerFlags(CC.api.apiView, 0) & AC.ce.Breaking) || zC === AC.rd || 0 === zC) return null;
+           if (0 === (Kk.y.playerFlags(kk.api.apiView, 0) & Kk.Ed.Breaking) || Fk === Kk._c || 0 === Fk) return null;
```

#### 148. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1078-L1080` → after: `L1078-L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1078-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1078-L1080) · [Before (L1078-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1078-L1080)

```diff
-             fC = null === (ZC = CC.items.vq()) || void 0 === ZC ? void 0 : ZC.name,
-             oC = null !== (QC = bC.getItemStat(nC, "harvestLevel")) && void 0 !== QC ? QC : 0;
-           return (0, UC.pc)({
+             lk = null === (Ik = kk.items.eq()) || void 0 === Ik ? void 0 : Ik.name,
+             ak = null !== (Xk = ik.getItemStat(yk, "harvestLevel")) && void 0 !== Xk ? Xk : 0;
+           return (0, hk.Ic)({
```

#### 149. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1086)

```diff
-           }) && null !== (wC = BC.n[oC]) && void 0 !== wC ? wC : null
+           }) && null !== (Tk = rk.n[ak]) && void 0 !== Tk ? Tk : null
```

#### 150. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1091-L1093` → after: `L1091-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1091-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1091-L1093) · [Before (L1091-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1091-L1093)

```diff
-           return ZC === AC.Gc.Entity ? Zz(CC.promptEntity) : ZC === AC.Gc.TameWith ? {
-             label: (0, oC.s)(CC.tables.nameOfId(CC.interactIcon))
-           } : null !== (zC = Qz.get(ZC)) && void 0 !== zC ? zC : null
+           return Ik === Kk.pc.Entity ? XF(kk.promptEntity) : Ik === Kk.pc.TameWith ? {
+             label: (0, ak.x)(kk.tables.nameOfId(kk.interactIcon))
+           } : null !== (Fk = TF.get(Ik)) && void 0 !== Fk ? Fk : null
```

#### 151. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1095` → after: `L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1095) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1095)

```diff
-         return this.target = (0, OC.n)(this.target, {
+         return this.target = (0, Dk.q)(this.target, {
```

#### 152. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1106` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1106) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1106)

```diff
-         return null !== (CC = null === (zC = bz) || void 0 === zC ? void 0 : zC.target) && void 0 !== CC ? CC : Cz
+         return null !== (kk = null === (Fk = yF) || void 0 === Fk ? void 0 : Fk.target) && void 0 !== kk ? kk : FF
```

#### 153. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1111` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1111) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1111)

```diff
-         const ZC = (0, MC.k)((ZC => {
+         const Ik = (0, jk.g)((Ik => {
```

#### 154. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1114)

```diff
-           const wC = (0, bC.r)((() => {
+           const Tk = (0, ik.y)((() => {
```

#### 155. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1130-L1135` → after: `L1130-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1130-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1130-L1135) · [Before (L1130-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1130-L1135)

```diff
-         health: oC.n,
-         aura: oC.j,
-         hotbar: VC.e.states.hotbar,
-         heldItemAim: VC.e.states.heldItemAim,
-         crouching: (0, MC.e)((CC => function(CC) {
-           const zC = () => 0 !== (AC.w.playerFlags(CC.apiView, 0) & AC.ce.Crouching);
+         health: ak.t,
+         aura: ak.k,
+         hotbar: kF.c.states.hotbar,
+         heldItemAim: kF.c.states.heldItemAim,
+         crouching: (0, jk.b)((kk => function(kk) {
+           const Fk = () => 0 !== (Kk.y.playerFlags(kk.apiView, 0) & Kk.Ed.Crouching);
```

#### 156. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1140` → after: `L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1140) · [Before (L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1140)

```diff
-               return (0, bC.p)((() => {
+               return (0, ik.u)((() => {
```

#### 157. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1146-L1151` → after: `L1146-L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1146-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1146-L1151) · [Before (L1146-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1146-L1151)

```diff
-         }(CC.api).current), !1, (CC => (0, bC.p)(CC))),
-         flight: (0, MC.e)((CC => () => function(CC) {
-           const zC = AC.w.playerFlags(CC.apiView, 0);
-           return (0, oC.m)(0 !== (zC & AC.ce.CanFly), 0 !== (zC & AC.ce.Flying))
-         }(CC.api)), (0, oC.m)(!1, !1), (CC => (0, bC.p)(CC))),
-         gliderBoostFuel: (0, MC.e)((CC => () => AC.w.gliderBoostFuel(CC.api.apiView, 0)), 0, (CC => (0, bC.p)(CC))),
+         }(kk.api).current), !1, (kk => (0, ik.u)(kk))),
+         flight: (0, jk.b)((kk => () => function(kk) {
+           const Fk = Kk.y.playerFlags(kk.apiView, 0);
+           return (0, ak.s)(0 !== (Fk & Kk.Ed.CanFly), 0 !== (Fk & Kk.Ed.Flying))
+         }(kk.api)), (0, ak.s)(!1, !1), (kk => (0, ik.u)(kk))),
+         gliderBoostFuel: (0, jk.b)((kk => () => Kk.y.gliderBoostFuel(kk.api.apiView, 0)), 0, (kk => (0, ik.u)(kk))),
```

#### 158. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1155-L1158` → after: `L1155-L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1155-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1155-L1158) · [Before (L1155-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1155-L1158)

```diff
-         hotbarSlotRequested: VC.e.events.hotbarSlotRequested,
-         hotbarScrolled: VC.e.events.hotbarScrolled,
-         numberKeyPressed: VC.e.events.numberKeyPressed,
-         shotDamageToShow: (0, oC.r)((CC => !0 === (0, kC.c)(CC, "showDamageAmounts")))
+         hotbarSlotRequested: kF.c.events.hotbarSlotRequested,
+         hotbarScrolled: kF.c.events.hotbarScrolled,
+         numberKeyPressed: kF.c.events.numberKeyPressed,
+         shotDamageToShow: (0, ak.w)((kk => !0 === (0, Mk.c)(kk, "showDamageAmounts")))
```

#### 159. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1161` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1161) · [Before (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1161)

```diff
-         selectHotbarSlot: VC.e.commands.selectHotbarSlot,
+         selectHotbarSlot: kF.c.commands.selectHotbarSlot,
```

#### 160. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1171-L1172` → after: `L1171-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1171-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1171-L1172) · [Before (L1171-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1171-L1172)

```diff
-             bC = null === QC || void 0 === QC || null === (CC = QC.items.vq()) || void 0 === CC || null === (zC = CC.attributes) || void 0 === zC || null === (ZC = zC.customAttributes) || void 0 === ZC ? void 0 : ZC.enchantments;
-           return fz = null !== QC && null !== bC && void 0 !== bC && bC.Momentum ? 0 !== (AC.w.playerFlags(QC.api.apiView, 0) & AC.ce.Breaking) ? Math.max(0, AC.w.momentumFrac(QC.api.apiView, 0)) : Math.max(0, fz - (wC - oz) / 1500) : 0, oz = wC, fz
+             ik = null === Xk || void 0 === Xk || null === (kk = Xk.items.eq()) || void 0 === kk || null === (Fk = kk.attributes) || void 0 === Fk || null === (Ik = Fk.customAttributes) || void 0 === Ik ? void 0 : Ik.enchantments;
+           return aF = null !== Xk && null !== ik && void 0 !== ik && ik.Momentum ? 0 !== (Kk.y.playerFlags(Xk.api.apiView, 0) & Kk.Ed.Breaking) ? Math.max(0, Kk.y.momentumFrac(Xk.api.apiView, 0)) : Math.max(0, aF - (Tk - qF) / 1500) : 0, qF = Tk, aF
```

#### 161. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1175` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1175) · [Before (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1175)

```diff
-     var Mz = ZC(40417);
+     var eF = Ik(40592);
```

#### 162. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1179` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1179) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1179)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.LobbyManage, CC)
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.LobbyManage, kk)
```

#### 163. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1182-L1187` → after: `L1182-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1182-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1182-L1187) · [Before (L1182-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1182-L1187)

```diff
-     var Sz = ZC(1183),
-       pz = ZC(36375),
-       Pz = ZC(8801),
-       Gz = ZC(1557),
-       Rz = ZC(2348),
-       Az = ZC(4739);
+     var HF = Ik(1231),
+       JF = Ik(36498),
+       xF = Ik(8778),
+       PF = Ik(1580),
+       KF = Ik(2331),
+       QF = Ik(4801);
```

#### 164. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1195` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1195) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1195)

```diff
-       "inGame" !== uC.b.get("gameState") || (0, Gz.w)() || qC.o.bp("ctrlCrouchWithoutFullscreen")
+       "inGame" !== Nk.d.get("gameState") || (0, PF.s)() || qk.g.GL("ctrlCrouchWithoutFullscreen")
```

#### 165. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1201` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1201) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1201)

```diff
-             iz && (iz = !1, qC.o.bp("requestEmoteWheelHoldOpen"))
+             SF && (SF = !1, qk.g.GL("requestEmoteWheelHoldOpen"))
```

#### 166. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1205)

```diff
-           qC.o.bp("toggleFullCoordinateOverlay")
+           qk.g.GL("toggleFullCoordinateOverlay")
```

#### 167. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1208)

```diff
-           (0, pz.c)() || qC.o.bp("YKeyPressed")
+           (0, JF.c)() || qk.g.GL("YKeyPressed")
```

#### 168. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1211` → after: `L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1211) · [Before (L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1211)

```diff
-           (0, pz.c)() || qC.o.bp("XKeyPressed")
+           (0, JF.c)() || qk.g.GL("XKeyPressed")
```

#### 169. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1215-L1216` → after: `L1215-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1215-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1215-L1216) · [Before (L1215-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1215-L1216)

```diff
-           qC.o.bp("mouseState", {
-             pF: Sz.e.DownFirePrimary,
+           qk.g.GL("mouseState", {
+             yL: HF.d.DownFirePrimary,
```

#### 170. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1221-L1222` → after: `L1221-L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1221-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1221-L1222) · [Before (L1221-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1221-L1222)

```diff
-           qC.o.bp("mouseState", {
-             pF: Sz.e.DownFireSecondary,
+           qk.g.GL("mouseState", {
+             yL: HF.d.DownFireSecondary,
```

#### 171. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1227-L1228` → after: `L1227-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1227-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1227-L1228) · [Before (L1227-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1227-L1228)

```diff
-           qC.o.bp("mouseState", {
-             pF: Sz.e.TouchDownLong,
+           qk.g.GL("mouseState", {
+             yL: HF.d.TouchDownLong,
```

#### 172. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1235` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1235) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1235)

```diff
-           Jz(!1), iz ? (iz = !1, (0, Pz.d)() || qC.o.bp("requestEmoteWheelHoldOpen")) : qC.o.bp("requestEmoteWheelHoldRelease")
+           VF(!1), SF ? (SF = !1, (0, xF.e)() || qk.g.GL("requestEmoteWheelHoldOpen")) : qk.g.GL("requestEmoteWheelHoldRelease")
```

#### 173. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1239-L1240` → after: `L1239-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1239-L1240) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1239-L1240)

```diff
-           qC.o.bp("mouseState", {
-             pF: Sz.e.UpFirePrimary,
+           qk.g.GL("mouseState", {
+             yL: HF.d.UpFirePrimary,
```

#### 174. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1245-L1246` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1245-L1246) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1245-L1246)

```diff
-           qC.o.bp("mouseState", {
-             pF: Sz.e.UpFireSecondary,
+           qk.g.GL("mouseState", {
+             yL: HF.d.UpFireSecondary,
```

#### 175. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1251-L1252` → after: `L1251-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1251-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1251-L1252) · [Before (L1251-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1251-L1252)

```diff
-           qC.o.bp("mouseState", {
-             pF: Sz.e.UpFirePrimary,
+           qk.g.GL("mouseState", {
+             yL: HF.d.UpFirePrimary,
```

#### 176. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1260)

```diff
-       hz || (hz = !0, (0, Az.k)((CC => {
+       EF || (EF = !0, (0, QF.g)((kk => {
```

#### 177. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1262)

```diff
-         const zC = (0, Az.g)(CC) ? "primary-fire" : CC.action;
+         const Fk = (0, QF.f)(kk) ? "primary-fire" : kk.action;
```

#### 178. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1265` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1265) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1265)

```diff
-           if (0 === (CC.flags & Rz.c.Synthetic)) {
+           if (0 === (kk.flags & KF.e.Synthetic)) {
```

#### 179. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1272-L1277` → after: `L1272-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1272-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1272-L1277) · [Before (L1272-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1272-L1277)

```diff
-     var Yz = ZC(310),
-       dz = ZC(77),
-       mz = ZC(38),
-       Hz = ZC(40717),
-       Ez = ZC(1275),
-       lz = ZC(38868);
+     var nF = Ik(318),
+       GF = Ik(95),
+       pF = Ik(41),
+       uF = Ik(40891),
+       bF = Ik(1301),
+       RF = Ik(39020);
```

#### 180. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1282` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1282) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1282)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.CodeCollab, (0, mC.m)(CC), (0, lz.d)(CC))
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.CodeCollab, (0, pk.q)(kk), (0, RF.f)(kk))
```

#### 181. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1285` → after: `L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1285) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1285)

```diff
-     var uz = ZC(38944);
+     var NF = Ik(39109);
```

#### 182. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1291` → after: `L1291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1291) · [Before (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1291)

```diff
-       return "inGame" === uC.b.get("gameState") && !(0, pz.c)()
+       return "inGame" === Nk.d.get("gameState") && !(0, JF.c)()
```

#### 183. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1295` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1295) · [Before (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1295)

```diff
-           (0, Gz.D)(CC, "inventory", (0, Mz.q)())
+           (0, PF.C)(kk, "inventory", (0, eF.n)())
```

#### 184. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1298)

```diff
-           rz && az() && (0, Gz.A)(CC, Yz.o.SHOP, !rz.shopIsEmpty(RC.e.get("shopInfo")))
+           cF && BF() && (0, PF.z)(kk, nF.r.SHOP, !cF.shopIsEmpty(Pk.e.get("shopInfo")))
```

#### 185. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1301)

```diff
-           az() && (0, Gz.A)(CC, Yz.o.LOBBY_LEADERBOARD, (0, uz.d)({
+           BF() && (0, PF.z)(kk, nF.r.LOBBY_LEADERBOARD, (0, NF.b)({
```

#### 186. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1309)

```diff
-           ZC ? (0, Gz.E)(CC, !0, ZC) : (0, Gz.D)(CC, "retentionFeatures", !(!RC.e.get("_tasks") && !RC.e.get("_availableLeaderboards")))
+           Ik ? (0, PF.F)(kk, !0, Ik) : (0, PF.C)(kk, "retentionFeatures", !(!Pk.e.get("_tasks") && !Pk.e.get("_availableLeaderboards")))
```

#### 187. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1312` → after: `L1312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1312) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1312)

```diff
-           (0, Gz.D)(CC, "inviteLink", dz.featureFlags.canUseInviteLinks)
+           (0, PF.C)(kk, "inviteLink", GF.featureFlags.canUseInviteLinks)
```

#### 188. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1319-L1322` → after: `L1319-L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1319-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1319-L1322) · [Before (L1319-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1319-L1322)

```diff
-               wC = QC ? QC.yG(QC.localId) : null,
-               bC = null !== (zC = null === wC || void 0 === wC ? void 0 : wC.map((CC => Math.floor(CC)))) && void 0 !== zC ? zC : null;
-             (0, Gz.E)(CC, null !== bC && (0, lz.b)((0, Ez.d)()), (() => {
-               qC.o.bp("EditLobbyCode", bC)
+               Tk = Xk ? Xk.OJ(Xk.localId) : null,
+               ik = null !== (Fk = null === Tk || void 0 === Tk ? void 0 : Tk.map((kk => Math.floor(kk)))) && void 0 !== Fk ? Fk : null;
+             (0, PF.F)(kk, null !== ik && (0, RF.d)((0, bF.d)()), (() => {
+               qk.g.GL("EditLobbyCode", ik)
```

#### 189. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1327)

```diff
-           qC.o.bp("showUi", !1)
+           qk.g.GL("showUi", !1)
```

#### 190. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1332)

```diff
-           qC.o.bp("showUi", !0)
+           qk.g.GL("showUi", !0)
```

#### 191. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1337` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1337) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1337)

```diff
-       sz || (sz = !0, ZC.e(157).then((() => ZC(60264))).then((CC => {
+       WF || (WF = !0, Ik.e(157).then((() => Ik(60599))).then((kk => {
```

#### 192. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1341-L1343` → after: `L1341-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1341-L1343) · [Before (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1341-L1343)

```diff
-       })), (0, Hz.A)((CC => {
-         CC || !(0, Hz.g)() || (0, dz.isMobile)() || !mz.i.getItem("disableFullscreen") || (0, Gz.s)() || uC.b.set({
-           openEverythingMenuName: Yz.o.SETTINGS
+       })), (0, uF.z)((kk => {
+         kk || !(0, uF.h)() || (0, GF.isMobile)() || !pF.j.getItem("disableFullscreen") || (0, PF.p)() || Nk.d.set({
+           openEverythingMenuName: nF.r.SETTINGS
```

#### 193. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1345)

```diff
-       })), (0, Az.k)((CC => {
+       })), (0, QF.g)((kk => {
```

#### 194. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1367-L1369` → after: `L1367-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1367-L1369) · [Before (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1367-L1369)

```diff
-     var yz = ZC(38859),
-       Lz = ZC(38848),
-       Uz = ZC(38841);
+     var gF = Ik(39011),
+       mF = Ik(38997),
+       hF = Ik(38992);
```

#### 195. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1373)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.CompleteTask, (0, mC.o)(CC))
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.CompleteTask, (0, pk.s)(kk))
```

#### 196. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1381-L1383` → after: `L1381-L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1381-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1381-L1383) · [Before (L1381-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1381-L1383)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.GeneralCookieSet, (0, mC.r)({
-           vn: ZC,
-           en: QC
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.GeneralCookieSet, (0, pk.x)({
+           vy: Ik,
+           Ey: Xk
```

#### 197. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1390` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1390) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1390)

```diff
-           hF: QC
+           HL: Xk
```

#### 198. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1392-L1393` → after: `L1392-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1392-L1393) · [Before (L1392-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1392-L1393)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.UiRequestResp, (0, mC.S)({
-           Lq: ZC,
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.UiRequestResp, (0, pk.Z)({
+           Rq: Ik,
```

#### 199. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1395)

```diff
-           Bq: 5
+           Cq: 5
```

#### 200. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1402` → after: `L1402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1402) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1402)

```diff
-           hF: QC
+           HL: Xk
```

#### 201. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1404` → after: `L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1404) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1404)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.UiRequestResponded, (0, mC.Q)({
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.UiRequestResponded, (0, pk.X)({
```

#### 202. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1406` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1406) · [Before (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1406)

```diff
-           hF: QC
+           HL: Xk
```

#### 203. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1416` → after: `L1416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1416) · [Before (L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1416)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.LeaderboardRequest, {
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.LeaderboardRequest, {
```

#### 204. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1424` → after: `L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1424) · [Before (L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1424)

```diff
-     const kz = GC.f.tp / 2,
+     const MF = xk.f.CH / 2,
```

#### 205. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1451)

```diff
-           const NC = ZC.SF(bC, oC, WC);
+           const Zk = Ik.iL(ik, ak, tk);
```

#### 206. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1458)

```diff
-         return null !== CC && 0 !== (AC.w.playerFlags(CC.api.apiView, 0) & AC.ce.DropAhead)
+         return null !== kk && 0 !== (Kk.y.playerFlags(kk.api.apiView, 0) & Kk.Ed.DropAhead)
```

#### 207. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1461-L1464` → after: `L1461-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1461-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1461-L1464) · [Before (L1461-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1461-L1464)

```diff
-     var QZ = ZC(36815),
-       wZ = ZC(38923),
-       bZ = ZC(1307),
-       nZ = ZC(40493);
+     var TI = Ik(36990),
+       iI = Ik(39087),
+       yI = Ik(1324),
+       lI = Ik(40661);
```

#### 208. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1486)

```diff
-       const nC = () => (ZC = (0, OC.n)(ZC, CC()), ZC);
+       const yk = () => (Ik = (0, Dk.q)(Ik, kk()), Ik);
```

#### 209. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1490)

```diff
-           const zC = (0, gC.c)((zC => {
+           const Fk = (0, ek.d)((Fk => {
```

#### 210. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1494-L1496` → after: `L1494-L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1494-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1494-L1496) · [Before (L1494-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1494-L1496)

```diff
-           let ZC = (0, MC.g)();
-           const fC = (0, bC.r)((() => {
-             const zC = (0, MC.g)();
+           let Ik = (0, jk.d)();
+           const lk = (0, ik.y)((() => {
+             const Fk = (0, jk.d)();
```

#### 211. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1512-L1514` → after: `L1512-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1512-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1512-L1514) · [Before (L1512-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1512-L1514)

```diff
-               name: null !== (ZC = gC.f.getName(bC)) && void 0 !== ZC ? ZC : null,
-               ranks: null !== (QC = gC.f.getSetting(bC, "ranks")) && void 0 !== QC ? QC : FZ,
-               cosmetics: null !== (wC = (0, gC.j)(bC)) && void 0 !== wC ? wC : null
+               name: null !== (Ik = ek.f.getName(ik)) && void 0 !== Ik ? Ik : null,
+               ranks: null !== (Xk = ek.f.getSetting(ik, "ranks")) && void 0 !== Xk ? Xk : tI,
+               cosmetics: null !== (Tk = (0, ek.g)(ik)) && void 0 !== Tk ? Tk : null
```

#### 212. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1520` → after: `L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1520) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1520)

```diff
-             localId: (0, MC.g)()
+             localId: (0, jk.d)()
```

#### 213. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1531-L1533` → after: `L1531-L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1531-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1531-L1533) · [Before (L1531-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1531-L1533)

```diff
-               colour: null !== (zC = gC.f.getSetting(wC, "colorInLobbyLeaderboard")) && void 0 !== zC ? zC : null,
-               values: null !== (ZC = gC.f.getSetting(wC, "lobbyLeaderboardValues")) && void 0 !== ZC ? ZC : null,
-               tags: null !== (QC = gC.f.getSetting(wC, "lobbyLeaderboardTags")) && void 0 !== QC ? QC : null
+               colour: null !== (Fk = ek.f.getSetting(Tk, "colorInLobbyLeaderboard")) && void 0 !== Fk ? Fk : null,
+               values: null !== (Ik = ek.f.getSetting(Tk, "lobbyLeaderboardValues")) && void 0 !== Ik ? Ik : null,
+               tags: null !== (Xk = ek.f.getSetting(Tk, "lobbyLeaderboardTags")) && void 0 !== Xk ? Xk : null
```

#### 214. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1551)

```diff
-           watch: CC => (0, gC.c)((zC => {
+           watch: kk => (0, ek.d)((Fk => {
```

#### 215. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1553` → after: `L1553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1553) · [Before (L1553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1553)

```diff
-             const ZC = (0, MC.g)();
+             const Ik = (0, jk.d)();
```

#### 216. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1556-L1558` → after: `L1556-L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1556-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1556-L1558) · [Before (L1556-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1556-L1558)

```diff
-                 xQ: zC,
-                 JQ: QC,
-                 IQ: wC
+                 sX: Fk,
+                 VX: Xk,
+                 zX: Tk
```

#### 217. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1562-L1563` → after: `L1562-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1562-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1562-L1563) · [Before (L1562-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1562-L1563)

```diff
-                 JQ: QC,
-                 IQ: wC
+                 VX: Xk,
+                 zX: Tk
```

#### 218. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1569-L1572` → after: `L1569-L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1569-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1569-L1572) · [Before (L1569-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1569-L1572)

```diff
-     var gZ = ZC(2909),
-       SZ = ZC(1645),
-       pZ = ZC(625),
-       PZ = ZC(40756);
+     var wI = Ik(2837),
+       HI = Ik(1665),
+       JI = Ik(667),
+       xI = Ik(40935);
```

#### 219. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1578` → after: `L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1578) · [Before (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1578)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.ShopMenuChanged, (0, mC.J)(CC))
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.ShopMenuChanged, (0, pk.R)(kk))
```

#### 220. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1587` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1587) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1587)

```diff
-         null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.ItemBought, {
+         null === (Fk = (0, yk.k)()) || void 0 === Fk || Fk.send(pk.e.ItemBought, {
```

#### 221. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1596-L1597` → after: `L1596-L1597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1596-L1597) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1596-L1597)

```diff
-     var JZ = ZC(4752);
-     const IZ = Rz.v.LookFrozen | Rz.v.ClicksSuppressed;
+     var VI = Ik(4814);
+     const zI = KF.A.LookFrozen | KF.A.ClicksSuppressed;
```

#### 222. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1601-L1604` → after: `L1601-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1601-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1601-L1604) · [Before (L1601-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1601-L1604)

```diff
-       null !== (ZC = (0, nC.k)()) && void 0 !== ZC && ZC.send(CC, zC) || console.warn(`[bloxd-wasm-client] message ${CC} not sent: no live game or the core's command ring is full`)
-     }(0, SC.l)(dC.jb, (CC => {
-       const zC = (0, HC.h)(dC.jb, CC);
-       void 0 !== zC && qC.o.bp("setDiscordReportKey", zC)
+       null !== (Ik = (0, yk.k)()) && void 0 !== Ik && Ik.send(kk, Fk) || console.warn(`[bloxd-wasm-client] message ${kk} not sent: no live game or the core's command ring is full`)
+     }(0, wk.l)(Gk.db, (kk => {
+       const Fk = (0, uk.e)(Gk.db, kk);
+       void 0 !== Fk && qk.g.GL("setDiscordReportKey", Fk)
```

#### 223. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1608-L1609` → after: `L1608-L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1608-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1608-L1609) · [Before (L1608-L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1608-L1609)

```diff
-         iZ(mC.b.IgnoreUser, (0, mC.s)({
-           Cn: CC
+         SI(pk.e.IgnoreUser, (0, pk.z)({
+           iy: kk
```

#### 224. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1616)

```diff
-           Zq: QC,
+           Ya: Xk,
```

#### 225. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1619-L1623` → after: `L1619-L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1619-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1619-L1623) · [Before (L1619-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1619-L1623)

```diff
-         iZ(mC.b.UserReport, (0, mC.cb)({
-           ZF: zC,
-           QF: ZC,
-           Zq: QC,
-           Qq: wC
+         SI(pk.e.UserReport, (0, pk.lb)({
+           dq: Fk,
+           Yq: Ik,
+           Ya: Xk,
+           Aa: Tk
```

#### 226. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1629)

```diff
-           Zq: ZC,
+           Ya: Ik,
```

#### 227. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1632-L1636` → after: `L1632-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1632-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1632-L1636) · [Before (L1632-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1632-L1636)

```diff
-         iZ(mC.b.UserReport, (0, mC.cb)({
-           ZF: "",
-           QF: zC,
-           Zq: ZC,
-           Qq: QC
+         SI(pk.e.UserReport, (0, pk.lb)({
+           dq: "",
+           Yq: Fk,
+           Ya: Ik,
+           Aa: Xk
```

#### 228. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1640)

```diff
-         iZ(mC.b.ReqDiscordReportKey, (0, mC.E)(CC))
+         SI(pk.e.ReqDiscordReportKey, (0, pk.L)(kk))
```

#### 229. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1645` → after: `L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1645) · [Before (L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1645)

```diff
-           Zq: ZC,
+           Ya: Ik,
```

#### 230. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1648-L1653` → after: `L1648-L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1648-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1648-L1653) · [Before (L1648-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1648-L1653)

```diff
-         "customGame" === zC ? iZ(mC.b.CustomGameReport, (0, mC.q)({
-           Zq: ZC,
-           Qq: QC
-         })) : iZ(mC.b.LobbyReport, (0, mC.w)({
-           Zq: ZC,
-           Qq: QC
+         "customGame" === Fk ? SI(pk.e.CustomGameReport, (0, pk.t)({
+           Ya: Ik,
+           Aa: Xk
+         })) : SI(pk.e.LobbyReport, (0, pk.B)({
+           Ya: Ik,
+           Aa: Xk
```

#### 231. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1657)

```diff
-         iZ(mC.b.UpdateMyCosmetic, (0, mC.$)(CC))
+         SI(pk.e.UpdateMyCosmetic, (0, pk.hb)(kk))
```

#### 232. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1660)

```diff
-         !CC || xz ? (0, JZ.e)(IZ, CC ? IZ : 0) : qC.o.bp("requestEmoteWheelHoldRelease")
+         !kk || sF ? (0, VI.g)(zI, kk ? zI : 0) : qk.g.GL("requestEmoteWheelHoldRelease")
```

#### 233. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1663-L1665` → after: `L1663-L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1663-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1663-L1665) · [Before (L1663-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1663-L1665)

```diff
-     var eZ = ZC(40854),
-       hZ = ZC(9194),
-       KZ = ZC(39439);
+     var vI = Ik(41045),
+       EI = Ik(9183),
+       OI = Ik(39616);
```

#### 234. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1683)

```diff
-           return (0, KZ.f)(((CC, zC, ZC) => (oC = bC.getBlockId(CC, zC, ZC), 0 !== oC)), wC.cameraPosition, (0, KZ.j)((CC => AC.w.viewProj(fC.apiView, 0, CC)), zC, ZC, YZ), KZ.b, dZ, mZ) ? {
+           return (0, OI.c)(((kk, Fk, Ik) => (ak = ik.getBlockId(kk, Fk, Ik), 0 !== ak)), Tk.cameraPosition, (0, OI.e)((kk => Kk.y.viewProj(lk.apiView, 0, kk)), Fk, Ik, nI), OI.b, GI, pI) ? {
```

#### 235. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1686` → after: `L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1686) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1686)

```diff
-             name: (0, hZ.e)(oC)
+             name: (0, EI.f)(ak)
```

#### 236. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1696-L1703` → after: `L1696-L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1696-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1696-L1703) · [Before (L1696-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1696-L1703)

```diff
-     var lZ = ZC(1851),
-       XZ = ZC(40748),
-       cZ = ZC(40858),
-       uZ = ZC(4423),
-       rZ = ZC(4393),
-       sZ = ZC(40866),
-       TZ = ZC(3276),
-       aZ = ZC(3282);
+     var RI = Ik(1886),
+       UI = Ik(40923),
+       CI = Ik(41047),
+       NI = Ik(4489),
+       cI = Ik(4458),
+       WI = Ik(41050),
+       fI = Ik(3229),
+       BI = Ik(3237);
```

#### 237. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1708-L1709` → after: `L1708-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1708-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1708-L1709) · [Before (L1708-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1708-L1709)

```diff
-       const zC = CC.startsWith(aZ.m),
-         [ZC, QC = ZC, wC = ZC] = (zC ? CC.slice(aZ.m.length) : CC).split(aZ.i);
+       const Fk = kk.startsWith(BI.k),
+         [Ik, Xk = Ik, Tk = Ik] = (Fk ? kk.slice(BI.k.length) : kk).split(BI.j);
```

#### 238. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1719)

```diff
-       const zC = null === tZ ? void 0 : (0, TZ.b)(CC),
+       const Fk = null === dI ? void 0 : (0, fI.e)(kk),
```

#### 239. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1723-L1727` → after: `L1723-L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1723-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1723-L1727) · [Before (L1723-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1723-L1727)

```diff
-     var LZ = ZC(3273),
-       UZ = ZC(4382),
-       BZ = ZC(4414),
-       OZ = ZC(40779),
-       kZ = ZC(40875);
+     var mI = Ik(3223),
+       hI = Ik(4442),
+       rI = Ik(4486),
+       DI = Ik(40963),
+       MI = Ik(41057);
```

#### 240. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1737` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1737) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1737)

```diff
-       return bQ || (bQ = !0, (0, BZ.j)().then((CC => {
+       return yX || (yX = !0, (0, rI.i)().then((kk => {
```

#### 241. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1739)

```diff
-       }))), ZQ ??= Promise.all([(0, LZ.i)(), (DZ ??= ZC.e(1).then((() => ZC(60281))).then((CC => {
+       }))), XX ??= Promise.all([(0, mI.e)(), (YI ??= Ik.e(1).then((() => Ik(60615))).then((kk => {
```

#### 242. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1746-L1747` → after: `L1746-L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1746-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1746-L1747) · [Before (L1746-L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1746-L1747)

```diff
-           codes: (0, aZ.F)(zC, QC + 1),
-           pool: ZC.split(aZ.u).map(jZ)
+           codes: (0, BI.t)(Fk, Xk + 1),
+           pool: Ik.split(BI.o).map(AI)
```

#### 243. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1751` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1751) · [Before (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1751)

```diff
-       })), DZ), (0, kZ.e)(), ZC.e(198).then((() => ZC(34171)))]).then((CC => {
+       })), YI), (0, MI.f)(), Ik.e(198).then((() => Ik(34193)))]).then((kk => {
```

#### 244. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1761)

```diff
-       return null !== (zC = null === (ZC = (0, OZ.j)()) || void 0 === ZC ? void 0 : ZC.textureUrl(CC)) && void 0 !== zC ? zC : CQ.itemSpriteUrl(CC)
+       return null !== (Fk = null === (Ik = (0, DI.i)()) || void 0 === Ik ? void 0 : Ik.textureUrl(kk)) && void 0 !== Fk ? Fk : FX.itemSpriteUrl(kk)
```

#### 245. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1766)

```diff
-       return null !== (zC = null === (ZC = (0, OZ.j)()) || void 0 === ZC ? void 0 : ZC.textureUrl(CC)) && void 0 !== zC ? zC : CQ.blockTextureUrl(CC)
+       return null !== (Fk = null === (Ik = (0, DI.i)()) || void 0 === Ik ? void 0 : Ik.textureUrl(kk)) && void 0 !== Fk ? Fk : FX.blockTextureUrl(kk)
```

#### 246. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1771` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1771) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1771)

```diff
-       return null !== (zC = (0, LZ.e)(CC)) && void 0 !== zC ? zC : CC
+       return null !== (Fk = (0, mI.b)(kk)) && void 0 !== Fk ? Fk : kk
```

#### 247. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1776` → after: `L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1776) · [Before (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1776)

```diff
-       return null !== (ZC = null !== (QC = null !== (wC = oQ(CC)) && void 0 !== wC ? wC : null === zC || void 0 === zC ? void 0 : zC.rotated[CC]) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.animated[CC]) && void 0 !== ZC ? ZC : CQ.notFoundUrl()
+       return null !== (Ik = null !== (Xk = null !== (Tk = qX(kk)) && void 0 !== Tk ? Tk : null === Fk || void 0 === Fk ? void 0 : Fk.rotated[kk]) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.animated[kk]) && void 0 !== Ik ? Ik : FX.notFoundUrl()
```

#### 248. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1780)

```diff
-       return void 0 !== (0, TZ.b)(CC) ? CC : /^[1-9][0-9]*$/.test(CC) ? (0, TZ.c)(Number(CC)) : void 0
+       return void 0 !== (0, fI.e)(kk) ? kk : /^[1-9][0-9]*$/.test(kk) ? (0, fI.i)(Number(kk)) : void 0
```

#### 249. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1787-L1788` → after: `L1787-L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1787-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1787-L1788) · [Before (L1787-L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1787-L1788)

```diff
-         const zC = (0, LZ.e)(CC.slice(5));
-         return null !== (ZC = void 0 === zC ? null : fQ(zC)) && void 0 !== ZC ? ZC : CQ.notFoundUrl()
+         const Fk = (0, mI.b)(kk.slice(5));
+         return null !== (Ik = void 0 === Fk ? null : aX(Fk)) && void 0 !== Ik ? Ik : FX.notFoundUrl()
```

#### 250. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1790)

```diff
-       return null !== (zC = CQ.particleUrl(CC)) && void 0 !== zC ? zC : CQ.notFoundUrl()
+       return null !== (Fk = FX.particleUrl(kk)) && void 0 !== Fk ? Fk : FX.notFoundUrl()
```

#### 251. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1794)

```diff
-       return "StairsBlock" === CC ? CC : zC ? "SlabBlock" : "CubeBlock"
+       return "StairsBlock" === kk ? kk : Fk ? "SlabBlock" : "CubeBlock"
```

#### 252. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1805-L1806` → after: `L1805-L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1805-L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1805-L1806) · [Before (L1805-L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1805-L1806)

```diff
-           const nC = null !== (zC = WQ(QC)) && void 0 !== zC ? zC : QC,
-             fC = (0, BZ.e)(nC, wC, bC);
+           const yk = null !== (Fk = ZX(Xk)) && void 0 !== Fk ? Fk : Xk,
+             lk = (0, rI.d)(yk, Tk, ik);
```

#### 253. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1809` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1809) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1809)

```diff
-             qC = (0, TZ.b)(nC),
+             qk = (0, fI.e)(yk),
```

#### 254. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1813)

```diff
-             NC = WC ? await (QQ ??= ZC.e(204).then((() => ZC(34243))).then((CC => (wQ && (wQ = !1, (0, lZ.c)()), {
+             Zk = tk ? await (TX ??= Ik.e(204).then((() => Ik(34274))).then((kk => (iX && (iX = !1, (0, RI.c)()), {
```

#### 255. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1824-L1826` → after: `L1824-L1826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1824-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1824-L1826) · [Before (L1824-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1824-L1826)

```diff
-             gC = (0, OZ.h)(),
-             SC = 0 === gC ? nC : `${nC}#${gC}`;
-           return (await (0, UZ.b)()).drawBlockIconUrl(SC, wC, bC, (() => MC))
+             ek = (0, DI.e)(),
+             wk = 0 === ek ? yk : `${yk}#${ek}`;
+           return (await (0, hI.e)()).drawBlockIconUrl(wk, Tk, ik, (() => jk))
```

#### 256. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1833` → after: `L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1833) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1833)

```diff
-           if ((0, rZ.e)(CC)) return {
+           if ((0, cI.f)(kk)) return {
```

#### 257. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1835` → after: `L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1835) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1835)

```diff
-             url: null !== (ZC = null !== (wC = null === (bC = (0, OZ.j)()) || void 0 === bC ? void 0 : bC.textureUrl(CC)) && void 0 !== wC ? wC : CQ.ingameIconUrl(CC)) && void 0 !== ZC ? ZC : CQ.notFoundUrl()
+             url: null !== (Ik = null !== (Tk = null === (ik = (0, DI.i)()) || void 0 === ik ? void 0 : ik.textureUrl(kk)) && void 0 !== Tk ? Tk : FX.ingameIconUrl(kk)) && void 0 !== Ik ? Ik : FX.notFoundUrl()
```

#### 258. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1841-L1843` → after: `L1841-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1841-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1841-L1843) · [Before (L1841-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1841-L1843)

```diff
-           if (0 === (0, TZ.d)()) return (0, sZ.d)(), QC.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(CC);
-           const nC = null !== (zC = WQ(CC)) && void 0 !== zC ? zC : CC,
-             fC = (0, TZ.b)(nC),
+           if (0 === (0, fI.k)()) return (0, WI.c)(), Xk.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(kk);
+           const yk = null !== (Fk = ZX(kk)) && void 0 !== Fk ? Fk : kk,
+             lk = (0, fI.e)(yk),
```

#### 259. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1850` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1850) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1850)

```diff
-             return null !== (zC = fQ(qQ(CC))) && void 0 !== zC ? zC : CQ.notFoundUrl()
+             return null !== (Fk = aX(LX(kk))) && void 0 !== Fk ? Fk : FX.notFoundUrl()
```

#### 260. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1852-L1853` → after: `L1852-L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1852-L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1852-L1853) · [Before (L1852-L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1852-L1853)

```diff
-           if ((0, BZ.i)(nC) && ! function(CC) {
-               const zC = (0, OZ.j)();
+           if ((0, rI.e)(yk) && ! function(kk) {
+               const Fk = (0, DI.i)();
```

#### 261. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1863)

```diff
-           if (void 0 !== fC && "GrayscaleArmour" === zQ.itemTypeOf(fC) || Object.hasOwn(uZ.b, nC)) {
+           if (void 0 !== lk && "GrayscaleArmour" === IX.itemTypeOf(lk) || Object.hasOwn(NI.e, yk)) {
```

#### 262. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1865` → after: `L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1865) · [Before (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1865)

```diff
-             const zC = null !== (FC = (0, uZ.e)(CC)) && void 0 !== FC ? FC : (0, uZ.e)(nC);
+             const Fk = null !== (Lk = (0, NI.i)(kk)) && void 0 !== Lk ? Lk : (0, NI.i)(yk);
```

#### 263. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1878)

```diff
-           return void 0 !== WQ(CC) || (0, rZ.e)(CC) || CC.startsWith(rZ.b)
+           return void 0 !== ZX(kk) || (0, cI.f)(kk) || kk.startsWith(cI.b)
```

#### 264. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1884-L1885` → after: `L1884-L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1884-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1884-L1885) · [Before (L1884-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1884-L1885)

```diff
-     var pQ = ZC(590),
-       PQ = ZC(39446);
+     var JX = Ik(614),
+       xX = Ik(39619);
```

#### 265. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1897-L1898` → after: `L1897-L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1897-L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1897-L1898) · [Before (L1897-L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1897-L1898)

```diff
-           const CC = zC.yG(zC.localId);
-           return null !== CC && void 0 !== CC && CC.every(Number.isFinite) ? CC : null
+           const kk = Fk.OJ(Fk.localId);
+           return null !== kk && void 0 !== kk && kk.every(Number.isFinite) ? kk : null
```

#### 266. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1900)

```diff
-         chunkBlocks: CC => ZC.isLoaded(CC[0], CC[1], CC[2]) ? (CC, zC, QC) => ZC.SF(CC, zC, QC) : null,
+         chunkBlocks: kk => Ik.isLoaded(kk[0], kk[1], kk[2]) ? (kk, Fk, Xk) => Ik.iL(kk, Fk, Xk) : null,
```

#### 267. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1916-L1918` → after: `L1916-L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1916-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1916-L1918) · [Before (L1916-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1916-L1918)

```diff
-             if (null === bC || zC.isLocal(nC) || fC >>> AC.b !== AC.s.Lifeform) continue;
-             const oC = zC.yG(nC),
-               qC = pQ.i[fC & AC.f];
+             if (null === ik || Fk.isLocal(yk) || lk >>> Kk.d !== Kk.v.Lifeform) continue;
+             const ak = Fk.OJ(yk),
+               qk = JX.m[lk & Kk.h];
```

#### 268. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1921)

```diff
-               name: null !== (QC = CC.clientApi.getEntityName(bC)) && void 0 !== QC ? QC : null,
+               name: null !== (Xk = kk.clientApi.getEntityName(ik)) && void 0 !== Xk ? Xk : null,
```

#### 269. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1929` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1929) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1929)

```diff
-           for (let ZC = 0; ZC < zC.idStr.length; ZC++) null !== zC.idStr[ZC] && zC.kinds[ZC] >>> AC.b === AC.s.Item && CC++;
+           for (let Ik = 0; Ik < Fk.idStr.length; Ik++) null !== Fk.idStr[Ik] && Fk.kinds[Ik] >>> Kk.d === Kk.v.Item && kk++;
```

#### 270. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1935-L1936` → after: `L1935-L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1935-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1935-L1936) · [Before (L1935-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1935-L1936)

```diff
-         worldCodeAiChunk: CC => Promise.resolve((0, PQ.e)(GQ((0, nC.k)()), CC)),
-         worldCodeAiGameState: () => Promise.resolve((0, PQ.h)(GQ((0, nC.k)())))
+         worldCodeAiChunk: kk => Promise.resolve((0, xX.c)(PX((0, yk.k)()), kk)),
+         worldCodeAiGameState: () => Promise.resolve((0, xX.d)(PX((0, yk.k)())))
```

#### 271. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1945)

```diff
-             return null !== (zC = null === (ZC = CC.runtime()) || void 0 === ZC ? void 0 : ZC.currentViewer) && void 0 !== zC ? zC : null
+             return null !== (Fk = null === (Ik = kk.runtime()) || void 0 === Ik ? void 0 : Ik.currentViewer) && void 0 !== Fk ? Fk : null
```

#### 272. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1967` → after: `L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1967) · [Before (L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1967)

```diff
-             zC && ZC && zC.seek(Math.max(0, Math.min(ZC.totalTicks - 1, ZC.ZN + CC * WC.xd)))
+             Fk && Ik && Fk.seek(Math.max(0, Math.min(Ik.totalTicks - 1, Ik.Dt + kk * tk.zd)))
```

#### 273. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1973-L1974` → after: `L1973-L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1973-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1973-L1974) · [Before (L1973-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1973-L1974)

```diff
-                 ZC = null !== (CC = null === zC || void 0 === zC ? void 0 : zC.view) && void 0 !== CC ? CC : null;
-               return null === zC || null === ZC || ZC.state === WC.id.None ? (fC = null, null) : (fC = (0, OC.n)(fC, {
+                 Ik = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null;
+               return null === Fk || null === Ik || Ik.state === tk.kd.None ? (lk = null, null) : (lk = (0, Dk.q)(lk, {
```

#### 274. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1976` → after: `L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1976) · [Before (L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1976)

```diff
-                 ZN: ZC.ZN,
+                 Dt: Ik.Dt,
```

#### 275. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1978-L1979` → after: `L1978-L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1978-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1978-L1979) · [Before (L1978-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1978-L1979)

```diff
-                 Jm: WC.xd,
-                 playing: ZC.state === WC.id.Playing,
+                 WG: tk.zd,
+                 playing: Ik.state === tk.kd.Playing,
```

#### 276. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1988-L1989` → after: `L1988-L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1988-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1988-L1989) · [Before (L1988-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1988-L1989)

```diff
-                 ZC = null !== (CC = null === zC || void 0 === zC ? void 0 : zC.view) && void 0 !== CC ? CC : null;
-               return null === zC || null === ZC || ZC.state === WC.id.None ? (oC = null, null) : (oC = (0, OC.n)(oC, {
+                 Ik = null !== (kk = null === Fk || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null;
+               return null === Fk || null === Ik || Ik.state === tk.kd.None ? (ak = null, null) : (ak = (0, Dk.q)(ak, {
```

#### 277. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L1999)

```diff
-               return null !== (zC = null === (ZC = CC.runtime()) || void 0 === ZC ? void 0 : ZC.recorder.current) && void 0 !== zC ? zC : nZ.b.states.replayRecorder.current()
+               return null !== (Fk = null === (Ik = kk.runtime()) || void 0 === Ik ? void 0 : Ik.recorder.current) && void 0 !== Fk ? Fk : lI.b.states.replayRecorder.current()
```

#### 278. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2002-L2004` → after: `L2002-L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2002-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2002-L2004) · [Before (L2002-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2002-L2004)

```diff
-               current: wZ.e,
-               watch: CC => (0, qC.q)("replayViewer|videoExportChanged", (() => {
-                 CC((0, wZ.e)())
+               current: iI.b,
+               watch: kk => (0, qk.i)("replayViewer|videoExportChanged", (() => {
+                 kk((0, iI.b)())
```

#### 279. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2017)

```diff
-             !0 === (null === (QC = nC()) || void 0 === QC ? void 0 : QC.isOpen) && Promise.all([ZC.e(96), ZC.e(66)]).then((() => ZC(60271))).then((ZC => {
+             !0 === (null === (Xk = yk()) || void 0 === Xk ? void 0 : Xk.isOpen) && Promise.all([Ik.e(96), Ik.e(66)]).then((() => Ik(60606))).then((Ik => {
```

#### 280. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2025` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2025) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2025)

```diff
-                   return null !== (zC = null === (ZC = CC.canvas) || void 0 === ZC ? void 0 : ZC.call(CC)) && void 0 !== zC ? zC : null
+                   return null !== (Fk = null === (Ik = kk.canvas) || void 0 === Ik ? void 0 : Ik.call(kk)) && void 0 !== Fk ? Fk : null
```

#### 281. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2041)

```diff
-               if ((0, wZ.e)()) return;
+               if ((0, iI.b)()) return;
```

#### 282. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2060` → after: `L2060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2060) · [Before (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2060)

```diff
-               (0, wZ.e)() || (CC ? null === (zC = nC()) || void 0 === zC || zC.play() : null === (ZC = nC()) || void 0 === ZC || ZC.pause())
+               (0, iI.b)() || (kk ? null === (Fk = yk()) || void 0 === Fk || Fk.play() : null === (Ik = yk()) || void 0 === Ik || Ik.pause())
```

#### 283. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2065)

```diff
-                 ZN: ZC,
+                 Dt: Ik,
```

#### 284. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2105` → after: `L2105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2105) · [Before (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2105)

```diff
-               return !(0, wZ.e)() && (null !== (zC = null === (ZC = nC()) || void 0 === ZC ? void 0 : ZC.crop(QC, wC)) && void 0 !== zC && zC)
+               return !(0, iI.b)() && (null !== (Fk = null === (Ik = yk()) || void 0 === Ik ? void 0 : Ik.crop(Xk, Tk)) && void 0 !== Fk && Fk)
```

#### 285. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2110)

```diff
-                 ZC.e(115).then((() => ZC(39051))).then((zC => {
+                 Ik.e(115).then((() => Ik(39224))).then((Fk => {
```

#### 286. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2141` → after: `L2141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2141) · [Before (L2141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2141)

```diff
-               (0, pz.f)(zC) && (null === (ZC = CC.runtime()) || void 0 === ZC || ZC.recorder.viewerShown(zC))
+               (0, JF.d)(Fk) && (null === (Ik = kk.runtime()) || void 0 === Ik || Ik.recorder.viewerShown(Fk))
```

#### 287. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2147` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2147) · [Before (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2147)

```diff
-                 Jb: wC,
+                 zi: Tk,
```

#### 288. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2149)

```diff
-                 Ib: nC
+                 Si: yk
```

#### 289. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2169` → after: `L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2169) · [Before (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2169)

```diff
-                 vq: wC
+                 eq: Tk
```

#### 290. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2177` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2177) · [Before (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2177)

```diff
-               QC = null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.view) && void 0 !== zC ? zC : null;
+               Xk = null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.view) && void 0 !== Fk ? Fk : null;
```

#### 291. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2180)

```diff
-             })(CC) : oZ.has(CC) ? GC.replayAction(CC) : "replayPlayPause" === CC ? ZC && QC && QC.state !== WC.id.None && GC.setReplayPlaying(QC.state !== WC.id.Playing) : "replayChangeCameraMode" === CC ? null === ZC || void 0 === ZC || ZC.cycleCameraMode() : "replayExit" === CC … [truncated]
+             })(kk) : qI.has(kk) ? xk.replayAction(kk) : "replayPlayPause" === kk ? Ik && Xk && Xk.state !== tk.kd.None && xk.setReplayPlaying(Xk.state !== tk.kd.Playing) : "replayChangeCameraMode" === kk ? null === Ik || void 0 === Ik || Ik.cycleCameraMode() : "replayExit" === kk … [truncated]
```

#### 292. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2190` → after: `L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2190) · [Before (L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2190)

```diff
-               return !0 !== (null === (zC = nC()) || void 0 === zC ? void 0 : zC.isOpen) ? null : null !== (ZC = null === (QC = CC.cameraView) || void 0 === QC ? void 0 : QC.call(CC)) && void 0 !== ZC ? ZC : null
+               return !0 !== (null === (Fk = yk()) || void 0 === Fk ? void 0 : Fk.isOpen) ? null : null !== (Ik = null === (Xk = kk.cameraView) || void 0 === Xk ? void 0 : Xk.call(kk)) && void 0 !== Ik ? Ik : null
```

#### 293. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2201` → after: `L2201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2201) · [Before (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2201)

```diff
-               ZC !== AC && (AC = ZC, qC.o.bp("connectedGameChanged")), zC.fire()
+               Ik !== Kk && (Kk = Ik, qk.g.GL("connectedGameChanged")), Fk.fire()
```

#### 294. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2211)

```diff
-               }(0, wZ.e)() || ("replayViewerOpen" !== CC ? CC.startsWith("replay") && ((0, pz.c)() || !0 === (null === (zC = nC()) || void 0 === zC ? void 0 : zC.inPlayback)) && RC(CC) : pC("toggle"))
+               }(0, iI.b)() || ("replayViewerOpen" !== kk ? kk.startsWith("replay") && ((0, JF.c)() || !0 === (null === (Fk = yk()) || void 0 === Fk ? void 0 : Fk.inPlayback)) && Pk(kk) : Hk("toggle"))
```

#### 295. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2216)

```diff
-         runtime: wC.k,
+         runtime: Tk.j,
```

#### 296. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2229` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2229) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2229)

```diff
-           return null !== (CC = null === (zC = (ZC = (0, bC.E)()).canvas) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : null
+           return null !== (kk = null === (Fk = (Ik = (0, ik.I)()).canvas) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : null
```

#### 297. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2231` → after: `L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2231) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2231)

```diff
-         freecam: wC.j
+         freecam: Tk.g
```

#### 298. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2236)

```diff
-           ...Mz.m,
+           ...eF.j,
```

#### 299. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2244-L2246` → after: `L2244-L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2244-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2244-L2246) · [Before (L2244-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2244-L2246)

```diff
-           ...Mz.h,
-           ...eC.c,
-           ...eZ.k,
+           ...eF.g,
+           ...vk.e,
+           ...vI.l,
```

#### 300. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2249)

```diff
-           ...vC.j
+           ...Sk.h
```

#### 301. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2255)

```diff
-           ...Mz.e,
+           ...eF.d,
```

#### 302. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2267` → after: `L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2267) · [Before (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2267)

```diff
-           ...Mz.j,
+           ...eF.h,
```

#### 303. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2283-L2285` → after: `L2283-L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2283-L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2283-L2285) · [Before (L2283-L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2283-L2285)

```diff
-       (0, fC.g)(SC.o), (0, wC.m)(AQ.feed), (0, eC.g)(), Oz || (Oz = !0, (0, SC.l)(dC.k, (CC => {
-         const zC = (0, HC.h)(dC.k, CC);
-         "string" === typeof zC && Promise.resolve().then((() => ZC(3586))).then((CC => {
+       (0, lk.f)(wk.p), (0, Tk.n)(QX.feed), (0, vk.i)(), DF || (DF = !0, (0, wk.l)(Gk.k, (kk => {
+         const Fk = (0, uk.e)(Gk.k, kk);
+         "string" === typeof Fk && Promise.resolve().then((() => Ik(3602))).then((kk => {
```

#### 304. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2291-L2296` → after: `L2291-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2291-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2291-L2296) · [Before (L2291-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2291-L2296)

```diff
-       })), (0, SC.l)(dC.fb, (CC => {
-         const zC = (0, HC.h)(dC.fb, CC);
-         "number" === typeof zC && qC.o.bp("serverUpdating", Date.now() + zC, !0)
-       })), (0, SC.l)(dC.K, (CC => {
-         const zC = (0, HC.h)(dC.K, CC);
-         if ((0, HC.e)(zC)) {
+       })), (0, wk.l)(Gk._, (kk => {
+         const Fk = (0, uk.e)(Gk._, kk);
+         "number" === typeof Fk && qk.g.GL("serverUpdating", Date.now() + Fk, !0)
+       })), (0, wk.l)(Gk.C, (kk => {
+         const Fk = (0, uk.e)(Gk.C, kk);
+         if ((0, uk.c)(Fk)) {
```

#### 305. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2298-L2299` → after: `L2298-L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2298-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2298-L2299) · [Before (L2298-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2298-L2299)

```diff
-             Kw: CC,
-             Yw: ZC
+             OT: kk,
+             nT: Ik
```

#### 306. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2301-L2303` → after: `L2301-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2301-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2301-L2303) · [Before (L2301-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2301-L2303)

```diff
-           (0, Lz.c)({
-             Kw: "string" === typeof CC ? CC : null,
-             Yw: "string" === typeof ZC ? ZC : null
+           (0, mF.b)({
+             OT: "string" === typeof kk ? kk : null,
+             nT: "string" === typeof Ik ? Ik : null
```

#### 307. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2306-L2314` → after: `L2306-L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2306-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2306-L2314) · [Before (L2306-L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2306-L2314)

```diff
-       })), (0, SC.l)(FC.Bc.NewUiRequest, (CC => {
-         const zC = (0, HC.j)(CC);
-         (0, HC.e)(zC) && "number" === typeof zC.id && (0, HC.e)(zC.clientParameters) && (0, Uz.i)(zC.id, zC.clientParameters)
-       })), (0, SC.l)(dC._, (CC => {
-         const zC = (0, HC.h)(dC._, CC);
-         "number" === typeof zC && (0, Uz.m)(zC)
-       })), (0, SC.j)(Uz.e), (0, SC.l)(FC.Bc.UiRequestPopup, (CC => {
-         const zC = (0, HC.j)(CC);
-         if ((0, HC.e)(zC) && "number" === typeof zC.id && "string" === typeof zC.text) {
+       })), (0, wk.l)(Lk.sc.NewUiRequest, (kk => {
+         const Fk = (0, uk.g)(kk);
+         (0, uk.c)(Fk) && "number" === typeof Fk.id && (0, uk.c)(Fk.clientParameters) && (0, hF.h)(Fk.id, Fk.clientParameters)
+       })), (0, wk.l)(Gk.Q, (kk => {
+         const Fk = (0, uk.e)(Gk.Q, kk);
+         "number" === typeof Fk && (0, hF.j)(Fk)
+       })), (0, wk.j)(hF.d), (0, wk.l)(Lk.sc.UiRequestPopup, (kk => {
+         const Fk = (0, uk.g)(kk);
+         if ((0, uk.c)(Fk) && "number" === typeof Fk.id && "string" === typeof Fk.text) {
```

#### 308. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2316` → after: `L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2316) · [Before (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2316)

```diff
-           (0, Uz.o)(CC, zC.text, !0 === zC.destructive, (zC => {
+           (0, hF.l)(kk, Fk.text, !0 === Fk.destructive, (Fk => {
```

#### 309. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2319` → after: `L2319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2319) · [Before (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2319)

```diff
-               hF: zC
+               HL: Fk
```

#### 310. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2323-L2328` → after: `L2323-L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2323-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2323-L2328) · [Before (L2323-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2323-L2328)

```diff
-       })), (0, SC.l)(FC.Bc.TopRightHelper, (CC => {
-         const zC = (0, HC.j)(CC);
-         void 0 !== zC && qC.o.bp("TopRightHelper", zC, !0)
-       })), (0, SC.l)(FC.Bc.TaskProgress, (CC => {
-         const zC = (0, HC.j)(CC);
-         (0, HC.e)(zC) && "string" === typeof zC.taskId && "number" === typeof zC.progress && (0, yz.e)({
+       })), (0, wk.l)(Lk.sc.TopRightHelper, (kk => {
+         const Fk = (0, uk.g)(kk);
+         void 0 !== Fk && qk.g.GL("TopRightHelper", Fk, !0)
+       })), (0, wk.l)(Lk.sc.TaskProgress, (kk => {
+         const Fk = (0, uk.g)(kk);
+         (0, uk.c)(Fk) && "string" === typeof Fk.taskId && "number" === typeof Fk.progress && (0, gF.d)({
```

#### 311. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2332-L2336` → after: `L2332-L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2332-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2332-L2336) · [Before (L2332-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2332-L2336)

```diff
-       }))), xZ || (xZ = !0, (0, SC.l)(dC.r, (CC => {
-         const zC = (0, HC.h)(dC.r, CC);
-         (0, HC.e)(zC) && qC.o.bp("showShopFromServer", {
-           toggle: zC.ew,
-           hw: zC.hw
+       }))), sI || (sI = !0, (0, wk.l)(Gk.q, (kk => {
+         const Fk = (0, uk.e)(Gk.q, kk);
+         (0, uk.c)(Fk) && qk.g.GL("showShopFromServer", {
+           toggle: Fk.vT,
+           ET: Fk.ET
```

#### 312. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2338-L2343` → after: `L2338-L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2338-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2338-L2343) · [Before (L2338-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2338-L2343)

```diff
-       })), (0, SC.l)(FC.Bc.OverShopInfo, (CC => {
-         const zC = (0, HC.j)(CC);
-         (0, HC.e)(zC) && qC.o.bp("overShopInfo", zC.info, !0)
-       })), (0, SC.l)(FC.Bc.ShowShopTutorial, (() => {
-         qC.o.bp("showShopTutorial", null, !0)
-       }))), GZ || (GZ = !0, (0, SC.i)((() => {
+       })), (0, wk.l)(Lk.sc.OverShopInfo, (kk => {
+         const Fk = (0, uk.g)(kk);
+         (0, uk.c)(Fk) && qk.g.GL("overShopInfo", Fk.info, !0)
+       })), (0, wk.l)(Lk.sc.ShowShopTutorial, (() => {
+         qk.g.GL("showShopTutorial", null, !0)
+       }))), PI || (PI = !0, (0, wk.f)((() => {
```

#### 313. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2345-L2347` → after: `L2345-L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2345-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2345-L2347) · [Before (L2345-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2345-L2347)

```diff
-         (0, gZ.D)(), null === (CC = RZ) || void 0 === CC || CC(), RZ = (0, SC.e)() ? (0, pZ.g)(SC.e) : null, (0, SC.e)() || qC.o.pG()
-       })), (0, SC.l)(FC.Bc.SetCookie, (CC => {
-         const zC = (0, HC.j)(CC),
+         (0, wI.A)(), null === (kk = KI) || void 0 === kk || kk(), KI = (0, wk.e)() ? (0, JI.l)(wk.e) : null, (0, wk.e)() || qk.g.aJ()
+       })), (0, wk.l)(Lk.sc.SetCookie, (kk => {
+         const Fk = (0, uk.g)(kk),
```

#### 314. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2349-L2352` → after: `L2349-L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2349-L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2349-L2352) · [Before (L2349-L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2349-L2352)

```diff
-         (0, HC.e)(zC) && "string" === typeof zC.key && null !== ZC && (0, SZ.setCookie)(ZC, zC.key, zC.value)
-       })), (0, SC.l)(FC.Bc.LeaveValues, (CC => {
-         const zC = (0, HC.j)(CC);
-         if ((0, HC.e)(zC) && "string" === typeof zC.leaveEventType) {
+         (0, uk.c)(Fk) && "string" === typeof Fk.key && null !== Ik && (0, HI.setCookie)(Ik, Fk.key, Fk.value)
+       })), (0, wk.l)(Lk.sc.LeaveValues, (kk => {
+         const Fk = (0, uk.g)(kk);
+         if ((0, uk.c)(Fk) && "string" === typeof Fk.leaveEventType) {
```

#### 315. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2359)

```diff
-           (0, gZ.K)({
+           (0, wI.H)({
```

#### 316. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2366-L2368` → after: `L2366-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2366-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2366-L2368) · [Before (L2366-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2366-L2368)

```diff
-       })), (0, SC.l)(FC.Bc.CustomAnalyticsEvent, (CC => {
-         const zC = (0, HC.j)(CC);
-         if ((0, HC.e)(zC) && "string" === typeof zC.cat1) {
+       })), (0, wk.l)(Lk.sc.CustomAnalyticsEvent, (kk => {
+         const Fk = (0, uk.g)(kk);
+         if ((0, uk.c)(Fk) && "string" === typeof Fk.cat1) {
```

#### 317. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2375` → after: `L2375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2375) · [Before (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2375)

```diff
-           (0, gZ.o)({
+           (0, wI.r)({
```

#### 318. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2382-L2384` → after: `L2382-L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2382-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2382-L2384) · [Before (L2382-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2382-L2384)

```diff
-       })), (0, SC.l)(FC.Bc.ProgressionEvent, (CC => {
-         const zC = (0, HC.j)(CC);
-         if ((0, HC.e)(zC)) {
+       })), (0, wk.l)(Lk.sc.ProgressionEvent, (kk => {
+         const Fk = (0, uk.g)(kk);
+         if ((0, uk.c)(Fk)) {
```

#### 319. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2392)

```diff
-           (0, gZ.t)({
+           (0, wI.v)({
```

#### 320. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2400-L2402` → after: `L2400-L2402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2400-L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2400-L2402) · [Before (L2400-L2402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2400-L2402)

```diff
-       })), (0, SC.l)(FC.Bc.ResourceEvent, (CC => {
-         const zC = (0, HC.j)(CC);
-         if ((0, HC.e)(zC)) {
+       })), (0, wk.l)(Lk.sc.ResourceEvent, (kk => {
+         const Fk = (0, uk.g)(kk);
+         if ((0, uk.c)(Fk)) {
```

#### 321. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2410)

```diff
-           (0, gZ.w)({
+           (0, wI.x)({
```

#### 322. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2418-L2420` → after: `L2418-L2420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2418-L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2418-L2420) · [Before (L2418-L2420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2418-L2420)

```diff
-       })), (0, SC.l)(FC.Bc.LeaderboardResponse, (CC => {
-         const zC = (0, HC.j)(CC);
-         if ((0, HC.e)(zC)) {
+       })), (0, wk.l)(Lk.sc.LeaderboardResponse, (kk => {
+         const Fk = (0, uk.g)(kk);
+         if ((0, uk.c)(Fk)) {
```

#### 323. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2426` → after: `L2426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2426) · [Before (L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2426)

```diff
-           qC.o.bp("leaderboardResponse", {
+           qk.g.GL("leaderboardResponse", {
```

#### 324. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2432-L2441` → after: `L2432-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2432-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2432-L2441) · [Before (L2432-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2432-L2441)

```diff
-       })), (0, SC.l)(dC.C, (CC => {
-         const zC = (0, HC.h)(dC.C, CC);
-         "string" === typeof zC && (0, PZ.d)(CC.conn, zC)
-       })), (0, SC.l)(dC.G, (CC => {
-         const zC = (0, HC.h)(dC.G, CC);
-         "string" === typeof zC && console.error(`[logErrorToConsole]: ${zC}`)
-       }))), cC(), (0, eZ.d)(), Xz || (Xz = !0, (0, SC.l)(dC.j, (CC => {
-         const zC = (0, HC.h)(dC.j, CC);
-         void 0 !== zC && (0, lz.h)(zC)
-       }))), jz(), Kz(), yC || (yC = !0, (0, bC.p)(LC)), QC.gameBridge.attach(xQ), (0, QC.installPageSources)({
+       })), (0, wk.l)(Gk.w, (kk => {
+         const Fk = (0, uk.e)(Gk.w, kk);
+         "string" === typeof Fk && (0, xI.c)(kk.conn, Fk)
+       })), (0, wk.l)(Gk.x, (kk => {
+         const Fk = (0, uk.e)(Gk.x, kk);
+         "string" === typeof Fk && console.error(`[logErrorToConsole]: ${Fk}`)
+       }))), Ck(), (0, vI.e)(), UF || (UF = !0, (0, wk.l)(Gk.h, (kk => {
+         const Fk = (0, uk.e)(Gk.h, kk);
+         void 0 !== Fk && (0, RF.g)(Fk)
+       }))), AF(), OF(), gk || (gk = !0, (0, ik.u)(mk)), Xk.gameBridge.attach(sX), (0, Xk.installPageSources)({
```

#### 325. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2444` → after: `L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2444) · [Before (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2444)

```diff
-           setChunkAddDistance: XZ.h
+           setChunkAddDistance: UI.d
```

#### 326. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2450-L2451` → after: `L2450-L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2450-L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2450-L2451) · [Before (L2450-L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2450-L2451)

```diff
-           gR: XZ.e,
-           drawCallStats: cZ.e
+           dJ: UI.b,
+           drawCallStats: CI.j
```

#### 327. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2456` → after: `L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2456) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2456)

```diff
-   40779: (CC, zC, ZC) => {
+   40963: (kk, Fk, Ik) => {
```

#### 328. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2459-L2460` → after: `L2460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2460) · [Before (L2459-L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2459-L2460)

```diff
-       h: () => oC,
-       j: () => fC,
+       i: () => lk,
```

#### 329. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2463` → after: `L2463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2463) · [Before (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2463)

```diff
-     var QC = ZC(1851);
+     var Xk = Ik(1886);
```

#### 330. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2485)

```diff
-   40875: (CC, zC, ZC) => {
+   41057: (kk, Fk, Ik) => {
```

#### 331. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2487-L2488` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2487-L2488) · [Before (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2487-L2488)

```diff
-       d: () => nC,
-       e: () => fC
+       c: () => yk,
+       f: () => lk
```

#### 332. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2490` → after: `L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2490) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2490)

```diff
-     var QC = ZC(40878);
+     var Xk = Ik(41060);
```

#### 333. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2495` → after: `L2495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2495) · [Before (L2495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2495)

```diff
-       return wC ??= ZC.e(61).then((() => ZC(60285))).catch((CC => {
+       return Tk ??= Ik.e(61).then((() => Ik(60620))).catch((kk => {
```

#### 334. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2509` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2509) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2509)

```diff
-   36938: (CC, zC, ZC) => {
+   37118: (kk, Fk, Ik) => {
```

#### 335. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2511` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2511) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2511)

```diff
-       e: () => QC
+       b: () => Xk
```

#### 336. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2673` → after: `L2673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2673) · [Before (L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2673)

```diff
-   36725: (CC, zC, ZC) => {
+   36899: (kk, Fk, Ik) => {
```

#### 337. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2675-L2678` → after: `L2675-L2678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2675-L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2675-L2678) · [Before (L2675-L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2675-L2678)

```diff
-       d: () => wC,
-       g: () => bC,
-       j: () => NC,
-       m: () => fC,
+       e: () => Tk,
+       i: () => ik,
+       l: () => Zk,
+       p: () => lk,
```

#### 338. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2685` → after: `L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2685) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2685)

```diff
-     var QC = ZC(1183);
+     var Xk = Ik(1231);
```

#### 339. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2694` → after: `L2694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2694) · [Before (L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2694)

```diff
-       return "lobby" === CC.kind ? `lobby:${CC.path}` : `codeBlock:${CC.pos[0]},${CC.pos[1]},${CC.pos[2]}`
+       return "lobby" === kk.kind ? `lobby:${kk.path}` : `codeBlock:${kk.pos[0]},${kk.pos[1]},${kk.pos[2]}`
```

#### 340. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2700` → after: `L2700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2700) · [Before (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2700)

```diff
-         path: QC.k
+         path: Xk.g
```

#### 341. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2739` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2739) · [Before (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2739)

```diff
-   38874: (CC, zC, ZC) => {
+   39028: (kk, Fk, Ik) => {
```

#### 342. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2741-L2742` → after: `L2741-L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2741-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/playGameSources.js#L2741-L2742) · [Before (L2741-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/playGameSources.js#L2741-L2742)

```diff
-       e: () => QC,
-       h: () => wC
+       d: () => Xk,
+       e: () => Tk
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (w4ddu.56408518 → 31kiid.1299b0d6)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1951 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1)

```diff
- /*! For license information please see w4ddu.procGenWorker.0046da52.chunk.js.LICENSE.txt */
+ /*! For license information please see 31kiid.procGenWorker.2bc89482.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L4)

```diff
-       1566: CC => {
+       1594: kk => {
```

#### 3. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L82)

```diff
-             return zC === 1 / 0 ? zC : void 0 !== zC ? Math.max(0, Math.ceil(zC - ZC())) : 0
+             return Fk === 1 / 0 ? Fk : void 0 !== Fk ? Math.max(0, Math.ceil(Fk - Ik())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L151)

```diff
-       397: CC => {
+       423: kk => {
```

#### 5. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L156)

```diff
-       360: (CC, zC, ZC) => {
+       373: (kk, Fk, Ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L164-L166` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166) · [Before (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166)

```diff
-         var QC = ZC(362),
-           wC = ZC(366),
-           bC = ZC(372)
+         var Xk = Ik(381),
+           Tk = Ik(390),
+           ik = Ik(397)
```

#### 7. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L168)

```diff
-       446: CC => {
+       480: kk => {
```

#### 8. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L173)

```diff
-       357: CC => {
+       368: kk => {
```

#### 9. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L179)

```diff
-       376: CC => {
+       402: kk => {
```

#### 10. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L184)

```diff
-       340: CC => {
+       357: kk => {
```

#### 11. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L190)

```diff
-       518: CC => {
+       547: kk => {
```

#### 12. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202)

```diff
-       476: (CC, zC, ZC) => {
-         CC.exports = ZC(471)
+       501: (kk, Fk, Ik) => {
+         kk.exports = Ik(497)
```

#### 13. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L204)

```diff
-       471: CC => {
+       497: kk => {
```

#### 14. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213)

```diff
-       433: (CC, zC, ZC) => {
-         CC.exports = ZC(430)
+       454: (kk, Fk, Ik) => {
+         kk.exports = Ik(447)
```

#### 15. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L215)

```diff
-       430: CC => {
+       447: kk => {
```

#### 16. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L220)

```diff
-       372: CC => {
+       397: kk => {
```

#### 17. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L225)

```diff
-       349: CC => {
+       360: kk => {
```

#### 18. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L228)

```diff
-       385: (CC, zC, ZC) => {
+       414: (kk, Fk, Ik) => {
```

#### 19. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L238)

```diff
-         var QC = ZC(349)
+         var Xk = Ik(360)
```

#### 20. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L240)

```diff
-       390: CC => {
+       417: kk => {
```

#### 21. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L245)

```diff
-       441: CC => {
+       477: kk => {
```

#### 22. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L250)

```diff
-       566: (CC, zC, ZC) => {
+       601: (kk, Fk, Ik) => {
```

#### 23. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L259)

```diff
-         var QC = ZC(340)()
+         var Xk = Ik(357)()
```

#### 24. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L261)

```diff
-       362: CC => {
+       381: kk => {
```

#### 25. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268)

```diff
-       338: (CC, zC, ZC) => {
-         var QC = ZC(340);
+       354: (kk, Fk, Ik) => {
+         var Xk = Ik(357);
```

#### 26. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L270)

```diff
-           EPSILON: ZC(349),
+           EPSILON: Ik(360),
```

#### 27. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L273-L318` → after: `L273-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318) · [Before (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318)

```diff
-           clone: ZC(357),
-           angle: ZC(360),
-           nZ: ZC(362),
-           copy: ZC(376),
-           set: ZC(382),
-           equals: ZC(385),
-           exactEquals: ZC(390),
-           add: ZC(397),
-           subtract: ZC(401),
-           sub: ZC(408),
-           multiply: ZC(416),
-           mul: ZC(421),
-           divide: ZC(430),
-           div: ZC(433),
-           min: ZC(435),
-           max: ZC(439),
- ... (30 more removed lines; see GitHub link above)
+           clone: Ik(368),
+           angle: Ik(373),
+           ek: Ik(381),
+           copy: Ik(402),
+           set: Ik(411),
+           equals: Ik(414),
+           exactEquals: Ik(417),
+           add: Ik(423),
+           subtract: Ik(427),
+           sub: Ik(433),
+           multiply: Ik(438),
+           mul: Ik(445),
+           divide: Ik(447),
+           div: Ik(454),
+           min: Ik(463),
+           max: Ik(470),
+ ... (30 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324)

```diff
-       499: (CC, zC, ZC) => {
-         CC.exports = ZC(495)
+       519: (kk, Fk, Ik) => {
+         kk.exports = Ik(511)
```

#### 29. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L326)

```diff
-       495: CC => {
+       511: kk => {
```

#### 30. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L334)

```diff
-       526: CC => {
+       556: kk => {
```

#### 31. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L342)

```diff
-       439: CC => {
+       470: kk => {
```

#### 32. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L347)

```diff
-       435: CC => {
+       463: kk => {
```

#### 33. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353)

```diff
-       421: (CC, zC, ZC) => {
-         CC.exports = ZC(416)
+       445: (kk, Fk, Ik) => {
+         kk.exports = Ik(438)
```

#### 34. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L355)

```diff
-       416: CC => {
+       438: kk => {
```

#### 35. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L360)

```diff
-       514: CC => {
+       538: kk => {
```

#### 36. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L365)

```diff
-       366: CC => {
+       390: kk => {
```

#### 37. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L375)

```diff
-       528: CC => {
+       559: kk => {
```

#### 38. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L384)

```diff
-       544: CC => {
+       585: kk => {
```

#### 39. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L395)

```diff
-       550: CC => {
+       591: kk => {
```

#### 40. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L406)

```diff
-       559: CC => {
+       593: kk => {
```

#### 41. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L417)

```diff
-       450: CC => {
+       482: kk => {
```

#### 42. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L422)

```diff
-       458: CC => {
+       487: kk => {
```

#### 43. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L427)

```diff
-       464: CC => {
+       491: kk => {
```

#### 44. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L432)

```diff
-       382: CC => {
+       411: kk => {
```

#### 45. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L437-L440` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L437) · [Before (L437-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L440)

```diff
-       488: (CC, zC, ZC) => {
-         CC.exports = ZC(480)
-       },
-       510: (CC, zC, ZC) => {
+       508: (kk, Fk, Ik) => {
```

#### 46. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L443` → after: `L440-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L440-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L443)

```diff
-       480: CC => {
+       534: (kk, Fk, Ik) => {
+         kk.exports = Ik(526)
+       },
+       504: kk => {
```

#### 47. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L451)

```diff
-       504: CC => {
+       526: kk => {
```

#### 48. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460)

```diff
-       408: (CC, zC, ZC) => {
-         CC.exports = ZC(401)
+       433: (kk, Fk, Ik) => {
+         kk.exports = Ik(427)
```

#### 49. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L462)

```diff
-       401: CC => {
+       427: kk => {
```

#### 50. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L467)

```diff
-       533: CC => {
+       571: kk => {
```

#### 51. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L475)

```diff
-       530: CC => {
+       562: kk => {
```

#### 52. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L484)

```diff
-       540: CC => {
+       576: kk => {
```

#### 53. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L500)

```diff
-       2827: CC => {
+       2781: kk => {
```

#### 54. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L506)

```diff
-       2829: CC => {
+       2783: kk => {
```

#### 55. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L516)

```diff
-       39573: CC => {
+       39745: kk => {
```

#### 56. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L520)

```diff
-             for (var nC = wC[bC] = new Array(zC), fC = bC < QC / 2 ? bC : bC + 1, oC = 1; oC <= zC; oC++) {
+             for (var yk = Tk[ik] = new Array(Fk), lk = ik < Xk / 2 ? ik : ik + 1, ak = 1; ak <= Fk; ak++) {
```

#### 57. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L527-L529` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529)

```diff
-       2823: (CC, zC, ZC) => {
-         var QC = ZC(2827),
-           wC = ZC(2829),
+       2775: (kk, Fk, Ik) => {
+         var Xk = Ik(2781),
+           Tk = Ik(2783),
```

#### 58. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L674-L677` → after: `L674-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677) · [Before (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677)

```diff
-       39551: (CC, zC, ZC) => {
-         var QC = ZC(39559).integer,
-           wC = ZC(39562),
-           bC = ZC(39571);
+       39715: (kk, Fk, Ik) => {
+         var Xk = Ik(39723).integer,
+           Tk = Ik(39730),
+           ik = Ik(39736);
```

#### 59. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L741-L744` → after: `L741-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744) · [Before (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744)

```diff
-       39575: (CC, zC, ZC) => {
-         var QC = ZC(39559).array,
-           wC = ZC(39562),
-           bC = ZC(39571);
+       39750: (kk, Fk, Ik) => {
+         var Xk = Ik(39723).array,
+           Tk = Ik(39730),
+           ik = Ik(39736);
```

#### 60. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828)

```diff
-       39571: (CC, zC, ZC) => {
-         var QC = ZC(39573);
+       39736: (kk, Fk, Ik) => {
+         var Xk = Ik(39745);
```

#### 61. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L847-L849` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849) · [Before (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849)

```diff
-       39544: (CC, zC, ZC) => {
-         var QC = ZC(39551),
-           wC = ZC(39575);
+       39712: (kk, Fk, Ik) => {
+         var Xk = Ik(39715),
+           Tk = Ik(39750);
```

#### 62. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L870)

```diff
-       39562: CC => {
+       39730: kk => {
```

#### 63. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L884)

```diff
-       39559: CC => {
+       39723: kk => {
```

#### 64. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L910-L911` → after: `L910-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911) · [Before (L910-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L910-L911)

```diff
-       37555: (CC, zC, ZC) => {
-         var QC = ZC(37560);
+       37749: (kk, Fk, Ik) => {
+         var Xk = Ik(37758);
```

#### 65. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L943)

```diff
-       37560: (CC, zC) => {
+       37758: (kk, Fk) => {
```

#### 66. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L997)

```diff
-       9199: (CC, zC) => {
+       9191: (kk, Fk) => {
```

#### 67. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1012` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1012)

```diff
-       39478: (CC, zC, ZC) => {
+       39657: (kk, Fk, Ik) => {
```

#### 68. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1014` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1014) · [Before (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1014)

```diff
-           d: () => Fz
+           b: () => tF
```

#### 69. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1016-L1018` → after: `L1016-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018) · [Before (L1016-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1016-L1018)

```diff
-         var QC = ZC(39503),
-           wC = ZC(39489),
-           bC = ZC(39590);
+         var Xk = Ik(39678),
+           Tk = Ik(39665),
+           ik = Ik(39761);
```

#### 70. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1027)

```diff
-           return nC(`${CC}Wasteland`)
+           return yk(`${kk}Wasteland`)
```

#### 71. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1062)

```diff
-           return 36 * (1 === QC ? CC : zC) + 2 + Math.floor(32 * oC(CC, zC, ZC ^ NC ^ QC))
+           return 36 * (1 === Xk ? kk : Fk) + 2 + Math.floor(32 * ak(kk, Fk, Ik ^ Zk ^ Xk))
```

#### 72. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1064-L1065` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1064-L1065)

```diff
-         var pC = ZC(39485),
-           PC = ZC(39498);
+         var Hk = Ik(39662),
+           Jk = Ik(39669);
```

#### 73. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1092)

```diff
-             CC !== vC && (vC = CC, eC = (0, pC.i)(CC), hC = fC(CC))
+             kk !== Sk && (Sk = kk, vk = (0, Hk.j)(kk), Ek = lk(kk))
```

#### 74. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1141` → after: `L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1141)

```diff
-               return QC > ZC && (bC = .25 - bC), CC < 0 && (bC = .5 - bC), zC < 0 ? 1 - bC : bC
+               return Xk > Ik && (ik = .25 - ik), kk < 0 && (ik = .5 - ik), Fk < 0 ? 1 - ik : ik
```

#### 75. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1174)

```diff
-             return ZC && mC(ZC, CC, zC) ? ZC : null
+             return Ik && pk(Ik, kk, Fk) ? Ik : null
```

#### 76. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1181)

```diff
-                 if (bC && wC >= bC.floorY - PC.f && QC <= bC.topY + RC) {
+                 if (ik && Tk >= ik.floorY - Jk.g && Xk <= ik.topY + Pk) {
```

#### 77. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1206)

```diff
-         var rC = ZC(39526);
+         var ck = Ik(39703);
```

#### 78. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1210)

```diff
-             this.Ig = zC, this.chances = wC, this.mound = bC, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ZC.salt ^ nC(QC), this.sinkholes = ZC.sinkholes;
+             this.se = Fk, this.chances = Tk, this.mound = ik, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = Ik.salt ^ yk(Xk), this.sinkholes = Ik.sinkholes;
```

#### 79. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1231)

```diff
-               for (let wC = 0; wC < fC.height && oC + wC < this.Ig; wC++) oC + wC >= 0 && CC.set(QC - zC, oC + wC, bC - ZC, fC.block);
+               for (let Tk = 0; Tk < lk.height && ak + Tk < this.se; Tk++) ak + Tk >= 0 && kk.set(Xk - Fk, ak + Tk, ik - Ik, lk.block);
```

#### 80. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1238` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1238)

```diff
-               if (FC += null !== (WC = this.chances[NC]) && void 0 !== WC ? WC : 0, qC < FC) return void(sC.has(NC) && this.sinkholes.taking(QC, bC) || this.place(CC, QC - zC, nC + 1 - wC, bC - ZC, NC, oC(QC, bC, 1540483477 ^ this.salt)))
+               if (Lk += null !== (tk = this.chances[Zk]) && void 0 !== tk ? tk : 0, qk < Lk) return void(Wk.has(Zk) && this.sinkholes.taking(Xk, ik) || this.place(kk, Xk - Fk, yk + 1 - Tk, ik - Ik, Zk, ak(Xk, ik, 1540483477 ^ this.salt)))
```

#### 81. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1243` → after: `L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243) · [Before (L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1243)

```diff
-                 ZC + wC >= 0 && ZC + wC < this.Ig && CC.set(zC, ZC + wC, QC, bC)
+                 Ik + Tk >= 0 && Ik + Tk < this.se && kk.set(Fk, Ik + Tk, Xk, ik)
```

#### 82. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1252)

```diff
-         class aC extends rC.h {
+         class Bk extends ck.k {
```

#### 83. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1260)

```diff
-             super.init(), this.floraGenerator = new TC(this.blockMetadata, this.Ig, this.noise, this.seed, this.floraChances, ((CC, zC) => this.mound(CC, zC)))
+             super.init(), this.floraGenerator = new fk(this.blockMetadata, this.se, this.noise, this.seed, this.floraChances, ((kk, Fk) => this.mound(kk, Fk)))
```

#### 84. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1298` → after: `L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1298)

```diff
-               return 0 === QC || 1 === QC && oC(CC, zC, ZC ^ NC ^ 3) < .5 ? 2 - QC : 0
+               return 0 === Xk || 1 === Xk && ak(kk, Fk, Ik ^ Zk ^ 3) < .5 ? 2 - Xk : 0
```

#### 85. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1327` → after: `L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327) · [Before (L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1327)

```diff
-             })), this.canyon = new wC.h([{
+             })), this.canyon = new Tk.l([{
```

#### 86. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1330` → after: `L1330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1330)

```diff
-             }], `${CC}WastelandCanyon`), this.canyonWarp = new wC.h([{
+             }], `${kk}WastelandCanyon`), this.canyonWarp = new Tk.l([{
```

#### 87. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1333` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333) · [Before (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1333)

```diff
-             }], `${CC}WastelandCanyonWarp`), this.canyonMask = new wC.h([{
+             }], `${kk}WastelandCanyonWarp`), this.canyonMask = new Tk.l([{
```

#### 88. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1336` → after: `L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336) · [Before (L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1336)

```diff
-             }], `${CC}WastelandCanyonMask`), this.patchNoise = new wC.h([{
+             }], `${kk}WastelandCanyonMask`), this.patchNoise = new Tk.l([{
```

#### 89. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1342)

```diff
-             }], `${CC}WastelandPatch`), this.fineNoise = new wC.h([{
+             }], `${kk}WastelandPatch`), this.fineNoise = new Tk.l([{
```

#### 90. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1348)

```diff
-             }], `${CC}WastelandFine`)
+             }], `${kk}WastelandFine`)
```

#### 91. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1371-L1374` → after: `L1371-L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374) · [Before (L1371-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1371-L1374)

```diff
-         var jC = ZC(4189),
-           yC = ZC(600),
-           LC = ZC(38974),
-           UC = ZC(39511);
+         var Ak = Ik(4221),
+           gk = Ik(628),
+           mk = Ik(39143),
+           hk = Ik(39688);
```

#### 92. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1384-L1385` → after: `L1384-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1384-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1384-L1385) · [Before (L1384-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1384-L1385)

```diff
-             const CC = new LC.b;
-             return CC.set(0, 0, 0, OC("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
+             const kk = new mk.d;
+             return kk.set(0, 0, 0, Dk("5BMAAh0CiAEBHQGIAQEdA4gBBB0BiAECHQ8AAoEBAYgBAYEBBIgBAYEBBYgBA4EBDwAFgQEBiAEFfwOBAQOIAQ8AAYIBBYABBX8BgAEBggEBgAEBggEBgAEBggEPAAGCAQWAAQV/AYIBBIABAYIBDwABggEFgAEFfwGAAQEAA4ABAYIBDwABggEFgAEFfwWAAQGCAQ8AAYIBAYABAQAMgAECggEPAAGCAQWAAQKCAQiAAQGCA … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1425-L1426` → after: `L1425-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1425-L1426) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1425-L1426)

```diff
-               qualityDistribution: new jC.g([{
-                 value: yC.k.UNCOMMON,
+               qualityDistribution: new Ak.d([{
+                 value: gk.h.UNCOMMON,
```

#### 94. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1429)

```diff
-                 value: yC.k.RARE,
+                 value: gk.h.RARE,
```

#### 95. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1432` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1432) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1432)

```diff
-                 value: yC.k.EPIC,
+                 value: gk.h.EPIC,
```

#### 96. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1440` → after: `L1440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1440) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1440)

```diff
-               mobTypeDistribution: new jC.g([{
+               mobTypeDistribution: new Ak.d([{
```

#### 97. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1448` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1448)

```diff
-           return (0, rC.ab)(CC, [{
+           return (0, ck.pb)(kk, [{
```

#### 98. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1458)

```diff
-             super(CC, zC, ZC, `${bC}DustFlats`, nC, fC, Qz(QC.f.MEDIUM, 1.25, Cz)), this.key = "dustFlats", this.floraChances = {
+             super(kk, Fk, Ik, `${ik}DustFlats`, yk, lk, TF(Xk.k.MEDIUM, 1.25, FF)), this.key = "dustFlats", this.floraChances = {
```

#### 99. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1462` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1462)

```diff
-             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = MC.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new wC.h([{
+             }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = jk.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new Tk.l([{
```

#### 100. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1468` → after: `L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468) · [Before (L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1468)

```diff
-             }], `${bC}DustFlatsHeight`)
+             }], `${ik}DustFlatsHeight`)
```

#### 101. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1483)

```diff
-             super(CC, zC, ZC, `${QC}ScorchedMesa`, bC, nC), this.key = "scorchedMesa", this.floraChances = {
+             super(kk, Fk, Ik, `${Xk}ScorchedMesa`, ik, yk), this.key = "scorchedMesa", this.floraChances = {
```

#### 102. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1487)

```diff
-             }, this.outcropChance = MC.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
+             }, this.outcropChance = jk.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids[" … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1493)

```diff
-             }], `${QC}ScorchedMesaHeight`);
+             }], `${Xk}ScorchedMesaHeight`);
```

#### 104. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1525` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525) · [Before (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1525)

```diff
-             super(CC, zC, ZC, `${QC}ShatteredHighlands`, bC, nC), this.key = "shatteredHighlands", this.floraChances = {
+             super(kk, Fk, Ik, `${Xk}ShatteredHighlands`, ik, yk), this.key = "shatteredHighlands", this.floraChances = {
```

#### 105. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1528)

```diff
-             }, this.outcropChance = MC.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
+             }, this.outcropChance = jk.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids[ … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1531` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1531)

```diff
-             }], `${QC}HighlandsRidge1`), this.ridge2 = new wC.h([{
+             }], `${Xk}HighlandsRidge1`), this.ridge2 = new Tk.l([{
```

#### 107. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1534)

```diff
-             }], `${QC}HighlandsRidge2`), this.bumps = new wC.h([{
+             }], `${Xk}HighlandsRidge2`), this.bumps = new Tk.l([{
```

#### 108. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1537` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1537)

```diff
-             }], `${QC}HighlandsBumps`)
+             }], `${Xk}HighlandsBumps`)
```

#### 109. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1548)

```diff
-             return 0 !== wC ? wC : zC > 50 ? this.ids.Stone : zC > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
+             return 0 !== Tk ? Tk : Fk > 50 ? this.ids.Stone : Fk > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
```

#### 110. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1559)

```diff
-               return null === nC || qC(CC >> 2, zC, ZC >> 2, wC) >= .25 ? null : qC(CC, zC, ZC, wC) < .65 ? nC : null
+               return null === yk || qk(kk >> 2, Fk, Ik >> 2, Tk) >= .25 ? null : qk(kk, Fk, Ik, Tk) < .65 ? yk : null
```

#### 111. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1566` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566) · [Before (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1566)

```diff
-             super(CC, zC, ZC, `${bC}RuinFields`, nC, fC, Qz(QC.f.HIGH, 2.25, zz)), this.key = "ruinFields", this.floraChances = {
+             super(kk, Fk, Ik, `${ik}RuinFields`, yk, lk, TF(Xk.k.HIGH, 2.25, IF)), this.key = "ruinFields", this.floraChances = {
```

#### 112. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1571` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1571)

```diff
-             }, this.outcropChance = MC.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new wC.h([{
+             }, this.outcropChance = jk.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new Tk.l([{
```

#### 113. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1577` → after: `L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577) · [Before (L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1577)

```diff
-             }], `${bC}RuinFieldsHeight`)
+             }], `${ik}RuinFieldsHeight`)
```

#### 114. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1589)

```diff
-             super(CC, zC, ZC, `${QC}SaltFlats`, bC, nC), this.key = "saltFlats", this.floraChances = {
+             super(kk, Fk, Ik, `${Xk}SaltFlats`, ik, yk), this.key = "saltFlats", this.floraChances = {
```

#### 115. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1592)

```diff
-             }, this.outcropChance = MC.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new wC.h([{
+             }, this.outcropChance = jk.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new Tk.l([{
```

#### 116. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1598` → after: `L1598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598) · [Before (L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1598)

```diff
-             }], `${QC}SaltFlatsHeight`)
+             }], `${Xk}SaltFlatsHeight`)
```

#### 117. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1616)

```diff
-             super(CC, zC, ZC, `${QC}SurvivorGrove`, bC, nC), this.key = "survivorGrove", this.floraChances = {
+             super(kk, Fk, Ik, `${Xk}SurvivorGrove`, ik, yk), this.key = "survivorGrove", this.floraChances = {
```

#### 118. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1620` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1620)

```diff
-             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = MC.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new wC.h([{
+             }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = jk.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new Tk.l([{
```

#### 119. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1626)

```diff
-             }], `${QC}SurvivorGroveHeight`)
+             }], `${Xk}SurvivorGroveHeight`)
```

#### 120. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1641)

```diff
-               Ig: zC,
+               se: Fk,
```

#### 121. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1657)

```diff
-               WC = (0, bC.k)(ZC);
+               tk = (0, ik.n)(Ik);
```

#### 122. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1667)

```diff
-       574: (CC, zC, ZC) => {
+       609: (kk, Fk, Ik) => {
```

#### 123. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1669)

```diff
-           e: () => QC
+           c: () => Xk
```

#### 124. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1677-L1678` → after: `L1677-L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678) · [Before (L1677-L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1677-L1678)

```diff
-               if (void 0 !== ZC[CC]) throw new Error(`Duplicate value found in bi-directional table: ${String(CC)}`);
-               ZC[CC] = "string" === zC ? QC : Number(QC)
+               if (void 0 !== Ik[kk]) throw new Error(`Duplicate value found in bi-directional table: ${String(kk)}`);
+               Ik[kk] = "string" === Fk ? Xk : Number(Xk)
```

#### 125. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1690` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690) · [Before (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1690)

```diff
-       39511: (CC, zC, ZC) => {
+       39688: (kk, Fk, Ik) => {
```

#### 126. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1692)

```diff
-           b: () => wC
+           c: () => Tk
```

#### 127. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1694)

```diff
-         var QC = ZC(38974);
+         var Xk = Ik(39143);
```

#### 128. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1697` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1697) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1697)

```diff
-             let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new QC.b,
+             let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Xk.d,
```

#### 129. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1723)

```diff
-       38974: (CC, zC, ZC) => {
+       39143: (kk, Fk, Ik) => {
```

#### 130. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1725` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1725) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1725)

```diff
-           b: () => QC
+           d: () => Xk
```

#### 131. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1850` → after: `L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1850) · [Before (L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1850)

```diff
-             super(`${QC.name} has been mutated during iteration`)
+             super(`${Xk.name} has been mutated during iteration`)
```

#### 132. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1854` → after: `L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1854) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1854)

```diff
-       39583: (CC, zC, ZC) => {
+       39756: (kk, Fk, Ik) => {
```

#### 133. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1856` → after: `L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1856) · [Before (L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1856)

```diff
-           c: () => QC,
+           b: () => Xk,
```

#### 134. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1924` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1924) · [Before (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1924)

```diff
-           return CC > -bC && CC < bC && zC > -bC && zC < bC ? CC * (2 * bC) + zC : `${CC}|${zC}`
+           return kk > -ik && kk < ik && Fk > -ik && Fk < ik ? kk * (2 * ik) + Fk : `${kk}|${Fk}`
```

#### 135. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1936)

```diff
-       39518: (CC, zC, ZC) => {
+       39697: (kk, Fk, Ik) => {
```

#### 136. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1944)

```diff
-           e: () => QC
+           b: () => Xk
```

#### 137. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1947` → after: `L1947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1947) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1947)

```diff
-       39526: (CC, zC, ZC) => {
+       39703: (kk, Fk, Ik) => {
```

#### 138. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1949` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1949) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1949)

```diff
-           d: () => aC,
+           e: () => Bk,
```

#### 139. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1951-L1952` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1951) · [Before (L1951-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1951-L1952)

```diff
-           h: () => YC,
-           l: () => yC,
+           k: () => nk,
```

#### 140. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1956` → after: `L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1956) · [Before (L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1956)

```diff
-           v: () => rC,
+           w: () => ck,
```

#### 141. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1960-L1962` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1959) · [Before (L1960-L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1960-L1962)

```diff
-           D: () => mC,
-           F: () => cC,
-           I: () => HC,
+           G: () => dk,
```

#### 142. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1964-L1966` → after: `L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1961) · [Before (L1964-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1964-L1966)

```diff
-           L: () => DC,
-           N: () => lC,
-           O: () => sC,
+           M: () => Ck,
```

#### 143. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1970-L1973` → after: `L1964-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1964-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/procGenWorker.js#L1964-L1973) · [Before (L1970-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/procGenWorker.js#L1970-L1973)

```diff
-           U: () => jC,
-           W: () => uC,
-           Z: () => XC,
-           ab: () => KC
+           T: () => Yk,
+           X: () => Rk,
+           Y: () => Wk,
+           ab: () => bk,
+           bb: () => hk,
+           cb: () => rk,
+           eb: () => Ak,
+           hb: () => Nk,
+           lb: () => Uk,
+           pb: () => Ok
```
