# Changed — Bundle Modifications Report (Part 016 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `16 / 154` (**364** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (2876 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 643. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9237-L9247` → after: `L9237-L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9237-L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9237-L9247) · [Before (L9237-L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9237-L9247)

```diff
-             PH = HH.playerText.filter((HH => {
-               const BH = HH.toLowerCase().trim();
-               return !vH.some((HH => HH.includes(BH)))
-             })).map((HH => `- ${JSON.stringify(eC(HH,dC))}`)),
-             TH = MH.length > 0 ? "Other text my game shows players:" : "Text my game shows players, the most useful first:";
-           PH.length > 0 && xH > TH.length && hH.push(TH, ...HE(PH, xH, (HH => `- and ${HH} more`)));
-           const UH = 0 === HH.omitted.length ? null : yC(`Left out of this summary of my code: ${HH.omitted.join("; ")}.`, SH("notes")),
-             VH = LH - hH.join("\n").length - 1 - (null === UH ? 0 : UH.length + 1);
-           return hH.push(... function(HH, BH) {
-             let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH;
-             const AH = HH.map((HH => {
+             AB = BB.playerText.filter((BB => {
+               const OB = BB.toLowerCase().trim();
+               return !WB.some((BB => BB.includes(OB)))
+             })).map((BB => `- ${JSON.stringify(gJ(BB,CJ))}`)),
+             VB = NB.length > 0 ? "Other text my game shows players:" : "Text my game shows players, the most useful first:";
+           AB.length > 0 && RB > VB.length && oB.push(VB, ...OM(AB, RB, (BB => `- and ${BB} more`)));
+           const SB = 0 === BB.omitted.length ? null : BM(`Left out of this summary of my code: ${BB.omitted.join("; ")}.`, QB("notes")),
+             nB = GB - oB.join("\n").length - 1 - (null === SB ? 0 : SB.length + 1);
+           return oB.push(... function(BB, OB) {
+             let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB;
+             const YB = BB.map((BB => {
```

#### 644. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9249-L9254` → after: `L9249-L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9249-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9249-L9254) · [Before (L9249-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9249-L9254)

```diff
-                   name: BH,
-                   value: LH,
-                   declaredWith: AH
-                 } = HH;
-                 const rH = QC(BH);
-                 return null !== rH ? `${rH.object} { ${rH.key}: ${LH} }` : `${void 0===AH?"":`${AH} `}${BH} = ${LH}`
+                   name: OB,
+                   value: GB,
+                   declaredWith: YB
+                 } = BB;
+                 const DB = ZJ(OB);
+                 return null !== DB ? `${DB.object} { ${DB.key}: ${GB} }` : `${void 0===YB?"":`${YB} `}${OB} = ${GB}`
```

#### 645. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9256-L9261` → after: `L9256-L9261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9256-L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9256-L9261) · [Before (L9256-L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9256-L9261)

```diff
-               rH = HH.map((HH => void 0 === HH.usedIn ? null : Vz(HH.name, HH.usedIn, HH.value))),
-               SH = BH => null !== rH[BH] ? 2 : Number(JC.test(HH[BH].usedIn)),
-               hH = HH.map(((HH, BH) => ({
-                 index: BH,
-                 usedIn: HH.usedIn
-               }))).filter((HH => {
+               DB = BB.map((BB => void 0 === BB.usedIn ? null : Uy(BB.name, BB.usedIn, BB.value))),
+               QB = OB => null !== DB[OB] ? 2 : Number(sJ.test(BB[OB].usedIn)),
+               oB = BB.map(((BB, OB) => ({
+                 index: OB,
+                 usedIn: BB.usedIn
+               }))).filter((BB => {
```

#### 646. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9263-L9269` → after: `L9263-L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9263-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9263-L9269) · [Before (L9263-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9263-L9269)

```diff
-                   usedIn: BH
-                 } = HH;
-                 return void 0 !== BH
-               })).sort(((HH, BH) => SH(HH.index) - SH(BH.index) || BH.index - HH.index)),
-               tH = "Constants my code is tuned by, each with the first code that reads it, which shows what a bigger or smaller number does:";
-             for (let CH = 0; CH < hH.length; CH++) {
-               const LH = new Set(hH.slice(0, CH).map((HH => {
+                   usedIn: OB
+                 } = BB;
+                 return void 0 !== OB
+               })).sort(((BB, OB) => QB(BB.index) - QB(OB.index) || OB.index - BB.index)),
+               jB = "Constants my code is tuned by, each with the first code that reads it, which shows what a bigger or smaller number does:";
+             for (let JB = 0; JB < oB.length; JB++) {
+               const GB = new Set(oB.slice(0, JB).map((BB => {
```

#### 647. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9271-L9273` → after: `L9271-L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9271-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9271-L9273) · [Before (L9271-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9271-L9273)

```diff
-                     index: BH
-                   } = HH;
-                   return BH
+                     index: OB
+                   } = BB;
+                   return OB
```

#### 648. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9275-L9278` → after: `L9275-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9275-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9275-L9278) · [Before (L9275-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9275-L9278)

```diff
-                 SH = HH.map(((HH, BH) => {
-                   if (void 0 === HH.usedIn || LH.has(BH)) return `- ${AH[BH]}`;
-                   const SH = rH[BH];
-                   return null === SH ? `- ${AH[BH]}, used in: ${HH.usedIn}` : `- ${AH[BH]}, used in: ${HH.usedIn.replace(/;$/,"")}. So ${SH}`
+                 QB = BB.map(((BB, OB) => {
+                   if (void 0 === BB.usedIn || GB.has(OB)) return `- ${YB[OB]}`;
+                   const QB = DB[OB];
+                   return null === QB ? `- ${YB[OB]}, used in: ${BB.usedIn}` : `- ${YB[OB]}, used in: ${BB.usedIn.replace(/;$/,"")}. So ${QB}`
```

#### 649. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9280` → after: `L9280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9280) · [Before (L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9280)

```diff
-               if ([tH, ...SH].join("\n").length <= BH) return [tH, ...SH]
+               if ([jB, ...QB].join("\n").length <= OB) return [jB, ...QB]
```

#### 650. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9282-L9306` → after: `L9282-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9282-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9282-L9306) · [Before (L9282-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9282-L9306)

```diff
-             const zH = HE(AH, Math.min(BH, LH) - 40, (HH => `and ${HH} more`));
-             return 0 === zH.length ? [] : [`Constants my code is tuned by: ${WE(zH).join("; ")}.`]
-           }(HH.constants, Math.max(SH("constants"), Math.min(VH, Math.floor(LH * iC))), SH("constants"))), null !== UH && hH.push(UH), hH
-         }
-         const QE = /^(.+?) \{ (.*) \}$/;
- 
-         function WE(HH) {
-           const BH = [];
-           let LH = null;
-           for (const rH of HH) {
-             var AH;
-             const HH = QE.exec(rH);
-             null === HH || (null === (AH = LH) || void 0 === AH ? void 0 : AH.object) !== HH[1] ? (LH = null === HH ? null : {
-               object: HH[1],
-               properties: [HH[2]]
-             }, BH.push(rH)) : (LH.properties.push(HH[2]), BH[BH.length - 1] = `${LH.object} { ${LH.properties.join(", ")} }`)
- ... (9 more removed lines; see GitHub link above)
+             const yB = OM(YB, Math.min(OB, GB) - 40, (BB => `and ${BB} more`));
+             return 0 === yB.length ? [] : [`Constants my code is tuned by: ${NM(yB).join("; ")}.`]
+           }(BB.constants, Math.max(QB("constants"), Math.min(nB, Math.floor(GB * xJ))), QB("constants"))), null !== SB && oB.push(SB), oB
+         }
+         const ZM = /^(.+?) \{ (.*) \}$/;
+ 
+         function NM(BB) {
+           const OB = [];
+           let GB = null;
+           for (const DB of BB) {
+             var YB;
+             const BB = ZM.exec(DB);
+             null === BB || (null === (YB = GB) || void 0 === YB ? void 0 : YB.object) !== BB[1] ? (GB = null === BB ? null : {
+               object: BB[1],
+               properties: [BB[2]]
+             }, OB.push(DB)) : (GB.properties.push(BB[2]), OB[OB.length - 1] = `${GB.object} { ${GB.properties.join(", ")} }`)
+ ... (9 more added lines; see GitHub link above)
```

#### 651. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9308-L9313` → after: `L9308-L9313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9308-L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9308-L9313) · [Before (L9308-L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9308-L9313)

```diff
-                 eventType: BH,
-                 values: LH
-               } = HH;
-               const AH = (null !== LH && void 0 !== LH ? LH : []).filter((HH => "" !== HH)),
-                 rH = AH.slice(0, xE).join(", ");
-               return 0 === AH.length ? BH : `${BH} (${rH}${AH.length>xE?", \u2026":""})`
+                 eventType: OB,
+                 values: GB
+               } = BB;
+               const YB = (null !== GB && void 0 !== GB ? GB : []).filter((BB => "" !== BB)),
+                 DB = YB.slice(0, WM).join(", ");
+               return 0 === YB.length ? OB : `${OB} (${DB}${YB.length>WM?", \u2026":""})`
```

#### 652. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9315)

```diff
-             tH = new Set(BH.map((HH => {
+             jB = new Set(OB.map((BB => {
```

#### 653. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9317-L9319` → after: `L9317-L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9317-L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9317-L9319) · [Before (L9317-L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9317-L9319)

```diff
-                 eventType: BH
-               } = HH;
-               return BH.toLowerCase()
+                 eventType: OB
+               } = BB;
+               return OB.toLowerCase()
```

#### 654. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9321-L9327` → after: `L9321-L9327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9321-L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9321-L9327) · [Before (L9321-L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9321-L9327)

```diff
-             zH = (null !== (LH = null === HH || void 0 === HH ? void 0 : HH.events) && void 0 !== LH ? LH : []).filter((HH => HH.isLiteralType && !tH.has(HH.eventType.toLowerCase()))).map((HH => HH.eventType)),
-             CH = [...hH, ...new Set(zH)].slice(0, ME + 2);
-           CH.length > 0 && SH.push(`- Logs these custom events: ${CH.join(", ")}.`);
-           const EH = function(HH) {
-             var BH, LH;
-             if (null === HH || void 0 === HH) return null;
-             const AH = (null !== (BH = HH.calls) && void 0 !== BH ? BH : []).flatMap((HH => {
+             yB = (null !== (GB = null === BB || void 0 === BB ? void 0 : BB.events) && void 0 !== GB ? GB : []).filter((BB => BB.isLiteralType && !jB.has(BB.eventType.toLowerCase()))).map((BB => BB.eventType)),
+             JB = [...oB, ...new Set(yB)].slice(0, RM + 2);
+           JB.length > 0 && QB.push(`- Logs these custom events: ${JB.join(", ")}.`);
+           const MB = function(BB) {
+             var OB, GB;
+             if (null === BB || void 0 === BB) return null;
+             const YB = (null !== (OB = BB.calls) && void 0 !== OB ? OB : []).flatMap((BB => {
```

#### 655. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9329-L9333` → after: `L9329-L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9329-L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9329-L9333) · [Before (L9329-L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9329-L9333)

```diff
-                   name: BH,
-                   strings: LH,
-                   where: AH
-                 } = HH;
-                 return "onPlayerJoin" !== kz(AH) || void 0 === LH[0] ? [] : "giveItem" === BH ? [LH[0]] : "applyEffect" === BH ? [`the ${LH[0]} effect`] : []
+                   name: OB,
+                   strings: GB,
+                   where: YB
+                 } = BB;
+                 return "onPlayerJoin" !== dy(YB) || void 0 === GB[0] ? [] : "giveItem" === OB ? [GB[0]] : "applyEffect" === OB ? [`the ${GB[0]} effect`] : []
```

#### 656. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9335` → after: `L9335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9335) · [Before (L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9335)

```diff
-               rH = (null !== (LH = HH.messages) && void 0 !== LH ? LH : []).filter((HH => {
+               DB = (null !== (GB = BB.messages) && void 0 !== GB ? GB : []).filter((BB => {
```

#### 657. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9337-L9340` → after: `L9337-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9337-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9337-L9340) · [Before (L9337-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9337-L9340)

```diff
-                   where: BH
-                 } = HH;
-                 return "onPlayerJoin" === kz(BH)
-               })).slice(0, HC).map((HH => {
+                   where: OB
+                 } = BB;
+                 return "onPlayerJoin" === dy(OB)
+               })).slice(0, OJ).map((BB => {
```

#### 658. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9342-L9344` → after: `L9342-L9344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9342-L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9342-L9344) · [Before (L9342-L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9342-L9344)

```diff
-                   text: BH
-                 } = HH;
-                 return JSON.stringify(BH.length > BC ? `${BH.slice(0,BC-1).trimEnd()}\u2026` : BH)
+                   text: OB
+                 } = BB;
+                 return JSON.stringify(OB.length > GJ ? `${OB.slice(0,GJ-1).trimEnd()}\u2026` : OB)
```

#### 659. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9346-L9352` → after: `L9346-L9352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9346-L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9346-L9352) · [Before (L9346-L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9346-L9352)

```diff
-               SH = [...new Set(AH)].slice(0, yz),
-               hH = [...0 === SH.length ? [] : [`gives ${LC(SH)}`], ...0 === rH.length ? [] : [`says ${LC(rH)}`]];
-             return 0 === hH.length ? null : hH.join(", and ")
-           }(HH);
-           if (null !== EH && SH.push(`- When a player joins (onPlayerJoin), my code already ${EH}.`), null !== HH && 0 === (null !== (AH = null === (rH = HH.messages) || void 0 === rH ? void 0 : rH.length) && void 0 !== AH ? AH : 0)) {
-             const BH = HH.playerText.slice(0, vE).map((HH => JSON.stringify(eC(HH, PE))));
-             BH.length > 0 && SH.push(`- Already shows players messages like ${BH.join(", ")}: an idea can change one, rather than add it again.`)
+               QB = [...new Set(YB)].slice(0, BJ),
+               oB = [...0 === QB.length ? [] : [`gives ${YJ(QB)}`], ...0 === DB.length ? [] : [`says ${YJ(DB)}`]];
+             return 0 === oB.length ? null : oB.join(", and ")
+           }(BB);
+           if (null !== MB && QB.push(`- When a player joins (onPlayerJoin), my code already ${MB}.`), null !== BB && 0 === (null !== (YB = null === (DB = BB.messages) || void 0 === DB ? void 0 : DB.length) && void 0 !== YB ? YB : 0)) {
+             const OB = BB.playerText.slice(0, AM).map((BB => JSON.stringify(gJ(BB, VM))));
+             OB.length > 0 && QB.push(`- Already shows players messages like ${OB.join(", ")}: an idea can change one, rather than add it again.`)
```

#### 660. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9354` → after: `L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9354) · [Before (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9354)

```diff
-           return SH
+           return QB
```

#### 661. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9356` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9356) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9356)

```diff
-         const UE = [{
+         const nM = [{
```

#### 662. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9381` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9381) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9381)

```diff
-         }], VE = "Next change";
+         }], UM = "Next change";
```

#### 663. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9383-L9384` → after: `L9383-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9383-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9383-L9384) · [Before (L9383-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9383-L9384)

```diff
-         function OE(HH) {
-           return /^((your|the|one|my) )?next change\b/.test(KE(HH))
+         function fM(BB) {
+           return /^((your|the|one|my) )?next change\b/.test(iM(BB))
```

#### 664. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9387-L9389` → after: `L9387-L9389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9387-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9387-L9389) · [Before (L9387-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9387-L9389)

```diff
-         function bE(HH, BH) {
-           const LH = UE.find((BH => BH.key === HH));
-           return BH ? LH.gentleHeading : LH.heading
+         function kM(BB, OB) {
+           const GB = nM.find((OB => OB.key === BB));
+           return OB ? GB.gentleHeading : GB.heading
```

#### 665. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9392-L9393` → after: `L9392-L9393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9392-L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9392-L9393) · [Before (L9392-L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9392-L9393)

```diff
-         function kE(HH, BH) {
-           const LH = HH.sections.filter((HH => "trackNext" !== HH.key)),
+         function dM(BB, OB) {
+           const GB = BB.sections.filter((BB => "trackNext" !== BB.key)),
```

#### 666. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9395-L9399` → after: `L9395-L9399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9395-L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9395-L9399) · [Before (L9395-L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9395-L9399)

```diff
-               texts: AH,
-               isChanged: rH
-             } = BH([HH.summary, ...LH.map((HH => HH.markdown))]);
-           if (!rH) return HH;
-           const [SH, ...hH] = AH;
+               texts: YB,
+               isChanged: DB
+             } = OB([BB.summary, ...GB.map((BB => BB.markdown))]);
+           if (!DB) return BB;
+           const [QB, ...oB] = YB;
```

#### 667. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9401-L9406` → after: `L9401-L9406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9401-L9406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9401-L9406) · [Before (L9401-L9406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9401-L9406)

```diff
-             summary: SH,
-             sections: HH.sections.map((HH => {
-               const BH = LH.indexOf(HH);
-               return -1 === BH ? HH : {
-                 ...HH,
-                 markdown: hH[BH]
+             summary: QB,
+             sections: BB.sections.map((BB => {
+               const OB = GB.indexOf(BB);
+               return -1 === OB ? BB : {
+                 ...BB,
+                 markdown: oB[OB]
```

#### 668. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9411` → after: `L9411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9411) · [Before (L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9411)

```diff
-         const mE = 3;
+         const KM = 3;
```

#### 669. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9413-L9418` → after: `L9413-L9418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9413-L9418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9413-L9418) · [Before (L9413-L9418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9413-L9418)

```diff
-         function oE(HH) {
-           const BH = HH.trimEnd(),
-             LH = /^ {0,3}(#{1,6})(?:\s+(.*))?$/.exec(BH);
-           var AH;
-           if (null !== LH) return {
-             text: IE(null !== (AH = LH[2]) && void 0 !== AH ? AH : ""),
+         function uM(BB) {
+           const OB = BB.trimEnd(),
+             GB = /^ {0,3}(#{1,6})(?:\s+(.*))?$/.exec(OB);
+           var YB;
+           if (null !== GB) return {
+             text: mM(null !== (YB = GB[2]) && void 0 !== YB ? YB : ""),
```

#### 670. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9420` → after: `L9420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9420) · [Before (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9420)

```diff
-             style: LH[1]
+             style: GB[1]
```

#### 671. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9422-L9424` → after: `L9422-L9424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9422-L9424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9422-L9424) · [Before (L9422-L9424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9422-L9424)

```diff
-           const rH = /^\s*(\*\*|__)(.+?)\1(?:\s*:)?$/.exec(BH);
-           return null !== rH && (rH[2].trim().split(/\s+/).length <= mE || cE.has(KE(rH[2]))) ? {
-             text: rH[2],
+           const DB = /^\s*(\*\*|__)(.+?)\1(?:\s*:)?$/.exec(OB);
+           return null !== DB && (DB[2].trim().split(/\s+/).length <= KM || LM.has(iM(DB[2]))) ? {
+             text: DB[2],
```

#### 672. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9430-L9433` → after: `L9430-L9433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9430-L9433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9430-L9433) · [Before (L9430-L9433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9430-L9433)

```diff
-         function IE(HH) {
-           let BH = HH.length;
-           for (; BH > 0 && "#" === HH[BH - 1];) BH--;
-           return BH === HH.length || BH > 0 && !/\s/.test(HH[BH - 1]) ? HH : HH.slice(0, BH).trimEnd()
+         function mM(BB) {
+           let OB = BB.length;
+           for (; OB > 0 && "#" === BB[OB - 1];) OB--;
+           return OB === BB.length || OB > 0 && !/\s/.test(BB[OB - 1]) ? BB : BB.slice(0, OB).trimEnd()
```

#### 673. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9435` → after: `L9435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9435) · [Before (L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9435)

```diff
-         const fE = /^(\s*)```/;
+         const IM = /^(\s*)```/;
```

#### 674. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9437-L9439` → after: `L9437-L9439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9437-L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9437-L9439) · [Before (L9437-L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9437-L9439)

