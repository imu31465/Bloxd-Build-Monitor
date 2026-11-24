# Changed — Bundle Modifications Report (Part 031 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `31 / 65` (**279** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 030](part-030.md) · [Part 032 →](part-032.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/90.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/90.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20)

#### 8. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L458-L460` → after: `L748-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L748-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L748-L753) · [Before (L458-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L458-L460)

```diff
-       var zD, wD;
-       const pD = null === (zD = /\(([^)]*)\)/.exec(DD)) || void 0 === zD || null === (wD = zD[1].split(",")[1]) || void 0 === wD ? void 0 : wD.trim();
-       return pD && /^[A-Za-z_$][\w$]*$/.test(pD) ? [...DD.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((DD => DD[2].split(",").some((DD => DD.trim() === pD)) ? [DD[1]] : [])) : []
+       const ip = {
+         off: 0,
+         lit: Wp.CellLight,
+         all: Wp.CellLight | Wp.CellLightUnlit
+       } [pp.cellLight];
+       return (pp.showFog ? Wp.ShowFog : 0) | (pp.lighting ? Wp.Lighting : 0) | (pp.chunkFade ? Wp.ChunkFade : 0) | ip
```

#### 9. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L464-L549` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L800) · [Before (L464-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L464-L549)

```diff
-       const wD = new Set,
-         pD = new Set,
-         sD = new Set,
-         KD = Object.values(DD).map((DD => {
-           const zD = eD(DD),
-             wD = zD.filter((DD => "playerCommand" === DD.name)).map((zD => DD.slice(zD.from, zD.to)));
-           return {
-             text: DD,
-             found: zD,
-             own: wD
-           }
-         })),
-         rD = new Set(KD.flatMap((DD => {
-           let {
-             own: zD
-           } = DD;
- ... (70 more removed lines; see GitHub link above)
+       return (pp | ip << 8) >>> 0
```

#### 10. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L553-L554` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L804) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L553-L554)

```diff
-       const zD = DD.split(/\n|\|/).map((DD => DD.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((DD => "" !== DD)).slice(0, 5).map((DD => DD.length > 90 ? `${DD.slice(0,89).trimEnd()}\u2026` : DD));
-       return zD.length >= 2 ? zD : []
+       return 255 & pp
```

#### 11. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L559` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L808) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L559)

```diff
-       return DD.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+       return pp >>> 8
```

#### 12. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L563-L566` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L812) · [Before (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L563-L566)

```diff
-       const zD = new Set;
-       for (const wD of DD.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) zD.add(wD[1]);
-       for (const wD of DD.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) zD.add(wD[1]);
-       return [...zD]
+       return pp + 3 & -4
```

#### 13. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L568-L599` → after: `L814-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L814-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L814-L825) · [Before (L568-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L568-L599)

```diff
- 
-     function Gz(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const pD = new Set(zD),
-         sD = new Map;
-       for (const AD of zD) {
-         var KD;
-         const DD = Iz(AD);
-         sD.set(DD, [...null !== (KD = sD.get(DD)) && void 0 !== KD ? KD : [], AD])
-       }
-       const rD = Bz(DD),
-         LD = new Set(Bz(wD)),
-         cD = [];
-       let gD = DD;
-       for (const AD of rD) {
-         var RD;
- ... (16 more removed lines; see GitHub link above)
+     const fp = 16777216,
+       bp = 20;
+     const hp = 8,
+       ap = 8,
+       np = 16777216,
+       Fp = {
+         JobResult: 1,
+         WorkerStarted: 2,
+         WorkerLost: 3,
+         WorldgenResult: 4,
+         WorldgenStarted: 5,
+         WorldgenLost: 6
```

#### 14. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L603-L604` → after: `L828-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L828-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L828-L832) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L603-L604)

```diff
-         type: "string",
-         description: "A few plain words for the creator on what this change does, under 80 characters"
+         Ok: 0,
+         Refused: 1,
+         Trapped: 2,
+         NotHeld: 3,
+         HeapRefused: 4
```

#### 15. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L607-L610` → after: `L836-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L836-L837) · [Before (L607-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L607-L610)

```diff
-         readOnlyHint: !0,
-         destructiveHint: !1,
-         idempotentHint: !0,
-         openWorldHint: !1
+         Lost: 0,
+         Gone: 1
```

#### 16. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L612-L1078` → after: `L839-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L839-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L839-L845) · [Before (L612-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L612-L1078)

```diff
-       Jz = [{
-         name: "write_file",
-         title: "Write a file",
-         description: "Replaces a file with new code, or makes a new file",
-         inputSchema: {
-           type: "object",
-           properties: {
-             path: {
-               type: "string",
-               description: "The file's path, e.g. index.js"
-             },
-             why: Mz,
-             content: {
-               type: "string",
-               description: "The whole new file"
-             }
- ... (451 more removed lines; see GitHub link above)
+       Zp = {
+         Init: 1,
+         Mesh: 2,
+         WorldgenSeed: 3,
+         Generate: 4,
+         Retire: 5
+       };
```

#### 17. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1081-L1083` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L848) · [Before (L1081-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L1081-L1083)

```diff
-       const zD = Jz.find((zD => zD.name === DD));
-       if (!zD) throw new Error(`No AI Helper tool ${DD}`);
-       return zD
+       return pp === Zp.WorldgenSeed || pp === Zp.Generate
```

#### 18. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1085-L1088` → after: `L850-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L850-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L850-L922) · [Before (L1085-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L1085-L1088)

