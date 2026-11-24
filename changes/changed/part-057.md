# Changed — Bundle Modifications Report (Part 057 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `57 / 69` (**386** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 056](part-056.md) · [Part 058 →](part-058.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (122 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf)

#### 35. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L590)

```diff
-       return TC([`${bC}: ${nC} bytes differ`, ...fC.map((CC => `  +${CC}: cpu ${gC(zC.bytes,CC)} | gpu ${gC(ZC,CC)}`))].join("\n")), `${bC}: ${nC} bytes differ, first at ${fC.join(", ")} (context in the saved file)`
+       return ap([`${Ip}: ${Sp} bytes differ`, ...xp.map((pp => `  +${pp}: cpu ${yp(ip.bytes,pp)} | gpu ${yp(cp,pp)}`))].join("\n")), `${Ip}: ${Sp} bytes differ, first at ${xp.join(", ")} (context in the saved file)`
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L594)

```diff
-       if (0 === CC.vertices.length) return void sC(`decode probe (${CC.reason}): no terrain draw probed (${CC.draws.length} seen)`);
+       if (0 === pp.vertices.length) return void hp(`decode probe (${pp.reason}): no terrain draw probed (${pp.draws.length} seen)`);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L634)

```diff
-               ZC.byBand[qC] = (null !== (wC = ZC.byBand[qC]) && void 0 !== wC ? wC : 0) + 1, ZC.first.length < NC && ZC.first.push({
+               cp.byBand[Yp] = (null !== (op = cp.byBand[Yp]) && void 0 !== op ? op : 0) + 1, cp.first.length < Pp && cp.first.push({
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L642)

```diff
-         ZC = zC.byDirection.map(((CC, zC) => CC ? `${nC[zC]} ${CC}` : "")).filter(Boolean).join(" "),
+         cp = ip.byDirection.map(((pp, ip) => pp ? `${Sp[ip]} ${pp}` : "")).filter(Boolean).join(" "),
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L645)

```diff
-           return `${zC}: ${ZC}`
+           return `${ip}: ${cp}`
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L647-L649` → after: `L647-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L647-L649) · [Before (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L647-L649)

```diff
-       if (sC(`decode probe (${CC.reason}): ${zC.mismatches}/${zC.vertices} vertices differ from the CPU decode over ${CC.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (zC.mismatches ? ` by direction [${ZC}] diagonal [0: ${zC … [truncated]
-         sC(`decode probe input: ${CC.fed.differing}/${CC.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (CC.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (CC.fed.fa … [truncated]
-         for (const zC of CC.fed.first) sC(`  ${zC}`)
+       if (hp(`decode probe (${pp.reason}): ${ip.mismatches}/${ip.vertices} vertices differ from the CPU decode over ${pp.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ip.mismatches ? ` by direction [${cp}] diagonal [0: ${ip … [truncated]
+         hp(`decode probe input: ${pp.fed.differing}/${pp.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (pp.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (pp.fed.fa … [truncated]
+         for (const ip of pp.fed.first) hp(`  ${ip}`)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L653)

```diff
-         sC(`  mismatch part ${wC.group} r0 ${CC.toString(16)} r1 ${zC.toString(16)} r2 ${ZC.toString(16)} slot ${wC.slot} (${nC[fC(ZC)]}): expected ${wC.expected.map(bz).join(",")} gpu ${wC.gpu.map(bz).join(",")}`)
+         hp(`  mismatch part ${op.group} r0 ${pp.toString(16)} r1 ${ip.toString(16)} r2 ${cp.toString(16)} slot ${op.slot} (${Sp[xp(cp)]}): expected ${op.expected.map(xi).join(",")} gpu ${op.gpu.map(xi).join(",")}`)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L655)

```diff
-       TC(`decode probe translations: ${[...zC.translations].map((CC=>{let[zC,ZC]=CC;return`${zC}: ${ZC.map(bz).join(",")}`})).join("; ")}`)
+       ap(`decode probe translations: ${[...ip.translations].map((pp=>{let[ip,cp]=pp;return`${ip}: ${cp.map(xi).join(",")}`})).join("; ")}`)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L688` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L688) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L688)

```diff
-                 sC(`draw ranges (${CC.reason}): ${CC.terrainDraws} terrain draws in the frame, the first ${CC.draws.length} here`);
+                 hp(`draw ranges (${pp.reason}): ${pp.terrainDraws} terrain draws in the frame, the first ${pp.draws.length} here`);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L690)

```diff
-                   const CC = zC.np.slice(0, 8).map((CC => {
+                   const pp = ip.By.slice(0, 8).map((pp => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L692)

```diff
-                       return `${zC}+${ZC}`
+                       return `${ip}+${cp}`
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L694-L695` → after: `L694-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L694-L695) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L694-L695)

```diff
-                     ZC = zC.np.length > 8 ? ` (+${zC.np.length-8} ranges)` : "";
-                   sC(`  ${KC(zC.program)} ${zC.program.terrain} ${zC.call} ${CC}${ZC} x${zC.instances}${zC.group>=0?` part ${zC.group} chunk ${zC.chunk}`:""} | ${zC.attributes.join(" | ")}`)
+                     cp = ip.By.length > 8 ? ` (+${ip.By.length-8} ranges)` : "";
+                   hp(`  ${Cp(ip.program)} ${ip.program.terrain} ${ip.call} ${pp}${cp} x${ip.instances}${ip.group>=0?` part ${ip.group} chunk ${ip.chunk}`:""} | ${ip.attributes.join(" | ")}`)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L713)

```diff
-                     zC.push(`${wC.kind}#${XC(QC)}: no CPU copy (${HC.uncopied} pages over the copy budget)`);
+                     ip.push(`${op.kind}#${Np(Op)}: no CPU copy (${Qp.uncopied} pages over the copy budget)`);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L717)

```diff
-                     zC.push(Zz(`buf#${CC.id}`, CC, BC(bC, wC.buffer, 0, CC.bytes.length)));
+                     ip.push(oi(`buf#${pp.id}`, pp, sp(Ip, op.buffer, 0, pp.bytes.length)));
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L722)

```diff
-                   zC.push(Zz(`tex#${CC.id} (${16===CC.texelBytes?"records":"light"})`, CC, nC))
+                   ip.push(oi(`tex#${pp.id} (${16===pp.texelBytes?"records":"light"})`, pp, Sp))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L724)

```diff
-                 for (const QC of zC) sC(`page readback ${QC}`)
+                 for (const Op of ip) hp(`page readback ${Op}`)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L727)

```diff
-               sC(`check failed: ${String(CC)}`)
+               hp(`check failed: ${String(pp)}`)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L740)

```diff
-     var fz = ZC(4635);
+     var Yi = cp(4791);
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L750)

```diff
-         CC[zC] = wC, (0, fz.v)(wC, QC)
+         pp[ip] = op, (0, Yi.u)(op, Op)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L788)

```diff
-         bC = ZC ? ZC * QC : CC.byteLength - zC * QC;
+         Ip = cp ? cp * Op : pp.byteLength - ip * Op;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L846)

```diff
-           nC = null !== (zC = gz.get(bC)) && void 0 !== zC ? zC : [];
+           Sp = null !== (ip = wi.get(Ip)) && void 0 !== ip ? ip : [];
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L857)

```diff
-               pz.lost < oz && (pz.lost++, sC(`${zC}${"statusMessage"in CC?`: ${String(CC.statusMessage)}`:""}`))
+               ti.lost < Di && (ti.lost++, hp(`${ip}${"statusMessage"in pp?`: ${String(pp.statusMessage)}`:""}`))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L861)

```diff
-           const bC = null !== (ZC = gz.get(zC)) && void 0 !== ZC ? ZC : [];
+           const Ip = null !== (cp = wi.get(ip)) && void 0 !== cp ? cp : [];
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L866-L867` → after: `L866-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L866-L867) · [Before (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L866-L867)

```diff
-             const CC = null !== (oC = Mz.get(FC)) && void 0 !== oC ? oC : "";
-             /\bgl_Position\b/.test(CC) ? nC = CC : fC = CC
+             const pp = null !== (Lp = Ui.get(Dp)) && void 0 !== Lp ? Lp : "";
+             /\bgl_Position\b/.test(pp) ? Sp = pp : xp = pp
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L871)

```diff
-             name: null !== (QC = null === (wC = hC.exec(nC)) || void 0 === wC ? void 0 : wC[1]) && void 0 !== QC ? QC : null,
+             name: null !== (Op = null === (op = Mp.exec(Sp)) || void 0 === op ? void 0 : op[1]) && void 0 !== Op ? Op : null,
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L882)

```diff
-               return null !== (ZC = CC.getShaderInfoLog(zC)) && void 0 !== ZC ? ZC : ""
+               return null !== (cp = pp.getShaderInfoLog(ip)) && void 0 !== cp ? cp : ""
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L884)

```diff
-             zC.length > 0 && TC(`program ${KC(qC)} (${qC.terrain}) shader logs:\n${aC(zC.join("\n"))}`)
+             ip.length > 0 && ap(`program ${Cp(Yp)} (${Yp.terrain}) shader logs:\n${np(ip.join("\n"))}`)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L894)

```diff
-             const zC = "number" === typeof ZC[1] ? null : Az(ZC[1], null !== (bC = ZC[3]) && void 0 !== bC ? bC : 0, null !== (nC = ZC[4]) && void 0 !== nC ? nC : 0);
+             const ip = "number" === typeof cp[1] ? null : ui(cp[1], null !== (Ip = cp[3]) && void 0 !== Ip ? Ip : 0, null !== (Sp = cp[4]) && void 0 !== Sp ? Sp : 0);
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L896)

```diff
-             if (Iz(CC, "number" === typeof ZC[1] ? ZC[1] : null !== (fC = null === zC || void 0 === zC ? void 0 : zC.length) && void 0 !== fC ? fC : 0), zC) null === (oC = dC.get(CC)) || void 0 === oC || oC.bytes.set(zC)
+             if (mi(pp, "number" === typeof cp[1] ? cp[1] : null !== (xp = null === ip || void 0 === ip ? void 0 : ip.length) && void 0 !== xp ? xp : 0), ip) null === (Lp = Xp.get(pp)) || void 0 === Lp || Lp.bytes.set(ip)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L907)

```diff
-             QC = Az(ZC[2], null !== (bC = ZC[3]) && void 0 !== bC ? bC : 0, null !== (nC = ZC[4]) && void 0 !== nC ? nC : 0);
+             Op = ui(cp[2], null !== (Ip = cp[3]) && void 0 !== Ip ? Ip : 0, null !== (Sp = cp[4]) && void 0 !== Sp ? Sp : 0);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L941)

```diff
-           let qC = Az(zC[8], null !== (ZC = zC[9]) && void 0 !== ZC ? ZC : 0);
+           let Yp = ui(ip[8], null !== (cp = ip[9]) && void 0 !== cp ? cp : 0);
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L993)

```diff
-       Gz[CC] += QC, Rz < 32 && zC.bytes.length >= 1 << 20 && (Rz++, TC(`upload ${CC} #${zC.id} +${ZC} ${QC} B`))
+       di[pp] += Op, ei < 32 && ip.bytes.length >= 1 << 20 && (ei++, ap(`upload ${pp} #${ip.id} +${cp} ${Op} B`))
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1006)

```diff
-         bC = (null !== (QC = CC.getProgramInfoLog(zC)) && void 0 !== QC ? QC : "").trim();
+         Ip = (null !== (Op = pp.getProgramInfoLog(ip)) && void 0 !== Op ? Op : "").trim();
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1008)

```diff
-       null === ZC.terrain && wC || (sC(`program ${KC(ZC)} ${null!==(nC=ZC.terrain)&&void 0!==nC?nC:"other"} link ${wC?"ok":"FAILED"}${bC?`: ${aC(bC,300)}`:""}`), bC && TC(`program ${KC(ZC)} link log:\n${aC(bC)}`))
+       null === cp.terrain && op || (hp(`program ${Cp(cp)} ${null!==(Sp=cp.terrain)&&void 0!==Sp?Sp:"other"} link ${op?"ok":"FAILED"}${Ip?`: ${np(Ip,300)}`:""}`), Ip && ap(`program ${Cp(cp)} link log:\n${np(Ip)}`))
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1016)

```diff
-       const nC = null !== (QC = bC.terrain) && void 0 !== QC ? QC : "other",
+       const Sp = null !== (Op = Ip.terrain) && void 0 !== Op ? Op : "other",
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1018)

```diff
-           np: fC,
+           By: xp,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1024)

```diff
-                 np: [
+                 By: [
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1031)

```diff
-                 np: [
+                 By: [
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1037)

```diff
-                 np: [
+                 By: [
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1044` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1044) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1044)

```diff
-                 np: [
+                 By: [
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1056` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1056) · [Before (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1056)

```diff
-                 np: bC,
+                 By: Ip,
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1062)

```diff
-                 np: [], instances: 0
+                 By: [], instances: 0
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1066)

