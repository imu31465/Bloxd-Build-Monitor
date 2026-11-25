# Changed — Bundle Modifications Report (Part 017 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `17 / 56` (**326** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 46. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1184-L1302` → after: `L628-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L628-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L628-L632) · [Before (L1184-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1184-L1302)

```diff
-     function Ab(GG) {
-       let bG = null !== GG && void 0 !== GG ? GG : {};
-       if ("string" === typeof bG) try {
-         bG = JSON.parse("" === bG ? "{}" : bG)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof bG || null === bG) return null;
-       const ZG = {};
-       for (const [wG, SG] of Object.entries(bG)) "string" === typeof SG ? ZG[wG] = lb.has(wG) && cb.test(SG) && !SG.includes("\n") ? Mb(SG) : SG : "boolean" === typeof SG || "number" === typeof SG ? ZG[wG] = String(SG) : "object" !== typeof SG || null === SG || Array.isArray(SG)  … [truncated]
-       return ZG
-     }
- 
-     function sb(GG, bG) {
-       let ZG = 0,
-         wG = !1;
- ... (103 more removed lines; see GitHub link above)
+         function Mr(MM) {
+           if (!MM.startsWith("{") || !MM.endsWith("}")) return null;
+           const rM = {
+               keys: [],
+               values: []
```

#### 47. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1304-L1366` → after: `L634-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L634-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L634-L641) · [Before (L1304-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1304-L1366)

