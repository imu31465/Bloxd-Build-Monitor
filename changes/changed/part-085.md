# Changed — Bundle Modifications Report (Part 085 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `85 / 99` (**363** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 084](part-084.md) · [Part 086 →](part-086.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (141 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf)

#### 53. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3812` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812)

```diff
-                           if (rM.media && "string" == typeof rM.media.mediaText) return `@media ${rM.media.mediaText} {`;
+                           if (XU.media && "string" == typeof XU.media.mediaText) return `@media ${XU.media.mediaText} {`;
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816)

```diff
-                             return `${MM.selectorText} {${iM?" "+iM:""}`
+                             return `${UU.selectorText} {${zU?" "+zU:""}`
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818)

```diff
-                           if ("containerName" in rM) return "string" != typeof rM.containerQuery || rM.containerName && !dr.test(rM.containerName) ? null : `@container ${rM.containerName?`${rM.containerName} `:""}${rM.containerQuery} {`;
+                           if ("containerName" in XU) return "string" != typeof XU.containerQuery || XU.containerName && !tX.test(XU.containerName) ? null : `@container ${XU.containerName?`${XU.containerName} `:""}${XU.containerQuery} {`;
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827)

```diff
-                             return "" === OM || "Object" === OM || "CSSSupportsRule" === OM ? `@supports ${rM.conditionText} {` : null
+                             return "" === cU || "Object" === cU || "CSSSupportsRule" === cU ? `@supports ${XU.conditionText} {` : null
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829)

```diff
-                           return "string" == typeof rM.name ? "keyText" in rM.cssRules[0] ? dr.test(rM.name) ? `@keyframes ${rM.name} {` : null : "" === rM.name ? "@layer {" : yr.test(rM.name) ? `@layer ${rM.name} {` : null : null
+                           return "string" == typeof XU.name ? "keyText" in XU.cssRules[0] ? tX.test(XU.name) ? `@keyframes ${XU.name} {` : null : "" === XU.name ? "@layer {" : gX.test(XU.name) ? `@layer ${XU.name} {` : null : null
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913)

```diff
-                     let aM = MM > 0 ? MM : 1;
+                     let AU = UU > 0 ? UU : 1;
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942)

```diff
-                   text: () => iM ? OM : null,
+                   text: () => zU ? cU : null,
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981)

```diff
-                   zM && this.pendingDeferredSheets.delete(aM), DM(LM = uM() - nM, null != (mM = QM) ? mM : RM) || (BM.totalMs += LM, LM > BM.slowestSliceMs && (BM.slowestSliceMs = LM))
+                   EU && this.pendingDeferredSheets.delete(AU), rU(YU = CU() - oU, null != (NU = DU) ? NU : wU) || (lU.totalMs += YU, YU > lU.slowestSliceMs && (lU.slowestSliceMs = YU))
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4187` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187)

```diff
-           } : void 0 !== EM ? EM : {
+           } : void 0 !== GU ? GU : {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228)

```diff
-                   const MM = DO.lD(OM.node.id);
+                   const UU = Oc.icU(cU.node.id);
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562)

```diff
-               const iM = DO.lD(rM);
+               const zU = Oc.icU(XU);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712)

```diff
-                 jM = null !== (MM = null !== (rM = null !== (iM = null !== (OM = SM.fullscreenElement) && void 0 !== OM ? OM : SM.webkitFullscreenElement) && void 0 !== iM ? iM : SM.mozFullScreenElement) && void 0 !== rM ? rM : SM.msFullscreenElement) && void 0 !== MM ? MM : null … [truncated]
+                 QU = null !== (UU = null !== (XU = null !== (zU = null !== (cU = yU.fullscreenElement) && void 0 !== cU ? cU : yU.webkitFullscreenElement) && void 0 !== zU ? zU : yU.mozFullScreenElement) && void 0 !== XU ? XU : yU.msFullscreenElement) && void 0 !== UU ? UU : null … [truncated]
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765)

```diff
-       new RegExp(`^${fO.source}`, "i"), new RegExp(fO.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${fc.source}`, "i"), new RegExp(fc.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788)

```diff
-           return "symbol" == NO(rM) ? rM : rM + ""
+           return "symbol" == Hc(XU) ? XU : XU + ""
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4804` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804)

```diff
-             return this.functionName ? `${this.functionName} (${this.fileName}:${MM}:${rM})` : `${this.fileName}:${MM}:${rM}`
+             return this.functionName ? `${this.functionName} (${this.fileName}:${UU}:${XU})` : `${this.fileName}:${UU}:${XU}`
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817)

```diff
-             if (!rM) throw new Error(`Cannot parse given url: ${MM}`);
+             if (!XU) throw new Error(`Cannot parse given url: ${UU}`);
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919)

```diff
-           SM.length > 1 && (iM += `:eq(${SM.indexOf(MM)})`), rM = iM + (rM ? ">" + rM : ""), MM = OM
+           yU.length > 1 && (zU += `:eq(${yU.indexOf(UU)})`), XU = zU + (XU ? ">" + XU : ""), UU = cU
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957)

```diff
-             return iM.stringLengthLimit && rM.length > iM.stringLengthLimit && (rM = `${rM.slice(0,iM.stringLengthLimit)}...`), rM
+             return zU.stringLengthLimit && XU.length > zU.stringLengthLimit && (XU = `${XU.slice(0,zU.stringLengthLimit)}...`), XU
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002)

```diff
-             rM.reason instanceof Error ? (iM = rM.reason, SM = [VO(`Uncaught (in promise) ${iM.name}: ${iM.message}`, OM.stringifyOptions)]) : (iM = new Error, SM = [VO("Uncaught (in promise)", OM.stringifyOptions), VO(rM.reason, OM.stringifyOptions)]), MM({
+             XU.reason instanceof Error ? (zU = XU.reason, yU = [Kc(`Uncaught (in promise) ${zU.name}: ${zU.message}`, cU.stringifyOptions)]) : (zU = new Error, yU = [Kc("Uncaught (in promise)", cU.stringifyOptions), Kc(XU.reason, cU.stringifyOptions)]), UU({
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064)

```diff
-                   return "function" == typeof MM ? null !== (rM = MM.__rrweb_layer__) && void 0 !== rM ? rM : MM.__posthog_layer__ : void 0
+                   return "function" == typeof UU ? null !== (XU = UU.__rrweb_layer__) && void 0 !== XU ? XU : UU.__posthog_layer__ : void 0
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086)

```diff
-       const aS = null != rS ? rS : {},
+       const yy = null != hc ? hc : {},
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104)

```diff
-         return rM > iM && (OM.warn("min cannot be greater than max."), rM = iM), yS(MM) ? MM > iM ? (OM.warn(" cannot be  greater than max: " + iM + ". Using max value instead."), iM) : rM > MM ? (OM.warn(" cannot be less than min: " + rM + ". Using min value instead."), rM) : MM … [truncated]
+         return XU > zU && (cU.warn("min cannot be greater than max."), XU = zU), ay(UU) ? UU > zU ? (cU.warn(" cannot be  greater than max: " + zU + ". Using max value instead."), zU) : XU > UU ? (cU.warn(" cannot be less than min: " + XU + ". Using min value instead."), XU) : UU … [truncated]
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146)

```diff
-           }(eS, `Native gzip produced invalid output: ${MM}`)
+           }(Zy, `Native gzip produced invalid output: ${UU}`)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245)

```diff
-               iM.error(`You must initialize PostHog before calling ${MM}`)
+               zU.error(`You must initialize PostHog before calling ${UU}`)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247)

```diff
-             createLogger: (rM, iM) => WS(`${MM} ${rM}`, iM)
+             createLogger: (XU, zU) => wy(`${UU} ${XU}`, zU)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5266` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266)

```diff
-         } = null != OM ? OM : {};
+         } = null != cU ? cU : {};
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280)

```diff
-           if (LS(MM)) return null !== (rM = MM.__posthog_layer__) && void 0 !== rM ? rM : MM.__rrweb_layer__
+           if (Dy(UU)) return null !== (XU = UU.__posthog_layer__) && void 0 !== XU ? XU : UU.__rrweb_layer__
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347)

```diff
-             return hS(MM) && MM ? MM : rM
+             return Ny(UU) && UU ? UU : XU
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5374` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374)

```diff
-         return Math.min(cS, null !== (rM = MM.payloadSizeLimitBytes) && void 0 !== rM ? rM : cS)
+         return Math.min(by, null !== (XU = UU.payloadSizeLimitBytes) && void 0 !== XU ? XU : by)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5406` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406)

```diff
-         return hS(SM) && (SM = parseInt(SM)), SM > iM ? `[SessionRecording] ${OM} body too large to record (${SM} bytes)` : MM
+         return Ny(yU) && (yU = parseInt(yU)), yU > zU ? `[SessionRecording] ${cU} body too large to record (${yU} bytes)` : UU
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506)

```diff
-         return lS(aM) ? aM : jM(aM)
+         return ty(AU) ? AU : QU(AU)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608)

```diff
-         return `${gj}: ${MM}`
+         return `${dQ}: ${UU}`
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5612` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612)

```diff
-         return `[SessionReplay] Body too large to record (> ${MM} bytes)`
+         return `[SessionReplay] Body too large to record (> ${UU} bytes)`
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739)

```diff
-             if (jM && aM) return `Content-Type ${jM} is not supported`;
+             if (QU && AU) return `Content-Type ${QU} is not supported`;
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110)

```diff
-         return 0 === rM ? Ha : (null == MM ? void 0 : MM.get_property(iM ? OM + iM : SM)) === jM ? La : ma
+         return 0 === XU ? YA : (null == UU ? void 0 : UU.get_property(zU ? cU + zU : yU)) === QU ? DA : EA
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6116` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116)

```diff
-           return "regex" === rM.matching && (null !== (OM = null == iM ? void 0 : iM.get(rM.url)) && void 0 !== OM ? OM : new RegExp(rM.url)).test(MM)
+           return "regex" === XU.matching && (null !== (cU = null == zU ? void 0 : zU.get(XU.url)) && void 0 !== cU ? cU : new RegExp(XU.url)).test(UU)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121)

```diff
-         return MM.includes("trigger_activated") ? La : MM.includes("trigger_pending") ? ma : Ha
+         return UU.includes("trigger_activated") ? DA : UU.includes("trigger_pending") ? EA : YA
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268)

```diff
-                   jM = lS(rM) ? !0 === rM : iM ? rM === iM : !!rM
+                   QU = ty(XU) ? !0 === XU : zU ? XU === zU : !!XU
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381)

```diff
-         return rM ? aa : "trigger_activated" === iM ? Pa : "trigger_pending" === iM ? na : !1 === MM.isSampled ? ja : Pa
+         return XU ? yA : "trigger_activated" === zU ? QA : "trigger_pending" === zU ? AA : !1 === UU.isSampled ? cA : QA
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392)

```diff
-         return iM && "trigger_pending" === rM ? na : iM && "trigger_disabled" === rM || OM && !MM.isSampled ? ja : !0 === MM.isSampled ? aa : Pa
+         return zU && "trigger_pending" === XU ? AA : zU && "trigger_disabled" === XU || cU && !UU.isSampled ? cA : !0 === UU.isSampled ? yA : QA
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520)

```diff
-           var OM = new(MM instanceof Da ? Da : MM instanceof ka ? ka : sa)(iM - rM);
+           var cU = new(UU instanceof OA ? OA : UU instanceof SA ? SA : qA)(zU - XU);
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696)

```diff
-           }, this.vt = MM => this._rrweb.mirror.lD(MM), this.bt = MM => {
+           }, this.vt = UU => this._rrweb.mirror.icU(UU), this.bt = UU => {
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698)

```diff
-             return (null !== (rM = null === (iM = MM.removes) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : 0) + (null !== (OM = null === (SM = MM.attributes) || void 0 === SM ? void 0 : SM.length) && void 0 !== OM ? OM : 0) + (null !== (jM = null === (aM = MM.te … [truncated]
+             return (null !== (XU = null === (zU = UU.removes) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0) + (null !== (cU = null === (yU = UU.attributes) || void 0 === yU ? void 0 : yU.length) && void 0 !== cU ? cU : 0) + (null !== (QU = null === (AU = UU.te … [truncated]
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6728-L6729` → after: `L6728-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729) · [Before (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729)

```diff
-             bucketSize: null !== (iM = this.it.bucketSize) && void 0 !== iM ? iM : 100,
-             refillRate: null !== (OM = this.it.refillRate) && void 0 !== OM ? OM : 10,
+             bucketSize: null !== (zU = this.it.bucketSize) && void 0 !== zU ? zU : 100,
+             refillRate: null !== (cU = this.it.refillRate) && void 0 !== cU ? cU : 10,
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733)

```diff
-           }), this.dt = null !== (SM = this.it.bytesBucketSize) && void 0 !== SM ? SM : 0, this.ht = null !== (jM = this.it.bytesRefillRate) && void 0 !== jM ? jM : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
+           }), this.dt = null !== (yU = this.it.bytesBucketSize) && void 0 !== yU ? yU : 0, this.ht = null !== (QU = this.it.bytesRefillRate) && void 0 !== QU ? QU : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735)

```diff
-           this.xt = yS(aM) && Number.isFinite(aM) && aM > 0 ? aM : 3e5
+           this.xt = ay(AU) && Number.isFinite(AU) && AU > 0 ? AU : 3e5
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6858` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858)

```diff
-           const OM = "person" === MM.type ? iM : rM,
+           const cU = "person" === UU.type ? zU : XU,
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869)

```diff
-         return rM ? MM : "!" + MM
+         return XU ? UU : "!" + UU
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904)

```diff
-             return yS(iM) ? iM : null
+             return ay(zU) ? zU : null
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930)

```diff
-             zM && (LM ? this.qt("sampled") : eP.warn(`Sample rate (${iM}) has determined that this sessionId (${MM}) will not be sent to the server.`)), null === (rM = this._instance.persistence) || void 0 === rM || rM.register({
+             EU && (YU ? this.qt("sampled") : ZF.warn(`Sample rate (${zU}) has determined that this sessionId (${UU}) will not be sent to the server.`)), null === (XU = this._instance.persistence) || void 0 === XU || XU.register({
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008)

```diff
-               return SM ? aa : OM ? na : ja
+               return yU ? yA : cU ? AA : cA
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7069` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069)

```diff
-                 QM = "string" == typeof rM && rM !== MM, zM = yS(iM) && iM !== jM, nM = rM === MM && yS(iM) && iM === jM && lS(OM) ? OM : null
+                 DU = "string" == typeof XU && XU !== UU, EU = ay(zU) && zU !== QU, oU = XU === UU && ay(zU) && zU === QU && ty(cU) ? cU : null
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7125` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125)

```diff
-             return this.Gt.flatMap((rM => "trigger_pending" !== rM.triggerStatusNoSideEffects(MM) ? [] : rM.getPendingTriggerConditions(MM).map((MM => `trigger group "${rM.group.name}": ${MM}`))))
+             return this.Gt.flatMap((XU => "trigger_pending" !== XU.triggerStatusNoSideEffects(UU) ? [] : XU.getPendingTriggerConditions(UU).map((UU => `trigger group "${XU.group.name}": ${UU}`))))
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280)

```diff
-           SM = 0 > OM ? iM : iM.slice(OM + 1);
+           yU = 0 > cU ? zU : zU.slice(cU + 1);
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282)

```diff
-           return rM(SM) ? SM : void 0
+           return XU(yU) ? yU : void 0
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7306` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306)

```diff
-           return SM.length ? SM : void 0
+           return yU.length ? yU : void 0
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318)

```diff
-               iM = "string" == typeof MM ? [MM] : zS(MM) ? MM : [],
+               zU = "string" == typeof UU ? [UU] : oy(UU) ? UU : [],
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330)

```diff
-           const OM = "@type" === QM ? jM.length ? "string" == typeof SM ? jM[0] : jM : void 0 : "@id" === QM ? FP(NP(MM, QM), rM) : vP(NP(MM, QM), iM.maskUrl);
+           const cU = "@type" === DU ? QU.length ? "string" == typeof yU ? QU[0] : QU : void 0 : "@id" === DU ? sF(HF(UU, DU), XU) : VF(HF(UU, DU), zU.maskUrl);
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7348` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348)

```diff
-         return HS(nM) || XP(PM, "@graph", nM), Object.keys(PM).length ? PM : null
+         return Yy(oU) || mF(FU, "@graph", oU), Object.keys(FU).length ? FU : null
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534)