```diff
-         qC = "inst" === bC.terrain ? oC : fC.reduce(((CC, zC) => {
+         Yp = "inst" === Ip.terrain ? Lp : xp.reduce(((pp, ip) => {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1086)

```diff
-             wC = zC.getFramebufferAttachmentParameter(SC.DRAW_FRAMEBUFFER, SC.DEPTH_ATTACHMENT, SC.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(zC.getFramebufferAttachmentParameter(SC.DRAW_FRAMEBUFFER,SC.DEPTH_ATTACHMENT,SC.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
+             op = ip.getFramebufferAttachmentParameter(Up.DRAW_FRAMEBUFFER, Up.DEPTH_ATTACHMENT, Up.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ip.getFramebufferAttachmentParameter(Up.DRAW_FRAMEBUFFER,Up.DEPTH_ATTACHMENT,Up.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1089)

```diff
-           return `depth ${null!==(zC=QC[ZC])&&void 0!==zC?zC:`0x${ZC.toString(16)}`} clear ${bC}${516===ZC||518===ZC?" (reverse-Z)":""}, samples ${String(CC.getParameter(SC.SAMPLES))}, ${wC}`
+           return `depth ${null!==(ip=Op[cp])&&void 0!==ip?ip:`0x${cp.toString(16)}`} clear ${Ip}${516===cp||518===cp?" (reverse-Z)":""}, samples ${String(pp.getParameter(Up.SAMPLES))}, ${op}`
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1092)

```diff
-         ZC !== SC.NO_ERROR && pz.gl < oz && (pz.gl++, sC(`GL error 0x${ZC.toString(16)} after program ${KC(bC)}'s first terrain draw (${zC})`))
+         cp !== Up.NO_ERROR && ti.gl < Di && (ti.gl++, hp(`GL error 0x${cp.toString(16)} after program ${Cp(Ip)}'s first terrain draw (${ip})`))
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1099-L1100` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1099-L1100) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1099-L1100)

```diff
-     var mz = ZC(4445),
-       Hz = ZC(4640);
+     var Qi = cp(4596),
+       Ji = cp(4794);
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1129-L1131` → after: `L1129-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1129-L1131) · [Before (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1129-L1131)

```diff
-       const ZC = null !== CC && void 0 !== CC ? CC : {},
-         QC = null !== zC && void 0 !== zC ? zC : Object.keys(Object.getPrototypeOf(ZC)).concat(Object.keys(ZC));
-       return [...new Set(QC)].filter((CC => "number" === typeof ZC[CC])).map((CC => `${CC} ${String(ZC[CC])}`)).join(", ")
+       const cp = null !== pp && void 0 !== pp ? pp : {},
+         Op = null !== ip && void 0 !== ip ? ip : Object.keys(Object.getPrototypeOf(cp)).concat(Object.keys(cp));
+       return [...new Set(Op)].filter((pp => "number" === typeof cp[pp])).map((pp => `${pp} ${String(cp[pp])}`)).join(", ")
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1136)

```diff
-       const QC = null !== (ZC = zC.vertex) && void 0 !== ZC ? ZC : {};
+       const Op = null !== (cp = ip.vertex) && void 0 !== cp ? cp : {};
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1139)

```diff
-         const ZC = String(null !== (wC = QC.entryPoint) && void 0 !== wC ? wC : "");
+         const cp = String(null !== (op = Op.entryPoint) && void 0 !== op ? op : "");
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1143-L1146` → after: `L1143-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1143-L1146) · [Before (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1143-L1146)

```diff
-           const CC = null !== (bC = zC.depthStencil) && void 0 !== bC ? bC : {},
-             QC = null !== (nC = zC.multisample) && void 0 !== nC ? nC : {},
-             wC = String(null !== (fC = CC.depthCompare) && void 0 !== fC ? fC : "");
-           sC(`WebGPU terrain pipeline ${ZC}: depth ${String(null!==(oC=CC.format)&&void 0!==oC?oC:"none")} ${wC}${wC.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(qC=QC.count)&&void 0!==qC?qC:1)}`)
+           const pp = null !== (Ip = ip.depthStencil) && void 0 !== Ip ? Ip : {},
+             Op = null !== (Sp = ip.multisample) && void 0 !== Sp ? Sp : {},
+             op = String(null !== (xp = pp.depthCompare) && void 0 !== xp ? xp : "");
+           hp(`WebGPU terrain pipeline ${cp}: depth ${String(null!==(Lp=pp.format)&&void 0!==Lp?Lp:"none")} ${op}${op.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Yp=Op.count)&&void 0!==Yp?Yp:1)}`)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1166` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1166) · [Before (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1166)

```diff
-       (tz.draws++, "draw" === CC || "drawIndexed" === CC) && (tz.faces += ZC[0] * (null !== (QC = ZC[1]) && void 0 !== QC ? QC : 1) / 6);
+       (Gi.draws++, "draw" === pp || "drawIndexed" === pp) && (Gi.faces += cp[0] * (null !== (Op = cp[1]) && void 0 !== Op ? Op : 1) / 6);
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1170)

```diff
-           return `${zC} ${String(null!==wC&&void 0!==wC?wC:"instances"===zC?1:0)}`
+           return `${ip} ${String(null!==op&&void 0!==op?op:"instances"===ip?1:0)}`
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1172)

```diff
-         az.push(`  ${zC} ${CC} ${QC.join(" ")}`)
+         gi.push(`  ${ip} ${pp} ${Op.join(" ")}`)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1184-L1186` → after: `L1184-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1184-L1186) · [Before (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1184-L1186)

```diff
-             const ZC = null !== (zC = CC.info) && void 0 !== zC ? zC : {};
-             sC(`WebGPU adapter ${["vendor","architecture","device","description"].map((CC=>{var zC;return`${CC} "${String(null!==(zC=ZC[CC])&&void 0!==zC?zC:"")}"`})).join(" ")}${CC.isFallbackAdapter?" (fallback)":""}`), sC(`WebGPU adapter features ${jz(CC.features)}`), sC(`WebGP … [truncated]
-           }(CC) : sC(`WebGPU requestAdapter(${JSON.stringify(null!==(zC=ZC[0])&&void 0!==zC?zC:{})}) gave none`);
+             const cp = null !== (ip = pp.info) && void 0 !== ip ? ip : {};
+             hp(`WebGPU adapter ${["vendor","architecture","device","description"].map((pp=>{var ip;return`${pp} "${String(null!==(ip=cp[pp])&&void 0!==ip?ip:"")}"`})).join(" ")}${pp.isFallbackAdapter?" (fallback)":""}`), hp(`WebGPU adapter features ${Zi(pp.features)}`), hp(`WebGP … [truncated]
+           }(pp) : hp(`WebGPU requestAdapter(${JSON.stringify(null!==(ip=cp[0])&&void 0!==ip?ip:{})}) gave none`);
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1192)

```diff
-           sC(`WebGPU device features ${jz(CC.features)}`), sC(`WebGPU device limits ${yz(CC.limits,Ez)}`), CC.addEventListener("uncapturederror", (CC => {
+           hp(`WebGPU device features ${Zi(pp.features)}`), hp(`WebGPU device limits ${zi(pp.limits,Bi)}`), pp.addEventListener("uncapturederror", (pp => {
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1197` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1197) · [Before (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1197)

```diff
-               sC(`WebGPU uncaptured ${null!==(zC=null===wC||void 0===wC||null===(ZC=wC.constructor)||void 0===ZC?void 0:ZC.name)&&void 0!==zC?zC:"error"}: ${aC(String(null!==(QC=null===wC||void 0===wC?void 0:wC.message)&&void 0!==QC?QC:""),600)}`)
+               hp(`WebGPU uncaptured ${null!==(ip=null===op||void 0===op||null===(cp=op.constructor)||void 0===cp?void 0:cp.name)&&void 0!==ip?ip:"error"}: ${np(String(null!==(Op=null===op||void 0===op?void 0:op.message)&&void 0!==Op?Op:""),600)}`)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1203` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1203) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1203)

```diff
-             sC(`WebGPU device lost (${String(CC.reason)}): ${aC(String(null!==(zC=CC.message)&&void 0!==zC?zC:""),600)}`)
+             hp(`WebGPU device lost (${String(pp.reason)}): ${np(String(null!==(ip=pp.message)&&void 0!==ip?ip:""),600)}`)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1206)

```diff
-           throw sC(`WebGPU requestDevice failed: ${String(CC)}`), CC
+           throw hp(`WebGPU requestDevice failed: ${String(pp)}`), pp
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1222)

```diff
-               zC[String(ZC.type)] = (null !== (QC = zC[String(ZC.type)]) && void 0 !== QC ? QC : 0) + 1
+               ip[String(cp.type)] = (null !== (Op = ip[String(cp.type)]) && void 0 !== Op ? Op : 0) + 1
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1224-L1225` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1224-L1225) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1224-L1225)

```diff
-             const wC = CC.messages.map((CC => `${String(CC.type)} ${String(CC.lineNum)}:${String(CC.linePos)} ${String(CC.message)}`)).join("\n");
-             rz.compile < oz && (rz.compile++, sC(`WebGPU ${ZC?"terrain ":""}shader module compiled: ${JSON.stringify(zC)}${wC?` first: ${aC(wC.split("\n")[0],300)}`:""}`)), wC && TC(`WebGPU shader module messages:\n${aC(wC)}`)
+             const op = pp.messages.map((pp => `${String(pp.type)} ${String(pp.lineNum)}:${String(pp.linePos)} ${String(pp.message)}`)).join("\n");
+             ai.compile < Di && (ai.compile++, hp(`WebGPU ${cp?"terrain ":""}shader module compiled: ${JSON.stringify(ip)}${op?` first: ${np(op.split("\n")[0],300)}`:""}`)), op && ap(`WebGPU shader module messages:\n${np(op)}`)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1227)

```diff
-         }(nC, String(null !== (zC = (null !== (ZC = wC[0]) && void 0 !== ZC ? ZC : {}).code) && void 0 !== zC ? zC : "")), nC
+         }(Sp, String(null !== (ip = (null !== (cp = op[0]) && void 0 !== cp ? cp : {}).code) && void 0 !== ip ? ip : "")), Sp
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1231)

```diff
-         return Lz(bC, null !== (zC = QC[0]) && void 0 !== zC ? zC : {}), bC
+         return si(Ip, null !== (ip = Op[0]) && void 0 !== ip ? ip : {}), Ip
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1236)

```diff
-           return Lz(CC, null !== (zC = ZC[0]) && void 0 !== zC ? zC : {}), CC
+           return si(pp, null !== (ip = cp[0]) && void 0 !== ip ? ip : {}), pp
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1246-L1248` → after: `L1246-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1246-L1248) · [Before (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1246-L1248)

```diff
-             } = null !== zC && void 0 !== zC ? zC : {}, fC = String(null !== (ZC = (null !== (QC = CC.vertex) && void 0 !== QC ? QC : {}).entryPoint) && void 0 !== ZC ? ZC : "");
-             sC(`WebGPU pipeline "${String(null!==(wC=CC.label)&&void 0!==wC?wC:"")}" ${fC} rejected (${String(null!==bC&&void 0!==bC?bC:"no reason")}): ${aC(String(null!==nC&&void 0!==nC?nC:zC),600)}`)
-           }(null !== (zC = ZC[0]) && void 0 !== zC ? zC : {}, CC), CC
+             } = null !== ip && void 0 !== ip ? ip : {}, xp = String(null !== (cp = (null !== (Op = pp.vertex) && void 0 !== Op ? Op : {}).entryPoint) && void 0 !== cp ? cp : "");
+             hp(`WebGPU pipeline "${String(null!==(op=pp.label)&&void 0!==op?op:"")}" ${xp} rejected (${String(null!==Ip&&void 0!==Ip?Ip:"no reason")}): ${np(String(null!==Sp&&void 0!==Sp?Sp:ip),600)}`)
+           }(null !== (ip = cp[0]) && void 0 !== ip ? ip : {}, pp), pp
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1252)

```diff
-         const bC = null !== (zC = QC[0]) && void 0 !== zC ? zC : {};
+         const Ip = null !== (ip = Op[0]) && void 0 !== ip ? ip : {};
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1254)

```diff
-         sz++ < 3 && sC(`WebGPU canvas ${String(bC.format)} ${String(null!==(nC=bC.colorSpace)&&void 0!==nC?nC:"srgb")} alpha ${String(null!==(fC=bC.alphaMode)&&void 0!==fC?fC:"opaque")}`);
+         ni++ < 3 && hp(`WebGPU canvas ${String(Ip.format)} ${String(null!==(Sp=Ip.colorSpace)&&void 0!==Sp?Sp:"srgb")} alpha ${String(null!==(xp=Ip.alphaMode)&&void 0!==xp?xp:"opaque")}`);
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1266)

```diff
-         ...mz.c
+         ...Qi.d
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1279)

```diff
-         ...mz.c
+         ...Qi.d
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1281-L1283` → after: `L1281-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1281-L1283) · [Before (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1281-L1283)

```diff
-         faceCull: "0" === (0, bC.j)("faceCull") ? "0" : "1",
-         adrenoProbe: null !== (CC = (0, bC.j)("adrenoProbe")) && void 0 !== CC ? CC : ""
-       }), sC("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Nz || "undefined" === typeof window || (Nz = !0, "undefined" !== typeof WebGL2RenderingContext && iz(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
+         faceCull: "0" === (0, Ip.o)("faceCull") ? "0" : "1",
+         adrenoProbe: null !== (pp = (0, Ip.o)("adrenoProbe")) && void 0 !== pp ? pp : ""
+       }), hp("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), yi || "undefined" === typeof window || (yi = !0, "undefined" !== typeof WebGL2RenderingContext && Ri(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1290-L1292` → after: `L1290-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1290-L1292) · [Before (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1290-L1292)

```diff
-       WZ(), QZ = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.backend) && void 0 !== zC ? zC : null;
-       const QC = `, renderer param ${null!==(ZC=(0,bC.j)("renderer"))&&void 0!==ZC?ZC:"none"}, faceCull ${"0"===bZ.faceCull?"off (whole parts)":"on"}, adrenoProbe ${bZ.adrenoProbe||"none"}`;
-       sC(`${(0,Hz.b)(CC)}${null===CC?"":QC}`)
+       yc(), Sc = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.backend) && void 0 !== ip ? ip : null;
+       const Op = `, renderer param ${null!==(cp=(0,Ip.o)("renderer"))&&void 0!==cp?cp:"none"}, faceCull ${"0"===Lc.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Lc.adrenoProbe||"none"}`;
+       hp(`${(0,Ji.e)(pp)}${null===pp?"":Op}`)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1297-L1298` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1297-L1298) · [Before (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1297-L1298)

```diff
-         zC = gZ(FZ, kz, Vz).then((zC => PZ(`${Math.round((performance.now()-CC)/1e3)} s after playable${zC?"":", no terrain drawn yet"}`)));
-       (0, wC.d)(sC, (async () => {
+         ip = vc(Wc, ic, cc).then((ip => dc(`${Math.round((performance.now()-pp)/1e3)} s after playable${ip?"":", no terrain drawn yet"}`)));
+       (0, op.c)(hp, (async () => {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1303-L1304` → after: `L1303-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1303-L1304) · [Before (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1303-L1304)

```diff
-       const wC = (0, QC.c)(ZC).then((() => !1));
-       return await (0, QC.c)(zC), Promise.race([CC.then((() => !0)), wC])
+       const op = (0, Op.e)(cp).then((() => !1));
+       return await (0, Op.e)(ip), Promise.race([pp.then((() => !0)), op])
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1316` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1316) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1316)

```diff
-       (nZ = !0, sC(`renderer caps ${null!==(CC=bZ.caps)&&void 0!==CC?CC:"(not noted)"}; terrain fetch ${null!==(zC=bZ.fetch)&&void 0!==zC?zC:"(not noted)"}`), bZ.adrenoProbe) && sC(`adrenoProbe ${bZ.adrenoProbe} asked; in force (storage fetch only): ${null!==(ZC=bZ.probe)&&void 0 … [truncated]
+       (Yc = !0, hp(`renderer caps ${null!==(pp=Lc.caps)&&void 0!==pp?pp:"(not noted)"}; terrain fetch ${null!==(ip=Lc.fetch)&&void 0!==ip?ip:"(not noted)"}`), Lc.adrenoProbe) && hp(`adrenoProbe ${Lc.adrenoProbe} asked; in force (storage fetch only): ${null!==(cp=Lc.probe)&&void 0 … [truncated]
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1325)

```diff
-             ZC.push(`GL ${String(CC.getParameter(CC.VERSION))} | ${String(CC.getParameter(CC.SHADING_LANGUAGE_VERSION))} | ${String(CC.getParameter(CC.VENDOR))} / ${String(CC.getParameter(CC.RENDERER))}`), ZC.push(`GL unmasked ${wC} / ${bC}`);
+             cp.push(`GL ${String(pp.getParameter(pp.VERSION))} | ${String(pp.getParameter(pp.SHADING_LANGUAGE_VERSION))} | ${String(pp.getParameter(pp.VENDOR))} / ${String(pp.getParameter(pp.RENDERER))}`), cp.push(`GL unmasked ${op} / ${Ip}`);
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1335)

```diff
-             "MAX_UNIFORM_BLOCK_SIZE" in CC && nC.push(["MAX_UNIFORM_BLOCK_SIZE", CC.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", CC.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", CC.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", CC.MAX_TRANSFORM_FEEDBACK_I … [truncated]
+             "MAX_UNIFORM_BLOCK_SIZE" in pp && Sp.push(["MAX_UNIFORM_BLOCK_SIZE", pp.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", pp.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", pp.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", pp.MAX_TRANSFORM_FEEDBACK_I … [truncated]
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1339` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1339) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1339)

```diff
-               return `${ZC} highp float ${QC?`${QC.rangeMin}/${QC.rangeMax}/${QC.precision}`:"?"} int ${wC?`${wC.rangeMin}/${wC.rangeMax}/${wC.precision}`:"?"}`
+               return `${cp} highp float ${Op?`${Op.rangeMin}/${Op.rangeMax}/${Op.precision}`:"?"} int ${op?`${op.rangeMin}/${op.rangeMax}/${op.precision}`:"?"}`
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1341)

```diff
-             ZC.push(`GL precision ${fC(CC.VERTEX_SHADER,"VS")}, ${fC(CC.FRAGMENT_SHADER,"FS")}`);
+             cp.push(`GL precision ${xp(pp.VERTEX_SHADER,"VS")}, ${xp(pp.FRAGMENT_SHADER,"FS")}`);
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1343` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1343) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1343)

```diff
-             return ZC.push(`GL context ${JSON.stringify(oC)} drawingBuffer ${CC.drawingBufferWidth}x${CC.drawingBufferHeight}${"drawingBufferFormat"in CC?` format 0x${Number(CC.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in CC?` ${String(CC.drawingBufferColo … [truncated]
+             return cp.push(`GL context ${JSON.stringify(Lp)} drawingBuffer ${pp.drawingBufferWidth}x${pp.drawingBufferHeight}${"drawingBufferFormat"in pp?` format 0x${Number(pp.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in pp?` ${String(pp.drawingBufferColo … [truncated]
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1350)

```diff
-           sC(`programs: ${zC} live of ${YC.length} linked, ${CC} packed terrain; CPU page copies ${Math.round(HC.shadowBytes/1048576)} MiB (${HC.uncopied} over budget)`)
+           hp(`programs: ${ip} live of ${Ep.length} linked, ${pp} packed terrain; CPU page copies ${Math.round(Qp.shadowBytes/1048576)} MiB (${Qp.uncopied} over budget)`)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1363)

```diff
-                 az = null, sC(`WebGPU draw ranges (${CC}): ${zC.length} terrain draws recorded in a second (first ${qz}; bundles replay without new ones)`);
+                 gi = null, hp(`WebGPU draw ranges (${pp}): ${ip.length} terrain draws recorded in a second (first ${Ai}; bundles replay without new ones)`);
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1369)

```diff
-             if (await (0, mz.i)(bZ, "slotCheck", ["1"], zZ, ZZ), "1" === bZ.slotCheck) return void sC(`slot check: no answer in ${zZ} ms (only the storage fetch has one; a later answer logs on its own)`);
+             if (await (0, Qi.i)(Lc, "slotCheck", ["1"], oc, Ic), "1" === Lc.slotCheck) return void hp(`slot check: no answer in ${oc} ms (only the storage fetch has one; a later answer logs on its own)`);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1372)

```diff
-         sC(`check (${CC}) done: bloxdDebug.save() downloads it all`)
+         hp(`check (${pp}) done: bloxdDebug.save() downloads it all`)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1374)

```diff
-         sC(`check (${CC}) failed: ${String(zC)}`)
+         hp(`check (${pp}) failed: ${String(ip)}`)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1418-L1419` → after: `L1418-L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1418-L1419) · [Before (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1418-L1419)

```diff
-       const wC = "webgpu" === QZ ? [`terrain ${CC(zC.draws)} draws ${CC(zC.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((CC => ZC[CC].draws > 0)).map((zC => `${zC} ${CC(ZC[zC].draws)} draws ${CC(ZC[zC].faces)} faces a frame`));
-       sC(`${oZ} frames: ${wC.join(", ")||"no draws"}; uploaded ${Math.round(QC.buffer/1024)} KiB to buffers, ${Math.round(QC.texture/1024)} KiB to data textures`), oZ = 0
+       const op = "webgpu" === Sc ? [`terrain ${pp(ip.draws)} draws ${pp(ip.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((pp => cp[pp].draws > 0)).map((ip => `${ip} ${pp(cp[ip].draws)} draws ${pp(cp[ip].faces)} faces a frame`));
+       hp(`${Ac} frames: ${op.join(", ")||"no draws"}; uploaded ${Math.round(Op.buffer/1024)} KiB to buffers, ${Math.round(Op.texture/1024)} KiB to data textures`), Ac = 0
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1422)

```diff
-   4640: (CC, zC, ZC) => {
+   4794: (pp, ip, cp) => {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1425-L1426` → after: `L1425-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1425-L1426) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1425-L1426)

```diff
-       const zC = CC.adapter ? `${CC.adapter.vendor}/${CC.adapter.architecture}` : "none";
-       return `backend ${CC.backend}: reason ${CC.reason}, source ${CC.source}, adapter ${zC}`
+       const ip = pp.adapter ? `${pp.adapter.vendor}/${pp.adapter.architecture}` : "none";
+       return `backend ${pp.backend}: reason ${pp.reason}, source ${pp.source}, adapter ${ip}`
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L1429)

```diff
-       b: () => QC
+       e: () => Op
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L1-L2)

```diff
- export const id = 49;
- export const ids = [49];
+ export const id = 50;
+ export const ids = [50];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L4)

```diff
-   50726: (CC, zC, ZC) => {
+   51208: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L8-L19` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L8-L19) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L8-L19)

```diff
-     var QC = ZC(2848),
-       wC = ZC(615),
-       bC = ZC(107),
-       nC = ZC(4733),
-       fC = ZC(40858),
-       oC = ZC(4727),
-       qC = ZC(40542),
-       FC = ZC(40423),
-       WC = ZC(40580),
-       NC = ZC(2800),
-       MC = ZC(4445),
-       gC = ZC(34016);
+     var Op = cp(2963),
+       op = cp(657),
+       Ip = cp(129),
+       Sp = cp(4911),
+       xp = cp(41248),
+       Lp = cp(4903),
+       Yp = cp(40911),
+       Dp = cp(40783),
+       Ap = cp(40954),
+       Pp = cp(2908),
+       Wp = cp(4596),
+       yp = cp(34287);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L30)

```diff
-         return void 0 === CC || CC === this.noted || zC - this.atMs < ZC ? null : (this.noted = CC, this.lines++, this.atMs = zC, `${this.label}: ${CC}`)
+         return void 0 === pp || pp === this.noted || ip - this.atMs < cp ? null : (this.noted = pp, this.lines++, this.atMs = ip, `${this.label}: ${pp}`)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L41-L42)

```diff
-             const [ZC, QC] = CC.split(":"), wC = null !== (zC = SC.get(ZC.slice(-1))) && void 0 !== zC ? zC : "";
-             return `gl link failed: program row ${parseInt(ZC)}${wC}, read ${QC} ms after issue`
+             const [cp, Op] = pp.split(":"), op = null !== (ip = Up.get(cp.slice(-1))) && void 0 !== ip ? ip : "";
+             return `gl link failed: program row ${parseInt(cp)}${op}, read ${Op} ms after issue`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L47)

```diff
-         return this.heldLogged || void 0 === CC ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${CC}`)
+         return this.heldLogged || void 0 === pp ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${pp}`)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L51-L54` → after: `L51-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L51-L54) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L51-L54)

