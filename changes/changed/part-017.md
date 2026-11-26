# Changed — Bundle Modifications Report (Part 017 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `17 / 99` (**269** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/129.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/129.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c)

#### 12. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L184` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L79) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L184)

```diff
-           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
+           return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L209-L212` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L104-L107) · [Before (L209-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L209-L212)

```diff
-       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
-       if (MM.length > nM) return `A file path is over ${nM} characters.`;
-       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
-       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
+       if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
+       if (UU.length > oU) return `A file path is over ${oU} characters.`;
+       if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
+       return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L245` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/129.js#L140) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/129.js#L245)

```diff
-           return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
+           return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/130.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/130.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130, 151];
+ export const ids = [130];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L4` → after: `L5-L15828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L5-L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L5-L15828) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L4)

```diff
-   7120: (MM, rM, iM) => {
+   6802: function(UU, XU, zU) {
+     var cU;
+     ! function() {
+       var yU, QU = 1e9,
+         AU = {
+           precision: 20,
+           rounding: 4,
+           toExpNeg: -7,
+           toExpPos: 21,
+           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
+         },
+         FU = !0,
+         oU = "[DecimalError] ",
+         DU = oU + "Invalid argument: ",
+         EU = oU + "Exponent out of range: ",
+         YU = Math.floor,
+ ... (15808 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L6-L7` → after: `L15830-L19190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L15830-L19190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L15830-L19190) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L6-L7)

```diff
-       loadShaderPackTextures: () => aM,
-       shaderPackTextures: () => PM
+       scaleBand: () => yU.e,
+       scaleDiverging: () => oQ,
+       scaleDivergingLog: () => DQ,
+       scaleDivergingPow: () => YQ,
+       scaleDivergingSqrt: () => NQ,
+       scaleDivergingSymlog: () => EQ,
+       scaleIdentity: () => jX,
+       scaleImplicit: () => Dz.g,
+       scaleLinear: () => JX,
+       scaleLog: () => yz,
+       scaleOrdinal: () => Dz.e,
+       scalePoint: () => yU.h,
+       scalePow: () => pz,
+       scaleQuantile: () => Lz,
+       scaleQuantize: () => ez,
+       scaleRadial: () => gz,
+ ... (3345 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L9-L11` → after: `L19192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19192) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L9-L11)

```diff
-     var OM = iM(5442);
-     let SM = null,
-       jM = null;
+     var cU = zU(6588);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L13-L21` → after: `L19194-L19199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19194-L19199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19194-L19199) · [Before (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L13-L21)

```diff
-     function aM() {
-       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
-         let {
-           FORMER_BLOCK_IMAGE_NAMES: rM,
-           textureNameToIndex: iM,
-           textureAnimationData: jM
-         } = MM;
-         return SM ??= (0, OM.j)(iM, jM, rM), SM
-       })), jM
+     function yU(UU) {
+       return yU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
+         return typeof UU
+       } : function(UU) {
+         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
+       }, yU(UU)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L24-L25` → after: `L19202-L19221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19202-L19221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19202-L19221) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L24-L25)

```diff
-     function PM() {
-       if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
+     function QU(UU, XU) {
+       var zU = Object.keys(UU);
+       if (Object.getOwnPropertySymbols) {
+         var cU = Object.getOwnPropertySymbols(UU);
+         XU && (cU = cU.filter((function(XU) {
+           return Object.getOwnPropertyDescriptor(UU, XU).enumerable
+         }))), zU.push.apply(zU, cU)
+       }
+       return zU
+     }
+ 
+     function AU(UU) {
+       for (var XU = 1; XU < arguments.length; XU++) {
+         var zU = null != arguments[XU] ? arguments[XU] : {};
+         XU % 2 ? QU(Object(zU), !0).forEach((function(XU) {
+           FU(UU, XU, zU[XU])
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L29` → after: `L19301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19301) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L29)

```diff
-   5442: (MM, rM, iM) => {
+   5746: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L31-L36` → after: `L19303-L19311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19303-L19311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19303-L19311) · [Before (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L31-L36)

```diff
-       d: () => PM,
-       f: () => aM,
-       g: () => OM,
-       j: () => JM,
-       k: () => LM,
-       o: () => SM,
+       A: () => gU,
+       B: () => aU,
+       D: () => pU,
+       H: () => IU,
+       J: () => GU,
+       c: () => LU,
+       e: () => WU,
+       i: () => ZU,
+       m: () => dU,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L39-L40` → after: `L19314-L19315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19314-L19315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19314-L19315) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L39-L40)

```diff
-       w: () => zM,
-       z: () => mM
+       x: () => PU,
+       y: () => tU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L42` → after: `L19317-L19376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19317-L19376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19317-L19376) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L42)

```diff
-     const OM = 5;
+     var cU = zU(5751),
+       yU = zU.n(cU),
+       QU = zU(5767),
+       AU = zU.n(QU),
+       FU = zU(5781),
+       oU = zU.n(FU),
+       DU = zU(5774),
+       EU = zU.n(DU),
+       YU = zU(5987),
+       NU = zU.n(YU),
+       IU = function(UU) {
+         return 0 === UU ? 0 : UU > 0 ? 1 : -1
+       },
+       pU = function(UU) {
+         return yU()(UU) && UU.indexOf("%") === UU.length - 1
+       },
+ ... (44 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L44-L45` → after: `L19378-L19433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19378-L19433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19378-L19433) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L44-L45)

```diff
-     function SM(MM) {
-       return MM === OM
+     function WU(UU, XU, zU) {
+       return UU && UU.length ? UU.find((function(UU) {
+         return UU && ("function" === typeof XU ? XU(UU) : oU()(UU, XU)) === zU
+       })) : null
+     }
+     var dU = function(UU) {
+         if (!UU || !UU.length) return null;
+         for (var XU = UU.length, zU = 0, cU = 0, yU = 0, QU = 0, AU = 1 / 0, FU = -1 / 0, oU = 0, DU = 0, EU = 0; EU < XU; EU++) zU += oU = UU[EU].cx || 0, cU += DU = UU[EU].cy || 0, yU += oU * DU, QU += oU * oU, AU = Math.min(AU, oU), FU = Math.max(FU, oU);
+         var YU = XU * QU !== zU * zU ? (XU * yU - zU * cU) / (XU * QU - zU * zU) : 0;
+         return {
+           xmin: AU,
+           xmax: FU,
+           a: YU,
+           b: (cU - YU * zU) / XU
+         }
+       },
+ ... (40 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L49` → after: `L19445-L19460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19445-L19460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19445-L19460) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L49)

```diff
-       return [...MM.features]
+       return cU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
+         return typeof UU
+       } : function(UU) {
+         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
+       }, cU(UU)
+     }
+ 
+     function yU(UU, XU) {
+       var zU = Object.keys(UU);
+       if (Object.getOwnPropertySymbols) {
+         var cU = Object.getOwnPropertySymbols(UU);
+         XU && (cU = cU.filter((function(XU) {
+           return Object.getOwnPropertyDescriptor(UU, XU).enumerable
+         }))), zU.push.apply(zU, cU)
+       }
+       return zU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L56-L63` → after: `L19464-L19470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19464-L19470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19464-L19470) · [Before (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L56-L63)

```diff
-       if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
-       const rM = [];
-       for (const [iM, OM] of Object.entries(MM)) {
-         if ("string" !== typeof OM) return `${iM} isn't text.`;
-         rM.push({
-           path: iM,
-           source: OM
-         })
+       for (var XU = 1; XU < arguments.length; XU++) {
+         var zU = null != arguments[XU] ? arguments[XU] : {};
+         XU % 2 ? yU(Object(zU), !0).forEach((function(XU) {
+           AU(UU, XU, zU[XU])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : yU(Object(zU)).forEach((function(XU) {
+           Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
+         }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L65-L71` → after: `L19472-L19749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19472-L19749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19472-L19749) · [Before (L65-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L65-L71)

```diff
-       return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
-         function(MM) {
-           if (0 === MM.length) return "The pack has no .wgsl files.";
-           if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
-           const rM = new Set;
-           for (const {
-               path: iM
+       return UU
+     }
+ 
+     function AU(UU, XU, zU) {
+       return (XU = function(UU) {
+         var XU = function(UU, XU) {
+           if ("object" != cU(UU) || !UU) return UU;
+           var zU = UU[Symbol.toPrimitive];
+           if (void 0 !== zU) {
+             var yU = zU.call(UU, XU || "default");
+             if ("object" != cU(yU)) return yU;
+             throw new TypeError("@@toPrimitive must return a primitive value.")
+           }
+           return ("string" === XU ? String : Number)(UU)
+         }(UU, "string");
+         return "symbol" == cU(XU) ? XU : XU + ""
+ ... (262 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L79-L80` → after: `L19752-L19768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19752-L19768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19752-L19768) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L79-L80)

```diff
-           return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
-         }(rM) ?? rM
+         })), zU
+       },
+       HU = function(UU) {
+         var XU = UU && UU.type;
+         return XU && RU[XU] ? RU[XU] : null
+       },
+       MU = function(UU, XU) {
+         return LU(XU).indexOf(UU)
+       }
+   },
+   6014: (UU, XU, zU) => {
+     function cU(UU, XU) {
+       for (var zU in UU)
+         if ({}.hasOwnProperty.call(UU, zU) && (!{}.hasOwnProperty.call(XU, zU) || UU[zU] !== XU[zU])) return !1;
+       for (var cU in XU)
+         if ({}.hasOwnProperty.call(XU, cU) && !{}.hasOwnProperty.call(UU, cU)) return !1;
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L84-L86` → after: `L19783-L19787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19783-L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19783-L19787) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L84-L86)

```diff
-       const rM = {};
-       for (const iM of MM) rM[iM.path] = iM.source;
-       return rM
+       return AU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
+         return typeof UU
+       } : function(UU) {
+         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
+       }, AU(UU)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L90` → after: `L19791-L19905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19791-L19905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19791-L19905) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L90)

```diff
-       return MM < rM ? -1 : MM > rM ? 1 : 0
+       var zU = Object.keys(UU);
+       if (Object.getOwnPropertySymbols) {
+         var cU = Object.getOwnPropertySymbols(UU);
+         XU && (cU = cU.filter((function(XU) {
+           return Object.getOwnPropertyDescriptor(UU, XU).enumerable
+         }))), zU.push.apply(zU, cU)
+       }
+       return zU
+     }
+ 
+     function oU(UU) {
+       for (var XU = 1; XU < arguments.length; XU++) {
+         var zU = null != arguments[XU] ? arguments[XU] : {};
+         XU % 2 ? FU(Object(zU), !0).forEach((function(XU) {
+           DU(UU, XU, zU[XU])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : FU(Object(zU)).forEach((function(XU) {
+ ... (99 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L94-L97` → after: `L19956-L19981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19956-L19981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19956-L19981) · [Before (L94-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L94-L97)

```diff
-       const rM = new TextEncoder;
-       let iM = 0;
-       for (const {
-           source: OM
+       if ("object" === typeof UU && null !== UU) {
+         var XU = UU.$$typeof;
+         switch (XU) {
+           case cU:
+             switch (UU = UU.type) {
+               case QU:
+               case FU:
+               case AU:
+               case NU:
+               case IU:
+                 return UU;
+               default:
+                 switch (UU = UU && UU.$$typeof) {
+                   case EU:
+                   case DU:
+                   case YU:
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L99` → after: `L19983-L20008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R19983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L19983-L20008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L19983-L20008) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L99)

```diff
-         of MM) iM += rM.encode(OM).byteLength;
+       }
+     }
+     zU = Symbol.for("react.module.reference"), XU.isFragment = function(UU) {
+       return gU(UU) === QU
+     }
+   },
+   6004: (UU, XU, zU) => {
+     UU.exports = zU(6012)
+   },
+   5657: (UU, XU, zU) => {
+     function cU(UU) {
+       var XU, zU, yU = "";
+       if ("string" == typeof UU || "number" == typeof UU) yU += UU;
+       else if ("object" == typeof UU)
+         if (Array.isArray(UU)) {
+           var QU = UU.length;
+ ... (10 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L104-L107` → after: `L20072-L20075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R20072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L20072-L20075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L20072-L20075) · [Before (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L104-L107)

```diff
-       if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
-       if (MM.length > nM) return `A file path is over ${nM} characters.`;
-       if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
-       return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
+       var XU = UU.copy;
+       return UU.padding = UU.paddingOuter, delete UU.paddingInner, delete UU.paddingOuter, UU.copy = function() {
+         return AU(XU())
+       }, UU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L112-L188` → after: `L20084-L20091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R20084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L20084-L20091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L20084-L20091) · [Before (L112-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L112-L188)

```diff
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
-       const OM = new Map;
-       rM.forEach(((MM, rM) => {
-         let {
-           numAnimStates: iM,
-           animStartIdx: SM
-         } = MM;
-         for (let jM = 1; jM < iM; jM++) OM.set(SM + jM - 1, rM)
-       }));
-       const SM = Object.entries(MM),
-         jM = new Map;
-       for (const [JM, dM] of SM) {
-         const MM = hM.exec(JM);
-         "1" === MM?.[2] && jM.set(MM[1], dM + 1)
-       }
-       const aM = MM => {
- ... (61 more removed lines; see GitHub link above)
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           this.range(UU);
+           break;
+         default:
+           this.range(XU).domain(UU)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L190-L193` → after: `L20093-L20104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R20093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L20093-L20104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L20093-L20104) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L190-L193)

```diff
-       for (const hM of mM.keys()) HM.delete(hM);
-       for (const [hM, JM] of iM) {
-         const MM = mM.get(JM);
-         void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
+       return this
+     }
+ 
+     function yU(UU, XU) {
+       switch (arguments.length) {
+         case 0:
+           break;
+         case 1:
+           "function" === typeof UU ? this.interpolator(UU) : this.range(UU);
+           break;
+         default:
+           this.domain(UU), "function" === typeof XU ? this.interpolator(XU) : this.range(XU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L195-L203` → after: `L20106-L20249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R20106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L20106-L20249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L20106-L20249) · [Before (L195-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L195-L203)

```diff
-       return {
-         named: [...mM].sort(((MM, rM) => {
-           let [iM] = MM, [OM] = rM;
-           return iM < OM ? -1 : iM > OM ? 1 : 0
-         })).map((MM => {
-           let [rM, iM] = MM;
-           return {
-             name: rM,
-             id: iM
+       return this
+     }
+     zU.d(XU, {
+       c: () => yU,
+       g: () => cU
+     })
+   },
+   6762: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => EU,
+       g: () => DU
+     });
+     class cU extends Map {
+       constructor(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FU;
+         if (super(), Object.defineProperties(this, {
+ ... (128 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L205-L207` → after: `L20251-L20338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R20251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L20251-L20338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/130.js#L20251-L20338) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/130.js#L205-L207)

```diff
-         })),
-         aliases: [...HM.values()],
-         layers: LM
+         }(UU)
+       }
+       moveTo(UU, XU) {
+         this._append`M${this._x0=this._x1=+UU},${this._y0=this._y1=+XU}`
+       }
+       closePath() {
+         null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
+       }
+       lineTo(UU, XU) {
+         this._append`L${this._x1=+UU},${this._y1=+XU}`
+       }
+       quadraticCurveTo(UU, XU, zU, cU) {
+         this._append`Q${+UU},${+XU},${this._x1=+zU},${this._y1=+cU}`
+       }
+       bezierCurveTo(UU, XU, zU, cU, yU, QU) {
+         this._append`C${+UU},${+XU},${+zU},${+cU},${this._x1=+yU},${this._y1=+QU}`
+ ... (72 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/131.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/131.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L4-L6` → after: `L5-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L5-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L5-L13) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L4-L6)

```diff
-   34641: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => QM
+   7025: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       Graph: () => vU,
+       debug: () => wz,
+       default: () => Oz,
+       graphlib: () => QU,
+       layout: () => Iz,
+       util: () => qz,
+       version: () => QX
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L8-L9` → after: `L15-L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L15-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L15-L1355) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L8-L9)

```diff
-     var OM = iM(2590);
-     const SM = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+     var cU = Object.defineProperty,
+       yU = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? cU(UU, XU, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: zU
+       }) : UU[XU] = zU)(UU, "symbol" != typeof XU ? XU + "" : XU, zU),
+       QU = {};
+     ((UU, XU) => {
+       for (var zU in XU) cU(UU, zU, {
+         get: XU[zU],
+         enumerable: !0
+       })
+     })(QU, {
+       Graph: () => vU,
+       alg: () => gU
+ ... (1325 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L12-L18` → after: `L1358-L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1358-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1358-L1359) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L12-L18)

```diff
-       return new Promise(((rM, iM) => {
-         MM.onsuccess = () => {
-           rM(MM.result)
-         }, MM.onerror = () => {
-           iM(MM.error)
-         }
-       }))
+       let XU = UU.width;
+       UU.width = UU.height, UU.height = XU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L22-L31` → after: `L1363-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1363-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1363-L1368) · [Before (L22-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L22-L31)

```diff
-       return new Promise(((rM, iM) => {
-         MM.oncomplete = () => {
-           rM()
-         }, MM.onerror = () => {
-           iM(MM.error)
-         }, MM.onabort = () => {
-           var rM;
-           iM(null !== (rM = MM.error) && void 0 !== rM ? rM : new Error("IndexedDB transaction aborted"))
-         }
-       }))
+       UU.y = -UU.y
+     }
+ 
+     function xX(UU) {
+       let XU = UU.x;
+       UU.x = UU.y, UU.y = XU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L35` → after: `L1372-L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1372-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1372-L1388) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L35)

```diff
-       return IDBKeyRange.bound([MM], [MM, []])
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+         zU = {},
+         cU = UU.nodes().filter((XU => !UU.children(XU).length)),
+         yU = cU.map((XU => UU.node(XU).rank)),
+         QU = UX(JU(Math.max, yU) + 1).map((() => []));
+       return cU.sort(((XU, zU) => UU.node(XU).rank - UU.node(zU).rank)).forEach((function cU(yU) {
+         if (zU[yU]) return;
+         zU[yU] = !0;
+         let AU = UU.node(yU);
+         QU[AU.rank].push(yU);
+         let FU = UU.successors(yU);
+         FU && [...FU].sort(((zU, cU) => function(zU, cU) {
+           let yU = UU.node(zU),
+             QU = UU.node(cU);
+           return yX(XU, yU, QU)
+         }(zU, cU))).forEach(cU)
+ ... (1 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L39` → after: `L1392-L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1392-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1392-L1394) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L39)

```diff
-       return IDBKeyRange.bound([MM, rM], [MM, rM, []])
+       let zU = 0;
+       for (let cU = 1; cU < XU.length; ++cU) zU += KX(UU, XU[cU - 1], XU[cU]);
+       return zU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L41-L80` → after: `L1396-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1396-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1396-L1449) · [Before (L41-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L41-L80)

```diff
-     class QM {
-       constructor() {
-         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
-       }
-       static get supported() {
-         try {
-           return "undefined" !== typeof indexedDB
-         } catch {
-           return !1
-         }
-       }
-       putRecording(MM) {
-         this.write(["recordings"], (rM => {
-           rM.objectStore("recordings").put(MM)
-         }))
-       }
- ... (24 more removed lines; see GitHub link above)
+ 
+     function KX(UU, XU, zU) {
+       let cU = function(UU, XU) {
+           return UU.reduce(((UU, zU, cU) => (UU[zU] = XU[cU], UU)), {})
+         }(zU, zU.map(((UU, XU) => XU))),
+         yU = XU.flatMap((XU => {
+           let zU = UU.outEdges(XU);
+           return zU ? zU.map((XU => ({
+             pos: cU[XU.w],
+             weight: UU.edge(XU).weight
+           }))).sort(((UU, XU) => UU.pos - XU.pos)) : []
+         })),
+         QU = 1;
+       for (; QU < zU.length;) QU <<= 1;
+       let AU = 2 * QU - 1;
+       QU -= 1;
+ ... (38 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L82-L149` → after: `L1451-L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1451-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1451-L1454) · [Before (L82-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L82-L149)

```diff
-         }))
-       }
-       removeVideoChunks(MM, rM) {
-         this.write(["videoChunks"], (iM => {
-           iM.objectStore("videoChunks").delete(nM(MM, rM))
-         }))
-       }
-       removeVideo(MM, rM) {
-         this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (iM => {
-           iM.objectStore("videoHeaders").delete([MM, rM]), iM.objectStore("videoChunks").delete(nM(MM, rM)), iM.objectStore("videoSequences").delete([MM, rM]), iM.objectStore("videoProgress").delete([MM, rM])
-         }))
-       }
-       putTelemetry(MM) {
-         this.write(["telemetry"], (rM => {
-           rM.objectStore("telemetry").put(MM)
-         }))
- ... (52 more removed lines; see GitHub link above)
+ 
+           function cU(XU) {
+             return zU => {
+               zU.in.push(XU), 0 === --zU.indegree && UU.push(zU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L184-L226` → after: `L1457-L1474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1457-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1457-L1474) · [Before (L184-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L184-L226)

```diff
-         };
-         null === this.db ? this.open().then(iM, (MM => {
-           this.fail(MM)
-         })) : iM(this.db)
-       }
-       fail(MM) {
-         this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", MM), this.dropTails())
-       }
-       dropTails() {
-         if (null === this.db || 0 === this.tailRecordings.size) return;
-         const MM = MM => {
-           console.warn("Session replay couldn't drop its page recording tails from its upload journal.", MM)
-         };
-         try {
-           const rM = this.db.transaction(["domTail"], "readwrite");
-           for (const MM of this.tailRecordings) rM.objectStore("domTail").delete(PM(MM));
- ... (27 more removed lines; see GitHub link above)
+           for (; UU.length;) {
+             let yU = UU.pop();
+             XU.push(yU), yU.in.reverse().forEach(zU(yU)), yU.out.forEach(cU(yU))
+           }
+           return XU.filter((UU => !UU.merged)).map((UU => XX(UU, ["vs", "i", "barycenter", "weight"])))
+         }(Object.values(zU).filter((UU => !UU.indegree)))
+     }
+ 
+     function TX(UU, XU, zU, cU, yU) {
+       let QU = {},
+         AU = null,
+         FU = null,
+         oU = yU;
+       "boolean" == typeof XU ? (oU = XU, QU = {}) : XU && (QU = XU, AU = null != zU ? zU : null, FU = null != cU ? cU : null);
+       let DU = function(UU, XU) {
+           let zU = {
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L228-L237` → after: `L1476-L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1476-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1476-L1494) · [Before (L228-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L228-L237)

```diff
-           let SM = !1;
-           iM.onblocked = () => {
-             SM = !0, rM(new Error("An older tab holds the upload journal at an earlier version"))
-           }, iM.onsuccess = () => {
-             SM ? iM.result.close() : (this.db = iM.result, this.db.onversionchange = () => {
-               var MM;
-               this.dropTails(), null === (MM = this.db) || void 0 === MM || MM.close(), this.db = null, this.opening = null
-             }, MM(iM.result))
-           }, iM.onerror = () => {
-             rM(iM.error)
+           return UU.forEach((UU => {
+             XU(UU) ? zU.lhs.push(UU) : zU.rhs.push(UU)
+           })), zU
+         }(UU, (UU => Object.hasOwn(UU, "barycenter"))),
+         EU = DU.lhs,
+         YU = DU.rhs.sort(((UU, XU) => XU.i - UU.i)),
+         NU = [],
+         IU = 0,
+         pU = 0,
+         aU = 0;
+       EU.sort(function(UU, XU, zU) {
+         return (cU, yU) => {
+           if (cU.barycenter < yU.barycenter) return -1;
+           if (cU.barycenter > yU.barycenter) return 1;
+           if (UU && ("string" == typeof cU.vs[0] || "string" == typeof yU.vs[0])) {
+             let zU = UU.node(cU.vs[0]),
+ ... (3 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L239` → after: `L1496-L1501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1496-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1496-L1501) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L239)

```diff
-         })), this.opening
+           return zU ? yU.i - cU.i : cU.i - yU.i
+         }
+       }(FU, AU, !!oU));
+       for (let [gU, kU] of Object.entries(QU)) {
+         let UU = EU.findIndex((UU => UU.vs[0] === gU));
+         EU.splice(UU + 1, 0, kU)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L252-L255` → after: `L1512-L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1512-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1512-L1515) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L252-L255)

```diff
-     function jM(MM, rM) {
-       return new Blob([SM.encode(`${JSON.stringify(MM)}\n`), rM], {
-         type: "text/plain"
-       })
+     function hX(UU, XU, zU) {
+       let cU;
+       for (; XU.length && (cU = XU[XU.length - 1]).i <= zU;) XU.pop(), UU.push(cU.vs), zU++;
+       return zU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L257-L275` → after: `L1517-L1533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1517-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1517-L1533) · [Before (L257-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L257-L275)

```diff
-     class aM {
-       constructor(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
-         this.token = MM, this.relay = rM, this.nowMs = iM, this.refused = !1, this.skipUntilMs = 0
-       }
-       async send(MM, rM, iM, SM, aM) {
-         if (this.goesDirect(rM, iM)) return null;
-         const PM = jM({
-             token: this.token,
-             contentType: iM,
-             target: MM
-           }, rM),
-           nM = {
-             method: "POST",
-             headers: {
-               "Content-Type": "text/plain"
- ... (3 more removed lines; see GitHub link above)
+ 
+     function Uz(UU, XU, zU, cU, yU) {
+       var QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU;
+       let tU = null,
+         gU = yU;
+       "boolean" == typeof cU ? (gU = cU, tU = null) : void 0 !== cU && (tU = cU);
+       let kU = UU.children(XU),
+         GU = UU.node(XU),
+         BU = GU ? GU.borderLeft : void 0,
+         ZU = GU ? GU.borderRight : void 0,
+         RU = {};
+       BU && (kU = kU.filter((UU => UU !== BU && UU !== ZU)));
+       let PU = function(UU) {
+         return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((XU => {
+           let zU = UU.inEdges(XU);
+           if (!zU || !zU.length) return {
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L277-L298` → after: `L1535-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1535-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1535-L1596) · [Before (L277-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L277-L298)

```diff
-         let QM;
-         try {
-           const MM = rM.byteLength <= OM.e ? await OM.h.fetch(this.relay.url, nM, PM.size, iM) : await fetch(this.relay.url, nM);
-           if (!MM.ok) throw new Error(`HTTP ${MM.status}`);
-           if (QM = await MM.json(), "refused" !== QM.outcome && ("forwarded" !== QM.outcome || !Number.isInteger(QM.status))) throw new Error(`Unexpected relay answer ${JSON.stringify(QM)}`)
-         } catch (zM) {
-           if (!0 === (null === aM || void 0 === aM ? void 0 : aM.aborted)) throw zM;
-           return console.warn("Session replay couldn't relay an upload through the part joiner; uploading straight to storage.", zM), this.skipUntilMs = this.nowMs() + 12e4, null
-         }
-         return "refused" === QM.outcome ? (console.info(`Session replay's part joiner refused to relay (${QM.reason}); uploading straight to storage.`), this.refused = !0, null) : QM.status
-       }
-       beacon(MM, rM, iM, OM) {
-         if (this.goesDirect(rM, iM)) return null;
-         const SM = jM({
-           token: this.token,
-           contentType: iM,
- ... (6 more removed lines; see GitHub link above)
+           {
+             let cU = zU.reduce(((XU, zU) => {
+               let cU = UU.edge(zU),
+                 yU = UU.node(zU.v);
+               return {
+                 sum: XU.sum + cU.weight * yU.order,
+                 weight: XU.weight + cU.weight
+               }
+             }), {
+               sum: 0,
+               weight: 0
+             });
+             return {
+               v: XU,
+               barycenter: cU.sum / cU.weight,
+               weight: cU.weight
+ ... (46 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L302-L312` → after: `L1611-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1611-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1611-L1641) · [Before (L302-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L302-L312)

```diff
-     function PM(MM) {
-       return void 0 === (null === MM || void 0 === MM ? void 0 : MM.relay) ? null : new aM(MM.token, MM.relay)
-     }
-     class nM {
-       constructor() {
-         this.relays = new Map
-       }
-       for (MM) {
-         let rM = this.relays.get(MM.recordingId);
-         return void 0 === rM && (rM = PM(MM.partJoiner), this.relays.set(MM.recordingId, rM)), rM
-       }
+     function Xz(UU, XU, zU, cU) {
+       cU || (cU = UU.nodes());
+       let yU = function(UU) {
+           let XU;
+           for (; UU.hasNode(XU = hU("_root")););
+           return XU
+         }(UU),
+         QU = new vU({
+           compound: !0
+         }).setGraph({
+           root: yU
+         }).setDefaultNodeLabel((XU => UU.node(XU)));
+       return cU.forEach((cU => {
+         let AU = UU.node(cU),
+           FU = UU.parent(cU);
+         if (AU.rank === XU || AU.minRank <= XU && XU <= AU.maxRank) {
+ ... (15 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L327` → after: `L1645-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1645-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1645-L1660) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L327)

```diff
-       return 6e4 + Math.ceil(MM / 16384 * 1e3)
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       if ("function" == typeof XU.customOrder) return void XU.customOrder(UU, zz);
+       let cU = jU(UU),
+         yU = cz(UU, UX(1, cU + 1), "inEdges"),
+         QU = cz(UU, UX(cU - 1, -1, -1), "outEdges"),
+         AU = JX(UU, zU);
+       if (Qz(UU, AU), XU.disableOptimalOrderHeuristic) return;
+       let FU, oU = Number.POSITIVE_INFINITY,
+         DU = XU.constraints || [];
+       for (let EU = 0, YU = 0; YU < 4; ++EU, ++YU) {
+         yz(EU % 2 ? yU : QU, EU % 4 >= 2, DU, zU), AU = mU(UU);
+         let XU = jX(UU, AU);
+         XU < oU ? (YU = 0, FU = Object.assign({}, AU), oU = XU) : XU === oU && (FU = structuredClone(AU))
+       }
+       Qz(UU, FU)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L331-L338` → after: `L1664-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1664-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1664-L1671) · [Before (L331-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L331-L338)

```diff
-       const SM = new FormData;
-       let jM = rM.byteLength + aM;
-       for (const [aM, PM] of Object.entries(MM.fields)) SM.append(aM, PM), jM += (0, OM.k)(aM) + (0, OM.k)(PM);
-       return SM.append("file", new Blob([rM], {
-         type: iM
-       })), {
-         form: SM,
-         byteLength: jM
+       let cU = new Map,
+         yU = (UU, XU) => {
+           cU.has(UU) || cU.set(UU, []), cU.get(UU).push(XU)
+         };
+       for (let QU of UU.nodes()) {
+         let XU = UU.node(QU);
+         if ("number" == typeof XU.rank && yU(XU.rank, QU), "number" == typeof XU.minRank && "number" == typeof XU.maxRank)
+           for (let UU = XU.minRank; UU <= XU.maxRank; UU++) UU !== XU.rank && yU(UU, QU)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L342-L343` → after: `L1678-L1699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1678-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1678-L1699) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L342-L343)

```diff
-     function QM(MM) {
-       if (MM < 200 || MM > 299) throw new jM.d(`Segment POST failed with ${MM}`, MM)
+     function yz(UU, XU, zU, cU) {
+       let yU = !0,
+         QU = new vU;
+       UU.forEach((function(UU) {
+         zU.forEach((UU => QU.setEdge(UU.left, UU.right)));
+         let AU = UU.graph().root,
+           {
+             result: FU,
+             usedBias: oU
+           } = Uz(UU, AU, QU, cU, yU);
+         XU && oU && (yU = !yU), FU.vs.forEach(((XU, zU) => UU.node(XU).order = zU)),
+           function(UU, XU, zU) {
+             let cU, yU = {};
+             zU.forEach((zU => {
+               let QU, AU, FU = UU.parent(zU);
+               for (; FU;) {
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L347-L441` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1703) · [Before (L347-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L347-L441)

```diff
-       if ((MM < 200 || MM > 299) && (!rM || 412 !== MM)) throw new jM.d(`Segment PUT failed with ${MM}`, MM)
-     }
-     class LM {
-       constructor(MM) {
-         var rM;
-         let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         this.segmentUploadUrl = MM, this.deadline = void 0, this.relay = void 0, this.deadline = iM.deadline, this.relay = null !== (rM = iM.relay) && void 0 !== rM ? rM : null
-       }
-       requestPutUrl(MM) {
-         return this.presign(MM)
-       }
-       requestPostTargets(MM) {
-         return this.presign(MM)
-       }
-       async presign(MM) {
-         const rM = await fetch(this.segmentUploadUrl, {
- ... (79 more removed lines; see GitHub link above)
+       Object.values(XU).forEach((XU => XU.forEach(((XU, zU) => UU.node(XU).order = zU))))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L450-L454` → after: `L1706-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1706-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1706-L1709) · [Before (L450-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L450-L454)

```diff
-     function SM(MM) {
-       const rM = (new TextEncoder).encode(MM);
-       return {
-         bytes: (0, OM.e)(rM),
-         inflatedBytes: rM.byteLength
+     function Az(UU, XU, zU) {
+       if (XU > zU) {
+         let UU = XU;
+         XU = zU, zU = UU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L478-L481` → after: `L1715-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1715-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1715-L1718) · [Before (L478-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L478-L481)

```diff
-     function jM() {
-       return {
-         segmentUploadUrl: `${SM.clientSideServerUrls.indexUrl}${OM.w}`,
-         manifestUrl: `${SM.clientSideServerUrls.indexUrl}${OM.o}`
+     function Fz(UU, XU, zU) {
+       if (XU > zU) {
+         let UU = XU;
+         XU = zU, zU = UU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L493-L515` → after: `L1724-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1724-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1724-L1781) · [Before (L493-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L493-L515)

```diff
-     function SM(MM) {
-       return (new TextEncoder).encode(MM).byteLength
-     }
-     const jM = new class {
-       constructor() {
-         this.inFlightBytes = 0, this.inFlightLabels = new Map
-       }
-       async fetch(MM, rM, iM, OM) {
-         if (this.inFlightBytes + iM > 49152) return await fetch(MM, rM);
-         this.inFlightBytes += iM, this.countLabel(OM, 1);
-         const SM = () => {
-           this.inFlightBytes -= iM, this.countLabel(OM, -1)
-         };
-         let jM;
-         try {
-           jM = await fetch(MM, {
- ... (7 more removed lines; see GitHub link above)
+     function oz(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         QU = {},
+         AU = function(UU, XU, zU, cU) {
+           let yU = new vU,
+             QU = UU.graph(),
+             AU = function(UU, XU, zU) {
+               return (cU, yU, QU) => {
+                 let AU, FU = cU.node(yU),
+                   oU = cU.node(QU),
+                   DU = 0;
+                 if (DU += FU.width / 2, Object.hasOwn(FU, "labelpos")) switch (FU.labelpos.toLowerCase()) {
+                   case "l":
+                     AU = -FU.width / 2;
+                     break;
+                   case "r":
+ ... (42 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L529-L532` → after: `L1784-L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1784-L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1784-L1806) · [Before (L529-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L529-L532)

```diff
-       sendUploadBeacon(MM, rM, iM) {
-         return !(this.inFlightBytes + iM > 40960) && this.beaconSent(navigator.sendBeacon(MM, rM), iM)
-       }
-       countLabel(MM, rM) {
+       return oU((function(UU) {
+         let XU = AU.inEdges(UU);
+         QU[UU] = XU ? XU.reduce(((UU, XU) => {
+           var zU;
+           let cU = null != (zU = QU[XU.v]) ? zU : 0,
+             yU = AU.edge(XU);
+           return Math.max(UU, cU + (void 0 !== yU ? yU : 0))
+         }), 0) : 0
+       }), (function(UU) {
+         return AU.predecessors(UU) || []
+       })), oU((function(XU) {
+         let zU = AU.outEdges(XU),
+           cU = Number.POSITIVE_INFINITY;
+         zU && (cU = zU.reduce(((UU, XU) => {
+           let zU = QU[XU.w],
+             cU = AU.edge(XU);
+ ... (7 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L534-L540` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1808-L1810) · [Before (L534-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L534-L540)

```diff
-         void 0 !== MM && this.inFlightLabels.set(MM, (null !== (iM = this.inFlightLabels.get(MM)) && void 0 !== iM ? iM : 0) + rM)
-       }
-       beaconSent(MM, rM) {
-         return MM && (this.inFlightBytes += rM, setTimeout((() => {
-           this.inFlightBytes -= rM
-         }), 1e4)), MM
-       }
+         let cU = zU[UU];
+         void 0 !== cU && (QU[UU] = null != (XU = QU[cU]) ? XU : 0)
+       })), QU
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L542-L568` → after: `L1812-L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1812-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1812-L1977) · [Before (L542-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L542-L568)

```diff
-   },
-   34633: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(34639),
-       SM = iM(1215);
-     const jM = 6e4;
-     async function aM(MM, rM) {
-       const iM = JSON.stringify(rM);
-       try {
-         const rM = await OM.h.fetch(MM, {
-           method: "POST",
-           headers: {
-             "Content-Type": "application/json"
-           },
- ... (11 more removed lines; see GitHub link above)
+ 
+     function Dz(UU, XU) {
+       let zU, cU = mU(UU),
+         yU = Object.assign(function(UU, XU) {
+           let zU = {};
+           return XU.length && XU.reduce((function(XU, cU) {
+             let yU = 0,
+               QU = 0,
+               AU = XU.length,
+               FU = cU[cU.length - 1];
+             return cU.forEach(((XU, oU) => {
+               let DU = function(UU, XU) {
+                   if (UU.node(XU).dummy) {
+                     let zU = UU.predecessors(XU);
+                     if (zU) return zU.find((XU => UU.node(XU).dummy))
+                   }
+ ... (150 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L582-L614` → after: `L1981-L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L1981-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L1981-L2001) · [Before (L582-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L582-L614)

```diff
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM;
-       const {
-         domSegments: PM,
-         ...nM
-       } = MM.manifest, QM = () => ({
-         ...MM,
-         manifest: {
-           ...nM,
-           videoSegments: [],
-           telemetrySegments: [],
-           games: []
-         },
-         creatorGrants: []
-       }), zM = (0, OM.k)(JSON.stringify(QM())), LM = [];
-       let mM = {
-           request: QM(),
- ... (17 more removed lines; see GitHub link above)
+       (function(UU) {
+         let XU = mU(UU),
+           zU = UU.graph(),
+           cU = zU.ranksep,
+           yU = zU.rankalign,
+           QU = 0;
+         XU.forEach((XU => {
+           let zU = XU.reduce(((XU, zU) => {
+             var cU;
+             let yU = null != (cU = UU.node(zU).height) ? cU : 0;
+             return XU > yU ? XU : yU
+           }), 0);
+           XU.forEach((XU => {
+             let cU = UU.node(XU);
+             cU.y = "top" === yU ? QU + cU.height / 2 : "bottom" === yU ? QU + zU - cU.height / 2 : QU + zU / 2
+           })), QU += zU + cU
+ ... (5 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L618-L637` → after: `L2006-L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2006-L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2006-L2162) · [Before (L618-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L618-L637)

```diff
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM;
-       return PM(MM, function(MM) {
-         var rM;
-         return [...MM.creatorGrants.map((MM => ({
-           list: "creatorGrants",
-           value: MM
-         }))), ...MM.manifest.games.map((MM => ({
-           list: "games",
-           value: MM
-         }))), ...MM.manifest.videoSegments.map((MM => ({
-           list: "videoSegments",
-           value: MM
-         }))), ...MM.manifest.telemetrySegments.map((MM => ({
-           list: "telemetrySegments",
-           value: MM
-         }))), ...(null !== (rM = MM.manifest.domSegments) && void 0 !== rM ? rM : []).map((MM => ({
- ... (4 more removed lines; see GitHub link above)
+       return az(UU, bU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), UU
+     }
+ 
+     function pz(UU, XU, zU) {
+       let cU = XU;
+       for (; void 0 !== cU;) {
+         let XU = UU.parent(cU);
+         if (XU === zU) return cU;
+         cU = XU
+       }
+     }
+ 
+     function az(UU, XU, zU) {
+       var cU;
+       let yU = UU.nodes().filter((XU => UU.children(XU).length)),
+         QU = {};
+ ... (141 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L639` → after: `L2164-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2164-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2164-L2168) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L639)

```diff
-           request: rM
+           clusterId: zU,
+           subgraph: cU,
+           bounds: yU,
+           removedNodes: QU,
+           removedEdges: AU
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L641` → after: `L2170-L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2170-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2170-L2215) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L641)

```diff
-         return rM
+         var FU, oU;
+         let DU = UU.node(zU),
+           EU = null != (FU = null == DU ? void 0 : DU.x) ? FU : 0,
+           YU = null != (oU = null == DU ? void 0 : DU.y) ? oU : 0,
+           NU = (yU.minX + yU.maxX) / 2,
+           IU = (yU.my + yU.ly) / 2;
+         QU.forEach((XU => {
+           let {
+             id: zU,
+             node: cU,
+             parent: yU
+           } = XU;
+           UU.setNode(zU, cU), void 0 !== yU && UU.setParent(zU, yU)
+         })), AU.forEach((XU => {
+           let {
+             edge: zU,
+ ... (30 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L644-L651` → after: `L2218-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2218-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2218-L2493) · [Before (L644-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L644-L651)

```diff
-   },
-   34799: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => OM
-     });
-     class OM extends Error {
-       constructor(MM, rM) {
-         super(MM), this.status = rM
+ 
+     function tz(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+       var yU, QU;
+       let AU = !1 !== (null == zU ? void 0 : zU.useDynamic),
+         FU = AU && null != (yU = null == cU ? void 0 : cU.graph) ? yU : null,
+         oU = AU && null != (QU = null == cU ? void 0 : cU.rawNodes) ? QU : null;
+       XU("    makeSpaceForEdgeLabels", (() => function(UU) {
+         let XU = UU.graph();
+         XU.ranksep /= 2, UU.edges().forEach((zU => {
+           var cU;
+           let yU = UU.edge(zU);
+           yU.minlen *= 2, "c" !== (null != (cU = yU.labelpos) ? cU : "r").toLowerCase() && ("TB" === XU.rankdir || "BT" === XU.rankdir ? yU.width += yU.labeloffset : yU.height += yU.labeloffset)
+         }))
+       }(UU))), XU("    removeSelfEdges", (() => function(UU) {
+         UU.edges().forEach((XU => {
+ ... (260 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L654-L684` → after: `L2496-L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2496-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2496-L2514) · [Before (L654-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L654-L684)

```diff
-   },
-   5479: (MM, rM, iM) => {
-     iM.d(rM, {
-       A: () => LM,
-       E: () => HM,
-       G: () => zM,
-       J: () => aM,
-       c: () => jM,
-       g: () => lM,
-       h: () => EM,
-       j: () => dM,
-       l: () => JM,
-       o: () => nM,
-       r: () => yM,
-       s: () => QM,
-       v: () => hM,
- ... (15 more removed lines; see GitHub link above)
+ 
+     function gz(UU, XU) {
+       UU.nodes().forEach((zU => {
+         let cU = UU.node(zU),
+           yU = XU.node(zU);
+         cU && (cU.x = yU.x, cU.y = yU.y, cU.order = yU.order, cU.rank = yU.rank, XU.children(zU).length && (cU.width = yU.width, cU.height = yU.height))
+       })), UU.edges().forEach((zU => {
+         let cU = UU.edge(zU),
+           yU = XU.edge(zU);
+         cU.points = yU.points, Object.hasOwn(yU, "x") && (cU.x = yU.x, cU.y = yU.y)
+       })), UU.graph().width = XU.graph().width, UU.graph().height = XU.graph().height
+     }
+     var kz = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
+       Gz = {
+         ranksep: 50,
+         edgesep: 20,
+ ... (3 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L687-L691` → after: `L2519-L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2519-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2519-L2520) · [Before (L687-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L687-L691)

```diff
-         ...OM,
-         maxFps: 15,
-         bitrate: 5e5,
-         maxMacroblocks: 2040,
-         softwareEncoderOnWindows: !1
+         width: 0,
+         height: 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L694-L697` → after: `L2524-L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2524-L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2524-L2550) · [Before (L694-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L694-L697)

```diff
-         desktop: OM,
-         mobile: SM,
-         tablet: SM
-       };
+         minlen: 1,
+         weight: 1,
+         width: 0,
+         height: 0,
+         labeloffset: 10,
+         labelpos: "r"
+       },
+       dz = ["labelpos"];
+ 
+     function Lz(UU) {
+       let XU = new vU({
+           multigraph: !0,
+           compound: !0
+         }),
+         zU = Cz(UU.graph());
+       return XU.setGraph(Object.assign({}, Gz, ez(zU, kz), XX(zU, Bz))), UU.nodes().forEach((zU => {
+ ... (11 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L700-L703` → after: `L2553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2553) · [Before (L700-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L700-L703)

```diff
-       return {
-         ...jM[rM],
-         ...MM
-       }
+       return zX(XX(UU, XU), Number)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L710-L713` → after: `L2557-L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2557-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2557-L2561) · [Before (L710-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L710-L713)

```diff
-       return {
-         count: Math.ceil(MM.segmentDurationMs / MM.partDurationMs) + 1,
-         maxBytes: Math.ceil(1.5 * MM.bitrate / 8 * (MM.partDurationMs / 1e3)) + 32768
-       }
+       let XU = {};
+       return UU && Object.entries(UU).forEach((UU => {
+         let [zU, cU] = UU;
+         "string" == typeof zU && (zU = zU.toLowerCase()), XU[zU] = cU
+       })), XU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L715-L732` → after: `L2563-L2585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2563-L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2563-L2585) · [Before (L715-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L715-L732)

```diff
-     const LM = "/index/studio/replay-segment-urls",
-       mM = 20,
-       HM = 50,
-       hM = 6e4,
-       JM = 432e5,
-       dM = "Chat",
-       yM = {
-         clock: "bloxd-clock",
-         active: "bloxd-active",
-         death: "player_death",
-         error: "error"
-       },
-       lM = {
-         FullSnapshot: 2,
-         IncrementalSnapshot: 3,
-         Meta: 4,
- ... (2 more removed lines; see GitHub link above)
+ 
+     function wz(UU) {
+       let XU = mU(UU),
+         zU = new vU({
+           compound: !0,
+           multigraph: !0
+         }).setGraph({});
+       return UU.nodes().forEach((XU => {
+         zU.setNode(XU, {
+           label: XU
+         }), zU.setParent(XU, "layer" + UU.node(XU).rank)
+       })), UU.edges().forEach((UU => zU.setEdge(UU.v, UU.w, {}, UU.name))), XU.forEach(((UU, XU) => {
+         let cU = "layer" + XU;
+         zU.setNode(cU, {
+           rank: "same"
+         }), UU.reduce(((UU, XU) => (zU.setEdge(UU, XU, {
+ ... (7 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L735-L744` → after: `L2588-L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L2588-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/131.js#L2588-L2595) · [Before (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/131.js#L735-L744)

```diff
-         Mutation: 0,
-         MouseMove: 1,
-         MouseInteraction: 2,
-         Scroll: 3,
-         ViewportResize: 4,
-         Input: 5,
-         TouchMove: 6,
-         MediaInteraction: 7,
-         StyleSheetRule: 8,
-         Drag: 12
+         graphlib: QU,
+         version: QX,
+         layout: Iz,
+         debug: wz,
+         util: {
+           time: KU,
+           notime: bU
+         }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/132.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/132.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L5-L20003` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/132.js#L4) · [Before (L5-L20003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/132.js#L5-L20003)

```diff
-   6665: function(MM, rM, iM) {
-     var OM;
-     ! function() {
-       var SM, jM = 1e9,
-         aM = {
-           precision: 20,
-           rounding: 4,
-           toExpNeg: -7,
-           toExpPos: 21,
-           LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
-         },
-         PM = !0,
-         nM = "[DecimalError] ",
-         QM = nM + "Invalid argument: ",
-         zM = nM + "Exponent out of range: ",
-         LM = Math.floor,
- ... (19983 more removed lines; see GitHub link above)
+   7062: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L20007-L20339` → after: `L8-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L8-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/132.js#L8-L168) · [Before (L20007-L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/132.js#L20007-L20339)

```diff
-     const SM = function() {
-       for (var MM, rM, iM = 0, SM = "", jM = arguments.length; iM < jM; iM++)(MM = arguments[iM]) && (rM = OM(MM)) && (SM && (SM += " "), SM += rM);
-       return SM
-     }
-   },
-   6607: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => jM,
-       c: () => PM
-     });
-     var OM = iM(6615),
-       SM = iM(6620);
- 
-     function jM() {
-       var MM, rM, iM = (0, SM.c)().unknown(void 0),
-         aM = iM.domain,
- ... (317 more removed lines; see GitHub link above)
+     const cU = {
+       canChange: !0,
+       blockReach: 6,
+       ezBridging: !0,
+       ezBridgingGrowMs: null,
+       ezTowering: !0,
+       ezToweringGrowMs: null,
+       speedMultiplier: 1,
+       crouchingSpeed: 2,
+       walkingSpeed: 4,
+       runningSpeed: 7,
+       jumpAmount: 8,
+       airJumpCount: 0,
+       jumpHoldThrust: null,
+       bunnyhopMaxMultiplier: 1.3,
+       music: null,
+ ... (145 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/133.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/133.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61)

#### 1. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L3)

```diff
- export const ids = [133];
+ export const ids = [133, 702];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L5)

```diff
-   6888: (MM, rM, iM) => {
+   37032: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L7-L13` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L6) · [Before (L7-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L7-L13)

```diff
-       Graph: () => NM,
-       debug: () => Wi,
-       default: () => Di,
-       graphlib: () => jM,
-       layout: () => Hi,
-       util: () => si,
-       version: () => jr
+       default: () => fX
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L15-L1193` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L8-L40) · [Before (L15-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L15-L1193)

```diff
-     var OM = Object.defineProperty,
-       SM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? OM(MM, rM, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: iM
-       }) : MM[rM] = iM)(MM, "symbol" != typeof rM ? rM + "" : rM, iM),
-       jM = {};
-     ((MM, rM) => {
-       for (var iM in rM) OM(MM, iM, {
-         get: rM[iM],
-         enumerable: !0
-       })
-     })(jM, {
-       Graph: () => NM,
-       alg: () => yM
- ... (1163 more removed lines; see GitHub link above)
+     var cU = zU(320),
+       yU = zU(3887),
+       QU = zU(3929),
+       AU = zU(3920),
+       FU = zU(3914),
+       oU = zU(1193),
+       DU = zU(42),
+       EU = zU(1800),
+       YU = zU(1420),
+       NU = zU(1494),
+       IU = zU(1106),
+       pU = zU.n(IU),
+       aU = zU(1726),
+       tU = zU(61),
+       gU = zU(73),
+       kU = zU(2494),
+ ... (17 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1196-L1208` → after: `L43-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L43-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L43-L56) · [Before (L1196-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1196-L1208)

```diff
-       er(MM)
-     }
-     var or = function(MM) {
-       let rM = function(MM) {
-           let rM = {},
-             iM = 0;
- 
-           function OM(SM) {
-             let jM = iM;
-             MM.children(SM).forEach(OM), rM[SM] = {
-               low: jM,
-               lim: iM++
-             }
+       var XU;
+       let {
+         eventName: zU
+       } = UU;
+       const {
+         t: cU
+       } = (0, oU.I)(), yU = eU.h[zU], [QU, AU] = (0, tU.useState)((() => Date.now() >= yU.endsAt.getTime())), [FU, DU] = (0, tU.useState)("overall"), EU = function(UU, XU) {
+         const {
+           userContext: zU,
+           isUserContextUpdating: cU
+         } = (0, ZU.d)(), yU = `${UU}:${XU}`, [QU, AU] = (0, tU.useState)({
+           requestKey: yU,
+           leaderboard: {
+             status: "loading"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1210-L1232` → after: `L58-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L58-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L58-L81) · [Before (L1210-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1210-L1232)

```diff
-           return MM.children(Or).forEach(OM), rM
-         }(MM),
-         iM = MM.graph();
-       if (!Array.isArray(iM.dummyChains)) return;
-       iM.dummyChains.forEach((iM => {
-         let OM = MM.node(iM),
-           SM = OM.edgeObj,
-           jM = function(MM, rM, iM, OM) {
-             let SM, jM = [],
-               aM = [],
-               PM = Math.min(rM[iM].low, rM[OM].low),
-               nM = Math.max(rM[iM].lim, rM[OM].lim);
-             SM = iM;
-             do {
-               SM = MM.parent(SM), jM.push(SM)
-             } while (SM && (rM[SM].low > PM || nM > rM[SM].lim));
- ... (7 more removed lines; see GitHub link above)
+         });
+         return (0, tU.useEffect)((() => {
+           if (cU) return;
+           let QU, FU = !1;
+           const oU = async () => {
+             if ("visible" === document.visibilityState) try {
+               const cU = await CU.c.getGameEventLeaderboard(zU, {
+                 event: UU,
+                 scope: XU
+               });
+               FU || AU({
+                 requestKey: yU,
+                 leaderboard: {
+                   status: "loaded",
+                   leaderboard: cU
+                 }
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1234-L1244` → after: `L83-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L83-L86) · [Before (L1234-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1234-L1244)

```diff
-           }(MM, rM, SM.v, SM.w),
-           aM = jM.path,
-           PM = jM.lca,
-           nM = 0,
-           QM = aM[nM],
-           zM = !0;
-         for (; iM !== SM.w;) {
-           if (OM = MM.node(iM), zM) {
-             for (;
-               (QM = aM[nM]) !== PM && MM.node(QM).maxRank < OM.rank;) nM++;
-             QM === PM && (zM = !1)
+             FU || (QU = setTimeout(oU, uU))
+           };
+           return oU(), () => {
+             FU = !0, clearTimeout(QU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1246-L1248` → after: `L88-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L88-L108) · [Before (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1246-L1248)

```diff
-           if (!zM) {
-             for (; nM < aM.length - 1 && MM.node(aM[nM + 1]).minRank <= OM.rank;) nM++;
-             QM = aM[nM]
+         }), [UU, XU, yU, zU, cU]), QU.requestKey === yU ? QU.leaderboard : {
+           status: "loading"
+         }
+       }(zU, FU), YU = function(UU) {
+         const XU = (0, tU.useRef)(null),
+           zU = (0, tU.useRef)(0),
+           cU = (0, tU.useRef)(),
+           [yU, QU] = (0, tU.useState)({});
+         return (0, tU.useEffect)((() => {
+           const yU = null === UU || void 0 === UU ? void 0 : UU.entries;
+           if (!yU) return;
+           const AU = new Map(yU.map((UU => [UU.player.name, UU.value]))),
+             FU = XU.current;
+           if (XU.current = AU, null === FU) return;
+           const oU = {};
+           for (const [UU, XU] of AU) {
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1250-L1253` → after: `L110-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L110-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L110-L246) · [Before (L1250-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1250-L1253)

```diff
-           void 0 !== QM && MM.setParent(iM, QM), iM = MM.successors(iM)[0]
-         }
-       }))
-     };
+           0 !== Object.keys(oU).length && (QU(oU), clearTimeout(cU.current), cU.current = setTimeout((() => {
+             QU({})
+           }), fU))
+         }), [UU]), (0, tU.useEffect)((() => () => {
+           clearTimeout(cU.current)
+         }), []), yU
+       }("loaded" === EU.status ? EU.leaderboard : null), NU = function(UU) {
+         const [XU, zU] = (0, tU.useState)(null), cU = "loaded" === UU.status ? UU.leaderboard.goalProgress : void 0;
+         return (0, tU.useEffect)((() => {
+           cU && zU(cU)
+         }), [cU]), XU
+       }(EU), IU = wU.h[`profileEffect_${yU.prizePack}`];
+       if (QU) return null;
+       const aU = "loaded" === EU.status ? EU.leaderboard : null,
+         gU = null !== (XU = null === aU || void 0 === aU ? void 0 : aU.entries) && void 0 !== XU ? XU : null,
+         kU = null !== aU && void 0 !== aU && aU.own && null !== gU && !gU.some((UU => UU.isOwn)) ? aU.own : null;
+ ... (121 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1256-L1275` → after: `L249-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L249-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L249-L292) · [Before (L1256-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1256-L1275)

```diff
-       let rM = AM(MM, "root", {}, "_root"),
-         iM = function(MM) {
-           let rM = {};
- 
-           function iM(OM, SM) {
-             let jM = MM.children(OM);
-             jM && jM.length && jM.forEach((MM => iM(MM, SM + 1))), rM[OM] = SM
-           }
-           return MM.children(Or).forEach((MM => iM(MM, 1))), rM
-         }(MM),
-         OM = Object.values(iM),
-         SM = IM(Math.max, OM) - 1,
-         jM = 2 * SM + 1;
-       MM.graph().nestingRoot = rM, MM.edges().forEach((rM => MM.edge(rM).minlen *= jM));
-       let aM = function(MM) {
-         return MM.edges().reduce(((rM, iM) => rM + MM.edge(iM).weight), 0)
- ... (4 more removed lines; see GitHub link above)
+       let {
+         event: XU,
+         progress: zU
+       } = UU;
+       const {
+         t: cU
+       } = (0, oU.I)(), yU = null !== zU && XU.prizeGoals.some(((UU, XU) => zU[XU] >= UU.target));
+       return (0, rU.jsxs)("div", {
+         className: "GameEventPanelGoals",
+         children: [(0, rU.jsx)("div", {
+           className: "GameEventPanelGoalsHeading",
+           children: cU(yU ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
+         }), (0, rU.jsx)("div", {
+           className: "GameEventPanelGoalRow",
+           children: XU.prizeGoals.map(((UU, XU) => {
+             const yU = null === zU ? null : Math.min(zU[XU], UU.target);
+ ... (28 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1278-L1303` → after: `L300-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L300-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L300-L392) · [Before (L1278-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1278-L1303)

```diff
-     function Yr(MM, rM, iM, OM, SM, jM, aM) {
-       var PM;
-       let nM = MM.children(aM);
-       if (!nM.length) return void(aM !== rM && MM.setEdge(rM, aM, {
-         weight: 0,
-         minlen: iM
-       }));
-       let QM = BM(MM, "_bt"),
-         zM = BM(MM, "_bb"),
-         LM = MM.node(aM);
-       MM.setParent(QM, aM), LM.borderTop = QM, MM.setParent(zM, aM), LM.borderBottom = zM, nM.forEach((PM => {
-         var nM;
-         Yr(MM, rM, iM, OM, SM, jM, PM);
-         let LM = MM.node(PM),
-           mM = LM.borderTop ? LM.borderTop : PM,
-           HM = LM.borderBottom ? LM.borderBottom : PM,
- ... (10 more removed lines; see GitHub link above)
+     function mU(UU) {
+       let {
+         gameNameWithVariation: XU
+       } = UU;
+       const zU = (0, MU.F)(XU),
+         [cU, yU] = (0, tU.useState)(null);
+       if ((0, tU.useEffect)((() => {
+           if (!zU) return;
+           let UU = !0;
+           return (0, vU.k)(zU).then((XU => {
+             UU && yU(XU)
+           })).catch((UU => {
+             console.error(`Failed to load the page copy for ${zU.name}`, UU)
+           })), () => {
+             UU = !1
+           }
+ ... (77 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1310-L1319` → after: `L396-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L396-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L396-L418) · [Before (L1310-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1310-L1319)

```diff
-     var Nr = function(MM) {
-       MM.children(Or).forEach((function rM(iM) {
-         let OM = MM.children(iM),
-           SM = MM.node(iM);
-         if (OM.length && OM.forEach(rM), SM && Object.hasOwn(SM, "minRank")) {
-           SM.borderLeft = [], SM.borderRight = [];
-           for (let rM = SM.minRank, OM = SM.maxRank + 1; rM < OM; ++rM) Ar(MM, "borderLeft", "_bl", iM, SM, rM), Ar(MM, "borderRight", "_br", iM, SM, rM)
-         }
-       }))
-     };
+     var lU = zU(1390),
+       xU = zU(97),
+       JU = zU(1131),
+       jU = zU(34909),
+       KU = zU(1696),
+       bU = zU(1577),
+       TU = zU(1568),
+       hU = zU(1652),
+       UX = zU(1507),
+       XX = zU(1410),
+       zX = zU(37036),
+       cX = zU(1250),
+       yX = zU(1079),
+       QX = zU(344),
+       AX = zU(1086),
+       FX = zU(1592),
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1321-L1331` → after: `L420-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L420-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L420-L441) · [Before (L1321-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1321-L1331)

```diff
-     function Ar(MM, rM, iM, OM, SM, jM) {
-       let aM = {
-           width: 0,
-           height: 0,
-           rank: jM,
-           borderType: rM
-         },
-         PM = SM[rM][jM - 1],
-         nM = AM(MM, "border", aM, iM);
-       SM[rM][jM] = nM, MM.setParent(nM, OM), PM && MM.setEdge(PM, nM, {
-         weight: 1
+     function aX(UU) {
+       let {
+         preview: XU,
+         isBroken: zU
+       } = UU;
+       const cU = null === XU ? null : (0, QU.c)(XU, "small"),
+         AU = (0, yU.f)(null !== cU && void 0 !== cU ? cU : QU.i);
+       return null === XU ? (0, rU.jsx)("div", {
+         className: pU()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
+           FeaturedGamesPopupSlotThumbnailBroken: zU
+         }),
+         children: (0, rU.jsx)(lU.d, {
+           name: zU ? "triangle-exclamation" : "star"
+         })
+       }) : (0, rU.jsx)("div", {
+         className: pU()("FeaturedGamesPopupSlotThumbnail", FU.i),
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1336-L1348` → after: `L446-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L446-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L446-L456) · [Before (L1336-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1336-L1348)

```diff
-       var rM;
-       let iM = null == (rM = MM.graph().rankdir) ? void 0 : rM.toLowerCase();
-       ("bt" === iM || "rl" === iM) && function(MM) {
-         MM.nodes().forEach((rM => Br(MM.node(rM)))), MM.edges().forEach((rM => {
-           var iM;
-           let OM = MM.edge(rM);
-           null == (iM = OM.points) || iM.forEach(Br), Object.hasOwn(OM, "y") && Br(OM)
-         }))
-       }(MM), ("lr" === iM || "rl" === iM) && (function(MM) {
-         MM.nodes().forEach((rM => Xr(MM.node(rM)))), MM.edges().forEach((rM => {
-           var iM;
-           let OM = MM.edge(rM);
-           null == (iM = OM.points) || iM.forEach(Xr), Object.hasOwn(OM, "x") && Xr(OM)
+       let {
+         schematicId: XU,
+         gameName: zU
+       } = UU;
+       const {
+         userContext: yU
+       } = (0, ZU.d)(), QU = (0, pX.b)(), [AU, FU] = (0, tU.useState)(null), [oU, DU] = (0, tU.useState)(null), [EU, YU] = (0, tU.useState)(!1), IU = (0, tU.useCallback)((() => {
+         DU(null), CU.c.getFeaturedGames(yU).then((UU => {
+           QU.current && FU(UU.slots)
+         })).catch((UU => {
+           console.error("Failed to get featured games", UU), QU.current && DU("Failed to load featured games")
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1350` → after: `L458-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L458-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L458-L551) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1350)

```diff
-       }(MM), vr(MM))
+       }), [yU, QU]);
+       (0, tU.useEffect)((() => {
+         IU()
+       }), [IU]);
+       const pU = (UU, XU) => {
+         EU || (YU(!0), CU.c.setFeaturedGame(yU, UU, XU).then((() => {
+           QU.current && IU()
+         })).catch((UU => {
+           console.error("Failed to set featured game", UU), QU.current && DU("Failed to update the featured slot")
+         })).finally((() => {
+           QU.current && YU(!1)
+         })))
+       };
+       return (0, rU.jsxs)("div", {
+         className: "FeaturedGamesPopupBody",
+         children: [(0, rU.jsx)("h1", {
+ ... (78 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1354` → after: `L560-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L560-L582) · [Before (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1354)

```diff
-       MM.nodes().forEach((rM => Fr(MM.node(rM)))), MM.edges().forEach((rM => Fr(MM.edge(rM))))
+       let {
+         customLobbies: XU,
+         favouriteLobbies: zU,
+         toggleLikeLobby: cU,
+         showReport: yU
+       } = UU;
+       const [QU, AU] = (0, tU.useState)(BX);
+       return (0, tU.useEffect)((() => {
+         if (QU >= XU.length) return;
+         let UU = !0;
+         return (0, GX.g)().then((() => {
+           UU && AU(QU + ZX)
+         })), () => {
+           UU = !1
+         }
+       }), [QU, XU.length]), (0, rU.jsx)(rU.Fragment, {
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1357-L1359` → after: `L613-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L613-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L613-L631) · [Before (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1357-L1359)

```diff
-     function Fr(MM) {
-       let rM = MM.width;
-       MM.width = MM.height, MM.height = rM
+     function rX(UU, XU) {
+       const zU = YX.f[UU.schematicId];
+       return {
+         listedVariations: [],
+         backgroundImage: (0, QU.c)(UU, "large"),
+         badges: [],
+         category: UU.gameCategory,
+         title: void 0 !== (null === zU || void 0 === zU ? void 0 : zU.title) ? XU(zU.title) : UU.name,
+         variationTitle: null,
+         description: void 0 !== (null === zU || void 0 === zU ? void 0 : zU.description) ? XU(zU.description) : UU.description,
+         ownerSocialPreviewWithoutLocation: "owner" in UU ? UU.owner : null,
+         ccu: UU.ccu,
+         favourites: UU.favourites,
+         isFavourite: null,
+         useRejoinLastLobbyButton: "persistWorld" in UU ? UU.persistWorld : null,
+         showWorldsInsteadOfCustomLobbies: !1,
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1363` → after: `L635-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L635-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L635-L642) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1363)

```diff
-       MM.y = -MM.y
+       var XU, zU, cU;
+       return null !== (XU = null !== (zU = (0, wX.j)() ? function(UU) {
+         for (const [XU, zU] of Object.entries(qX)) {
+           const cU = [XU, ...zU.map((UU => (0, QX.Rb)(XU, UU)))];
+           if (cU.includes(UU)) return cU
+         }
+         return null
+       }(UU) : null) && void 0 !== zU ? zU : null === (cU = YX.d[UU]) || void 0 === cU ? void 0 : cU.listedVariations) && void 0 !== XU ? XU : null
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1366-L1368` → after: `L645-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L645-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L645-L653) · [Before (L1366-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1366-L1368)

```diff
-     function Xr(MM) {
-       let rM = MM.x;
-       MM.x = MM.y, MM.y = rM
+     function fX() {
+       const {
+         gameNameWithVariation: UU
+       } = (0, bU.C)();
+       if ((0, tU.useEffect)(LX.r, []), UU && (0, cX.w)(UU)) return (0, rU.jsx)(iX, {
+         urlId: UU
+       }, UU);
+       const XU = UU && (0, yX.l)(UU) ? UU : "firstParty";
+       return (0, rU.jsx)(MX, {}, XU)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1372-L1388` → after: `L657-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L657-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L657-L693) · [Before (L1372-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1372-L1388)

```diff
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-         iM = {},
-         OM = MM.nodes().filter((rM => !MM.children(rM).length)),
-         SM = OM.map((rM => MM.node(rM).rank)),
-         jM = Mr(IM(Math.max, SM) + 1).map((() => []));
-       return OM.sort(((rM, iM) => MM.node(rM).rank - MM.node(iM).rank)).forEach((function OM(SM) {
-         if (iM[SM]) return;
-         iM[SM] = !0;
-         let aM = MM.node(SM);
-         jM[aM.rank].push(SM);
-         let PM = MM.successors(SM);
-         PM && [...PM].sort(((iM, OM) => function(iM, OM) {
-           let SM = MM.node(iM),
-             jM = MM.node(OM);
-           return Sr(rM, SM, jM)
-         }(iM, OM))).forEach(OM)
- ... (1 more removed lines; see GitHub link above)
+       let {
+         urlId: XU
+       } = UU;
+       const {
+         t: zU
+       } = (0, oU.I)(), {
+         userContext: cU,
+         isUserContextUpdating: yU
+       } = (0, ZU.d)(), QU = (0, tU.useMemo)((() => (0, KU.h)(XU)), [XU]);
+       (0, tU.useMemo)((() => {
+         if (null === QU) return;
+         const UU = JU.userContextManager.peekCurrentUserContext();
+         (null !== UU ? CU.c.getGame(UU, QU.schematicId) : JU.userContextManager.getCurrentUserContext().then((UU => CU.c.getGame(UU, QU.schematicId)))).catch((UU => {
+           null === (0, CU.h)(UU) && console.error(`Failed to get the custom game ${QU.schematicId}`, UU), (0, KU.g)(XU)
+         }))
+       }), [QU, XU]);
+ ... (21 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1392-L1420` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L697) · [Before (L1392-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1392-L1420)

```diff
-       let iM = 0;
-       for (let OM = 1; OM < rM.length; ++OM) iM += qr(MM, rM[OM - 1], rM[OM]);
-       return iM
-     }
- 
-     function qr(MM, rM, iM) {
-       let OM = function(MM, rM) {
-           return MM.reduce(((MM, iM, OM) => (MM[iM] = rM[OM], MM)), {})
-         }(iM, iM.map(((MM, rM) => rM))),
-         SM = rM.flatMap((rM => {
-           let iM = MM.outEdges(rM);
-           return iM ? iM.map((rM => ({
-             pos: OM[rM.w],
-             weight: MM.edge(rM).weight
-           }))).sort(((MM, rM) => MM.pos - rM.pos)) : []
-         })),
- ... (13 more removed lines; see GitHub link above)
+       (0, TU.navigateToHomePage)(), (0, CX.e)(UU, XU)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1423-L1459` → after: `L700-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L700-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L700-L733) · [Before (L1423-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1423-L1459)

```diff
-     function Tr(MM, rM) {
-       let iM = {};
-       return MM.forEach(((MM, rM) => {
-           let OM = {
-             indegree: 0,
-             in: [],
-             out: [],
-             vs: [MM.v],
-             i: rM
-           };
-           void 0 !== MM.barycenter && (OM.barycenter = MM.barycenter, OM.weight = MM.weight), iM[MM.v] = OM
-         })), rM.edges().forEach((MM => {
-           let rM = iM[MM.v],
-             OM = iM[MM.w];
-           void 0 !== rM && void 0 !== OM && (OM.indegree++, rM.out.push(OM))
-         })),
- ... (21 more removed lines; see GitHub link above)
+     function MX(UU) {
+       var XU, zU, AU, IU, eU, wU, qU, SU;
+       let {
+         gameNameWithVariation: uU,
+         knownCustomGame: fU = null
+       } = UU;
+       const {
+         t: HU
+       } = (0, oU.I)();
+       (0, EX.j)();
+       const vU = (0, EX.o)(),
+         {
+           userContext: VU,
+           isUserContextUpdating: sU
+         } = (0, ZU.d)(),
+         nU = (0, dX.g)(),
+ ... (18 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1461-L1474` → after: `L735-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L735-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L735-L810) · [Before (L1461-L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1461-L1474)

```diff
-           return rM.filter((MM => !MM.merged)).map((MM => rr(MM, ["vs", "i", "barycenter", "weight"])))
-         }(Object.values(iM).filter((MM => !MM.indegree)))
-     }
- 
-     function Vr(MM, rM, iM, OM, SM) {
-       let jM = {},
-         aM = null,
-         PM = null,
-         nM = SM;
-       "boolean" == typeof rM ? (nM = rM, jM = {}) : rM && (jM = rM, aM = null != iM ? iM : null, PM = null != OM ? OM : null);
-       let QM = function(MM, rM) {
-           let iM = {
-             lhs: [],
-             rhs: []
+         }), [UX]);
+       (0, tU.useEffect)((() => {
+         const UU = UX.gameNameWithVariation;
+         cX.gameNameWithVariation !== UU && UU !== (0, QX.Tb)(UU) && JU((0, MU.A)(cX.gameNameWithVariation), {
+           replace: !0
+         })
+       }), [cX.gameNameWithVariation, UX.gameNameWithVariation, JU]);
+       const [pX, aX] = (0, tU.useState)(""), GX = tU.useRef(null), [BX, ZX] = (0, tU.useState)(), LX = (0, yX.l)(cX.gameNameWithVariation), CX = (0, tU.useMemo)((() => LX ? null : function(UU, XU, zU) {
+         var cU, yU;
+         const AU = YX.d[UU];
+         return (0, OX.P)(AU) ? null : {
+           listedVariations: uX(UU),
+           backgroundImage: (0, QU.g)(UU, (0, QU.b)(AU)),
+           badges: (0, EU.filterBadges)(AU.badges),
+           category: AU.type,
+           title: zU(AU.title),
+ ... (60 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1476-L1516` → after: `L812-L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L812-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L812-L875) · [Before (L1476-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1476-L1516)

```diff
-           return MM.forEach((MM => {
-             rM(MM) ? iM.lhs.push(MM) : iM.rhs.push(MM)
-           })), iM
-         }(MM, (MM => Object.hasOwn(MM, "barycenter"))),
-         zM = QM.lhs,
-         LM = QM.rhs.sort(((MM, rM) => rM.i - MM.i)),
-         mM = [],
-         HM = 0,
-         hM = 0,
-         JM = 0;
-       zM.sort(function(MM, rM, iM) {
-         return (OM, SM) => {
-           if (OM.barycenter < SM.barycenter) return -1;
-           if (OM.barycenter > SM.barycenter) return 1;
-           if (MM && ("string" == typeof OM.vs[0] || "string" == typeof SM.vs[0])) {
-             let iM = MM.node(OM.vs[0]),
- ... (25 more removed lines; see GitHub link above)
+         return document.addEventListener("pointerdown", UU, !0), document.addEventListener("keydown", XU, !0), () => {
+           document.removeEventListener("pointerdown", UU, !0), document.removeEventListener("keydown", XU, !0)
+         }
+       }), []), (0, RU.d)("Enter", (UU => {
+         const XU = UU.target instanceof Element ? UU.target : null;
+         if (UU.defaultPrevented || null !== XU && void 0 !== XU && XU.closest("input, textarea, select")) return;
+         const zU = null === XU || void 0 === XU ? void 0 : XU.closest("a, button");
+         zU && zU !== yz.current || (UU.preventDefault(), Iz())
+       })), (0, PU.e)(TU.navigateToHomePage);
+       const Qz = lX.length > 0 || xX.length > 0,
+         Az = !sX.useRejoinLastLobbyButton || 0 === lX.length,
+         Fz = LX && null === sX.ownerSocialPreviewWithoutLocation,
+         oz = VU.getPlayerName() === (null === BX || void 0 === BX || null === (XU = BX.owner) || void 0 === XU ? void 0 : XU.name),
+         Dz = null !== (zU = null === (AU = sX.badges.find((UU => "event" === UU.type))) || void 0 === AU ? void 0 : AU.event) && void 0 !== zU ? zU : null,
+         Ez = Az ? NU.l : NU.f,
+         Yz = (0, rU.jsx)(YU.d, {
+ ... (48 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1518-L1551` → after: `L877-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L877-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L877-L907) · [Before (L1518-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1518-L1551)

```diff
-     function Mi(MM, rM, iM, OM, SM) {
-       var jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM;
-       let dM = null,
-         yM = SM;
-       "boolean" == typeof OM ? (yM = OM, dM = null) : void 0 !== OM && (dM = OM);
-       let lM = MM.children(rM),
-         EM = MM.node(rM),
-         UM = EM ? EM.borderLeft : void 0,
-         GM = EM ? EM.borderRight : void 0,
-         CM = {};
-       UM && (lM = lM.filter((MM => MM !== UM && MM !== GM)));
-       let eM = function(MM) {
-         return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((rM => {
-           let iM = MM.inEdges(rM);
-           if (!iM || !iM.length) return {
-             v: rM
- ... (18 more removed lines; see GitHub link above)
+       function Iz(UU) {
+         (0, eX.h)(), JU((0, GU.b)(cX.gameNameWithVariation, UU))
+       }(0, tU.useEffect)((() => {
+         Nz && (0, TU.navigateToHomePage)()
+       }), [Nz]), (0, tU.useEffect)((() => {
+         if (!1 === sX.canCreateCustomLobbies) return;
+         let UU = !0;
+         return null !== sX.showWorldsInsteadOfCustomLobbies && !1 === sU && (jX(!0), CU.c.getFavouriteLobbies(VU).then((UU => {
+           hX(UU)
+         })), CU.c.getOpenCustomLobbies(VU, {
+           gameNameWithVariation: sX.showWorldsInsteadOfCustomLobbies ? "classic" : cX.gameNameWithVariation,
+           onlyOwnedLobbies: "owned" === Uz,
+           onlyFavouriteLobbies: "favourite" === Uz
+         }).then((XU => {
+           UU && (0, gU.unstable_batchedUpdates)((() => {
+             bX(XU), jX(!1)
+ ... (15 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1553-L1638` → after: `L909-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L909-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L909-L917) · [Before (L1553-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1553-L1638)

```diff
-         }))
-       }(MM, lM);
-       eM.forEach((rM => {
-         if (MM.children(rM.v).length) {
-           let {
-             result: OM
-           } = Mi(MM, rM.v, iM, dM, yM);
-           CM[rM.v] = OM, Object.hasOwn(OM, "barycenter") && function(MM, rM) {
-             void 0 !== MM.barycenter ? (MM.barycenter = (MM.barycenter * MM.weight + rM.barycenter * rM.weight) / (MM.weight + rM.weight), MM.weight += rM.weight) : (MM.barycenter = rM.barycenter, MM.weight = rM.weight)
-           }(rM, OM)
-         }
-       }));
-       let bM = Tr(eM, iM);
-       ! function(MM, rM) {
-         MM.forEach((MM => {
-           MM.vs = MM.vs.flatMap((MM => rM[MM] ? rM[MM].vs : MM))
- ... (70 more removed lines; see GitHub link above)
+         }), [VU, TX]),
+         az = (null === BX || void 0 === BX ? void 0 : BX.schematicId) === (0, yX.p)(UX.gameNameWithVariation) ? BX : null,
+         tz = az && (0, MU.G)(UX.gameNameWithVariation, (UU => HU(UU)), az);
+       (0, hU.g)(az && (0, MU.A)(UX.gameNameWithVariation, az));
+       const gz = xU.featureFlags.canUseCustomLobbies && !0 === sX.canCreateCustomLobbies,
+         kz = (0, rU.jsx)("div", {
+           className: "GameInformationPageContentAnchor",
+           children: (0, rU.jsx)(mU, {
+             gameNameWithVariation: cX.gameNameWithVariation
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1640-L1641` → after: `L919-L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L919-L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L919-L1284) · [Before (L1640-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1640-L1641)

```diff
-         }
-       })), jM
+         });
+       return (0, rU.jsx)(rU.Fragment, {
+         children: (0, rU.jsxs)("article", {
+           className: pU()("GameInformation", {
+             GameInformationFadeIn: nX,
+             GameInformationReleaseCountdown: "releaseCountdown" === (null === (IU = sX.countdownInformation) || void 0 === IU ? void 0 : IU.type)
+           }),
+           children: [tz && (0, rU.jsx)(BU.d, {
+             meta: tz
+           }), (0, rU.jsxs)("div", {
+             className: "GameInformationInner",
+             children: [(0, rU.jsxs)("div", {
+               className: "GameInformationTop",
+               children: [(0, rU.jsxs)("div", {
+                 className: "GameInformationTopBackgroundContainer",
+                 children: [(0, rU.jsx)("div", {
+ ... (350 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1645-L1699` → after: `L1288-L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1288-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1288-L1316) · [Before (L1645-L1699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1645-L1699)

```diff
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-       if ("function" == typeof rM.customOrder) return void rM.customOrder(MM, ii);
-       let OM = KM(MM),
-         SM = Oi(MM, Mr(1, OM + 1), "inEdges"),
-         jM = Oi(MM, Mr(OM - 1, -1, -1), "outEdges"),
-         aM = Ir(MM, iM);
-       if (ji(MM, aM), rM.disableOptimalOrderHeuristic) return;
-       let PM, nM = Number.POSITIVE_INFINITY,
-         QM = rM.constraints || [];
-       for (let zM = 0, LM = 0; LM < 4; ++zM, ++LM) {
-         Si(zM % 2 ? SM : jM, zM % 4 >= 2, QM, iM), aM = FM(MM);
-         let rM = Kr(MM, aM);
-         rM < nM ? (LM = 0, PM = Object.assign({}, aM), nM = rM) : rM === nM && (PM = structuredClone(aM))
-       }
-       ji(MM, PM)
- ... (39 more removed lines; see GitHub link above)
+       let {
+         variation: XU,
+         isSelected: zU,
+         children: cU
+       } = UU;
+       const oU = YX.d[XU],
+         EU = (0, QU.g)(XU, (0, QU.h)(oU)),
+         YU = (0, yU.f)(EU),
+         NU = (0, AU.f)([(0, QU.f)(XU, (0, QU.b)(oU))]);
+       return (0, rU.jsxs)(TU.LinkPreserveSearch, {
+         to: (0, MU.A)(XU),
+         replace: !0,
+         className: pU()("GameInformationVariation", FU.i, {
+           SelectedGameInformationVariation: zU
+         }),
+         onClick: UU => {
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1702-L1703` → after: `L1336-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1336-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1336-L1378) · [Before (L1702-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1702-L1703)

```diff
-     function ji(MM, rM) {
-       Object.values(rM).forEach((rM => rM.forEach(((rM, iM) => MM.node(rM).order = iM))))
+     function aU(UU) {
+       let {
+         info: XU,
+         className: zU
+       } = UU;
+       const {
+         statusText: cU,
+         rowText: yU
+       } = (0, IU.f)();
+       return (0, pU.jsxs)("div", {
+         className: NU()("GameApprovalInfoDetails", zU),
+         children: [(0, pU.jsxs)("div", {
+           className: NU()("GameApprovalInfoSummary", XU.overallPassed ? "Passed" : "Failed"),
+           children: [(0, pU.jsx)(EU.d, {
+             name: XU.overallPassed ? "circle-check" : "circle-xmark"
+           }), (0, pU.jsx)("span", {
+ ... (27 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1706-L1712` → after: `L1383-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1383-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1383-L1391) · [Before (L1706-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1706-L1712)

```diff
-     function ai(MM, rM, iM) {
-       if (rM > iM) {
-         let MM = rM;
-         rM = iM, iM = MM
-       }
-       let OM = MM[rM];
-       OM || (MM[rM] = OM = {}), OM[iM] = !0
+     function kU(UU) {
+       gU.NotificationProvider.showCustomPopup({
+         body: () => (0, pU.jsx)(GU, {
+           ...UU
+         }),
+         middleScreenPopupClassName: "ApprovalInfoPopup",
+         onClose: () => {},
+         unlockPointerKey: "approvalInfoPopup"
+       })
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1715-L1721` → after: `L1394-L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1394-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1394-L1484) · [Before (L1715-L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1715-L1721)

```diff
-     function Pi(MM, rM, iM) {
-       if (rM > iM) {
-         let MM = rM;
-         rM = iM, iM = MM
-       }
-       let OM = MM[rM];
-       return void 0 !== OM && Object.hasOwn(OM, iM)
+     function GU(UU) {
+       let {
+         schematicId: XU,
+         canOverride: zU,
+         onApprovalChanged: YU
+       } = UU;
+       const {
+         t: NU
+       } = (0, tU.I)(), {
+         userContext: IU
+       } = (0, FU.d)(), gU = (0, AU.b)(), [kU, GU] = (0, cU.useState)(null), [BU, ZU] = (0, cU.useState)(null), [RU, PU] = (0, cU.useState)(!1), WU = (0, cU.useCallback)((() => {
+         ZU(null), QU.c.getGameApprovalInfo(IU, XU).then((UU => {
+           gU.current && GU(UU)
+         })).catch((UU => {
+           console.error("Failed to get game approval info", UU), gU.current && ZU(NU("studio:approvalLoadFailed"))
+         }))
+ ... (75 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1724-L1749` → after: `L1503-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1503-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1503-L1520) · [Before (L1724-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1724-L1749)

```diff
-     function ni(MM, rM, iM, OM) {
-       let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         jM = {},
-         aM = function(MM, rM, iM, OM) {
-           let SM = new NM,
-             jM = MM.graph(),
-             aM = function(MM, rM, iM) {
-               return (OM, SM, jM) => {
-                 let aM, PM = OM.node(SM),
-                   nM = OM.node(jM),
-                   QM = 0;
-                 if (QM += PM.width / 2, Object.hasOwn(PM, "labelpos")) switch (PM.labelpos.toLowerCase()) {
-                   case "l":
-                     aM = -PM.width / 2;
-                     break;
-                   case "r":
- ... (10 more removed lines; see GitHub link above)
+     function AU() {
+       const {
+         t: UU,
+         selectedLanguage: XU
+       } = (0, yU.I)();
+       return {
+         statusText: XU => UU(QU[XU]),
+         rowText: zU => {
+           const QU = (UU, zU) => (0, cU.eb)((0, yU.l)(XU.code, UU), 0, zU);
+           switch (zU.kind) {
+             case "ownerAccountAge": {
+               const XU = zU.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
+               return {
+                 label: UU("studio:approvalAccountAgeLabel"),
+                 value: UU(XU, {
+                   age: QU(XU, zU.accountAgeMs),
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1751-L1764` → after: `L1522-L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1522-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1522-L1557) · [Before (L1751-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1751-L1764)

```diff
-             }(jM.nodesep, jM.edgesep, OM);
-           return rM.forEach((rM => {
-             let OM;
-             rM.forEach((rM => {
-               let jM = iM[rM];
-               if (void 0 !== jM) {
-                 if (SM.setNode(jM), void 0 !== OM) {
-                   let PM = iM[OM];
-                   if (void 0 !== PM) {
-                     let iM = SM.edge(PM, jM);
-                     SM.setEdge(PM, jM, Math.max(aM(MM, rM, OM), iM || 0))
-                   }
-                 }
-                 OM = rM
+             }
+             case "sinceUnbannedOrUnmuted":
+               return {
+                 label: UU("studio:approvalSinceUnbannedLabel"), value: UU("studio:approvalSinceUnbannedValue", {
+                   time: QU("studio:approvalSinceUnbannedValue", zU.sinceMs),
+                   days: zU.minDays
+                 })
+               };
+             case "reportHold": {
+               const {
+                 detail: XU
+               } = zU;
+               if (null === XU) return {
+                 label: UU("studio:approvalUnderInvestigation"),
+                 value: null
+               };
+ ... (20 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1766-L1779` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1559) · [Before (L1766-L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1766-L1779)

```diff
-             }))
-           })), SM
-         }(MM, rM, iM, SM),
-         PM = SM ? "borderLeft" : "borderRight";
- 
-       function nM(MM, rM) {
-         let iM = aM.nodes().slice(),
-           OM = {},
-           SM = iM.pop();
-         for (; SM;) {
-           if (OM[SM]) MM(SM);
-           else {
-             OM[SM] = !0, iM.push(SM);
-             for (let MM of rM(SM)) iM.push(MM)
+             }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1813-L1967` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1565-L1566) · [Before (L1813-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1813-L1967)

```diff
-     function Qi(MM, rM) {
-       let iM, OM = FM(MM),
-         SM = Object.assign(function(MM, rM) {
-           let iM = {};
-           return rM.length && rM.reduce((function(rM, OM) {
-             let SM = 0,
-               jM = 0,
-               aM = rM.length,
-               PM = OM[OM.length - 1];
-             return OM.forEach(((rM, nM) => {
-               let QM = function(MM, rM) {
-                   if (MM.node(rM).dummy) {
-                     let iM = MM.predecessors(rM);
-                     if (iM) return iM.find((rM => MM.node(rM).dummy))
-                   }
-                 }(MM, rM),
- ... (139 more removed lines; see GitHub link above)
+     function FU(UU) {
+       return null === UU.manualOverride && UU.rows.some((UU => "reportHold" === UU.kind && !UU.passed))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1970-L1977` → after: `L1607-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1607-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1607-L1635) · [Before (L1970-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1970-L1977)

```diff
-     function zi(MM, rM, iM) {
-       var OM;
-       if (!iM) return !1;
-       let SM = null == (OM = rM.node(MM)) ? void 0 : OM.edgeObj;
-       if (!SM || rM.node(MM).edgeLabel.reversed) return !1;
-       let jM = iM.indexOf(null == SM ? void 0 : SM.v),
-         aM = iM.indexOf(null == SM ? void 0 : SM.w);
-       return -1 !== jM && -1 !== aM && jM === (aM + 1) % iM.length || jM === (aM - 1) % iM.length
+     function tU(UU, XU) {
+       const zU = !0 === XU.debugResult.gameRefused,
+         QU = zU || XU.code === cU.m.REQUEST_TO_MATCHMAKING ? (0, IU.h)(XU.message) : null;
+       if (null !== QU) return ZU(UU, UU((0, IU.n)(QU)), UU(IU.j[QU])), !0;
+       if (zU) return async function(UU) {
+         const {
+           gameNameWithVariation: XU,
+           lobbyName: zU,
+           shownLobbyName: cU
+         } = oU.gameBridge.latest("connectedGame"), yU = "classic" === XU && (0, FU.A)(zU) ? cU : await (0, DU.g)(UU, XU, zU);
+         return "" !== yU ? UU("general:cantJoinGame", {
+           game: yU
+         }) : UU("general:cantJoinThisGame")
+       }(UU).then((zU => {
+         ZU(UU, zU, XU.message)
+       })), !0;
+ ... (13 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L1981-L2001` → after: `L1639-L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1639-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1639-L1641) · [Before (L1981-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L1981-L2001)

```diff
-       (function(MM) {
-         let rM = FM(MM),
-           iM = MM.graph(),
-           OM = iM.ranksep,
-           SM = iM.rankalign,
-           jM = 0;
-         rM.forEach((rM => {
-           let iM = rM.reduce(((rM, iM) => {
-             var OM;
-             let SM = null != (OM = MM.node(iM).height) ? OM : 0;
-             return rM > SM ? rM : SM
-           }), 0);
-           rM.forEach((rM => {
-             let OM = MM.node(rM);
-             OM.y = "top" === SM ? jM + OM.height / 2 : "bottom" === SM ? jM + iM - OM.height / 2 : jM + iM / 2
-           })), jM += iM + OM
- ... (5 more removed lines; see GitHub link above)
+       !0 !== (null === XU || void 0 === XU ? void 0 : XU.takenDown) ? ZU(UU, UU("general:cantJoinThisGame"), yU.e.customGameTakenDown.text) : GU(UU, "lock", UU("studio:gameTakenDownTitle", {
+         game: XU.name
+       }), UU("studio:viewInStudio"), XU.schematicId)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2005-L2006` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1644-L1645) · [Before (L2005-L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2005-L2006)

```diff
-     function Hi(MM) {
-       return di(MM, TM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), MM
+     function kU() {
+       return (0, QU.p)(oU.gameBridge.latest("connectedGame").gameNameWithVariation)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2008-L2014` → after: `L1647-L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1647-L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1647-L1659) · [Before (L2008-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2008-L2014)

```diff
- 
-     function Ji(MM, rM, iM) {
-       let OM = rM;
-       for (; void 0 !== OM;) {
-         let rM = MM.parent(OM);
-         if (rM === iM) return OM;
-         OM = rM
+     async function GU(UU, XU, zU, cU, yU) {
+       !0 === await YU.NotificationProvider.showPromptPopup({
+         icon: XU,
+         title: zU,
+         confirmText: cU,
+         cancelText: UU("general:cancel")
+       }).getResult() && (0, pU.navigatePreserveSearch)((0, aU.r)((0, AU.e)(yU), "manage"))
+     }
+     async function BU(UU) {
+       try {
+         return await EU.c.getGame(await NU.userContextManager.getCurrentUserContext(), UU, !0)
+       } catch (XU) {
+         return (0, EU.e)(XU) || console.error(`Failed to get game ${UU}`, XU), null
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2019-L2216` → after: `L1664-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1664-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1664-L1670) · [Before (L2019-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2019-L2216)

```diff
-       var OM;
-       let SM = MM.nodes().filter((rM => MM.children(rM).length)),
-         jM = {};
-       SM.forEach((OM => {
-         let SM = MM.node(OM);
-         if (SM && SM.rankdir) {
-           let aM = new NM({
-             multigraph: !0,
-             compound: !0
-           });
-           aM.setGraph({
-             rankdir: SM.rankdir
-           });
-           let PM = MM.children(OM);
-           PM.forEach((rM => {
-             let iM = {
- ... (182 more removed lines; see GitHub link above)
+       YU.NotificationProvider.showPromptPopup({
+         icon: "lock",
+         title: XU,
+         subtitle: zU,
+         confirmText: UU("general:ok"),
+         cancelText: ""
+       })
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2219-L2334` → after: `L1681-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1681-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1681-L1682) · [Before (L2219-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2219-L2334)

```diff
-     function yi(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-       var SM, jM;
-       let aM = !1 !== (null == iM ? void 0 : iM.useDynamic),
-         PM = aM && null != (SM = null == OM ? void 0 : OM.graph) ? SM : null,
-         nM = aM && null != (jM = null == OM ? void 0 : OM.rawNodes) ? jM : null;
-       rM("    makeSpaceForEdgeLabels", (() => function(MM) {
-         let rM = MM.graph();
-         rM.ranksep /= 2, MM.edges().forEach((iM => {
-           var OM;
-           let SM = MM.edge(iM);
-           SM.minlen *= 2, "c" !== (null != (OM = SM.labelpos) ? OM : "r").toLowerCase() && ("TB" === rM.rankdir || "BT" === rM.rankdir ? SM.width += SM.labeloffset : SM.height += SM.labeloffset)
-         }))
-       }(MM))), rM("    removeSelfEdges", (() => function(MM) {
-         MM.edges().forEach((rM => {
-           if (rM.v === rM.w) {
- ... (100 more removed lines; see GitHub link above)
+     function AU(UU) {
+       return UU = function(UU, XU) {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2336-L2448` → after: `L1684-L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1684-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1684-L1711) · [Before (L2336-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2336-L2448)

```diff
-         let iM = null == (rM = MM.graph().rankdir) ? void 0 : rM.toLowerCase();
-         ("lr" === iM || "rl" === iM) && vr(MM)
-       }(MM))), rM("    position", (() => Li(MM, iM.corePath))), rM("    positionSelfEdges", (() => function(MM) {
-         MM.nodes().forEach((rM => {
-           let iM = MM.node(rM),
-             OM = MM => "number" == typeof MM && isFinite(MM);
-           if ("selfedge" === iM.dummy) {
-             let SM = iM,
-               jM = MM.node(SM.e.v),
-               aM = OM(null == jM ? void 0 : jM.x) ? jM.x : 0,
-               PM = OM(null == jM ? void 0 : jM.y) ? jM.y : 0,
-               nM = OM(null == jM ? void 0 : jM.width) ? jM.width : 0,
-               QM = OM(null == jM ? void 0 : jM.height) ? jM.height : 0,
-               zM = OM(iM.x) ? iM.x : aM,
-               LM = OM(iM.y) ? iM.y : PM,
-               mM = nM / 2,
- ... (97 more removed lines; see GitHub link above)
+         const cU = new URLSearchParams(XU),
+           yU = cU.get("lobby"),
+           QU = cU.get("vm"),
+           AU = null !== (zU = yU) && void 0 !== zU ? zU : UU.lobbyName,
+           FU = null !== QU && void 0 !== QU ? QU : UU.directJoinVmUrl;
+         if (AU === UU.lobbyName && FU === UU.directJoinVmUrl) return UU;
+         return {
+           ...UU,
+           lobbyName: AU,
+           directJoinVmUrl: FU
+         }
+       }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), UU = function(UU) {
+         if ((0, QU.P)(UU.directJoinVmUrl)) return UU;
+         const XU = (0, yU.S)(UU.directJoinVmUrl);
+         null === XU && (UU.directJoinVmUrl = void 0);
+         return UU
+ ... (12 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2450-L2494` → after: `L1713-L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1713-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1713-L1714) · [Before (L2450-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2450-L2494)

```diff
-         function nM(MM) {
-           let jM = MM.x,
-             aM = MM.y,
-             PM = MM.width,
-             nM = MM.height;
-           rM = Math.min(rM, jM - PM / 2), iM = Math.max(iM, jM + PM / 2), OM = Math.min(OM, aM - nM / 2), SM = Math.max(SM, aM + nM / 2)
-         }
-         MM.nodes().forEach((rM => nM(MM.node(rM)))), MM.edges().forEach((rM => {
-           let iM = MM.edge(rM);
-           Object.hasOwn(iM, "x") && nM(iM)
-         })), rM -= aM, OM -= PM, MM.nodes().forEach((iM => {
-           let SM = MM.node(iM);
-           SM.x -= rM, SM.y -= OM
-         })), MM.edges().forEach((iM => {
-           let SM = MM.edge(iM);
-           SM.points.forEach((MM => {
- ... (29 more removed lines; see GitHub link above)
+     function yU() {
+       cU = !0
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2497-L2506` → after: `L1717-L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1717-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1717-L1718) · [Before (L2497-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2497-L2506)

```diff
-     function li(MM, rM) {
-       MM.nodes().forEach((iM => {
-         let OM = MM.node(iM),
-           SM = rM.node(iM);
-         OM && (OM.x = SM.x, OM.y = SM.y, OM.order = SM.order, OM.rank = SM.rank, rM.children(iM).length && (OM.width = SM.width, OM.height = SM.height))
-       })), MM.edges().forEach((iM => {
-         let OM = MM.edge(iM),
-           SM = rM.edge(iM);
-         OM.points = SM.points, Object.hasOwn(SM, "x") && (OM.x = SM.x, OM.y = SM.y)
-       })), MM.graph().width = rM.graph().width, MM.graph().height = rM.graph().height
+     function QU() {
+       return cU
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2508-L2531` → after: `L1720-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1720-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1720-L1730) · [Before (L2508-L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2508-L2531)

```diff
-     var Ei = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
-       Ui = {
-         ranksep: 50,
-         edgesep: 20,
-         nodesep: 50,
-         rankdir: "TB",
-         rankalign: "center"
-       },
-       Gi = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
-       Ci = ["width", "height", "rank"],
-       ei = {
-         width: 0,
-         height: 0
-       },
-       bi = ["minlen", "weight", "width", "height", "labeloffset"],
-       wi = {
- ... (8 more removed lines; see GitHub link above)
+   },
+   9493: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => QU,
+       f: () => AU,
+       h: () => FU,
+       j: () => DU,
+       n: () => oU
+     });
+     var cU = zU(212),
+       yU = zU(5057);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2534-L2549` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1733) · [Before (L2534-L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2534-L2549)

```diff
-       let rM = new NM({
-           multigraph: !0,
-           compound: !0
-         }),
-         iM = Ri(MM.graph());
-       return rM.setGraph(Object.assign({}, Ui, ui(iM, Ei), rr(iM, Gi))), MM.nodes().forEach((iM => {
-         let OM = ui(Ri(MM.node(iM)), Ci);
-         Object.keys(ei).forEach((MM => {
-           void 0 === OM[MM] && (OM[MM] = ei[MM])
-         })), rM.setNode(iM, OM);
-         let SM = MM.parent(iM);
-         void 0 !== SM && rM.setParent(iM, SM)
-       })), MM.edges().forEach((iM => {
-         let OM = Ri(MM.edge(iM));
-         rM.setEdge(iM, Object.assign({}, wi, ui(OM, bi), rr(OM, ti)))
-       })), rM
+       return AU(UU) === cU.e.gameOrPluginOnPlayerAuthRejected.code
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2552-L2553` → after: `L1736-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1736-L1737) · [Before (L2552-L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2552-L2553)

```diff
-     function ui(MM, rM) {
-       return ir(rr(MM, rM), Number)
+     function AU(UU) {
+       return "object" === typeof UU && null !== UU ? UU.code : void 0
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2557-L2561` → after: `L1741-L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1741-L1742) · [Before (L2557-L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2557-L2561)

```diff
-       let rM = {};
-       return MM && Object.entries(MM).forEach((MM => {
-         let [iM, OM] = MM;
-         "string" == typeof iM && (iM = iM.toLowerCase()), rM[iM] = OM
-       })), rM
+       var XU;
+       return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L2565-L2596` → after: `L1746-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L1746-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/133.js#L1746-L1761) · [Before (L2565-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/133.js#L2565-L2596)

```diff
-       let rM = FM(MM),
-         iM = new NM({
-           compound: !0,
-           multigraph: !0
-         }).setGraph({});
-       return MM.nodes().forEach((rM => {
-         iM.setNode(rM, {
-           label: rM
-         }), iM.setParent(rM, "layer" + MM.node(rM).rank)
-       })), MM.edges().forEach((MM => iM.setEdge(MM.v, MM.w, {}, MM.name))), rM.forEach(((MM, rM) => {
-         let OM = "layer" + rM;
-         iM.setNode(OM, {
-           rank: "same"
-         }), MM.reduce(((MM, rM) => (iM.setEdge(MM, rM, {
-           style: "invis"
-         }), rM)))
- ... (16 more removed lines; see GitHub link above)
+       return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
+     }
+     const DU = {
+       private: "customLobby:cantJoinPrivate",
+       notWhitelisted: "customLobby:cantJoinNotWhitelisted",
+       banned: "customLobby:cantJoinBanned",
+       adminLocked: "customLobby:cantJoinAdminLocked"
+     }
+   },
+   37067: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => yU,
+       h: () => cU
+     });
+     const cU = "skyblockSkills",
+       yU = "skills_test_gym"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/134.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/134.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L4-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/134.js#L4-L83) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/134.js#L4)

```diff
-   6950: (MM, rM, iM) => {
+   9305: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU,
+       d: () => QU
+     });
+     var cU = zU(2067);
+     const yU = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
+       QU = UU => "string" === typeof UU.icon && "" !== UU.icon && "string" === typeof UU.keycode && yU.test(UU.keycode),
+       AU = UU => "Space" === UU ? "_" : cU.i[UU]
+   },
+   37211: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => yU,
+       g: () => QU
+     });
+     let cU = !1;
+ ... (64 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L8-L46` → after: `L87-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L87-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/134.js#L87-L213) · [Before (L8-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/134.js#L8-L46)

```diff
-     const OM = {
-       canChange: !0,
-       blockReach: 6,
-       ezBridging: !0,
-       ezBridgingGrowMs: null,
-       ezTowering: !0,
-       ezToweringGrowMs: null,
-       speedMultiplier: 1,
-       crouchingSpeed: 2,
-       walkingSpeed: 4,
-       runningSpeed: 7,
-       jumpAmount: 8,
-       airJumpCount: 0,
-       jumpHoldThrust: null,
-       bunnyhopMaxMultiplier: 1.3,
-       music: null,
- ... (23 more removed lines; see GitHub link above)
+     var cU = zU(1328);
+ 
+     function yU(UU) {
+       if ("error" === UU.type) {
+         const {
+           error: XU,
+           filename: zU
+         } = UU;
+         return XU instanceof Error && (zU.startsWith(window.location.origin) || zU.startsWith("wasm://"))
+       }
+       const XU = UU.reason;
+       if (XU instanceof Error) {
+         var zU;
+         const UU = `${XU.name}: ${XU.message}`;
+         return !(0, cU.h)(null !== (zU = XU.stack) && void 0 !== zU ? zU : "") && !(0, cU.e)(UU) && !(0, cU.g)(UU)
+       }
+ ... (111 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L48-L167` → after: `L215-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L215-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/134.js#L215-L388) · [Before (L48-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/134.js#L48-L167)

```diff
-       },
-       canCustomiseChar: !0,
-       defaultBlock: "Block of Gold",
-       cantChangeError: "You cannot modify this block",
-       cantBreakError: null,
-       cantBuildError: null,
-       touchscreenActionButton: null,
-       strictFluidBuckets: !0,
-       preserveProtectedFluidSources: !1,
-       fillBrokenBlocksWithWater: !1,
-       canUseZoomKey: !0,
-       canAltAction: !0,
-       canSeeNametagsThroughWalls: !0,
-       showBasicMovementControls: !0,
-       middleTextTop: "",
-       middleTextUpper: "",
- ... (104 more removed lines; see GitHub link above)
+       }
+       releaseAll() {
+         let UU = !1;
+         for (let XU = 0; this.heldCount > 0 && XU < this.uD.length; XU++) UU = this.release(XU) || UU;
+         this.mouseButtons = 0, UU && this.updateActionBits()
+       }
+       release(UU) {
+         const XU = this.uD[UU];
+         if (0 === XU) return !1;
+         this.uD[UU] = 0, this.heldCount--;
+         const zU = 0 !== (XU - 1 & 2);
+         return this.emit(UU, !1, 0 !== (XU - 1 & 1), zU, 0 !== (XU - 1 & 4)), zU
+       }
+       updateActionBits() {
+         let UU = 0;
+         if (this.heldCount > 0) {
+ ... (158 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/135.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/135.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L2)

```diff
- export const ids = [135, 705];
+ export const ids = [135, 136];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L6)

```diff
-   37278: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       default: () => kr
+   7126: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => yU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L8-L40` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L8) · [Before (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L8-L40)

```diff
-     var OM = iM(313),
-       SM = iM(3902),
-       jM = iM(3945),
-       aM = iM(3938),
-       PM = iM(3934),
-       nM = iM(1188),
-       QM = iM(30),
-       zM = iM(1830),
-       LM = iM(1440),
-       mM = iM(1520),
-       HM = iM(1116),
-       hM = iM.n(HM),
-       JM = iM(1763),
-       dM = iM(44),
-       yM = iM(65),
-       lM = iM(2482),
- ... (17 more removed lines; see GitHub link above)
+     var cU = zU(1305);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L45` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L12-L13) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L45)

```diff
-         eventName: iM
+         href: XU,
+         children: zU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L49-L244` → after: `L45-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L45-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L45-L50) · [Before (L49-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L49-L244)

```diff
-       } = (0, nM.A)(), SM = gM.e[iM], [jM, aM] = (0, dM.useState)((() => Date.now() >= SM.endsAt.getTime())), [PM, QM] = (0, dM.useState)("overall"), zM = function(MM, rM) {
-         const {
-           userContext: iM,
-           isUserContextUpdating: OM
-         } = (0, GM.b)(), SM = `${MM}:${rM}`, [jM, aM] = (0, dM.useState)({
-           requestKey: SM,
-           leaderboard: {
-             status: "loading"
-           }
-         });
-         return (0, dM.useEffect)((() => {
-           if (OM) return;
-           let jM, PM = !1;
-           const nM = async () => {
-             if ("visible" === document.visibilityState) try {
-               const OM = await uM.c.getGameEventLeaderboard(iM, {
- ... (180 more removed lines; see GitHub link above)
+       } = (0, cU.I)();
+       return (0, QU.jsxs)(QU.Fragment, {
+         children: [UU("superBotXd:deepSeekNotice"), " ", (0, QU.jsx)(yU.c, {
+           href: AU,
+           children: UU("superBotXd:deepSeekPrivacyPolicy")
+         })]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L248-L252` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L54) · [Before (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L248-L252)

```diff
-     function fM(MM) {
-       let {
-         event: rM,
-         progress: iM
-       } = MM;
+     function EU() {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L255-L290` → after: `L57-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L57-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L57-L64) · [Before (L255-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L255-L290)

```diff
-       } = (0, nM.A)(), SM = null !== iM && rM.prizeGoals.some(((MM, rM) => iM[rM] >= MM.target));
-       return (0, DM.jsxs)("div", {
-         className: "GameEventPanelGoals",
-         children: [(0, DM.jsx)("div", {
-           className: "GameEventPanelGoalsHeading",
-           children: OM(SM ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
-         }), (0, DM.jsx)("div", {
-           className: "GameEventPanelGoalRow",
-           children: rM.prizeGoals.map(((MM, rM) => {
-             const SM = null === iM ? null : Math.min(iM[rM], MM.target);
-             return (0, DM.jsxs)(dM.Fragment, {
-               children: [rM > 0 && (0, DM.jsx)("div", {
-                 className: "GameEventPanelGoalsOr",
-                 children: OM("gameEvents:goalsOr")
-               }), (0, DM.jsxs)("div", {
-                 className: hM()("GameEventPanelGoal", {
- ... (20 more removed lines; see GitHub link above)
+       } = (0, cU.I)();
+       return (0, QU.jsxs)(QU.Fragment, {
+         children: [UU("aiHelperChatGpt:notice"), " ", (0, QU.jsx)(yU.c, {
+           href: FU,
+           children: UU("aiHelperChatGpt:terms")
+         }), " ", (0, QU.jsx)(yU.c, {
+           href: oU,
+           children: UU("aiHelperChatGpt:privacyPolicy")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L294-L298` → after: `L68-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L68-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L68-L84) · [Before (L294-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L294-L298)

```diff
-     var YM = iM(1630),
-       NM = iM(1675),
-       AM = iM(1099),
-       xM = iM(783),
-       vM = iM(3875);
+   },
+   7117: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => wU
+     });
+     var cU = zU(61),
+       yU = zU(1193),
+       QU = zU(142),
+       AU = zU(241),
+       FU = zU(1494),
+       oU = zU(1349),
+       DU = zU(27),
+       EU = zU(1734),
+       YU = zU(3774),
+       NU = zU(3767),
+       IU = zU(3485),
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L302` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L88) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L302)

```diff
-         gameNameWithVariation: rM
+         allowsPersonalizedAds: XU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L304-L345` → after: `L90-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L90-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L90-L114) · [Before (L304-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L304-L345)

```diff
-       const iM = (0, YM.F)(rM),
-         [OM, SM] = (0, dM.useState)(null);
-       if ((0, dM.useEffect)((() => {
-           if (!iM) return;
-           let MM = !0;
-           return (0, NM.h)(iM).then((rM => {
-             MM && SM(rM)
-           })).catch((MM => {
-             console.error(`Failed to load the page copy for ${iM.name}`, MM)
-           })), () => {
-             MM = !1
-           }
-         }), [iM]), !iM || !OM || OM.name !== iM.name) return null;
-       const jM = (0, NM.e)(OM),
-         aM = new Set((0, AM.c)((0, xM.i)()).map((MM => (0, YM.w)(MM)))),
-         PM = OM.similarGames.filter((MM => aM.has((0, YM.w)(MM))));
- ... (26 more removed lines; see GitHub link above)
+       return (0, pU.jsxs)(pU.Fragment, {
+         children: [(0, pU.jsx)("h2", {
+           children: "4. Cookies and Tracking Technologies"
+         }), (0, pU.jsx)("h3", {
+           children: "4.1 What Are Cookies?"
+         }), (0, pU.jsx)("p", {
+           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
+         }), (0, pU.jsx)("h3", {
+           children: "4.2 Types of Cookies We Use"
+         }), (0, pU.jsx)("p", {
+           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
+         }), (0, pU.jsxs)("table", {
+           children: [(0, pU.jsxs)("tr", {
+             children: [(0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Type of Cookie"
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L347-L354` → after: `L116-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L116-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L116-L128) · [Before (L347-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L347-L354)

```diff
-           }), (0, DM.jsxs)("aside", {
-             className: "GamePageContentSection",
-             children: [(0, DM.jsx)("h2", {
-               children: jM.tips
-             }), (0, DM.jsx)("ul", {
-               children: OM.tips.map((MM => (0, DM.jsx)("li", {
-                 children: MM
-               }, MM)))
+           }), (0, pU.jsxs)("tr", {
+             children: [(0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Functional Cookies"
+               })
+             }), (0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Ensure the website works properly by enabling basic functions like navigation and settings."
+               })
+             }), (0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Remembering your game settings, progress or language preferences."
+               })
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L356-L390` → after: `L130-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L130-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L130-L184) · [Before (L356-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L356-L390)

```diff
-           }), (0, DM.jsxs)("section", {
-             className: "GamePageContentSection GamePageContentFaq",
-             children: [(0, DM.jsx)("h2", {
-               children: jM.faq
-             }), OM.faq.map((MM => {
-               let {
-                 question: rM,
-                 answer: iM
-               } = MM;
-               return (0, DM.jsxs)("div", {
-                 className: "GamePageContentFaqItem",
-                 children: [(0, DM.jsx)("h3", {
-                   children: rM
-                 }), (0, DM.jsx)("p", {
-                   children: iM
-                 })]
- ... (19 more removed lines; see GitHub link above)
+           }), (0, pU.jsxs)("tr", {
+             children: [(0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Analytical Cookies"
+               })
+             }), (0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Help us understand how players use the site by collecting anonymized data (e.g., pages visited)."
+               })
+             }), (0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Tracking the number of visitors or identifying popular game features."
+               })
+             })]
+           }), (0, pU.jsxs)("tr", {
+             children: [(0, pU.jsx)("td", {
+ ... (39 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L393-L441` → after: `L187-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L187-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L187-L201) · [Before (L393-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L393-L441)

```diff
-         })
-       })
-     }
-     var BM = iM(1398),
-       XM = iM(83),
-       IM = iM(1144),
-       KM = iM(35064),
-       qM = iM(1733),
-       TM = iM(1608),
-       VM = iM(1591),
-       cM = iM(1685),
-       Mr = iM(1530),
-       rr = iM(1429),
-       ir = iM(37280),
-       Or = iM(1240),
-       Sr = iM(1073),
- ... (33 more removed lines; see GitHub link above)
+         }), (0, pU.jsx)("h3", {
+           children: "4.3 Managing Cookies"
+         }), (0, pU.jsx)("p", {
+           children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
+         }), (0, pU.jsxs)("ul", {
+           children: [(0, pU.jsx)("li", {
+             children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
+           }), (0, pU.jsx)("li", {
+             children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
+           }), (0, pU.jsx)("li", {
+             children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
+           }), (0, pU.jsx)("li", {
+             children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
+           })]
+         })]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L447-L448` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L207) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L447-L448)

```diff
-         schematicId: rM,
-         gameName: iM
+         allowsPersonalizedAds: XU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L450-L545` → after: `L209-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L209-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L209-L306) · [Before (L450-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L450-L545)

```diff
-       const {
-         userContext: SM
-       } = (0, GM.b)(), jM = (0, hr.b)(), [aM, PM] = (0, dM.useState)(null), [nM, QM] = (0, dM.useState)(null), [zM, LM] = (0, dM.useState)(!1), HM = (0, dM.useCallback)((() => {
-         QM(null), uM.c.getFeaturedGames(SM).then((MM => {
-           jM.current && PM(MM.slots)
-         })).catch((MM => {
-           console.error("Failed to get featured games", MM), jM.current && QM("Failed to load featured games")
-         }))
-       }), [SM, jM]);
-       (0, dM.useEffect)((() => {
-         HM()
-       }), [HM]);
-       const hM = (MM, rM) => {
-         zM || (LM(!0), uM.c.setFeaturedGame(SM, MM, rM).then((() => {
-           jM.current && HM()
-         })).catch((MM => {
- ... (80 more removed lines; see GitHub link above)
+       return (0, pU.jsxs)(pU.Fragment, {
+         children: [(0, pU.jsx)("h2", {
+           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
+         }), (0, pU.jsx)("h3", {
+           children: "2.1 Visitors"
+         }), (0, pU.jsx)("h4", {
+           children: "2.1.1 Data Collection and Usage"
+         }), (0, pU.jsxs)("p", {
+           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
+         }), (0, pU.jsxs)("table", {
+           children: [(0, pU.jsxs)("tr", {
+             children: [(0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Type of Information"
+               })
+             }), (0, pU.jsx)("td", {
+ ... (82 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L547-L548` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L308) · [Before (L547-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L547-L548)

```diff
-             className: "FeaturedGamesPopupHint",
-             children: "A game leaves its slot once it ranks higher on its own."
+             children: "Chat you send, including private messages, may appear in other players\u2019 session recordings, watched only by Bloxd staff to fix problems in the game, and staff watching one may read the chat sent in its games from these logs (section 2.5). Chat logs are … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L561-L564` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L563) · [Before (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L561-L564)

```diff
-         customLobbies: rM,
-         favouriteLobbies: iM,
-         toggleLikeLobby: OM,
-         showReport: SM
+         allowsPersonalizedAds: XU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L566-L581` → after: `L565-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L565-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L565-L956) · [Before (L566-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L566-L581)

```diff
-       const [jM, aM] = (0, dM.useState)(Ur);
-       return (0, dM.useEffect)((() => {
-         if (jM >= rM.length) return;
-         let MM = !0;
-         return (0, Er.e)().then((() => {
-           MM && aM(jM + Gr)
-         })), () => {
-           MM = !1
-         }
-       }), [jM, rM.length]), (0, DM.jsx)(DM.Fragment, {
-         children: rM.slice(0, jM).map((MM => (0, DM.jsx)(lr.e, {
-           customLobby: MM,
-           favouriteLobbies: iM,
-           toggleLikeLobby: OM,
-           showReport: SM
-         }, MM.name)))
+       return (0, pU.jsxs)(pU.Fragment, {
+         children: [(0, pU.jsx)("h3", {
+           children: "3.3 Service Providers"
+         }), (0, pU.jsx)("p", {
+           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
+         }), (0, pU.jsx)("h4", {
+           children: "Hosting and Data Storage"
+         }), (0, pU.jsxs)("table", {
+           children: [(0, pU.jsxs)("tr", {
+             children: [(0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "Service Provider"
+               })
+             }), (0, pU.jsx)("td", {
+               children: (0, pU.jsx)("p", {
+                 children: "What They Collect"
+ ... (376 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L595-L610` → after: `L960-L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L960-L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L960-L1395) · [Before (L595-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L595-L610)

```diff
-       listedVariations: null,
-       backgroundImage: jM.t,
-       badges: [],
-       category: null,
-       title: null,
-       variationTitle: null,
-       description: null,
-       ownerSocialPreviewWithoutLocation: null,
-       ccu: null,
-       favourites: null,
-       isFavourite: null,
-       useRejoinLastLobbyButton: null,
-       showWorldsInsteadOfCustomLobbies: null,
-       canCreateCustomLobbies: null,
-       countdownInformation: null
-     };
+         CA: {
+           name: "Canada",
+           status: "bySubdivision"
+         },
+         US: {
+           name: "the United States",
+           status: "bySubdivision"
+         },
+         AT: {
+           name: "Austria",
+           status: "off"
+         },
+         AX: {
+           name: "\xc5land",
+           status: "off"
+         },
+ ... (420 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L613-L641` → after: `L1398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1398) · [Before (L613-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L613-L641)

```diff
-       const iM = Lr.g[MM.schematicId];
-       return {
-         listedVariations: [],
-         backgroundImage: (0, jM.g)(MM, "large"),
-         badges: [],
-         category: MM.gameCategory,
-         title: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.title) ? rM(iM.title) : MM.name,
-         variationTitle: null,
-         description: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.description) ? rM(iM.description) : MM.description,
-         ownerSocialPreviewWithoutLocation: "owner" in MM ? MM.owner : null,
-         ccu: MM.ccu,
-         favourites: MM.favourites,
-         isFavourite: null,
-         useRejoinLastLobbyButton: "persistWorld" in MM ? MM.persistWorld : null,
-         showWorldsInsteadOfCustomLobbies: !1,
-         canCreateCustomLobbies: !0,
- ... (13 more removed lines; see GitHub link above)
+       return UU.replace(/^the /, "").localeCompare(XU.replace(/^the /, ""))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L646-L777` → after: `L1406-L1408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1406-L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1406-L1408) · [Before (L646-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L646-L777)

```diff
-         gameNameWithVariation: MM
-       } = (0, TM.D)();
-       if ((0, dM.useEffect)(tr.r, []), MM && (0, Or.r)(MM)) return (0, DM.jsx)(Zr, {
-         urlId: MM
-       }, MM);
-       const rM = MM && (0, Sr.m)(MM) ? MM : "firstParty";
-       return (0, DM.jsx)(or, {}, rM)
-     }
- 
-     function Zr(MM) {
-       let {
-         urlId: rM
-       } = MM;
-       const {
-         userContext: iM,
-         isUserContextUpdating: OM
- ... (116 more removed lines; see GitHub link above)
+         countries: UU,
+         subdivisions: XU
+       } = function(UU) {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L779-L837` → after: `L1410-L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1410-L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1410-L1422) · [Before (L779-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L779-L837)

```diff
-           hM = !1 === OM ? [] : mM;
-         for (const QM of hM)(0, mr.P)(QM) || HM.includes(QM) || HM.push(QM);
-         return {
-           recentlyPlayedPublicLobbies: LM,
-           recentlyPlayedCustomLobbies: HM
-         }
-       }(Or.gameNameWithVariation, vM, Yr.showWorldsInsteadOfCustomLobbies, Yr.canCreateCustomLobbies)), [Or.gameNameWithVariation, vM, Yr.showWorldsInsteadOfCustomLobbies, Yr.canCreateCustomLobbies]), [Fr, Br] = (0, dM.useState)(!0), [Xr, Ir] = (0, dM.useState)([]), [Kr, qr] = (0 … [truncated]
-         (0, yM.unstable_batchedUpdates)((() => {
-           Gr(MM), or((rM => ({
-             ...sr(MM, fM),
-             isFavourite: rM.isFavourite
-           })))
-         }))
-       }), [fM]);
-       (0, dM.useEffect)((() => {
-         null === Qr.d.get("gameEntrySource") && (0, Qr.j)("gameInformationPageDirect")
- ... (43 more removed lines; see GitHub link above)
+           zU = [];
+         for (const [cU, yU] of Object.entries(kU))
+           if ("bySubdivision" === yU.status) {
+             const XU = Object.entries(GU).filter((XU => {
+               let [zU, yU] = XU;
+               return zU.startsWith(`${cU}-`) && UU(yU)
+             })).map((UU => {
+               let [, XU] = UU;
+               return XU.name
+             }));
+             XU.length > 0 && zU.push({
+               country: yU.name,
+               names: XU.sort(BU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L839-L850` → after: `L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1424) · [Before (L839-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L839-L850)

```diff
-           })
-         });
-       (0, dM.useEffect)((() => {
-         if (!tr || xM) return;
-         let MM = !0;
-         const rM = (0, Sr.p)(Or.gameNameWithVariation);
-         return uM.c.getGame(AM, rM).then((rM => {
-           MM && Mi(rM)
-         })).catch((rM => {
-           console.error("Failed to get Custom Game information", rM), MM && (0, VM.navigateToHomePage)()
-         })), uM.c.getFavouriteGames(AM).then((iM => {
-           MM && or((MM => ({
+           } else UU({
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L852-L882` → after: `L1426-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1426-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1426-L1430) · [Before (L852-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L852-L882)

```diff
-             isFavourite: iM.includes(rM)
-           })))
-         })).catch((rM => {
-           console.error("Failed to get favourite games", rM), MM && kr(!0)
-         })), () => {
-           MM = !1
-         }
-       }), [tr, xM, Or.gameNameWithVariation, Mi, AM]);
-       const Qi = !tr && null === ur;
- 
-       function zi(MM) {
-         (0, gr.e)(), IM((0, EM.b)(Or.gameNameWithVariation, MM))
-       }(0, dM.useEffect)((() => {
-         Qi && (0, VM.navigateToHomePage)()
-       }), [Qi]), (0, dM.useEffect)((() => {
-         if (!1 === Yr.canCreateCustomLobbies) return;
- ... (15 more removed lines; see GitHub link above)
+             status: yU.status
+           }) && XU.push(yU.name);
+         return {
+           countries: XU.sort(BU),
+           subdivisions: zU.sort(((UU, XU) => BU(UU.country, XU.country)))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L884-L1268` → after: `L1432-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1432-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1432-L1449) · [Before (L884-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L884-L1268)

```diff
-       }), [xM, Or, Tr, Yr.showWorldsInsteadOfCustomLobbies, Yr.canCreateCustomLobbies, AM]);
-       const Li = (0, dM.useCallback)((async MM => {
-           try {
-             if (!Kr) return;
-             Kr.includes(MM) ? (uM.c.unfavouriteLobby(AM, MM), qr(Kr.filter((rM => rM !== MM)))) : (uM.c.favouriteLobby(AM, MM).catch((MM => {
-               console.error("Failed to favourite lobby", MM)
-             })), qr([...Kr, MM]))
-           } catch (rM) {
-             console.error("Failed to like lobby", rM)
-           }
-         }), [AM, Kr]),
-         mi = (null === Ur || void 0 === Ur ? void 0 : Ur.schematicId) === (0, Sr.p)(Mr.gameNameWithVariation) ? Ur : null,
-         Hi = mi && (0, YM.H)(Mr.gameNameWithVariation, (MM => fM(MM)), mi);
-       (0, cM.g)(mi && (0, YM.x)(Mr.gameNameWithVariation, mi));
-       const Ji = XM.featureFlags.canUseCustomLobbies && !0 === Yr.canCreateCustomLobbies,
-         di = (0, DM.jsx)("div", {
- ... (369 more removed lines; see GitHub link above)
+       }((UU => {
+         let {
+           status: XU
+         } = UU;
+         return "off" === XU
+       }));
+       return (0, pU.jsxs)("ul", {
+         children: [(0, pU.jsxs)("li", {
+           children: ["Countries and territories: ", ZU.format(UU), "."]
+         }), XU.map((UU => {
+           let {
+             country: XU,
+             names: zU
+           } = UU;
+           return (0, pU.jsxs)("li", {
+             children: ["In ", XU, ": ", ZU.format(zU), "."]
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1272-L1300` → after: `L1453-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1453-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1453-L1482) · [Before (L1272-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1272-L1300)

```diff
-     function fr(MM) {
-       let {
-         variation: rM,
-         isSelected: iM,
-         children: OM
-       } = MM;
-       const nM = Lr.e[rM],
-         zM = (0, jM.m)(rM, (0, jM.p)(nM)),
-         LM = (0, SM.c)(zM),
-         mM = (0, aM.e)([(0, jM.j)(rM, (0, jM.d)(nM))]);
-       return (0, DM.jsxs)(VM.LinkPreserveSearch, {
-         to: (0, YM.x)(rM),
-         replace: !0,
-         className: hM()("GameInformationVariation", PM.k, {
-           SelectedGameInformationVariation: iM
-         }),
- ... (13 more removed lines; see GitHub link above)
+     function PU() {
+       return (0, pU.jsxs)(pU.Fragment, {
+         children: [(0, pU.jsx)("h3", {
+           id: "session-recordings",
+           children: "2.5 Session Recordings"
+         }), (0, pU.jsx)("p", {
+           children: "To fix problems in the game, we record some visits to Bloxd by players of any age, guests too, once you have agreed to Bloxd\u2019s privacy popup. We record on bloxd.io in a web browser and in our Android and iOS apps, never in our desktop apps or on other we … [truncated]
+         }), (0, pU.jsx)("p", {
+           children: "What we record: your screen in the game and on Bloxd\u2019s pages as you see them, including chat, usernames, other players\u2019 characters and builds; where you move, click, tap and scroll, and which keys and buttons you press; which pages, games and menus  … [truncated]
+         }), (0, pU.jsx)("p", {
+           children: "Each recording is linked to your player ID: your account\u2019s when you are logged in, else your guest ID. It also keeps a scrambled code made from your internet (IP) address, never the address itself, and whether your network looks shared by many people, su … [truncated]
+         }), (0, pU.jsx)("p", {
+           children: "Why: to fix problems in the game, which is in our legitimate interest. Only Bloxd staff can watch recordings, and we never use one to make decisions about anyone, such as bans. If a recording shows a bug, our staff may look at your other recordings, and may k … [truncated]
+         }), (0, pU.jsx)("p", {
+           children: "Where we never record: we only record when your IP address shows which country you\u2019re in and your device\u2019s time zone is in the same country, never when your IP address belongs to a VPN, proxy or hosting service, and never in these places:"
+         }), (0, pU.jsx)(RU, {}), (0, pU.jsx)("p", {
+ ... (14 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1321-L1361` → after: `L1486-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1486-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1486-L1493) · [Before (L1321-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1321-L1361)

```diff
-     function JM(MM) {
-       let {
-         info: rM,
-         className: iM
-       } = MM;
-       const {
-         statusText: OM,
-         rowText: SM
-       } = (0, HM.f)();
-       return (0, hM.jsxs)("div", {
-         className: mM()("GameApprovalInfoDetails", iM),
-         children: [(0, hM.jsxs)("div", {
-           className: mM()("GameApprovalInfoSummary", rM.overallPassed ? "Passed" : "Failed"),
-           children: [(0, hM.jsx)(zM.b, {
-             name: rM.overallPassed ? "circle-check" : "circle-xmark"
-           }), (0, hM.jsx)("span", {
- ... (25 more removed lines; see GitHub link above)
+     function WU() {
+       return (0, pU.jsxs)(pU.Fragment, {
+         children: [(0, pU.jsx)("h3", {
+           children: "2.6 Our Staff Analytics Tool"
+         }), (0, pU.jsx)("p", {
+           children: "Bloxd staff use a tool we run ourselves, PostHog, on servers at Hetzner in Finland, to watch session recordings (section 2.5), which Amazon Web Services stores in the United States, and to search our analytics data. Through it, staff can see how players use B … [truncated]
+         }), (0, pU.jsx)("p", {
+           children: "Only Bloxd staff can use it. We use each kind of data only for the reasons this policy gives for collecting it: for example, shared AI Helper conversations only to improve the AI Helper. Besides parts of session recordings, the tool keeps staff accounts, save … [truncated]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1368-L1375` → after: `L1498-L1577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1498-L1577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1498-L1577) · [Before (L1368-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1368-L1375)

```diff
-     function lM(MM) {
-       yM.NotificationProvider.showCustomPopup({
-         body: () => (0, hM.jsx)(EM, {
-           ...MM
-         }),
-         middleScreenPopupClassName: "ApprovalInfoPopup",
-         onClose: () => {},
-         unlockPointerKey: "approvalInfoPopup"
+     function dU() {
+       return (0, pU.jsxs)(pU.Fragment, {
+         children: [(0, pU.jsx)("h2", {
+           children: "8. Your Rights"
+         }), (0, pU.jsx)("h3", {
+           children: "8.1 Your Choices and Control"
+         }), (0, pU.jsx)("p", {
+           children: "As a user of Bloxd.io, you have the right to:"
+         }), (0, pU.jsxs)("ul", {
+           children: [(0, pU.jsx)("li", {
+             children: "Access Your Data: Request a copy of the personal information we hold about you."
+           }), (0, pU.jsx)("li", {
+             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
+           }), (0, pU.jsx)("li", {
+             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
+           }), (0, pU.jsx)("li", {
+ ... (64 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1379-L1384` → after: `L1582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1582) · [Before (L1379-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1379-L1384)

```diff
-     function EM(MM) {
-       let {
-         schematicId: rM,
-         canOverride: iM,
-         onApprovalChanged: LM
-       } = MM;
+     function eU() {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1387-L1407` → after: `L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1585) · [Before (L1387-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1387-L1407)

```diff
-       } = (0, dM.A)(), {
-         userContext: HM
-       } = (0, PM.b)(), yM = (0, aM.b)(), [lM, EM] = (0, OM.useState)(null), [UM, GM] = (0, OM.useState)(null), [CM, eM] = (0, OM.useState)(!1), bM = (0, OM.useCallback)((() => {
-         GM(null), jM.c.getGameApprovalInfo(HM, rM).then((MM => {
-           yM.current && EM(MM)
-         })).catch((MM => {
-           console.error("Failed to get game approval info", MM), yM.current && GM(mM("studio:approvalLoadFailed"))
-         }))
-       }), [HM, rM, yM, mM]);
-       (0, OM.useEffect)((() => {
-         bM()
-       }), [bM]);
-       const wM = MM => {
-         CM || (eM(!0), jM.c.setGameApproval(HM, rM, MM).then((() => {
-           null === LM || void 0 === LM || LM(), yM.current && bM()
-         })).catch((MM => {
- ... (5 more removed lines; see GitHub link above)
+       } = (0, yU.I)(), XU = !(0, AU.shouldUseUkPrivacyPolicy)(), zU = NU.c ? "2.7" : "2.5";
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1409-L1464` → after: `L1587-L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1587-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1587-L1665) · [Before (L1409-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1409-L1464)

```diff
-         className: "ApprovalInfoPopupBody",
-         children: [(0, hM.jsx)("h1", {
-           className: "ApprovalInfoPopupTitle",
-           children: mM("studio:approvalTitle")
-         }), !lM && !UM && (0, hM.jsx)("div", {
-           className: "ApprovalInfoPopupLoader",
-           children: (0, hM.jsx)(nM.d, {})
-         }), UM && (0, hM.jsx)("div", {
-           className: "ApprovalInfoPopupError",
-           children: UM
-         }), lM && (0, hM.jsxs)(hM.Fragment, {
-           children: [(0, hM.jsx)(JM, {
-             info: lM
-           }), iM && (0, hM.jsxs)("div", {
-             className: "ApprovalInfoPopupActions",
-             children: [!0 !== lM.manualOverride && (0, hM.jsx)(QM.i, {
- ... (40 more removed lines; see GitHub link above)
+         className: "LegalText",
+         children: [(0, pU.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: UU("homePage:privacyPolicy")
+         }), (0, pU.jsx)("p", {
+           children: (0, pU.jsxs)("em", {
+             children: ["Last updated: ", YU.f.toLocaleDateString()]
+           })
+         }), (0, pU.jsx)("p", {
+           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
+         }), (0, pU.jsx)("h2", {
+           children: "1. Who We Are"
+         }), (0, pU.jsx)("p", {
+           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
+         }), (0, pU.jsx)("p", {
+           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
+ ... (63 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1490-L1506` → after: `L1815-L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1815-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1815-L1825) · [Before (L1490-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1490-L1506)

```diff
-         t: MM,
-         selectedLanguage: rM
-       } = (0, SM.A)();
-       return {
-         statusText: rM => MM(jM[rM]),
-         rowText: iM => {
-           const jM = (MM, iM) => (0, OM.db)((0, SM.n)(rM.code, MM), 0, iM);
-           switch (iM.kind) {
-             case "ownerAccountAge": {
-               const rM = iM.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
-               return {
-                 label: MM("studio:approvalAccountAgeLabel"),
-                 value: MM(rM, {
-                   age: jM(rM, iM.accountAgeMs),
-                   days: iM.minAccountAgeDays
-                 })
- ... (1 more removed lines; see GitHub link above)
+         adMobPrivacyOptionsRequired: UU
+       } = (0, DU.q)(["adMobPrivacyOptionsRequired"]);
+       if (!UU) return null;
+       return (0, pU.jsx)(FU.f, {
+         className: "PrivacyChoicesButton",
+         onClick: () => {
+           (async () => {
+             try {
+               await EU.d.request("ads.showPrivacyOptions", {})
+             } catch (UU) {
+               console.error("Failed to open AdMob privacy options:", UU)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1508-L1551` → after: `L1827-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1827-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1827-L1830) · [Before (L1508-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1508-L1551)

```diff
-             case "sinceUnbannedOrUnmuted":
-               return {
-                 label: MM("studio:approvalSinceUnbannedLabel"), value: MM("studio:approvalSinceUnbannedValue", {
-                   time: jM("studio:approvalSinceUnbannedValue", iM.sinceMs),
-                   days: iM.minDays
-                 })
-               };
-             case "reportHold": {
-               const {
-                 detail: rM
-               } = iM;
-               if (null === rM) return {
-                 label: MM("studio:approvalUnderInvestigation"),
-                 value: null
-               };
-               const OM = rM.weightedReporters.toFixed(1),
- ... (28 more removed lines; see GitHub link above)
+           })()
+         },
+         children: "Manage Privacy Choices"
+       })
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1562-L1582` → after: `L1834-L1835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1834-L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1834-L1835) · [Before (L1562-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1562-L1582)

```diff
-       const [MM, rM] = (0, OM.useState)(!1);
-       return (0, OM.useLayoutEffect)((() => {
-         let MM = !0;
-         return (0, SM.e)().then((() => {
-           MM && rM(!0)
-         })), () => {
-           MM = !1
-         }
-       }), []), MM
-     }
-   },
-   9525: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(1382),
- ... (5 more removed lines; see GitHub link above)
+       return (0, cU.useEffect)((() => {
+         const UU = window.location.hash.slice(1);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L1584-L1618` → after: `L1837-L1850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L1837-L1850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/135.js#L1837-L1850) · [Before (L1584-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/135.js#L1584-L1618)

```diff
-         const OM = new URLSearchParams(rM),
-           SM = OM.get("lobby"),
-           jM = OM.get("vm"),
-           aM = null !== (iM = SM) && void 0 !== iM ? iM : MM.lobbyName,
-           PM = null !== jM && void 0 !== jM ? jM : MM.directJoinVmUrl;
-         if (aM === MM.lobbyName && PM === MM.directJoinVmUrl) return MM;
-         return {
-           ...MM,
-           lobbyName: aM,
-           directJoinVmUrl: PM
-         }
-       }(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), MM = function(MM) {
-         if ((0, jM.J)(MM.directJoinVmUrl)) return MM;
-         const rM = (0, SM.bb)(MM.directJoinVmUrl);
-         null === rM && (MM.directJoinVmUrl = void 0);
-         return MM
- ... (19 more removed lines; see GitHub link above)
+         "" !== UU && (null === (XU = document.getElementById(UU)) || void 0 === XU || XU.scrollIntoView())
+       }), []), (0, pU.jsxs)(pU.Fragment, {
+         children: [(0, QU.isDiscordClient)() && (0, pU.jsx)(pU.Fragment, {
+           children: (0, pU.jsx)(FU.f, {
+             className: "PrivacyChoicesButton",
+             onClick: () => {
+               (0, oU.r)()
+             },
+             children: "Adjust Discord Privacy Choices"
+           })
+         }), (0, pU.jsx)(CU, {}), (0, pU.jsx)(IU.b, {
+           className: "PrivacyPolicyLinks"
+         }), (0, pU.jsx)(eU, {})]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/136.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/136.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00)

#### 1. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/136.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/136.js#L4)

```diff
-   9349: (MM, rM, iM) => {
+   7123: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L6-L7` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/136.js#L6-L10) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/136.js#L6-L7)

```diff
-       c: () => aM,
-       d: () => jM
+       WorldCodeAiChatGptNotice: () => EU,
+       WorldCodeAiDeepSeekNotice: () => DU,
+       e: () => AU,
+       h: () => oU,
+       k: () => FU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L9-L19` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/136.js#L12-L17) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/136.js#L9-L19)

```diff
-     var OM = iM(2099);
-     const SM = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
-       jM = MM => "string" === typeof MM.icon && "" !== MM.icon && "string" === typeof MM.keycode && SM.test(MM.keycode),
-       aM = MM => "Space" === MM ? "_" : OM.k[MM]
-   },
-   34822: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => SM,
-       d: () => jM
-     });
-     let OM = !1;
+     var cU = zU(1193),
+       yU = zU(7126),
+       QU = zU(1305);
+     const AU = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
+       FU = "https://openai.com/policies/terms-of-use/",
+       oU = "https://openai.com/policies/privacy-policy/";
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L22-L328` → after: `L20-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L20-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/136.js#L20-L28) · [Before (L22-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/136.js#L22-L328)

```diff
-       return OM
-     }
- 
-     function jM(MM) {
-       return OM !== MM && (OM = MM, !0)
-     }
-   },
-   34833: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => OM
-     });
-     class OM {
-       constructor(MM) {
-         this.events = MM, this.recent = [], this.episode = null, this.sampleSum = 0, this.sampleCount = 0, this.minWindowAvg = null
-       }
-       addSample(MM, rM) {
- ... (291 more removed lines; see GitHub link above)
+       const {
+         t: UU
+       } = (0, cU.I)();
+       return (0, QU.jsxs)(QU.Fragment, {
+         children: [UU("superBotXd:deepSeekNotice"), " ", (0, QU.jsx)(yU.c, {
+           href: AU,
+           children: UU("superBotXd:deepSeekPrivacyPolicy")
+         })]
+       })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L332-L399` → after: `L32-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L32-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/136.js#L32-L43) · [Before (L332-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/136.js#L332-L399)

```diff
-       return null === bM && "0" !== String(mM.g.getItem(CM)) && (bM = new EM({
-         isInPlay: () => "inGame" === OM.d.get("gameState") && !(0, PM.r)() && !(0, jM.b)(),
-         isTyping: zM.isTextEntry,
-         getBindings: () => ({
-           ...LM.v,
-           customButtons: wM(),
-           pageKeys: (0, nM.e)()
-         }),
-         ignoredActions: eM,
-         onBindingsChanged: MM => {
-           aM.i.subscribe("customBindingsChanged", MM), SM.d.subscribe("customButtons", MM), SM.d.subscribeReset(MM), (0, nM.f)(MM)
-         },
-         now: HM.e
-       }), bM.listen(window, document)), bM
-     }
-   },
- ... (52 more removed lines; see GitHub link above)
+       const {
+         t: UU
+       } = (0, cU.I)();
+       return (0, QU.jsxs)(QU.Fragment, {
+         children: [UU("aiHelperChatGpt:notice"), " ", (0, QU.jsx)(yU.c, {
+           href: FU,
+           children: UU("aiHelperChatGpt:terms")
+         }), " ", (0, QU.jsx)(yU.c, {
+           href: oU,
+           children: UU("aiHelperChatGpt:privacyPolicy")
+         })]
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/137.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/137.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L2)

```diff
- export const ids = [137, 138];
+ export const ids = [137];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L4-L69` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L4) · [Before (L4-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L4-L69)

```diff
-   7031: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => SM
-     });
-     var OM = iM(1303);
- 
-     function SM(MM) {
-       let {
-         href: rM,
-         children: iM
-       } = MM;
-       return (0, OM.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: rM,
-         target: "_blank",
-         rel: "noreferrer noopener",
- ... (50 more removed lines; see GitHub link above)
+   7129: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L73-L83` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L8-L9) · [Before (L73-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L73-L83)

```diff
-     var OM = iM(1188),
-       SM = iM(119),
-       jM = iM(212),
-       aM = iM(1520),
-       PM = iM(1360),
-       nM = iM(19),
-       QM = iM(1771),
-       zM = iM(3807),
-       LM = iM(3526),
-       mM = iM(7023),
-       HM = iM(1303);
+     var cU = zU(1193),
+       yU = zU(1305);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L88` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L14) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L88)

```diff
-       } = (0, OM.A)(), rM = !(0, jM.shouldUseUkPrivacyPolicy)();
+       } = (0, cU.I)();
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L93` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L19) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L93)

```diff
-           children: MM("homePage:privacyPolicy")
+           children: UU("homePage:termsOfService")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L95-L96` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L21-L22) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L95-L96)

```diff
-           children: (0, HM.jsxs)("em", {
-             children: ["Last updated: ", zM.h.toLocaleDateString()]
+           children: (0, yU.jsx)("em", {
+             children: "Last updated: July 15, 2025"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L99-L187` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L25) · [Before (L99-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L99-L187)

```diff
-           children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
-         }), (0, HM.jsx)("h2", {
-           children: "1. Who We Are"
-         }), (0, HM.jsx)("p", {
-           children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you unders … [truncated]
-         }), (0, HM.jsx)("p", {
-           children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players whil … [truncated]
-         }), (0, HM.jsx)("h2", {
-           children: "2. Information We Collect, Why We Collect It, and How It Is Used"
-         }), (0, HM.jsx)("h3", {
-           children: "2.1 Visitors"
-         }), (0, HM.jsx)("h4", {
-           children: "2.1.1 Data Collection and Usage"
-         }), (0, HM.jsxs)("p", {
-           children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information … [truncated]
-         }), (0, HM.jsxs)("table", {
- ... (73 more removed lines; see GitHub link above)
+           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L189-L199` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L27) · [Before (L189-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L189-L199)

```diff
-           children: "2.2 Chat Rooms"
-         }), (0, HM.jsx)("p", {
-           children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
-           }), (0, HM.jsx)("li", {
-             children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
-           }), (0, HM.jsx)("li", {
-             children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
-           })]
+           children: "1. General Information"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L201` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L29) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L201)

```diff
-           children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
+           children: "We may update these Terms at any time. When we do, we\u2019ll post the revised version on our website with the new effective date. Your continued use of Bloxd.io after the changes take effect means you accept the updated Terms. If you do not agree to the chan … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L203-L212` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L31) · [Before (L203-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L203-L212)

```diff
-           children: "2.3 Registered players"
-         }), (0, HM.jsx)("h4", {
-           children: "2.3.1 Age Requirements and Parental Consent"
-         }), (0, HM.jsxs)("p", {
-           children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer t … [truncated]
-             href: "https://families.google.com/familylink/privacy/child-policy",
-             children: "Google\u2019s Child Privacy Policy"
-           }), "."]
-         }), (0, HM.jsx)("h4", {
-           children: "2.3.2 Data Collection for Registered Players"
+           children: "2. Definitions"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L214-L242` → after: `L33-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L33-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L33-L45) · [Before (L214-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L214-L242)

```diff
-           children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
-         }), (0, HM.jsxs)("table", {
-           children: [(0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Type of Information"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What We Collect"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Why We Collect It"
-               })
-             })]
- ... (13 more removed lines; see GitHub link above)
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: '"Account" means the account you create to access the Services on Bloxd.io.'
+             }), (0, yU.jsx)("li", {
+               children: '"Company" refers to Bloxd LTD and its affiliates, subsidiaries, and associated entities.'
+             }), (0, yU.jsx)("li", {
+               children: '"Services" includes the Bloxd.io website, games, content, and related services provided by us.'
+             }), (0, yU.jsx)("li", {
+               children: '"User", "you", or "your" refers to anyone using the Services.'
+             }), (0, yU.jsx)("li", {
+               children: '"Content" means all text, graphics, logos, images, software, and other material found on Bloxd.io.'
+             }), (0, yU.jsx)("li", {
+               children: '"Virtual Goods" refers to virtual items available for purchase within Bloxd.io, such as game items and in-game currency.'
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L244-L288` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L47) · [Before (L244-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L244-L288)

```diff
-           }), (0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Profile Info"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Optional profile details (e.g., avatar)"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "To personalize the user experience."
-               })
-             })]
-           }), (0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
- ... (29 more removed lines; see GitHub link above)
+           })
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L290-L378` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L49) · [Before (L290-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L290-L378)

```diff
-           children: "2.3.3 Data Collection for Store Purchases"
-         }), (0, HM.jsx)("p", {
-           children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
-         }), (0, HM.jsxs)("table", {
-           children: [(0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Type of Information"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What We Collect"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Why We Collect It"
- ... (73 more removed lines; see GitHub link above)
+           children: "3. Age Requirements"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L380-L382` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L51) · [Before (L380-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L380-L382)

```diff
-           children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
-         }), (0, HM.jsx)("p", {
-           children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
+           children: "To use Bloxd.io, you must be at least 13 years old. If you are under 13, you need permission from a parent or guardian. By using our Services, you confirm that you meet this age or permission requirement."
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L384` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L53) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L384)

```diff
-           children: "2.4 When You Contact Us"
+           children: "4. Account Creation and Security"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L386-L442` → after: `L55-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L55-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L55-L59) · [Before (L386-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L386-L442)

```diff
-           children: "When you reach out to us, we collect information to help us respond to you effectively:"
-         }), (0, HM.jsxs)("table", {
-           children: [(0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Type of Information"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What We Collect"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Why We Collect It"
-               })
-             })]
- ... (41 more removed lines; see GitHub link above)
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Account Information: You agree to provide accurate and complete information when creating your account. You are responsible for keeping your account information secure and confidential."
+             }), (0, yU.jsx)("li", {
+               children: "Account Security: Notify us immediately if you suspect unauthorized access to your account. We are not liable for any loss or damage arising from your failure to secure your account."
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L444-L492` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L61) · [Before (L444-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L444-L492)

```diff
-           })]
-         }), (0, HM.jsx)("p", {
-           children: "Data Retention:\xa0We will retain the personal data collected from your inquiries for up to\xa0three months after your query is resolved or closed. This extended period allows us to ensure that any follow-up questions can be addressed. If the inquiry is from  … [truncated]
-         }), (0, HM.jsx)("h3", {
-           children: "2.5 The AI Helper in the Code Editor"
-         }), (0, HM.jsx)("p", {
-           children: "The Code Editor\u2019s AI Helper answers questions about the code of games made in Bloxd.io. To answer, the AI is sent your question, your game\u2019s code, the recent messages in that chat, errors your game showed and the AI notes you kept. When the AI looks … [truncated]
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Bot.xd: your browser sends them to OVHcloud, a company in France, whose AI models answer."
-           }), (0, HM.jsx)("li", {
-             children: "Super Bot.xd: our game servers send them to DeepSeek, a company in China, or to OVHcloud when Super Bot.xd runs on its models. We ask for your consent before you first use DeepSeek."
-           }), (0, HM.jsxs)("li", {
-             children: ["ChatGPT: when Bot.xd isn\u2019t working on our website, you can ask ChatGPT instead. We open it in a new tab that sends OpenAI, a company in the United States, your question, the code of the file you have open, the names and line counts of your other files … [truncated]
-               href: mM.j,
-               children: "terms"
- ... (33 more removed lines; see GitHub link above)
+           })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L494` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L63) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L494)

```diff
-           children: "3.3 Service Providers"
+           children: "5. User Conduct and Community Guidelines"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L496-L815` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L65) · [Before (L496-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L496-L815)

```diff
-           children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your i … [truncated]
-         }), (0, HM.jsx)("h4", {
-           children: "Hosting and Data Storage"
-         }), (0, HM.jsxs)("table", {
-           children: [(0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What They Do"
- ... (304 more removed lines; see GitHub link above)
+           children: "We are committed to creating a fun, safe, and inclusive environment for everyone. By using Bloxd.io, you agree to follow our Community Conduct Guidelines and adhere to the following rules:"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L817-L848` → after: `L67-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L67-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L67-L75) · [Before (L817-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L817-L848)

```diff
-           children: "Payment Providers"
-         }), (0, HM.jsxs)("table", {
-           children: [(0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What They Do"
-               })
-             })]
- ... (16 more removed lines; see GitHub link above)
+           children: "Expected Behavior"
+         }), (0, yU.jsx)("p", {
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Show Respect: Treat others with kindness and consideration in all interactions."
+             }), (0, yU.jsx)("li", {
+               children: "Promote Positivity: Engage in activities that contribute to a positive community experience."
+             }), (0, yU.jsx)("li", {
+               children: "Play Fairly: Participate honestly and with integrity, respecting the rules and spirit of the game."
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L850` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L77) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L850)

```diff
-           })]
+           })
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L852-L883` → after: `L79-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L79-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L79-L95) · [Before (L852-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L852-L883)

```diff
-           children: "Platform Integrations"
-         }), (0, HM.jsxs)("table", {
-           children: [(0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Information Processed"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What They Do"
-               })
-             })]
- ... (16 more removed lines; see GitHub link above)
+           children: "Prohibited Behavior"
+         }), (0, yU.jsxs)("p", {
+           children: ["To maintain a safe and welcoming environment, the following actions are strictly prohibited:", (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Harassment and Threats: Any form of bullying, stalking, or harassment, including making threats or inciting violence."
+             }), (0, yU.jsx)("li", {
+               children: "Discrimination and Hate Speech: Discriminating against or mocking others based on age, race, ethnicity, gender, sexual orientation, religion, disability, or any other protected characteristic."
+             }), (0, yU.jsx)("li", {
+               children: "Inappropriate Content and Behavior: Sharing or promoting content that is sexually explicit, violent, or otherwise inappropriate."
+             }), (0, yU.jsx)("li", {
+               children: "Impersonation: Impersonating other players, staff, or developers with the intent to deceive or harm."
+             }), (0, yU.jsx)("li", {
+               children: "Account Security and Privacy: Sharing, selling, or trading accounts, or using someone else's account without permission."
+             }), (0, yU.jsx)("li", {
+               children: "Spam and Advertising: Spamming chat, boards, or other communication channels with repetitive or irrelevant messages."
+             }), (0, yU.jsx)("li", {
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L887-L941` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L99) · [Before (L887-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L887-L941)

```diff
-           children: "AI Helper"
-         }), (0, HM.jsxs)("table", {
-           children: [(0, HM.jsxs)("tr", {
-             children: [(0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "Service Provider"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What They Collect"
-               })
-             }), (0, HM.jsx)("td", {
-               children: (0, HM.jsx)("p", {
-                 children: "What They Do"
-               })
-             })]
- ... (39 more removed lines; see GitHub link above)
+           children: "Cheating and Unfair Play"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L943-L972` → after: `L101-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L101-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L101-L111) · [Before (L943-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L943-L972)

```diff
-           children: ["YouTube API Services are provided by Google. Google\u2019s use of information is described in the Google Privacy Policy at", " ", (0, HM.jsx)("a", {
-             href: "http://www.google.com/policies/privacy",
-             children: "http://www.google.com/policies/privacy"
-           }), "."]
-         }), (0, HM.jsx)("p", {
-           children: "We only retrieve publicly available YouTube data: video titles, thumbnails, publish dates, view and live viewer counts and live status, and the channel ID for a YouTube handle a creator adds to their profile. We do not ask you to sign in with YouTube or Googl … [truncated]
-         }), (0, HM.jsx)("h2", {
-           children: "4. Cookies and Tracking Technologies"
-         }), (0, HM.jsx)("h3", {
-           children: "4.1 What Are Cookies?"
-         }), (0, HM.jsx)("p", {
-           children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
-         }), (0, HM.jsx)("h3", {
-           children: "4.2 Types of Cookies We Use"
-         }), (0, HM.jsx)("p", {
-           children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
- ... (14 more removed lines; see GitHub link above)
+           children: ["You may not make, use, share, or promote any cheats, hacks, bots, scripts, or other tools that change how the game works or give players an unfair advantage.", (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "This includes trying to bypass any form of security - including, but not limited to, protections related to client integrity or gameplay action security."
+             }), (0, yU.jsx)("li", {
+               children: "It also includes trying to reverse engineer our game's code in any way, or trying to gain unauthorised access to our systems."
+             }), (0, yU.jsx)("li", {
+               children: "If you do any of these things, we may suspend or ban your account, and we reserve the right to take civil and/or criminal legal action for your actions harming our game, our players, and our business."
+             }), (0, yU.jsx)("li", {
+               children: "If you break these rules - like hacking, cheating, or trying to mess with our game or servers - you agree to pay us \xa325,000 for each violation. This is because it's hard to measure exactly how much damage those actions cause, and this amount is a fair  … [truncated]
+             }), (0, yU.jsx)("li", {
+               children: "These rules apply to everyone, whether or not you have a game account, and even if you used a bot or other automated tool to do it."
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1050` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L115) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1050)

```diff
-           children: "5.1 Technologies and Procedures"
+           children: "6. Software License and IP Restrictions"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1053-L1055` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L118) · [Before (L1053-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1053-L1055)

```diff
-             children: "We use encryption\xa0and other security technologies to safeguard your personal information during transmission and storage."
-           }), (0, HM.jsx)("li", {
-             children: "Our servers are hosted by trusted partners who apply high security standards to protect the data we store."
+             children: "License Grant: We grant you a limited, non-exclusive, non-transferable right to download and run the Bloxd game client solely to access and play our Services."
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1057-L1063` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L120) · [Before (L1057-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1057-L1063)

```diff
-             children: "We regularly monitor our systems for potential vulnerabilities and use firewalls and anti-virus software to prevent unauthorized access."
-           })]
-         }), (0, HM.jsx)("h3", {
-           children: "5.2 Staff Training and Compliance"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
+             children: "What You Can't Do: You may not copy, modify, distribute, or create derivative works of the game client, or attempt to reverse-engineer, decompile, disassemble, hack, bypass security, inject cheats, bots, scripts, or any unauthorized tools. Any such action a … [truncated]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1065` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L122) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1065)

```diff
-             children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
+             children: "Our Ownership: All intellectual property rights in the game client and Services stay with Bloxd LTD. You get no ownership or other rights here beyond this limited license."
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1068-L1084` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L125) · [Before (L1068-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1068-L1084)

```diff
-           children: "5.3 Data Breach Notification"
-         }), (0, HM.jsx)("p", {
-           children: "In the unlikely event of a data breach that affects your personal information:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "We will promptly notify\xa0affected users, as required by law."
-           }), (0, HM.jsx)("li", {
-             children: "The notification will include:"
-           })]
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "What data was compromised."
-           }), (0, HM.jsx)("li", {
-             children: "The steps we are taking to resolve the issue and protect your data."
-           }), (0, HM.jsx)("li", {
-             children: "Recommendations for what you can do to protect yourself (e.g., change passwords)."
- ... (1 more removed lines; see GitHub link above)
+           children: "7. Virtual Goods and In-Game Purchases"
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1086-L1112` → after: `L127-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L127-L135) · [Before (L1086-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1086-L1112)

```diff
-           children: "We take all necessary steps to ensure that breaches are addressed swiftly to minimize any potential harm."
-         }), (0, HM.jsx)("h2", {
-           children: "6. International Data Transfers"
-         }), (0, HM.jsx)("p", {
-           children: "Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded. The AI Helper sends data to France and China, and ChatGPT to the United St … [truncated]
-         }), (0, HM.jsx)("h2", {
-           children: "7. Data Retention"
-         }), (0, HM.jsx)("p", {
-           children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
-           }), (0, HM.jsx)("li", {
-             children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
-           }), (0, HM.jsx)("li", {
-             children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
- ... (11 more removed lines; see GitHub link above)
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Purchases: Virtual Goods can be purchased within the Services. All purchases are final and non-refundable unless required by law."
+             }), (0, yU.jsx)("li", {
+               children: "License: When you purchase Virtual Goods, you receive a limited, non-transferable license to use them within the Services."
+             }), (0, yU.jsx)("li", {
+               children: "Termination: We may terminate your access to Virtual Goods if you violate these Terms or our Community Conduct Guidelines."
+             })]
+           })
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1114` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L137) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1114)

```diff
-           children: "8.1 Your Choices and Control"
+           children: "8. Modifications and Updates"
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1116-L1130` → after: `L139-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L139-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L139-L145) · [Before (L1116-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1116-L1130)

```diff
-           children: "As a user of Bloxd.io, you have the right to:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Access Your Data: Request a copy of the personal information we hold about you."
-           }), (0, HM.jsx)("li", {
-             children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
-           }), (0, HM.jsx)("li", {
-             children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
-           }), (0, HM.jsx)("li", {
-             children: "Limit Data Collection: Request that we limit the collection or use of your data."
-           }), (0, HM.jsx)("li", {
-             children: "Object to Data Processing: Object to certain types of data processing, such as for marketing purposes."
-           }), (0, HM.jsx)("li", {
-             children: "Withdraw Consent: Where we rely on your consent, withdraw it at any time, as described in section 3.2, or for the AI Helper in section 2.5."
-           })]
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Service Changes: We may update or modify the Services at any time without prior notice. We are not liable for any changes, suspensions, or discontinuations of the Services."
+             }), (0, yU.jsx)("li", {
+               children: "Terms Updates: These Terms may be updated periodically. We will notify you of significant changes, and your continued use of the Services constitutes your acceptance of the new Terms."
+             })]
+           })
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1132` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L147) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1132)

```diff
-           children: "8.2 Parental Choices and Control "
+           children: "9. Termination"
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1134-L1144` → after: `L149-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L149-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L149-L155) · [Before (L1134-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1134-L1144)

```diff
-           children: "As a verified parent or guardian of a child using Bloxd.io, you have the right to:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Access Your Child\u2019s Data: Request a copy of the personal information we\u2019ve collected about your child, including details like username, email address, and chat logs."
-           }), (0, HM.jsx)("li", {
-             children: "Correct Your Child\u2019s Data: Ask us to correct any inaccurate or incomplete information about your child."
-           }), (0, HM.jsx)("li", {
-             children: "Delete Your Child\u2019s Data: Request the deletion of your child\u2019s account and all associated data. Once verified, we will delete this data promptly, typically within 30 days. This will also remove any saved progress in the game."
-           }), (0, HM.jsx)("li", {
-             children: "Limit Data Collection for Your Child: Request that we limit the collection or use of certain types of data, such as usage information, from your child."
-           })]
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Termination by You: You can terminate your account at any time by contacting us."
+             }), (0, yU.jsx)("li", {
+               children: "Termination by Us: We reserve the right to terminate or suspend your account if you violate these Terms, the Community Conduct Guidelines, or engage in harmful behavior."
+             })]
+           })
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1146` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L157) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1146)

```diff
-           children: "8.3 How to Exercise Your Rights"
+           children: "10. Reporting and Consequences"
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1148` → after: `L159-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L159-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L159-L165) · [Before (L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1148)

```diff
-           children: "To exercise any of these rights, contact us using the information provided below. We may require proof of identity before proceeding with your request. Responses will typically be provided within 30 days."
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Reporting Violations: If you encounter behavior that violates these Terms or the Community Conduct Guidelines, report it using the in-game tools. Your reports help us maintain a high-quality, enjoyable experience for everyone."
+             }), (0, yU.jsx)("li", {
+               children: "Consequences for Violations: Breaking these guidelines can result in penalties ranging from temporary suspensions to permanent bans. Players who demonstrate positive behavior over time may see a reduction in penalties."
+             })]
+           })
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1150` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L167) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1150)

```diff
-           children: "8.4 Your California Privacy Rights"
+           children: "11. Disclaimer of Warranties"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1152` → after: `L169-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L169-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L169-L177) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1152)

```diff
-           children: "If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (together, the \u201cCCPA\u201d), gives you the rights below. This section supplements the rest of this Privacy Policy."
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: 'As-Is Basis: The Services are provided "as is" and "as available", without any warranties, either express or implied.'
+             }), (0, yU.jsx)("li", {
+               children: "No Warranty: We do not guarantee that the Services will be uninterrupted or error-free."
+             })]
+           })
+         }), (0, yU.jsx)("h3", {
+           children: "12. Limitation of Liability"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1154-L1162` → after: `L179-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L179-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L179-L187) · [Before (L1154-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1154-L1162)

```diff
-           children: "Personal Information We Collect: In the past 12 months we have collected the following categories of personal information, from you, from your device, and from the service providers listed in section 3.3, for the purposes described in sections 2 and 3:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Identifiers, such as your username, email address, user ID, IP address and device advertising identifiers."
-           }), (0, HM.jsx)("li", {
-             children: "Internet or other electronic network activity information, such as pages visited, interactions with our website and ad interactions."
-           }), (0, HM.jsx)("li", {
-             children: "Commercial information, such as your purchase history."
-           })]
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "No Liability: To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Services."
+             }), (0, yU.jsx)("li", {
+               children: "Total Liability: Our total liability to you for any claims related to the Services is limited to the amount you paid us in the past 12 months."
+             })]
+           })
+         }), (0, yU.jsx)("h3", {
+           children: "13. Governing Law and Dispute Resolution"
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1164` → after: `L189-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L189-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L189-L203) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1164)

```diff
-           children: "Sale and Sharing of Personal Information: Our advertising partners listed in section 3.3 may collect identifiers and internet or other electronic network activity information through cookies and similar technologies on our website to deliver and measure ads.  … [truncated]
+           children: (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Governing Law: These Terms are governed by the laws of England and Wales."
+             }), (0, yU.jsx)("li", {
+               children: "Small-Claims Court Option: If you or we seek only money damages up to the small-claims track limit set by the Civil Procedure Rules (currently \xa310,000), you may choose to bring that claim in the County Court small-claims track in England and Wales. Thi … [truncated]
+             }), (0, yU.jsx)("li", {
+               children: "Dispute Resolution: Any other disputes arising from these Terms will be resolved through binding arbitration in London, United Kingdom. You waive any right to participate in a class action or jury trial."
+             }), (0, yU.jsx)("li", {
+               children: "Equitable Relief for Bloxd: Even though we agree to arbitrate all other non-small claim disputes, only Bloxd LTD (not you) may go to an English or Welsh court for urgent orders - like injunctions or specific-performance - to protect our IP, confidential d … [truncated]
+             }), (0, yU.jsx)("li", {
+               children: "Identity Verification: If the arbitrator issues any award against you (including for hacks, cheats, or other breaches), you agree that upon request you will promptly provide your full legal name, current address, relevant IP logs, and a copy of a governme … [truncated]
+             })]
+           })
+         }), (0, yU.jsx)("h3", {
+           children: "14. Severability"
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1166-L1178` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L205-L207) · [Before (L1166-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1166-L1178)

```diff
-           children: "Under the CCPA, you have the right to:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsx)("li", {
-             children: "Know: Request the categories and specific pieces of personal information we have collected about you, and how we use and disclose it."
-           }), (0, HM.jsx)("li", {
-             children: "Delete: Request the deletion of personal information we have collected from you."
-           }), (0, HM.jsx)("li", {
-             children: "Correct: Ask us to correct inaccurate personal information we hold about you."
-           }), (0, HM.jsx)("li", {
-             children: "Opt Out of Sale or Sharing: Opt out of the sale or sharing of your personal information."
-           }), (0, HM.jsx)("li", {
-             children: "Non-Discrimination: Exercise any of these rights without being treated differently by us."
-           })]
+           children: "If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect."
+         }), (0, yU.jsx)("h3", {
+           children: "15. Contact Information"
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1180-L1192` → after: `L209-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L209-L213) · [Before (L1180-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1180-L1192)

```diff
-           children: ["To opt out of the sale or sharing of your personal information, use the \u201cDo Not Sell My Personal Information\u201d link shown to California visitors in the footer of our home page and at the top of this Privacy Policy, or email us at", " ", (0, HM.jsx)( … [truncated]
-             href: "mailto:privacy@bloxd.io",
-             children: "privacy@bloxd.io"
-           }), ". To exercise your other rights, contact us as described in section 8.3. You may also ask an authorized agent to make a request on your behalf; we may ask the agent for proof of your permission and ask you to verify your identity with us."]
-         }), (0, HM.jsx)("h2", {
-           children: "9. Contact Us"
-         }), (0, HM.jsx)("p", {
-           children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
-         }), (0, HM.jsxs)("ul", {
-           children: [(0, HM.jsxs)("li", {
-             children: ["Email: ", (0, HM.jsx)("a", {
-               href: "mailto:privacy@bloxd.io",
-               children: "privacy@bloxd.io"
+           children: ["If you have any questions about these Terms, please contact us at:", (0, yU.jsxs)("ul", {
+             children: [(0, yU.jsx)("li", {
+               children: "Email: privacy@bloxd.io"
+             }), (0, yU.jsx)("li", {
+               children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1197-L1198` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L216-L217) · [Before (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1197-L1198)

```diff
-         }), (0, HM.jsx)("h2", {
-           children: "10. Updates to This Policy"
+         }), (0, yU.jsx)("h3", {
+           children: "16. Entire Agreement"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L1200` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/137.js#L219) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/137.js#L1200)

```diff
-           children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
+           children: "These Terms, together with our Privacy Policy and Community Conduct Guidelines, constitute the entire agreement between you and Bloxd LTD regarding your use of the Services. They supersede any prior agreements or communications."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/138.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/138.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L4-L10` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L6) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L10)

```diff
-   7023: (MM, rM, iM) => {
-     iM.d(rM, {
-       WorldCodeAiChatGptNotice: () => zM,
-       WorldCodeAiDeepSeekNotice: () => QM,
-       e: () => aM,
-       g: () => nM,
-       j: () => PM
+   7135: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => aU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L12-L17` → after: `L8-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L8-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/138.js#L8-L52) · [Before (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/138.js#L12-L17)

```diff
-     var OM = iM(1188),
-       SM = iM(7031),
-       jM = iM(1303);
-     const aM = "https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html",
-       PM = "https://openai.com/policies/terms-of-use/",
-       nM = "https://openai.com/policies/privacy-policy/";
+     var cU = zU(1577),
+       yU = zU(1605),
+       QU = zU(3329),
+       AU = zU(2401),
+       FU = zU(1494),
+       oU = zU(1568),
+       DU = zU(1129),
+       EU = zU(61),
+       YU = zU(1390),
+       NU = zU(1305);
+ 
+     function IU(UU) {
+       let {
+         iconName: XU,
+         iconCountPerGroup: zU,
+         animation: cU,
+ ... (29 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L22-L41` → after: `L58-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L58-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/138.js#L58-L102) · [Before (L22-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/138.js#L22-L41)

```diff
-       } = (0, OM.A)();
-       return (0, jM.jsxs)(jM.Fragment, {
-         children: [MM("superBotXd:deepSeekNotice"), " ", (0, jM.jsx)(SM.b, {
-           href: aM,
-           children: MM("superBotXd:deepSeekPrivacyPolicy")
-         })]
-       })
-     }
- 
-     function zM() {
-       const {
-         t: MM
-       } = (0, OM.A)();
-       return (0, jM.jsxs)(jM.Fragment, {
-         children: [MM("aiHelperChatGpt:notice"), " ", (0, jM.jsx)(SM.b, {
-           href: PM,
- ... (4 more removed lines; see GitHub link above)
+       } = (0, pU.I)(), {
+         pack: zU
+       } = (0, cU.C)(), {
+         userContext: EU
+       } = (0, DU.d)();
+       if (zU) {
+         const UU = yU.c[zU];
+         if (null === UU || void 0 === UU || !UU.purchasable) return (0, NU.jsx)(oU.NavigatePreserveSearch, {
+           to: "/"
+         })
+       }
+       const aU = zU ? yU.c[zU] : null,
+         tU = zU ? QU.p[(0, AU.m)(zU)] : null,
+         gU = void 0 !== (null === aU || void 0 === aU ? void 0 : aU.characterSet) || null !== aU && void 0 !== aU && aU.singleItem ? aU.displayName : `${null!==(UU=null===aU||void 0===aU?void 0:aU.displayName)&&void 0!==UU?UU:zU} Pack`,
+         kU = aU ? `Your ${gU} is Ready!` : "Welcome To Super Rank!",
+         GU = aU ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
+ ... (29 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/139.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/139.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/139.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/139.js#L4)

```diff
-   7033: (MM, rM, iM) => {
+   7140: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L8-L9` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/139.js#L8-L16) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/139.js#L8-L9)

```diff
-     var OM = iM(1188),
-       SM = iM(1303);
+     var cU = zU(1384),
+       yU = zU(61),
+       QU = zU(111),
+       AU = zU(1577),
+       FU = zU(1241),
+       oU = zU(320),
+       DU = zU(687);
+     const EU = new URL(FU.p[oU.e.PRODUCTION]).origin;
+     var YU = zU(1305);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L12-L220` → after: `L19-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L19-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/139.js#L19-L40) · [Before (L12-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/139.js#L12-L220)

```diff
-       const {
-         t: MM
-       } = (0, OM.A)();
-       return (0, SM.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, SM.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: MM("homePage:termsOfService")
-         }), (0, SM.jsx)("p", {
-           children: (0, SM.jsx)("em", {
-             children: "Last updated: July 15, 2025"
-           })
-         }), (0, SM.jsx)("p", {
-           children: 'These Terms of Service ("Terms") govern your access to and use of the Bloxd.io website and services (the "Services"). These Terms form a legally binding agreement between you and Bloxd LTD ("we," "us" or "our"). By using our Services, you agree to these Terms … [truncated]
-         }), (0, SM.jsx)("h3", {
-           children: "1. General Information"
- ... (193 more removed lines; see GitHub link above)
+       const UU = (0, AU.C)();
+       return (0, yU.useEffect)((() => {
+         const XU = QU.currentUrl.getSearchParam("code");
+         QU.currentUrl.removeSearchParam("code"), null === XU && (console.error("No authorization code found in the URL"), window.close());
+         const zU = {
+           type: `oauth_authentication_${UU.providerName}`,
+           code: XU
+         };
+         for (const UU of (yU = window.location.origin) === EU ? [yU, `https://${DU.d}`] : [yU]) {
+           var cU;
+           null === (cU = window.opener) || void 0 === cU || cU.postMessage(zU, UU)
+         }
+         var yU;
+         setTimeout((() => {
+           window.close()
+         }), 1e3)
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/140.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/140.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L4)

```diff
-   7042: (MM, rM, iM) => {
+   7142: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L8-L17` → after: `L8-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L32) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L17)

```diff
-     var OM = iM(1608),
-       SM = iM(1641),
-       jM = iM(3358),
-       aM = iM(2412),
-       PM = iM(1520),
-       nM = iM(1591),
-       QM = iM(1142),
-       zM = iM(44),
-       LM = iM(1398),
-       mM = iM(1303);
+     var cU = zU(61),
+       yU = zU(1577),
+       QU = zU(1106),
+       AU = zU.n(QU),
+       FU = zU(320),
+       oU = zU(7158),
+       DU = zU(1390),
+       EU = zU(1568),
+       YU = zU(4997),
+       NU = zU(1494),
+       IU = zU(3490),
+       pU = zU(5004),
+       aU = zU(1726),
+       tU = zU(4991),
+       gU = zU(1129),
+       kU = zU(27),
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L21-L25` → after: `L36-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L36-L39) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L21-L25)

```diff
-         iconName: rM,
-         iconCountPerGroup: iM,
-         animation: OM,
-         midShowerStart: SM = !1,
-         customClass: jM
+         pack: XU,
+         view: zU,
+         favourite: cU,
+         notice: yU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L27-L49` → after: `L41-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L41-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L41-L94) · [Before (L27-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L27-L49)

```diff
-       const [aM, PM] = (0, zM.useState)({});
-       return (0, zM.useEffect)((() => {
-         const MM = {};
-         for (const rM of Array.from(Array(3).keys())) {
-           MM[rM] = [];
-           for (let OM = 0; OM < iM; OM++) MM[rM].push({
-             left: 100 * Math.random() + "%",
-             animationDelay: 20 * Math.random() * (SM ? -1 : 1) + "s"
-           })
-         }
-         PM(MM)
-       }), [iM, SM]), (0, mM.jsx)("div", {
-         className: `IconShower IconShowerAnimation${OM} ${null!==jM&&void 0!==jM?jM:""}`,
-         children: Object.keys(aM).map((MM => aM[MM].map((iM => (0, mM.jsx)("div", {
-           className: `Icon IconGroup${MM}`,
-           style: {
- ... (7 more removed lines; see GitHub link above)
+       const {
+         width: QU,
+         height: FU
+       } = oU.s.thumb, {
+         live: YU
+       } = XU;
+       return (0, eU.jsx)("div", {
+         className: "ShaderPackCard",
+         children: (0, eU.jsxs)("div", {
+           className: "ShaderPackCardTile",
+           children: [(0, eU.jsxs)(EU.LinkPreserveSearch, {
+             to: (0, dU.Z)(XU.packId),
+             className: "ShaderPackCardLink",
+             children: [YU && (0, eU.jsx)("img", {
+               className: "ShaderPackCardImage",
+               src: (0, oU.v)(BU.clientSideServerUrls.s3Url, YU, zU, "thumb"),
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L52-L55` → after: `L97-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L97-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L97-L107) · [Before (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L52-L55)

```diff
-     var hM = iM(1188);
- 
-     function JM() {
-       var MM;
+     var wU = zU(7172);
+ 
+     function qU(UU) {
+       let {
+         results: XU,
+         loading: zU,
+         failed: cU,
+         onRetry: yU,
+         view: QU,
+         previewView: FU
+       } = UU;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L58-L66` → after: `L110-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L110-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L110-L206) · [Before (L58-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L58-L66)

```diff
-       } = (0, hM.A)(), {
-         pack: iM
-       } = (0, OM.D)(), {
-         userContext: zM
-       } = (0, QM.b)();
-       if (iM) {
-         const MM = SM.d[iM];
-         if (null === MM || void 0 === MM || !MM.purchasable) return (0, mM.jsx)(nM.NavigatePreserveSearch, {
-           to: "/"
+       } = (0, RU.I)(), DU = (0, wU.h)(), EU = Date.now(), YU = null === XU ? 0 : "owned" === XU.kind ? XU.packs.length : XU.page.results.length;
+       return (0, eU.jsxs)("div", {
+         className: AU()("ShaderPackBrowseResults", {
+           Loading: zU && null !== XU
+         }),
+         children: [zU && null === XU && (0, eU.jsx)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: (0, eU.jsx)(PU.b, {})
+         }), cU && (0, eU.jsxs)("div", {
+           className: "ShaderPackBrowseMessage",
+           children: [oU("shaderPackListing:loadFailed"), (0, eU.jsx)(NU.f, {
+             onClick: yU,
+             children: oU("general:tryAgain")
+           })]
+         }), "listing" === (null === XU || void 0 === XU ? void 0 : XU.kind) && YU > 0 && (0, eU.jsx)("div", {
+           className: "ShaderPackBrowseGrid",
+ ... (81 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L68-L75` → after: `L208-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L208-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L208-L251) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L68-L75)

```diff
-       }
-       const JM = iM ? SM.d[iM] : null,
-         dM = iM ? jM.k[(0, aM.j)(iM)] : null,
-         yM = void 0 !== (null === JM || void 0 === JM ? void 0 : JM.characterSet) || null !== JM && void 0 !== JM && JM.singleItem ? JM.displayName : `${null!==(MM=null===JM||void 0===JM?void 0:JM.displayName)&&void 0!==MM?MM:iM} Pack`,
-         lM = JM ? `Your ${yM} is Ready!` : "Welcome To Super Rank!",
-         EM = JM ? "Equip your new cosmetics in the character customisation menu!" : "You can change you name color and cape in the customization menu in game!",
-         UM = JM ? !zM.getOwnedCosmeticPacks().includes(iM) : !zM.playerHasRank("super"),
-         GM = JM ? "You should get your cosmetics instantly, but it could take up to an hour to apply. If you don't have them after an hour, contact help@bloxd.io." : "You should get Super Rank instantly, but it could take up to an hour to apply. If you don't have Super Rank after … [truncated]
+       }(0, tU.e)(AX), (0, wU.d)(), (0, cU.useEffect)((() => {
+         if (OU) return;
+         const UU = ++cX.current,
+           XU = JSON.parse(yX);
+         TU(!0), UX(!1), async function(UU) {
+           if ("mine" === UU.section) return {
+             kind: "owned",
+             packs: await GU.c.getOwnedShaderPacks(CU)
+           };
+           const XU = "favourites" === UU.section,
+             zU = XU && (0, dU.n)(UU),
+             cU = await GU.c.getShaderPacks(CU, {
+               sort: XU ? dU.g : UU.sort,
+               features: zU ? [] : UU.withFeatures,
+               withoutFeatures: zU ? [] : UU.withoutFeatures,
+               searchQuery: UU.searchQuery,
+ ... (28 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L77-L95` → after: `L253-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L253-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L253-L393) · [Before (L77-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L77-L95)

```diff
-         className: "PurchaseWelcome AnimFadeInScaleUp",
-         children: [dM && (0, mM.jsx)(dM, {}), !JM && (0, mM.jsx)(HM, {
-           iconName: "bolt",
-           iconCountPerGroup: 10,
-           animation: "Fall",
-           midShowerStart: !0,
-           customClass: "SuperRankWelcomeIconShower"
-         }), (0, mM.jsx)("div", {
-           className: "PurchaseWelcomeTitle FullyFancyText",
-           children: lM
-         }), (0, mM.jsx)("div", {
-           className: "PurchaseWelcomeText",
-           children: EM
-         }), UM && (0, mM.jsxs)("div", {
-           className: "PurchaseWelcomeWarning",
-           children: [(0, mM.jsx)(LM.b, {
- ... (3 more removed lines; see GitHub link above)
+         className: "ShaderPackBrowse AnimFadeIn",
+         children: [(0, eU.jsx)(NU.e, {
+           onClick: AX,
+           children: PU(null === QX ? "homePage:backToGames" : "shaderPackListing:backToSettings")
+         }), (0, eU.jsxs)("div", {
+           className: "ShaderPackBrowseHeader",
+           children: [(0, eU.jsxs)("div", {
+             className: "ShaderPackBrowseHeaderRow",
+             children: [(0, eU.jsx)("h1", {
+               className: "VisuallyHidden",
+               children: PU("shaderPackListing:title")
+             }), (0, eU.jsxs)("div", {
+               className: "ShaderPackBrowseTabs",
+               children: [(0, eU.jsx)("div", {
+                 className: AU()("ShaderPackBrowseSort", {
+                   Active: "explore" === nU.section
+ ... (125 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L97-L101` → after: `L395-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L395-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/140.js#L395-L400) · [Before (L97-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/140.js#L97-L101)

```diff
-         }), (0, mM.jsx)(nM.LinkPreserveSearch, {
-           to: "/",
-           children: (0, mM.jsx)(PM.p, {
-             className: "PurchaseWelcomeContinue",
-             children: rM("general:continue")
+         }), (!NX || null !== DX) && (0, eU.jsx)("div", {
+           className: "ShaderPackBrowseScenes",
+           children: (0, eU.jsx)(SU.b, {
+             selected: fU,
+             onSelect: iU,
+             imageUrl: UU => null === DX ? null : (0, oU.o)(BU.clientSideServerUrls.s3Url, DX, UU, "thumb")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/141.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/141.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417)

#### 1. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L4-L19` → after: `L4-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L4-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/141.js#L4-L119) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/141.js#L4-L19)

```diff
-   7046: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       default: () => mM
-     });
-     var OM = iM(1396),
-       SM = iM(44),
-       jM = iM(94),
-       aM = iM(1608),
-       PM = iM(1232),
-       nM = iM(313),
-       QM = iM(656);
-     const zM = new URL(PM.o[nM.d.PRODUCTION]).origin;
-     var LM = iM(1303);
- 
-     function mM() {
-       const MM = (0, aM.D)();
+   7167: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => FU
+     });
+     var cU = zU(1106),
+       yU = zU.n(cU),
+       QU = zU(1193),
+       AU = zU(1305);
+ 
+     function FU(UU) {
+       let {
+         item: XU,
+         className: zU
+       } = UU;
+       const {
+         t: cU
+ ... (100 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L21-L29` → after: `L121-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L121-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/141.js#L121-L128) · [Before (L21-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/141.js#L21-L29)

```diff
-         const rM = jM.currentUrl.getSearchParam("code");
-         jM.currentUrl.removeSearchParam("code"), null === rM && (console.error("No authorization code found in the URL"), window.close());
-         const iM = {
-           type: `oauth_authentication_${MM.providerName}`,
-           code: rM
-         };
-         for (const MM of (SM = window.location.origin) === zM ? [SM, `https://${QM.e}`] : [SM]) {
-           var OM;
-           null === (OM = window.opener) || void 0 === OM || OM.postMessage(iM, MM)
+         if (XU) return;
+         let zU = !1;
+         return QU.c.getFavouriteShaderPacks(UU).then((UU => {
+           zU || yU(new Set(UU))
+         })).catch((UU => {
+           console.error("Failed to get favourite shader packs", UU), zU || yU(new Set)
+         })), () => {
+           zU = !0
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L31-L39` → after: `L130-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L130-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/141.js#L130-L330) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/141.js#L31-L39)

```diff
-         var SM;
-         setTimeout((() => {
-           window.close()
-         }), 1e3)
-       })), (0, LM.jsx)("div", {
-         className: "AuthCallback",
-         children: (0, LM.jsx)(OM.d, {
-           showFace: !0,
-           loading: !0
+       }), [UU, XU]), {
+         isFavourite: UU => null === zU ? null : zU.has(UU),
+         toggle: function(XU) {
+           if (null === zU || AU.current.has(XU)) return;
+           AU.current.add(XU);
+           const cU = !zU.has(XU);
+           FU(XU, cU), (cU ? QU.c.favouriteShaderPack(UU, XU) : QU.c.unfavouriteShaderPack(UU, XU)).catch((UU => {
+             console.error("Failed to change a favourite shader pack", UU), FU(XU, !cU)
+           })).finally((() => {
+             AU.current.delete(XU)
+           }))
+         }
+       }
+     }
+   },
+   7150: (UU, XU, zU) => {
+ ... (185 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L41` → after: `L332-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L332-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/141.js#L332-L439) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/141.js#L41)

```diff
-       })
+       }
+       return UU.listed || QU.push({
+         tone: "info",
+         text: yU("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), QU
+     }
+ 
+     function HU(UU) {
+       return Math.max(1, Math.round(UU / 1024))
+     }
+ 
+     function MU(UU, XU, zU) {
+       return UU instanceof yU.e && UU.errorMessageForUser ? UU.errorMessageForUser : XU(zU)
+     }
+   },
+ ... (92 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/142.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/142.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088)

#### 1. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L4)

```diff
-   7048: (MM, rM, iM) => {
+   42172: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L6)

```diff
-       default: () => ZM
+       ShaderPackCategory: () => OU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L8-L10` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L8-L31) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L8-L10)

```diff
-     var OM = iM(44),
-       SM = iM(1608),
-       jM = iM(1116),
+     var cU = zU(61),
+       yU = zU(1577),
+       QU = zU(1494),
+       AU = zU(1568),
+       FU = zU(1193),
+       oU = zU(97),
+       DU = zU(27),
+       EU = zU(1680),
+       YU = zU(7209),
+       NU = zU(316),
+       IU = zU(7251),
+       pU = zU(7242),
+       aU = zU(7253),
+       tU = zU(7150),
+       gU = zU(5540),
+       kU = zU(5597),
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L12-L32` → after: `L33-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L33-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L33-L52) · [Before (L12-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L12-L32)

```diff
-       PM = iM(313),
-       nM = iM(7054),
-       QM = iM(1398),
-       zM = iM(1591),
-       LM = iM(4937),
-       mM = iM(1520),
-       HM = iM(3530),
-       hM = iM(4945),
-       JM = iM(1763),
-       dM = iM(4934),
-       yM = iM(1142),
-       lM = iM(19),
-       EM = iM(1573),
-       UM = iM(1202),
-       GM = iM(83),
-       CM = iM(1188),
- ... (5 more removed lines; see GitHub link above)
+       WU = zU(5603),
+       dU = zU(1390),
+       LU = zU(7198),
+       eU = zU(1305);
+     const CU = {
+       ready: "shaderPack:statusReady",
+       readyAfterReload: "shaderPack:statusReadyAfterReload",
+       noWebGpu: "shaderPack:statusNoWebGpu",
+       offNoWebGpu: "shaderPack:statusOffNoWebGpu",
+       failed: "shaderPack:statusFailed",
+       failedRecheck: "shaderPack:statusFailedRecheck",
+       wrongApiVersion: "shaderPack:statusWrongApiVersion",
+       checking: "shaderPack:statusChecking",
+       unchecked: "shaderPack:statusUnchecked",
+       noCompiler: "shaderPack:statusNoCompiler"
+     };
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L36-L39` → after: `L56-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L56-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L56-L61) · [Before (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L36-L39)

```diff
-         pack: rM,
-         view: iM,
-         favourite: OM,
-         notice: SM
+         stored: XU,
+         checking: zU,
+         webGpuUsable: cU,
+         changePending: yU,
+         compiler: QU,
+         t: AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L41-L92` → after: `L63-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L63-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L63-L82) · [Before (L41-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L41-L92)

```diff
-       const {
-         width: jM,
-         height: PM
-       } = nM.v.thumb, {
-         live: LM
-       } = rM;
-       return (0, gM.jsx)("div", {
-         className: "ShaderPackCard",
-         children: (0, gM.jsxs)("div", {
-           className: "ShaderPackCardTile",
-           children: [(0, gM.jsxs)(zM.LinkPreserveSearch, {
-             to: (0, wM.W)(rM.packId),
-             className: "ShaderPackCardLink",
-             children: [LM && (0, gM.jsx)("img", {
-               className: "ShaderPackCardImage",
-               src: (0, nM.w)(UM.clientSideServerUrls.s3Url, LM, iM, "thumb"),
- ... (36 more removed lines; see GitHub link above)
+       const FU = function(UU, XU, zU, cU, yU) {
+           const QU = (0, IU.storedPackOutcome)(UU, yU);
+           return "none" === QU.kind ? "noCompiler" === QU.reason ? XU ? "checking" : "noCompiler" : "otherApiVersion" === QU.reason ? "wrongApiVersion" : "failed" : (0, BU.d)() ? "harnessBuild" : "blocked" === QU.kind ? (0, IU.shaderPackNeedsCheck)(UU, yU) ? XU ? "checking" : !1  … [truncated]
+         }(XU, zU, cU, yU, QU),
+         oU = "failed" === FU || "failedRecheck" === FU,
+         DU = oU || "wrongApiVersion" === FU || "noCompiler" === FU,
+         EU = "ready" === FU || "readyAfterReload" === FU ? XU.validation.offInStrict : [];
+       return (0, eU.jsxs)(eU.Fragment, {
+         children: [(0, eU.jsxs)("div", {
+           className: PU()("ShaderPackStatus", {
+             Ready: "ready" === FU,
+             Failed: DU
+           }),
+           children: ["ready" === FU && (0, eU.jsx)(dU.d, {
+             name: "circle-check"
+           }), DU && (0, eU.jsx)(dU.d, {
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L94` → after: `L84-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L84-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L84-L98) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L94)

```diff
-         })
+         }), oU && (0, eU.jsx)(LU.d, {
+           diagnostics: XU.validation.errors,
+           more: XU.validation.moreErrors,
+           t: AU
+         }), EU.length > 0 && (0, eU.jsxs)(eU.Fragment, {
+           children: [(0, eU.jsxs)("div", {
+             className: "ShaderPackStatus OffInStrict",
+             children: [(0, eU.jsx)(dU.d, {
+               name: "triangle-exclamation"
+             }), AU("shaderPack:offInStrict")]
+           }), (0, eU.jsx)(LU.d, {
+             diagnostics: EU,
+             t: AU
+           })]
+         })]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L101-L106` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L104) · [Before (L101-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L101-L106)

```diff
-         results: rM,
-         loading: iM,
-         failed: OM,
-         onRetry: SM,
-         view: jM,
-         previewView: PM
+         setApplySettingsCallback: XU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L110-L117` → after: `L108-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L108-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L108-L166) · [Before (L110-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L110-L117)

```diff
-       } = (0, CM.A)(), QM = (0, RM.l)(), zM = Date.now(), LM = null === rM ? 0 : "owned" === rM.kind ? rM.packs.length : rM.page.results.length;
-       return (0, gM.jsxs)("div", {
-         className: aM()("ShaderPackBrowseResults", {
-           Loading: iM && null !== rM
-         }),
-         children: [iM && null === rM && (0, gM.jsx)("div", {
-           className: "ShaderPackBrowseMessage",
-           children: (0, gM.jsx)(eM.d, {})
+       } = (0, FU.I)(), [yU, AU] = (0, cU.useState)(null), [DU, EU] = (0, cU.useState)(null), [BU, RU] = (0, cU.useState)(null), [PU] = (0, cU.useState)(NU.l), [WU, dU] = (0, cU.useState)(!0), [LU, CU] = (0, cU.useState)(!1), {
+         loading: wU,
+         error: OU,
+         setError: rU,
+         onFiles: uU
+       } = (0, GU.f)((async UU => {
+         const XU = await (0, YU.loadPageShaderPackCompiler)();
+         if (!XU) return void rU(zU("shaderPack:compilerUnavailable"));
+         EU(XU);
+         const cU = (0, IU.toStoredShaderPack)(UU, await (0, pU.h)(XU, UU.files));
+         await (0, IU.saveShaderPack)(cU, XU) ? (AU(cU), fU(yU, cU, XU)) : rU(zU("shaderPack:saveFailed"))
+       }));
+ 
+       function fU(UU, zU, cU) {
+         (function(UU, XU, zU, cU) {
+           return zU || ZU(UU, cU) || ZU(XU, cU)
+ ... (43 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L119-L122` → after: `L168-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L168-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L168-L204) · [Before (L119-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L119-L122)

```diff
-           className: "ShaderPackBrowseMessage",
-           children: [nM("shaderPackListing:loadFailed"), (0, gM.jsx)(mM.e, {
-             onClick: SM,
-             children: nM("general:tryAgain")
+           className: "SettingBox ShaderPackSummary",
+           children: [(0, eU.jsxs)("div", {
+             className: "ShaderPackSummaryHeader",
+             children: [(0, eU.jsxs)("div", {
+               children: [(0, eU.jsx)("div", {
+                 className: "ShaderPackName",
+                 children: yU.manifest.name
+               }), yU.manifest.author && (0, eU.jsx)("div", {
+                 className: "ShaderPackAuthor",
+                 children: (0, kU.i)(zU, "shaderPack:byAuthor", {
+                   author: yU.manifest.author
+                 })
+               }), yU.manifest.description && (0, eU.jsx)("div", {
+                 className: "ShaderPackDescription",
+                 children: yU.manifest.description
+               }), yU.listing && (0, eU.jsx)("div", {
+ ... (21 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L124-L152` → after: `L206-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L206-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L206-L209) · [Before (L124-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L124-L152)

```diff
-         }), "listing" === (null === rM || void 0 === rM ? void 0 : rM.kind) && LM > 0 && (0, gM.jsx)("div", {
-           className: "ShaderPackBrowseGrid",
-           children: rM.page.results.map((MM => (0, gM.jsx)(uM, {
-             pack: {
-               packId: MM.packId,
-               name: MM.name,
-               live: MM
-             },
-             view: PM,
-             favourite: {
-               isFavourite: QM.isFavourite(MM.packId),
-               onToggle: () => {
-                 QM.toggle(MM.packId)
-               }
-             }
-           }, MM.packId)))
- ... (13 more removed lines; see GitHub link above)
+         }), (0, eU.jsx)(GU.b, {
+           busy: WU || wU || LU,
+           disabled: WU || wU || LU || !0 !== BU,
+           onFiles: uU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L158-L161` → after: `L215-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L215-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L215-L291) · [Before (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L158-L161)

```diff
-       return "mine" === MM.section ? "shaderPackListing:noOwnPacks" : (0, wM.r)(MM) ? "general:noResults" : "favourites" === MM.section ? "shaderPackListing:noFavourites" : "general:noResults"
-     }
-     var sM = iM(7081);
-     const DM = 24,
+       let {
+         to: XU,
+         className: zU,
+         children: cU
+       } = UU;
+       const {
+         gameState: QU
+       } = (0, DU.q)(["gameState"]), {
+         pathname: FU,
+         search: oU
+       } = (0, yU.w)(), YU = "landingPage" !== QU && "studio" !== QU;
+       return (0, eU.jsx)(AU.LinkPreserveSearch, {
+         to: XU,
+         className: zU,
+         target: YU ? "_blank" : void 0,
+         onClick: () => {
+ ... (61 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L163-L164` → after: `L293-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L293-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L293-L297) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L163-L164)

```diff
-         favourites: "general:favourites",
-         mine: "shaderPackListing:mine"
+         terrain: "shaderPackListing:filterTerrain",
+         water: "shaderPackListing:filterWater",
+         models: "shaderPackListing:filterModels",
+         sunShadows: "shaderPackListing:filterShadows",
+         strict: "shaderPackListing:filterAllGames"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L167-L168` → after: `L300-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L300-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L300-L400) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L167-L168)

```diff
-     function ZM() {
-       var MM, rM, iM, jM;
+     function tU(UU, XU) {
+       return UU.withFeatures.includes(XU) ? "with" : UU.withoutFeatures.includes(XU) ? "without" : null
+     }
+ 
+     function gU(UU) {
+       return null === UU ? "with" : "with" === UU ? "without" : null
+     }
+ 
+     function kU(UU) {
+       return "with" === UU ? "only" : null === UU ? "include" : void 0
+     }
+ 
+     function GU(UU, XU) {
+       const zU = tU(UU, XU),
+         cU = UU => UU.filter((UU => UU !== XU));
+       return {
+ ... (85 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L170-L175` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L402) · [Before (L170-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L170-L175)

```diff
-         t: eM
-       } = (0, CM.A)(), bM = (0, zM.useNavigatePreserveSearch)(), tM = (0, SM.u)(), {
-         userContext: uM,
-         isUserContextUpdating: WM
-       } = (0, yM.b)(), [ZM, oM] = (0, RM.h)(), [fM, YM] = (0, RM.e)(), NM = (0, OM.useRef)(!1), [AM, xM] = (0, LM.k)(), vM = (0, wM.z)(AM), [FM, BM] = (0, OM.useState)(null !== (MM = vM.searchQuery) && void 0 !== MM ? MM : ""), XM = (0, OM.useRef)(null), {
-         searchQuery: IM
+         pending: AU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L177-L186` → after: `L404-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L404-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L404-L423) · [Before (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L177-L186)

```diff
-       (0, OM.useEffect)((() => {
-         BM(null !== IM && void 0 !== IM ? IM : ""), XM.current && (XM.current.value = null !== IM && void 0 !== IM ? IM : "")
-       }), [IM]);
-       const [KM, qM] = (0, OM.useState)(null), [TM, VM] = (0, OM.useState)(!1), [cM, Mr] = (0, OM.useState)(!1), [rr, ir] = (0, OM.useState)(0), Or = (0, OM.useRef)(0), Sr = JSON.stringify(vM), jr = (0, wM.j)();
- 
-       function ar() {
-         null !== jr ? (bM(jr), lM.d.set({
-           openEverythingMenuName: PM.m.SETTINGS,
-           openSettingsCategory: "nh"
-         })) : bM("/")
+       if (null === UU.brokenError || AU && !AU.error || QU.push({
+           tone: "warning",
+           text: yU("shaderPackListing:ownerBroken"),
+           detail: UU.brokenError
+         }), null !== AU && void 0 !== AU && AU.error) QU.push({
+         tone: "warning",
+         text: yU(XU ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
+         detail: (0, cU.l)(AU.error) ? null : AU.error
+       });
+       else if (AU) {
+         const UU = null === AU.renderNotBefore ? 0 : AU.renderNotBefore - zU,
+           cU = String(Math.ceil(UU / 6e4)),
+           FU = yU(XU ? UU > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : UU > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
+             minutes: cU
+           });
+         QU.push({
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L188-L427` → after: `L425-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L425-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/142.js#L425-L516) · [Before (L188-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/142.js#L188-L427)

```diff
- 
-       function Pr(MM) {
-         xM((rM => {
-           (0, wM.jb)(rM, {
-             ...vM,
-             pageNumber: 1,
-             ...MM
-           })
-         }))
-       }
- 
-       function nr() {
-         const MM = FM.trim() || null;
-         Pr({
-           searchQuery: MM,
-           ...null !== MM && !NM.current && (0, wM.n)(vM) && {
- ... (224 more removed lines; see GitHub link above)
+       return UU.listed || QU.push({
+         tone: "info",
+         text: yU("shaderPackListing:ownerUnlisted"),
+         detail: null
+       }), QU
+     }
+ 
+     function HU(UU) {
+       return Math.max(1, Math.round(UU / 1024))
+     }
+ 
+     function MU(UU, XU, zU) {
+       return UU instanceof yU.e && UU.errorMessageForUser ? UU.errorMessageForUser : XU(zU)
+     }
+   },
+   7158: (UU, XU, zU) => {
+ ... (76 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/143.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/143.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L2)

```diff
- export const ids = [143];
+ export const ids = [143, 150, 151];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L4)

```diff
-   7061: (MM, rM, iM) => {
+   41575: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L6)

```diff
-       e: () => PM
+       b: () => YU,
+       installListedShaderPack: () => EU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L8-L24` → after: `L9-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L9-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L9-L79) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L8-L24)

```diff
-     var OM = iM(1116),
-       SM = iM.n(OM),
-       jM = iM(1188),
-       aM = iM(1303);
- 
-     function PM(MM) {
-       let {
-         item: rM,
-         className: iM
-       } = MM;
-       const {
-         t: OM
-       } = (0, jM.A)();
-       return null === rM.renderId || rM.previewsOutdated ? (0, aM.jsx)("div", {
-         className: SM()("ShaderPackPreviewsNotice", iM),
-         children: (0, aM.jsx)("span", {
- ... (1 more removed lines; see GitHub link above)
+     var cU = zU(7158),
+       yU = zU(5608),
+       QU = zU(1203),
+       AU = zU(7209),
+       FU = zU(5603),
+       oU = zU(7251),
+       DU = zU(7242);
+     async function EU(UU) {
+       const XU = await (0, AU.loadPageShaderPackCompiler)();
+       if (null === XU) return {
+         kind: "failed",
+         reason: "compiler"
+       };
+       const zU = await YU(UU, XU);
+       return "failed" === zU.kind ? zU : await (0, oU.saveShaderPack)(zU.stored, XU) ? ((0, oU.markShaderPackChangePending)(), zU) : {
+         kind: "failed",
+ ... (55 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L26` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L81) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L26)

```diff
-       }) : null
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L29` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L84) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L29)

```diff
-   7081: (MM, rM, iM) => {
+   43994: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L31` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L86) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L31)

```diff
-       c: () => QM
+       followListingUpdates: () => NU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L33-L73` → after: `L88-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L88-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L88-L177) · [Before (L33-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L33-L73)

```diff
-     var OM = iM(1116),
-       SM = iM.n(OM),
-       jM = iM(7054),
-       aM = iM(1188),
-       PM = iM(7051),
-       nM = iM(1303);
- 
-     function QM(MM) {
-       let {
-         selected: rM,
-         onSelect: iM,
-         imageUrl: OM
-       } = MM;
-       const {
-         t: QM
-       } = (0, aM.A)();
- ... (25 more removed lines; see GitHub link above)
+     var cU = zU(220),
+       yU = zU(27),
+       QU = zU(1545),
+       AU = zU(1131),
+       FU = zU(7209),
+       oU = zU(5603),
+       DU = zU(41575),
+       EU = zU(7251);
+     const YU = ["apiVersion", "invalid", "errors"];
+     async function NU(UU, XU) {
+       const zU = await AU.userContextManager.getCurrentUserContext(),
+         NU = await QU.c.getShaderPackVersions(zU, [XU.packId]),
+         IU = function(UU, XU, zU) {
+           var cU;
+           if (void 0 === zU || "unlisted" === zU.status) return {
+             kind: "none"
+ ... (74 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L76-L81` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L180-L195) · [Before (L76-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L76-L81)

```diff
-   7068: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => mM,
-       e: () => HM,
-       h: () => LM,
-       l: () => hM
+   7251: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       forgetShaderPackActiveHint: () => CU,
+       isOtherApiVersion: () => WU,
+       isShaderPackActive: () => BU,
+       isShaderPackChangePending: () => PU,
+       markShaderPackChangePending: () => RU,
+       pageShaderPackValidationVersion: () => dU,
+       reconcileStoredShaderPackHint: () => eU,
+       removeShaderPack: () => GU,
+       replaceShaderPack: () => tU,
+       saveShaderPack: () => aU,
+       shaderPackNeedsCheck: () => LU,
+       storedPackOutcome: () => ZU,
+       storedShaderPackFiles: () => NU,
+       toStoredShaderPack: () => YU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L83-L140` → after: `L197-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L197-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L197-L212) · [Before (L83-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L83-L140)

```diff
-     var OM = iM(44),
-       SM = iM(7054),
-       jM = iM(1573),
-       aM = iM(7051),
-       PM = iM(7077),
-       nM = iM(1142);
-     const QM = "shaderPackListingView",
-       zM = "shaderPackListingFilterOpen";
- 
-     function LM() {
-       var MM;
-       const [rM, iM] = (0, PM.e)(QM, SM.E[0]);
-       return [null !== (MM = SM.E.find((MM => MM === rM))) && void 0 !== MM ? MM : SM.E[0], iM]
-     }
- 
-     function mM() {
- ... (42 more removed lines; see GitHub link above)
+     var cU = zU(5608),
+       yU = zU(5603),
+       QU = zU(42),
+       AU = zU(3849),
+       FU = zU(7253),
+       oU = zU(7219);
+     const DU = "shaderPackChangePending";
+     let EU = null;
+ 
+     function YU(UU, XU, zU) {
+       return {
+         manifest: UU.manifest,
+         files: (0, cU.u)(UU.files),
+         validation: XU,
+         ...zU && {
+           listing: zU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L145` → after: `L315-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L315-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L315-L340) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L145)

```diff
-   7051: (MM, rM, iM) => {
+   7219: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       loadShaderPackTextures: () => AU,
+       shaderPackTextures: () => FU
+     });
+     var cU = zU(5608);
+     let yU = null,
+       QU = null;
+ 
+     function AU() {
+       return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: XU,
+           textureNameToIndex: zU,
+           textureAnimationData: QU
+         } = UU;
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L147` → after: `L342-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L342-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L342-L422) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L147)

```diff
-       $: () => DM,
+       d: () => oU,
+       h: () => FU
+     });
+     var cU = zU(7251),
+       yU = zU(7219),
+       QU = zU(123);
+     const AU = 100;
+     async function FU(UU, XU) {
+       var zU;
+       let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = navigator.gpu) && void 0 !== zU ? zU : null;
+       const AU = UU.bUU(XU, (0, yU.shaderPackTextures)());
+       if (AU.errors.length > 0) return DU(UU, AU.errors, AU.offInStrict);
+       const FU = await async function(UU) {
+         if (!UU) return null;
+         try {
+           const XU = await (0, QU.q)(UU);
+ ... (65 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L149-L365` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L424) · [Before (L149-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L149-L365)

```diff
-       F: () => RM,
-       I: () => JM,
-       K: () => fM,
-       N: () => ZM,
-       P: () => aM,
-       S: () => oM,
-       W: () => nM,
-       Y: () => PM,
-       c: () => lM,
-       d: () => wM,
-       db: () => kM,
-       fb: () => EM,
-       g: () => dM,
-       h: () => mM,
-       j: () => LM,
-       jb: () => uM,
- ... (201 more removed lines; see GitHub link above)
+       C: () => AU,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L369-L378` → after: `L429-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L429-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L429-L438) · [Before (L369-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L369-L378)

```diff
-       Q: () => UM,
-       U: () => LM,
-       V: () => QM,
-       b: () => hM,
-       e: () => dM,
-       g: () => JM,
-       k: () => HM,
-       m: () => EM,
-       q: () => CM,
-       t: () => nM,
+       N: () => YU,
+       O: () => DU,
+       c: () => pU,
+       f: () => tU,
+       h: () => aU,
+       i: () => IU,
+       l: () => GU,
+       o: () => RU,
+       r: () => oU,
+       s: () => yU,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L420` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L478) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L420)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L431` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L489) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L431)

```diff
-       return `shaderPacks/${MM}/${rM}.json`
+       return `shaderPacks/${UU}/${XU}.json`
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L435` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L493) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L435)

```diff
-       return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
+       return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L439` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/143.js#L497) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/143.js#L439)

```diff
-       return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
+       return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/144.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/144.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L4` → after: `L4-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L4-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L4-L89) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L4)

```diff
-   42177: (MM, rM, iM) => {
+   44448: (UU, XU, zU) => {
+     zU.d(XU, {
+       startHarnessShaderPack: () => YU
+     });
+     var cU = zU(7158),
+       yU = zU(5608),
+       QU = zU(7233),
+       AU = zU(7209),
+       FU = zU(5603),
+       oU = zU(40071),
+       DU = zU(7219),
+       EU = zU(7242);
+     async function YU(UU, XU) {
+       const {
+         stored: zU,
+         info: YU
+ ... (70 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L6` → after: `L91-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L91-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L91-L104) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L6)

```diff
-       ShaderPackCategory: () => WM
+       forgetShaderPackActiveHint: () => CU,
+       isOtherApiVersion: () => WU,
+       isShaderPackActive: () => BU,
+       isShaderPackChangePending: () => PU,
+       markShaderPackChangePending: () => RU,
+       pageShaderPackValidationVersion: () => dU,
+       reconcileStoredShaderPackHint: () => eU,
+       removeShaderPack: () => GU,
+       replaceShaderPack: () => tU,
+       saveShaderPack: () => aU,
+       shaderPackNeedsCheck: () => LU,
+       storedPackOutcome: () => ZU,
+       storedShaderPackFiles: () => NU,
+       toStoredShaderPack: () => YU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L8-L118` → after: `L106-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L106-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L106-L250) · [Before (L8-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L8-L118)

```diff
-     var OM = iM(44),
-       SM = iM(1608),
-       jM = iM(1520),
-       aM = iM(1591),
-       PM = iM(1188),
-       nM = iM(83),
-       QM = iM(19),
-       zM = iM(1717),
-       LM = iM(7111),
-       mM = iM(308),
-       HM = iM(7142),
-       hM = iM(7134),
-       JM = iM(7148),
-       dM = iM(7051),
-       yM = iM(5401),
-       lM = iM(5430),
- ... (95 more removed lines; see GitHub link above)
+     var cU = zU(5608),
+       yU = zU(5603),
+       QU = zU(42),
+       AU = zU(3849),
+       FU = zU(7253),
+       oU = zU(7219);
+     const DU = "shaderPackChangePending";
+     let EU = null;
+ 
+     function YU(UU, XU, zU) {
+       return {
+         manifest: UU.manifest,
+         files: (0, cU.u)(UU.files),
+         validation: XU,
+         ...zU && {
+           listing: zU
+ ... (129 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L120-L133` → after: `L252-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L252-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L252-L262) · [Before (L120-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L120-L133)

```diff
- 
-       function ZM(MM, iM, OM) {
-         (function(MM, rM, iM, OM) {
-           return iM || GM(MM, OM) || GM(rM, OM)
-         })(MM, iM, (0, HM.isShaderPackChangePending)(), OM) && ((0, HM.markShaderPackChangePending)(), rM((() => yM.j)))
-       }
-       return (0, OM.useEffect)((() => {
-         let MM = !1;
-         return async function() {
-           const rM = (0, nM.hasUsableWebGpuAdapter)(),
-             iM = await (0, JM.d)();
-           if (MM) return;
-           aM(iM), uM(!0), wM(!1);
-           const OM = null !== iM ? (0, LM.loadPageShaderPackCompiler)() : null,
+       try {
+         const XU = await Promise.all(AU.validationModules.map((XU => async function(UU, XU, zU) {
+           XU.pushErrorScope("validation");
+           const cU = XU.createShaderModule({
+               code: zU.code
+             }),
+             yU = XU.popErrorScope(),
+             {
+               messages: QU
+             } = await cU.getCompilationInfo(),
+             AU = QU.filter((UU => "error" === UU.type)).map((XU => UU.mapValidationMessage(zU, XU))),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L135-L140` → after: `L264-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L264-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L264-L289) · [Before (L135-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L135-L140)

```diff
-           if (MM) return;
-           CM(SM);
-           const jM = await OM;
-           if (!MM && (zM(jM), null !== iM && SM && null !== jM && (0, HM.shaderPackNeedsCheck)(iM, jM))) {
-             const rM = await (0, hM.e)(iM, jM);
-             MM || aM((MM => MM === iM ? rM : MM))
+           FU && 0 === AU.length && AU.push({
+             file: null,
+             line: 0,
+             message: FU.message,
+             variants: [zU.key]
+           });
+           return AU
+         }(UU, FU, XU))));
+         return oU ? null : DU(UU, UU.scU(XU.flat()), AU.offInStrict)
+       } catch (EU) {
+         return console.error("Couldn't validate the shader pack on WebGPU.", EU), null
+       } finally {
+         FU.destroy()
+       }
+     }
+     async function oU(UU, XU) {
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L142-L234` → after: `L291-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L291-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L291-L302) · [Before (L142-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L142-L234)

```diff
-         }().catch((rM => {
-           console.error("Failed to load the stored shader pack", rM), MM || DM(iM("shaderPack:unexpectedError"))
-         })).finally((() => {
-           MM || (wM(!1), uM(!1))
-         })), () => {
-           MM = !0
-         }
-       }), []), (0, gM.jsxs)("div", {
-         className: "ShaderPackCategory SettingsMenuRightInner",
-         children: [(0, gM.jsx)("div", {
-           className: "ShaderPackIntro",
-           children: iM("shaderPack:intro")
-         }), (0, gM.jsx)(sM, {
-           to: dM.P,
-           className: "ShaderPackBrowseLink",
-           children: (0, gM.jsx)(jM.p, {
- ... (77 more removed lines; see GitHub link above)
+         };
+       return await (0, cU.replaceShaderPack)(UU, AU, XU) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AU
+     }
+ 
+     function DU(UU, XU, zU) {
+       return {
+         headerVersion: (0, cU.pageShaderPackValidationVersion)(UU),
+         ok: 0 === XU.length,
+         errors: XU.slice(0, AU),
+         moreErrors: Math.max(0, XU.length - AU),
+         offInStrict: zU
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L237` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L305) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L237)

```diff
-   7051: (MM, rM, iM) => {
+   7158: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L241-L442` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L308) · [Before (L241-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L241-L442)

```diff
-       F: () => RM,
-       I: () => JM,
-       K: () => fM,
-       N: () => ZM,
-       P: () => aM,
-       S: () => oM,
-       W: () => nM,
-       Y: () => PM,
-       c: () => lM,
-       d: () => wM,
-       db: () => kM,
-       fb: () => EM,
-       g: () => dM,
-       h: () => mM,
-       j: () => LM,
-       jb: () => uM,
- ... (186 more removed lines; see GitHub link above)
+       C: () => AU,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L446-L455` → after: `L313-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L313-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L313-L322) · [Before (L446-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L446-L455)

```diff
-       Q: () => UM,
-       U: () => LM,
-       V: () => QM,
-       b: () => hM,
-       e: () => dM,
-       g: () => JM,
-       k: () => HM,
-       m: () => EM,
-       q: () => CM,
-       t: () => nM,
+       N: () => YU,
+       O: () => DU,
+       c: () => pU,
+       f: () => tU,
+       h: () => aU,
+       i: () => IU,
+       l: () => GU,
+       o: () => RU,
+       r: () => oU,
+       s: () => yU,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L497` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L362) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L497)

```diff
-       return `https://bloxdhub.com/workshop/${encodeURIComponent(MM)}`
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L508` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L373) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L508)

```diff
-       return `shaderPacks/${MM}/${rM}.json`
+       return `shaderPacks/${UU}/${XU}.json`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L512` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L377) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L512)

```diff
-       return null === rM.renderId ? CM(MM, rM.baselineVersion, iM, OM) : `${MM}/${function(MM,rM,iM,OM){return`shaderPacks/${MM}/${rM}/${iM}-${OM}.webp`}(rM.packId,rM.renderId,iM,OM)}`
+       return null === XU.renderId ? RU(UU, XU.baselineVersion, zU, cU) : `${UU}/${function(UU,XU,zU,cU){return`shaderPacks/${UU}/${XU}/${zU}-${cU}.webp`}(XU.packId,XU.renderId,zU,cU)}`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L516` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/144.js#L381) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/144.js#L516)

```diff
-       return `${MM}/${function(MM,rM,iM){return`shaderPacks/baseline/${MM}/${rM}-${iM}.webp`}(rM,iM,OM)}`
+       return `${UU}/${function(UU,XU,zU){return`shaderPacks/baseline/${UU}/${XU}-${zU}.webp`}(XU,zU,cU)}`
```