```diff
-         return zS(MM) && 0 === MM.length ? (mn = null !== (rM = mn) && void 0 !== rM ? rM : Qn([]), mn) : Qn(MM)
+         return oy(UU) && 0 === UU.length ? (Do = null !== (XU = Do) && void 0 !== XU ? XU : Ao([]), Do) : Ao(UU)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544)

```diff
-           return zS(MM) && 0 === MM.length ? mn || (Hn = null !== (rM = Hn) && void 0 !== rM ? rM : zn([]).then((MM => (mn = MM, MM))).catch((MM => {
+           return oy(UU) && 0 === UU.length ? Do || (Eo = null !== (XU = Eo) && void 0 !== XU ? XU : Fo([]).then((UU => (Do = UU, UU))).catch((UU => {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665)

```diff
-           return yS(rM) ? rM : null
+           return ay(XU) ? XU : null
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669)

```diff
-           return null !== (MM = null === (rM = this.re) || void 0 === rM ? void 0 : rM.getMinimumDuration(this.sessionId)) && void 0 !== MM ? MM : null
+           return null !== (UU = null === (XU = this.re) || void 0 === XU ? void 0 : XU.getMinimumDuration(this.sessionId)) && void 0 !== UU ? UU : null
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712)

```diff
-             return yS(iM) && yS(OM) ? OM - iM : null
+             return ay(zU) && ay(cU) ? cU - zU : null
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7757-L7760` → after: `L7757-L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760) · [Before (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760)

```diff
-             LM = null !== (jM = null == zM ? void 0 : zM.maskAllInputs) && void 0 !== jM ? jM : null == QM ? void 0 : QM.maskAllInputs,
-             mM = null !== (aM = null == zM ? void 0 : zM.maskTextSelector) && void 0 !== aM ? aM : null == QM ? void 0 : QM.maskTextSelector,
-             HM = null !== (PM = null == zM ? void 0 : zM.blockSelector) && void 0 !== PM ? PM : null == QM ? void 0 : QM.blockSelector,
-             hM = null !== (nM = null == zM ? void 0 : zM.maskAllElementAttributes) && void 0 !== nM ? nM : null == QM ? void 0 : QM.maskAllElementAttributes;
+             YU = null !== (QU = null == EU ? void 0 : EU.maskAllInputs) && void 0 !== QU ? QU : null == DU ? void 0 : DU.maskAllInputs,
+             NU = null !== (AU = null == EU ? void 0 : EU.maskTextSelector) && void 0 !== AU ? AU : null == DU ? void 0 : DU.maskTextSelector,
+             IU = null !== (FU = null == EU ? void 0 : EU.blockSelector) && void 0 !== FU ? FU : null == DU ? void 0 : DU.blockSelector,
+             pU = null !== (oU = null == EU ? void 0 : EU.maskAllElementAttributes) && void 0 !== oU ? oU : null == DU ? void 0 : DU.maskAllElementAttributes;
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7797-L7799` → after: `L7797-L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799) · [Before (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799)

```diff
-             QM = null !== (rM = null !== (iM = null == PM ? void 0 : PM.recordCanvas) && void 0 !== iM ? iM : null == nM ? void 0 : nM.enabled) && void 0 !== rM && rM,
-             zM = null !== (OM = null !== (SM = null == PM ? void 0 : PM.canvasFps) && void 0 !== SM ? SM : null == nM ? void 0 : nM.fps) && void 0 !== OM ? OM : 4;
-           let LM = null !== (jM = null !== (aM = null == PM ? void 0 : PM.canvasQuality) && void 0 !== aM ? aM : null == nM ? void 0 : nM.quality) && void 0 !== jM ? jM : .4;
+             DU = null !== (XU = null !== (zU = null == FU ? void 0 : FU.recordCanvas) && void 0 !== zU ? zU : null == oU ? void 0 : oU.enabled) && void 0 !== XU && XU,
+             EU = null !== (cU = null !== (yU = null == FU ? void 0 : FU.canvasFps) && void 0 !== yU ? yU : null == oU ? void 0 : oU.fps) && void 0 !== cU ? cU : 4;
+           let YU = null !== (QU = null !== (AU = null == FU ? void 0 : FU.canvasQuality) && void 0 !== AU ? AU : null == oU ? void 0 : oU.quality) && void 0 !== QU ? QU : .4;
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7814` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814)

```diff
-           return null != iM ? iM : rM
+           return null != zU ? zU : XU
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827)

```diff
-             QM = !!(lS(PM) ? PM : nM);
+             DU = !!(ty(FU) ? FU : oU);
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7840` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840)

```diff
-           if (this.jL && LS(jM))
+           if (this.FY && Dy(QU))
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873)

```diff
-                   return !iM && rM.isInitial ? iM : OM(OM({}, rM), {}, {
+                   return !zU && XU.isInitial ? zU : cU(cU({}, XU), {}, {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7891` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891)

```diff
-                   return dS(aM) && jM ? (Qj.add(jM), jM) : null != aM ? aM : void 0
+                   return py(AU) && QU ? (FQ.add(QU), QU) : null != AU ? AU : void 0
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7901` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901)

```diff
-               })(this._instance.config, this.jL, MM)), {}, {
+               })(this._instance.config, this.FY, UU)), {}, {
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937)

```diff
-             return null !== (iM = null == OM ? void 0 : OM.name) && void 0 !== iM ? iM : null == OM ? void 0 : OM.url
+             return null !== (zU = null == cU ? void 0 : cU.name) && void 0 !== zU ? zU : null == cU ? void 0 : cU.url
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007)

```diff
-             return yS(MM) && Number.isFinite(MM) && MM >= 1e3 && 36e5 >= MM ? MM : 6e4
+             return ay(UU) && Number.isFinite(UU) && UU >= 1e3 && 36e5 >= UU ? UU : 6e4
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009)

```diff
-           return null !== (rM = null === (iM = this._instance.config.session_recording) || void 0 === iM ? void 0 : iM.full_snapshot_interval_millis) && void 0 !== rM ? rM : 3e5
+           return null !== (XU = null === (zU = this._instance.config.session_recording) || void 0 === zU ? void 0 : zU.full_snapshot_interval_millis) && void 0 !== XU ? XU : 3e5
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039)

```diff
-               const iM = "url" === MM ? vj : Fj;
+               const zU = "url" === UU ? VQ : sQ;
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058)

```diff
-             rM = mS(MM) ? MM : JSON.parse(MM)
+             XU = Ey(UU) ? UU : JSON.parse(UU)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8064` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064)

```diff
-             const OM = null !== (iM = rM.cache_timestamp) && void 0 !== iM ? iM : Date.now();
+             const cU = null !== (zU = XU.cache_timestamp) && void 0 !== zU ? zU : Date.now();
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8186-L8187` → after: `L8186-L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187) · [Before (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187)

```diff
-           const iM = `${this.sessionId}:${MM}`;
-           iM !== this.Vn && (this.Vn = iM, On.info(`holding buffer: ${MM}. nothing is uploaded until the user interacts with the page`))
+           const zU = `${this.sessionId}:${UU}`;
+           zU !== this.Vn && (this.Vn = zU, Uo.info(`holding buffer: ${UU}. nothing is uploaded until the user interacts with the page`))
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8342-L8343` → after: `L8342-L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343) · [Before (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343)

```diff
-           const EM = null !== (OM = null !== (SM = null !== (jM = null == dM ? void 0 : dM.currentSessionId) && void 0 !== jM ? jM : null == yM ? void 0 : yM.nextSessionId) && void 0 !== SM ? SM : null == lM ? void 0 : lM.sessionId) && void 0 !== OM ? OM : this.Xt,
-             UM = null !== (aM = null !== (PM = null !== (nM = null == dM ? void 0 : dM.currentWindowId) && void 0 !== nM ? nM : null == yM ? void 0 : yM.nextWindowId) && void 0 !== PM ? PM : null == lM ? void 0 : lM.windowId) && void 0 !== aM ? aM : this.je;
+           const GU = null !== (cU = null !== (yU = null !== (QU = null == tU ? void 0 : tU.currentSessionId) && void 0 !== QU ? QU : null == gU ? void 0 : gU.nextSessionId) && void 0 !== yU ? yU : null == kU ? void 0 : kU.sessionId) && void 0 !== cU ? cU : this.Xt,
+             BU = null !== (AU = null !== (FU = null !== (oU = null == tU ? void 0 : tU.currentWindowId) && void 0 !== oU ? oU : null == gU ? void 0 : gU.nextWindowId) && void 0 !== FU ? FU : null == kU ? void 0 : kU.windowId) && void 0 !== AU ? AU : this.je;
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8436` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436)

```diff
-           return null !== (MM = null === (rM = this.re) || void 0 === rM ? void 0 : rM.getPendingTriggerConditions(this.sessionId)) && void 0 !== MM ? MM : []
+           return null !== (UU = null === (XU = this.re) || void 0 === XU ? void 0 : XU.getPendingTriggerConditions(this.sessionId)) && void 0 !== UU ? UU : []
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447)

```diff
-             OM = `${this.sessionId}:${iM}`;
+             cU = `${this.sessionId}:${zU}`;
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8450` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450)

```diff
-           }), On.info(`buffering: ${iM}`))
+           }), Uo.info(`buffering: ${zU}`))
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8649` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649)

```diff
-             const MM = null != LM ? LM : {},
+             const UU = null != YU ? YU : {},
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671)

```diff
-                 return null !== (OM = iM(MM)) && void 0 !== OM ? OM : null
+                 return null !== (cU = zU(UU)) && void 0 !== cU ? cU : null
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8676` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676) · [Before (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676)

```diff
-           }), this.ln && (rM.maskAllInputs = null === (SM = this.ln.maskAllInputs) || void 0 === SM || SM, rM.maskTextSelector = null !== (jM = this.ln.maskTextSelector) && void 0 !== jM ? jM : void 0, rM.blockSelector = null !== (aM = this.ln.blockSelector) && void 0 !== aM ? aM … [truncated]
+           }), this.ln && (XU.maskAllInputs = null === (yU = this.ln.maskAllInputs) || void 0 === yU || yU, XU.maskTextSelector = null !== (QU = this.ln.maskTextSelector) && void 0 !== QU ? QU : void 0, XU.blockSelector = null !== (AU = this.ln.blockSelector) && void 0 !== AU ? AU … [truncated]
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8679` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679)

```diff
-           this.Bn = null !== (MM = this.Bn) && void 0 !== MM ? MM : new mP(nM, {
+           this.Bn = null !== (UU = this.Bn) && void 0 !== UU ? UU : new EF(oU, {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8683` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683)

```diff
-               const iM = `Too many mutations on node '${MM}'. Rate limiting. This could be due to SVG animations or something similar`;
+               const zU = `Too many mutations on node '${UU}'. Rate limiting. This could be due to SVG animations or something similar`;
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8713` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713)

```diff
-                 return rM.maskAllElementAttributes || rM.maskAttributeFn || (null == iM ? void 0 : iM.length) && !iM.includes("id") ? sP : iM => {
+                 return XU.maskAllElementAttributes || XU.maskAttributeFn || (null == zU ? void 0 : zU.length) && !zU.includes("id") ? qF : zU => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (179 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L4)

```diff
-   34654: (MM, rM, iM) => {
+   40549: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21)

```diff
-     var PM = iM(34660).d,
-       nM = iM(34663).b,
+     var FU = zU(40557).b,
+       oU = zU(40563).c,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L39)

```diff
-   34663: (MM, rM) => {
+   40563: (UU, XU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L125)

```diff
-     }, rM.b = zM
+     }, XU.c = EU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L127)

```diff
-   34660: (MM, rM) => {
+   40557: (UU, XU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L175)

```diff
-     }, rM.d = jM
+     }, XU.b = QU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L177)

```diff
-   34810: (MM, rM, iM) => {
+   40536: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L181-L325` → after: `L181-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L181-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L181-L209) · [Before (L181-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L181-L325)

```diff
-     var OM = iM(5479),
-       SM = iM(1073),
-       jM = iM(34814),
-       aM = iM.n(jM);
- 
-     function PM() {
-       return aM()('/*! For license information please see sessionReplayVideo.worker.63062aef.worker.js.LICENSE.txt */\n(()=>{var MM={5:()=>{}},rM={};function iM(OM){var SM=rM[OM];if(void 0!==SM)return SM.exports;var jM=rM[OM]={exports:{}};return MM[OM](jM,jM.exports,iM),jM.export … [truncated]
-     }
-     var nM = iM(3057),
-       QM = iM(22),
-       zM = iM(83);
-     class LM {
-       constructor(MM) {
-         this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / MM
-       }
-       setMaxFps(MM) {
- ... (129 more removed lines; see GitHub link above)
+     const cU = {
+         maxFps: 30,
+         bitrate: 178e4,
+         minBitrate: 5e5,
+         maxMacroblocks: 3600,
+         keyframeIntervalMs: 2e3,
+         segmentDurationMs: 3e4,
+         manifestIntervalMs: 3e4,
+         partDurationMs: 4e3,
+         captureBudgetMsPerSecond: 20,
+         captureFrameCostFloorMs: .6,
+         softwareEncoderPlatforms: ["windows", "macos"],
+         videoFrameGrabPlatforms: ["android"],
+         skipLowMemoryDevices: !1
+       },
+       yU = {
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L327-L329` → after: `L211-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L211-L214) · [Before (L327-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L327-L329)

```diff
-       yM = 16777216,
-       lM = [2, 4, 9, 3],
-       EM = OM.h,
+       DU = 16777216;
+     var EU = zU(3788);
+     const YU = [2, 4, 9, 3],
+       NU = EU.i,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L346` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L231) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L346)

```diff
-         this.distinctId = null, this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.u … [truncated]
+         this.eventCount = 0, this.messageCount = 0, this.clickCount = 0, this.keypressCount = 0, this.mouseActivityCount = 0, this.consoleLogCount = 0, this.consoleWarnCount = 0, this.consoleErrorCount = 0, this.firstUrl = null, this.urls = new Set, this.urlsLength = 0, this.time … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L348-L349` → after: `L233-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L233-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L233-L234) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L348-L349)

```diff
-       addMessage(MM) {
-         this.distinctId ||= MM, this.messageCount++
+       addMessage() {
+         this.messageCount++
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L355` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L240) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L355)

```diff
-           return MM.type === OM.g.IncrementalSnapshot ? null === (rM = MM.data) || void 0 === rM ? void 0 : rM.source : void 0
+           return UU.type === EU.e.IncrementalSnapshot ? null === (XU = UU.data) || void 0 === XU ? void 0 : XU.source : void 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L361` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L246) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L361)

```diff
-           if (MM.type === OM.g.Custom && "$json_ld" === (null === iM || void 0 === iM ? void 0 : iM.tag)) return;
+           if (UU.type === EU.e.Custom && "$json_ld" === (null === zU || void 0 === zU ? void 0 : zU.tag)) return;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L368` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L253) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L368)

```diff
-         if (MM.type === OM.g.Plugin && "rrweb/console@1" === (null === SM || void 0 === SM ? void 0 : SM.plugin)) {
+         if (UU.type === EU.e.Plugin && "rrweb/console@1" === (null === cU || void 0 === cU ? void 0 : cU.plugin)) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L375` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L260) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L375)

```diff
-         if (null === this.distinctId) throw new Error("A page recording chunk needs a message before its summary");
+         if (0 === this.messageCount) throw new Error("A page recording chunk needs a message before its summary");
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L407` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L291) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L407)

```diff
-           if (SM = rM ? MM : SM, PM) null !== (jM = OM) && void 0 !== jM && jM.isActive && (iM += Math.max(1, OM.end - OM.start)), OM = {
+           if (yU = XU ? UU : yU, FU) null !== (QU = cU) && void 0 !== QU && QU.isActive && (zU += Math.max(1, cU.end - cU.start)), cU = {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L421` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L305) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L421)

```diff
-         this.chunkChars = MM, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.counter = new bM, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
+         this.chunkChars = UU, this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new gU, this.chunkIndex = 0, this.tailedLines = 0, this.tailedChars = 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L427-L440` → after: `L311-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L311-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L311-L321) · [Before (L427-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L427-L440)

```diff
-         const rM = [];
-         let iM = 0,
-           OM = 1 / 0,
-           SM = -1 / 0;
-         const jM = MM.events.filter(eM);
-         for (const PM of jM) {
-           const jM = JSON.stringify([MM.windowId, PM]) + "\n";
-           rM.push(jM), iM += jM.length, OM = Math.min(OM, PM.timestamp), SM = Math.max(SM, PM.timestamp)
-         }
-         if (0 === rM.length) return null;
-         const aM = !this.dL && this.chars + iM > this.chunkChars ? this.finish() : null;
-         this.counter.addMessage(MM.distinctId);
-         for (const PM of jM) this.counter.addEvent(PM);
-         return this.lines.push(...rM), this.chars += iM, this.startMs = Math.min(this.startMs, OM), this.endMs = Math.max(this.endMs, SM), aM
+         const XU = UU.events.filter(tU),
+           zU = XU.map((XU => JSON.stringify([UU.windowId, XU]) + "\n"));
+         if (0 === zU.length) return [];
+         const cU = [],
+           yU = zU.reduce(((UU, XU) => UU + XU.length), 0);
+         !this.kY && this.chars + yU > this.chunkChars && cU.push(this.finish());
+         let QU = !1;
+         return XU.forEach(((UU, XU) => {
+           const yU = zU[XU];
+           !this.kY && this.chars + yU.length > this.chunkChars && (cU.push(this.finish()), QU = !1), QU || (this.counter.addMessage(), QU = !0), this.counter.addEvent(UU), this.lines.push(yU), this.chars += yU.length, this.startMs = Math.min(this.startMs, UU.timestamp), this.endM … [truncated]
+         })), cU.filter((UU => null !== UU))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L443` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L324) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L443)

```diff
-         if (this.dL) return null;
+         if (this.kY) return null;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L473` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L356) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L473)

```diff
-         this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.counter = new bM, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
+         this.lines = [], this.chars = 0, this.startMs = 1 / 0, this.endMs = -1 / 0, this.holdsSnapshot = !1, this.counter = new gU, this.chunkIndex++, this.tailedLines = 0, this.tailedChars = 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L481` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L390-L391) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L481)

```diff
-         counter: SM
+         counter: yU,
+         holdsSnapshot: QU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L486` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L396) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L486)