```diff
-         return [wC && `${wC}; tab ${(0,gC.f)(QC)}`, this.programUse.line(zC, ZC)].filter((CC => null !== CC))
-       }
-     }
-     var GC = ZC(4640);
+         return [op && `${op}; tab ${(0,yp.e)(Op)}`, this.programUse.line(ip, cp)].filter((pp => null !== pp))
+       }
+     }
+     var tp = cp(4794);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L93)

```diff
-         return this.logged >= 20 || this.seen.has(CC) ? (this.unlogged++, null) : (this.seen.add(CC), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${CC}` : CC)
+         return this.logged >= 20 || this.seen.has(pp) ? (this.unlogged++, null) : (this.seen.add(pp), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${pp}` : pp)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L102)

```diff
-       (0, NC.i)("renderlite", CC)
+       (0, Pp.n)("renderlite", pp)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L106)

```diff
-         this.frames = new RC, this.events = new xC, this.programLines = new PC, this.compileSummary = new pC("webgpu compiles"), this.hidden = new gC.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
+         this.frames = new Hp, this.events = new ep, this.programLines = new vp, this.compileSummary = new wp("webgpu compiles"), this.hidden = new yp.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L109)

```diff
-         }, this.ZN = () => {
+         }, this.LP = () => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L121-L122` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L121-L122) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L121-L122)

```diff
-           const oC = ZC.headerWord(nC.O.GpuTimed),
-             WC = ZC.headerWord(nC.O.GpuFrameUs),
+           const Lp = cp.headerWord(Sp.x.GpuTimed),
+             Ap = cp.headerWord(Sp.x.GpuFrameUs),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L128)

```diff
-           const MC = null !== (CC = null === (zC = (0, qC.O)((0, QC.z)())) || void 0 === zC ? void 0 : zC.UZC()) && void 0 !== CC ? CC : 0;
+           const Wp = null !== (pp = null === (ip = (0, Yp.Y)((0, Op.H)())) || void 0 === ip ? void 0 : ip.XOp()) && void 0 !== pp ? pp : 0;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L131-L132` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L131-L132) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L131-L132)

```diff
-               QC = [`${Math.round(ZC)}s: ${CC.drawn} drawn (${(CC.drawn/ZC).toFixed(1)}/s), ${CC.paced} paced, ${CC.frames-CC.drawn-CC.paced} skipped`, `gap max ${Math.round(CC.gapMaxMs)} ms, ${CC.longGaps} over 50 ms`, `render cpu ${CC.drawn?(CC.renderUs/CC.drawn/1e3).toFixed(2) … [truncated]
-             null !== zC.gpu && QC.push(`gpu ${zC.gpu.timed?(zC.gpu.us/zC.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${zC.gpu.timed} timed`);
+               Op = [`${Math.round(cp)}s: ${pp.drawn} drawn (${(pp.drawn/cp).toFixed(1)}/s), ${pp.paced} paced, ${pp.frames-pp.drawn-pp.paced} skipped`, `gap max ${Math.round(pp.gapMaxMs)} ms, ${pp.longGaps} over 50 ms`, `render cpu ${pp.drawn?(pp.renderUs/pp.drawn/1e3).toFixed(2) … [truncated]
+             null !== ip.gpu && Op.push(`gpu ${ip.gpu.timed?(ip.gpu.us/ip.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ip.gpu.timed} timed`);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L134-L136` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L134-L136) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L134-L136)

```diff
-             QC.push(null === wC ? "draws none yet" : `draws ${(0,fC.c)(wC)} (terrain ${wC.terrainOpaque}+${wC.terrainTransparent}, pack ${wC.terrainPack}, meshes ${wC.regular+wC.thin+wC.line+wC.text}, sky ${wC.earthSky+wC.skyMeshes}, particles ${wC.particles})`), null !== wC && w … [truncated]
-             const bC = null === zC.gpuBytesBefore ? "" : ` (${zC.gpuBytes>=zC.gpuBytesBefore?"+":"-"}${AC(Math.abs(zC.gpuBytes-zC.gpuBytesBefore))})`;
-             return QC.push(`gpu mem ${AC(zC.gpuBytes)} MiB${bC}`), QC.push(`pending ${zC.pending}`, "terrain " + (zC.terrainDrawn ? "drawn" : "not drawn yet")), zC.eventsUnlogged > 0 && QC.push(`${zC.eventsUnlogged} events unlogged`), QC.join("; ")
+             Op.push(null === op ? "draws none yet" : `draws ${(0,xp.b)(op)} (terrain ${op.terrainOpaque}+${op.terrainTransparent}, pack ${op.terrainPack}, meshes ${op.regular+op.thin+op.line+op.text}, sky ${op.earthSky+op.skyMeshes}, particles ${op.particles})`), null !== op && o … [truncated]
+             const Ip = null === ip.gpuBytesBefore ? "" : ` (${ip.gpuBytes>=ip.gpuBytesBefore?"+":"-"}${dp(Math.abs(ip.gpuBytes-ip.gpuBytesBefore))})`;
+             return Op.push(`gpu mem ${dp(ip.gpuBytes)} MiB${Ip}`), Op.push(`pending ${ip.pending}`, "terrain " + (ip.terrainDrawn ? "drawn" : "not drawn yet")), ip.eventsUnlogged > 0 && Op.push(`${ip.eventsUnlogged} events unlogged`), Op.join("; ")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L140)

```diff
-             census: (0, fC.d)(wC.api),
+             census: (0, xp.c)(op.api),
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L143-L144` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L143-L144) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L143-L144)

```diff
-             pending: ZC.headerWord(nC.O.RenderPending),
-             terrainDrawn: 0 !== (ZC.headerWord(nC.O.LoadSteps) & nC.eb.TerrainDrawn),
+             pending: cp.headerWord(Sp.x.RenderPending),
+             terrainDrawn: 0 !== (cp.headerWord(Sp.x.LoadSteps) & Sp.L.TerrainDrawn),
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L147)

```diff
-         }, JC(`${(0,GC.b)(CC)}; client ${wC.r.client} (${wC.r.reason})`), setInterval(this.ZN, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+         }, jp(`${(0,tp.e)(pp)}; client ${op.p.client} (${op.p.reason})`), setInterval(this.LP, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L150)

```diff
-         this.session = CC, this.frames.frame(zC, ZC, "drawn" === ZC ? CC.headerWord(nC.O.RenderUs) : 0)
+         this.session = pp, this.frames.frame(ip, cp, "drawn" === cp ? pp.headerWord(Sp.x.RenderUs) : 0)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L159)

```diff
-           if (QC >= nC.o.RenderDeviceLost && QC <= nC.o.RenderSerialLinks) this.event(`render error ${(0,oC.$d)(QC)}${null!==(zC=null===(ZC=(0,WC.e)(QC,wC))||void 0===ZC?void 0:ZC.words)&&void 0!==zC?zC:""} (detail ${wC})`)
+           if (Op >= Sp.k.RenderDeviceLost && Op <= Sp.k.RenderSerialLinks) this.event(`render error ${(0,Lp._d)(Op)}${null!==(ip=null===(cp=(0,Ap.c)(Op,op))||void 0===cp?void 0:cp.words)&&void 0!==ip?ip:""} (detail ${op})`)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L163)

```diff
-         this.event(`render reload: ${CC?"webgpu":"gl"} ${ZC}, losses ${zC}${void 0===QC?"":`: ${QC}`}`)
+         this.event(`render reload: ${pp?"webgpu":"gl"} ${cp}, losses ${ip}${void 0===Op?"":`: ${Op}`}`)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L171-L173` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L171-L173) · [Before (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L171-L173)

```diff
-         const wC = null !== QC && 0 !== QC.lastError ? `, last error ${(0,oC.$d)(QC.lastError)} (detail ${QC.lastErrorDetail})` : "",
-           bC = ZC instanceof Error ? `${ZC.name}: ${ZC.message}` : null === ZC || void 0 === ZC ? "" : String(ZC);
-         this.event(`core stopped at ${zC}${wC}${bC&&`: ${bC}`}`)
+         const op = null !== Op && 0 !== Op.lastError ? `, last error ${(0,Lp._d)(Op.lastError)} (detail ${Op.lastErrorDetail})` : "",
+           Ip = cp instanceof Error ? `${cp.name}: ${cp.message}` : null === cp || void 0 === cp ? "" : String(cp);
+         this.event(`core stopped at ${ip}${op}${Ip&&`: ${Ip}`}`)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L182)

```diff
-         null === zC || zC.isStopped ? this.sampled = null : (this.sampled = zC, this.gpuTimed = zC.headerWord(nC.O.GpuTimed), this.gpuUs = zC.headerWord(nC.O.GpuFrameUs))
+         null === ip || ip.isStopped ? this.sampled = null : (this.sampled = ip, this.gpuTimed = ip.headerWord(Sp.x.GpuTimed), this.gpuUs = ip.headerWord(Sp.x.GpuFrameUs))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L196)