```diff
-     const Xz = Jz.map((DD => DD.name)).filter((DD => "plan" !== DD && "remember" !== DD)).join("|"),
-       Vz = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       Pz = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${Xz})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
-       Cz = /[.!?](?=[ \t]|[A-Z]|$)|\n|$/g;
+     const sp = 4,
+       Kp = 99,
+       Vp = {
+         PAIRS_MAX: 16,
+         FIXED_WORDS: 2,
+         PAIR_WORDS: 2,
+         WORDS_MAX: 34
+       },
+       ii = {
+         BYTES: 12,
+         WEBGPU: 1,
+         GL: 2,
+         WEBGPU_LOSSES_MAX: 2,
+         LOST: 0,
+         PIPELINE_FAILED: 1,
+         RESTORE_LOST: 2
+ ... (57 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1091-L1108` → after: `L925-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L925-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L925-L927) · [Before (L1091-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L1091-L1108)

```diff
-       const zD = DD.trim();
-       return Pz.some((DD => DD.test(zD)))
-     }
- 
-     function Tz(DD, zD) {
-       const wD = DD.replace(Vz, "");
-       return zD ? function(DD) {
-         const zD = DD.indexOf("```"),
-           wD = -1 === zD ? DD : DD.slice(0, zD);
-         let pD = -1,
-           sD = -1,
-           KD = 0;
-         for (const rD of wD.matchAll(Cz)) {
-           const DD = rD.index + rD[0].length;
-           xz(wD.slice(KD, DD)) && (pD = -1 === pD ? KD : pD, sD = DD), KD = DD
-         }
- ... (2 more removed lines; see GitHub link above)
+       for (const [ip, cp] of Object.entries(Op.k))
+         if (cp === pp) return ip;
+       return `Unknown${pp}`
```

#### 20. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1114-L1148` → after: `L931-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L931-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L931-L940) · [Before (L1114-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L1114-L1148)

```diff
-       const zD = "string" === typeof DD ? DD.split(/[./:]/).pop() : void 0;
-       return function(DD) {
-         return Jz.some((zD => zD.name === DD))
-       }(zD) ? zD : null
-     }
- 
-     function Sz(DD, zD) {
-       return wD => {
-         const pD = [];
-         let sD;
-         for (const cD of wD.matchAll(DD)) {
-           var KD;
-           const DD = dz(cD[1]);
-           if (null === DD) continue;
-           const gD = {};
-           for (const wD of cD[2].matchAll(zD)) {
- ... (19 more removed lines; see GitHub link above)
+       return {
+         status: pp[Op.x.Status],
+         lastError: pp[Op.x.LastError],
+         lastErrorDetail: pp[Op.x.LastErrorDetail],
+         errorCount: pp[Op.x.ErrorCount],
+         frameIndex: pp[Op.x.FrameIndex],
+         tickIndex: pp[Op.x.TickIndex],
+         renderPending: pp[Op.x.RenderPending],
+         firstView: pp[Op.x.FirstView],
+         chunksCancelled: pp[Op.x.ChunksCancelled]
```

#### 21. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1153-L1179` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L953) · [Before (L1153-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L1153-L1179)

```diff
-       return DD.replace(/\\(["\\nt])/g, ((DD, zD) => "n" === zD ? "\n" : "t" === zD ? "\t" : zD))
-     }
- 
-     function lz(DD) {
-       let zD = null !== DD && void 0 !== DD ? DD : {};
-       if ("string" === typeof zD) try {
-         zD = JSON.parse("" === zD ? "{}" : zD)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof zD || null === zD) return null;
-       const wD = {};
-       for (const [pD, sD] of Object.entries(zD)) "string" === typeof sD ? wD[pD] = jz.has(pD) && bz.test(sD) && !sD.includes("\n") ? iz(sD) : sD : "boolean" === typeof sD || "number" === typeof sD ? wD[pD] = String(sD) : "object" !== typeof sD || null === sD || Array.isArray(sD)  … [truncated]
-       return wD
-     }
- 
- ... (11 more removed lines; see GitHub link above)
+       return "none" !== pp
```

#### 22. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1183-L1226` → after: `L957-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L957-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L957-L964) · [Before (L1183-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L1183-L1226)

```diff
-       let wD = DD;
-       for (const {
-           call: pD,
-           index: sD
-         }
-         of zD) wD = wD.slice(0, sD) + " ".repeat(pD.source.length) + wD.slice(sD + pD.source.length);
-       return wD
-     }
-     const Zz = new RegExp(`\\b(${Jz.map((DD=>DD.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
-     const yz = {
-         formatCall: (DD, zD) => {
-           const wD = Object.fromEntries(Object.entries(zD).filter((DD => {
-             let [, zD] = DD;
-             return void 0 !== zD
-           })));
-           return `${DD}(${JSON.stringify(wD)})`
- ... (28 more removed lines; see GitHub link above)
+       if (!pp) return "none";
+       switch (ip) {
+         case Op.gb.Drawn:
+           return "drawn";
+         case Op.gb.Paced:
+           return "paced";
+         default:
+           return "skipped"
```

#### 23. `bundles/bloxd.io/chunks/js/90.js` (Changed code · before: `L1232-L1257` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-9015aa23eb3e7a893a664a64af2a4c33e45f94f796f85bbc77098966ccf34b20) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/90.js#L969) · [Before (L1232-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/90.js#L1232-L1257)

```diff
-       var zD, wD, pD, sD;
-       let KD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       if ("object" !== typeof DD || null === DD) return [];
-       const rD = DD;
-       if (Array.isArray(rD.tool_calls)) return rD.tool_calls.flatMap((DD => ez(DD, !0)));
-       if (void 0 !== rD.tool_call) return ez(rD.tool_call, !0);
-       if (void 0 !== rD.function) return ez(rD.function, !0);
-       const LD = null !== (zD = null !== (wD = null !== (pD = null !== (sD = rD.arguments) && void 0 !== sD ? sD : rD.params) && void 0 !== pD ? pD : rD.param) && void 0 !== wD ? wD : rD.args) && void 0 !== zD ? zD : rD.input,
-         cD = dz(rD.tool);
-       if (null !== cD) {
-         const {
-           tool: DD,
-           ...zD
-         } = rD, wD = lz(null !== LD && void 0 !== LD ? LD : zD);
-         return null === wD ? [] : [{
-           name: cD,
- ... (10 more removed lines; see GitHub link above)
+       return "drawn" === pp
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/91.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/91.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619)

#### 1. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L4-L129` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L4-L10) · [Before (L4-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L4-L129)

```diff
-   41179: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       DOCS_AGENT_PART_CHARS: () => lz.d,
-       DOCS_LLMS_FULL_TXT_PATH: () => lz.g,
-       DOCS_LLMS_TXT_PATH: () => lz.k,
-       DOCS_LLMS_TXT_URL: () => lz.l,
-       ROOT_LLMS_TXT_PATH: () => lz.n,
-       allGamemodeSettings: () => pD.e,
-       arcadeModeStaticConfig: () => BD.e,
-       arenaStaticConfig: () => sz,
-       backroomsStaticConfig: () => pz.c,
-       battleBoxStaticConfig: () => cz,
-       bedwarsStaticConfig: () => TD.c,
-       bloxdAggregatorConfig: () => LD.c,
-       bloxdPreprodAggregatorConfig: () => cD.e,
-       bloxdStagingAggregatorConfig: () => gD.c,
- ... (110 more removed lines; see GitHub link above)
+   36591: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Dp,
+       c: () => xp,
+       g: () => Yp,
+       h: () => Lp,
+       l: () => Hp
```

#### 2. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L131` → after: `L12-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L12-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L12-L74) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L131)

```diff
-     var pD = wD(760);
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
+ ... (47 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L134-L414` → after: `L77-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L77-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L77-L197) · [Before (L134-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L134-L414)

```diff
-       var zD, wD;
-       return null !== (zD = null === (wD = (0, pD.m)(DD)) || void 0 === wD ? void 0 : wD.defaultListedVariation) && void 0 !== zD ? zD : DD
-     }
-     var KD = wD(1e3),
-       rD = wD(1032),
-       LD = wD(757),
-       cD = wD(746),
-       gD = wD(751),
-       RD = wD(739),
-       AD = wD(733),
-       UD = wD(764),
-       fD = wD(793),
-       ID = wD(771),
-       BD = wD(777),
-       GD = wD(786),
-       hD = wD(788),
- ... (265 more removed lines; see GitHub link above)
+       return "js" === pp ? Dp.jsClient : Dp.wasmClient
+     }
+     class tp {
+       constructor() {
+         this.steps = new Sp(xp, Ap), this.events = new Sp(Wp.length, Ap), this.frames = new Sp(yp.length, Ap), this.cameraSets = new Sp(Ip.e, 256), this.changes = new Sp(wp.length, 256)
+       }
+     }
+     const Hp = new class {
+       constructor() {
+         this.rings = null, this.sample = new Float64Array(Wp.length), this.startedClient = null, this.startedAtMs = 0
+       }
+       get client() {
+         return this.startedClient
+       }
+       start(pp, ip) {
+         this.startedClient = pp, this.startedAtMs = performance.now(), null !== this.rings ? this.change(vp(pp)) : ip && this.allocate()
+ ... (105 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L417-L418` → after: `L200-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L200-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L200-L207) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L417-L418)

```diff
-       return DD.map((DD => `<p>${(0,Vz.f)(DD)}</p>`)).join("")
-     }
+       return (0, Ip.C)(pp).toFixed(1)
+     }
+ 
+     function Lp(pp, ip) {
+       return `camera set by ${Sp.get(pp[ip+1])}: heading ${`${xp(pp[ip+2])} -> ${xp(pp[ip+4])}`} deg, pitch ${`${xp(pp[ip+3])} -> ${xp(pp[ip+5])}`} deg, at ${pp[ip].toFixed(1)} ms`
+     }
+     var Yp = cp(36591);
+     const Dp = 2;
```

#### 5. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L421` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L210) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L421)

```diff
-       return `<ul>${DD.map((DD=>`<li>${DD}</li>`)).join("")}</ul>`
+       return Number.isFinite(pp) ? String(Math.round(10 * pp) / 10) : String(pp)
```

#### 6. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L424-L426` → after: `L213-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L213-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L213-L333) · [Before (L424-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L424-L426)

```diff
-     function bz(DD) {
-       return Tz(DD.map(Vz.f))
-     }
+     function Pp(pp) {
+       return Number.isFinite(pp) ? pp.toFixed(1) : String(pp)
+     }
+     class Wp {
+       constructor() {
+         this.frames = 0, this.looked = 0, this.idle = 0, this.FX = 0, this.pastLimit = 0, this.lockSkips = 0, this.Hw = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+       }
+       moved() {
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.FX > 0 || this.dropped > 0 || this.cameraSets > 0
+       }
+       hasEvent() {
+         return this.FX > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       }
+     }
+     class yp {
+       constructor() {
+ ... (105 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L428-L451` → after: `L335-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L335-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L335-L360) · [Before (L428-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L428-L451)

```diff
-     function jz(DD, zD) {
-       return Tz(DD.similarGames.map((DD => {
-         var wD, sD;
-         const KD = null !== (wD = null === (sD = Pz.c[DD]) || void 0 === sD ? void 0 : sD.name) && void 0 !== wD ? wD : zD(pD.e[DD].title);
-         return `<a href="${(0,Vz.f)((0,Vz.y)(DD))}">${(0,Vz.f)(KD)}</a>`
-       })))
-     }
-     async function dz(DD, zD) {
-       const wD = (0, Vz.F)(DD);
-       if (!wD) return null;
-       const pD = await (0, Pz.h)(wD),
-         sD = (0, Pz.d)(pD),
-         KD = pD.faq.map((DD => {
-           let {
-             question: zD,
-             answer: wD
- ... (8 more removed lines; see GitHub link above)
+     function wp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       return Up ??= new yp, Up.start(pp, ip), Up.record
+     }
+ 
+     function vp() {
+       var pp;
+       null === (pp = Up) || void 0 === pp || pp.endTake()
+     }
+ 
+     function tp() {
+       var pp;
+       null === (pp = Up) || void 0 === pp || pp.droppedCopy()
+     }
+     async function Hp(pp) {
+       var ip;
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L453` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L362) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L453)

```diff
-   4840: (DD, zD, wD) => {
+   4911: (pp, ip, cp) => {
```

#### 9. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L456` → after: `L389-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L389-L393) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L456)

```diff
-       g: () => cD,
+       e: () => vp,
+       f: () => sp,
+       gb: () => Xp,
+       h: () => Hp,
+       ib: () => Jp,
```

#### 10. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L458-L459` → after: `L395-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L395-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L395-L399) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L458-L459)

```diff
-       l: () => rD,
-       n: () => LD,
+       kb: () => Gp,
+       lb: () => Fp,
+       m: () => Wp,
+       mb: () => hp,
+       ob: () => Bp,
```

#### 11. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L463` → after: `L408-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L408-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L408-L410) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L463)

```diff
-       y: () => BD,
+       w: () => Op,
+       x: () => Ip,
+       xb: () => wp,
```

#### 12. `bundles/bloxd.io/chunks/js/91.js` (Changed code · before: `L466-L504` → after: `L413-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-8d3b430d89322260cda29542e1a2d2727c97e72fa13c2304ea30bfe464a07619) · [After (L413-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/91.js#L413-L936) · [Before (L466-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/91.js#L466-L504)

```diff
-     var pD = wD(1594);
-     const sD = 24e3,
-       KD = "/docs/llms.txt",
-       rD = `${pD.c}${KD}`,
-       LD = "/llms.txt",
-       cD = "/docs/llms-full.txt";
- 
-     function gD(DD) {
-       return DD || "index"
-     }
- 
-     function RD(DD) {
-       return `/docs/${gD(DD)}.md`
-     }
- 
-     function AD(DD, zD) {
- ... (23 more removed lines; see GitHub link above)
+     const Op = 32,
+       op = 33.333333333333336,
+       Ip = {
+         AbiVersion: 0,
+         Status: 1,
+         LastError: 2,
+         ErrorCount: 3,
+         FrameIndex: 4,
+         TicksRun: 5,
+         TicksDropped: 6,
+         Alpha: 7,
+         NetOutPtr: 8,
+         NetOutLen: 9,
+         WorkerOutPtr: 10,
+         WorkerOutLen: 11,
+         EventsPtr: 12,
+ ... (508 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (469 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 1. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3)

```diff
- export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 92, 136];
+ export const ids = [92, 398];
```

#### 2. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5-L6` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L4-L21) · [Before (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5-L6)

```diff
-   39510: () => {
-     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
+   41726: (pp, ip, cp) => {
+     async function Op(pp, ip) {
+       const [{
+         clientSideServerUrls: Op
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: op
+       }, {
+         gameBridge: Ip
+       }] = await Promise.all([Promise.resolve().then((() => cp(1211))), Promise.resolve().then((() => cp(1149))), Promise.resolve().then((() => cp(1956)))]), Sp = Ip.latest("connectedGame").websocketUrl;
+       if (!Sp) throw new Error("AI Helper: not connected to a game server");
+       const xp = `${Op.getHttpUrlFromWebSocketUrl(Sp)}${pp}`;
+       return await op(xp, ip, {
+         retries: 0
+       })
+     }
+     cp.r(ip), cp.d(ip, {
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8-L30` → after: `L23-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L23-L27) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L8-L30)

```diff
-   39528: (DD, zD, wD) => {
-     var pD = [],
-       sD = [],
-       KD = [],
-       rD = [],
-       LD = [],
-       cD = [],
-       gD = [],
-       RD = [],
-       AD = [],
-       UD = [],
-       fD = [],
-       ID = [],
-       BD = wD(9203).d,
-       GD = 1e-5,
-       hD = [0, 0, 0],
- ... (7 more removed lines; see GitHub link above)
+   6666: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(1112);
```

#### 4. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L32-L51` → after: `L29-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L29-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L29-L43) · [Before (L32-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L32-L51)

```diff
-     function VD(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
-       var gD, RD = hD,
-         AD = nD;
-       for (gD = 0; gD < 3; gD++) {
-         var UD = 0 === gD ? wD : 1 === gD ? pD : sD;
-         RD[gD] = UD + DD[zD + gD], AD[gD] = UD + DD[zD + gD + 3]
-       }
-       if (KD[0] < AD[0] - cD && rD[0] > RD[0] + cD && KD[1] < AD[1] - cD && rD[1] > RD[1] + cD && KD[2] < AD[2] - cD && rD[2] > RD[2] + cD) return -1;
-       var fD = -1 / 0,
-         ID = 1 / 0,
-         BD = -1;
-       for (gD = 0; gD < 3; gD++) {
-         var GD = LD[gD];
-         if (0 !== GD) {
-           var OD = GD > 0 ? (RD[gD] - rD[gD]) / GD : (AD[gD] - KD[gD]) / GD,
-             JD = GD > 0 ? (AD[gD] - cD - KD[gD]) / GD : (RD[gD] + cD - rD[gD]) / GD;
- ... (4 more removed lines; see GitHub link above)
+     function op(pp) {
+       let {
+         href: ip,
+         children: cp
+       } = pp;
+       return (0, Op.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: ip,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [cp, " ", (0, Op.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
+         })]
+       })
```

#### 5. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L53-L56` → after: `L45-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L45-L54) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L53-L56)

```diff
-     var PD = 1 / 0,
-       CD = -1,
-       xD = !1,
-       TD = GD;
+   },
+   41717: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       WorldCodeAiPanel: () => qP,
+       default: () => MP
+     });
+     var Op = cp(62),
+       op = cp(1049),
+       Ip = cp.n(op),
+       Sp = cp(1112);
```

#### 6. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L58-L75` → after: `L56-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L56-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L56-L108) · [Before (L58-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L58-L75)

```diff
-     function bD(DD, zD, wD, gD) {
-       var AD = Math.sqrt(DD[0] * DD[0] + DD[1] * DD[1] + DD[2] * DD[2]);
-       if (0 === AD) return AD;
-       for (var UD = 0; UD < 3; UD++) {
-         var fD = DD[UD] >= 0,
-           ID = fD ? 1 : -1;
-         rD[UD] = ID;
-         var BD = fD ? wD[UD] : zD[UD],
-           GD = fD ? zD[UD] : wD[UD];
-         pD[UD] = GD;
-         var hD = Math.floor(BD - ID * gD);
-         sD[UD] = hD, KD[UD] = Math.floor(GD + ID * gD);
-         var nD = DD[UD] / AD;
-         RD[UD] = nD;
-         var MD = Math.abs(1 / nD);
-         LD[UD] = MD;
- ... (2 more removed lines; see GitHub link above)
+     function xp(pp) {
+       let {
+         title: ip,
+         children: cp,
+         isCalm: op = !1,
+         isElsewhere: xp = !1,
+         defaultOpen: Lp = !1,
+         isOpen: Yp,
+         onToggle: Dp,
+         className: Ap
+       } = pp;
+       const [Pp, Wp] = (0, Op.useState)(Lp), yp = null !== Yp && void 0 !== Yp ? Yp : Pp;
+       return (0, Sp.jsxs)("div", {
+         className: Ip()("WorldCodeAiLog", op && "WorldCodeAiLog-calm", xp && "WorldCodeAiLog-elsewhere", yp && "WorldCodeAiLog-open", Ap),
+         children: [(0, Sp.jsxs)("button", {
+           className: "WorldCodeAiLogToggle",
+ ... (37 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L77` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L110-L112) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L77)

```diff
-       return AD
+       if ("https:" !== cp.protocol && "http:" !== cp.protocol || cp.host !== Hp && cp.host !== `www.${Hp}`) return null;
+       const Op = cp.pathname.toLowerCase();
+       return ep(Op) || null !== (0, vp.y)(Op) ? Op : (0, vp.v)(Op)
```

#### 8. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L80-L88` → after: `L115-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L115-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L115-L116) · [Before (L80-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L80-L88)

```diff
-     function jD(DD, zD, wD, pD, sD, KD, rD) {
-       var LD = function(DD, zD, wD, pD, sD, KD, rD, LD) {
-         for (var cD = 1 / 0, gD = -1, RD = 0; RD < DD.length; RD += 6) {
-           var AD = VD(DD, RD, zD, wD, pD, sD, KD, rD, LD);
-           AD >= 0 && (AD < cD || AD === cD && MD[0] < gD) && (cD = AD, gD = MD[0])
-         }
-         return MD[0] = gD, gD < 0 ? -1 : cD
-       }(DD, zD, wD, pD, sD, KD, rD, TD);
-       LD >= 0 && LD < PD && (PD = LD, CD = MD[0], xD = !0)
+     function ep(pp) {
+       return pp === vp.j || pp === vp.o
```

#### 9. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L91-L95` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L119-L121) · [Before (L91-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L91-L95)

```diff
-     function dD(DD, zD, wD, pD) {
-       for (var sD = 0; sD < XD; sD++)
-         if (OD[sD] === zD && JD[sD] === wD && ED[sD] === pD) return QD[sD];
-       var KD = DD(zD, wD, pD);
-       return XD < 32 && (OD[XD] = zD, JD[XD] = wD, ED[XD] = pD, QD[XD] = KD, XD++), KD
+     function jp(pp) {
+       const ip = dp(pp);
+       return null === ip ? pp : `${wp.b}${ip}`
```

#### 10. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L98-L104` → after: `L127-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L127-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L127-L136) · [Before (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L98-L104)

```diff
-     function SD(DD, zD, wD, pD) {
-       for (var LD = rD[0], cD = rD[1], gD = rD[2], RD = sD[0] + LD, AD = sD[1] + cD, UD = sD[2] + gD, fD = KD[0]; fD != RD; fD += LD)
-         for (var ID = KD[1]; ID != AD; ID += cD)
-           for (var BD = KD[2]; BD != UD; BD += gD) {
-             var GD = dD(DD, fD, ID, BD);
-             Array.isArray(GD) && jD(GD, fD, ID, BD, zD, wD, pD)
-           }
+     function qp(pp) {
+       const ip = [];
+       let cp = 0;
+       return pp.split("\n").forEach(((pp, Op) => {
+         ip.push({
+           text: pp,
+           from: cp,
+           index: Op
+         }), cp += pp.length + 1
+       })), ip
```

#### 11. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L107-L117` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L139-L140) · [Before (L107-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L107-L117)

```diff
-     function iD(DD, zD, wD, pD, LD, cD) {
-       for (var gD = rD[0], RD = 0 === zD ? sD[0] : KD[0], AD = sD[0] + gD, UD = rD[1], fD = 1 === zD ? sD[1] : KD[1], ID = sD[1] + UD, BD = rD[2], GD = 2 === zD ? sD[2] : KD[2], hD = sD[2] + BD, nD = RD; nD != AD; nD += gD)
-         for (var MD = fD; MD != ID; MD += UD)
-           for (var OD = GD; OD != hD; OD += BD) {
-             var JD = DD(nD, MD, OD);
-             if (!1 !== JD && null !== JD && void 0 !== JD) {
-               if (!Array.isArray(JD)) return wD <= PD && (PD = wD, CD = zD, xD = !1), !0;
-               jD(JD, nD, MD, OD, pD, LD, cD)
-             }
-           }
-       return !1
+     function Mp(pp) {
+       return pp.replace(/^\s*\/\/.*$/, "").replace(/\s+/g, "").replace(/['`]/g, '"').replace(/[;,]+$/, "")
```

#### 12. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L121-L154` → after: `L143-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L143-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L143-L155) · [Before (L121-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L121-L154)

```diff
-     function WD(DD, zD, wD, hD, nD, MD) {
-       var OD = gD,
-         JD = AD,
-         ED = UD,
-         QD = ID;
-       ND(zD, wD), MD || (MD = GD);
-       var VD = function(DD, zD, wD, gD, AD, UD) {
-         var ID = pD,
-           GD = KD,
-           hD = rD,
-           nD = cD,
-           MD = RD,
-           OD = 0,
-           JD = 0,
-           ED = 0,
-           QD = 0;
- ... (18 more removed lines; see GitHub link above)
+     function Cp(pp, ip, cp) {
+       if (0 === ip.length) return null;
+       let Op = null;
+       for (let op = 0; op + ip.length <= pp.length; op++) {
+         if (ip.every(((ip, Op) => cp(pp[op + Op].text) === ip))) {
+           if (Op) return {
+             ...Op,
+             isOnly: !1
+           };
+           const cp = pp[op + ip.length - 1];
+           Op = {
+             from: pp[op].from,
+             to: cp.from + cp.text.length
```

#### 13. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L169` → after: `L159-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L159-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L159-L162) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L169)

```diff
-       return VD
+       return Op ? {
+         ...Op,
+         isOnly: !0
+       } : null
```

#### 14. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L173-L177` → after: `L166-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L166-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L166-L203) · [Before (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L173-L177)

```diff
-       for (var wD = gD, pD = AD, sD = UD, KD = 0; KD < 3; KD++) wD[KD] = +zD[KD], sD[KD] = +DD.max[KD], pD[KD] = +DD.base[KD];
-       for (var rD = 0; rD < 3; rD++) {
-         if (!(Number.isFinite(wD[rD]) && Math.abs(wD[rD]) <= lD)) throw ZD("dir", wD, rD);
-         if (!(Number.isFinite(pD[rD]) && Math.abs(pD[rD]) <= lD)) throw ZD("base", pD, rD);
-         if (!(Number.isFinite(sD[rD]) && Math.abs(sD[rD]) <= lD)) throw ZD("max", sD, rD)
+       if ("" === ip.trim()) return null;
+       const cp = qp(pp),
+         Op = function(pp) {
+           return pp.split("\n").map((pp => pp.trim())).filter(((pp, ip, cp) => "" !== pp || ip > 0 && ip < cp.length - 1))
+         }(ip),
+         op = Cp(cp, Op, (pp => pp.trim()));
+       if (null !== op) return {
+         from: op.from,
+         to: op.to,
+         isLoose: !op.isOnly
+       };
+       const Ip = pp => pp.trim().replace(/;+$/, ""),
+         Sp = Cp(cp, Op.map(Ip), Ip);
+       if (null !== Sp) {
+         const cp = pp.indexOf(ip),
+           Op = -1 !== cp && (cp < Sp.from || cp >= Sp.to);
+ ... (22 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L181-L182` → after: `L207-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L207-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L207-L233) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L181-L182)

```diff
-     function ZD(DD, zD, wD) {
-       return new Error("BLOXD VOXEL-SWEEP: non-terminating sweep rejected - " + DD + "[" + wD + "]=" + zD[wD] + " " + DD + "=[" + zD[0] + "," + zD[1] + "," + zD[2] + "]")
+     function Xp(pp) {
+       var ip, cp;
+       return null !== (ip = null === (cp = /^[ \t]*/.exec(pp)) || void 0 === cp ? void 0 : cp[0]) && void 0 !== ip ? ip : ""
+     }
+ 
+     function lp(pp, ip, cp, Op) {
+       if (ip.from > 0 && "\n" !== pp[ip.from - 1]) return Op;
+       const op = pp.slice(ip.from, ip.to).split("\n").filter((pp => "" !== pp.trim())),
+         Ip = cp.split("\n").filter((pp => "" !== pp.trim()));
+       if (0 === op.length || 0 === Ip.length) return Op;
+       const Sp = Xp(op[0]),
+         xp = Xp(Ip[0]);
+       if (Sp === xp) return Op;
+       const Lp = Ip.length > 1 && Ip.length === op.length && Ip.slice(1).every(((pp, ip) => Xp(pp) === Xp(op[ip + 1]))),
+         Yp = Op.split("\n"),
+         Dp = Yp.findIndex((pp => "" !== pp.trim()));
+ ... (11 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L195` → after: `L237-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L237-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L237-L256) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L195)

```diff
-       return [Math.floor(DD[0] / zD) * zD, Math.floor(DD[1] / zD) * zD, Math.floor(DD[2] / zD) * zD]
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const Op = new Map;
+       for (const xp of pp.split("\n")) {
+         const pp = xp.trim(),
+           ip = pp.replace(/;$/, "");
+         "" === ip || pp.endsWith(";") || Op.has(ip) || Op.set(ip, pp)
+       }
+       const op = ip.split("\n");
+       let Ip = !1;
+       const Sp = op.map(((pp, ip) => {
+         var Sp, xp, Lp;
+         const Yp = Ip;
+         (null !== (Sp = null === (xp = pp.replace(/\\`/g, "").match(/`/g)) || void 0 === xp ? void 0 : xp.length) && void 0 !== Sp ? Sp : 0) % 2 === 1 && (Ip = !Ip);
+         const Dp = pp.trim(),
+           Ap = Op.get(Dp.replace(/;$/, ""));
+         if (void 0 === Ap || Ap === Dp || Yp || Ip) return pp;
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L199-L200` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L260-L261) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L199-L200)

```diff
-       const zD = (null !== DD && void 0 !== DD ? DD : "").match(/-?\d+(?:\.\d+)?/g);
-       return zD && zD.length >= 3 ? [Number(zD[0]), Number(zD[1]), Number(zD[2])] : null
+       var ip;
+       return null !== (ip = pp.split("\n").find((pp => "" !== pp.trim()))) && void 0 !== ip ? ip : ""
```

#### 18. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L204` → after: `L265-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L265-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L265-L276) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L204)

```diff
-       return DD === zD ? String(DD) : `${DD}-${zD}`
+       const cp = new Map;
+       for (const Sp of pp) {
+         var Op;
+         cp.set(Sp, (null !== (Op = cp.get(Sp)) && void 0 !== Op ? Op : 0) + 1)
+       }
+       let op = 0;
+       for (const Sp of ip) {
+         var Ip;
+         const pp = null !== (Ip = cp.get(Sp)) && void 0 !== Ip ? Ip : 0;
+         pp > 0 && (cp.set(Sp, pp - 1), op++)
+       }
+       return op
```

#### 19. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L207-L230` → after: `L279-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L279-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L279-L284) · [Before (L207-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L207-L230)

```diff
-     function LD(DD, zD, wD, pD) {
-       const sD = [];
-       let KD = new Map;
-       for (let rD = DD[2]; rD < DD[2] + zD; rD++) {
-         const LD = new Map;
-         let cD = DD[0];
-         for (; cD < DD[0] + zD;) {
-           const sD = pD(cD, wD, rD);
-           let gD = cD;
-           for (; gD + 1 < DD[0] + zD && pD(gD + 1, wD, rD) === sD;) gD++;
-           if (null !== sD) {
-             const DD = `${cD} ${gD} ${sD}`,
-               zD = KD.get(DD);
-             zD ? (zD.z1 = rD, KD.delete(DD), LD.set(DD, zD)) : LD.set(DD, {
-               x0: cD,
-               x1: gD,
- ... (8 more removed lines; see GitHub link above)
+     function Np(pp) {
+       return {
+         text: pp,
+         pieces: Array.from({
+           length: pp.length - 1
+         }, ((ip, cp) => pp.slice(cp, cp + 2)))
```

#### 20. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L235-L248` → after: `L288-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L288-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L288-L301) · [Before (L235-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L235-L248)

```diff
-     function cD(DD, zD, wD, sD) {
-       let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pD;
-       const cD = [DD[0] + zD - 1, DD[1] + zD - 1, DD[2] + zD - 1],
-         gD = null !== sD && sD.every(((zD, wD) => Math.floor(zD) >= DD[wD] && Math.floor(zD) <= cD[wD])),
-         RD = [`The chunk from ${DD.join(" ")} to ${cD.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== sD && RD.push(`The player's feet are at ${sD.map(Math.floor).join(" ")}, ${gD?"in this chunk":"outside this chunk"}.`);
-       const AD = [];
-       for (let pD = DD[1]; pD <= cD[1]; pD++) {
-         const sD = LD(DD, zD, pD, wD).join("; "),
-           KD = AD[AD.length - 1];
-         (null === KD || void 0 === KD ? void 0 : KD.boxes) === sD ? KD.to = pD : AD.push({
-           from: pD,
-           to: pD,
-           boxes: sD
+     function Tp(pp, ip) {
+       const cp = ip.split("\n").map(Mp).filter(Boolean),
+         Op = qp(pp).filter((pp => "" !== Mp(pp.text)));
+       if (0 === cp.length || 0 === Op.length) return null;
+       const op = Math.min(cp.length, Op.length),
+         Ip = cp.map(Np),
+         Sp = Op.map((pp => Np(Mp(pp.text))));
+       let xp = null;
+       for (let Ap = 0; Ap + op <= Op.length; Ap++) {
+         let pp = 0;
+         for (let ip = 0; ip < op; ip++) pp += (Lp = Sp[Ap + ip], Yp = Ip[ip], Lp.text === Yp.text ? 1 : 0 === Lp.pieces.length || 0 === Yp.pieces.length ? 0 : 2 * Bp(Lp.pieces, Yp.pieces) / (Lp.pieces.length + Yp.pieces.length));
+         pp /= cp.length, (null === xp || pp > xp.score) && (xp = {
+           start: Ap,
+           score: pp
```

#### 21. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L251-L260` → after: `L304-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L304-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L304-L310) · [Before (L251-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L251-L260)

```diff
-       const UD = AD.filter((DD => "" !== DD.boxes));
-       0 === UD.length && RD.push("It is all air.");
-       let fD = RD.join("\n").length;
-       for (const pD of UD) {
-         const DD = `y${rD(pD.from,pD.to)}: ${pD.boxes}`;
-         if (fD += DD.length + 1, fD > KD) {
-           RD.push(`Cut short: the layers from y${pD.from} up aren't shown, as there are too many blocks.`);
-           break
-         }
-         RD.push(DD)
+       var Lp, Yp;
+       if (null === xp || xp.score < .5) return null;
+       const Dp = Op.slice(xp.start, xp.start + op);
+       return {
+         line: Dp[0].index + 1,
+         lastLine: Dp[Dp.length - 1].index + 1,
+         text: Dp.map((pp => pp.text.trim())).join("\n")
```

#### 22. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L292-L294` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L315) · [Before (L292-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L292-L294)

```diff
-       for (const zD of DD)
-         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(zD)) return zD;
-       return null
+       return Rp().isFunctionExpression(pp) || Rp().isArrowFunction(pp)
```

#### 23. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L298` → after: `L319-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L319-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L319-L321) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L298)

```diff
-       return null !== fD(UD(DD))
+       return Rp().isExpressionStatement(pp) && Rp().isBinaryExpression(pp.expression) && Rp().isPropertyAccessExpression(pp.expression.left) && ! function(pp) {
+         return Rp().isIdentifier(pp) && ("globalThis" === pp.text || "window" === pp.text || "self" === pp.text)
+       }(pp.expression.left.expression)
```

#### 24. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L311-L312` → after: `L324-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L324-L331) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L311-L312)

```diff
-     function hD() {
-       return ID("webm") ? "webm" : ID("mp4") ? "mp4" : "webm"
+     function hp(pp, ip, cp) {
+       let Op = cp;
+       for (const Ip of (null !== (op = Rp().getLeadingCommentRanges(pp, ip.getFullStart())) && void 0 !== op ? op : []).reverse()) {
+         var op;
+         if (/\n[^\S\n]*\n/.test(pp.slice(Ip.end, Op))) break;
+         Op = Ip.pos
+       }
+       return Op
```

#### 25. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L316-L317` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L335-L337) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L316-L317)

```diff
-       let {
-         cards: zD
+       var ip;
+       const {
+         parseDiagnostics: cp
```

#### 26. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L319-L346` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L339) · [Before (L319-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L319-L346)

```diff
-       return (0, BD.jsx)("div", {
-         className: "ReplayVideoExportOptionCards",
-         children: zD.map((DD => (0, BD.jsxs)("div", {
-           className: "ReplayVideoExportOptionColumn",
-           children: [(0, BD.jsx)("div", {
-             className: LD()("ReplayVideoExportOptionCard", {
-               Selected: DD.selected,
-               Disabled: DD.disabled
-             }),
-             onClick: () => {
-               DD.disabled || DD.onSelect()
-             },
-             children: (0, BD.jsxs)("div", {
-               className: "ReplayVideoExportOptionCardBody",
-               children: [(0, BD.jsx)("div", {
-                 className: "ReplayVideoExportOptionCardLabel",
- ... (12 more removed lines; see GitHub link above)
+       return (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.length) && void 0 !== ip ? ip : 0) > 0
```

#### 27. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L469-L474` → after: `L342-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L342-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L342-L368) · [Before (L469-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L469-L474)

```diff
-     function XD() {
-       return function() {
-         const DD = (0, ED.c)();
-         for (const {
-             group: zD,
-             dataAttr: wD
+     function np(pp) {
+       const ip = Rp().createSourceFile("worldCode.js", pp, Rp().ScriptTarget.Latest, !1, Rp().ScriptKind.JS),
+         cp = [],
+         Op = (op, Ip) => {
+           const Sp = function(pp) {
+             var ip, cp;
+             if (Rp().isFunctionDeclaration(pp)) return null !== (ip = null === (cp = pp.name) || void 0 === cp ? void 0 : cp.text) && void 0 !== ip ? ip : null;
+             if (Rp().isVariableStatement(pp) && 1 === pp.declarationList.declarations.length) {
+               const ip = pp.declarationList.declarations[0];
+               return Rp().isIdentifier(ip.name) && ip.initializer && fp(ip.initializer) ? ip.name.text : null
+             }
+             if (Rp().isExpressionStatement(pp) && Rp().isBinaryExpression(pp.expression) && pp.expression.operatorToken.kind === Rp().SyntaxKind.EqualsToken && fp(pp.expression.right)) {
+               const ip = pp.expression.left;
+               return Rp().isIdentifier(ip) ? ip.text : Rp().isPropertyAccessExpression(ip) ? ip.name.text : null
+             }
+             return null
+ ... (11 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L476-L490` → after: `L370-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L370-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L370-L377) · [Before (L476-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L476-L490)

```diff
-           of JD.f)
-           if (wD && DD[zD]) return !0;
-         return !1
-       }() ? function() {
-         var DD;
-         return "function" === typeof(null === (DD = navigator.mediaDevices) || void 0 === DD ? void 0 : DD.getDisplayMedia)
-       }() ? {
-         canIncludeUi: !0,
-         includeUiDisabledReason: null
-       } : {
-         canIncludeUi: !1,
-         includeUiDisabledReason: "Not supported on this device"
-       } : {
-         canIncludeUi: !1,
-         includeUiDisabledReason: "No UI to include"
+           Rp().forEachChild(op, (pp => {
+             Op(pp, !1)
+           }))
+         };
+       for (const op of ip.statements) Op(op, !0);
+       return {
+         functions: cp,
+         hasErrors: ap(ip)
```

#### 29. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L493-L503` → after: `L380-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L380-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L380-L382) · [Before (L493-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L493-L503)

```diff
-     async function VD(DD, zD, wD) {
-       return DD ? async function() {
-         const DD = await navigator.mediaDevices.getDisplayMedia({
-           video: !0,
-           audio: !1,
-           preferCurrentTab: !0,
-           selfBrowserSurface: "include"
-         });
-         for (const zD of DD.getAudioTracks()) zD.stop(), DD.removeTrack(zD);
-         return DD
-       }(): zD().captureStream(Math.max(1, Math.round(wD)))
+ 
+     function Fp(pp) {
+       return np(pp).functions
```

#### 30. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L509` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L386) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L509)

```diff
-       DD.holdInput(!1), (0, PD.h)(!1)
+       return pp.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
```

#### 31. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L694-L738` → after: `L389-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L389-L394) · [Before (L694-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L694-L738)

```diff
-     function gD(DD, zD, wD, pD, sD, KD, LD) {
-       const {
-         waveform: cD,
-         pitchHz: gD,
-         attackMs: RD,
-         releaseMs: AD,
-         lowpassHz: UD
-       } = wD, fD = sD + pD.durationMs / 1e3, ID = gD * 2 ** (pD.semitones / 12), BD = DD.createOscillator();
-       BD.type = cD, BD.frequency.setValueAtTime(ID, sD), BD.frequency.exponentialRampToValueAtTime(ID * 2 ** (pD.glideSemitones / 12), fD);
-       const GD = sD + Math.min(RD, pD.durationMs) / 1e3,
-         hD = DD.createGain();
-       hD.gain.setValueAtTime(0, sD), hD.gain.linearRampToValueAtTime(KD, GD), hD.gain.linearRampToValueAtTime(KD * rD, Math.max(GD, fD - AD / 1e3)), hD.gain.linearRampToValueAtTime(0, fD);
-       const nD = [BD];
-       if (null !== UD) {
-         const zD = DD.createBiquadFilter();
-         zD.type = "lowpass", zD.frequency.value = UD, nD.push(zD)
- ... (29 more removed lines; see GitHub link above)
+     function Gp(pp, ip) {
+       var cp;
+       const Op = pp.filter((pp => pp.name === ip)),
+         op = Op.filter((pp => !pp.isProperty)),
+         Ip = op.length > 0 ? op : Op;
+       return null !== (cp = Ip.find((pp => pp.topLevel))) && void 0 !== cp ? cp : Ip[0]
```

#### 32. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L742-L750` → after: `L398-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L398-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L398-L452) · [Before (L742-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L742-L750)

```diff
-       var wD;
-       const KD = pD.Howler.ctx,
-         rD = pD.Howler.masterGain;
-       if (!KD || !rD || !sD.e.get("soundOnFromAd")) return () => {};
-       const LD = pD.Howler;
-       return null === (wD = LD._autoResume) || void 0 === wD || wD.call(LD), RD(KD, rD, DD, zD, sD.e.get("soundVolume"), (() => {
-         var DD;
-         null === (DD = LD._autoSuspend) || void 0 === DD || DD.call(LD)
-       }))
+       return "" === pp.trim() ? `${ip.trim()}\n` : `${pp.replace(/\s*$/,"")}\n\n${ip.trim()}\n`
+     }
+ 
+     function Zp(pp, ip, cp) {
+       const Op = np(pp),
+         op = Fp(cp),
+         Ip = sp(Op.functions, ip, op);
+       return Ip ? Kp(pp, Op, Ip, op, cp) : rp(pp, cp)
+     }
+ 
+     function zp(pp, ip, cp) {
+       return void 0 !== sp(Fp(pp), ip, Fp(cp))
+     }
+ 
+     function sp(pp, ip, cp) {
+       var Op, op;
+ ... (39 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L791` → after: `L456-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L456-L458) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L791)

```diff
-       return LD[(DD ? 2 : 0) + (zD ? 1 : 0)]
+       let cp = ip;
+       for (; cp > 0 && (" " === pp[cp - 1] || "\t" === pp[cp - 1]);) cp--;
+       return 0 === cp || "\n" === pp[cp - 1] ? cp : ip
```

#### 34. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L798-L813` → after: `L461-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L461-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L461-L465) · [Before (L798-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L798-L813)

```diff
-     function RD(DD) {
-       return {
-         watch: zD => (0, sD.o)("shotPlayer", (wD => {
-           let {
-             playerId: pD,
-             damage: sD,
-             wasCrit: KD,
-             distance: rD
-           } = wD;
-           DD(pD) && zD({
-             damage: sD,
-             wasCrit: KD,
-             distance: rD
-           })
-         }))
-       }
+     function ci(pp, ip, cp) {
+       const Op = ip.trim().toLowerCase();
+       if ("" !== pp.trim() && ("top" === Op || "start" === Op)) return `${cp.trim()}\n\n${pp.replace(/^\s+/,"")}`;
+       const op = "end" === Op ? void 0 : Gp(Fp(pp), gp(ip));
+       return op ? `${pp.slice(0,op.to)}\n\n${cp.trim()}${pp.slice(op.to)}` : rp(pp, cp)
```

#### 35. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L817-L838` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L469) · [Before (L817-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L817-L838)

```diff
-       return (0, KD.b)("chat", (zD => {
-         let {
-           serverChatMsgId: wD,
-           content: pD,
-           chatterEId: sD
-         } = zD;
-         return {
-           serverChatMsgId: null !== wD && void 0 !== wD ? wD : null,
-           content: pD,
-           author: sD ? DD(sD) : null
-         }
-       }))
-     }
-     class UD {
-       constructor() {
-         this.shown = null, this.needed = null, this.neededSince = 0
- ... (6 more removed lines; see GitHub link above)
+       return [...new Set(Fp(pp).filter((pp => pp.topLevel)).map((pp => pp.name)))]
```

#### 36. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L842-L844` → after: `L475-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L475-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L475-L481) · [Before (L842-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L842-L844)

```diff
-       return [{
-         translationKey: `touchKeys:${DD}`
-       }]
+       let ip = pp.replace(/\s+/g, " ").trim();
+       if ("" === ip || Ii.test(ip)) return null;
+       if (ip.length > oi) {
+         const pp = ip.slice(0, oi);
+         ip = `${pp.slice(0,Math.max(pp.lastIndexOf(" "),60)).trimEnd()}\u2026`
+       }
+       return ip.charAt(0).toUpperCase() + ip.slice(1)
```

#### 37. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L846-L854` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L483) · [Before (L846-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L846-L854)

```diff
-     const ID = {
-       open: fD("open"),
-       close: fD("close"),
-       milk: fD("milk"),
-       shear: fD("shear"),
-       tame: fD("tame"),
-       feed: fD("feed"),
-       ride: fD("ride")
-     };
+     const xi = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;
```

#### 38. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L857-L861` → after: `L486-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L486-L488) · [Before (L857-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L857-L861)

```diff
-       return [{
-         translationKey: "touchKeys:tameWith"
-       }, " ", {
-         icon: DD
-       }]
+       var ip, cp;
+       const Op = null === (ip = /\(([^)]*)\)/.exec(pp)) || void 0 === ip || null === (cp = ip[1].split(",")[1]) || void 0 === cp ? void 0 : cp.trim();
+       return Op && /^[A-Za-z_$][\w$]*$/.test(Op) ? [...pp.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((pp => pp[2].split(",").some((pp => pp.trim() === Op)) ? [pp[1]] : [])) : []
```

#### 39. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L929-L932` → after: `L524-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L524-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L524-L526) · [Before (L929-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L929-L932)

```diff
-         item: DD,
-         scale: zD,
-         billboard: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         thrownRole: !0
+         callbacks: xp(cp),
+         commands: xp(op),
+         functions: xp(Op)
```

#### 40. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L935-L982` → after: `L529-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L529-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L529-L558) · [Before (L935-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L935-L982)

```diff
-     var gD = wD(38698),
-       RD = wD(9198),
-       AD = wD(212),
-       UD = wD(2197),
-       fD = wD(38114),
-       ID = wD(197),
-       BD = wD(3139),
-       GD = wD(25),
-       hD = wD(358),
-       nD = wD.n(hD),
-       MD = wD(37885),
-       OD = wD(37217),
-       JD = wD(37597),
-       ED = wD(37304),
-       QD = wD(37934),
-       XD = wD(37259),
- ... (32 more removed lines; see GitHub link above)
+     const Di = new Map([
+       ["onPlayerJoin", "When a player joins"],
+       ["onPlayerLeave", "When a player leaves"],
+       ["onPlayerChat", "When a player chats"],
+       ["playerCommand", "When a player types a /command"],
+       ["tick", "Runs all the time"],
+       ["onPlayerJump", "When a player jumps"],
+       ["onPlayerClick", "When a player clicks"],
+       ["onPlayerAttack", "When a player attacks"],
+       ["onPlayerChangeBlock", "When a player changes a block"],
+       ["onPlayerAttemptChangeBlock", "Before a player changes a block"],
+       ["onPlayerDamagingOtherPlayer", "When a player hits another player"],
+       ["onPlayerKilledOtherPlayer", "When a player defeats another player"],
+       ["onPlayerDamagingMob", "When a player hits a mob"],
+       ["onPlayerKilledMob", "When a player defeats a mob"],
+       ["onMobDamagingPlayer", "When a mob hits a player"],
+ ... (14 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L985-L1007` → after: `L561-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L561-L563) · [Before (L985-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L985-L1007)

```diff
-       const zD = new Set,
-         wD = DD => {
-           const pD = [],
-             sD = new Set;
-           for (const KD of DD) {
-             const DD = KD.hasGeometry && 0 === KD.children.length;
-             if (!DD || !sD.has(KD.name)) {
-               if (zD.has(KD.name.toLowerCase())) throw new Error(`Two nodes are named ${KD.name}`);
-               if (zD.add(KD.name.toLowerCase()), DD) sD.add(KD.name), pD.push(KD.name);
-               else {
-                 if (KD.hasGeometry) throw new Error(`Mesh ${KD.name} has nodes under it: put them in a group beside it`);
-                 pD.push(0 === KD.children.length ? {
-                   nodeName: KD.name
-                 } : {
-                   nodeName: KD.name,
-                   children: wD(KD.children)
- ... (7 more removed lines; see GitHub link above)
+       const ip = Di.get(pp);
+       if (ip) return ip;
+       return `When: ${pp.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 42. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1010-L1033` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L566-L567) · [Before (L1010-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1010-L1033)

```diff
-     function rz(DD, zD) {
-       const wD = Kz(DD),
-         pD = function(DD, zD) {
-           const wD = DD => DD.hasGeometry && 0 === DD.children.length,
-             pD = DD => DD.children.some((DD => wD(DD) ? !zD(DD.name) : !zD(DD.name) && pD(DD))),
-             sD = (DD, pD) => {
-               const rD = new Set;
-               return DD.flatMap((DD => wD(DD) ? !pD && !zD(DD.name) || rD.has(DD.name) ? [] : (rD.add(DD.name), [DD.name]) : zD(DD.name) || pD ? [KD(DD)] : sD(DD.children, !1)))
-             },
-             KD = DD => {
-               const zD = sD(DD.children, !1);
-               return {
-                 nodeName: DD.name,
-                 ...pD(DD) ? {
-                   collapsesTo: DD.name
-                 } : {},
- ... (8 more removed lines; see GitHub link above)
+     function Pi(pp) {
+       return Array.isArray(pp) && pp.every((pp => "string" === typeof pp))
```

#### 43. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1037-L1040` → after: `L573-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L573-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L573-L577) · [Before (L1037-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1037-L1040)

```diff
-       return DD.reduce(((DD, zD) => {
-         var wD;
-         return DD + ("string" === typeof zD ? 1 : (void 0 === zD.collapsesTo ? 0 : 1) + Lz(null !== (wD = zD.children) && void 0 !== wD ? wD : []))
-       }), 0)
+       var ip, cp;
+       const Op = pp.trim().split(/\s+/).length,
+         op = new Set((null !== (ip = pp.match(Wi)) && void 0 !== ip ? ip : []).map((pp => pp.toLowerCase().replace(/s$/, "")))).size,
+         Ip = (null !== (cp = pp.match(yi)) && void 0 !== cp ? cp : []).length;
+       return op >= 2 && Ip >= 2 || Op >= 30 && Ip >= 3
```

#### 44. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1043-L1093` → after: `L580-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L580-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L580-L582) · [Before (L1043-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1043-L1093)

```diff
-     function cz(DD, zD) {
-       const wD = DD => DD.getChildren(),
-         pD = DD => {
-           if ("Gl" in DD && !0 === DD.Gl) throw new Error(`${DD.name} is drawn as an instance of another mesh`);
-           return "getTotalVertices" in DD && DD.getTotalVertices() > 0
-         },
-         sD = DD => {
-           var zD, sD;
-           return !pD(DD) || wD(DD).length > 0 ? null : `${null!==(zD=null===(sD=DD.material)||void 0===sD?void 0:sD.uniqueId)&&void 0!==zD?zD:"none"} ${DD.getVerticesDataKinds().sort().join(",")}`
-         };
-       ! function(DD, zD, wD) {
-         const pD = new Set,
-           sD = DD => {
-             for (const wD of DD) pD.add(wD.name.toLowerCase()), sD(zD(wD))
-           };
-         sD(DD);
- ... (35 more removed lines; see GitHub link above)
+     function wi(pp) {
+       const ip = pp.split(/\n|\|/).map((pp => pp.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((pp => "" !== pp)).slice(0, 5).map((pp => pp.length > 90 ? `${pp.slice(0,89).trimEnd()}\u2026` : pp));
+       return ip.length >= 2 ? ip : []
```

#### 45. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1095` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L584) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1095)

```diff
-     const gz = new WeakMap;
+     var vi = cp(4984);
```

#### 46. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1097-L1197` → after: `L586-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L586-L587) · [Before (L1097-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1097-L1197)

```diff
-     function Rz(DD, zD, wD) {
-       const pD = vD.i.itemsClient[zD],
-         sD = function(DD) {
-           var zD;
-           const wD = (0, YD.t)(DD);
-           if (null !== wD) return qD.h.enabled && qD.h.hasAnimation(wD) ? {
-             vehicleType: wD,
-             moved: qD.h.bonesMoved(wD)
-           } : null;
-           const pD = null === (zD = RD.l[DD]) || void 0 === zD ? void 0 : zD.meshEntityBones;
-           return null !== pD && void 0 !== pD && pD.length ? {
-             vehicleType: null,
-             moved: new Set(pD)
-           } : null
-         }(zD);
-       if (null === sD || void 0 === pD) return null;
- ... (85 more removed lines; see GitHub link above)
+     function ti(pp) {
+       return pp.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
```

#### 47. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1201-L1204` → after: `L591-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L591-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L591-L594) · [Before (L1201-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1201-L1204)

```diff
-       return DD.flatMap((DD => {
-         var zD;
-         return "string" === typeof DD ? [DD] : [DD.nodeName, ...Az(null !== (zD = DD.children) && void 0 !== zD ? zD : [])]
-       }))
+       const ip = new Set;
+       for (const cp of pp.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) ip.add(cp[1]);
+       for (const cp of pp.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) ip.add(cp[1]);
+       return [...ip]
```

#### 48. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1207-L1256` → after: `L597-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L597-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L597-L604) · [Before (L1207-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1207-L1256)

```diff
-     function Uz(DD, zD, wD) {
-       zD.name = `${wD}SkeletalVehicleMat`;
-       const pD = (0, PD.db)(zD);
-       (0, PD.O)(pD), (0, sz.b)(zD, (() => {
-         (0, pz.c)(pD, DD), (0, eD.b)(pD, !0)
-       })), (0, sz.c)(zD)
-     }
-     const fz = {
-         width: !1,
-         height: !1,
-         depth: !1,
-         diffuseColor: !0,
-         emissiveColor: !0,
-         backFaceCulling: !0,
-         texture: !0,
-         faceUV: !0,
- ... (34 more removed lines; see GitHub link above)
+     function di(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const Op = new Set(ip),
+         op = new Map;
+       for (const Ap of ip) {
+         var Ip;
+         const pp = ti(Ap);
+         op.set(pp, [...null !== (Ip = op.get(pp)) && void 0 !== Ip ? Ip : [], Ap])
```

#### 49. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1258` → after: `L606-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L606-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L606-L610) · [Before (L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1258)

```diff
-       handleParticleSystemUpdate(DD, zD, wD) {
+       const Sp = Hi(pp),
+         xp = new Set(Hi(cp)),
+         Lp = [];
+       let Yp = pp;
+       for (const Ap of Sp) {
```

#### 50. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1260-L1262` → after: `L612-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L612-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L612-L617) · [Before (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1260-L1262)

```diff
-         (0, ZD.e)(this.AU).mergeParticleSystemUpdate((0, ND.b)(DD), zD, wD);
-         const sD = null === (pD = this.bloxd.meshParticleSystems[DD]) || void 0 === pD ? void 0 : pD[zD];
-         (0, lD.B)(sD) || (0, dD.e)(sD, wD)
+         if (Op.has(Ap) || xp.has(Ap) || !/^(on|player)[A-Z]/.test(Ap)) continue;
+         const pp = null !== (Dp = op.get(ti(Ap))) && void 0 !== Dp ? Dp : [];
+         1 !== pp.length || Sp.includes(pp[0]) || (Yp = (0, vi.r)(Yp, new RegExp(`${Ap}(?![\\w$])`, "g"), vi.m, (() => pp[0])), Lp.push({
+           from: Ap,
+           to: pp[0]
+         }))
```

#### 51. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1264-L1265` → after: `L619-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L619-L621) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1264-L1265)

```diff
-       getLatestParticleSystemUpdate(DD, zD) {
-         return (0, ZD.e)(this.AU).getParticleSystemUpdate((0, ND.b)(DD), null !== zD && void 0 !== zD ? zD : "__root__")
+       return {
+         code: Yp,
+         renames: Lp
```

#### 52. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1267-L1336` → after: `L623-L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L623-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L623-L655) · [Before (L1267-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1267-L1336)

```diff
-       addBoard(DD, zD, wD, pD) {
-         var sD, KD, rD;
-         this.removeBoard(DD, zD, wD);
-         const LD = this.bloxd.blockDataOwner.getBlockData(DD, zD, wD),
-           cD = null !== (sD = null === LD || void 0 === LD || null === (KD = LD.persisted.shared.text) || void 0 === KD ? void 0 : KD.toString()) && void 0 !== sD ? sD : "",
-           gD = null !== (rD = null === LD || void 0 === LD ? void 0 : LD.persisted.shared.textSize) && void 0 !== rD ? rD : 0;
-         this.addBoardTextEntity([DD, zD, wD], 25, (() => {
-           const DD = {
-             position: FD.WI.Zero(),
-             rotation: FD.WI.Zero(),
-             rc: FD.WI.One()
-           };
-           let zD;
-           "" === cD.trim() ? zD = (0, MD.g)(this.AU.wB, "EmptyBoardMesh") : (zD = this.createBoardTextPlane(cD, gD, 1, 7 / 8, 256), (0, yD.k)(DD, pD, .375), DD.rotation.y += Math.PI, zD.rotation = DD.rotation);
-           return {
-             mesh: zD,
- ... (54 more removed lines; see GitHub link above)
+     }
+     const ei = {
+         functions: "api",
+         callbacks: "callback",
+         "client options": "clientOption"
+       },
+       ui = Object.keys(ei).map((pp => `"${pp}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       ji = {
+         type: "string",
+         description: "A few plain words for the creator on what this change does, under 80 characters"
+       },
+       ki = {
+         readOnlyHint: !0,
+         destructiveHint: !1,
+         idempotentHint: !0,
+         openWorldHint: !1
+ ... (17 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1338-L1339` → after: `L657-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L657-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L657-L684) · [Before (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1338-L1339)

```diff
-           features: DD => {
-             (0, aD.e)(DD, "boards")
+           required: ["path", "content"]
+         },
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !0,
+           idempotentHint: !0,
+           openWorldHint: !1
+         }
+       }, {
+         name: "edit_file",
+         title: "Change part of a file",
+         description: "Changes one part of a file: the lines in search become the lines in replace",
+         inputSchema: {
+           type: "object",
+           properties: {
+             path: {
+ ... (12 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1341-L1361` → after: `L686-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L686-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L686-L713) · [Before (L1341-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1341-L1361)

```diff
-           unrendered: !0,
-           freeze: !0
-         });
-         return UD.material = BD, UD.Tl(), UD
-       }
-       addBoardTextEntity(DD, zD, wD) {
-         const {
-           yJ: pD
-         } = this.AU, sD = pD.add(DD, 1, 1);
-         let KD = null;
-         pD.UW(sD, "hidingMeshManager", {
-           addMeshComponent: () => {
-             if ((0, uD.e)(this.AU)) return;
-             const {
-               mesh: DD,
-               offset: zD
- ... (5 more removed lines; see GitHub link above)
+           required: ["path", "search", "replace"]
+         },
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !0,
+           idempotentHint: !1,
+           openWorldHint: !1
+         }
+       }, {
+         name: "replace_function",
+         title: "Replace a function",
+         description: "Replaces one whole function or callback, found by its name, with new code; adds it at the end when the file has none by that name",
+         inputSchema: {
+           type: "object",
+           properties: {
+             path: {
+ ... (12 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1363-L1365` → after: `L715-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L715-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L715-L742) · [Before (L1363-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1363-L1365)

```diff
-           removeMeshComponent: () => {
-             var DD;
-             null === (DD = KD) || void 0 === DD || DD.dispose(!1, !0), pD.fW(sD, pD.names.mesh)
+           required: ["path", "name", "code"]
+         },
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !0,
+           idempotentHint: !0,
+           openWorldHint: !1
+         }
+       }, {
+         name: "insert_code",
+         title: "Add new code",
+         description: "Adds new code to a file without changing any code already there",
+         inputSchema: {
+           type: "object",
+           properties: {
+             path: {
+ ... (12 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1367-L1381` → after: `L744-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L744-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L744-L750) · [Before (L1367-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1367-L1381)

```diff
-           addShadow: !1,
-           hideDist: zD,
-           Vr: "Board",
-           forceUpdateEveryTick: !0
-         }), pD.UW(sD, "isBoard")
-       }
-       removeBoard(DD, zD, wD) {
-         const pD = [DD, zD, wD];
-         for (const sD of this.bloxd.yJ.rW("isBoard"))
-           if (nD().squaredDistance(this.bloxd.yJ.PJ(sD.cW), pD) < .01) return void this.bloxd.yJ.deleteEntity(sD.cW)
-       }
-       removeBoardsInChunk(DD, zD, wD) {
-         for (const pD of this.bloxd.yJ.rW("isBoard")) {
-           const [sD, KD, rD] = (0, lD.P)(this.bloxd.yJ.PJ(pD.cW));
-           sD === DD && KD === zD && rD === wD && this.bloxd.yJ.deleteEntity(pD.cW)
+           required: ["path", "after", "code"]
+         },
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !1,
+           idempotentHint: !1,
+           openWorldHint: !1
```

#### 57. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1383-L1450` → after: `L752-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L752-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L752-L790) · [Before (L1383-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1383-L1450)

```diff
-       }
-       getThrowableMesh(DD) {
-         const zD = function(DD) {
-             return "Fireball" === DD ? cD("Fireball Block", .95) : "RPG" === DD ? cD("Rocket", .5) : "Obby RPG" === DD ? cD("Obby Rocket", .5) : "Super RPG" === DD ? cD("Super Rocket", .7) : "Grenade Launcher" === DD ? cD("Grenade", .357) : "Iceball" === DD ? cD("Iceball Block",  … [truncated]
-               item: "Bullet",
-               scale: 2,
-               billboard: !1,
-               thrownRole: !1
-             } : cD(DD, .13, !0)
-           }(DD),
-           wD = vD.i.itemsClient[zD.item],
-           pD = zD.thrownRole ? wD.getMeshWithRole(zD.scale, QD.b.thrown) : wD.getMesh(zD.scale);
-         return zD.billboard && (pD.billboardMode = XD.e.BILLBOARDMODE_Y), pD
-       }
-       newMeshParticleSystem(DD, zD) {
-         const wD = this.AU.wB.Ul(),
- ... (52 more removed lines; see GitHub link above)
+       }, {
+         name: "use_prefab",
+         title: "Use a ready-made game",
+         description: "Puts a prefab (ready-made, tested code for a game or a feature) into a file, with its settings filled in. The code goes in by itself and fits around the code already there",
+         inputSchema: {
+           type: "object",
+           properties: {
+             name: {
+               type: "string",
+               description: "The prefab's name, e.g. parkour"
+             },
+             settings: {
+               type: "string",
+               description: 'The settings to change, one per line as key: value, e.g. finishBlock: "Block of Gold"'
+             },
+             path: {
+ ... (23 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1452-L1458` → after: `L792-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L792-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L792-L799) · [Before (L1452-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1452-L1458)

```diff
-           }
-           return {
-             Vl: null,
-             mesh: null !== (KD = null === (rD = vD.i.itemsClient[zD.blockName]) || void 0 === rD ? void 0 : rD.getMesh(zD.size, wD)) && void 0 !== KD ? KD : null,
-             meshOffset: pD,
-             nameYOffset: LD
-           }
+           },
+           required: ["code"]
+         },
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !1,
+           idempotentHint: !0,
+           openWorldHint: !1
```

#### 59. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1460-L1508` → after: `L801-L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L801-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L801-L815) · [Before (L1460-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1460-L1508)

```diff
-         if ("Box" === DD) {
-           var LD;
-           const sD = zD.width || 1,
-             KD = zD.height || 1,
-             rD = zD.depth || 1,
-             UD = sD * KD * rD < 0,
-             fD = UD ? -1 : 1,
-             ID = Iz.map((DD => zD[DD])),
-             GD = `${DD}|${JSON.stringify(ID)}${UD?"|mirrored":""}`,
-             ED = Bz.sourcesFor(pD).boxes;
-           let XD = ED.get(GD);
-           if (!XD) {
-             var cD;
-             let DD, wD = null,
-               sD = zD.diffuseColor ? void 0 : (0, gD.g)(zD.texture);
-             if (zD.diffuseColor) {
- ... (33 more removed lines; see GitHub link above)
+       }, {
+         name: "edit_code_in_place",
+         title: "Change my code now",
+         description: "Changes one part of the code open in the editor straight away, as the Apply button does: the lines in search become the lines in replace",
+         inputSchema: {
+           type: "object",
+           properties: {
+             why: ji,
+             search: {
+               type: "string",
+               description: "Lines to find, copied exactly from the open code"
+             },
+             replace: {
+               type: "string",
+               description: "Lines to put instead"
```

#### 60. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1510-L1531` → after: `L817-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L817-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L817-L853) · [Before (L1510-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1510-L1531)

```diff
-             const {
-               mirror: KD
-             } = (0, oD.c)({
-               name: `${GD}EntityMesh`,
-               oB: pD,
-               sets: {
-                 ...DD,
-                 backFaceCulling: null === (cD = zD.backFaceCulling) || void 0 === cD || cD
-               },
-               features: DD => {
-                 wD && (0, PD.s)(DD, CD.d, wD), (0, eD.b)(DD, !0), (0, PD.M)(DD)
-               },
-               freeze: !0
-             }), rD = zD.faceUV ? zD.faceUV.map((DD => [DD[0] + .01, DD[1] + .01, DD[2] - .01, DD[3] - .01])) : void 0, LD = (0, MD.q)(this.AU.wB, `${GD}EntityMesh`, (0, JD.e)({
-               width: fD,
-               height: fD,
- ... (6 more removed lines; see GitHub link above)
+           },
+           required: ["search", "replace"]
+         },
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !0,
+           idempotentHint: !1,
+           openWorldHint: !1
+         },
+         _meta: {
+           appliesAtOnce: !0
+         }
+       }, {
+         name: "export_game",
+         title: "Save my game",
+         description: "Saves the world and its code as the creator's custom game, by sending //export in chat. Only this call saves: an answer that says it saved without it saves nothing",
+ ... (21 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1533-L1541` → after: `L855-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L855-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L855-L862) · [Before (L1533-L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1533-L1541)

```diff
-             LD.lI = !0, LD.ZI = !0, LD.nC(!1), (0, xD.f)(LD) || LD.Ul().zW(LD), ED.set(GD, LD), XD = LD
-           }
-           const VD = XD.createInstance(`${GD}EntityMeshInstance`);
-           return VD.rc.set(fD * sD, fD * KD, fD * rD), this.AU.wB.tB(VD), (0, TD.r)(VD, 0, 0, 0), wD(VD), {
-             Vl: null,
-             mesh: VD,
-             meshOffset: null !== (LD = zD.meshOffset) && void 0 !== LD ? LD : nD().pp(0, KD / 2, 0),
-             nameYOffset: KD + .3
-           }
+           },
+           required: []
+         },
+         annotations: {
+           readOnlyHint: !1,
+           destructiveHint: !1,
+           idempotentHint: !0,
+           openWorldHint: !1
```

#### 62. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1543-L1628` → after: `L864-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L864-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L864-L890) · [Before (L1543-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1543-L1628)

```diff
-         if ("Leaderboard" === DD) {
-           var XD, VD, jD, dD, WD;
-           const DD = zD.eId,
-             pD = function(DD, zD, wD, pD) {
-               var sD, KD;
-               let rD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-               const LD = DD.Ul(),
-                 cD = Math.min(4096, LD.iI().getCaps().maxTextureSize),
-                 gD = (0, iD.e)(zD, cD),
-                 {
-                   width: RD,
-                   height: AD
-                 } = gD,
-                 UD = (0, ED.j)(LD, "Leaderboard", {
-                   width: gD.pixelWidth,
-                   height: gD.pixelHeight,
- ... (70 more removed lines; see GitHub link above)
+       }, {
+         name: "ask_creator",
+         title: "Ask you a question",
+         description: "Asks the creator one multiple-choice question instead of changing code, only when the request is too unclear to build anything sensible. Never asks for personal details",
+         inputSchema: {
+           type: "object",
+           properties: {
+             question: {
+               type: "string",
+               description: "One short question"
+             },
+             choices: {
+               type: "string",
+               description: "2 to 4 short answers, one per line"
+             },
+             allow_other: {
+ ... (11 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1630-L1643` → after: `L892-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L892-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L892-L901) · [Before (L1630-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1630-L1643)

```diff
-         if ("ParticleEmitter" === DD) {
-           var ND;
-           const {
-             particleSystem: DD,
-             mesh: pD
-           } = this.getParticleEmitter(zD, zD.eId, zD.nodeName);
-           if ((0, lD.B)(zD.eId)) console.error("No eId specified for mesh particle system, will not be possible to update it");
-           else {
-             var ZD;
-             (0, lD.B)(this.bloxd.meshParticleSystems[zD.eId]) && (this.bloxd.meshParticleSystems[zD.eId] = {});
-             const wD = null !== (ZD = zD.nodeName) && void 0 !== ZD ? ZD : "__root__";
-             this.bloxd.meshParticleSystems[zD.eId][wD] = DD, DD.onDispose = () => {
-               var DD, pD;
-               (0, lD.B)(null === this || void 0 === this || null === (DD = this.bloxd) || void 0 === DD || null === (pD = DD.meshParticleSystems) || void 0 === pD ? void 0 : pD[zD.eId]) || (delete this.bloxd.meshParticleSystems[zD.eId][wD], 0 === Object.keys(this.bloxd.meshPartic … [truncated]
+       }, {
+         name: "plan",
+         title: "Plan a big request in steps",
+         description: "Splits a big request into 2 to 5 small steps instead of building it all at once. The creator builds and tries them one at a time. Writes no code: never in the same answer as a change",
+         inputSchema: {
+           type: "object",
+           properties: {
+             steps: {
+               type: "string",
+               description: "2 to 5 short steps, one per line, each small enough to build and try on its own"
```

#### 64. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1645-L1651` → after: `L903-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L903-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L903-L910) · [Before (L1645-L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1645-L1651)

```diff
-           }
-           return this.AU.wB.tB(pD), wD(pD), {
-             Vl: null,
-             mesh: pD,
-             meshOffset: null !== (ND = zD.meshOffset) && void 0 !== ND ? ND : nD().pp(0, zD.height / 2, 0),
-             nameYOffset: zD.height + .3
-           }
+           },
+           required: ["steps"]
+         },
+         annotations: {
+           readOnlyHint: !0,
+           destructiveHint: !1,
+           idempotentHint: !0,
+           openWorldHint: !1
```

#### 65. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1653-L1677` → after: `L912-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L912-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L912-L930) · [Before (L1653-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1653-L1677)

```diff
-         if ("Person" === DD) {
-           var yD, kD, mD, aD, YD;
-           const DD = this.AU.wB.Ql,
-             pD = (0, bD.o)("Player");
-           DD.nC(pD, !0), DD.setPosition(pD, 0, 0, 0), DD.setRotationEuler(pD, 0, 0, 0), DD.set(pD, "aOpacity", 1), DD.zN(pD, "aOpacity", 1);
-           const sD = null === (yD = (0, UD.l)("head", null === (kD = zD.textures) || void 0 === kD ? void 0 : kD.head)) || void 0 === yD ? void 0 : yD.personModel;
-           for (const zD in null === sD || void 0 === sD ? void 0 : sD.nodePositions) {
-             const [wD, KD, rD] = sD.nodePositions[zD];
-             DD.setNodePosition(pD, DD.getNamedNode(pD, zD), wD, KD, rD)
-           }
-           const KD = null !== (mD = zD.size) && void 0 !== mD ? mD : 1;
-           DD.setScale(pD, KD, KD, -KD);
-           for (const wD of fD.e) {
-             var HD;
-             bD.d.Player.meshApi.updatePlayerCosmetic(null, pD, wD, null === (HD = zD.textures) || void 0 === HD ? void 0 : HD[wD])
-           }
- ... (9 more removed lines; see GitHub link above)
+       }, {
+         name: "remember",
+         title: "Remember something about your game",
+         description: "Suggests one short note about the creator's game (its idea, rules, or names in it) to keep in AI notes, which goes with every later request. The creator says yes or no before it is kept. Never personal details",
+         inputSchema: {
+           type: "object",
+           properties: {
+             note: {
+               type: "string",
+               description: "One short sentence about the game, under 120 characters"
+             }
+           },
+           required: ["note"]
+         },
+         annotations: {
+           readOnlyHint: !1,
+ ... (3 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1679-L1690` → after: `L932-L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L932-L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L932-L948) · [Before (L1679-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1679-L1690)

```diff
-       }
-       getParticleEmitter(DD, zD, wD) {
-         const pD = `ParticleEmitter|${JSON.stringify(DD)}`,
-           sD = this.AU.wB.Ul(),
-           KD = Bz.sourcesFor(sD);
-         if (!KD.particleEmitter) {
-           const DD = (0, MD.q)(this.AU.wB, `${pD}EntityMesh`, (0, JD.e)({
-             width: 1,
-             height: 1,
-             depth: 1
-           }));
-           DD.visibility = 0, DD.lI = !0, DD.ZI = !0, DD.nC(!1), DD.uB = !1, (0, xD.f)(DD) || DD.Ul().zW(DD), (0, mD.j)(DD), KD.particleEmitter = DD
+       }, {
+         name: "view_file",
+         title: "Look at a file",
+         description: "Shows the whole code of one of the creator's files, from the list of their files. Look at a file before changing it",
+         inputSchema: {
+           type: "object",
+           properties: {
+             path: {
+               type: "string",
+               description: "The file's path, e.g. shop.js"
+             }
+           },
+           required: ["path"]
+         },
+         annotations: ki,
+         _meta: {
+ ... (1 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1692-L1698` → after: `L950-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L950-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L950-L961) · [Before (L1692-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1692-L1698)

```diff
-         const rD = KD.particleEmitter.createInstance(`${pD}EntityMeshInstance`);
-         rD.rc.set(DD.width, DD.height, DD.depth), rD.uB = !1, rD.position.set(0, 0, 0);
-         const LD = this.newMeshParticleSystem(rD, DD);
-         if ((0, lD.B)(DD.dir1) || (LD.direction1._x = DD.dir1[0], LD.direction1._y = DD.dir1[1], LD.direction1._z = DD.dir1[2]), (0, lD.B)(DD.dir2) || (LD.direction2._x = DD.dir2[0], LD.direction2._y = DD.dir2[1], LD.direction2._z = DD.dir2[2]), "ring" === DD.emitterShape && (LD. … [truncated]
-           LD.start();
-           const DD = this.getLatestParticleSystemUpdate(zD, wD);
-           (0, lD.B)(DD) || (0, dD.e)(LD, DD)
+       }, {
+         name: "view_world_code",
+         title: "Look at World Code",
+         description: "For a code block: shows every World Code file, so the answer can change World Code itself",
+         inputSchema: {
+           type: "object",
+           properties: {},
+           required: []
+         },
+         annotations: ki,
+         _meta: {
+           isLookup: !0
```

#### 68. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1700-L1702` → after: `L963-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L963-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L963-L979) · [Before (L1700-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1700-L1702)

```diff
-         return {
-           particleSystem: LD,
-           mesh: rD
+       }, {
+         name: "view_chunk",
+         title: "Look at blocks in the world",
+         description: "Shows the blocks in one 32 by 32 by 32 chunk of the world, layer by layer, and where the player is. Only chunks near the player can be seen",
+         inputSchema: {
+           type: "object",
+           properties: {
+             position: {
+               type: "string",
+               description: 'Any "x y z" in the chunk; left out, the chunk the player is in'
+             }
+           },
+           required: []
+         },
+         annotations: ki,
+         _meta: {
+ ... (1 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1704-L1753` → after: `L981-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L981-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L981-L992) · [Before (L1704-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1704-L1753)

```diff
-       }
-     }
-     Bz.sourcesByScene = new WeakMap, Bz.MAX_WARM_PARTICLE_SHADERS = 12, Bz.warmParticleShaderKeys = new Set, Bz.warmedForScene = null;
-     var Gz = wD(38013),
-       hz = wD(35),
-       nz = wD(1251),
-       Mz = wD(157),
-       Oz = wD(4520),
-       Jz = wD(37646),
-       Ez = wD(1232),
-       Qz = wD(1339),
-       Xz = wD(38197),
-       Vz = wD(4107),
-       Pz = wD(39505);
-     class Cz extends Vz.EventEmitter {
-       constructor(DD, zD) {
- ... (34 more removed lines; see GitHub link above)
+       }, {
+         name: "view_game_state",
+         title: "Look at the game",
+         description: "Shows what the creator sees in their world now: where they stand, their health, creative mode, what they hold and their inventory, and the players and mobs near them",
+         inputSchema: {
+           type: "object",
+           properties: {},
+           required: []
+         },
+         annotations: ki,
+         _meta: {
+           isLookup: !0
```

#### 70. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1755-L1777` → after: `L994-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L994-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L994-L1105) · [Before (L1755-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1755-L1777)

```diff
-       }
-       xZ(DD) {
-         this.element.appendChild(DD)
-       }
-       Bx() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         DD || (this.AU.camera.sZ = !0), this.pE.NG = !!DD && this.kN
-       }
-       mN(DD) {
-         this.pE.aN = !!DD && this.oN && this.kN
-       }
-       get XN() {
-         return this.hN.XN
-       }
-       get iN() {
-         return this.hN.iN
- ... (7 more removed lines; see GitHub link above)
+       }, {
+         name: "fetch_url",
+         title: "Read a docs page",
+         description: `Reads a page of Bloxd's docs as Markdown. ${vp.n} lists every page with its link; then read the page, or the part of a long page, you need`,
+         inputSchema: {
+           type: "object",
+           properties: {
+             url: {
+               type: "string",
+               description: `${vp.n}, or a page it links to`
+             }
+           },
+           required: ["url"]
+         },
+         annotations: ki,
+         _meta: {
+ ... (96 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1781-L1790` → after: `L1109-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1109-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1109-L1111) · [Before (L1781-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1781-L1790)

```diff
-       var zD = DD.bZ || null;
-       "string" === typeof zD && (zD = document.querySelector(zD));
-       var wD = zD || function() {
-         var DD = document.createElement("div");
-         return DD.tabIndex = 1, DD.style.outline = "none", DD.style.position = "fixed", DD.style.left = "0px", DD.style.right = "0px", DD.style.top = "0px", DD.style.bottom = "0px", DD.style.height = "100%", DD.style.overflow = "hidden", document.body.appendChild(DD), document.bo … [truncated]
-       }();
-       return {
-         element: wD,
-         canvas: Tz(wD)
-       }
+       const ip = mi.find((ip => ip.name === pp));
+       if (!ip) throw new Error(`No AI Helper tool ${pp}`);
+       return ip
```

#### 72. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1794-L1795` → after: `L1119-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1119-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1119-L1120) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1794-L1795)

```diff
-       var zD = DD.querySelector("canvas");
-       return zD || ((zD = document.createElement("canvas")).style.position = "absolute", zD.style.left = "0px", zD.style.top = "0px", zD.style.height = "100%", zD.style.width = "100%", zD.id = "noa-canvas", DD.insertBefore(zD, DD.firstChild)), zD
+       const ip = pp.trim();
+       return Ei.some((pp => pp.test(ip)))
```

#### 73. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1797-L1813` → after: `L1122-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1122-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1122-L1133) · [Before (L1797-L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1797-L1813)

```diff
-     wD(39510);
-     class bz extends Vz.EventEmitter {
-       constructor() {
-         super(...arguments), this.snapshots = [], this.depth = 0
-       }
-       iZ(DD, zD) {
-         const wD = this._events[DD];
-         if (void 0 === wD) return;
-         if ("function" === typeof wD) return void wD.call(this, zD);
-         const pD = wD.length,
-           sD = this.snapshots[this.depth] ??= [];
-         for (let KD = 0; KD < pD; KD++) sD[KD] = wD[KD];
-         this.depth++;
-         try {
-           for (let DD = 0; DD < pD; DD++) sD[DD].call(this, zD)
-         } finally {
- ... (1 more removed lines; see GitHub link above)
+ 
+     function Qi(pp, ip) {
+       const cp = pp.replace(Ci, "");
+       return ip ? function(pp) {
+         const ip = pp.indexOf("```"),
+           cp = -1 === ip ? pp : pp.slice(0, ip);
+         let Op = -1,
+           op = -1,
+           Ip = 0;
+         for (const Sp of cp.matchAll(Xi)) {
+           const pp = Sp.index + Sp[0].length;
+           li(cp.slice(Ip, pp)) && (Op = -1 === Op ? Ip : Op, op = pp), Ip = pp
```

#### 74. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1815` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1135-L1136) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1815)

```diff
-       }
+         return -1 === op ? pp : "" !== cp.slice(op).trim() ? pp.slice(op).trimStart() : `${pp.slice(0,Op).trimEnd()}\n${pp.slice(cp.length)}`.trim()
+       }(cp) : "" !== cp.trim() ? cp : pp
```

#### 75. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1817-L1855` → after: `L1138-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1138-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1138-L1176) · [Before (L1817-L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1817-L1855)

```diff
-     var jz = wD(2839),
-       dz = wD.n(jz),
-       Sz = wD(39516),
-       iz = wD.n(Sz);
-     var lz = wD(39525),
-       Wz = wD(358);
-     class Nz {
-       constructor(DD, zD, wD, pD, sD, KD, rD) {
-         this.wU = new lz(DD.base, DD.vec), this.Ug = zD, this.Uy = !0, this.friction = wD, this.restitution = pD, this.gravityMultiplier = sD, this.GU = KD, this.Ay = !!rD, this.XU = -1, this.fluidDrag = -1, this.fluidDragVert = -1, this.fluidDragHoriz = -1, this.nU = null, this. … [truncated]
-       }
-       loadFromCopy(DD) {
-         this.wU.base[0] = DD.wU.base[0], this.wU.base[1] = DD.wU.base[1], this.wU.base[2] = DD.wU.base[2], this.wU.vec[0] = DD.wU.vec[0], this.wU.vec[1] = DD.wU.vec[1], this.wU.vec[2] = DD.wU.vec[2], this.wU.max[0] = DD.wU.max[0], this.wU.max[1] = DD.wU.max[1], this.wU.max[2] = D … [truncated]
-       }
-       loadStateFromCopy(DD) {
-         Wz.copy(this.wU.base, DD.wU.base), Wz.copy(this.wU.vec, DD.wU.vec), Wz.copy(this.wU.max, DD.wU.max), Wz.copy(this.UG, DD.UG), Wz.copy(this.resting, DD.resting), this.inFluid = DD.inFluid, this.ratioInFluid = DD.ratioInFluid, Wz.copy(this.Qy, DD.Qy), Wz.copy(this.Py, DD.Py … [truncated]
-       }
- ... (23 more removed lines; see GitHub link above)
+     const Ji = /^(?=[\s\S]{200})[^\n]*(?:\\n[^\n]*){3}$/,
+       Bi = new Set(["content", "code"]);
+ 
+     function Ni(pp) {
+       const ip = "string" === typeof pp ? pp.split(/[./:]/).pop() : void 0;
+       return function(pp) {
+         return mi.some((ip => ip.name === pp))
+       }(ip) ? ip : null
+     }
+ 
+     function Ti(pp, ip) {
+       return cp => {
+         const Op = [];
+         let op;
+         for (const Lp of cp.matchAll(pp)) {
+           var Ip;
+ ... (23 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1862` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1181) · [Before (L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1862)

```diff
-       return DD(new yz([0, 0, 0], [1, 1, 1]), 1, 1, 0, 1, null, !1)
+       return pp.replace(/\\(["\\nt])/g, ((pp, ip) => "n" === ip ? "\n" : "t" === ip ? "\t" : ip))
```

#### 77. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1865-L1884` → after: `L1184-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1184-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1184-L1189) · [Before (L1865-L1884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1865-L1884)

```diff
-     function mz() {
-       this.XU = .1, this.fluidDrag = .4, this.VU = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
-     }
-     class ez {
-       constructor(DD, zD, wD) {
-         DD = Object.assign(new mz, DD), this.gravity = DD.gravity, this.XU = DD.XU, this.VU = DD.VU, this.fluidDrag = DD.fluidDrag, this.minBounceImpulse = DD.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.MU = DD.MU, this.Gy = DD.Gy, this.rollbac … [truncated]
-           return new Nz(DD, zD, wD, pD, sD, KD, rD)
-         })), this.testSolid = zD, this.testFluid = wD
-       }
-       JU(DD, zD, wD, pD, sD, KD) {
-         DD = DD || new yz([0, 0, 0], [1, 1, 1]), "undefined" == typeof zD && (zD = 1), "undefined" == typeof wD && (wD = 1), "undefined" == typeof pD && (pD = 0), "undefined" == typeof sD && (sD = 1);
-         var rD = this.Wy(DD, zD, wD, pD, sD, KD);
-         return this.bodies.push(rD), rD
-       }
-       Wy(DD, zD, wD, pD, sD, KD) {
-         return new Nz(DD, zD, wD, pD, sD, KD)
- ... (4 more removed lines; see GitHub link above)
+     function bi(pp) {
+       let ip = null !== pp && void 0 !== pp ? pp : {};
+       if ("string" === typeof ip) try {
+         ip = JSON.parse("" === ip ? "{}" : ip)
+       } catch {
+         return null
```

#### 78. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1887-L1891` → after: `L1196-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1196-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1196-L1205) · [Before (L1887-L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1887-L1891)

```diff
-     var oz = wD(37655);
-     const az = new Map;
-     class uz {
-       constructor(DD) {
-         this.error = DD
+ 
+     function ai(pp, ip) {
+       let cp = 0,
+         Op = !1;
+       for (let op = ip; op < pp.length; op++) {
+         const ip = pp[op];
+         if (Op) "\\" === ip ? op++ : '"' === ip && (Op = !1);
+         else if ('"' === ip) Op = !0;
+         else if ("{" === ip) cp++;
+         else if ("}" === ip && (cp--, 0 === cp)) return op + 1
```

#### 79. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1900-L1911` → after: `L1210-L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1210-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1210-L1214) · [Before (L1900-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1900-L1911)

```diff
-     function Fz(DD, zD, wD, pD, sD, KD) {
-       let rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "it runs in JS";
-       if (wD instanceof vz) throw wD;
-       zD.wasmFailures++;
-       const LD = ! function(DD) {
-         return DD instanceof Error && Object.getPrototypeOf(DD) === Error.prototype
-       }(wD);
-       let cD = wD instanceof Error ? wD.message : String(wD);
-       if (KD.fatal) {
-         if (wD instanceof WebAssembly.RuntimeError && /unreachable/i.test(wD.message) && null === DD.getLastBloxdWasmPanic()) {
-           const zD = DD.takeBloxdWasmRefusedAllocation();
-           zD > 0 && (cD = `alloc_failed ${zD} bytes; ${cD}`)
+     function ni(pp, ip) {
+       let cp = pp;
+       for (const {
+           call: Op,
+           index: op
```

#### 80. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1913-L1922` → after: `L1216-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1216-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1216-L1217) · [Before (L1913-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1913-L1922)

```diff
-         DD.markBloxdWasmFailed(wD);
-         const {
-           prefix: zD,
-           suffix: rD
-         } = tz, gD = new vz(`${zD}${pD}: ${sD} ${LD?"trapped":"threw"} (${cD})${rD}`);
-         throw KD.fatal(gD), gD
-       }
-       LD && DD.markBloxdWasmFailed(wD);
-       const gD = `${rD}${LD?", and wasm is off from now on":""}`;
-       Yz(`${pD} ${LD?"trap":"error"}`, (() => new Error(`wasm physics: ${pD}: ${sD} ${LD?"trapped":"threw"} (${cD}), so ${gD}`)), KD, !LD)
+         of ip) cp = cp.slice(0, op) + " ".repeat(Op.source.length) + cp.slice(op + Op.source.length);
+       return cp
```

#### 81. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1925-L1933` → after: `L1236-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1236-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1236-L1256) · [Before (L1925-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1925-L1933)

```diff
-     function Yz(DD, zD, wD, pD) {
-       var sD;
-       let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : az;
-       const rD = performance.now(),
-         LD = KD.get(DD);
-       if (void 0 !== LD && rD - LD < 6e4) return;
-       KD.set(DD, rD);
-       const cD = zD();
-       pD && console.error(cD), null === (sD = wD.sI) || void 0 === sD || sD.call(wD, cD)
+     function ri(pp) {
+       const ip = [];
+       for (const op of pp.matchAll(Gi)) {
+         const Ip = Ni(op[1]),
+           Sp = op.index + op[0].length,
+           xp = ai(pp, Sp),
+           Lp = null === xp ? null : bi(pp.slice(Sp, xp));
+         if (null !== Ip && null !== xp && null !== Lp) {
+           var cp, Op;
+           const Sp = null !== (cp = null === (Op = pp.slice(xp).match(/^\s*<\|call\|>/)) || void 0 === Op ? void 0 : Op[0]) && void 0 !== cp ? cp : "";
+           ip.push({
+             call: {
+               name: Ip,
+               args: Lp,
+               source: pp.slice(op.index, xp + Sp.length)
+             },
+ ... (5 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1937` → after: `L1260-L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1260-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1260-L1285) · [Before (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1937)

```diff
-       return "failed" !== DD.getBloxdWasmStatus()
+       var ip, cp, Op, op;
+       let Ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       if ("object" !== typeof pp || null === pp) return [];
+       const Sp = pp;
+       if (Array.isArray(Sp.tool_calls)) return Sp.tool_calls.flatMap((pp => Zi(pp, !0)));
+       if (void 0 !== Sp.tool_call) return Zi(Sp.tool_call, !0);
+       if (void 0 !== Sp.function) return Zi(Sp.function, !0);
+       const xp = null !== (ip = null !== (cp = null !== (Op = null !== (op = Sp.arguments) && void 0 !== op ? op : Sp.params) && void 0 !== Op ? Op : Sp.param) && void 0 !== cp ? cp : Sp.args) && void 0 !== ip ? ip : Sp.input,
+         Lp = Ni(Sp.tool);
+       if (null !== Lp) {
+         const {
+           tool: pp,
+           ...ip
+         } = Sp, cp = bi(null !== xp && void 0 !== xp ? xp : ip);
+         return null === cp ? [] : [{
+           name: Lp,
+ ... (10 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1940-L1943` → after: `L1288-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1288-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1288-L1308) · [Before (L1940-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1940-L1943)

```diff
-     function qz(DD, zD) {
-       if (Hz(DD)) try {
-         zD.free()
-       } catch {} else zD.__destroy_into_raw()
+     function zi(pp) {
+       const ip = [];
+       let cp = pp.indexOf("{");
+       for (; - 1 !== cp;) {
+         const Op = ai(pp, cp);
+         let op = [];
+         if (null !== Op) try {
+           op = Zi(JSON.parse(pp.slice(cp, Op)))
+         } catch {}
+         if (null !== Op && op.length > 0) {
+           const Ip = pp.slice(cp, Op);
+           ip.push(...op.map((pp => ({
+             call: {
+               ...pp,
+               source: Ip
+             },
+ ... (5 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1958` → after: `L1312-L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1312-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1312-L1316) · [Before (L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1958)

```diff
-       return DD / Aw | 0
+       if (Array.isArray(pp)) return `[${pp.map(si).join(", ")}]`;
+       if ("object" === typeof pp && null !== pp) {
+         return `{${Object.entries(pp).map((pp=>{let[ip,cp]=pp;return`${JSON.stringify(ip)}: ${si(cp)}`})).join(", ")}}`
+       }
+       return JSON.stringify(pp)
```

#### 85. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1962` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1372) · [Before (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1962)

```diff
-       return DD % Aw * 16
+       return "deepseek" === pp ? "simple" : pp
```

#### 86. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1966` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1406) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1966)

```diff
-       return DD % Aw * 21
+       return qi(pp.name).inputSchema.required.every((ip => void 0 !== pp.args[ip]))
```

#### 87. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1969-L1970` → after: `L1409-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1409-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1409-L1415) · [Before (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1969-L1970)

```diff
-     function Bw() {
-       return !1
+     function Uc(pp, ip) {
+       const cp = Ni(pp),
+         Op = bi(ip);
+       return null === cp || null === Op ? null : {
+         name: cp,
+         args: Op
+       }
```

#### 88. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1974-L1975` → after: `L1419-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1419-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1419-L1430) · [Before (L1974-L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1974-L1975)

```diff
-       var wD = (wD, pD, sD) => null !== zD.Iy && pD <= zD.Iy || DD.testSolid(wD, pD, sD);
-       return wD.solidOwner = DD, wD
+       const cp = [];
+       for (const Op of function(pp) {
+           const ip = Sc(pp),
+             cp = Ic.filter((pp => pp !== ip));
+           return [oc[ip], ...pp === ip ? [] : [oc[pp]], ...cp.map((pp => oc[pp])), ri, zi]
+         }(ip)) cp.push(...Op(ni(pp, cp)));
+       return cp.map((pp => {
+         let {
+           call: ip
+         } = pp;
+         return ip
+       }))
```

#### 89. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1979-L1980` → after: `L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1434) · [Before (L1979-L1980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1979-L1980)

```diff
-       var wD = zD.testSolid && zD.testSolid.solidOwner;
-       return (!zD.testSolid || void 0 !== wD && wD !== DD) && (zD.testSolid = Gw(DD, zD)), zD.testSolid
+       return wc(pp, ip).sort(((pp, ip) => Wc[pp.name] - Wc[ip.name]))
```

#### 90. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1994-L2005` → after: `L1438-L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1438-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1438-L1460) · [Before (L1994-L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L1994-L2005)

```diff
-       if (null === Qw) {
-         const zD = DD.getBloxdWasm();
-         Qw = "function" === typeof zD.QA && "function" === typeof zD.XA && Vw(zD.QA(), Jw) && Vw(zD.XA(), Ew), Qw || console.error(new Error("wasm physics: the module's layout differs from wasmPhysicsLayout.ts (a stale @bloxd/wasm build?), so physics and picks cannot run in wasm" … [truncated]
-       }
-       return Qw
-     }
- 
-     function Vw(DD, zD) {
-       if (DD.length !== zD.length) return !1;
-       for (let wD = 0; wD < zD.length; wD++)
-         if (DD[wD] !== zD[wD]) return !1;
-       return !0
+       return function(pp) {
+         const ip = [...pp.matchAll(Ac)],
+           cp = [];
+         let Op = 0;
+         for (; Op < ip.length;) {
+           const op = ip[Op],
+             Ip = ip.at(Op + 1);
+           void 0 !== Ip && "```" === Ip[0] ? (Pc.test(pp.slice(op.index + op[0].length, Ip.index)) && cp.push({
+             from: op.index,
+             to: Ip.index + Ip[0].length
+           }), Op += 2) : (cp.push({
+             from: op.index,
+             to: op.index + op[0].length
+           }), Op++)
+         }
+         let op = pp;
+ ... (7 more added lines; see GitHub link above)
```

#### 91. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2009-L2015` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1464) · [Before (L2009-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2009-L2015)

```diff
-       if (Number.isNaN(DD)) return "NaN";
-       if (!Number.isFinite(DD)) return DD > 0 ? "inf" : "-inf";
-       if (0 === DD) return Object.is(DD, -0) ? "-0.0" : "0.0";
-       const zD = Math.abs(DD);
-       if (zD >= 1e16 || zD < 1e-4) return DD.toExponential().replace("e+", "e");
-       const wD = String(DD);
-       return wD.includes(".") ? wD : wD + ".0"
+       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(pp)
```

#### 92. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2019-L2021` → after: `L1483-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1483-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1483-L1491) · [Before (L2019-L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2019-L2021)

```diff
-       const zD = ["dir", "base", "max", "left"][DD[0]],
-         wD = [DD[2], DD[3], DD[4]].map(Pw).join(", ");
-       return "voxel sweep rejected a move it would never finish: " + zD + "[" + DD[1] + "] of [" + wD + "]"
+       var ip;
+       const cp = Rp().createSourceFile("worldCode.js", pp, Rp().ScriptTarget.Latest, !0, Rp().ScriptKind.JS),
+         {
+           parseDiagnostics: Op
+         } = cp;
+       return {
+         file: cp,
+         hasErrors: (null !== (ip = null === Op || void 0 === Op ? void 0 : Op.length) && void 0 !== ip ? ip : 0) > 0
+       }
```

#### 93. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2024-L2025` → after: `L1494-L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1494-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1494-L1495) · [Before (L2024-L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2024-L2025)

```diff
-     function xw(DD, zD) {
-       return DD ? zD : 0
+     function jc(pp) {
+       return void 0 !== pp && (Rp().isFunctionExpression(pp) || Rp().isArrowFunction(pp))
```

#### 94. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2029-L2031` → after: `L1499-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1499-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1499-L1516) · [Before (L2029-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2029-L2031)

```diff
-       const zD = xw(DD.Uy, 1) | xw(DD.Ay, 2) | xw(DD.preventFallOffEdge, 4) | xw(DD.alwaysApplyHorizFriction, 8) | xw(DD.slideOnCollision, 16) | xw(DD.rolledBackLastTick, 32) | xw(DD.depenetrate, 64) | xw(DD.inFluid, rw) | xw(DD.GU, Lw) | xw(DD.nU, 512) | xw(DD.wakeInFluid, Rw),
-         wD = DD.Iy;
-       return null === wD ? zD : "number" === typeof wD ? zD | gw : null
+       if (Rp().isFunctionDeclaration(pp) && pp.name) return {
+         Py: pp,
+         nameNode: pp.name
+       };
+       if (Rp().isVariableStatement(pp) && 1 === pp.declarationList.declarations.length) {
+         const ip = pp.declarationList.declarations[0],
+           cp = ip.initializer && mc(ip.initializer);
+         if (Rp().isIdentifier(ip.name) && jc(cp)) return {
+           Py: cp,
+           nameNode: ip.name
+         }
+       }
+       const ip = Rc(pp),
+         cp = ip && mc(ip.value);
+       return ip && jc(cp) ? {
+         Py: cp,
+ ... (2 more added lines; see GitHub link above)
```

#### 95. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2034-L2055` → after: `L1519-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1519-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1519-L1520) · [Before (L2034-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2034-L2055)

```diff
-     function bw(DD, zD, wD, pD, sD) {
-       const KD = fw(wD),
-         rD = Iw(wD),
-         LD = DD[KD + zw];
-       pD.ratioInFluid = DD[KD + 8], pD._sleepFrameCount = DD[KD + 9];
-       const cD = pD.resting;
-       cD[0] = DD[KD + Dw], cD[1] = DD[KD + Dw + 1], cD[2] = DD[KD + Dw + 2], jw(pD, "inFluid", LD & rw), jw(pD, "rolledBackLastTick", 32 & LD);
-       const gD = pD.wU;
-       if (gD) {
-         const {
-           base: DD,
-           max: wD,
-           vec: pD
-         } = gD;
-         DD[0] = zD[rD + 0], DD[1] = zD[rD + 0 + 1], DD[2] = zD[rD + 0 + 2], wD[0] = zD[rD + 3], wD[1] = zD[rD + 3 + 1], wD[2] = zD[rD + 3 + 2], pD[0] = zD[rD + 6], pD[1] = zD[rD + 6 + 1], pD[2] = zD[rD + 6 + 2]
-       }
- ... (6 more removed lines; see GitHub link above)
+     function mc(pp) {
+       return Rp().isParenthesizedExpression(pp) ? mc(pp.expression) : pp
```

#### 96. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2058-L2060` → after: `L1523-L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1523-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1523-L1527) · [Before (L2058-L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2058-L2060)

```diff
-     function jw(DD, zD, wD) {
-       const pD = 0 !== wD;
-       !!DD[zD] !== pD && (DD[zD] = pD)
+     function Rc(pp) {
+       return Rp().isExpressionStatement(pp) && Rp().isBinaryExpression(pp.expression) && pp.expression.operatorToken.kind === Rp().SyntaxKind.EqualsToken && Rp().isIdentifier(pp.expression.left) ? {
+         name: pp.expression.left,
+         value: pp.expression.right
+       } : null
```

#### 97. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2064-L2066` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1531) · [Before (L2064-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2064-L2066)

```diff
-       var zD;
-       const wD = Sw(DD);
-       return 65536 * (null !== (zD = DD.vy) && void 0 !== zD ? zD : 0) + wD
+       return Rp().isIdentifier(pp) ? [pp.text] : pp.elements.flatMap((pp => Rp().isOmittedExpression(pp) ? [] : qc(pp.name)))
```

#### 98. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2070` → after: `L1535-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1535-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1535-L1537) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2070)

```diff
-       return Math.max(DD.Uf.length, DD.Rf.length)
+       if (!Rp().isVariableStatement(pp)) return null;
+       const ip = pp.declarationList.declarations.find((pp => Rp().isIdentifier(pp.name) && "CONFIG" === pp.name.text));
+       return null !== ip && void 0 !== ip && ip.initializer && Rp().isObjectLiteralExpression(ip.initializer) ? ip.initializer : null
```

#### 99. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2074-L2083` → after: `L1541-L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1541-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1541-L1560) · [Before (L2074-L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2074-L2083)

```diff
-       const wD = new Uint8Array(DD + 1),
-         pD = new Uint32Array(DD + 2),
-         sD = [];
-       for (let KD = 0; KD <= DD; KD++) {
-         const DD = zD(KD);
-         if (wD[KD] = lw(DD), Array.isArray(DD)) {
-           if (DD.length % 6 !== 0) return null;
-           for (const zD of DD) {
-             if ("number" !== typeof zD) return null;
-             sD.push(zD)
+       return ip.statements.map((cp => {
+         var Op;
+         const op = function(pp, ip, cp) {
+             let Op = cp.getStart(ip);
+             for (const Ip of (null !== (op = Rp().getLeadingCommentRanges(pp, cp.getFullStart())) && void 0 !== op ? op : []).reverse()) {
+               var op;
+               if (/\n[^\S\n]*\n/.test(pp.slice(Ip.end, Op))) break;
+               Op = Ip.pos
+             }
+             return Op
+           }(pp, ip, cp),
+           Ip = kc(cp);
+         if (null !== Ip && void 0 !== Ip && Ip.nameNode) {
+           const pp = Ip.nameNode.text;
+           return {
+             kind: Hc(pp) ? "callback" : "function",
+ ... (4 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2086-L2092` → after: `L1563-L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1563-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1563-L1595) · [Before (L2086-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2086-L2092)

```diff
-         pD[KD + 1] = sD.length
-       }
-       return {
-         kinds: wD,
-         shapeOffsets: pD,
-         shapes: Float64Array.from(sD)
-       }
+         const Sp = Rp().isVariableStatement(cp) ? cp.declarationList.declarations.flatMap((pp => qc(pp.name))) : [];
+         if (Mc(cp)) {
+           return {
+             kind: "config",
+             names: ["CONFIG", ...Sp.filter((pp => "CONFIG" !== pp))],
+             from: op,
+             to: cp.getEnd(),
+             node: cp
+           }
+         }
+         if (Rp().isVariableStatement(cp)) return {
+           kind: "variable",
+           names: Sp,
+           from: op,
+           to: cp.getEnd(),
+           node: cp
+ ... (17 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2096` → after: `L1599-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1599-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1599-L1601) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2096)

```diff
-       return Array.isArray(DD) ? 2 : DD ? 1 : 0
+       if (!Rp().isPropertyAssignment(pp) && !Rp().isShorthandPropertyAssignment(pp)) return null;
+       const ip = pp.name;
+       return Rp().isIdentifier(ip) || Rp().isStringLiteral(ip) ? ip.text : null
```

#### 102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2098-L2118` → after: `L1603-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1603-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1603-L1611) · [Before (L2098-L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2098-L2118)

```diff
-     class Ww {
-       constructor(DD) {
-         this.mirror = DD, this.supplied = new Set, this.absentMisses = !1
-       }
-       Jf() {
-         this.supplied.size > 0 && this.supplied.clear(), this.absentMisses = this.mirror.picksSupplyAbsent
-       }
-       supply(DD) {
-         DD.missRounds++, this.absentMisses && this.alreadySupplied() && (this.absentMisses = !1), this.mirror.supplyMisses(this.absentMisses ? "generate" : "load")
-       }
-       alreadySupplied() {
-         const DD = this.mirror.KU,
-           zD = DD.tU(),
-           wD = this.mirror.wasm.wasmView(Int32Array, DD.FU(), 3 * zD);
-         let pD = zD > 0;
-         for (let sD = 0; sD < wD.length; sD += 3) {
- ... (5 more removed lines; see GitHub link above)
+ 
+     function Xc(pp, ip) {
+       return pp.lastIndexOf("\n", ip - 1) + 1
+     }
+ 
+     function lc(pp, ip) {
+       var cp, Op;
+       const op = pp.slice(Xc(pp, ip), ip);
+       return /^\s*$/.test(op) ? op : `${null!==(cp=null===(Op=/^\s*/.exec(op))||void 0===Op?void 0:Op[0])&&void 0!==cp?cp:""}\t`
```

#### 103. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2122-L2123` → after: `L1615-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1615-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1615-L1621) · [Before (L2122-L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2122-L2123)

```diff
-       if (!zD.Fy) throw new Error(`wasm physics: a pick ${wD}, and picks here run only in wasm`);
-       return DD.jsPicks++, zD.Fy()
+       const Op = pp.slice(Xc(pp, ip.getStart(cp)), function(pp, ip) {
+           const cp = pp.indexOf("\n", ip);
+           return -1 === cp ? pp.length : cp
+         }(pp, ip.getEnd())),
+         op = Op.trim(),
+         Ip = /^[\w$"']+\s*:/.test(op) && "" === pp.slice(Xc(pp, ip.getStart(cp)), ip.getStart(cp)).trim() ? Op.replace(/^\s*/, "\t") : `\t${ip.getText(cp)},`;
+       return /,\s*(?:\/\/.*)?$/.test(Ip) ? Ip : Ip.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
```

#### 104. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2125-L2184` → after: `L1623-L1627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1623-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1623-L1627) · [Before (L2125-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2125-L2184)

```diff
-     const Zw = null;
-     class yw {
-       constructor(DD) {
-         this.mirror = DD, this.tables = new Map, this.pickIoView = null, this.rounds = void 0, this.rounds = new Ww(DD)
-       }
-       HU(DD, zD) {
-         if (!this.mirror.usable()) return Nw(DD, zD, "found wasm unusable");
-         let wD;
-         try {
-           wD = this.wasmPick(zD, DD)
-         } catch (pD) {
-           if (pD instanceof uz) throw pD.error;
-           this.mirror.failed(pD, "a pick", DD), wD = Zw
-         }
-         return wD === Zw ? Nw(DD, zD, "could not settle in wasm") : (DD.wasmPicks++, wD)
-       }
- ... (44 more removed lines; see GitHub link above)
+ 
+     function Jc(pp, ip) {
+       let cp = pp;
+       for (const Op of [...ip].sort(((pp, ip) => ip.from - pp.from))) cp = cp.slice(0, Op.from) + Op.text + cp.slice(Op.to);
+       return cp
```

#### 105. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2188-L2234` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1631) · [Before (L2188-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2188-L2234)

```diff
-       return Number.isInteger(DD) && Math.abs(DD) <= 1073741823
-     }
-     class mw {
-       constructor() {
-         this.engine = null, this.offsets = new Float64Array(6), this.source = null, this.desyncVersion = -1, this.types = [], this.walkRects = [], this.cantRects = [], this.nonEmpty = !1, this.valid = !0, this.packedDesyncs = new WeakMap
-       }
-       setOffsets(DD, zD, wD) {
-         if (!kw(zD[0]) || !kw(zD[1]) || !kw(zD[2])) return !1;
-         this.adopt(DD);
-         const pD = this.offsets;
-         return pD[0] === zD[0] && pD[1] === zD[1] && pD[2] === zD[2] && Object.is(pD[3], wD[0]) && Object.is(pD[4], wD[1]) && Object.is(pD[5], wD[2]) || (pD[0] = zD[0], pD[1] = zD[1], pD[2] = zD[2], pD[3] = wD[0], pD[4] = wD[1], pD[5] = wD[2], DD.pU(pD[0], pD[1], pD[2], pD[3], pD … [truncated]
-       }
-       uploadOverrides(DD, zD) {
-         var wD, pD, sD, KD;
-         this.adopt(DD);
-         const rD = null !== (wD = null === (pD = zD.getDesyncedBlockCount) || void 0 === pD ? void 0 : pD.call(zD)) && void 0 !== wD ? wD : 0,
- ... (31 more removed lines; see GitHub link above)
+       return pp.charAt(0).toUpperCase() + pp.slice(1)
```

#### 106. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2238-L2245` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1634-L1635) · [Before (L2238-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2238-L2245)

```diff
-     function ow(DD, zD) {
-       if (6 * DD.length !== zD.length) return !1;
-       for (let wD = 0; wD < DD.length; wD++) {
-         const pD = DD[wD];
-         for (let DD = 0; DD < 6; DD++)
-           if (!Object.is(pD[DD], zD[6 * wD + DD])) return !1
-       }
-       return !0
+     function Nc(pp) {
+       return pp.replace(/[^A-Za-z0-9]+(.)?/g, ((pp, ip) => ip ? ip.toUpperCase() : ""))
```

#### 107. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2249-L2251` → after: `L1639-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1639-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1639-L1655) · [Before (L2249-L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2249-L2251)

```diff
-       zD.length = 0;
-       for (const wD of DD)
-         for (let DD = 0; DD < 6; DD++) zD.push(wD[DD])
+       var cp, Op;
+       const op = pp.filter((pp => pp.names.includes(ip))),
+         Ip = op.filter((pp => !Rp().isFunctionDeclaration(pp.node) && function(pp, ip) {
+           return !Rp().isVariableStatement(pp) || pp.declarationList.declarations.some((pp => void 0 !== pp.initializer && qc(pp.name).includes(ip)))
+         }(pp.node, ip))),
+         Sp = null !== (cp = Ip[Ip.length - 1]) && void 0 !== cp ? cp : op[op.length - 1];
+       if ("callback" === (null === Sp || void 0 === Sp ? void 0 : Sp.kind)) return kc(Sp.node);
+       const xp = "other" === (null === Sp || void 0 === Sp ? void 0 : Sp.kind) ? null === (Op = Rc(Sp.node)) || void 0 === Op ? void 0 : Op.value : void 0;
+       if (!xp || !Rp().isIdentifier(xp)) return null;
+       const Lp = pp.filter((pp => {
+           var ip;
+           const cp = null === (ip = Rc(pp.node)) || void 0 === ip ? void 0 : ip.value;
+           return void 0 !== cp && Rp().isIdentifier(cp) && cp.text === xp.text
+         })),
+         Yp = pp.filter((pp => pp.names.includes(xp.text))),
+         Dp = 1 === Yp.length && "function" === Yp[0].kind ? kc(Yp[0].node) : null;
+ ... (1 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2255` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1659) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2255)

```diff
-       return DD === (0 | DD)
+       return pp.parameters.map((pp => Rp().isIdentifier(pp.name) ? pp.name.text : null))
```

#### 109. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2257-L2258` → after: `L1661-L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1661-L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1661-L1679) · [Before (L2257-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2257-L2258)

```diff
-     class vw {
-       constructor(DD, zD, wD, pD, sD) {
+ 
+     function bc(pp, ip, cp, Op, op, Ip, Sp) {
+       var xp;
+       let Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const {
+         Py: Yp
+       } = cp, Dp = Yp.body;
+       if (!Dp) return [];
+       const Ap = [],
+         Pp = fc(Yp),
+         Wp = [],
+         yp = new Set([...Pp.filter((pp => null !== pp)), ...nc(Dp)]),
+         Up = (pp, ip) => {
+           let cp = pp;
+           for (let Op = ip; yp.has(cp); Op++) cp = `${pp}${Op}`;
+           return yp.add(cp), cp
+ ... (3 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2260-L2268` → after: `L1681-L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1681-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1681-L1684) · [Before (L2260-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2260-L2268)

```diff
-         this.wasm = DD, this.Lf = zD, this.options = wD, this.label = pD, this.handling = sD, this.KU = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.MI = !1, this.picks = new yw(this), this. … [truncated]
-       }
-       static acquire(DD, zD, wD, pD, sD, KD) {
-         if (!Xw(wD)) return null;
-         let rD;
-         try {
-           rD = DD()
-         } catch (LD) {
-           return Fz(wD, pD, LD, `${sD} mirror`, "creating it", KD), null
+         const pp = Pp[Rp];
+         if (void 0 !== pp && null !== (vp = Yp.parameters[Rp]) && void 0 !== vp && vp.dotDotDotToken) {
+           Wp.push(null === pp ? "undefined" : `...${pp}`);
+           break
```

#### 111. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2270-L2311` → after: `L1686-L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1686-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1686-L1688) · [Before (L2270-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2270-L2311)

```diff
-         return zD(rD), rD
-       }
-       refresh() {}
-       refreshForPick() {}
-       usable() {
-         return !this.MI && !this.broken && this.wasm.isBloxdWasmReady()
-       }
-       beforeTick() {
-         return !!this.syncRegistry() && (this.syncEpoch(), this.refresh(), !0)
-       }
-       beforePick() {
-         return !!this.syncRegistry() && (this.syncEpoch(), this.refreshForPick(), !0)
-       }
-       stillCurrent() {
-         return this.usable() && !this.unsupported && dw(this.Lf) === this.registryState
-       }
- ... (26 more removed lines; see GitHub link above)
+         if (void 0 !== pp) {
+           Wp.push(null !== pp && void 0 !== pp ? pp : "undefined");
+           continue
```

#### 112. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2314-L2350` → after: `L1693-L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1693-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1693-L1710) · [Before (L2314-L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2314-L2350)

```diff
-       HU(DD, zD) {
-         return this.picks.HU(DD, zD)
-       }
-       failed(DD, zD, wD) {
-         this.broken = !0, Fz(this.wasm, wD, DD, `${this.label} picks`, zD, this.handling)
-       }
-       jT(DD, zD, wD, pD) {
-         this.usable() && this.KU.pf(DD, zD, wD, pD)
-       }
-       forgetChunk(DD, zD, wD) {
-         this.usable() && this.KU.mU(DD, zD, wD)
-       }
-       forgetAll() {
-         this.usable() && this.KU.kU()
-       }
-       fillChunk(DD, zD, wD, pD) {
- ... (21 more removed lines; see GitHub link above)
+       if (wp.length > 0) {
+         const pp = Yp.getChildren(ip).find((pp => pp.kind === Rp().SyntaxKind.CloseParenToken)),
+           cp = pp ? pp.getStart(ip) : -1;
+         if (-1 === cp) {
+           const pp = Yp.parameters[0];
+           if (!pp) return [];
+           Ap.push({
+             from: pp.getStart(ip),
+             to: pp.getEnd(),
+             text: `(${[pp.getText(ip),...wp].join(", ")})`
+           })
+         } else {
+           const pp = Yp.parameters.hasTrailingComma ? " " : Yp.parameters.length > 0 ? ", " : "";
+           Ap.push({
+             from: cp,
+             to: cp,
+ ... (2 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2353-L2368` → after: `L1713-L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1713-L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1713-L1760) · [Before (L2353-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2353-L2368)

```diff
-       epochNow() {
-         return Math.floor((performance.now() - this.epochStartMs) / 1e3)
-       }
-       syncRegistry() {
-         const DD = this.Lf,
-           zD = dw(DD);
-         if (zD === this.registryState) return !this.unsupported;
-         this.registryState = zD;
-         const wD = iw(Sw(DD), (zD => DD.gf(zD)));
-         if (this.unsupported = null === wD, wD) {
-           const zD = new Uint8Array(wD.kinds.length);
-           for (let wD = 0; wD < zD.length; wD++) zD[wD] = DD.Rf[wD] ? 1 : 0;
-           this.KU.Kf(wD.kinds, wD.shapeOffsets, wD.shapes, zD);
-           const pD = new Uint8Array(wD.kinds.length);
-           for (let wD = 0; wD < pD.length; wD++) pD[wD] = DD.Uf[wD] ? 1 : 0;
-           this.KU.ff(pD)
+       const tp = `${op}(${Wp.join(", ")})`,
+         Hp = Up(`${Nc(Sp)}Result`, 2),
+         dp = ec[Op],
+         ep = dc.has(Op) ? [tp] : dp ? [`const ${Hp} = ${tp}`, `if (${dp.stopsWhen(Hp)}) return ${Hp}`] : [`const ${Hp} = ${tp}`],
+         jp = !dc.has(Op) && (null === (xp = null === dp || void 0 === dp ? void 0 : dp.passedOn) || void 0 === xp || xp);
+       if (jp && Rp().isBlock(Dp)) {
+         const cp = function(pp, ip) {
+             const cp = new Set;
+             for (const Op of pp.statements) {
+               const pp = Rp().isVariableStatement(Op) ? Op.declarationList.declarations[0] : void 0;
+               pp && Rp().isIdentifier(pp.name) && pp.initializer && hc(pp.initializer, ip) && cp.add(pp.name.text)
+             }
+             return cp
+           }(Dp, Op),
+           op = pp => {
+             if (!Rp().isFunctionLike(pp) && ! function(pp, ip, cp) {
+ ... (32 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2486-L2576` → after: `L1763-L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1763-L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1763-L1791) · [Before (L2486-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2486-L2576)

```diff
-       get Uy() {
-         return this._flag(1)
-       }
-       set Uy(DD) {
-         this._setFlag(1, !!DD)
-       }
-       get Ay() {
-         return this._flag(2)
-       }
-       set Ay(DD) {
-         this._setFlag(2, !!DD)
-       }
-       get preventFallOffEdge() {
-         return this._flag(4)
-       }
-       set preventFallOffEdge(DD) {
- ... (75 more removed lines; see GitHub link above)
+       const kp = Rp().isBlock(Dp) ? [...Dp.statements] : [],
+         mp = kp.findIndex((pp => ! function(pp, ip) {
+           return Rp().isExpressionStatement(pp) && hc(pp.expression, ip)
+         }(pp, Op))),
+         qp = kp[(-1 === mp ? kp.length : mp) - 1];
+       if (Lp && dc.has(Op) && qp) Ap.push({
+         from: qp.getEnd(),
+         to: qp.getEnd(),
+         text: `\n${lc(pp,qp.getStart(ip))}${tp}`
+       });
+       else if (Rp().isBlock(Dp)) {
+         const cp = Dp.statements[0],
+           Op = cp ? lc(pp, cp.getStart(ip)) : `${pp.slice(Xc(pp,Yp.getStart(ip)),Yp.getStart(ip)).replace(/\S.*$/,"")}\t`,
+           op = Dp.getStart(ip) + 1,
+           Ip = void 0 !== cp && !pp.slice(op, cp.getStart(ip)).includes("\n");
+         Ap.push({
+ ... (13 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2581-L2593` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1797) · [Before (L2581-L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2581-L2593)

```diff
-       DD[0] = zD[0], DD[1] = zD[1], DD[2] = zD[2]
-     }
-     var Dp = wD(39525);
-     class zp {
-       constructor(DD, zD, wD) {
-         this.physics = DD, this.d = zD, this.f = wD
-       }
-       f64Rows() {
-         return this.d
-       }
-       f32Rows() {
-         return this.f
-       }
+       return Rp().isCallExpression(pp) && Rp().isIdentifier(pp.expression) && pp.expression.text.endsWith(Bc(ip)) && pp.expression.text !== Bc(ip)
```

#### 116. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2595-L2654` → after: `L1799-L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1799-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1799-L1801) · [Before (L2595-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2595-L2654)

```diff
-     class wp extends Hw {
-       constructor(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
-         super(DD, zD);
-         var gD = new Dp(wD.base, wD.vec),
-           RD = gD.base,
-           AD = gD.max,
-           UD = gD.vec;
-         this._box = gD, this._onCollide = LD, this._onStep = null, this._testSolid = null, this._customSolid = !1, this._view();
-         var fD = this._d,
-           ID = this._o64;
-         fD[ID + 0] = pD, fD[ID + 1] = sD, fD[ID + 2] = KD, fD[ID + 3] = rD, fD[ID + 4] = -1, fD[ID + 5] = -1, fD[ID + 6] = -1, fD[ID + 7] = -1, fD[ID + 8] = 0, fD[ID + 9] = 10, fD[ID + Dw] = 0, fD[ID + Dw + 1] = 0, fD[ID + Dw + 2] = 0, fD[ID + 13] = 0, fD[ID + zw] = 17 | (cD ? 2  … [truncated]
-         var BD = this._f,
-           GD = this._o32;
-         BD.fill(0, GD, GD + 21);
-         for (var hD = 0; hD < 3; hD++) BD[GD + 0 + hD] = RD[hD], BD[GD + 3 + hD] = AD[hD], BD[GD + 6 + hD] = UD[hD]
-       }
- ... (44 more removed lines; see GitHub link above)
+ 
+     function ac(pp, ip) {
+       return Rp().isIdentifier(pp) ? ip.has(pp.text) ? pp : null : Rp().isConditionalExpression(pp) ? ac(pp.whenFalse, ip) : null
```

#### 117. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2656-L2714` → after: `L1803-L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1803-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1803-L1809) · [Before (L2656-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2656-L2714)

```diff
-     wp.prototype.loadFromCopy = Nz.prototype.loadFromCopy, wp.prototype.loadStateFromCopy = Nz.prototype.loadStateFromCopy, wp.prototype.setPosition = Nz.prototype.setPosition, wp.prototype.PJ = Nz.prototype.PJ, wp.prototype.applyForce = Nz.prototype.applyForce, wp.prototype.appl … [truncated]
-     class pp {
-       constructor(DD, zD) {
-         this.wasm = DD, this.physics = zD, this.handle = void 0, this.f64Pages = [], this.f32Pages = [], this.fresh = [], this.freed = [], this.freedHead = 0, this.slotOwners = [], this.releaseCount = 0, this.handle = new(DD.getBloxdWasm().zA)
-       }
-       get owners() {
-         return this.slotOwners
-       }
-       get releases() {
-         return this.releaseCount
-       }
-       setOwner(DD, zD) {
-         this.slotOwners[DD] = zD
-       }
-       clearOwner(DD) {
-         this.slotOwners[DD] = null
- ... (43 more removed lines; see GitHub link above)
+ 
+     function nc(pp) {
+       const ip = [],
+         cp = pp => {
+           Rp().isIdentifier(pp) && ip.push(pp.text), Rp().forEachChild(pp, cp)
+         };
+       return cp(pp), ip
```

#### 118. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2716-L2729` → after: `L1811-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1811-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1811-L1814) · [Before (L2716-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2716-L2729)

```diff
-     const sp = new WeakMap;
-     const Kp = new Float64Array(0),
-       rp = new Float32Array(0);
-     class Lp {
-       constructor() {
-         this.page = -1, this.d = Kp, this.f = rp
-       }
-       at(DD, zD) {
-         const wD = Uw(zD);
-         wD !== this.page && (this.page = wD, this.d = DD.f64Rows(zD), this.f = DD.f32Rows(zD))
-       }
-       invalidate() {
-         this.page = -1
-       }
+ 
+     function Fc(pp, ip, cp) {
+       var Op, op;
+       return (0, vi.f)(null !== (Op = null === (op = pp.body) || void 0 === op ? void 0 : op.getText(ip)) && void 0 !== Op ? Op : "", new RegExp(`${cp}\\s*\\(`), vi.m).length > 0
```

#### 119. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2731-L2775` → after: `L1816-L1842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1816-L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1816-L1842) · [Before (L2731-L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2731-L2775)

```diff
-     class cp {
-       constructor(DD) {
-         this.physics = DD, this.store = null, this.bodies = [], this.slotOfBody = new Map, this.slots = [], this.isStaging = new Uint8Array(0), this.rollback = -1, this.rows = new Lp
-       }
-       get any() {
-         return this.bodies.length > 0
-       }
-       useStore(DD) {
-         DD !== this.store && (this.release(), this.store = DD), this.clear()
-       }
-       release() {
-         this.clear();
-         const DD = this.store;
-         if (DD) {
-           for (const zD of this.slots) DD.release(zD);
-           this.rollback >= 0 && DD.release(this.rollback)
- ... (29 more removed lines; see GitHub link above)
+ 
+     function gc(pp, ip, cp) {
+       var Op;
+       const {
+         owner: op,
+         heading: Ip
+       } = cp, Sp = null !== (Op = cp.overrides) && void 0 !== Op ? Op : new Set;
+       if ("" === pp.trim() && !0 !== cp.chainCallbacks) {
+         const pp = `${Ip?`${Ip}\n`:""}${ip.trim()}\n`,
+           {
+             file: cp,
+             hasErrors: Op
+           } = uc(pp);
+         if (Op) return null;
+         const op = Cc(pp, cp);
+         return {
+ ... (11 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2779-L2792` → after: `L1845-L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1845-L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1845-L1867) · [Before (L2779-L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2779-L2792)

```diff
-       encode(DD, zD) {
-         const wD = this.rows;
-         return wD.at(this.store, DD),
-           function(DD, zD, wD, pD, sD) {
-             const KD = pD.wU;
-             if (!KD) return !1;
-             const rD = pD.testSolid,
-               LD = rD ? rD.solidOwner : void 0;
-             let cD;
-             if (!rD || void 0 !== LD && LD !== sD) cD = 0;
-             else if (rD === Bw) cD = 2;
-             else {
-               if (LD !== sD) return !1;
-               cD = 1
+       const xp = uc(pp),
+         Lp = uc(ip);
+       if (xp.hasErrors || Lp.hasErrors) return null;
+       const Yp = Cc(pp, xp.file),
+         Dp = Cc(ip, Lp.file),
+         Ap = new Set(Yp.flatMap((pp => pp.names))),
+         Pp = new Set(Ap),
+         Wp = [],
+         yp = [],
+         Up = [],
+         wp = [];
+       let vp = [];
+       const tp = Dp.find((pp => "config" === pp.kind)),
+         Hp = Yp.find((pp => "config" === pp.kind));
+       if (tp) {
+         const cp = Mc(tp.node),
+ ... (7 more added lines; see GitHub link above)
```

#### 121. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2794-L2822` → after: `L1869-L1950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1869-L1950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1869-L1950) · [Before (L2794-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2794-L2822)

```diff
-             const gD = pD.UG,
-               RD = pD.Qy,
-               AD = pD.Py,
-               UD = pD.surfaceVelocity;
-             if (!(gD instanceof Float32Array && RD instanceof Float32Array && AD instanceof Float32Array && UD instanceof Float32Array)) return !1;
-             const fD = pD.resting,
-               {
-                 Ug: ID,
-                 friction: BD,
-                 restitution: GD,
-                 gravityMultiplier: hD,
-                 XU: nD,
-                 fluidDrag: MD,
-                 fluidDragVert: OD,
-                 fluidDragHoriz: JD,
-                 ratioInFluid: ED,
- ... (13 more removed lines; see GitHub link above)
+             const Lp = [],
+               Yp = [],
+               Dp = [],
+               Ap = new Map;
+             for (const Hp of Ip.properties) {
+               const pp = Ec(Hp);
+               if (null === pp) continue;
+               const cp = xp.get(pp);
+               if (cp) {
+                 if (Sp.has(pp) && Rp().isPropertyAssignment(cp) && Rp().isPropertyAssignment(Hp)) {
+                   const Op = Hp.initializer.getText(op);
+                   cp.initializer.getText(ip) !== Op && (Lp.push({
+                     from: cp.initializer.getStart(ip),
+                     to: cp.initializer.getEnd(),
+                     text: Op
+                   }), Ap.set(cp, Op), Yp.push(pp))
+ ... (66 more added lines; see GitHub link above)
```

#### 122. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2824-L2834` → after: `L1952-L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1952-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1952-L1953) · [Before (L2824-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2824-L2834)

```diff
-             return zD[TD + 0] = PD[0], zD[TD + 0 + 1] = PD[1], zD[TD + 0 + 2] = PD[2], zD[TD + 3] = CD[0], zD[TD + 3 + 1] = CD[1], zD[TD + 3 + 2] = CD[2], zD[TD + 6] = xD[0], zD[TD + 6 + 1] = xD[1], zD[TD + 6 + 2] = xD[2], zD[TD + 9] = gD[0], zD[TD + 9 + 1] = gD[1], zD[TD + 9 + 2 … [truncated]
-           }(wD.d, wD.f, DD, zD, this.physics)
-       }
-       encodeAfterHandler(DD, zD, wD, pD) {
-         if (!this.any) return !0;
-         const sD = this.store.owners,
-           KD = this.isStaging;
-         if (this.rows.invalidate(), DD >= 0 && KD[DD] && !this.encode(DD, sD[DD])) return !1;
-         for (let rD = wD; rD < pD; rD++) {
-           const DD = zD[rD];
-           if (KD[DD] && !this.encode(DD, sD[DD])) return !1
+             return null === ip ? [] : [ip]
+           }))
```

#### 123. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2838-L2847` → after: `L1956-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1956-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1956-L1970) · [Before (L2838-L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2838-L2847)

```diff
-       decodeCommitted(DD, zD, wD, pD, sD) {
-         const KD = this.store,
-           rD = this.rows;
-         if (rD.invalidate(), this.any) {
-           const sD = KD.owners,
-             LD = this.isStaging;
-           DD >= 0 && LD[DD] && (rD.at(KD, DD), bw(rD.d, rD.f, DD, sD[DD], this.physics));
-           for (let DD = wD; DD < pD; DD++) {
-             const wD = zD[DD];
-             LD[wD] && (rD.at(KD, wD), bw(rD.d, rD.f, wD, sD[wD], this.physics))
+       const dp = [],
+         ep = (pp, cp) => {
+           const Op = dp[dp.length - 1],
+             op = void 0 !== Op && Op >= 0 && Op === cp - 1 && !/\n[^\S\n]*\n/.test(ip.slice(Dp[Op].to, Dp[cp].from)) ? "\n" : "\n\n";
+           yp.push(0 === yp.length ? pp : `${op}${pp}`), dp.push(cp)
+         };
+       for (const [kp, mp] of Dp.entries()) {
+         if ("config" === mp.kind) continue;
+         const Op = ip.slice(mp.from, mp.to);
+         if ("callback" === mp.kind) {
+           const ip = mp.names[0],
+             Ip = Tc(Yp, ip);
+           if (!Ip && Ap.has(ip)) {
+             if (!0 === cp.chainCallbacks) continue;
+             return null
```

#### 124. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2850-L2957` → after: `L1994-L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1994-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L1994-L1997) · [Before (L2850-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2850-L2957)

```diff
-         sD >= 0 && sD === this.rollback && (rD.at(KD, sD), bw(rD.d, rD.f, sD, this.physics.rollbackBody, null))
-       }
-     }
-     const gp = "has a body wasm can't take (a custom testSolid, a plain-array vector or a field that isn't a number)";
-     class Rp {
-       constructor(DD, zD, wD, pD, sD) {
-         this.physics = DD, this.kind = zD, this.wasm = wD, this.rollsBack = pD, this.hostStore = sD, this.current = null, this.store = null, this.staging = void 0, this.listView = null, this.impactsView = null, this.resultView = null, this.listed = 0, this.listSynced = !1, this.l … [truncated]
-           const zD = this.ownSlot(DD);
-           return zD >= 0 ? zD : this.staging.kE(DD)
-         }, this.staging = new cp(DD)
-       }
-       get engine() {
-         return this.current
-       }
-       get bodyStore() {
-         return this.store
- ... (92 more removed lines; see GitHub link above)
+         const Ip = mp.names.filter((pp => !Pp.has(pp)));
+         if ("other" === mp.kind || mp.names.length > 0 && Ip.length === mp.names.length) {
+           ep(Op, kp), Up.push(...Ip);
+           for (const pp of Ip) Pp.add(pp)
```

#### 125. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2961-L2962` → after: `L2000-L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2000-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2000-L2003) · [Before (L2961-L2962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2961-L2962)

```diff
-       encodeStagedAfterHandler(DD, zD, wD) {
-         return this.staging.encodeAfterHandler(DD, this.list(), zD, wD)
+       let jp = Jc(pp, Wp);
+       if (yp.length > 0) {
+         const pp = jp.replace(/\s*$/, "");
+         jp = `${""===pp?"":`${pp}\n\n`}${Ip?`${Ip}\n`:""}${yp.join("")}\n`
```

#### 126. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2964-L2975` → after: `L2005-L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2005-L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2005-L2009) · [Before (L2964-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L2964-L2975)

```diff
-       decodeCommitted(DD, zD, wD, pD) {
-         this.staging.decodeCommitted(DD, this.list(), zD, Math.min(wD, this.listed), pD ? this.rollbackSlot : -1)
-       }
-       syncOptions() {
-         const DD = this.physics,
-           zD = this.options,
-           wD = DD.gravity;
-         Object.is(zD[0], DD.XU) && Object.is(zD[1], DD.fluidDrag) && Object.is(zD[2], DD.VU) && Object.is(zD[3], wD[0]) && Object.is(zD[4], wD[1]) && Object.is(zD[5], wD[2]) && Object.is(zD[6], DD.minBounceImpulse) || (zD[0] = DD.XU, zD[1] = DD.fluidDrag, zD[2] = DD.VU, zD[3] = w … [truncated]
-       }
-       release() {
-         const DD = this.current;
-         this.current = null, this.store = null, this.listView = this.impactsView = this.resultView = null, this.listed = 0, this.listSynced = !1, this.staging.release(), DD && qz(this.wasm, DD)
+       return uc(jp).hasErrors ? null : {
+         text: jp,
+         added: Up,
+         chained: wp,
+         settings: vp
```

#### 127. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3364-L3436` → after: `L2014-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2014-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2014-L2017) · [Before (L3364-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3364-L3436)

```diff
-       var zD;
-       return DD.isBloxdWasmReady() ? {
-         bindings: DD.getBloxdWasm(),
-         view: DD.wasmView,
-         BufferView: DD.WasmBufferView,
-         isReady: DD.isBloxdWasmReady,
-         markFailed: DD.markBloxdWasmFailed,
-         takeRefusedAllocation: null !== (zD = DD.takeBloxdWasmRefusedAllocation) && void 0 !== zD ? zD : () => 0
-       } : null
-     }
-     const Bp = 32768,
-       Gp = [Bp, 3, 0, 1, 2, 4, 3, 0, 1, 1, 2, 4, 8, 16];
-     class hp {
-       static create(DD, zD, wD) {
-         var pD, sD, KD;
-         const rD = Ip(DD);
- ... (57 more removed lines; see GitHub link above)
+       const {
+         file: ip
+       } = uc(pp);
+       return new Set(Cc(pp, ip).flatMap((pp => pp.names)))
```

#### 128. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3442-L3558` → after: `L2021-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2021-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2021-L2026) · [Before (L3442-L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3442-L3558)

```diff
-       if (0 !== DD) throw new np(Mp)
-     }
-     var Jp = wD(38397);
-     const Ep = [11, 0, 1, 2, 3, 4, 5, 6, 10, 0, 1, 2, 32768, 4 * Jp.Q, Jp.H, Jp.C, Jp.G, Jp.y, Jp.s, Jp.K, Jp.L, Jp.w, Jp.V, Jp.T, Jp.$, Jp.bb, Jp.X, Jp.o, Jp.h, Jp.i, Jp.m, Jp.O, Jp.e, ...Jp.P],
-       Qp = new Int32Array(0);
-     class Xp {
-       static create(DD, zD, wD) {
-         var pD, sD, KD;
-         const rD = Ip(DD);
-         if (!rD) return null;
-         const LD = null !== (pD = null === (sD = (KD = rD.bindings).cA) || void 0 === sD ? void 0 : sD.call(KD)) && void 0 !== pD ? pD : [];
-         return LD.length === Ep.length && Ep.every(((DD, zD) => LD[zD] === DD)) ? new Xp(rD, new rD.bindings.sA, zD, wD) : (console.error(`@bloxd/wasm's block edit constants [${Array.from(LD).join()}] are not [${Ep.join()}], so blocks are set in JS`), null)
-       }
-       constructor(DD, zD, wD, pD) {
-         this.runtime = DD, this.handle = zD, this.Lf = wD, this.sI = pD, this.header = void 0, this.journalPtr = void 0, this.sentProps = null, this.plainProps = null, this.hookedProps = null, this.busy = !1, this.startFailedAt = null, this.header = new DD.BufferView(Uint32Array, … [truncated]
-       }
- ... (101 more removed lines; see GitHub link above)
+       const {
+         file: ip
+       } = uc(pp), cp = new Set, Op = pp => {
+         Rp().isCallExpression(pp) && Rp().isIdentifier(pp.expression) && cp.add(pp.expression.text), Rp().forEachChild(pp, Op)
+       };
+       return Op(ip), cp
```

#### 129. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3571` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2030) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3571)

```diff
-       return DD > 0 ? Math.min(Math.max(DD, 1), 100) : xp
+       return !uc(pp).hasErrors
```

#### 130. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3574-L3576` → after: `L2033-L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2033-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2033-L2034) · [Before (L3574-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3574-L3576)

```diff
-     function lp(DD) {
-       var zD = Math.sqrt(Math.max(1, DD / xp));
-       return 100 * zD * Math.sqrt(zD)
+     function zc(pp, ip) {
+       return Rp().isCallExpression(pp) && Rp().isPropertyAccessExpression(pp.expression) && "api" === pp.expression.expression.getText(ip)
```

#### 131. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3579-L3580` → after: `L2037-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2037-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2037-L2044) · [Before (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3579-L3580)

```diff
-     function Wp(DD) {
-       DD.Zm = DD.qm = 0
+     function sc(pp, ip) {
+       var cp;
+       const Op = pp.getPropertiesOfType(pp.getNonNullableType(ip)),
+         op = null !== (cp = Op.find((pp => "color" === pp.name))) && void 0 !== cp ? cp : Op[0];
+       if (!op) return;
+       const Ip = pp.typeToString(pp.getNonNullableType(pp.getTypeOfSymbol(op))),
+         Sp = "color" === op.name ? '"red"' : Ip.includes("number") ? "1" : "boolean" === Ip ? "true" : '"..."';
+       return `{ ${op.name}: ${Sp} }`
```

#### 132. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3583-L3652` → after: `L2047-L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2047-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2047-L2048) · [Before (L3583-L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3583-L3652)

```diff
-     function Np(DD, zD, wD, pD) {
-       return Math.abs(DD) > pD && Math.abs(DD / zD / wD) > 4 ? Math.sign(DD) : 0
-     }
-     var Zp = {
-       Dv: !1,
-       stopPropagation: !1,
-       Av: !1
-     };
-     const yp = {
-       forward: ["KeyW", "ArrowUp"],
-       backward: ["KeyS", "ArrowDown"],
-       left: ["KeyA", "ArrowLeft"],
-       right: ["KeyD", "ArrowRight"],
-       fire: "Mouse1",
-       "mid-fire": ["Mouse2"],
-       "alt-fire": ["Mouse3", "KeyE"],
- ... (54 more removed lines; see GitHub link above)
+     function Kc(pp) {
+       return pp.isUnion() ? pp.types.every((pp => 0 !== (pp.flags & Rp().TypeFlags.Object))) : 0 !== (pp.flags & Rp().TypeFlags.Object)
```

#### 133. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3663` → after: `L2052-L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2052-L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2052-L2074) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3663)

```diff
-       return zD * (1 - (1 - DD.ratioInFluid) ** 2)
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Op = pp.getNonNullableType(ip);
+       if (Op.isUnion()) {
+         const ip = [...new Set(Op.types.map((ip => Vc(pp, ip, cp))))];
+         return ip.length > 7 ? `${ip.slice(0,7).join(" or ")} or ...` : ip.join(" or ")
+       }
+       if (Op.isStringLiteral()) return `"${Op.value}"`;
+       if (Op.isNumberLiteral()) return `${Op.value}`;
+       if (Op.flags & Rp().TypeFlags.StringLike) return "text";
+       if (Op.flags & Rp().TypeFlags.NumberLike) return "a number";
+       if (Op.flags & Rp().TypeFlags.BooleanLike) return "true or false";
+       if (pp.isTupleType(Op)) {
+         return `[${pp.getTypeArguments(Op).map((ip=>Vc(pp,ip,cp+1))).join(", ")}]`
+       }
+       if (pp.isArrayType(Op)) {
+         if (cp > 1) return "a list";
+ ... (7 more added lines; see GitHub link above)
```

#### 134. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3667-L3771` → after: `L2077-L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2077-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2077-L2089) · [Before (L3667-L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3667-L3771)

```diff
-     function Ks(DD, zD, wD, pD) {
-       if (!zD.Uy || zD.Ug <= 0) {
-         var sD = zD.UG;
-         sD[0] = 0, sD[1] = 0, sD[2] = 0;
-         var KD = zD.Qy;
-         KD[0] = 0, KD[1] = 0, KD[2] = 0;
-         var rD = zD.Py;
-         return rD[0] = 0, rD[1] = 0, void(rD[2] = 0)
-       }
-       var LD = !!DD.MU,
-         cD = (0, mp.d)(zD);
-       if (LD && cD && DD.rollbackBody.loadStateFromCopy(zD), cD && function(DD, zD) {
-           if (!DD.Gy) return;
-           var wD = (0, mp.h)(hw(DD, zD), DD.Gy, zD.wU);
-           if (0 === wD) return;
-           Cs[1] = wD, zD.wU.translate(Cs), zD.jy(), zD.nU && zD.nU()
- ... (89 more removed lines; see GitHub link above)
+     function pO(pp, ip, cp) {
+       const Op = (ip, cp) => pp.isTypeAssignableTo(ip, cp) || pO(pp, ip, cp),
+         op = ip => pp.getTypeArguments(ip)[0];
+       if ("string | number" === pp.typeToString(ip)) return !0;
+       if (ip.isUnion() && !(ip.flags & Rp().TypeFlags.Boolean)) return ip.types.every((pp => Op(pp, cp)));
+       const Ip = pp.getNonNullableType(cp);
+       return (Ip.isUnion() ? Ip.types : [Ip]).some((cp => pp.isTupleType(cp) ? pp.isArrayType(ip) && pp.getTypeArguments(cp).every((pp => Op(op(ip), pp))) : pp.isArrayType(cp) ? pp.isArrayType(ip) && Op(op(ip), op(cp)) : cp.flags & (Rp().TypeFlags.Object | Rp().TypeFlags.Intersec … [truncated]
+         var op;
+         if (pp.getTypeOfSymbol(ip).flags & Rp().TypeFlags.Undefined) return !0;
+         const Ip = cp.getProperty(ip.name),
+           Sp = Ip ? pp.getTypeOfSymbol(Ip) : null === (op = pp.getIndexInfoOfType(cp, Rp().IndexKind.String)) || void 0 === op ? void 0 : op.type;
+         return void 0 !== Sp && Op(pp.getTypeOfSymbol(ip), Sp)
+       })) : cp.isNumberLiteral() && ip.flags === Rp().TypeFlags.Number || cp.isStringLiteral() && ip.flags === Rp().TypeFlags.String))
```

#### 135. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3775-L3788` → after: `L2092-L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2092-L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2092-L2093) · [Before (L3775-L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3775-L3788)

```diff
-     function Ls(DD, zD, wD, pD, sD) {
-       var KD = wD.resting[zD],
-         rD = pD[zD];
-       if (!wD.alwaysApplyHorizFriction || 1 !== zD) {
-         if (0 === KD) return;
-         if (KD * rD <= 0) return
-       }
-       op.copy(cs, wD.UG), cs[zD] = 0;
-       var LD = op.length(cs);
-       if (!ls(LD, 0)) {
-         var cD = Math.abs(wD.friction * DD.gravity[zD] * sD),
-           gD = LD > cD ? (LD - cD) / LD : 0;
-         wD.UG[(zD + 1) % 3] *= gD, wD.UG[(zD + 2) % 3] *= gD
-       }
+     function iO(pp, ip) {
+       return Rp().isTypeReferenceNode(pp) && Rp().isIdentifier(pp.typeName) && ip.has(pp.typeName.text) || !!Rp().forEachChild(pp, (pp => iO(pp, ip) || void 0))
```

#### 136. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3794-L3795` → after: `L2096-L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2096-L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2096-L2118) · [Before (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3794-L3795)

```diff
-     function As(DD, zD, wD, pD) {
-       gs[zD] = wD, pD[zD] = 0, Rs || (pD[0] = 0, pD[1] = 0, pD[2] = 0)
+     function cO(pp, ip) {
+       const cp = new Set,
+         Op = op => {
+           if (zc(op, pp)) {
+             var Ip, Sp, xp;
+             const Op = ip.getResolvedSignature(op),
+               Lp = null !== (Ip = null === Op || void 0 === Op ? void 0 : Op.getParameters()) && void 0 !== Ip ? Ip : [],
+               Yp = new Set((null !== (Sp = null === Op || void 0 === Op || null === (xp = Op.getDeclaration()) || void 0 === xp ? void 0 : xp.typeParameters) && void 0 !== Sp ? Sp : []).map((pp => pp.name.text)));
+             op.arguments.forEach(((ip, Op) => {
+               var Ip;
+               const Sp = null === (Ip = Lp[Op]) || void 0 === Ip ? void 0 : Ip.valueDeclaration,
+                 xp = Sp && Rp().isParameter(Sp) ? Sp : void 0;
+               if (ip.kind === Rp().SyntaxKind.NullKeyword && null !== xp && void 0 !== xp && xp.type && !iO(xp.type, Yp) && !/\b(?:null|any|unknown)\b/.test(xp.type.getText())) {
+                 const ip = !!xp.questionToken || !!xp.initializer || !!xp.dotDotDotToken,
+                   Ip = Op === op.arguments.length - 1,
+                   Sp = ip ? Ip ? "leave it out" : "give undefined instead" : "give it a value";
+ ... (7 more added lines; see GitHub link above)
```

#### 137. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3799-L3800` → after: `L2121-L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2121-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2121-L2122) · [Before (L3799-L3800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3799-L3800)

```diff
-     function fs() {
-       return Us = !0, !0
+     function OO(pp, ip) {
+       return !!pp && zc(pp, ip) && "createEnchantmentAttributesForItem" === pp.expression.name.text
```

#### 138. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3803-L3835` → after: `L2125-L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2125-L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2125-L2131) · [Before (L3803-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3803-L3835)

```diff
-     function Is(DD, zD, wD, pD) {
-       if (1 !== zD) return !0;
-       pD[zD] = 0
-     }
- 
-     function Bs(DD, zD, wD, pD, sD, KD) {
-       sD[0] = 0, sD[1] = 0, sD[2] = 0;
-       var rD = hw(DD, zD);
-       gs = sD, Rs = KD;
-       var LD = ap(rD, wD, pD, As);
-       return gs = null, LD
-     }
-     var Gs = new ep([], []),
-       hs = op.create(),
-       ns = op.create(),
-       Ms = op.create(),
- ... (17 more removed lines; see GitHub link above)
+     function oO(pp) {
+       let ip = pp;
+       for (; Rp().isParenthesizedExpression(ip.parent) || Rp().isArrayLiteralExpression(ip.parent) || Rp().isSpreadElement(ip.parent) || Rp().isSpreadAssignment(ip.parent) || Rp().isShorthandPropertyAssignment(ip.parent) || Rp().isPropertyAssignment(ip.parent) && ip.parent.initia … [truncated]
+       const {
+         parent: cp
+       } = ip;
+       return Rp().isBinaryExpression(cp) && cp.left === ip && cp.operatorToken.kind >= Rp().SyntaxKind.FirstAssignment && cp.operatorToken.kind <= Rp().SyntaxKind.LastAssignment || (Rp().isForOfStatement(cp) || Rp().isForInStatement(cp)) && cp.initializer === ip || (Rp().isPrefix … [truncated]
```

#### 139. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3843-L3851` → after: `L2134-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2134-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2134-L2142) · [Before (L3843-L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3843-L3851)

```diff
-     function Ss(DD, zD, wD, pD, sD) {
-       var KD = hw(DD, zD),
-         rD = Math.floor(wD),
-         LD = Math.floor(sD),
-         cD = pD - ds,
-         gD = Math.floor(cD);
-       if (vp(KD(rD, gD, LD), wD, cD, sD)) return !0;
-       var RD = Math.floor(pD) - 1;
-       return RD !== gD && vp(KD(rD, RD, LD), wD, RD + 1 - ds, sD)
+     function IO(pp, ip, cp, Op) {
+       var op, Ip;
+       if (!ip || "ItemAttributes" !== (null === (op = Op.getNonNullableType(ip).aliasSymbol) || void 0 === op ? void 0 : op.name)) return !1;
+       if (OO(pp, cp)) return !0;
+       const Sp = Rp().isIdentifier(pp) ? Op.getSymbolAtLocation(pp) : void 0,
+         xp = 1 === (null === Sp || void 0 === Sp || null === (Ip = Sp.declarations) || void 0 === Ip ? void 0 : Ip.length) ? Sp.declarations[0] : void 0;
+       if (!xp || !Rp().isVariableDeclaration(xp) || !OO(xp.initializer, cp)) return !1;
+       const Lp = pp => Rp().isIdentifier(pp) && oO(pp) && Op.getSymbolAtLocation(pp) === Sp || !0 === Rp().forEachChild(pp, Lp);
+       return 0 !== (xp.parent.flags & Rp().NodeFlags.Const) || !Lp(cp)
```

#### 140. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3856` → after: `L2146-L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2146-L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2146-L2158) · [Before (L3856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3856)

```diff
-       return Math.abs(DD - zD) < 1e-5
+       const cp = new Set,
+         Op = op => {
+           if (zc(op, pp)) {
+             var Ip, Sp;
+             const Op = null !== (Ip = null === (Sp = ip.getResolvedSignature(op)) || void 0 === Sp ? void 0 : Sp.getParameters()) && void 0 !== Ip ? Ip : [];
+             op.arguments.forEach(((Ip, Sp) => {
+               const xp = Op[Sp];
+               xp && IO(Ip, ip.getTypeOfSymbol(xp), pp, ip) && cp.add(`${op.expression.getText(pp)} can't take api.createEnchantmentAttributesForItem(...) as ${xp.name} (value ${Sp+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
+             }))
+           }
+           Rp().forEachChild(op, Op)
+         };
+       return Op(pp), [...cp]
```

#### 141. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3859-L3860` → after: `L2161-L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2161-L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2161-L2162) · [Before (L3859-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3859-L3860)

```diff
-     function Ws(DD, zD) {
-       for (var wD = 0; wD < 3; wD++) DD.base[wD] = zD.base[wD], DD.max[wD] = zD.max[wD], DD.vec[wD] = zD.vec[wD]
+     function xO(pp) {
+       return uc(pp).file
```

#### 142. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3862-L3894` → after: `L2164-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2164-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2164-L2168) · [Before (L3862-L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3862-L3894)

```diff
-     var Ns = function(DD) {};
-     var Zs = {
-       gravity: [0, -10, 0],
-       XU: .1
-     };
-     class ys extends tp {
-       constructor(DD, zD) {
-         zD = Object.assign({}, Zs, zD);
-         var wD = DD.KU,
-           pD = DD.Lf.Rf,
-           sD = DD.CU;
-         zD.Gy = (0, oz.e)(((DD, zD, pD) => !wD.XF(DD + sD[0], zD + sD[1], pD + sD[2])), "cell"), super(zD, ((DD, zD, pD) => wD.TU(DD + sD[0], zD + sD[1], pD + sD[2])), ((DD, zD, KD) => {
-           var rD = wD.sF(DD + sD[0], zD + sD[1], KD + sD[2]);
-           return pD[rD]
-         })), this.wasm = null, this.jF = 0, this.SF = 0
-       }
- ... (17 more removed lines; see GitHub link above)
+ 
+     function LO(pp) {
+       return {
+         from: pp.getFullStart(),
+         to: pp.getEnd()
```

#### 143. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3903-L3992` → after: `L2172-L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2172-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2172-L2214) · [Before (L3903-L3992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3903-L3992)

```diff
-     function us() {
-       this.lF = !1, this.ZF = !1, this.kF = 1, this.mF = 0, this.uF = 10, this.vF = 10, this.YF = 0, this.pY = .2
-     }
-     var vs = [nD().create(), nD().create(), nD().create()],
-       ts = nD().create();
-     class Fs {
-       constructor(DD, zD) {
-         zD = Object.assign({}, new us, zD), this.AU = DD, this.uF = +zD.uF, this.vF = +zD.vF, this.lF = !!zD.lF, this.ZF = !!zD.ZF, this.kF = zD.kF, this.mF = zD.mF, this.heading = 0, this.pitch = 0, this.nf = 0, this.pG = nD().create(), this.rY = this.AU.yJ.RY(["position"]);
-         var wD = .9 * DD.yJ.AY(DD.vW).height;
-         DD.yJ.UW(this.rY, "WE", {
-           UI: DD.vW,
-           offset: [0, wD, 0]
-         }), this.fY = zD.YF, this.pY = zD.pY, this.hY = zD.YF, this.Fv = {
-           dx: 0,
-           dy: 0
-         }, this.JY = null, this.targetX = 0, this.targetY = 0, this.cameraRotationOffset = [0, 0, 0], this.cameraPositionOffset = [0, 0, 0], this.EY = new BK(this), this.VY = nD().pp(0, 0, 1), this.TY = nD().pp(0, 0, 1), this.sZ = !1, this.bY = {
- ... (74 more removed lines; see GitHub link above)
+     function YO(pp) {
+       if (!/\buse_?prefab\s*\(/i.test(pp)) return {
+         code: pp,
+         calls: []
+       };
+       const ip = xO(pp),
+         cp = function(pp) {
+           const ip = new Map;
+           for (const cp of pp.statements)
+             if (Rp().isVariableStatement(cp))
+               for (const pp of cp.declarationList.declarations)
+                 if (Rp().isIdentifier(pp.name) && "CONFIG" === pp.name.text && pp.initializer && Rp().isObjectLiteralExpression(pp.initializer))
+                   for (const cp of pp.initializer.properties) Rp().isPropertyAssignment(cp) && (Rp().isIdentifier(cp.name) || Rp().isStringLiteral(cp.name)) && ip.set(cp.name.text, cp.initializer.getText());
+           return ip
+         }(ip),
+         Op = [],
+ ... (27 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L3994-L4032` → after: `L2216-L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2216-L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2216-L2219) · [Before (L3994-L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L3994-L4032)

```diff
-         if (!DD)
-           if (0 !== cD) {
-             var gD = function(DD, zD, wD) {
-               var pD = ip(wD),
-                 sD = lp(pD),
-                 KD = Np(zD.dx, pD, DD.wT, sD),
-                 rD = Np(zD.dy, pD, DD.Hx, sD);
-               return 0 !== KD && KD !== DD.Zm || 0 !== rD && rD !== DD.qm ? (DD.Zm = KD, DD.qm = rD, zD.dx = DD.wT * pD, zD.dy = DD.Hx * pD, !0) : (DD.Zm = DD.qm = 0, DD.wT = zD.dx / pD, DD.Hx = zD.dy / pD, !1)
-             }(this.bY, zD, wD);
-             sD && this.uH(sD, gD ? dp : jp, zD.dx, zD.dy)
-           } else Wp(this.bY), sD && this.uH(sD, bp, 0, 0);
-         var RD = .0066 * Math.PI / 180,
-           AD = zD.dx * this.uF * cD * RD,
-           UD = zD.dy * this.vF * cD * RD;
-         this.lF && (AD = -AD), this.ZF && (UD = -UD), LD && (AD += rD.aT, UD += rD.qT), (0 !== cD || LD) && (UD += this.EY.YH(UD));
-         var fD = 2 * Math.PI;
- ... (23 more removed lines; see GitHub link above)
+         op.push({
+           ...LO(xp),
+           text: ""
+         })
```

#### 145. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4034-L4043` → after: `L2221-L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2221-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2221-L2223) · [Before (L4034-L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4034-L4043)

```diff
-       hq() {
-         var DD = DK(Ys(this), this.AU.bloxd.UH(this.AU.vW));
-         this.hY > DD && (this.hY = DD);
-         var zD = this.AU.wB.Mq().Jq;
-         if (zD[0] || zD[1]) {
-           var wD = Math.max(pK(this) - .2, 0);
-           zD[1] > wD && (zD[1] = wD);
-           var pD = Math.max(sK(this) - .2, 0);
-           zD[0] > pD && (zD[0] = pD)
-         }
+       return {
+         code: Jc(pp, op),
+         calls: Op
```

#### 146. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4048-L4058` → after: `L2228-L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2228-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2228-L2242) · [Before (L4048-L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4048-L4058)

```diff
-       const zD = DD.AU.bloxd.UH(DD.AU.vW);
-       var wD = Math.max(DD.fY, DD.hY) * zD + .5;
-       return Hs(DD, DD.DH(), DD.ZH(), wD)
-     }
- 
-     function Hs(DD, zD, wD, pD) {
-       if (!LK) {
-         var sD = DD.AU.CU;
-         LK = new(ms())([0, 0, 0], nD().clone(gK)), cK = (zD, wD, pD) => DD.AU.KU.TU(zD + sD[0], wD + sD[1], pD + sD[2]), nD().scale(gK, gK, -.5)
-       }
-       return LK.setPosition(zD), LK.translate(gK), nD().scale(RK, wD, -pD), KK(DD)
+       if (!/=\s*(?:on[A-Z]\w*|tick|playerCommand)\b/.test(pp)) return pp;
+       const ip = xO(pp),
+         cp = new Set(ip.statements.flatMap((pp => Rp().isFunctionDeclaration(pp) && pp.name ? [pp.name.text] : []))),
+         Op = [];
+       for (const op of ip.statements)
+         if (Rp().isExpressionStatement(op) && Rp().isBinaryExpression(op.expression) && op.expression.operatorToken.kind === Rp().SyntaxKind.EqualsToken && Rp().isIdentifier(op.expression.left) && cp.add(op.expression.left.text), Rp().isVariableStatement(op))
+           for (const pp of op.declarationList.declarations) {
+             const ip = pp.initializer;
+             ip && Rp().isIdentifier(ip) && Hc(ip.text) && !cp.has(ip.text) && Op.push({
+               from: ip.getStart(),
+               to: ip.getEnd(),
+               text: "function () {}"
+             }), ip && Rp().isIdentifier(pp.name) && cp.add(pp.name.text)
+           }
+       return Jc(pp, Op)
```

#### 147. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4063-L4068` → after: `L2246-L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L2246-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L2246-L2261) · [Before (L4063-L4068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4063-L4068)

```diff
-       return Math.max(DD - qs, 0) / zD
-     }
- 
-     function zK(DD, zD, wD) {
-       var pD = DD.cameraPositionOffset;
-       zD[0] += pD[0] * Math.cos(wD) + pD[2] * Math.sin(wD), zD[1] += pD[1], zD[2] += pD[0] * -Math.sin(wD) + pD[2] * Math.cos(wD)
+       if (!pp.includes("api.setBlockRect(")) return pp;
+       const cp = xO(pp);
+       if (cp.statements.some((pp => {
+           var ip;
+           return Rp().isFunctionDeclaration(pp) && "fillBox" === (null === (ip = pp.name) || void 0 === ip ? void 0 : ip.text) && 3 !== pp.parameters.length
+         }))) return pp;
+       const Op = [],
+         op = pp => {
+           var Ip;
+           Rp().isFunctionDeclaration(pp) && "fillBox" === (null === (Ip = pp.name) || void 0 === Ip ? void 0 : Ip.text) || (zc(pp, cp) && "setBlockRect" === pp.expression.name.text && 3 === pp.arguments.length && !ip.includes(pp.getText()) && Op.push({
+             from: pp.expression.getStart(),
+             to: pp.expression.getEnd(),
+             text: "fillBox"
+           }), Rp().forEachChild(pp, op))
+         };
+       return op(cp), Jc(pp, Op)
```

#### 148. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4071-L4073` → after: `L5094-L5101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5094-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5094-L5101) · [Before (L4071-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4071-L4073)

```diff
-     function wK(DD, zD, wD, pD, sD) {
-       var KD = ts;
-       return nD().set(sD, 0, 0, 1), nD().pr(sD, sD, KD, DD.pG[0]), nD().gr(sD, sD, KD, DD.pG[1]), nD().GL(sD, sD, KD, DD.pG[2]), nD().pr(sD, sD, KD, wD), nD().gr(sD, sD, KD, zD), pD && (nD().pr(sD, sD, KD, DD.cameraRotationOffset[0]), nD().gr(sD, sD, KD, DD.cameraRotationOffset[1 … [truncated]
+     function yO(pp) {
+       const {
+         file: ip,
+         hasErrors: cp
+       } = uc(`(${pp})`), Op = ip.statements[0];
+       if (cp || 1 !== ip.statements.length || !Op || !Rp().isExpressionStatement(Op)) return null;
+       const op = Op.expression;
+       return Rp().isParenthesizedExpression(op) ? op.expression : op
```

#### 149. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4077-L4080` → after: `L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5105) · [Before (L4077-L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4077-L4080)

```diff
-       LK.setPosition(DD.gH()), LK.translate(gK);
-       var zD = Math.max(DD.targetY, DD.AU.wB.Mq().Jq[1]) + .5,
-         wD = DD.jH();
-       return nD().scale(RK, wD, zD), KK(DD)
+       return !!(Rp().isNumericLiteral(pp) || Rp().isStringLiteral(pp) || Rp().isNoSubstitutionTemplateLiteral(pp)) || (pp.kind === Rp().SyntaxKind.TrueKeyword || pp.kind === Rp().SyntaxKind.FalseKeyword || pp.kind === Rp().SyntaxKind.NullKeyword || (!Rp().isPrefixUnaryExpression( … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4084-L4089` → after: `L5109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5109) · [Before (L4084-L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4084-L4089)

```diff
-       const zD = DD.gH(),
-         wD = (0, as.b)(DD.heading, DD.pitch - Math.PI / 2);
-       nD().gp(zD, zD, wD, DD.AU.wB.Mq().Jq[1]), LK.setPosition(zD), LK.translate(gK);
-       var pD = Math.max(DD.targetX, DD.AU.wB.Mq().Jq[0]) + .5;
-       const sD = (0, as.b)(DD.heading + Math.PI / 2, 0);
-       return nD().scale(RK, sD, pD), KK(DD)
+       return Rp().isNumericLiteral(pp) || Rp().isPrefixUnaryExpression(pp) && Rp().isNumericLiteral(pp.operand)
```

#### 151. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4093-L4094` → after: `L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5113) · [Before (L4093-L4094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4093-L4094)

```diff
-       var zD = DD.AU.physics?.wasm;
-       return zD ? zD.Zk(LK, RK, rK) : rK()
+       return Rp().isStringLiteral(pp) || Rp().isNoSubstitutionTemplateLiteral(pp) ? pp.text : null
```

#### 152. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4097-L4126` → after: `L5117-L5133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5117-L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5117-L5133) · [Before (L4097-L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4097-L4126)

```diff
-     function rK() {
-       return os()(cK, LK, RK, fK, !0)
-     }
-     var LK, cK, gK = nD().pp(.2, .2, .2),
-       RK = nD().create(),
-       AK = nD().create(),
-       UK = nD().create(),
-       fK = () => !0;
-     var IK = Math.PI / 2 - .001;
-     class BK {
-       constructor(DD) {
-         this.Qq = DD, this.bq = 0, this.lq = 0, this.mq = 0, this.oq = 0, this.uq = performance.now(), this.Fq = performance.now(), this.Yq = 0, this.R7 = 0
-       }
-       add(DD) {
-         const zD = this.lq - this.mq,
-           wD = this.Qq.pitch + IK;
- ... (14 more removed lines; see GitHub link above)
+     function HO(pp) {
+       const ip = pp.trim();
+       if ("" === ip) return [];
+       if (ip.startsWith("{")) try {
+         const pp = JSON.parse(ip);
+         if (pp && "object" === typeof pp && !Array.isArray(pp)) return Object.entries(pp).map((pp => {
+           let [ip, cp] = pp;
+           return [ip, JSON.stringify(cp)]
+         }))
+       } catch {}
+       const cp = function(pp) {
+         const ip = yO(pp);
+         if (!ip || !Rp().isObjectLiteralExpression(ip)) return null;
+         const cp = [];
+         for (const Op of ip.properties) {
+           if (!Rp().isPropertyAssignment(Op) || !Rp().isIdentifier(Op.name) && !Rp().isStringLiteral(Op.name)) return null;
+ ... (1 more added lines; see GitHub link above)
```

#### 153. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4128-L4136` → after: `L5135-L5154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5135-L5154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5135-L5154) · [Before (L4128-L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4128-L4136)

```diff
-         return -zD
-       }
-       update(DD) {
-         const zD = performance.now(),
-           wD = Math.min(zD - this.uq, 75);
-         this.bq = Math.max(0, this.bq - this.oq * wD * DD);
-         const pD = Math.min(1, .009 * (zD - this.Fq)),
-           sD = (this.bq - this.lq) * pD;
-         Math.abs(sD) < 1e-6 ? this.lq = this.bq : (this.mq += sD, this.lq += sD), 0 === this.bq && Math.abs(this.lq) < 1e-6 && (this.Yq = 0, this.R7 = 0), this.Fq = zD
+         return cp
+       }(ip.startsWith("{") ? ip : `{${ip}}`);
+       if (cp) return cp;
+       const Op = [];
+       let op = null,
+         Ip = 0;
+       const Sp = ip.startsWith("{") ? ip.replace(/^\{/, "").replace(/\}\s*$/, "") : ip;
+       for (const Ap of Sp.split("\n")) {
+         var xp, Lp, Yp, Dp;
+         const pp = /\/\//.exec(Ap.replace(tO, (pp => " ".repeat(pp.length)))),
+           ip = (pp ? Ap.slice(0, pp.index) : Ap).trim();
+         if ("" === ip) continue;
+         if (op && Ip > 0) op[1] += `\n${ip}`;
+         else {
+           const pp = /^["']?([A-Za-z_$][\w$]*)["']?\s*[:=]\s*(.*)$/.exec(ip.replace(/^[-*\u2022]\s*/, ""));
+           if (!pp) continue;
+ ... (4 more added lines; see GitHub link above)
```

#### 154. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4139-L4141` → after: `L5161-L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5161-L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5161-L5168) · [Before (L4139-L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4139-L4141)

```diff
-     var GK = wD(37570),
-       hK = {
-         N7: ""
+ 
+     function dO(pp, ip, cp) {
+       const Op = "string" === pp.kind || "block" === pp.kind || "item" === pp.kind || "mob" === pp.kind;
+       let op = yO(ip),
+         Ip = ip;
+       var Sp;
+       if (op && UO(op) || !Op || (Sp = ip, Ip = JSON.stringify(Sp.replace(/^["'`]|["'`]$/g, "")), op = yO(Ip)), !op || !UO(op)) return {
+         problem: `${pp.key} must be a plain value like ${pp.value}, not ${ip}`
```

#### 155. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4143-L4204` → after: `L5170-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5170-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5170-L5245) · [Before (L4143-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4143-L4204)

```diff
-     class nK {
-       constructor(DD, zD, wD) {
-         zD = Object.assign({}, hK, zD), this.AU = DD, this.Q8 = zD.N7;
-         var pD = {},
-           sD = [!1],
-           KD = [!1],
-           rD = [null],
-           LD = [!1],
-           cD = [!1],
-           gD = [!1],
-           RD = [null],
-           AD = [null],
-           UD = [null],
-           fD = [!1],
-           ID = [null],
-           BD = [null],
- ... (46 more removed lines; see GitHub link above)
+       if ("number" === pp.kind && !wO(op)) return {
+         problem: `${pp.key} must be a number, like ${pp.value}`
+       };
+       if ("boolean" === pp.kind && op.kind !== Rp().SyntaxKind.TrueKeyword && op.kind !== Rp().SyntaxKind.FalseKeyword) return {
+         problem: `${pp.key} must be true or false`
+       };
+       if ("position" === pp.kind && ! function(pp) {
+           return Rp().isArrayLiteralExpression(pp) && 3 === pp.elements.length && pp.elements.every(wO)
+         }(op) && (op.kind !== Rp().SyntaxKind.NullKeyword || "null" !== pp.value)) return {
+         problem: `${pp.key} must be a position [x, y, z], like ${"null"===pp.value?"[0, 10, 0]":pp.value}`
+       };
+       if ("list" === pp.kind && !Rp().isArrayLiteralExpression(op)) return {
+         problem: `${pp.key} must be a list in [ ], like ${pp.value}`
+       };
+       if ("list" === pp.kind && pp.names && cp && Rp().isArrayLiteralExpression(op)) return function(pp, ip, cp, Op) {
+         const op = pp => pp.elements.flatMap(((ip, Op) => {
+ ... (60 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4206-L4229` → after: `L5247-L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5247-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5247-L5254) · [Before (L4206-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4206-L4229)

```diff
-           const gD = wD.L_(KD);
-           return sD.U3 >= 0 && sD.K3 && (0, GK.k)(wD, KD, wD.yI(gD)), KD
-         }, this.KF = function(DD) {
-           return sD[DD]
-         }, this.gf = function(DD) {
-           return KD[DD]
-         }, this.Dk = function(DD) {
-           return rD[DD]
-         }, this.R_ = function(DD) {
-           return LD[DD]
-         }, this.A_ = function(DD) {
-           return cD[DD]
-         }, this.U_ = function(DD) {
-           return hD[DD]
-         }, this.f_ = function(DD) {
-           return RD[DD]
- ... (8 more removed lines; see GitHub link above)
+           if (Op !== ip) return {
+             value: JSON.stringify(Op),
+             fixed: `"${ip}" is "${Op}"`
+           }
+         }
+       }
+       return {
+         value: op.getText()
```

#### 157. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4233-L4236` → after: `L5272-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5272-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5272-L5273) · [Before (L4233-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4233-L4236)

```diff
-     function MK(DD, zD, wD, pD) {
-       if (!wD) return 0;
-       var sD = zD[wD];
-       return void 0 === sD && pD && (sD = DD.E1(wD, {})), sD
+     function jO(pp) {
+       return pp.toLowerCase().replace(/[^a-z0-9]/g, "")
```

#### 158. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4240` → after: `L5277-L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5277-L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5277-L5279) · [Before (L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4240)

```diff
-       this.onLoad = DD.onLoad || null, this.wV = DD.wV || null, this.JV = DD.JV || null, this.hV = DD.hV || null, this.qE = DD.qE || null
+       var ip;
+       const cp = jO(pp);
+       return null !== (ip = eO.find((pp => jO(pp.name) === cp || jO(pp.title) === cp))) && void 0 !== ip ? ip : null
```

#### 159. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4243-L4245` → after: `L5282-L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5282-L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5282-L5284) · [Before (L4243-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4243-L4245)

```diff
-     function JK() {
-       let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       this.solid = !DD, this.cG = null, this.opaque = !DD, this.Af = !1, this.material = null, this.o3 = null, this.VU = 1, this.U1 = .5, this.onLoad = null, this.wV = null, this.JV = null, this.hV = null, this.qE = null, this.xI = null, this.gG = null, this.TI = null, this.Al =  … [truncated]
+     function mO(pp) {
+       var ip;
+       return null !== (ip = WO.find((ip => ip.name === pp))) && void 0 !== ip ? ip : null
```

#### 160. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4248-L4249` → after: `L5287-L5293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5287-L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5287-L5293) · [Before (L4248-L4249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4248-L4249)

```diff
-     function EK() {
-       this.color = null, this.p_ = !0, this.Q0 = [], this.K3 = !1, this.U3 = -1, this.I3 = null, this.B3 = null, this.r_ = null, this.AG = null
+     function RO(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+       const cp = function(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+         return 0 === pp.length ? "" : `const CONFIG = {\n${pp.map((pp=>{var cp;return`\t${pp.key}: ${null!==(cp=ip.get(pp.key))&&void 0!==cp?cp:pp.value}, // ${pp.about}`})).join("\n")}\n}`
+       }(pp.settings, ip);
+       return `${""===cp?"":`${cp}\n\n`}${pp.code.trim()}\n`
```

#### 161. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4256-L4268` → after: `L5296-L5307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5296-L5307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5296-L5307) · [Before (L4256-L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4256-L4268)

```diff
-     function PK(DD, zD) {
-       this.AU = DD, this.mesh = zD;
-       var wD = zD.iI();
-       this.Q_ = !0 === wD.P_ && !!DD.KI, this.Q_ && (0, XK.j)(zD), this.T_ = wD.b_?.(zD, this.Q_ ? TK : xK) ?? null, this.buffer = null, this.j_ = null, this.S_ = null, this.l_ = DD.iB.l_, this.XT = !1, this.N_ = null, this.y_ = null, this.k_ = 0, this.rG = null, this.m_ = !1, th … [truncated]
-         function(DD, zD) {
-           var wD = DD.material,
-             pD = [];
-           if (wD.M6 && Array.isArray(wD.M6))
-             for (var sD = 0; sD < wD.M6.length; sD++) wD.M6[sD] && pD.push(wD.M6[sD]);
-           else pD.push(wD);
-           for (sD = 0; sD < pD.length; sD++) {
-             var KD = pD[sD];
-             NK.has(KD) || ((0, XK.d)(KD, zD), NK.add(KD))
+     function qO(pp) {
+       const ip = [],
+         cp = new Set,
+         Op = pp => {
+           const op = mO(pp);
+           if (op && !cp.has(op.group)) {
+             cp.add(op.group);
+             for (const pp of null !== (Ip = op.uses) && void 0 !== Ip ? Ip : []) {
+               var Ip;
+               Op(pp)
+             }
+             ip.push(op)
```

#### 162. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4270` → after: `L5309-L5311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5309-L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5309-L5311) · [Before (L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4270)

```diff
-         }(this.mesh, DD.wB), this.AU.wB.pW(this.mesh), this.AU.emit("addingTerrainMesh", this.mesh)
+         };
+       for (const op of pp) Op(op);
+       return ip
```

#### 163. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4273-L4293` → after: `L5314-L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5314-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5314-L5342) · [Before (L4273-L4293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4273-L4293)

```diff
-     function CK(DD, zD, wD) {
-       return (null === zD || zD.data.length < 2 * DD.k_) && (zD = {
-         data: new Uint32Array(Math.max(16, 4 * DD.k_)),
-         count: 0
-       }), zD.count = (0, VK.G)(DD.N_, DD.y_, DD.k_, wD, VK.e, zD.data), zD
-     }
-     PK.prototype.dispose = function() {
-       this.MI || (this.l_.o9.delete(this), (0, VK.D)(this.mesh, null), this.XT && (0, VK.z)(this.mesh, void 0), this.XT = !1, this.mesh.A4 = 0, this.O4(0), this.AU.emit("removingTerrainMesh", this.mesh), this.AU.wB.W4(this.mesh, !1), this.mesh = null, this.q_ = null, this.K9 = nu … [truncated]
-     }, PK.prototype.o4 = function(DD, zD, wD, pD, sD, KD, rD) {
-       ! function(DD) {
-         if (DD.count < DD.bA) return;
-         var zD = Math.max(8, 2 * DD.bA);
-         DD.O4(zD)
-       }(this);
-       var LD = this.count << 4;
-       this.K9[this.count] = zD, this.q_.set(zD, LD);
- ... (5 more removed lines; see GitHub link above)
+     function MO(pp, ip) {
+       const cp = pp => pp.replace(/\s+/g, ""),
+         Op = new RegExp(`function ${ip.name}\\s*\\([^)]*\\)\\s*\\{`).exec(pp);
+       return !!Op && cp(ip.code).includes(cp(pp.slice(Op.index, Op.index + 200)).slice(0, 60))
+     }
+ 
+     function CO(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
+       if (!Zc(pp)) return {
+         text: pp,
+         added: []
+       };
+       let cp = pp;
+       const Op = [];
+       for (let op = 0; op < 4; op++) {
+         const pp = Gc(cp),
+ ... (13 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4295-L4310` → after: `L5344-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5344-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5344-L5346) · [Before (L4295-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4295-L4310)

```diff
-       this.count++, this.mI = !0
-     }, PK.prototype.E_ = function(DD, zD) {
-       return this.Q_ ? (zD | this.AU.Lf.aI[DD] << 16) >>> 0 : zD
-     }, PK.prototype.B5 = function(DD, zD) {
-       var wD = this.q_.get(zD);
-       if (!(wD >= 0)) throw "tried to remove object instance not in storage";
-       this.q_.delete(zD);
-       var pD = wD >> 4,
-         sD = this.count - 1;
-       if (pD !== sD) {
-         var KD = sD << 4;
-         ! function(DD, zD, wD, pD) {
-           for (var sD = 0; sD < 16; sD++) wD[pD + sD] = DD[zD + sD]
-         }(this.buffer, KD, this.buffer, wD), this.j_[pD] = this.j_[sD], this.XT && (this.S_[pD] = this.S_[sD]);
-         var rD = this.K9[sD];
-         this.q_.set(rD, wD), this.K9[pD] = rD
+       return {
+         text: cp,
+         added: [...new Set(Op)]
```

#### 165. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4312-L4333` → after: `L5348-L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5348-L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5348-L5395) · [Before (L4312-L4333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4312-L4333)

```diff
-       this.count--, this.mI = !0,
-         function(DD) {
-           if (DD.count > .4 * DD.bA) return;
-           if (DD.bA < 100) return;
-           DD.O4(Math.round(DD.bA / 2)), DD.K9.length = Math.min(DD.K9.length, DD.bA)
-         }(this)
-     }, PK.prototype.i5 = function() {
-       var DD;
-       this.mI ? (this.XT && (8 * WK(DD = this) > SK.length && (function(DD) {
-         for (var zD = DD.count, wD = DD.S_, pD = 0; pD < zD; pD++) bK[wD[pD]]++;
-         iK = DD.l_.keys, SK.sort(lK), iK = null;
-         for (var sD = 0, KD = 0; KD < SK.length; KD++) {
-           var rD = bK[SK[KD]];
-           bK[SK[KD]] = sD, sD += rD
-         }
-         for (var LD = DD.buffer.slice(0, zD << 4), cD = DD.j_.slice(0, zD), gD = wD.slice(0, zD), RD = DD.K9.slice(0, zD), AD = 0; AD < zD; AD++) {
- ... (6 more removed lines; see GitHub link above)
+     }
+ 
+     function EO(pp, ip) {
+       const cp = [...Gc(ip.code)].filter((pp => "CONFIG" !== pp && !Hc(pp)));
+       if (0 === cp.length) return pp.includes(ip.code.trim().slice(0, 80));
+       const Op = Zc(pp) ? Gc(pp) : new Set;
+       return 2 * cp.filter((pp => Op.has(pp))).length >= cp.length
+     }
+ 
+     function XO(pp) {
+       const ip = /^const CONFIG = \{\n([\s\S]*?)\n\}/m.exec(pp.code);
+       return ip ? ip[1].split("\n").flatMap((pp => {
+         const ip = /^\t(\w+): (.+?), \/\/ (.*)$/.exec(pp);
+         if (!ip) return [];
+         const [, cp, Op, op] = ip;
+         return [{
+ ... (32 more added lines; see GitHub link above)
```

#### 166. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4335-L4348` → after: `L5397-L5425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5397-L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5397-L5425) · [Before (L4335-L4348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4335-L4348)

```diff
-         }
-         for (var hD = 0; hD < SK.length; hD++) bK[SK[hD]] = 0
-       }(DD), WK(DD)), (0, VK.D)(this.mesh, null), this.m_ = !1, null !== this.e_ && (this.o_ = this.e_, this.e_ = null, (0, VK.z)(this.mesh, null)), this.v_ = !0), this.mesh.A4 = this.count, this.T_ ? (this.T_.Z5(this.count), this.T_.y5()) : (this.mesh.o5("matrix"), this.mesh.o5( … [truncated]
-     }, PK.prototype.t5 = function(DD, zD, wD) {
-       if (0 !== this.k_ && ((0, VK.n)() ? (this.rG = CK(this, this.rG, DD), this.m_ = this.rG.count >= 0, (0, VK.D)(this.mesh, this.m_ ? this.rG : null)) : this.m_ && (this.m_ = !1, (0, VK.D)(this.mesh, null)), wD || this.v_)) {
-         this.v_ = !1;
-         var pD = CK(this, this.o_, zD),
-           sD = this.e_;
-         pD.count < 0 ? (this.o_ = pD, null !== sD && (this.e_ = null, (0, VK.z)(this.mesh, null))) : null !== sD && function(DD, zD) {
-           if (DD.count !== zD.count) return !1;
-           for (var wD = 0; wD < 2 * DD.count; wD++)
-             if (DD.data[wD] !== zD.data[wD]) return !1;
-           return !0
-         }(sD, pD) ? this.o_ = pD : (this.o_ = sD, this.e_ = pD, (0, VK.z)(this.mesh, pD))
+           return {
+             values: Op,
+             problems: op,
+             fixed: Ip
+           }
+         }({
+           ...ip,
+           settings: [...ip.settings, ...op]
+         }, cp, Op),
+         Sp = op.filter((pp => Ip.values.has(pp.key))),
+         xp = gc(pp, RO({
+           ...ip,
+           settings: [...ip.settings, ...Sp]
+         }, Ip.values), {
+           owner: ip.name,
+           overrides: new Set(Ip.values.keys()),
+ ... (13 more added lines; see GitHub link above)
```

#### 167. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4350-L4365` → after: `L5427-L5462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5427-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5427-L5462) · [Before (L4350-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4350-L4365)

```diff
-     }, PK.prototype.O4 = function() {
-       let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
-       if (this.bA = DD, 0 === DD) this.buffer = null, this.j_ = null, this.S_ = null;
-       else {
-         var zD = new Float32Array(16 * this.bA);
-         if (this.buffer)
-           for (var wD = Math.min(this.buffer.length, zD.length), pD = 0; pD < wD; pD++) zD[pD] = this.buffer[pD];
-         this.buffer = zD;
-         var sD = this.Q_ ? new Uint32Array(this.bA) : new Float32Array(this.bA);
-         if (this.j_) {
-           var KD = Math.min(this.j_.length, sD.length);
-           for (pD = 0; pD < KD; pD++) sD[pD] = this.j_[pD]
-         }
-         if (this.j_ = sD, this.XT) {
-           var rD = new Uint16Array(this.bA);
-           this.S_ && rD.set(this.S_.subarray(0, Math.min(this.S_.length, rD.length))), this.S_ = rD
+     }
+ 
+     function JO(pp) {
+       return `- ${pp.name}: ${pp.summary}. Settings: ${pp.settings.map((pp=>pp.key)).join(", ")}`
+     }
+ 
+     function BO(pp) {
+       var ip;
+       const cp = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.trim().toLowerCase()) && void 0 !== ip ? ip : "",
+         Op = [...uO.keys()].find((pp => pp === cp)),
+         op = Op ? eO.filter((pp => pp.category === Op)) : eO,
+         Ip = Op ? WO.filter((pp => pp.category === Op)) : [];
+       return `${Op?`Prefabs for ${uO.get(Op)}:`:""===cp||"all"===cp?"Every prefab:":`There is no category ${pp}. Every prefab:`}\n${op.length>0?op.map(JO).join("\n"):"(none yet)"}${Ip.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${Ip.map((p … [truncated]
+     }
+ 
+     function NO(pp, ip) {
+ ... (20 more added lines; see GitHub link above)
```

#### 168. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4368-L4386` → after: `L5520-L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5520-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5520-L5522) · [Before (L4368-L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4368-L4386)

```diff
-       const LD = !1;
-       this.T_ && 0 === DD ? this.T_.release() : this.T_ ? this.T_.attach(this.buffer, this.j_) : (this.mesh.f6("matrix", this.buffer, 16, LD), this.mesh.f6("aPackedLightLevels", this.j_, 1, LD)), this.i5()
-     };
-     var xK = [{
-         name: "aPackedLightLevels",
-         offset: 0,
-         size: 1
-       }],
-       TK = [{
-         name: "aPackedLightLevels",
-         offset: 0,
-         size: 1,
-         type: 5125
-       }],
-       bK = new Uint32Array(VK.b),
-       jK = new Uint32Array(VK.b),
- ... (3 more removed lines; see GitHub link above)
+     }
+     const hO = /^\s*(?:\.\.\.|\u2026)\s*$/,
+       aO = /^[ \t]*(?:\/\/|\/\*)[ \t]*(?:(?:\.\.\.|\u2026)[ \t]*(?:\*\/)?[ \t]*$|(?:\.\.\.|\u2026)?[ \t]*(?:existing code|rest of (?:the |your )?(?:code|file)))/im;
```

#### 169. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4389` → after: `L5525-L5527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5525-L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5525-L5527) · [Before (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4389)

```diff
-       return iK[DD] - iK[zD]
+       if (hO.test(pp)) return !0;
+       const cp = new Set(ip.split("\n").map((pp => pp.trim())));
+       return pp.split("\n").some((pp => aO.test(pp) && !cp.has(pp.trim())))
```

#### 170. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4393-L4406` → after: `L5531-L5559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5531-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5531-L5559) · [Before (L4393-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4393-L4406)

```diff
-       var zD = DD.count,
-         wD = DD.S_,
-         pD = DD.l_.keys;
-       if (null === DD.N_ || DD.N_.length < zD) {
-         var sD = Math.max(8, DD.bA);
-         DD.N_ = new Uint16Array(sD), DD.y_ = new Uint32Array(sD)
-       }
-       var KD = DD.N_,
-         rD = DD.y_,
-         LD = ++dK;
-       SK.length = 0;
-       for (var cD = 0, gD = 0, RD = -1 / 0, AD = 0; AD < zD; AD++) {
-         var UD = wD[AD];
-         cD > 0 && KD[cD - 1] === UD ? rD[cD - 1] = AD + 1 : (jK[UD] === LD ? gD++ : (jK[UD] = LD, SK.push(UD), pD[UD] < RD ? gD++ : RD = pD[UD]), KD[cD] = UD, rD[cD] = AD + 1, cD++)
+       return pp.split("\n").map((pp => pp.trim())).filter((pp => "" !== pp && !/^(?:\/\/|\/\*|\*)/.test(pp)))
+     }
+     const gO = /```(?:js|javascript|ts|typescript)?\n([\s\S]*?)```/g,
+       GO = String.raw`on[A-Z]\w*|tick|playerCommand`,
+       rO = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${GO})\s*\(|(?:${GO})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
+       ZO = new RegExp(`^(?:${GO})$`),
+       zO = new RegExp(String.raw`^(${GO})(\s*\([^()\n]*\)\s*\{)`, "gm"),
+       sO = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${GO})\b|\buse_?prefab\s*\(`, "i");
+ 
+     function KO(pp) {
+       return pp.replace(/^\s*```[\w-]*[^\n]*\n/, "").replace(/\n?```\s*$/, "")
+     }
+ 
+     function VO(pp) {
+       return KO(pp).replace(/\s*$/, "\n")
+     }
+ ... (13 more added lines; see GitHub link above)
```

#### 171. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4419-L4425` → after: `L5564-L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5564-L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5564-L5582) · [Before (L4419-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4419-L4425)

```diff
-       this.VJ = (0, MD.r)(DD.wB, "objectMeshRoot");
-       var zD = [0, 0, 0],
-         wD = !1,
-         pD = {
-           position: new FD.WI,
-           rotation: new FD.WI,
-           rc: new FD.WI
+       return pp.trim().replace(/^\.?\//, "")
+     }
+ 
+     function co(pp) {
+       return pp.replace(zO, "function $1$2")
+     }
+ 
+     function Oo(pp) {
+       return pp.replace(/\bif\s*\(\s*(\/\*(?:(?!\*\/)[^])*\*\/)\s*\)/g, "if (false $1)")
+     }
+ 
+     function oo(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
+         Ip = arguments.length > 5 ? arguments[5] : void 0,
+         Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "offer",
+         xp = arguments.length > 7 ? arguments[7] : void 0,
+ ... (3 more added lines; see GitHub link above)
```

#### 172. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4428-L4436` → after: `L5586-L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5586-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5586-L5605) · [Before (L4428-L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4428-L4436)

```diff
-       this.zDD = [], this.l_ = new VK.f;
-       var KD = {},
-         rD = DD.wB.oB.iI();
-       "SI" in rD && rD.SI.add((() => {
-         for (var DD in KD) KD[DD].mI = !0;
-         this.xV()
-       }));
-       var LD = new Map,
-         cD = new Map,
+       let Pp;
+       const Wp = (pp, ip, cp, Op) => {
+         Ap.push({
+           tool: pp,
+           path: ip,
+           reason: cp,
+           closest: null,
+           functions: [],
+           ...Op,
+           ...Pp ? {
+             call: Pp
+           } : {}
+         })
+       };
+       let yp = pp;
+       const wp = Object.keys(cp).some(Up.e),
+ ... (4 more added lines; see GitHub link above)
```

#### 173. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4440-L4441` → after: `L5637-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5637-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5637-L5650) · [Before (L4440-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4440-L4441)

```diff
-         UD = (DD, zD) => {
-           LD.set(DD, null), cD.set(DD, zD)
+         fp = (pp, ip, cp) => {
+           var Op;
+           const op = function(pp) {
+               const ip = pp.replace(/\s+/g, " ").trim();
+               if (ip.length <= 80) return ip;
+               const cp = ip.slice(0, 80);
+               return `${cp.slice(0,Math.max(cp.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
+             }(null !== ip && void 0 !== ip ? ip : ""),
+             Ip = null !== (Op = Xp.get(pp)) && void 0 !== Op ? Op : [];
+           var Sp;
+           ("" === op || Ip.includes(op) || Xp.set(pp, [...Ip, op]), "" !== op) && Np.set(pp, [...null !== (Sp = Np.get(pp)) && void 0 !== Sp ? Sp : [], {
+             why: op,
+             code: cp
+           }])
```

#### 174. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4443-L4454` → after: `L5652-L5665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5652-L5665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5652-L5665) · [Before (L4443-L4454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4443-L4454)

```diff
-         fD = DD => (0, xD.f)(DD) ? DD.parts.geometry : DD.geometry,
-         ID = zD => {
-           if (KD[zD]) return KD[zD];
-           var wD = DD.Lf.n_[zD];
-           if ("function" === typeof wD) {
-             var pD = wD;
-             if (RD.has(pD)) return null;
-             if (!LD.has(pD)) try {
-               if ((wD = pD()) instanceof Promise) return BD(pD, wD), null;
-               LD.set(pD, wD)
-             } catch (AD) {
-               UD(pD, AD)
+         bp = new Set,
+         hp = [],
+         ap = new Map,
+         np = [];
+       let Fp = null;
+       const Gp = [];
+       let rp = [];
+       const sp = (pp, ip) => void 0 !== Ip && !vp(pp) && (null === pp || io(pp) !== Ip) && rO.test(ip),
+         Kp = (pp, ip, cp, Op) => {
+           var op, Ip;
+           const Sp = function(pp, ip, cp, Op) {
+             const op = kO(ip);
+             return op ? QO(pp, op, cp, Op) : {
+               error: `There is no prefab called ${ip}. The prefabs are: ${eO.map((pp=>pp.name)).join(", ")}.`
```

#### 175. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4456-L4462` → after: `L5667-L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5667-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5667-L5680) · [Before (L4456-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4456-L4462)

```diff
-             if (!(wD = LD.get(pD))) return gD.has(zD) || (gD.add(zD), DD.PB(`Building the model of block ${zD} failed`, cD.get(pD))), null
-           }
-           for (var sD in KD) {
-             var rD = KD[sD].mesh;
-             if (rD === wD || fD(rD) === fD(wD)) return KD[zD] = KD[sD]
-           }
-           return this.zDD.includes(wD) || this.zDD.push(wD), wD.metadata || (wD.metadata = {}), wD.metadata[Vp.m] = !0, KD[zD] = new PK(DD, wD)
+           }(null !== (op = Yp[pp]) && void 0 !== op ? op : "", ip, cp, Lp);
+           return "error" in Sp ? (Wp("use_prefab", pp, "prefab", {
+             detail: Sp.error
+           }), !1) : (Yp[pp] = Sp.text, Dp.add(pp), ap.set(pp, {
+             prefab: Sp.prefab,
+             settings: cp
+           }), fp(pp, null !== Op && void 0 !== Op ? Op : Sp.prefab.title, Sp.text), hp.push({
+             name: Sp.prefab.name,
+             title: Sp.prefab.title,
+             path: pp,
+             problems: Sp.problems,
+             fixed: Sp.fixed,
+             setup: null !== (Ip = Sp.prefab.setup) && void 0 !== Ip ? Ip : null
+           }), !0)
```

#### 176. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4464-L4480` → after: `L5682-L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5682-L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5682-L5707) · [Before (L4464-L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4464-L4480)

```diff
-         BD = async (zD, pD) => {
-           var sD = [];
-           RD.set(zD, sD);
-           var KD = (AD.get(zD) || 0) + 1;
-           AD.set(zD, KD);
-           try {
-             LD.set(zD, await pD)
-           } catch (GD) {
-             KD < 3 ? await new Promise((DD => setTimeout(DD, 2e3))) : UD(zD, GD)
-           }
-           RD.delete(zD), wD = !0;
-           var rD = null;
-           for (var [cD, gD, fD, ID, BD] of sD)
-             if (cD.pDD && cD.get(fD, ID, BD) === gD) try {
-               this.XV(cD, gD, fD, ID, BD)
-             } catch (GD) {
- ... (1 more removed lines; see GitHub link above)
+         ii = (pp, ip, cp) => {
+           const Op = YO(ip);
+           if (0 === Op.calls.length) return !1;
+           Yp[pp] = Op.code, Dp.add(pp);
+           for (const op of Op.calls) Kp(pp, op.name, op.settings, cp);
+           return fp(pp, cp, Op.code), !0
+         },
+         oi = pp => {
+           const ip = di(co(VO(pp)), op);
+           qp.push(ip.code), Cp.push(...ip.renames)
+         },
+         Ii = vc(pp, ip),
+         xi = new Map;
+       for (const Up of Ii) {
+         var Li, Yi, Di, Ai;
+         const pp = null !== (Li = xi.get(Up.name)) && void 0 !== Li ? Li : 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 177. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4482-L4537` → after: `L5709-L5816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5709-L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5709-L5816) · [Before (L4482-L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4482-L4537)

```diff
-           rD && DD.PB("Placing the blocks of a built model failed", rD)
-         }, GD = [], hD = 0;
-       this.WB = function(DD) {
-         DD.pDD = new Map;
-         var zD = DD.size;
-         DD.sDD = GD.length > 0 ? GD.pop() : zD * zD * zD * hD++
-       }, this.XV = function(wD, KD, rD, LD, cD) {
-         var gD = wD.size,
-           AD = rD * gD * gD + LD * gD + cD,
-           UD = wD.sDD + AD,
-           fD = wD.pDD.get(AD) || 0;
-         if (fD !== KD) {
-           if (fD > 0) ID(fD).B5(wD, UD);
-           if (KD > 0) {
-             var BD = ID(KD);
-             if (!BD) return RD.get(DD.Lf.n_[KD])?.push([wD, KD, rD, LD, cD]), void wD.pDD.delete(AD);
- ... (40 more removed lines; see GitHub link above)
+           } : Up,
+           {
+             path: op,
+             content: Sp,
+             search: xp,
+             replace: Ap,
+             code: wp
+           } = ip.args,
+           vp = qi(ip.name),
+           ep = `${ip.name}\n${JSON.stringify({...ip.args,why:void 0})}`,
+           jp = bp.has(ep);
+         if (vp.annotations.idempotentHint && jp) yp = yp.replace(ip.source, "");
+         else {
+           if (bp.add(ep), Ri(ip.name)) {
+             const pp = Object.fromEntries(Object.entries(ip.args).flatMap((pp => {
+               let [ip, cp] = pp;
+ ... (92 more added lines; see GitHub link above)
```

#### 178. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4573-L4597` → after: `L5822-L5834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5822-L5834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5822-L5834) · [Before (L4573-L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4573-L4597)

```diff
-       getMode() {
-         return this.mode
-       }
-       textureLayers() {
-         return this.options.textures.layers
-       }
-       isRunning() {
-         return vK.c.some((DD => 0 !== this.defineFor(DD)))
-       }
-       readsSceneDepth() {
-         return vK.c.some((DD => {
-           var zD;
-           return !0 === (null === (zD = (0, tK.f)(this.defineFor(DD))) || void 0 === zD ? void 0 : zD.sceneDepth)
-         }))
-       }
-       sunShadowReach() {
- ... (9 more removed lines; see GitHub link above)
+       if (Pp = void 0, yp = Qi(tc(yp), Ii.length > 0), 0 === Ii.length) {
+         var mi, Mi;
+         const ip = [...pp.matchAll(gO)],
+           cp = 1 === ip.length ? ip[0][1] : null,
+           op = null !== (mi = null !== Ip && void 0 !== Ip ? Ip : Op) && void 0 !== mi ? mi : "index.js",
+           Sp = null !== (Mi = Yp[op]) && void 0 !== Mi ? Mi : "";
+         if (null !== cp && sp(null, cp)) oi(cp), yp = yp.replace(ip[0][0], "");
+         else if (null !== cp && sO.test(cp) && !nO(cp, Sp) && ! function(pp, ip) {
+             const cp = FO(ip);
+             return cp.length >= 10 && 2 * Bp(FO(pp), cp) < cp.length
+           }(cp, Sp)) {
+           const pp = DO(VO(cp));
+           Hp(op) && ii(op, pp, void 0) || (Yp[op] = pp, Dp.add(op)), yp = yp.replace(ip[0][0], "")
```

#### 179. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4600` → after: `L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5837) · [Before (L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4600)

```diff
-       showsCircleShadows() {
+       for (const Up of Dp) {
```

#### 180. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4602-L4613` → after: `L5839-L5845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5839-L5845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5839-L5845) · [Before (L4602-L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4602-L4613)

```diff
-         return !(!this.options.keepCircleShadows && null !== (DD = this.AU.wB.pB) && void 0 !== DD && DD.castsEntitySunShadows) || !this.sunShadowReach().sunShadow
-       }
-       ZB() {
-         return this.AU.wB.ZB
-       }
-       setMode(DD) {
-         this.mode = DD;
-         let zD = !1;
-         for (const wD of vK.c) {
-           const pD = (0, tK.j)(this.options.variants, DD, wD),
-             sD = pD ? (0, tK.m)(pD) : 0;
-           this.defines.get(wD) !== sD && (this.defines.set(wD, sD), zD = !0)
+         if (Hp(Up)) {
+           var Ei;
+           const pp = Object.values(Yp).some((pp => /\brequire\s*\(/.test(pp)));
+           Yp[Up] = AO(DO(pp ? Yp[Up] : Yp[Up].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (Ei = cp[Up]) && void 0 !== Ei ? Ei : "");
+           const ip = new Set(Object.keys(Yp).filter((pp => pp !== Up && Hp(pp))).flatMap((pp => [...Gc(Yp[pp])]))),
+             Op = CO(Yp[Up], ip);
+           Yp[Up] = Op.text, np.push(...Op.added)
```

#### 181. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4615-L4625` → after: `L5847-L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5847-L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5847-L5848) · [Before (L4615-L4625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4615-L4625)

```diff
-         return zD
-       }
-       defineFor(DD) {
-         var zD;
-         return null !== (zD = this.defines.get(DD)) && void 0 !== zD ? zD : 0
-       }
-       seconds() {
-         return performance.now() / 1e3
-       }
-       renderOffset() {
-         return this.AU.CU
+         const pp = di(Oo(co(Yp[Up])), Hp(Up) ? op : [], null !== (Ci = cp[Up]) && void 0 !== Ci ? Ci : "");
+         Yp[Up] = pp.code, Cp.push(...pp.renames)
```

#### 182. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4627-L4633` → after: `L5850-L5853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5850-L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5850-L5853) · [Before (L4627-L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4627-L4633)

```diff
-       gDD() {
-         var DD;
-         return null !== (DD = this.AU.wB.gDD) && void 0 !== DD ? DD : Dr
-       }
-       shadowDirection() {
-         const DD = (0, FK.s)(this.gDD());
-         return [-DD[0], -DD[1], -DD[2]]
+       for (const Up of hp) {
+         const pp = Up.problems.length > 0 ? ` Kept as it was: ${Up.problems.join("; ")}.` : "",
+           ip = Up.fixed.length > 0 ? ` Names changed to real ones: ${Up.fixed.join(", ")}.` : "";
+         yp += `\n\nThis uses the ready-made ${Up.title}.${ip}${pp}${Up.setup?` ${Up.setup}`:""}`
```

#### 183. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4635` → after: `L5855-L5861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5855-L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5855-L5861) · [Before (L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4635)

```diff
-       async checkCompilation() {
+       for (const {
+           from: Up,
+           to: Ep
+         }
+         of Cp) yp += `\n\nI renamed \`${Up}\` to \`${Ep}\`, the name World Code calls.`;
+       const Xi = [];
+       for (const Up of Dp) {
```

#### 184. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4637-L4655` → after: `L5863-L5876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5863-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5863-L5876) · [Before (L4637-L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4637-L4655)

```diff
-         let zD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
-         if (zD()) return {
-           status: "sw"
-         };
-         const {
-           wB: wD
-         } = this.AU, pD = null === (DD = wD.pB) || void 0 === DD ? void 0 : DD.terrain;
-         return null !== pD && void 0 !== pD && pD.checkShaderPack ? pD.checkShaderPack({
-           materials: this.AU.RDD.allMaterials.filter((DD => !(0, uK.j)(DD))),
-           runtime: this,
-           lighting: wD.ZB,
-           dirLightCount: (0, oK.z)(wD.model.view),
-           isCancelled: zD
-         }) : {
-           status: "failed",
-           failure: {
- ... (3 more removed lines; see GitHub link above)
+         const pp = null !== (li = cp[Up]) && void 0 !== li ? li : "";
+         if (Yp[Up] !== pp) {
+           const ip = Xp.get(Up);
+           Xi.push(ip ? {
+             path: Up,
+             before: pp,
+             after: Yp[Up],
+             why: ip,
+             parts: Np.get(Up)
+           } : {
+             path: Up,
+             before: pp,
+             after: Yp[Up]
+           })
```

#### 185. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4659-L4675` → after: `L5897-L5942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5897-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5897-L5942) · [Before (L4659-L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4659-L4675)

```diff
-     var wr = {
-       debug: !1,
-       silent: !1,
-       UDD: !1,
-       eG: 1.8,
-       mG: .6,
-       fDD: [0, 10, 0],
-       oG: !1,
-       IDD: !0,
-       Rl: 30,
-       yN: 0,
-       aG: 10,
-       aN: !0,
-       BDD: !0,
-       vN: !1,
-       GDD: !1,
- ... (1 more removed lines; see GitHub link above)
+ 
+     function Io(pp, ip) {
+       const cp = "" === pp ? [] : pp.replace(/\n$/, "").split("\n"),
+         Op = "" === ip ? [] : ip.replace(/\n$/, "").split("\n");
+       let op = 0;
+       for (; op < cp.length && op < Op.length && cp[op] === Op[op];) op++;
+       let Ip = cp.length,
+         Sp = Op.length;
+       for (; Ip > op && Sp > op && cp[Ip - 1] === Op[Sp - 1];) Ip--, Sp--;
+       const xp = cp.slice(op, Ip),
+         Lp = Op.slice(op, Sp),
+         Yp = Array.from({
+           length: xp.length + 1
+         }, (() => new Array(Lp.length + 1).fill(0)));
+       for (let Wp = xp.length - 1; Wp >= 0; Wp--)
+         for (let pp = Lp.length - 1; pp >= 0; pp--) Yp[Wp][pp] = xp[Wp] === Lp[pp] ? Yp[Wp + 1][pp + 1] + 1 : Math.max(Yp[Wp + 1][pp], Yp[Wp][pp + 1]);
+ ... (30 more added lines; see GitHub link above)
```

#### 186. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4677-L4893` → after: `L5944-L5946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5944-L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5944-L5946) · [Before (L4677-L4893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4677-L4893)

```diff
-     class pr extends bz {
-       constructor() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         if (super(), DD = Object.assign({}, wr, DD), this.version = "0.33.0", !DD.silent) {
-           var zD = DD.debug ? " (debug)" : "";
-           console.log(`noa-engine v${this.version}${zD}`)
-         }
-         this.HJ = !1, this.MDD = DD.hDD, this.CU = [0, 0, 0], this.ODD = 0, this.JDD = 0, this.EDD = "default", this.QDD = 1, this.container = new Cz(this, DD), this.KU = new Pp.c(this, DD);
-         try {
-           this.wB = new Vp.e(this, DD, this.container.canvas)
-         } catch (rD) {
-           throw this.YC(!0), this.container.pE.RZ = () => {}, rD
-         }
-         this.Rl = this.container.pE.Rl, this.yN = this.container.pE.yN, this.KI = DD.KI ? new zr(this, DD.KI) : null, this.RDD = new uK.c(this), this.inputs = new kp(this, DD, this.container.element), this.Lf = new nK(this, DD, this.RDD), this.KU.aE = DD.XDD ? hp.create(DD.XDD.wa … [truncated]
-           this.PB(DD.message, DD)
-         })) : null, DD.XDD && (this.KU.zB = fp.c.wasm(this.KU.PDD, DD.XDD.wasm, (DD => {
- ... (201 more removed lines; see GitHub link above)
+ 
+     function Yo(pp, ip, cp) {
+       return Oc[pp].formatCall(ip, cp)
```

#### 187. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4896-L4909` → after: `L5949-L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5949-L5950) · [Before (L4896-L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4896-L4909)

```diff
-     function sr() {
-       var DD = {
-         engine: null,
-         test: null,
-         origin: null,
-         direction: null,
-         maxDistance: 0,
-         offset: null,
-         aZ: null,
-         uZ: null,
-         HZ: null,
-         Fy: () => rr(DD.engine, DD.test, DD.origin, DD.direction, DD.maxDistance, DD.aZ, DD.uZ, DD.HZ)
-       };
-       return DD
+     function Do(pp, ip, cp, Op) {
+       return Oc[cp].declareTools(pp, ip, Op)
```

#### 188. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4911-L4963` → after: `L5952-L5954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5952-L5954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5952-L5954) · [Before (L4911-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4911-L4963)

```diff
-     var Kr = sr();
- 
-     function rr(DD, zD, wD, pD, sD, KD, rD, LD) {
-       var cD = DD.KU,
-         gD = DD.CU,
-         RD = zD ? (wD, pD, sD) => {
-           var KD = cD.sF(wD + gD[0], pD + gD[1], sD + gD[2]);
-           return zD(KD, wD + gD[0], pD + gD[1], sD + gD[2]) && (DD.Lf.Dk(KD) ?? !0)
-         } : (zD, wD, pD) => {
-           var sD = cD.sF(zD + gD[0], wD + gD[1], pD + gD[2]);
-           return DD.Lf.gf(sD)
-         };
-       return function(DD, zD, wD, pD, sD, KD, rD) {
-         const LD = Math.sqrt(wD[0] ** 2 + wD[1] ** 2 + wD[2] ** 2),
-           cD = [wD[0] / LD, wD[1] / LD, wD[2] / LD];
-         let gD = 1 / 0,
- ... (37 more removed lines; see GitHub link above)
+ 
+     function Ao(pp) {
+       return Oc[pp].callStyle
```

#### 189. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4966-L4975` → after: `L5957-L5965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5957-L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5957-L5965) · [Before (L4966-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4966-L4975)

```diff
-     function Lr(DD, zD) {
-       if (null === zD) {
-         const zD = 0 !== DD[0];
-         return DD[0] = 0, zD
-       }
-       const {
-         position: wD,
-         normal: pD
-       } = zD, sD = 1 !== DD[0] || DD[1] !== wD[0] || DD[2] !== wD[1] || DD[3] !== wD[2] || DD[4] !== zD.W8 || DD[5] !== pD[0] || DD[6] !== pD[1] || DD[7] !== pD[2];
-       return DD[0] = 1, DD[1] = wD[0], DD[2] = wD[1], DD[3] = wD[2], DD[4] = zD.W8, DD[5] = pD[0], DD[6] = pD[1], DD[7] = pD[2], sD
+     function Po(pp) {
+       const ip = null === pp.path ? pp.tool : `${pp.tool} ${pp.path}`;
+       var cp;
+       if ("prefab" === pp.reason) return `${ip}: ${null!==(cp=pp.detail)&&void 0!==cp?cp:"the prefab couldn't go in."} Nothing changed.`;
+       if ("missingArgs" === pp.reason) return `${ip}: the call was missing an argument it needs, so nothing changed.`;
+       if ("placeholder" === pp.reason) return "write_file" === pp.tool ? `${ip}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${ip}: the code had a line standing in for code left out ("// ... exi … [truncated]
+       if ("unread" === pp.reason) return `${ip}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==pp.path&&(0,Up.e)(pp.path)?"view_world_code":"view_file"} shows.`;
+       if ("brokenCode" === pp.reason) return `${ip}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
+       return `${ip}: search matched nothing in the file, so nothing changed. ${pp.closest?`The closest lines (${pp.closest.line}-${pp.closest.lastLine}) are:\n${pp.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${pp.functions.length>0?`, or use replace … [truncated]
```

#### 190. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L4978-L5001` → after: `L5975-L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5975-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5975-L5977) · [Before (L4978-L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L4978-L5001)

```diff
-     function cr(DD, zD, wD) {
-       nD().copy(wD.position, zD.czD), nD().copy(wD.normal, zD.normal), nD().add(wD.sG, wD.position, wD.normal), nD().copy(wD.aZ, zD.position), wD.W8 = DD.KU.sF(wD.position[0], wD.position[1], wD.position[2])
-     }
-     var gr = () => {},
-       Rr = () => {},
-       Ar = wD(2861),
-       Ur = wD(38704),
-       fr = wD(36290),
-       Ir = wD(36280),
-       Br = wD(2868),
-       Gr = wD(2874),
-       hr = wD(36264),
-       nr = wD(36257),
-       Mr = wD(3723),
-       Or = wD(4722),
-       Jr = wD(36237),
- ... (8 more removed lines; see GitHub link above)
+     function Uo(pp) {
+       return Object.values(pp).some((pp => "" !== pp.trim()))
+     }
```

#### 191. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5003-L5032` → after: `L5979-L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5979-L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5979-L5991) · [Before (L5003-L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5003-L5032)

```diff
-         load: async () => {
-           const {
-             createLiteRendererAsync: DD,
-             liteBabylonBackend: zD,
-             setPipelineFailureHook: pD
-           } = await Promise.all([wD.e(304), wD.e(270)]).then((() => wD(41540)));
-           return pD(dr), {
-             create: async (wD, pD) => {
-               return sD = await DD(wD, pD), KD = zD, {
-                 backendName: sD.backendName,
-                 gpuDevice: sD.gpuDevice,
-                 sampleCount: sD.sampleCount,
-                 HO: KD,
-                 pB: sD,
-                 getStats: () => ({
-                   drawCalls: sD.lastFrameDrawCalls()
- ... (14 more removed lines; see GitHub link above)
+         format: "simple",
+         nativeTools: !1
+       },
+       vo = pp => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engin … [truncated]
+       to = "myId is the id of the player who clicked the block (a string, not their name), and thisPos is the block's position as [x, y, z].",
+       Ho = pp => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to codi … [truncated]
+       eo = {
+         search: "lines to find",
+         replace: "lines to put instead",
+         codeBlock: "...all of the code block's code...",
+         file: "...the whole new file...",
+         worldCode: "...only the World Code to add...",
+         function: "function onPlayerJoin(playerId) {\n\t...the whole new function...\n}"
```

#### 192. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5034` → after: `L5993-L5994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5993-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5993-L5994) · [Before (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5034)

```diff
-       jr = new Set;
+       uo = Object.values(eo);
+     const jo = `You looked at World Code: its files are below, their paths starting ${Up.j}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${U … [truncated]
```

#### 193. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5037-L5064` → after: `L5997-L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR5997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L5997-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L5997-L6036) · [Before (L5037-L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5037-L5064)

```diff
-       for (const KD of jr) try {
-         KD(DD, zD, wD, pD)
-       } catch (sD) {
-         console.error("Lite pipeline failure listener failed", sD)
-       }(function(DD) {
-         return YK.test(DD)
-       })(zD) || function(DD, zD, wD, pD) {
-         var sD;
-         if (Sr.has(DD)) return;
-         Sr.add(DD);
-         const KD = null === wD || void 0 === wD ? void 0 : wD.reason,
-           rD = null !== (sD = null !== pD && void 0 !== pD ? pD : null === wD || void 0 === wD ? void 0 : wD.message) && void 0 !== sD ? sD : String(wD);
-         (0, Tr.c)("Lite pipeline failed", new Error(`${DD}${KD?` ${KD}`:""}: ${rD} [${zD}]`))
-       }(DD, zD, wD, pD)
-     }
-     const Sr = new Set;
- ... (12 more removed lines; see GitHub link above)
+       var op, Ip, Sp, xp;
+       let {
+         hasWorldCodeFiles: Lp,
+         hasLookedUp: Yp,
+         movesToWorldCode: Dp,
+         listedPrefabs: Ap,
+         guidesToPrefabs: Pp,
+         callStyle: Wp = Ao(cp),
+         fencesCalls: yp = !1,
+         entryPath: wp = "index.js"
+       } = Op;
+       const tp = ip ? Up.b : wp,
+         Hp = ip ? `${Up.j}index.js` : tp,
+         dp = (pp, ip) => Yo(cp, pp, ip),
+         ep = ip => pp.some((pp => pp.name === ip)),
+         jp = pp.filter((pp => ["content", "replace", "code"].some((ip => ip in pp.inputSchema.properties)))),
+ ... (24 more added lines; see GitHub link above)
```

#### 194. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5066-L5109` → after: `L6038-L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6038-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6038-L6039) · [Before (L5066-L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5066-L5109)

```diff
-     function vr(DD, zD, wD) {
-       const pD = function() {
-         try {
-           return function() {
-             var DD, zD, wD;
-             const {
-               client: pD,
-               playedS: sD,
-               snapshot: KD
-             } = (0, Pr.q)(), rD = null === (DD = (0, vD.e)()) || void 0 === DD ? void 0 : DD.wB, LD = null === rD || void 0 === rD ? void 0 : rD.engine, cD = LD ? (0, or.e)(LD) : null, gD = (0, Nr.e)();
-             return {
-               client: pD,
-               playedS: sD,
-               ...KD,
-               budgetBasis: (0, ar.i)(),
-               renderBackend: rD && LD ? (0, ur.b)(rD) : null,
- ... (28 more removed lines; see GitHub link above)
+     function mo(pp, ip, cp) {
+       return Object.keys(pp).filter((pp => !cp || !(0, Up.e)(pp))).sort(((pp, cp) => (cp === ip ? 1 : 0) - (pp === ip ? 1 : 0) || pp.localeCompare(cp)))
```

#### 195. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5114-L5116` → after: `L6042-L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6042-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6042-L6045) · [Before (L5114-L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5114-L5116)

```diff
-     function Yr(DD) {
-       const zD = hz.k.getItem(Fr);
-       return !("number" === typeof zD && Date.now() - zD < 3e5) && DD.canRejoin() && hz.k.setItem(Fr, Date.now())
+     function Ro(pp, ip, cp) {
+       var Op;
+       const op = mo(pp, ip, cp);
+       return null !== ip && op.includes(ip) ? ip : null !== (Op = op[0]) && void 0 !== Op ? Op : null
```

#### 196. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5118-L5166` → after: `L6047-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6047-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6047-L6049) · [Before (L5118-L5166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5118-L5166)

```diff
-     class Hr {
-       sI(DD, zD) {
-         (0, Xr.reportClientError)("render_lost", zD, DD, !0, Vr.CAPPED_COUNTS_VISIT_CAP)
-       }
-       reportLoss(DD, zD) {
-         vr(zD, DD, Vr.CAPPED_COUNTS_VISIT_CAP)
-       }
-       inGame() {
-         var DD;
-         return !0 === (null === (DD = (0, vD.b)()) || void 0 === DD ? void 0 : DD.client.isConnectedToServer())
-       }
-       replaying() {
-         var DD;
-         return !0 === (null === (DD = (0, vD.b)()) || void 0 === DD ? void 0 : DD.client.isReplayMode())
-       }
-       canRejoin() {
- ... (33 more removed lines; see GitHub link above)
+ 
+     function qo(pp) {
+       return pp.includes("index.ts") ? "index.ts" : "index.js"
```

#### 197. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5173-L5175` → after: `L6052-L6058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6052-L6058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6052-L6058) · [Before (L5173-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5173-L5175)

```diff
-     function pL(DD) {
-       const zD = DD.lite;
-       if (!zD) return;
+     function Mo(pp) {
+       const ip = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${qo(pp)}`;
+       return `Only ${ip} runs by itself: another file runs when ${ip} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${ip}.\n`
+     }
+ 
+     function Co(pp, ip) {
+       var cp;
```

#### 198. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5177-L5210` → after: `L6060-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6060-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6060-L6278) · [Before (L5177-L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5177-L5210)

```diff
-         gpuDevice: wD,
-         deviceLost: pD
-       } = zD.pB;
-       if (!wD || !pD) return;
-       (0, Nr.i)();
-       const sD = performance.now();
-       pD.then((DD => {
-         (0, xr.g)(wD) || ((0, DL.t)("webgpuloss") && (0, zL.e)((zD => {
-           zD.noteWebGpuLoss("js", !0 === DD.framesRefused ? `${DD.reason} frames refused` : DD.reason, DD.message)
-         })), function(DD) {
-           if (wL) return;
-           wL = !0;
-           const zD = performance.now();
-           ir.e.turnOffWebGpuAfterDeviceLoss();
-           const {
-             cause: wD,
- ... (18 more removed lines; see GitHub link above)
+         files: Op,
+         activePath: op
+       } = pp, Ip = !0 === pp.codeBlock, Sp = mo(Op, op, Ip);
+       if (0 === Sp.length || Sp.every((pp => "" === Op[pp].trim()))) return Ip ? "There is no code yet: the code block is empty." : Sp.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
+       const xp = null !== (cp = Ro(Op, op, Ip)) && void 0 !== cp ? cp : Sp[0];
+       return `${Sp.length>1?`Their files:\n${Sp.map((pp=>{const ip=""===(cp=Op[pp])?0:cp.replace(/\n$/,"").split("\n").length;var cp;return`- ${pp}: ${1===ip?"1 line":`${ip} lines`}${pp===xp?" (open in the editor, its code below)":""}`})).join("\n")}\n${Ip?"":Mo(Sp)}\n`:""}${func … [truncated]
+     }
+ 
+     function Eo(pp) {
+       var ip, cp, Op, op, Ip, Sp;
+       return {
+         codeBlock: !0 === pp.codeBlock,
+         hasCode: "" !== (null !== (ip = pp.files[null !== (cp = pp.activePath) && void 0 !== cp ? cp : ""]) && void 0 !== ip ? ip : "").trim(),
+         hasBigFile: Object.values(pp.files).some((pp => pp.length > 6e3)),
+         wantsExport: xo(pp.request),
+         canAsk: !0 === pp.canAsk,
+ ... (203 more added lines; see GitHub link above)
```

#### 199. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5212-L5215` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6280-L6281) · [Before (L5212-L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5212-L5215)

```diff
-             cause: LD,
-             detail: `${LD} ${cD} up${(0,qr.f)(rD-wD)} ${(0,qr.k)(DD.adapterInfo)}: ${sD}`,
-             code: gD,
-             rejoins: "destroyed" === pD || !0 === KD
+             ...op("" === Ip ? `World Code has no code yet: ${Up.j}index.js is empty.` : `${Ip}${Sp}`),
+             worldCodeFiles: Op
```

#### 200. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5217-L5218` → after: `L6283-L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6283-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6283-L6440) · [Before (L5217-L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5217-L5218)

```diff
-         }(wD, DD, sD))))
-       }))
+         }
+         case "view_chunk":
+           return op(await ip.viewChunk((0, No.f)(pp.args.position)));
+         case "view_game_state":
+           return op(await ip.viewGameState());
+         case "get_docs":
+           return op(function(pp, ip, cp) {
+             if (void 0 === pp) {
+               const pp = (0, kp.e)(ei, bo(null !== ip && void 0 !== ip ? ip : fo));
+               return void 0 === pp ? `There is no list called ${ip}: ask for ${ui}.` : cp.index(pp)
+             }
+             const Op = cp.section(pp);
+             if (Op) return Op.text;
+             const op = cp.find(pp, "", 3).map((pp => pp.name)).join(", ");
+             return `Nothing is called ${pp}.${""===op?"":` The closest names are: ${op}.`}`
+           }(pp.args.name, pp.args.list, ip.docs));
+ ... (142 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5220` → after: `L6442-L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6442-L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6442-L6446) · [Before (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5220)

```diff
-     const sL = 1e3;
+     const II = 4e5;
+     var SI = cp(41726);
+     let xI = [],
+       LI = 0,
+       YI = null;
```

#### 202. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5222-L5239` → after: `L6448-L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6448-L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6448-L6449) · [Before (L5222-L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5222-L5239)

```diff
-     function KL(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (DD.hidden()) return void DD.whenShown((() => {
-         KL(DD, zD, wD, pD)
-       }));
-       let sD = !1;
-       DD.whenNoAdShowing((() => {
-         if (sD) return void setTimeout((() => {
-           KL(DD, zD, wD, pD)
-         }), 0);
-         const KD = DD.inGame();
-         if (!KD && !DD.replaying()) return pD || DD.sI(`${zD}_waiting`, "WebGPU device lost to the browser: waiting for a game"), void setTimeout((() => {
-           KL(DD, zD, wD, !0)
-         }), sL);
-         const rD = (0, qr.j)(performance.now() - wD);
-         if (KD && Yr(DD)) return DD.sI(`${zD}_rejoin_${rD}`, "WebGPU device lost to the browser: rejoining"), void DD.rejoin();
- ... (2 more removed lines; see GitHub link above)
+     function DI(pp) {
+       return Math.ceil(pp.length / 4)
```

#### 203. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5241-L5254` → after: `L6451-L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6451-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6451-L6506) · [Before (L5241-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5241-L5254)

```diff
-     class rL {
-       constructor(DD, zD, wD) {
-         this.loseContext = DD, this.webGlVersion = zD, this.actions = wD, this.startedAt = void 0, this.lostAt = null, this.restoredAt = null, this.restoreTried = !1, this.restoreDidNotHold = !1, this.restoreTimer = null, this.giveUpTimer = null, this.cancelAdWait = null, this.lo … [truncated]
-       }
-       lost(DD) {
-         if (this.gaveUp || null !== this.lostAt) return;
-         const zD = performance.now();
-         this.lostAt = zD, this.restoreTried = !1, this.waiting = !1, this.restoreDidNotHold = null !== this.restoredAt && zD - this.restoredAt < 3e4 && this.actions.shownSince(this.restoredAt), this.reportLoss(zD, DD), this.armTimers(this.lostAt)
-       }
-       restored() {
-         if (this.gaveUp || null === this.lostAt) return;
-         const DD = performance.now(),
-           zD = this.restoreTried ? "restore_context" : "natural";
-         this.actions.sI(`webgl_restored_${zD}_${(0,qr.j)(DD-this.lostAt)}`, `WebGL${this.webGlVersion} context restored (${zD})`), this.lostAt = null, this.restoredAt = DD, this.clearTimers()
+ 
+     function AI(pp) {
+       return "number" === typeof pp && Number.isInteger(pp) && pp >= 0
+     }
+ 
+     function PI(pp, ip, cp) {
+       var Op;
+       let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ! function(pp) {
+         if ("undefined" === typeof window) return;
+         if (xI.push(pp), xI.length >= 40) return void yI();
+         WI()
+       }(null !== (Op = function(pp) {
+         if (null === pp || "object" !== typeof pp) return null;
+         const {
+           prompt_tokens: ip,
+ ... (40 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5256-L5257` → after: `L6508-L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6508-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6508-L6510) · [Before (L5256-L5257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5256-L5257)

```diff
-       visibilityChanged() {
-         this.gaveUp || null === this.lostAt || this.armTimers(this.lostAt)
+       record(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         this.calls.set(pp, [...this.recent(pp, ip), ip])
```

#### 205. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5259-L5266` → after: `L6512-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6512-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6512-L6516) · [Before (L5259-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5259-L5266)

```diff
-       reportLoss(DD, zD) {
-         if (this.lossReported) return;
-         this.lossReported = !0;
-         const {
-           page: wD,
-           code: pD
-         } = (0, qr.p)("webgl_lost", this.startedAt, DD), sD = `webgl${this.webGlVersion} ${wD} up${(0,qr.f)(DD-this.startedAt)}: ${zD}`;
-         (0, Tr.c)(qr.b.WebGL2, new Error(sD)), this.actions.reportLoss(pD, `WebGL${this.webGlVersion} context lost: ${sD}`)
+       markFull(pp) {
+         var ip;
+         let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
+           Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.fullUntil.set(pp, Math.max(null !== (ip = this.fullUntil.get(pp)) && void 0 !== ip ? ip : 0, cp + Math.max(Op, UI)))
```

#### 206. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5268-L5271` → after: `L6518-L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6518-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6518-L6520) · [Before (L5268-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5268-L5271)

```diff
-       armTimers(DD) {
-         this.clearTimers(), this.actions.hidden() || (this.restoreDidNotHold ? this.armGiveUp(DD, 0) : (null === this.loseContext || this.restoreTried || (this.restoreTimer = setTimeout((() => {
-           this.tryRestoreContext()
-         }), 2e3)), this.armGiveUp(DD, 1e4)))
+       callsInLastMinute(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return this.recent(pp, ip).length
```

#### 207. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5273-L5282` → after: `L6522-L6527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6522-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6522-L6527) · [Before (L5273-L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5273-L5282)

```diff
-       armGiveUp(DD, zD) {
-         this.giveUpTimer = setTimeout((() => {
-           this.giveUpTimer = null;
-           let zD = !1,
-             wD = !1;
-           const pD = this.actions.whenNoAdShowing((() => {
-             zD = !0, wD ? (this.cancelAdWait = null, this.armGiveUp(DD, 0)) : this.giveUp(DD)
-           }));
-           zD || (wD = !0, this.cancelAdWait = pD)
-         }), zD)
+       freeAt(pp) {
+         var ip;
+         let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         const Op = this.recent(pp, cp),
+           op = Op.length < 2 ? cp : Op[Op.length - 2] + UI;
+         return Math.max(op, null !== (ip = this.fullUntil.get(pp)) && void 0 !== ip ? ip : 0, cp)
```

#### 208. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5284-L5291` → after: `L6529-L6531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6529-L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6529-L6531) · [Before (L5284-L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5284-L5291)

```diff
-       tryRestoreContext() {
-         this.restoreTimer = null, this.restoreTried = !0;
-         try {
-           var DD;
-           null === (DD = this.loseContext) || void 0 === DD || DD.restoreContext()
-         } catch (zD) {
-           console.warn("WEBGL_lose_context.restoreContext() threw after a WebGL context loss", zD)
-         }
+       firstFreeAt(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
+         return Math.min(...pp.map((pp => this.freeAt(pp, ip))))
```

#### 209. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5293-L5300` → after: `L6533-L6534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6533-L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6533-L6534) · [Before (L5293-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5293-L5300)

```diff
-       giveUp(DD) {
-         this.clearTimers();
-         const zD = this.restoreTried ? "restore_tried" : "restore_untried";
-         if (!this.actions.inGame()) return this.waiting || (this.waiting = !0, this.actions.sI(`webgl_waiting_${zD}`, `WebGL${this.webGlVersion} context not restored: waiting for a game`)), this.restoreDidNotHold = !1, void this.armTimers(DD);
-         this.gaveUp = !0;
-         const wD = (0, qr.j)(performance.now() - DD);
-         if (Yr(this.actions)) return this.actions.sI(`webgl_rejoin_${zD}_${wD}`, `WebGL${this.webGlVersion} context not restored: rejoining`), void this.actions.rejoin();
-         this.actions.sI(`webgl_end_${zD}_${wD}`, `WebGL${this.webGlVersion} context not restored: game ended`), this.actions.end()
+       clear() {
+         this.calls.clear(), this.fullUntil.clear()
```

#### 210. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5302-L5305` → after: `L6536-L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6536-L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6536-L6538) · [Before (L5302-L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5302-L5305)

```diff
-       clearTimers() {
-         var DD;
-         for (const zD of [this.restoreTimer, this.giveUpTimer]) null !== zD && clearTimeout(zD);
-         this.restoreTimer = null, this.giveUpTimer = null, null === (DD = this.cancelAdWait) || void 0 === DD || DD.call(this), this.cancelAdWait = null
+       recent(pp, ip) {
+         var cp;
+         return (null !== (cp = this.calls.get(pp)) && void 0 !== cp ? cp : []).filter((pp => ip - pp < UI))
```

#### 211. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5307-L5309` → after: `L6540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6540) · [Before (L5307-L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5307-L5309)

```diff
-     }
-     const LL = "The game stopped working, so reload the page to play.";
-     let cL = !1;
+     };
```

#### 212. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5311-L5312` → after: `L6542-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6542-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6542-L6543) · [Before (L5311-L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5311-L5312)

```diff
-     function gL(DD) {
-       cL || (cL = !0, (0, Xr.reportClientError)("wasm_physics", DD), setTimeout(RL, 0))
+     function vI(pp) {
+       return pp > 36e5
```

#### 213. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5315-L5328` → after: `L6546-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6546-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6546-L6549) · [Before (L5315-L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5315-L5328)

```diff
-     function RL() {
-       var DD;
-       const zD = null === (DD = (0, vD.b)()) || void 0 === DD ? void 0 : DD.client;
-       if (null !== zD && void 0 !== zD && zD.isConnectedToServer()) try {
-         return void zD.leaveGameUnwanted({
-           reason: LL,
-           requiresRefresh: !0,
-           canReconnect: !1,
-           automaticallyReconnect: !1
-         })
-       } catch (wD) {
-         console.error("Failed to leave the game after wasm physics was lost", wD)
-       }
-       GD.l.KG("unrecoverableError", LL)
+     function tI(pp, ip) {
+       var cp;
+       const Op = null === (cp = pp.headers.get(ip)) || void 0 === cp ? void 0 : cp.trim();
+       return void 0 !== Op && /^\d+$/.test(Op) ? Number(Op) : null
```

#### 214. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5333-L5386` → after: `L6552-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6552-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6552-L6555) · [Before (L5333-L5386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5333-L5386)

```diff
-     function fL(DD) {
-       return {
-         name: "moveState",
-         order: 30,
-         state: {
-           heading: 0,
-           crouching: !1,
-           speed: 0,
-           jumping: !1,
-           toggleFly: !1,
-           edgeGuard: !1,
-           cameraPitch: 0,
-           meshOffset: null,
-           baseRenderHeading: 0,
-           followingEId: null,
-           ridingVehicleEId: null,
- ... (38 more removed lines; see GitHub link above)
+     function HI(pp) {
+       var ip;
+       const cp = null !== (ip = tI(pp, "retry-after")) && void 0 !== ip ? ip : tI(pp, "ratelimit-reset");
+       return null === cp ? null : 1e3 * cp
```

#### 215. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5391-L5414` → after: `L6558-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6558-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6558-L6561) · [Before (L5391-L5414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5391-L5414)

```diff
-     function GL(DD) {
-       return {
-         name: "inventory",
-         order: 150,
-         state: {
-           selectedItem: null,
-           inventory: null,
-           opWrapper: null,
-           onInventoryUpdate: null,
-           onChestUpdate: null
-         },
-         ZJ: function(zD, wD) {
-           if (wD.inventory || (wD.inventory = new BL.d(DD, wD, lD.m)), !wD.opWrapper) {
-             const {
-               onChestUpdate: zD
-             } = wD;
- ... (8 more removed lines; see GitHub link above)
+     function dI(pp, ip) {
+       var cp;
+       const Op = null !== (cp = HI(ip)) && void 0 !== cp ? cp : 0;
+       (429 === ip.status || vI(Op) && 0 === tI(ip, "ratelimit-remaining")) && wI.markFull(pp, Date.now(), Op)
```

#### 216. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5417-L5430` → after: `L6564-L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6564-L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6564-L6567) · [Before (L5417-L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5417-L5430)

```diff
-     function hL(DD) {
-       return {
-         name: "itemState",
-         order: 105,
-         state: {
-           amount: 1,
-           name: null,
-           typeObj: null,
-           creationTime: 0,
-           Lz: !1,
-           size: 1
-         },
-         attributes: {}
-       }
+     function eI(pp) {
+       const ip = Date.now(),
+         cp = wI.freeAt(pp, ip) - ip;
+       return cp <= 0 ? null : vI(cp) ? "unavailable" : "busy"
```

#### 217. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5438-L5440` → after: `L6570-L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6570-L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6570-L6571) · [Before (L5438-L5440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5438-L5440)

```diff
-     function QL(DD) {
-       const zD = EL.get(DD);
-       return zD ? zD() : null
+     function uI(pp, ip) {
+       return `${function(pp){var ip;if("string"===typeof pp)return pp;if(429!==pp.status)return`http-${pp.status}`;if(vI(null!==(ip=HI(pp))&&void 0!==ip?ip:0))return"yearly-limit";const cp=tI(pp,"retry-after");return null===cp?"busy":`busy-ra${cp}`}(ip)}__${pp.replace(/[^A-Za-z0- … [truncated]
```

#### 218. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5442-L5444` → after: `L6573-L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6573-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6573-L6604) · [Before (L5442-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5442-L5444)

```diff
-     const XL = [{
-       queue: "opaque",
-       field: "_opaqueSubMeshes"
+     const jI = new class {
+         constructor(pp) {
+           this.loadReporter = pp, this.reportedCodes = new Set
+         }
+         Yy(pp, ip) {
+           const cp = uI(pp, ip);
+           "undefined" === typeof window || this.reportedCodes.has(cp) || this.reportedCodes.size >= 2 || (this.reportedCodes.add(cp), this.loadReporter().then((ip => {
+             let {
+               reportCappedWasmFailure: Op
+             } = ip;
+             Op("ai_helper_failed", `World Code AI: ${pp} failed`, cp)
+           })).catch((pp => {
+             console.error("World Code AI: couldn't report a failure", pp)
+           })))
+         }
+       }((() => cp.e(213).then((() => cp(36469))))),
+ ... (16 more added lines; see GitHub link above)
```

#### 219. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5446-L5447` → after: `L6606-L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6606-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6606-L6608) · [Before (L5446-L5447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5446-L5447)

```diff
-       queue: "alphaTest",
-       field: "_alphaTestSubMeshes"
+       name: "gpt-oss-120b",
+       temperature: 1,
+       reasoningEffort: "medium"
```

#### 220. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5449-L5450` → after: `L6610-L6613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6610-L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6610-L6613) · [Before (L5449-L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5449-L5450)

```diff
-       queue: "transparent",
-       field: "_transparentSubMeshes"
+       name: "Qwen3.5-397B-A17B",
+       temperature: .6,
+       nativeTools: !0,
+       callFormat: "qwenXml"
```

#### 221. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5452-L5453` → after: `L6615-L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6615-L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6615-L6617) · [Before (L5452-L5453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5452-L5453)

```diff
-       queue: "depthOnly",
-       field: "_depthOnlySubMeshes"
+       name: "gpt-oss-20b",
+       temperature: 1,
+       reasoningEffort: "high"
```

#### 222. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5456-L5463` → after: `L6626-L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6626-L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6626-L6627) · [Before (L5456-L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5456-L5463)

```diff
-     function VL(DD, zD) {
-       var wD;
-       const pD = null === (wD = DD._renderingManager) || void 0 === wD ? void 0 : wD._renderingGroups;
-       if (pD)
-         for (let sD = -1; sD < pD.length; sD++) {
-           const DD = pD[sD];
-           DD && zD(DD, sD)
-         }
+     function CI(pp) {
+       return [...qI, MI].find((ip => ip.name === pp))
```

#### 223. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5466-L5498` → after: `L6630-L6660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6630-L6660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6630-L6660) · [Before (L5466-L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5466-L5498)

```diff
-     function PL(DD, zD, wD) {
-       const pD = {
-         opaque: 0,
-         alphaTest: 0,
-         transparent: 0,
-         depthOnly: 0,
-         total: 0,
-         byGroup: {}
-       };
-       VL(DD, ((DD, zD) => {
-         const wD = {
-           opaque: 0,
-           alphaTest: 0,
-           transparent: 0,
-           depthOnly: 0,
-           total: 0
- ... (17 more removed lines; see GitHub link above)
+     function EI(pp) {
+       var ip, cp;
+       return null !== (ip = null === (cp = CI(pp)) || void 0 === cp ? void 0 : cp.callFormat) && void 0 !== ip ? ip : "simple"
+     }
+ 
+     function XI(pp) {
+       var ip;
+       return {
+         format: null !== (ip = pp.callFormat) && void 0 !== ip ? ip : "simple",
+         nativeTools: !0 === pp.nativeTools
+       }
+     }
+ 
+     function lI(pp, ip) {
+       return "function" === typeof pp ? pp(ip) : pp
+     }
+ ... (15 more added lines; see GitHub link above)
```

#### 224. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5500` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6662) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5500)

```diff
-       return null === zD || void 0 === zD || zD.forEachSelected(sD), null === wD || void 0 === wD || wD.forEachSelected(sD), pD
+       xp.name += null !== (Op = null === (op = ip.function) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : "", xp.args += null !== (Ip = null === (Sp = ip.function) || void 0 === Sp ? void 0 : Sp.arguments) && void 0 !== Ip ? Ip : ""
```

#### 225. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5503-L5586` → after: `L6665-L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6665-L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6665-L6666) · [Before (L5503-L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5503-L5586)

```diff
-     function CL(DD, zD, wD, pD) {
-       const sD = PL(DD, wD, pD),
-         KD = new Map,
-         rD = {
-           terrain: {
-             draws: 0,
-             instances: 0
-           },
-           objectBlocks: {
-             draws: 0,
-             instances: 0
-           },
-           entityParts: {
-             draws: 0,
-             instances: 0
-           },
- ... (68 more removed lines; see GitHub link above)
+     function bI(pp) {
+       return "mcp" === pp ? "simple" : pp
```

#### 226. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5590-L5591` → after: `L6669-L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6669-L6671) · [Before (L5590-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5590-L5591)

```diff
-     function TL(DD) {
-       return (0, ur.f)(DD.wB).backendName
+     function hI(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       return aI(pp, ip, cp, bI(Op), op).answer
```

#### 227. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5593-L5611` → after: `L6673-L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6673-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6673-L6719) · [Before (L5593-L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5593-L5611)

```diff
-     class bL {
-       constructor() {
-         this.sum = 0, this.min = Number.POSITIVE_INFINITY, this.max = 0, this.count = 0
-       }
-       add(DD) {
-         this.sum += DD, this.count++, DD < this.min && (this.min = DD), DD > this.max && (this.max = DD)
-       }
-       hasSamples() {
-         return this.count > 0
-       }
-       summarise() {
-         return 0 === this.count ? {
-           mean: 0,
-           min: 0,
-           max: 0
-         } : {
- ... (3 more removed lines; see GitHub link above)
+ 
+     function aI(pp, ip, cp, Op, op) {
+       const Ip = cp.flatMap((pp => {
+         const ip = Uc(pp.name, pp.args);
+         return null === ip ? [] : [Yo(Sc(Op), ip.name, ip.args)]
+       }));
+       let Sp = !1;
+       return 0 !== Ip.length || 0 !== vc(pp, Op).length || pp.includes("```") || (Ip.push(...op ? [] : function(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         const Op = new Map;
+         for (const xp of wc(pp, ip)) {
+           const pp = Object.values(xp.args).some((pp => void 0 !== pp && cp.includes(pp.trim())));
+           var op, Ip, Sp;
+           "export_game" === xp.name || "switch_to_world_code" === xp.name || Ri(xp.name) || pp || Op.set(`${xp.name} ${null!==(op=xp.args.path)&&void 0!==op?op:""} ${null!==(Ip=xp.args.search)&&void 0!==Ip?Ip:""} ${null!==(Sp=xp.args.name)&&void 0!==Sp?Sp:""}`, xp.source)
+         }
+         return [...new Set(Op.values())]
+ ... (31 more added lines; see GitHub link above)
```

#### 228. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5616-L5618` → after: `L6724-L6732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6724-L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6724-L6732) · [Before (L5616-L5618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5616-L5618)

```diff
-     function jL(DD) {
-       var zD, wD;
-       return null !== (zD = null === (wD = DD.wB.pB) || void 0 === wD ? void 0 : wD.J9) && void 0 !== zD ? zD : null
+     function FI(pp) {
+       return pp.map((pp => ({
+         type: "function",
+         function: {
+           name: pp.name,
+           description: pp.description,
+           parameters: pp.inputSchema
+         }
+       })))
```

#### 229. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5621-L5623` → after: `L6735-L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6735-L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6735-L6736) · [Before (L5621-L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5621-L5623)

```diff
-     function dL(DD) {
-       var zD, wD;
-       return null !== (zD = null === (wD = DD.wB.pB) || void 0 === wD ? void 0 : wD.modelMeshes) && void 0 !== zD ? zD : null
+     function gI(pp) {
+       return "object" === typeof pp
```

#### 230. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5625-L5628` → after: `L6738-L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6738-L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6738-L6805) · [Before (L5625-L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5625-L5628)

```diff
- 
-     function SL(DD) {
-       var zD, wD, pD, sD;
-       return DD.wB.Ul().getActiveMeshes().length + (null !== (zD = null === (wD = jL(DD)) || void 0 === wD ? void 0 : wD.drawStats().selected) && void 0 !== zD ? zD : 0) + (null !== (pD = null === (sD = dL(DD)) || void 0 === sD ? void 0 : sD.selectedCount) && void 0 !== pD ? pD : … [truncated]
+     async function GI(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
+       const Ip = eI(pp.name);
+       if (null !== Ip) return Ip;
+       wI.record(pp.name);
+       const Sp = await fetch(go, {
+         method: "POST",
+         headers: {
+           "Content-Type": "application/json"
+         },
+         body: JSON.stringify({
+           model: pp.name,
+           messages: ip,
+           max_tokens: 16e3,
+           temperature: pp.temperature,
+           reasoning_effort: pp.reasoningEffort,
+ ... (52 more added lines; see GitHub link above)
```

#### 231. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5631-L5640` → after: `L6808-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6808-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6808-L6821) · [Before (L5631-L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5631-L5640)

```diff
-     function iL(DD) {
-       const zD = DD.wB.Ul(),
-         wD = QL(DD.wB.engine),
-         pD = PL(zD, jL(DD), dL(DD));
-       return {
-         backend: TL(DD),
-         dispatched: pD,
-         activeMeshes: SL(DD),
-         drawn: wD,
-         residual: wD ? wD.lastFrameDraws - pD.total : null
+     function rI(pp, ip, cp, Op, op) {
+       var Ip;
+       let Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         xp = ip;
+       var Lp;
+       pp.nativeTools && Sp && (xp = null !== (Lp = RI(xp)) && void 0 !== Lp ? Lp : xp);
+       xp = xp.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
+       const Yp = aI(xp, cp, Op, null !== (Ip = pp.callFormat) && void 0 !== Ip ? Ip : "simple", op);
+       return "" === Yp.answer ? null : {
+         model: pp.name,
+         answer: Yp.answer,
+         reasoning: cp,
+         isCutShort: op,
+         hasCallsFromReasoning: Yp.hasCallsFromReasoning
```

#### 232. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5644-L5801` → after: `L6825-L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6825-L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6825-L6826) · [Before (L5644-L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5644-L5801)

```diff
-     function lL(DD) {
-       const zD = function() {
-         var DD;
-         return null !== (DD = (0, Cr.l)(xL)) && void 0 !== DD && DD
-       }();
-       zD && !DD.wB.pB && function(DD) {
-         const zD = EL.get(DD);
-         if (zD) return zD;
-         const wD = {
-             draws: 0,
-             lastFrameDraws: 0,
-             instancedDraws: 0,
-             instances: 0
-           },
-           pD = DD,
-           sD = pD.drawElementsType.bind(DD),
- ... (142 more removed lines; see GitHub link above)
+     function ZI(pp) {
+       return pp.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
```

#### 233. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5809-L5815` → after: `L6829-L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6829-L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6829-L6838) · [Before (L5809-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5809-L5815)

```diff
-     function wc(DD) {
-       var zD;
-       DD.wB.tzD = DD => {
-         const zD = DD.isFrozen;
-         zD && (0, ED.P)(DD), (0, mD.c)(DD), zD && (0, ED.n)(DD)
-       }, Object.assign(DD, {
-         NJ: Dc.e.values
+     function zI(pp) {
+       return gI(pp) && !pp.isCutShort
+     }
+     async function sI(pp, ip, cp, Op, op) {
+       const Ip = pp.map((() => new AbortController)),
+         Sp = () => {
+           for (const pp of Ip) pp.abort()
+         };
+       null !== cp && void 0 !== cp && cp.aborted && Sp(), null === cp || void 0 === cp || cp.addEventListener("abort", Sp, {
+         once: !0
```

#### 234. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5817-L5862` → after: `L6840-L6877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6840-L6877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6840-L6877) · [Before (L5817-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5817-L5862)

```diff
-       let pD = DD.aG;
-       Dc.e.subscribe("blockReach", (() => {
-           const zD = DD.bloxd.getBlockReach(DD.vW);
-           DD.aG === pD && (DD.aG = zD), pD = zD
-         })),
-         function(DD) {
-           for (const wD of [AL.e, fL, GL, hL]) {
-             const zD = DD.yJ.YzD(wD(DD));
-             DD.yJ.names[zD] = zD
-           }
-           vL || (vL = !0, setInterval((() => {
-             var DD;
-             const zD = null !== (DD = GD.l.pM.playerKilled > 1 ? 1 : void 0) && void 0 !== DD ? DD : 5;
-             (0, WD.sendColyMessage)(uL.Ag, {
-               Tr: zD
-             }, !0)
- ... (30 more removed lines; see GitHub link above)
+       const xp = pp.map((() => {})),
+         Lp = pp.map((() => {}));
+       let Yp = null;
+       const Dp = pp => void 0 !== pp && ("" !== ZI(pp.answer).trim() || !0 === pp.isCalling);
+       let Ap = () => {};
+       pp.forEach(((pp, cp) => {
+         const Sp = (0, tp.b)(BI, Ip[cp].signal);
+         GI(pp, lI(ip, pp), Sp.signal, (pp => {
+           Lp[cp] = pp, null === Yp && Dp(pp) && (Yp = cp), Yp === cp && (null === Op || void 0 === Op || Op(pp))
+         }), op).catch((ip => {
+           if (Ip[cp].signal.aborted) return "failed";
+           const Op = Sp.signal.aborted;
+           return console.warn(`World Code AI: ${pp.name} ${Op?"took longer than 240 s":"couldn't be reached"}`, ip), jI.Yy(pp.name, Op ? "timeout" : "network"), Op ? "timeout" : "failed"
+         })).then((pp => {
+           Sp.clear(), xp[cp] = pp, Yp !== cp || zI(pp) || (Yp = null), Ap()
+         }))
+ ... (22 more added lines; see GitHub link above)
```

#### 235. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5864-L5902` → after: `L6879-L6890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6879-L6890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6879-L6890) · [Before (L5864-L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5864-L5902)

```diff
-         }(DD), FL(DD),
-         function(DD) {
-           DD.bDD = zD => 0 !== zD && !DD.Lf.A_(zD), (0, oz.c)(DD.bDD);
-           const {
-             yJ: zD
-           } = DD;
-           zD.gzD = zD.xzD("movement"), zD.TzD = zD.xzD("moveState");
-           const wD = zD.xzD("inventory");
-           zD.bzD = wD, zD.jzD = DD => {
-             var zD;
-             return null === (zD = wD(DD)) || void 0 === zD ? void 0 : zD.inventory
-           }, zD.dzD = DD => wD(DD).opWrapper, zD.SzD = zD.izD("inventory")
-         }(DD), DD.WDD = (zD, wD, pD, sD) => DD.bDD(zD) && (DD.Lf.KF(zD) || DD.KU.oDD(wD, pD, sD)),
-         function(DD) {
-           const zD = DD.container.canvas,
-             {
- ... (23 more removed lines; see GitHub link above)
+         }
+       };
+       try {
+         for (;;) {
+           if (null !== cp && void 0 !== cp && cp.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
+           const pp = Pp();
+           if (pp) {
+             const ip = xp.filter((pp => "string" === typeof pp));
+             return {
+               reply: pp.reply,
+               failures: ip
+             }
```

#### 236. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5904-L5909` → after: `L6892-L6893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6892-L6893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6892-L6893) · [Before (L5904-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5904-L5909)

```diff
-           zc.c.onRelease((() => {
-             DD.wB.resize()
-           })), (0, JL.k)((() => {
-             DD.wB.resize()
-           })), KD(), GD.l.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
-             KD()
+           await new Promise((pp => {
+             Ap = pp
```

#### 237. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5946-L5986` → after: `L6896-L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6896-L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6896-L6937) · [Before (L5946-L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5946-L5986)

```diff
-         return sD.voxelVersion !== pD.HI && (sD.voxelVersion = pD.HI, sD.token = ++this.lastToken), sD.token
-       }
-       scan(DD, zD, wD, pD, sD, KD, rD, LD) {
-         const cD = ID.f.CI,
-           gD = this.KU.EB;
-         let RD = 0;
-         for (let AD = Math.floor(zD / cD); AD * cD < sD; AD++) {
-           const UD = AD * cD,
-             fD = Math.min(sD - UD, cD);
-           for (let sD = Math.floor(DD / cD); sD * cD < pD; sD++) {
-             const ID = sD * cD,
-               BD = Math.min(pD - ID, cD);
-             for (let pD = Math.floor(wD / cD); pD * cD < KD; pD++) {
-               const GD = gD.QB(sD, AD, pD);
-               if (!GD) continue;
-               const hD = pD * cD,
- ... (25 more removed lines; see GitHub link above)
+       } finally {
+         null === cp || void 0 === cp || cp.removeEventListener("abort", Sp), Sp()
+       }
+     }
+ 
+     function KI() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
+       const ip = wI.firstFreeAt(qI.map((pp => pp.name)), pp);
+       return vI(ip - pp) ? pp : ip
+     }
+     async function VI(pp) {
+       var ip;
+       let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const Op = Date.now(),
+         op = null !== (ip = cp.models) && void 0 !== ip ? ip : qI,
+         Ip = void 0 === cp.models ? function(pp, ip) {
+ ... (26 more added lines; see GitHub link above)
```

#### 238. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5989` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6940) · [Before (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5989)

```diff
-         return RD
+         Sp.push(...ip.failures)
```

#### 239. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5992-L6039` → after: `L6945-L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6945-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6945-L6961) · [Before (L5992-L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L5992-L6039)

```diff
-     var hc = wD(36591),
-       nc = wD(34174);
-     class Mc {
-       constructor(DD, zD, wD, pD, sD) {
-         this.AU = DD, this.bloxd = zD, this.userContext = wD, this.output = pD, this.sounds = sD, this.chunks = void 0, this.actionRay = {
-           origin: [0, 0, 0],
-           direction: [0, 0, 1]
-         }, this.chunks = new Gc(DD.KU)
-       }
-       disposeGameOutput() {
-         this.output.disposeAll(), this.setCrosshairShown(null)
-       }
-       PJ(DD) {
-         var zD;
-         const wD = null === (zD = this.AU.yJ.AY(this.toLocalId(DD))) || void 0 === zD ? void 0 : zD.position;
-         if (!wD) throw new Error(`Entity ${DD} has no replicated position`);
- ... (32 more removed lines; see GitHub link above)
+     const pS = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";
+ 
+     function iS(pp) {
+       const ip = pp.trim();
+       return ip.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(ip) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(ip) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b( … [truncated]
+     }
+     async function cS(pp, ip, cp, Op, op, Ip) {
+       var Sp;
+       let xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BI;
+       if (! function(pp, ip) {
+           return !pp.isCutShort && iS(pp.answer) && !pp.answer.includes("?") && 0 === vc(pp.answer, ip).length
+         }(cp, null !== (Sp = pp.callFormat) && void 0 !== Sp ? Sp : "simple")) return cp;
+       const Lp = [...ip, {
+           role: "assistant",
+           content: cp.answer
+         }, {
+ ... (1 more added lines; see GitHub link above)
```

#### 240. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6041-L6096` → after: `L6963-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6963-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6963-L6972) · [Before (L6041-L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6041-L6096)

```diff
-         }, !0)
-       }
-       getEntityType(DD) {
-         return this.bloxd.getEntityType(DD)
-       }
-       getEntityName(DD) {
-         return this.bloxd.getEntityName(DD)
-       }
-       hasEffect(DD, zD) {
-         return this.bloxd.client.hasEffect(DD, zD)
-       }
-       getMetaInfo(DD) {
-         return this.bloxd.getMetaInfo(DD)
-       }
-       getPlayerDbId(DD) {
-         return this.assertLocalPlayer(DD, "get a DB ID"), this.userContext.whamm
- ... (40 more removed lines; see GitHub link above)
+         }],
+         Yp = (0, tp.b)(xp, Op);
+       try {
+         const ip = await GI(pp, Lp, Yp.signal, op, Ip);
+         return gI(ip) && "" !== ip.answer.trim() ? ip : cp
+       } catch (Dp) {
+         if (null !== Op && void 0 !== Op && Op.aborted) throw Dp;
+         return jI.Yy(pp.name, Yp.signal.aborted ? "timeout" : "network"), cp
+       } finally {
+         Yp.clear()
```

#### 241. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6098-L6101` → after: `L6974-L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L6974-L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L6974-L6999) · [Before (L6098-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6098-L6101)

```diff
-       getHeldGunInaccuracy() {
-         var DD, zD, wD;
-         const pD = null === (DD = this.AU.yJ.qzD(this.AU.vW)) || void 0 === DD ? void 0 : DD.lE;
-         return null !== pD && void 0 !== pD && pD.isGun() ? null !== (zD = null === (wD = pD.inaccuracyCalculator) || void 0 === wD ? void 0 : wD.getInaccuracy()) && void 0 !== zD ? zD : 0 : null
+     }
+ 
+     function OS(pp) {
+       const ip = ZI(pp);
+       return /too_complex/i.test(ip) || /^\W*too[\s_-]*complex\W*$/i.test(ip.trim())
+     }
+ 
+     function oS(pp) {
+       const ip = ZI(pp).trim();
+       return ip.length > 19 && !/^\W*too[\s_-]*complex/i.test(ip)
+     }
+ 
+     function IS(pp) {
+       return pp.map(((pp, ip) => 0 === ip && "system" === pp.role ? {
+         ...pp,
+         content: pp.content + JI
+ ... (10 more added lines; see GitHub link above)
```

#### 242. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6103-L6114` → after: `L7001-L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7001-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7001-L7035) · [Before (L6103-L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6103-L6114)

```diff
-       isCrosshairShown() {
-         var DD, zD, wD;
-         const pD = (0, hc.d)(ir.e.get("crosshairGameView"), ir.e.get("crosshairShownOverride"));
-         if (null !== pD) return pD;
-         const sD = null === (DD = this.AU.yJ.qzD(this.AU.vW)) || void 0 === DD ? void 0 : DD.lE,
-           KD = this.bloxd.getClientPredictedOption(this.AU.vW, "gunshotOrigin"),
-           rD = !(null === sD || void 0 === sD || !sD.isGun()),
-           LD = rD || Boolean((null === sD || void 0 === sD || null === (zD = sD.typeObj) || void 0 === zD ? void 0 : zD.holdAsAiming) && !(null !== sD && void 0 !== sD && null !== (wD = sD.typeObj) && void 0 !== wD && wD.hideAimingUI));
-         return (0, hc.i)({
-           gun: rD,
-           aimable: LD
-         }, this.AU.camera.fY > 1, (0, nc.d)(), KD)
+       return cp ? "unchecked" : "ok"
+     }
+     async function xS(pp, ip, cp) {
+       if ("unavailable" === eI(pp)) return "busy";
+       const Op = (0, tp.b)(2e4, cp);
+       wI.record(pp);
+       try {
+         var op, Ip, Sp, xp;
+         const cp = await fetch(go, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: JSON.stringify({
+             model: pp,
+             messages: ip,
+ ... (19 more added lines; see GitHub link above)
```

#### 243. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6116-L6118` → after: `L7037-L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7037-L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7037-L7048) · [Before (L6116-L6118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6116-L6118)

```diff
-       setCrosshairShown(DD) {
-         ir.e.set({
-           crosshairShownOverride: DD
+     }
+     var LS = cp(44);
+     const YS = "aiHelperDataSharing";
+ 
+     function DS() {
+       const pp = LS.h.getItem(YS);
+       return null !== pp && "object" === typeof pp ? pp : {}
+     }
+     const AS = new class {
+       constructor() {
+         this.player = null, this.unsaved = new Map, this.listeners = new Set, this.listening = !1, this.subscribe = pp => (this.listen(), this.listeners.add(pp), () => {
+           this.listeners.delete(pp)
```

#### 244. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6121-L6148` → after: `L7051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7051) · [Before (L6121-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6121-L6148)

```diff
-       getInventoryFreeSlotCount(DD) {
-         return this.isLocalPlayer(DD) ? this.AU.yJ.jzD(this.AU.vW).getFreeSlotCount() : null
-       }
-       getSelectedInventorySlotI(DD) {
-         return this.isLocalPlayer(DD) ? this.AU.yJ.jzD(this.AU.vW).getSelectedSlotIndex() : null
-       }
-       getItemSlot(DD, zD) {
-         return this.isLocalPlayer(DD) ? this.AU.yJ.dzD(this.AU.vW).getItemAtIdx(zD) : null
-       }
-       swapInventorySlots(DD, zD) {
-         return Ic.d.swapPosClient(this.AU.yJ.dzD(this.AU.vW), DD, zD)
-       }
-       isPlayerCrouching(DD) {
-         return this.AU.yJ.TzD(this.toLocalId(DD)).crouching
-       }
-       getMiningBlock() {
- ... (12 more removed lines; see GitHub link above)
+       get() {
```

#### 245. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6150-L6153` → after: `L7053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7053) · [Before (L6150-L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6150-L6153)

```diff
-         this.AU.xH(null !== (DD = this.AU.tDD) && void 0 !== DD ? DD : this.AU.camera.DH(), this.actionRay.origin);
-         const wD = null !== (zD = this.AU.FDD) && void 0 !== zD ? zD : this.AU.camera.WH();
-         for (let pD = 0; pD < 3; pD++) this.actionRay.direction[pD] = wD[pD];
-         return this.actionRay
+         return null === this.player ? null : null !== (pp = null !== (ip = this.unsaved.get(this.player)) && void 0 !== ip ? ip : DS()[this.player]) && void 0 !== pp ? pp : null
```

#### 246. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6155-L6156` → after: `L7055-L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7055-L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7055-L7056) · [Before (L6155-L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6155-L6156)

```diff
-       canModifyBlockAt(DD, zD, wD) {
-         return this.bloxd.posSatisfiesModifyConstraints(this.AU.vW, DD, zD, wD)
+       getPlayer() {
+         return this.player
```

#### 247. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6158-L6163` → after: `L7058-L7067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7058-L7067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7058-L7067) · [Before (L6158-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6158-L6163)

```diff
-       isSolidToPlayerBlockId(DD) {
-         return this.AU.Lf.KF(DD) && !this.AU.KU.zk.has(DD)
-       }
-       blockNameToBlockId(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return (0, RD.p)(DD, zD)
+       async refresh() {
+         this.listen();
+         const pp = await async function() {
+           var pp, ip;
+           const {
+             userContextManager: Op
+           } = await Promise.resolve().then((() => cp(1149)));
+           return null !== (pp = null === (ip = Op.peekCurrentUserContext()) || void 0 === ip ? void 0 : ip.whamm) && void 0 !== pp ? pp : null
+         }().catch((pp => (console.error("AI Helper: couldn't look up the player for sharing chats", pp), null)));
+         return pp !== this.player && (this.player = pp, this.notify()), this.get()
```

#### 248. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6165-L6166` → after: `L7069-L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7069-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7069-L7073) · [Before (L6165-L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6165-L6166)

```diff
-       blockIdToBlockName(DD) {
-         return (0, RD.h)(DD)
+       set(pp) {
+         null !== this.player && (LS.h.setItem(YS, {
+           ...DS(),
+           [this.player]: pp
+         }) ? this.unsaved.delete(this.player) : this.unsaved.set(this.player, pp), this.notify())
```

#### 249. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6168-L6169` → after: `L7075-L7078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7075-L7078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7075-L7078) · [Before (L6168-L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6168-L6169)

```diff
-       OzD(DD, zD, wD, pD, sD) {
-         return this.AU.yJ.OzD(DD, zD, wD, this.AU.Lf.Dk(pD), sD)
+       listen() {
+         this.listening || (this.listening = !0, window.addEventListener("storage", (() => {
+           this.notify()
+         })))
```

#### 250. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6171-L6172` → after: `L7080-L7081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7080-L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7080-L7081) · [Before (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6171-L6172)

```diff
-       getChunkVersion(DD, zD, wD) {
-         return this.chunks.version(DD, zD, wD)
+       notify() {
+         for (const pp of this.listeners) pp()
```

#### 251. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6174-L6175` → after: `L7083-L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7083-L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/92.js#L7083-L7123) · [Before (L6174-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/92.js#L6174-L6175)

```diff
-       scanBlocks(DD, zD, wD, pD, sD, KD, rD, LD) {
-         return this.chunks.scan(DD, zD, wD, pD, sD, KD, rD, LD)
+     };
+     let PS = null,
+       WS = !1;
+     const yS = 4e5,
+       US = 6e4,
+       wS = 12,
+       vS = 9e5;
+ 
+     function tS(pp, ip) {
+       if (pp.length <= ip) return pp;
+       const cp = `\n[... ${pp.length-ip} more characters cut]`;
+       let Op = Math.max(0, ip - cp.length);
+       const op = pp.charCodeAt(Op - 1);
+       return op >= 55296 && op <= 56319 && Op--, pp.slice(0, Op) + cp
+     }
+     var HS = cp(643),
+ ... (25 more added lines; see GitHub link above)
```