```diff
-       return jM.byteLength > dM || aM > yM ? (console.warn(`Session replay: dropped a ${aM}-byte page recording chunk, over the size limits`), null) : {
+       return AU.byteLength > oU || FU > DU ? (console.warn(`Session replay: dropped a ${FU}-byte page recording chunk, over the size limits`), null) : {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L490` → after: `L400-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L400-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L400-L401) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L490)

```diff
-         summary: SM.finish(aM)
+         summary: yU.finish(FU),
+         holdsSnapshot: QU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L493` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L404) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L493)

```diff
-     var uM = iM(34647);
+     var PU = zU(40543);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L496` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L407) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L496)

```diff
-         this.uploader = MM, this.timing = rM, this.journal = iM, this.packer = OM, this.writer = new tM, this.cutNext = !1, this.packing = [], this.tailTimer = null
+         this.uploader = UU, this.timing = XU, this.journal = zU, this.packer = cU, this.writer = new GU, this.cutNext = !1, this.packing = [], this.tailTimer = null, this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L501` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L412) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L501)

```diff
-         null === rM || null !== this.tailTimer || this.writer.dL || (this.tailTimer = setTimeout((() => {
+         null === XU || null !== this.tailTimer || this.writer.kY || (this.tailTimer = setTimeout((() => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L511` → after: `L422-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L422-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L422-L437) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L511)

```diff
-         this.pack(this.writer.finish())
+         const UU = this.writer.finish();
+         this.pack(null === UU ? [] : [UU])
+       }
+       cutOnTimer() {
+         this.cutForVideoSinceTick || this.cut(), this.cutForVideoSinceTick = !1, this.tickedSinceVideoCut = !0
+       }
+       cutForVideo() {
+         if (!this.tickedSinceVideoCut || this.writer.kY) return;
+         this.tickedSinceVideoCut = !1, this.cutForVideoSinceTick = !0, this.cut();
+         const UU = this.packing[this.packing.length - 1];
+         return void 0 !== UU ? new Promise((XU => {
+           const zU = UU.onQueued;
+           UU.onQueued = () => {
+             null === zU || void 0 === zU || zU(), XU()
+           }
+         })) : void 0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L517-L519` → after: `L443-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L443-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L443-L456) · [Before (L517-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L517-L519)

```diff
-         if (this.timing.packsNow()) {
-           for (const MM of this.packing) MM.packed ??= (0, uM.c)(MM.text.text);
-           return this.packer.forgetWaiting(), null !== MM && this.packing.push({
+         const XU = UU.filter((UU => {
+             const XU = function(UU) {
+               let {
+                 text: XU
+               } = UU;
+               return XU.length <= DU || (console.warn(`Session replay: dropped a page recording chunk of ${XU.length} characters, over the size limits`), !1)
+             }(UU);
+             var zU;
+             XU || (null === (zU = this.journal) || void 0 === zU || zU.domTailDropped(UU.chunkIndex));
+             return XU
+           })),
+           zU = this.journalWorks() && XU.every((UU => BU(UU))) && this.packing.every((UU => UU.journalled));
+         if (this.timing.packsNow(zU)) {
+           for (const UU of XU) this.packing.push({
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L521-L522` → after: `L458-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L458-L462) · [Before (L521-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L521-L522)

```diff
-             packed: (0, uM.c)(MM.text)
-           }), void this.queuePacked()
+             packed: null,
+             journalled: this.tailHolds(UU)
+           });
+           for (const UU of [...this.packing]) this.packHere(UU);
+           return this.packer.forgetWaiting(), void this.queuePacked()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L524-L526` → after: `L464-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L464-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L464-L467) · [Before (L524-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L524-L526)

```diff
-         if (null === MM) return;
-         const rM = null === this.journal ? null : function(MM) {
-           let {
+         for (const cU of XU) {
+           const UU = null === this.journal ? null : ZU(cU);
+           null !== UU && this.journal.domTail(UU);
+           const XU = {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L528-L552` → after: `L469-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L469-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L469-L492) · [Before (L528-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L528-L552)

```diff
-             startMs: iM,
-             endMs: OM,
-             counter: SM,
-             chunkIndex: jM,
-             tailedChars: aM
-           } = MM;
-           return aM === rM.length || rM.length > wM ? null : {
-             chunkIndex: jM,
-             fromChar: aM,
-             text: rM.slice(aM),
-             startMs: iM,
-             endMs: OM,
-             summary: SM.finish(0)
-           }
-         }(MM);
-         null !== rM && this.journal.domTail(rM);
- ... (9 more removed lines; see GitHub link above)
+             packed: null,
+             journalled: this.tailHolds(cU)
+           };
+           this.packing.push(XU), this.packer.pack(cU.text).then((UU => {
+             XU.packed = UU, this.queuePacked()
+           }), (() => {
+             this.packHere(XU), this.queuePacked()
+           }))
+         }
+       }
+       packHere(UU) {
+         const XU = this.packing.indexOf(UU);
+         if (!(XU < 0)) try {
+           UU.packed ??= (0, PU.b)(UU.text.text)
+         } catch (yU) {
+           var zU, cU;
+ ... (8 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L558` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L498-L499) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L558)

```diff
-             packed: rM
+             packed: XU,
+             onQueued: zU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L560` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L501) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L560)

```diff
-           this.enqueue(MM.chunkIndex, gM(MM, rM))
+           this.enqueue(UU.chunkIndex, RU(UU, XU)), null === zU || void 0 === zU || zU()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L569` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L510-L511) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L569)

```diff
-           summary: jM
+           summary: QU,
+           holdsSnapshot: AU
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L582` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L524-L525) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L582)

```diff
-           }
+           },
+           dropLast: AU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L589-L590` → after: `L546-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L546-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L546-L558) · [Before (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L589-L590)

```diff
-     function pM() {
-       return aM()('(()=>{var MM={7:(MM,rM,iM)=>{function OM(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function SM(MM){return MM instanceof Uint8Array&&(!OM()||!Buffer.isBuffer(MM))}function jM(MM){return MM i … [truncated]
+     function rU(UU, XU, zU, cU) {
+       const yU = wU.k.getItem(UU);
+       return yU === XU ? [(0, eU.getOperatingSystem)()] : yU === zU ? [] : cU
+     }
+     const uU = "/v1/release",
+       fU = oU;
+     var iU = zU(1220),
+       HU = zU(40578),
+       MU = zU(40586),
+       vU = zU(40594);
+ 
+     function VU(UU) {
+       return `replayJoiner/${UU}`
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L593-L641` → after: `L561-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L561-L563) · [Before (L593-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L593-L641)

```diff
-       constructor() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
-         this.quietMs = MM, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null
-       }
-       pack(MM) {
-         return new Promise(((rM, iM) => {
-           var OM;
-           const SM = null !== (OM = this.worker) && void 0 !== OM ? OM : this.start();
-           if (null === SM) return void iM(this.failure);
-           const jM = this.nextId++;
-           this.waiting.set(jM, {
-             resolve: rM,
-             reject: iM
-           });
-           const aM = {
-             id: jM,
- ... (33 more removed lines; see GitHub link above)
+       constructor(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HU.d;
+         this.baseUrl = UU, this.keepalive = XU
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L643-L646` → after: `L565-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L565-L569) · [Before (L643-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L643-L646)

```diff
-       startWatchdog() {
-         return setTimeout((() => {
-           this.watchdog = null, this.broke(`no reply in ${this.quietMs} ms`)
-         }), this.quietMs)
+       postPart(UU, XU) {
+         const zU = (0, MU.d)(UU, XU),
+           cU = 15e3 + (yU = zU.size, Math.ceil(yU / 16384 * 1e3));
+         var yU;
+         return this.post("/v1/part", zU, zU.size, cU, UU.sequence)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L648-L649` → after: `L571-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L571-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L571-L573) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L648-L649)

```diff
-       stopWatchdog() {
-         null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
+       finish(UU) {
+         const XU = JSON.stringify(UU);
+         return this.post("/v1/finish", XU, (0, HU.e)(XU), 3e4, UU.sequence)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L651-L652` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L575-L576) · [Before (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L651-L652)

```diff
-       broke(MM) {
-         console.warn(`Session replay: page recording worker failed, packing on the main thread: ${MM}`), this.fail(new Error(`page recording worker failed: ${MM}`))
+       release(UU) {
+         return !this.keepalive.isInFlight(VU(UU.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${uU}`, JSON.stringify(UU))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L654-L661` → after: `L578-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L578-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L578-L590) · [Before (L654-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L654-L661)

```diff
-       fail(MM) {
-         var rM;
-         this.failure ??= MM, this.stopWatchdog(), null === (rM = this.worker) || void 0 === rM || rM.terminate(), this.worker = null;
-         for (const {
-             reject: iM
-           }
-           of this.waiting.values()) iM(MM);
-         this.waiting.clear()
+       async post(UU, XU, zU, cU, yU) {
+         const QU = `${this.baseUrl}${UU}`,
+           AU = {
+             method: "POST",
+             headers: {
+               "Content-Type": "text/plain"
+             },
+             body: XU,
+             signal: (0, iU.n)(cU)
+           },
+           FU = zU <= HU.c ? await this.keepalive.fetch(QU, AU, zU, VU(yU)) : await fetch(QU, AU);
+         if (!FU.ok) throw new vU.b(`Part joiner ${UU} failed with ${FU.status}`, FU.status);
+         return await FU.json()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L674-L685` → after: `L595-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L595-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L595-L601) · [Before (L674-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L674-L685)

```diff
-       const rM = ZM.g.getItem(MM);
-       return "number" === typeof rM && Number.isFinite(rM) ? rM : null
-     }
-     const NM = {
-         desktop: 12582912,
-         mobile: 6291456,
-         tablet: 6291456
-       },
-       AM = 12e4;
-     class xM extends Error {
-       constructor(MM, rM) {
-         super(rM), this.reason = MM
+       return {
+         releaseUrl: `${UU.url}${uU}`,
+         token: UU.token,
+         relay: {
+           url: `${UU.url}/v1/relay`,
+           maxBytes: fU
+         }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L688-L888` → after: `L604-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L604-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L604-L617) · [Before (L688-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L688-L888)

```diff
-     class vM {
-       constructor(MM, rM, iM, OM, SM) {
-         this.access = MM, this.uploadToken = rM, this.transport = iM, this.callbacks = OM, this.options = SM, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
-           handBacks: {
-             unreachable: 0,
-             refused: 0,
-             closed: 0,
-             shortStored: 0,
-             missing: 0,
-             byteCap: 0
-           },
-           releases: 0
-         }
-       }
-       get accepting() {
-         return !this.refused && this.options.nowMs() >= this.downUntilMs && this.segments.size < 2 && this.heldBytes() < this.options.maxHeldBytes
- ... (185 more removed lines; see GitHub link above)
+     var mU = zU(7103),
+       lU = zU(40603),
+       xU = zU(40607),
+       JU = zU(40613);
+ 
+     function jU() {
+       return (0, LU.d)().manifestUrl
+     }
+     const KU = {
+       sendIntervalMs: 3e4,
+       lateFromMs: 1 / 0,
+       onSend: () => {},
+       onListed: () => {}
+     };
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L892` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L621) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L892)

```diff
-         this.uploadToken = rM, this.sendEnabled = iM, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Map, t … [truncated]
+         this.uploadToken = XU, this.sendEnabled = zU, this.manifest = void 0, this.creatorGrants = new Map, this.sendTimer = null, this.ackedVideo = new Map, this.ackedTelemetry = new WeakSet, this.ackedGames = new WeakMap, this.ackedGrants = new Set, this.pendingDom = new Set, t … [truncated]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L896` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L625) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L896)

```diff
-         const SM = Math.round((0, sM.e)());
+         const yU = Math.round((0, lU.d)());
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L923` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L652) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L923)

```diff
-         MM > (null !== (iM = null === (OM = this.manifest.still) || void 0 === OM ? void 0 : OM.atMs) && void 0 !== iM ? iM : -1 / 0) && (this.manifest.still = {
+         UU > (null !== (zU = null === (cU = this.manifest.still) || void 0 === cU ? void 0 : cU.atMs) && void 0 !== zU ? zU : -1 / 0) && (this.manifest.still = {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L935-L936` → after: `L664-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L664-L665) · [Before (L935-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L935-L936)

```diff
-       addDomSegment(MM, rM) {
-         this.pendingDom.set(MM, rM), this.sendSoon()
+       addDomSegment(UU) {
+         this.pendingDom.add(UU), this.sendSoon()
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L942-L943` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L671) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L942-L943)

```diff
-         this.gameLeft();
-         const rM = {
+         this.gameLeft(), this.manifest.games.push({
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L945-L946` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L673) · [Before (L945-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L945-L946)

```diff
-           gameDisplayName: null,
-           joinedAtMs: Math.round((0, sM.e)()),
+           joinedAtMs: Math.round((0, lU.d)()),
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L950-L951` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L677) · [Before (L950-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L950-L951)

```diff
-         };
-         return this.manifest.games.push(rM), rM
+         })
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L963` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L697) · [Before (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L963)

```diff
-         MM && null === MM.leftAtMs && (MM.leftAtMs = Math.round((0, sM.e)()))
+         UU && null === UU.leftAtMs && (UU.leftAtMs = Math.round((0, lU.d)()))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L974` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L708) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L974)

```diff
-         if (this.sending) return void(this.queuedSend = jr(null !== (rM = this.queuedSend) && void 0 !== rM ? rM : [], MM));
+         if (this.sending) return void(this.queuedSend = TU(null !== (XU = this.queuedSend) && void 0 !== XU ? XU : [], UU));
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L977` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L711) · [Before (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L977)

```diff
-           this.sending = !1;
+           this.sending = !1, this.retries = "retryLater" === UU ? this.retries + 1 : 0;
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L979` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L713) · [Before (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L979)

```diff
-           null !== rM ? (this.queuedSend = null, this.send(rM)) : "retryLater" === MM && this.sendSoon()
+           null !== XU ? (this.queuedSend = null, this.send(XU)) : "retryLater" === UU && this.retries <= 10 && this.sendSoon()
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L987` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L721) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L987)

```diff
-           of null !== (rM = this.prepareSend(MM)) && void 0 !== rM ? rM : []) {
+           of null !== (XU = this.prepareSend(UU)) && void 0 !== XU ? XU : []) {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L989` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L723) · [Before (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L989)

```diff
-           IM.h.sendBeacon(ir(), JSON.stringify(iM)) || (0, Mr.b)(ir(), iM)
+           HU.d.sendBeacon(jU(), JSON.stringify(zU)) || (0, xU.b)(jU(), zU)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1000` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L734-L735) · [Before (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1000)

```diff
-           for (const rM of iM) rM.ack("uploaded" === MM)
+           for (const XU of zU) XU.ack("uploaded" === UU);
+           this.retries = 0
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1018` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L753) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1018)

```diff
-         this.manifest.endedAtMs = Math.round((0, sM.e)());
+         this.manifest.endedAtMs = Math.round((0, lU.d)());
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1047` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L782) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1047)

```diff
-         return (0, rr.c)(aM, rM)
+         return (0, JU.d)(AU, XU)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1091` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L826) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1091)

```diff
-         for (const [OM, SM] of this.pendingDom) rM.push({
+         for (const cU of this.pendingDom) XU.push({
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1095` → after: `L830-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L830-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L830-L833) · [Before (L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1095)

```diff
-             this.pendingDom.delete(OM), MM && SM()
+             this.pendingDom.delete(cU), UU && this.options.onListed({
+               list: "domSegments",
+               value: cU
+             })
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1116` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L854-L855) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1116)

```diff
-     var ar = iM(2590);
+     var hU = zU(40576),
+       UX = zU(5139);
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1138` → after: `L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L877) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1138)

```diff
-           lateUploadUntilMs: rM.expiresAtMs + OM.l,
+           lateUploadUntilMs: XU.expiresAtMs + hU.e,
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1142` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L881) · [Before (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1142)

```diff
-         }, null === (jM = navigator.locks) || void 0 === jM || jM.request((0, ar.q)(rM.recordingId), (() => new Promise((() => {})))), this.putRecording()
+         }, null === (yU = navigator.locks) || void 0 === yU || yU.request((0, UX.v)(XU.recordingId), (() => new Promise((() => {})))), this.putRecording()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1193` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L935) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1193)

```diff
-         this.record.nextDomSequence = Math.max(null !== (SM = this.record.nextDomSequence) && void 0 !== SM ? SM : 0, MM + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
+         this.record.nextDomSequence = Math.max(null !== (yU = this.record.nextDomSequence) && void 0 !== yU ? yU : 0, UU + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1221` → after: `L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L963) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1221)

```diff
-         ZM.g.setItem(ar.m, !0)
+         wU.k.setItem(UX.k, !0)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1246` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L988) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1246)

```diff
-           }), MM && (this.deps.flushChunks(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()))
+           }), UU && (this.deps.flushTelemetry(), this.deps.stills.upload(), this.deps.manifest.send(this.uploadingTelemetry()), this.deps.cutPageRecording())
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1256` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L998) · [Before (L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1256)

```diff
-           }), this.deps.flushChunks(), this.deps.stills.beacon(), this.sendManifest(), MM.persisted || this.deps.releaseJoined()
+           }), this.deps.flushTelemetry(), this.deps.stills.beacon(), this.sendManifest(), UU.persisted || this.deps.releaseJoined(), this.deps.cutPageRecording()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1281-L1286` → after: `L1023-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1023-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1023-L1036) · [Before (L1281-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1281-L1286)

```diff
-     var zr = iM(34793);
-     const Lr = {
-         count: 1,
-         maxBytes: OM.s
-       },
-       mr = "image/jpeg";
+     var yX = zU(36961),
+       QX = zU.n(yX);
+ 
+     function AX() {
+       return QX()('/*! For license information please see sessionReplayVideo.worker.2385deca.worker.js.LICENSE.txt */\n(()=>{var UU={12:()=>{}},XU={};function zU(cU){var yU=XU[cU];if(void 0!==yU)return yU.exports;var QU=XU[cU]={exports:{}};return UU[cU](QU,QU.exports,zU),QU.expor … [truncated]
+     }
+ 
+     function FX(UU) {
+       return Math.max(2, 2 * Math.floor(UU / 2))
+     }
+ 
+     function oX(UU) {
+       return Math.ceil(UU.width / 16) * Math.ceil(UU.height / 16)
+     }
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1288-L1290` → after: `L1038-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1038-L1039) · [Before (L1288-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1288-L1290)

```diff
-       constructor(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IM.h;
-         this.uploader = MM, this.manifest = rM, this.relay = iM, this.keepalive = OM, this.latest = null, this.queued = null, this.nextSequence = 0, this.refreshTimer = null, this.stopped = !1
+       constructor(UU) {
+         this.intervalMs = void 0, this.nextDueMs = -1 / 0, this.intervalMs = 1e3 / UU
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1292-L1295` → after: `L1041-L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1041-L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1041-L1042) · [Before (L1292-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1292-L1295)

```diff
-       start() {
-         this.prefetchNext(), this.refreshTimer = setInterval((() => {
-           this.prefetchNext()
-         }), 15e5)
+       setMaxFps(UU) {
+         this.intervalMs = 1e3 / UU
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1297-L1308` → after: `L1044-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1044-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1044-L1045) · [Before (L1297-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1297-L1308)

```diff
-       received(MM, rM) {
-         let {
-           bytes: iM,
-           small: OM,
-           atMs: SM
-         } = MM;
-         const jM = iM.byteLength <= Lr.maxBytes ? iM : OM;
-         null !== jM && (this.latest = {
-           bytes: jM,
-           small: OM,
-           atMs: SM
-         }, rM && this.upload())
+       shouldKeep(UU) {
+         return !(UU < this.nextDueMs - .25 * this.intervalMs) && (this.nextDueMs = UU - this.nextDueMs > this.intervalMs ? UU + this.intervalMs : this.nextDueMs + this.intervalMs, !0)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1310-L1332` → after: `L1047-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1047-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1047-L1048) · [Before (L1310-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1310-L1332)

```diff
-       upload() {
-         var MM, rM;
-         const iM = this.latest;
-         if (this.stopped || null === iM || iM.atMs <= (null !== (MM = null === (rM = this.queued) || void 0 === rM ? void 0 : rM.atMs) && void 0 !== MM ? MM : -1 / 0)) return;
-         const OM = this.takeSequence();
-         this.queued = {
-           atMs: iM.atMs,
-           sequence: OM
-         }, this.uploader.enqueue({
-           kind: "still",
-           contentType: mr,
-           bytes: iM.bytes,
-           meta: {
-             type: "still",
-             atMs: iM.atMs,
-             sequence: OM
- ... (7 more removed lines; see GitHub link above)
+       reset() {
+         this.nextDueMs = -1 / 0
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1334-L1335` → after: `L1050-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1050-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1050-L1053) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1334-L1335)

```diff
-       landed(MM) {
-         this.manifest.setStill(MM.atMs, MM.sequence), this.uploader.closeSegment("still", MM.sequence)
+     }
+     class EX {
+       constructor(UU, XU, zU) {
+         this.budgetMsPerSecond = UU, this.minFps = XU, this.smoothedCostMs = zU
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1337-L1338` → after: `L1055-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1055-L1056) · [Before (L1337-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1337-L1338)

```diff
-       dropped(MM) {
-         this.uploader.closeSegment("still", MM.sequence)
+       get averageCostMs() {
+         return this.smoothedCostMs
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1340-L1350` → after: `L1058-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1058-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1058-L1060) · [Before (L1340-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1340-L1350)

```diff
-       beacon() {
-         var MM, rM, iM, OM;
-         const SM = this.latest;
-         if (this.stopped || null === SM || SM.atMs <= (null !== (MM = null === (rM = this.manifest.contents.still) || void 0 === rM ? void 0 : rM.atMs) && void 0 !== MM ? MM : -1 / 0)) return;
-         const jM = (null === (iM = this.queued) || void 0 === iM ? void 0 : iM.atMs) === SM.atMs ? this.queued : null;
-         if (null !== jM && this.keepalive.isInFlight(mr)) return void this.manifest.setStill(SM.atMs, jM.sequence);
-         const aM = null !== (OM = null === jM || void 0 === jM ? void 0 : jM.sequence) && void 0 !== OM ? OM : this.nextSequence,
-           PM = this.uploader.peekTarget("still", aM, 0);
-         if (void 0 !== PM)
-           for (const nM of [SM.bytes, SM.small])
-             if (null !== nM && this.sendBeacon(PM, nM)) return null === jM && this.takeSequence(), void this.manifest.setStill(SM.atMs, aM)
+       record(UU) {
+         const XU = this.affordableFps() < this.minFps ? .5 : .05;
+         this.smoothedCostMs += (UU - this.smoothedCostMs) * XU
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1352` → after: `L1062-L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1062-L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1062-L1197) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1352)

```diff
-       sendBeacon(MM, rM) {
+       maxFps(UU) {
+         const XU = this.affordableFps();
+         return XU < this.minFps ? .1 : Math.min(UU, XU)
+       }
+       affordableFps() {
+         return this.budgetMsPerSecond / this.smoothedCostMs
+       }
+     }
+     class YX {
+       constructor(UU, XU, zU, cU) {
+         let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {};
+         this.worker = UU, this.bitmapGrab = cU, this.onUnavailable = yU, this.render = null, this.frameLimiter = void 0, this.budget = void 0, this.wantedFps = void 0, this.captureFps = void 0, this.failedGrabs = 0, this.unrecoverableGrabFailures = 0, this.pendingGrab = null, thi … [truncated]
+       }
+       get frameCost() {
+         return {
+           averageMs: this.budget.averageCostMs,
+ ... (120 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1354-L1359` → after: `L1199-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1199-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1199-L1202) · [Before (L1354-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1354-L1359)

```diff
-         const SM = null !== (iM = null === (OM = this.relay) || void 0 === OM ? void 0 : OM.beacon({
-           method: "POST",
-           url: MM.url,
-           fields: MM.fields
-         }, rM, mr, this.keepalive)) && void 0 !== iM ? iM : null;
-         if (null !== SM) return SM;
+         null === (UU = this.resizeObserver) || void 0 === UU || UU.disconnect(), null === (XU = this.listeners) || void 0 === XU || XU.abort()
+       }
+       observe(UU) {
+         this.stop(), this.listeners = new AbortController;
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1361-L1364` → after: `L1204-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1204-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1204-L1226) · [Before (L1361-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1361-L1364)

```diff
-           form: jM,
-           byteLength: aM
-         } = (0, zr.f)(MM, rM, mr);
-         return this.keepalive.sendUploadBeacon(MM.url, jM, aM)
+           signal: XU
+         } = this.listeners;
+         UU.addEventListener("webglcontextlost", (() => {
+           this.events.onContextLost()
+         }), {
+           signal: XU
+         }), UU.addEventListener("webglcontextrestored", (() => {
+           this.events.onContextRestored()
+         }), {
+           signal: XU
+         });
+         const zU = UU.getBoundingClientRect();
+         this.size = {
+           width: Math.round(zU.width),
+           height: Math.round(zU.height)
+         }, this.resizeObserver = new ResizeObserver((UU => {
+ ... (7 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1366-L1367` → after: `L1228-L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1228-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1228-L1237) · [Before (L1366-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1366-L1367)

```diff
-       stop() {
-         this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
+     }
+     const pX = {
+         desktop: 12582912,
+         mobile: 6291456,
+         tablet: 6291456
+       },
+       aX = 12e4;
+     class tX extends Error {
+       constructor(UU, XU) {
+         super(XU), this.reason = UU
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1369-L1371` → after: `L1239-L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1239-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1239-L1252) · [Before (L1369-L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1369-L1371)

```diff
-       takeSequence() {
-         const MM = this.nextSequence++;
-         return this.prefetchNext(), MM
+     }
+     class gX {
+       constructor(UU, XU, zU, cU, yU) {
+         this.access = UU, this.uploadToken = XU, this.transport = zU, this.callbacks = cU, this.options = yU, this.segments = new Map, this.sending = !1, this.refused = !1, this.downUntilMs = -1 / 0, this.stats = {
+           handBacks: {
+             unreachable: 0,
+             refused: 0,
+             closed: 0,
+             shortStored: 0,
+             missing: 0,
+             byteCap: 0
+           },
+           releases: 0
+         }
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1373-L1374` → after: `L1254-L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1254-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1254-L1373) · [Before (L1373-L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1373-L1374)

```diff
-       prefetchNext() {
-         this.stopped || this.uploader.prefetchTargets("still", this.nextSequence, mr, Lr)
+       get accepting() {
+         return !this.refused && this.options.nowMs() >= this.downUntilMs && this.segments.size < 2 && this.heldBytes() < this.options.maxHeldBytes
+       }
+       owns(UU) {
+         return this.segments.has(UU)
+       }
+       open(UU, XU) {
+         this.segments.set(UU, {
+           journalId: UU,
+           sequence: XU,
+           parts: [],
+           sentParts: 0,
+           totalParts: null,
+           bytes: 0,
+           cut: !1
+         })
+ ... (104 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1377-L1378` → after: `L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1376) · [Before (L1377-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1377-L1378)

```diff
-     var hr = iM(2595);
-     const Jr = IM.e;
+     const kX = HU.c;
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1380-L1382` → after: `L1378-L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1378-L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1378-L1388) · [Before (L1380-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1380-L1382)

```diff
-       constructor(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now;
-         this.transport = MM, this.uploadToken = rM, this.nextTelemetrySequence = iM, this.nowMs = OM, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null
+       constructor(UU, XU, zU, cU) {
+         let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
+         this.transport = UU, this.uploadToken = XU, this.nextTelemetrySequence = zU, this.queuedDomAfter = cU, this.nowMs = yU, this.segments = new Map, this.telemetry = null, this.telemetryAsked = null, this.dom = null, this.domTaken = -1, this.videoDue = null, this.stopped = !1
+       }
+       prefetch(UU, XU, zU, cU, yU) {
+         const QU = this.segment(UU, XU, zU, cU);
+         if (void 0 === yU) return void this.request(QU, 0);
+         const AU = yU.then((() => {
+           this.stopped || this.segments.get(ZX(UU, XU)) !== QU || QU.requested || this.request(QU, 0), this.videoDue === AU && (this.videoDue = null)
+         }));
+         this.videoDue = AU
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1384-L1385` → after: `L1390-L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1390-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1390-L1396) · [Before (L1384-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1384-L1385)

```diff
-       prefetch(MM, rM, iM, OM) {
-         this.request(this.segment(MM, rM, iM, OM), 0)
+       async takeDom(UU) {
+         await this.videoDue, this.domTaken = Math.max(this.domTaken, UU);
+         const XU = this.dom;
+         if ((null === XU || void 0 === XU ? void 0 : XU.sequence) !== UU) return;
+         this.dom = null;
+         const zU = await XU.upload;
+         return void 0 !== zU && BX(zU, this.nowMs()) ? zU.upload : void 0
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1404` → after: `L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1415) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1404)

```diff
-         if ((null === rM || void 0 === rM ? void 0 : rM.sequence) === MM) return this.telemetry = null, yr(rM.sQ, this.nowMs()) ? rM.sQ.target : void 0
+         if ((null === XU || void 0 === XU ? void 0 : XU.sequence) === UU) return this.telemetry = null, BX(XU.uD, this.nowMs()) ? XU.uD.target : void 0
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1412` → after: `L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1423) · [Before (L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1412)

```diff
-           SM = null === OM || void 0 === OM ? void 0 : OM.sQ.get(iM);
+           yU = null === cU || void 0 === cU ? void 0 : cU.uD.get(zU);
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1414` → after: `L1425-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1425-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1425-L1428) · [Before (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1414)

```diff
-           for (const [jM, aM] of OM.sQ) aM.expiresAtMs <= SM.expiresAtMs && OM.sQ.delete(jM)
+           for (const [QU, AU] of cU.uD) AU.expiresAtMs <= yU.expiresAtMs && cU.uD.delete(QU)
+       }
+       stop() {
+         this.stopped = !0
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1427-L1428` → after: `L1441-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1441-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1441-L1443) · [Before (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1427-L1428)

```diff
-           sQ: new Map,
-           requests: []
+           uD: new Map,
+           requests: [],
+           requested: !1
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1432` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1447) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1432)

```diff
-         const iM = MM.sQ.get(rM);
+         const zU = UU.uD.get(XU);
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1438` → after: `L1453-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1453-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1453-L1458) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1438)

```diff
-         return this.telemetryAsked === MM || null !== rM && rM.sequence === MM && yr(rM.sQ, this.nowMs()) ? null : MM
+         return this.telemetryAsked === UU || null !== XU && XU.sequence === UU && BX(XU.uD, this.nowMs()) ? null : UU
+       }
+       domToAskFor() {
+         var UU;
+         const XU = this.queuedDomAfter(this.domTaken);
+         return null === XU || XU.sequence === (null === (UU = this.dom) || void 0 === UU ? void 0 : UU.sequence) ? null : XU
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1442-L1443` → after: `L1462-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1462-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1462-L1464) · [Before (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1442-L1443)

```diff
-           OM = this.nowMs(),
-           SM = "video" === MM.kind ? this.telemetryToAskFor() : null;
+           cU = this.nowMs();
+         UU.requested = !0;
+         const yU = "video" === UU.kind ? this.telemetryToAskFor() : null;
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1445` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1466-L1467) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1445)

```diff
-         const jM = this.transport.requestPostTargets({
+         const QU = "video" === UU.kind ? this.domToAskFor() : null,
+           AU = this.transport.requestPostTargets({
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1461` → after: `L1486-L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1486-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1486-L1507) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1461)

```diff
-           }).then((iM => {
+           });
+         if (null !== QU) {
+           const UU = AU.then((UU => {
+             if ("rejected" in UU || void 0 === UU.domUpload) return;
+             const {
+               expiresInSecs: XU,
+               ...zU
+             } = UU.domUpload;
+             return {
+               upload: zU,
+               expiresAtMs: cU + 1e3 * XU
+             }
+           }), (() => {
+             var UU;
+             (null === (UU = this.dom) || void 0 === UU ? void 0 : UU.sequence) === QU.sequence && (this.dom = null)
+           }));
+ ... (6 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1466` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1512) · [Before (L1466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1466)

```diff
-               MM.sQ.set(rM + OM, {
+               UU.uD.set(XU + cU, {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1471` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1517) · [Before (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1471)

```diff
-             return null !== SM && SM >= this.nextTelemetrySequence() && (null !== (jM = null === (aM = this.telemetry) || void 0 === aM ? void 0 : aM.sequence) && void 0 !== jM ? jM : -1) <= SM && void 0 !== iM.telemetryTarget && (this.telemetry = {
+             return null !== yU && yU >= this.nextTelemetrySequence() && (null !== (QU = null === (AU = this.telemetry) || void 0 === AU ? void 0 : AU.sequence) && void 0 !== QU ? QU : -1) <= yU && void 0 !== zU.telemetryTarget && (this.telemetry = {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1473` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1519) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1473)

```diff
-               sQ: {
+               uD: {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1497` → after: `L1543-L1557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1543-L1557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1543-L1557) · [Before (L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1497)

```diff
-       return `${MM}:${rM}`
+       return `${UU}:${XU}`
+     }
+     const RX = {
+       maxAttempts: 10,
+       baseBackoffMs: 1e3
+     };
+ 
+     function PX(UU) {
+       return new Promise((XU => {
+         const zU = () => {
+             clearTimeout(cU), window.removeEventListener("online", zU), XU()
+           },
+           cU = setTimeout(zU, UU);
+         window.addEventListener("online", zU)
+       }))
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1499-L1503` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1559) · [Before (L1499-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1499-L1503)

```diff
-     const Er = {
-         maxAttempts: 10,
-         baseBackoffMs: 1e3
-       },
-       Ur = ["video", "dom"],
+     const WX = ["video", "dom"],
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1512` → after: `L1568-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1568-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1568-L1569) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1512)

```diff
-       br = new Set([403, 408, 409, 429]);
+       CX = new Set([403, 408, 409, 429]),
+       wX = new Set(["RequestTimeout", "IncompleteBody"]);
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1517` → after: `L1574-L1580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1574-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1574-L1580) · [Before (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1517)

```diff
-           return null !== (MM = this.nextSequence.get("telemetry")) && void 0 !== MM ? MM : 0
+           return null !== (UU = this.nextSequence.get("telemetry")) && void 0 !== UU ? UU : 0
+         }), (UU => {
+           const XU = this.queue.find((XU => "dom" === XU.kind && XU.sequence > UU));
+           return void 0 === XU ? null : {
+             sequence: XU.sequence,
+             byteLength: XU.bytes.byteLength
+           }
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1540` → after: `L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1603) · [Before (L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1540)

```diff
-       openSegment(MM, rM, iM) {
+       openSegment(UU, XU, zU, cU) {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1542` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1605) · [Before (L1542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1542)

```diff
-         return this.prefetchTargets(MM, OM, rM, iM), OM
+         return this.prefetchTargets(UU, yU, XU, zU, cU), yU
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1544-L1545` → after: `L1607-L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1607-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1607-L1608) · [Before (L1544-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1544-L1545)

```diff
-       prefetchTargets(MM, rM, iM, OM) {
-         this.stopped || this.targets.prefetch(MM, rM, iM, OM)
+       prefetchTargets(UU, XU, zU, cU, yU) {
+         this.stopped || this.targets.prefetch(UU, XU, zU, cU, yU)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1555` → after: `L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1618) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1555)

```diff
-         const OM = null !== (rM = null === (iM = MM.part) || void 0 === iM ? void 0 : iM.sequence) && void 0 !== rM ? rM : null;
+         const cU = null !== (XU = null === (zU = UU.part) || void 0 === zU ? void 0 : zU.sequence) && void 0 !== XU ? XU : null;
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1561` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1624) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1561)

```diff
-             sequence: null !== OM && void 0 !== OM ? OM : this.takeSequence(MM.kind)
+             sequence: null !== cU && void 0 !== cU ? cU : this.takeSequence(UU.kind)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1567` → after: `L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1630) · [Before (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1567)

```diff
-         this.stopped = !0;
+         this.stopped = !0, this.targets.stop();
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1572` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1635) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1572)

```diff
-         const iM = null !== (rM = this.nextSequence.get(MM)) && void 0 !== rM ? rM : 0;
+         const zU = null !== (XU = this.nextSequence.get(UU)) && void 0 !== XU ? XU : 0;
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1584-L1587` → after: `L1647-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1647-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1647-L1655) · [Before (L1584-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1584-L1587)

```diff
-           for (let rM = this.uploadInFlight ? 1 : 0; rM < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
-             if (this.queue[rM].kind !== MM) {
-               rM++;
-               continue
+           for (const XU of [!1, !0])
+             for (let zU = this.uploadInFlight ? 1 : 0; zU < this.queue.length && this.queuedBytes > this.options.maxBacklogBytes;) {
+               const cU = this.queue[zU];
+               if (cU.kind !== UU || !0 === cU.dropLast && !XU) {
+                 zU++;
+                 continue
+               }
+               const [yU] = this.queue.splice(zU, 1);
+               this.queuedBytes -= yU.bytes.byteLength, this.callbacks.onDropped(yU, "backlog over cap", yU.sequence), this.segmentBroken(yU)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1608` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1673) · [Before (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1608)

```diff
-             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= MM.bytes.byteLength, "uploaded" !== rM.type ? (this.callbacks.onDropped(MM, rM.reason, MM.sequence), this.segmentBroken(MM), "refused" !== rM.type || this.stopped || "telemetry" !== MM.kind || (console. … [truncated]
+             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= UU.bytes.byteLength, "uploaded" !== XU.type ? (this.callbacks.onDropped(UU, XU.reason, UU.sequence), this.segmentBroken(UU), "refused" !== XU.type || this.stopped || "telemetry" !== UU.kind || (console. … [truncated]
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1625` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1690) · [Before (L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1625)

```diff
-                 throw new Error(`rejected for now: ${iM.reason}`)
+                 throw new Error(`rejected for now: ${zU.reason}`)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1630` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1695) · [Before (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1630)

```diff
-               "put" === rM.type ? await this.transport.put(rM.url, MM.bytes, MM.contentType, "dom" === MM.kind) : await this.transport.post(rM.target, MM.bytes, MM.contentType)
+               "put" === XU.type ? await this.transport.put(XU.url, UU.bytes, UU.contentType, XU.ifNoneMatch) : await this.transport.post(XU.target, UU.bytes, UU.contentType)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1632` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1697) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1632)

```diff
-               if (OM instanceof qM.d && null !== OM.status && OM.status < 500 && !br.has(OM.status)) return console.warn(`Session replay ${MM.kind} segment ${MM.sequence} refused by storage:`, OM), {
+               if (cU instanceof vU.b && null !== cU.status && cU.status < 500 && !CX.has(cU.status) && (null === cU.storageCode || !wX.has(cU.storageCode))) return console.warn(`Session replay ${UU.kind} segment ${UU.sequence} refused by storage:`, cU), {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1643-L1644` → after: `L1708-L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1708-L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1708-L1709) · [Before (L1643-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1643-L1644)

```diff
-               jM = void 0 === MM.part ? "" : ` part ${MM.part.index}`;
-             if (console.warn(`Session replay ${MM.kind} segment ${MM.sequence}${jM} upload failed:`, OM), OM instanceof qM.d && (403 === OM.status && (rM = null, void 0 !== MM.part && this.targets.expire(MM.kind, MM.sequence, MM.part.index)), ++iM >= this.options.maxAttempts)) re … [truncated]
+               QU = void 0 === UU.part ? "" : ` part ${UU.part.index}`;
+             if (console.warn(`Session replay ${UU.kind} segment ${UU.sequence}${QU} upload failed:`, cU), cU instanceof vU.b && (403 === cU.status && (XU = null, void 0 !== UU.part && this.targets.expire(UU.kind, UU.sequence, UU.part.index)), ++zU >= this.options.maxAttempts)) re … [truncated]
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1662` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1727) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1662)

```diff
-           return "rejected" in iM ? iM : {
+           return "rejected" in zU ? zU : {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1679` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1750) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1679)

```diff
-         return "rejected" in OM ? OM : {
+         return "rejected" in yU ? yU : {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1681-L1740` → after: `L1752-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1752-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1752-L1753) · [Before (L1681-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1681-L1740)

```diff
-           url: OM.uploadUrl
-         }
-       }
-     }
-     var tr = iM(34820),
-       gr = iM(34641),
-       ur = iM(6998),
-       Rr = iM(7006);
-     class pr {
-       constructor() {
-         this.writer = new ur.d((0, sM.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
-       }
-       attach(MM, rM) {
-         null !== MM && (this.setActionBits(MM.getActionBits(), (0, sM.e)()), this.unsubscribers.push(MM.onKey(((MM, rM, iM, OM, SM) => {
-           this.writer.writeKey(SM, OM ? (0, Rr.f)(MM) : 0, rM, iM, OM)
-         })), MM.onActions(((MM, rM) => {
- ... (44 more removed lines; see GitHub link above)
+           url: yU.uploadUrl,
+           ifNoneMatch: yU.ifNoneMatch
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1756` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1762) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1756)

```diff
-       onWorkerMessage(MM) {
+       onWorkerMessage(UU, XU) {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1766` → after: `L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1772) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1766)

```diff
-             const SM = this.uploader.openSegment("video", "video/mp4", this.slots);
+             const QU = this.uploader.openSegment("video", "video/mp4", this.slots, XU);
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1858` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1864) · [Before (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1858)

```diff
-           }, null !== (OM = MM.completeUntilIndex) && void 0 !== OM ? OM : 0)
+           }, null !== (cU = UU.completeUntilIndex) && void 0 !== cU ? cU : 0)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1862-L1863` → after: `L1868-L2096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1868-L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1868-L2096) · [Before (L1862-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1862-L1863)

```diff
-       dropped(MM) {
-         this.settled(MM), MM.journalId === this.openJournalId && MM.journalId !== this.cutJournalId && (this.cutJournalId = MM.journalId, this.cut())
+       dropped(UU) {
+         this.settled(UU), UU.journalId === this.openJournalId && UU.journalId !== this.cutJournalId && (this.cutJournalId = UU.journalId, this.cut())
+       }
+       listed(UU, XU) {
+         if (null !== XU)
+           for (const [cU, yU] of this.segments) yU.sequence === UU && (yU.listedParts = Math.max(yU.listedParts, XU), this.maybeDone(cU, yU));
+         else {
+           const XU = this.storedWhole.get(UU);
+           var zU;
+           void 0 !== XU && (this.storedWhole.delete(UU), null === (zU = this.journal) || void 0 === zU || zU.videoSettled(XU))
+         }
+       }
+       settled(UU) {
+         const XU = this.segments.get(UU.journalId);
+         void 0 !== XU && (XU.settledParts++, this.maybeDone(UU.journalId, XU))
+       }
+ ... (213 more added lines; see GitHub link above)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1865-L1872` → after: `L2098-L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2098-L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2098-L2099) · [Before (L1865-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1865-L1872)

```diff
-       listed(MM, rM) {
-         if (null !== rM)
-           for (const [OM, SM] of this.segments) SM.sequence === MM && (SM.listedParts = Math.max(SM.listedParts, rM), this.maybeDone(OM, SM));
-         else {
-           const rM = this.storedWhole.get(MM);
-           var iM;
-           void 0 !== rM && (this.storedWhole.delete(MM), null === (iM = this.journal) || void 0 === iM || iM.videoSettled(rM))
-         }
+       dropped(UU) {
+         this.uploader.closeSegment("still", UU.sequence)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1874-L1876` → after: `L2101-L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2101-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2101-L2111) · [Before (L1874-L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1874-L1876)

```diff
-       settled(MM) {
-         const rM = this.segments.get(MM.journalId);
-         void 0 !== rM && (rM.settledParts++, this.maybeDone(MM.journalId, rM))
+       beacon() {
+         var UU, XU, zU, cU;
+         const yU = this.latest;
+         if (this.stopped || null === yU || yU.atMs <= (null !== (UU = null === (XU = this.manifest.contents.still) || void 0 === XU ? void 0 : XU.atMs) && void 0 !== UU ? UU : -1 / 0)) return;
+         const QU = (null === (zU = this.queued) || void 0 === zU ? void 0 : zU.atMs) === yU.atMs ? this.queued : null;
+         if (null !== QU && this.keepalive.isInFlight(vX)) return void this.manifest.setStill(yU.atMs, QU.sequence);
+         const AU = null !== (cU = null === QU || void 0 === QU ? void 0 : QU.sequence) && void 0 !== cU ? cU : this.nextSequence,
+           FU = this.uploader.peekTarget("still", AU, 0);
+         if (void 0 !== FU)
+           for (const oU of [yU.bytes, yU.small])
+             if (null !== oU && this.sendBeacon(FU, oU)) return null === QU && this.takeSequence(), void this.manifest.setStill(yU.atMs, AU)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1878-L1880` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2113) · [Before (L1878-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1878-L1880)

```diff
-       maybeDone(MM, rM) {
-         if (null === rM.totalParts || rM.settledParts < rM.totalParts) return;
-         const iM = rM.listedParts >= rM.landedParts;
+       sendBeacon(UU, XU) {
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1882-L1883` → after: `L2115-L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2115-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2115-L2135) · [Before (L1882-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1882-L1883)

```diff
-         rM.uploaded || (rM.uploaded = !0, this.uploader.closeSegment("video", rM.sequence), iM || null === (OM = this.journal) || void 0 === OM || OM.videoUploaded(MM));
-         iM && (this.segments.delete(MM), null === (SM = this.journal) || void 0 === SM || SM.videoSettled(MM))
+         const yU = null !== (zU = null === (cU = this.relay) || void 0 === cU ? void 0 : cU.beacon({
+           method: "POST",
+           url: UU.url,
+           fields: UU.fields
+         }, XU, vX, this.keepalive)) && void 0 !== zU ? zU : null;
+         if (null !== yU) return yU;
+         const {
+           form: QU,
+           byteLength: AU
+         } = (0, HX.k)(UU, XU, vX);
+         return this.keepalive.sendUploadBeacon(UU.url, QU, AU)
+       }
+       stop() {
+         this.stopped = !0, null !== this.refreshTimer && clearInterval(this.refreshTimer)
+       }
+       takeSequence() {
+ ... (5 more added lines; see GitHub link above)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1886-L1897` → after: `L2138-L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2138-L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2138-L2143) · [Before (L1886-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1886-L1897)

```diff
-     var sr = iM(2546),
-       Dr = iM(2602),
-       kr = iM(2611),
-       Zr = iM(2571),
-       or = iM(34833),
-       fr = iM(34841);
-     const Yr = 3 * IM.e / 4,
-       Nr = {
-         desktop: 88080384,
-         mobile: 16777216,
-         tablet: 16777216
-       };
+     var sX = zU(5131),
+       nX = zU(40626),
+       mX = zU(40635),
+       lX = zU(40644),
+       xX = zU(7106),
+       JX = zU(7108);
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1900-L1906` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2146) · [Before (L1900-L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1900-L1906)

```diff
-       return new Promise((rM => {
-         const iM = () => {
-             clearTimeout(OM), window.removeEventListener("online", iM), rM()
-           },
-           OM = setTimeout(iM, MM);
-         window.addEventListener("online", iM)
-       }))
+       return 50 * Math.floor(UU / 50)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1908-L1913` → after: `L2148-L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2148-L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2148-L2209) · [Before (L1908-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1908-L1913)

```diff
- 
-     function xr(MM) {
-       var rM;
-       if (MM instanceof ErrorEvent) return MM.error instanceof Error && MM.filename.startsWith(window.location.origin);
-       const iM = MM.reason;
-       return iM instanceof Error && (null !== (rM = iM.stack) && void 0 !== rM ? rM : "").includes(window.location.origin)
+     class KX {
+       constructor() {
+         this.writer = new xX.d((0, lU.d)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
+       }
+       attach(UU, XU) {
+         null !== UU && (this.setActionBits(UU.getActionBits(), (0, lU.d)()), this.unsubscribers.push(UU.onKey(((UU, XU, zU, cU, yU, QU) => {
+           const AU = (0, JX.f)(UU);
+           yU ? this.writer.writeKey(jX(QU), AU, XU, zU, cU) : 0 !== AU && null === (0, JX.i)(UU) && this.writer.writeKey(jX(QU), 0, XU, zU, cU)
+         })), UU.onActions(((UU, XU) => {
+           this.setActionBits(UU, XU)
+         })), UU.onPointerLock(((UU, XU) => {
+           this.writer.writeEvent(XU, UU ? "pointerLocked" : "pointerUnlocked")
+         })))), this.unsubscribers.push((0, NX.t)((() => {
+           const UU = (0, NX.c)();
+           this.writer.writeFrame((0, lU.d)() - UU, UU), this.framesSinceFpsSample++, XU()
+         })))
+ ... (46 more added lines; see GitHub link above)
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1918-L1941` → after: `L2216-L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2216-L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2216-L2219) · [Before (L1918-L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1918-L1941)

```diff
-         this.recording = MM, this.telemetry = new pr, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = null, this.stills = void 0, this.videoConfig = void 0, this.joinerAccess = void 0, this.joiner = null, this.platformType = void 0, this.debug =  … [truncated]
-           onFirstCanvas: MM => {
-             this.attachToCanvas(MM)
-           },
-           onCanvasSwapped: MM => {
-             this.telemetry.writeEvent("canvasSwapped"), null !== this.capture && (this.capture.start(MM), this.postToWorker({
-               type: "cut"
-             }))
-           },
-           onResized: MM => {
-             this.postToWorker({
-               type: "resize",
-               cssSize: MM
-             })
-           },
-           onContextLost: () => {
- ... (8 more removed lines; see GitHub link above)
+         this.recording = UU, this.telemetry = new KX, this.manifest = void 0, this.journal = null, this.uploader = void 0, this.video = void 0, this.stills = void 0, this.videoConfig = void 0, this.debug = void 0, this.lifetime = new AbortController, this.timers = [], this.ownFps … [truncated]
+         const cU = XU.dryRun ? null : null !== (zU = UU.partJoiner) && void 0 !== zU ? zU : null,
+           yU = null === cU ? null : (0, MU.h)(nU(cU)),
+           AU = XU.dryRun ? new HX.c : new HX.g((0, LU.d)().segmentUploadUrl, {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1946-L1947` → after: `L2225-L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2225-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2225-L2227) · [Before (L1946-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1946-L1947)

```diff
-           const aM = OM.c[MM],
-             PM = ZM.g.getItem("replayEncoder");
+           const AU = QU[UU],
+             FU = wU.k.getItem("replaySkipLowMemory"),
+             oU = "boolean" === typeof FU ? FU : null;
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1950-L1954` → after: `L2230-L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2230-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2230-L2236) · [Before (L1950-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1950-L1954)

```diff
-             maxFps: null !== (rM = YM("replayMaxFps")) && void 0 !== rM ? rM : aM.maxFps,
-             maxMacroblocks: null !== (iM = YM("replayMaxMacroblocks")) && void 0 !== iM ? iM : aM.maxMacroblocks,
-             captureBudgetMsPerSecond: null !== (SM = YM("replayCaptureBudgetMs")) && void 0 !== SM ? SM : aM.captureBudgetMsPerSecond,
-             captureFrameCostFloorMs: null !== (jM = YM("replayCaptureCostFloorMs")) && void 0 !== jM ? jM : aM.captureFrameCostFloorMs,
-             softwareEncoderOnWindows: "software" === PM || "hardware" !== PM && aM.softwareEncoderOnWindows
+             maxFps: null !== (XU = SU("replayMaxFps")) && void 0 !== XU ? XU : AU.maxFps,
+             maxMacroblocks: null !== (zU = SU("replayMaxMacroblocks")) && void 0 !== zU ? zU : AU.maxMacroblocks,
+             captureBudgetMsPerSecond: null !== (cU = SU("replayCaptureBudgetMs")) && void 0 !== cU ? cU : AU.captureBudgetMsPerSecond,
+             captureFrameCostFloorMs: null !== (yU = SU("replayCaptureCostFloorMs")) && void 0 !== yU ? yU : AU.captureFrameCostFloorMs,
+             softwareEncoderPlatforms: rU("replayEncoder", "software", "hardware", AU.softwareEncoderPlatforms),
+             videoFrameGrabPlatforms: rU("replayGrab", "videoFrame", "bitmap", AU.videoFrameGrabPlatforms),
+             skipLowMemoryDevices: null !== oU && void 0 !== oU ? oU : AU.skipLowMemoryDevices
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1956-L1960` → after: `L2238-L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2238-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2238-L2243) · [Before (L1956-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1956-L1960)

```diff
-         }(rM.platformType) : MM.videoConfig && (0, OM.J)(MM.videoConfig, rM.platformType), this.platformType = rM.platformType;
-         const aM = (0, kr.f)();
-         this.videoStatus = "supported" !== aM ? aM : null === this.videoConfig ? "unsupported" : "recorded", (0, Dr.e)("recorded" === this.videoStatus ? "video" : "dom_only", MM), this.experiment = rM.dryRun ? {
-           logStats: !0 === ZM.g.getItem("replayLogStats")
-         } : fM, this.manifest = new Sr(MM.recordingId, MM.uploadToken, !rM.dryRun, {
+         }(XU.platformType) : UU.videoConfig && (oU = UU.videoConfig, DU = XU.platformType, {
+           ...QU[DU],
+           ...oU
+         });
+         const EU = (0, bX.c)(this.videoConfig);
+         (0, SX.i)("recorded" === EU ? "video" : "dom_only", UU), this.manifest = new bU(UU.recordingId, UU.uploadToken, !XU.dryRun, {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1972-L1973` → after: `L2255-L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2255-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2255-L2263) · [Before (L1972-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1972-L1973)

```diff
-             var OM, SM, jM;
-             "videoSegments" === rM ? null === (OM = this.video) || void 0 === OM || OM.listed(iM.sequence, null !== (SM = iM.parts) && void 0 !== SM ? SM : null) : null === (jM = this.journal) || void 0 === jM || jM.telemetrySettled(iM.sequence)
+             var cU, yU;
+             if ("videoSegments" === XU) null === (cU = this.video.uploads) || void 0 === cU || cU.listed(zU.sequence, null !== (yU = zU.parts) && void 0 !== yU ? yU : null);
+             else if ("telemetrySegments" === XU) {
+               var QU;
+               null === (QU = this.journal) || void 0 === QU || QU.telemetrySettled(zU.sequence)
+             } else {
+               var AU;
+               null === (AU = this.journal) || void 0 === AU || AU.domSettled(zU.sequence)
+             }
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1975` → after: `L2265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2265) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1975)

```diff
-         }), !rM.dryRun && gr.d.supported && (this.journal = new nr(new gr.d, MM, this.manifest.contents, (0, DM.d)())), this.debug = function() {
+         }), !XU.dryRun && lX.b.supported && (this.journal = new zX(new lX.b, UU, this.manifest.contents, (0, LU.d)())), this.debug = function() {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1995` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2285) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1995)

```diff
-             this.debug.uploadedBytesByKind[MM.kind] = (null !== (iM = this.debug.uploadedBytesByKind[MM.kind]) && void 0 !== iM ? iM : 0) + MM.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(MM.meta, rM, MM.bytes), this.pageExi … [truncated]
+             this.debug.uploadedBytesByKind[UU.kind] = (null !== (zU = this.debug.uploadedBytesByKind[UU.kind]) && void 0 !== zU ? zU : 0) + UU.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(UU.meta, XU, UU.bytes), this.pageExi … [truncated]
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1999` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2289) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1999)

```diff
-             if (console.warn(`Session replay dropped a ${MM.kind} segment: ${rM}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === MM.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (OM = this.video) ||  … [truncated]
+             if (console.warn(`Session replay dropped a ${UU.kind} segment: ${XU}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === UU.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (cU = this.video.uplo … [truncated]
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2010` → after: `L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2300) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2010)

```diff
-             this.stop(`uploads refused: ${MM}`)
+             this.stop(`uploads refused: ${UU}`)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2016-L2018` → after: `L2306-L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2306-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2306-L2311) · [Before (L2016-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2016-L2018)

```diff
-           flushChunks: () => {
-             var MM;
-             this.flushChunks(), null === (MM = this.dom) || void 0 === MM || MM.cutAfterNextBatch()
+           flushTelemetry: () => {
+             this.flushTelemetry()
+           },
+           cutPageRecording: () => {
+             var UU, XU;
+             null === (UU = this.dom) || void 0 === UU || UU.cut(), null === (XU = this.dom) || void 0 === XU || XU.cutAfterNextBatch()
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2021` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2314) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2021)

```diff
-             this.postToWorker(MM)
+             this.video.postToWorker(UU)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2029` → after: `L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2322) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2029)

```diff
-             null === (MM = this.joiner) || void 0 === MM || MM.releaseAll()
+             null === (UU = this.video.joiner) || void 0 === UU || UU.releaseAll()
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2031` → after: `L2324-L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2324-L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2324-L2341) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2031)

```diff
-         });
+         }), this.video = new uX({
+           recording: UU,
+           videoConfig: this.videoConfig,
+           joinerAccess: cU,
+           uploader: this.uploader,
+           manifest: this.manifest,
+           journal: this.journal,
+           stills: this.stills,
+           pageExit: this.pageExit,
+           telemetry: this.telemetry,
+           debug: this.debug,
+           experiment: XU.dryRun ? {
+             logStats: !0 === wU.k.getItem("replayLogStats")
+           } : OU,
+           platformType: XU.platformType,
+           isStopped: () => this.isStopped,
+ ... (2 more added lines; see GitHub link above)
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2034` → after: `L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2344) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2034)

```diff
-           const rM = null !== (MM = (0, oM.d)() ? kM.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== MM ? MM : ZM.g.getItem("replayPostHogHost");
+           const XU = null !== (UU = (0, qU.f)() ? CU.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== UU ? UU : wU.k.getItem("replayPostHogHost");
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2040` → after: `L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2350) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2040)

```diff
-         if (this.ownFpsMonitor = null === PM ? new or.e({
+         if (this.ownFpsMonitor = null === YU ? new TX.c({
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2047` → after: `L2357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2357) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2047)

```diff
-           }) : null, QM.i.subscribe("sessionReplayLowFps", (MM => {
+           }) : null, FU.k.subscribe("sessionReplayLowFps", (UU => {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2052` → after: `L2362-L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2362-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2362-L2364) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2052)

```diff
-           })), QM.i.subscribe("sessionReplayGameQuit", (MM => {
+           })), FU.k.subscribe("sessionReplayStayProgress", (UU => {
+             !this.isStopped && this.manifest.updateCurrentStay(UU) && this.manifest.sendSoon()
+           })), FU.k.subscribe("sessionReplayGameQuit", (UU => {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2058` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2370) · [Before (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2058)

```diff
-           })), null !== rM.currentGame && this.labelGame(this.manifest.gameJoined(rM.currentGame)), this.start(MM.expiresAtMs), this.dom = null, null !== PM) {
+           })), null !== XU.currentGame && (this.listStay(XU.currentGame), FU.k.UY("sessionReplayStayOpened", XU.currentGame.gameNameWithVariation)), this.start(UU.expiresAtMs), this.dom = null, null !== YU) {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2061-L2063` → after: `L2373-L2375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2373-L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2373-L2375) · [Before (L2061-L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2061-L2063)

```diff
-             packsNow: () => this.isStopped || this.pageExit.isHiding || document.hidden
-           }, this.journal, new WM);
-           this.dom = iM, (0, Zr.c)({
+             packsNow: UU => this.isStopped || this.pageExit.isHiding || document.hidden && !UU
+           }, this.journal, new dU.d);
+           this.dom = zU, (0, rX.d)({
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2066-L2067` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2378) · [Before (L2066-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2066-L2067)

```diff
-             deviceId: (0, sr.c)(),
-             videoStatus: this.videoStatus,
+             videoStatus: this.video.videoStatus,
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2077` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2388) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2077)

```diff
-         return null !== (MM = null === (rM = this.videoConfig) || void 0 === rM ? void 0 : rM.manifestIntervalMs) && void 0 !== MM ? MM : 3e4
+         return null !== (UU = null === (XU = this.videoConfig) || void 0 === XU ? void 0 : XU.manifestIntervalMs) && void 0 !== UU ? UU : 3e4
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2083` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2404) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2083)

```diff
-         this.isStopped || (this.postToWorker({
+         this.isStopped || (this.video.postToWorker({
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2085` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2406) · [Before (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2085)

```diff
-         }), this.flushTelemetry(), this.labelGame(this.manifest.gameJoined(MM)), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
+         }), this.flushTelemetry(), this.listStay(UU), FU.k.UY("sessionReplayStayOpened", UU.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2088` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2409) · [Before (L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2088)

```diff
-         this.isStopped || (this.postToWorker({
+         this.isStopped || (this.video.postToWorker({
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2109` → after: `L2424-L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2424-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2424-L2425) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2109)

```diff
-           this.flushChunks()
+           var UU;
+           this.flushTelemetry(), null === (UU = this.dom) || void 0 === UU || UU.cutOnTimer()
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2112` → after: `L2428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2428) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2112)

```diff
-         }), Math.max(0, MM - Date.now() - 6e4))), this.pageExit.listen(rM), this.telemetry.attach((0, tr.e)(), (() => {
+         }), Math.max(0, UU - Date.now() - 6e4))), this.pageExit.listen(XU), this.telemetry.attach((0, mX.c)(), (() => {
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2114` → after: `L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2430) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2114)

```diff
-           null === (MM = this.capture) || void 0 === MM || MM.onAfterRender()
+           null === (UU = this.video.capture) || void 0 === UU || UU.onAfterRender()
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2117` → after: `L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2433) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2117)

```diff
-           xr(MM) && this.manifest.flagCurrentGame("hadError")
+           (0, nX.e)(UU) && this.manifest.flagCurrentGame("hadError")
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2121-L2126` → after: `L2437-L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2437-L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2437-L2439) · [Before (L2121-L2126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2121-L2126)

```diff
-         (0, kr.c)((() => {
-           this.onCellular()
-         }), rM), null !== this.journal && (0, hr.e)(rM)
-       }
-       onCellular() {
-         "recorded" === this.videoStatus && (this.videoStarted ? (this.endVideo(), this.videoStopped("stopped_cellular", "moved onto cellular data")) : this.setVideoStatus("skipped_cellular", null))
+         (0, bX.g)((() => {
+           this.video.onCellular()
+         }), XU), null !== this.journal && (0, sX.c)(XU)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2129` → after: `L2442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2442) · [Before (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2129)

```diff
-         var rM;
+         var XU, zU;
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2131` → after: `L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2444) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2131)

```diff
-           console.warn(`Session replay stopped recording: ${MM}`), this.debug.stoppedReason = MM, this.lifetime.abort();
+           console.warn(`Session replay stopped recording: ${UU}`), this.debug.stoppedReason = UU, this.lifetime.abort();
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2133` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2446) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2133)

```diff
-           this.stills.stop(), this.canvasWatch.stop(), null !== this.dom && (0, Zr.i)(), this.telemetry.stop(), this.flushChunks(), null === (rM = this.dom) || void 0 === rM || rM.close(), this.endVideo(), this.manifest.send(), (0, Dr.e)("events_only", this.recording)
+           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, rX.k)(), this.telemetry.stop(), this.flushTelemetry(), null === (XU = this.dom) || void 0 === XU || XU.cut(), null === (zU = this.dom) || void 0 === zU || zU.close(), this.video.endVideo(), this … [truncated]
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2148` → after: `L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2451) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2148)

```diff
-         const rM = this.canvasWatch.check();
+         const XU = this.video.canvasWatch.check();
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2152` → after: `L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2455) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2152)

```diff
-         } = this.canvasWatch, OM = nM.b.getLastColyseusPingMs();
+         } = this.video.canvasWatch, cU = AU.d.getLastColyseusPingMs();
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2159` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2462) · [Before (L2159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2159)

```diff
-           qualityLevel: this.qualityLevel
+           qualityLevel: this.video.qualityLevel
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2163` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2466) · [Before (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2163)

```diff
-         if (null === (MM = this.ownFpsMonitor) || void 0 === MM || MM.addSample(jM, Date.now()), document.hidden || this.postToWorker({
+         if (null === (UU = this.ownFpsMonitor) || void 0 === UU || UU.addSample(QU, Date.now()), document.hidden || this.video.postToWorker({
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2167` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2470) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2167)

```diff
-           }), null !== this.capture) {
+           }), null !== this.video.capture) {
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2171` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2474) · [Before (L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2171)

```diff
-           } = this.capture.frameCost;
+           } = this.video.capture.frameCost;
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2276` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2483) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2276)

```diff
-         if ("video" === MM.type) null === (OM = this.video) || void 0 === OM || OM.landed(MM, rM);
+         if ("video" === UU.type) null === (cU = this.video.uploads) || void 0 === cU || cU.landed(UU, XU);
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2283-L2286` → after: `L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2490) · [Before (L2283-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2283-L2286)

```diff
-           }, (() => {
-             var MM;
-             null === (MM = this.journal) || void 0 === MM || MM.domSettled(rM)
-           }))
+           })
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2322` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2518) · [Before (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2322)

```diff
-   6998: (MM, rM, iM) => {
+   7106: (UU, XU, zU) => {
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2325` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2521) · [Before (L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2325)

```diff
-       e: () => gM
+       g: () => eU
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2327` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2523) · [Before (L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2327)

```diff
-     var OM = iM(7006);
+     var cU = zU(7108);
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2373` → after: `L2569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2569) · [Before (L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2373)

```diff
-         iM.setUint8(OM, QM), iM.setUint32(OM + 1, this.timeUnits(MM), !0), iM.setUint16(OM + 5, wM(rM.backingWidth), !0), iM.setUint16(OM + 7, wM(rM.backingHeight), !0), iM.setUint16(OM + 9, wM(rM.cssWidth), !0), iM.setUint16(OM + 11, wM(rM.cssHeight), !0), iM.setUint16(OM + 13,  … [truncated]
+         zU.setUint8(cU, DU), zU.setUint32(cU + 1, this.timeUnits(UU), !0), zU.setUint16(cU + 5, dU(XU.backingWidth), !0), zU.setUint16(cU + 7, dU(XU.backingHeight), !0), zU.setUint16(cU + 9, dU(XU.cssWidth), !0), zU.setUint16(cU + 11, dU(XU.cssHeight), !0), zU.setUint16(cU + 13,  … [truncated]
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2388` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2584) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2388)

```diff
-         this.view.setUint8(jM, mM), this.view.setUint32(jM + 1, this.timeUnits(MM), !0), this.view.setUint8(jM + 5, rM), this.view.setUint8(jM + 6, (iM ? lM : 0) | (OM ? EM : 0) | (SM ? UM : 0)), this.length += yM
+         this.view.setUint8(QU, NU), this.view.setUint32(QU + 1, this.timeUnits(UU), !0), this.view.setUint8(QU + 5, XU), this.view.setUint8(QU + 6, (zU ? kU : 0) | (cU ? GU : 0) | (yU ? BU : 0)), this.length += gU
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2410` → after: `L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2606) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2410)

```diff
-       if (iM < aM || iM > jM || rM.getUint32(0, !0) !== SM) throw new Error(`Not a version ${aM}-${jM} replay telemetry chunk`);
+       if (zU < AU || zU > QU || XU.getUint32(0, !0) !== yU) throw new Error(`Not a version ${AU}-${QU} replay telemetry chunk`);
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2440` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2636) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2440)