```diff
-         this.gridLogged || void 0 === zC || (this.gridLogged = !0, JC(`gl1 grid ${zC}`))
+         this.gridLogged || void 0 === ip || (this.gridLogged = !0, jp(`gl1 grid ${ip}`))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L203-L205)

```diff
-           QC = (0, bC.n)(),
-           wC = void 0 === (null === ZC || void 0 === ZC ? void 0 : ZC.parallelCompile) ? "" : `; parallel compile ${ZC.parallelCompile}`;
-         JC(`renderer gl ${QC?`${QC.vendor} / ${QC.renderer}`:"(not read)"}; terrain fetch ${null!==(CC=null===ZC||void 0===ZC?void 0:ZC.fetch)&&void 0!==CC?CC:"(not noted)"}${wC}`), JC(`renderer caps ${null!==(zC=null===ZC||void 0===ZC?void 0:ZC.caps)&&void 0!==zC?zC:"(not noted) … [truncated]
+           Op = (0, Ip.r)(),
+           op = void 0 === (null === cp || void 0 === cp ? void 0 : cp.parallelCompile) ? "" : `; parallel compile ${cp.parallelCompile}`;
+         jp(`renderer gl ${Op?`${Op.vendor} / ${Op.renderer}`:"(not read)"}; terrain fetch ${null!==(pp=null===cp||void 0===cp?void 0:cp.fetch)&&void 0!==pp?pp:"(not noted)"}${op}`), jp(`renderer caps ${null!==(ip=null===cp||void 0===cp?void 0:cp.caps)&&void 0!==ip?ip:"(not noted) … [truncated]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L214)

```diff
-   4640: (CC, zC, ZC) => {
+   4794: (pp, ip, cp) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L217-L218)

```diff
-       const zC = CC.adapter ? `${CC.adapter.vendor}/${CC.adapter.architecture}` : "none";
-       return `backend ${CC.backend}: reason ${CC.reason}, source ${CC.source}, adapter ${zC}`
+       const ip = pp.adapter ? `${pp.adapter.vendor}/${pp.adapter.architecture}` : "none";
+       return `backend ${pp.backend}: reason ${pp.reason}, source ${pp.source}, adapter ${ip}`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L221)

```diff
-       b: () => QC
+       e: () => Op
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L224-L226` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L224-L226) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L224-L226)

```diff
-   34016: (CC, zC, ZC) => {
-     function QC(CC) {
-       return `hidden ${CC.changes} changes, ${Math.round(CC.hiddenMs)} ms`
+   34287: (pp, ip, cp) => {
+     function Op(pp) {
+       return `hidden ${pp.changes} changes, ${Math.round(pp.hiddenMs)} ms`
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L229-L230` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L229-L230) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L229-L230)

```diff
-       d: () => wC,
-       f: () => QC
+       c: () => op,
+       e: () => Op
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L237)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = CC : this.hiddenSinceMs >= 0 && (this.hiddenMs += CC - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = pp : this.hiddenSinceMs >= 0 && (this.hiddenMs += pp - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L247)

```diff
-   40858: (CC, zC, ZC) => {
+   41248: (pp, ip, cp) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L250-L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L250-L251)

```diff
-       d: () => bC,
-       e: () => fC
+       d: () => xp
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L253-L258` → after: `L253-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L253-L258) · [Before (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L253-L258)

```diff
-     var QC = ZC(40412),
-       wC = ZC(40423);
- 
-     function bC(CC) {
-       if (CC.queries.drawCensus() < QC.Gb.BYTES) return null;
-       const zC = CC.memoryData(CC.scratch(), QC.Gb.BYTES, 4, "the draw census");
+     var Op = cp(40769),
+       op = cp(40783);
+ 
+     function Ip(pp) {
+       if (pp.queries.drawCensus() < Op.ob.BYTES) return null;
+       const ip = pp.memoryData(pp.scratch(), Op.ob.BYTES, 4, "the draw census");
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L260-L273` → after: `L260-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L260-L273) · [Before (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L260-L273)

```diff
-         terrainOpaque: QC.Gb.terrainOpaque(zC, 0),
-         terrainTransparent: QC.Gb.terrainTransparent(zC, 0),
-         terrainPack: QC.Gb.terrainPack(zC, 0),
-         earthSky: QC.Gb.earthSky(zC, 0),
-         skyMeshes: QC.Gb.skyMeshes(zC, 0),
-         regular: QC.Gb.regular(zC, 0),
-         thin: QC.Gb.thin(zC, 0),
-         line: QC.Gb.line(zC, 0),
-         text: QC.Gb.text(zC, 0),
-         particles: QC.Gb.particles(zC, 0),
-         terrainParts: QC.Gb.terrainParts(zC, 0),
-         terrainCompiling: QC.Gb.terrainCompiling(zC, 0),
-         ringCopiesMax: QC.Gb.ringCopiesMax(zC, 0),
-         ringBusyWrites: QC.Gb.ringBusyWrites(zC, 0)
+         terrainOpaque: Op.ob.terrainOpaque(ip, 0),
+         terrainTransparent: Op.ob.terrainTransparent(ip, 0),
+         terrainPack: Op.ob.terrainPack(ip, 0),
+         earthSky: Op.ob.earthSky(ip, 0),
+         skyMeshes: Op.ob.skyMeshes(ip, 0),
+         regular: Op.ob.regular(ip, 0),
+         thin: Op.ob.thin(ip, 0),
+         line: Op.ob.line(ip, 0),
+         text: Op.ob.text(ip, 0),
+         particles: Op.ob.particles(ip, 0),
+         terrainParts: Op.ob.terrainParts(ip, 0),
+         terrainCompiling: Op.ob.terrainCompiling(ip, 0),
+         ringCopiesMax: Op.ob.ringCopiesMax(ip, 0),
+         ringBusyWrites: Op.ob.ringBusyWrites(ip, 0)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L311)

```diff
-           value: `${nC(zC)}`
+           value: `${Sp(ip)}`
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L314)

```diff
-           value: `${ZC} opaque / ${QC} transparent (${wC} shader pack)`
+           value: `${cp} opaque / ${Op} transparent (${op} shader pack)`
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L317)

```diff
-           value: `${qC} / ${FC}`
+           value: `${Yp} / ${Dp}`
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L320)

```diff
-           value: `${NC} / ${WC}`
+           value: `${Pp} / ${Ap}`
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a189a681abfc735390cf0c27aa2f4c520bccd6840bcbada9a442edc9bc54d7c7) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderLite.js#L323)

```diff
-           value: `${fC+oC} / ${MC}`
+           value: `${xp+Lp} / ${Wp}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342bR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L1-L2)

```diff
- export const id = 50;
- export const ids = [50];
+ export const id = 51;
+ export const ids = [51];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   50730: (CC, zC, ZC) => {
+   51210: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var QC = ZC(603),
-       wC = ZC(4321),
-       bC = ZC(2800),
-       nC = ZC(4445);
+     var Op = cp(643),
+       op = cp(4483),
+       Ip = cp(2908),
+       Sp = cp(4596);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${CC}; ${ZC?`os ${ZC.os}, gpu ${null!==(wC=ZC.gpuFamily)&&void 0!==wC?wC:"unknown"} ${null!==(bC=ZC.gpuModel)&&void 0!==bC?bC:"unknown"}`:"device unknown"}, version ${QC.e}; ${zC}`
+       return `${pp}; ${cp?`os ${cp.os}, gpu ${null!==(op=cp.gpuFamily)&&void 0!==op?op:"unknown"} ${null!==(Ip=cp.gpuModel)&&void 0!==Ip?Ip:"unknown"}`:"device unknown"}, version ${Op.c}; ${ip}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342bR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const ZC = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.backend) && void 0 !== zC ? zC : "none";
+       const cp = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.backend) && void 0 !== ip ? ip : "none";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342bR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, bC.i)("renderprobe", `decode and particle probes not run: the renderer is ${ZC}, and they read WebGL2's draws`)
+         return void(0, Ip.n)("renderprobe", `decode and particle probes not run: the renderer is ${cp}, and they read WebGL2's draws`)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7f5f571c5b15ff1fab58aa242707ad955683f29c63a64f191b8261e24458342b) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/renderProbe.js#L44)

```diff
-         void 0 !== CC && (0, bC.i)("renderprobe", FC(NC, CC, (0, wC.e)(!1)))
+         void 0 !== pp && (0, Ip.n)("renderprobe", Dp(Pp, pp, (0, op.d)(!1)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249)

#### 1. `bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L1-L2)

```diff
- export const id = 51;
- export const ids = [51];
+ export const id = 52;
+ export const ids = [52];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   38463: (CC, zC, ZC) => {
+   38864: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var QC = ZC(597),
-       wC = ZC(4179),
-       bC = ZC(38471);
+     var Op = cp(636),
+       op = cp(4341),
+       Ip = cp(38866);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L20)

```diff
-         const QC = (0, wC.g)(CC);
+         const Op = (0, op.h)(pp);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fac24b2b41634f0f30e5e8c327e71e8735863056f43b616f0f0c971606bea249) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, bC.e)("skyblock", ((CC, zC) => {
+     }(0, Ip.h)("skyblock", ((pp, ip) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L1-L2)

```diff
- export const id = 52;
- export const ids = [52];
+ export const id = 53;
+ export const ids = [53];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L4)

```diff
-   4646: (CC, zC, ZC) => {
+   4803: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L16-L17)

```diff
-     var QC = ZC(20),
-       wC = ZC(2800);
+     var Op = cp(25),
+       op = cp(2908);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L59)

```diff
-       return `${qC[CC]} ${zC}`
+       return `${Yp[pp]} ${ip}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L71)

```diff
-         return [gC(wC, `${bC?`${CC[wC]} -> ${zC[wC]}`:String(zC[wC])}${nC?` (via ${ZC[wC]}..${QC[wC]})`:""}`)]
+         return [yp(op, `${Ip?`${pp[op]} -> ${ip[op]}`:String(ip[op])}${Sp?` (via ${cp[op]}..${Op[op]})`:""}`)]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L81-L82)

```diff
-       const ZC = (null !== (zC = CC.getAttribute("class")) && void 0 !== zC ? zC : "").trim().replace(/\s+/g, ".").slice(0, 40);
-       return `${CC.tagName.toLowerCase()}${ZC?`.${ZC}`:""}`
+       const cp = (null !== (ip = pp.getAttribute("class")) && void 0 !== ip ? ip : "").trim().replace(/\s+/g, ".").slice(0, 40);
+       return `${pp.tagName.toLowerCase()}${cp?`.${cp}`:""}`
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L89)

```diff
-         "auto" !== CC && ZC.push(`${CC} on ${GC(QC)}`)
+         "auto" !== pp && cp.push(`${pp} on ${tp(Op)}`)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L91)

```diff
-       return `${GC(CC)} touch-action ${zC(CC)}${ZC.length>0?` (${ZC.join(", ")})`:""}`
+       return `${tp(pp)} touch-action ${ip(pp)}${cp.length>0?` (${cp.join(", ")})`:""}`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L110)

```diff
-           if (this.lines === fC) return this.capped = !0, void this.deps.log(`further changes unlogged: ${fC} lines logged`);
+           if (this.lines === xp) return this.capped = !0, void this.deps.log(`further changes unlogged: ${xp} lines logged`);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L112-L115)

```diff
-           const SC = null === oC ? "no touch yet" : `touch on ${oC.text}, ${Math.round(this.burstStartMs-oC.atMs)} ms before`,
-             RC = null === wC ? "" : `; inner scroll ${GC(wC)} scrollTop ${NC(wC.scrollTop,1)}`;
-           this.deps.log(`moved over ${Math.round(CC-this.burstStartMs)} ms; ${SC}${RC}: ${pC(QC,ZC,qC,WC)}`)
-         }, this.last = CC.read(), this.low = this.last, this.high = this.last, CC.log(`start: ${SC(this.last)}`)
+           const Up = null === Lp ? "no touch yet" : `touch on ${Lp.text}, ${Math.round(this.burstStartMs-Lp.atMs)} ms before`,
+             Hp = null === op ? "" : `; inner scroll ${tp(op)} scrollTop ${Pp(op.scrollTop,1)}`;
+           this.deps.log(`moved over ${Math.round(pp-this.burstStartMs)} ms; ${Up}${Hp}: ${wp(Op,cp,Yp,Ap)}`)
+         }, this.last = pp.read(), this.low = this.last, this.high = this.last, pp.log(`start: ${Up(this.last)}`)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L125)

```diff
-         this.low = PC(this.low, QC, Math.min), this.high = PC(this.high, QC, Math.max), this.innerScrolled = null !== CC && void 0 !== CC ? CC : this.innerScrolled
+         this.low = vp(this.low, Op, Math.min), this.high = vp(this.high, Op, Math.max), this.innerScrolled = null !== pp && void 0 !== pp ? pp : this.innerScrolled
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L133)

```diff
-         inGame: () => "inGame" === QC.b.get("gameState"),
+         inGame: () => "inGame" === Op.c.get("gameState"),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f16e0722576a442238fdfcc1a6f6906c39e96b7b9a80fbb446bfa5a4245a29b4) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/scrollDebug.js#L136)

```diff
-           (0, wC.i)("scroll", CC)
+           (0, op.n)("scroll", pp)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/textureNameTable.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/textureNameTable.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905bR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905b) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/textureNameTable.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/textureNameTable.js#L1-L2)

```diff
- export const id = 53;
- export const ids = [53];
+ export const id = 54;
+ export const ids = [54];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   50777: (CC, zC, ZC) => {
+   51258: (pp, ip, cp) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L1-L2)

```diff
- export const id = 54;
- export const ids = [54];
+ export const id = 55;
+ export const ids = [55];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   50754: (CC, zC, ZC) => {
+   51242: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var QC = ZC(1149),
-       wC = ZC(38),
-       bC = ZC(50746);
+     var Op = cp(1211),
+       op = cp(44),
+       Ip = cp(51229);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const zC = await fetch(`${QC.clientSideServerUrls.texturePackUrl}/${CC}.json`, {
+           const ip = await fetch(`${Op.clientSideServerUrls.texturePackUrl}/${pp}.json`, {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!zC.ok) throw new Error(`fetching texture pack ${CC} answered HTTP ${zC.status}`);
+           if (!ip.ok) throw new Error(`fetching texture pack ${pp} answered HTTP ${ip.status}`);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L25)

```diff
-       return (0, bC.f)(ZC), ZC
+       return (0, Ip.d)(cp), cp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L1-L2)

```diff
- export const id = 55;
- export const ids = [55];
+ export const id = 56;
+ export const ids = [56];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   34205: (CC, zC, ZC) => {
+   34476: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L6-L7)

```diff
-       announceStoredTexturePack: () => wC.c,
-       takeOneShotTexturePack: () => QC.k
+       announceStoredTexturePack: () => op.d,
+       takeOneShotTexturePack: () => Op.i
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var QC = ZC(34210),
-       wC = ZC(34214)
+     var Op = cp(34480),
+       op = cp(34482)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   34214: (CC, zC, ZC) => {
+   34482: (pp, ip, cp) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L14-L15)

```diff
-       c: () => wC,
-       g: () => bC
+       d: () => op,
+       f: () => Ip
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var QC = ZC(3242);
+     var Op = cp(3352);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const zC = new BroadcastChannel(QC.m);
+         const ip = new BroadcastChannel(Op.j);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof zC ? zC : null
+       return "string" === typeof ip ? ip : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   34210: (CC, zC, ZC) => {
+   34480: (pp, ip, cp) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L40-L42` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L40-L42) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L40-L42)

```diff
-       e: () => nC,
-       i: () => wC,
-       k: () => bC
+       d: () => Sp,
+       h: () => op,
+       i: () => Ip
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var QC = ZC(3242);
+     var Op = cp(3352);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const bC = nC(await CC.getItem(QC.f, zC));
+       const Ip = Sp(await pp.getItem(Op.d, ip));
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const fC = await CC.getItem(QC.i, zC);
+       const xp = await pp.getItem(Op.h, ip);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([CC.removeItem(QC.f), CC.removeItem(QC.i)])
+         await Promise.all([pp.removeItem(Op.d), pp.removeItem(Op.h)])
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof fC ? fC : null
+         source: "string" === typeof xp ? xp : null
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, QC.r)() ? Promise.resolve(null) : wC(CC, !1, (CC => {
+       return (0, Op.u)() ? Promise.resolve(null) : op(pp, !1, (pp => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), QC.r)
+       }), Op.u)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (841 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1-L2)

```diff
- export const id = 56;
- export const ids = [56];
+ export const id = 57;
+ export const ids = [57];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   42396: (CC, zC, ZC) => {
+   42890: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6-L23` → after: `L6-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6-L23) · [Before (L6-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6-L23)

```diff
-       "./bedwars/bedwarsClient": [39110, 9],
-       "./bridgeBattle/bridgeBattleClient": [39114, 10],
-       "./buildAFactory2/buildAFactory2Client": [38316, 75, 74, 73, 225, 243, 11],
-       "./classic/classicClient": [39120, 12],
-       "./clutch/clutchClient": [39122, 13],
-       "./containmentBreach/containmentBreachClient": [39124, 14],
-       "./cooking/cookingClient": [39246, 15],
-       "./defusal/defusalClient": [39252, 16],
-       "./frontline/frontlineClient": [39259, 75, 74, 73, 17],
-       "./goalRush/goalRushClient": [39262, 18],
-       "./luckyBedwars/luckyBedwarsClient": [39269, 19],
-       "./ninetyNineNights/ninetyNineNightsClient": [39275, 20],
-       "./oneBlock/oneBlockClient": [39284, 21],
-       "./plots/plotsClient": [39288, 241, 248, 22],
-       "./pvpCiv/pvpCivClient": [39356, 23],
-       "./skyIslands/skyIslandsClient": [39360, 24],
- ... (2 more removed lines; see GitHub link above)
+       "./bedwars/bedwarsClient": [39456, 9],
+       "./bridgeBattle/bridgeBattleClient": [39460, 10],
+       "./buildAFactory2/buildAFactory2Client": [38704, 76, 75, 74, 230, 225, 11],
+       "./classic/classicClient": [39464, 12],
+       "./clutch/clutchClient": [39472, 13],
+       "./containmentBreach/containmentBreachClient": [39474, 224, 14],
+       "./cooking/cookingClient": [39608, 15],
+       "./defusal/defusalClient": [39617, 16],
+       "./frontline/frontlineClient": [39623, 76, 75, 74, 17],
+       "./goalRush/goalRushClient": [39631, 18],
+       "./luckyBedwars/luckyBedwarsClient": [39640, 19],
+       "./ninetyNineNights/ninetyNineNightsClient": [39642, 20],
+       "./oneBlock/oneBlockClient": [39649, 21],
+       "./plots/plotsClient": [39655, 247, 224, 22],
+       "./pvpCiv/pvpCivClient": [39735, 23],
+       "./skyIslands/skyIslandsClient": [39744, 24],
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L35)

```diff
-     wC.keys = () => Object.keys(QC), wC.id = 42396, CC.exports = wC
+     op.keys = () => Object.keys(Op), op.id = 42890, pp.exports = op
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L37)

```diff
-   38865: (CC, zC, ZC) => {
+   36591: (pp, ip, cp) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L40` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L41-L43) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L40)

```diff
-       e: () => wC
+       g: () => Yp,
+       h: () => Lp,
+       l: () => Hp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L42` → after: `L45-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L45-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L45-L221) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L42)

```diff
-     var QC = ZC(28);
+     var Op = cp(643),
+       op = cp(1779),
+       Ip = cp(4911);
+     class Sp {
+       constructor(pp, ip) {
+         this.width = pp, this.TA = ip, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(pp * ip)
+       }
+       push(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const cp = this.data,
+           Op = this.next * this.width;
+         for (let op = 0; op < this.width; op++) cp[Op + op] = pp[ip + op];
+         this.next = (this.next + 1) % this.TA, this.size = Math.min(this.size + 1, this.TA)
+       }
+       rows() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+ ... (161 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L49` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L228) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L49)