```diff
-         function lE(HH, BH, LH) {
-           for (let AH = BH + 1; AH < LH; AH++)
-             if (fE.test(HH[AH])) return /^\s*```\s*$/.test(HH[AH]);
+         function FM(BB, OB, GB) {
+           for (let YB = OB + 1; YB < GB; YB++)
+             if (IM.test(BB[YB])) return /^\s*```\s*$/.test(BB[YB]);
```

#### 675. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9443-L9444` → after: `L9443-L9444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9443-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9443-L9444) · [Before (L9443-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9443-L9444)

```diff
-         function KE(HH) {
-           return HH.toLowerCase().replace(/[*_`:]/g, "").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim()
+         function iM(BB) {
+           return BB.toLowerCase().replace(/[*_`:]/g, "").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim()
```

#### 676. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9446` → after: `L9446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9446) · [Before (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9446)

```diff
-         const cE = new Set(UE.flatMap((HH => [HH.heading.toLowerCase(), HH.gentleHeading.toLowerCase()])));
+         const LM = new Set(nM.flatMap((BB => [BB.heading.toLowerCase(), BB.gentleHeading.toLowerCase()])));
```

#### 677. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9448-L9451` → after: `L9448-L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9448-L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9448-L9451) · [Before (L9448-L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9448-L9451)

```diff
-         function eE(HH) {
-           var BH, LH;
-           const AH = KE(HH);
-           return null !== (BH = null === (LH = UE.find((HH => HH.matches.test(AH)))) || void 0 === LH ? void 0 : LH.key) && void 0 !== BH ? BH : null
+         function gM(BB) {
+           var OB, GB;
+           const YB = iM(BB);
+           return null !== (OB = null === (GB = nM.find((BB => BB.matches.test(YB)))) || void 0 === GB ? void 0 : GB.key) && void 0 !== OB ? OB : null
```

#### 678. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9453)

```diff
-         const qE = "\0", gE = /^\s*([-*+]|\d+[.)])\s/;
+         const rM = "\0", XM = /^\s*([-*+]|\d+[.)])\s/;
```

#### 679. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9455-L9461` → after: `L9455-L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9455-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9455-L9461) · [Before (L9455-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9455-L9461)

```diff
-         function NE(HH) {
-           return HH.flatMap(((BH, LH) => {
-             var AH;
-             if (BH !== qE) return [BH];
-             const rH = null !== (AH = HH[LH - 1]) && void 0 !== AH ? AH : "",
-               SH = HH.slice(LH + 1).find((HH => HH !== qE && "" !== HH.trim()));
-             return void 0 === SH || gE.test(SH) || "" === rH.trim() || rH === qE ? [] : [""]
+         function wM(BB) {
+           return BB.flatMap(((OB, GB) => {
+             var YB;
+             if (OB !== rM) return [OB];
+             const DB = null !== (YB = BB[GB - 1]) && void 0 !== YB ? YB : "",
+               QB = BB.slice(GB + 1).find((BB => BB !== rM && "" !== BB.trim()));
+             return void 0 === QB || XM.test(QB) || "" === DB.trim() || DB === rM ? [] : [""]
```

#### 680. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9465-L9487` → after: `L9465-L9487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9465-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9465-L9487) · [Before (L9465-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9465-L9487)

```diff
-         function RE(HH) {
-           const BH = [],
-             LH = new Map,
-             AH = new Set;
-           let rH = null,
-             SH = null,
-             hH = !1;
-           const tH = HH.split(/\r?\n/);
-           for (const [EH, XH] of tH.entries()) {
-             fE.test(XH) && (hH = !hH && lE(tH, EH, tH.length));
-             const HH = hH ? null : oE(XH),
-               GH = null !== HH && (null === SH || HH.style === SH || cE.has(KE(HH.text))),
-               YH = null !== HH && GH ? eE(HH.text) : null;
-             var zH;
-             if (null !== HH && OE(HH.text)) rH = null !== (zH = LH.get("fixFirst")) && void 0 !== zH ? zH : [], LH.set("fixFirst", rH), rH.push(XH);
-             else if (null !== YH) {
- ... (7 more removed lines; see GitHub link above)
+         function EM(BB) {
+           const OB = [],
+             GB = new Map,
+             YB = new Set;
+           let DB = null,
+             QB = null,
+             oB = !1;
+           const jB = BB.split(/\r?\n/);
+           for (const [MB, PB] of jB.entries()) {
+             IM.test(PB) && (oB = !oB && FM(jB, MB, jB.length));
+             const BB = oB ? null : uM(PB),
+               zB = null !== BB && (null === QB || BB.style === QB || LM.has(iM(BB.text))),
+               lB = null !== BB && zB ? gM(BB.text) : null;
+             var yB;
+             if (null !== BB && fM(BB.text)) DB = null !== (yB = GB.get("fixFirst")) && void 0 !== yB ? yB : [], GB.set("fixFirst", DB), DB.push(PB);
+             else if (null !== lB) {
+ ... (7 more added lines; see GitHub link above)
```

#### 681. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9489-L9495` → after: `L9489-L9495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9489-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9489-L9495) · [Before (L9489-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9489-L9495)

```diff
-                 key: BH
-               } = HH;
-               const rH = LH.get(BH);
-               return void 0 === rH ? [] : [{
-                 key: BH,
-                 heading: bE(BH, AH.has(BH)),
-                 markdown: NE(rH).trim()
+                 key: OB
+               } = BB;
+               const DB = GB.get(OB);
+               return void 0 === DB ? [] : [{
+                 key: OB,
+                 heading: kM(OB, YB.has(OB)),
+                 markdown: wM(DB).trim()
```

#### 682. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9500` → after: `L9500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9500) · [Before (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9500)

```diff
-         const jE = dr, nE = 864e5, FE = 7, DE = 6e4, wE = "-", ZE = .05, dE = 1.95;
+         const cM = bD, hM = 864e5, aM = 7, eM = 6e4, TM = "-", bM = .05, CM = 1.95;
```

#### 683. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9502-L9504` → after: `L9502-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9502-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9502-L9504) · [Before (L9502-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9502-L9504)

```diff
-         function aE(HH) {
-           let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return Math.abs(HH - 1) < ZE ? "same" : (BH ? HH > 1 : HH < 1) ? "better" : "worse"
+         function HM(BB) {
+           let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           return Math.abs(BB - 1) < bM ? "same" : (OB ? BB > 1 : BB < 1) ? "better" : "worse"
```

#### 684. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9507-L9511` → after: `L9507-L9511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9507-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9507-L9511) · [Before (L9507-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9507-L9511)

```diff
-         function sE(HH) {
-           let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           return null !== HH && void 0 !== HH && Number.isFinite(HH) ? Number(HH.toFixed(BH)).toLocaleString("en-US", {
-             maximumFractionDigits: BH
-           }) : wE
+         function vM(BB) {
+           let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           return null !== BB && void 0 !== BB && Number.isFinite(BB) ? Number(BB.toFixed(OB)).toLocaleString("en-US", {
+             maximumFractionDigits: OB
+           }) : TM
```

#### 685. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9514-L9515` → after: `L9514-L9515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9514-L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9514-L9515) · [Before (L9514-L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9514-L9515)

```diff
-         function JE(HH) {
-           return null === HH || void 0 === HH ? wE : sE(HH / DE, 1)
+         function sM(BB) {
+           return null === BB || void 0 === BB ? TM : vM(BB / eM, 1)
```

#### 686. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9518-L9520` → after: `L9518-L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9518-L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9518-L9520) · [Before (L9518-L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9518-L9520)

```diff
-         function iE(HH) {
-           let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           return null !== HH && void 0 !== HH && Number.isFinite(HH) ? `${sE(HH,BH)}%` : wE
+         function xM(BB) {
+           let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           return null !== BB && void 0 !== BB && Number.isFinite(BB) ? `${vM(BB,OB)}%` : TM
```

#### 687. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9523-L9526` → after: `L9523-L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9523-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9523-L9526) · [Before (L9523-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9523-L9526)

```diff
-         function pE(HH, BH) {
-           if (null === HH || null === BH || 0 === BH) return wE;
-           const LH = Math.round((HH - BH) / BH * 100);
-           return `${LH>0?"+":""}${LH}%`
+         function tM(BB, OB) {
+           if (null === BB || null === OB || 0 === OB) return TM;
+           const GB = Math.round((BB - OB) / OB * 100);
+           return `${GB>0?"+":""}${GB}%`
```

#### 688. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9528` → after: `L9528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9528) · [Before (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9528)

```diff
-         const yE = {
+         const BP = {
```

#### 689. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9553-L9561` → after: `L9553-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9553-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9553-L9561) · [Before (L9553-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9553-L9561)

```diff
-         function HX(HH, BH) {
-           let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yE.plain;
-           if (null === HH || void 0 === HH || null === BH || void 0 === BH || 0 === BH) return wE;
-           const AH = HH / BH;
-           if ("same" === aE(AH)) return "about the same";
-           const rH = void 0 === LH.note ? "" : ` (${LH.note})`;
-           if (AH >= dE) return `better, ${sE(AH,AH<10?1:0)} times the median${rH}`;
-           const SH = Math.round(100 * Math.abs(AH - 1));
-           return AH > 1 ? `better, ${SH}% ${LH.more}${rH}` : `worse, ${SH}% ${LH.less}${rH}`
+         function OP(BB, OB) {
+           let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BP.plain;
+           if (null === BB || void 0 === BB || null === OB || void 0 === OB || 0 === OB) return TM;
+           const YB = BB / OB;
+           if ("same" === HM(YB)) return "about the same";
+           const DB = void 0 === GB.note ? "" : ` (${GB.note})`;
+           if (YB >= CM) return `better, ${vM(YB,YB<10?1:0)} times the median${DB}`;
+           const QB = Math.round(100 * Math.abs(YB - 1));
+           return YB > 1 ? `better, ${QB}% ${GB.more}${DB}` : `worse, ${QB}% ${GB.less}${DB}`
```

#### 690. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9564-L9566` → after: `L9564-L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9564-L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9564-L9566) · [Before (L9564-L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9564-L9566)

```diff
-         function BX(HH) {
-           const BH = Math.round(HH);
-           return 50 === BH ? ", half" : BH >= 33 && BH < 50 ? ", under half" : ""
+         function GP(BB) {
+           const OB = Math.round(BB);
+           return 50 === OB ? ", half" : OB >= 33 && OB < 50 ? ", under half" : ""
```

#### 691. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9569-L9572` → after: `L9569-L9572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9569-L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9569-L9572) · [Before (L9569-L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9569-L9572)

```diff
-         function LX(HH, BH) {
-           if (null === HH || void 0 === HH || null === BH || void 0 === BH || 100 === BH) return wE;
-           const LH = aE((100 - HH) / (100 - BH), !1);
-           return "same" === LH ? "about the same" : LH
+         function YP(BB, OB) {
+           if (null === BB || void 0 === BB || null === OB || void 0 === OB || 100 === OB) return TM;
+           const GB = HM((100 - BB) / (100 - OB), !1);
+           return "same" === GB ? "about the same" : GB
```

#### 692. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9575-L9576` → after: `L9575-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9575-L9576) · [Before (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9575-L9576)

```diff
-         function AX(HH, BH) {
-           return BH === wE ? `median custom game: ${HH}` : `median custom game: ${HH}; this game is ${BH}`
+         function DP(BB, OB) {
+           return OB === TM ? `median custom game: ${BB}` : `median custom game: ${BB}; this game is ${OB}`
```

#### 693. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9579-L9582` → after: `L9579-L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9579-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9579-L9582) · [Before (L9579-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9579-L9582)

```diff
-         function rX(HH) {
-           var BH;
-           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "or";
-           return HH.length <= 1 ? null !== (BH = HH[0]) && void 0 !== BH ? BH : "" : `${HH.slice(0,-1).join(", ")} ${LH} ${HH[HH.length-1]}`
+         function QP(BB) {
+           var OB;
+           let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "or";
+           return BB.length <= 1 ? null !== (OB = BB[0]) && void 0 !== OB ? OB : "" : `${BB.slice(0,-1).join(", ")} ${GB} ${BB[BB.length-1]}`
```

#### 694. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9585-L9586` → after: `L9585-L9586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9585-L9586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9585-L9586) · [Before (L9585-L9586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9585-L9586)

```diff
-         function SX(HH, BH) {
-           return BH ? `(${HH})` : `[[${HH}]]`
+         function oP(BB, OB) {
+           return OB ? `(${BB})` : `[[${BB}]]`
```

#### 695. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9589-L9590` → after: `L9589-L9590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9589-L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9589-L9590) · [Before (L9589-L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9589-L9590)

```diff
-         function hX(HH) {
-           return 1 === HH ? "day" : `${HH} days`
+         function jP(BB) {
+           return 1 === BB ? "day" : `${BB} days`
```

#### 696. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9593-L9594` → after: `L9593-L9594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9593-L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9593-L9594) · [Before (L9593-L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9593-L9594)

```diff
-         function tX(HH) {
-           return new Date(HH).toISOString().slice(0, 10)
+         function yP(BB) {
+           return new Date(BB).toISOString().slice(0, 10)
```

#### 697. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9597-L9598` → after: `L9597-L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9597-L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9597-L9598) · [Before (L9597-L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9597-L9598)

```diff
-         function zX(HH) {
-           return "" === HH ? "(none)" : HH
+         function JP(BB) {
+           return "" === BB ? "(none)" : BB
```

#### 698. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9601-L9602` → after: `L9601-L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9601-L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9601-L9602) · [Before (L9601-L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9601-L9602)

```diff
-         function CX(HH, BH) {
-           return "" === BH ? HH : `${HH}: ${BH}`
+         function MP(BB, OB) {
+           return "" === OB ? BB : `${BB}: ${OB}`
```

#### 699. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9605-L9607` → after: `L9605-L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9605-L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9605-L9607) · [Before (L9605-L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9605-L9607)

```diff
-         function EX(HH, BH) {
-           const LH = HH => `| ${HH.map((HH=>HH.replace(/\|/g,"\\|").replace(/[\r\n]+/g," "))).join(" | ")} |`;
-           return [LH(HH), LH(HH.map((() => "---"))), ...BH.map(LH)].join("\n")
+         function PP(BB, OB) {
+           const GB = BB => `| ${BB.map((BB=>BB.replace(/\|/g,"\\|").replace(/[\r\n]+/g," "))).join(" | ")} |`;
+           return [GB(BB), GB(BB.map((() => "---"))), ...OB.map(GB)].join("\n")
```

#### 700. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9609` → after: `L9609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9609) · [Before (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9609)

```diff
-         const XX = [{
+         const zP = [{
```

#### 701. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9618` → after: `L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9618) · [Before (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9618)

```diff
-         }], GX = {
+         }], lP = {
```

#### 702. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9622` → after: `L9622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9622) · [Before (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9622)

```diff
-         }, YX = {
+         }, pP = {
```

#### 703. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9628-L9629` → after: `L9628-L9629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9628-L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9628-L9629) · [Before (L9628-L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9628-L9629)

```diff
-         function uX(HH, BH) {
-           return (BH ? YX : GX)[HH]
+         function qP(BB, OB) {
+           return (OB ? pP : lP)[BB]
```

#### 704. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9631)

```diff
-         const QX = jE, WX = 2, MX = {
+         const ZP = cM, NP = 2, RP = {
```

#### 705. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9637-L9638` → after: `L9637-L9638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9637-L9638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9637-L9638) · [Before (L9637-L9638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9637-L9638)

```diff
-         function xX(HH, BH) {
-           return 100 === BH ? null : MX[aE((100 - HH) / (100 - BH), !1)]
+         function WP(BB, OB) {
+           return 100 === OB ? null : RP[HM((100 - BB) / (100 - OB), !1)]
```

#### 706. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9641-L9645` → after: `L9641-L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9641-L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9641-L9645) · [Before (L9641-L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9641-L9645)

```diff
-         function vX(HH) {
-           if (HH >= 100) return "all";
-           if (HH >= 99.5) return "almost all";
-           const BH = Math.round(HH / 10);
-           return 0 === BH ? "under 1 in 10" : `${Math.min(BH,9)} in 10`
+         function AP(BB) {
+           if (BB >= 100) return "all";
+           if (BB >= 99.5) return "almost all";
+           const OB = Math.round(BB / 10);
+           return 0 === OB ? "under 1 in 10" : `${Math.min(OB,9)} in 10`
```

#### 707. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9648-L9651` → after: `L9648-L9651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9648-L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9648-L9651) · [Before (L9648-L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9648-L9651)

```diff
-         function PX(HH, BH, LH) {
-           const AH = {
-             value: vX(HH),
-             median: vX(BH)
+         function VP(BB, OB, GB) {
+           const YB = {
+             value: AP(BB),
+             median: AP(OB)
```

#### 708. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9653-L9677` → after: `L9653-L9677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9653-L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9653-L9677) · [Before (L9653-L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9653-L9677)

```diff
-           return AH.value === AH.median === ("okay" === LH) ? AH : {
-             value: `${Math.round(HH)}%`,
-             median: `${Math.round(BH)}%`
-           }
-         }
-         const TX = "Typical Bloxd game";
- 
-         function UX(HH) {
-           var BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH;
-           const uH = null !== (BH = null === (LH = HH.stats) || void 0 === LH ? void 0 : LH.sessionDurationHistogram) && void 0 !== BH ? BH : null,
-             QH = null === uH ? null : (0, WB.M)(uH.sessionCounts, uH.maxBucketMinute),
-             WH = null === QH ? null : (0, WB.d)(QH),
-             MH = null !== (AH = null === (rH = HH.baseline) || void 0 === rH ? void 0 : rH.dropoffCurve) && void 0 !== AH ? AH : null,
-             xH = null === MH ? null : xL(MH),
-             vH = null !== (SH = null === WH || void 0 === WH ? void 0 : WH.percentStayedSessions) && void 0 !== SH ? SH : null,
-             PH = null !== (hH = null === xH || void 0 === xH ? void 0 : xH.percentStayedSessions.p50) && void 0 !== hH ? hH : null,
- ... (9 more removed lines; see GitHub link above)
+           return YB.value === YB.median === ("okay" === GB) ? YB : {
+             value: `${Math.round(BB)}%`,
+             median: `${Math.round(OB)}%`
+           }
+         }
+         const SP = "Typical Bloxd game";
+ 
+         function nP(BB) {
+           var OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB;
+           const pB = null !== (OB = null === (GB = BB.stats) || void 0 === GB ? void 0 : GB.sessionDurationHistogram) && void 0 !== OB ? OB : null,
+             qB = null === pB ? null : (0, ZO.V)(pB.sessionCounts, pB.maxBucketMinute),
+             ZB = null === qB ? null : (0, ZO.j)(qB),
+             NB = null !== (YB = null === (DB = BB.baseline) || void 0 === DB ? void 0 : DB.dropoffCurve) && void 0 !== YB ? YB : null,
+             RB = null === NB ? null : RG(NB),
+             WB = null !== (QB = null === ZB || void 0 === ZB ? void 0 : ZB.percentStayedSessions) && void 0 !== QB ? QB : null,
+             AB = null !== (oB = null === RB || void 0 === RB ? void 0 : RB.percentStayedSessions.p50) && void 0 !== oB ? oB : null,
+ ... (9 more added lines; see GitHub link above)
```

#### 709. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9679-L9681` → after: `L9679-L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9679-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9679-L9681) · [Before (L9679-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9679-L9681)

```diff
-                 verdict: HH,
-                 reason: `${(0,RS.b)(BH.value)} still playing after ${WB.g} min`,
-                 typical: BH.median,
+                 verdict: BB,
+                 reason: `${(0,wQ.e)(OB.value)} still playing after ${ZO.k} min`,
+                 typical: OB.median,
```

#### 710. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9686-L9693` → after: `L9686-L9693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9686-L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9686-L9693) · [Before (L9686-L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9686-L9693)

```diff
-           if (null !== vH && null !== TH && null !== PH && null !== UH && vH > 0 && PH > 0) {
-             const BH = TH / vH * 100,
-               LH = UH / PH * 100,
-               AH = (null === vH ? 0 : VH * vH / 100) >= QX ? xX(BH, LH) : null;
-             if (null !== AH) {
-               var bH, kH;
-               const rH = PX(BH, LH, AH);
-               OH.push({
+           if (null !== WB && null !== VB && null !== AB && null !== SB && WB > 0 && AB > 0) {
+             const OB = VB / WB * 100,
+               GB = SB / AB * 100,
+               YB = (null === WB ? 0 : nB * WB / 100) >= ZP ? WP(OB, GB) : null;
+             if (null !== YB) {
+               var fB, kB;
+               const DB = VP(OB, GB, YB);
+               UB.push({
```

#### 711. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9695-L9698` → after: `L9695-L9698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9695-L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9695-L9698) · [Before (L9695-L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9695-L9698)

```diff
-                 verdict: AH,
-                 reason: `${(0,RS.b)(rH.value)} who passed ${WB.g} min reached ${WB.c} min`,
-                 typical: rH.median,
-                 statKeys: (null !== (bH = null === (kH = HH.flow) || void 0 === kH ? void 0 : kH.edges.length) && void 0 !== bH ? bH : 0) > 0 ? ["playersStillPlaying", "eventFlow"] : ["playersStillPlaying"]
+                 verdict: YB,
+                 reason: `${(0,wQ.e)(DB.value)} who passed ${ZO.k} min reached ${ZO.i} min`,
+                 typical: DB.median,
+                 statKeys: (null !== (fB = null === (kB = BB.flow) || void 0 === kB ? void 0 : kB.edges.length) && void 0 !== fB ? fB : 0) > 0 ? ["playersStillPlaying", "eventFlow"] : ["playersStillPlaying"]
```

#### 712. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9702-L9710` → after: `L9702-L9710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9702-L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9702-L9710) · [Before (L9702-L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9702-L9710)

```diff
-           const mH = null === HH.stats ? null : (0, WB.I)(HH.stats.rankingWindow).sessionsPerPlayer,
-             oH = null !== (EH = null === (XH = HH.baseline) || void 0 === XH ? void 0 : XH.rankingWindow.sessionsPerPlayer.p50) && void 0 !== EH ? EH : null;
-           if (null !== mH && null !== oH && (null !== (GH = null === (YH = HH.stats) || void 0 === YH ? void 0 : YH.rankingWindow.uniquePlayers) && void 0 !== GH ? GH : 0) >= QX) {
-             const HH = function(HH, BH) {
-               return 0 === BH ? null : MX[aE(HH / BH)]
-             }(mH, oH);
-             if (null !== HH) {
-               const BH = function(HH, BH, LH) {
-                 const AH = HH.toFixed(1) === BH.toFixed(1) === ("okay" === LH) ? 1 : 2;
+           const dB = null === BB.stats ? null : (0, ZO.Q)(BB.stats.rankingWindow).sessionsPerPlayer,
+             KB = null !== (MB = null === (PB = BB.baseline) || void 0 === PB ? void 0 : PB.rankingWindow.sessionsPerPlayer.p50) && void 0 !== MB ? MB : null;
+           if (null !== dB && null !== KB && (null !== (zB = null === (lB = BB.stats) || void 0 === lB ? void 0 : lB.rankingWindow.uniquePlayers) && void 0 !== zB ? zB : 0) >= ZP) {
+             const BB = function(BB, OB) {
+               return 0 === OB ? null : RP[HM(BB / OB)]
+             }(dB, KB);
+             if (null !== BB) {
+               const OB = function(BB, OB, GB) {
+                 const YB = BB.toFixed(1) === OB.toFixed(1) === ("okay" === GB) ? 1 : 2;
```

#### 713. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9712-L9713` → after: `L9712-L9713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9712-L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9712-L9713) · [Before (L9712-L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9712-L9713)

```diff
-                   value: String(Number(HH.toFixed(AH))),
-                   median: String(Number(BH.toFixed(AH)))
+                   value: String(Number(BB.toFixed(YB))),
+                   median: String(Number(OB.toFixed(YB)))
```

#### 714. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9715-L9716` → after: `L9715-L9716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9715-L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9715-L9716) · [Before (L9715-L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9715-L9716)

```diff
-               }(mH, oH, HH);
-               OH.push({
+               }(dB, KB, BB);
+               UB.push({
```

#### 715. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9718-L9720` → after: `L9718-L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9718-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9718-L9720) · [Before (L9718-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9718-L9720)

```diff
-                 verdict: HH,
-                 reason: `Each player played ${BH.value} ${"1"===BH.value?"time":"times"}`,
-                 typical: BH.median,
+                 verdict: BB,
+                 reason: `Each player played ${OB.value} ${"1"===OB.value?"time":"times"}`,
+                 typical: OB.median,
```

#### 716. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9725` → after: `L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9725) · [Before (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9725)

```diff
-           return OH.length < WX ? [] : OH
+           return UB.length < NP ? [] : UB
```

#### 717. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9728-L9729` → after: `L9728-L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9728-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9728-L9729) · [Before (L9728-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9728-L9729)

```diff
-         function VX(HH) {
-           return XX.find((BH => BH.key === HH)).name
+         function UP(BB) {
+           return zP.find((OB => OB.key === BB)).name
```

#### 718. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9731` → after: `L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9731) · [Before (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9731)

```diff
-         const OX = {
+         const fP = {
```

#### 719. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9748` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9748) · [Before (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9748)

```diff
-         }, bX = {
+         }, kP = {
```

#### 720. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9761` → after: `L9761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9761) · [Before (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9761)

```diff
-         }, kX = [...Object.keys(OX), ...Object.keys(bX)].join("|"), mX = "`?(-?\\d[\\d,]*(?:\\.\\d+)?)`?", oX = "(\\s?%|\\s*[a-z]+)?", IX = `(?:(?!\\b(?:${kX})\\b|\\.\\s|[!?;\\n]).)`, fX = new RegExp(`\\b(${kX})\\b(${IX}{0,79}?(?![\\w.-]\`?-?\\d[\\d,]*(?:\\.\\d+)?\`?(?:\\s?%|\\s* … [truncated]
+         }, dP = [...Object.keys(fP), ...Object.keys(kP)].join("|"), KP = "`?(-?\\d[\\d,]*(?:\\.\\d+)?)`?", uP = "(\\s?%|\\s*[a-z]+)?", mP = `(?:(?!\\b(?:${dP})\\b|\\.\\s|[!?;\\n]).)`, IP = new RegExp(`\\b(${dP})\\b(${mP}{0,79}?(?![\\w.-]\`?-?\\d[\\d,]*(?:\\.\\d+)?\`?(?:\\s?%|\\s* … [truncated]
```

#### 721. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9850-L9852` → after: `L9850-L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9850-L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9850-L9852) · [Before (L9850-L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9850-L9852)

```diff
-         function qX(HH) {
-           const BH = (null !== HH && void 0 !== HH ? HH : "").trim().toLowerCase();
-           return eX.get(BH)
+         function rP(BB) {
+           const OB = (null !== BB && void 0 !== BB ? BB : "").trim().toLowerCase();
+           return gP.get(OB)
```

#### 722. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9855-L9861` → after: `L9855-L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9855-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9855-L9861) · [Before (L9855-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9855-L9861)

```diff
-         function gX(HH, BH, LH, AH) {
-           const rH = qX(BH),
-             SH = qX(AH),
-             hH = HH => void 0 !== HH && !/^\s/.test(HH) && void 0 === qX(HH);
-           if (hH(BH) || hH(AH) || void 0 !== rH && void 0 === SH) return null;
-           if (void 0 === rH || void 0 === SH) {
-             return "%" === (null === SH || void 0 === SH ? void 0 : SH.unit) && 0 !== HH && Math.abs(HH) < 1 ? null : [HH, LH]
+         function XP(BB, OB, GB, YB) {
+           const DB = rP(OB),
+             QB = rP(YB),
+             oB = BB => void 0 !== BB && !/^\s/.test(BB) && void 0 === rP(BB);
+           if (oB(OB) || oB(YB) || void 0 !== DB && void 0 === QB) return null;
+           if (void 0 === DB || void 0 === QB) {
+             return "%" === (null === QB || void 0 === QB ? void 0 : QB.unit) && 0 !== BB && Math.abs(BB) < 1 ? null : [BB, GB]
```

#### 723. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9863` → after: `L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9863) · [Before (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9863)

```diff
-           return rH.unit !== SH.unit ? null : void 0 === rH.seconds || void 0 === SH.seconds || rH.seconds === SH.seconds ? [HH, LH] : [HH * rH.seconds, LH * SH.seconds]
+           return DB.unit !== QB.unit ? null : void 0 === DB.seconds || void 0 === QB.seconds || DB.seconds === QB.seconds ? [BB, GB] : [BB * DB.seconds, GB * QB.seconds]
```

#### 724. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9866-L9867` → after: `L9866-L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9866-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9866-L9867) · [Before (L9866-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9866-L9867)

```diff
-         function NX(HH) {
-           return void 0 !== qX(HH)
+         function wP(BB) {
+           return void 0 !== rP(BB)
```

#### 725. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9870-L9872` → after: `L9870-L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9870-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9870-L9872) · [Before (L9870-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9870-L9872)

```diff
-         function RX(HH, BH) {
-           const LH = BH[0];
-           return LH === LH.toUpperCase() ? HH[0].toUpperCase() + HH.slice(1) : HH
+         function EP(BB, OB) {
+           const GB = OB[0];
+           return GB === GB.toUpperCase() ? BB[0].toUpperCase() + BB.slice(1) : BB
```

#### 726. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9875-L9877` → after: `L9875-L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9875-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9875-L9877) · [Before (L9875-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9875-L9877)

```diff
-         function jX(HH, BH) {
-           const LH = HH.toLowerCase();
-           return Object.hasOwn(OX, LH) ? BH ? RX(OX[LH], HH) : HH : Object.hasOwn(bX, LH) ? BH ? HH : RX(bX[LH], HH) : null
+         function cP(BB, OB) {
+           const GB = BB.toLowerCase();
+           return Object.hasOwn(fP, GB) ? OB ? EP(fP[GB], BB) : BB : Object.hasOwn(kP, GB) ? OB ? BB : EP(kP[GB], BB) : null
```

#### 727. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9879` → after: `L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9879) · [Before (L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9879)

```diff
-         const nX = "[*_`]*([-\u2212]?\\d(?:[\\d_]|,(?=\\d))*(?:\\.\\d+)?)[*_`]*", FX = "(\\s?%|\\s*[a-z]+)?", DX = new RegExp(`^((?:(?![.!?;\\n]\\s|[.!?;\\n]$)[^\\d\\n]){0,60}?)(?:\\bfrom\\s+${nX}${FX}\\s+to\\s+|${nX}${FX}\\s*(?:\u2192|->)\\s*)${nX}${FX}`, "i"), wX = new RegExp(` … [truncated]
+         const hP = "[*_`]*([-\u2212]?\\d(?:[\\d_]|,(?=\\d))*(?:\\.\\d+)?)[*_`]*", aP = "(\\s?%|\\s*[a-z]+)?", eP = new RegExp(`^((?:(?![.!?;\\n]\\s|[.!?;\\n]$)[^\\d\\n]){0,60}?)(?:\\bfrom\\s+${hP}${aP}\\s+to\\s+|${hP}${aP}\\s*(?:\u2192|->)\\s*)${hP}${aP}`, "i"), TP = new RegExp(` … [truncated]
```

#### 728. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9881-L9882` → after: `L9881-L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9881-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9881-L9882) · [Before (L9881-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9881-L9882)

```diff
-         function aX(HH) {
-           return (0, jS.c)(HH, /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/, (0, jS.i)("\\w$")).length > 0
+         function HP(BB) {
+           return (0, EQ.f)(BB, /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/, (0, EQ.n)("\\w$")).length > 0
```

#### 729. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9884` → after: `L9884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9884) · [Before (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9884)

```diff
-         const sX = /\b(?:players?|sessions?|people|plays?|times|percent)\b/i, JX = /percent|pct|chance|rate|prob/i, iX = 2e3;
+         const vP = /\b(?:players?|sessions?|people|plays?|times|percent)\b/i, sP = /percent|pct|chance|rate|prob/i, xP = 2e3;
```

#### 730. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9886-L9888` → after: `L9886-L9888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9886-L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9886-L9888) · [Before (L9886-L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9886-L9888)

```diff
-         function pX(HH) {
-           const BH = Number(HH.replace(/\u2212/g, "-").replace(/[,_]/g, ""));
-           return Number.isFinite(BH) ? BH : null
+         function tP(BB) {
+           const OB = Number(BB.replace(/\u2212/g, "-").replace(/[,_]/g, ""));
+           return Number.isFinite(OB) ? OB : null
```

#### 731. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9891-L9902` → after: `L9891-L9902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9891-L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9891-L9902) · [Before (L9891-L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9891-L9902)

```diff
-         function yX(HH) {
-           if (null === HH || void 0 === HH) return null;
-           const BH = new Map,
-             LH = WC(HH.constants);
-           for (const AH of HH.constants) {
-             const HH = void 0 === AH.usedIn ? null : Uz(AH.name, AH.usedIn, AH.value);
-             if (null === HH || null === HH.bigger) continue;
-             const rH = xC(AH.value),
-               SH = {
-                 name: AH.name,
-                 effect: HH,
-                 value: rH
+         function Bz(BB) {
+           if (null === BB || void 0 === BB) return null;
+           const OB = new Map,
+             GB = NJ(BB.constants);
+           for (const YB of BB.constants) {
+             const BB = void 0 === YB.usedIn ? null : ny(YB.name, YB.usedIn, YB.value);
+             if (null === BB || null === BB.bigger) continue;
+             const DB = WJ(YB.value),
+               QB = {
+                 name: YB.name,
+                 effect: BB,
+                 value: DB
```

#### 732. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9904-L9960` → after: `L9904-L9960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9904-L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9904-L9960) · [Before (L9904-L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9904-L9960)

```diff
-             BH.set(AH.name, SH);
-             const hH = MC(AH.name, LH);
-             null === hH || BH.has(hH) || BH.set(hH, SH)
-           }
-           return BH
-         }
- 
-         function HG(HH, BH, LH, AH) {
-           return null === BH || null === LH || BH === LH ? null : {
-             end: AH,
-             note: LH > BH ? HH.effect.bigger : HH.effect.smaller,
-             hint: HH.effect.hint
-           }
-         }
- 
-         function BG(HH, BH, LH) {
- ... (41 more removed lines; see GitHub link above)
+             OB.set(YB.name, QB);
+             const oB = RJ(YB.name, GB);
+             null === oB || OB.has(oB) || OB.set(oB, QB)
+           }
+           return OB
+         }
+ 
+         function Oz(BB, OB, GB, YB) {
+           return null === OB || null === GB || OB === GB ? null : {
+             end: YB,
+             note: GB > OB ? BB.effect.bigger : BB.effect.smaller,
+             hint: BB.effect.hint
+           }
+         }
+ 
+         function Gz(BB, OB, GB) {
+ ... (41 more added lines; see GitHub link above)
```

#### 733. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9962-L9969` → after: `L9962-L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9962-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9962-L9969) · [Before (L9962-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9962-L9969)

```diff
-                 end: BH
-               } = HH;
-               return BH === tH.end
-             })) || LH.push({
-               constant: rH,
-               key: SH[0],
-               start: SH.index,
-               ...tH
+                 end: OB
+               } = BB;
+               return OB === jB.end
+             })) || GB.push({
+               constant: DB,
+               key: QB[0],
+               start: QB.index,
+               ...jB
```

#### 734. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9972` → after: `L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9972) · [Before (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9972)

```diff
-           return LH.sort(((HH, BH) => HH.end - BH.end))
+           return GB.sort(((BB, OB) => BB.end - OB.end))
```

#### 735. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9974-L9975` → after: `L9974-L9975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9974-L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9974-L9975) · [Before (L9974-L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9974-L9975)

```diff
-         const SG = /^\s*(?:(?:const|let|var)\s+)?([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*[:=]\s*([-\u2212]?\d[\d_]*(?:\.\d+)?)\s*[;,]?\s*(?:\/\/.*)?$/;
-         const hG = {
+         const oz = /^\s*(?:(?:const|let|var)\s+)?([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*[:=]\s*([-\u2212]?\d[\d_]*(?:\.\d+)?)\s*[;,]?\s*(?:\/\/.*)?$/;
+         const jz = {
```

#### 736. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9983-L9985` → after: `L9983-L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9983-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9983-L9985) · [Before (L9983-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9983-L9985)

```diff
-         }, tG = /\bmore (?:\w+ )?(?:time|room|chances?)\b|\b(?:larger|bigger|wider|more|extra) margin\b|\bsplit second\b|\bfall (?:further|farther)\b/i, zG = /\b(?:sooner|quicker|earlier)\b|\bless (?:\w+ )?(?:time|room)\b/i, CG = {
-           test: HH => /\b(?:alive|around) longer\b|\bslower\b|\blonger (?:break|window|wait|countdown|round)s?\b/i.test(HH) || (0, jS.c)(HH, /\blasts? longer\b/i, (0, jS.g)(/\b(?:sessions?|players?|games?|play|they|you)\s$/i)).length > 0
-         }, EG = /\b(?:faster|sooner|quicker|shorter|snappier)\b|\bspeed (?:\w+ )?up\b|\b(?:less|reduce|reduces|reducing|cut|cuts|cutting) (?:the )?(?:down ?time|wait(?:ing)?(?: time)?)\b/i, XG = {
+         }, yz = /\bmore (?:\w+ )?(?:time|room|chances?)\b|\b(?:larger|bigger|wider|more|extra) margin\b|\bsplit second\b|\bfall (?:further|farther)\b/i, Jz = /\b(?:sooner|quicker|earlier)\b|\bless (?:\w+ )?(?:time|room)\b/i, Mz = {
+           test: BB => /\b(?:alive|around) longer\b|\bslower\b|\blonger (?:break|window|wait|countdown|round)s?\b/i.test(BB) || (0, EQ.f)(BB, /\blasts? longer\b/i, (0, EQ.j)(/\b(?:sessions?|players?|games?|play|they|you)\s$/i)).length > 0
+         }, Pz = /\b(?:faster|sooner|quicker|shorter|snappier)\b|\bspeed (?:\w+ )?up\b|\b(?:less|reduce|reduces|reducing|cut|cuts|cutting) (?:the )?(?:down ?time|wait(?:ing)?(?: time)?)\b/i, zz = {
```

#### 737. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9987-L9988` → after: `L9987-L9988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9987-L9988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9987-L9988) · [Before (L9987-L9988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9987-L9988)

```diff
-             bigger: CG,
-             smaller: EG
+             bigger: Mz,
+             smaller: Pz
```

#### 738. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9991-L9992` → after: `L9991-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9991-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L9991-L9992) · [Before (L9991-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L9991-L9992)

```diff
-             bigger: CG,
-             smaller: EG
+             bigger: Mz,
+             smaller: Pz
```

#### 739. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10001` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10001) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10001)

```diff
-               test: HH => /\bcheaper\b|\bmore affordable\b|\b(?:easier|quicker|faster) to (?:afford|buy)\b|\bcosts? less\b/i.test(HH) || (0, jS.c)(HH, /\bafford\b/i, (0, jS.g)(/\b(?:not|n't|cannot|never)\s(?:\w+\s)?$/i)).length > 0
+               test: BB => /\bcheaper\b|\bmore affordable\b|\b(?:easier|quicker|faster) to (?:afford|buy)\b|\bcosts? less\b/i.test(BB) || (0, EQ.f)(BB, /\bafford\b/i, (0, EQ.j)(/\b(?:not|n't|cannot|never)\s(?:\w+\s)?$/i)).length > 0
```

#### 740. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10008-L10020` → after: `L10008-L10020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10008-L10020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10008-L10020) · [Before (L10008-L10020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10008-L10020)

```diff
-         }, GG = /^[^.!?\n]{0,30}?\b(?:to|so|so that|which|for|making|giving|letting)\b/i, YG = /[,;:(]|\[\[|\s(?:and|then|checking|while|but)\s|[.!?](?=\s|\*|_|$)|\n/i, uG = /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/;
- 
-         function QG(HH, BH) {
-           const LH = GG.exec(BH);
-           if (null === LH) return null;
-           const AH = BH.slice(LH[0].length),
-             rH = AH.search(YG),
-             SH = -1 === rH ? AH : AH.slice(0, rH);
-           if ((0, jS.c)(SH, uG, (0, jS.i)("\\w$")).length > 0 || /\b(?:not|never|cannot|no longer|cant|dont|wont|doesnt|isnt|arent)\b|n['\u2019]t\b/i.test(SH)) return null;
-           let hH;
-           hH = "caughtSooner" === HH || "caughtLater" === HH ? "caughtSooner" === HH ? {
-             bigger: zG,
-             smaller: tG
+         }, lz = /^[^.!?\n]{0,30}?\b(?:to|so|so that|which|for|making|giving|letting)\b/i, pz = /[,;:(]|\[\[|\s(?:and|then|checking|while|but)\s|[.!?](?=\s|\*|_|$)|\n/i, qz = /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/;
+ 
+         function Zz(BB, OB) {
+           const GB = lz.exec(OB);
+           if (null === GB) return null;
+           const YB = OB.slice(GB[0].length),
+             DB = YB.search(pz),
+             QB = -1 === DB ? YB : YB.slice(0, DB);
+           if ((0, EQ.f)(QB, qz, (0, EQ.n)("\\w$")).length > 0 || /\b(?:not|never|cannot|no longer|cant|dont|wont|doesnt|isnt|arent)\b|n['\u2019]t\b/i.test(QB)) return null;
+           let oB;
+           oB = "caughtSooner" === BB || "caughtLater" === BB ? "caughtSooner" === BB ? {
+             bigger: Jz,
+             smaller: yz
```

#### 741. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10022-L10026` → after: `L10022-L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10022-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10022-L10026) · [Before (L10022-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10022-L10026)

```diff
-             bigger: tG,
-             smaller: zG
-           } : XG[HH];
-           const tH = hH.bigger.test(SH);
-           return tH === hH.smaller.test(SH) ? null : tH ? "bigger" : "smaller"
+             bigger: yz,
+             smaller: Jz
+           } : zz[BB];
+           const jB = oB.bigger.test(QB);
+           return jB === oB.smaller.test(QB) ? null : jB ? "bigger" : "smaller"
```

#### 742. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10029-L10030` → after: `L10029-L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10029-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10029-L10030) · [Before (L10029-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10029-L10030)

```diff
-         function WG(HH) {
-           return hG[HH.effect.bigger]
+         function Nz(BB) {
+           return jz[BB.effect.bigger]
```

#### 743. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10033-L10040` → after: `L10033-L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10033-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10033-L10040) · [Before (L10033-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10033-L10040)

```diff
-         function MG(HH, BH, LH, AH) {
-           const rH = "bigger" === LH,
-             SH = rH ? "bigger" : "smaller",
-             hH = function(HH) {
-               const BH = /^\s*if\s*\(.*\)\s*\{?\s*((?:api\.)?[A-Za-z_$][\w$]*)\s*\(/.exec(HH);
-               return null === BH || BH[1].length > 30 ? null : BH[1]
-             }(AH),
-             tH = `\`${BH}\``;
+         function Rz(BB, OB, GB, YB) {
+           const DB = "bigger" === GB,
+             QB = DB ? "bigger" : "smaller",
+             oB = function(BB) {
+               const OB = /^\s*if\s*\(.*\)\s*\{?\s*((?:api\.)?[A-Za-z_$][\w$]*)\s*\(/.exec(BB);
+               return null === OB || OB[1].length > 30 ? null : OB[1]
+             }(YB),
+             jB = `\`${OB}\``;
```

#### 744. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10044` → after: `L10044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10044) · [Before (L10044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10044)

```diff
-               return `a ${rH?"higher":"lower"} ${tH} catches players ${rH===("caughtSooner"===HH)?"sooner":"later"}`;
+               return `a ${DB?"higher":"lower"} ${jB} catches players ${DB===("caughtSooner"===BB)?"sooner":"later"}`;
```

#### 745. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10046` → after: `L10046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10046) · [Before (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10046)

```diff
-               return null !== hH ? `a ${SH} ${tH} runs \`${hH}\` ${rH?"later":"sooner"}` : `a ${SH} ${tH} makes it ${rH?"last longer":"end sooner"}`;
+               return null !== oB ? `a ${QB} ${jB} runs \`${oB}\` ${DB?"later":"sooner"}` : `a ${QB} ${jB} makes it ${DB?"last longer":"end sooner"}`;
```

#### 746. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10048` → after: `L10048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10048) · [Before (L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10048)

```diff
-               return `a ${SH} ${tH} makes the wait ${rH?"longer":"shorter"}`;
+               return `a ${QB} ${jB} makes the wait ${DB?"longer":"shorter"}`;
```

#### 747. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10050` → after: `L10050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10050) · [Before (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10050)

```diff
-               return `a ${SH} ${tH} makes it happen ${rH?"more":"less"} often`;
+               return `a ${QB} ${jB} makes it happen ${DB?"more":"less"} often`;
```

#### 748. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10052` → after: `L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10052) · [Before (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10052)

```diff
-               return `a ${SH} ${tH} costs ${rH?"more":"less"}`;
+               return `a ${QB} ${jB} costs ${DB?"more":"less"}`;
```

#### 749. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10054)

```diff
-               return `a ${SH} ${tH} means players need ${rH?"more":"less"}`
+               return `a ${QB} ${jB} means players need ${DB?"more":"less"}`
```

#### 750. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10059` → after: `L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10059) · [Before (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10059)

```diff
-           const LH = (0, RS.I)(HH, BH);
+           const GB = (0, wQ.D)(BB, OB);
```

#### 751. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10088)

```diff
-                   tH = void 0 === rH ? null : QG(rH, HH.slice(BH.end, null !== (AH = null === hH || void 0 === hH ? void 0 : hH.start) && void 0 !== AH ? AH : HH.length));
+                   jB = void 0 === DB ? null : Zz(DB, BB.slice(OB.end, null !== (YB = null === oB || void 0 === oB ? void 0 : oB.start) && void 0 !== YB ? YB : BB.length));
```

#### 752. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10097` → after: `L10097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10097) · [Before (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10097)

```diff
-             const HH = null !== (hH = null === LH || void 0 === LH || null === (tH = LH.get(zH.constant.name)) || void 0 === tH ? void 0 : tH.usedIn) && void 0 !== hH ? hH : "",
+             const BB = null !== (oB = null === GB || void 0 === GB || null === (jB = GB.get(yB.constant.name)) || void 0 === jB ? void 0 : jB.usedIn) && void 0 !== oB ? oB : "",
```

#### 753. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10099` → after: `L10099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10099) · [Before (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10099)

```diff
-             SH(zH.end, "direction", zH.constant.name, `${AH?"Careful":"Check the direction"}: in your code ${BH}.`, HH)
+             QB(yB.end, "direction", yB.constant.name, `${YB?"Careful":"Check the direction"}: in your code ${OB}.`, BB)
```

#### 754. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10109-L10110` → after: `L10109-L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10109-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10109-L10110) · [Before (L10109-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10109-L10110)

```diff
-               if (vG.test(hH.replace(new RegExp(`\`?${LH.replace(/[.$]/g,"\\$&")}\`?`, "g"), " "))) {
-                 const HH = AH ? `\`${LH}\` only ${BH.unrelated}, so Studio can't tell if it helps players stay.` : `\`${LH}\` only ${BH.unrelated}; Studio can't link it to players leaving.`;
+               if (Az.test(oB.replace(new RegExp(`\`?${GB.replace(/[.$]/g,"\\$&")}\`?`, "g"), " "))) {
+                 const BB = YB ? `\`${GB}\` only ${OB.unrelated}, so Studio can't tell if it helps players stay.` : `\`${GB}\` only ${OB.unrelated}; Studio can't link it to players leaving.`;
```

#### 755. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10114` → after: `L10114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10114) · [Before (L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10114)

```diff
-             null !== BH.sideEffect && SH(rH, "sideEffect", BH.name, `Also changes your leaderboard: ${BH.sideEffect}.`, BH.usedIn)
+             null !== OB.sideEffect && QB(DB, "sideEffect", OB.name, `Also changes your leaderboard: ${OB.sideEffect}.`, OB.usedIn)
```

#### 756. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10134-L10136` → after: `L10134-L10136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10134-L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10134-L10136) · [Before (L10134-L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10134-L10136)

```diff
-             AH = `${(0,RS.e)(HH)}(?![\\w$])`,
-             rH = new RegExp(`([\\w$.]+|JSON\\.stringify\\([^()]*\\))\\.length\\s*<=?\\s*${AH}`).exec(BH);
-           if (null !== rH && OG.test(LH) && new RegExp(`${(0,RS.e)(rH[1])}\\.push\\(`).test(BH)) return "caps how long a queue in your code gets";
+             YB = `${(0,wQ.h)(BB)}(?![\\w$])`,
+             DB = new RegExp(`([\\w$.]+|JSON\\.stringify\\([^()]*\\))\\.length\\s*<=?\\s*${YB}`).exec(OB);
+           if (null !== DB && fz.test(GB) && new RegExp(`${(0,wQ.h)(DB[1])}\\.push\\(`).test(OB)) return "caps how long a queue in your code gets";
```

#### 757. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10138` → after: `L10138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10138) · [Before (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10138)

```diff
-           const SH = new RegExp(`^\\s*(?:(?:while|for)\\s*\\((?:[^;()]*;)?\\s*)?${TG}\\s*<=?\\s*${AH}`).test(BH);
+           const QB = new RegExp(`^\\s*(?:(?:while|for)\\s*\\((?:[^;()]*;)?\\s*)?${Sz}\\s*<=?\\s*${YB}`).test(OB);
```

#### 758. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10141-L10142` → after: `L10141-L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10141-L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10141-L10142) · [Before (L10141-L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10141-L10142)

```diff
-             const BH = (0, RS.t)(HH).filter((HH => !/^(?:max|min|num|number|to|scan|of|count)$/.test(HH)));
-             return `sets how many ${0===BH.length?"slots":BH.join(" ")} your code checks`
+             const OB = (0, wQ.q)(BB).filter((BB => !/^(?:max|min|num|number|to|scan|of|count)$/.test(BB)));
+             return `sets how many ${0===OB.length?"slots":OB.join(" ")} your code checks`
```

#### 759. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10148-L10150` → after: `L10148-L10150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10148-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10148-L10150) · [Before (L10148-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10148-L10150)

```diff
-           const AH = `${(0,RS.e)(HH)}(?![\\w$])`,
-             rH = new RegExp(`(?:parseInt|parseFloat|Number)\\([^()]*\\)\\s*:\\s*${AH}|(?:\\?\\?|\\|\\|)\\s*${AH}`).test(BH),
-             SH = (0, RS.t)(HH),
+           const YB = `${(0,wQ.h)(BB)}(?![\\w$])`,
+             DB = new RegExp(`(?:parseInt|parseFloat|Number)\\([^()]*\\)\\s*:\\s*${YB}|(?:\\?\\?|\\|\\|)\\s*${YB}`).test(OB),
+             QB = (0, wQ.q)(BB),
```

#### 760. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10152-L10153` → after: `L10152-L10153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10152-L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10152-L10153) · [Before (L10152-L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10152-L10153)

```diff
-           if (!rH || void 0 === hH || !/leaderboard/i.test(LH) || !new RegExp(`\\b${hH}\\b`, "i").test(LH)) return null;
-           return `it is the ${SH.filter((HH=>!mG.has(HH))).map((HH=>Object.hasOwn(kG,HH)?kG[HH]:HH)).join(" ")} every new player starts with`
+           if (!DB || void 0 === oB || !/leaderboard/i.test(GB) || !new RegExp(`\\b${oB}\\b`, "i").test(GB)) return null;
+           return `it is the ${QB.filter((BB=>!Kz.has(BB))).map((BB=>Object.hasOwn(dz,BB)?dz[BB]:BB)).join(" ")} every new player starts with`
```

#### 761. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10160` → after: `L10160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10160) · [Before (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10160)

```diff
-               return [...HH.playerText, ...(null !== (BH = HH.messages) && void 0 !== BH ? BH : []).map((HH => HH.text)), ...(null !== (LH = HH.calls) && void 0 !== LH ? LH : []).flatMap((HH => HH.strings)), ...(null !== (AH = HH.functions) && void 0 !== AH ? AH : []).map((HH =>  … [truncated]
+               return [...BB.playerText, ...(null !== (OB = BB.messages) && void 0 !== OB ? OB : []).map((BB => BB.text)), ...(null !== (GB = BB.calls) && void 0 !== GB ? GB : []).flatMap((BB => BB.strings)), ...(null !== (YB = BB.functions) && void 0 !== YB ? YB : []).map((BB =>  … [truncated]
```

#### 762. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10194` → after: `L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10194) · [Before (L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10194)

```diff
-           return null !== (BH = null === (LH = HH.split(".")[1]) || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : 0
+           return null !== (OB = null === (GB = BB.split(".")[1]) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0
```

#### 763. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10197` → after: `L10197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10197) · [Before (L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10197)

```diff
-           const BH = [HH, `${HH}s`];
+           const OB = [BB, `${BB}s`];
```

#### 764. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10200` → after: `L10200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10200) · [Before (L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10200)

```diff
-             [`${HH}s`, BH]
+             [`${BB}s`, OB]
```

#### 765. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10217)

```diff
-             unit: `${SH[0].slice(0,SH[0].length-SH[1].length)}${1===Math.abs(rH)?hH[0]:hH[1]}`,
+             unit: `${QB[0].slice(0,QB[0].length-QB[1].length)}${1===Math.abs(DB)?oB[0]:oB[1]}`,
```

#### 766. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10225)

```diff
-           return void 0 === AH ? HH : `${HH.slice(0,HH.length-LH.length)}${1===Math.abs(BH)?AH[0]:AH[1]}`
+           return void 0 === YB ? BB : `${BB.slice(0,BB.length-GB.length)}${1===Math.abs(OB)?YB[0]:YB[1]}`
```

#### 767. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10227)

```diff
-         const gG = /[-\u2212]?\d(?:[\d_]|,(?=\d))*(?:\.\d+)?/g, NG = /\b(?:extend|boost|bump|cut|drop|double|halve|speed|slow)\w*\b/i, RG = /\b(?:set(?:s|ting)?|chang(?:e|es|ing)|mak(?:e|es|ing)|put(?:s|ting)?|adjust(?:s|ing)?|tweak(?:s|ing)?|edit(?:s|ing)?|updat(?:e|es|ing))\b/i … [truncated]
+         const Xz = /[-\u2212]?\d(?:[\d_]|,(?=\d))*(?:\.\d+)?/g, wz = /\b(?:extend|boost|bump|cut|drop|double|halve|speed|slow)\w*\b/i, Ez = /\b(?:set(?:s|ting)?|chang(?:e|es|ing)|mak(?:e|es|ing)|put(?:s|ting)?|adjust(?:s|ing)?|tweak(?:s|ing)?|edit(?:s|ing)?|updat(?:e|es|ing))\b/i … [truncated]
```

#### 768. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10295` → after: `L10295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10295) · [Before (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10295)

```diff
-                 text: `${PH}${qG(GH.unit,xH(PH))}`
+                 text: `${AB}${rz(zB.unit,RB(AB))}`
```

#### 769. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10305` → after: `L10305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10305) · [Before (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10305)

```diff
-               if (void 0 === OH || (0, jS.c)(VH.slice(OH.index + OH[0].length), RG, jG).length > 0) continue;
+               if (void 0 === UB || (0, EQ.f)(nB.slice(UB.index + UB[0].length), Ez, cz).length > 0) continue;
```

#### 770. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10325` → after: `L10325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10325) · [Before (L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10325)

```diff
-               void 0 !== LH && HH.at + HH.length > LH.at && (hH = !1), zH = `${zH.slice(0,HH.at)}${HH.text}${zH.slice(HH.at+HH.length)}`
+               void 0 !== GB && BB.at + BB.length > GB.at && (oB = !1), yB = `${yB.slice(0,BB.at)}${BB.text}${yB.slice(BB.at+BB.length)}`
```

#### 771. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10338-L10344` → after: `L10338-L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10338-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10338-L10344) · [Before (L10338-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10338-L10344)

```diff
-           const rH = (null !== (LH = null === (AH = QC(HH)) || void 0 === AH ? void 0 : AH.key) && void 0 !== LH ? LH : HH).replace(/([a-z\d])([A-Z])/g, "$1_$2").toUpperCase(),
-             SH = `${(0,RS.e)(HH)}(?![\\w$])`;
-           if (/BUDGET/.test(rH) && new RegExp(`Date\\.now\\(\\)\\s*-\\s*[\\w$.]+\\s*>=?\\s*${SH}`).test(BH)) return !0;
-           if (/(?:^|_)ERRORS?(?:_|$)|(?:^|_)ERR(?:_|$)/.test(rH) && new RegExp(`\\berr\\w*\\s*>=?\\s*${SH}`, "i").test(BH)) return !0;
-           if (/(?:^|_)(?:EXECS?|EXECUTIONS?|LOADS?|OPS|CALLS)(?:_|$)|(?:^|_)PER_TICK$/.test(rH) && new RegExp(`(?:^|[(;\\s])(?:i|j|k|n|count|ops|done|calls|runs)\\s*<=?\\s*${SH}`).test(BH)) return !0;
-           if (/INTERVAL|EVERY|TICKS/.test(rH) && new RegExp(`>=?\\s*${SH}\\s*\\)\\s*\\{?\\s*(?:optimi[sz]e|cleanup|cleanUp|gc|compact|flush|prune|purge)\\w*\\(`).test(BH)) return !0;
-           const hH = new RegExp(`([\\w$.]+)\\.size\\s*>=?\\s*${SH}\\s*\\)\\s*\\{?\\s*([\\w$.]+)\\.delete\\(`).exec(BH);
+           const DB = (null !== (GB = null === (YB = ZJ(BB)) || void 0 === YB ? void 0 : YB.key) && void 0 !== GB ? GB : BB).replace(/([a-z\d])([A-Z])/g, "$1_$2").toUpperCase(),
+             QB = `${(0,wQ.h)(BB)}(?![\\w$])`;
+           if (/BUDGET/.test(DB) && new RegExp(`Date\\.now\\(\\)\\s*-\\s*[\\w$.]+\\s*>=?\\s*${QB}`).test(OB)) return !0;
+           if (/(?:^|_)ERRORS?(?:_|$)|(?:^|_)ERR(?:_|$)/.test(DB) && new RegExp(`\\berr\\w*\\s*>=?\\s*${QB}`, "i").test(OB)) return !0;
+           if (/(?:^|_)(?:EXECS?|EXECUTIONS?|LOADS?|OPS|CALLS)(?:_|$)|(?:^|_)PER_TICK$/.test(DB) && new RegExp(`(?:^|[(;\\s])(?:i|j|k|n|count|ops|done|calls|runs)\\s*<=?\\s*${QB}`).test(OB)) return !0;
+           if (/INTERVAL|EVERY|TICKS/.test(DB) && new RegExp(`>=?\\s*${QB}\\s*\\)\\s*\\{?\\s*(?:optimi[sz]e|cleanup|cleanUp|gc|compact|flush|prune|purge)\\w*\\(`).test(OB)) return !0;
+           const oB = new RegExp(`([\\w$.]+)\\.size\\s*>=?\\s*${QB}\\s*\\)\\s*\\{?\\s*([\\w$.]+)\\.delete\\(`).exec(OB);
```

#### 772. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10358` → after: `L10358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10358) · [Before (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10358)

```diff
-             void 0 === EH || null === (null !== (rH = null === AH || void 0 === AH || null === (SH = AH.get(CH)) || void 0 === SH ? void 0 : SH.unrelated) && void 0 !== rH ? rH : null) && !ZG(CH, EH) || LH.add(CH)
+             void 0 === MB || null === (null !== (DB = null === YB || void 0 === YB || null === (QB = YB.get(JB)) || void 0 === QB ? void 0 : QB.unrelated) && void 0 !== DB ? DB : null) && !bz(JB, MB) || GB.add(JB)
```

#### 773. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10371-L10372` → after: `L10371-L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10371-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10371-L10372) · [Before (L10371-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10371-L10372)

```diff
-               const BH = `${XH}\n${HH}`;
-               hH.set(BH, [...null !== (zH = hH.get(BH)) && void 0 !== zH ? zH : [], CH])
+               const OB = `${PB}\n${BB}`;
+               oB.set(OB, [...null !== (yB = oB.get(OB)) && void 0 !== yB ? yB : [], JB])
```

#### 774. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10389` → after: `L10389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10389) · [Before (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10389)

```diff
-           return LH.length === HH.size ? HH : new Map(LH)
+           return GB.length === BB.size ? BB : new Map(GB)
```

#### 775. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10395` → after: `L10395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10395) · [Before (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10395)

```diff
-           return (0, RS.w)(HH).some((HH => JG.test(HH)))
+           return (0, wQ.u)(BB).some((BB => sz.test(BB)))
```

#### 776. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10405` → after: `L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10405) · [Before (L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10405)

```diff
-                 LH = null !== BH && void 0 !== BH ? BH : pG(HH.type);
+                 GB = null !== OB && void 0 !== OB ? OB : tz(BB.type);
```

#### 777. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10409` → after: `L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10409) · [Before (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10409)

```diff
-               return (null !== (LH = BH.players) && void 0 !== LH ? LH : -1) - (null !== (AH = HH.players) && void 0 !== AH ? AH : -1) || HH.timeMs - BH.timeMs || HH.name.localeCompare(BH.name)
+               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1) || BB.timeMs - OB.timeMs || BB.name.localeCompare(OB.name)
```

#### 778. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10418` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10418) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10418)

```diff
-               return (null !== (BH = HH.categories) && void 0 !== BH ? BH : [{
+               return (null !== (OB = BB.categories) && void 0 !== OB ? OB : [{
```

#### 779. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10459` → after: `L10459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10459) · [Before (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10459)

```diff
-           return void 0 === AH ? null : void 0 === rH || (null !== (BH = AH.players) && void 0 !== BH ? BH : -1) >= (null !== (LH = rH.players) && void 0 !== LH ? LH : -1) ? AH : null
+           return void 0 === YB ? null : void 0 === DB || (null !== (OB = YB.players) && void 0 !== OB ? OB : -1) >= (null !== (GB = DB.players) && void 0 !== GB ? GB : -1) ? YB : null
```

#### 780. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10464-L10465` → after: `L10464-L10465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10464-L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10464-L10465) · [Before (L10464-L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10464-L10465)

```diff
-               const BH = HH.name.length > HH.type.length ? (0, RS.w)(HH.name.slice(HH.type.length)).slice(0, 1) : [];
-               return (BH.length > 0 ? BH : (0, RS.w)(HH.type)).filter((HH => !JG.test(HH) && !iG.test(HH) && !/^\d+$/.test(HH))).map(LY)
+               const OB = BB.name.length > BB.type.length ? (0, wQ.u)(BB.name.slice(BB.type.length)).slice(0, 1) : [];
+               return (OB.length > 0 ? OB : (0, wQ.u)(BB.type)).filter((BB => !sz.test(BB) && !xz.test(BB) && !/^\d+$/.test(BB))).map(Yl)
```

#### 781. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10490-L10491` → after: `L10490-L10491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10490-L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10490-L10491) · [Before (L10490-L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10490-L10491)

```diff
-           const AH = null !== (LH = null === BH || void 0 === BH ? void 0 : BH.logged) && void 0 !== LH ? LH : null,
-             rH = null === AH ? "" : `, in ${AH} where it is logged`,
+           const YB = null !== (GB = null === OB || void 0 === OB ? void 0 : OB.logged) && void 0 !== GB ? GB : null,
+             DB = null === YB ? "" : `, in ${YB} where it is logged`,
```

#### 782. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10496-L10497` → after: `L10496-L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10496-L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10496-L10497) · [Before (L10496-L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10496-L10497)

```diff
-               const HH = null !== (hH = null === BH || void 0 === BH ? void 0 : BH.from) && void 0 !== hH ? hH : "the hardest wave",
-                 LH = null !== (tH = null === BH || void 0 === BH ? void 0 : BH.to) && void 0 !== tH ? tH : "the hardest wave";
+               const BB = null !== (oB = null === OB || void 0 === OB ? void 0 : OB.from) && void 0 !== oB ? oB : "the hardest wave",
+                 GB = null !== (jB = null === OB || void 0 === OB ? void 0 : OB.to) && void 0 !== jB ? jB : "the hardest wave";
```

#### 783. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10499` → after: `L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10499) · [Before (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10499)

```diff
-                 text: `Weaker enemies once players reach ${HH}`,
+                 text: `Weaker enemies once players reach ${BB}`,
```

#### 784. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10503` → after: `L10503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10503) · [Before (L10503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10503)

```diff
-                 text: `A longer break before ${LH}`,
+                 text: `A longer break before ${GB}`,
```

#### 785. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10515` → after: `L10515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10515) · [Before (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10515)

```diff
-                 text: `A message at ${HH} saying what comes next and how to get ready${rH}`,
+                 text: `A message at ${BB} saying what comes next and how to get ready${DB}`,
```

#### 786. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10518` → after: `L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10518) · [Before (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10518)

```diff
-                 text: `A new tower, weapon or upgrade to unlock just before ${LH}`,
+                 text: `A new tower, weapon or upgrade to unlock just before ${GB}`,
```

#### 787. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10523` → after: `L10523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10523) · [Before (L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10523)

```diff
-               const HH = null === BH ? "the hardest jump" : `the hardest jump after ${BH.from}`;
+               const BB = null === OB ? "the hardest jump" : `the hardest jump after ${OB.from}`;
```

#### 788. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10525` → after: `L10525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10525) · [Before (L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10525)

```diff
-                 text: `More time or room at ${HH}`,
+                 text: `More time or room at ${BB}`,
```

#### 789. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10529` → after: `L10529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10529) · [Before (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10529)

```diff
-                 text: `A sign or message with a tip just before ${HH}${rH}`,
+                 text: `A sign or message with a tip just before ${BB}${DB}`,
```

#### 790. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10532` → after: `L10532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10532) · [Before (L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10532)

```diff
-                 text: `A checkpoint block just before ${HH}`,
+                 text: `A checkpoint block just before ${BB}`,
```

#### 791. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10535` → after: `L10535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10535) · [Before (L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10535)

```diff
-                 text: `A shorter gap or a lower block to jump at ${HH}`,
+                 text: `A shorter gap or a lower block to jump at ${BB}`,
```

#### 792. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10538` → after: `L10538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10538) · [Before (L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10538)

```diff
-                 text: `An easier side route round ${HH}`,
+                 text: `An easier side route round ${BB}`,
```

#### 793. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10548` → after: `L10548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10548) · [Before (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10548)

```diff
-                 text: `Less needed to reach ${LH}`,
+                 text: `Less needed to reach ${GB}`,
```

#### 794. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10552` → after: `L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10552) · [Before (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10552)

```diff
-                 text: `A message at ${HH} saying exactly what to do to reach ${LH}${rH}`,
+                 text: `A message at ${BB} saying exactly what to do to reach ${GB}${DB}`,
```

#### 795. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10555` → after: `L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10555) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10555)

```diff
-                 text: `A small reward at ${HH}, so players want the next one`,
+                 text: `A small reward at ${BB}, so players want the next one`,
```

#### 796. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10558` → after: `L10558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10558) · [Before (L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10558)

```diff
-                 text: `Signs, arrows or a lit path from ${HH} to ${LH}`,
+                 text: `Signs, arrows or a lit path from ${BB} to ${GB}`,
```

#### 797. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10561` → after: `L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10561) · [Before (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10561)

```diff
-                 text: `A shortcut or helper item for the part before ${LH}`,
+                 text: `A shortcut or helper item for the part before ${GB}`,
```

#### 798. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10576` → after: `L10576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10576) · [Before (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10576)

```diff
-             const LH = "step" === HH.kind ? (0, RS.w)(HH.names).join(" ") : "";
+             const GB = "step" === BB.kind ? (0, wQ.u)(BB.names).join(" ") : "";
```

#### 799. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10588` → after: `L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10588) · [Before (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10588)

```diff
-               const HH = (null !== (hH = null === AH || void 0 === AH ? void 0 : AH.callbacks) && void 0 !== hH ? hH : []).some((HH => {
+               const BB = (null !== (oB = null === YB || void 0 === YB ? void 0 : YB.callbacks) && void 0 !== oB ? oB : []).some((BB => {
```

#### 800. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10604` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10604) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10604)

```diff
-                   text: `A welcome message${BH?" in onPlayerJoin":""} saying the goal in one line`,
+                   text: `A welcome message${OB?" in onPlayerJoin":""} saying the goal in one line`,
```

#### 801. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10616` → after: `L10616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10616) · [Before (L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10616)

```diff
-                 const AH = `about ${HH-1} ${2===HH?"minute":"minutes"} in`;
+                 const YB = `about ${BB-1} ${2===BB?"minute":"minutes"} in`;
```

#### 802. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10622` → after: `L10622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10622) · [Before (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10622)

```diff
-                   text: `A cheaper reward or unlock, reached by ${AH}`,
+                   text: `A cheaper reward or unlock, reached by ${YB}`,
```

#### 803. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10626)

```diff
-                   text: `A message giving the next goal on an event players reach by ${AH}`,
+                   text: `A message giving the next goal on an event players reach by ${YB}`,
```

#### 804. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10632` → after: `L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10632) · [Before (L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10632)

```diff
-                   text: `A second goal opening on an event players reach by ${AH}`,
+                   text: `A second goal opening on an event players reach by ${YB}`,
```

#### 805. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10649` → after: `L10649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10649) · [Before (L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10649)

```diff
-           const rH = "step" === HH.focus.kind && null !== (BH = HH.focus.causesElsewhere) && void 0 !== BH ? BH : new Set,
+           const DB = "step" === BB.focus.kind && null !== (OB = BB.focus.causesElsewhere) && void 0 !== OB ? OB : new Set,
```

#### 806. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10651)

```diff
-             hH = (null !== (LH = null === (AH = HH.digest) || void 0 === AH ? void 0 : AH.constants) && void 0 !== LH ? LH : []).filter((HH => {
+             oB = (null !== (GB = null === (YB = BB.digest) || void 0 === YB ? void 0 : YB.constants) && void 0 !== GB ? GB : []).filter((BB => {
```

#### 807. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10659` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10659) · [Before (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10659)

```diff
-               parts: (0, RS.w)(HH.name)
+               parts: (0, wQ.u)(BB.name)
```

#### 808. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10664` → after: `L10664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10664) · [Before (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10664)

```diff
-               return !(QY(LH, uY) && "step" === HH.focus.kind && !QY((0, RS.w)(HH.focus.to), uY)) && !LH.some((HH => rH.has(LY(HH))))
+               return !(Zl(GB, ql) && "step" === BB.focus.kind && !Zl((0, wQ.u)(BB.focus.to), ql)) && !GB.some((BB => DB.has(Yl(BB))))
```

#### 809. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10678` → after: `L10678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10678) · [Before (L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10678)

```diff
-                   AH.push(`${HH} ${rH.name} (${null!==hH&&void 0!==hH?hH:`${rH.value} now`})`)
+                   YB.push(`${BB} ${DB.name} (${null!==oB&&void 0!==oB?oB:`${DB.value} now`})`)
```

#### 810. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10697)

```diff
-             return `(${[...HH.matchAll(IY)].map((HH=>{let[,BH]=HH;return BH})).join(", ")})`
+             return `(${[...BB.matchAll(ml)].map((BB=>{let[,OB]=BB;return OB})).join(", ")})`
```

#### 811. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10703)

```diff
-           if (null === HH || HH.length > RS.p) return null;
+           if (null === BB || BB.length > wQ.o) return null;
```

#### 812. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10705` → after: `L10705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10705) · [Before (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10705)

```diff
-           for (const [, LH, AH] of(0, jS.c)(BH, lY, jS.j)) {
+           for (const [, GB, YB] of(0, EQ.f)(OB, Fl, EQ.p)) {
```

#### 813. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10707` → after: `L10707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10707) · [Before (L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10707)

```diff
-             if (!(void 0 === LH && new RegExp(`(?:function\\s+|(?:const|let|var)\\s+)${AH}\\b`).test(BH))) return "api" === LH ? `api.${AH}` : AH
+             if (!(void 0 === GB && new RegExp(`(?:function\\s+|(?:const|let|var)\\s+)${YB}\\b`).test(OB))) return "api" === GB ? `api.${YB}` : YB
```

#### 814. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10709)

```diff
-           return KY.some((HH => (0, jS.c)(BH, HH, jS.j).length > 0)) ? "async" : null
+           return il.some((BB => (0, EQ.f)(OB, BB, EQ.p).length > 0)) ? "async" : null
```

#### 815. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10711` → after: `L10711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10711) · [Before (L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10711)

```diff
-         const eY = ["playerId", "playerID", "pid", "p", "id", "player", "plr"], qY = /\bloop|getPlayerIds|\bfor each\b|\bevery player\b|\beach player\b/i, gY = HH => new RegExp(`\\b${HH}\\s*\\(([^)]*)\\)`), NY = /[A-Za-z_$][\w$]*/g, RY = /^\s*(?:[A-Za-z_$][\w$]*(?:\s*=\s*[^,()]+) … [truncated]
+         const gl = ["playerId", "playerID", "pid", "p", "id", "player", "plr"], rl = /\bloop|getPlayerIds|\bfor each\b|\bevery player\b|\beach player\b/i, Xl = BB => new RegExp(`\\b${BB}\\s*\\(([^)]*)\\)`), wl = /[A-Za-z_$][\w$]*/g, El = /^\s*(?:[A-Za-z_$][\w$]*(?:\s*=\s*[^,()]+) … [truncated]
```

#### 816. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10726-L10727` → after: `L10726-L10727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10726-L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10726-L10727) · [Before (L10726-L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10726-L10727)

```diff
-           const rH = (0, RS.d)(BH);
-           return [new RegExp(`\\b(?:const|let|var${AH?"|function|class":""})\\s+${rH}(?![\\w$])`), new RegExp(`\\b(?:const|let|var)\\s*[[{](?:[^=;]*[^=;\\w$.])?${rH}(?![\\w$])`), new RegExp(`(?:^|[^\\w$.])${rH}\\s*=>`), new RegExp(`\\(((?:[^()]*[^()\\w$.])?${rH}(?![\\w$])[^()]*)\ … [truncated]
+           const DB = (0, wQ.f)(OB);
+           return [new RegExp(`\\b(?:const|let|var${YB?"|function|class":""})\\s+${DB}(?![\\w$])`), new RegExp(`\\b(?:const|let|var)\\s*[[{](?:[^=;]*[^=;\\w$.])?${DB}(?![\\w$])`), new RegExp(`(?:^|[^\\w$.])${DB}\\s*=>`), new RegExp(`\\(((?:[^()]*[^()\\w$.])?${DB}(?![\\w$])[^()]*)\ … [truncated]
```

#### 817. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10732` → after: `L10732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10732) · [Before (L10732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10732)

```diff
-           return new RegExp(`(?:^|[^\\w$.])${LH}(?![\\w$])(?!\\s*:)|(?:^\\s*|[^{,\\s]\\s+|[^{,\\s\\w$.])${LH}(?![\\w$])(?=\\s*:)`).test(HH)
+           return new RegExp(`(?:^|[^\\w$.])${GB}(?![\\w$])(?!\\s*:)|(?:^\\s*|[^{,\\s]\\s+|[^{,\\s\\w$.])${GB}(?![\\w$])(?=\\s*:)`).test(BB)
```

#### 818. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10737` → after: `L10737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10737) · [Before (L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10737)

```diff
-           if (null === HH || null === BH || null === LH || HH.length > RS.p || qY.test(BH)) return null;
+           if (null === BB || null === OB || null === GB || BB.length > wQ.o || rl.test(OB)) return null;
```

#### 819. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10739` → after: `L10739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10739) · [Before (L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10739)

```diff
-             zH = new Map((null !== (AH = LH.functions) && void 0 !== AH ? AH : []).map((HH => [HH.name, HH]))),
+             yB = new Map((null !== (YB = GB.functions) && void 0 !== YB ? YB : []).map((BB => [BB.name, BB]))),
```

#### 820. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10754` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10754) · [Before (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10754)

```diff
-             uH.push(...(xH = null !== (WH = null === (MH = gY(QH).exec(BH)) || void 0 === MH ? void 0 : MH[1]) && void 0 !== WH ? WH : "", FY(xH) ? [...xH.matchAll(NY)].map((HH => {
+             pB.push(...(RB = null !== (ZB = null === (NB = Xl(qB).exec(OB)) || void 0 === NB ? void 0 : NB[1]) && void 0 !== ZB ? ZB : "", al(RB) ? [...RB.matchAll(wl)].map((BB => {
```

#### 821. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10762` → after: `L10762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10762) · [Before (L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10762)

```diff
-               uH.push(...null !== HH && void 0 !== HH ? HH : [])
+               pB.push(...null !== BB && void 0 !== BB ? BB : [])
```

#### 822. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10777)

```diff
-           const TH = [...new Set(void 0 !== GH || void 0 === QH ? PH : null === vH ? uH : [])].filter((HH => eY.includes(HH))),
+           const VB = [...new Set(void 0 !== zB || void 0 === qB ? AB : null === WB ? pB : [])].filter((BB => gl.includes(BB))),
```

#### 823. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10779` → after: `L10779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10779) · [Before (L10779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10779)

```diff
-             VH = DY(null !== (SH = null === (hH = tH.get("onPlayerJoin")) || void 0 === hH ? void 0 : hH.params) && void 0 !== SH ? SH : []),
+             nB = el(null !== (QB = null === (oB = jB.get("onPlayerJoin")) || void 0 === oB ? void 0 : oB.params) && void 0 !== QB ? QB : []),
```

#### 824. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10793)

```diff
-               place: null !== (kH = null !== GH && void 0 !== GH ? GH : QH) && void 0 !== kH ? kH : vH.name,
+               place: null !== (kB = null !== zB && void 0 !== zB ? zB : qB) && void 0 !== kB ? kB : WB.name,
```

#### 825. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10818` → after: `L10818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10818) · [Before (L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10818)

```diff
-           for (const GH of (0, jS.c)(HH, new RegExp(`${AH}(?![\\w$])`, "g"), jS.j)) {
+           for (const zB of (0, EQ.f)(BB, new RegExp(`${YB}(?![\\w$])`, "g"), EQ.p)) {
```

#### 826. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10849` → after: `L10849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10849) · [Before (L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10849)

```diff
-           return null !== (AH = null === (rH = Lu(HH, BH, LH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [])) || void 0 === rH ? void 0 : rH.unmade) && void 0 !== AH ? AH : []
+           return null !== (YB = null === (DB = Yp(BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [])) || void 0 === DB ? void 0 : DB.unmade) && void 0 !== YB ? YB : []
```

#### 827. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10855` → after: `L10855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10855) · [Before (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10855)

```diff
-           if (null === HH || null === LH || void 0 === LH || void 0 === LH.declaredNames || HH.length > RS.p) return null;
+           if (null === BB || null === GB || void 0 === GB || void 0 === GB.declaredNames || BB.length > wQ.o) return null;
```

#### 828. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10858` → after: `L10858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10858) · [Before (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10858)

```diff
-             for (const HH of null !== (zH = QH.params) && void 0 !== zH ? zH : []) {
+             for (const BB of null !== (yB = qB.params) && void 0 !== yB ? yB : []) {
```

#### 829. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10862` → after: `L10862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10862) · [Before (L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10862)

```diff
-           for (const [, QH, WH] of(null !== BH && void 0 !== BH ? BH : "").matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)) {
+           for (const [, qB, ZB] of(null !== OB && void 0 !== OB ? OB : "").matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)) {
```

#### 830. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10877` → after: `L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10877) · [Before (L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10877)

```diff
-           for (const QH of (0, jS.c)(EH, JY, jS.j)) {
+           for (const qB of (0, EQ.f)(MB, sl, EQ.p)) {
```

#### 831. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10888` → after: `L10888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10888) · [Before (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10888)

```diff
-               line: "flag" === BH ? `let ${HH} = false` : `const ${HH} = {}`,
+               line: "flag" === OB ? `let ${BB} = false` : `const ${BB} = {}`,
```

#### 832. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10890` → after: `L10890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10890) · [Before (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10890)

```diff
-                 joinLine: `${HH}[${CH}] = api.now()`
+                 joinLine: `${BB}[${JB}] = api.now()`
```

#### 833. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10892` → after: `L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10892) · [Before (L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10892)

```diff
-             }) : 0 === (0, jS.c)(EH, new RegExp(`${HH.replace(/\$/g,"\\$")}\\s*\\(`), jS.j).length && YH.push(HH)
+             }) : 0 === (0, EQ.f)(MB, new RegExp(`${BB.replace(/\$/g,"\\$")}\\s*\\(`), EQ.p).length && lB.push(BB)
```

#### 834. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10917` → after: `L10917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10917) · [Before (L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10917)

```diff
-           alreadyLogged: new RegExp(`${ru.source}|mob`, "i"),
+           alreadyLogged: new RegExp(`${Qp.source}|mob`, "i"),
```

#### 835. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10934` → after: `L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10934) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10934)

```diff
-           toValue: HH => `String(${HH[2]})`,
+           toValue: BB => `String(${BB[2]})`,
```

#### 836. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10943` → after: `L10943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10943) · [Before (L10943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10943)

```diff
-           toValue: HH => `String(${HH[1]})`,
+           toValue: BB => `String(${BB[1]})`,
```

#### 837. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10952` → after: `L10952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10952) · [Before (L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10952)

```diff
-           toValue: HH => `String(${HH[1]})`,
+           toValue: BB => `String(${BB[1]})`,
```

#### 838. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10961` → after: `L10961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10961) · [Before (L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10961)

```diff
-           toValue: HH => `${HH[2]} ? "passed" : "failed"`,
+           toValue: BB => `${BB[2]} ? "passed" : "failed"`,
```

#### 839. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10970` → after: `L10970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10970) · [Before (L10970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10970)

```diff
-           toValue: HH => `String(${HH[5]})`,
+           toValue: BB => `String(${BB[5]})`,
```

#### 840. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10993` → after: `L10993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L10993) · [Before (L10993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L10993)

```diff
-             CH = [...HH.callbacks, ...null !== (AH = HH.functions) && void 0 !== AH ? AH : []].find((HH => {
+             JB = [...BB.callbacks, ...null !== (YB = BB.functions) && void 0 !== YB ? YB : []].find((BB => {
```

#### 841. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11000-L11002` → after: `L11000-L11002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11000-L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11000-L11002) · [Before (L11000-L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11000-L11002)

```diff
-           const EH = zH.parts.map(((HH, BH) => 0 === BH ? HH : HH.replace(/^\]\./, "]?.").replace(/^\]\[/, "]?.["))).join(LH),
-             XH = new Set([...null !== (rH = CH.params) && void 0 !== rH ? rH : [], ...null !== (SH = null === (hH = CH.body) || void 0 === hH ? void 0 : hH.locals) && void 0 !== SH ? SH : []]),
-             GH = (0, jS.c)(zH.parts.join(" "), hu, jS.j).map((HH => {
+           const MB = yB.parts.map(((BB, OB) => 0 === OB ? BB : BB.replace(/^\]\./, "]?.").replace(/^\]\[/, "]?.["))).join(GB),
+             PB = new Set([...null !== (DB = JB.params) && void 0 !== DB ? DB : [], ...null !== (QB = null === (oB = JB.body) || void 0 === oB ? void 0 : oB.locals) && void 0 !== QB ? QB : []]),
+             zB = (0, EQ.f)(yB.parts.join(" "), jp, EQ.p).map((BB => {
```

#### 842. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11006-L11007` → after: `L11006-L11007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11006-L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11006-L11007) · [Before (L11006-L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11006-L11007)

```diff
-             YH = `${/^[\w$.?[\]()]+$/.test(EH)?EH:`(${EH})`} || Date.now()`;
-           return GH.some((HH => HH === LH || XH.has(HH))) || Bu(YH, BH, HH).length > 0 ? tH : {
+             lB = `${/^[\w$.?[\]()]+$/.test(MB)?MB:`(${MB})`} || Date.now()`;
+           return zB.some((BB => BB === GB || PB.has(BB))) || Gp(lB, OB, BB).length > 0 ? jB : {
```

#### 843. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11028` → after: `L11028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11028) · [Before (L11028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11028)

```diff
-           const hH = [arguments.length > 5 && void 0 !== arguments[5] && arguments[5] ? `api.getPosition(${LH})` : null === SH ? null : "null", SH].filter((HH => null !== HH)),
+           const oB = [arguments.length > 5 && void 0 !== arguments[5] && arguments[5] ? `api.getPosition(${GB})` : null === QB ? null : "null", QB].filter((BB => null !== BB)),
```

#### 844. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11032` → after: `L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11032) · [Before (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11032)

```diff
-             code: `api.registerAnalyticsEvent(${[LH,`"${AH}"`,rH,"null",tH.code,...hH].join(", ")})`,
+             code: `api.registerAnalyticsEvent(${[GB,`"${YB}"`,DB,"null",jB.code,...oB].join(", ")})`,
```

#### 845. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11041` → after: `L11041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11041) · [Before (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11041)

```diff
-           for (const rH of null !== (AH = HH.functions) && void 0 !== AH ? AH : []) {
+           for (const DB of null !== (YB = BB.functions) && void 0 !== YB ? YB : []) {
```

#### 846. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11043` → after: `L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11043) · [Before (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11043)

```diff
-             const BH = (0, RS.w)(rH.name),
+             const OB = (0, wQ.u)(DB.name),
```

#### 847. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11056` → after: `L11056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11056) · [Before (L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11056)

```diff
-               code: `api.registerAnalyticsEvent(${tH[0]}, "${SH}", String(${zH[0]}), null, ${CH.code})`,
+               code: `api.registerAnalyticsEvent(${jB[0]}, "${QB}", String(${yB[0]}), null, ${JB.code})`,
```

#### 848. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11067` → after: `L11067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11067) · [Before (L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11067)

```diff
-             return (null !== (BH = null !== (LH = HH[1]) && void 0 !== LH ? LH : HH[2]) && void 0 !== BH ? BH : HH[3]).toUpperCase()
+             return (null !== (OB = null !== (GB = BB[1]) && void 0 !== GB ? GB : BB[2]) && void 0 !== OB ? OB : BB[3]).toUpperCase()
```

#### 849. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11072` → after: `L11072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11072) · [Before (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11072)

```diff
-           return HH.replace(new RegExp(`(?:${Wu.source})(?:[ \\t]*[:\\-\u2013\u2014](?=[ \\t]))?`, "gi"), "").replace(/[ \t]+([.,;:!?)])/g, "$1").replace(/(\S)[ \t]{2,}/g, "$1 ").trim()
+           return BB.replace(new RegExp(`(?:${Np.source})(?:[ \\t]*[:\\-\u2013\u2014](?=[ \\t]))?`, "gi"), "").replace(/[ \t]+([.,;:!?)])/g, "$1").replace(/(\S)[ \t]{2,}/g, "$1 ").trim()
```

#### 850. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11086` → after: `L11086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11086) · [Before (L11086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11086)

```diff
-           for (const hH of AH.split(/\r?\n/)) /^\s*(?:[-*+]|\d+[.)])\s+/.test(hH) || 0 === rH.length || "" === hH.trim() ? rH.push(hH) : rH[rH.length - 1] += `\n${hH}`;
+           for (const oB of YB.split(/\r?\n/)) /^\s*(?:[-*+]|\d+[.)])\s+/.test(oB) || 0 === DB.length || "" === oB.trim() ? DB.push(oB) : DB[DB.length - 1] += `\n${oB}`;
```

#### 851. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11098` → after: `L11098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11098) · [Before (L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11098)

```diff
-             text: `${LH("Paste this line, and Studio can show you")} ${BH[0].sees}.`,
+             text: `${GB("Paste this line, and Studio can show you")} ${OB[0].sees}.`,
```

#### 852. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11105` → after: `L11105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11105) · [Before (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11105)

```diff
-           return [HH.id, HH.callback, `\`${HH.code}\``, HH.sees]
+           return [BB.id, BB.callback, `\`${BB.code}\``, BB.sees]
```

#### 853. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11185` → after: `L11185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11185) · [Before (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11185)

```diff
-             LH.set(WH.to, [...null !== (SH = LH.get(WH.to)) && void 0 !== SH ? SH : [], WH]), AH.set(WH.from, (null !== (hH = AH.get(WH.from)) && void 0 !== hH ? hH : 0) + 1), rH.set(WH.from, WH.fromPlayers)
+             GB.set(ZB.to, [...null !== (QB = GB.get(ZB.to)) && void 0 !== QB ? QB : [], ZB]), YB.set(ZB.from, (null !== (oB = YB.get(ZB.from)) && void 0 !== oB ? oB : 0) + 1), DB.set(ZB.from, ZB.fromPlayers)
```

#### 854. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11202` → after: `L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11202) · [Before (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11202)

```diff
-                 const HH = null !== (SH = LH.get(AH)) && void 0 !== SH ? SH : [];
+                 const BB = null !== (QB = GB.get(YB)) && void 0 !== QB ? QB : [];
```

#### 855. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11218` → after: `L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11218) · [Before (L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11218)

```diff
-             if (null !== HH) EH.set(WH.from, [...null !== (XH = EH.get(WH.from)) && void 0 !== XH ? XH : [], {
+             if (null !== BB) MB.set(ZB.from, [...null !== (PB = MB.get(ZB.from)) && void 0 !== PB ? PB : [], {
```

#### 856. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11226-L11227` → after: `L11226-L11227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11226-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11226-L11227) · [Before (L11226-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11226-L11227)

```diff
-               const LH = null !== (BH = EH.get(HH.from)) && void 0 !== BH ? BH : [];
-               return LH.some((BH => BH.edge === HH)) ? LH : null
+               const GB = null !== (OB = MB.get(BB.from)) && void 0 !== OB ? OB : [];
+               return GB.some((OB => OB.edge === BB)) ? GB : null
```

#### 857. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11232` → after: `L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11232) · [Before (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11232)

```diff
-               return null === LH ? 1 === BH : LH[0].edge === HH
+               return null === GB ? 1 === OB : GB[0].edge === BB
```

#### 858. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11236` → after: `L11236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11236) · [Before (L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11236)

```diff
-               const SH = null !== (BH = AH.get(HH.from)) && void 0 !== BH ? BH : 1,
+               const QB = null !== (OB = YB.get(BB.from)) && void 0 !== OB ? OB : 1,
```

#### 859. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11240` → after: `L11240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11240) · [Before (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11240)

```diff
-                 XH = Math.max(HH.players, null !== (LH = null === EH || void 0 === EH ? void 0 : EH.edge.players) && void 0 !== LH ? LH : 0);
+                 PB = Math.max(BB.players, null !== (GB = null === MB || void 0 === MB ? void 0 : MB.edge.players) && void 0 !== GB ? GB : 0);
```

#### 860. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11257` → after: `L11257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11257) · [Before (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11257)

```diff
-                 depth: null !== (rH = tH.get(HH.from)) && void 0 !== rH ? rH : Number.MAX_SAFE_INTEGER
+                 depth: null !== (DB = jB.get(BB.from)) && void 0 !== DB ? DB : Number.MAX_SAFE_INTEGER
```

#### 861. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11270` → after: `L11270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11270) · [Before (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11270)

```diff
-           return null !== (LH = [...HH].sort(BH)[0]) && void 0 !== LH ? LH : null
+           return null !== (GB = [...BB].sort(OB)[0]) && void 0 !== GB ? GB : null
```

#### 862. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11275` → after: `L11275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11275) · [Before (L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11275)

```diff
-           const LH = (0, jS.c)(HH, BH, (BH => !BH[0].startsWith("-") || !/[\p{L}\p{N}]$/u.test(HH.slice(0, BH.index))))[0];
+           const GB = (0, EQ.f)(BB, OB, (OB => !OB[0].startsWith("-") || !/[\p{L}\p{N}]$/u.test(BB.slice(0, OB.index))))[0];
```

#### 863. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11278` → after: `L11278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11278) · [Before (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11278)

```diff
-             shape: `${HH.slice(0,LH.index)}#${HH.slice(LH.index+LH[0].length)}`
+             shape: `${BB.slice(0,GB.index)}#${BB.slice(GB.index+GB[0].length)}`
```

#### 864. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11294` → after: `L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11294) · [Before (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11294)

```diff
-                 return new Set(BH).size === BH.length ? BH : null
+                 return new Set(OB).size === OB.length ? OB : null
```

#### 865. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11393` → after: `L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11393) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11393)

```diff
-           return SH.shape === hH.shape && tH.to > tH.from ? tH : null
+           return QB.shape === oB.shape && jB.to > jB.from ? jB : null
```

#### 866. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11404-L11405` → after: `L11404-L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11404-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11404-L11405) · [Before (L11404-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11404-L11405)

```diff
-             tH = (null !== (rH = null === HH || void 0 === HH ? void 0 : HH.steps) && void 0 !== rH ? rH : []).filter((HH => HH.isChain && !gu(HH.from, HH.to))),
-             zH = Math.max(0, ...(null !== (SH = null === HH || void 0 === HH ? void 0 : HH.steps) && void 0 !== SH ? SH : []).map((HH => HH.fromPlayers)));
+             jB = (null !== (DB = null === BB || void 0 === BB ? void 0 : BB.steps) && void 0 !== DB ? DB : []).filter((BB => BB.isChain && !wp(BB.from, BB.to))),
+             yB = Math.max(0, ...(null !== (QB = null === BB || void 0 === BB ? void 0 : BB.steps) && void 0 !== QB ? QB : []).map((BB => BB.fromPlayers)));
```

#### 867. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11418` → after: `L11418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11418) · [Before (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11418)

```diff
-               startPlayers: null !== (CH = null === (EH = uH.start) || void 0 === EH ? void 0 : EH.players) && void 0 !== CH ? CH : zH
+               startPlayers: null !== (JB = null === (MB = pB.start) || void 0 === MB ? void 0 : MB.players) && void 0 !== JB ? JB : yB
```

#### 868. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11444` → after: `L11444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11444) · [Before (L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11444)

```diff
-           const hH = null !== (SH = null === LH || void 0 === LH ? void 0 : LH.mostAboveMedian) && void 0 !== SH ? SH : null,
+           const oB = null !== (QB = null === GB || void 0 === GB ? void 0 : GB.mostAboveMedian) && void 0 !== QB ? QB : null,
```

#### 869. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11484` → after: `L11484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11484) · [Before (L11484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11484)

```diff
-           return new Set((null !== (BH = null === (LH = HH.worldCode) || void 0 === LH ? void 0 : LH.events) && void 0 !== BH ? BH : []).filter((HH => HH.isLiteralType && !0 === HH.isUntimed)).map((HH => HH.eventType)))
+           return new Set((null !== (OB = null === (GB = BB.worldCode) || void 0 === GB ? void 0 : GB.events) && void 0 !== OB ? OB : []).filter((BB => BB.isLiteralType && !0 === BB.isUntimed)).map((BB => BB.eventType)))
```

#### 870. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11490` → after: `L11490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11490) · [Before (L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11490)

```diff
-           const hH = null !== (BH = null === (LH = HH.playerTotals) || void 0 === LH ? void 0 : LH.playerTotals) && void 0 !== BH ? BH : {},
+           const oB = null !== (OB = null === (GB = BB.playerTotals) || void 0 === GB ? void 0 : GB.playerTotals) && void 0 !== OB ? OB : {},
```

#### 871. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11493)

```diff
-           return Bz(null !== (AH = null === (rH = HH.customEvents) || void 0 === rH ? void 0 : rH.byEvent) && void 0 !== AH ? AH : {}, ((HH, BH, LH, AH) => {
+           return Gy(null !== (YB = null === (DB = BB.customEvents) || void 0 === DB ? void 0 : DB.byEvent) && void 0 !== YB ? YB : {}, ((BB, OB, GB, YB) => {
```

#### 872. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11498-L11499` → after: `L11498-L11499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11498-L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11498-L11499) · [Before (L11498-L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11498-L11499)

```diff
-               MH = null !== (rH = null === (CH = hH[HH]) || void 0 === CH || null === (EH = CH[BH]) || void 0 === EH ? void 0 : EH[LH]) && void 0 !== rH ? rH : null,
-               xH = [...null !== (XH = null === WH || void 0 === WH ? void 0 : WH.categories) && void 0 !== XH ? XH : [], {
+               NB = null !== (DB = null === (JB = oB[BB]) || void 0 === JB || null === (MB = JB[OB]) || void 0 === MB ? void 0 : MB[GB]) && void 0 !== DB ? DB : null,
+               RB = [...null !== (PB = null === ZB || void 0 === ZB ? void 0 : ZB.categories) && void 0 !== PB ? PB : [], {
```

#### 873. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11505` → after: `L11505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11505) · [Before (L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11505)

```diff
-                 return (null !== (LH = BH.players) && void 0 !== LH ? LH : -1) - (null !== (AH = HH.players) && void 0 !== AH ? AH : -1)
+                 return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1)
```

#### 874. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11510-L11511` → after: `L11510-L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11510-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11510-L11511) · [Before (L11510-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11510-L11511)

```diff
-               timeMs: Math.min(null !== (GH = null === WH || void 0 === WH ? void 0 : WH.timeMs) && void 0 !== GH ? GH : 1 / 0, AH.averageTimeMs),
-               players: null === MH ? null !== (YH = null === WH || void 0 === WH ? void 0 : WH.players) && void 0 !== YH ? YH : null : (null !== (uH = null === WH || void 0 === WH ? void 0 : WH.players) && void 0 !== uH ? uH : 0) + MH,
+               timeMs: Math.min(null !== (zB = null === ZB || void 0 === ZB ? void 0 : ZB.timeMs) && void 0 !== zB ? zB : 1 / 0, YB.averageTimeMs),
+               players: null === NB ? null !== (lB = null === ZB || void 0 === ZB ? void 0 : ZB.players) && void 0 !== lB ? lB : null : (null !== (pB = null === ZB || void 0 === ZB ? void 0 : ZB.players) && void 0 !== pB ? pB : 0) + NB,
```

#### 875. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11520-L11521` → after: `L11520-L11521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11520-L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11520-L11521) · [Before (L11520-L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11520-L11521)

```diff
-           const tH = null !== (AH = null === (rH = HH.customEvents) || void 0 === rH ? void 0 : rH.byEvent) && void 0 !== AH ? AH : {},
-             zH = null !== (SH = null === (hH = HH.playerTotals) || void 0 === hH ? void 0 : hH.playerTotals) && void 0 !== SH ? SH : {},
+           const jB = null !== (YB = null === (DB = BB.customEvents) || void 0 === DB ? void 0 : DB.byEvent) && void 0 !== YB ? YB : {},
+             yB = null !== (QB = null === (oB = BB.playerTotals) || void 0 === oB ? void 0 : oB.playerTotals) && void 0 !== QB ? QB : {},
```

#### 876. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11529` → after: `L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11529) · [Before (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11529)

```diff
-               players: null !== (AH = null === (rH = zH[HH]) || void 0 === rH || null === (SH = rH[BH]) || void 0 === SH ? void 0 : SH[LH]) && void 0 !== AH ? AH : null
+               players: null !== (YB = null === (DB = yB[BB]) || void 0 === DB || null === (QB = DB[OB]) || void 0 === QB ? void 0 : QB[GB]) && void 0 !== YB ? YB : null
```

#### 877. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11536)

```diff
-               return (null !== (LH = BH.players) && void 0 !== LH ? LH : -1) - (null !== (AH = HH.players) && void 0 !== AH ? AH : -1) || CX(HH.eventType, HH.eventValue).localeCompare(CX(BH.eventType, BH.eventValue))
+               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1) || MP(BB.eventType, BB.eventValue).localeCompare(MP(OB.eventType, OB.eventValue))
```

#### 878. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11543` → after: `L11543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11543) · [Before (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11543)

```diff
-               return [zX(HH.gameCategory), HH.eventType, zX(HH.eventValue), null === HH.players ? wE : `${sE(HH.players)} player${1===HH.players?"":"s"}`, sE(null === AH || void 0 === AH ? void 0 : AH.averageQuantity, 1), EH.has(HH.eventType) ? wE : JE(null === AH || void 0 === A … [truncated]
+               return [JP(BB.gameCategory), BB.eventType, JP(BB.eventValue), null === BB.players ? TM : `${vM(BB.players)} player${1===BB.players?"":"s"}`, vM(null === YB || void 0 === YB ? void 0 : YB.averageQuantity, 1), MB.has(BB.eventType) ? TM : sM(null === YB || void 0 === Y … [truncated]
```

#### 879. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11546-L11547` → after: `L11546-L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11546-L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11546-L11547) · [Before (L11546-L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11546-L11547)

```diff
-             WH = ["### Custom events", "", `Events my code sends, by game category, type and value. Players: different players who sent it since logging began, all-time, not this week${null===QH?"":` (last ${hX(QH.days)}: ${sE(QH.uniquePlayers)} unique players)`}; a count, never  … [truncated]
-           return XH.length > BH.eventCount && WH.push("", XH.length - BH.eventCount + " events with fewer players aren't listed."), LH.length > 0 && WH.push("", `Events whose values count up, as checkpoint 1, 2, 3, with how many players sent each value since logging began (counts … [truncated]
+             ZB = ["### Custom events", "", `Events my code sends, by game category, type and value. Players: different players who sent it since logging began, all-time, not this week${null===qB?"":` (last ${jP(qB.days)}: ${vM(qB.uniquePlayers)} unique players)`}; a count, never  … [truncated]
+           return PB.length > OB.eventCount && ZB.push("", PB.length - OB.eventCount + " events with fewer players aren't listed."), GB.length > 0 && ZB.push("", `Events whose values count up, as checkpoint 1, 2, 3, with how many players sent each value since logging began (counts … [truncated]
```

#### 880. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11555-L11556` → after: `L11555-L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11555-L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11555-L11556) · [Before (L11555-L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11555-L11556)

```diff
-               return 0 === BH ? `${LH} (${sE(AH)} players)` : `${LH} (${sE(AH)})`
-             })), rH = AH.length > BH ? [...AH.slice(0, BH - 1), "\u2026", AH[AH.length - 1]] : AH, SH = LH[0], hH = LH[LH.length - 1], tH = "" === HH.gameCategory ? HH.eventType : `${HH.eventType} in ${HH.gameCategory}`, zH = [`- ${tH}: ${rH.join(" \u2192 ")}.`, `${sE(hH.players) … [truncated]
+               return 0 === OB ? `${GB} (${vM(YB)} players)` : `${GB} (${vM(YB)})`
+             })), DB = YB.length > OB ? [...YB.slice(0, OB - 1), "\u2026", YB[YB.length - 1]] : YB, QB = GB[0], oB = GB[GB.length - 1], jB = "" === BB.gameCategory ? BB.eventType : `${BB.eventType} in ${BB.gameCategory}`, yB = [`- ${jB}: ${DB.join(" \u2192 ")}.`, `${vM(oB.players) … [truncated]
```

#### 881. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11569` → after: `L11569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11569) · [Before (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11569)

```diff
-               zH.push(`More players sent a later value than ${HH}, so the game doesn't always log ${1===GH.length?"it":"them"}: players who sent a later value went on, so they aren't counted as lost there.`)
+               yB.push(`More players sent a later value than ${BB}, so the game doesn't always log ${1===zB.length?"it":"them"}: players who sent a later value went on, so they aren't counted as lost there.`)
```

#### 882. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11579` → after: `L11579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11579) · [Before (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11579)

```diff
-           return `of ${sE(BH)} players${rH} at ${LH}, ${sE(SH)} reached ${AH} (${hH}%) and ${sE(BH-SH)} didn't (${100-hH}% of those at ${LH}${BX(100-hH)})`
+           return `of ${vM(OB)} players${DB} at ${GB}, ${vM(QB)} reached ${YB} (${oB}%) and ${vM(OB-QB)} didn't (${100-oB}% of those at ${GB}${GP(100-oB)})`
```

#### 883. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11586` → after: `L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11586) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11586)

```diff
-           return `the ${sE(AH)} who didn't are ${rH>0&&rH<.5?"under 1%":`${rQ(rH)}%`} of them`
+           return `the ${vM(YB)} who didn't are ${DB>0&&DB<.5?"under 1%":`${oq(DB)}%`} of them`
```

#### 884. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11595)

```diff
-           return /^-?\d+$/.test(BH) ? `${HH} ${BH}` : `${HH}: ${BH}`
+           return /^-?\d+$/.test(OB) ? `${BB} ${OB}` : `${BB}: ${OB}`
```

#### 885. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11601` → after: `L11601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11601) · [Before (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11601)

```diff
-           return `${LH} \u2192 ${HH.to.value}: ${LQ(HH.reached,HH.from.players,LH,HH.reached>HH.to.players?`${AH} or a later one`:AH)}`
+           return `${GB} \u2192 ${BB.to.value}: ${Dq(BB.reached,BB.from.players,GB,BB.reached>BB.to.players?`${YB} or a later one`:YB)}`
```

#### 886. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11605` → after: `L11605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11605) · [Before (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11605)

```diff
-           return `Players who didn't reach a ${HH} may still be playing other parts: say they "didn't reach" it, never that they quit, left or stopped.`
+           return `Players who didn't reach a ${BB} may still be playing other parts: say they "didn't reach" it, never that they quit, left or stopped.`
```

#### 887. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11609` → after: `L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11609) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11609)

```diff
-           return null !== HH && HH === BH ? [`Most players not reaching the next ${LH}, and the lowest share: ${AH(HH)}.`] : [...null === HH ? [] : [`Most players not reaching the next ${LH}: ${AH(HH)}.`], ...null === BH ? [] : [`Lowest share reaching the next ${LH}: ${AH(BH)}.`] … [truncated]
+           return null !== BB && BB === OB ? [`Most players not reaching the next ${GB}, and the lowest share: ${YB(BB)}.`] : [...null === BB ? [] : [`Most players not reaching the next ${GB}: ${YB(BB)}.`], ...null === OB ? [] : [`Lowest share reaching the next ${GB}: ${YB(OB)}.`] … [truncated]
```

#### 888. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11638` → after: `L11638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11638) · [Before (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11638)

```diff
-               return null === HH ? [wE, wE, wE] : [`${pr(HH.median)}${BH}`, pr(HH.p25), pr(HH.p75)]
+               return null === BB ? [TM, TM, TM] : [`${xD(BB.median)}${OB}`, xD(BB.p25), xD(BB.p75)]
```

#### 889. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11644` → after: `L11644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11644) · [Before (L11644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11644)

```diff
-               return SH(LH, ` at ${rH}${LH.playerCount<jE?" (few players)":""}`)
+               return QB(GB, ` at ${DB}${GB.playerCount<cM?" (few players)":""}`)
```

#### 890. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11666` → after: `L11666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11666) · [Before (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11666)

```diff
-                     rH = AH.length > 0 ? AH : LH;
+                     DB = YB.length > 0 ? YB : GB;
```

#### 891. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11668` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11668) · [Before (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11668)

```diff
-                     early: null !== (BH = rH[0]) && void 0 !== BH ? BH : null,
+                     early: null !== (OB = DB[0]) && void 0 !== OB ? OB : null,
```

#### 892. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11672` → after: `L11672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11672) · [Before (L11672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11672)

```diff
-               return [zX(rH), zH, zX(CH), `${sE(XH.playerCount)}${XH.playerCount<jE?" (few players)":""}`, sE(XH.count), pr(XH.sum), ...SH(XH), pr(XH.max), ...SH(YH), ...hH(uH, QH), ...hH(uH, WH)]
+               return [JP(DB), yB, JP(JB), `${vM(PB.playerCount)}${PB.playerCount<cM?" (few players)":""}`, vM(PB.count), xD(PB.sum), ...QB(PB), xD(PB.max), ...QB(lB), ...oB(pB, qB), ...oB(pB, ZB)]
```

#### 893. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11676` → after: `L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11676) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11676)

```diff
-             zH.push("", 1 === HH ? "1 event fewer players sent a number for isn't listed." : `${HH} events fewer players sent a number for aren't listed.`)
+             yB.push("", 1 === BB ? "1 event fewer players sent a number for isn't listed." : `${BB} events fewer players sent a number for aren't listed.`)
```

#### 894. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11682)

```diff
-           return `${HH.from} \u2192 ${HH.to}`
+           return `${BB.from} \u2192 ${BB.to}`
```

#### 895. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11686` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11686) · [Before (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11686)

```diff
-           return HH.isOrLater ? `${HH.to} or a later one` : HH.to
+           return BB.isOrLater ? `${BB.to} or a later one` : BB.to
```

#### 896. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11695` → after: `L11695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11695) · [Before (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11695)

```diff
-           return `Players who got both took a median ${JE(BH)} min from ${HH.from} to ${HH.to}.`
+           return `Players who got both took a median ${sM(OB)} min from ${BB.from} to ${BB.to}.`
```

#### 897. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11707` → after: `L11707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11707) · [Before (L11707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11707)

```diff
-             CH = ["### Event flow: steps between events", "", `${"saved"===AH.source?"The creator's event flow":"An event flow built for this report from the game's busiest events, joined in the order most players got them"}, over players who first got its starting events in the  … [truncated]
+             JB = ["### Event flow: steps between events", "", `${"saved"===YB.source?"The creator's event flow":"An event flow built for this report from the game's busiest events, joined in the order most players got them"}, over players who first got its starting events in the  … [truncated]
```

#### 898. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11711` → after: `L11711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11711) · [Before (L11711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11711)

```diff
-                   AH = [`- ${EQ(HH)}: ${sE(Math.min(HH.players,HH.fromPlayers))} of ${sE(HH.fromPlayers)} players${BH} (${LH}%) got ${HH.to} after it.`, HH.nextStepCount > 1 ? `It is one of ${HH.nextStepCount} ways on from ${HH.from}, so the other ${sE(HH.lost)} aren't lost playe … [truncated]
+                   YB = [`- ${zq(BB)}: ${vM(Math.min(BB.players,BB.fromPlayers))} of ${vM(BB.fromPlayers)} players${OB} (${GB}%) got ${BB.to} after it.`, BB.nextStepCount > 1 ? `It is one of ${BB.nextStepCount} ways on from ${BB.from}, so the other ${vM(BB.lost)} aren't lost playe … [truncated]
```

#### 899. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11714-L11715` → after: `L11714-L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11714-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11714-L11715) · [Before (L11714-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11714-L11715)

```diff
-               const LH = [`- ${EQ(HH)}: ${GQ(HH,BH)}.`];
-               null !== HH.later && LH.push(HH.isSkipped ? `More of them reached ${HH.later.to} (${sE(HH.later.players)}) than ${HH.to} itself (${sE(HH.toPlayers)}), so ${HH.to} isn't always logged: players who skip it aren't lost there.` : `${sE(HH.later.players)} of the ${sE(HH. … [truncated]
+               const GB = [`- ${zq(BB)}: ${pq(BB,OB)}.`];
+               null !== BB.later && GB.push(BB.isSkipped ? `More of them reached ${BB.later.to} (${vM(BB.later.players)}) than ${BB.to} itself (${vM(BB.toPlayers)}), so ${BB.to} isn't always logged: players who skip it aren't lost there.` : `${vM(BB.later.players)} of the ${vM(BB. … [truncated]
```

#### 900. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11717` → after: `L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11717) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11717)

```diff
-               return null !== HH.start && HH.start.name !== HH.from && null !== AH && LH.push(`Of the ${sE(HH.start.players)} who started at ${HH.start.name}, ${iE(100*Math.min(1,HH.players/HH.start.players))} reached ${XQ(HH)}; ${AH}.`), null !== HH.medianDeltaMs && LH.push(YQ(H … [truncated]
+               return null !== BB.start && BB.start.name !== BB.from && null !== YB && GB.push(`Of the ${vM(BB.start.players)} who started at ${BB.start.name}, ${xM(100*Math.min(1,BB.players/BB.start.players))} reached ${lq(BB)}; ${YB}.`), null !== BB.medianDeltaMs && GB.push(qq(B … [truncated]
```

#### 901. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11719` → after: `L11719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11719) · [Before (L11719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11719)

```diff
-           return hH.length > zH.length && CH.push(`- ${hH.length-zH.length} steps that keep more of their players aren't listed.`), null === rH && null === SH || CH.push(""), CH.push(...zQ(rH, SH, "step", (HH => `${EQ(HH)}; ${GQ(HH)}`))), CH
+           return oB.length > yB.length && JB.push(`- ${oB.length-yB.length} steps that keep more of their players aren't listed.`), null === DB && null === QB || JB.push(""), JB.push(...Mq(DB, QB, "step", (BB => `${zq(BB)}; ${pq(BB)}`))), JB
```

#### 902. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11726` → after: `L11726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11726) · [Before (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11726)

```diff
-               const AH = (null !== (LH = HH.categories) && void 0 !== LH ? LH : []).filter((HH => {
+               const YB = (null !== (GB = BB.categories) && void 0 !== GB ? GB : []).filter((BB => {
```

#### 903. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11732` → after: `L11732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11732) · [Before (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11732)

```diff
-                 rH = 0 === AH.length ? "" : 1 === AH.length ? ` (${AH[0].name} only)` : ` (${AH.map((HH=>{let{name:BH,players:LH}=HH;return null===LH?BH:`
+                 DB = 0 === YB.length ? "" : 1 === YB.length ? ` (${YB[0].name} only)` : ` (${YB.map((BB=>{let{name:OB,players:GB}=BB;return null===GB?OB:`
```

#### 904. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11740` → after: `L11740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11740) · [Before (L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11740)

```diff
-               return `${HH.name}${null===HH.players?"":` ${sE(HH.players)}${0===BH?" players":""}`}${rH}`
+               return `${BB.name}${null===BB.players?"":` ${vM(BB.players)}${0===OB?" players":""}`}${DB}`
```

#### 905. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11743` → after: `L11743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11743) · [Before (L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11743)

```diff
-           return `${BH.join(" > ")}${LH>0?` > ${LH} more`:""}`
+           return `${OB.join(" > ")}${GB>0?` > ${GB} more`:""}`
```

#### 906. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11748` → after: `L11748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11748) · [Before (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11748)

```diff
-           const LH = (null !== (BH = HH.categories) && void 0 !== BH ? BH : [HH]).map((HH => {
+           const GB = (null !== (OB = BB.categories) && void 0 !== OB ? OB : [BB]).map((BB => {
```

#### 907. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11756` → after: `L11756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11756) · [Before (L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11756)

```diff
-           return `${HH.name} (${AH===rH?AH:`${AH} to ${rH}`} min)`
+           return `${BB.name} (${YB===DB?YB:`${YB} to ${DB}`} min)`
```

#### 908. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11762` → after: `L11762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11762) · [Before (L11762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11762)

```diff
-           const LH = `Sessions per player: each player played ${sE(HH,2)} times on average in the last ${BH} days, their first time included`,
+           const GB = `Sessions per player: each player played ${vM(BB,2)} times on average in the last ${OB} days, their first time included`,
```

#### 909. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11764-L11765` → after: `L11764-L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11764-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11764-L11765) · [Before (L11764-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11764-L11765)

```diff
-           if (AH < .05) return `${LH}, so almost nobody came back.`;
-           const rH = `${sE(AH,2)} ${"1"===sE(AH,2)?"play":"plays"} back per player`,
+           if (YB < .05) return `${GB}, so almost nobody came back.`;
+           const DB = `${vM(YB,2)} ${"1"===vM(YB,2)?"play":"plays"} back per player`,
```

#### 910. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11767` → after: `L11767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11767) · [Before (L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11767)

```diff
-           return SH < 10 ? `${LH}: ${rH}, so under ${SH} in 10 players came back, fewer still if some came back more than once.` : `${LH}: ${rH} on average, as some came back many times and others never.`
+           return QB < 10 ? `${GB}: ${DB}, so under ${QB} in 10 players came back, fewer still if some came back more than once.` : `${GB}: ${DB} on average, as some came back many times and others never.`
```

#### 911. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11774-L11776` → after: `L11774-L11776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11774-L11776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11774-L11776) · [Before (L11774-L11776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11774-L11776)

```diff
-           const SH = (0, WB.I)(rH.rankingWindow),
-             hH = (0, WB.I)(rH.previousRankingWindow),
-             tH = null !== (BH = null === (LH = HH.baseline) || void 0 === LH ? void 0 : LH.rankingWindow) && void 0 !== BH ? BH : null,
+           const QB = (0, ZO.Q)(DB.rankingWindow),
+             oB = (0, ZO.Q)(DB.previousRankingWindow),
+             jB = null !== (OB = null === (GB = BB.baseline) || void 0 === GB ? void 0 : GB.rankingWindow) && void 0 !== OB ? OB : null,
```

#### 912. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11784-L11785` → after: `L11784-L11785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11784-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11784-L11785) · [Before (L11784-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11784-L11785)

```diff
-             EH = [`### Last ${zH} days`, "", vQ(SH.sessionsPerPlayer, zH), "", EX(["Metric", `Last ${zH} days`, `${zH} days before`, "Change on the days before", "Median custom game", "Against the median"], CH)],
-             XH = (null !== (AH = HH.game.ranks) && void 0 !== AH ? AH : []).map((HH => {
+             MB = [`### Last ${yB} days`, "", Vq(QB.sessionsPerPlayer, yB), "", PP(["Metric", `Last ${yB} days`, `${yB} days before`, "Change on the days before", "Median custom game", "Against the median"], JB)],
+             PB = (null !== (YB = BB.game.ranks) && void 0 !== YB ? YB : []).map((BB => {
```

#### 913. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11790` → after: `L11790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11790) · [Before (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11790)

```diff
-               return `${null===LH?"unranked":`#${LH}`} among ${function(HH){return"bloxd"===HH?"all games":"playerSchematic"===HH?"custom games":`${HH} games`}(BH)}`
+               return `${null===GB?"unranked":`#${GB}`} among ${function(BB){return"bloxd"===BB?"all games":"playerSchematic"===BB?"custom games":`${BB} games`}(OB)}`
```

#### 914. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11792` → after: `L11792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11792) · [Before (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11792)

```diff
-           return XH.length > 0 && EH.push("", `Rank on the Bloxd homepage, scored over the last ${zH} days: ${XH.join(", ")}.`), EH
+           return PB.length > 0 && MB.push("", `Rank on the Bloxd homepage, scored over the last ${yB} days: ${PB.join(", ")}.`), MB
```

#### 915. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11801` → after: `L11801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11801) · [Before (L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11801)

```diff
-             const BH = (0, WB.b)(HH.ccu.ccu.data.length, HH.ccu);
+             const OB = (0, ZO.e)(BB.ccu.ccu.data.length, BB.ccu);
```

#### 916. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11806` → after: `L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11806) · [Before (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11806)

```diff
-                 SH = null !== (AH = tH.get(rH)) && void 0 !== AH ? AH : [];
+                 QB = null !== (YB = jB.get(DB)) && void 0 !== YB ? YB : [];
```

#### 917. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11810-L11811` → after: `L11810-L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11810-L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11810-L11811) · [Before (L11810-L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11810-L11811)

```diff
-           const zH = new Map((null === hH ? [] : (0, WB.O)(hH)).map((HH => [tX(HH.dateMs), HH]))),
-             CH = null !== (LH = null === hH || void 0 === hH ? void 0 : hH.endDay) && void 0 !== LH ? LH : [...tH.keys()].sort().pop();
+           const yB = new Map((null === oB ? [] : (0, ZO.W)(oB)).map((BB => [yP(BB.dateMs), BB]))),
+             JB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.endDay) && void 0 !== GB ? GB : [...jB.keys()].sort().pop();
```

#### 918. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11813` → after: `L11813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11813) · [Before (L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11813)

```diff
-           const EH = Date.parse(`${CH}T00:00:00Z`),
+           const MB = Date.parse(`${JB}T00:00:00Z`),
```

#### 919. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11819` → after: `L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11819) · [Before (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11819)

```diff
-               XH.set(AH, [...null !== (LH = XH.get(AH)) && void 0 !== LH ? LH : [], BH])
+               PB.set(YB, [...null !== (GB = PB.get(YB)) && void 0 !== GB ? GB : [], OB])
```

#### 920. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11830` → after: `L11830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11830) · [Before (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11830)

```diff
-                 CH = null !== (AH = tH.get(SH)) && void 0 !== AH ? AH : [],
+                 JB = null !== (YB = jB.get(QB)) && void 0 !== YB ? YB : [],
```

#### 921. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11836` → after: `L11836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11836) · [Before (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11836)

```diff
-               }), [SH, sE(null === hH || void 0 === hH ? void 0 : hH.plays), sE(null === hH || void 0 === hH ? void 0 : hH.uniquePlayers), JE(null === hH || void 0 === hH ? void 0 : hH.avgSessionMs), sE(null === hH || void 0 === hH ? void 0 : hH.sessionsPerPlayer, 2), sE(GH, 1),  … [truncated]
+               }), [QB, vM(null === oB || void 0 === oB ? void 0 : oB.plays), vM(null === oB || void 0 === oB ? void 0 : oB.uniquePlayers), sM(null === oB || void 0 === oB ? void 0 : oB.avgSessionMs), vM(null === oB || void 0 === oB ? void 0 : oB.sessionsPerPlayer, 2), vM(zB, 1),  … [truncated]
```

#### 922. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11838-L11839` → after: `L11838-L11839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11838-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11838-L11839) · [Before (L11838-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11838-L11839)

```diff
-             QH = null !== (AH = null === hH || void 0 === hH ? void 0 : hH.sessionsPerPlayerWindowDays) && void 0 !== AH ? AH : FE,
-             WH = sE((null !== (rH = null === (SH = HH.ccu) || void 0 === SH ? void 0 : SH.bucketMinutes) && void 0 !== rH ? rH : 120) / 60, 1),
+             qB = null !== (YB = null === oB || void 0 === oB ? void 0 : oB.sessionsPerPlayerWindowDays) && void 0 !== YB ? YB : aM,
+             ZB = vM((null !== (DB = null === (QB = BB.ccu) || void 0 === QB ? void 0 : QB.bucketMinutes) && void 0 !== DB ? DB : 120) / 60, 1),
```

#### 923. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11841) · [Before (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11841)

```diff
-           return [`### Day by day (last ${BH.days} days, UTC)`, "", `CCU is concurrent players: the average over the day, and the busiest ${WH}-hour stretch. Sessions per player is over the ${QH} days ending that day.`, "", EX(["Date", "Plays", "Players", "Avg session (min)", `Se … [truncated]
+           return [`### Day by day (last ${OB.days} days, UTC)`, "", `CCU is concurrent players: the average over the day, and the busiest ${ZB}-hour stretch. Sessions per player is over the ${qB} days ending that day.`, "", PP(["Date", "Plays", "Players", "Avg session (min)", `Se … [truncated]
```

#### 924. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11846-L11848` → after: `L11846-L11848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11846-L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11846-L11848) · [Before (L11846-L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11846-L11848)

```diff
-             AH = HH.reduce(((HH, BH) => BH.average > HH.average ? BH : HH)),
-             rH = `Players at once (CCU) on the last day listed, ${LH.day}: ${sE(LH.average,1)} on average, ${sE(LH.peak,1)} at the busiest.`;
-           return AH === LH ? `${rH} That is the busiest day of the last ${hX(BH)} too.` : `${rH} The busiest day of the last ${hX(BH)} was ${AH.day}, at ${sE(AH.average,1)} on average: that is a past day, not now.`
+             YB = BB.reduce(((BB, OB) => OB.average > BB.average ? OB : BB)),
+             DB = `Players at once (CCU) on the last day listed, ${GB.day}: ${vM(GB.average,1)} on average, ${vM(GB.peak,1)} at the busiest.`;
+           return YB === GB ? `${DB} That is the busiest day of the last ${jP(OB)} too.` : `${DB} The busiest day of the last ${jP(OB)} was ${YB.day}, at ${vM(YB.average,1)} on average: that is a past day, not now.`
```

#### 925. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11856-L11857` → after: `L11856-L11857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11856-L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11856-L11857) · [Before (L11856-L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11856-L11857)

```diff
-           const AH = new Map((0, WB.O)(BH).map((HH => [tX(HH.dateMs), HH.plays]))),
-             rH = Date.parse(`${BH.endDay}T00:00:00Z`),
+           const YB = new Map((0, ZO.W)(OB).map((BB => [yP(BB.dateMs), BB.plays]))),
+             DB = Date.parse(`${OB.endDay}T00:00:00Z`),
```

#### 926. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11859` → after: `L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11859) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11859)

```diff
-             hH = Date.parse(`${SH}T00:00:00Z`),
+             oB = Date.parse(`${QB}T00:00:00Z`),
```

#### 927. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11896` → after: `L11896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11896) · [Before (L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11896)

```diff
-           if (null === AH) return `The game was updated on ${BH}, too recently to see what it changed.`;
+           if (null === YB) return `The game was updated on ${OB}, too recently to see what it changed.`;
```

#### 928. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11903` → after: `L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11903) · [Before (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11903)

```diff
-           return `The game was updated on ${BH}. Leaving out the update day, plays per day averaged ${sE(LH.average)} over the ${hX(LH.days)} before it and ${sE(AH.average)} over the ${hX(AH.days)} after it (${rH}): plays were ${SH}. The first table's change compares whole weeks  … [truncated]
+           return `The game was updated on ${OB}. Leaving out the update day, plays per day averaged ${vM(GB.average)} over the ${jP(GB.days)} before it and ${vM(YB.average)} over the ${jP(YB.days)} after it (${DB}): plays were ${QB}. The first table's change compares whole weeks  … [truncated]
```

#### 929. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11908-L11909` → after: `L11908-L11909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11908-L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11908-L11909) · [Before (L11908-L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11908-L11909)

```diff
-           const SH = null !== (BH = null === (LH = HH.stats) || void 0 === LH ? void 0 : LH.sessionDurationHistogram) && void 0 !== BH ? BH : null,
-             hH = null === SH ? null : (0, WB.M)(SH.sessionCounts, SH.maxBucketMinute);
+           const QB = null !== (OB = null === (GB = BB.stats) || void 0 === GB ? void 0 : GB.sessionDurationHistogram) && void 0 !== OB ? OB : null,
+             oB = null === QB ? null : (0, ZO.V)(QB.sessionCounts, QB.maxBucketMinute);
```

#### 930. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11913` → after: `L11913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11913) · [Before (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11913)

```diff
-             baselineCurve: null !== (AH = null === (rH = HH.baseline) || void 0 === rH ? void 0 : rH.dropoffCurve) && void 0 !== AH ? AH : null
+             baselineCurve: null !== (YB = null === (DB = BB.baseline) || void 0 === DB ? void 0 : DB.dropoffCurve) && void 0 !== YB ? YB : null
```

#### 931. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11918` → after: `L11918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11918) · [Before (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11918)

```diff
-           return 1 === HH ? "in the first minute (0 to 1 min)" : `between ${HH-1} and ${HH} minutes in`
+           return 1 === BB ? "in the first minute (0 to 1 min)" : `between ${BB-1} and ${BB} minutes in`
```

#### 932. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11928)

```diff
-           } = XH, uH = (0, WB.d)(GH), QH = null === YH ? null : xL(YH), WH = xQ.filter((HH => HH <= GH.maxBucketMinute)).map((HH => {
+           } = PB, pB = (0, ZO.j)(zB), qB = null === lB ? null : RG(lB), ZB = Aq.filter((BB => BB <= zB.maxBucketMinute)).map((BB => {
```

#### 933. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11932-L11933` → after: `L11932-L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11932-L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11932-L11933) · [Before (L11932-L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11932-L11933)

```diff
-             return [`${HH} min`, iE(AH), iE(void 0 === AH ? null : 100 - AH), iE(rH), LX(AH, rH)]
-           })), MH = (null !== (LH = null === (AH = GH.points[GH.maxBucketMinute]) || void 0 === AH ? void 0 : AH.percent) && void 0 !== LH ? LH : 0) > 50, xH = `${uH.medianMinute}${MH?"+":""} min`, vH = null !== (rH = null === QH || void 0 === QH ? void 0 : QH.medianMinute) && vo … [truncated]
+             return [`${BB} min`, xM(YB), xM(void 0 === YB ? null : 100 - YB), xM(DB), YP(YB, DB)]
+           })), NB = (null !== (GB = null === (YB = zB.points[zB.maxBucketMinute]) || void 0 === YB ? void 0 : YB.percent) && void 0 !== GB ? GB : 0) > 50, RB = `${pB.medianMinute}${NB?"+":""} min`, WB = null !== (DB = null === qB || void 0 === qB ? void 0 : qB.medianMinute) && vo … [truncated]
```

#### 934. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11935` → after: `L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11935) · [Before (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11935)

```diff
-           null !== BH && void 0 !== BH && BH.mostEnded && TH.push(`- The minute that loses the most sessions: ${fQ(BH.mostEnded)}.`), null !== BH && void 0 !== BH && BH.mostAboveMedian && BH.mostAboveMedian.minute !== (null === (SH = BH.mostEnded) || void 0 === SH ? void 0 : SH.m … [truncated]
+           null !== OB && void 0 !== OB && OB.mostEnded && VB.push(`- The minute that loses the most sessions: ${Fq(OB.mostEnded)}.`), null !== OB && void 0 !== OB && OB.mostAboveMedian && OB.mostAboveMedian.minute !== (null === (QB = OB.mostEnded) || void 0 === QB ? void 0 : QB.m … [truncated]
```

#### 935. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11952` → after: `L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11952) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11952)

```diff
-                 return `${BH} (${JE(LH)} min)`
+                 return `${OB} (${sM(GB)} min)`
```

#### 936. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11954` → after: `L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11954) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11954)

```diff
-             if (0 === SH.length) return `- No custom event happens in the first ${BH} minutes of a game on average: the earliest is ${hH(rH[0])}. So the events can't say why sessions end before then.`;
+             if (0 === QB.length) return `- No custom event happens in the first ${OB} minutes of a game on average: the earliest is ${oB(DB[0])}. So the events can't say why sessions end before then.`;
```

#### 937. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11956` → after: `L11956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11956) · [Before (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11956)

```diff
-               zH = SH.length > KQ ? ` and ${SH.length-KQ} more` : "",
+               yB = QB.length > Lq ? ` and ${QB.length-Lq} more` : "",
```

#### 938. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11963-L11965` → after: `L11963-L11965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11963-L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11963-L11965) · [Before (L11963-L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11963-L11965)

```diff
-               GH = XH ? ` None comes within ${LH} min, so no custom event is why sessions end in the minute losing the most.` : "";
-             return `- Custom events in the first ${BH} minutes of a game on average: ${tH.join(", ")}${zH}.${GH||CH}`
-           }(HH, Math.max(lQ, null !== (hH = null === BH || void 0 === BH || null === (tH = BH.mostEnded) || void 0 === tH ? void 0 : tH.minute) && void 0 !== hH ? hH : 0), null !== (zH = null === BH || void 0 === BH || null === (CH = BH.mostEnded) || void 0 === CH ? void 0 : CH.m … [truncated]
+               zB = PB ? ` None comes within ${GB} min, so no custom event is why sessions end in the minute losing the most.` : "";
+             return `- Custom events in the first ${OB} minutes of a game on average: ${jB.join(", ")}${yB}.${zB||JB}`
+           }(BB, Math.max(iq, null !== (oB = null === OB || void 0 === OB || null === (jB = OB.mostEnded) || void 0 === jB ? void 0 : jB.minute) && void 0 !== oB ? oB : 0), null !== (yB = null === OB || void 0 === OB || null === (JB = OB.mostEnded) || void 0 === JB ? void 0 : JB.m … [truncated]
```

#### 939. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11971` → after: `L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11971) · [Before (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11971)

```diff
-               return (null !== (LH = BH.players) && void 0 !== LH ? LH : -1) - (null !== (AH = HH.players) && void 0 !== AH ? AH : -1) || HH.timeMs - BH.timeMs
+               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1) || BB.timeMs - OB.timeMs
```

#### 940. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11980` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11980) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11980)

```diff
-               rH = 1 === BH.minute ? "the first minute" : `the first ${BH.minute} minutes`;
+               DB = 1 === OB.minute ? "the first minute" : `the first ${OB.minute} minutes`;
```

#### 941. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11982` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11982) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11982)

```diff
-               return `- What kills players in ${rH} on average, the most first${AH.some((HH=>{let{categories:BH}=HH;return(null!==BH&&void 0!==BH?BH:[]).length>1}))?" (maps added up)":""}: ${WQ(AH)}.`
+               return `- What kills players in ${DB} on average, the most first${YB.some((BB=>{let{categories:OB}=BB;return(null!==OB&&void 0!==OB?OB:[]).length>1}))?" (maps added up)":""}: ${Rq(YB)}.`
```

#### 942. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11984-L11986` → after: `L11984-L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11984-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11984-L11986) · [Before (L11984-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11984-L11986)

```diff
-             const SH = LH.reduce(((HH, BH) => BH.timeMs < HH.timeMs ? BH : HH));
-             return `- No death comes in ${rH} on average: the earliest, ${MQ(SH)}, comes later, so dying or waiting to respawn isn't why sessions end then.`
-           }(HH, null !== (EH = null === BH || void 0 === BH ? void 0 : BH.mostEnded) && void 0 !== EH ? EH : null);
+             const QB = GB.reduce(((BB, OB) => OB.timeMs < BB.timeMs ? OB : BB));
+             return `- No death comes in ${DB} on average: the earliest, ${Wq(QB)}, comes later, so dying or waiting to respawn isn't why sessions end then.`
+           }(BB, null !== (MB = null === OB || void 0 === OB ? void 0 : OB.mostEnded) && void 0 !== MB ? MB : null);
```

#### 943. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11992-L11993` → after: `L11992-L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11992-L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L11992-L11993) · [Before (L11992-L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L11992-L11993)

```diff
-             LH = null === BH.medianEndedPercent || null === BH.medianStillPercent ? "" : ` (median custom game: ${iE(BH.medianEndedPercent)} end, ${iE(BH.medianStillPercent)} keep playing)`;
-           return `${iE(BH.endedPercent)} of all sessions end in that minute and ${iE(BH.stillPercent)} keep playing${LH}`
+             GB = null === OB.medianEndedPercent || null === OB.medianStillPercent ? "" : ` (median custom game: ${xM(OB.medianEndedPercent)} end, ${xM(OB.medianStillPercent)} keep playing)`;
+           return `${xM(OB.endedPercent)} of all sessions end in that minute and ${xM(OB.stillPercent)} keep playing${GB}`
```

#### 944. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12006` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12006) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12006)

```diff
-           return `${kQ(HH.minute)}, when ${oQ(HH)}${BH===wE?"":`: this game is ${BH}${LH}`}`
+           return `${Kq(BB.minute)}, when ${mq(BB)}${OB===TM?"":`: this game is ${OB}${GB}`}`
```

#### 945. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12038` → after: `L12038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12038) · [Before (L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12038)

```diff
-               return LH === BH || LH.startsWith(`${BH}: `)
+               return GB === OB || GB.startsWith(`${OB}: `)
```

#### 946. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12055` → after: `L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12055) · [Before (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12055)

```diff
-                 names: `${BH.step.from} ${BH.step.to}`,
+                 names: `${OB.step.from} ${OB.step.to}`,
```

#### 947. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12067` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12067) · [Before (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12067)

```diff
-                 names: `${AH.eventType} ${rH.from}`,
+                 names: `${YB.eventType} ${DB.from}`,
```

#### 948. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12091-L12092` → after: `L12091-L12092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12091-L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12091-L12092) · [Before (L12091-L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12091-L12092)

```diff
-               zH = (null !== (BH = null === (LH = HH.flow) || void 0 === LH ? void 0 : LH.edges) && void 0 !== BH ? BH : []).flatMap((HH => [HH.from, HH.to].map(pt))),
-               CH = cu(null !== (AH = null === (rH = HH.playerTotals) || void 0 === rH ? void 0 : rH.playerTotals) && void 0 !== AH ? AH : {}, cQ).filter((HH => !zH.some((BH => BH === HH.eventType || BH.startsWith(`${HH.eventType}: `))))).slice(0, nQ),
+               yB = (null !== (OB = null === (GB = BB.flow) || void 0 === GB ? void 0 : GB.edges) && void 0 !== OB ? OB : []).flatMap((BB => [BB.from, BB.to].map(tj))),
+               JB = gp(null !== (YB = null === (DB = BB.playerTotals) || void 0 === DB ? void 0 : DB.playerTotals) && void 0 !== YB ? YB : {}, gq).filter((BB => !yB.some((OB => OB === BB.eventType || OB.startsWith(`${BB.eventType}: `))))).slice(0, aq),
```

#### 949. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12097-L12098` → after: `L12097-L12098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12097-L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12097-L12098) · [Before (L12097-L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12097-L12098)

```diff
-                     const hH = null !== (rH = null === BH || void 0 === BH ? void 0 : BH[AH]) && void 0 !== rH ? rH : null,
-                       tH = null !== (SH = null === BH || void 0 === BH ? void 0 : BH[AH + 1]) && void 0 !== SH ? SH : null;
+                     const oB = null !== (DB = null === OB || void 0 === OB ? void 0 : OB[YB]) && void 0 !== DB ? DB : null,
+                       jB = null !== (QB = null === OB || void 0 === OB ? void 0 : OB[YB + 1]) && void 0 !== QB ? QB : null;
```

#### 950. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12111` → after: `L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12111) · [Before (L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12111)

```diff
-                   mostAboveMedian: null !== rH && AH(rH) >= qu ? rH : null
+                   mostAboveMedian: null !== DB && YB(DB) >= Xp ? DB : null
```

#### 951. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12113` → after: `L12113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12113) · [Before (L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12113)

```diff
-               }(EH.curve.points.map((HH => HH.percent)), null !== (SH = null === (hH = EH.baselineCurve) || void 0 === hH ? void 0 : hH.survivalPercents.map((HH => HH.p50))) && void 0 !== SH ? SH : null),
+               }(MB.curve.points.map((BB => BB.percent)), null !== (QB = null === (oB = MB.baselineCurve) || void 0 === oB ? void 0 : oB.survivalPercents.map((BB => BB.p50))) && void 0 !== QB ? QB : null),
```

#### 952. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12116-L12117` → after: `L12116-L12117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12116-L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12116-L12117) · [Before (L12116-L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12116-L12117)

```diff
-                 current: (0, WB.I)(GH.rankingWindow).avgDailyPlays,
-                 previous: (0, WB.I)(GH.previousRankingWindow).avgDailyPlays
+                 current: (0, ZO.Q)(zB.rankingWindow).avgDailyPlays,
+                 previous: (0, ZO.Q)(zB.previousRankingWindow).avgDailyPlays
```

#### 953. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12135` → after: `L12135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12135) · [Before (L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12135)

```diff
-           return ` Those who didn't reach ${HH.to} got to ${HH.from}: change ${function(HH){return`what players face once they reach "${HH.from.replace(/"/g,"'")}"`}(HH)}, not ${HH.to} itself.`
+           return ` Those who didn't reach ${BB.to} got to ${BB.from}: change ${function(BB){return`what players face once they reach "${BB.from.replace(/"/g,"'")}"`}(BB)}, not ${BB.to} itself.`
```

#### 954. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12138-L12139` → after: `L12138-L12139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12138-L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12138-L12139) · [Before (L12138-L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12138-L12139)

```diff
-         function ZQ(HH, BH) {
-           switch (HH.kind) {
+         function Cq(BB, OB) {
+           switch (BB.kind) {
```

#### 955. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12142-L12145` → after: `L12142-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12142-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12142-L12145) · [Before (L12142-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12142-L12145)

```diff
-                 step: BH,
-                 mostLost: LH
-               } = HH, AH = null === BH.start ? null : AQ(BH.players, BH.fromPlayers, BH.start.players), rH = null !== BH.start && BH.start.name !== BH.from && null !== AH ? ` Only ${iE(100*Math.min(1,BH.players/BH.start.players))} of the ${sE(BH.start.players)} players at the flo … [truncated]
-               return `The biggest problem in the event flow (players who started it in the past week) is ${EQ(BH)}: ${GQ(BH)}.${wQ(NQ(BH))}${rH}${SH}`
+                 step: OB,
+                 mostLost: GB
+               } = BB, YB = null === OB.start ? null : Qq(OB.players, OB.fromPlayers, OB.start.players), DB = null !== OB.start && OB.start.name !== OB.from && null !== YB ? ` Only ${xM(100*Math.min(1,OB.players/OB.start.players))} of the ${vM(OB.start.players)} players at the flo … [truncated]
+               return `The biggest problem in the event flow (players who started it in the past week) is ${zq(OB)}: ${pq(OB)}.${bq(Eq(OB))}${DB}${QB}`
```

#### 956. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12149-L12153` → after: `L12149-L12153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12149-L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12149-L12153) · [Before (L12149-L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12149-L12153)

```diff
-                 progression: BH,
-                 step: LH,
-                 mostLost: AH
-               } = HH, rH = null === AH ? "" : ` The step the most players didn't get past (in number) is ${hQ(AH,BH.eventType)}.`, SH = BH.values[0], hH = AQ(LH.reached, LH.from.players, SH.players), tH = SH.value === LH.from.value || null === hH ? "" : ` Of the ${sE(SH.players)} … [truncated]
-               return `The biggest problem in ${BH.eventType} (players since logging began) is ${hQ(LH,BH.eventType)}.${wQ(gQ(LH,BH.eventType))}${tH}${rH}`
+                 progression: OB,
+                 step: GB,
+                 mostLost: YB
+               } = BB, DB = null === YB ? "" : ` The step the most players didn't get past (in number) is ${yq(YB,OB.eventType)}.`, QB = OB.values[0], oB = Qq(GB.reached, GB.from.players, QB.players), jB = QB.value === GB.from.value || null === oB ? "" : ` Of the ${vM(QB.players)} … [truncated]
+               return `The biggest problem in ${OB.eventType} (players since logging began) is ${yq(GB,OB.eventType)}.${bq(wq(GB,OB.eventType))}${jB}${DB}`
```

#### 957. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12157-L12159` → after: `L12157-L12159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12157-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12157-L12159) · [Before (L12157-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12157-L12159)

```diff
-                 minute: LH
-               } = HH;
-               return `More sessions end ${kQ(LH.minute)} than in a typical game, over the last ${hX(BH)}: ${oQ(LH)}. These are shares of sessions, each time someone plays, not of players.`
+                 minute: GB
+               } = BB;
+               return `More sessions end ${Kq(GB.minute)} than in a typical game, over the last ${jP(OB)}: ${mq(GB)}. These are shares of sessions, each time someone plays, not of players.`
```

#### 958. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12162` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12162) · [Before (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12162)

```diff
-               return `Plays per day fell to ${sE(HH.current)} over the last ${BH} days, from ${sE(HH.previous)} over the ${BH} days before (${pE(HH.current,HH.previous)}).`
+               return `Plays per day fell to ${vM(BB.current)} over the last ${OB} days, from ${vM(BB.previous)} over the ${OB} days before (${tM(BB.current,BB.previous)}).`
```

#### 959. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12166-L12172` → after: `L12166-L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12166-L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12166-L12172) · [Before (L12166-L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12166-L12172)

```diff
-         function dQ(HH, BH) {
-           const LH = "flowStep" === (null === BH || void 0 === BH ? void 0 : BH.kind) ? {
-             from: BH.step.from,
-             to: BH.step.to
-           } : "progressStep" === (null === BH || void 0 === BH ? void 0 : BH.kind) ? {
-             from: CX(BH.progression.eventType, BH.step.from.value),
-             to: CX(BH.progression.eventType, BH.step.to.value)
+         function Hq(BB, OB) {
+           const GB = "flowStep" === (null === OB || void 0 === OB ? void 0 : OB.kind) ? {
+             from: OB.step.from,
+             to: OB.step.to
+           } : "progressStep" === (null === OB || void 0 === OB ? void 0 : OB.kind) ? {
+             from: MP(OB.progression.eventType, OB.step.from.value),
+             to: MP(OB.progression.eventType, OB.step.to.value)
```

#### 960. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12174-L12175` → after: `L12174-L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12174-L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12174-L12175) · [Before (L12174-L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12174-L12175)

```diff
-           if (null === LH) return null;
-           return yG(HQ(HH, (HH => pG(HH) || LH.from.includes(HH) || LH.to.includes(HH))), LH.from, LH.to)
+           if (null === GB) return null;
+           return Bl(Gq(BB, (BB => tz(BB) || GB.from.includes(BB) || GB.to.includes(BB))), GB.from, GB.to)
```

#### 961. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12178-L12179` → after: `L12178-L12179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12178-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12178-L12179) · [Before (L12178-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12178-L12179)

```diff
-         function aQ(HH) {
-           const BH = HH => `${HH.name} (${JE(HH.timeMs)} min)`,
+         function vq(BB) {
+           const OB = BB => `${BB.name} (${sM(BB.timeMs)} min)`,
```

#### 962. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12181-L12188` → after: `L12181-L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12181-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12181-L12188) · [Before (L12181-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12181-L12188)

```diff
-               window: LH,
-               atStep: AH,
-               elsewhere: rH
-             } = HH;
-           if (null === LH || AH.length + rH.length === 0) return " Studio can't tell what stops players at this step.";
-           const SH = [...AH, ...rH].sort(((HH, BH) => {
-               var LH, AH;
-               return (null !== (LH = BH.players) && void 0 !== LH ? LH : -1) - (null !== (AH = HH.players) && void 0 !== AH ? AH : -1)
+               window: GB,
+               atStep: YB,
+               elsewhere: DB
+             } = BB;
+           if (null === GB || YB.length + DB.length === 0) return " Studio can't tell what stops players at this step.";
+           const QB = [...YB, ...DB].sort(((BB, OB) => {
+               var GB, YB;
+               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1)
```

#### 963. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12190-L12210` → after: `L12190-L12210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12190-L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12190-L12210) · [Before (L12190-L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12190-L12210)

```diff
-             hH = ` Deaths, most players first (since logging began${SH.some((HH=>{let{categories:BH}=HH;return(null!==BH&&void 0!==BH?BH:[]).length>1}))?", maps added up":""}): ${WQ(SH)}.`,
-             tH = `between ${BH(LH.from)} and ${BH(LH.to)} on average`,
-             zH = HY(HH);
-           return null !== zH ? `${hH} The first, ${MQ(zH)}, comes ${tH}, so it is the one death that may stop players here.` : `${hH} The first, ${MQ(SH[0])}, doesn't come ${tH}, so Studio can't tell what stops players here.`
-         }
- 
-         function sQ(HH, BH) {
-           var LH, AH;
-           if (null === BH.biggestProblem) return [];
-           const rH = BH.stepDeaths;
-           return ["### Biggest problem Studio found", "", `${ZQ(BH.biggestProblem,null!==(LH=null===(AH=HH.stats)||void 0===AH?void 0:AH.rankingWindow.days)&&void 0!==LH?LH:FE)}${null===rH?"":aQ(rH)}`]
-         }
- 
-         function JQ(HH, BH) {
-           const LH = BH.biggestProblem;
-           if (null === LH) return null;
- ... (5 more removed lines; see GitHub link above)
+             oB = ` Deaths, most players first (since logging began${QB.some((BB=>{let{categories:OB}=BB;return(null!==OB&&void 0!==OB?OB:[]).length>1}))?", maps added up":""}): ${Rq(QB)}.`,
+             jB = `between ${OB(GB.from)} and ${OB(GB.to)} on average`,
+             yB = Ol(BB);
+           return null !== yB ? `${oB} The first, ${Wq(yB)}, comes ${jB}, so it is the one death that may stop players here.` : `${oB} The first, ${Wq(QB[0])}, doesn't come ${jB}, so Studio can't tell what stops players here.`
+         }
+ 
+         function sq(BB, OB) {
+           var GB, YB;
+           if (null === OB.biggestProblem) return [];
+           const DB = OB.stepDeaths;
+           return ["### Biggest problem Studio found", "", `${Cq(OB.biggestProblem,null!==(GB=null===(YB=BB.stats)||void 0===YB?void 0:YB.rankingWindow.days)&&void 0!==GB?GB:aM)}${null===DB?"":vq(DB)}`]
+         }
+ 
+         function xq(BB, OB) {
+           const GB = OB.biggestProblem;
+           if (null === GB) return null;
+ ... (5 more added lines; see GitHub link above)
```

#### 964. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12212` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12212) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12212)

```diff
-           switch (LH.kind) {
+           switch (GB.kind) {
```

#### 965. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12215-L12224` → after: `L12215-L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12215-L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12215-L12224) · [Before (L12215-L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12215-L12224)

```diff
-               const HH = function(HH, BH, LH) {
-                   let AH = [];
-                   var rH;
-                   if ("flowStep" === HH.kind ? AH = (null !== (rH = null === BH || void 0 === BH ? void 0 : BH.steps) && void 0 !== rH ? rH : []).filter((BH => BH !== HH.step && BH.isChain && BH.fromPlayers >= LH)).map((HH => HH.share)) : "progressStep" === HH.kind && (AH = HH.pr … [truncated]
-                   const SH = AH.sort(((HH, BH) => HH - BH)),
-                     hH = Math.floor(SH.length / 2);
-                   return 100 * (SH.length % 2 === 1 ? SH[hH] : (SH[hH - 1] + SH[hH]) / 2)
-                 }(LH, BH.flow, jE),
-                 rH = `your game's other steps, where ${iE(HH)} of players reach the next one`;
-               if ("flowStep" === LH.kind) {
+               const BB = function(BB, OB, GB) {
+                   let YB = [];
+                   var DB;
+                   if ("flowStep" === BB.kind ? YB = (null !== (DB = null === OB || void 0 === OB ? void 0 : OB.steps) && void 0 !== DB ? DB : []).filter((OB => OB !== BB.step && OB.isChain && OB.fromPlayers >= GB)).map((BB => BB.share)) : "progressStep" === BB.kind && (YB = BB.pr … [truncated]
+                   const QB = YB.sort(((BB, OB) => BB - OB)),
+                     oB = Math.floor(QB.length / 2);
+                   return 100 * (QB.length % 2 === 1 ? QB[oB] : (QB[oB - 1] + QB[oB]) / 2)
+                 }(GB, OB.flow, cM),
+                 DB = `your game's other steps, where ${xM(BB)} of players reach the next one`;
+               if ("flowStep" === GB.kind) {
```

#### 966. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12226-L12228` → after: `L12226-L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12226-L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12226-L12228) · [Before (L12226-L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12226-L12228)

```diff
-                   step: BH
-                 } = LH;
-                 return AH(iu(100 * BH.share, HH), `of players at ${BH.from} who reach ${XQ(BH)}`, rH, "eventFlow")
+                   step: OB
+                 } = GB;
+                 return YB(tp(100 * OB.share, BB), `of players at ${OB.from} who reach ${lq(OB)}`, DB, "eventFlow")
```

#### 967. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12231-L12234` → after: `L12231-L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12231-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12231-L12234) · [Before (L12231-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12231-L12234)

```diff
-                 progression: SH,
-                 step: hH
-               } = LH, tH = iu(100 * hH.share, HH), zH = HH => yt(SH.eventType, HH), CH = hH.reached > hH.to.players ? " or a later one" : "";
-               return AH(tH, `of players at ${zH(hH.from.value)} who reach ${zH(hH.to.value)}${CH}`, rH, "playersPerEvent")
+                 progression: QB,
+                 step: oB
+               } = GB, jB = tp(100 * oB.share, BB), yB = BB => By(QB.eventType, BB), JB = oB.reached > oB.to.players ? " or a later one" : "";
+               return YB(jB, `of players at ${yB(oB.from.value)} who reach ${yB(oB.to.value)}${JB}`, DB, "playersPerEvent")
```

#### 968. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12237-L12238` → after: `L12237-L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12237-L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12237-L12238) · [Before (L12237-L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12237-L12238)

```diff
-               var rH, SH, hH, tH;
-               const BH = bQ(HH),
+               var DB, QB, oB, jB;
+               const OB = dq(BB),
```

#### 969. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12240-L12245` → after: `L12240-L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12240-L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12240-L12245) · [Before (L12240-L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12240-L12245)

```diff
-                   minute: zH
-                 } = LH.minute,
-                 CH = null === BH || void 0 === BH || null === (rH = BH.curve.points[zH]) || void 0 === rH ? void 0 : rH.percent;
-               if (null === BH || void 0 === CH) return null;
-               const EH = null !== (SH = null === (hH = BH.baselineCurve) || void 0 === hH || null === (tH = hH.survivalPercents[zH]) || void 0 === tH ? void 0 : tH.p50) && void 0 !== SH ? SH : null;
-               return AH(iu(CH, EH), `of sessions still going after ${zH} ${1===zH?"minute":"minutes"}`, `a typical Bloxd game, where ${iE(EH)} are`, "playersStillPlaying")
+                   minute: yB
+                 } = GB.minute,
+                 JB = null === OB || void 0 === OB || null === (DB = OB.curve.points[yB]) || void 0 === DB ? void 0 : DB.percent;
+               if (null === OB || void 0 === JB) return null;
+               const MB = null !== (QB = null === (oB = OB.baselineCurve) || void 0 === oB || null === (jB = oB.survivalPercents[yB]) || void 0 === jB ? void 0 : jB.p50) && void 0 !== QB ? QB : null;
+               return YB(tp(JB, MB), `of sessions still going after ${yB} ${1===yB?"minute":"minutes"}`, `a typical Bloxd game, where ${xM(MB)} are`, "playersStillPlaying")
```

#### 970. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12248-L12249` → after: `L12248-L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12248-L12249) · [Before (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12248-L12249)

```diff
-               var zH, CH;
-               const BH = null !== (zH = null === (CH = HH.stats) || void 0 === CH ? void 0 : CH.rankingWindow.days) && void 0 !== zH ? zH : FE;
+               var yB, JB;
+               const OB = null !== (yB = null === (JB = BB.stats) || void 0 === JB ? void 0 : JB.rankingWindow.days) && void 0 !== yB ? yB : aM;
```

#### 971. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12259-L12275` → after: `L12259-L12275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12259-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12259-L12275) · [Before (L12259-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12259-L12275)

```diff
-         const iQ = 8, pQ = ["spawn", "shop", "exit", "lobby", "key", "boss room", "start area"], yQ = 20, HW = .02;
- 
-         function BW(HH) {
-           const BH = new Map;
-           let LH = 0;
-           for (const [SH, hH] of Object.entries(HH.frequencies)) {
-             const HH = Math.floor(Number(SH) / iQ) * iQ;
-             for (const [tH, zH] of Object.entries(hH)) {
-               const hH = Number(tH);
-               for (const [tH, CH] of Object.entries(zH)) {
-                 var AH, rH;
-                 if (CH <= 0) continue;
-                 const zH = Math.floor(Number(tH) / iQ) * iQ,
-                   EH = `${HH},${zH}`,
-                   XH = null !== (AH = BH.get(EH)) && void 0 !== AH ? AH : {
-                     x: HH,
- ... (1 more removed lines; see GitHub link above)
+         const tq = 8, BZ = ["spawn", "shop", "exit", "lobby", "key", "boss room", "start area"], OZ = 20, GZ = .02;
+ 
+         function YZ(BB) {
+           const OB = new Map;
+           let GB = 0;
+           for (const [QB, oB] of Object.entries(BB.frequencies)) {
+             const BB = Math.floor(Number(QB) / tq) * tq;
+             for (const [jB, yB] of Object.entries(oB)) {
+               const oB = Number(jB);
+               for (const [jB, JB] of Object.entries(yB)) {
+                 var YB, DB;
+                 if (JB <= 0) continue;
+                 const yB = Math.floor(Number(jB) / tq) * tq,
+                   MB = `${BB},${yB}`,
+                   PB = null !== (YB = OB.get(MB)) && void 0 !== YB ? YB : {
+                     x: BB,
+ ... (1 more added lines; see GitHub link above)
```

#### 972. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12281` → after: `L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12281) · [Before (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12281)

```diff
-                 XH.count += CH, XH.sumX += Number(SH) * CH, XH.sumZ += Number(tH) * CH, XH.countByY.set(hH, (null !== (rH = XH.countByY.get(hH)) && void 0 !== rH ? rH : 0) + CH), BH.set(EH, XH), LH += CH
+                 PB.count += JB, PB.sumX += Number(QB) * JB, PB.sumZ += Number(jB) * JB, PB.countByY.set(oB, (null !== (DB = PB.countByY.get(oB)) && void 0 !== DB ? DB : 0) + JB), OB.set(MB, PB), GB += JB
```

#### 973. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12286-L12290` → after: `L12286-L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12286-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12286-L12290) · [Before (L12286-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12286-L12290)

```diff
-             areas: [...BH.values()].map((HH => {
-               let BH = 0,
-                 LH = -1;
-               return HH.countByY.forEach(((HH, AH) => {
-                 (HH > LH || HH === LH && AH < BH) && (BH = AH, LH = HH)
+             areas: [...OB.values()].map((BB => {
+               let OB = 0,
+                 GB = -1;
+               return BB.countByY.forEach(((BB, YB) => {
+                 (BB > GB || BB === GB && YB < OB) && (OB = YB, GB = BB)
```

#### 974. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12292-L12297` → after: `L12292-L12297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12292-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12292-L12297) · [Before (L12292-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12292-L12297)

```diff
-                 x: HH.x,
-                 z: HH.z,
-                 count: HH.count,
-                 busiestY: BH,
-                 centreX: HH.sumX / HH.count,
-                 centreZ: HH.sumZ / HH.count
+                 x: BB.x,
+                 z: BB.z,
+                 count: BB.count,
+                 busiestY: OB,
+                 centreX: BB.sumX / BB.count,
+                 centreZ: BB.sumZ / BB.count
```

#### 975. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12299-L12300` → after: `L12299-L12300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12299-L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12299-L12300) · [Before (L12299-L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12299-L12300)

```diff
-             })).sort(((HH, BH) => BH.count - HH.count || HH.x - BH.x || HH.z - BH.z)),
-             total: LH
+             })).sort(((BB, OB) => OB.count - BB.count || BB.x - OB.x || BB.z - OB.z)),
+             total: GB
```

#### 976. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12304` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12304) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12304)

```diff
-         function LW(HH, BH) {
+         function DZ(BB, OB) {
```

#### 977. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12306-L12311` → after: `L12306-L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12306-L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12306-L12311) · [Before (L12306-L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12306-L12311)

```diff
-             areas: LH,
-             total: AH
-           } = BW(HH);
-           return AH <= 0 ? [] : LH.filter((HH => HH.count / AH >= HW)).slice(0, BH).map((HH => ({
-             area: HH,
-             share: iE(HH.count / AH * 100, 1)
+             areas: GB,
+             total: YB
+           } = YZ(BB);
+           return YB <= 0 ? [] : GB.filter((BB => BB.count / YB >= GZ)).slice(0, OB).map((BB => ({
+             area: BB,
+             share: xM(BB.count / YB * 100, 1)
```

#### 978. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12315-L12321` → after: `L12315-L12321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12315-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12315-L12321) · [Before (L12315-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12315-L12321)

```diff
-         function AW(HH, BH) {
-           const LH = new Map,
-             AH = (HH, BH, AH) => {
-               var rH;
-               const SH = JSON.stringify([HH, BH.x, BH.z]),
-                 hH = null !== (rH = LH.get(SH)) && void 0 !== rH ? rH : {
-                   area: BH,
+         function QZ(BB, OB) {
+           const GB = new Map,
+             YB = (BB, OB, YB) => {
+               var DB;
+               const QB = JSON.stringify([BB, OB.x, OB.z]),
+                 oB = null !== (DB = GB.get(QB)) && void 0 !== DB ? DB : {
+                   area: OB,
```

#### 979. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12324` → after: `L12324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12324) · [Before (L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12324)

```diff
-               hH.facts.push(AH), LH.set(SH, hH)
+               oB.facts.push(YB), GB.set(QB, oB)
```

#### 980. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12326-L12328` → after: `L12326-L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12326-L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12326-L12328) · [Before (L12326-L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12326-L12328)

```diff
-             rH = [...HH.heatmaps].sort(((HH, BH) => BH.players.totalCount - HH.players.totalCount)).slice(0, BH.heatmapCategoryCount);
-           for (const tH of rH) {
-             const HH = "" === tH.gameCategoryId ? "" : ` in ${tH.gameCategoryId}`;
+             DB = [...BB.heatmaps].sort(((BB, OB) => OB.players.totalCount - BB.players.totalCount)).slice(0, OB.heatmapCategoryCount);
+           for (const jB of DB) {
+             const BB = "" === jB.gameCategoryId ? "" : ` in ${jB.gameCategoryId}`;
```

#### 981. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12330-L12331` → after: `L12330-L12331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12330-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12330-L12331) · [Before (L12330-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12330-L12331)

```diff
-                 area: LH,
-                 share: rH
+                 area: GB,
+                 share: DB
```

#### 982. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12333` → after: `L12333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12333) · [Before (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12333)

```diff
-               of LW(tH.players, BH.playerAreaCount)) AH(tH.gameCategoryId, LH, `${rH} of all play time${HH} was spent here`)
+               of DZ(jB.players, OB.playerAreaCount)) YB(jB.gameCategoryId, GB, `${DB} of all play time${BB} was spent here`)
```

#### 983. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12335-L12338` → after: `L12335-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12335-L12338) · [Before (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12335-L12338)

```diff
-           const SH = HH.heatmaps.flatMap((HH => HH.events.map((BH => ({
-             gameCategoryId: HH.gameCategoryId,
-             event: BH
-           }))))).filter((BH => {
+           const QB = BB.heatmaps.flatMap((BB => BB.events.map((OB => ({
+             gameCategoryId: BB.gameCategoryId,
+             event: OB
+           }))))).filter((OB => {
```

#### 984. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12340-L12343` → after: `L12340-L12343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12340-L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12340-L12343) · [Before (L12340-L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12340-L12343)

```diff
-               event: LH
-             } = BH;
-             return LH.heatmap.totalCount >= yQ && "timed" !== GE(LH.eventType, LH.eventValue, HH.worldCode)
-           })).sort(((HH, BH) => BH.event.heatmap.totalCount - HH.event.heatmap.totalCount)).slice(0, BH.eventHeatmapCount);
+               event: GB
+             } = OB;
+             return GB.heatmap.totalCount >= OZ && "timed" !== lM(GB.eventType, GB.eventValue, BB.worldCode)
+           })).sort(((BB, OB) => OB.event.heatmap.totalCount - BB.event.heatmap.totalCount)).slice(0, OB.eventHeatmapCount);
```

#### 985. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12345-L12346` → after: `L12345-L12346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12345-L12346) · [Before (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12345-L12346)

```diff
-               gameCategoryId: tH,
-               event: zH
+               gameCategoryId: jB,
+               event: yB
```

#### 986. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12348-L12351` → after: `L12348-L12351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12348-L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12348-L12351) · [Before (L12348-L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12348-L12351)

```diff
-             of SH) {
-             const LH = CX(zH.eventType, zH.eventValue),
-               rH = "" === tH ? "" : ` in ${tH}`,
-               SH = "named" === GE(zH.eventType, zH.eventValue, HH.worldCode);
+             of QB) {
+             const GB = MP(yB.eventType, yB.eventValue),
+               DB = "" === jB ? "" : ` in ${jB}`,
+               QB = "named" === lM(yB.eventType, yB.eventValue, BB.worldCode);
```

#### 987. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12353-L12354` → after: `L12353-L12354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12353-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12353-L12354) · [Before (L12353-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12353-L12354)

```diff
-                 area: HH,
-                 share: hH
+                 area: BB,
+                 share: oB
```

#### 988. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12356` → after: `L12356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12356) · [Before (L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12356)

```diff
-               of LW(zH.heatmap, BH.eventAreaCount)) AH(tH, HH, SH ? `this is only where the \`${LH}\` event${rH} is logged (${hH} of them), which tells nothing about what players do here: base no idea on it` : `${hH} of all \`${LH}\` events${rH} happen here`)
+               of DZ(yB.heatmap, OB.eventAreaCount)) YB(jB, BB, QB ? `this is only where the \`${GB}\` event${DB} is logged (${oB} of them), which tells nothing about what players do here: base no idea on it` : `${oB} of all \`${GB}\` events${DB} happen here`)
```

#### 989. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12364-L12365` → after: `L12364-L12365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12364-L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12364-L12365) · [Before (L12364-L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12364-L12365)

```diff
-             const rH = 1 === AH.length ? AH[0] : `${AH.slice(0,-1).join(", ")} and ${AH[AH.length-1]}`;
-             return `- Place P${BH+1}, ${function(HH){return`x ${HH.x} to ${HH.x+iQ-1}, z ${HH.z} to ${HH.z+iQ-1} (height y ${HH.busiestY})`}(LH)}: ${rH}.`
+             const DB = 1 === YB.length ? YB[0] : `${YB.slice(0,-1).join(", ")} and ${YB[YB.length-1]}`;
+             return `- Place P${OB+1}, ${function(BB){return`x ${BB.x} to ${BB.x+tq-1}, z ${BB.z} to ${BB.z+tq-1} (height y ${BB.busiestY})`}(GB)}: ${DB}.`
```

#### 990. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12367` → after: `L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12367) · [Before (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12367)

```diff
-           return ["### Busiest places (heatmaps, past week)", "", `Seen from above, the map is split into squares ${iQ} blocks wide. Each square holding at least ${iE(100*HW)} of play time, or of one of the commonest custom events with a position, is a place, named P1, P2 and so  … [truncated]
+           return ["### Busiest places (heatmaps, past week)", "", `Seen from above, the map is split into squares ${tq} blocks wide. Each square holding at least ${xM(100*GZ)} of play time, or of one of the commonest custom events with a position, is a place, named P1, P2 and so  … [truncated]
```

#### 991. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12375` → after: `L12375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12375) · [Before (L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12375)

```diff
-             object: null !== (BH = LH[2]) && void 0 !== BH ? BH : null
+             object: null !== (OB = GB[2]) && void 0 !== OB ? OB : null
```

#### 992. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12385-L12387` → after: `L12385-L12387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12385-L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12385-L12387) · [Before (L12385-L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12385-L12387)

```diff
-                 rH = null === HH.object ? "" : ` inside \`${HH.object}\``,
-                 SH = null !== HH.object && void 0 !== AH && BH ? `, never as \`${HH.object}.${AH} = \u2026\`` : "";
-               return `, or for a constant's line, as \`${HH.line}\` with a new number, "replace the line \`${HH.line}\`${rH}"${SH}`
+                 DB = null === BB.object ? "" : ` inside \`${BB.object}\``,
+                 QB = null !== BB.object && void 0 !== YB && OB ? `, never as \`${BB.object}.${YB} = \u2026\`` : "";
+               return `, or for a constant's line, as \`${BB.line}\` with a new number, "replace the line \`${BB.line}\`${DB}"${QB}`
```

#### 993. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12389-L12392` → after: `L12389-L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12389-L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12389-L12392) · [Before (L12389-L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12389-L12392)

```diff
-             zH = null === AH ? "" : ` ${AH}${` After the ${BH?"steps":"paragraph"}, add one \`\`\`js block, ${BH?"not in a step, ":""}of at most ${BH?2:4} lines of code: the lines to paste inside a callback, not the callback around them, or a "current line" from my code's summary … [truncated]
-             CH = hH ? ` Pick it from "${bY}" when one fits my game, moving its constant the way it says.` : "",
-             EH = null !== rH && void 0 !== rH && rH.statName ? ` ${SX(rH.statName,SH)}` : "",
-             XH = `\`### ${VE}: <${BH?"an easy change":"the change"}, in at most 8 plain words>\``;
+             yB = null === YB ? "" : ` ${YB}${` After the ${OB?"steps":"paragraph"}, add one \`\`\`js block, ${OB?"not in a step, ":""}of at most ${OB?2:4} lines of code: the lines to paste inside a callback, not the callback around them, or a "current line" from my code's summary … [truncated]
+             JB = oB ? ` Pick it from "${kl}" when one fits my game, moving its constant the way it says.` : "",
+             MB = null !== DB && void 0 !== DB && DB.statName ? ` ${oP(DB.statName,QB)}` : "",
+             PB = `\`### ${UM}: <${OB?"an easy change":"the change"}, in at most 8 plain words>\``;
```

#### 994. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12394` → after: `L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12394) · [Before (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12394)

```diff
-             return `3. \`## ${HH}\`, starting with ${XH}: the one easy change that ${LH}, as 3 to 5 numbered steps I can tick off as I build it, each under 20 words. Start each step with where in my game it goes${null===AH?"":": a constant, message, callback, function or place my … [truncated]
+             return `3. \`## ${BB}\`, starting with ${PB}: the one easy change that ${GB}, as 3 to 5 numbered steps I can tick off as I build it, each under 20 words. Start each step with where in my game it goes${null===YB?"":": a constant, message, callback, function or place my … [truncated]
```

#### 995. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12396` → after: `L12396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12396) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12396)

```diff
-           return `3. \`## ${HH}\`, starting with ${XH}: one paragraph of at most 3 short sentences, not a list, giving the one change that ${LH} and naming the real part of my game it changes${null===AH?", such as a place, an event or something players see":": one small thing fro … [truncated]
+           return `3. \`## ${BB}\`, starting with ${PB}: one paragraph of at most 3 short sentences, not a list, giving the one change that ${GB} and naming the real part of my game it changes${null===YB?", such as a place, an event or something players see":": one small thing fro … [truncated]
```

#### 996. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12401-L12402` → after: `L12401-L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12401-L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12401-L12402) · [Before (L12401-L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12401-L12402)

```diff
-           const AH = HH.map((HH => `[${HH.id}]`));
-           return [LH ? `5. Last, \`## ${BH}\`: for each line in "Lines Studio can add", one short sentence on what Studio could show me once it is in, from its "What Studio would then show", then its "Line to paste" copied exactly in a code block, and the callback to paste it int … [truncated]
+           const YB = BB.map((BB => `[${BB.id}]`));
+           return [GB ? `5. Last, \`## ${OB}\`: for each line in "Lines Studio can add", one short sentence on what Studio could show me once it is in, from its "What Studio would then show", then its "Line to paste" copied exactly in a code block, and the callback to paste it int … [truncated]
```

#### 997. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12418-L12419` → after: `L12418-L12419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12418-L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12418-L12419) · [Before (L12418-L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12418-L12419)

```diff
-           const SH = null !== (BH = null === (LH = HH.customEvents) || void 0 === LH ? void 0 : LH.byEvent) && void 0 !== BH ? BH : {},
-             hH = null !== (AH = null === (rH = HH.playerTotals) || void 0 === rH ? void 0 : rH.playerTotals) && void 0 !== AH ? AH : {},
+           const QB = null !== (OB = null === (GB = BB.customEvents) || void 0 === GB ? void 0 : GB.byEvent) && void 0 !== OB ? OB : {},
+             oB = null !== (YB = null === (DB = BB.playerTotals) || void 0 === DB ? void 0 : DB.playerTotals) && void 0 !== YB ? YB : {},
```

#### 998. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12424-L12428` → after: `L12424-L12428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12424-L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12424-L12428) · [Before (L12424-L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12424-L12428)

```diff
-             const GH = null !== (AH = null === (rH = hH[HH]) || void 0 === rH || null === (SH = rH[BH]) || void 0 === SH ? void 0 : SH[LH]) && void 0 !== AH ? AH : null,
-               YH = null !== (CH = tH.get(BH)) && void 0 !== CH ? CH : null;
-             tH.set(BH, null === GH ? YH : Math.max(null !== YH && void 0 !== YH ? YH : 0, GH));
-             const uH = null !== (EH = zH.get(BH)) && void 0 !== EH ? EH : new Map;
-             uH.set(LH, Math.max(null !== (XH = uH.get(LH)) && void 0 !== XH ? XH : -1, null !== GH && void 0 !== GH ? GH : -1)), zH.set(BH, uH)
+             const zB = null !== (YB = null === (DB = oB[BB]) || void 0 === DB || null === (QB = DB[OB]) || void 0 === QB ? void 0 : QB[GB]) && void 0 !== YB ? YB : null,
+               lB = null !== (JB = jB.get(OB)) && void 0 !== JB ? JB : null;
+             jB.set(OB, null === zB ? lB : Math.max(null !== lB && void 0 !== lB ? lB : 0, zB));
+             const pB = null !== (MB = yB.get(OB)) && void 0 !== MB ? MB : new Map;
+             pB.set(GB, Math.max(null !== (PB = pB.get(GB)) && void 0 !== PB ? PB : -1, null !== zB && void 0 !== zB ? zB : -1)), yB.set(OB, pB)
```

#### 999. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12436` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12436) · [Before (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12436)

```diff
-               values: [...null !== (BH = zH.get(LH)) && void 0 !== BH ? BH : new Map].sort(((HH, BH) => BH[1] - HH[1] || HH[0].localeCompare(BH[0]))).map((HH => {
+               values: [...null !== (OB = yB.get(GB)) && void 0 !== OB ? OB : new Map].sort(((BB, OB) => OB[1] - BB[1] || BB[0].localeCompare(OB[0]))).map((BB => {
```

#### 1000. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12443` → after: `L12443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12443) · [Before (L12443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12443)

```diff
-             return (null !== (LH = BH.players) && void 0 !== LH ? LH : -1) - (null !== (AH = HH.players) && void 0 !== AH ? AH : -1) || HH.eventType.localeCompare(BH.eventType)
+             return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1) || BB.eventType.localeCompare(OB.eventType)
```

#### 1001. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12472` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12472) · [Before (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12472)

```diff
-               const LH = BH.map((HH => null !== HH && void 0 !== HH ? HH : "")),
+               const GB = OB.map((BB => null !== BB && void 0 !== BB ? BB : "")),
```

#### 1002. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12475` → after: `L12475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12475) · [Before (L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12475)

```diff
-                   id: `M${rH.length+1}`,
+                   id: `M${DB.length+1}`,
```

#### 1003. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12483-L12484` → after: `L12483-L12484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12483-L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12483-L12484) · [Before (L12483-L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12483-L12484)

```diff
-           }(HH.worldCode, BH.map((HH => HH.eventType)), null !== (rH = null === (SH = LH.biggestProblem) || void 0 === SH ? void 0 : SH.kind) && void 0 !== rH ? rH : null);
-           return hH.slice(0, AH ? WW : Au)
+           }(BB.worldCode, OB.map((BB => BB.eventType)), null !== (DB = null === (QB = GB.biggestProblem) || void 0 === QB ? void 0 : QB.kind) && void 0 !== DB ? DB : null);
+           return oB.slice(0, YB ? RZ : Dp)
```

#### 1004. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12505` → after: `L12505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12505) · [Before (L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12505)

```diff
-           for (const tH of null !== (VH = WH.dropped) && void 0 !== VH ? VH : []) {
+           for (const jB of null !== (nB = ZB.dropped) && void 0 !== nB ? nB : []) {
```

#### 1005. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12510` → after: `L12510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12510) · [Before (L12510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12510)

```diff
-             bH = null !== (LH = null === (AH = HH.stats) || void 0 === AH ? void 0 : AH.rankingWindow.days) && void 0 !== LH ? LH : FE,
+             fB = null !== (GB = null === (YB = BB.stats) || void 0 === YB ? void 0 : YB.rankingWindow.days) && void 0 !== GB ? GB : aM,
```

#### 1006. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12524` → after: `L12524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/117.js#L12524) · [Before (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/117.js#L12524)

```diff
-               genre: null !== (rH = HH.game.genre) && void 0 !== rH ? rH : null,
+               genre: null !== (DB = BB.game.genre) && void 0 !== DB ? DB : null,
```