```diff
-             renderer: null !== (RM = eM[rM.getUint8(uM + 15)]) && void 0 !== RM ? RM : "unknown",
+             renderer: null !== (wU = PU[XU.getUint8(CU + 15)]) && void 0 !== wU ? wU : "unknown",
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2449` → after: `L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2645) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2449)

```diff
-             event: null !== (pM = bM[rM.getUint8(uM + 5)]) && void 0 !== pM ? pM : "none"
+             event: null !== (qU = WU[XU.getUint8(CU + 5)]) && void 0 !== qU ? qU : "none"
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2456` → after: `L2652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2652) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2456)

```diff
-           if (MM !== mM || !tM.inputRecorded) throw new Error(`Unknown replay telemetry record type ${MM} at byte ${uM}`);
+           if (UU !== NU || !LU.inputRecorded) throw new Error(`Unknown replay telemetry record type ${UU} at byte ${CU}`);
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2462` → after: `L2658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2658) · [Before (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2462)

```diff
-               code: null !== (WM = OM.e[rM.getUint8(uM + 5)]) && void 0 !== WM ? WM : OM.e[0],
+               code: null !== (OU = cU.c[XU.getUint8(CU + 5)]) && void 0 !== OU ? OU : cU.c[0],
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2473` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2669) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2473)

```diff
-   34814: MM => {
+   36961: UU => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4)