```diff
-       "refetchCode" !== CC ? "Plugin|MobAiPlugin|ShowPetUi" !== CC ? Promise.all([ZC.e(107), ZC.e(108), ZC.e(103), ZC.e(105), ZC.e(214)]).then((() => ZC(41552))).then((ZC => {
+       "refetchCode" !== pp ? "Plugin|MobAiPlugin|ShowPetUi" !== pp ? Promise.all([cp.e(109), cp.e(110), cp.e(105), cp.e(107), cp.e(218)]).then((() => cp(41985))).then((cp => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L55-L56` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L234-L235) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L55-L56)

```diff
-         console.error(`Game message ${CC} failed`, zC)
-       })) : QC.o.bp("showPetUi", zC) : QC.o.bp("refetchCode")
+         console.error(`Game message ${pp} failed`, ip)
+       })) : Op.m.GA("showPetUi", ip) : Op.m.GA("refetchCode")
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L59` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L238) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L59)

```diff
-   42382: (CC, zC, ZC) => {
+   42875: (pp, ip, cp) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L61-L62` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L240-L241) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L61-L62)

```diff
-       e: () => QC,
-       i: () => wC
+       b: () => Op,
+       e: () => op
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L71` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L250) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L71)

```diff
-   34082: (CC, zC, ZC) => {
+   34361: (pp, ip, cp) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L73-L74` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L252-L253) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L73-L74)

```diff
-       c: () => fC,
-       d: () => oC
+       d: () => xp,
+       h: () => Lp
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L76` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L255) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L76)

```diff
-     var QC = ZC(20);
+     var Op = cp(25);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L83` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L262) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L83)

```diff
-       return null === (CC = QC.b.get("showDistantNametags")) || void 0 === CC || CC
+       return null === (pp = Op.c.get("showDistantNametags")) || void 0 === pp || pp
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L92` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L271) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L92)

```diff
-       }()) && void 0 !== CC ? CC : fC() ? 0 : wC
+       }()) && void 0 !== pp ? pp : xp() ? 0 : op
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L95` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L274) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L95)

```diff
-   42374: (CC, zC, ZC) => {
+   42870: (pp, ip, cp) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L97` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L276) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L97)

```diff
-       blockIdOf: () => Bo.d,
+       blockIdOf: () => zL.e,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L101` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L280) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L101)

```diff
-       drainTextRerasters: () => sf.b,
+       drainTextRerasters: () => ax.d,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L108-L109` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L287-L288) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L108-L109)

```diff
-       loadTextIcons: () => sf.f,
-       rasterText: () => rf.c,
+       loadTextIcons: () => ax.h,
+       rasterText: () => hx.d,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L111-L112` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L290-L291) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L111-L112)

```diff
-       readDrawCensus: () => Cq.d,
-       setTextHost: () => sf.j,
+       readDrawCensus: () => pY.c,
+       setTextHost: () => ax.k,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L118-L119` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L297-L298) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L118-L119)

```diff
-       textChanged: () => sf.r,
-       warmText: () => rf.g,
+       textChanged: () => ax.p,
+       warmText: () => hx.f,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L122-L139` → after: `L301-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L301-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L301-L318) · [Before (L122-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L122-L139)

```diff
-     ZC(36387);
-     var QC = ZC(20),
-       wC = ZC(36687),
-       bC = ZC(38986),
-       nC = ZC(28),
-       fC = ZC(3392),
-       oC = ZC(36685),
-       qC = ZC(1240),
-       FC = ZC(590),
-       WC = ZC(38055),
-       NC = ZC(4727),
-       MC = ZC(40476),
-       gC = ZC(40412);
-     const SC = gC.Rb / 4,
-       pC = gC.p.PlaySound,
-       PC = gC.p.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     cp(36703);
+     var Op = cp(25),
+       op = cp(37021),
+       Ip = cp(39339),
+       Sp = cp(34),
+       xp = cp(3511),
+       Lp = cp(37019),
+       Yp = cp(1308),
+       Dp = cp(629),
+       Ap = cp(38443),
+       Pp = cp(4903),
+       Wp = cp(40842),
+       yp = cp(40769);
+     const Up = yp.xb / 4,
+       wp = yp.l.PlaySound,
+       vp = yp.l.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L143` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L322) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L143)

```diff
-         this.core = CC, this.memory = zC, this.audio = ZC, this.serverIds = new Int32Array(256).fill(gC.qd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = pp, this.memory = ip, this.audio = cp, this.serverIds = new Int32Array(256).fill(yp.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L148` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L327) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L148)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.FwC(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.cIp(), this.ensureViews()), this.scratchPtr
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L161` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L340) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L161)

```diff
-         return gC.w.localId(this.apiView, 0)
+         return yp.q.localId(this.apiView, 0)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L164` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L343) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L164)

```diff
-         return gC.w.localDeaths(this.apiView, 0)
+         return yp.q.localDeaths(this.apiView, 0)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L168-L172` → after: `L347-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L347-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L347-L351) · [Before (L168-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L168-L172)

```diff
-           zC = gC.w.entRenderPtr(CC, 0),
-           ZC = gC.w.entVisPtr(CC, 0),
-           QC = gC.w.entCapacity(CC, 0);
-         if (zC !== this.renderPtr || ZC !== this.visPtr || QC !== this.HW || this.renderBuffer !== this.buffer) {
-           this.renderPtr = zC, this.visPtr = ZC, this.HW = QC, this.renderBuffer = this.buffer;
+           ip = yp.q.entRenderPtr(pp, 0),
+           cp = yp.q.entVisPtr(pp, 0),
+           Op = yp.q.entCapacity(pp, 0);
+         if (ip !== this.renderPtr || cp !== this.visPtr || Op !== this.TA || this.renderBuffer !== this.buffer) {
+           this.renderPtr = ip, this.visPtr = cp, this.TA = Op, this.renderBuffer = this.buffer;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L175` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L354) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L175)

```diff
-           this.renderCapacity = CC && wC ? QC : 0, this.render = CC && wC ? CC : new Float32Array(0), this.vis = CC && wC ? wC : new Uint8Array(0)
+           this.renderCapacity = pp && op ? Op : 0, this.render = pp && op ? pp : new Float32Array(0), this.vis = pp && op ? op : new Uint8Array(0)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L180` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L359) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L180)

```diff
-           return (0, MC.m)(CC, this.memory().buffer, zC, ZC, QC)
+           return (0, Wp.l)(pp, this.memory().buffer, ip, cp, Op)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L215` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L394) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L215)

```diff
-           if (ZC === gC.p.EntitySpawned) {
+           if (cp === yp.l.EntitySpawned) {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L217-L221` → after: `L396-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L396-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L396-L400) · [Before (L217-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L217-L221)

```diff
-             if (QC !== gC.Wb.BYTES) throw vC(ZC, qC, QC);
-             const CC = gC.Wb.serverId(bC, wC);
-             this.spawned(CC, gC.Wb.index(bC, wC), gC.Wb.kind(bC, wC)), null === (nC = zC.entityAdded) || void 0 === nC || nC.call(zC, CC)
-           } else if ((ZC === gC.p.ChunkSlot || ZC === gC.p.EntityInfoChanged) && !(0, gC.xe)(ZC, bC, wC, QC, zC)) throw vC(ZC, qC, QC);
-           qC = wC + (0, NC.pe)(QC)
+             if (Op !== yp.Ab.BYTES) throw Rp(cp, Yp, Op);
+             const pp = yp.Ab.serverId(Ip, op);
+             this.spawned(pp, yp.Ab.index(Ip, op), yp.Ab.kind(Ip, op)), null === (Sp = ip.entityAdded) || void 0 === Sp || Sp.call(ip, pp)
+           } else if ((cp === yp.l.ChunkSlot || cp === yp.l.EntityInfoChanged) && !(0, yp.$d)(cp, Ip, op, Op, ip)) throw Rp(cp, Yp, Op);
+           Yp = op + (0, Pp.ue)(Op)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L237-L238` → after: `L416-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L416-L417) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L237-L238)

```diff
-           if ((65535 & CC) === gC.p.EntityDespawned && CC >>> 16 === gC.Wb.BYTES) {
-             const CC = gC.Wb.serverId(ZC, bC);
+           if ((65535 & pp) === yp.l.EntityDespawned && pp >>> 16 === yp.Ab.BYTES) {
+             const pp = yp.Ab.serverId(cp, Ip);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L240` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L419) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L240)

```diff
-             if (this.despawned(CC, gC.Wb.index(ZC, bC))) null === (QC = zC.entityRemoved) || void 0 === QC || QC.call(zC, CC)
+             if (this.despawned(pp, yp.Ab.index(cp, Ip))) null === (Op = ip.entityRemoved) || void 0 === Op || Op.call(ip, pp)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L242` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L421) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L242)

```diff
-           wC = bC + (0, NC.pe)(CC >>> 16)
+           op = Ip + (0, Pp.ue)(pp >>> 16)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L261` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L440) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L261)

```diff
-           else if (QC === NC.ab.LocalPlayerBound) {
+           else if (Op === Pp.bb.LocalPlayerBound) {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L263` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L442) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L263)

```diff
-             if (IC !== NC.Hb) throw vC(QC, JC, IC);
+             if (kp !== Pp.Lb) throw Rp(Op, jp, kp);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L265` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L444) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L265)

```diff
-           } else if (QC === NC.ab.LocalHurt) {
+           } else if (Op === Pp.bb.LocalHurt) {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L267` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L446) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L267)

```diff
-             if (IC !== NC.Fb) throw vC(QC, JC, IC);
+             if (kp !== Pp.Kb) throw Rp(Op, jp, kp);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L269` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L448) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L269)

```diff
-           } else if (QC === NC.ab.AttackHit) {
+           } else if (Op === Pp.bb.AttackHit) {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L271` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L450) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L271)

```diff
-             if (IC !== NC.d) throw vC(QC, JC, IC);
+             if (kp !== Pp.e) throw Rp(Op, jp, kp);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L276-L277` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L455-L456) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L276-L277)

```diff
-             null === (FC = zC.attackHit) || void 0 === FC || FC.call(zC, CC, ZC, wC, 0 !== (bC & NC.m.Crit), 0 !== (bC & NC.m.HitSelf))
-           } else if (QC === NC.ab.PhysicsType) {
+             null === (Dp = ip.attackHit) || void 0 === Dp || Dp.call(ip, pp, cp, op, 0 !== (Ip & Pp.o.Crit), 0 !== (Ip & Pp.o.HitSelf))
+           } else if (Op === Pp.bb.PhysicsType) {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L279` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L458) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L279)

```diff
-             if (IC !== NC.ec) throw vC(QC, JC, IC);
+             if (kp !== Pp.dc) throw Rp(Op, jp, kp);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L281` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L460) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L281)

```diff
-           } else if (QC === NC.ab.VehicleEffect) {
+           } else if (Op === Pp.bb.VehicleEffect) {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L286` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L465) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L286)

```diff
-           } else if (QC === NC.ab.ZoomChanged) {
+           } else if (Op === Pp.bb.ZoomChanged) {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L288` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L467) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L288)

```diff
-             if (IC !== NC.Xd) throw vC(QC, JC, IC);
+             if (kp !== Pp.Zd) throw Rp(Op, jp, kp);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L290` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L469) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L290)

```diff
-           } else if (QC === NC.ab.ZoomDisabled) {
+           } else if (Op === Pp.bb.ZoomDisabled) {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L294` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L473) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L294)

```diff
-           } else if (QC === NC.ab.GameCamera) {
+           } else if (Op === Pp.bb.GameCamera) {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L297` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L476) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L297)

```diff
-           } else if (QC === gC.p.ChunkSlot || QC === gC.p.EntityInfoChanged);
+           } else if (Op === yp.l.ChunkSlot || Op === yp.l.EntityInfoChanged);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L305-L306` → after: `L484-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L484-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L484-L485) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L305-L306)

```diff
-           } else if (QC >= gC.Fd && QC <= gC.Jd && QC !== NC.ab.EnvLighting) {
-             if (!(0, gC.xe)(QC, nC, eC, IC, zC)) throw vC(QC, JC, IC);
+           } else if (Op >= yp.cd && Op <= yp.dd && Op !== Pp.bb.EnvLighting) {
+             if (!(0, yp.$d)(Op, Sp, qp, kp, ip)) throw Rp(Op, jp, kp);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L313` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L492) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L313)

```diff
-           JC = eC + (0, NC.pe)(IC)
+           jp = qp + (0, Pp.ue)(kp)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L320` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L499) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L320)

```diff
-         const zC = gC.w.audioViewPtr(this.apiView, 0),
+         const ip = yp.q.audioViewPtr(this.apiView, 0),
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L323` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L502) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L323)