```diff
-             index: ZG
-           })))), ZG = GG.indexOf("{", wG)
-         } else ZG = GG.indexOf("{", ZG + 1)
-       }
-       return bG
-     }
- 
-     function tb(GG) {
-       if (Array.isArray(GG)) return `[${GG.map(tb).join(", ")}]`;
-       if ("object" === typeof GG && null !== GG) {
-         return `{${Object.entries(GG).map((GG=>{let[bG,ZG]=GG;return`${JSON.stringify(bG)}: ${tb(ZG)}`})).join(", ")}}`
-       }
-       return JSON.stringify(GG)
-     }
-     const Db = {
-         formatCall: (GG, bG) => `<tool_call>\n<function=${GG}>\n${Object.entries(bG).flatMap((GG=>{let[bG,ZG]=GG;return void 0===ZG?[]:[`<parameter=${bG}>\n${ZG}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
- ... (47 more removed lines; see GitHub link above)
+             iM = MM => {
+               const iM = MM.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
+               iM && (rM.keys.push(iM[1].startsWith('"') ? iM[1] : `"${iM[1]}"`), rM.values.push(iM[2].trim()))
+             };
+           let OM = 0,
+             SM = "";
+           for (const jM of MM.slice(1, -1)) "{[(".includes(jM) ? OM++ : "}])".includes(jM) && OM--, ";" === jM && 0 === OM ? (iM(SM), SM = "") : SM += jM;
+           return iM(SM), rM
```

#### 48. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1437-L1451` → after: `L644-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L644-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L644-L645) · [Before (L1437-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1437-L1451)

```diff
-     function hZ(GG) {
-       return function(GG) {
-         const bG = [...GG.matchAll(UZ)],
-           ZG = [];
-         let wG = 0;
-         for (; wG < bG.length;) {
-           const SG = bG[wG],
-             LG = bG.at(wG + 1);
-           void 0 !== LG && "```" === LG[0] ? (YZ.test(GG.slice(SG.index + SG[0].length, LG.index)) && ZG.push({
-             from: SG.index,
-             to: LG.index + LG[0].length
-           }), wG += 2) : (ZG.push({
-             from: SG.index,
-             to: SG.index + SG[0].length
-           }), wG++)
+         function rr(MM) {
+           return MM.length > KM ? `\n\t| ${MM.join("\n\t| ")}` : MM.join(" | ")
```

#### 49. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1463-L1478` → after: `L648-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L648-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L648-L671) · [Before (L1463-L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1463-L1478)

```diff
-     function dZ(GG) {
-       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(GG)
-     }
-     const JZ = new Set(["tick", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
-       rZ = {
-         playerCommand: {
-           stopsWhen: GG => `${GG} !== undefined && ${GG} !== false`,
-           passedOn: !1
-         },
-         onPlayerChat: {
-           stopsWhen: GG => `${GG} === false || ${GG} === null`,
-           passedOn: !0
-         },
-         onPlayerDamagingOtherPlayer: {
-           stopsWhen: GG => `${GG} === "preventDamage"`,
-           passedOn: !0
+         function ir(MM, rM) {
+           const iM = function(MM, rM) {
+             return MM.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((MM, iM) => {
+               var OM;
+               const SM = null === (OM = rM.get(iM)) || void 0 === OM ? void 0 : OM.object;
+               return SM ? rr(SM.values) : MM
+             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((MM, iM) => {
+               var OM, SM;
+               const jM = null === (OM = rM.get(iM)) || void 0 === OM || null === (SM = OM.object) || void 0 === SM ? void 0 : SM.values.map(cM);
+               return null !== jM && void 0 !== jM && jM.every((MM => null !== MM)) ? rr([...new Set(jM.flat())]) : MM
+             })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((MM, iM) => {
+               var OM;
+               const SM = null === (OM = rM.get(iM)) || void 0 === OM ? void 0 : OM.members;
+               return SM ? rr(SM) : MM
+             })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((MM, iM) => {
+               var OM;
+ ... (8 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1494-L1508` → after: `L674-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L674-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L674-L701) · [Before (L1494-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1494-L1508)

```diff
-     function EZ(GG) {
-       return void 0 !== GG && (CG().isFunctionExpression(GG) || CG().isArrowFunction(GG))
-     }
- 
-     function oZ(GG) {
-       if (CG().isFunctionDeclaration(GG) && GG.name) return {
-         BQ: GG,
-         nameNode: GG.name
-       };
-       if (CG().isVariableStatement(GG) && 1 === GG.declarationList.declarations.length) {
-         const bG = GG.declarationList.declarations[0],
-           ZG = bG.initializer && XZ(bG.initializer);
-         if (CG().isIdentifier(bG.name) && EZ(ZG)) return {
-           BQ: ZG,
-           nameNode: bG.name
+         function Or(MM) {
+           const rM = VM(MM),
+             iM = function(MM) {
+               const rM = new Map,
+                 iM = MM.find((MM => "_TypeOf" === MM.name));
+               let OM = null;
+               const SM = () => {
+                 if (OM) {
+                   const MM = OM.lines.join("\n");
+                   rM.set(OM.name, {
+                     text: MM,
+                     members: cM(MM),
+                     object: Mr(MM)
+                   })
+                 }
+               };
+ ... (12 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1510-L1545` → after: `L703-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L703-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L703-L710) · [Before (L1510-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1510-L1545)

```diff
-       }
-       const bG = uZ(GG),
-         ZG = bG && XZ(bG.value);
-       return bG && EZ(ZG) ? {
-         BQ: ZG,
-         nameNode: bG.name
-       } : null
-     }
- 
-     function XZ(GG) {
-       return CG().isParenthesizedExpression(GG) ? XZ(GG.expression) : GG
-     }
- 
-     function uZ(GG) {
-       return CG().isExpressionStatement(GG) && CG().isBinaryExpression(GG.expression) && GG.expression.operatorToken.kind === CG().SyntaxKind.EqualsToken && CG().isIdentifier(GG.expression.left) ? {
-         name: GG.expression.left,
- ... (20 more removed lines; see GitHub link above)
+         let Sr, jr, ar;
+ 
+         function Pr() {
+           return jr ??= function(MM) {
+             const rM = VM(MM).find((MM => "GameApi" === MM.name)),
+               iM = new Map,
+               OM = rM.lines;
+             for (let jM = 0; jM < OM.length; jM++) {
```

#### 52. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1547-L1548` → after: `L712-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L712-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L712-L728) · [Before (L1547-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1547-L1548)

```diff
-               if (/\n[^\S\n]*\n/.test(GG.slice(LG.end, wG))) break;
-               wG = LG.pos
+               if (!OM[jM].trimStart().startsWith("/**")) continue;
+               const MM = jM;
+               for (; jM < OM.length && !OM[jM].includes("*/");) jM++;
+               const rM = null === (SM = OM[jM + 1]) || void 0 === SM ? void 0 : SM.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
+               if (!rM) continue;
+               let aM = null;
+               const PM = [];
+               let nM = "description",
+                 QM = !1;
+               for (const iM of OM.slice(MM, jM + 1).join("\n").split("\n").map((MM => MM.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
+                 const MM = iM.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
+                 MM ? (aM = MM[1].trim(), nM = "deprecation") : iM.startsWith("@") ? (nM = "otherTag", QM = !0) : "" === iM.trim() ? QM || (nM = "description", PM.push(iM)) : "deprecation" !== nM || /^[A-Z]/.test(iM.trim()) ? "otherTag" !== nM && (nM = "description", PM.push(iM))  … [truncated]
+               }
+               iM.set(rM[1], {
+                 deprecation: aM,
+                 description: PM.join("\n").trim()
+ ... (1 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1551-L1561` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L731) · [Before (L1551-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1551-L1561)

```diff
-           }(GG, bG, ZG),
-           LG = oZ(ZG);
-         if (null !== LG && void 0 !== LG && LG.nameNode) {
-           const GG = LG.nameNode.text;
-           return {
-             kind: dZ(GG) ? "callback" : "function",
-             names: [GG],
-             from: SG,
-             to: ZG.getEnd(),
-             node: ZG
-           }
+           }(BM.default), jr
```

#### 54. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1563-L1570` → after: `L733-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L733-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L733-L743) · [Before (L1563-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1563-L1570)

```diff
-         const yG = CG().isVariableStatement(ZG) ? ZG.declarationList.declarations.flatMap((GG => iZ(GG.name))) : [];
-         if (CZ(ZG)) {
-           return {
-             kind: "config",
-             names: ["CONFIG", ...yG.filter((GG => "CONFIG" !== GG))],
-             from: SG,
-             to: ZG.getEnd(),
-             node: ZG
+ 
+         function nr() {
+           if (!ar) {
+             ar = new Map;
+             for (const MM of ZM) {
+               const rM = (0, bM.v)(NM(MM)).flatMap((MM => MM.blocks));
+               for (const MM of (0, bM.l)(rM))
+                 if ("ts" === MM.lang || "typescript" === MM.lang)
+                   for (const [rM, iM] of gM(MM.code)) ar.set(rM, iM)
+             }
+             for (const [MM, rM] of(Sr ??= Or(BM.default), Sr)) ar.has(MM) || ar.set(MM, rM)
```

#### 55. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1573-L1585` → after: `L747-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L747-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L747-L762) · [Before (L1573-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1573-L1585)

```diff
-         if (CG().isVariableStatement(ZG)) return {
-           kind: "variable",
-           names: yG,
-           from: SG,
-           to: ZG.getEnd(),
-           node: ZG
-         };
-         if (CG().isClassDeclaration(ZG) && ZG.name) return {
-           kind: "function",
-           names: [ZG.name.text],
-           from: SG,
-           to: ZG.getEnd(),
-           node: ZG
+         const Qr = {
+           BlockName: "blockNames",
+           BlockNameOrId: "blockNames",
+           ItemName: "itemNames",
+           Song: "sounds",
+           ParticlePresetId: "particles",
+           PlayerPose: "skins",
+           IngameIconName: "icons",
+           ClientOptions: "clientOptions",
+           ClientOption: "clientOptions",
+           OtherEntitySettings: "entitySettings",
+           OtherEntitySetting: "entitySettings",
+           MobSettings: "mobSettings",
+           MobSetting: "mobSettings",
+           VehicleSetting: "vehicleSettings",
+           SettableVehicleSetting: "vehicleSettings"
```

#### 56. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1587-L1636` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L764) · [Before (L1587-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1587-L1636)

```diff
-         const kG = null === (wG = uZ(ZG)) || void 0 === wG ? void 0 : wG.name.text;
-         return {
-           kind: "other",
-           names: void 0 !== kG && dZ(kG) ? [kG] : [],
-           from: SG,
-           to: ZG.getEnd(),
-           node: ZG
-         }
-       }))
-     }
- 
-     function mZ(GG) {
-       if (!CG().isPropertyAssignment(GG) && !CG().isShorthandPropertyAssignment(GG)) return null;
-       const bG = GG.name;
-       return CG().isIdentifier(bG) || CG().isStringLiteral(bG) ? bG.text : null
-     }
- ... (34 more removed lines; see GitHub link above)
+         let zr;
```

#### 57. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1638-L1656` → after: `L766-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L766-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L766-L777) · [Before (L1638-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1638-L1656)

```diff
-     function jZ(GG, bG) {
-       var ZG, wG;
-       const SG = GG.filter((GG => GG.names.includes(bG))),
-         LG = SG.filter((GG => !CG().isFunctionDeclaration(GG.node) && function(GG, bG) {
-           return !CG().isVariableStatement(GG) || GG.declarationList.declarations.some((GG => void 0 !== GG.initializer && iZ(GG.name).includes(bG)))
-         }(GG.node, bG))),
-         yG = null !== (ZG = LG[LG.length - 1]) && void 0 !== ZG ? ZG : SG[SG.length - 1];
-       if ("callback" === (null === yG || void 0 === yG ? void 0 : yG.kind)) return oZ(yG.node);
-       const kG = "other" === (null === yG || void 0 === yG ? void 0 : yG.kind) ? null === (wG = uZ(yG.node)) || void 0 === wG ? void 0 : wG.value : void 0;
-       if (!kG || !CG().isIdentifier(kG)) return null;
-       const UG = GG.filter((GG => {
-           var bG;
-           const ZG = null === (bG = uZ(GG.node)) || void 0 === bG ? void 0 : bG.value;
-           return void 0 !== ZG && CG().isIdentifier(ZG) && ZG.text === kG.text
-         })),
-         YG = GG.filter((GG => GG.names.includes(kG.text))),
- ... (3 more removed lines; see GitHub link above)
+         function Lr() {
+           if (!zr) {
+             zr = new Map;
+             for (const MM of ZM)
+               if (uM(MM.layout))
+                 for (const rM of NM(MM).sections) zr.has(rM.heading.text) || zr.set(rM.heading.text, {
+                   pageId: MM.id,
+                   anchor: rM.heading.anchor
+                 })
+           }
+           return zr
+         }
```

#### 58. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1658-L1660` → after: `L779-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L779-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L779-L791) · [Before (L1658-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1658-L1660)

```diff
-     function PZ(GG) {
-       return GG.parameters.map((GG => CG().isIdentifier(GG.name) ? GG.name.text : null))
-     }
+         function mr(MM) {
+           const rM = MM.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
+           return rM ? Lr().get(rM[1]) : void 0
+         }
+         const Hr = (0, OM.createContext)("/docs"),
+           hr = (0, OM.createContext)(null),
+           Jr = (0, OM.createContext)(!1),
+           dr = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;
+ 
+         function yr(MM) {
+           const rM = MM.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
+           return rM ? rM[1] : null
+         }
```

#### 59. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1662-L1684` → after: `L793-L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L793-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L793-L803) · [Before (L1662-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1662-L1684)

```diff
-     function MZ(GG, bG, ZG, wG, SG, LG, yG) {
-       var kG;
-       let UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       const {
-         BQ: YG
-       } = ZG, VG = YG.body;
-       if (!VG) return [];
-       const pG = [],
-         fG = PZ(YG),
-         QG = [],
-         KG = new Set([...fG.filter((GG => null !== GG)), ...qZ(VG)]),
-         hG = (GG, bG) => {
-           let ZG = GG;
-           for (let wG = bG; KG.has(ZG); wG++) ZG = `${GG}${wG}`;
-           return KG.add(ZG), ZG
-         },
- ... (7 more removed lines; see GitHub link above)
+         function lr(MM) {
+           let {
+             colour: rM
+           } = MM;
+           return (0, hM.jsx)("span", {
+             className: "DocsColourSwatch",
+             style: {
+               background: rM
+             },
+             "aria-hidden": "true"
+           })
```

#### 60. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1686-L1688` → after: `L805-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L805-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L805-L812) · [Before (L1686-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1686-L1688)

```diff
-         if (void 0 !== GG) {
-           QG.push(null !== GG && void 0 !== GG ? GG : "undefined");
-           continue
+ 
+         function Er(MM) {
+           const rM = [];
+           let iM = 0;
+           for (const OM of MM.matchAll(dr)) rM.push(MM.slice(iM, OM.index), (0, hM.jsx)(lr, {
+             colour: OM[0]
+           }), OM[0]), iM = OM.index + OM[0].length;
+           return rM.push(MM.slice(iM)), rM
```

#### 61. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1690-L1702` → after: `L814-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L814-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L814-L838) · [Before (L1690-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1690-L1702)

```diff
-         const bG = hG(mG, CG);
-         dG.push(bG), QG.push(bG)
-       }
-       if (dG.length > 0) {
-         const GG = YG.getChildren(bG).find((GG => GG.kind === CG().SyntaxKind.CloseParenToken)),
-           ZG = GG ? GG.getStart(bG) : -1;
-         if (-1 === ZG) {
-           const GG = YG.parameters[0];
-           if (!GG) return [];
-           pG.push({
-             from: GG.getStart(bG),
-             to: GG.getEnd(),
-             text: `(${[GG.getText(bG),...dG].join(", ")})`
+ 
+         function Ur(MM) {
+           let {
+             href: rM,
+             children: iM
+           } = MM;
+           const SM = (0, OM.useContext)(Hr);
+           if (rM.startsWith("#")) {
+             const MM = xM(rM);
+             if (MM) return (0, hM.jsx)(aM.b, {
+               to: FM(SM, MM.page, MM.anchor),
+               children: (0, hM.jsx)(Jr.Provider, {
+                 value: !0,
+                 children: iM
+               })
+             })
+ ... (9 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1704-L1709` → after: `L840-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L840-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L840-L865) · [Before (L1704-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1704-L1709)

```diff
-         } else {
-           const GG = YG.parameters.hasTrailingComma ? " " : YG.parameters.length > 0 ? ", " : "";
-           pG.push({
-             from: ZG,
-             to: ZG,
-             text: `${GG}${dG.join(", ")}`
+         }
+ 
+         function Gr(MM) {
+           let {
+             code: rM
+           } = MM;
+           const iM = (0, OM.useContext)(Hr);
+           if ((0, OM.useContext)(Jr)) return (0, hM.jsx)("code", {
+             className: "DocsInlineCode",
+             children: rM
+           });
+           if (nr().has(rM)) return (0, hM.jsx)(wr, {
+             type: rM
+           });
+           const SM = mr(rM);
+           if (SM) return (0, hM.jsx)(aM.b, {
+ ... (10 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1712-L1758` → after: `L868-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L868-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L868-L870) · [Before (L1712-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1712-L1758)

```diff
-       }
-       const rG = `${SG}(${QG.join(", ")})`,
-         zG = hG(`${lZ(yG)}Result`, 2),
-         EG = rZ[wG],
-         oG = JZ.has(wG) ? [rG] : EG ? [`const ${zG} = ${rG}`, `if (${EG.stopsWhen(zG)}) return ${zG}`] : [`const ${zG} = ${rG}`],
-         XG = !JZ.has(wG) && (null === (kG = null === EG || void 0 === EG ? void 0 : EG.passedOn) || void 0 === kG || kG);
-       if (XG && CG().isBlock(VG)) {
-         const ZG = function(GG, bG) {
-             const ZG = new Set;
-             for (const wG of GG.statements) {
-               const GG = CG().isVariableStatement(wG) ? wG.declarationList.declarations[0] : void 0;
-               GG && CG().isIdentifier(GG.name) && GG.initializer && AZ(GG.initializer, bG) && ZG.add(GG.name.text)
-             }
-             return ZG
-           }(VG, wG),
-           SG = GG => {
- ... (31 more removed lines; see GitHub link above)
+ 
+         function Cr(MM) {
+           let {
```

#### 64. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1762-L1794` → after: `L897-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L897-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L897-L898) · [Before (L1762-L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1762-L1794)

```diff
-       }
-       const uG = CG().isBlock(VG) ? [...VG.statements] : [],
-         iG = uG.findIndex((GG => ! function(GG, bG) {
-           return CG().isExpressionStatement(GG) && AZ(GG.expression, bG)
-         }(GG, wG))),
-         WG = uG[(-1 === iG ? uG.length : iG) - 1];
-       if (UG && JZ.has(wG) && WG) pG.push({
-         from: WG.getEnd(),
-         to: WG.getEnd(),
-         text: `\n${FZ(GG,WG.getStart(bG))}${rG}`
-       });
-       else if (CG().isBlock(VG)) {
-         const ZG = VG.statements[0],
-           wG = ZG ? FZ(GG, ZG.getStart(bG)) : `${GG.slice(IZ(GG,YG.getStart(bG)),YG.getStart(bG)).replace(/\S.*$/,"")}\t`,
-           SG = VG.getStart(bG) + 1,
-           LG = void 0 !== ZG && !GG.slice(SG, ZG.getStart(bG)).includes("\n");
- ... (17 more removed lines; see GitHub link above)
+         const er = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
+           br = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);
```

#### 65. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1796-L1840` → after: `L900-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L900-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L900-L922) · [Before (L1796-L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1796-L1840)

```diff
-     function AZ(GG, bG) {
-       return CG().isCallExpression(GG) && CG().isIdentifier(GG.expression) && GG.expression.text.endsWith(cZ(bG)) && GG.expression.text !== cZ(bG)
-     }
- 
-     function sZ(GG, bG) {
-       return CG().isIdentifier(GG) ? bG.has(GG.text) ? GG : null : CG().isConditionalExpression(GG) ? sZ(GG.whenFalse, bG) : null
-     }
- 
-     function qZ(GG) {
-       const bG = [],
-         ZG = GG => {
-           CG().isIdentifier(GG) && bG.push(GG.text), CG().forEachChild(GG, ZG)
-         };
-       return ZG(GG), bG
-     }
- 
- ... (29 more removed lines; see GitHub link above)
+         function wr(MM) {
+           let {
+             type: rM
+           } = MM;
+           const iM = nr(),
+             SM = [];
+           for (const OM of rM.trim().matchAll(er)) {
+             const [MM, rM, jM, aM, PM] = OM;
+             rM ? SM.push((0, hM.jsx)("span", {
+               className: "DocsTypeString",
+               children: MM
+             })) : jM && iM.has(jM) ? SM.push((0, hM.jsx)(pr, {
+               name: jM,
+               definition: iM.get(jM)
+             })) : jM ? SM.push((0, hM.jsx)("span", {
+               className: br.has(jM) ? "DocsTypeKeyword" : "DocsTypeName",
+ ... (7 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1842` → after: `L924-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L924-L930) · [Before (L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1842)

```diff
-           }))
+           }
+           return (0, hM.jsx)("code", {
+             className: "DocsInlineCode DocsTypeText",
+             children: SM.map(((MM, rM) => (0, hM.jsx)(OM.Fragment, {
+               children: MM
+             }, rM)))
+           })
```

#### 67. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1844-L1890` → after: `L932-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L932-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L932-L958) · [Before (L1844-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1844-L1890)

```diff
-       }
-       const kG = zZ(GG),
-         UG = zZ(bG);
-       if (kG.hasErrors || UG.hasErrors) return null;
-       const YG = WZ(GG, kG.file),
-         VG = WZ(bG, UG.file),
-         pG = new Set(YG.flatMap((GG => GG.names))),
-         fG = new Set(pG),
-         QG = [],
-         KG = [],
-         hG = [],
-         dG = [];
-       let JG = [];
-       const rG = VG.find((GG => "config" === GG.kind)),
-         zG = YG.find((GG => "config" === GG.kind));
-       if (rG) {
- ... (31 more removed lines; see GitHub link above)
+         const tr = 480,
+           gr = 6,
+           ur = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
+         let Rr = 0;
+ 
+         function pr(MM) {
+           let {
+             name: rM,
+             definition: iM
+           } = MM;
+           const SM = (0, OM.useContext)(Hr),
+             jM = Qr[rM],
+             PM = (0, OM.useRef)(null),
+             nM = (0, OM.useRef)(null),
+             zM = (0, OM.useRef)(null),
+             [LM, mM] = (0, OM.useState)(!1),
+ ... (11 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1892-L1905` → after: `L960-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L960-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L960-L966) · [Before (L1892-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1892-L1905)

```diff
-             const fG = ZG.getEnd() - 1,
-               QG = ZG.properties[ZG.properties.length - 1];
-             if (!GG.slice(ZG.getStart(bG), fG).includes("\n")) {
-               const GG = ZG.properties.map((GG => {
-                 const ZG = pG.get(GG);
-                 return CG().isPropertyAssignment(GG) && void 0 !== ZG ? `\t${GG.name.getText(bG)}: ${ZG},` : `\t${GG.getText(bG)},`
-               }));
-               return {
-                 edits: [{
-                   from: ZG.getStart(bG),
-                   to: ZG.getEnd(),
-                   text: `{\n${[...GG,...VG].join("\n")}\n}`
-                 }],
-                 settings: YG
+           return (0, OM.useEffect)((() => {
+             if (!LM) return;
+             const MM = MM => {
+               if ("Escape" === MM.key) {
+                 var rM, iM;
+                 if (null !== (rM = nM.current) && void 0 !== rM && rM.contains(document.activeElement)) null === (iM = PM.current) || void 0 === iM || iM.focus();
+                 mM(!1)
```

#### 69. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1923-L1935` → after: `L969-L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L969-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L969-L970) · [Before (L1923-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1923-L1935)

```diff
-             const JG = hG + dG.trimEnd().length,
-               rG = KG && QG.getEnd() === JG;
-             return KG && !rG && UG.push({
-               from: QG.getEnd(),
-               to: QG.getEnd(),
-               text: ","
-             }), UG.push({
-               from: JG,
-               to: fG,
-               text: `${rG?",":""}\n${VG.join("\n")}\n`
-             }), {
-               edits: UG,
-               settings: YG
+             return document.addEventListener("keydown", MM), () => {
+               document.removeEventListener("keydown", MM)
```

#### 70. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1937-L1953` → after: `L972-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L972-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L972-L1050) · [Before (L1937-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1937-L1953)

```diff
-           }(GG, kG.file, wG, bG, UG.file, ZG, yG);
-           QG.push(...SG.edits), JG = SG.settings
-         } else if (ZG) {
-           if (fG.has("CONFIG")) return null;
-           const wG = function(GG, bG) {
-               const ZG = bG.statements[0];
-               return ZG ? IZ(GG, ZG.getStart(bG)) : GG.length
-             }(GG, kG.file),
-             SG = wG > 0 && "\n" !== GG[wG - 1] ? "\n" : "";
-           QG.push({
-             from: wG,
-             to: wG,
-             text: `${SG}${bG.slice(rG.from,rG.to)}\n\n`
-           }), JG = ZG.properties.flatMap((GG => {
-             const bG = mZ(GG);
-             return null === bG ? [] : [bG]
- ... (1 more removed lines; see GitHub link above)
+           }), [LM]), (0, OM.useEffect)((() => () => {
+             clearTimeout(yM.current)
+           }), []), (0, OM.useLayoutEffect)((() => {
+             if (!LM || !PM.current || !nM.current) return void JM(null);
+             const MM = PM.current.getBoundingClientRect(),
+               rM = nM.current.offsetHeight,
+               iM = Math.min(tr, window.innerWidth - 32),
+               OM = Math.min(Math.max(16, MM.left), window.innerWidth - iM - 16),
+               SM = MM.bottom + gr + rM < window.innerHeight;
+             JM({
+               left: OM,
+               top: SM ? MM.bottom + gr : Math.max(16, MM.top - gr - rM)
+             })
+           }), [LM]), (0, hM.jsxs)(hM.Fragment, {
+             children: [(0, hM.jsx)("button", {
+               type: "button",
+ ... (63 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1955-L1989` → after: `L1052-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1052-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1052-L1113) · [Before (L1955-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1955-L1989)

```diff
-       }
-       const EG = [],
-         oG = (GG, ZG) => {
-           const wG = EG[EG.length - 1],
-             SG = void 0 !== wG && wG >= 0 && wG === ZG - 1 && !/\n[^\S\n]*\n/.test(bG.slice(VG[wG].to, VG[ZG].from)) ? "\n" : "\n\n";
-           KG.push(0 === KG.length ? GG : `${SG}${GG}`), EG.push(ZG)
-         };
-       for (const [uG, iG] of VG.entries()) {
-         if ("config" === iG.kind) continue;
-         const wG = bG.slice(iG.from, iG.to);
-         if ("callback" === iG.kind) {
-           const bG = iG.names[0],
-             LG = jZ(YG, bG);
-           if (!LG && pG.has(bG)) {
-             if (!0 === ZG.chainCallbacks) continue;
-             return null
- ... (19 more removed lines; see GitHub link above)
+         var Wr = iM(181),
+           sr = iM(5173),
+           Dr = iM(5182),
+           kr = iM(5184);
+         const Zr = {
+           progressBar: {
+             uO: 30,
+             RO: .075,
+             pO: 5,
+             WO: !1,
+             description: [{
+               str: "Click repeatedly to complete!"
+             }],
+             sO: "fa-solid fa-computer-mouse",
+             scale: 3,
+             rotation: 15
+ ... (46 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1991-L1992` → after: `L1115-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1115-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1115-L1120) · [Before (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1991-L1992)

```diff
-           nZ(LG.BQ, kG.file, yG) || (QG.push(...MZ(GG, kG.file, LG, bG, yG, KG, SG, !0 === ZG.runsLast)), dG.push(bG));
-           continue
+         };
+         var or = iM(313),
+           fr = iM(2099);
+ 
+         function Yr(MM) {
+           return MM.startsWith("fa-")
```

#### 73. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1994-L1997` → after: `L1122-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1122-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1122-L1145) · [Before (L1994-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1994-L1997)

```diff
-         const LG = iG.names.filter((GG => !fG.has(GG)));
-         if ("other" === iG.kind || iG.names.length > 0 && LG.length === iG.names.length) {
-           oG(wG, uG), hG.push(...LG);
-           for (const GG of LG) fG.add(GG)
+         const Nr = {
+             text: "Text",
+             icon: "Icon",
+             progressBar: "Progress bar",
+             keyBinding: "Key binding",
+             other: "Other"
+           },
+           Ar = {
+             text: "Text",
+             icon: {
+               icon: "Pixelated Heart"
+             },
+             progressBar: {
+               type: "ProgressBar",
+               progress: .5
+             },
+ ... (8 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L1999-L2011` → after: `L1147-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1147-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1147-L1270) · [Before (L1999-L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L1999-L2011)

```diff
-       }
-       let XG = aZ(GG, QG);
-       if (KG.length > 0) {
-         const GG = XG.replace(/\s*$/, "");
-         XG = `${""===GG?"":`${GG}\n\n`}${LG?`${LG}\n`:""}${KG.join("")}\n`
-       }
-       return zZ(XG).hasErrors ? null : {
-         text: XG,
-         added: hG,
-         chained: dG,
-         settings: JG
-       }
-     }
+         const vr = [{
+             path: ["style", "color"],
+             label: "Colour",
+             field: {
+               kind: "colour"
+             },
+             defaultText: "The surrounding text's"
+           }, {
+             path: ["style", "fontSize"],
+             label: "Font size",
+             field: {
+               kind: "size"
+             },
+             defaultText: "1em"
+           }, {
+             path: ["style", "fontWeight"],
+ ... (108 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2013-L2018` → after: `L1272-L1276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1272-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1272-L1276) · [Before (L2013-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2013-L2018)

```diff
-     function eZ(GG) {
-       const {
-         file: bG
-       } = zZ(GG);
-       return new Set(WZ(GG, bG).flatMap((GG => GG.names)))
-     }
+         function Br(MM) {
+           return "string" === typeof MM ? {
+             str: MM
+           } : MM
+         }
```

#### 76. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2020-L2027` → after: `L1278-L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1278-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1278-L1282) · [Before (L2020-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2020-L2027)

```diff
-     function RZ(GG) {
-       const {
-         file: bG
-       } = zZ(GG), ZG = new Set, wG = GG => {
-         CG().isCallExpression(GG) && CG().isIdentifier(GG.expression) && ZG.add(GG.expression.text), CG().forEachChild(GG, wG)
-       };
-       return wG(bG), ZG
-     }
+         function Xr(MM, rM) {
+           let iM = Br(MM);
+           for (const OM of rM) iM = iM && "object" === typeof iM ? iM[OM] : void 0;
+           return iM
+         }
```

#### 77. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2029-L2031` → after: `L1284-L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1284-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1284-L1299) · [Before (L2029-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2029-L2031)

```diff
-     function TZ(GG) {
-       return !zZ(GG).hasErrors
-     }
+         function Ir(MM, rM, iM) {
+           const OM = (MM, SM) => {
+             var jM;
+             const aM = rM[SM],
+               PM = {
+                 ...MM
+               };
+             if (SM === rM.length - 1) return void 0 === iM ? delete PM[aM] : PM[aM] = iM, PM;
+             const nM = OM(null !== (jM = MM[aM]) && void 0 !== jM ? jM : {}, SM + 1);
+             return 0 === Object.keys(nM).length ? delete PM[aM] : PM[aM] = nM, PM
+           };
+           return function(MM) {
+             const rM = Object.keys(MM);
+             return "string" === typeof MM.str && 1 === rM.length ? MM.str : MM
+           }(OM(Br(MM), 0))
+         }
```

#### 78. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2033-L2035` → after: `L1301-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1301-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1301-L1306) · [Before (L2033-L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2033-L2035)

```diff
-     function HZ(GG, bG) {
-       return CG().isCallExpression(GG) && CG().isPropertyAccessExpression(GG.expression) && "api" === GG.expression.expression.getText(bG)
-     }
+         function Kr(MM, rM) {
+           const iM = xr(MM),
+             OM = Fr[iM].find((MM => MM.path.join(".") === rM.join("."))),
+             SM = null !== OM && void 0 !== OM && OM.isRequired && "other" !== iM ? Xr(Ar[iM], rM) : void 0;
+           return Ir(MM, rM, SM)
+         }
```

#### 79. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2037-L2213` → after: `L1308-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1308-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1308-L1319) · [Before (L2037-L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2037-L2213)

```diff
-     function tZ(GG, bG) {
-       var ZG;
-       const wG = GG.getPropertiesOfType(GG.getNonNullableType(bG)),
-         SG = null !== (ZG = wG.find((GG => "color" === GG.name))) && void 0 !== ZG ? ZG : wG[0];
-       if (!SG) return;
-       const LG = GG.typeToString(GG.getNonNullableType(GG.getTypeOfSymbol(SG))),
-         yG = "color" === SG.name ? '"red"' : LG.includes("number") ? "1" : "boolean" === LG ? "true" : '"..."';
-       return `{ ${SG.name}: ${yG} }`
-     }
- 
-     function DZ(GG) {
-       return GG.isUnion() ? GG.types.every((GG => 0 !== (GG.flags & CG().TypeFlags.Object))) : 0 !== (GG.flags & CG().TypeFlags.Object)
-     }
- 
-     function NZ(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
- ... (161 more removed lines; see GitHub link above)
+         function qr(MM) {
+           switch (xr(MM)) {
+             case "text":
+               return String(Xr(MM, ["str"]));
+             case "icon":
+               return String(Xr(MM, ["icon"]));
+             case "progressBar":
+               return `${Math.round(100*Number(Xr(MM,["progress"])))}%`;
+             case "keyBinding":
+               return String(Xr(MM, ["action"]));
+             case "other":
+               return JSON.stringify(MM)
```

#### 80. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2216-L2225` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1322) · [Before (L2216-L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2216-L2225)

```diff
-         SG.push({
-           ...Lw(kG),
-           text: ""
-         })
-       }
-       return {
-         code: aZ(GG, SG),
-         calls: wG
-       }
-     }
+         const Tr = /^[A-Za-z_$][\w$]*$/;
```

#### 81. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2227-L2240` → after: `L1324-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1324-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1324-L1331) · [Before (L2227-L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2227-L2240)

```diff
-     function kw(GG) {
-       if (!/=\s*(?:on[A-Z]\w*|tick|playerCommand)\b/.test(GG)) return GG;
-       const bG = Sw(GG),
-         ZG = new Set(bG.statements.flatMap((GG => CG().isFunctionDeclaration(GG) && GG.name ? [GG.name.text] : []))),
-         wG = [];
-       for (const SG of bG.statements)
-         if (CG().isExpressionStatement(SG) && CG().isBinaryExpression(SG.expression) && SG.expression.operatorToken.kind === CG().SyntaxKind.EqualsToken && CG().isIdentifier(SG.expression.left) && ZG.add(SG.expression.left.text), CG().isVariableStatement(SG))
-           for (const GG of SG.declarationList.declarations) {
-             const bG = GG.initializer;
-             bG && CG().isIdentifier(bG) && dZ(bG.text) && !ZG.has(bG.text) && wG.push({
-               from: bG.getStart(),
-               to: bG.getEnd(),
-               text: "function () {}"
-             }), bG && CG().isIdentifier(GG.name) && ZG.add(GG.name.text)
+         function Vr(MM) {
+           if (Array.isArray(MM)) return `[${MM.map(Vr).join(", ")}]`;
+           if (MM && "object" === typeof MM) {
+             const rM = Object.entries(MM).map((MM => {
+               let [rM, iM] = MM;
+               return `${Tr.test(rM)?rM:JSON.stringify(rM)}: ${Vr(iM)}`
+             }));
+             return 0 === rM.length ? "{}" : `{ ${rM.join(", ")} }`
```

#### 82. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L2242-L5133` → after: `L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1333) · [Before (L2242-L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L2242-L5133)

```diff
-       return aZ(GG, wG)
-     }
- 
-     function Uw(GG, bG) {
-       if (!GG.includes("api.setBlockRect(")) return GG;
-       const ZG = Sw(GG);
-       if (ZG.statements.some((GG => {
-           var bG;
-           return CG().isFunctionDeclaration(GG) && "fillBox" === (null === (bG = GG.name) || void 0 === bG ? void 0 : bG.text) && 3 !== GG.parameters.length
-         }))) return GG;
-       const wG = [],
-         SG = GG => {
-           var LG;
-           CG().isFunctionDeclaration(GG) && "fillBox" === (null === (LG = GG.name) || void 0 === LG ? void 0 : LG.text) || (HZ(GG, ZG) && "setBlockRect" === GG.expression.name.text && 3 === GG.arguments.length && !bG.includes(GG.getText()) && wG.push({
-             from: GG.expression.getStart(),
-             to: GG.expression.getEnd(),
- ... (2876 more removed lines; see GitHub link above)
+           return JSON.stringify(MM)
```

#### 83. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5162-L5225` → after: `L1336-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1336-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1336-L1339) · [Before (L5162-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5162-L5225)

```diff
-     function Jw(GG, bG, ZG) {
-       const wG = "string" === GG.kind || "block" === GG.kind || "item" === GG.kind || "mob" === GG.kind;
-       let SG = pw(bG),
-         LG = bG;
-       var yG;
-       if (SG && fw(SG) || !wG || (yG = bG, LG = JSON.stringify(yG.replace(/^["'`]|["'`]$/g, "")), SG = pw(LG)), !SG || !fw(SG)) return {
-         problem: `${GG.key} must be a plain value like ${GG.value}, not ${bG}`
-       };
-       if ("number" === GG.kind && !Qw(SG)) return {
-         problem: `${GG.key} must be a number, like ${GG.value}`
-       };
-       if ("boolean" === GG.kind && SG.kind !== CG().SyntaxKind.TrueKeyword && SG.kind !== CG().SyntaxKind.FalseKeyword) return {
-         problem: `${GG.key} must be true or false`
-       };
-       if ("position" === GG.kind && ! function(GG) {
-           return CG().isArrayLiteralExpression(GG) && 3 === GG.elements.length && GG.elements.every(Qw)
- ... (48 more removed lines; see GitHub link above)
+         function cr(MM) {
+           const rM = MM.map(Vr),
+             iM = `[${rM.join(", ")}]`;
+           return iM.length <= 60 ? iM : `[\n${rM.map((MM=>`    ${MM},`)).join("\n")}\n]`
```

#### 84. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5227-L5240` → after: `L1341-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1341-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1341-L1344) · [Before (L5227-L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5227-L5240)

```diff
-         if (VG.length > 0) return {
-           problem: `${VG.join(", ")} ${1===VG.length?"item"===ZG?"isn't an":"isn't a":"aren't"} ${ZG} name${1===VG.length?"":"s"}, so ${GG.key} kept ${GG.value}`
-         };
-         return {
-           value: UG,
-           ...YG.length > 0 ? {
-             fixed: YG.join(", ")
-           } : {}
-         }
-       }(GG, SG, GG.names, ZG);
-       if (wG) {
-         const bG = Kw(SG);
-         if (null === bG) return {
-           problem: `${GG.key} must be text in quotes, like ${GG.value}`
+         const Mi = {
+           "\n": "\\n",
+           "\r": "\\r",
+           "\t": "\\t"
```

#### 85. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5296-L5303` → after: `L1347-L1356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1347-L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1347-L1356) · [Before (L5296-L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5296-L5303)

```diff
-     function iw(GG) {
-       const bG = [],
-         ZG = new Set,
-         wG = GG => {
-           const SG = Xw(GG);
-           if (SG && !ZG.has(SG.group)) {
-             ZG.add(SG.group);
-             for (const GG of null !== (LG = SG.uses) && void 0 !== LG ? LG : []) {
+         function ri(MM) {
+           let rM = "";
+           for (let SM = 0; SM < MM.length; SM++) {
+             const jM = MM[SM];
+             if ("\\" === jM) {
+               var iM;
+               const OM = null !== (iM = MM[SM + 1]) && void 0 !== iM ? iM : "";
+               rM += "'" === OM ? "'" : jM + OM, SM++
+             } else if ('"' === jM) rM += '\\"';
+             else {
```

#### 86. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5305` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1358) · [Before (L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5305)

```diff
-               wG(GG)
+               rM += null !== (OM = Mi[jM]) && void 0 !== OM ? OM : jM
```

#### 87. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5309-L5340` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1361) · [Before (L5309-L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5309-L5340)

```diff
-         };
-       for (const SG of GG) wG(SG);
-       return bG
-     }
- 
-     function Cw(GG, bG) {
-       const ZG = GG => GG.replace(/\s+/g, ""),
-         wG = new RegExp(`function ${bG.name}\\s*\\([^)]*\\)\\s*\\{`).exec(GG);
-       return !!wG && ZG(bG.code).includes(ZG(GG.slice(wG.index, wG.index + 200)).slice(0, 60))
-     }
- 
-     function Ww(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
-       if (!TZ(GG)) return {
-         text: GG,
-         added: []
- ... (16 more removed lines; see GitHub link above)
+           return `"${rM}"`
```

#### 88. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5450-L5462` → after: `L1364-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1364-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1364-L1368) · [Before (L5450-L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5450-L5462)

```diff
-     function Pw(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
-       const ZG = function(GG) {
-           return new Set(GG.toLowerCase().split(/[^a-z0-9]+/).filter((GG => GG.length > 1)))
-         }(GG),
-         wG = ` ${GG.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
-       return rw.map((GG => {
-         const bG = GG.keywords.map((GG => GG.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((GG => GG.includes(" ") ? wG.includes(` ${GG} `) : ZG.has(GG))),
-           SG = Math.min(...bG.map((GG => wG.indexOf(` ${GG} `))));
-         return {
-           prefab: GG,
-           score: bG.length,
-           first: SG
+         function ii(MM) {
+           if ("string" === typeof MM) return !0;
+           if (!MM || "object" !== typeof MM || Array.isArray(MM)) return !1;
+           const rM = MM;
+           return "ProgressBar" === rM.type ? "number" === typeof rM.progress : "StyledKeyBinding" === rM.type ? fr.n.includes(rM.action) : "string" === typeof rM.icon || "string" === typeof rM.str || "string" === typeof rM.entityName || "string" === typeof rM.translationKey
```

#### 89. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5468-L5478` → after: `L1371-L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1371-L1372) · [Before (L5468-L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5468-L5478)

```diff
-     function Aw(GG) {
-       var bG, ZG, wG, SG, LG, yG;
-       const kG = function(GG) {
-           var bG, ZG;
-           const wG = null === (bG = GG.questions) || void 0 === bG ? void 0 : bG.trim();
-           if (null !== (ZG = GG.question) && void 0 !== ZG && ZG.trim() || !wG) return GG;
-           const SG = {
-             ...GG,
-             question: wG
-           };
-           if (!/^[[{]/.test(wG)) return SG;
+         function Oi(MM) {
+           let rM;
```

#### 90. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5480-L5498` → after: `L1374-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1374-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1374-L1379) · [Before (L5480-L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5480-L5498)

```diff
-             const bG = JSON.parse(wG),
-               ZG = Array.isArray(bG) ? bG[0] : bG;
-             if ("string" === typeof ZG) {
-               const wG = Array.isArray(bG) ? bG.slice(1).filter((GG => "string" === typeof GG)) : [];
-               return {
-                 ...GG,
-                 question: ZG,
-                 ...wG.length > 0 && void 0 === GG.choices ? {
-                   choices: wG.join("\n")
-                 } : {}
-               }
-             }
-             if ("object" !== typeof ZG || null === ZG) return SG;
-             const LG = ZG,
-               yG = GG => "string" === typeof GG ? GG : "boolean" === typeof GG ? String(GG) : Array.isArray(GG) ? GG.filter((GG => "string" === typeof GG)).join("\n") : void 0,
-               kG = {
- ... (3 more removed lines; see GitHub link above)
+             rM = function(MM) {
+               let rM = "",
+                 iM = "",
+                 OM = 0;
+               const SM = () => {
+                 rM += iM.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), iM = ""
```

#### 91. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5501-L5505` → after: `L1406-L1407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1406-L1407) · [Before (L5501-L5505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5501-L5505)

```diff
-               ...GG,
-               ...Object.fromEntries(Object.entries(kG).filter((GG => {
-                 let [, bG] = GG;
-                 return void 0 !== bG
-               })))
+               parts: null,
+               error: OM instanceof SyntaxError ? "This isn't a valid array yet." : OM.message
```

#### 92. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5510-L5552` → after: `L1410-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1410-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1410-L1412) · [Before (L5510-L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5510-L5552)

```diff
-         }(GG),
-         UG = null !== (bG = null === (ZG = kG.question) || void 0 === ZG ? void 0 : ZG.replace(/\s+/g, " ").trim()) && void 0 !== bG ? bG : "",
-         YG = (null !== (wG = kG.choices) && void 0 !== wG ? wG : "").includes("\n") ? (null !== (SG = kG.choices) && void 0 !== SG ? SG : "").split("\n") : (null !== (LG = kG.choices) && void 0 !== LG ? LG : "").split("|"),
-         VG = [...new Set(YG.map((GG => GG.replace(/^\s*(?:[-*\u2022]|\d+[.)])\s*/, "").trim())).filter(Boolean))].slice(0, 4),
-         pG = "false" !== (null === (yG = kG.allow_other) || void 0 === yG ? void 0 : yG.trim().toLowerCase());
-       return "" === UG || Mw.test(UG) || VG.length < 2 && !pG ? null : {
-         question: UG,
-         choices: VG,
-         allowOther: pG
-       }
-     }
-     const sw = /^\s*(?:\.\.\.|\u2026)\s*$/,
-       qw = /^[ \t]*(?:\/\/|\/\*)[ \t]*(?:(?:\.\.\.|\u2026)[ \t]*(?:\*\/)?[ \t]*$|(?:\.\.\.|\u2026)?[ \t]*(?:existing code|rest of (?:the |your )?(?:code|file)))/im;
- 
-     function nw(GG, bG) {
-       if (sw.test(GG)) return !0;
- ... (27 more removed lines; see GitHub link above)
+           if (!Array.isArray(rM)) return {
+             parts: null,
+             error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
```

#### 93. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5554-L5556` → after: `L1414-L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1414-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1414-L1436) · [Before (L5554-L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5554-L5556)

```diff
-         case "fetch_url":
-           return void 0 === bG.url ? bG : {
-             url: XG(bG.url)
+           const iM = rM.findIndex((MM => !ii(MM)));
+           return -1 !== iM ? {
+             parts: null,
+             error: `Part ${iM+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
+           } : {
+             parts: rM,
+             error: null
+           }
+         }
+         const Si = 1 / Wr.f.clientTicksPerSecond,
+           ji = 700,
+           ai = {
+             type: null,
+             parameters: null,
+             state: null,
+             isActive: !1
+ ... (7 more added lines; see GitHub link above)
```

#### 94. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5563-L5619` → after: `L1439-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1439-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1439-L1446) · [Before (L5563-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5563-L5619)

```diff
-     function Bw(GG) {
-       return GG.trim().replace(/^\.?\//, "")
-     }
- 
-     function GS(GG) {
-       return GG.replace(tw, "function $1$2")
-     }
- 
-     function bS(GG) {
-       return GG.replace(/\bif\s*\(\s*(\/\*(?:(?!\*\/)[^])*\*\/)\s*\)/g, "if (false $1)")
-     }
- 
-     function ZS(GG, bG, ZG, wG) {
-       let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
-         LG = arguments.length > 5 ? arguments[5] : void 0,
-         yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "offer",
- ... (41 more removed lines; see GitHub link above)
+         function ni(MM) {
+           let {
+             type: rM
+           } = MM;
+           const [iM, SM] = (0, OM.useState)("ready"), [aM, PM] = (0, OM.useState)(1), [nM, QM] = (0, OM.useState)(!0), zM = (0, OM.useRef)(null), LM = (0, OM.useRef)(null), mM = (0, OM.useRef)(null), HM = (0, OM.useRef)(new Set), JM = (0, OM.useRef)(!1), yM = Pi[rM], lM = (0, OM. … [truncated]
+             getState: () => {
+               var MM, rM;
+               return null !== (MM = null === (rM = mM.current) || void 0 === rM ? void 0 : rM.getState()) && void 0 !== MM ? MM : ai
```

#### 95. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5621-L5732` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1448-L1449) · [Before (L5621-L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5621-L5732)

```diff
-             ZG = fG ? {
-               ...bG,
-               call: fG
-             } : bG;
-           oG.add(XG(ZG)), CG(ZG)
-         },
-         iG = [],
-         CG = GG => {
-           const bG = XG(GG);
-           iG.length < 4 && !iG.some((GG => XG(GG) === bG)) && iG.push(GG)
-         },
-         WG = [],
-         mG = [],
-         IG = [],
-         vG = new Map,
-         PG = new Map,
- ... (96 more removed lines; see GitHub link above)
+             onFrame: MM => (HM.current.add(MM), () => {
+               HM.current.delete(MM)
```

#### 96. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5734-L5756` → after: `L1451-L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1451-L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1451-L1462) · [Before (L5734-L5756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5734-L5756)

```diff
-           } else if ("add_world_code" === bG.name) {
-             if (void 0 === LG) continue;
-             void 0 !== dG ? Zb(dG) : QG(bG.name, null, "missingArgs")
-           } else if ("use_prefab" === bG.name) {
-             const GG = void 0 !== SG && "" !== SG.trim() ? rG(SG) : void 0 === LG ? null !== wG && void 0 !== wG ? wG : "index.js" : null;
-             if (void 0 === bG.args.name || "" === bG.args.name.trim()) QG(bG.name, GG, "missingArgs");
-             else if (null !== GG && zG(GG)) {
-               var Vb;
-               OG(GG, bG.args.name, null !== (Vb = bG.args.settings) && void 0 !== Vb ? Vb : "", bG.args.why)
-             } else QG(bG.name, GG, "prefab", {
-               detail: "A prefab goes in World Code, not in a code block."
-             })
-           } else if ("ask_creator" === bG.name) eG ??= Aw(bG.args);
-           else if ("plan" === bG.name) {
-             var pb;
-             if (0 === HG.length) HG = Kb(null !== (pb = bG.args.steps) && void 0 !== pb ? pb : "")
- ... (7 more removed lines; see GitHub link above)
+           })), []);
+           (0, OM.useEffect)((() => {
+             const MM = zM.current,
+               rM = LM.current;
+             if (!MM || !rM) return;
+             const iM = new ResizeObserver((() => {
+               PM(MM.clientWidth / Math.max(1, rM.offsetWidth))
+             }));
+             return iM.observe(MM), () => {
+               iM.disconnect()
+             }
+           }), []), (0, OM.useEffect)((() => {
```

#### 97. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5758-L5816` → after: `L1464-L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1464-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1464-L1480) · [Before (L5758-L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5758-L5816)

```diff
-             if (!mG.some((bG => bG.kind === GG))) mG.push("export_game" === bG.name ? {
-               kind: "exportGame"
-             } : {
-               kind: "switchToWorldCode",
-               request: (null === (Qb = bG.args.request) || void 0 === Qb ? void 0 : Qb.trim()) || null
-             })
-           } else if ("write_file" === bG.name) {
-             var hb, db;
-             if (pZ(bG))
-               if (void 0 === yG || "" !== yG.trim() && !nw(Nw(yG), void 0 === SG ? "" : null !== (hb = YG[rG(SG)]) && void 0 !== hb ? hb : "")) {
-                 if (void 0 !== SG && void 0 !== yG && NG(SG, yG)) Zb(yG);
-                 else if (void 0 !== SG && EG(rG(SG)) && "" !== (null !== (db = ZG[rG(SG)]) && void 0 !== db ? db : "").trim()) QG(bG.name, rG(SG), "unread", void 0 === yG ? void 0 : {
-                   code: Ow(yG)
-                 }), uG(rG(SG));
-                 else if (void 0 !== SG && void 0 !== yG) {
-                   const GG = rG(SG),
- ... (43 more removed lines; see GitHub link above)
+             if ("playing" !== iM) return;
+             let OM = !1;
+             const jM = new kr.f[rM](Zr[rM], (MM => {
+               OM = !0, QM(!1), SM(MM ? "succeeded" : "failed")
+             }), (() => {}));
+             mM.current = jM;
+             let aM = 0,
+               PM = performance.now(),
+               nM = requestAnimationFrame((function MM(rM) {
+                 for (aM += Math.min(.25, (rM - PM) / 1e3), PM = rM; aM >= Si && !OM;) aM -= Si, jM.handleTick(Si);
+                 for (const iM of HM.current) iM();
+                 OM || (nM = requestAnimationFrame(MM))
+               }));
+             return null === (MM = zM.current) || void 0 === MM || MM.focus({
+               preventScroll: !0
+             }), () => {
+ ... (1 more added lines; see GitHub link above)
```

#### 98. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L5818-L6292` → after: `L1482-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1482-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1482-L1488) · [Before (L5818-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L5818-L6292)

```diff
-           }
-           KG = KG.replace(bG.source, "")
-         }
-       }
-       if (fG = void 0, KG = ab(hZ(KG), wb.length > 0), 0 === wb.length) {
-         var ub, Wb;
-         const bG = [...GG.matchAll(ew)],
-           ZG = 1 === bG.length ? bG[0][1] : null,
-           SG = null !== (ub = null !== LG && void 0 !== LG ? LG : wG) && void 0 !== ub ? ub : "index.js",
-           yG = null !== (Wb = YG[SG]) && void 0 !== Wb ? Wb : "";
-         if (null !== ZG && NG(null, ZG)) Zb(ZG), KG = KG.replace(bG[0][0], "");
-         else if (null !== ZG && Dw.test(ZG) && !nw(ZG, yG) && ! function(GG, bG) {
-             const ZG = gw(bG);
-             return ZG.length >= 10 && 2 * jG(gw(GG), ZG) < ZG.length
-           }(ZG, yG)) {
-           const GG = kw(Ow(ZG));
- ... (459 more removed lines; see GitHub link above)
+           }), [iM, rM]), (0, OM.useEffect)((() => {
+             if (nM) return;
+             const MM = setTimeout((() => {
+               QM(!0)
+             }), ji);
+             return () => {
+               clearTimeout(MM)
```

#### 99. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6294-L6475` → after: `L1490-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1490-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1490-L1568) · [Before (L6294-L6475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L6294-L6475)

```diff
-             const wG = ZG.section(GG);
-             if (wG) return wG.text;
-             const SG = ZG.find(GG, "", 3).map((GG => GG.name)).join(", ");
-             return `Nothing is called ${GG}.${""===SG?"":` The closest names are: ${SG}.`}`
-           }(GG.args.name, GG.args.list, bG.docs));
-         case "fetch_url":
-           return SG(await bG.fetchDocsPage(null !== (ZG = GG.args.url) && void 0 !== ZG ? ZG : ""));
-         case "find_names": {
-           var LG, yG;
-           const ZG = bG.docs.searchNames(null !== (LG = GG.args.words) && void 0 !== LG ? LG : "", 20);
-           return SG(ZG.length > 0 ? ZG.join(", ") : `No block, item or mob name has any of the words "${null!==(yG=GG.args.words)&&void 0!==yG?yG:""}".`)
-         }
-         case "view_errors":
-           return SG(bG.errors.length > 0 ? bG.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
-         case "list_prefabs":
-           return SG(lw(GG.args.category));
- ... (166 more removed lines; see GitHub link above)
+           }), [nM]);
+           const EM = MM => {
+             var rM;
+             "playing" === iM && JM.current !== MM && (JM.current = MM, null === (rM = mM.current) || void 0 === rM || rM.handleMouseInput(MM))
+           };
+           return (0, hM.jsxs)("div", {
+             className: "DocsQteDemo",
+             children: [(0, hM.jsxs)("div", {
+               ref: zM,
+               className: jM()("DocsQteStage", {
+                 Playing: "playing" === iM
+               }),
+               tabIndex: "playing" === iM ? 0 : -1,
+               role: "playing" === iM ? "button" : void 0,
+               "aria-label": "playing" === iM ? `${rM} quick time event: click or press Space` : void 0,
+               onPointerDown: MM => {
+ ... (63 more added lines; see GitHub link above)
```

#### 100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L6558-L15037` → after: `L1571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1571) · [Before (L6558-L15037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L6558-L15037)

```diff
-     function dL(GG, bG) {
-       var ZG;
-       const wG = null !== (ZG = hL(bG)) && void 0 !== ZG ? ZG : 0;
-       (429 === bG.status || QL(wG) && 0 === KL(bG, "ratelimit-remaining")) && fL.markFull(GG, Date.now(), wG)
-     }
- 
-     function JL(GG) {
-       const bG = Date.now(),
-         ZG = fL.freeAt(GG, bG) - bG;
-       return ZG <= 0 ? null : QL(ZG) ? "unavailable" : "busy"
-     }
- 
-     function rL(GG, bG) {
-       return `${function(GG){var bG;if("string"===typeof GG)return GG;if(429!==GG.status)return`http-${GG.status}`;if(QL(null!==(bG=hL(GG))&&void 0!==bG?bG:0))return"yearly-limit";const ZG=KL(GG,"retry-after");return null===ZG?"busy":`busy-ra${ZG}`}(bG)}__${GG.replace(/[^A-Za-z0- … [truncated]
-     }
-     const zL = new class {
- ... (8464 more removed lines; see GitHub link above)
+         function Qi(MM) {
```

#### 101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15039-L15040` → after: `L1573-L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1573-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1573-L1576) · [Before (L15039-L15040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L15039-L15040)

```diff
-             path: ZG,
-             text: wG
+             level: rM,
+             text: iM,
+             anchor: OM,
+             className: SM
```

#### 102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L15042-L16788` → after: `L1578-L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR1578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L1578-L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/92.js#L1578-L7325) · [Before (L15042-L16788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/92.js#L15042-L16788)

```diff
-           return (null !== (bG = vG[ZG]) && void 0 !== bG ? bG : "") === wG
-         }))) {
-         var yG;
-         const GG = (null !== (yG = wG.until) && void 0 !== yG ? yG : 0) - Date.now();
-         if (GG <= 0) return void gb(SG);
-         const bG = setTimeout((() => {
-           gb((GG => [...GG]))
-         }), GG);
-         return () => {
-           clearTimeout(bG)
-         }
-       }
-       if (void 0 !== wG.opensPath && wG.opensPath !== aG) {
-         var kG;
-         (null === (kG = gZ.current) || void 0 === kG ? void 0 : kG.id) !== wG.id && (gZ.current = {
-           id: wG.id,
- ... (1731 more removed lines; see GitHub link above)
+           const aM = `h${Math.min(rM,6)}`;
+           return (0, hM.jsxs)(aM, {
+                 id: OM,
+                 className: jM()("DocsHeading", SM),
+                 children: [(0, hM.jsx)(Cr, {
+                       text: iM
+                     }), (0, hM.jsx)("a", {
+                         className: "DocsHeadingAnchor",
+                         href: `#${OM}`,
+                         "aria-label": `Link to ${iM.replace(/`/g,"")}`,children:"#"})]})}function zi(MM){let{items:rM,ordered:iM}=MM;const OM=iM?"ol":"ul";return(0,hM.jsx)(OM,{className:"DocsList",children:rM.map(((MM,rM)=>(0,hM.jsxs)("li",{children:[(0,hM.jsx)(Cr,{text:MM.text}) … [truncated]
+                           1,
+                           2
+                         })\ s * ([ ^ `]+?)\s*\1$/);return rM?rM[2]:null}function ei(MM){return"paragraph"===MM.kind&&""===MM.text.trim()}function bi(MM){const rM={name:MM.heading.text,description:[],params:[],returns:null};let iM="description";for(const SM of MM.blocks)if(!ei(SM) … [truncated]
+                               name: MM.trim()
+                             }))))): "table" === MM.kind && null !== (rM = MM.header[0]) && void 0 !== rM && rM.startsWith("Song") ? MM.rows.map((MM => {
+                               let [rM, iM] = MM;
+ ... (5732 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/93.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/93.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b)

#### 1. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L4-L132` → after: `L4-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L4-L23) · [Before (L4-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L4-L132)

```diff
-   41687: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       DOCS_AGENT_PART_CHARS: () => Pb.b,
-       DOCS_LLMS_FULL_TXT_PATH: () => Pb.c,
-       DOCS_LLMS_TXT_PATH: () => Pb.e,
-       DOCS_LLMS_TXT_URL: () => Pb.f,
-       ROOT_LLMS_TXT_PATH: () => Pb.h,
-       allGamemodeSettings: () => wG.d,
-       arcadeModeStaticConfig: () => hG.e,
-       arenaStaticConfig: () => Sb,
-       backroomsStaticConfig: () => wb.d,
-       battleBoxStaticConfig: () => Ub,
-       bedwarsStaticConfig: () => FG.c,
-       bloxdAggregatorConfig: () => kG.d,
-       bloxdPreprodAggregatorConfig: () => UG.e,
-       bloxdStagingAggregatorConfig: () => YG.c,
- ... (113 more removed lines; see GitHub link above)
+   5121: MM => {
+     function rM(MM) {
+       return MM instanceof Map ? MM.clear = MM.delete = MM.set = function() {
+         throw new Error("map is read-only")
+       } : MM instanceof Set && (MM.add = MM.clear = MM.delete = function() {
+         throw new Error("set is read-only")
+       }), Object.freeze(MM), Object.getOwnPropertyNames(MM).forEach((iM => {
+         const OM = MM[iM],
+           SM = typeof OM;
+         "object" !== SM && "function" !== SM || Object.isFrozen(OM) || rM(OM)
+       })), MM
+     }
+     class iM {
+       constructor(MM) {
+         void 0 === MM.data && (MM.data = {}), this.data = MM.data, this.isMatchIgnored = !1
+       }
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L135-L136` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L26) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L135-L136)

```diff
-       var bG, ZG;
-       return null !== (bG = null === (ZG = (0, wG.p)(GG)) || void 0 === ZG ? void 0 : ZG.defaultListedVariation) && void 0 !== bG ? bG : GG
+       return MM.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
```

#### 3. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L138-L201` → after: `L28-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L28-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L28-L203) · [Before (L138-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L138-L201)

```diff
-     var LG = ZG(973),
-       yG = ZG(999),
-       kG = ZG(743),
-       UG = ZG(736),
-       YG = ZG(739),
-       VG = ZG(729),
-       pG = ZG(722),
-       fG = ZG(754),
-       QG = ZG(779),
-       KG = ZG(760),
-       hG = ZG(768),
-       dG = ZG(773),
-       JG = ZG(776),
-       rG = ZG(784),
-       zG = ZG(789),
-       EG = ZG(791),
- ... (48 more removed lines; see GitHub link above)
+ 
+     function SM(MM) {
+       const rM = Object.create(null);
+       for (const jM in MM) rM[jM] = MM[jM];
+       for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
+       return OM.forEach((function(MM) {
+         for (const iM in MM) rM[iM] = MM[iM]
+       })), rM
+     }
+     const jM = MM => !!MM.scope;
+     class aM {
+       constructor(MM, rM) {
+         this.buffer = "", this.classPrefix = rM.classPrefix, MM.walk(this)
+       }
+       addText(MM) {
+         this.buffer += OM(MM)
+ ... (160 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L203-L214` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L205-L206) · [Before (L203-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L203-L214)

```diff
-         type: "Arena",
-         title: "Goldrush",
-         description: "Who is the best miner?\nMine gold and deposit it at your spawn, but beware of others killing you",
-         smallPicture: "goldrushThumbnail",
-         largePicture: "goldrushThumbnailLarge",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         JL: "\\\\[\\s\\S]",
+         relevance: 0
```

#### 5. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L217-L225` → after: `L209-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L209-L213) · [Before (L217-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L217-L225)

```diff
-         type: "Arena",
-         title: "Walls",
-         description: "Prepare with your team before the walls comes down and you need to fight to the death!",
-         smallPicture: "wallsThumbnail2",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         scope: "string",
+         JL: "'",
+         end: "'",
+         illegal: "\\n",
+         contains: [bM]
```

#### 6. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L228-L244` → after: `L216-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L216-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L216-L220) · [Before (L228-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L228-L244)

```diff
-         type: "Arena",
-         title: "Dodge Bow",
-         description: "Runners use speed and cover to survive until the timer ends. Hunters use bows, trying to eliminate all runners before time runs out.",
-         smallPicture: "image-c",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         firebaseConfig: {
-           apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-           projectId: "bloxd-ee1aa",
-           storageBucket: "bloxd-ee1aa.appspot.com",
-           messagingSenderId: "758847442742",
-           appId: "1:758847442742:web:65e726de81c0cd0bf02d97",
-           measurementId: "G-KYV287K7XD"
-         },
- ... (1 more removed lines; see GitHub link above)
+         scope: "string",
+         JL: '"',
+         end: '"',
+         illegal: "\\n",
+         contains: [bM]
```

#### 7. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L246-L264` → after: `L222-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L222-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L222-L239) · [Before (L246-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L246-L264)

```diff
-       Ub = {
-         type: "Arena",
-         title: "BattleBox",
-         description: "Battle other teams in rounds!",
-         largePicture: "bloxd_battlebox_thumbnail_large",
-         smallPicture: "bloxd_battlebox_thumbnail_small",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         countdownInformation: {
-           type: "releaseCountdown",
-           previewText: "general:comingSoon",
-           countdownStartTime: new Date("2025-08-13T12:00:00Z"),
-           countdownToTime: new Date("2025-08-18T13:30:00Z")
-         },
- ... (3 more removed lines; see GitHub link above)
+       gM = function(MM, rM) {
+         const iM = SM({
+           scope: "comment",
+           JL: MM,
+           end: rM,
+           contains: []
+         }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
+         iM.contains.push({
+           scope: "doctag",
+           JL: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
+           end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
+           excludeBegin: !0,
+           relevance: 0
+         });
+         const OM = JM("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
+         return iM.contains.push({
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L267-L278` → after: `L245-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L245-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L245-L247) · [Before (L267-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L267-L278)

```diff
-         type: "Simulator",
-         title: "game:petSim",
-         description: "game:petSimDescription",
-         smallPicture: "bloxd_pet_sim_thumbnail_small_1",
-         largePicture: "bloxd_pet_sim_thumbnail_large_1",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         scope: "number",
+         JL: GM,
+         relevance: 0
```

#### 9. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L281-L289` → after: `L250-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L250-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L250-L252) · [Before (L281-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L281-L289)

```diff
-         type: "Shooting",
-         title: "Defusal",
-         description: "Defuse or detonate the spike!",
-         smallPicture: "thumbnail",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         scope: "number",
+         JL: CM,
+         relevance: 0
```

#### 10. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L292-L299` → after: `L255-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L255-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L255-L257) · [Before (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L292-L299)

```diff
-         type: "Arena",
-         title: "Capture the Flag",
-         description: "Classic 'Capture the Flag' with kits.",
-         smallPicture: "ctf",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: []
+         scope: "number",
+         JL: eM,
+         relevance: 0
```

#### 11. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L302-L318` → after: `L260-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L260-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L260-L268) · [Before (L302-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L302-L318)

```diff
-         type: "Arena",
-         title: "Conqueror",
-         description: "Make tactical choices to conquer your enemies!",
-         smallPicture: "duos_combined_pic",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         firebaseConfig: {
-           apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-           projectId: "bloxd-ee1aa",
-           storageBucket: "bloxd-ee1aa.appspot.com",
-           messagingSenderId: "758847442742",
-           appId: "1:758847442742:web:c3d095738f8bde05f02d97",
-           measurementId: "G-SCYFMGGGEW"
-         },
- ... (1 more removed lines; see GitHub link above)
+         scope: "regexp",
+         JL: /\/(?=[^/\n]*\/)/,
+         end: /\/[gimuy]*/,
+         contains: [bM, {
+           JL: /\[/,
+           end: /\]/,
+           relevance: 0,
+           contains: [bM]
+         }]
```

#### 12. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L321-L331` → after: `L271-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L271-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L271-L273) · [Before (L321-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L321-L331)

```diff
-         type: "Arena",
-         title: "Capture the Flag",
-         description: "Capture the flag to win! It's that simple!",
-         smallPicture: "bloxd_capture_the_flag_thumbnail_small",
-         largePicture: "bloxd_capture_the_flag_thumbnail_large",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: []
+         scope: "title",
+         JL: EM,
+         relevance: 0
```

#### 13. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L334-L342` → after: `L276-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L276-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L276-L278) · [Before (L334-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L334-L342)

```diff
-         type: "Survival",
-         title: "Survival Royale",
-         description: "Fortnite but way better ofc ;)",
-         smallPicture: "survivalRoyale",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         scope: "title",
+         JL: UM,
+         relevance: 0
```

#### 14. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L345-L359` → after: `L281-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L281-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L281-L303) · [Before (L345-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L345-L359)

```diff
-         type: "Parkour",
-         title: "Parkour Builder",
-         description: "Race through a parkour map with a twist - each round, you get to add a new block to the course!",
-         smallPicture: "uchThumbnail",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         visibleBetweenDates: {
-           startDate: new Date("2025-10-24T14:00:00Z"),
-           endDate: new Date("2025-10-25T14:00:00Z")
-         },
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+         JL: "\\.\\s*" + UM,
+         relevance: 0
+       };
+     var YM = Object.freeze({
+       __proto__: null,
+       APOS_STRING_MODE: wM,
+       BACKSLASH_ESCAPE: bM,
+       BINARY_NUMBER_MODE: DM,
+       BINARY_NUMBER_RE: eM,
+       COMMENT: gM,
+       C_BLOCK_COMMENT_MODE: RM,
+       C_LINE_COMMENT_MODE: uM,
+       C_NUMBER_MODE: sM,
+       C_NUMBER_RE: CM,
+       END_SAME_AS_BEGIN: function(MM) {
+         return Object.assign(MM, {
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L361-L370` → after: `L305-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L305-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L305-L312) · [Before (L361-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L361-L370)

```diff
-       db = {
-         type: "Arena",
-         title: "The Pit",
-         description: "Jump in the pit, beat everyone else!",
-         smallPicture: "thePitThumbnail",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+       HASH_COMMENT_MODE: pM,
+       IDENT_RE: EM,
+       MATCH_NOTHING_RE: /\b\B/,
+       METHOD_GUARD: fM,
+       NUMBER_MODE: WM,
+       NUMBER_RE: GM,
+       PHRASAL_WORDS_MODE: {
+         JL: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
```

#### 16. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L372-L383` → after: `L314-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L314-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L314-L328) · [Before (L372-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L372-L383)

```diff
-       Jb = {
-         type: "Racing",
-         title: "Rush Racing",
-         description: "Compete against other players in a fast-paced racing game!",
-         smallPicture: "racing_thumbnail_compressed",
-         thumbnailUseLongRatio: !1,
-         badges: [{
-           type: "limitedTimeGame"
-         }],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         gameMonId: "wzap3u9jp9ki78o4dohtfdfnklxyci19"
+       QUOTE_STRING_MODE: tM,
+       REGEXP_MODE: kM,
+       RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
+       SHEBANG: function() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const rM = /^#![ ]*\//;
+         return MM.binary && (MM.JL = hM(rM, /.*\b/, MM.binary, /\b.*/)), SM({
+           scope: "meta",
+           JL: rM,
+           end: /$/,
+           relevance: 0,
+           "on:begin": (MM, rM) => {
+             0 !== MM.index && rM.ignoreMatch()
+           }
+         }, MM)
```

#### 17. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L385-L411` → after: `L330-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L330-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L330-L333) · [Before (L385-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L385-L411)

```diff
-       rb = {
-         title: "Prison",
-         type: "Roleplay",
-         description: "Survive in maximum security prison!",
-         smallPicture: "prison_thumbnail",
-         thumbnailUseLongRatio: !1,
-         badges: [],
-         useRejoinLastLobbyButton: !1,
-         additionalMetaTags: [],
-         firebaseConfig: {
-           apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-           projectId: "bloxd-ee1aa",
-           storageBucket: "bloxd-ee1aa.appspot.com",
-           messagingSenderId: "758847442742",
-           appId: "1:758847442742:web:bd6d1461bd147389f02d97",
-           measurementId: "G-3NHZG8TJSS"
- ... (11 more removed lines; see GitHub link above)
+       TITLE_MODE: ZM,
+       UNDERSCORE_IDENT_RE: UM,
+       UNDERSCORE_TITLE_MODE: oM
+     });
```

#### 18. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L413-L414` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L335-L336) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L413-L414)

```diff
-     function mb(GG, bG, ZG) {
-       return `<${GG}><h2>${(0,Cb.e)(bG)}</h2>${ZG}</${GG}>`
+     function NM(MM, rM) {
+       "." === MM.input[MM.index - 1] && rM.ignoreMatch()
```

#### 19. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L417-L418` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L339-L340) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L417-L418)

```diff
-     function Ib(GG) {
-       return GG.map((GG => `<p>${(0,Cb.e)(GG)}</p>`)).join("")
+     function AM(MM, rM) {
+       void 0 !== MM.className && (MM.scope = MM.className, delete MM.className)
```

#### 20. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L421-L422` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L343-L344) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L421-L422)

```diff
-     function Fb(GG) {
-       return `<ul>${GG.map((GG=>`<li>${GG}</li>`)).join("")}</ul>`
+     function xM(MM, rM) {
+       rM && MM.beginKeywords && (MM.JL = "\\b(" + MM.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", MM.__beforeBegin = NM, MM.keywords = MM.keywords || MM.beginKeywords, delete MM.beginKeywords, void 0 === MM.relevance && (MM.relevance = 0))
```

#### 21. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L425-L426` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L347-L348) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L425-L426)

```diff
-     function vb(GG) {
-       return Fb(GG.map(Cb.e))
+     function vM(MM, rM) {
+       Array.isArray(MM.illegal) && (MM.illegal = JM(...MM.illegal))
```

#### 22. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L429-L434` → after: `L351-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L351-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L351-L355) · [Before (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L429-L434)

```diff
-     function ab(GG, bG) {
-       return Fb(GG.similarGames.map((GG => {
-         var ZG, SG;
-         const LG = null !== (ZG = null === (SG = Wb.e[GG]) || void 0 === SG ? void 0 : SG.name) && void 0 !== ZG ? ZG : bG(wG.d[GG].title);
-         return `<a href="${(0,Cb.e)((0,Cb.B)(GG))}">${(0,Cb.e)(LG)}</a>`
-       })))
+     function FM(MM, rM) {
+       if (MM.match) {
+         if (MM.JL || MM.end) throw new Error("begin & end are not supported with match");
+         MM.JL = MM.match, delete MM.match
+       }
```

#### 23. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L436-L448` → after: `L357-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L357-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L357-L417) · [Before (L436-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L436-L448)

```diff
-     async function cb(GG, bG) {
-       const ZG = (0, Cb.H)(GG);
-       if (!ZG) return null;
-       const wG = await (0, Wb.j)(ZG),
-         SG = (0, Wb.f)(wG),
-         LG = wG.faq.map((GG => {
-           let {
-             question: bG,
-             answer: ZG
-           } = GG;
-           return `<h3>${(0,Cb.e)(bG)}</h3><p>${(0,Cb.e)(ZG)}</p>`
-         })).join("");
-       return `<main style="position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)"><article>${[`<header><h1>${(0,Cb.e)(wG.name)}</h1><p>${(0,Cb.e)(wG.description)}</p></header>`,mb("section",SG.whatIs,Ib(wG.whatIs)),mb("section",SG.howToPlay,Ib(wG.howToPlay)) … [truncated]
+ 
+     function BM(MM, rM) {
+       void 0 === MM.relevance && (MM.relevance = 1)
+     }
+     const XM = (MM, rM) => {
+         if (!MM.beforeMatch) return;
+         if (MM.starts) throw new Error("beforeMatch cannot be used with starts");
+         const iM = Object.assign({}, MM);
+         Object.keys(MM).forEach((rM => {
+           delete MM[rM]
+         })), MM.keywords = iM.keywords, MM.JL = hM(iM.beforeMatch, LM(iM.JL)), MM.starts = {
+           relevance: 0,
+           contains: [Object.assign(iM, {
+             endsParent: !0
+           })]
+         }, MM.relevance = 0, delete iM.beforeMatch
+ ... (45 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L475` → after: `L421-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L421-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L421-L449) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L475)

```diff
-       return GG || "index"
+       ! function(MM) {
+         MM.scope && "object" === typeof MM.scope && null !== MM.scope && (MM.beginScope = MM.scope, delete MM.scope)
+       }(MM), "string" === typeof MM.beginScope && (MM.beginScope = {
+           _wrap: MM.beginScope
+         }), "string" === typeof MM.endScope && (MM.endScope = {
+           _wrap: MM.endScope
+         }),
+         function(MM) {
+           if (Array.isArray(MM.JL)) {
+             if (MM.skip || MM.excludeBegin || MM.returnBegin) throw VM("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), rr;
+             if ("object" !== typeof MM.beginScope || null === MM.beginScope) throw VM("beginScope must be object"), rr;
+             ir(MM, MM.JL, {
+               key: "beginScope"
+             }), MM.JL = lM(MM.JL, {
+               joinWith: ""
+             })
+ ... (13 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L479` → after: `L453-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L453-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L453-L546) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L479)

```diff
-       return `/docs/${YG(GG)}.md`
+       function rM(rM, iM) {
+         return new RegExp(zM(rM), "m" + (MM.case_insensitive ? "i" : "") + (MM.unicodeRegex ? "u" : "") + (iM ? "g" : ""))
+       }
+       class iM {
+         constructor() {
+           this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
+         }
+         addRule(MM, rM) {
+           rM.position = this.position++, this.matchIndexes[this.matchAt] = rM, this.regexes.push([rM, MM]), this.matchAt += dM(MM) + 1
+         }
+         compile() {
+           0 === this.regexes.length && (this.exec = () => null);
+           const MM = this.regexes.map((MM => MM[1]));
+           this.matcherRe = rM(lM(MM, {
+             joinWith: "|"
+           }), !0), this.lastIndex = 0
+ ... (78 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L482-L483` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L549-L550) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L482-L483)

```diff
-     function pG(GG, bG) {
-       return `/docs/${YG(GG)}/${bG+1}.md`
+     function jr(MM) {
+       return !!MM && (MM.endsWithParent || jr(MM.starts))
```

#### 27. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L485` → after: `L552-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L552-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L552-L991) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L485)

```diff
-     const fG = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;
+     class ar extends Error {
+       constructor(MM, rM) {
+         super(MM), this.name = "HTMLInjectionError", this.html = rM
+       }
+     }
+     const Pr = OM,
+       nr = SM,
+       Qr = Symbol("nomatch"),
+       zr = function(MM) {
+         const OM = Object.create(null),
+           SM = Object.create(null),
+           jM = [];
+         let aM = !0;
+         const PM = "Could not find the language '{}', did you forget to load/include a language module?",
+           nM = {
+             disableAutodetect: !0,
+ ... (424 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L488-L491` → after: `L994-L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L994-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L994-L1322) · [Before (L488-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L488-L491)

```diff
-       const bG = fG.exec(GG);
-       return null === bG ? null : {
-         name: bG[1],
-         part: void 0 === bG[2] ? null : Number(bG[2])
+       const rM = MM.regex,
+         iM = OM,
+         LM = "<>",
+         mM = "</>",
+         HM = {
+           JL: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (MM, rM) => {
+             const iM = MM[0].length + MM.index,
+               OM = MM.input[iM];
+             if ("<" === OM || "," === OM) return void rM.ignoreMatch();
+             let SM;
+             ">" === OM && (((MM, rM) => {
+               let {
+                 after: iM
+               } = rM;
+ ... (313 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L494` → after: `L1325-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L1325-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L1325-L1337) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L494)

```diff
-     const KG = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;
+   },
+   5134: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => mM
+     });
+     const OM = "[A-Za-z$_][0-9A-Za-z$_]*",
+       SM = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugge … [truncated]
+       jM = ["true", "false", "null", "undefined", "NaN", "Infinity"],
+       aM = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigU … [truncated]
+       PM = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
+       nM = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
+       QM = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
+       zM = [].concat(nM, aM, PM);
```

#### 30. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L497-L500` → after: `L1340-L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L1340-L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L1340-L1669) · [Before (L497-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L497-L500)

```diff
-       const bG = KG.exec(GG);
-       if (null === bG) return null;
-       const [, ZG = "", wG] = bG;
-       return void 0 === wG ? VG(ZG) : pG(ZG, Number(wG) - 1)
+       const rM = MM.regex,
+         iM = OM,
+         LM = "<>",
+         mM = "</>",
+         HM = {
+           JL: /<[A-Za-z0-9\\._:-]+/,
+           end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
+           isTrulyOpeningTag: (MM, rM) => {
+             const iM = MM[0].length + MM.index,
+               OM = MM.input[iM];
+             if ("<" === OM || "," === OM) return void rM.ignoreMatch();
+             let SM;
+             ">" === OM && (((MM, rM) => {
+               let {
+                 after: iM
+               } = rM;
+ ... (314 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/93.js` (Changed code · before: `L504` → after: `L1673-L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205bR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-f3db39c2f0444b32bf243400ff6c9545d2e2dc22ac36423a8ba29c521279205b) · [After (L1673-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/93.js#L1673-L1723) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/93.js#L504)

```diff
-       return `/docsHtml/${YG(GG)}.html`
+       const rM = MM.regex,
+         iM = LM(MM),
+         aM = OM,
+         PM = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
+         nM = {
+           JL: [/namespace/, /\s+/, MM.IDENT_RE],
+           beginScope: {
+             1: "keyword",
+             3: "title.class"
+           }
+         },
+         mM = {
+           beginKeywords: "interface",
+           end: /\{/,
+           excludeEnd: !0,
+           keywords: {
+ ... (35 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/94.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/94.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030)

#### 1. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L3)

```diff
- export const ids = [10, 13, 15, 16, 18, 20, 21, 23, 24, 94, 137, 138];
+ export const ids = [94];
```

#### 2. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L5-L28760` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L4) · [Before (L5-L28760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L5-L28760)

```diff
-   39950: () => {
-     "undefined" === typeof window || window.global || (window.global = window.globalThis || {})
-   },
-   39964: (GG, bG, ZG) => {
-     var wG = [],
-       SG = [],
-       LG = [],
-       yG = [],
-       kG = [],
-       UG = [],
-       YG = [],
-       VG = [],
-       pG = [],
-       fG = [],
-       QG = [],
-       KG = [],
- ... (28740 more removed lines; see GitHub link above)
+   5142: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28762-L28765` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L6-L15) · [Before (L28762-L28765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28762-L28765)

```diff
-       c: () => UG,
-       e: () => kG,
-       i: () => YG,
-       j: () => yG
+       C: () => mM,
+       d: () => OM,
+       h: () => aM,
+       j: () => dM,
+       l: () => JM,
+       n: () => PM,
+       q: () => SM,
+       r: () => jM,
+       v: () => hM,
+       z: () => HM
```

#### 4. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28767-L28769` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L17) · [Before (L28767-L28769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28767-L28769)

```diff
-     var wG = ZG(6636);
-     const SG = new Map,
-       LG = new Map;
+     const OM = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;
```

#### 5. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28772-L28776` → after: `L20-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L20-L24) · [Before (L28772-L28776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28772-L28776)

```diff
-       const bG = JSON.stringify(GG),
-         ZG = SG.get(bG);
-       if (void 0 !== ZG) return ZG;
-       const wG = SG.size + 1;
-       return SG.set(bG, wG), LG.set(wG, GG), wG
+       try {
+         return decodeURIComponent(MM.slice(1))
+       } catch {
+         return MM.slice(1)
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28780` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L28) · [Before (L28780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28780)

```diff
-       return void 0 === GG ? void 0 : LG.get(GG)
+       return MM.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
```

#### 7. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28784-L28788` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L33) · [Before (L28784-L28788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28784-L28788)

```diff
-       const ZG = kG(GG);
-       if (!ZG) throw new Error(`No shader pack code ${GG} for a ${bG} program`);
-       if (ZG.program !== bG) throw new Error(`Shader pack code ${GG} is ${ZG.program} code, for a ${bG} program`);
-       if (ZG.strict && ZG.hooks.vertex) throw new Error(`Shader pack code ${GG} is strict and has a vertex hook, which strict mode never runs`);
-       return ZG
+       return 2 === MM.length ? rM.replace(/^ (.*) $/, "$1") : rM
```

#### 8. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28791-L28808` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L36-L37) · [Before (L28791-L28808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28791-L28808)

```diff
-     function YG(GG, bG, ZG) {
-       if ("off" === bG) return null;
-       const SG = "strict" === bG,
-         LG = GG.find((GG => GG.key.strict === SG && GG.key.program === ZG));
-       return !LG || (0, wG.i)(LG) ? null : {
-         strict: SG,
-         program: ZG,
-         code: LG.moduleCode,
-         hooks: {
-           ...LG.hooks
-         },
-         sceneDepth: LG.sceneDepth,
-         sunShadow: LG.sunShadow,
-         airShadow: LG.airShadow,
-         movesVertices: LG.movesVertices,
-         discards: LG.discards,
- ... (2 more removed lines; see GitHub link above)
+     function nM(MM) {
+       return "" === MM.trim()
```

#### 9. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28834` → after: `L41-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L41-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L41-L43) · [Before (L28834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28834)

```diff
-       return [Math.floor(GG[0]) - SG[0], Math.floor(GG[1]) - SG[1], Math.floor(GG[2]) - SG[2]]
+       const rM = [];
+       for (const iM of MM.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) rM.length > 0 && rM[rM.length - 1].endsWith("\\") ? rM[rM.length - 1] += `|${iM}` : rM.push(iM);
+       return rM.map((MM => MM.trim().replaceAll("\\|", "|")))
```

#### 10. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28837-L28838` → after: `L47-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L47-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L47-L61) · [Before (L28837-L28838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28837-L28838)

```diff
-     function pG(GG, bG) {
-       const ZG = wG,
+     function LM(MM) {
+       const rM = [],
+         iM = [{
+           indent: -1,
+           items: rM
+         }];
+       let OM = null;
+       for (const SM of MM) {
+         const MM = SM.match(zM);
+         if (!MM) {
+           OM && (OM.text += ` ${SM.trim()}`);
+           continue
+         }
+         const rM = MM[1].replace(/\t/g, "  ").length;
+         for (; rM <= iM[iM.length - 1].indent;) iM.pop();
```

#### 11. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28840-L28853` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L63-L67) · [Before (L28840-L28853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28840-L28853)

```diff
-           lo: [0, 0, 0],
-           size: [ZG[0], ZG[1], ZG[2]]
-         };
-       if (!GG) return [SG];
-       const LG = [];
-       for (let wG = 0; wG < 3; wG++) {
-         const yG = bG[wG] - GG[wG];
-         if (Math.abs(yG) >= ZG[wG]) return [SG];
-         if (0 === yG) continue;
-         const kG = [0, 0, 0],
-           UG = [ZG[0], ZG[1], ZG[2]];
-         kG[wG] = yG > 0 ? ZG[wG] - yG : 0, UG[wG] = Math.abs(yG), LG.push({
-           lo: kG,
-           size: UG
+           text: MM[3].trim(),
+           children: []
+         }, iM[iM.length - 1].items.push(OM), iM.push({
+           indent: rM,
+           items: OM.children
```

#### 12. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28876-L28905` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L74-L75) · [Before (L28876-L28905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28876-L28905)

```diff
-       const bG = Math.hypot(GG[0], GG[1], GG[2]);
-       if (bG < 1e-4) return [...QG];
-       const ZG = GG[1] >= 0 ? 1 : -1;
-       return [ZG * GG[0] / bG, ZG * GG[1] / bG, ZG * GG[2] / bG]
-     }
- 
-     function hG(GG, bG, ZG) {
-       if (ZG.length > UG) throw new Error(`Sun shadows: ${ZG.length} volume boxes, past ${UG}`);
-       const wG = new DataView(GG, 0, YG);
-       for (let LG = 0; LG < 3; LG++) wG.setFloat32(4 * LG, bG[LG], !0);
-       wG.setUint32(12, ZG.length, !0);
-       let SG = 0;
-       return ZG.forEach(((GG, bG) => {
-         let {
-           lo: ZG,
-           size: LG
- ... (14 more removed lines; see GitHub link above)
+       const rM = MM.replace(/\r\n/g, "\n").split("\n"),
+         iM = [];
```

#### 13. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28907` → after: `L77-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L77-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L77-L149) · [Before (L28907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28907)

```diff
-       0 !== yG && (kG = 1 / yG), GG[bG] = ZG * kG, GG[bG + 1] = wG * kG, GG[bG + 2] = SG * kG, GG[bG + 3] = LG * kG
+       for (; OM < rM.length;) {
+         const MM = rM[OM];
+         if (nM(MM)) {
+           OM++;
+           continue
+         }
+         const SM = MM.match(/^\s*```\s*(\w*)\s*$/);
+         if (SM) {
+           const MM = [];
+           for (OM++; OM < rM.length && !/^\s*```\s*$/.test(rM[OM]);) MM.push(rM[OM]), OM++;
+           OM++, iM.push({
+             kind: "code",
+             lang: SM[1] || "text",
+             code: MM.join("\n").replace(/\s+$/, "")
+           });
+           continue
+ ... (57 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28910-L28915` → after: `L152-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L152-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L152-L191) · [Before (L28910-L28915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28910-L28915)

```diff
-     function LG(GG, bG, ZG, wG, SG) {
-       for (let LG = 0; LG < 24; LG += 4) {
-         const yG = GG[LG],
-           kG = GG[LG + 1],
-           UG = GG[LG + 2];
-         if (yG * (yG >= 0 ? bG + SG : bG) + kG * (kG >= 0 ? ZG + SG : ZG) + UG * (UG >= 0 ? wG + SG : wG) + GG[LG + 3] < 0) return !1
+     function HM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+       const iM = mM(MM);
+       let OM = "";
+       const SM = [],
+         jM = [],
+         aM = new Map;
+       for (const QM of iM) {
+         if ("heading" === QM.kind) {
+           var PM;
+           const MM = (null !== (PM = aM.get(QM.anchor)) && void 0 !== PM ? PM : 0) + 1;
+           aM.set(QM.anchor, MM), MM > 1 && (QM.anchor = `${QM.anchor}-${MM}`)
+         }
+         if ("heading" === QM.kind && 1 === QM.level && !OM) {
+           OM = QM.text;
+           continue
+ ... (24 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28932` → after: `L196-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L196-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L196-L202) · [Before (L28932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28932)

```diff
-       return "object" === typeof GG && null !== GG && "startStep" in GG ? GG.startStep : null
+       return [{
+         heading: null,
+         blocks: MM.intro
+       }, ...MM.sections.map((MM => ({
+         heading: MM.heading,
+         blocks: MM.blocks
+       })))]
```

#### 16. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28946` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L206) · [Before (L28946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28946)

```diff
-       return wG && LG(GG), GG
+       return MM.flatMap((MM => "code" === MM.kind ? [MM] : "quote" === MM.kind ? JM(MM.blocks) : []))
```

#### 17. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28950-L28952` → after: `L210-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L210-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L210-L225) · [Before (L28950-L28952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28950-L28952)

```diff
-       if ("object" === typeof GG && null !== GG && !Object.isFrozen(GG)) {
-         Object.freeze(GG);
-         for (const bG of Object.keys(GG)) LG(GG[bG])
+       switch (MM.kind) {
+         case "heading":
+         case "paragraph":
+           return MM.text;
+         case "code":
+           return MM.code;
+         case "table":
+           return [MM.header, ...MM.rows].map((MM => MM.join(" "))).join(" ");
+         case "list": {
+           const rM = MM => MM.map((MM => `${MM.text} ${rM(MM.children)}`)).join(" ");
+           return rM(MM.items)
+         }
+         case "quote":
+           return MM.blocks.map(dM).join(" ");
+         case "rule":
+           return ""
```

#### 18. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28956` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L229) · [Before (L28956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28956)

```diff
-   39642: (GG, bG, ZG) => {
+   6966: (MM, rM, iM) => {
```

#### 19. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28958-L28959` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L231-L233) · [Before (L28958-L28959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28958-L28959)

```diff
-       e: () => LG,
-       g: () => yG
+       d: () => LM,
+       f: () => aM,
+       h: () => PM
```

#### 20. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L28961-L38311` → after: `L235-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L235-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L235-L239) · [Before (L28961-L38311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L28961-L38311)

```diff
-     var wG = ZG(352),
-       SG = ZG(39651);
-     const LG = {
-       "Maple Wood Planks": [{
-         requires: [{
-           items: wG.od,
-           amt: 1
-         }],
-         produces: 4,
-         isStarterRecipe: !0
-       }],
-       "Aspen Wood Planks": [{
-         requires: [{
-           items: wG.y,
-           amt: 1
-         }],
- ... (9335 more removed lines; see GitHub link above)
+     iM(6963);
+     var OM = iM(44),
+       SM = iM(5142),
+       jM = iM(1303);
+     const aM = /\[([^\][\n]{1,200})\]\(([^)\s]{1,500})\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*)\*|`([^`]+)`/g;
```

#### 21. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38314-L38321` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L242) · [Before (L38314-L38321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38314-L38321)

```diff
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       const wG = {};
-       return bG.forEach((bG => {
-         wG[`${bG} ${GG}`] = [{
-           item: "Maple Wood Planks",
-           amt: ZG
-         }]
-       })), wG
+       return MM === rM ? MM : `${MM} (${rM})`
```

#### 22. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38324-L38333` → after: `L245-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L245-L257) · [Before (L38324-L38333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38324-L38333)

```diff
-     function YG(GG, bG, ZG) {
-       return {
-         [GG]: [{
-           requires: [{
-             items: [bG],
-             amt: ZG
-           }],
-           produces: 4,
-           station: "Artisan Bench"
-         }]
+     function nM(MM) {
+       const rM = [];
+       let iM = 0;
+       for (const OM of MM.matchAll(aM)) {
+         OM.index > iM && rM.push(MM.slice(iM, OM.index));
+         const [, SM, aM, nM, QM, zM, LM] = OM;
+         void 0 !== SM ? rM.push(PM(SM, aM)) : void 0 !== nM || void 0 !== QM ? rM.push((0, jM.jsx)("strong", {
+           children: null !== nM && void 0 !== nM ? nM : QM
+         }, OM.index)) : void 0 !== zM ? rM.push((0, jM.jsx)("em", {
+           children: zM
+         }, OM.index)) : rM.push((0, jM.jsx)("code", {
+           children: LM
+         }, OM.index)), iM = OM.index + OM[0].length
```

#### 23. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38338-L38351` → after: `L263-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L263-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L263-L272) · [Before (L38338-L38351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38338-L38351)

```diff
-       return YG(GG, bG, 3)
-     }
- 
-     function pG(GG, bG) {
-       return {
-         [GG]: [{
-           requires: [{
-             items: [bG],
-             amt: 5
-           }],
-           produces: 3,
-           station: "Workbench"
-         }]
-       }
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       const OM = MM.map(((MM, rM) => (0, jM.jsxs)("li", {
+         children: [nM(MM.text), MM.children.length > 0 && QM(MM.children, !1)]
+       }, rM)));
+       return rM ? (0, jM.jsx)("ol", {
+         start: iM,
+         children: OM
+       }) : (0, jM.jsx)("ul", {
+         children: OM
+       })
```

#### 24. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38355-L38363` → after: `L276-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L276-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L276-L318) · [Before (L38355-L38363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38355-L38363)

```diff
-       return {
-         [GG]: [{
-           requires: [{
-             items: [bG],
-             amt: 4
-           }],
-           produces: 1,
-           station: "Workbench"
-         }]
+       switch (MM.kind) {
+         case "heading":
+           return MM.level <= 2 ? (0, jM.jsx)("h3", {
+             children: nM(MM.text)
+           }, rM) : (0, jM.jsx)("h4", {
+             children: nM(MM.text)
+           }, rM);
+         case "paragraph":
+           return (0, jM.jsx)("p", {
+             children: nM(MM.text)
+           }, rM);
+         case "list":
+           return (0, jM.jsx)(OM.Fragment, {
+             children: QM(MM.items, MM.ordered)
+           }, rM);
+         case "quote":
+ ... (27 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38385-L38386` → after: `L323-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L323-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L323-L335) · [Before (L38385-L38386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38385-L38386)

```diff
-       var bG;
-       return null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : GG
+       let {
+         markdown: rM
+       } = MM, iM = 0;
+       return (0, jM.jsx)("div", {
+         className: "StudioAiAnswerText",
+         children: (0, SM.C)(rM).map(((MM, rM) => {
+           if ("list" !== MM.kind || !MM.ordered) return iM = 0, zM(MM, rM);
+           const SM = iM + 1;
+           return iM += MM.items.length, (0, jM.jsx)(OM.Fragment, {
+             children: QM(MM.items, !0, SM)
+           }, rM)
+         }))
+       })
```

#### 26. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38389` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L338) · [Before (L38389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38389)

```diff
-   39657: (GG, bG, ZG) => {
+   6956: (MM, rM, iM) => {
```

#### 27. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38391-L38392` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L340-L343) · [Before (L38391-L38392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38391-L38392)

```diff
-       e: () => LG,
-       i: () => kG
+       b: () => lM,
+       g: () => EM,
+       c: () => GM,
+       k: () => hM
```

#### 28. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38394-L38426` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L345-L348) · [Before (L38394-L38426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38394-L38426)

```diff
-     var wG = ZG(352),
-       SG = ZG(4479);
-     const LG = new Set(SG.o),
-       yG = new Map;
- 
-     function kG(GG, bG) {
-       let ZG = yG.get(bG);
-       void 0 === ZG && (ZG = new Map, yG.set(bG, ZG));
-       let SG = ZG.get(GG);
-       return void 0 === SG && (SG = `${GG}${(0,wG.B)(bG)}`, ZG.set(GG, SG)), SG
-     }
-   },
-   39683: (GG, bG, ZG) => {
-     var wG = {
-       "./bedwars/bedwarsClient": 39692,
-       "./bridgeBattle/bridgeBattleClient": 39699,
- ... (17 more removed lines; see GitHub link above)
+     var OM = iM(1215),
+       SM = iM(6905),
+       jM = iM(5273);
+     const aM = /\b(the prompt (says|asks|wants|tells)|the user (wants|asks|said)|my instructions(?! (?:below|above|here|in step))|the instructions (say|ask)|as instructed(?! (?:below|above|here|in step|by (?!the (?:prompt|user|system)\b))))\b/i;
```

#### 29. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38429` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L351) · [Before (L38429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38429)

```diff
-       return LG(GG).then(ZG)
+       return (0, jM.e)(MM, aM, (rM => !/^my/i.test(rM[0]) || !/follow $/i.test(MM.slice(0, rM.index)))).length > 0
```

#### 30. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38433-L38436` → after: `L358-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L358-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L358-L368) · [Before (L38433-L38436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38433-L38436)

```diff
-       return Promise.resolve().then((() => {
-         if (!ZG.o(wG, GG)) {
-           var bG = new Error("Cannot find module '" + GG + "'");
-           throw bG.code = "MODULE_NOT_FOUND", bG
+       return function(MM) {
+         const rM = [];
+         let iM = !1;
+         for (const OM of MM.split("\n")) {
+           if (/^\s*(```|~~~)/.test(OM)) {
+             iM = !iM;
+             continue
+           }
+           if (iM || /^\s*>/.test(OM)) continue;
+           const MM = OM.replace(/`[^`]*`/g, "code").replace(/"[^"]*"|\u201c[^\u201d]*\u201d/g, '"quote"').trim();
+           rM.push(...(0, SM.u)(MM))
```

#### 31. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38438-L38439` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L370-L371) · [Before (L38438-L38439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38438-L38439)

```diff
-         return wG[GG]
-       }))
+         return rM
+       }(MM).filter((MM => PM(MM) || QM.test(MM) && !nM.test(MM)))
```

#### 32. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38441-L38481` → after: `L373-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L373-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L373-L385) · [Before (L38441-L38481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38441-L38481)

```diff
-     SG.keys = () => Object.keys(wG), SG.resolve = LG, SG.id = 39683, GG.exports = SG
-   },
-   39208: (GG, bG, ZG) => {
-     var wG = {
-       "./animator.ts": 37429,
-       "./autoRemoveMesh.ts": 39210,
-       "./autoRotate.js": 39179,
-       "./bullet.js": 39219,
-       "./cameraShake.ts": 39221,
-       "./cape.ts": 39182,
-       "./crouchingHandler.ts": 39238,
-       "./doOnFirstTick.ts": 39230,
-       "./entityMultilineText.ts": 39247,
-       "./entityName.ts": 39270,
-       "./flashingMeshOverlay.js": 39283,
-       "./floating.ts": 39297,
- ... (25 more removed lines; see GitHub link above)
+     const mM = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
+       HM = [{
+         name: "Qwen3.6-27B",
+         temperature: .7,
+         reasoningEffort: "none"
+       }, {
+         name: "Qwen3.5-397B-A17B",
+         temperature: .7,
+         reasoningEffort: "none"
+       }, {
+         name: "Mistral-Small-3.2-24B-Instruct-2506",
+         temperature: .15
+       }];
```

#### 33. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38484-L38485` → after: `L388-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L388-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L388-L389) · [Before (L38484-L38485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38484-L38485)

```diff
-       var bG = LG(GG);
-       return ZG(bG)
+       const rM = HM.findIndex((rM => rM.name === MM));
+       return -1 === rM ? HM.length : rM
```

#### 34. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38487-L38491` → after: `L391-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L391-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L391-L395) · [Before (L38487-L38491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38487-L38491)

```diff
- 
-     function LG(GG) {
-       if (!ZG.o(wG, GG)) {
-         var bG = new Error("Cannot find module '" + GG + "'");
-         throw bG.code = "MODULE_NOT_FOUND", bG
+     const JM = 2500,
+       dM = 12e4;
+     class yM extends Error {
+       constructor(MM) {
+         super(`Studio AI chat ${MM}`), this.reason = MM
```

#### 35. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38519-L38522` → after: `L399-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L399-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L399-L411) · [Before (L38519-L38522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38519-L38522)

```diff
-     function LG(GG) {
-       if (!ZG.o(wG, GG)) {
-         var bG = new Error("Cannot find module '" + GG + "'");
-         throw bG.code = "MODULE_NOT_FOUND", bG
+     function lM(MM, rM) {
+       const iM = new AbortController,
+         OM = () => {
+           iM.abort()
+         },
+         SM = setTimeout(OM, MM);
+       return null !== rM && void 0 !== rM && rM.aborted && OM(), null === rM || void 0 === rM || rM.addEventListener("abort", OM, {
+         once: !0
+       }), {
+         signal: iM.signal,
+         clear: () => {
+           clearTimeout(SM), null === rM || void 0 === rM || rM.removeEventListener("abort", OM)
+         }
```

#### 36. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38554-L38556` → after: `L415-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L415-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L415-L457) · [Before (L38554-L38556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38554-L38556)

```diff
-     function SG(GG) {
-       var bG = LG(GG);
-       return ZG(bG)
+     function EM(MM, rM, iM) {
+       return new Promise(((SM, jM) => {
+         const aM = new AbortController,
+           PM = () => {
+             aM.abort(), jM((0, OM.f)(iM))
+           };
+         if (null !== iM && void 0 !== iM && iM.aborted) return void PM();
+         null === iM || void 0 === iM || iM.addEventListener("abort", PM, {
+           once: !0
+         });
+         const nM = HM.map((() => !1));
+         let QM = null;
+         const zM = HM.map((() => !1)),
+           LM = HM.map((() => !1));
+         HM.forEach(((OM, mM) => {
+           const hM = lM(dM, aM.signal);
+ ... (27 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38560-L38562` → after: `L461-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L461-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L461-L509) · [Before (L38560-L38562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38560-L38562)

```diff
-       if (!ZG.o(wG, GG)) {
-         var bG = new Error("Cannot find module '" + GG + "'");
-         throw bG.code = "MODULE_NOT_FOUND", bG
+       var rM, iM;
+       return "length" === (null === MM || void 0 === MM || null === (rM = MM.choices) || void 0 === rM || null === (iM = rM[0]) || void 0 === iM ? void 0 : iM.finish_reason)
+     }
+     async function GM(MM, rM, iM) {
+       const OM = HM.find((rM => rM.name === MM));
+       if (void 0 === OM) return "failed";
+       const SM = lM(dM, iM);
+       try {
+         const MM = await CM(OM, rM, SM.signal);
+         return null !== MM && "object" === typeof MM ? MM.isCutOff ? (console.warn(`Studio AI: ${OM.name}'s answer was cut off at the token limit`), null) : {
+           text: MM.text
+         } : MM
+       } finally {
+         SM.clear()
+       }
+     }
+ ... (33 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38630` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L513) · [Before (L38630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38630)

```diff
-   36643: (GG, bG, ZG) => {
+   6905: (MM, rM, iM) => {
```

#### 39. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38632-L38635` → after: `L515-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L515-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L515-L531) · [Before (L38632-L38635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38632-L38635)

```diff
-       d: () => DG,
-       h: () => BG,
-       j: () => OG,
-       l: () => tG
+       B: () => UM,
+       E: () => CM,
+       H: () => dM,
+       I: () => EM,
+       M: () => GM,
+       Q: () => lM,
+       S: () => LM,
+       U: () => QM,
+       W: () => HM,
+       e: () => hM,
+       i: () => PM,
+       l: () => aM,
+       p: () => JM,
+       t: () => mM,
+       u: () => zM,
+       x: () => jM,
+ ... (1 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38637-L38644` → after: `L533-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L533-L535) · [Before (L38637-L38644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38637-L38644)

```diff
-     var wG = ZG(2868),
-       SG = ZG(2881),
-       LG = ZG(6617),
-       yG = ZG(4708),
-       kG = ZG(2878),
-       UG = ZG(2872);
-     const YG = "bloxd-wasmDownloaded",
-       VG = 12;
+     var OM = iM(5273);
+     const SM = 2e3,
+       jM = 2e4;
```

#### 41. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38647-L38657` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L538) · [Before (L38647-L38657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38647-L38657)

```diff
-       return GG.pathname.slice(GG.pathname.lastIndexOf("/") + 1)
-     }
- 
-     function fG() {
-       try {
-         if ("undefined" === typeof localStorage) return null;
-         const GG = JSON.parse(localStorage.getItem(YG) ?? "[]");
-         return Array.isArray(GG) ? GG.filter((GG => "string" === typeof GG)) : []
-       } catch (GG) {
-         return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", GG), null
-       }
+       return MM.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
```

#### 42. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38675-L38751` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L541-L542) · [Before (L38675-L38751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38675-L38751)

```diff
-     function XG() {
-       return EG && !oG
-     }
-     class uG {
-       worker = null;
-       failed = !1;
-       constructor() {
-         if (XG()) try {
-           this.worker = CG(), QG(JG, this.worker, ["error", () => {
-             this.failed = !0
-           }])
-         } catch {
-           this.stop()
-         }
-       }
-       take() {
- ... (61 more removed lines; see GitHub link above)
+     function PM(MM) {
+       return MM.replace(/\$/g, "\\$")
```

#### 43. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38754-L38915` → after: `L546-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L546-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L546-L549) · [Before (L38754-L38915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38754-L38915)

```diff
-     function CG() {
-       if (globalThis.Worker !== KG) throw new Error("Worker is not the one the page loaded with");
-       return new Worker(new URL(ZG.p + ZG.u(68), ZG.b), {
-         name: "wasmZstdDecoder",
-         type: "module"
-       })
-     }
-     const WG = Reflect.apply,
-       mG = ArrayBuffer,
-       IG = "undefined" === typeof Response ? void 0 : Response,
-       FG = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       vG = function() {
-         let GG;
-         void 0 !== FG && new FG({
-           __proto__: null,
-           start(bG) {
- ... (146 more removed lines; see GitHub link above)
+     function QM(MM, rM) {
+       nM.lastIndex = rM;
+       const iM = nM.exec(MM);
+       return iM.index + iM[0].length
```

#### 44. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38919-L38921` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L553) · [Before (L38919-L38921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38919-L38921)

```diff
-       try {
-         (0, UG.X)(GG.cancel())
-       } catch {}
+       return (0, OM.r)(MM, /\s+/g, (0, OM.n)(".!?")).flatMap((MM => MM.split("\n")))
```

#### 45. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38927-L38936` → after: `L556-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L556-L561) · [Before (L38927-L38936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38927-L38936)

```diff
-     function AG(GG) {
-       return MG ??= function() {
-         const GG = new Map,
-           bG = "bloxd_wasm_webgpu:5136886,bloxd_wasm_webgl:5516433,bloxd_wasm_webgl1:4851485,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3712496";
-         for (const ZG of bG?.split(",") ?? []) {
-           const [bG = "", wG] = ZG.split(":"), SG = Number(wG);
-           Number.isInteger(SG) && SG > 0 && GG.set(bG, SG)
-         }
-         return GG
-       }(), MG.get(GG)
+     function LM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rM;
+       const OM = [...MM.matchAll(/[.!?](?!\d)(?=\s|$)/g)].map((MM => MM.index)),
+         SM = OM.filter((MM => MM < rM)),
+         jM = OM.find((MM => MM >= iM));
+       return [0 === SM.length ? 0 : SM.at(-1) + 1, void 0 === jM ? MM.length : jM + 1]
```

#### 46. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38938-L38987` → after: `L563-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L563-L566) · [Before (L38938-L38987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38938-L38987)

```diff
-     async function sG(GG, bG) {
-       let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const wG = AG(GG.name);
-       if (void 0 === wG) return qG(await nG(GG, bG, ZG), "cold-wasm");
-       const LG = aG ? new uG : null;
-       let yG;
-       try {
-         if (YG = GG.url(), fG()?.includes(pG(YG)) && await async function(GG) {
-             const bG = new AbortController;
-             let ZG;
-             const wG = (0, SG.i)((GG => {
-               ZG = setTimeout((() => {
-                 bG.abort(), GG(null)
-               }), PG)
-             }));
-             try {
- ... (34 more removed lines; see GitHub link above)
+ 
+     function mM(MM, rM) {
+       const iM = MM.charCodeAt(rM - 1);
+       return MM.slice(0, rM > 0 && rM < MM.length && iM >= 55296 && iM <= 56319 ? rM - 1 : rM)
```

#### 47. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38991-L38995` → after: `L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L570) · [Before (L38991-L38995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38991-L38995)

```diff
-       return {
-         __proto__: null,
-         module: GG,
-         path: bG
-       }
+       return `${rM}${MM.replace(/\\/g,"\\\\").split(rM).join(`\\${rM}`)}${rM}`
```

#### 48. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L38998-L39016` → after: `L573-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L573-L574) · [Before (L38998-L39016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L38998-L39016)

```diff
-     function nG(GG, bG, ZG) {
-       return void 0 === AG(GG.name) ? (0, UG.G)(GG.url(), bG, ZG) : (0, UG.G)(GG.url(), bG, {
-         ...ZG,
-         hideThen: !0,
-         onDownloaded: () => {
-           ! function(GG) {
-             const bG = fG();
-             if (null === bG) return;
-             const ZG = pG(GG),
-               wG = bG.filter((GG => GG !== ZG));
-             wG.push(ZG);
-             try {
-               localStorage.setItem(YG, JSON.stringify(wG.slice(-VG)))
-             } catch (SG) {
-               console.warn(`Bloxd wasm: ${ZG} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, SG)
-             }
- ... (3 more removed lines; see GitHub link above)
+     function hM(MM) {
+       return MM.charAt(0).toUpperCase() + MM.slice(1)
```

#### 49. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39018-L39026` → after: `L576-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L576-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L576-L578) · [Before (L39018-L39026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39018-L39026)

```diff
-     async function gG(GG, bG, ZG, wG) {
-       if (!aG || !XG()) return null;
-       const SG = GG.url(),
-         LG = `${SG.href}${jG}`;
-       try {
-         return await (0, UG.cb)(LG, ((GG, SG, yG) => cG(LG, bG, GG, SG, yG, ZG, wG)))
-       } catch (yG) {
-         return console.warn(`${(0,kG.f)(yG)}: loading ${SG.href} instead`), null
-       }
+ 
+     function JM(MM) {
+       return Math.round(MM).toLocaleString("en-US")
```

#### 50. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39033-L39034` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L581-L582) · [Before (L39033-L39034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39033-L39034)

```diff
-     function tG(GG, bG, ZG) {
-       return null === eG ? eG = NG(GG, bG, ZG?.memoryMaximumBytes) : GG !== eG.build ? console.warn(`Bloxd wasm: ${GG.name} was asked for after ${eG.build.name} started loading, which this thread keeps`) : bG.name !== eG.workers.name && console.warn(`Bloxd wasm: ${bG.name} was as … [truncated]
+     function dM(MM) {
+       return MM.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z\d]+/).filter((MM => "" !== MM))
```

#### 51. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39038-L39065` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L587) · [Before (L39038-L39065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39038-L39065)

```diff
-       if (null !== eG) return (0, SG.e)([]);
-       const ZG = GG.filter((GG => !TG.has(GG.name))).map((GG => {
-         const ZG = new AbortController,
-           wG = {
-             compiled: nG(GG, (0, LG.e)(GG.name), {
-               priority: bG,
-               RZ: ZG.signal,
-               onDownloaded: () => {
-                 wG.downloaded = !0
-               },
-               retries: {
-                 onRetry: () => {
-                   wG.downloaded = !1, null !== eG && ZG.abort()
-                 }
-               }
-             }),
- ... (12 more removed lines; see GitHub link above)
+       return dM(MM).filter((MM => MM.length >= yM && !/\d/.test(MM))).map((MM => `${MM} ${rM}`))
```

#### 52. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39068-L39090` → after: `L590-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L590-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L590-L591) · [Before (L39068-L39090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39068-L39090)

```diff
-     function NG(GG, bG, ZG) {
-       const LG = (0, wG.J)((async () => {
-         (0, yG.C)(), HG.clear();
-         const ZG = xG(GG),
-           wG = bG.name === GG.name ? ZG : xG(bG);
-         for (const {
-             cancel: GG
-           }
-           of TG.values()) GG.abort();
-         TG.clear(), await (0, SG.e)([ZG, wG]);
-         const LG = await ZG,
-           kG = await wG;
-         return (0, yG.C)(), {
-           module: LG,
-           workerModule: kG
-         }
- ... (7 more removed lines; see GitHub link above)
+     function EM(MM) {
+       return MM.split(/[\s:_]+/).filter((MM => "" !== MM)).map(aM).join("[`:_\\s]+")
```

#### 53. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39094` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L595) · [Before (L39094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39094)

```diff
-       return HG.get(GG)
+       return dM(MM.split(".").pop())
```

#### 54. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39098-L39133` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L599) · [Before (L39098-L39133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39098-L39133)

```diff
-       const bG = performance.now(),
-         ZG = TG.get(GG.name);
-       TG.delete(GG.name);
-       const wG = !0 === ZG?.downloaded ? ZG : void 0;
-       return void 0 !== ZG && void 0 === wG && ZG.cancel.abort(), (0, SG.i)(((ZG, LG) => {
-         const yG = (wG, SG) => {
-             HG.set(GG.name, {
-               path: SG,
-               ms: performance.now() - bG
-             }), ZG(wG)
-           },
-           kG = () => {
-             (0, SG.u)(Gb(GG), (GG => {
-               let {
-                 module: bG,
-                 path: ZG
- ... (20 more removed lines; see GitHub link above)
+       return MM.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
```

#### 55. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39143-L39177` → after: `L602-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L602-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L602-L608) · [Before (L39143-L39177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39143-L39177)

```diff
-     function LG() {
-       const GG = () => (0, wG.G)();
-       return {
-         memoryBytes: () => (0, wG.y)().buffer.byteLength,
-         reserveUpFront: bG => GG().wp(bG),
-         reserveAhead: bG => GG().Zp(bG),
-         setCeiling: bG => {
-           GG().Sp(bG)
-         },
-         lowWater: () => SG[GG().bp()] ?? "none",
-         stats: () => function(GG) {
-           const bG = new Uint32Array((0, wG.y)().buffer, GG, 17),
-             ZG = GG => bG[GG] ?? 0,
-             SG = GG => ({
-               upFront: ZG(GG),
-               ahead: ZG(GG + 1),
- ... (19 more removed lines; see GitHub link above)
+     function CM(MM) {
+       let rM = null;
+       return () => {
+         const iM = rM ??= MM();
+         return iM.catch((() => {
+           rM === iM && (rM = null)
+         })), iM
```

#### 56. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39181-L39201` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L612) · [Before (L39181-L39201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39181-L39201)

```diff
-   6617: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => yG
-     });
-     var wG = ZG(2872);
-     const SG = {
-       bloxd_wasm: () => "227276669bc81789ae0877e56ad1fa5148b881f36403e765502d7e555a33087b",
-       bloxd_wasm_client: () => "fde6efab397f5d28c36c7f7a90c3f8e1e62ec9f2af8488ddf98fdaa9b2cebcf1",
-       bloxd_wasm_workers: () => "a8f5ca009ba569fbb81d001dc1c9c7b54b8e4226097b17169475b4bb5e1b6f99",
-       bloxd_wasm_models: () => "097716d2f3ac493be1328cd23cfea825beae0b4d004cb4793fdff4648d25e301",
-       bloxd_wasm_webgpu: () => "67fd54aabb1d4d6967e430405453b87c364949978d0f7829b088145aae1e9ce5",
-       bloxd_wasm_webgl: () => "cdb0cf8160692e68dd70a2abf12e1128a08d64229d0469d4cc325cafd535e3d2",
-       bloxd_wasm_webgl1: () => "e8028f55daf732b5703910fe0886408ee732d8fa1e0480d554692849ab6badfa",
-       bloxd_wasm_replay: () => "218045edbe3647b06370037bf62e2cd5b77074e838aa33d42c210d12a23e3077",
-       bloxd_wasm_recorder: () => "8c52d908a7d9cbdccb92ee77564b71599d585f3b620f197e3396dcac8eca4f39",
-       bloxd_wasm_anim: () => "4aa0ad1549e0d5c6e1e816ef89f5c6c760fcacd619ca992ecbfbe1cf2f199e59",
- ... (5 more removed lines; see GitHub link above)
+   5273: (MM, rM, iM) => {
```

#### 57. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39203-L39208` → after: `L614-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L614-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L614-L616) · [Before (L39203-L39208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39203-L39208)

```diff
-       const bG = Object.prototype.hasOwnProperty.call(SG, GG) ? SG[GG]() : void 0;
-       if (void 0 !== bG) return {
-         sha256: bG,
-         onMismatch: LG.y
-       };
-       throw new wG.k(`${GG} has no release digest, so this build refuses it`)
+       return {
+         notAfter: MM
+       }
```

#### 58. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39214-L39217` → after: `L621-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L621-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L621-L627) · [Before (L39214-L39217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39214-L39217)

```diff
-       i: () => yG,
-       m: () => kG,
-       q: () => SG,
-       u: () => LG
+       f: () => PM,
+       g: () => OM,
+       h: () => SM,
+       j: () => jM,
+       n: () => aM,
+       p: () => zM,
+       r: () => LM
```

#### 59. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39219-L39229` → after: `L629-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L629-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L629-L630) · [Before (L39219-L39229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39219-L39229)

```diff
-     const wG = ["terrain", "liquid", "model"];
- 
-     function SG() {
-       const GG = [];
-       for (const bG of [!1, !0])
-         for (const ZG of wG) GG.push({
-           strict: bG,
-           program: ZG
-         });
-       return GG
-     }
+     const SM = OM("\\w$."),
+       jM = OM("\\w.,");
```

#### 60. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39232` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L633) · [Before (L39232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39232)

```diff
-       return `${GG.strict?"strict":"allow"}.${GG.program}`
+       return rM => nM(rM, MM)
```

#### 61. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39236` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L637) · [Before (L39236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39236)

```diff
-       return !GG.hooks.vertex && !GG.hooks.surface && !GG.hooks.light
+       return rM => !MM.test(rM.input.slice(0, rM.index))
```

#### 62. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39240` → after: `L641-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L641-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L641-L694) · [Before (L39240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39240)

```diff
-       return "off" !== bG && (null === GG || GG.some((GG => GG.key.strict === ("strict" === bG) && !yG(GG))))
+       return MM.index > 0 && new RegExp(`[${rM}]`).test(MM.input[MM.index - 1])
+     }
+ 
+     function QM(MM, rM, iM) {
+       return function(MM) {
+         return void 0 !== MM && "function" !== typeof MM
+       }(iM) ? function(MM, rM, iM) {
+         const OM = rM.flags.replace(/[gy]/g, ""),
+           SM = new RegExp(`[^${iM}](?:${rM.source})`, `${OM}g`),
+           jM = [],
+           aM = iM => {
+             const OM = iM.index + iM[0].length;
+             return ("" === iM[0] ? mM(MM, rM, OM) : OM) - 1
+           },
+           PM = new RegExp(`(?:${rM.source})`, `${OM}y`).exec(MM);
+         if (PM) {
+ ... (38 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/94.js` (Changed code · before: `L39242` → after: `L696-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-144a34b6e2679088350e14dbbc3e2e78535888d647cfdddc09207124de64e030) · [After (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/94.js#L696-L697) · [Before (L39242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/94.js#L39242)

```diff
-   }
+   },
+   6963: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/95.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/95.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557)

#### 1. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/95.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/95.js#L4-L9)

```diff
-   4883: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       Howl: () => SG.Howl,
-       Howler: () => SG.Howler,
-       musicOutput: () => dG,
-       readyAudioContext: () => JG
+   5150: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => JM
```

#### 2. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L11-L14` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/95.js#L8-L17) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/95.js#L11-L14)

```diff
-     var wG, SG = ZG(4889),
-       LG = ZG(3423),
-       yG = ZG(4672);
-     const kG = SG.Howler;
+     const OM = '# Callbacks\n\nPlayers can use World Code in custom worlds get functions they\'ve written to run when game events happen. These special functions are called callbacks. The world code can be viewed by pressing F8 by default. Initially the world code will have this  … [truncated]
+       SM = '# Client Options\n\nA player\'s "Client Options" impact what they are capable of doing in the world. For example you can give them a double jump by setting the player\'s `airJumpCount` to `1`. Alternatively their health bar can be increased by setting their `maxHealth … [truncated]
+       jM = '# Entity Settings\n\nAn "Entity Setting" impacts how a player sees or interacts with another player or entity.\nE.g. Player 1 could have an otherEntitySetting for entity 2 as opacity set to 0.5. This means player 1 sees entity 2 as partly see-through. Player1 is the r … [truncated]
+       aM = '# Mob Settings\n\nThese impact the behaviour of mobs, what they look like, and how they sound. These can either be set on a per-mob basis or the default can be set for all mobs of a particular type.\nThese API methods allow you to modify mob settings:\n\n```js\n/**\n  … [truncated]
+       PM = '# Vehicle Settings\n\nA vehicle is something you get into and ride, like a boat or a kart. A physics type is a list of settings describing how something moves - its weight, speed, steering, and so on. The two are separate: riding a vehicle normally changes your physic … [truncated]
+       nM = "# API Reference\n\n## addCustomKillfeedMessage\nAdd a custom killfeed message to the killfeed\n\n### Parameters:\n| Parameter | Type | Description |\n|-----------|------|-------------|\n| killer | ` { eId: EntityId } \\| { name: string; colour: string } ` | The entity … [truncated]
+     var QM = iM(5158),
+       zM = iM(5162);
+     const LM = '# How-Tos\n\nThis contains a quick list of tutorials for some features that may be harder to understand on first glance.\n\n## Variations\n\nCustom games now support *variations*, which allow you to create your own alterations of gameplay.\n\n### Custom Games\n\nI … [truncated]
+       mM = '# Snippets\n\nShort pieces of code to copy into a code block and change to suit your world. In a code block or board, `myId` is the player who ran it. In World Code, use the player ID a callback is given instead.\n\n## Make the player jump\n\nSets the player\'s veloci … [truncated]
```

#### 3. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L16-L30` → after: `L19-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/95.js#L19-L20) · [Before (L16-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/95.js#L16-L30)

```diff
-     function UG() {
-       var GG, bG;
-       if (kG.ctx || !kG.usingWebAudio || "undefined" === typeof AudioContext || !(0, yG.h)()) return;
-       const ZG = navigator.audioSession;
-       let wG;
-       "auto" === (null === ZG || void 0 === ZG ? void 0 : ZG.type) && (ZG.type = "ambient");
-       try {
-         wG = new AudioContext({
-           sampleRate: 44100
-         })
-       } catch {
-         return
-       }
-       const SG = wG.createGain();
-       SG.gain.setValueAtTime(kG._muted ? 0 : null !== (GG = kG._volume) && void 0 !== GG ? GG : 1, wG.currentTime), SG.connect(wG.destination), kG.ctx = wG, kG.masterGain = SG, null === (bG = kG._setup) || void 0 === bG || bG.call(kG)
+     function HM(MM) {
+       return MM.split("\n").filter((MM => MM.startsWith("## "))).map((MM => MM.replace(/^## (.+)$/gm, "$1").trim()))
```

#### 4. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L42-L53` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/95.js#L23-L24) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/95.js#L42-L53)

```diff
-     function QG() {
-       for (; kG._html5AudioPool.length < kG.html5PoolSize;) {
-         const GG = new Audio;
-         GG._unlocked = !0, kG._releaseHtml5Audio(GG)
-       }
-       for (const bG of kG._howls)
-         if (!bG._webAudio)
-           for (const ZG of bG._getSoundIds()) {
-             var GG;
-             const wG = null === (GG = bG._soundById(ZG)) || void 0 === GG ? void 0 : GG._node;
-             wG && !wG._unlocked && (wG._unlocked = !0, wG.load())
-           }
+     function hM(MM) {
+       return MM.split("\n").map(((MM, rM) => 0 === rM ? MM.trim() : MM.trim().replace(/^# ?/gm, " "))).join("\n\n")
```

#### 5. `bundles/bloxd.io/chunks/js/95.js` (Changed code · before: `L55-L122` → after: `L26-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-074d228cc047cd033faa17f28ded17b1da12853030538d3a7cf1d00e920b0557) · [After (L26-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/95.js#L26-L112) · [Before (L55-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/95.js#L55-L122)

```diff
-     pG.init = function(GG) {
-       return UG(), fG.call(this, GG)
-     }, (0, yG.h)() && (kG._unlockAudio = () => {
-       const GG = kG.ctx;
-       if (kG._audioUnlocked || !GG) return;
-       kG.autoUnlock = !1;
-       const bG = GG.createBuffer(1, 1, 22050);
-       kG._scratchBuffer = bG;
-       const ZG = new AbortController;
-       let wG = "afterPaint";
-       const SG = () => {
-           var wG;
-           if (kG._audioUnlocked) return;
-           null === (wG = kG._autoResume) || void 0 === wG || wG.call(kG);
-           const SG = GG.createBufferSource();
-           SG.buffer = bG, SG.connect(GG.destination), SG.start(0), GG.resume().catch((() => {})), SG.onended = () => {
- ... (52 more removed lines; see GitHub link above)
+     const JM = [{
+       id: "readme",
+       title: "Getting started",
+       content: '# Getting started\n\nThere are three places to write JavaScript in Bloxd: code blocks, code boards and World Code. Code in any of them controls the game through `api`, in custom games and worlds. Only players who can edit code (the `canEditCode` client option) can … [truncated]
+     }, {
+       id: "snippets",
+       title: "Snippets",
+       content: mM,
+       subsections: HM(mM)
+     }, {
+       id: "changelog",
+       title: "Changelog",
+       content: '# Changelog\n\nHere you can discover the latest changes to the API.\n\n### 24th November 2026\n- A `"follow"` [`gameCamera`](#clientOptions-gameCamera) takes `anchor: "eye"`, to watch another player through their eyes: it sits at their eye and looks where they loo … [truncated]
+     }, {
+       id: "howTo",
+       title: "How-Tos",
+ ... (71 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/96.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/96.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926)

#### 1. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/96.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/96.js#L2)

```diff
- export const ids = [95, 96];
+ export const ids = [96];
```

#### 2. `bundles/bloxd.io/chunks/js/96.js` (Changed code · before: `L4-L195` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-9d5b2822d8678be42acaca4155af785fc5ee1308f165c88ad05b54c9bf490926) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/96.js#L4-L5) · [Before (L4-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/96.js#L4-L195)

```diff
-   36778: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       countDecodesAs: () => pG,
-       decodedAudio: () => fG
-     });
-     var wG = ZG(3238),
-       SG = ZG(4883);
-     const LG = SG.Howler,
-       yG = new Map;
-     let kG = 0;
-     const UG = {
-         song: 0,
-         sheet: 0
-       },
-       YG = new WeakMap,
-       VG = new WeakSet;
- ... (176 more removed lines; see GitHub link above)
+   5158: MM => {
+     MM.exports = '# Block Names (1533 blocks)\n#\n# Each block name listed below is the ROOT block - use it exactly as shown (no suffix).\n# Some blocks also have meta variants, indicated by codes in brackets.\n#\n# ROOT BLOCK: Use the block name exactly as listed (e.g. "Maple Do … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/97.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/97.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8)

#### 1. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/97.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/97.js#L2)

```diff
- export const ids = [95, 96, 97];
+ export const ids = [97];
```

#### 2. `bundles/bloxd.io/chunks/js/97.js` (Changed code · before: `L4-L507` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4c30c9d9b7a104056ebbff3e2398e3173a13973116701ce3930fb5e2188ce5b8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/97.js#L4-L5) · [Before (L4-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/97.js#L4-L507)

```diff
-   36965: (GG, bG, ZG) => {
-     function wG(GG, bG, ZG, wG) {
-       return !(ZG && !GG.aimable) && (!bG || GG.gun && "head" !== wG)
-     }
- 
-     function SG(GG) {
-       return Math.max(.1 * GG, 1)
-     }
- 
-     function LG(GG, bG) {
-       return !GG && bG
-     }
-     ZG.d(bG, {
-       d: () => LG,
-       g: () => SG,
-       h: () => wG
- ... (488 more removed lines; see GitHub link above)
+   5162: MM => {
+     MM.exports = "# Item Names (1537 items)\n\nWood Pickaxe\nStone Pickaxe\nIron Pickaxe\nGold Pickaxe\nDiamond Pickaxe\nMoonstone Pickaxe\nGolem Pickaxe\nWood Axe\nStone Axe\nIron Axe\nGold Axe\nDiamond Axe\nMoonstone Axe\nArtisan Axe\nWood Spade\nStone Spade\nIron Spade\nGold S … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/98.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/98.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1)

#### 1. `bundles/bloxd.io/chunks/js/98.js` (Changed code · before: `L5-L893` → after: `L4-L4501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c1921f9e802e5593624b24417c56f23fcf7b328b13a561929cc48863772bb4a1) · [After (L4-L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/98.js#L4-L4501) · [Before (L5-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/98.js#L5-L893)

```diff
-   4889: (GG, bG, ZG) => {
-     var wG;
-     ! function() {
-       var SG = function() {
-         this.init()
-       };
-       SG.prototype = {
-         init: function() {
-           var GG = this || LG;
-           return GG._counter = 1e3, GG._html5AudioPool = [], GG.html5PoolSize = 10, GG._codecs = {}, GG._howls = [], GG._muted = !1, GG._volume = 1, GG._canPlayEvent = "canplaythrough", GG._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, G … [truncated]
-         },
-         volume: function(GG) {
-           var bG = this || LG;
-           if (GG = parseFloat(GG), bG.ctx || QG(), "undefined" !== typeof GG && GG >= 0 && GG <= 1) {
-             if (bG._volume = GG, bG._muted) return bG;
-             bG.usingWebAudio && bG.masterGain.gain.setValueAtTime(GG, LG.ctx.currentTime);
- ... (873 more removed lines; see GitHub link above)
+   5169: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => OM
+     });
+     const OM = String.raw`export interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+ ... (4482 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/99.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/99.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae)

#### 1. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L4-L35` → after: `L4-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L4-L19) · [Before (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L4-L35)

```diff
-   4900: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       default: () => eG
-     });
-     var wG = ZG(51),
-       SG = ZG(1457),
-       LG = ZG(352),
-       yG = ZG(1192),
-       kG = ZG(1557),
-       UG = ZG(1230),
-       YG = ZG(1490),
-       VG = ZG(1431),
-       pG = ZG(2655);
-     const fG = {
-       retries: 2,
-       minTimeout: 2e3
- ... (16 more removed lines; see GitHub link above)
+   37482: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => NM,
+       c: () => fM
+     });
+     var OM = iM(44),
+       SM = iM(2039),
+       jM = iM(37484),
+       aM = iM.n(jM),
+       PM = iM(4923),
+       nM = iM(2006),
+       QM = iM(1516),
+       zM = iM(83),
+       LM = iM(103),
+       mM = iM(332),
+       HM = iM(1116),
```

#### 2. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L37-L47` → after: `L21-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L21-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L21-L42) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L37-L47)

```diff
-       FG = ZG(1016),
-       vG = ZG(4911),
-       aG = ZG(17),
-       cG = ZG(1895),
-       lG = ZG(3634),
-       jG = ZG(2003),
-       PG = ZG(3582),
-       MG = ZG(80),
-       AG = ZG(4573),
-       sG = ZG(1067);
-     const qG = [CG];
+       JM = iM(19),
+       dM = iM(1398),
+       yM = iM(1717),
+       lM = iM(1830),
+       EM = iM(1765),
+       UM = iM(2104),
+       GM = iM(1474),
+       CM = iM(2198),
+       eM = iM(1464),
+       bM = iM(3009),
+       wM = iM(37486),
+       tM = iM(37501),
+       gM = iM(1541),
+       uM = iM(2645),
+       RM = iM(1188),
+       pM = iM(37515);
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L49-L70` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L44-L45) · [Before (L49-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L49-L70)

```diff
-     function nG(GG) {
-       let {
-         icon: bG,
-         label: ZG,
-         value: wG
-       } = GG;
-       return (0, sG.jsxs)("div", {
-         className: "PlayerProfileStat",
-         children: [(0, sG.jsx)(FG.c, {
-           name: bG,
-           className: "PlayerProfileStatIcon"
-         }), (0, sG.jsxs)("div", {
-           className: "PlayerProfileStatText",
-           children: [(0, sG.jsx)("div", {
-             className: "PlayerProfileStatLabel SmallTextLight",
-             children: ZG
- ... (6 more removed lines; see GitHub link above)
+     function fM() {
+       return oM || (0, lM.isTextEntry)(document.activeElement)
```

#### 4. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L73-L108` → after: `L48-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L48-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L48-L55) · [Before (L73-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L73-L108)

```diff
-     function gG(GG) {
-       let {
-         profile: bG
-       } = GG;
-       const {
-         t: ZG,
-         selectedLanguage: wG
-       } = (0, JG.w)();
-       let SG = ZG("homePage:profileUnknown");
-       if (bG.lastOnline) {
-         const GG = (0, JG.j)(wG.code, "homePage:profileTimeAgo");
-         SG = ZG("homePage:profileTimeAgo", {
-           time: (0, LG.lb)(GG, bG.lastOnline, Date.now())
-         })
-       }
-       let yG = ZG("homePage:profileUnknown");
- ... (20 more removed lines; see GitHub link above)
+     function YM() {
+       var MM, rM;
+       (0, CM.d)();
+       const iM = null !== (MM = null === (rM = (0, GM.d)()) || void 0 === rM ? void 0 : rM.getBoundButton("keyboardChannel")) && void 0 !== MM ? MM : null;
+       return iM ? (0, DM.jsx)(UM.b, {
+         className: "ChatInputChannelGlyph",
+         glyph: iM
+       }) : null
```

#### 5. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L114-L117` → after: `L61-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L61-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L61-L96) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L114-L117)

```diff
-       } = (0, JG.w)(), bG = (0, XG.useNavigatePreserveSearch)(), ZG = (0, QG.g)(), {
-         playerName: CG,
-         playerUrlName: mG
-       } = (0, SG.v)(), lG = (0, SG.n)(), nG = (0, yG.i)(lG.pathname), eG = nG && ("urlId" in nG ? `urlId:${nG.urlId}` : `name:${nG.lowerCaseName}`), RG = (0, wG.useRef)(eG);
+       } = (0, RM.A)(), {
+         isTouchScreen: rM
+       } = (0, JM.m)(["isTouchScreen"]), iM = (0, eM.y)(), [jM, HM] = (0, OM.useState)(!1), UM = (0, OM.useRef)(jM), GM = (0, OM.useRef)(null), {
+         messages: CM,
+         reportedPlayers: fM,
+         channel: NM
+       } = (0, bM.m)(), xM = (0, OM.useRef)(0), vM = (0, OM.useRef)(""), FM = (0, OM.useRef)(null);
+       var BM;
+       BM = FM, (0, OM.useEffect)((() => {
+         if (!(0, zM.isIOS)()) return;
+         const MM = BM.current;
+         let rM = null;
+         const iM = iM => {
+             const OM = iM.changedTouches[0];
+             rM = "none" === getComputedStyle(MM).pointerEvents ? {
+               id: OM.identifier,
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L119-L165` → after: `L98-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L98-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L98-L139) · [Before (L119-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L119-L165)

```diff
-       const {
-         userContext: TG,
-         isUserContextUpdating: HG
-       } = (0, hG.e)(), tG = (0, wG.useRef)(null), DG = (0, wG.useRef)(null), NG = (0, wG.useRef)(null), OG = (0, wG.useRef)(!1), xG = (0, wG.useRef)((0, LG.hc)(qG)), [BG, Gb] = (0, wG.useState)((() => {
-         const GG = nG && iG.d.peek(TG, nG);
-         return GG ? {
-           status: "loaded",
-           profile: GG,
-           playerKey: eG
-         } : {
-           status: "loading"
-         }
-       })), [bb, Zb] = (0, wG.useState)(0);
-       (0, wG.useEffect)(uG.c, []), (0, wG.useEffect)((() => {
-         cG.gameBridge.send("leaveGame", {
-           reloadPath: null
- ... (31 more removed lines; see GitHub link above)
+       const Sr = (0, uM.h)();
+ 
+       function jr() {
+         UM.current = !1, HM(!1), rr.current.blur()
+       }
+ 
+       function ar(MM) {
+         TM.current = MM, IM(MM)
+       }
+ 
+       function Pr() {
+         const MM = rr.current.value;
+         rr.current.value = "", nr(MM)
+       }
+ 
+       function nr(MM) {
+ ... (26 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L167-L177` → after: `L141-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L141-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L141-L222) · [Before (L167-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L167-L177)

```diff
-           try {
-             return {
-               status: "loaded",
-               profile: await VG.d.getPlayerProfile(GG, bG, fG)
-             }
-           } catch (ZG) {
-             return (0, pG.e)(ZG) ? {
-               status: "notFound"
-             } : (console.error("Failed to load user profile", ZG), {
-               status: "failed"
-             })
+           document.addEventListener("touchstart", MM, {
+             capture: !0
+           });
+           const rM = MM => {
+             (0, tM.i)(MM.target) && (UM.current = !1, HM(!1))
+           };
+           document.addEventListener("mousedown", rM, {
+             capture: !0
+           });
+           const iM = () => {
+               clearTimeout(VM.current), ar(!0)
+             },
+             OM = () => {
+               clearTimeout(VM.current), VM.current = setTimeout((() => {
+                 ar(!1), zr()
+               }), 4e3)
+ ... (66 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L179-L202` → after: `L224-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L224-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L224-L241) · [Before (L179-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L179-L202)

```diff
-         }(TG, nG).then((GG => {
-           wG || ("loaded" === GG.status && (NG.current = TG, OG.current = !0), Gb((bG => "failed" === GG.status && SG(bG) ? bG : {
-             ...GG,
-             playerKey: eG
-           })))
-         })), () => {
-           wG = !0
-         }
-       }), [HG, eG, TG, bb]);
-       const Sb = "loading" === BG.status || BG.playerKey === eG || "loaded" === BG.status && !!nG && "urlId" in nG && BG.profile.urlId === nG.urlId ? BG : {
-           status: "loading"
-         },
-         Lb = "loaded" === Sb.status ? Sb.profile : null,
-         yb = "loading" === Sb.status ? null : function(GG) {
-           if ("loaded" === GG.status) {
-             const {
- ... (8 more removed lines; see GitHub link above)
+         }), []), (0, EM.r)(rr, {
+           open: () => {
+             HM(!0)
+           },
+           close: () => {
+             jr()
+           },
+           submit: () => {
+             "" !== rr.current.value && Pr(), jr()
+           },
+           stepHistory: () => {
+             Qr(1, !0)
+           },
+           sendLine: MM => {
+             nr(MM), jr()
+           },
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L204-L227` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L243) · [Before (L204-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L204-L227)

```diff
-           return "notFound" === GG.status ? (0, YG.hb)() : null
-         }(Sb),
-         kb = null !== Lb && void 0 !== Lb && Lb.urlId ? (0, yG.k)({
-           urlId: Lb.urlId,
-           name: Lb.player.name
-         }) : null;
-       (0, KG.d)(kb);
-       const Ub = null !== Lb && void 0 !== Lb && Lb.player.cosmetics.profileEffect ? WG.c[Lb.player.cosmetics.profileEffect] : void 0,
-         Yb = null !== Lb && !HG && TG.getPlayerName().toLowerCase() === Lb.player.name.toLowerCase(),
-         Vb = (0, jG.e)(null === Lb || void 0 === Lb ? void 0 : Lb.player.name),
-         pb = Yb && TG.playerHasRank("youtuber");
-       DG.current = Lb;
-       const fb = (0, wG.useCallback)((() => {
-           nG && (iG.d.invalidate(nG), iG.d.get(TG, nG).then((GG => {
-             RG.current === eG && (OG.current = !0, Gb({
-               status: "loaded",
- ... (8 more removed lines; see GitHub link above)
+         }), (0, OM.useEffect)((() => {
```

#### 10. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L229-L252` → after: `L245-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L245-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L245-L260) · [Before (L229-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L229-L252)

```diff
-           const bG = DG.current;
-           return !(!bG || null === (GG = tG.current) || void 0 === GG || !GG.isReady()) && (tG.current.setAllCosmetics(bG.player.cosmetics), !0)
-         }), []);
-       return (0, wG.useEffect)((() => {
-         if (!Lb) return;
-         let GG, bG = !1;
-         const ZG = () => {
-           bG || Qb() || (GG = setTimeout(ZG, 100))
-         };
-         return ZG(), () => {
-           bG = !0, clearTimeout(GG)
-         }
-       }), [Lb, Qb]), (0, sG.jsxs)("div", {
-         className: IG()("PlayerProfile", {
-           PlayerProfilePortrait: ZG
-         }),
- ... (8 more removed lines; see GitHub link above)
+           (UM.current = jM, rr.current) && (jM ? (xM.current = 0, rr.current.focus()) : (rr.current.blur(), null === (MM = Mr.current) || void 0 === MM || MM.call(Mr)))
+         }), [jM]),
+         function(MM, rM) {
+           (0, OM.useLayoutEffect)((() => {
+             if (!rM) return;
+             WM.c.hold();
+             const iM = MM.current.closest(".InGameHeaderAndChat"),
+               OM = (0, sM.d)((MM => {
+                 let {
+                   top: rM,
+                   height: OM
+                 } = MM;
+                 iM.style.setProperty("--keyboard-top", `${rM+OM}px`)
+               }));
+             return () => {
+               OM(), iM.style.removeProperty("--keyboard-top"), WM.c.release()
```

#### 11. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L254-L288` → after: `L262-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L262-L269) · [Before (L254-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L254-L288)

```diff
-           })]
-         }), (0, sG.jsxs)("div", {
-           className: "PlayerProfileHeader",
-           children: [(0, sG.jsx)(oG.b, {
-             onClick: wb,
-             children: GG("general:back")
-           }), Lb && !HG && !Yb && MG.featureFlags.useSocialFeatures && (0, sG.jsx)("div", {
-             className: "PlayerProfileExclusionActions",
-             children: (0, sG.jsx)(PG.e, {
-               playerName: Lb.player.name,
-               className: "SmallTextLight"
-             })
-           })]
-         }), "loading" === Sb.status && (0, sG.jsx)("div", {
-           className: "PlayerProfileCentredMessage",
-           children: (0, sG.jsx)(EG.b, {})
- ... (19 more removed lines; see GitHub link above)
+           }), [MM, rM])
+         }(GM, jM && rM), (0, DM.jsx)(DM.Fragment, {
+           children: (0, DM.jsxs)("div", {
+             ref: GM,
+             className: hM()("Chat", {
+               Chatting: jM
+             }),
+             "data-camera-keeper": jM ? "" : void 0,
```

#### 12. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L290-L293` → after: `L271-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L271-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L271-L278) · [Before (L290-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L290-L293)

```diff
-               className: "PlayerProfileName FullyFancyText",
-               children: (0, sG.jsx)(dG.c, {
-                 text: (0, rG.w)(Lb.player.ranks, Lb.player.name, Lb.player.nameColour),
-                 friendBadgeFor: Vb ? Lb.player.name : void 0
+               ref: FM,
+               className: hM()("ChatMessages", {
+                 HideScrollbar: !XM && !jM,
+                 NoScrolling: !(0, zM.isMobile)() && KM
+               }),
+               children: (0, DM.jsx)(wM.d, {
+                 messages: CM,
+                 reportedPlayers: fM
```

#### 13. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L295-L307` → after: `L280-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L280-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L280-L289) · [Before (L295-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L295-L307)

```diff
-             }), (0, sG.jsx)("div", {
-               className: "PlayerProfileModel",
-               children: (0, sG.jsx)(wG.Suspense, {
-                 fallback: (0, sG.jsx)("div", {
-                   className: "PlayerProfileModelLoading",
-                   children: (0, sG.jsx)(EG.b, {})
-                 }),
-                 children: (0, sG.jsx)(uG.b, {
-                   ref: tG,
-                   onReady: () => {
-                     Qb()
-                   }
-                 })
+             }), rM && !jM && (0, DM.jsx)("button", {
+               type: "button",
+               className: "ChatIconWrapper SmallTextLight",
+               "aria-label": MM("general:chat"),
+               ...(0, gM.g)((() => {
+                 HM(!0), ir.current.style.display = "flex", (0, zM.isIOS)() && rr.current.focus()
+               }), "pointerup"),
+               children: (0, DM.jsx)(dM.b, {
+                 name: "comment-dots",
+                 className: "ChatIcon"
```

#### 14. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L320-L338` → after: `L292-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L292-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L292-L320) · [Before (L320-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L320-L338)

```diff
-               className: "PlayerProfileGames",
-               children: [(0, sG.jsx)("div", {
-                 className: "PlayerProfileGamesTitle SmallTextBold",
-                 children: GG("homePage:profileReleasedGames")
-               }), 0 === Lb.releasedGames.length && (0, sG.jsx)("div", {
-                 className: "PlayerProfileNoGames",
-                 children: GG("homePage:profileNoReleasedGames")
-               }), Lb.releasedGames.length > 0 && (0, sG.jsx)("div", {
-                 className: "PlayerProfileGamesGrid",
-                 children: Lb.releasedGames.map((GG => (0, sG.jsx)(zG.g, {
-                   source: {
-                     type: "preview",
-                     preview: GG
-                   },
-                   gameWidth: "100%",
-                   useLongRatio: !0,
- ... (3 more removed lines; see GitHub link above)
+               ref: ir,
+               className: "ChatInputWrapper",
+               style: {
+                 display: "" + (jM ? "flex" : "none")
+               },
+               children: [NM && (0, DM.jsx)("button", {
+                 type: "button",
+                 className: "ChatInputChannel",
+                 style: {
+                   backgroundColor: NM.elementBgColor
+                 },
+                 onClick: MM => {
+                   bM.b.selectNextChannel(), rr.current.focus()
+                 },
+                 children: (0, DM.jsx)("span", {
+                   className: "SmallTextBold",
+ ... (13 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L341-L343` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L323-L324) · [Before (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L341-L343)

```diff
-           })]
-         })]
-       })
+           })
+         })
```

#### 16. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L346` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L328) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L346)

```diff
-   4911: (GG, bG, ZG) => {
+   37486: (MM, rM, iM) => {
```

#### 17. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L348` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L330) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L348)

```diff
-       b: () => dG
+       d: () => wM
```

#### 18. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L350` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L332-L333) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L350)

```diff
-     var wG = ZG(1006),
+     var OM = iM(44),
+       SM = iM(1116),
```

#### 19. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L352-L384` → after: `L335-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L335-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L335-L357) · [Before (L352-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L352-L384)

```diff
-       LG = ZG(4664),
-       yG = ZG(1151),
-       kG = ZG(1016),
-       UG = ZG(1393),
-       YG = ZG(1431),
-       VG = ZG(1311),
-       pG = ZG(2477),
-       fG = ZG(1067);
-     const QG = {
-       youtube: {
-         icon: "youtube",
-         color: "#FF0033",
-         name: "YouTube"
-       },
-       tiktok: {
-         icon: "tiktok",
- ... (17 more removed lines; see GitHub link above)
+       aM = iM(3016),
+       PM = iM(22),
+       nM = iM(2494),
+       QM = iM(3977),
+       zM = iM(2137),
+       LM = iM(19),
+       mM = iM(2006),
+       HM = iM(37492),
+       hM = iM(2280),
+       JM = iM(3025),
+       dM = iM(2856),
+       yM = iM(2826),
+       lM = iM(2823),
+       EM = iM(3989),
+       UM = iM(37495),
+       GM = iM(3511),
+ ... (7 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L386` → after: `L359-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L359-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L359-L361) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L386)

```diff
-     };
+       var rM;
+       return ""
+     }
```

#### 21. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L390` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L365-L366) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L390)

```diff
-         platform: bG
+         messages: rM,
+         reportedPlayers: iM
```

#### 22. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L392-L402` → after: `L368-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L368-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L368-L372) · [Before (L392-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L392-L402)

```diff
-       const ZG = "youtube" === bG;
-       return (0, fG.jsxs)("span", {
-         className: SG()("PlayerProfileSocialLinkIcon", {
-           PlayerProfileSocialLinkIconYoutube: ZG
-         }),
-         children: [ZG && (0, fG.jsx)(pG.b, {
-           variant: "white"
-         }), !ZG && (0, fG.jsx)(kG.c, {
-           name: QG[bG].icon,
-           kit: "brands"
-         })]
+       return (0, eM.jsx)(eM.Fragment, {
+         children: rM.map((MM => (0, eM.jsx)(tM, {
+           message: MM,
+           reportedPlayers: iM
+         }, MM.clientChatMsgId)))
```

#### 23. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L408-L412` → after: `L510-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L510-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L510-L514) · [Before (L408-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L408-L412)

```diff
-         platform: bG,
-         link: ZG,
-         editable: wG,
-         userContext: SG,
-         onLinksUpdated: pG
+         side: rM,
+         defaultSize: iM,
+         covers: SM,
+         onClose: zM,
+         children: LM
```

#### 24. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L414-L489` → after: `L516-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L516-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L516-L532) · [Before (L414-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L414-L489)

```diff
-       const {
-         t: hG
-       } = (0, yG.w)(), dG = QG[bG];
-       if (!ZG && !wG) return null;
- 
-       function JG() {
-         var GG;
-         if (!SG || !pG) return;
-         VG.NotificationProvider.showInputPopup({
-           title: "homePage:profileSocialLinkEditTitle",
-           textOpts: {
-             title: {
-               platform: dG.name
-             }
-           },
-           prefixText: LG.t[bG],
- ... (60 more removed lines; see GitHub link above)
+       const mM = (0, OM.useRef)(null),
+         [HM, hM] = (0, OM.useState)(null),
+         [JM, dM] = (0, OM.useState)(iM);
+       JM !== iM && (dM(iM), hM(null));
+       const yM = (0, OM.useRef)(null),
+         lM = "top" === rM,
+         EM = MM => lM ? MM.clientY : MM.clientX,
+         UM = () => {
+           yM.current = null
+         };
+       return (0, PM.jsxs)("div", {
+         ref: mM,
+         className: jM()("ResizableSidePanel", rM && `ResizableSidePanel-${rM}`, {
+           Covers: "always" === SM,
+           CoversWhenNarrow: "narrow" === SM,
+           Dragged: null !== HM
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L491` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L534) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L491)

```diff
-           background: dG.color
+           [lM ? "height" : "width"]: null !== HM && void 0 !== HM ? HM : iM
```

#### 26. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L493-L512` → after: `L536-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L536-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L536-L566) · [Before (L493-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L493-L512)

```diff
-         ...(0, UG.P)(),
-         onClick: () => {
-           JG()
-         },
-         children: [(0, fG.jsx)(KG, {
-           platform: bG
-         }), (0, fG.jsxs)("span", {
-           className: "PlayerProfileSocialLinkText",
-           children: [(0, fG.jsx)("span", {
-             className: "PlayerProfileSocialLinkName SmallTextBold",
-             children: dG.name
-           }), (0, fG.jsx)("span", {
-             className: "PlayerProfileSocialLinkCount SmallTextLight",
-             children: hG("homePage:profileSocialLinkAdd")
-           })]
-         }), (0, fG.jsx)("span", {
- ... (4 more removed lines; see GitHub link above)
+         children: [LM, rM && (0, PM.jsx)("div", {
+           className: "ResizableSidePanelHandle",
+           role: "separator",
+           "aria-orientation": lM ? "horizontal" : "vertical",
+           onPointerDown: MM => {
+             if (0 !== MM.button) return;
+             MM.preventDefault();
+             const rM = mM.current,
+               iM = Array.from(rM.parentElement.children).reduce(((MM, iM) => iM !== rM && "0" !== getComputedStyle(iM).flexGrow ? MM + (MM => lM ? MM.clientHeight : MM.clientWidth)(iM) : MM), 0),
+               OM = lM ? rM.offsetHeight : rM.offsetWidth,
+               SM = Math.min(nM, OM),
+               jM = Math.max(SM, OM + Math.max(0, iM - QM));
+             yM.current = {
+               start: EM(MM),
+               startSize: OM,
+               minSize: SM,
+ ... (15 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L519-L522` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L612-L613) · [Before (L519-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L519-L522)

```diff
-         socialLinks: bG,
-         editable: ZG = !1,
-         userContext: wG,
-         onLinksUpdated: SG
+         submit: iM,
+         reopen: OM
```

#### 28. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L524-L539` → after: `L615-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L615-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L615-L626) · [Before (L524-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L524-L539)

```diff
-       if (!ZG && 0 === bG.length) return null;
-       const yG = new Map(bG.map((GG => [GG.platform, GG]))),
-         kG = ZG ? LG.s : bG.map((GG => GG.platform));
-       return (0, fG.jsx)("div", {
-         className: "PlayerProfileSocialLinks",
-         children: (0, fG.jsx)("div", {
-           className: "PlayerProfileSocialLinksList",
-           children: kG.map((GG => (0, fG.jsx)(hG, {
-             platform: GG,
-             link: yG.get(GG),
-             editable: ZG,
-             userContext: wG,
-             onLinksUpdated: SG
-           }, GG)))
-         })
-       })
+       null !== nM && clearTimeout(nM), QM = OM, LM({
+         ...MM,
+         startedAt: Date.now(),
+         errors: []
+       }), nM = setTimeout(mM, aM), iM()
+     }
+ 
+     function hM() {
+       PM && void 0 === PM.endedAt && void 0 === PM.ranAt && (null !== nM && clearTimeout(nM), LM({
+         ...PM,
+         ranAt: Date.now()
+       }), nM = setTimeout(mM, SM))
```

#### 29. `bundles/bloxd.io/chunks/js/99.js` (Changed code · before: `L542-L543` → after: `L23621-L23622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053aeR23621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1257c3187e0cf05f9f07c81838b80338c39bc7b687adedef58cdc4934fa053ae) · [After (L23621-L23622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/99.js#L23621-L23622) · [Before (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/99.js#L542-L543)

```diff
-   4905: GG => {
-     GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
+   20663: MM => {
+     MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/babylon-backend.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/babylon-backend.js` (194 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d)

#### 1. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L4)

```diff
-   41509: (GG, bG, ZG) => {
+   42227: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L11-L21)

```diff
-     var wG = ZG(41515),
-       SG = ZG(38416);
-     class LG extends((0, wG.g)(SG.b)) {}(0, wG.i)(SG.b, LG);
-     var yG = ZG(37518);
-     class kG extends((0, wG.g)(yG.e)) {}(0, wG.i)(yG.e, kG);
-     var UG = ZG(38256);
-     class YG extends((0, wG.g)(UG.h)) {}(0, wG.i)(UG.h, YG);
-     var VG = ZG(37788),
-       pG = ZG(40644),
-       fG = ZG(37782);
-     class QG extends((0, wG.g)(fG.f)) {
+     var OM = iM(42233),
+       SM = iM(38984);
+     class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
+     var aM = iM(38275);
+     class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
+     var nM = iM(38832);
+     class QM extends((0, OM.i)(nM.e)) {}(0, OM.m)(nM.e, QM);
+     var zM = iM(38298),
+       LM = iM(41374),
+       mM = iM(38294);
+     class HM extends((0, OM.i)(mM.e)) {
```

#### 3. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L23)

```diff
-         super(GG, bG, ZG), (0, VG.h)(GG)
+         super(MM, rM, iM), (0, zM.k)(MM)
```

#### 4. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L26)

```diff
-         (0, VG.k)(this._material), super.dispose(GG)
+         (0, zM.m)(this._material), super.dispose(MM)
```

#### 5. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L28)

```diff
-     }(0, wG.i)(fG.f, QG), (0, fG.h)({
+     }(0, OM.m)(mM.e, HM), (0, mM.f)({
```

#### 6. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L32-L41` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41) · [Before (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L32-L41)

```diff
-     var KG = ZG(39097);
-     class hG extends((0, wG.g)(KG.f)) {}(0, wG.i)(KG.f, hG);
-     var dG = ZG(39195),
-       JG = ZG(37629),
-       rG = ZG(38546),
-       zG = ZG(37576);
-     class EG extends((0, wG.g)(dG.c)) {}(0, wG.i)(dG.c, EG);
-     class oG extends((0, wG.g)(JG.b)) {}(0, wG.i)(JG.b, oG);
-     class XG extends((0, wG.g)(rG.o)) {}(0, wG.i)(rG.o, XG);
-     class uG extends((0, wG.g)(zG.c)) {}(0, wG.i)(zG.c, uG)
+     var hM = iM(39720);
+     class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
+     var dM = iM(39852),
+       yM = iM(38178),
+       lM = iM(39126),
+       EM = iM(38287);
+     class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
+     class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
+     class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
+     class eM extends((0, OM.i)(EM.c)) {}(0, OM.m)(EM.c, eM)
```

#### 7. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L43)

```diff
-   41988: (GG, bG, ZG) => {
+   44202: (MM, rM, iM) => {
```

#### 8. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L48-L60` → after: `L49-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L49-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L49-L61) · [Before (L48-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L48-L60)

```diff
-     var wG = ZG(41995),
-       SG = (ZG(40369), ZG(41502), ZG(40865), ZG(42002)),
-       LG = ZG(37618),
-       yG = ZG(37432),
-       kG = ZG(42014),
-       UG = ZG(42016),
-       YG = ZG(37567),
-       VG = (ZG(41515), ZG(42032)),
-       pG = ZG(42025),
-       fG = ZG(39121),
-       QG = ZG(42035),
-       KG = ZG(40237),
-       hG = ZG(39111);
+     var OM = iM(44206),
+       SM = (iM(41074), iM(42220), iM(41564), iM(44220)),
+       jM = iM(38167),
+       aM = iM(38034),
+       PM = iM(44235),
+       nM = iM(44237),
+       QM = iM(38233),
+       zM = (iM(42233), iM(44241)),
+       LM = iM(44239),
+       mM = iM(39760),
+       HM = iM(44250),
+       hM = iM(40964),
+       JM = iM(39741);
```

#### 9. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L62` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L63-L64) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L62)

```diff
-       JG = hG.t,
+       yM = "gpuParticlesSummed",
+       lM = JM.z,
```

#### 10. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L64-L66` → after: `L66-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L66-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L66-L75) · [Before (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L64-L66)

```diff
-       zG = GG => `gpuParticleSystem[${GG>>2}].${"xyzw"[3&GG]}`,
-       EG = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${hG.b}\n#define COLOR_POSITIONS ${rG(JG.colorPositions)}\n#define COLOR1 ${rG(JG.color1)}\n#define COLOR2 ${rG(JG.color2)}\n#define VELOCITY ${rG(JG.Sd)}\n#define REMAP $ … [truncated]
-     KG.e.ShadersStore[`${dG}VertexShader`] = EG, KG.e.ShadersStore[`${dG}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvaryi … [truncated]
+       UM = (MM, rM, iM, OM) => Array.from({
+         length: rM
+       }, ((SM, jM) => `(${((MM,rM,iM)=>0===rM?`${MM} < 1`:rM===iM-1?`${MM} >= ${rM}`:`${MM} == ${rM}`)(MM,jM,rM)} ? ${iM(jM)} : ${OM})`)).join("\n\t\t+ "),
+       GM = (MM, rM, iM) => `vec4 ${MM}(int i) {\n\treturn ${UM("i",iM,(MM=>`gpuParticleSystem[${rM+MM}]`),"vec4(0.0)")};\n}\n`,
+       CM = `\n${GM("colorPositionsAt",EM(lM.colorPositions),JM.d/4)}\n${GM("color1At",EM(lM.color1),JM.d)}\n${GM("color2At",EM(lM.color2),JM.d)}\n${GM("velocityAt",EM(lM.dd),JM.d)}\n${GM("remapStopAt",EM(lM.remap),JM.d)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${UM("j",4,(M … [truncated]
+       eM = (MM, rM, iM, OM) => MM ? `${iM}(${OM})` : `gpuParticleSystem[${rM} + ${OM}]`,
+       bM = MM => `gpuParticleSystem[${MM>>2}].${"xyzw"[3&MM]}`,
+       wM = MM => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${JM.d}\n#define COLOR_POSITIONS ${EM(lM.colorPositions)}\n#define COLOR1 ${EM(lM.color1)}\n#define COLOR2 ${EM(lM.color2)}\n#define VELOCITY ${EM(lM.dd)}\n#define R … [truncated]
+       tM = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuPart … [truncated]
+     hM.e.ShadersStore[`${dM}VertexShader`] = wM(!1), hM.e.ShadersStore[`${dM}PixelShader`] = tM, hM.e.ShadersStore[`${yM}VertexShader`] = wM(!0), hM.e.ShadersStore[`${yM}PixelShader`] = tM;
```

#### 11. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L69-L70` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L78-L79) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L69-L70)

```diff
-     var uG = ZG(39106),
-       iG = ZG(42043);
+     var RM = iM(39733),
+       pM = iM(44259);
```

#### 12. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L73` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L82) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L73)

```diff
-         super(GG, bG, ZG), this.renderer = ZG, this.Ah = wG, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(hG.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
+         super(MM, rM, iM), this.renderer = iM, this.YJ = OM, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(JM.s), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.ra … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L80-L82` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L89-L91) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L80-L82)

```diff
-             const GG = Math.floor(LG / hG.i),
-               ZG = Math.min(bG, (GG + 1) * hG.i);
-             wG.texSubImage2D(wG.TEXTURE_2D, 0, LG % hG.i * 4, GG, 4 * (ZG - LG), 1, wG.RGBA_INTEGER, wG.UNSIGNED_INT, SG, LG * hG.c), LG = ZG
+             const MM = Math.floor(jM / JM.p),
+               iM = Math.min(rM, (MM + 1) * JM.p);
+             OM.texSubImage2D(OM.TEXTURE_2D, 0, jM % JM.p * 4, MM, 4 * (iM - jM), 1, OM.RGBA_INTEGER, OM.UNSIGNED_INT, SM, jM * JM.g), jM = iM
```

#### 14. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L86` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L95) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L86)

```diff
-         const SG = wG.CK();
+         const SM = OM.ph();
```

#### 15. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L89` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L98) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L89)

```diff
-           yG = Math.min(LG, hG.i);
+           aM = Math.min(jM, JM.p);
```

#### 16. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L93-L94` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L102-L103) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L93-L94)

```diff
-         let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Ah.getAnimationRatio() || 1;
-         const bG = this.Ah.getFrameId();
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.YJ.getAnimationRatio() || 1;
+         const rM = this.YJ.getFrameId();
```

#### 17. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L107-L108` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L116-L117) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L107-L108)

```diff
-         (0, iG.i)(this, this.uniforms, this.uniformBits, GG);
-         for (const ZG of hG.q) this.uniforms[ZG] = this.uniformBits[ZG];
+         (0, pM.h)(this, this.uniforms, this.uniformBits, MM);
+         for (const iM of JM.v) this.uniforms[iM] = this.uniformBits[iM];
```

#### 18. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L110` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L119) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L110)

```diff
-         (0, iG.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (bG = this.ramp) || void 0 === bG || bG.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = pG.e.CreateRGBATexture(this.rampTexels.texels, hG.f, … [truncated]
+         (0, pM.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (rM = this.ramp) || void 0 === rM || rM.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = LM.e.CreateRGBATexture(this.rampTexels.texels, JM.o, … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L120` → after: `L129-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L129-L132) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L120)

```diff
-         this.Ah = GG, this.reportFailure = bG, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, QG.e)(), this.engine = GG.CK(), this. … [truncated]
+         this.YJ = MM, this.reportFailure = rM, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = dM, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32A … [truncated]
+         const iM = this.linkPair(dM),
+           OM = null !== iM && iM !== sM ? this.linkPair(yM) : iM;
+         null === OM && null !== iM ? (console.warn(`GPU particles link their fallback here: ${iM}`), this.reportFailure(iM, !0)) : null !== OM && this.fail(OM === sM ? sM : null !== iM && void 0 !== iM ? iM : OM)
```

#### 20. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L123-L126` → after: `L135-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L135-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L135-L138) · [Before (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L123-L126)

```diff
-         const ZG = hG.i * this.engine.getCaps().maxTextureSize;
-         bG > ZG && this.warnOnce(`capacity:${GG}`, `particle system ${GG} holds ${ZG} particles, not ${bG}: its records texture's limit`);
-         const wG = new CG(GG, Math.min(bG, ZG), this, this.Ah);
-         return this.Ah.addParticleSystem(wG), wG
+         const iM = JM.p * this.engine.getCaps().maxTextureSize;
+         rM > iM && this.warnOnce(`capacity:${MM}`, `particle system ${MM} holds ${iM} particles, not ${rM}: its records texture's limit`);
+         const OM = new WM(MM, Math.min(rM, iM), this, this.YJ);
+         return this.YJ.addParticleSystem(OM), OM
```

#### 21. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L131` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L143) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L131)

```diff
-         for (const wG of (0, fG.o)(GG.blendMode))
+         for (const OM of (0, mM.k)(MM.blendMode))
```

#### 22. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L136` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L148) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L136)

```diff
-         this.Ah._toBeDisposed.push(GG)
+         this.YJ._toBeDisposed.push(MM)
```

#### 23. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L139` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L151) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L139)

```diff
-         this.Ah.removeParticleSystem(GG), GG.releaseGl()
+         this.YJ.removeParticleSystem(MM), MM.releaseGl()
```

#### 24. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L146` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L158) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L146)

```diff
-           Ah: wG,
+           YJ: OM,
```

#### 25. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L152` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L164) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L152)

```diff
-           kG = null !== (bG = GG.ramp) && void 0 !== bG ? bG : this.whiteRamp;
+           PM = null !== (rM = MM.ramp) && void 0 !== rM ? rM : this.whiteRamp;
```

#### 26. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L154` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L166) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L154)

```diff
-         for (const UG of (0, fG.o)(GG.blendMode)) {
+         for (const nM of (0, mM.k)(MM.blendMode)) {
```

#### 27. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L156` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L168) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L156)

```diff
-           ZG.enableEffect(bG), bG.setTexture("gpuParticleTexture", GG.texture.mirror), bG.setTexture("gpuParticleRampTexture", kG), bG._bindTexture("gpuParticleRecords", GG.records), bG.setMatrix("gpuParticleView", wG.getViewMatrix()), bG.setMatrix("gpuParticleProjection", wG.get … [truncated]
+           iM.enableEffect(rM), rM.setTexture("gpuParticleTexture", MM.texture.mirror), rM.setTexture("gpuParticleRampTexture", PM), rM._bindTexture("gpuParticleRecords", MM.records), rM.setMatrix("gpuParticleView", OM.getViewMatrix()), rM.setMatrix("gpuParticleProjection", OM.get … [truncated]
```

#### 28. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L163` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L183) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L163)

```diff
-         !this.failed && ZG && (!bG || bG.isParallelCompiled && !bG.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : bG.isParallelCompiled && bG.program && (ZG.g … [truncated]
+         iM && null === this.pairFailure && (!rM || rM.isParallelCompiled && !rM.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : rM.isParallelCompiled && rM.pro … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L170` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L190) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L170)

```diff
-             if (bG) return `${wG} ${bG}`
+             if (rM) return `${OM} ${rM}`
```

#### 30. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L181` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L201) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L181)

```diff
-       createEffect(GG) {
+       createEffect(MM, rM) {
```

#### 31. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L184` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L204) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L184)

```diff
-           this.fail(null !== (ZG = this.gl()) && void 0 !== ZG && ZG.isContextLost() ? WG : function(GG) {
+           MM === this.shader && this.programFailed(null !== (OM = this.gl()) && void 0 !== OM && OM.isContextLost() ? sM : function(MM) {
```

#### 32. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L192-L193` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L215-L216) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L192-L193)

```diff
-           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${GG}`), this.reportFailure(GG);
-           for (const GG of this.Ah.lE.slice()) GG instanceof CG && GG.disposeOnStop && GG.dispose()
+           this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${MM}`), this.reportFailure(MM, !1);
+           for (const MM of this.YJ.aG.slice()) MM instanceof WM && MM.disposeOnStop && MM.dispose()
```

#### 33. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L197-L198` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L220-L221) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L197-L198)

```diff
-     var IG = ZG(40197);
-     class FG extends IG.b {
+     var kM = iM(40931);
+     class ZM extends kM.e {
```

#### 34. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L211-L227` → after: `L234-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L234-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L234-L250) · [Before (L211-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L211-L227)

```diff
-     var cG = ZG(40582),
-       lG = ZG(41498),
-       jG = ZG(40337),
-       PG = ZG(40543),
-       MG = ZG(40540),
-       AG = ZG(40467),
-       sG = ZG(41565),
-       qG = ZG(37993),
-       nG = ZG(42051),
-       gG = ZG(42057),
-       eG = ZG(42059),
-       RG = ZG(40484),
-       TG = ZG(2854),
-       HG = ZG(37855),
-       tG = ZG(40683),
-       DG = ZG(37941),
- ... (1 more removed lines; see GitHub link above)
+     var YM = iM(41313),
+       NM = iM(42212),
+       AM = iM(41048),
+       xM = iM(41274),
+       vM = iM(41269),
+       FM = iM(41190),
+       BM = iM(42280),
+       XM = iM(38476),
+       IM = iM(44265),
+       KM = iM(44273),
+       qM = iM(44280),
+       TM = iM(41213),
+       VM = iM(3177),
+       cM = iM(38363),
+       Mr = iM(41412),
+       rr = iM(38442),
+ ... (1 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L231` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L254) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L231)

```diff
-       const bG = GG.aE;
+       const rM = MM.iG;
```

#### 36. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L235` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L258) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L235)

```diff
-           SG = wG.vK();
+           SM = OM.Zh();
```

#### 37. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L242` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L265) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L242)

```diff
-         this.wf = GG, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, bG.onBeforeActiveMeshesEvaluationObservable.add((() => {
+         this.Cm = MM, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, rM.onBeforeActiveMeshesEvaluationObservable.add((() => {
```

#### 38. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L252-L255` → after: `L275-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L275-L278) · [Before (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L252-L255)

```diff
-           wf: wG
-         } = this, SG = null === (bG = wG.QE) || void 0 === bG ? void 0 : bG.visibility;
-         if (!SG || !GG || wG.HK.tK) return !1;
-         if (!(wG.Op.PwG[0] >= DG.d)) return !1;
+           Cm: OM
+         } = this, SM = null === (rM = OM.kU) || void 0 === rM ? void 0 : rM.visibility;
+         if (!SM || !MM || OM.CL.MJ) return !1;
+         if (!(OM.uL.GOM[0] >= rr.h)) return !1;
```

#### 39. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L258` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L281) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L258)

```diff
-         const yG = wG.zf,
+         const aM = OM.Am,
```

#### 40. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L261` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L284) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L261)

```diff
-         return UG[0] = kG.x + yG[0], UG[1] = kG.y + yG[1], UG[2] = kG.z + yG[2], !!SG.eyeClear(UG[0], UG[1], UG[2], GG.minZ, LG, wG.Op) && (this.vis = SG, this.passable.clear(), this.count = 0, !0)
+         return nM[0] = PM.x + aM[0], nM[1] = PM.y + aM[1], nM[2] = PM.z + aM[2], !!SM.eyeClear(nM[0], nM[1], nM[2], MM.minZ, jM, OM.uL) && (this.vis = SM, this.passable.clear(), this.count = 0, !0)
```

#### 41. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L282-L283` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L305-L306) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L282-L283)

```diff
-           Op: kG
-         } = this.wf, [UG, YG] = kG.PwG, VG = null !== ZG && ZG.update(wG[0], wG[1], wG[2], kG.sGG, UG, YG, this.passable);
+           uL: PM
+         } = this.Cm, [nM, QM] = PM.GOM, zM = null !== iM && iM.update(OM[0], OM[1], OM[2], PM.hL, nM, QM, this.passable);
```

#### 42. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L294` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L317) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L294)

```diff
-           RG.g.prototype.push.call(GG, wG)
+           TM.e.prototype.push.call(MM, OM)
```

#### 43. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L299-L304` → after: `L322-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L322-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L322-L327) · [Before (L299-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L299-L304)

```diff
-     var BG = ZG(37926),
-       Gb = ZG(37867),
-       bb = ZG(40664),
-       Zb = ZG(42065),
-       wb = ZG(40673),
-       Sb = ZG(40599);
+     var jr = iM(38423),
+       ar = iM(38375),
+       Pr = iM(41397),
+       nr = iM(44287),
+       Qr = iM(41400),
+       zr = iM(41328);
```

#### 44. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L318-L319` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L341-L342) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L318-L319)

```diff
-       if (!bG || !0 !== bG[HG.t]) return;
-       const ZG = bG[HG.v],
+       if (!rM || !0 !== rM[cM.q]) return;
+       const iM = rM[cM.t],
```

#### 45. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L327` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L350) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L327)

```diff
-       const bG = GG.aE;
+       const rM = MM.iG;
```

#### 46. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L329` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L352) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L329)

```diff
-         const GG = bG[ZG].vK();
+         const MM = rM[iM].Zh();
```

#### 47. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L333` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L356) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L333)

```diff
-         const GG = bG[ZG].vK();
+         const MM = rM[iM].Zh();
```

#### 48. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L343` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L366) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L343)

```diff
-       if ("function" !== typeof ZG) throw new Error(`terrainDrawState: Babylon has no ${bG} to hook`);
+       if ("function" !== typeof iM) throw new Error(`terrainDrawState: Babylon has no ${rM} to hook`);
```

#### 49. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L348` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L371) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L348)

```diff
-       const LG = ZG.Op.sGG,
+       const jM = iM.uL.hL,
```

#### 50. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L352` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L375) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L352)

```diff
-         YG = new BG.e(LG, GG.CK());
+         QM = new jr.b(jM, MM.ph());
```

#### 51. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L354` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L377) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L354)

```diff
-         if (fb.has(GG) || (fb.add(GG), GG.onContextLostObservable.add(Ub), GG.iK.add(Ub)), pb) return;
+         if (lr.has(MM) || (lr.add(MM), MM.onContextLostObservable.add(hr), MM.Rh.add(hr)), yr) return;
```

#### 52. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L356` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L379) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L356)

```diff
-         const bG = Zb.d.prototype,
+         const rM = nr.b.prototype,
```

#### 53. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L363-L364` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L386-L387) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L363-L364)

```diff
-         const wG = Qb(Sb.e.prototype, "_syncParentEnabledState");
-         Object.assign(Sb.e.prototype, {
+         const OM = Er(zr.d.prototype, "_syncParentEnabledState");
+         Object.assign(zr.d.prototype, {
```

#### 54. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L369-L370` → after: `L392-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L392-L393) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L369-L370)

```diff
-         const SG = Qb(wb.c.prototype, "resetDrawCache");
-         wb.c.prototype.resetDrawCache = function(GG, bG) {
+         const SM = Er(Qr.e.prototype, "resetDrawCache");
+         Qr.e.prototype.resetDrawCache = function(MM, rM) {
```

#### 55. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L373` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L396) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L373)

```diff
-         const LG = bb.e.prototype,
+         const jM = Pr.c.prototype,
```

#### 56. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L384` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L407) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L384)

```diff
-       }(GG.CK());
+       }(MM.ph());
```

#### 57. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L399-L400` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L422-L423) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L399-L400)

```diff
-             ZG = GG.ewG[0],
-             wG = GG.ewG[1];
+             iM = MM.ROM[0],
+             OM = MM.ROM[1];
```

#### 58. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L416` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L439) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L416)

```diff
-             LG = UG.hQ(GG.activeCamera),
+             jM = nM.JL(MM.activeCamera),
```

#### 59. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L419` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L442) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L419)

```diff
-             const bG = GG.CK().currentRenderPassId;
+             const rM = MM.ph().currentRenderPassId;
```

#### 60. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L436` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L459) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L436)

```diff
-             if (!tG.c.IsInFrustum(bG.ewG, wG)) continue;
+             if (!Mr.e.IsInFrustum(rM.ROM, OM)) continue;
```

#### 61. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L446` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L469) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L446)

```diff
-                 if (yG && wG[bG] === YG) QG && 1 === SG[bG] && OG(fG) && 0, UG.see(fG, 1 === SG[bG] ? pG : -1);
+                 if (aM && OM[rM] === QM) HM && 1 === SM[rM] && Or(mM) && 0, nM.see(mM, 1 === SM[rM] ? LM : -1);
```

#### 62. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L449` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L472) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L449)

```diff
-                   const GG = !0 === fG.metadata[Gb.n];
+                   const MM = !0 === mM.metadata[ar.q];
```

#### 63. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L453` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L476) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L453)

```diff
-                 } else LG ? EG(fG, pG, !0 === fG.metadata[Gb.n]) : RG.g.prototype.push.call(ZG, fG)
+                 } else jM ? UM(mM, LM, !0 === mM.metadata[ar.q]) : TM.e.prototype.push.call(iM, mM)
```

#### 64. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L460` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L483) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L460)

```diff
-         const LG = bG.gwG;
+         const jM = rM.uOM;
```

#### 65. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L463` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L486) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L463)

```diff
-           bG.isEnabled() && RG.g.prototype.push.call(wG, bG)
+           rM.isEnabled() && TM.e.prototype.push.call(OM, rM)
```

#### 66. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L467-L468` → after: `L490-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L490-L491) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L467-L468)

```diff
-         RwG: () => UG.culled,
-         FwG: (GG, bG) => {
+         pOM: () => nM.culled,
+         JOM: (MM, rM) => {
```

#### 67. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L472` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L495) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L472)

```diff
-             YG = `${SG}|${kG}|${UG}`;
+             QM = `${SM}|${PM}|${nM}`;
```

#### 68. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L476-L478` → after: `L499-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L499-L501) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L476-L478)

```diff
-             ZG.abG([SG * LG - 1, kG * LG - 1, UG * LG - 1], null, GG), VG = Object.assign(wG(GG, LG + 2), {
-               TwG: YG,
-               HwG: 0,
+             iM.ErM([SM * jM - 1, PM * jM - 1, nM * jM - 1], null, MM), zM = Object.assign(OM(MM, jM + 2), {
+               WOM: QM,
+               sOM: 0,
```

#### 69. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L482` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L505) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L482)

```diff
-             }), zG(VG), QG[VG._noaSlot] = (0, TG.g)(SG, kG, UG), KG[3 * VG._noaSlot] = SG, KG[3 * VG._noaSlot + 1] = kG, KG[3 * VG._noaSlot + 2] = UG, yG.set(YG, VG)
+             }), EM(zM), HM[zM._noaSlot] = (0, VM.k)(SM, PM, nM), hM[3 * zM._noaSlot] = SM, hM[3 * zM._noaSlot + 1] = PM, hM[3 * zM._noaSlot + 2] = nM, aM.set(QM, zM)
```

#### 70. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L484` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L507) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L484)

```diff
-           VG.HwG++, GG.metadata[HG.y] = VG
+           zM.sOM++, MM.metadata[cM.x] = zM
```

#### 71. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L486-L488` → after: `L509-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L509-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L509-L511) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L486-L488)

```diff
-         Rl: GG => {
-           const bG = GG.metadata[HG.y];
-           bG && (bG.HwG--, bG.HwG <= 0 && (yG.delete(bG.TwG), dG.push(bG._noaSlot)), GG.metadata[HG.y] = null)
+         Fk: MM => {
+           const rM = MM.metadata[cM.x];
+           rM && (rM.sOM--, rM.sOM <= 0 && (aM.delete(rM.WOM), dM.push(rM._noaSlot)), MM.metadata[cM.x] = null)
```

#### 72. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L490` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L513) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L490)

```diff
-         nwG: (GG, bG) => {
+         gOM: (MM, rM) => {
```

#### 73. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L492` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L515) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L492)

```diff
-             wG = bG.metadata[HG.y];
+             OM = rM.metadata[cM.x];
```

#### 74. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L506` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L529) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L506)

```diff
-         pGG: GG => {
+         rMM: MM => {
```

#### 75. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L508-L509` → after: `L531-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L531-L532) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L508-L509)

```diff
-             bG.jwG.twG(GG), bG.lwG.twG(GG);
-             for (const ZG of bG.ewG) ZG.twG(GG);
+             rM.UOM.kOM(MM), rM.EOM.kOM(MM);
+             for (const iM of rM.ROM) iM.kOM(MM);
```

#### 76. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L531` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L554) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L531)

```diff
-         if (!(GG * (GG >= 0 ? yG : wG) + bG * (bG >= 0 ? kG : SG) + VG * (VG >= 0 ? UG : LG) + ZG[YG + 3] >= 0)) return !1
+         if (!(MM * (MM >= 0 ? aM : OM) + rM * (rM >= 0 ? PM : SM) + zM * (zM >= 0 ? nM : jM) + iM[QM + 3] >= 0)) return !1
```

#### 77. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L535` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L558) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L535)

```diff
-     var Jb = ZG(38180);
+     var er = iM(38749);
```

#### 78. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L538-L541` → after: `L561-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L561-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L561-L564) · [Before (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L538-L541)

```diff
-         var ZG = GG.Ah;
-         ZG.KwG(new eG.d(ZG));
-         var wG = new nG.e(UG);
-         ZG.NwG = wG, wG.blocks = [];
+         var iM = MM.YJ;
+         iM.MOM(new qM.c(iM));
+         var OM = new IM.c(nM);
+         iM.oOM = OM, OM.blocks = [];
```

#### 79. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L544-L546` → after: `L567-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L567-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L567-L569) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L544-L546)

```diff
-         this.textPlanes = kG, this.RwG = () => SG.RwG(), this.pGG = GG => {
-           VG(wG, GG), SG.pGG(GG)
-         }, this.FwG = (bG, ZG, yG) => {
+         this.textPlanes = PM, this.pOM = () => SM.pOM(), this.rMM = MM => {
+           zM(OM, MM), SM.rMM(MM)
+         }, this.JOM = (rM, iM, aM) => {
```

#### 80. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L548` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L571) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L548)

```diff
-           if (!bG.metadata[HG.v] && !bG.metadata[HG.r]) {
+           if (!rM.metadata[cM.t] && !rM.metadata[cM.n]) {
```

#### 81. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L550-L551` → after: `L573-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L573-L574) · [Before (L550-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L550-L551)

```diff
-               var UG = wG.gwG;
-               if (bG.metadata[HG.F] && !bG.parent) {
+               var nM = OM.uOM;
+               if (rM.metadata[cM.B] && !rM.parent) {
```

#### 82. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L553-L554` → after: `L576-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L576-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L576-L577) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L553-L554)

```diff
-                 var VG = bG.HA().xwG;
-                 bG.metadata[HG.H] = VG.center.length() + VG.radius, bG.WK = !0
+                 var zM = rM.aY().YOM;
+                 rM.metadata[cM.E] = zM.center.length() + zM.radius, rM.Wh = !0
```

#### 83. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L556` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L579) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L556)

```diff
-               return UG.push(bG), bG.metadata[HG.j] = UG, void(bG.metadata[HG.r] = !0)
+               return nM.push(rM), rM.metadata[cM.i] = nM, void(rM.metadata[cM.n] = !0)
```

#### 84. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L566` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L589) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L566)

```diff
-               GG.wf.abG(JG, null, rG), dG = pG(rG, YG), wG.blocks.push(dG), LG[hG] = dG, dG.TwG = hG
+               MM.Cm.ErM(yM, null, lM), dM = LM(lM, QM), OM.blocks.push(dM), jM[JM] = dM, dM.WOM = JM
```

#### 85. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L568` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L591) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L568)

```diff
-             SG.FwG(bG, yG), SG.nwG(dG, bG), dG.HwG = (dG.HwG || 0) + 1, bG.metadata[HG.v] = dG, bG.metadata[HG.t] = !0, bG.WK = !0
+             SM.JOM(rM, aM), SM.gOM(dM, rM), dM.sOM = (dM.sOM || 0) + 1, rM.metadata[cM.t] = dM, rM.metadata[cM.q] = !0, rM.Wh = !0
```

#### 86. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L570` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L593) · [Before (L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L570)

```diff
-         }, this.Rl = GG => {
+         }, this.Fk = MM => {
```

#### 87. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L572-L574` → after: `L595-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L595-L597) · [Before (L572-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L572-L574)

```diff
-             GG.metadata[HG.r] && ((0, TG.m)(GG.metadata[HG.j], GG), GG.metadata[HG.r] = !1), GG.metadata[HG.j] === kG && (GG.WK = !1), GG.metadata[HG.j] = void 0, GG.metadata[HG.H] = void 0;
-             var bG = GG.metadata[HG.v];
-             bG && bG.entries && (GG.metadata[HG.t] && SG.removeEntry(bG, GG), bG.HwG--, bG.HwG <= 0 && (delete LG[bG.TwG], (0, TG.m)(wG.blocks, bG))), SG.Rl(GG), GG.metadata[HG.v] = null, GG.metadata[HG.t] = !1
+             MM.metadata[cM.n] && ((0, VM.o)(MM.metadata[cM.i], MM), MM.metadata[cM.n] = !1), MM.metadata[cM.i] === PM && (MM.Wh = !1), MM.metadata[cM.i] = void 0, MM.metadata[cM.E] = void 0;
+             var rM = MM.metadata[cM.t];
+             rM && rM.entries && (MM.metadata[cM.q] && SM.removeEntry(rM, MM), rM.sOM--, rM.sOM <= 0 && (delete jM[rM.WOM], (0, VM.o)(OM.blocks, rM))), SM.Fk(MM), MM.metadata[cM.t] = null, MM.metadata[cM.q] = !1
```

#### 88. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L576` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L599) · [Before (L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L576)

```diff
-         }, this.w6 = function(GG) {
+         }, this.E_ = function(MM) {
```

#### 89. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L578-L581` → after: `L601-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L601-L604) · [Before (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L578-L581)

```diff
-           if (GG.metadata[HG.v]) {
-             if (GG.metadata[HG.t] === bG) return;
-             var ZG = GG.metadata[HG.v];
-             ZG && ZG.entries && (bG ? SG.nwG(ZG, GG) : SG.removeEntry(ZG, GG)), GG.metadata[HG.t] = bG
+           if (MM.metadata[cM.t]) {
+             if (MM.metadata[cM.q] === rM) return;
+             var iM = MM.metadata[cM.t];
+             iM && iM.entries && (rM ? SM.gOM(iM, MM) : SM.removeEntry(iM, MM)), MM.metadata[cM.q] = rM
```

#### 90. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L583-L585` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L606-L608) · [Before (L583-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L583-L585)

```diff
-             if (GG.metadata[HG.r] === bG) return;
-             var LG = GG.metadata[HG.j] || wG.gwG;
-             bG ? LG.push(GG) : (0, TG.m)(LG, GG), GG.metadata[HG.r] = bG
+             if (MM.metadata[cM.n] === rM) return;
+             var jM = MM.metadata[cM.i] || OM.uOM;
+             rM ? jM.push(MM) : (0, VM.o)(jM, MM), MM.metadata[cM.n] = rM
```

#### 91. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L589` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L612) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L589)

```diff
-           YG = bG * GG.wf.Op.sGG,
+           QM = rM * MM.Cm.uL.hL,
```

#### 92. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L592` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L615) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L592)

```diff
-               GG.jwG.twG(bG), GG.lwG.twG(bG), GG.ewG.forEach((GG => GG.twG(bG))), GG.blocks && VG(GG, bG)
+               MM.UOM.kOM(rM), MM.EOM.kOM(rM), MM.ROM.forEach((MM => MM.kOM(rM))), MM.blocks && zM(MM, rM)
```

#### 93. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L596-L597` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L619-L620) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L596-L597)

```diff
-             var ZG = new yG.mK(GG[0], GG[1], GG[2]),
-               wG = new yG.mK(GG[0] + bG, GG[1] + bG, GG[2] + bG);
+             var iM = new aM.sh(MM[0], MM[1], MM[2]),
+               OM = new aM.sh(MM[0] + rM, MM[1] + rM, MM[2] + rM);
```

#### 94. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L600` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L623) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L600)

```diff
-         SG = Kb(ZG, wG, GG.wf, pG, ((GG, bG) => {
+         SM = Ur(iM, OM, MM.Cm, LM, ((MM, rM) => {
```

#### 95. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L603` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L626) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L603)

```diff
-             wG.isEnabled(!1) && ((0, Jb.c)(wG, bG) && RG.g.prototype.push.call(GG, wG))
+             OM.isEnabled(!1) && ((0, er.b)(OM, rM) && TM.e.prototype.push.call(MM, OM))
```

#### 96. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L613` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L636) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L613)

```diff
-         I3: wG,
+         yV: OM,
```

#### 97. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L617-L618` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L640-L641) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L617-L618)

```diff
-       } = GG.model.o3, kG = GG.LSG;
-       kG.position.fGG(bG[0], bG[1], bG[2]), kG.rotation.fGG(ZG[0], ZG[1], ZG[2]);
+       } = MM.model.JV, PM = MM.IOM;
+       PM.position.iMM(rM[0], rM[1], rM[2]), PM.rotation.iMM(iM[0], iM[1], iM[2]);
```

#### 98. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L620` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L643) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L620)

```diff
-       UG.position.fGG(wG[0], wG[1], wG[2]), UG.fov = SG, UG.minZ = LG, UG.maxZ = yG
+       nM.position.iMM(OM[0], OM[1], OM[2]), nM.fov = SM, nM.minZ = jM, nM.maxZ = aM
```

#### 99. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L624` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L647) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L624)

```diff
-       const bG = GG.CK(),
+       const rM = MM.ph(),
```

#### 100. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L627` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L650) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L627)

```diff
-       if (!wG || ZG.Zh < 2 || bG.iwG || wG.getParameter(wG.DEPTH_BITS) < 24) return !1;
+       if (!OM || iM.PJ < 2 || rM.LOM || OM.getParameter(OM.DEPTH_BITS) < 24) return !1;
```

#### 101. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L631` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L654) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L631)

```diff
-         kG = PG.b.prototype.render;
+         PM = xM.c.prototype.render;
```

#### 102. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L645-L647` → after: `L668-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L668-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L668-L670) · [Before (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L645-L647)

```diff
-       return [bG, qG.e].map(((bG, ZG) => {
-         const wG = new SG.c("light", yG.mK.FromArray(bG), GG);
-         return wG.diffuse = LG.Color3.FromArray([1, 1, 1]), wG.specular = LG.Color3.FromArray([1, 1, 1]), wG.intensity = qG.d[ZG], wG
+       return [rM, XM.c].map(((rM, iM) => {
+         const OM = new SM.b("light", aM.sh.FromArray(rM), MM);
+         return OM.diffuse = jM.Color3.FromArray([1, 1, 1]), OM.specular = jM.Color3.FromArray([1, 1, 1]), OM.intensity = XM.b[iM], OM
```

#### 103. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L650` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L673) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L650)

```diff
-     class Xb extends UG.e {
+     class ur extends nM.b {
```

#### 104. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L659` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L682) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L659)

```diff
-         this.heldTexture = GG, this.particleTexture = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.mirror) && void 0 !== bG ? bG : null
+         this.heldTexture = MM, this.particleTexture = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.mirror) && void 0 !== rM ? rM : null
```

#### 105. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L668` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L691) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L668)

```diff
-         GG && (this.particleTexture = null, (0, YG.y)(this.heldTexture), this.heldTexture = null), super.dispose(GG, bG, ZG)
+         MM && (this.particleTexture = null, (0, QM.z)(this.heldTexture), this.heldTexture = null), super.dispose(MM, rM, iM)
```

#### 106. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L671` → after: `L694-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L694-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L694-L707) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L671)

```diff
-     const ub = wG.c.Zero();
+ 
+     function Rr(MM, rM, iM, OM) {
+       return rM && !rM.failed ? rM.uZ(iM, OM) : new ur(iM, OM, MM)
+     }
+     const pr = new WeakMap;
+ 
+     function Wr(MM, rM, iM) {
+       var OM;
+       let SM = null !== (OM = pr.get(MM)) && void 0 !== OM ? OM : null;
+       return !SM && MM.ph().PJ >= 2 && (SM = new DM(MM, (rM => {
+         console.error(`Particle programs failed in scene ${MM.uid}: ${rM}`)
+       })), pr.set(MM, SM)), Rr(MM, SM, rM, iM)
+     }
+     const sr = OM.e.Zero();
```

#### 107. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L673-L674` → after: `L709-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L709-L710) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L673-L674)

```diff
-       gZG: function(GG, bG) {
-         return new FG(GG, bG.MZG, {
+       uiM: function(MM, rM) {
+         return new ZM(MM, rM.biM, {
```

#### 108. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L681` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L717) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L681)

```diff
-       USG: function(GG, bG) {
+       TOM: function(MM, rM) {
```

#### 109. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L683-L687` → after: `L719-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L719-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L719-L723) · [Before (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L683-L687)

```diff
-           const wG = new AG.d(GG.engine);
-           GG.Ah = wG, wG.detachControl(), wG.autoClear = !1, MG.b.MIN_RENDERINGGROUPS = -1;
-           for (let LG = MG.b.MIN_RENDERINGGROUPS; LG <= 1; LG++) wG.setRenderingOrder(LG, PG.b.PainterSortCompare, PG.b.PainterSortCompare, PG.b.PainterSortCompare);
-           wG.setRenderingAutoClearDepthStencil(0, !1), jG.c.Enabled = !1, GG.ZSG = new rb(GG, Math.round(bG.wSG)), GG.LSG = new lG.d("camHolder", wG), GG.camera = new cG.c("camera", new yG.mK(0, 0, 0), wG), GG.camera.parent = GG.LSG, zb(GG), (0, qG.i)(GG, ((GG, bG, ZG) => (0, sG. … [truncated]
-           const SG = ZG(wG, bG.kSG);
+           const OM = new FM.b(MM.engine);
+           MM.YJ = OM, OM.detachControl(), OM.autoClear = !1, vM.b.MIN_RENDERINGGROUPS = -1;
+           for (let jM = vM.b.MIN_RENDERINGGROUPS; jM <= 1; jM++) OM.setRenderingOrder(jM, xM.c.PainterSortCompare, xM.c.PainterSortCompare, xM.c.PainterSortCompare);
+           OM.setRenderingAutoClearDepthStencil(0, !1), AM.e.Enabled = !1, MM.vOM = new br(MM, Math.round(rM.FOM)), MM.IOM = new NM.e("camHolder", OM), MM.camera = new YM.d("camera", new aM.sh(0, 0, 0), OM), MM.camera.parent = MM.IOM, wr(MM), (0, XM.d)(MM, ((MM, rM, iM) => (0, BM. … [truncated]
+           const SM = iM(OM, rM.qOM);
```

#### 110. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L689` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L725) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L689)

```diff
-             SG.some((bG => bG === GG)) || console.error(`Light "${GG.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
+             SM.some((rM => rM === MM)) || console.error(`Light "${MM.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
```

#### 111. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L691` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L727) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L691)

```diff
-         }(GG, bG, ob), Eb(GG.Ah)
+         }(MM, rM, gr), tr(MM.YJ)
```

#### 112. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L693` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L729) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L693)

```diff
-       SSG: zb,
+       XOM: wr,
```

#### 113. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L695` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L731) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L695)

```diff
-         const SG = GG.Ah;
+         const SM = MM.YJ;
```

#### 114. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L698-L699` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L734-L735) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L698-L699)

```diff
-       VSG: function(GG, bG, ZG) {
-         return GG.engine.Zh >= 2 && (GG.pSG || (GG.pSG = new mG(GG.Ah, GG.fSG)), !GG.pSG.failed) ? GG.pSG.rM(bG, ZG) : new Xb(bG, ZG, GG.Ah)
+       cOM: function(MM, rM, iM) {
+         return MM.engine.PJ >= 2 && !MM.MSM && (MM.MSM = new DM(MM.YJ, MM.rSM)), Rr(MM.YJ, MM.MSM, rM, iM)
```

#### 115. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L701-L703` → after: `L737-L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L737-L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L737-L739) · [Before (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L701-L703)

```diff
-       KSG: function(GG, bG) {
-         GG.Ah.lE.forEach((ZG => {
-           if (ZG instanceof CG) return void ZG.pGG(bG, GG.wf.zf);
+       OSM: function(MM, rM) {
+         MM.YJ.aG.forEach((iM => {
+           if (iM instanceof WM) return void iM.rMM(rM, MM.Cm.Am);
```

#### 116. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L709` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L745) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L709)

```diff
-             wG.worldOffset.x = -GG.wf.zf[0], wG.worldOffset.y = -GG.wf.zf[1], wG.worldOffset.z = -GG.wf.zf[2]
+             OM.worldOffset.x = -MM.Cm.Am[0], OM.worldOffset.y = -MM.Cm.Am[1], OM.worldOffset.z = -MM.Cm.Am[2]
```

#### 117. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L714-L715` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L750-L751) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L714-L715)

```diff
-         const wG = new kG.e(bG, GG.Ah, null, void 0, void 0, !1);
-         return (0, sG.g)(bG, ZG, GG.Ah, wG), wG
+         const OM = new PM.d(rM, MM.YJ, null, void 0, void 0, !1);
+         return (0, BM.h)(rM, iM, MM.YJ, OM), OM
```

#### 118. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L717-L719` → after: `L753-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L753-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L753-L755) · [Before (L717-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L717-L719)

```diff
-       sh: Yb,
-       QSG: function(GG, bG) {
-         return ub.origin.oW(bG.origin), ub.direction.oW(bG.direction), ub.length = bG.length, ub.epsilon = bG.epsilon, ub.QSG(GG, !1, void 0, !1, void 0, !0).pickedPoint
+       NJ: Jr,
+       iSM: function(MM, rM) {
+         return sr.origin.jR(rM.origin), sr.direction.jR(rM.direction), sr.length = rM.length, sr.epsilon = rM.epsilon, sr.iSM(MM, !1, void 0, !1, void 0, !0).pickedPoint
```

#### 119. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L723` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L759) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L723)

```diff
-   41515: (GG, bG, ZG) => {
+   42233: (MM, rM, iM) => {
```

#### 120. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L726-L727` → after: `L762-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L762-L763) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L726-L727)

```diff
-       g: () => rG,
-       i: () => tG
+       i: () => lM,
+       m: () => IM
```

#### 121. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L729-L742` → after: `L765-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L765-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L765-L778) · [Before (L729-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L729-L742)

```diff
-     var wG = ZG(40644),
-       SG = ZG(41519),
-       LG = ZG(41574),
-       yG = ZG(41527),
-       kG = ZG(38218),
-       UG = ZG(38234),
-       YG = ZG(38238),
-       VG = ZG(38243),
-       pG = ZG(37559),
-       fG = ZG(37567),
-       QG = ZG(41531),
-       KG = ZG(37547),
-       hG = ZG(37550),
-       dG = ZG(37532);
+     var OM = iM(41374),
+       SM = iM(42241),
+       jM = iM(42283),
+       aM = iM(42248),
+       PM = iM(38797),
+       nM = iM(38809),
+       QM = iM(38815),
+       zM = iM(38822),
+       LM = iM(38227),
+       mM = iM(38233),
+       HM = iM(42256),
+       hM = iM(38198),
+       JM = iM(38217),
+       dM = iM(38188);
```

#### 122. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L748` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L784) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L748)

```diff
-         BQ: GG
+         jL: MM
```

#### 123. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L753` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L789) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L753)

```diff
-       const bG = class extends QG.b {
+       const rM = class extends HM.d {
```

#### 124. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L755-L756` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L791-L792) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L755-L756)

```diff
-             const wG = (0, hG.eb)(bG),
-               SG = wG && (0, hG.z)(wG, GG.name);
+             const OM = (0, JM.Y)(rM),
+               SM = OM && (0, JM.v)(OM, MM.name);
```

#### 125. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L758` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L794) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L758)

```diff
-             super(bG, GG.name, GG.priority, SG ? SG.defines : GG.defines(...yG), !1), this.featureState = void 0, this.featureState = ZG, this._pluginManager._addPlugin(this), this._enable(!0), (0, hG.B)(this._material, GG, this.featureState, this._pluginDefineNames)
+             super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
```

#### 126. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L764` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L800) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L764)

```diff
-             return GG === dG.c.GLSL || GG === dG.c.WGSL
+             return MM === dM.b.GLSL || MM === dM.b.WGSL
```

#### 127. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L767-L768` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L803-L804) · [Before (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L767-L768)

```diff
-         ZG = (0, KG.j)(GG);
-       for (const [wG, SG] of Object.entries(KG.e)) {
+         iM = (0, hM.i)(MM);
+       for (const [OM, SM] of Object.entries(hM.d)) {
```

#### 128. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L781-L784` → after: `L817-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L817-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L817-L820) · [Before (L781-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L781-L784)

```diff
-     class zG extends(rG(kG.c)) {}
-     var EG = ZG(40197),
-       oG = ZG(41539),
-       XG = ZG(41544);
+     class EM extends(lM(PM.b)) {}
+     var UM = iM(40931),
+       GM = iM(42260),
+       CM = iM(42265);
```

#### 129. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L787` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L823) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L787)

```diff
-       return (0, XG.g)(ZG, bG.urls, (() => async function(GG, bG, ZG) {
+       return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
```

#### 130. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L795` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L831) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L795)

```diff
-             pixels: yG && yG.byteLength === wG * wG * LG * 4 ? yG : null !== (SG = iG.get(GG.getInternalTexture())) && void 0 !== SG ? SG : GG._readPixelsSync(),
+             pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
```

#### 131. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L798` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L834) · [Before (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L798)

```diff
-         })), LG = ZG.CK().getCaps().texture2DArrayMaxLayerCount, kG = (0, XG.c)(SG, wG, LG).map((GG => {
+         })), jM = iM.ph().getCaps().texture2DArrayMaxLayerCount, PM = (0, CM.c)(SM, OM, jM).map((MM => {
```

#### 132. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L804` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L840) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L804)

```diff
-             atlas: new oG.b(bG, wG, wG, SG, EG.b.TEXTUREFORMAT_RGBA, ZG, !0, !1, yG.d.NEAREST_NEAREST_MIPLINEAR),
+             atlas: new GM.e(rM, OM, OM, SM, UM.e.TEXTUREFORMAT_RGBA, iM, !0, !1, aM.c.NEAREST_NEAREST_MIPLINEAR),
```

#### 133. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L811` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L847) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L811)

```diff
-             const ZG = bG.createRawTexture(new Uint8Array(4), 1, 1, EG.b.TEXTUREFORMAT_RGBA, !1, !1, yG.d.NEAREST_SAMPLINGMODE);
+             const iM = rM.createRawTexture(new Uint8Array(4), 1, 1, UM.e.TEXTUREFORMAT_RGBA, !1, !1, aM.c.NEAREST_SAMPLINGMODE);
```

#### 134. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L813` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L849) · [Before (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L813)

```diff
-           }(wG, ZG.CK()), iG.set(wG, SG[bG].pixels))
+           }(OM, iM.ph()), bM.set(OM, SM[rM].pixels))
```

#### 135. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L818-L819` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L854-L855) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L818-L819)

```diff
-     var CG = ZG(38248);
-     class WG extends(rG(UG.i)) {
+     var wM = iM(38829);
+     class tM extends(lM(nM.g)) {
```

#### 136. `bundles/bloxd.io/chunks/js/babylon-backend.js` (Changed code · before: `L824` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115dR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-7b57d0b0f82943f53f25aaeabf45cdbe95d65c889f855fe467f9fd4db116115d) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/babylon-backend.js#L860) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/babylon-backend.js#L824)

```diff
-               console.error(`Failed to build the texture arrays, at atlas ${bG}`, GG)
+               console.error(`Failed to build the texture arrays, at atlas ${rM}`, MM)
```