```diff
-   34624: (MM, rM, iM) => {
+   40673: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L8-L11` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L11)

```diff
-     var OM = iM(5479),
-       SM = iM(30),
-       jM = iM(34631),
-       aM = iM(1215);
+     var cU = zU(40576),
+       yU = zU(42),
+       QU = zU(40569),
+       AU = zU(40543),
+       FU = zU(40573),
+       oU = zU(1220);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L18-L19` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L20-L21) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L18-L19)

```diff
-         SM = (0, aM.q)(PM),
-         jM = void 0 === iM ? SM : (0, aM.m)([iM, SM]);
+         yU = (0, oU.n)(DU),
+         QU = void 0 === zU ? yU : (0, oU.i)([zU, yU]);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L36` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L36)

```diff
-         if (!rM.ok) throw new Error(`HTTP ${rM.status}`);
+         if (!XU.ok) throw new Error(`HTTP ${XU.status}`);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L41-L48` → after: `L43-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49) · [Before (L41-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L41-L48)

```diff
-         return console.warn(`Session replay couldn't ask the part joiner about video segment ${rM}; uploading it from the journal.`, QM), null
-       }
-     }
-     var QM = iM(34633),
-       zM = iM(34641),
-       LM = iM(2590),
-       mM = iM(34647),
-       HM = iM(34670);
+         return console.warn(`Session replay couldn't ask the part joiner about video segment ${XU}; uploading it from the journal.`, FU), null
+       }
+     }
+     var YU = zU(40607),
+       NU = zU(40644),
+       IU = zU(5139),
+       pU = zU(40613);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L60` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L60)

```diff
-         return console.warn(`Session replay couldn't mux late ${OM} segment ${SM}; skipping it.`, PM), "refused"
+         return console.warn(`Session replay couldn't mux late ${cU} segment ${yU}; skipping it.`, FU), "refused"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L72` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L72)

```diff
-         return "rejected" in PM ? (console.warn(`Session replay late ${OM} segment ${SM} refused: ${PM.reason}`), PM.retryable ? "retryLater" : "refused") : (await iM.put(PM.uploadUrl, aM, jM, "dom" === OM), "uploaded")
+         return "rejected" in FU ? (console.warn(`Session replay late ${cU} segment ${yU} refused: ${FU.reason}`), FU.retryable ? "retryLater" : "refused") : (await zU.put(FU.uploadUrl, AU, QU, FU.ifNoneMatch), "uploaded")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L74` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L74)

```diff
-         return console.warn(`Session replay late ${OM} segment ${SM} upload failed; trying again later.`, PM), "retryLater"
+         return console.warn(`Session replay late ${cU} segment ${yU} upload failed; trying again later.`, FU), "retryLater"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L78-L82` → after: `L79-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L79-L83) · [Before (L78-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L78-L82)

```diff
-       for (const SM of [...iM.videoSegments, ...iM.telemetrySegments, ...null !== (OM = iM.domSegments) && void 0 !== OM ? OM : []]) {
-         var OM;
-         iM.endedAtMs = Math.max(iM.endedAtMs, SM.endMs)
-       }
-       for (const SM of (0, HM.d)({
+       var cU;
+       const yU = UU.nowMs(),
+         QU = (null !== (cU = zU.domSegments) && void 0 !== cU ? cU : []).filter((UU => UU.endMs <= yU));
+       for (const AU of [...zU.videoSegments, ...zU.telemetrySegments, ...QU]) zU.endedAtMs = Math.max(zU.endedAtMs, AU.endMs);
+       for (const AU of (0, pU.e)({
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L93-L97` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98) · [Before (L93-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L93-L97)

```diff
-     var dM = iM(34678),
-       yM = iM(34697),
-       lM = iM(34747),
-       EM = iM(34776),
-       UM = iM(34756);
+     var gU = zU(40679),
+       kU = zU(40698),
+       GU = zU(40747),
+       BU = zU(40771),
+       ZU = zU(40754);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L104-L105` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L105-L106) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L104-L105)