```diff
-         (null === (CC = QC) || void 0 === CC ? void 0 : CC.buffer) === ZC && QC.byteOffset === zC || (QC = (0, MC.d)(ZC, zC, gC.z.BYTES, 8, "the audio view"), this.audioView = QC), QC && this.audio.applyListener(QC)
+         (null === (pp = Op) || void 0 === pp ? void 0 : pp.buffer) === cp && Op.byteOffset === ip || (Op = (0, Wp.d)(cp, ip, yp.r.BYTES, 8, "the audio view"), this.audioView = Op), Op && this.audio.applyListener(Op)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L326` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L505) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L326)

```diff
-         return this.indexById.get("number" === typeof CC ? CC : +CC)
+         return this.indexById.get("number" === typeof pp ? pp : +pp)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L329` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L508) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L329)

```diff
-         return CC !== gC.qd && CC === gC.w.localId(this.apiView, 0)
+         return pp !== yp.Nc && pp === yp.q.localId(this.apiView, 0)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L333` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L512) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L333)

```diff
-         return this.readPosition("number" === typeof CC ? CC : +CC, zC) ? zC : null
+         return this.readPosition("number" === typeof pp ? pp : +pp, ip) ? ip : null
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L338` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L517) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L338)

```diff
-           for (let CC = 0; CC < 3; CC++) zC[CC] = gC.w.localPos(ZC, 0, CC);
+           for (let pp = 0; pp < 3; pp++) ip[pp] = yp.q.localPos(cp, 0, pp);
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L348` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L527) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L348)

```diff
-         for (let bC = 0; bC < 3; bC++) zC[bC] = this.render[wC + bC] + gC.w.origin(ZC, 0, bC);
+         for (let Ip = 0; Ip < 3; Ip++) ip[Ip] = this.render[op + Ip] + yp.q.origin(cp, 0, Ip);
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L359` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L538) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L359)

```diff
-         return 0 === ZC ? null : 0 !== (ZC & gC.ve.Alive)
+         return 0 === cp ? null : 0 !== (cp & yp._d.Alive)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L363` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L542) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L363)

```diff
-         return void 0 === zC ? this.isLocal("number" === typeof CC ? CC : +CC) ? "Player" : null : JC(this.kinds[zC])
+         return void 0 === ip ? this.isLocal("number" === typeof pp ? pp : +pp) ? "Player" : null : jp(this.kinds[ip])
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L366` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L545) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L366)

```diff
-         if (zC >= 1048576) throw new MC.b(`entity ${CC} spawned at index ${zC}`);
+         if (ip >= 1048576) throw new Wp.b(`entity ${pp} spawned at index ${ip}`);
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L371` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L550) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L371)

```diff
-         return this.indexById.get(CC) === zC && (this.indexById.delete(CC), ZC = !0), zC < this.serverIds.length && this.serverIds[zC] === CC && (this.serverIds[zC] = gC.qd, this.kinds[zC] = 0, this.idStr[zC] = null), ZC
+         return this.indexById.get(pp) === ip && (this.indexById.delete(pp), cp = !0), ip < this.serverIds.length && this.serverIds[ip] === pp && (this.serverIds[ip] = yp.Nc, this.kinds[ip] = 0, this.idStr[ip] = null), cp
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L378` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L557) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L378)

```diff
-         const QC = new Int32Array(ZC).fill(gC.qd);
+         const Op = new Int32Array(cp).fill(yp.Nc);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L390` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L569) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L390)

```diff
-         this.buffer = CC, this.viewPtr < 0 && (this.viewPtr = this.core.WwC()), this.view = new DataView(CC, this.viewPtr, gC.w.BYTES), this.rereadDirectory()
+         this.buffer = pp, this.viewPtr < 0 && (this.viewPtr = this.core.OIp()), this.view = new DataView(pp, this.viewPtr, yp.q.BYTES), this.rereadDirectory()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L395` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L574) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L395)

```diff
-       return CC >>> gC.b === gC.s.Item
+       return pp >>> yp.b === yp.p.Item
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L400` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L579) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L400)

```diff
-       const QC = CC & gC.f;
+       const Op = pp & yp.d;
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L402-L406` → after: `L581-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L581-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L581-L585) · [Before (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L402-L406)

```diff
-         case gC.s.Lifeform:
-           return null !== (zC = FC.i[QC]) && void 0 !== zC ? zC : null;
-         case gC.s.Throwable:
-           return null !== (ZC = WC.l[QC]) && void 0 !== ZC ? ZC : null;
-         case gC.s.Mesh:
+         case yp.p.Lifeform:
+           return null !== (ip = Dp.i[Op]) && void 0 !== ip ? ip : null;
+         case yp.p.Throwable:
+           return null !== (cp = Ap.k[Op]) && void 0 !== cp ? cp : null;
+         case yp.p.Mesh:
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L408` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L587) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L408)

```diff
-         case gC.s.Audio:
+         case yp.p.Audio:
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L410` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L589) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L410)

```diff
-         case gC.s.Item:
+         case yp.p.Item:
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L423` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L602) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L423)

```diff
-         nC = NC.Cd.HEAD_BYTES + (0, NC.pe)(wC);
+         Sp = Pp.Cd.HEAD_BYTES + (0, Pp.ue)(op);
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L437-L452` → after: `L616-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L616-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L616-L631) · [Before (L437-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L437-L452)

```diff
-       return new MC.b(`event ${CC} at ${zC} of ${ZC} bytes`)
-     }
-     var eC = ZC(326),
-       hC = ZC(1169),
-       KC = ZC(38865),
-       YC = ZC(1858),
-       dC = ZC(40842),
-       mC = ZC(1806),
-       HC = ZC(39005),
-       EC = ZC(39036),
-       lC = ZC(39015),
-       XC = ZC(40457),
-       cC = ZC(2351),
-       uC = ZC(39e3),
-       rC = ZC(39028);
-     const sC = Math.max(gC.Eb.BYTES, gC.tb.BYTES, gC.xb.BYTES);
+       return new Wp.b(`event ${pp} at ${ip} of ${cp} bytes`)
+     }
+     var qp = cp(337),
+       Mp = cp(1234),
+       Cp = cp(39210),
+       Ep = cp(1975),
+       Xp = cp(41225),
+       lp = cp(1927),
+       Qp = cp(39362),
+       Jp = cp(39385),
+       Bp = cp(39375),
+       Np = cp(40824),
+       Tp = cp(2463),
+       fp = cp(39356),
+       bp = cp(39383);
+     const hp = Math.max(yp.lb.BYTES, yp.eb.BYTES, yp.gb.BYTES);
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L457` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L636) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L457)

```diff
-       return (0 | zC) === zC ? zC : null
+       return (0 | ip) === ip ? ip : null
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L461` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L640) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L461)

```diff
-         this.api = CC, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, uC.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.yw = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
+         this.api = pp, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, fp.i)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.KO = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L464-L466` → after: `L643-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L643-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L643-L645) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L464-L466)

```diff
-         this.defaultPoseRead = !1, this.yw = null;
-         const CC = this.api.queries.directorView() >= gC.Eb.BYTES ? this.scratchView() : null;
-         null !== CC && (this.defaultFov = (0, mC.w)(gC.Eb.fov(CC, 0)), this.baseFov = (0, mC.w)(gC.Eb.baseFov(CC, 0)), this.aspect = gC.Eb.aspect(CC, 0), this.bodyHeading = gC.Eb.bodyHeading(CC, 0))
+         this.defaultPoseRead = !1, this.KO = null;
+         const pp = this.api.queries.directorView() >= yp.lb.BYTES ? this.scratchView() : null;
+         null !== pp && (this.defaultFov = (0, lp.C)(yp.lb.fov(pp, 0)), this.baseFov = (0, lp.C)(yp.lb.baseFov(pp, 0)), this.aspect = yp.lb.aspect(pp, 0), this.bodyHeading = yp.lb.bodyHeading(pp, 0))
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L475` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L654) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L475)

```diff
-         const CC = gC.w.localId(this.api.apiView, 0);
+         const pp = yp.q.localId(this.api.apiView, 0);
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L487-L488` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L666-L667) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L487-L488)

```diff
-         const ZC = gC.w.localId(this.api.apiView, 0);
-         return zC === ZC && ZC !== gC.qd ? this.viewHeading : this.readEntity(CC) ? this.entityHeading : null
+         const cp = yp.q.localId(this.api.apiView, 0);
+         return ip === cp && cp !== yp.Nc ? this.viewHeading : this.readEntity(pp) ? this.entityHeading : null
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L492` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L671) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L492)

```diff
-         return QC < ZC - 1e-6 ? QC : null
+         return Op < cp - 1e-6 ? Op : null
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L499` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L678) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L499)

```diff
-         const zC = this.api.queries.directorDefaultPose() >= gC.tb.BYTES ? this.scratchView() : null;
+         const ip = this.api.queries.directorDefaultPose() >= yp.eb.BYTES ? this.scratchView() : null;
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L501-L502` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L680-L681) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L501-L502)

```diff
-         for (let ZC = 0; ZC < 3; ZC++) CC.position[ZC] = gC.tb.eye(zC, 0, ZC);
-         return CC.heading = gC.tb.heading(zC, 0), CC.pitch = gC.tb.pitch(zC, 0), CC
+         for (let cp = 0; cp < 3; cp++) pp.position[cp] = yp.eb.eye(ip, 0, cp);
+         return pp.heading = yp.eb.heading(ip, 0), pp.pitch = yp.eb.pitch(ip, 0), pp
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L516-L518` → after: `L695-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L695-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L695-L697) · [Before (L516-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L516-L518)

```diff
-         if (zC === this.yw) return this.entityLive;
-         this.yw = zC;
-         const ZC = this.api.queries.directorEntity(zC) >= gC.xb.BYTES ? this.scratchView() : null;
+         if (ip === this.KO) return this.entityLive;
+         this.KO = ip;
+         const cp = this.api.queries.directorEntity(ip) >= yp.gb.BYTES ? this.scratchView() : null;
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L520-L521` → after: `L699-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L699-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L699-L700) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L520-L521)

```diff
-         for (let QC = 0; QC < 3; QC++) this.entityFeet[QC] = gC.xb.feet(ZC, 0, QC), this.entityAim[QC] = this.entityFeet[QC];
-         return this.entityAim[1] += gC.xb.eyeHeight(ZC, 0), this.entityHeading = gC.xb.heading(ZC, 0), !0
+         for (let Op = 0; Op < 3; Op++) this.entityFeet[Op] = yp.gb.feet(cp, 0, Op), this.entityAim[Op] = this.entityFeet[Op];
+         return this.entityAim[1] += yp.gb.eyeHeight(cp, 0), this.entityHeading = yp.gb.heading(cp, 0), !0
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L527` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L706) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L527)

```diff
-         return null !== ZC && ZC.buffer === zC && ZC.byteOffset === CC ? ZC : (this.scratch = this.api.memoryData(CC, sC, 8, "the director's record"), this.scratch)
+         return null !== cp && cp.buffer === ip && cp.byteOffset === pp ? cp : (this.scratch = this.api.memoryData(pp, hp, 8, "the director's record"), this.scratch)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L543-L545` → after: `L722-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L722-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L722-L724) · [Before (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L543-L545)

```diff
-         this.options = CC, this.fN = void 0, this.director = void 0, this.latest = tC, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           VY: 0,
-           Zm: 0
+         this.options = pp, this.WP = void 0, this.director = void 0, this.latest = Fp, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           QE: 0,
+           TE: 0
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L549` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L728) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L549)

```diff
-         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.VS = new Int32Array(3 * gC.ie), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * gC.ie), this.fN = new aC(CC.api), this.direct … [truncated]
+         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.rc = new Int32Array(3 * yp.Dd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * yp.Dd), this.WP = new np(pp.api), this.direct … [truncated]
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L568-L569` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L747-L748) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L568-L569)

```diff
-         const WC = this.answeredPose && 0 === (QC & gC.Ab.Held);
-         return this.answeredPose = oC !== gC.qb.None, this.holding = this.answeredPose && !WC, null === (nC = (fC = this.options).showFacing) || void 0 === nC || nC.call(fC, this.holding ? this.facing : null), oC
+         const Ap = this.answeredPose && 0 === (Op & yp.ib.Held);
+         return this.answeredPose = Lp !== yp.cb.None, this.holding = this.answeredPose && !Ap, null === (Sp = (xp = this.options).showFacing) || void 0 === Sp || Sp.call(xp, this.holding ? this.facing : null), Lp
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L577` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L756) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L577)

```diff
-           fN: nC
+           WP: Sp
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L580` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L759) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L580)

```diff
-         if (0 !== (QC & gC.Ab.Held) || nC.setViewHeading((0, HC.s)(nC.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (Op & yp.ib.Held) || Sp.setViewHeading((0, Qp.y)(Sp.bodyHeading)), void 0 !== this.pending) {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L584` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L763) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L584)

```diff
-         this.readLook((0, cC.f)(zC), (0, cC.f)(ZC), QC, (0, cC.f)(wC), (0, cC.f)(bC));
+         this.readLook((0, Tp.i)(ip), (0, Tp.i)(cp), Op, (0, Tp.i)(op), (0, Tp.i)(Ip));
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L586` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L765) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L586)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !fC) return gC.qb.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !xp) return yp.cb.None;
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L588-L589` → after: `L767-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L767-L768) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L588-L589)

```diff
-         if (0 === this.options.api.queries.directorPose(oC, qC, FC, (0, HC.s)(fC.heading), (0, HC.g)(fC.pitch), (0, mC.j)(fC.fov))) return gC.qb.None;
-         if ("default" === this.director.getSettings().mode) return gC.qb.Pose;
+         if (0 === this.options.api.queries.directorPose(Lp, Yp, Dp, (0, Qp.y)(xp.heading), (0, Qp.l)(xp.pitch), (0, lp.o)(xp.fov))) return yp.cb.None;
+         if ("default" === this.director.getSettings().mode) return yp.cb.Pose;
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L592` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L771) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L592)

```diff
-             return gC.qb.FaceCamera;
+             return yp.cb.FaceCamera;
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L594` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L773) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L594)

```diff
-             return gC.qb.FaceCursor;
+             return yp.cb.FaceCursor;
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L596` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L775) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L596)

```diff
-             return gC.qb.FaceMovement
+             return yp.cb.FaceMovement
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L611` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L790) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L611)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new lC.e(this.fN), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (CC = (zC = this.opt … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Bp.c(this.WP), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (pp = (ip = this.opt … [truncated]
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L617` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L796) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L617)

```diff
-         const zC = (0, EC.d)(CC);
+         const ip = (0, Jp.g)(pp);
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L622-L623` → after: `L801-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L801-L802) · [Before (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L622-L623)

```diff
-           nC = 0 !== (ZC & gC.Ab.LookPointed);
-         if (null === this.mouseTurns && !nC) return bC.VY = 0, bC.Zm = 0, void(bC.pointedAt = void 0);
+           Sp = 0 !== (cp & yp.ib.LookPointed);
+         if (null === this.mouseTurns && !Sp) return Ip.QE = 0, Ip.TE = 0, void(Ip.pointedAt = void 0);
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L627` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L806) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L627)

```diff
-           fN: oC
+           WP: Lp
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L629` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L808) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L629)

```diff
-         oC.setViewHeading((0, EC.b)(oC.getViewHeading(), CC, zC, fC, "look" === this.mouseTurns, bC))
+         Lp.setViewHeading((0, Jp.d)(Lp.getViewHeading(), pp, ip, xp, "look" === this.mouseTurns, Ip))
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L633` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L812) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L633)

```diff
-           ZC = Math.min(CC.length, gC.ie);
+           cp = Math.min(pp.length, yp.Dd);
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L635` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L814) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L635)