```diff
-         this.output = new dM.c({
-           format: new yM.k({
+         this.output = new gU.e({
+           format: new kU.g({
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L140` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L141) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L140)

```diff
-           endUs: null !== (MM = this.addingTimestampUs) && void 0 !== MM ? MM : this.lastTimestampUs + 1e6 * this.frameDurationS
+           endUs: null !== (UU = this.addingTimestampUs) && void 0 !== UU ? UU : this.lastTimestampUs + 1e6 * this.frameDurationS
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L151` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L152) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L151)

```diff
-     iM(34785);
+     zU(40603);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L192` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L193) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L192)

```diff
-       return void 0 !== SM && (null === iM || SM.partsLanded > iM.partsLanded) ? SM : iM
+       return void 0 !== yU && (null === zU || yU.partsLanded > zU.partsLanded) ? yU : zU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L232` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L233) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L232)

```diff
-                 console.warn(`Session replay's part joiner didn't answer about video segment ${QM} in time; uploading it from the journal.`, PM), rM = null
+                 console.warn(`Session replay's part joiner didn't answer about video segment ${DU} in time; uploading it from the journal.`, FU), XU = null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L241` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L242) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L241)

```diff
-         return console.warn(`Session replay couldn't read what an earlier page load left of ${rM.recordingId}; trying again later.`, lM), {
+         return console.warn(`Session replay couldn't read what an earlier page load left of ${XU.recordingId}; trying again later.`, gU), {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L261` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L262) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L261)

```diff
-             return null === iM ? MM : Math.max(MM, iM + 1)
+             return null === zU ? UU : Math.max(UU, zU + 1)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L284` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L285) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L284)

```diff
-                 hM = null !== (jM = null !== (aM = null === mM || void 0 === mM ? void 0 : mM.completeUntilUs) && void 0 !== aM ? aM : null === LM || void 0 === LM ? void 0 : LM.completeUntilUs) && void 0 !== jM ? jM : null,
+                 pU = null !== (QU = null !== (AU = null === NU || void 0 === NU ? void 0 : NU.completeUntilUs) && void 0 !== AU ? AU : null === YU || void 0 === YU ? void 0 : YU.completeUntilUs) && void 0 !== QU ? QU : null,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L293` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L294) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L293)

```diff
-                 }(null === hM ? zM : zM.filter((MM => MM.timestampUs >= hM))),
+                 }(null === pU ? EU : EU.filter((UU => UU.timestampUs >= pU))),
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L318` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L319) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L318)

```diff
-           }), null !== (iM = rM.nextDomSequence) && void 0 !== iM ? iM : 0);
+           }), null !== (zU = XU.nextDomSequence) && void 0 !== zU ? zU : 0);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L354` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L355) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L354)

```diff
-               OM = null !== (jM = null === iM || void 0 === iM ? void 0 : iM.sequence) && void 0 !== jM ? jM : QM.nextSequence;
+               cU = null !== (QU = null === zU || void 0 === zU ? void 0 : zU.sequence) && void 0 !== QU ? QU : DU.nextSequence;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L361` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L362) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L361)

```diff
-             console.warn(`Session replay couldn't drop what it sent of ${rM.recordingId} from its journal.`, lM)
+             console.warn(`Session replay couldn't drop what it sent of ${XU.recordingId} from its journal.`, gU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L416-L429` → after: `L417-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L417-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L417-L424) · [Before (L416-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L416-L429)

```diff
-         if (null !== EM) {
-           const iM = await hM(MM, rM, {
-             kind: "dom",
-             sequence: mM,
-             contentType: "application/octet-stream",
-             bytes: async () => EM
-           });
-           if ("retryLater" === iM) return await HM(iM);
-           if ("refused" === iM) {
-             zM.domSequences.push(mM), LM = !0;
-             continue
-           }
-         }
-         jM.push({
+         const cU = null === GU ? "uploaded" : await aU(UU, XU, {
+           kind: "dom",
+           sequence: tU,
+           contentType: "application/octet-stream",
+           bytes: async () => GU
+         });
+         if ("retryLater" === cU) return await NU(cU);
+         EU.domSequences.push(tU), QU.push({
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L432` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L427) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L432)

```diff
-         }), zM.domSequences.push(mM), iM.domSegments++
+         }), "uploaded" === cU && zU.domSegments++
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L446` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L441) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L446)

```diff
-           bytes: async () => (OM = (0, mM.c)(UM), OM.bytes.buffer)
+           bytes: async () => (cU = await UU.packDom(GU), cU.bytes.buffer)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L480-L481` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L475-L476) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L480-L481)

```diff
-     var WM = iM(34788),
-       sM = iM(34793);
+     var SU = zU(40586),
+       rU = zU(40622);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L484-L486` → after: `L479-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L479-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L479-L482) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L484-L486)

```diff
-       if (!zM.d.supported || void 0 === MM) return;
-       const rM = new zM.d,
-         iM = new WM.e,
+       if (!NU.b.supported || void 0 === UU) return;
+       const XU = new NU.b,
+         zU = new SU.b,
+         oU = new QU.d,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L509` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L505) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L509)

```diff
-                     console.warn(`Session replay couldn't recover what an earlier page load left of ${OM.recordingId}; forgetting it.`, iM), SM = {
+                     console.warn(`Session replay couldn't recover what an earlier page load left of ${cU.recordingId}; forgetting it.`, zU), yU = {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L521` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L517) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L521)

```diff
-               console.warn(`Session replay couldn't forget ${OM.recordingId}'s journal.`, iM)
+               console.warn(`Session replay couldn't forget ${cU.recordingId}'s journal.`, zU)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L530` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L526) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L530)

```diff
-             return new sM.e((null !== (rM = MM.endpoints) && void 0 !== rM ? rM : (0, jM.d)()).segmentUploadUrl, {
+             return new rU.g((null !== (XU = UU.endpoints) && void 0 !== XU ? XU : (0, FU.d)()).segmentUploadUrl, {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L536` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L532) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L536)

```diff
-             return (0, QM.b)((null !== (iM = MM.endpoints) && void 0 !== iM ? iM : (0, jM.d)()).manifestUrl, rM)
+             return (0, YU.b)((null !== (zU = UU.endpoints) && void 0 !== zU ? zU : (0, FU.d)()).manifestUrl, XU)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L539` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L535) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L539)

```diff
-             await MM.request((0, LM.q)(rM), {
+             await UU.request((0, IU.v)(XU), {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L550` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L547) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L550)

```diff
-             return null !== (rM = MM.lateUploadUntilMs) && void 0 !== rM ? rM : MM.expiresAtMs + OM.l
+             return null !== (XU = UU.lateUploadUntilMs) && void 0 !== XU ? XU : UU.expiresAtMs + cU.e
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L553-L555` → after: `L550-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L550-L554) · [Before (L553-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L553-L555)

```diff
-         });
-       for (const OM of aM) "live" !== OM.outcome && console.info(`Session replay: ${OM.outcome} what an earlier page load left of ${OM.recordingId} (${OM.videoSegments} video, ${OM.telemetrySegments} telemetry, ${OM.domSegments} page recording).`);
-       0 === (await rM.listRecordings()).length && SM.g.removeItem(LM.m)
+         }).finally((() => {
+           oU.close()
+         }));
+       for (const cU of DU) "live" !== cU.outcome && console.info(`Session replay: ${cU.outcome} what an earlier page load left of ${cU.recordingId} (${cU.videoSegments} video, ${cU.telemetrySegments} telemetry, ${cU.domSegments} page recording).`);
+       0 === (await XU.listRecordings()).length && yU.k.removeItem(IU.k)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L558` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L557) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L558)

```diff
-   34750: () => {}
+   40752: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/textureNameTable.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/textureNameTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a329c7a0001748ed9b6875b73f8094b77d7e32e5f2cf2980129cdf5a416e905b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   53809: (MM, rM, iM) => {
+   53827: (UU, XU, zU) => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   53791: (MM, rM, iM) => {
+   53793: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var OM = iM(1202),
-       SM = iM(30),
-       jM = iM(53778);
+     var cU = zU(1203),
+       yU = zU(42),
+       QU = zU(53776);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L13-L14)

```diff
-       const iM = new jM.e({
-         store: SM.f,
+       const zU = new QU.d({
+         store: yU.g,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const rM = await fetch(`${OM.clientSideServerUrls.texturePackUrl}/${MM}.json`, {
+           const XU = await fetch(`${cU.clientSideServerUrls.texturePackUrl}/${UU}.json`, {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!rM.ok) throw new Error(`fetching texture pack ${MM} answered HTTP ${rM.status}`);
+           if (!XU.ok) throw new Error(`fetching texture pack ${UU} answered HTTP ${XU.status}`);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8fR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-06706b575ba0ef5f381f4d6cef16cfe72e0adb2c0cb19a9cd6beb0842784df8f) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackFeed.js#L25)

```diff
-       return (0, jM.f)(iM), iM
+       return (0, QU.e)(zU), zU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   35092: (MM, rM, iM) => {
+   34936: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L6-L7)

```diff
-       announceStoredTexturePack: () => SM.d,
-       takeOneShotTexturePack: () => OM.g
+       announceStoredTexturePack: () => yU.b,
+       takeOneShotTexturePack: () => cU.i
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var OM = iM(35100),
-       SM = iM(35103)
+     var cU = zU(34945),
+       yU = zU(34948)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   35103: (MM, rM, iM) => {
+   34948: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L14-L15)

```diff
-       d: () => SM,
-       e: () => jM
+       b: () => yU,
+       d: () => QU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var OM = iM(3657);
+     var cU = zU(3626);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const rM = new BroadcastChannel(OM.i);
+         const XU = new BroadcastChannel(cU.n);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof rM ? rM : null
+       return "string" === typeof XU ? XU : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   35100: (MM, rM, iM) => {
+   34945: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L40-L42` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L40-L42) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L40-L42)

```diff
-       d: () => aM,
-       f: () => SM,
-       g: () => jM
+       c: () => AU,
+       g: () => yU,
+       i: () => QU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var OM = iM(3657);
+     var cU = zU(3626);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const jM = aM(await MM.getItem(OM.e, rM));
+       const QU = AU(await UU.getItem(cU.i, XU));
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const PM = await MM.getItem(OM.f, rM);
+       const FU = await UU.getItem(cU.j, XU);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([MM.removeItem(OM.e), MM.removeItem(OM.f)])
+         await Promise.all([UU.removeItem(cU.i), UU.removeItem(cU.j)])
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof PM ? PM : null
+         source: "string" === typeof FU ? FU : null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, OM.n)() ? Promise.resolve(null) : SM(MM, !1, (MM => {
+       return (0, cU.w)() ? Promise.resolve(null) : yU(UU, !1, (UU => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390fR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ffe52e4cfbae5deca773491492a3fb3c1560c8db815f3d074610c7820f1c390f) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), OM.n)
+       }), cU.w)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (890 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   53677: (MM, rM, iM) => {
+   53669: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6-L28` → after: `L6-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6-L28) · [Before (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6-L28)

```diff
-       "./bedwars/bedwarsClient": [40357, 9],
-       "./bridgeBattle/bridgeBattleClient": [40364, 10],
-       "./buildAFactory2/buildAFactory2Client": [39483, 87, 85, 248, 267, 11],
-       "./classic/classicClient": [40373, 12],
-       "./classic/smp2Client": [40376, 13],
-       "./clutch/clutchClient": [40383, 14],
-       "./containmentBreach/containmentBreachClient": [40388, 243, 15],
-       "./cooking/cookingClient": [40502, 16],
-       "./defusal/defusalClient": [40511, 17],
-       "./frontline/frontlineClient": [40513, 87, 85, 18],
-       "./goalRush/goalRushClient": [40528, 19],
-       "./greenville/greenvilleClient": [40534, 172, 273, 20],
-       "./hideseek/hideseekClient": [40557, 21],
-       "./luckyBedwars/luckyBedwarsClient": [40563, 22],
-       "./murderMystery/murderMysteryClient": [40569, 23],
-       "./ninetyNineNights/ninetyNineNightsClient": [40575, 24],
- ... (7 more removed lines; see GitHub link above)
+       "./bedwars/bedwarsClient": [40137, 9],
+       "./bridgeBattle/bridgeBattleClient": [40143, 10],
+       "./buildAFactory2/buildAFactory2Client": [39269, 87, 85, 244, 263, 11],
+       "./classic/classicClient": [40147, 12],
+       "./classic/smp2Client": [40151, 13],
+       "./clutch/clutchClient": [40155, 14],
+       "./containmentBreach/containmentBreachClient": [40158, 239, 15],
+       "./cooking/cookingClient": [40264, 16],
+       "./defusal/defusalClient": [40271, 17],
+       "./frontline/frontlineClient": [40275, 87, 85, 18],
+       "./goalRush/goalRushClient": [40288, 19],
+       "./greenville/greenvilleClient": [40296, 170, 269, 20],
+       "./hideseek/hideseekClient": [40324, 21],
+       "./luckyBedwars/luckyBedwarsClient": [40328, 22],
+       "./murderMystery/murderMysteryClient": [40333, 23],
+       "./ninetyNineNights/ninetyNineNightsClient": [40338, 24],
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L40)

```diff
-     SM.keys = () => Object.keys(OM), SM.id = 53677, MM.exports = SM
+     yU.keys = () => Object.keys(cU), yU.id = 53669, UU.exports = yU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L42)

```diff
-   37316: (MM, rM, iM) => {
+   39858: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L45-L48` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L45) · [Before (L45-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L45-L48)

```diff
-       f: () => PM,
-       i: () => QM,
-       j: () => nM,
-       l: () => EM
+       h: () => yU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L50-L226` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L47) · [Before (L50-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L50-L226)

```diff
-     var OM = iM(632),
-       SM = iM(1845),
-       jM = iM(5200);
-     class aM {
-       constructor(MM, rM) {
-         this.width = MM, this.vL = rM, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(MM * rM)
-       }
-       push(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const iM = this.data,
-           OM = this.next * this.width;
-         for (let SM = 0; SM < this.width; SM++) iM[OM + SM] = MM[rM + SM];
-         this.next = (this.next + 1) % this.vL, this.size = Math.min(this.size + 1, this.vL)
-       }
-       rows() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
- ... (161 more removed lines; see GitHub link above)
+     var cU = zU(31);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L233` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L54) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L233)

```diff
-       "refetchCode" !== MM ? "Plugin|MobAiPlugin|ShowPetUi" !== MM ? Promise.all([iM.e(121), iM.e(122), iM.e(117), iM.e(119), iM.e(236)]).then((() => iM(44386))).then((iM => {
+       "refetchCode" !== UU ? "Plugin|MobAiPlugin|ShowPetUi" !== UU ? Promise.all([zU.e(120), zU.e(121), zU.e(116), zU.e(118), zU.e(231)]).then((() => zU(44426))).then((zU => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L239-L240` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L60-L61) · [Before (L239-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L239-L240)

```diff
-         console.error(`Game message ${MM} failed`, rM)
-       })) : OM.i.Tz("showPetUi", rM) : OM.i.Tz("refetchCode")
+         console.error(`Game message ${UU} failed`, XU)
+       })) : cU.k.UY("showPetUi", XU) : cU.k.UY("refetchCode")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L243` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L64) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L243)

```diff
-   53658: (MM, rM, iM) => {
+   53645: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L245-L246` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L66-L67) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L245-L246)

```diff
-       c: () => OM,
-       e: () => SM
+       d: () => cU,
+       f: () => yU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L255` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L76) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L255)

```diff
-   34956: (MM, rM, iM) => {
+   34791: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L257-L258` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L78-L79) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L257-L258)

```diff
-       d: () => PM,
-       f: () => nM
+       e: () => FU,
+       h: () => oU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L260` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L81) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L260)

```diff
-     var OM = iM(19);
+     var cU = zU(27);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L267` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L88) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L267)

```diff
-       return null === (MM = OM.d.get("showDistantNametags")) || void 0 === MM || MM
+       return null === (UU = cU.e.get("showDistantNametags")) || void 0 === UU || UU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L276` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L97) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L276)

```diff
-       }()) && void 0 !== MM ? MM : PM() ? 0 : SM
+       }()) && void 0 !== UU ? UU : FU() ? 0 : yU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L279` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L100) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L279)

```diff
-   45248: (MM, rM, iM) => {
+   45247: (UU, XU, zU) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L281` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L102) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L281)

```diff
-       blockIdOf: () => zQ.e,
+       blockIdOf: () => oD.c,
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L285` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L106) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L285)

```diff
-       drainTextRerasters: () => Mn.b,
+       drainTextRerasters: () => hF.e,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L292` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L113) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L292)

```diff
-       loadTextIcons: () => Mn.d,
+       loadTextIcons: () => hF.h,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L295-L297` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L116-L118) · [Before (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L295-L297)

```diff
-       readDrawCensus: () => hQ.f,
-       setTextHost: () => Mn.g,
-       setTextLocalPlayer: () => Mn.j,
+       readDrawCensus: () => ND.h,
+       setTextHost: () => hF.m,
+       setTextLocalPlayer: () => hF.n,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L302-L303` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L123-L124) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L302-L303)

```diff
-       textChanged: () => Mn.o,
-       warmText: () => cP.h,
+       textChanged: () => hF.s,
+       warmText: () => TF.f,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L306-L323` → after: `L127-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L127-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L127-L144) · [Before (L306-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L306-L323)

```diff
-     iM(37451);
-     var OM = iM(19),
-       SM = iM(37769),
-       jM = iM(40240),
-       aM = iM(22),
-       PM = iM(3809),
-       nM = iM(37767),
-       QM = iM(1313),
-       zM = iM(613),
-       LM = iM(39230),
-       mM = iM(5198),
-       HM = iM(41714),
-       hM = iM(41669);
-     const JM = hM.Fb / 4,
-       dM = hM.o.PlaySound,
-       yM = hM.o.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     zU(37215);
+     var cU = zU(27),
+       yU = zU(37540),
+       QU = zU(40012),
+       AU = zU(31),
+       FU = zU(3791),
+       oU = zU(37538),
+       DU = zU(1310),
+       EU = zU(633),
+       YU = zU(39002),
+       NU = zU(5318),
+       IU = zU(41699),
+       pU = zU(41652);
+     const aU = pU.Mb / 4,
+       tU = pU.p.PlaySound,
+       gU = pU.p.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L327` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L148) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L327)

```diff
-         this.core = MM, this.memory = rM, this.audio = iM, this.serverIds = new Int32Array(256).fill(hM.Nc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = UU, this.memory = XU, this.audio = zU, this.serverIds = new Int32Array(256).fill(pU.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L332` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L153) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L332)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.eSM(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.oQU(), this.ensureViews()), this.scratchPtr
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L345` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L166) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L345)

```diff
-         return hM.v.localId(this.apiView, 0)
+         return pU.w.localId(this.apiView, 0)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L348` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L169) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L348)

```diff
-         return hM.v.localDeaths(this.apiView, 0)
+         return pU.w.localDeaths(this.apiView, 0)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L352-L356` → after: `L173-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L173-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L173-L177) · [Before (L352-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L352-L356)

```diff
-           rM = hM.v.entRenderPtr(MM, 0),
-           iM = hM.v.entVisPtr(MM, 0),
-           OM = hM.v.entCapacity(MM, 0);
-         if (rM !== this.renderPtr || iM !== this.visPtr || OM !== this.vL || this.renderBuffer !== this.buffer) {
-           this.renderPtr = rM, this.visPtr = iM, this.vL = OM, this.renderBuffer = this.buffer;
+           XU = pU.w.entRenderPtr(UU, 0),
+           zU = pU.w.entVisPtr(UU, 0),
+           cU = pU.w.entCapacity(UU, 0);
+         if (XU !== this.renderPtr || zU !== this.visPtr || cU !== this.xY || this.renderBuffer !== this.buffer) {
+           this.renderPtr = XU, this.visPtr = zU, this.xY = cU, this.renderBuffer = this.buffer;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L359` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L180) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L359)

```diff
-           this.renderCapacity = MM && SM ? OM : 0, this.render = MM && SM ? MM : new Float32Array(0), this.vis = MM && SM ? SM : new Uint8Array(0)
+           this.renderCapacity = UU && yU ? cU : 0, this.render = UU && yU ? UU : new Float32Array(0), this.vis = UU && yU ? yU : new Uint8Array(0)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L364` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L185) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L364)

```diff
-           return (0, HM.l)(MM, this.memory().buffer, rM, iM, OM)
+           return (0, IU.t)(UU, this.memory().buffer, XU, zU, cU)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L371` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L192) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L371)

```diff
-           return (0, HM.g)(this.memory().buffer, MM, rM, iM, OM)
+           return (0, IU.e)(this.memory().buffer, UU, XU, zU, cU)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L379` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L200) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L379)