```diff
-           for (let ZC = 0; ZC < 3; ZC++) zC[3 * QC + ZC] = Math.floor(CC[QC][ZC] / gC.K);
+           for (let cp = 0; cp < 3; cp++) ip[3 * Op + cp] = Math.floor(pp[Op][cp] / yp.v);
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L640` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L819) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L640)

```diff
-           VS: zC,
+           rc: ip,
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L649` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L828) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L649)

```diff
-         null !== CC && (0, gC.Qf)(CC, 0, this.VS, this.centresLen) && (this.centresUnsent = !1)
+         null !== pp && (0, yp.Af)(pp, 0, this.rc, this.centresLen) && (this.centresUnsent = !1)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L653` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L832) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L653)

```diff
-         return null !== (CC = null === (zC = (ZC = this.options).screen) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : DC
+         return null !== (pp = null === (ip = (cp = this.options).screen) || void 0 === ip ? void 0 : ip.call(cp)) && void 0 !== pp ? pp : gp
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L657` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L836) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L657)

```diff
-         return (null !== (CC = this.options.isPageHidden) && void 0 !== CC ? CC : jC)()
+         return (null !== (pp = this.options.isPageHidden) && void 0 !== pp ? pp : Gp)()
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L661` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L840) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L661)

```diff
-         return null !== (CC = null === (zC = (ZC = this.options).now) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : performance.now()
+         return null !== (pp = null === (ip = (cp = this.options).now) || void 0 === ip ? void 0 : ip.call(cp)) && void 0 !== pp ? pp : performance.now()
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L664-L668` → after: `L843-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L843-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L843-L847) · [Before (L664-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L664-L668)

```diff
-     var LC = ZC(40606);
-     const UC = gC.K * gC.K * gC.K,
-       BC = Math.log2(gC.K),
-       OC = gC.K - 1,
-       kC = gC.S.BYTES / 4,
+     var Zp = cp(40978);
+     const zp = yp.v * yp.v * yp.v,
+       sp = Math.log2(yp.v),
+       Kp = yp.v - 1,
+       Vp = yp.E.BYTES / 4,
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L672` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L851) · [Before (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L672)

```diff
-       return CC * gC.K * gC.K + zC * gC.K + ZC
+       return pp * yp.v * yp.v + ip * yp.v + cp
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L692` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L871) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L692)

```diff
-         this.table = CC, this.slot = zC, this.generation = ZC, this.epoch = QC, this.lN = new zz(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = VC, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = pp, this.slot = ip, this.generation = cp, this.epoch = Op, this.hP = new Oi(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = ii, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L699` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L878) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L699)

```diff
-           zC = this.layers ??= new Uint16Array(gC.K);
+           ip = this.layers ??= new Uint16Array(yp.v);
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L756-L757` → after: `L935-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L935-L936) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L756-L757)

```diff
-       const ZC = CC[zC * gC.K];
-       for (let QC = 0; QC < gC.K; QC++) {
+       const cp = pp[ip * yp.v];
+       for (let Op = 0; Op < yp.v; Op++) {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L759` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L938) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L759)

```diff
-         for (let zC = 0; zC < gC.K; zC++)
+         for (let ip = 0; ip < yp.v; ip++)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L774-L775` → after: `L953-L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L953-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L953-L954) · [Before (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L774-L775)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, bC === gC.U.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (bC !== gC.U.Stored && bC !== gC.U.Unloaded) throw new MC.b(`ChunkSlot flags ${bC}`);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Ip === yp.F.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (Ip !== yp.F.Stored && Ip !== yp.F.Unloaded) throw new Wp.b(`ChunkSlot flags ${Ip}`);
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L778` → after: `L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L957) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L778)

```diff
-         if (bC === gC.U.Unloaded) return void this.chunks.delete(nC);
+         if (Ip === yp.F.Unloaded) return void this.chunks.delete(Sp);
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L788-L789` → after: `L967-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L967-L968) · [Before (L788-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L788-L789)

```diff
-           zC = gC.w.chunkSlotsPtr(CC, 0),
-           ZC = gC.w.chunkSlotsLen(CC, 0);
+           ip = yp.q.chunkSlotsPtr(pp, 0),
+           cp = yp.q.chunkSlotsLen(pp, 0);
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L794-L795` → after: `L973-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L973-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L973-L974) · [Before (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L794-L795)

```diff
-           zC = gC.w.walkThroughPtr(CC, 0),
-           ZC = gC.w.walkThroughLen(CC, 0);
+           ip = yp.q.walkThroughPtr(pp, 0),
+           cp = yp.q.walkThroughLen(pp, 0);
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L808` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L987) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L808)

```diff
-         CC !== this.slotsBuffer && (this.slotsBuffer = CC, this.slots = null !== (zC = (0, MC.m)(Uint32Array, CC, this.slotsPtr, this.slotsLen * kC, "the chunk directory")) && void 0 !== zC ? zC : bz);
+         pp !== this.slotsBuffer && (this.slotsBuffer = pp, this.slots = null !== (ip = (0, Wp.l)(Uint32Array, pp, this.slotsPtr, this.slotsLen * Vp, "the chunk directory")) && void 0 !== ip ? ip : xi);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L814` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L993) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L814)

```diff
-           return null !== (ZC = (0, MC.m)(Uint16Array, CC, zC, UC, "a chunk's voxels")) && void 0 !== ZC ? ZC : VC
+           return null !== (cp = (0, Wp.l)(Uint16Array, pp, ip, zp, "a chunk's voxels")) && void 0 !== cp ? cp : ii
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L822` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1001) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L822)

```diff
-         return null !== (QC = this.chunks.get((0, LC.e)(CC, zC, ZC))) && void 0 !== QC ? QC : null
+         return null !== (Op = this.chunks.get((0, Zp.e)(pp, ip, cp))) && void 0 !== Op ? Op : null
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L835` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1014) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L835)

```diff
-         return null !== (QC = fC.written(oC)) && void 0 !== QC ? QC : fC.voxelData()[oC]
+         return null !== (Op = xp.written(Lp)) && void 0 !== Op ? Op : xp.voxelData()[Lp]
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L844` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1023) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L844)

```diff
-         return null !== (QC = null === (wC = this.chunks.get((0, LC.e)(CC, zC, ZC))) || void 0 === wC ? void 0 : wC.Ug) && void 0 !== QC ? QC : null
+         return null !== (Op = null === (op = this.chunks.get((0, Zp.e)(pp, ip, cp))) || void 0 === op ? void 0 : op.YU) && void 0 !== Op ? Op : null
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L847` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1026) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L847)

```diff
-         const oC = gC.K;
+         const Lp = yp.v;
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L861` → after: `L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1040) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L861)

```diff
-                 RC = SC.dM,
+                 Hp = Up.TW,
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L897` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1076) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L897)

```diff
-         CC !== this.walkBuffer && (this.walkBuffer = CC, this.walk = null !== (zC = (0, MC.m)(Uint32Array, CC, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== zC ? zC : bz);
+         pp !== this.walkBuffer && (this.walkBuffer = pp, this.walk = null !== (ip = (0, Wp.l)(Uint32Array, pp, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ip ? ip : xi);
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L906-L912` → after: `L1085-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1085-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1085-L1091) · [Before (L906-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L906-L912)

```diff
-     var oz = ZC(38334),
-       qz = ZC(37640),
-       Fz = ZC(36667),
-       Wz = ZC(36502),
-       Nz = ZC(34107),
-       Mz = ZC(38961),
-       gz = ZC(184);
+     var Di = cp(38726),
+       Ai = cp(38033),
+       Pi = cp(36994),
+       Wi = cp(36819),
+       yi = cp(34386),
+       Ui = cp(39295),
+       wi = cp(195);
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1375-L1378` → after: `L1554-L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1554-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1554-L1557) · [Before (L1375-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1375-L1378)

```diff
-     var xz = ZC(36643),
-       Jz = ZC(36657),
-       Iz = ZC(36650),
-       iz = ZC(239);
+     var ji = cp(36950),
+       ki = cp(36974),
+       mi = cp(36965),
+       Ri = cp(249);
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1381` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1560) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1381)

```diff
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iz.e;
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ri.b;
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1424` → after: `L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1603) · [Before (L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1424)

```diff
-     var ez = ZC(40729);
+     var Mi = cp(41091);
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1434` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1613) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1434)

```diff
-       Kz = gz.f.Dp * gz.f.playerEyeToHeightRatio,
+       Ei = wi.g.Vw * wi.g.playerEyeToHeightRatio,
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1482` → after: `L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1661) · [Before (L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1482)

```diff
-         this.createHowl = CC, this.listener = zC, this.now = ZC, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(Sz.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Fl … [truncated]
+         this.createHowl = pp, this.listener = ip, this.now = cp, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(vi.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Fl … [truncated]
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1492-L1493` → after: `L1671-L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1671-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1671-L1672) · [Before (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1492-L1493)

```diff
-             const qC = 0 !== (wC & gC.re.Loop);
-             wC & gC.re.TwoD ? this.start(QC, !1, nC, bC, fC, qC) : this.startSpatial(QC, nC, bC, fC, qC, CC, zC, ZC, oC, this.earDistSq(CC, zC, ZC))
+             const Yp = 0 !== (op & yp.Od.Loop);
+             op & yp.Od.TwoD ? this.start(Op, !1, Sp, Ip, xp, Yp) : this.startSpatial(Op, Sp, Ip, xp, Yp, pp, ip, cp, Lp, this.earDistSq(pp, ip, cp))
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1509` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1688) · [Before (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1509)

```diff
-             void 0 !== wC && this.fade(wC, zC, ZC, 0 !== (QC & gC.oe.StopAfter))
+             void 0 !== op && this.fade(op, ip, cp, 0 !== (Op & yp.Ld.StopAfter))
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1537` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1716) · [Before (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1537)

```diff
-           if (Jz.c.has(Sz[CC])) continue;
+           if (ki.b.has(vi[pp])) continue;
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1561` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1740) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1561)

```diff
-             of zC) this.sheets.delete(CC), "loaded" === QC.state() ? (0, xz.b)(QC, ZC) : (QC.unload(), ZC())
+             of ip) this.sheets.delete(pp), "loaded" === Op.state() ? (0, ji.d)(Op, cp) : (Op.unload(), cp())
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1565` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1744) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1565)

```diff
-         if (CC < gC.p.PlaySound || CC > gC.p.SoundReset) return !1;
+         if (pp < yp.l.PlaySound || pp > yp.l.SoundReset) return !1;
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1567` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1746) · [Before (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1567)

```diff
-           return (0, gC.xe)(CC, zC, ZC, QC, this.handlers)
+           return (0, yp.$d)(pp, ip, cp, Op, this.handlers)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1574` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1753) · [Before (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1574)

```diff
-         for (let QC = 0; QC < 3; QC++) zC[2 - QC] = gC.z.listener(CC, 0, QC), zC[5 - QC] = gC.z.forward(CC, 0, QC), zC[8 - QC] = gC.z.up(CC, 0, QC);
+         for (let Op = 0; Op < 3; Op++) ip[2 - Op] = yp.r.listener(pp, 0, Op), ip[5 - Op] = yp.r.forward(pp, 0, Op), ip[8 - Op] = yp.r.up(pp, 0, Op);
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1588` → after: `L1767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1767) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1588)

```diff
-         if (fC < 0) return ez.e;
+         if (xp < 0) return Mi.c;
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1599` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1778) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1599)

```diff
-         if (!Number.isFinite(oC) || !Number.isFinite(qC) || !Number.isFinite(FC)) return ez.e;
+         if (!Number.isFinite(Lp) || !Number.isFinite(Yp) || !Number.isFinite(Dp)) return Mi.c;
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1605` → after: `L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1784) · [Before (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1605)

```diff
-           if (WC = CC * CC + zC * zC + ZC * ZC, WC > wC * wC) return ez.e
+           if (Ap = pp * pp + ip * ip + cp * cp, Ap > op * op) return Mi.c
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1608` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1787) · [Before (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1608)

```diff
-         return NC ? this.gameSound(NC.howl, NC.id, !0) : ez.e
+         return Pp ? this.gameSound(Pp.howl, Pp.id, !0) : Mi.c
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1635` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1814) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1635)

```diff
-             const fC = this.level > 0 ? ZC / this.level : ZC > 0 && null !== (bC = null === (nC = this.live.get(zC)) || void 0 === nC ? void 0 : nC.rel) && void 0 !== bC ? bC : 0;
+             const xp = this.level > 0 ? cp / this.level : cp > 0 && null !== (Ip = null === (Sp = this.live.get(ip)) || void 0 === Sp ? void 0 : Sp.rel) && void 0 !== Ip ? Ip : 0;
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1641` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1820) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1641)

```diff
-               return CC > 0 && CC < 1 / 0 ? CC : 1
+               return pp > 0 && pp < 1 / 0 ? pp : 1
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1646` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1825) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1646)

```diff
-             return (null !== (CC = null === (ZC = this.live.get(zC)) || void 0 === ZC ? void 0 : ZC.rel) && void 0 !== CC ? CC : 0) * this.level
+             return (null !== (pp = null === (cp = this.live.get(ip)) || void 0 === cp ? void 0 : cp.rel) && void 0 !== pp ? pp : 0) * this.level
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1650` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1829) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1650)

```diff
-             return null !== (CC = null === (ZC = this.live.get(zC)) || void 0 === ZC ? void 0 : ZC.rel) && void 0 !== CC ? CC : 0
+             return null !== (pp = null === (cp = this.live.get(ip)) || void 0 === cp ? void 0 : cp.rel) && void 0 !== pp ? pp : 0
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1657` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1836) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1657)

```diff
-                 refDistance: Fz.j
+                 refDistance: Pi.k
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1675-L1676` → after: `L1854-L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1854-L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1854-L1855) · [Before (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1675-L1676)

```diff
-           const ZC = Gz[CC] === dz ? null : (0, Iz.g)(Pz[CC]),
-             QC = (0, Iz.d)(mz(zC), Math.sqrt(qC), oC);
+           const cp = di[pp] === li ? null : (0, mi.f)(Hi[pp]),
+             Op = (0, mi.c)(Qi(ip), Math.sqrt(Yp), Lp);
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1783-L1784` → after: `L1962-L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1962-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1962-L1963) · [Before (L1783-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1783-L1784)

```diff
-     var uz = ZC(40440),
-       rz = ZC(38964);
+     var bi = cp(40806),
+       ai = cp(39304);
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1787` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1966) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1787)

```diff
-         this.key = CC, this.model = zC, this.host = QC, this.HW = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.PwC = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = pp, this.model = ip, this.host = Op, this.TA = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.YIp = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1793` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1972) · [Before (L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1793)

```diff
-         !this.Sg && CC >= 0 && CC < this.HW && CC < gC.Cc.Max && this.rg(CC, CC + 1)
+         !this.Ry && pp >= 0 && pp < this.TA && pp < yp.jc.Max && this.pU(pp, pp + 1)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1796-L1797` → after: `L1975-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1975-L1976) · [Before (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1796-L1797)

```diff
-         if (this.Sg) return;
-         (CC = Math.min(Math.max(Math.floor(CC), 0), this.HW, gC.Cc.Max)) > this.count && this.rg(this.count, CC), this.count = CC;
+         if (this.Ry) return;
+         (pp = Math.min(Math.max(Math.floor(pp), 0), this.TA, yp.jc.Max)) > this.count && this.pU(this.count, pp), this.count = pp;
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1802` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1981) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1802)

```diff
-         } = this, wC = this.PwC !== CC, bC = ZC[0] !== zC[0] || ZC[1] !== zC[1] || ZC[2] !== zC[2];
+         } = this, op = this.YIp !== pp, Ip = cp[0] !== ip[0] || cp[1] !== ip[1] || cp[2] !== ip[2];
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1813-L1815` → after: `L1992-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1992-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1992-L1994) · [Before (L1813-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1813-L1815)

```diff
-             zC = CC * oz.d,
-             ZC = FC * gC.Cc.Bytes,
-             wC = 0 !== oC[zC + oz.g] ? gC.Cc.Hidden : 0;
+             ip = pp * Di.e,
+             cp = Dp * yp.jc.Bytes,
+             op = 0 !== Lp[ip + Di.h] ? yp.jc.Hidden : 0;
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1818` → after: `L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1997) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1818)