```diff
-         return (null === OM || void 0 === OM ? void 0 : OM.buffer) === this.memory().buffer && OM.byteOffset === iM && OM.byteLength >= MM ? OM : (this.scratchView = this.memoryData(iM, MM, 8, rM), this.scratchView)
+         return (null === cU || void 0 === cU ? void 0 : cU.buffer) === this.memory().buffer && cU.byteOffset === zU && cU.byteLength >= UU ? cU : (this.scratchView = this.memoryData(zU, UU, 8, XU), this.scratchView)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L382` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L203) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L382)

```diff
-         this.keepCorruption(new HM.d(MM))
+         this.keepCorruption(new IU.c(UU))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L385` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L206) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L385)

```diff
-         if (!(MM instanceof HM.d)) throw MM;
+         if (!(UU instanceof IU.c)) throw UU;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L403-L404` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L224-L225) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L403-L404)

```diff
-             SM = QM + mM.U;
-           if (iM === hM.o.EntitySpawned) {
+             yU = DU + NU.V;
+           if (zU === pU.p.EntitySpawned) {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L406-L410` → after: `L227-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L227-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L227-L231) · [Before (L406-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L406-L410)

```diff
-             if (OM !== hM.Hb.BYTES) throw wM(iM, QM, OM);
-             const MM = hM.Hb.serverId(jM, SM);
-             this.spawned(MM, hM.Hb.index(jM, SM), hM.Hb.kind(jM, SM)), null === (aM = rM.entityAdded) || void 0 === aM || aM.call(rM, MM)
-           } else if ((iM === hM.o.ChunkSlot || iM === hM.o.EntityInfoChanged) && !(0, hM.ge)(iM, jM, SM, OM, rM)) throw wM(iM, QM, OM);
-           QM = SM + (0, mM.oe)(OM)
+             if (cU !== pU.Rb.BYTES) throw dU(zU, DU, cU);
+             const UU = pU.Rb.serverId(QU, yU);
+             this.spawned(UU, pU.Rb.index(QU, yU), pU.Rb.kind(QU, yU)), null === (AU = XU.entityAdded) || void 0 === AU || AU.call(XU, UU)
+           } else if ((zU === pU.p.ChunkSlot || zU === pU.p.EntityInfoChanged) && !(0, pU.pe)(zU, QU, yU, cU, XU)) throw dU(zU, DU, cU);
+           DU = yU + (0, NU.De)(cU)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L416` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L237) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L416)

```diff
-           throw nM instanceof HM.d && (this.corruption ??= nM), nM
+           throw oU instanceof IU.c && (this.corruption ??= oU), oU
```