```diff
-         if ((0, gC.df)(nC, 0, this.key, CC, zC, fC, this.tailOf(fC))) {
+         if ((0, yp.Fe)(Sp, 0, this.key, pp, ip, xp, this.tailOf(xp))) {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1820` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1999) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1820)

```diff
-           QC.length = 0, this.PwC = CC, ZC[0] = zC[0], ZC[1] = zC[1], ZC[2] = zC[2]
+           Op.length = 0, this.YIp = pp, cp[0] = ip[0], cp[1] = ip[1], cp[2] = ip[2]
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1824` → after: `L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2003) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1824)

```diff
-         (CC = Math.ceil(CC)) <= this.HW || this.Sg || (this.records = (0, rz.b)(this.records, new Float32Array(CC * oz.d)), this.isDirty = (0, rz.b)(this.isDirty, new Uint8Array(CC)), this.tail = new Uint8Array(CC * gC.Cc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (pp = Math.ceil(pp)) <= this.TA || this.Ry || (this.records = (0, ai.d)(this.records, new Float32Array(pp * Di.e)), this.isDirty = (0, ai.d)(this.isDirty, new Uint8Array(pp)), this.tail = new Uint8Array(pp * yp.jc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1827` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2006) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1827)

```diff
-         this.Sg || (this.Sg = !0, this.host.Sg(this, this.made ? this.key : null))
+         this.Ry || (this.Ry = !0, this.host.Ry(this, this.made ? this.key : null))
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1836` → after: `L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2015) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1836)

```diff
-           this.made = (0, gC.kf)(CC, 0, this.key, zC, ZC, QC)
+           this.made = (0, yp.Ne)(pp, 0, this.key, ip, cp, Op)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1841` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2020) · [Before (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1841)

```diff
-         const zC = CC * gC.Cc.Bytes;
+         const ip = pp * yp.jc.Bytes;
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1852` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2031) · [Before (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1852)

```diff
-     var Tz = ZC(597);
+     var Fi = cp(636);
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1866` → after: `L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2045) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1866)

```diff
-         if (ZC = CC, !Tz.p.includes(ZC)) return null;
+         if (cp = pp, !Fi.o.includes(cp)) return null;
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1883` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2062) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1883)

```diff
-         this.key = CC, this.lifeform = zC, this.scale = ZC, this.host = QC, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Sg = !1, this.sync()
+         this.key = pp, this.lifeform = ip, this.scale = cp, this.host = Op, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.Ry = !1, this.sync()
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1886` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2065) · [Before (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1886)

```diff
-         this.Sg || (this.feet[0] = CC[0], this.feet[1] = CC[1], this.feet[2] = CC[2], this.yaw = zC, this.owed |= 2, this.sync())
+         this.Ry || (this.feet[0] = pp[0], this.feet[1] = pp[1], this.feet[2] = pp[2], this.yaw = ip, this.owed |= 2, this.sync())
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1889` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2068) · [Before (L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1889)

```diff
-         this.Sg || CC === this.visible || (this.visible = CC, this.owed |= 4, this.sync())
+         this.Ry || pp === this.visible || (this.visible = pp, this.owed |= 4, this.sync())
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1892` → after: `L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2071) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1892)

```diff
-         this.Sg || (this.Sg = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.Ry || (this.Ry = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1896` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2075) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1896)

```diff
-         return this.write(CC) ? (this.host.settled(this, this.Sg), !0) : (this.host.owes(this), !1)
+         return this.write(pp) ? (this.host.settled(this, this.Ry), !0) : (this.host.owes(this), !1)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1901` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2080) · [Before (L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1901)

```diff
-           if (!(0, gC.pf)(CC, 0, this.key, this.lifeform, this.scale)) return !1;
+           if (!(0, yp.Ve)(pp, 0, this.key, this.lifeform, this.scale)) return !1;
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1904` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2083) · [Before (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1904)

```diff
-         const zC = (2 & this.owed ? gC.kd.Pose : 0) | (4 & this.owed ? gC.kd.Visible : 0);
+         const ip = (2 & this.owed ? yp.Hc.Pose : 0) | (4 & this.owed ? yp.Hc.Visible : 0);
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1906` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2085) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1906)

```diff
-           if (!(0, gC.of)(CC, 0, this.key, zC, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
+           if (!(0, yp.Re)(pp, 0, this.key, ip, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1910` → after: `L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2089) · [Before (L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1910)

```diff
-           if (!(0, gC.mf)(CC, 0, this.key)) return !1;
+           if (!(0, yp.Oe)(pp, 0, this.key)) return !1;
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1916` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2095) · [Before (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1916)

```diff
-     var Dz = ZC(40827);
+     var ri = cp(41208);
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1919` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2098) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1919)

```diff
-       return (0, Dz.b)(), (0, gC.Uf)(CC, zC, ZC, QC)
+       return (0, ri.e)(), (0, yp.Df)(pp, ip, cp, Op)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1921-L1922` → after: `L2100-L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2100-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2100-L2101) · [Before (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1921-L1922)

```diff
-     var yz = ZC(38967),
-       Lz = ZC(40427);
+     var zi = cp(39310),
+       si = cp(40792);
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1938` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2117) · [Before (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1938)

```diff
-       const zC = qz.b[CC],
+       const ip = Ai.d[pp],
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1949` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2128) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1949)

```diff
-       if (null === CC || void 0 === CC) return gC.qd;
+       if (null === pp || void 0 === pp) return yp.Nc;
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1951` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2130) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1951)

```diff
-       return Number.isInteger(zC) && zC >= -2147483648 && zC <= 2147483647 && String(zC) === String(CC) ? zC : gC.qd
+       return Number.isInteger(ip) && ip >= -2147483648 && ip <= 2147483647 && String(ip) === String(pp) ? ip : yp.Nc
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1955` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2134) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1955)

```diff
-       return (0, gC.$f)(CC, 0, zC, null !== ZC && void 0 !== ZC ? ZC : Number.NaN)
+       return (0, yp.Mf)(pp, 0, ip, null !== cp && void 0 !== cp ? cp : Number.NaN)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1966` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2145) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1966)

```diff
-           Sg: (CC, zC) => {
+           Ry: (pp, ip) => {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1975` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2154) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1975)

```diff
-         if (!this.isLocal(CC)) throw new Error(`Attempted to ${zC} for a player that is not the local player`)
+         if (!this.isLocal(pp)) throw new Error(`Attempted to ${ip} for a player that is not the local player`)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1978-L1979` → after: `L2157-L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2157-L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2157-L2158) · [Before (L1978-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1978-L1979)

```diff
-         const zC = this.api.yG(CC);
-         if (!zC) throw new Error(`Entity ${CC} has no replicated position`);
+         const ip = this.api.sH(pp);
+         if (!ip) throw new Error(`Entity ${pp} has no replicated position`);
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1997` → after: `L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2176) · [Before (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1997)

```diff
-         this.assertLocal(CC, "open shop"), nC.o.bp("showShopFromServer", {
+         this.assertLocal(pp, "open shop"), Sp.m.GA("showShopFromServer", {
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1999` → after: `L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2178) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1999)

```diff
-           hw: ZC
+           Dp: cp
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2008` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2187) · [Before (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2008)

```diff
-         nC.o.bp("chat", {
+         Sp.m.GA("chat", {
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2017` → after: `L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2196) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2017)

```diff
-         return zC === gC.qd ? void 0 : (0, uz.j)(this.api, zC)
+         return ip === yp.Nc ? void 0 : (0, bi.k)(this.api, ip)
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2021` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2200) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2021)

```diff
-         return ZC !== gC.qd && (0, uz.g)(this.api, ZC, zC)
+         return cp !== yp.Nc && (0, bi.h)(this.api, cp, ip)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2030` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2209) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2030)

```diff
-         if (!this.chunks.dataCleared(CC, zC, ZC)) return (0, uz.e)(this.api, CC, zC, ZC)
+         if (!this.chunks.dataCleared(pp, ip, cp)) return (0, bi.d)(this.api, pp, ip, cp)
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2037-L2038` → after: `L2216-L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2216-L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2216-L2217) · [Before (L2037-L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2037-L2038)

```diff
-         if (!Object.hasOwn(gC.Dd, ZC)) throw new Error(`Unknown other-entity setting ${ZC}`);
-         const wC = gC.Dd[ZC],
+         if (!Object.hasOwn(yp.$c, cp)) throw new Error(`Unknown other-entity setting ${cp}`);
+         const op = yp.$c[cp],
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2040` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2219) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2040)

```diff
-         if (bC === gC.qd || !this.deps.beforeWrite()) return;
+         if (Ip === yp.Nc || !this.deps.beforeWrite()) return;
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2042` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2221) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2042)

```diff
-         if (nC.length > 16384) throw new Error(`The other-entity setting ${ZC}'s value is over 16384 bytes`);
+         if (Sp.length > 16384) throw new Error(`The other-entity setting ${cp}'s value is over 16384 bytes`);
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2054` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2233) · [Before (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2054)

```diff
-           ZC = (zC === gC.qd ? 0 : this.api.queries.directorEntity(zC)) >= gC.xb.BYTES ? this.api.memoryData(this.api.scratch(), gC.xb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
+           cp = (ip === yp.Nc ? 0 : this.api.queries.directorEntity(ip)) >= yp.gb.BYTES ? this.api.memoryData(this.api.scratch(), yp.gb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2056` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2235) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2056)

```diff
-         if (1 === gC.xb.headingIsDrawn(ZC, 0)) return gC.xb.heading(ZC, 0);
+         if (1 === yp.gb.headingIsDrawn(cp, 0)) return yp.gb.heading(cp, 0);
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2058` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2237) · [Before (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2058)

```diff
-         return this.isLocal(CC) && 0 === (gC.w.playerFlags(QC, 0) & gC.ce.FreeCam) ? gC.w.heading(QC, 0) : null
+         return this.isLocal(pp) && 0 === (yp.q.playerFlags(Op, 0) & yp.wd.FreeCam) ? yp.q.heading(Op, 0) : null
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2061-L2064` → after: `L2240-L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2240-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2240-L2243) · [Before (L2061-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2061-L2064)

```diff
-         const CC = gC.w.playerFlags(this.api.apiView, 0);
-         return 0 === (CC & gC.ce.Replay) && this.api.readDrawnPosition(this.api.localId, Oz) ? {
-           onGround: 0 !== (CC & gC.ce.OnGround),
-           jumpHeld: 0 !== (CC & gC.ce.JumpHeld)
+         const pp = yp.q.playerFlags(this.api.apiView, 0);
+         return 0 === (pp & yp.wd.Replay) && this.api.readDrawnPosition(this.api.localId, pc) ? {
+           onGround: 0 !== (pp & yp.wd.OnGround),
+           jumpHeld: 0 !== (pp & yp.wd.JumpHeld)
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2067-L2068` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2246-L2247) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2067-L2068)

```diff
-       XzC(CC) {
-         return this.isLocal(CC) ? this.items.vq() : null
+       Acp(pp) {
+         return this.isLocal(pp) ? this.items.sx() : null
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2078` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2257) · [Before (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2078)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.vq()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.sx()
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2082` → after: `L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2261) · [Before (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2082)

```diff
-         const ZC = (0, Wz.c)(QC.b.get("crosshairGameView"), QC.b.get("crosshairShownOverride"));
+         const cp = (0, Wi.d)(Op.c.get("crosshairGameView"), Op.c.get("crosshairShownOverride"));
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2087-L2089` → after: `L2266-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2266-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2266-L2268) · [Before (L2087-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2087-L2089)

```diff
-           fC = 0 === (gC.w.playerFlags(this.api.apiView, 0) & gC.ce.ZoomFirstPerson),
-           oC = null !== (zC = this.tables.getClientOption("gunshotOrigin")) && void 0 !== zC ? zC : null;
-         return (0, Wz.g)({
+           xp = 0 === (yp.q.playerFlags(this.api.apiView, 0) & yp.wd.ZoomFirstPerson),
+           Lp = null !== (ip = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ip ? ip : null;
+         return (0, Wi.h)({
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2092` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2271) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2092)

```diff
-         }, fC, (0, Nz.e)(), oC)
+         }, xp, (0, yi.c)(), Lp)
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2095` → after: `L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2274) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2095)

```diff
-         QC.b.set({
+         Op.c.set({
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2112` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2291) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2112)

```diff
-         if (this.isLocal(CC)) return 0 !== (gC.w.playerFlags(this.api.apiView, 0) & gC.ce.Crouching);
+         if (this.isLocal(pp)) return 0 !== (yp.q.playerFlags(this.api.apiView, 0) & yp.wd.Crouching);
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2114` → after: `L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2293) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2114)

```diff
-         return zC !== gC.qd && 1 === this.api.queries.entityCrouching(zC)
+         return ip !== yp.Nc && 1 === this.api.queries.entityCrouching(ip)
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2120` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2299) · [Before (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2120)

```diff
-         return 0 !== (gC.w.playerFlags(this.api.apiView, 0) & gC.ce.AttemptingBreak)
+         return 0 !== (yp.q.playerFlags(this.api.apiView, 0) & yp.wd.AttemptingBreak)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2123` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2302) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2123)

```diff
-         return this.live.pCC()
+         return this.live.Rpp()
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2127` → after: `L2306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2306) · [Before (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2127)

```diff
-         for (let zC = 0; zC < 3; zC++) Vz.origin[zC] = gC.w.HCC(CC, 0, zC), Vz.direction[zC] = gC.w.actionDir(CC, 0, zC);
+         for (let ip = 0; ip < 3; ip++) cc.origin[ip] = yp.q.gpp(pp, 0, ip), cc.direction[ip] = yp.q.actionDir(pp, 0, ip);
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2143-L2144` → after: `L2322-L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2322-L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2322-L2323) · [Before (L2143-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2143-L2144)

```diff
-       QzC(CC, zC, ZC, QC, wC) {
-         return 1 === this.api.queries.terrainBlocked(QC, CC, zC, ZC, nZ(null !== wC && void 0 !== wC ? wC : null))
+       eip(pp, ip, cp, Op, op) {
+         return 1 === this.api.queries.terrainBlocked(Op, pp, ip, cp, Yc(null !== op && void 0 !== op ? op : null))
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2156` → after: `L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2335) · [Before (L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2156)

```diff
-         return this.chunks.SF(CC, zC, ZC)
+         return this.chunks.tx(pp, ip, cp)
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2162` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2341) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2162)

```diff
-         return 1 === QC ? nC : nC.rate(QC)
+         return 1 === Op ? Sp : Sp.rate(Op)
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2171-L2174` → after: `L2350-L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2350-L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2350-L2353) · [Before (L2171-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2171-L2174)

```diff
-         if (!nC) return ez.e;
-         const fC = null === ZC || void 0 === ZC ? void 0 : ZC.UQ,
-           oC = null !== (wC = null === ZC || void 0 === ZC ? void 0 : ZC.maxHearDist) && void 0 !== wC ? wC : Fz.g,
-           qC = null !== (bC = null === ZC || void 0 === ZC ? void 0 : ZC.refDistance) && void 0 !== bC ? bC : Fz.j;
+         if (!Sp) return Mi.c;
+         const xp = null === cp || void 0 === cp ? void 0 : cp.Sp,
+           Lp = null !== (op = null === cp || void 0 === cp ? void 0 : cp.maxHearDist) && void 0 !== op ? op : Pi.g,
+           Yp = null !== (Ip = null === cp || void 0 === cp ? void 0 : cp.refDistance) && void 0 !== Ip ? Ip : Pi.k;
```
