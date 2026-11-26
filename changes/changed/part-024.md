# Changed — Bundle Modifications Report (Part 024 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `24 / 99` (**285** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 023](part-023.md) · [Part 025 →](part-025.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 12. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L253-L284` → after: `L502-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L502-L504) · [Before (L253-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L253-L284)

```diff
-     function mM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rM => 0 !== MM[4 * rM + 3];
-       const SM = new Uint8Array(rM * rM);
-       for (let PM = 0; PM < rM * rM; PM++) SM[PM] = OM(PM) ? 1 : 0;
-       const jM = (MM, iM) => MM >= 0 && iM >= 0 && MM < rM && iM < rM && 0 === SM[iM * rM + MM],
-         aM = new Float32Array(rM * rM).fill(1 / 0),
-         nM = function(MM) {
-           if (MM !== zM) {
-             const rM = Math.ceil(MM + 1),
-               iM = [];
-             for (let OM = -rM; OM <= rM; OM++)
-               for (let SM = -rM; SM <= rM; SM++) {
-                 const rM = SM * SM + OM * OM;
-                 rM > 0 && rM < (MM + 1) ** 2 && iM.push(SM, OM, rM)
-               }
-             zM = MM, LM = Int32Array.from(iM)
- ... (16 more removed lines; see GitHub link above)
+     function NU(UU, XU) {
+       for (let zU = 0; zU < XU; zU++) "number" !== typeof UU[zU] && (UU[zU] = 0);
+       return UU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L287-L290` → after: `L508-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L508-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L508-L511) · [Before (L287-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L287-L290)

```diff
-   37356: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => SM
-     });
+   37390: (UU, XU, zU) => {
+     const cU = zU(37393),
+       yU = {};
+     for (const AU of Object.keys(cU)) yU[cU[AU]] = AU;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L292-L295` → after: `L513-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L513-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L513-L515) · [Before (L292-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L292-L295)

```diff
-       wait: function(MM) {
-         return new Promise((rM => {
-           setTimeout(rM, MM)
-         }))
+       rgb: {
+         channels: 3,
+         labels: "rgb"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L297-L303` → after: `L517-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L517-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L517-L571) · [Before (L297-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L297-L303)

```diff
-       stallMs: 2e4
-     };
-     class SM {
-       constructor(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OM;
-         this.url = MM, this.options = rM, this.timing = iM, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = MM
+       hsl: {
+         channels: 3,
+         labels: "hsl"
+       },
+       hsv: {
+         channels: 3,
+         labels: "hsv"
+       },
+       hwb: {
+         channels: 3,
+         labels: "hwb"
+       },
+       cmyk: {
+         channels: 4,
+         labels: "cmyk"
+       },
+ ... (39 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L305-L310` → after: `L573-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L573-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L573-L631) · [Before (L305-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L305-L310)

```diff
-       ready() {
-         if (null === this.fetched) {
-           const MM = new AbortController;
-           this.fetchAbort = MM, this.fetched = this.fetchWithRetries(MM.signal).then((rM => (this.fetchAbort === MM && (this.fetchAbort = null), rM)))
-         }
-         return this.fetched
+     };
+     UU.exports = QU;
+     for (const AU of Object.keys(QU)) {
+       if (!("channels" in QU[AU])) throw new Error("missing channels property: " + AU);
+       if (!("labels" in QU[AU])) throw new Error("missing channel labels property: " + AU);
+       if (QU[AU].labels.length !== QU[AU].channels) throw new Error("channel and label counts mismatch: " + AU);
+       const {
+         channels: UU,
+         labels: XU
+       } = QU[AU];
+       delete QU[AU].channels, delete QU[AU].labels, Object.defineProperty(QU[AU], "channels", {
+         value: UU
+       }), Object.defineProperty(QU[AU], "labels", {
+         value: XU
+       })
+     }
+ ... (43 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L312-L313` → after: `L633-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L633-L690) · [Before (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L312-L313)

```diff
-       cancel() {
-         null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
+       var AU, FU;
+       return zU
+     }, QU.keyword.rgb = function(UU) {
+       return cU[UU]
+     }, QU.rgb.xyz = function(UU) {
+       let XU = UU[0] / 255,
+         zU = UU[1] / 255,
+         cU = UU[2] / 255;
+       XU = XU > .04045 ? ((XU + .055) / 1.055) ** 2.4 : XU / 12.92, zU = zU > .04045 ? ((zU + .055) / 1.055) ** 2.4 : zU / 12.92, cU = cU > .04045 ? ((cU + .055) / 1.055) ** 2.4 : cU / 12.92;
+       return [100 * (.4124 * XU + .3576 * zU + .1805 * cU), 100 * (.2126 * XU + .7152 * zU + .0722 * cU), 100 * (.0193 * XU + .1192 * zU + .9505 * cU)]
+     }, QU.rgb.lab = function(UU) {
+       const XU = QU.rgb.xyz(UU);
+       let zU = XU[0],
+         cU = XU[1],
+         yU = XU[2];
+       zU /= 95.047, cU /= 100, yU /= 108.883, zU = zU > .008856 ? zU ** (1 / 3) : 7.787 * zU + 16 / 116, cU = cU > .008856 ? cU ** (1 / 3) : 7.787 * cU + 16 / 116, yU = yU > .008856 ? yU ** (1 / 3) : 7.787 * yU + 16 / 116;
+ ... (42 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L315-L316` → after: `L692-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L692-L732) · [Before (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L315-L316)

```diff
-       forgetFailedFetch() {
-         this.fetched = null
+     }, QU.hsv.hsl = function(UU) {
+       const XU = UU[0],
+         zU = UU[1] / 100,
+         cU = UU[2] / 100,
+         yU = Math.max(cU, .01);
+       let QU, AU;
+       AU = (2 - zU) * cU;
+       const FU = (2 - zU) * yU;
+       return QU = zU * yU, QU /= FU <= 1 ? FU : 2 - FU, QU = QU || 0, AU /= 2, [XU, 100 * QU, 100 * AU]
+     }, QU.hwb.rgb = function(UU) {
+       const XU = UU[0] / 360;
+       let zU = UU[1] / 100,
+         cU = UU[2] / 100;
+       const yU = zU + cU;
+       let QU;
+       yU > 1 && (zU /= yU, cU /= yU);
+ ... (25 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L318-L319` → after: `L734-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L734-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L734-L795) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L318-L319)

```diff
-       get href() {
-         return this.url.href
+       return [255 * DU, 255 * EU, 255 * YU]
+     }, QU.cmyk.rgb = function(UU) {
+       const XU = UU[0] / 100,
+         zU = UU[1] / 100,
+         cU = UU[2] / 100,
+         yU = UU[3] / 100;
+       return [255 * (1 - Math.min(1, XU * (1 - yU) + yU)), 255 * (1 - Math.min(1, zU * (1 - yU) + yU)), 255 * (1 - Math.min(1, cU * (1 - yU) + yU))]
+     }, QU.xyz.rgb = function(UU) {
+       const XU = UU[0] / 100,
+         zU = UU[1] / 100,
+         cU = UU[2] / 100;
+       let yU, QU, AU;
+       return yU = 3.2406 * XU + -1.5372 * zU + -.4986 * cU, QU = -.9689 * XU + 1.8758 * zU + .0415 * cU, AU = .0557 * XU + -.204 * zU + 1.057 * cU, yU = yU > .0031308 ? 1.055 * yU ** (1 / 2.4) - .055 : 12.92 * yU, QU = QU > .0031308 ? 1.055 * QU ** (1 / 2.4) - .055 : 12.92 * QU,  … [truncated]
+     }, QU.xyz.lab = function(UU) {
+       let XU = UU[0],
+         zU = UU[1],
+ ... (46 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L321-L322` → after: `L797-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L797-L858) · [Before (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L321-L322)

```diff
-       start() {
-         return new Worker(this.scriptUrl, this.options)
+       let XU;
+       UU -= 16;
+       return [Math.floor(UU / 36) / 5 * 255, Math.floor((XU = UU % 36) / 6) / 5 * 255, XU % 6 / 5 * 255]
+     }, QU.rgb.hex = function(UU) {
+       const XU = (((255 & Math.round(UU[0])) << 16) + ((255 & Math.round(UU[1])) << 8) + (255 & Math.round(UU[2]))).toString(16).toUpperCase();
+       return "000000".substring(XU.length) + XU
+     }, QU.hex.rgb = function(UU) {
+       const XU = UU.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
+       if (!XU) return [0, 0, 0];
+       let zU = XU[0];
+       3 === XU[0].length && (zU = zU.split("").map((UU => UU + UU)).join(""));
+       const cU = parseInt(zU, 16);
+       return [cU >> 16 & 255, cU >> 8 & 255, 255 & cU]
+     }, QU.rgb.hcg = function(UU) {
+       const XU = UU[0] / 255,
+         zU = UU[1] / 255,
+ ... (46 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L324-L329` → after: `L860-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L860-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L860-L958) · [Before (L324-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L324-L329)

```diff
-       async fetchWithRetries(MM) {
-         for (let rM = 0;; rM++) {
-           const iM = new URL(this.url);
-           if (rM > 0 && iM.searchParams.set("cache-bust", `${Date.now()}-${rM}`), await this.fetchWhole(iM, MM)) return this.scriptUrl = iM, !0;
-           if (rM >= 3 || MM.aborted) return !1;
-           if (await this.timing.wait(500 * 2 ** rM), MM.aborted) return !1
+       return oU = (1 - zU) * cU, [255 * (zU * yU[0] + oU), 255 * (zU * yU[1] + oU), 255 * (zU * yU[2] + oU)]
+     }, QU.hcg.hsv = function(UU) {
+       const XU = UU[1] / 100,
+         zU = XU + UU[2] / 100 * (1 - XU);
+       let cU = 0;
+       return zU > 0 && (cU = XU / zU), [UU[0], 100 * cU, 100 * zU]
+     }, QU.hcg.hsl = function(UU) {
+       const XU = UU[1] / 100,
+         zU = UU[2] / 100 * (1 - XU) + .5 * XU;
+       let cU = 0;
+       return zU > 0 && zU < .5 ? cU = XU / (2 * zU) : zU >= .5 && zU < 1 && (cU = XU / (2 * (1 - zU))), [UU[0], 100 * cU, 100 * zU]
+     }, QU.hcg.hwb = function(UU) {
+       const XU = UU[1] / 100,
+         zU = XU + UU[2] / 100 * (1 - XU);
+       return [UU[0], 100 * (zU - XU), 100 * (1 - zU)]
+     }, QU.hwb.hcg = function(UU) {
+ ... (83 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L332-L364` → after: `L961-L1147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L961-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L961-L1147) · [Before (L332-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L332-L364)

```diff
-       async fetchWhole(MM, rM) {
-         const iM = new AbortController;
-         let OM;
-         const SM = () => {
-             clearTimeout(OM), OM = setTimeout((() => {
-               iM.abort()
-             }), this.timing.stallMs)
-           },
-           jM = () => {
-             iM.abort()
-           };
-         rM.addEventListener("abort", jM, {
-           once: !0
-         }), SM();
-         try {
-           var aM;
- ... (17 more removed lines; see GitHub link above)
+       return XU
+     }
+ 
+     function QU(UU, XU) {
+       return function(zU) {
+         return XU(UU(zU))
+       }
+     }
+ 
+     function AU(UU, XU) {
+       const zU = [XU[UU].parent, UU];
+       let yU = cU[XU[UU].parent][UU],
+         AU = XU[UU].parent;
+       for (; XU[AU].parent;) zU.unshift(XU[AU].parent), yU = QU(cU[XU[AU].parent][AU], yU), AU = XU[AU].parent;
+       return yU.conversion = zU, yU
+     }
+ ... (171 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/241.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/241.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774)

#### 1. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L5-L74)

```diff
-   40691: (MM, rM, iM) => {
-     MM.exports = SM;
-     var OM = iM(347);
- 
-     function SM(MM, rM) {
-       if (!(this instanceof SM)) return new SM(MM, rM);
-       var iM = OM.create();
-       OM.add(iM, MM, rM), this.base = OM.min(OM.create(), MM, iM), this.vec = OM.clone(rM), this.max = OM.max(OM.create(), MM, iM), this.mag = OM.length(this.vec)
-     }
-     var jM = SM.prototype;
-     jM.width = function() {
-       return this.vec[0]
-     }, jM.height = function() {
-       return this.vec[1]
-     }, jM.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   37480: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L76-L77` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L6-L14) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L76-L77)

```diff
-       c: () => PM,
-       e: () => jM
+       e: () => FX,
+       f: () => kX,
+       j: () => NX,
+       n: () => DX,
+       r: () => IX,
+       t: () => YX,
+       v: () => GX,
+       y: () => EX,
+       B: () => aX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L79-L106` → after: `L16-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L16-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L16-L137) · [Before (L79-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L79-L106)

```diff
-     var OM = iM(4443);
-     let SM = null;
- 
-     function jM(MM) {
-       return null !== SM && MM === SM
-     }
- 
-     function aM() {
-       this.uB = !1, this.stopPropagation = !1, this.pB = !1, this.disabled = !1
-     }
-     class PM {
-       constructor(MM, rM) {
-         this.version = "0.7.0";
-         var iM = Object.assign({}, new aM, rM || {});
-         this.element = MM || document, this.uB = !!iM.uB, this.stopPropagation = !!iM.stopPropagation, this.pB = !!iM.pB, this.disabled = !!iM.disabled, this.filterEvents = (MM, rM) => !0, this.ignoreEvent = MM => !1, this.down = new OM.EventEmitter, this.up = new OM.EventEmitter … [truncated]
-           dx: 0,
- ... (12 more removed lines; see GitHub link above)
+     const cU = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       yU = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       QU = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       AU = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       FU = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       oU = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       DU = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       EU = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       YU = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       NU = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       IU = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       pU = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       aU = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       tU = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       gU = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       kU = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (106 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L109-L135` → after: `L140-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L140-L143) · [Before (L109-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L109-L135)

```diff
-       bind(MM) {
-         for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
-         iM.forEach((rM => {
-           var iM = this._keyBindmap[rM] || [];
-           iM.includes(MM) || (iM.push(MM), this._keyBindmap[rM] = iM)
-         })), this.state[MM] = !!this.state[MM], this.pressCount[MM] = this.pressCount[MM] || 0, this.releaseCount[MM] = this.releaseCount[MM] || 0
-       }
-       unbind(MM) {
-         for (var rM in this._keyBindmap) {
-           var iM = this._keyBindmap[rM],
-             OM = iM.indexOf(MM);
-           OM > -1 && iM.splice(OM, 1)
-         }
-       }
-       getBindings() {
-         var MM = {};
- ... (11 more removed lines; see GitHub link above)
+     const FX = new Map([...yX].map((UU => {
+       const XU = Object.keys(QX).filter((XU => XU.startsWith(UU) && /^[A-Z]/.test(XU.slice(UU.length))));
+       return [UU, XU]
+     })));
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L138` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L146-L148) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L138)

```diff
-       for (var rM in MM) MM[rM] = 0
+       const XU = AX.get(UU);
+       if (void 0 === XU) throw new Error(`Invalid sound name ${UU} (not in any sound group)`);
+       return XU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L142-L155` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L152) · [Before (L142-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L142-L155)

```diff
-       window.addEventListener("keydown", dM.bind(null, MM, !0), !1), window.addEventListener("keyup", dM.bind(null, MM, !1), !1);
-       var rM = {
-         passive: !0
-       };
-       MM.element.addEventListener("touchstart", HM.bind(void 0, MM), {
-         passive: !1
-       }), MM.element.addEventListener("touchend", JM.bind(void 0, MM), rM), MM.element.addEventListener("mousedown", yM.bind(null, MM, !0), rM), window.document.addEventListener("mouseup", yM.bind(null, MM, !1), rM), MM.element.addEventListener("touchmove", lM.bind(null, MM), rM) … [truncated]
-     }
-     var zM = 0,
-       LM = 0,
-       mM = null;
- 
-     function HM(MM, rM) {
-       rM.preventDefault(), hM(rM)
+       return oX(UU).group
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L159-L231` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L156) · [Before (L159-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L159-L231)

```diff
-       let rM = !1;
-       for (let iM = 0; iM < MM.touches.length; ++iM)
-         if (MM.touches[iM].identifier === mM) {
-           rM = !0;
-           break
-         } if (!rM) {
-         const rM = MM.changedTouches[0];
-         zM = rM.clientX, LM = rM.clientY, mM = rM.identifier
-       }
-     }
- 
-     function JM(MM, rM) {
-       for (var iM = rM.changedTouches, OM = 0; OM < iM.length; ++OM) iM[OM].identifier === mM && (mM = null)
-     }
- 
-     function dM(MM, rM, iM) {
- ... (57 more removed lines; see GitHub link above)
+       return oX(UU).file
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L234-L263` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L159-L160) · [Before (L234-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L234-L263)

```diff
-     function UM(MM, rM) {
-       if (!MM.pB) return rM.preventDefault(), !1
-     }
-     var GM = {
-       AltLeft: "altKey",
-       AltRight: "altKey",
-       ControlLeft: "ctrlKey",
-       ControlRight: "ctrlKey",
-       ShiftLeft: "shiftKey",
-       ShiftRight: "shiftKey",
-       MetaLeft: "metaKey",
-       MetaRight: "metaKey"
-     };
- 
-     function CM(MM, rM) {
-       return !!MM[GM[rM]] || ("AltRight" === rM || "ControlLeft" === rM) && "function" === typeof MM.getModifierState && !0 === MM.getModifierState("AltGraph")
- ... (14 more removed lines; see GitHub link above)
+     function YX(UU) {
+       return AX.has(UU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L267-L269` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L164) · [Before (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L267-L269)

```diff
-       var iM = MM._modifiersHeldThroughBlur;
-       if (iM && rM.isTrusted && document.hasFocus())
-         for (var OM in iM) delete iM[OM], MM._keyStates[OM] && OM !== rM.code && (CM(rM, OM) || wM(MM, OM))
+       return IX(UU).includes(XU)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L272-L284` → after: `L167-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L167-L169) · [Before (L272-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L272-L284)

```diff
-     function wM(MM, rM) {
-       const iM = {
-           code: rM,
-           preventDefault: () => {},
-           stopPropagation: () => {}
-         },
-         OM = SM;
-       SM = iM;
-       try {
-         tM(rM, !1, MM, iM)
-       } finally {
-         SM = OM
-       }
+     function IX(UU) {
+       if (!(UU in QX)) throw new Error(`Invalid sound group ${UU}`);
+       return Object.keys(QX[UU].sounds)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L287-L303` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L173-L175) · [Before (L287-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L287-L303)

```diff
-     function tM(MM, rM, iM, OM) {
-       var SM = iM._keyBindmap[MM];
-       SM && (gM(iM._keyStates[MM], rM) && (iM._keyStates[MM] = rM, SM.forEach((MM => {
-         (!iM.filterEvents || iM.filterEvents(OM, MM)) && function(MM, rM, iM, OM) {
-           var SM = rM ? iM.pressCount : iM.releaseCount;
-           SM[MM] = (SM[MM] || 0) + 1;
-           var jM = iM._bindPressCount[MM] || 0;
-           (jM += rM ? 1 : -1) < 0 && (jM = 0);
-           iM._bindPressCount[MM] = jM;
-           var aM = iM.state[MM];
-           if (gM(aM, jM)) {
-             iM.state[MM] = jM > 0;
-             var PM = rM ? iM.down : iM.up;
-             iM.disabled || PM.emit(MM, OM)
-           }
-         }(MM, rM, iM, OM)
- ... (1 more removed lines; see GitHub link above)
+     function aX(UU) {
+       let XU = pX.get(UU);
+       return void 0 === XU && (XU = [...AX.keys()].filter((XU => XU.startsWith(UU))), pX.set(UU, XU)), XU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L312-L314` → after: `L181-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L181-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L181-L189) · [Before (L312-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L312-L314)

```diff
-       if (MM && "object" === typeof MM) {
-         var rM = MM.which || MM.keyCode || MM.charCode;
-         rM && (MM = rM)
+       const XU = aX(UU),
+         zU = XU[Math.floor(Math.random() * XU.length)];
+       if (XU.length > 1) {
+         const XU = function(UU, XU) {
+           const zU = `${XU}\n${UU}`;
+           let cU = gX.get(zU);
+           return void 0 === cU && (cU = aX(UU).filter((UU => AX.get(UU).group === XU)), gX.set(zU, cU)), cU
+         }(UU, AX.get(zU).group);
+         XU.length > 1 ? tX.set(zU, XU) : tX.delete(zU)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L316-L318` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L191) · [Before (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L316-L318)

```diff
-       if ("number" === typeof MM) return aM[MM];
-       var iM, jM = String(MM);
-       return (iM = OM[jM.toLowerCase()]) ? iM : (iM = SM[jM.toLowerCase()]) || (1 === jM.length ? jM.charCodeAt(0) : void 0)
+       return zU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L492-L660` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L195) · [Before (L492-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L492-L660)

```diff
-       for (var rM = MM._data, iM = 1e3 / MM.zk, OM = rM.nowObject.now() + aM, SM = 0; rM.nowObject.now() >= rM.lastTickStarted + iM && rM.nowObject.now() < OM && ++SM <= jM;) MM.kE(iM), rM.lastTickStarted += iM;
-       var PM = 5 * (iM + 5),
-         nM = rM.nowObject.now();
-       if (nM - rM.lastTickStarted > PM)
-         for (; nM >= rM.lastTickStarted + iM;) rM.lastTickStarted += iM
-     }
-   },
-   37640: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(44);
-     const SM = OM.useLayoutEffect;
-     const jM = function(MM) {
-       var rM = (0, OM.useRef)(MM);
-       return SM((function() {
- ... (153 more removed lines; see GitHub link above)
+       return tX.get(UU)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L666-L874` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L198) · [Before (L666-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L666-L874)

```diff
-   39705: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => jM
-     });
-     var OM = iM(39711);
-     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
-       ...MM
-     } : null : MM.clone(rM) : null;
-     class jM {
-       static DeepCopy(MM, rM, iM, jM) {
-         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const PM = function(MM) {
-           const rM = [];
-           do {
-             const iM = Object.getOwnPropertyNames(MM);
-             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
- ... (193 more removed lines; see GitHub link above)
+   37484: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L877` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L201) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L877)

```diff
-       e: () => aM
+       h: () => QU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L879-L1188` → after: `L203-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L203-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L203-L212) · [Before (L879-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L879-L1188)

```diff
-     var OM = iM(38040),
-       SM = iM(38074),
-       jM = iM(39705);
-     class aM {
-       constructor() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = MM, this.height = rM, this.radiusRange = iM, this.directionRandomizer = SM, this._tempVector = OM.q.Zero()
-       }
-       startDirectionFunction(MM, rM, iM, jM, aM) {
-         iM.position.subtractToRef(MM.getTranslation(), this._tempVector), this._tempVector.normalize(), OM.q.TransformNormalToRef(this._tempVector, aM, this._tempVector);
-         const PM = (0, SM.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
-         let nM = Math.atan2(this._tempVector.x, this._tempVector.z);
-         nM += (0, SM.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = PM, this._tempVector.x = Math.sin(nM), this._tempVector.z = Math.cos(nM), this._tempVector.normalize(), jM ? rM.jR(this._tempVector) : OM.q.TransformNormalFromFloatsToRef … [truncated]
- ... (294 more removed lines; see GitHub link above)
+     const cU = "__default",
+       yU = ["end", "stop", "playerror"];
+ 
+     function QU(UU, XU) {
+       const zU = () => {
+         if (function(UU) {
+             return "loaded" === UU.state() && !UU.playing() && !UU._playLock
+           }(UU)) {
+           for (const XU of yU) UU.off(XU, zU);
+           UU.unload(), null === XU || void 0 === XU || XU()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/241.js` (Changed code · before: `L1190-L1191` → after: `L214-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7383cd6337432ed90e2f8f2e4ef325b863008edb7308e6024f6a8e31cb015774) · [After (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/241.js#L214-L216) · [Before (L1190-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/241.js#L1190-L1191)

```diff
-         return 27 * (jM + aM + QM + LM + mM)
-       }
+       };
+       for (const cU of yU) UU.on(cU, zU);
+       zU()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/242.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/242.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L4-L6)

```diff
-   42181: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       LobbyManageView: () => Cr
+   40525: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => cU,
+       e: () => yU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L8-L107` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L9-L12) · [Before (L8-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L8-L107)

```diff
-     var OM = iM(44),
-       SM = iM(1548),
-       jM = iM(37950),
-       aM = iM(2653),
-       PM = iM(2658),
-       nM = iM(2640),
-       QM = iM(37498);
- 
-     function zM() {
-       const [MM, rM] = (0, OM.useState)(new Map);
-       return {
-         get: rM => MM.get(rM),
-         hold: (0, OM.useCallback)(((MM, iM, OM) => {
-           rM((rM => new Map(rM).set(MM, iM))), OM.then((() => {
-             rM((rM => {
-               const iM = new Map(rM);
- ... (84 more removed lines; see GitHub link above)
+     const cU = "The world isn't loaded, so no blocks can be seen.",
+       yU = "The world isn't loaded, so nothing in it can be seen."
+   },
+   39926: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L109-L119` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L14) · [Before (L109-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L109-L119)

```diff
-       let {
-         status: rM
-       } = MM;
-       return (0, kM.jsx)("span", {
-         className: mM()("LobbyManageStatus", {
-           LobbyManageStatusRefused: !rM.ok
-         }),
-         children: (0, kM.jsx)(sM.b, {
-           text: rM.text
-         })
-       })
+       return !(!UU.lobbyLeaderboardInfo && !UU.lobbyManage)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L121-L211` → after: `L16-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L16-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L16-L25) · [Before (L121-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L121-L211)

```diff
- 
-     function oM(MM) {
-       let {
-         names: rM,
-         cap: iM,
-         filterFrom: SM,
-         moreLabel: jM,
-         reveal: aM = null,
-         renderRow: PM
-       } = MM;
-       const {
-         t: nM
-       } = (0, HM.A)(), [QM, zM] = (0, OM.useState)(!1), [LM, mM] = (0, OM.useState)(""), JM = QM || null !== aM && rM.indexOf(aM) >= iM, yM = (JM || rM.length <= iM) && null !== SM && rM.length > SM, lM = LM.trim().toLowerCase();
-       let EM = JM ? rM : rM.slice(0, iM);
-       return yM && "" !== lM && (EM = EM.filter((MM => MM.toLowerCase().includes(lM)))), (0, kM.jsxs)(kM.Fragment, {
-         children: [yM && (0, kM.jsx)(DM.b, {
- ... (75 more removed lines; see GitHub link above)
+     zU.d(XU, {
+       c: () => cU
+     })
+   },
+   37535: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => yU,
+       f: () => cU
+     });
+     const cU = 3,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L213-L442` → after: `L27-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L27-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L27-L38) · [Before (L213-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L213-L442)

```diff
-         coOwner: "lobbyManage:roleCanCoOwner",
-         mod: "lobbyManage:roleCanMod",
-         coder: "lobbyManage:roleCanCoder",
-         builder: "lobbyManage:roleCanBuilder"
-       };
- 
-     function AM(MM) {
-       var rM, iM, jM;
-       let {
-         name: aM,
-         place: PM,
-         openedIn: nM,
-         isYou: QM,
-         manage: LM,
-         hiddenNames: mM,
-         zIndex: JM
- ... (214 more removed lines; see GitHub link above)
+         recording: !1,
+         clipping: !1,
+         hasClipBuffer: !1,
+         seconds: 0
+       }
+   },
+   37538: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => QU,
+       f: () => yU
+     });
+     let cU = () => null;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L445-L582` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L41) · [Before (L445-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L445-L582)

```diff
-       var rM, iM, SM, jM;
-       let {
-         manage: aM,
-         focusRequest: PM,
-         onFocused: nM
-       } = MM;
-       const {
-         t: QM
-       } = (0, HM.A)(), zM = (0, EM.j)("players"), LM = (0, EM.j)("hiddenPlayerNames"), mM = (0, OM.useRef)(null), {
-         state: JM
-       } = aM, yM = null === zM.localId ? null : null !== (rM = null === (iM = zM.byId[zM.localId]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : null, [lM] = (0, OM.useState)((() => CM(JM, yM))), GM = function(MM, rM, iM) {
-         const OM = new Set([...MM.here, ...MM.away, ...MM.banned]),
-           SM = CM(rM, iM),
-           jM = rM => {
-             const iM = SM[rM].filter((MM => !OM.has(MM)));
-             for (const MM of iM) OM.add(MM);
- ... (122 more removed lines; see GitHub link above)
+       cU = UU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L594-L597` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L44-L45) · [Before (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L594-L597)

```diff
-     function cM(MM) {
-       const rM = new Set;
-       for (const iM of MM) rM.add(iM.toLowerCase());
-       return rM
+     function QU(UU, XU) {
+       return cU(UU, XU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L602-L711` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L65-L66) · [Before (L602-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L602-L711)

```diff
-       let {
-         state: SM,
-         lobbyName: jM,
-         listed: aM,
-         isListed: PM,
-         kE: nM,
-         PU: QM,
-         statusOf: zM
-       } = MM;
-       const {
-         t: LM,
-         selectedLanguage: mM
-       } = (0, HM.A)(), hM = (0, FM.m)(), JM = (0, EM.j)("players"), yM = null === JM.localId ? null : null !== (rM = null === (iM = JM.byId[JM.localId]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : null, lM = (0, OM.useMemo)((() => (0, KM.g)(hM.friends, jM, SM.her … [truncated]
-         let {
-           refused: rM,
-           listed: iM,
- ... (94 more removed lines; see GitHub link above)
+       const cU = (0, QU.f)();
+       return cU ? null === (XU = (0, yU.c)(cU.api, UU[0], UU[1], UU[2])) || void 0 === XU || null === (zU = XU.persisted) || void 0 === zU ? void 0 : zU.shared : void 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L715-L838` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L70) · [Before (L715-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L715-L838)

```diff
-       let {
-         manage: rM,
-         listing: iM
-       } = MM;
-       const {
-         t: OM
-       } = (0, HM.A)(), jM = (MM, iM) => ((0, SM.reportAnalyticsClick)({
-         id: "lobby_manage.set_listing",
-         value: MM
-       }), rM.send({
-         type: "setListing",
-         field: MM,
-         value: iM
-       }, `listing:${MM}`)), aM = MM => {
-         const iM = rM.statusOf(`listing:${MM}`);
-         return iM && !iM.ok && (0, kM.jsx)("div", {
- ... (108 more removed lines; see GitHub link above)
+       return `${UU[0]},${UU[1]},${UU[2]}`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L841-L842` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L76-L77) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L841-L842)

```diff
-     function Sr(MM) {
-       return MM.map((MM => MM.toLowerCase())).sort().join(",")
+     function aU() {
+       return pU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L846-L983` → after: `L81-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L81-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L81-L98) · [Before (L846-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L846-L983)

```diff
-       var rM;
-       let {
-         manage: iM,
-         lobbyName: jM,
-         worldCode: aM
-       } = MM;
-       const {
-         t: PM
-       } = (0, HM.A)(), {
-         settings: nM,
-         loading: QM,
-         change: zM,
-         retry: LM,
-         refresh: mM
-       } = (0, BM.j)(jM), hM = (0, FM.m)(), {
-         state: yM
- ... (122 more removed lines; see GitHub link above)
+       const XU = null !== IU && IU.key === YU(UU.pos) ? IU.type : null;
+       if (null === XU) return UU;
+       let zU = null;
+       if ("Iron" === XU) {
+         const {
+           cachedPasskey: XU,
+           ...cU
+         } = gU(UU.pos);
+         zU = {
+           uA: null !== XU && void 0 !== XU ? XU : [0, 0, 0, 0],
+           ...cU
+         }
+       }
+       return {
+         ...UU,
+         type: XU,
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L987-L1164` → after: `L102-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L102-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L102-L127) · [Before (L987-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L987-L1164)

```diff
-       var rM;
-       let {
-         manage: iM,
-         lobbyName: OM
-       } = MM;
-       const {
-         t: jM
-       } = (0, HM.A)(), {
-         state: aM
-       } = iM, PM = zM(), nM = null !== (rM = aM.whitelist) && void 0 !== rM ? rM : [];
-       return (0, kM.jsxs)("div", {
-         className: "LobbyManagePage",
-         children: [(0, kM.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, kM.jsx)(dM.d, {
-             label: jM("worldSocial:whoCanJoin")
- ... (162 more removed lines; see GitHub link above)
+       const XU = EU(UU),
+         zU = null === XU || void 0 === XU ? void 0 : XU.ownerDbId,
+         cU = function(UU) {
+           var XU;
+           let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EU(UU);
+           const cU = YU(UU),
+             yU = NU.get(cU);
+           return yU ? yU.lastOpened < (null !== (XU = null === zU || void 0 === zU ? void 0 : zU.passkeyLastUpdated) && void 0 !== XU ? XU : 0) ? (NU.delete(cU), null) : [...yU.uA] : null
+         }(UU, XU);
+       return void 0 === zU ? {
+         cachedPasskey: cU
+       } : {
+         ownerDbId: zU,
+         cachedPasskey: cU
+       }
+     }(0, DU.m)(AU.c, (UU => {
+ ... (10 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1167-L1323` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L134-L136) · [Before (L1167-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1167-L1323)

```diff
- 
-     function Lr(MM) {
-       let {
-         names: rM,
-         pending: iM,
-         onAction: SM
-       } = MM;
-       const {
-         t: jM
-       } = (0, HM.A)(), aM = (0, OM.useRef)(null), [PM, nM] = (0, OM.useState)(""), QM = () => {
-         const MM = PM.trim();
-         "" !== MM && (SM(MM, "add"), aM.current && (aM.current.value = ""), nM(""))
-       };
-       return (0, kM.jsxs)("div", {
-         className: "LobbyManageNames",
-         children: [rM.map((MM => (0, kM.jsxs)("div", {
- ... (141 more removed lines; see GitHub link above)
+     const kU = {
+         boardEditRequested: {
+           watch: UU => (0, cU.n)("EditBoard", (XU => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1325` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L138) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1325)

```diff
-               rule: rM
+               pos: zU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1327-L1357` → after: `L140-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L140-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L140-L144) · [Before (L1327-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1327-L1357)

```diff
-             return JM(rM)
-           }));
-           return 0 === aM.length ? null : (0, kM.jsxs)(OM.Fragment, {
-             children: [(0, kM.jsx)(dM.d, {
-               label: jM(iM)
-             }), aM.map((MM => {
-               let {
-                 rule: rM,
-                 children: iM
-               } = MM;
-               return 0 === iM.length ? GM(rM) : (0, kM.jsxs)("div", {
-                 className: "SettingBoxGroup",
-                 children: [GM(rM), iM.filter(JM).map(GM)]
-               }, rM.key)
-             }))]
-           }, rM)
- ... (15 more removed lines; see GitHub link above)
+             if (null === zU) return void UU(null);
+             const cU = (0, QU.f)(),
+               yU = (0, QU.o)();
+             cU && yU && UU(yU.readBoardToEdit(cU.api, cU.chunks, zU))
+           }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1359-L1361` → after: `L146-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L146-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L146-L157) · [Before (L1359-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1359-L1361)

```diff
-         leaderboard: {
-           icon: "trophy",
-           title: "lobbyManage:leaderboard"
+         ironChestOpenRequested: {
+           watch: UU => (0, cU.n)("OpenIronChest", (XU => {
+             let {
+               pos: zU
+             } = XU;
+             UU(function(UU) {
+               return {
+                 pos: UU,
+                 ...gU(UU)
+               }
+             }(zU))
+           }))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1364-L1501` → after: `L160-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L160-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L160-L172) · [Before (L1364-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1364-L1501)

```diff
-       yr = 5,
-       lr = (0, OM.memo)((function(MM) {
-         let {
-           page: rM,
-           manage: iM,
-           leaderboard: SM,
-           focusRequest: jM,
-           onFocused: aM,
-           ruleRowsShown: PM
-         } = MM;
-         return "leaderboard" === rM ? (0, kM.jsx)(OM.Suspense, {
-           fallback: (0, kM.jsx)("div", {
-             className: "LobbyManageLoading",
-             children: (0, kM.jsx)(JM.d, {})
-           }),
-           children: SM
- ... (122 more removed lines; see GitHub link above)
+       GU = {
+         writeOnBoard(UU) {
+           var XU;
+           let {
+             pos: zU,
+             text: cU,
+             textSize: yU
+           } = UU;
+           null === (XU = (0, QU.f)()) || void 0 === XU || XU.send(FU.b.UpdateBoard, (0, FU.W)({
+             tD: zU,
+             gD: cU,
+             kD: yU
+           }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1503` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L174) · [Before (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1503)

```diff
-         onClick: MM => {
+         writeBook(UU) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1505` → after: `L176-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L176-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L176-L185) · [Before (L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1505)

```diff
-           null !== (rM = zM.current) && void 0 !== rM && rM.contains(MM.target) || AM()
+           let {
+             pages: zU,
+             title: cU,
+             published: yU
+           } = UU;
+           null === (XU = (0, QU.f)()) || void 0 === XU || XU.send(FU.b.UpdateBook, (0, FU.Y)({
+             ED: zU,
+             YD: cU,
+             ND: yU
+           }))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1507` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L187) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1507)

```diff
-         onFocus: MM => {
+         writeNameTag(UU) {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1509-L1510` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L189) · [Before (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1509-L1510)

```diff
-           const iM = null === EM.current ? null : LM.current.get(EM.current);
-           !iM || iM.contains(MM.target) || null !== (rM = zM.current) && void 0 !== rM && rM.contains(MM.target) || AM()
+           null === (XU = (0, QU.f)()) || void 0 === XU || XU.send(FU.b.UpdateNameTag, UU)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1512-L1559` → after: `L191-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L191-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L191-L200) · [Before (L1512-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1512-L1559)

```diff
-         children: [jM.length > 1 && (0, kM.jsx)("div", {
-           ref: zM,
-           className: "LobbyManageChips",
-           children: (0, kM.jsx)(yM.e, {
-             options: jM.map((MM => ({
-               value: MM,
-               label: (0, kM.jsx)(Er, {
-                 page: MM
-               }),
-               ariaLabel: iM(dr[MM].title)
-             }))),
-             value: eM,
-             padTabs: "2",
-             ariaLabel: iM("lobbyManageEntry:manageLobby"),
-             reselectable: !0,
-             onChange: YM
- ... (32 more removed lines; see GitHub link above)
+         setCustomLobbyBlock(UU) {
+           let {
+             pos: XU,
+             blockName: zU
+           } = UU;
+           const cU = (0, QU.o)(),
+             yU = (0, QU.f)();
+           cU && yU && yU.send(FU.b.SetCustomLobbyBlock, (0, FU.J)({
+             yF: cU.blockIdOf(zU),
+             cF: XU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1561-L1562` → after: `L202-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L202-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L202-L218) · [Before (L1561-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1561-L1562)

```diff
-         })]
-       })
+         }
+       }
+   },
+   41717: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => oU,
+       d: () => AU,
+       e: () => FU
+     });
+     var cU = zU(41652),
+       yU = zU(5312),
+       QU = zU(41660);
+ 
+     function AU() {
+       var UU;
+       const XU = null === (UU = (0, QU.f)()) || void 0 === UU ? void 0 : UU.api.localId;
+ ... (1 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1566-L1568` → after: `L222-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L222-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L222-L231) · [Before (L1566-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1566-L1568)

```diff
-       return void 0 === (null === MM || void 0 === MM ? void 0 : MM.page) ? null : {
-         page: MM.page,
-         seq: MM.seq
+       const XU = (0, QU.f)();
+       if (null !== XU) return UU(XU);
+       let zU = null;
+       const cU = (0, yU.r)((() => {
+         const XU = (0, QU.f)();
+         null !== XU && null === zU && (cU(), zU = UU(XU))
+       }));
+       return () => {
+         var UU;
+         cU(), null === (UU = zU) || void 0 === UU || UU()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1572-L1626` → after: `L235-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L235-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L235-L249) · [Before (L1572-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1572-L1626)

```diff
-     function Cr(MM) {
-       let {
-         leaderboard: rM
-       } = MM;
-       const iM = function() {
-           const MM = (0, nM.f)("lobbyManage"),
-             [rM, iM] = (0, OM.useReducer)((MM => MM + 1), 0),
-             [SM] = (0, OM.useState)((() => new QM.b(iM)));
-           return (0, OM.useEffect)((() => {
-             const MM = SM.nextDeadline();
-             if (null === MM) return;
-             const rM = setTimeout((() => {
-               SM.expire(Date.now()), iM()
-             }), Math.max(0, MM - Date.now()));
-             return () => {
-               clearTimeout(rM)
- ... (39 more removed lines; see GitHub link above)
+     function oU(UU, XU, zU) {
+       return {
+         current: () => {
+           const zU = (0, QU.f)();
+           return null === zU ? XU : UU(zU)()
+         },
+         watch: XU => FU((cU => {
+           const yU = UU(cU);
+           let QU = yU();
+           return XU(QU), zU((() => {
+             const UU = yU();
+             UU !== QU && (QU = UU, XU(UU))
+           }))
+         }))
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1629` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L252) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1629)

```diff
-   37498: (MM, rM, iM) => {
+   41708: (UU, XU, zU) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1634-L1638` → after: `L256-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L256-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L256-L258) · [Before (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1634-L1638)

```diff
-     var OM = iM(1548),
-       SM = iM(2067),
-       jM = iM(2039);
-     const aM = 1e4;
-     let PM = 0;
+     var cU = zU(41660),
+       yU = zU(41717),
+       QU = zU(41725);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1640-L1663` → after: `L260-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L260-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L260-L262) · [Before (L1640-L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1640-L1663)

```diff
-     function nM(MM) {
-       const rM = ++PM;
-       return new Promise((iM => {
-         const PM = rM => {
-             nM(), clearTimeout(QM), !1 === (null === rM || void 0 === rM ? void 0 : rM.ok) && (0, OM.reportAnalyticsClick)({
-               id: "lobby_manage.refused",
-               value: MM.type
-             }), iM(rM)
-           },
-           nM = SM.d.subscribe("lobbyManage", (MM => {
-             const iM = function(MM, rM) {
-               var iM;
-               return null !== (iM = null === MM || void 0 === MM ? void 0 : MM.results.find((MM => MM.requestId === rM))) && void 0 !== iM ? iM : null
-             }(MM, rM);
-             null !== iM && PM(iM)
-           })),
- ... (8 more removed lines; see GitHub link above)
+     function AU() {
+       var UU, XU;
+       return null !== (UU = null === (XU = (0, cU.f)()) || void 0 === XU ? void 0 : XU.itemBridgeSources) && void 0 !== UU ? UU : QU.b
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1665-L1689` → after: `L264-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L264-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L264-L270) · [Before (L1665-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1665-L1689)

```diff
-     const QM = [{
-       translationKey: "lobbyManageEntry:noAnswer"
-     }];
-     class zM {
-       constructor(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nM;
-         this.onChange = MM, this.sendAction = rM, this.pending = new Map, this.statuses = new Map
-       }
-       send(MM, rM, iM) {
-         var OM;
-         return this.statuses.delete(rM), this.pending.set(rM, (null !== (OM = this.pending.get(rM)) && void 0 !== OM ? OM : 0) + 1), this.sendAction(MM).then((MM => {
-           var OM;
-           const SM = null !== MM && void 0 !== MM ? MM : {
-               requestId: -1,
-               ok: !1,
-               message: QM
- ... (9 more removed lines; see GitHub link above)
+ 
+     function FU(UU) {
+       return {
+         current: () => AU().states[UU].current(),
+         watch: XU => (0, yU.e)((zU => {
+           const cU = zU.itemBridgeSources.states[UU];
+           return XU(cU.current()), cU.watch(XU)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1692-L1714` → after: `L273-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L273-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L273-L277) · [Before (L1692-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1692-L1714)

```diff
-       show(MM, rM) {
-         this.statuses.set(MM, {
-           ...rM,
-           until: Date.now() + 4e3
-         }), this.onChange()
-       }
-       expire(MM) {
-         for (const [rM, iM] of this.statuses) iM.until <= MM && this.statuses.delete(rM)
-       }
-       nextDeadline() {
-         let MM = null;
-         for (const iM of this.statuses.values()) {
-           var rM;
-           MM = Math.min(null !== (rM = MM) && void 0 !== rM ? rM : 1 / 0, iM.until)
-         }
-         return MM
- ... (7 more removed lines; see GitHub link above)
+     }
+ 
+     function oU(UU) {
+       return {
+         watch: XU => (0, yU.e)((zU => zU.itemBridgeSources.events[UU].watch(XU)))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1716-L1717` → after: `L279-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L279-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L279-L310) · [Before (L1716-L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1716-L1717)

```diff
-       isPending(MM) {
-         return this.pending.has(MM)
+     }
+     const DU = {
+       states: {
+         inventory: FU("inventory"),
+         hotbar: FU("hotbar"),
+         crafting: FU("crafting"),
+         heldItemAim: FU("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: oU("hotbarSlotRequested"),
+         hotbarScrolled: oU("hotbarScrolled"),
+         numberKeyPressed: oU("numberKeyPressed"),
+         inventoryDropRequested: oU("inventoryDropRequested"),
+         chestToggled: oU("chestToggled"),
+         chestRefreshed: oU("chestRefreshed"),
+         inventorySynced: oU("inventorySynced"),
+ ... (16 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1721` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L314) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1721)

```diff
-   37678: (MM, rM, iM) => {
+   41725: (UU, XU, zU) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1723` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L316) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1723)

```diff
-       e: () => LM
+       b: () => oU
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1725-L1732` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L318-L319) · [Before (L1725-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1725-L1732)

```diff
-     var OM = iM(44),
-       SM = iM(1116),
-       jM = iM.n(SM),
-       aM = iM(1763),
-       PM = iM(1520),
-       nM = iM(1396),
-       QM = iM(1398),
-       zM = iM(1303);
+     var cU = zU(40525),
+       yU = zU(37535);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1735-L1792` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L322-L325) · [Before (L1735-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1735-L1792)

```diff
-       let {
-         label: rM,
-         icon: iM,
-         placeholder: SM,
-         onSubmit: LM
-       } = MM;
-       const mM = (0, OM.useRef)(null),
-         [HM, hM] = (0, OM.useState)(""),
-         [JM, dM] = (0, OM.useState)("Enter"),
-         [yM, lM] = (0, OM.useState)(null);
-       (0, OM.useEffect)((() => {
-         if ("Success" !== JM && "Error" !== JM) return;
-         const MM = setTimeout((() => {
-           "Success" === JM && mM.current && (mM.current.value = "", hM("")), dM("Enter")
-         }), "Success" === JM ? 1e3 : 4e3);
-         return () => {
- ... (42 more removed lines; see GitHub link above)
+       return {
+         current: () => UU,
+         watch: () => () => {}
+       }
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1795` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L557) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1795)

```diff
-   37662: (MM, rM, iM) => {
+   41657: (UU, XU, zU) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1797` → after: `L559-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L559-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L559-L563) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1797)

```diff
-       e: () => LM
+       e: () => dU,
+       h: () => WU,
+       j: () => LU,
+       l: () => PU,
+       n: () => ZU
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1799-L1863` → after: `L565-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L565-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L565-L589) · [Before (L1799-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1799-L1863)

```diff
-     var OM = iM(44),
-       SM = iM(1116),
-       jM = iM.n(SM),
-       aM = iM(1188),
-       PM = iM(1398),
-       nM = iM(1303);
-     const QM = {
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
-       },
-       zM = ["unlisted", "public", "whitelist", "private"];
- 
-     function LM(MM) {
-       let {
- ... (49 more removed lines; see GitHub link above)
+     var cU = zU(40101),
+       yU = zU(1236),
+       QU = zU(2032),
+       AU = zU(2044),
+       FU = zU(3660),
+       oU = zU(37538),
+       DU = zU(1360),
+       EU = zU(41660),
+       YU = zU(5342),
+       NU = zU(2580),
+       IU = zU(41667),
+       pU = zU(41670),
+       aU = zU(41708);
+     let tU = null;
+ 
+     function gU(UU) {
+ ... (9 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1877-L1913` → after: `L594-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L594-L595) · [Before (L1877-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1877-L1913)

```diff
-       let {
-         bL: rM,
-         children: iM,
-         ...PM
-       } = MM;
-       const {
-         t: nM
-       } = (0, OM.A)();
-       return (0, aM.jsx)("div", {
-         className: "WhitelistTickRow",
-         onClick: () => {
-           rM.onChange(!rM.on)
-         },
-         children: (0, aM.jsx)(SM.h, {
-           ...PM,
-           opensProfileCard: !1,
- ... (21 more removed lines; see GitHub link above)
+       const XU = (0, FU.c)(UU);
+       return void 0 !== XU && (0, FU.f)(XU) === UU
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1933-L1936` → after: `L599-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L599-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L599-L606) · [Before (L1933-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1933-L1936)

```diff
-       let {
-         worldCode: rM,
-         message: iM
-       } = MM;
+       var XU;
+       const zU = null === (XU = (0, EU.f)()) || void 0 === XU ? void 0 : XU.tables;
+       if (void 0 === zU || !kU(UU)) return;
+       const cU = {
+           displayName: zU.getDisplayName(UU)
+         },
+         yU = zU.getItemStat(UU, "description");
+       void 0 !== yU && null !== yU && (cU.description = yU);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1938-L1964` → after: `L608-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L608-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L608-L641) · [Before (L1938-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1938-L1964)

```diff
-         t: hM
-       } = (0, SM.A)(), {
-         isTouchScreen: JM
-       } = (0, PM.m)(["isTouchScreen"]), dM = aM.featureFlags.canUseInviteLinks, yM = (0, zM.i)(dM && null === iM), [lM, EM] = (0, QM.g)(), UM = (0, OM.useRef)(null);
-       if (null !== iM) return (0, HM.jsxs)("div", {
-         className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
-         children: [(0, HM.jsx)(mM.b, {
-           name: "lock"
-         }), (0, HM.jsx)("span", {
-           children: iM
-         })]
-       });
-       const GM = dM ? yM : rM,
-         CM = JM && dM && (0, QM.d)();
-       return (0, HM.jsxs)("div", {
-         className: "WorldSocialLinkRow",
- ... (11 more removed lines; see GitHub link above)
+         rootName: QU
+       } = zU.getMetaInfo(UU);
+       QU !== UU && (cU.rootName = QU);
+       const AU = zU.getItemStat(UU, "armourReduction");
+       return void 0 !== AU && null !== AU && (cU.armourReduction = AU), cU
+     }(0, EU.s)((UU => {
+       tU = UU
+     }));
+     const BU = (0, AU.m)("DisplayName", "Description");
+ 
+     function ZU() {
+       return Boolean(QU.d.get("useInventory") && QU.d.get("useFullInventory"))
+     }
+     let RU = null;
+     const PU = {
+         inventory: function() {
+ ... (18 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1966-L1982` → after: `L643-L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L643-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L643-L655) · [Before (L1966-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1966-L1982)

```diff
-         }), (0, HM.jsxs)(LM.e, {
-           className: "WorldSocialCopy",
-           disabled: null === GM,
-           onClick: () => {
-             null !== GM && (0, QM.f)(GM, {
-               useShareSheet: CM,
-               onOutcome: MM => {
-                 if ((0, nM.reportAnalyticsClick)({
-                     id: "world_social.copy_link",
-                     value: "copied" !== MM || dM ? MM : "code"
-                   }), "copied" === MM) EM();
-                 else if ("failed" === MM) {
-                   var rM;
-                   null === (rM = UM.current) || void 0 === rM || rM.focus(), jM.k.showMessage({
-                     translationKey: "partyBar:copyFailed"
-                   })
- ... (1 more removed lines; see GitHub link above)
+         }(),
+         crafting: aU.e.states.crafting,
+         stationItems: {
+           current() {
+             var UU;
+             return (null === (UU = RU) || void 0 === UU ? void 0 : UU.namesVersion) !== (0, FU.i)() && (RU = {
+               namesVersion: (0, FU.i)(),
+               items: {
+                 enchantable: gU((UU => {
+                   const XU = (0, FU.c)(UU);
+                   return void 0 !== XU && null !== tU && tU.enchantmentPerksOf(XU).length > 0 || void 0
+                 })),
+                 salvageable: gU((UU => !(!kU(UU) || null === (0, oU.e)(UU)) || void 0))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1984` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L657) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1984)

```diff
-             })
+             }), RU.items
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1986-L1991` → after: `L659-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L659-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L659-L738) · [Before (L1986-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1986-L1991)

```diff
-           children: [(0, HM.jsx)(mM.b, {
-             name: lM ? "check" : CM ? "up-from-bracket" : "copy"
-           }), " ", hM(lM ? "general:copied" : CM ? "worldSocial:share" : "general:copy")]
-         })]
-       })
-     }
+           watch: () => () => {}
+         },
+         itemInfo: function() {
+           let UU = null;
+           const XU = () => {
+             var XU;
+             return (null === (XU = UU) || void 0 === XU ? void 0 : XU.namesVersion) !== (0, FU.i)() && (UU = {
+               namesVersion: (0, FU.i)(),
+               infos: gU(GU)
+             }), UU.infos
+           };
+           return {
+             current: XU,
+             watch: zU => (0, AU.s)((cU => {
+               cU.some(BU) && (UU = null, zU(XU()))
+             }))
+ ... (64 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1993` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L740) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1993)

```diff
-   37667: (MM, rM, iM) => {
+   41699: (UU, XU, zU) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1996-L1997` → after: `L743-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L743-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L743-L747) · [Before (L1996-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1996-L1997)

```diff
-       g: () => mM,
-       h: () => LM
+       e: () => EU,
+       h: () => AU,
+       l: () => yU,
+       p: () => FU,
+       t: () => DU
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L1999-L2018` → after: `L749-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L749-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L749-L751) · [Before (L1999-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L1999-L2018)

```diff
-     var OM = iM(605),
-       SM = iM(1188),
-       jM = iM(1722),
-       aM = iM(2875),
-       PM = iM(2818),
-       nM = iM(1520),
-       QM = iM(37669),
-       zM = iM(1303);
- 
-     function LM(MM, rM) {
-       var iM;
-       return {
-         isError: !1,
-         name: MM,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== rM && void 0 !== rM ? rM : {},
- ... (4 more removed lines; see GitHub link above)
+     class cU extends Error {
+       constructor() {
+         super(...arguments), this.name = "CoreCorruption"
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2023-L2065` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L756) · [Before (L2023-L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2023-L2065)

```diff
-       let {
-         player: rM,
-         isFriend: iM = !1,
-         status: OM,
-         showLocation: nM = void 0 === OM,
-         bL: LM,
-         onSendFriendRequest: mM,
-         actions: HM,
-         zIndex: hM
-       } = MM;
-       const {
-         t: JM
-       } = (0, SM.A)();
-       let dM = OM;
-       null !== LM && void 0 !== LM && LM.on && (dM = (0, zM.jsxs)(zM.Fragment, {
-         children: [null !== OM && void 0 !== OM ? OM : (0, zM.jsx)(PM.d, {
- ... (27 more removed lines; see GitHub link above)
+       return UU instanceof RangeError && /call stack/i.test(UU.message) || UU instanceof Error && "InternalError" === UU.name && /recursion/i.test(UU.message)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2069-L2094` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L761-L762) · [Before (L2069-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2069-L2094)

```diff
-       let {
-         row: rM,
-         bL: iM,
-         canInvite: OM,
-         invited: jM,
-         onInvite: aM,
-         zIndex: PM
-       } = MM;
-       const {
-         t: QM
-       } = (0, SM.A)(), LM = "online" === rM.place ? nM.e : nM.i;
-       return (0, zM.jsx)(mM, {
-         player: rM.friend,
-         isFriend: !0,
-         status: "here" === rM.place ? QM("worldSocial:inThisWorld") : void 0,
-         showLocation: !0,
- ... (10 more removed lines; see GitHub link above)
+       var XU;
+       return UU instanceof WebAssembly.RuntimeError || UU instanceof cU || yU(UU) && QU.test(null !== (XU = UU.stack) && void 0 !== XU ? XU : "")
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2107-L2115` → after: `L765-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L765-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L765-L767) · [Before (L2107-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2107-L2115)

```diff
-     function aM(MM) {
-       const rM = {
-         lobbyName: MM,
-         answer: null,
-         response: SM.b.getSocialSettings(MM)
-       };
-       return rM.response.then((MM => {
-         rM.answer = MM
-       })), rM
+     function FU(UU, XU) {
+       if (AU(UU)) throw UU;
+       console.error(XU, UU)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2119-L2120` → after: `L770-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L770-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L770-L771) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2119-L2120)

```diff
-     function nM(MM) {
-       PM.set(MM.lobbyName, MM)
+     function oU(UU, XU, zU, yU, QU) {
+       if (XU % yU !== 0 || XU + zU > UU.byteLength) throw new cU(`${QU}: ${zU} bytes at ${XU}, ${yU}-aligned, outside ${UU.byteLength} bytes of memory`)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2123-L2184` → after: `L774-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L774-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L774-L779) · [Before (L2123-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2123-L2184)

```diff
-     function QM(MM) {
-       const [rM] = (0, OM.useState)((() => function(MM) {
-         var rM;
-         const iM = null !== (rM = PM.get(MM)) && void 0 !== rM ? rM : null;
-         return null !== iM && void 0 !== iM && iM.answer && "error" in iM.answer ? null : iM
-       }(MM))), [iM, aM] = (0, OM.useState)((() => null !== rM && void 0 !== rM && rM.answer && "settings" in rM.answer ? rM.answer.settings : null)), [nM, QM] = (0, OM.useState)(!0), [zM, LM] = (0, OM.useState)(null !== iM), mM = (0, OM.useRef)(iM);
-       mM.current = iM;
-       const HM = (0, OM.useRef)(0),
-         hM = (0, OM.useRef)(0),
-         JM = (0, OM.useRef)(!1),
-         dM = (0, OM.useRef)(!0),
-         yM = (0, OM.useCallback)((async rM => {
-           const iM = ++HM.current,
-             OM = await (null !== rM && void 0 !== rM ? rM : SM.b.getSocialSettings(MM));
-           dM.current && iM === HM.current && (LM(!0), QM(!1), "error" in OM || aM(OM.settings))
-         }), [MM]),
- ... (46 more removed lines; see GitHub link above)
+     function DU(UU, XU, zU, cU, yU) {
+       return 0 === zU ? null : (oU(XU, zU, cU * UU.BYTES_PER_ELEMENT, UU.BYTES_PER_ELEMENT, yU), new UU(XU, zU, cU))
+     }
+ 
+     function EU(UU, XU, zU, cU, yU) {
+       return 0 === XU ? null : (oU(UU, XU, zU, cU, yU), new DataView(UU, XU, zU))
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2187` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L782) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2187)

```diff
-   37687: (MM, rM, iM) => {
+   41660: (UU, XU, zU) => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2189-L2190` → after: `L784-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L784-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L784-L792) · [Before (L2189-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2189-L2190)

```diff
-       c: () => aM,
-       d: () => jM
+       b: () => cU,
+       d: () => gU,
+       f: () => aU,
+       j: () => tU,
+       l: () => NU,
+       n: () => IU,
+       o: () => EU,
+       s: () => YU,
+       u: () => pU
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2192-L2198` → after: `L794-L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L794-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L794-L799) · [Before (L2192-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2192-L2198)

```diff
-     var OM = iM(143);
-     const SM = new Map;
- 
-     function jM(MM, rM) {
-       var iM;
-       const OM = null !== (iM = SM.get(MM)) && void 0 !== iM ? iM : new Map;
-       OM.set(rM, Date.now()), SM.set(MM, OM)
+     class cU extends Error {
+       constructor(UU) {
+         super(`the join's code did not load: ${UU instanceof Error?UU.message:String(UU)}`, {
+           cause: UU
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === UU || void 0 === UU ? void 0 : UU.request
+       }
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2211-L2231` → after: `L808-L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L808-L812) · [Before (L2211-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2211-L2231)

```diff
-       const iM = rM.toLowerCase();
-       for (const OM of MM)
-         if (OM.toLowerCase() === iM) return !0;
-       return !1
-     }
- 
-     function SM(MM, rM, iM) {
-       const SM = [],
-         jM = [],
-         aM = [];
-       for (const PM of MM) !PM.isError && PM.name && ("inGame" === PM.location.status && PM.location.inLobbyName === rM || OM(iM, PM.name) ? jM.push({
-         friend: PM,
-         place: "here"
-       }) : "offline" === PM.location.status ? aM.push({
-         friend: PM,
-         place: "offline"
- ... (5 more removed lines; see GitHub link above)
+       try {
+         UU(XU)
+       } catch (zU) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", zU)
+       }
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2234-L2237` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L815) · [Before (L2234-L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2234-L2237)

```diff
-     function jM(MM, rM, iM) {
-       const SM = [],
-         jM = MM.flatMap((MM => "here" === MM.place ? [MM.friend.name] : []));
-       for (const aM of [...jM, ...rM]) OM(SM, aM) || OM(iM, aM) || SM.push(aM);
+     function EU() {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2241-L2242` → after: `L819-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L819-L820) · [Before (L2241-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2241-L2242)

```diff
-     function aM(MM, rM) {
-       return null === MM || void 0 === MM || !MM.canManage || OM(MM.whitelist, rM) ? "none" : "whitelist" === MM.visibility ? "required" : "quiet"
+     function YU(UU) {
+       FU.push(UU), null !== oU && DU(UU, oU)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2246-L2250` → after: `L824-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L824-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L824-L830) · [Before (L2246-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2246-L2250)

```diff
-       if (null === MM) return !0;
-       const {
-         visibility: rM
-       } = MM;
-       return "public" === rM || "unlisted" === rM || "whitelist" === rM && MM.canManage
+       return yU ??= Promise.all([zU.e(84), zU.e(111), zU.e(86), zU.e(240), zU.e(89), zU.e(241), zU.e(215), zU.e(109), zU.e(260), zU.e(294), zU.e(49), zU.e(213), zU.e(227), zU.e(212), zU.e(203), zU.e(204), zU.e(168), zU.e(101), zU.e(132), zU.e(268), zU.e(68)]).then((() => zU(45247 … [truncated]
+         XU.loadAudio(UU), oU = XU;
+         for (const UU of FU) DU(UU, XU);
+         return XU
+       })).catch((UU => {
+         throw yU = null, UU
+       })), yU
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2252-L2263` → after: `L832-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L832-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L832-L837) · [Before (L2252-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2252-L2263)

```diff
- 
-     function nM(MM, rM, iM) {
-       if (iM) {
-         const iM = rM.filter((rM => !OM(MM.whitelist, rM)));
-         return {
-           ...MM,
-           whitelist: [...MM.whitelist, ...iM]
-         }
-       }
-       return {
-         ...MM,
-         whitelist: MM.whitelist.filter((MM => !OM(rM, MM)))
+     async function IU(UU, XU) {
+       try {
+         const zU = await NU(UU);
+         await zU.loadClientGame(XU)
+       } catch (zU) {
+         throw new cU(zU)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2268-L2269` → after: `L842-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L842-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L842-L859) · [Before (L2268-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2268-L2269)

```diff
-       const iM = [];
-       for (let OM = 0; OM < MM.length; OM += rM) iM.push(MM.slice(OM, OM + rM));
+       QU = {
+         running: UU,
+         shell: XU
+       }
+     }
+ 
+     function aU() {
+       return AU
+     }
+     async function tU(UU) {
+       const XU = QU;
+       if ((null === XU || void 0 === XU ? void 0 : XU.running) !== UU) throw new Error("the core's session has ended");
+       const zU = await NU(XU.shell.audio).catch((UU => {
+         throw new cU(UU)
+       }));
+       if (null !== AU) return AU;
+ ... (2 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/242.js` (Changed code · before: `L2290-L2302` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f763886172fb33ab44d6d7330f9e0817484aa7ee8cd04c5640cb3986bfedf3e0) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/242.js#L864) · [Before (L2290-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/242.js#L2290-L2302)

```diff
-       const MM = (0, SM.f)("lobbyLeaderboardInfo");
-       return (0, OM.useMemo)((() => function(MM) {
-         if (null === MM) return null;
-         const rM = Object.entries(MM),
-           iM = rM.filter((MM => {
-             let [, rM] = MM;
-             return void 0 !== rM
-           }));
-         if (iM.length === rM.length) return MM;
-         const OM = Object.fromEntries(iM),
-           SM = Object.keys(MM).filter((MM => !Object.hasOwn(OM, MM)));
-         return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${SM.join(", ")}`), OM
-       }(MM)), [MM])
+       null !== AU && (null !== oU ? oU.endGameHost(AU) : AU.closeGame()), AU = null, QU = null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L4)

```diff
-   37821: (MM, rM, iM) => {
+   37653: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L6-L9` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L6-L7) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L6-L9)

```diff
-       d: () => bM,
-       e: () => CM,
-       g: () => eM,
-       k: () => hM
+       c: () => ZU,
+       e: () => BU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L11` → after: `L9-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L9-L20) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L11)

```diff
-     var OM = iM(1116),
+     var cU = zU(4622),
+       yU = zU(1492),
+       QU = zU(61),
+       AU = zU(7056),
+       FU = zU(4612),
+       oU = zU(1310),
+       DU = zU(2005),
+       EU = zU(1978),
+       YU = zU(1494),
+       NU = zU(1193),
+       IU = zU(37659),
+       pU = zU(1106),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L13-L66` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L22-L26) · [Before (L13-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L13-L66)

```diff
-       jM = iM(44),
-       aM = iM(65),
-       PM = iM(1446),
-       nM = iM(1520),
-       QM = iM(1440),
-       zM = iM(1287),
-       LM = iM(1188),
-       mM = iM(37828),
-       HM = iM(1303);
- 
-     function hM(MM) {
-       const [rM, iM] = (0, jM.useState)((() => (0, mM.n)(MM)));
-       return (0, jM.useEffect)((() => (iM((0, mM.n)(MM)), (0, mM.G)((() => {
-         iM((0, mM.n)(MM))
-       })))), [MM]), rM
-     }
- ... (38 more removed lines; see GitHub link above)
+       tU = zU(1349),
+       gU = zU(1390),
+       kU = zU(1294),
+       GU = zU(1305);
+     const BU = "SleepingOverlay";
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L68-L75` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L28) · [Before (L68-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L68-L75)

```diff
-     function EM(MM) {
-       let {
-         tutorial: rM,
-         step: iM,
-         text: OM,
-         waitForClick: SM = !1,
-         onPrevious: jM
-       } = MM;
+     function ZU() {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L78-L108` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L31) · [Before (L78-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L78-L108)

```diff
-       } = (0, LM.A)(), PM = yM(rM, iM);
-       return (0, HM.jsxs)(HM.Fragment, {
-         children: [(0, HM.jsx)("div", {
-           className: "TutorialStepText",
-           children: OM
-         }), (0, HM.jsxs)("div", {
-           className: "TutorialStepButtons",
-           children: [(0, mM.t)(rM, iM) && (0, HM.jsx)(nM.i, {
-             className: "TutorialStepButton",
-             onClick: () => {
-               null === jM || void 0 === jM || jM(), (0, mM.s)(rM, iM)
-             },
-             children: aM("tutorial:back")
-           }), !SM && (0, HM.jsx)(nM.e, {
-             className: "TutorialStepButton",
-             onClick: () => {
- ... (15 more removed lines; see GitHub link above)
+       } = (0, NU.I)(), [XU, zU] = (0, QU.useState)(!1), [pU, ZU] = (0, QU.useState)(null), [PU, WU] = (0, QU.useState)(1), [dU, LU] = (0, QU.useState)(!1), [eU, CU] = (0, QU.useState)(!1), wU = (0, QU.useRef)(0), qU = (0, QU.useRef)(!1), OU = (0, QU.useRef)(!1), SU = (0, QU.useRe … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L110-L154` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L33-L36) · [Before (L110-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L110-L154)

```diff
-     function GM(MM) {
-       let {
-         rect: rM,
-         margin: iM
-       } = MM;
-       const OM = Math.max(0, rM.top - iM),
-         SM = rM.bottom + iM,
-         jM = Math.max(0, rM.left - iM),
-         aM = rM.right + iM;
-       return (0, HM.jsxs)(HM.Fragment, {
-         children: [(0, HM.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
-             left: 0,
-             right: 0,
- ... (29 more removed lines; see GitHub link above)
+       function uU() {
+         const UU = null !== pU && void 0 !== pU ? pU : "Rested Speed";
+         DU.gameBridge.send("wakeUp", eU ? UU : null), rU.current = null, zU(!1), ZU(null), WU(1), LU(!1), CU(!1)
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L156-L194` → after: `L38-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L38-L46) · [Before (L156-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L156-L194)

```diff
-     function CM(MM) {
-       let {
-         target: rM,
-         placement: iM,
-         boxRef: OM,
-         className: nM,
-         spotlight: zM = !0,
-         spotlightMargin: LM = UM,
-         children: mM
-       } = MM;
-       const {
-         getArrowProps: hM,
-         getTooltipProps: JM,
-         setTooltipRef: dM,
-         setTriggerRef: yM,
-         update: lM
- ... (23 more removed lines; see GitHub link above)
+       function fU() {
+         return !dU && (uU(), !0)
+       }
+       return (0, yU.f)("PlayerPhysicsTypeUpdate", (UU => {
+         UU !== rU.current && (rU.current = UU, UU === AU.o.SLEEPING ? (OU.current || (wU.current = DU.gameBridge.lookup("cameraZoom", null), OU.current = !0), qU.current = !0, DU.gameBridge.send("setCameraZoom", 3), zU(!0), WU(function() {
+           for (const UU of DU.gameBridge.lookup("blocksStandingOn", null)) {
+             if (IU.b.leafBeds.includes(UU)) return console.log(`Found leaf bed: ${UU}`), 1;
+             if (IU.b.woolBeds.includes(UU)) return console.log(`Found woold bed: ${UU}`), 2;
+             if (IU.b.strongBeds.includes(UU)) return console.log(`Found strong bed ${UU}`), 3
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L196-L221` → after: `L48-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L48-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L48-L61) · [Before (L196-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L196-L221)

```diff
-         }), [MM, rM]), iM
-       }(rM, zM);
-       (0, jM.useEffect)((() => {
-         null === lM || void 0 === lM || lM()
-       }), [EM, lM]), (0, jM.useEffect)((() => {
-         if (zM || !rM || !lM) return;
-         const MM = new ResizeObserver((() => {
-           lM()
-         }));
-         return MM.observe(rM), rM.parentElement && MM.observe(rM.parentElement), () => {
-           MM.disconnect()
-         }
-       }), [rM, zM, lM]), (0, jM.useEffect)((() => {
-         zM && (null === rM || void 0 === rM || rM.scrollIntoView({
-           block: "nearest",
-           inline: "nearest"
- ... (10 more removed lines; see GitHub link above)
+           return 1
+         }())) : (OU.current = !1, zU(!1), ZU(null), WU(1)))
+       })), (0, QU.useEffect)((() => () => {
+         (0, oU.s)(BU)
+       }), []), (0, QU.useEffect)((() => {
+         XU ? (0, oU.u)(BU) : ((0, oU.s)(BU), qU.current && (DU.gameBridge.send("setCameraZoom", wU.current), qU.current = !1))
+       }), [XU]), (0, kU.t)("overlay", SU, fU, XU), (0, GU.jsx)(cU.c, {
+         className: "SleepingOverlay",
+         "data-camera-keeper": "",
+         in: XU,
+         timeout: 300,
+         nodeRef: SU,
+         unmountOnExit: !0,
+         children: (0, GU.jsx)("div", {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L223-L232` → after: `L63-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L63-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L63-L139) · [Before (L223-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L223-L232)

```diff
-           ...JM({
-             className: SM()("tooltip-container SmallTextLight TutorialStep", nM)
-           }),
-           children: [mM, (0, HM.jsx)("div", {
-             ...hM({
-               className: "tooltip-arrow"
-             })
-           })]
-         })]
-       }), (0, QM.m)())
+           onClick: UU => {
+             fU() && UU.stopPropagation()
+           },
+           children: (0, GU.jsxs)("div", {
+             className: "SleepingOverlayBody",
+             children: [(0, GU.jsx)("div", {
+               className: "SleepingOverlayPerkList",
+               children: FU.f.map((XU => (0, GU.jsxs)(RU, {
+                 restedEffect: XU,
+                 xD: pU,
+                 setChosenRestedEffect: ZU,
+                 children: [(0, GU.jsxs)("div", {
+                   className: "SleepingOverlayPerkTitle",
+                   children: [(0, GU.jsx)(EU.d, {
+                     text: [{
+                       icon: XU
+ ... (61 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L234` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L141) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L234)

```diff
-     const eM = (0, jM.forwardRef)((function(MM, rM) {
+     const RU = (0, QU.memo)((function(UU) {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L238` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L144-L146) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L238)

```diff
-         ...SM
+         restedEffect: zU,
+         xD: cU,
+         setChosenRestedEffect: yU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L240-L257` → after: `L148-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L148-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L148-L157) · [Before (L240-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L240-L257)

```diff
-       const aM = dM(SM),
-         PM = (0, jM.useRef)(null),
-         nM = (0, jM.useRef)(null);
-       lM(SM, aM, PM, nM);
-       const [QM, zM] = (0, jM.useState)(null), LM = OM.ref, mM = (0, jM.useCallback)((MM => {
-         nM.current = MM, zM(MM), JM(rM, MM), JM(LM, MM)
-       }), [rM, LM]);
-       return (0, HM.jsxs)(HM.Fragment, {
-         children: [(0, jM.cloneElement)(OM, {
-           ref: mM
-         }), aM && (0, HM.jsx)(CM, {
-           target: QM,
-           placement: iM,
-           boxRef: PM,
-           children: (0, HM.jsx)(EM, {
-             ...SM
- ... (2 more removed lines; see GitHub link above)
+       return zU === cU ? (0, GU.jsx)(YU.l, {
+         onClick: UU => {
+           UU.stopPropagation()
+         },
+         children: XU
+       }) : (0, GU.jsx)(YU.j, {
+         onClick: UU => {
+           yU(zU), UU.stopPropagation()
+         },
+         children: XU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L259-L274` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L159) · [Before (L259-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L259-L274)

```diff
-     }));
- 
-     function bM(MM) {
-       const rM = dM(MM),
-         iM = (0, jM.useRef)(null);
-       return lM(MM, rM, iM, null), rM ? (0, aM.createPortal)((0, HM.jsx)("div", {
-         className: "TutorialCentreBackdrop",
-         children: (0, HM.jsx)("div", {
-           ref: iM,
-           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
-           children: (0, HM.jsx)(EM, {
-             ...MM
-           })
-         })
-       }), (0, QM.m)()) : null
-     }
+     }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L276` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L161) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L276)

```diff
-   37544: (MM, rM, iM) => {
+   41640: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L278-L287` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L163) · [Before (L278-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L278-L287)

```diff
-       B: () => lM,
-       b: () => jM,
-       f: () => JM,
-       i: () => dM,
-       j: () => PM,
-       m: () => mM,
-       q: () => yM,
-       u: () => LM,
-       x: () => EM,
-       y: () => hM
+       e: () => KU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L289-L312` → after: `L165-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L165-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L165-L196) · [Before (L289-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L289-L312)

```diff
-     var OM = iM(19),
-       SM = iM(22);
-     const jM = "clientGameInventoryButtonsChanged",
-       aM = new Map;
- 
-     function PM() {
-       return [...aM.values()].sort(((MM, rM) => {
-         var iM, OM;
-         return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
-       }))
-     }
-     let nM = null;
- 
-     function QM(MM) {
-       nM = MM
-     }
- ... (8 more removed lines; see GitHub link above)
+     var cU = zU(27),
+       yU = zU(31),
+       QU = zU(4651),
+       AU = zU(320),
+       FU = zU(1680),
+       oU = zU(8751),
+       DU = zU(4675),
+       EU = zU(9264),
+       YU = zU(8780),
+       NU = zU(8764),
+       IU = zU(8783),
+       pU = zU(1444),
+       aU = zU(1732),
+       tU = zU(8785),
+       gU = zU(9228),
+       kU = zU(9381),
+ ... (16 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L347-L350` → after: `L199-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L199-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L199-L218) · [Before (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L347-L350)

```diff
- 
-     function EM(MM) {
-       return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
-         aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
+     class eU {
+       constructor(UU, XU) {
+         this.press = UU, this.release = XU, this.downAtMs = null, this.token = null, this.latched = !1
+       }
+       update(UU, XU, zU, cU) {
+         if (UU && null === this.downAtMs) return this.downAtMs = zU, this.latched = cU, void(this.token = this.press(cU));
+         null !== this.downAtMs && (this.latched ? UU && this.end() : !XU && zU - this.downAtMs >= 40 && this.end())
+       }
+       isLatched() {
+         return null !== this.downAtMs && this.latched
+       }
+       unlatch() {
+         this.latched = !1
+       }
+       cancel() {
+         null !== this.downAtMs && this.end()
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L354` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L496) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L354)

```diff
-   37542: (MM, rM, iM) => {
+   41638: (UU, XU, zU) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L356-L364` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L498-L500) · [Before (L356-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L356-L364)

```diff
-       A: () => HM,
-       C: () => zM,
-       e: () => PM,
-       g: () => lM,
-       k: () => dM,
-       n: () => yM,
-       p: () => mM,
-       t: () => QM,
-       w: () => JM
+       b: () => pU,
+       d: () => tU,
+       h: () => IU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L366-L394` → after: `L502-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L502-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L502-L526) · [Before (L366-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L366-L394)

```diff
-     var OM = iM(19),
-       SM = iM(22),
-       jM = iM(1313),
-       aM = iM(37544);
-     const PM = "clientGameUiChanged";
-     let nM = null;
- 
-     function QM() {
-       return nM
-     }
- 
-     function zM(MM, rM) {
-       const iM = {
-         content: MM,
-         menu: rM
-       };
- ... (13 more removed lines; see GitHub link above)
+     var cU = zU(1310),
+       yU = zU(4651),
+       QU = zU(9355),
+       AU = zU(37653),
+       FU = zU(1769),
+       oU = zU(1190),
+       DU = zU(8785),
+       EU = zU(9273),
+       YU = zU(9383);
+     const NU = {
+         emoteWheel: QU.e,
+         quickChatWheel: EU.c,
+         actionWheel: YU.q
+       },
+       IU = Object.keys(NU),
+       pU = "dead",
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L425` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L529) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L425)

```diff
-   37828: (MM, rM, iM) => {
+   41636: (UU, XU, zU) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L427-L429` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L531) · [Before (L427-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L427-L429)

```diff
-       D: () => oM,
-       E: () => DM,
-       G: () => fM,
+       c: () => yU,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L436-L440` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L538) · [Before (L436-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L436-L440)

```diff
-       s: () => WM,
-       t: () => pM,
-       u: () => wM,
-       y: () => kM,
-       z: () => ZM
+       p: () => YU
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L442-L445` → after: `L540-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L540-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L540-L577) · [Before (L442-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L442-L445)

```diff
-     var OM = iM(30);
-     const SM = {
-         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
-         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
+     var cU = zU(8740);
+     class yU {
+       constructor() {
+         this.fullTiltSinceMs = null
+       }
+       update(UU, XU, zU) {
+         const yU = (0, cU.j)(UU, XU.lookDeadzone);
+         if (Math.hypot(yU.x, yU.y) < .9 || Math.abs(yU.x) < Math.abs(yU.y)) return this.fullTiltSinceMs = null, 1;
+         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = zU);
+         const QU = (AU = XU.lookSensitivityX, Math.min(1, 100 / AU));
+         var AU;
+         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (zU - this.fullTiltSinceMs - 250 * QU) / (200 * QU)))
+       }
+       reset() {
+         this.fullTiltSinceMs = null
+       }
+ ... (22 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L447-L454` → after: `L579-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L579-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L579-L584) · [Before (L447-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L447-L454)

```diff
-       jM = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
-       aM = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
-       PM = jM.filter((MM => "docsButton" !== MM)),
-       nM = aM.filter((MM => "aiHelperButton" !== MM)),
-       QM = "codeEditorTutorials",
-       zM = {
-         codeBlockIntro: "codeBlockIntroShown",
-         worldCodeIntro: "worldCodeIntroShown"
+       AU = (UU, XU) => {
+         const zU = Math.max(0, Math.min(250, XU)) / 1e3;
+         return {
+           zq: UU.yawRadPerSec * zU,
+           Qq: UU.pitchRadPerSec * zU
+         }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L456-L484` → after: `L586-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L586-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L586-L601) · [Before (L456-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L456-L484)

```diff
-       LM = {
-         welcome: "welcomeComplete",
-         docsOverview: "docsOverviewComplete",
-         aiHelperOverview: "aiHelperOverviewComplete"
-       };
-     let mM = null,
-       HM = null;
-     const hM = new Set,
-       JM = new Set;
-     let dM = null;
-     const yM = new Set,
-       lM = new Set;
- 
-     function EM() {
-       lM.forEach((MM => {
-         MM()
- ... (13 more removed lines; see GitHub link above)
+       FU = (UU, XU) => XU ? {
+         move: UU.rightStick,
+         look: UU.leftStick
+       } : {
+         move: UU.leftStick,
+         look: UU.rightStick
+       },
+       oU = (UU, XU) => {
+         const zU = (0, cU.j)(UU, XU),
+           yU = Math.min(1, Math.hypot(zU.x, zU.y));
+         return {
+           magnitude: yU,
+           speed: Math.min(1, yU / .8),
+           headingOffset: 0 === yU ? 0 : Math.atan2(zU.x, -zU.y),
+           x: zU.x,
+           y: zU.y
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L486-L492` → after: `L603-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L603-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L603-L632) · [Before (L486-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L486-L492)

```diff
-       }
-       return mM
-     }
- 
-     function GM(MM) {
-       const rM = UM();
-       rM[MM] || (mM = {
+       },
+       DU = (UU, XU) => {
+         let {
+           sprintPressed: zU,
+           magnitude: cU,
+           autoSprint: yU,
+           nowMs: QU
+         } = XU;
+         const AU = zU ? QU : UU.latchedAtMs,
+           FU = (UU => {
+             let {
+               running: XU,
+               magnitude: zU,
+               sprintPressed: cU,
+               autoSprint: yU
+             } = UU;
+ ... (14 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L494-L584` → after: `L634-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L634-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/243.js#L634-L683) · [Before (L494-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/243.js#L494-L584)

```diff
-         [MM]: !0
-       }, OM.g.setItem(QM, mM))
-     }
- 
-     function CM(MM) {
-       return "docsOverview" === MM ? jM : "aiHelperOverview" === MM ? aM : HM ? SM[HM] : []
-     }
- 
-     function eM(MM) {
-       return ("worldCodeButton" !== MM || !UM().worldCodeIntroShown) && !yM.has(MM)
-     }
- 
-     function bM(MM) {
-       var rM;
-       return (null === (rM = dM) || void 0 === rM ? void 0 : rM.name) === MM ? dM.stepsDone : hM
-     }
- ... (75 more removed lines; see GitHub link above)
+         isHeld: zU => zU !== XU && UU.isHeld(zU),
+         wasPressed: zU => zU !== XU && UU.wasPressed(zU),
+         wasReleased: zU => zU !== XU && UU.wasReleased(zU),
+         value: zU => zU === XU ? 0 : UU.value(zU)
+       } : UU
+   },
+   41644: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => yU,
+       e: () => cU
+     });
+     const cU = UU => {
+       let {
+         mode: XU,
+         sneakHeld: zU,
+         sneakPressed: cU,
+ ... (34 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4-L300` → after: `L4-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L24) · [Before (L4-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L300)

```diff
-   37572: MM => {
-     MM.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (281 more removed lines; see GitHub link above)
+   39250: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => pU
+     });
+     var cU = zU(212),
+       yU = zU(38388);
+     const QU = 1.2,
+       AU = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+ ... (5 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L302-L306` → after: `L26-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L26-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L26-L38) · [Before (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L302-L306)

```diff
-       string(MM) {
-         let rM = this.model in OM.to ? this : this.rgb();
-         rM = rM.round("number" === typeof MM ? MM : 1);
-         const iM = 1 === rM.valpha ? rM.color : [...rM.color, this.valpha];
-         return OM.to[rM.model](iM)
+       FU = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 1.8,
+           height: 2.6
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         xE: .5,
+         GzU: !1
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L308-L311` → after: `L40-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L40-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L40-L52) · [Before (L308-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L308-L311)

```diff
-       percentString(MM) {
-         const rM = this.rgb().round("number" === typeof MM ? MM : 1),
-           iM = 1 === rM.valpha ? rM.color : [...rM.color, this.valpha];
-         return OM.to.rgb.percent(iM)
+       oU = {
+         physicsBodyDimensions: {
+           width: cU.f.zg,
+           height: cU.f.cg
+         },
+         hitBoxDimensions: {
+           width: cU.f.zg + .4,
+           height: cU.f.cg + .6
+         },
+         eyeHeight: cU.f.cg * cU.f.playerEyeToHeightRatio,
+         rideHeight: cU.f.cg - .3,
+         xE: .5,
+         GzU: !1
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L313-L314` → after: `L54-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L54-L66) · [Before (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L313-L314)

```diff
-       array() {
-         return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha]
+       DU = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: .95
+         },
+         hitBoxDimensions: {
+           width: 1.6,
+           height: 1.1
+         },
+         eyeHeight: .9,
+         rideHeight: .5,
+         xE: .5,
+         GzU: !1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L316-L325` → after: `L68-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L68-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L68-L80) · [Before (L316-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L316-L325)

```diff
-       object() {
-         const MM = {},
-           {
-             channels: rM
-           } = SM[this.model],
-           {
-             labels: iM
-           } = SM[this.model];
-         for (let OM = 0; OM < rM; OM++) MM[iM[OM]] = this.color[OM];
-         return 1 !== this.valpha && (MM.alpha = this.valpha), MM
+       EU = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 1.8
+         },
+         hitBoxDimensions: {
+           width: 1.7,
+           height: 1.9
+         },
+         eyeHeight: 1.3,
+         rideHeight: 1.3,
+         xE: .5,
+         GzU: !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L327-L329` → after: `L82-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L82-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L82-L94) · [Before (L327-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L327-L329)

```diff
-       unitArray() {
-         const MM = this.rgb().color;
-         return MM[0] /= 255, MM[1] /= 255, MM[2] /= 255, 1 !== this.valpha && MM.push(this.valpha), MM
+       YU = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 1.9
+         },
+         hitBoxDimensions: {
+           width: 1.5,
+           height: 2.1
+         },
+         eyeHeight: 1.9,
+         rideHeight: 1,
+         xE: .5,
+         GzU: !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L331-L333` → after: `L96-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L96-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L96-L108) · [Before (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L331-L333)

```diff
-       unitObject() {
-         const MM = this.rgb().object();
-         return MM.r /= 255, MM.g /= 255, MM.b /= 255, 1 !== this.valpha && (MM.alpha = this.valpha), MM
+       NU = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 1.9
+         },
+         hitBoxDimensions: {
+           width: 1.5,
+           height: 2.4
+         },
+         eyeHeight: 2,
+         rideHeight: 1.8,
+         xE: .5,
+         GzU: !1
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L335-L364` → after: `L110-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L110-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L110-L623) · [Before (L335-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L335-L364)

```diff
-       round(MM) {
-         return MM = Math.max(MM || 0, 0), new nM([...this.color.map(QM(MM)), this.valpha], this.model)
-       },
-       alpha(MM) {
-         return void 0 !== MM ? new nM([...this.color, Math.max(0, Math.min(1, MM))], this.model) : this.valpha
-       },
-       red: zM("rgb", 0, LM(255)),
-       green: zM("rgb", 1, LM(255)),
-       blue: zM("rgb", 2, LM(255)),
-       hue: zM(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (MM => (MM % 360 + 360) % 360)),
-       saturationl: zM("hsl", 1, LM(100)),
-       lightness: zM("hsl", 2, LM(100)),
-       saturationv: zM("hsv", 1, LM(100)),
-       value: zM("hsv", 2, LM(100)),
-       chroma: zM("hcg", 1, LM(100)),
-       gray: zM("hcg", 2, LM(100)),
- ... (14 more removed lines; see GitHub link above)
+       IU = {
+         Player: {
+           defaultName: "Player",
+           physicsBodyDimensions: {
+             width: cU.f.zg,
+             height: cU.f.cg
+           },
+           hitBoxDimensions: {
+             width: cU.f.zg + .4,
+             height: cU.f.cg + .6
+           },
+           eyeHeight: cU.f.cg * cU.f.playerEyeToHeightRatio,
+           rideHeight: cU.f.cg - .1,
+           xE: yU.e.xE,
+           GzU: !0
+         },
+ ... (498 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L366-L367` → after: `L625-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L625-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L625-L630) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L366-L367)

```diff
-       hex(MM) {
-         return void 0 !== MM ? new nM(MM) : OM.to.hex(this.rgb().round().color)
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L369-L373` → after: `L632-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L632-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L632-L637) · [Before (L369-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L369-L373)

```diff
-       hexa(MM) {
-         if (void 0 !== MM) return new nM(MM);
-         const rM = this.rgb().round().color;
-         let iM = Math.round(255 * this.valpha).toString(16).toUpperCase();
-         return 1 === iM.length && (iM = "0" + iM), OM.to.hex(rM) + iM
+       "skyblock:forged:astral-diamond-moonstone": {
+         name: "Starcutter",
+         lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
+         damageMultiplier: 1.65,
+         cooldownMultiplier: .83,
+         ability: "starfall"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L375-L377` → after: `L639-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L639-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L639-L644) · [Before (L375-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L375-L377)

```diff
-       rgbNumber() {
-         const MM = this.rgb().color;
-         return (255 & MM[0]) << 16 | (255 & MM[1]) << 8 | 255 & MM[2]
+       "skyblock:forged:astral-sanguine-magmasteel": {
+         name: "Triune Flame",
+         lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
+         damageMultiplier: 1.65,
+         cooldownMultiplier: .83,
+         ability: "magmaWave"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L379-L386` → after: `L646-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L646-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L646-L651) · [Before (L379-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L379-L386)

```diff
-       luminosity() {
-         const MM = this.rgb().color,
-           rM = [];
-         for (const [iM, OM] of MM.entries()) {
-           const MM = OM / 255;
-           rM[iM] = MM <= .04045 ? MM / 12.92 : ((MM + .055) / 1.055) ** 2.4
-         }
-         return .2126 * rM[0] + .7152 * rM[1] + .0722 * rM[2]
+       "skyblock:forged:magmasteel-magmasteel-magmasteel": {
+         name: "Vulcan's Bane",
+         lore: "Forged in the heat of his own rift. It remembers the way down.",
+         damageMultiplier: 1.56,
+         cooldownMultiplier: .83,
+         ability: "magmaWave"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L388-L391` → after: `L653-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L653-L658) · [Before (L388-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L388-L391)

```diff
-       contrast(MM) {
-         const rM = this.luminosity(),
-           iM = MM.luminosity();
-         return rM > iM ? (rM + .05) / (iM + .05) : (iM + .05) / (rM + .05)
+       "skyblock:forged:magmasteel-astral-sanguine": {
+         name: "Comet's Wake",
+         lore: "It leaves a trail of fire through the air, like something falling from very far up.",
+         damageMultiplier: 1.56,
+         cooldownMultiplier: .83,
+         ability: "starfall"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L393-L395` → after: `L660-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L660-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L660-L665) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L393-L395)

```diff
-       level(MM) {
-         const rM = this.contrast(MM);
-         return rM >= 7 ? "AAA" : rM >= 4.5 ? "AA" : ""
+       "skyblock:forged:magmasteel-sanguine-astral": {
+         name: "Vulcan's Ruin",
+         lore: "The Forge Mother made only one, then sat down for a long while.",
+         damageMultiplier: 1.6,
+         cooldownMultiplier: .83,
+         ability: "warcry"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L397-L399` → after: `L667-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L667-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L667-L672) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L397-L399)

```diff
-       isDark() {
-         const MM = this.rgb().color;
-         return (2126 * MM[0] + 7152 * MM[1] + 722 * MM[2]) / 1e4 < 128
+       "skyblock:forged:magmasteel-iron-stone": {
+         name: "Forgehand",
+         lore: "A smith's sword: plain to look at, and it hits like a hammer.",
+         damageMultiplier: 1.4,
+         cooldownMultiplier: .9,
+         ability: "quake"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L401-L402` → after: `L674-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L674-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L674-L679) · [Before (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L401-L402)

```diff
-       isLight() {
-         return !this.isDark()
+       "skyblock:forged:sanguine-sanguine-sanguine": {
+         name: "Crimson Covenant",
+         lore: "It drinks, and so do you.",
+         damageMultiplier: 1.53,
+         cooldownMultiplier: .83,
+         ability: "bloodPact"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L404-L407` → after: `L681-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L681-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L681-L686) · [Before (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L404-L407)

```diff
-       VJ() {
-         const MM = this.rgb();
-         for (let rM = 0; rM < 3; rM++) MM.color[rM] = 255 - MM.color[rM];
-         return MM
+       "skyblock:forged:sanguine-astral-moonstone": {
+         name: "Nightbloom",
+         lore: "A red flower that only opens after dark.",
+         damageMultiplier: 1.56,
+         cooldownMultiplier: .83,
+         ability: "eclipseField"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L409-L411` → after: `L688-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L688-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L688-L693) · [Before (L409-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L409-L411)

```diff
-       lighten(MM) {
-         const rM = this.hsl();
-         return rM.color[2] += rM.color[2] * MM, rM
+       "skyblock:forged:sanguine-iron-wood": {
+         name: "Butcher's Oath",
+         lore: "Heavy, honest and always hungry.",
+         damageMultiplier: 1.35,
+         cooldownMultiplier: .95,
+         ability: "bloodPact"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L413-L415` → after: `L695-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L695-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L695-L700) · [Before (L413-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L413-L415)

```diff
-       darken(MM) {
-         const rM = this.hsl();
-         return rM.color[2] -= rM.color[2] * MM, rM
+       "skyblock:forged:moonstone-moonstone-moonstone": {
+         name: "Lunar Requiem",
+         lore: "Swung, it leaves a pale arc that lingers like a second moon.",
+         damageMultiplier: 1.35,
+         cooldownMultiplier: .85,
+         ability: "moonDash"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L417-L419` → after: `L702-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L702-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L702-L707) · [Before (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L417-L419)

```diff
-       saturate(MM) {
-         const rM = this.hsl();
-         return rM.color[1] += rM.color[1] * MM, rM
+       "skyblock:forged:moonstone-astral-moonstone": {
+         name: "Silver Tide",
+         lore: "Pulled by the same moon that pulls the sea.",
+         damageMultiplier: 1.4,
+         cooldownMultiplier: .84,
+         ability: "moonDash"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L421-L423` → after: `L709-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L709-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L709-L717) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L421-L423)

```diff
-       desaturate(MM) {
-         const rM = this.hsl();
-         return rM.color[1] -= rM.color[1] * MM, rM
+       "skyblock:forged:diamond-diamond-diamond": {
+         name: "Prism Fang",
+         lore: "Every facet catches a different light, and every strike finds a different weakness.",
+         damageMultiplier: 1.29,
+         cooldownMultiplier: .88,
+         ability: "gildedEdge",
+         traits: {
+           crit: 1.8
+         }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L425-L427` → after: `L719-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L719-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L719-L724) · [Before (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L425-L427)

```diff
-       whiten(MM) {
-         const rM = this.hwb();
-         return rM.color[1] += rM.color[1] * MM, rM
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L429-L431` → after: `L726-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L726-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L726-L734) · [Before (L429-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L429-L431)

```diff
-       blacken(MM) {
-         const rM = this.hwb();
-         return rM.color[2] += rM.color[2] * MM, rM
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
+         }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L433-L436` → after: `L736-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L736-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L736-L745) · [Before (L433-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L433-L436)

```diff
-       grayscale() {
-         const MM = this.rgb().color,
-           rM = .3 * MM[0] + .59 * MM[1] + .11 * MM[2];
-         return nM.rgb(rM, rM, rM)
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
+         }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L438-L439` → after: `L747-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L747-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L747-L752) · [Before (L438-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L438-L439)

```diff
-       fade(MM) {
-         return this.alpha(this.valpha - this.valpha * MM)
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L441-L442` → after: `L754-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L754-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L754-L759) · [Before (L441-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L441-L442)

```diff
-       opaquer(MM) {
-         return this.alpha(this.valpha + this.valpha * MM)
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L444-L447` → after: `L761-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L761-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L761-L766) · [Before (L444-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L444-L447)

```diff
-       rotate(MM) {
-         const rM = this.hsl();
-         let iM = rM.color[0];
-         return iM = (iM + MM) % 360, iM = iM < 0 ? 360 + iM : iM, rM.color[0] = iM, rM
+       "skyblock:forged:stone-stone-stone": {
+         name: "Quarryman's Cleaver",
+         lore: "Chipped from one block of stone, handle and all.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "quake"
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L449-L474` → after: `L768-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L768-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L768-L773) · [Before (L449-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L449-L474)

```diff
-       mix(MM, rM) {
-         if (!MM || !MM.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof MM);
-         const iM = MM.rgb(),
-           OM = this.rgb(),
-           SM = void 0 === rM ? .5 : rM,
-           jM = 2 * SM - 1,
-           aM = iM.alpha() - OM.alpha(),
-           PM = ((jM * aM === -1 ? jM : (jM + aM) / (1 + jM * aM)) + 1) / 2,
-           QM = 1 - PM;
-         return nM.rgb(PM * iM.red() + QM * OM.red(), PM * iM.green() + QM * OM.green(), PM * iM.blue() + QM * OM.blue(), iM.alpha() * SM + OM.alpha() * (1 - SM))
-       }
-     };
-     for (const HM of Object.keys(SM)) {
-       if (jM.includes(HM)) continue;
-       const {
-         channels: MM
- ... (10 more removed lines; see GitHub link above)
+       "skyblock:forged:wood-wood-wood": {
+         name: "Lorenzo's Lesson",
+         lore: "Courage matters more than the blade. This one is mostly courage.",
+         damageMultiplier: 1.06,
+         cooldownMultiplier: .97,
+         ability: "warcry"
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L478-L483` → after: `L788-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L788-L800) · [Before (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L478-L483)

```diff
-     function QM(MM) {
-       return function(rM) {
-         return function(MM, rM) {
-           return Number(MM.toFixed(rM))
-         }(rM, MM)
-       }
+     function gU(...UU) {
+       return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = function(...UU) {
+         for (CU(UU[tU[12]] = tU[0], UU[tU[0]] = 'nutYgsFdEfIoRSZcXpmUKkLDQ]9/he%bi;)j=v{",^4+}NCBO3x1yz<w~PrHWTMJ!*_.|7:A@q(l>a[&$VG58`?206#', UU[-tU[1]] = "" + (UU[tU[2]] || ""), UU[tU[4]] = UU[-tU[1]].length, UU[tU[9]] = [], UU[tU[7]] = tU[2], UU[tU[8]] = tU[2], UU[tU[6]] = -tU … [truncated]
+           if (UU[tU[5]] = UU[tU[0]].indexOf(UU[-tU[1]][UU[tU[3]]]), UU[tU[5]] !== -tU[0])
+             if (UU[tU[6]] < tU[2]) UU[tU[6]] = UU[tU[5]];
+             else {
+               CU(UU[tU[6]] += UU[tU[5]] * tU[36], UU[tU[7]] |= UU[tU[6]] << UU[tU[8]], UU[tU[8]] += (UU[tU[6]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
+               do {
+                 CU(UU[tU[9]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[tU[8]] -= tU[10])
+               } while (UU[tU[8]] > tU[24]);
+               UU[tU[6]] = -tU[0]
+             } return UU[tU[6]] > -tU[0] && UU[tU[9]].push((UU[tU[7]] | UU[tU[6]] << UU[tU[8]]) & tU[11]), kU(UU[tU[9]])
+       }(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L486-L493` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L803-L804) · [Before (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L486-L493)

```diff
-     function zM(MM, rM, iM) {
-       MM = Array.isArray(MM) ? MM : [MM];
-       for (const OM of MM)(PM[OM] || (PM[OM] = []))[rM] = iM;
-       return MM = MM[0],
-         function(OM) {
-           let SM;
-           return void 0 !== OM ? (iM && (OM = iM(OM)), SM = this[MM](), SM.color[rM] = OM, SM) : (SM = this[MM]().color[rM], iM && (SM = iM(SM)), SM)
-         }
+     function kU(...UU) {
+       return UU[tU[12]] = tU[0], typeof EU !== tU[17] && EU ? (new EU).decode(new YU(UU[tU[2]])) : typeof NU !== tU[17] && NU ? NU.from(UU[tU[2]]).toString("utf-8") : aU(UU[tU[2]])
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L496-L500` → after: `L807-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L807-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L807-L859) · [Before (L496-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L496-L500)

```diff
-     function LM(MM) {
-       return function(rM) {
-         return Math.max(0, Math.min(MM, rM))
-       }
-     }
+     function GU() {}
+     CU(FU = {}, oU = ['3A[>0{(RopQw+G)p?"RebTUeySQ', "sehIIMQQYUW$L{F", "]ei%BroUmRJqXHI]Z3k>#qZQ0SGLHZX90)YsG{vdBz!:yXJe.YFy(W[FF", "AY[hi<~yVJ)bjxd].Nc[!OD^OmsFiAuD*O&<X5QExUPaTg@{UPpiejmCI*}", "nWeyD7HJpf`ztVhj>*Swm5pe%_|qg=y/RP7Atzy!eH<jhBtv", "P)zbC|MCDr37;vIK)R7wx:BU)Wg|KAd … [truncated]
+       CU(UU[tU[12]] = tU[2], UU[tU[15]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], UU[tU[13]] = tU[18], UU[-tU[14]] = []);
+       try {
+         CU(UU[tU[13]] = Object, UU[-tU[14]][tU[26]]("".__proto__.constructor.name))
+       } catch (oU) {}
+       UU: for (UU[tU[7]] = tU[2]; UU[tU[7]] < UU[tU[15]][tU[12]]; UU[tU[7]]++) try {
+         for (UU[tU[13]] = UU[tU[15]][UU[tU[7]]](), UU[tU[16]] = tU[2]; UU[tU[16]] < UU[-tU[14]][tU[12]]; UU[tU[16]]++)
+ ... (37 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L502-L504` → after: `L861-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L861-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L861-L862) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L502-L504)

```diff
-     function mM(MM, rM) {
-       for (let iM = 0; iM < rM; iM++) "number" !== typeof MM[iM] && (MM[iM] = 0);
-       return MM
+     function CU() {
+       CU = function() {}
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L506-L571` → after: `L864-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L864-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L864-L877) · [Before (L506-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L506-L571)

```diff
-     MM.exports = nM
-   },
-   37597: (MM, rM, iM) => {
-     const OM = iM(37604),
-       SM = {};
-     for (const aM of Object.keys(OM)) SM[OM[aM]] = aM;
-     const jM = {
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
- ... (50 more removed lines; see GitHub link above)
+     AU = (...UU) => {
+       function XU(...UU) {
+         return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = function(...UU) {
+           for (CU(UU[tU[12]] = tU[0], UU[tU[0]] = 'x<#6@0(=u;81[`2%>*fWecGkt7v~EHRP&]sV:JzXn^?.!LIBd{lr5$j+)/ib|}UypoC",ZFmONhM43DgaAY_w9TQqKS', UU[tU[31]] = "" + (UU[tU[2]] || ""), UU[tU[4]] = UU[tU[31]].length, UU[tU[16]] = [], UU[tU[7]] = tU[2], UU[-tU[43]] = tU[2], UU[tU[6]]  … [truncated]
+             if (UU[-tU[42]] = UU[tU[0]].indexOf(UU[tU[31]][UU[tU[41]]]), UU[-tU[42]] !== -tU[0])
+               if (UU[tU[6]] < tU[2]) UU[tU[6]] = UU[-tU[42]];
+               else {
+                 CU(UU[tU[6]] += UU[-tU[42]] * tU[36], UU[tU[7]] |= UU[tU[6]] << UU[-tU[43]], UU[-tU[43]] += (UU[tU[6]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
+                 do {
+                   CU(UU[tU[16]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[-tU[43]] -= tU[10])
+                 } while (UU[-tU[43]] > tU[24]);
+                 UU[tU[6]] = -tU[0]
+               } return UU[tU[6]] > -tU[0] && UU[tU[16]].push((UU[tU[7]] | UU[tU[6]] << UU[-tU[43]]) & tU[11]), kU(UU[tU[16]])
+         }(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L573-L940` → after: `L879-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L879-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L879-L882) · [Before (L573-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L573-L940)

```diff
-     };
-     MM.exports = jM;
-     for (const aM of Object.keys(jM)) {
-       if (!("channels" in jM[aM])) throw new Error("missing channels property: " + aM);
-       if (!("labels" in jM[aM])) throw new Error("missing channel labels property: " + aM);
-       if (jM[aM].labels.length !== jM[aM].channels) throw new Error("channel and label counts mismatch: " + aM);
-       const {
-         channels: MM,
-         labels: rM
-       } = jM[aM];
-       delete jM[aM].channels, delete jM[aM].labels, Object.defineProperty(jM[aM], "channels", {
-         value: MM
-       }), Object.defineProperty(jM[aM], "labels", {
-         value: rM
-       })
-     }
- ... (352 more removed lines; see GitHub link above)
+       UU[tU[12]] = tU[10], XU(110) in GU && function(...UU) {
+         function XU(...UU) {
+           return UU[tU[12]] = tU[0], UU[tU[2]][tU[0]] * tU[45] + (UU[tU[2]][tU[2]] < tU[2] ? tU[44] | UU[tU[2]][tU[2]] : UU[tU[2]][tU[2]])
+         }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L942-L958` → after: `L884-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L884-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L884-L915) · [Before (L942-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L942-L958)

```diff
-     function SM(MM) {
-       const rM = function() {
-           const MM = {},
-             rM = Object.keys(OM);
-           for (let iM = rM.length, OM = 0; OM < iM; OM++) MM[rM[OM]] = {
-             distance: -1,
-             parent: null
-           };
-           return MM
-         }(),
-         iM = [MM];
-       for (rM[MM].distance = 0; iM.length;) {
-         const MM = iM.pop(),
-           SM = Object.keys(OM[MM]);
-         for (let OM = SM.length, jM = 0; jM < OM; jM++) {
-           const OM = SM[jM],
- ... (1 more removed lines; see GitHub link above)
+         function zU(...UU) {
+           switch (UU[tU[12]] = tU[0], ((UU[tU[2]] & tU[44]) !== tU[2]) * tU[0] + (UU[tU[2]] < tU[2]) * tU[20]) {
+             case tU[2]:
+               return [UU[tU[2]] % tU[44], Math.trunc(UU[tU[2]] / tU[45])];
+             case tU[0]:
+               return [UU[tU[2]] % tU[44] - tU[44], Math.trunc(UU[tU[2]] / tU[45]) + tU[0]];
+             case tU[20]:
+               return [((UU[tU[2]] + tU[44]) % tU[44] + tU[44]) % tU[44], Math.round(UU[tU[2]] / tU[45])];
+             case tU[4]:
+               return [UU[tU[2]] % tU[44], Math.trunc(UU[tU[2]] / tU[45])]
+           }
+         }
+         UU[tU[12]] = tU[2], CU(UU[tU[30]] = XU([tU[20], tU[16]]), UU[-tU[46]] = XU([tU[0], tU[20]]), UU[tU[20]] = UU[tU[30]] + UU[-tU[46]], UU[-tU[47]] = UU[tU[20]] - UU[-tU[46]], UU[tU[16]] = UU[-tU[47]] * tU[20], UU[tU[48]] = UU[tU[16]] / tU[20], console.log(zU(UU[tU[20]])), co … [truncated]
+       }();
+       const zU = UU[tU[2]][XU(tU[49])][XU(112) + XU(113) + XU(114)](UU[tU[0]]);
+       UU[tU[21]] = UU[tU[2]][XU(tU[49])][XU(tU[59]) + XU(tU[60]) + XU(tU[61]) + XU(tU[62])](zU);
+ ... (16 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L964-L966` → after: `L918-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L918-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L918-L994) · [Before (L964-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L964-L966)

```diff
-     function jM(MM, rM) {
-       return function(iM) {
-         return rM(MM(iM))
+         function aU(...UU) {
+           return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = pU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
+         }
+         CU(eU(ZU, BU, LU), eU(RU, LU, BU), yU()[aU(tU[1])](PU, LU, RU));
+         const gU = yU()[aU(tU[75])](LU),
+           dU = yU()[aU(145)](BU, LU) / UU[tU[74]] / gU,
+           wU = Math[aU(tU[81])](dU, tU[2]) + tU[0];
+         if (UU[tU[74]] * UU[tU[74]] < yU()[tU[78]](RU)) {
+           function qU(...UU) {
+             for (CU(UU[tU[12]] = tU[0], UU[tU[0]] = 'D"P~z=hUO_Z9`6VWsTuB,b1)8]3K4MY!inRtcFSp>vdm<gf?Hjw@|x7&oN}#%[+AI./Jqe5L0kQX;{2:y$(*^EGlCar', UU[tU[20]] = "" + (UU[tU[2]] || ""), UU[tU[4]] = UU[tU[20]].length, UU[tU[9]] = [], UU[tU[7]] = tU[2], UU[tU[79]] = tU[2], UU[tU[24]] … [truncated]
+               if (UU[-tU[0]] = UU[tU[0]].indexOf(UU[tU[20]][UU[tU[10]]]), UU[-tU[0]] !== -tU[0])
+                 if (UU[tU[24]] < tU[2]) UU[tU[24]] = UU[-tU[0]];
+                 else {
+                   CU(UU[tU[24]] += UU[-tU[0]] * tU[36], UU[tU[7]] |= UU[tU[24]] << UU[tU[79]], UU[tU[79]] += (UU[tU[24]] & tU[37]) > tU[38] ? tU[39] : tU[40]);
+                   do {
+                     CU(UU[tU[9]].push(UU[tU[7]] & tU[11]), UU[tU[7]] >>= tU[10], UU[tU[79]] -= tU[10])
+ ... (61 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L968` → after: `L996-L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L996-L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L996-L1013) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L968)

```diff
-     }
+       const EU = WU;
+       if (CU(yU()[XU(151)](EU, BU, LU), EU[tU[0]] = tU[2], UU[tU[82]] = yU()[XU(152)](EU)), !DU) {
+         function rU(UU) {
+           var XU, zU, cU, yU, QU, AU, FU;
+           for (CU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = tU[2], QU = tU[2], AU = -tU[0]), FU = tU[2]; FU < zU; FU++) {
+             var oU = '2BeK#c`|1!6rlW0~&("Dj[;TPzJ]+v93dFxyq4)YguXn%sO87Qb@:*<LhS$.fZ=AoiGk^IRt_/>CEwM?,V5}HUp{mNa'.indexOf(XU[FU]);
+             if (oU !== -tU[0])
+               if (AU < tU[2]) AU = oU;
+               else {
+                 CU(AU += oU * tU[36], yU |= AU << QU, QU += (AU & tU[37]) > tU[38] ? tU[39] : tU[40]);
+                 do {
+                   CU(cU.push(yU & tU[11]), yU >>= tU[10], QU -= tU[10])
+                 } while (QU > tU[24]);
+                 AU = -tU[0]
+               }
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L970-L983` → after: `L1015-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1015-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L1015-L1036) · [Before (L970-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L970-L983)

```diff
-     function aM(MM, rM) {
-       const iM = [rM[MM].parent, MM];
-       let SM = OM[rM[MM].parent][MM],
-         aM = rM[MM].parent;
-       for (; rM[aM].parent;) iM.unshift(rM[aM].parent), SM = jM(OM[rM[aM].parent][aM], SM), aM = rM[aM].parent;
-       return SM.conversion = iM, SM
-     }
-     MM.exports = function(MM) {
-       const rM = SM(MM),
-         iM = {},
-         OM = Object.keys(rM);
-       for (let SM = OM.length, jM = 0; jM < SM; jM++) {
-         const MM = OM[jM];
-         null !== rM[MM].parent && (iM[MM] = aM(MM, rM))
+         function uU(...UU) {
+           return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = rU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
+         }
+ 
+         function fU(...UU) {
+           UU[tU[12]] = tU[2];
+           const XU = require("path"),
+             {
+               version: zU
+             } = require("../../package"),
+             {
+               version: cU
+             } = require("@redacted/enterprise-plugin/package"),
+             {
+               version: yU
+             } = require("@redacted/components/package"),
+ ... (6 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L985-L1147` → after: `L1038-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1038-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L1038-L1057) · [Before (L985-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L985-L1147)

```diff
-       return iM
-     }
-   },
-   37604: MM => {
-     MM.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
- ... (147 more removed lines; see GitHub link above)
+       const YU = UU[tU[8]][XU(tU[27]) + XU(157) + XU(158)],
+         NU = YU ? Math[XU(159)](YU, UU[tU[82]]) : UU[tU[82]];
+       yU()[XU(160) + XU(161)](EU, EU);
+       const IU = UU[tU[24]] !== tU[53] && void 0 !== UU[tU[24]] ? UU[tU[24]] : UU[tU[8]][XU(tU[19]) + XU(163) + XU(164) + XU(165)];
+       if (NU > tU[2]) {
+         function iU(UU) {
+           var XU, zU, cU, yU, QU, AU, FU;
+           for (CU(XU = "" + (UU || ""), zU = XU.length, cU = [], yU = tU[2], QU = tU[2], AU = -tU[0]), FU = tU[2]; FU < zU; FU++) {
+             var oU = 'fet%v7JCPQ:LgxYcD|s{G2Bol`6ZS;3O1j&4$H+*ad?IrTb"~EF.k)M_R,5uA]h<#KmnWVNpy[=>/wX^qi(}9z8!@U0'.indexOf(XU[FU]);
+             if (oU !== -tU[0])
+               if (AU < tU[2]) AU = oU;
+               else {
+                 CU(AU += oU * tU[36], yU |= AU << QU, QU += (AU & tU[37]) > tU[38] ? tU[39] : tU[40]);
+                 do {
+                   CU(cU.push(yU & tU[11]), yU >>= tU[10], QU -= tU[10])
+                 } while (QU > tU[24]);
+ ... (4 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1149-L1153` → after: `L1059-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1059-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L1059-L1109) · [Before (L1149-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L1149-L1153)

```diff
-         return rM
-       };
-     aM.wrap = function(MM) {
-       return function() {
-         return MM(aM(arguments))
+ 
+         function HU(...UU) {
+           return UU[tU[12]] = tU[0], typeof FU[UU[tU[2]]] === tU[17] ? FU[UU[tU[2]]] = iU(oU[UU[tU[2]]]) : FU[UU[tU[2]]]
+         }
+ 
+         function MU(...UU) {
+           function XU(...UU) {
+             return UU[tU[12]] = tU[0], UU[tU[2]][tU[0]] * tU[45] + (UU[tU[2]][tU[2]] < tU[2] ? tU[44] | UU[tU[2]][tU[2]] : UU[tU[2]][tU[2]])
+           }
+ 
+           function zU(...UU) {
+             switch (UU[tU[12]] = tU[0], ((UU[tU[2]] & tU[44]) !== tU[2]) * tU[0] + (UU[tU[2]] < tU[2]) * tU[20]) {
+               case tU[2]:
+                 return [UU[tU[2]] % tU[44], Math.trunc(UU[tU[2]] / tU[45])];
+               case tU[0]:
+                 return [UU[tU[2]] % tU[44] - tU[44], Math.trunc(UU[tU[2]] / tU[45]) + tU[0]];
+ ... (35 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L1157-L1159` → after: `L1114-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L1114-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/244.js#L1114-L1173) · [Before (L1157-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/244.js#L1157-L1159)

```diff
-   37585: MM => {
-     MM.exports = function(MM) {
-       return !(!MM || "string" === typeof MM) && (MM instanceof Array || Array.isArray(MM) || MM.length >= 0 && (MM.splice instanceof Function || Object.getOwnPropertyDescriptor(MM, MM.length - 1) && "String" !== MM.constructor.name))
+   38388: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => oU,
+       e: () => FU
+     });
+     var cU = zU(38394),
+       yU = zU(1974);
+     const QU = 2,
+       AU = 1,
+       FU = {
+         xE: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+ ... (44 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L4-L14` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L4-L10) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L4-L14)

```diff
-   37705: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => Pr,
-       f: () => lr,
-       g: () => mr,
-       j: () => Qr,
-       m: () => Hr,
-       p: () => Lr,
-       q: () => Er,
-       r: () => zr,
-       v: () => Jr
+   40906: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       getBlockFaces: () => NU,
+       getIngameIconUrl: () => aU,
+       getItemIconUrl: () => pU,
+       getItemTextureUrl: () => IU,
+       getParticleTextureUrl: () => tU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L16-L143` → after: `L12-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L12-L18) · [Before (L16-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L16-L143)

```diff
-     const OM = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
-       SM = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
-       jM = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
-       aM = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
-       PM = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
-       nM = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
-       QM = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
-       zM = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
-       LM = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
-       mM = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
-       HM = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
-       hM = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
-       JM = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
-       dM = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
-       yM = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
-       lM = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
- ... (112 more removed lines; see GitHub link above)
+     var cU = zU(4895),
+       yU = zU(37756),
+       QU = zU(9775),
+       AU = zU(3526);
+     const FU = new Set,
+       oU = new Set;
+     let DU = null;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L146-L148` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L21-L23) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L146-L148)

```diff
-       const rM = ar.get(MM);
-       if (void 0 === rM) throw new Error(`Invalid sound name ${MM} (not in any sound group)`);
-       return rM
+       FU.has(UU) || (FU.add(UU), oU.add(UU), DU ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${oU.size} names`, [...oU]), oU.clear(), DU = null
+       }), 1e3))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L151-L152` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L26-L31) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L151-L152)

```diff
-     function Qr(MM) {
-       return nr(MM).group
+     function YU(UU, XU) {
+       try {
+         return (0, QU.getDefaultTexture)(UU, XU).url
+       } catch {
+         return EU(UU), null
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L156` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L35-L49) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L156)

```diff
-       return nr(MM).file
+       var XU, zU;
+       const QU = yU.n[UU];
+       if (!QU || QU.itemTexture || !QU.textureInfo) return null;
+       const {
+         textureInfo: FU,
+         texturePerSide: oU
+       } = QU, DU = UU => {
+         return "string" === typeof(XU = oU && Array.isArray(FU) ? FU[oU[UU]] : FU) ? YU(XU, AU.j.BLOCK) : XU && "object" === typeof XU && "animTextures" in XU ? YU((0, cU.i)(XU), AU.j.BLOCK) : null;
+         var XU
+       }, EU = DU(2);
+       return EU ? {
+         top: EU,
+         left: null !== (XU = DU(4)) && void 0 !== XU ? XU : EU,
+         right: null !== (zU = DU(0)) && void 0 !== zU ? zU : EU
+       } : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L160-L164` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L53-L55) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L160-L164)

```diff
-       return ar.has(MM)
-     }
- 
-     function mr(MM, rM) {
-       return Hr(MM).includes(rM)
+       var XU;
+       const zU = yU.n[UU];
+       return YU(null !== (XU = null === zU || void 0 === zU ? void 0 : zU.itemTexture) && void 0 !== XU ? XU : "string" === typeof(null === zU || void 0 === zU ? void 0 : zU.textureInfo) ? zU.textureInfo : UU, AU.j.ITEM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L168-L169` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L59-L60) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L168-L169)

```diff
-       if (!(MM in jr)) throw new Error(`Invalid sound group ${MM}`);
-       return Object.keys(jr[MM].sounds)
+       var XU, zU;
+       return yU.n[UU] ? null !== (XU = null === (zU = NU(UU)) || void 0 === zU ? void 0 : zU.top) && void 0 !== XU ? XU : IU(UU) : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L174-L175` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L64) · [Before (L174-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L174-L175)

```diff
-       let rM = hr.get(MM);
-       return void 0 === rM && (rM = [...ar.keys()].filter((rM => rM.startsWith(MM))), hr.set(MM, rM)), rM
+       return YU(UU, AU.j.ICON)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L181-L189` → after: `L68-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L68-L71) · [Before (L181-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L181-L189)

```diff
-       const rM = Jr(MM),
-         iM = rM[Math.floor(Math.random() * rM.length)];
-       if (rM.length > 1) {
-         const rM = function(MM, rM) {
-           const iM = `${rM}\n${MM}`;
-           let OM = yr.get(iM);
-           return void 0 === OM && (OM = Jr(MM).filter((MM => ar.get(MM).group === rM)), yr.set(iM, OM)), OM
-         }(MM, ar.get(iM).group);
-         rM.length > 1 ? dr.set(iM, rM) : dr.delete(iM)
+       try {
+         return zU(3690)(`./${UU}.png`)
+       } catch {
+         return EU(UU), null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L198` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L75) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L198)

```diff
-   37713: (MM, rM, iM) => {
+   37794: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L200-L201` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L77) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L200-L201)

```diff
-       e: () => OM,
-       i: () => jM
+       b: () => cU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L203-L212` → after: `L79-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L79-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L79-L195) · [Before (L203-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L203-L212)

```diff
-     const OM = "__default",
-       SM = ["end", "stop", "playerror"];
- 
-     function jM(MM, rM) {
-       const iM = () => {
-         if (function(MM) {
-             return "loaded" === MM.state() && !MM.playing() && !MM._playLock
-           }(MM)) {
-           for (const rM of SM) MM.off(rM, iM);
-           MM.unload(), null === rM || void 0 === rM || rM()
+     const cU = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (101 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L214-L216` → after: `L197-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L197-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/245.js#L197-L236) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/245.js#L214-L216)

```diff
-       };
-       for (const OM of SM) MM.on(OM, iM);
-       iM()
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
+         }
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+ ... (24 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/246.js#L4)

```diff
-   40765: (MM, rM, iM) => {
+   37825: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L7-L17` → after: `L7-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L7-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/246.js#L7-L161) · [Before (L7-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/246.js#L7-L17)

```diff
-       f: () => SM
-     });
-     const OM = "The world isn't loaded, so no blocks can be seen.",
-       SM = "The world isn't loaded, so nothing in it can be seen."
-   },
-   40140: (MM, rM, iM) => {
-     function OM(MM) {
-       return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
-     }
-     iM.d(rM, {
-       d: () => OM
+       d: () => cU,
+       h: () => yU
+     });
+     const cU = 1 / 2.2,
+       yU = 2.2;
+     Math.sqrt(5);
+     let QU = .001
+   },
+   37855: (UU, XU, zU) => {
+     function cU(UU) {
+       return parseInt(UU.toString().replace(/\W/g, ""))
+     }
+ 
+     function yU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(UU - XU) <= zU
+ ... (139 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L20` → after: `L164-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L164-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/246.js#L164-L186) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/246.js#L20)

```diff
-   37767: (MM, rM, iM) => {
+   37814: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       Matrix: () => cU.e,
+       Quaternion: () => cU.f,
+       RegisterMathVector: () => cU.h,
+       TmpVectors: () => cU.l,
+       Vector2: () => cU.m,
+       Sp: () => cU.q,
+       Vector4: () => cU.t
+     });
+     var cU = zU(37819);
+     (0, cU.h)()
+   },
+   37827: (UU, XU, zU) => {
+     function cU(UU, XU) {
+       const zU = [];
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L23-L35` → after: `L189-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L189-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/246.js#L189-L215) · [Before (L23-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/246.js#L23-L35)

```diff
-       f: () => SM
-     });
-     let OM = () => null;
- 
-     function SM(MM) {
-       OM = MM
-     }
- 
-     function jM(MM, rM) {
-       return OM(MM, rM)
-     }
-   },
-   41691: (MM, rM, iM) => {
+       f: () => yU,
+       i: () => AU
+     });
+     const QU = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function AU(UU, XU) {
+       const zU = QU.map((zU => function(UU, XU, zU) {
+         const cU = UU[XU];
+         if ("function" !== typeof cU) return null;
+         const yU = function() {
+           const cU = UU.length,
+             QU = yU.previous.apply(UU, arguments);
+           return zU(XU, cU), QU
+         };
+         return cU.next = yU, yU.previous = cU, UU[XU] = yU, () => {
+           const zU = yU.previous;
+ ... (11 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L198-L855` → after: `L220-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L220-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/246.js#L220-L227) · [Before (L198-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/246.js#L198-L855)

```diff
-     var OM = iM(41669),
-       SM = iM(5188),
-       jM = iM(41677);
- 
-     function aM() {
-       var MM;
-       const rM = null === (MM = (0, jM.e)()) || void 0 === MM ? void 0 : MM.api.localId;
-       return void 0 === rM || rM === OM.Nc ? null : String(rM)
-     }
- 
-     function PM(MM) {
-       const rM = (0, jM.e)();
-       if (null !== rM) return MM(rM);
-       let iM = null;
-       const OM = (0, SM.x)((() => {
-         const rM = (0, jM.e)();
- ... (642 more removed lines; see GitHub link above)
+     const cU = {};
+ 
+     function yU(UU, XU) {
+       cU[UU] = XU
+     }
+ 
+     function QU(UU) {
+       return cU[UU]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/247.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/247.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L2)

```diff
- export const ids = [247];
+ export const ids = [247, 254];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L4-L7` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L5-L25) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L4-L7)

```diff
-   37852: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => GM,
-       d: () => UM
+   39080: UU => {
+     UU.exports = function(UU) {
+       return null != UU && null != UU.constructor && "function" === typeof UU.constructor.isBuffer && UU.constructor.isBuffer(UU)
+     }
+   },
+   39062: (UU, XU, zU) => {
+     var cU = zU(39067),
+       yU = zU(39074),
+       QU = zU(39080);
+     zU.g.__TYPEDARRAY_POOL || (zU.g.__TYPEDARRAY_POOL = {
+       UINT8: yU([32, 0]),
+       UINT16: yU([32, 0]),
+       UINT32: yU([32, 0]),
+       INT8: yU([32, 0]),
+       INT16: yU([32, 0]),
+       INT32: yU([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L9-L31` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L27-L31) · [Before (L9-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L9-L31)

```diff
-     var OM = iM(4589),
-       SM = iM(1516),
-       jM = iM(44),
-       aM = iM(6944),
-       PM = iM(4581),
-       nM = iM(1313),
-       QM = iM(2039),
-       zM = iM(2006),
-       LM = iM(1520),
-       mM = iM(1188),
-       HM = iM(37855),
-       hM = iM(1116),
-       JM = iM.n(hM),
-       dM = iM(1360),
-       yM = iM(1398),
-       lM = iM(1287),
- ... (7 more removed lines; see GitHub link above)
+     var AU = "undefined" !== typeof Uint8ClampedArray,
+       FU = zU.g.__TYPEDARRAY_POOL;
+     FU.UINT8C || (FU.UINT8C = yU([32, 0])), FU.BUFFER || (FU.BUFFER = yU([32, 0]));
+     var oU = FU.DATA,
+       DU = FU.BUFFER;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L33-L35` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L33-L37) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L33-L35)

```diff
-       function kM() {
-         const MM = null !== hM && void 0 !== hM ? hM : "Rested Speed";
-         QM.gameBridge.send("wakeUp", gM ? MM : null), DM.current = null, iM(!1), GM(null), bM(1), tM(!1), uM(!1)
+     function EU(UU) {
+       if (UU) {
+         var XU = UU.length || UU.byteLength,
+           zU = cU.log2(XU);
+         oU[zU].push(UU)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L38-L159` → after: `L41-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L41-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L41-L133) · [Before (L38-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L38-L159)

```diff
-       function ZM() {
-         return !wM && (kM(), !0)
-       }
-       return (0, SM.d)("PlayerPhysicsTypeUpdate", (MM => {
-         MM !== DM.current && (DM.current = MM, MM === aM.n.SLEEPING ? (WM.current || (RM.current = QM.gameBridge.lookup("cameraZoom", null), WM.current = !0), pM.current = !0, QM.gameBridge.send("setCameraZoom", 3), iM(!0), bM(function() {
-           for (const MM of QM.gameBridge.lookup("blocksStandingOn", null)) {
-             if (HM.c.leafBeds.includes(MM)) return console.log(`Found leaf bed: ${MM}`), 1;
-             if (HM.c.woolBeds.includes(MM)) return console.log(`Found woold bed: ${MM}`), 2;
-             if (HM.c.strongBeds.includes(MM)) return console.log(`Found strong bed ${MM}`), 3
-           }
-           return 1
-         }())) : (WM.current = !1, iM(!1), GM(null), bM(1)))
-       })), (0, jM.useEffect)((() => () => {
-         (0, nM.v)(UM)
-       }), []), (0, jM.useEffect)((() => {
-         rM ? (0, nM.z)(UM) : ((0, nM.v)(UM), pM.current && (QM.gameBridge.send("setCameraZoom", RM.current), pM.current = !1))
- ... (106 more removed lines; see GitHub link above)
+     function YU(UU) {
+       UU = cU.nextPow2(UU);
+       var XU = cU.log2(UU),
+         zU = oU[XU];
+       return zU.length > 0 ? zU.pop() : new ArrayBuffer(UU)
+     }
+ 
+     function NU(UU) {
+       return new Uint8Array(YU(UU), 0, UU)
+     }
+ 
+     function IU(UU) {
+       return new Uint16Array(YU(2 * UU), 0, UU)
+     }
+ 
+     function pU(UU) {
+ ... (77 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L161-L190` → after: `L135-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L135-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L135-L172) · [Before (L161-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L161-L190)

```diff
-   41656: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => qM
-     });
-     var OM = iM(19),
-       SM = iM(22),
-       jM = iM(4613),
-       aM = iM(313),
-       PM = iM(1717),
-       nM = iM(8731),
-       QM = iM(4633),
-       zM = iM(9315),
-       LM = iM(8776),
-       mM = iM(8743),
-       HM = iM(8785),
-       hM = iM(1464),
- ... (14 more removed lines; see GitHub link above)
+   39067: (UU, XU) => {
+     function zU(UU) {
+       var XU = 32;
+       return (UU &= -UU) && XU--, 65535 & UU && (XU -= 16), 16711935 & UU && (XU -= 8), 252645135 & UU && (XU -= 4), 858993459 & UU && (XU -= 2), 1431655765 & UU && (XU -= 1), XU
+     }
+     XU.INT_BITS = 32, XU.INT_MAX = 2147483647, XU.INT_MIN = -1 << 31, XU.sign = function(UU) {
+       return (UU > 0) - (UU < 0)
+     }, XU.abs = function(UU) {
+       var XU = UU >> 31;
+       return (UU ^ XU) - XU
+     }, XU.min = function(UU, XU) {
+       return XU ^ (UU ^ XU) & -(UU < XU)
+     }, XU.max = function(UU, XU) {
+       return UU ^ (UU ^ XU) & -(UU < XU)
+     }, XU.isPow2 = function(UU) {
+       return !(UU & UU - 1) && !!UU
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L192-L193` → after: `L174-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L174-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L174-L201) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L192-L193)

```diff
-       update(MM, rM) {
-         return MM ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= rM, rM - this.lostAtMs >= 250)
+     }(cU), XU.reverse = function(UU) {
+       return cU[255 & UU] << 24 | cU[UU >>> 8 & 255] << 16 | cU[UU >>> 16 & 255] << 8 | cU[UU >>> 24 & 255]
+     }, XU.interleave2 = function(UU, XU) {
+       return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (XU = 1431655765 & ((XU = 858993459 & ((XU = 252645135 & ((XU = 16711935 & ((XU &= 65535) | XU << 8)) | XU << 4)) | XU << 2)) | … [truncated]
+     }, XU.deinterleave2 = function(UU, XU) {
+       return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> XU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
+     }, XU.interleave3 = function(UU, XU, zU) {
+       return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (XU = 1227133513 & ((XU = 3272356035 & ((XU = 251719695 & ((XU = 4278190335 & ((XU &= 1023) | XU << 16)) | XU << 8)) | X … [truncated]
+     }, XU.deinterleave3 = function(UU, XU) {
+       return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> XU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
+     }, XU.nextCombination = function(UU) {
+       var XU = UU | UU - 1;
+       return XU + 1 | (~XU & -~XU) - 1 >>> zU(UU) + 1
+     }
+   },
+   39056: (UU, XU, zU) => {
+ ... (12 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L195-L196` → after: `L203-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L203-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L203-L221) · [Before (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L195-L196)

```diff
-       reset() {
-         this.lostAtMs = null
+       var yU
+     };
+     var cU, yU = zU(39062),
+       QU = zU(39082),
+       AU = zU(39092);
+ 
+     function FU(UU, XU) {
+       for (var zU = 0; zU < UU; ++zU)
+         if (!(XU[zU] <= XU[zU + UU])) return !0;
+       return !1
+     }
+ 
+     function oU(UU, XU, zU, cU) {
+       for (var yU = 0, QU = 0, AU = 0, oU = UU.length; AU < oU; ++AU) {
+         var DU = UU[AU];
+         if (!FU(XU, DU)) {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L199-L201` → after: `L225-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L225-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L225-L244) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L199-L201)

```diff
-     class gM {
-       constructor(MM, rM) {
-         this.press = MM, this.release = rM, this.downAtMs = null, this.token = null, this.latched = !1
+ 
+     function DU(UU, XU, zU, cU) {
+       var FU = UU.length,
+         DU = XU.length;
+       if (!(FU <= 0 || DU <= 0)) {
+         var EU = UU[0].length >>> 1;
+         if (!(EU <= 0)) {
+           var YU, NU = yU.mallocDouble(2 * EU * FU),
+             IU = yU.mallocInt32(FU);
+           if ((FU = oU(UU, EU, NU, IU)) > 0) {
+             if (1 === EU && cU) QU.init(FU), YU = QU.sweepComplete(EU, zU, 0, FU, NU, IU, 0, FU, NU, IU);
+             else {
+               var pU = yU.mallocDouble(2 * EU * DU),
+                 aU = yU.mallocInt32(DU);
+               (DU = oU(XU, EU, pU, aU)) > 0 && (QU.init(FU + DU), YU = 1 === EU ? QU.sweepBipartite(EU, zU, 0, FU, NU, IU, 0, DU, pU, aU) : AU(EU, zU, cU, FU, NU, IU, DU, pU, aU), yU.free(pU), yU.free(aU))
+             }
+ ... (4 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L203-L205` → after: `L246-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L246-L283) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L203-L205)

```diff
-       update(MM, rM, iM, OM) {
-         if (MM && null === this.downAtMs) return this.downAtMs = iM, this.latched = OM, void(this.token = this.press(OM));
-         null !== this.downAtMs && (this.latched ? MM && this.end() : !rM && iM - this.downAtMs >= 40 && this.end())
+     }
+ 
+     function EU(UU, XU) {
+       cU.push([UU, XU])
+     }
+   },
+   39095: (UU, XU) => {
+     var zU = "d",
+       cU = "ax",
+       yU = "fp",
+       QU = "es",
+       AU = "rs",
+       FU = "re",
+       oU = "rb",
+       DU = "bs",
+       EU = "be",
+ ... (22 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L207-L208` → after: `L285-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L285-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L285-L434) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L207-L208)

```diff
-       isLatched() {
-         return null !== this.downAtMs && this.latched
+       FU.push("if(re-rs>be-bs){"), UU ? (oU(!0, !1), FU.push("}else{"), oU(!1, !1)) : (FU.push("if(fp){"), oU(!0, !0), FU.push("}else{"), oU(!0, !1), FU.push("}}else{if(fp){"), oU(!1, !0), FU.push("}else{"), oU(!1, !1), FU.push("}")), FU.push("}}return " + XU);
+       var DU = cU.join("") + FU.join("");
+       return new Function(DU)()
+     }
+     XU.partial = IU(!1), XU.full = IU(!0)
+   },
+   39092: (UU, XU, zU) => {
+     UU.exports = function(UU, XU, zU, QU, EU, eU, CU, wU, qU) {
+       ! function(UU, XU) {
+         var zU = 8 * yU.log2(XU + 1) * (UU + 1) | 0,
+           QU = yU.nextPow2(BU * zU);
+         RU.length < QU && (cU.free(RU), RU = cU.mallocInt32(QU));
+         var AU = yU.nextPow2(ZU * zU);
+         PU.length < AU && (cU.free(PU), PU = cU.mallocDouble(AU))
+       }(UU, QU + CU);
+       var OU, SU = 0,
+ ... (134 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L210-L211` → after: `L436-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L436-L477) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L210-L211)

```diff
-       unlatch() {
-         this.latched = !1
+     }
+   },
+   39099: (UU, XU, zU) => {
+     UU.exports = function(UU, XU, zU, AU, FU, oU) {
+       if (AU <= zU + 1) return zU;
+       var DU = zU,
+         EU = AU,
+         YU = AU + zU >>> 1,
+         NU = 2 * UU,
+         IU = YU,
+         pU = FU[NU * YU + XU];
+       for (; DU < EU;) {
+         if (EU - DU < yU) {
+           QU(UU, XU, DU, EU, FU, oU), pU = FU[NU * YU + XU];
+           break
+         }
+ ... (26 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L213-L214` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L479-L521) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L213-L214)

```diff
-       cancel() {
-         null !== this.downAtMs && this.end()
+       return cU(UU, XU, zU, YU, FU, oU, FU[NU * YU + XU])
+     };
+     var cU = zU(39106)("lo<p0", ["p0"]),
+       yU = 8;
+ 
+     function QU(UU, XU, zU, cU, yU, QU) {
+       for (var AU = 2 * UU, FU = AU * (zU + 1) + XU, oU = zU + 1; oU < cU; ++oU, FU += AU)
+         for (var DU = yU[FU], EU = oU, YU = AU * (oU - 1); EU > zU && yU[YU + XU] > DU; --EU, YU -= AU) {
+           for (var NU = YU, IU = YU + AU, pU = 0; pU < AU; ++pU, ++NU, ++IU) {
+             var aU = yU[NU];
+             yU[NU] = yU[IU], yU[IU] = aU
+           }
+           var tU = QU[EU];
+           QU[EU] = QU[EU - 1], QU[EU - 1] = tU
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L216-L218` → after: `L523-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L523-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L523-L579) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L216-L218)

```diff
-       end() {
-         const MM = this.token;
-         this.downAtMs = null, this.token = null, this.latched = !1, this.release(MM)
+     }
+ 
+     function cU(UU, XU, zU) {
+       XU *= 2;
+       var cU = zU[UU *= 2],
+         yU = zU[UU + 1];
+       zU[UU] = zU[XU], zU[UU + 1] = zU[XU + 1], zU[XU] = cU, zU[XU + 1] = yU
+     }
+ 
+     function yU(UU, XU, zU) {
+       XU *= 2, zU[UU *= 2] = zU[XU], zU[UU + 1] = zU[XU + 1]
+     }
+ 
+     function QU(UU, XU, zU, cU) {
+       XU *= 2, zU *= 2;
+       var yU = cU[UU *= 2],
+ ... (41 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L221-L223` → after: `L594-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L594-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L594-L641) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L221-L223)

```diff
-     const uM = {
-         kind: "specialAction",
-         action: "SpecialAction2"
+   },
+   39082: (UU, XU, zU) => {
+     UU.exports = {
+       init: function(UU) {
+         var XU = yU.nextPow2(UU);
+         oU.length < XU && (cU.free(oU), oU = cU.mallocInt32(XU));
+         DU.length < XU && (cU.free(DU), DU = cU.mallocInt32(XU));
+         EU.length < XU && (cU.free(EU), EU = cU.mallocInt32(XU));
+         YU.length < XU && (cU.free(YU), YU = cU.mallocInt32(XU));
+         NU.length < XU && (cU.free(NU), NU = cU.mallocInt32(XU));
+         IU.length < XU && (cU.free(IU), IU = cU.mallocInt32(XU));
+         var zU = 8 * XU;
+         pU.length < zU && (cU.free(pU), pU = cU.mallocDouble(zU))
+       },
+       sweepBipartite: function(UU, XU, zU, cU, yU, FU, NU, IU, gU, kU) {
+         for (var GU = 0, BU = 2 * UU, ZU = UU - 1, RU = BU - 1, PU = zU; PU < cU; ++PU) {
+ ... (32 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L225-L241` → after: `L643-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L643-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L643-L668) · [Before (L225-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L225-L241)

```diff
-       RM = MM => {
-         let rM = null;
-         const iM = new wM.c,
-           OM = () => {
-             rM && (((MM, rM, iM) => {
-               switch (iM.kind) {
-                 case "reload":
-                   return void rM.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void rM.specialActionUp(iM.action);
-                 case "customButton":
-                   return void GM.gameBridge.send("pressCustomButton", {
-                     id: iM.id,
-                     down: !1
-                   });
-                 case "touchButton":
- ... (1 more removed lines; see GitHub link above)
+       sweepComplete: function(UU, XU, zU, cU, yU, AU, FU, gU, kU, GU) {
+         for (var BU = 0, ZU = 2 * UU, RU = UU - 1, PU = ZU - 1, WU = zU; WU < cU; ++WU) {
+           var dU = AU[WU] + 1 << 1,
+             LU = ZU * WU;
+           pU[BU++] = yU[LU + RU], pU[BU++] = -dU, pU[BU++] = yU[LU + PU], pU[BU++] = dU
+         }
+         for (WU = FU; WU < gU; ++WU) {
+           dU = GU[WU] + 1 << 1;
+           var eU = ZU * WU;
+           pU[BU++] = kU[eU + RU], pU[BU++] = 1 | -dU, pU[BU++] = kU[eU + PU], pU[BU++] = 1 | dU
+         }
+         var CU = BU >>> 1;
+         QU(pU, CU);
+         var wU = 0,
+           qU = 0,
+           OU = 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L243-L263` → after: `L670-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L670-L673) · [Before (L243-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L243-L263)

```diff
-             })(MM, rM.bodies, rM.action), rM = null)
-           },
-           jM = (iM, SM, jM, aM) => {
-             OM(), rM = {
-               action: SM,
-               bodies: iM,
-               heldBy: jM,
-               atMs: aM
-             }, ((MM, rM, iM) => {
-               switch (iM.kind) {
-                 case "reload":
-                   return rM.reloadGun(), void rM.specialActionDown("SpecialAction1");
-                 case "specialAction":
-                   return void rM.specialActionDown(iM.action);
-                 case "customButton":
-                   return void GM.gameBridge.send("pressCustomButton", {
- ... (5 more removed lines; see GitHub link above)
+             if (1 !== rU)
+               for (fU = 0; fU < qU; ++fU) {
+                 var iU;
+                 if (void 0 !== (iU = XU(EU[fU], uU))) return iU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L265-L286` → after: `L675-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L675-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L675-L678) · [Before (L265-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L265-L286)

```diff
-             })(MM, iM, SM)
-           };
-         return {
-           update: (aM, PM, QM, zM) => {
-             var mM;
-             const HM = (0, eM.i)(MM.contextActionInputs()),
-               hM = null !== (mM = HM[0]) && void 0 !== mM ? mM : uM;
-             (0, bM.d)((0, eM.f)(hM) ? hM : null);
-             const JM = (0, eM.c)(HM);
-             (0, bM.g)(JM);
-             const dM = (0, nM.m)("actionButton");
-             if (JM) {
-               const MM = iM.update(PM.wasPressed(dM), PM.isHeld(dM), QM, zM);
-               "tap" === MM ? jM(aM, hM, [dM], QM) : "hold" === MM && (LM.d.consumeButton(dM), SM.i.Tz(UM.l, HM))
-             } else iM.release(), PM.wasPressed(dM) && jM(aM, hM, [dM], QM);
-             rM && QM - rM.atMs >= 40 && !rM.heldBy.some((MM => (0, CM.J)(PM.frame.values, MM))) && OM()
- ... (6 more removed lines; see GitHub link above)
+             0 === rU ? tU(oU, DU, wU++, uU) : 1 === rU ? tU(EU, YU, qU++, uU) : 2 === rU && tU(NU, IU, OU++, uU)
+           } else {
+             uU = (SU >> 1) - 1;
+             0 === rU ? aU(oU, DU, wU--, uU) : 1 === rU ? aU(EU, YU, qU--, uU) : 2 === rU && aU(NU, IU, OU--, uU)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L323-L449` → after: `L682-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L682-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L682-L721) · [Before (L323-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L323-L449)

```diff
-       qM = MM => {
-         const rM = {
-           x: 0,
-           y: 0,
-           magnitude: 0,
-           headingOffset: 0,
-           jumpHeld: !1,
-           jumpPressed: !1,
-           running: !1,
-           sprintHeld: !1
-         };
-         let iM = KM;
-         const zM = new fM.c,
-           GM = SM.i.subscribe("appManagerUpdated|activeInputDevice", (rM => {
-             MM.deviceChanged(rM)
-           }));
- ... (111 more removed lines; see GitHub link above)
+       scanBipartite: function(UU, XU, zU, cU, yU, FU, EU, YU, NU, IU, gU, kU) {
+         var GU = 0,
+           BU = 2 * UU,
+           ZU = XU,
+           RU = XU + UU,
+           PU = 1,
+           WU = 1;
+         cU ? WU = AU : PU = AU;
+         for (var dU = yU; dU < FU; ++dU) {
+           var LU = dU + PU,
+             eU = BU * dU;
+           pU[GU++] = EU[eU + ZU], pU[GU++] = -LU, pU[GU++] = EU[eU + RU], pU[GU++] = LU
+         }
+         for (dU = NU; dU < IU; ++dU) {
+           LU = dU + WU;
+           var CU = BU * dU;
+ ... (24 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L474-L487` → after: `L724-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L724-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L724-L761) · [Before (L474-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L474-L487)

```diff
-           }),
-           lr = (0, WM.d)(MM),
-           Er = (() => {
-             const MM = SM.i.subscribe(pM.c, (MM => {
-               !MM && (0, HM.g)() && "inGame" === OM.d.get("gameState") && SM.i.Tz("showBottomMessage", {
-                 message: [{
-                   translationKey: "controller:disconnected"
-                 }],
-                 timeoutLength: 3e3,
-                 type: "Warning"
-               })
-             }));
-             return () => {
-               SM.i.unsubscribe(MM)
+           } else aU(oU, DU, qU--, OU - PU)
+         }
+       },
+       scanComplete: function(UU, XU, zU, cU, yU, FU, DU, EU, YU, NU, IU) {
+         for (var aU = 0, tU = 2 * UU, gU = XU, kU = XU + UU, GU = cU; GU < yU; ++GU) {
+           var BU = GU + AU,
+             ZU = tU * GU;
+           pU[aU++] = FU[ZU + gU], pU[aU++] = -BU, pU[aU++] = FU[ZU + kU], pU[aU++] = BU
+         }
+         for (GU = EU; GU < YU; ++GU) {
+           BU = GU + 1;
+           var RU = tU * GU;
+           pU[aU++] = NU[RU + gU], pU[aU++] = -BU
+         }
+         var PU = aU >>> 1;
+         QU(pU, PU);
+ ... (22 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L489-L491` → after: `L763-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L763-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L763-L769) · [Before (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L489-L491)

```diff
-           })();
-         return () => {
-           Lr(), MM.uninstall(), (0, YM.g)(!1), (0, xM.f)(!1), SM.i.unsubscribe(GM), SM.i.unsubscribe(Mr), yr(), lr(), Er(), qM.uninstall()
+           } else {
+             for (BU = dU - AU, qU = WU - 1; qU >= 0; --qU)
+               if (oU[qU] === BU) {
+                 for (uU = qU + 1; uU < WU; ++uU) oU[uU - 1] = oU[uU];
+                 break
+               }-- WU
+           }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L495-L524` → after: `L796-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L796-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L796-L971) · [Before (L495-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L495-L524)

```diff
-   41652: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => hM,
-       d: () => dM,
-       h: () => HM
-     });
-     var OM = iM(1313),
-       SM = iM(4613),
-       jM = iM(9383),
-       aM = iM(37852),
-       PM = iM(1818),
-       nM = iM(1181),
-       QM = iM(8792),
-       zM = iM(9324),
-       LM = iM(9408);
-     const mM = {
- ... (14 more removed lines; see GitHub link above)
+   39074: UU => {
+     function XU(UU, zU, cU) {
+       var yU = 0 | UU[cU];
+       if (yU <= 0) return [];
+       var QU, AU = new Array(yU);
+       if (cU === UU.length - 1)
+         for (QU = 0; QU < yU; ++QU) AU[QU] = zU;
+       else
+         for (QU = 0; QU < yU; ++QU) AU[QU] = XU(UU, zU, cU + 1);
+       return AU
+     }
+     UU.exports = function(UU, zU) {
+       switch ("undefined" === typeof zU && (zU = 0), typeof UU) {
+         case "number":
+           if (UU > 0) return function(UU, XU) {
+             var zU, cU;
+ ... (160 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L528-L540` → after: `L993-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L993-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L993-L1004) · [Before (L528-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L528-L540)

```diff
-   41650: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => SM,
-       f: () => nM,
-       h: () => PM,
-       i: () => zM,
-       l: () => aM,
-       n: () => jM,
-       o: () => QM,
-       s: () => LM
-     });
-     var OM = iM(8723);
-     class SM {
+   39022: UU => {
+     function XU(UU, XU) {
+       var zU = UU._map[XU];
+       if (delete UU.hash[XU], delete UU._map[XU], zU === UU.list.length - 1) UU.list.pop(), UU._idList.pop();
+       else {
+         var cU = UU.list.pop();
+         UU.list[zU] = cU;
+         var yU = UU._idList.pop();
+         UU._idList[zU] = yU, UU._map[yU] = zU
+       }
+     }
+     UU.exports = class {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L542-L582` → after: `L1006-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1006-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1006-L1024) · [Before (L542-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L542-L582)

```diff
-         this.fullTiltSinceMs = null
-       }
-       update(MM, rM, iM) {
-         const SM = (0, OM.i)(MM, rM.lookDeadzone);
-         if (Math.hypot(SM.x, SM.y) < .9 || Math.abs(SM.x) < Math.abs(SM.y)) return this.fullTiltSinceMs = null, 1;
-         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = iM);
-         const jM = (aM = rM.lookSensitivityX, Math.min(1, 100 / aM));
-         var aM;
-         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (iM - this.fullTiltSinceMs - 250 * jM) / (200 * jM)))
-       }
-       reset() {
-         this.fullTiltSinceMs = null
-       }
-     }
-     const jM = (MM, rM, iM, SM, jM) => {
-         let aM = 1;
- ... (25 more removed lines; see GitHub link above)
+         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
+       }
+       add(UU, XU) {
+         if ("number" === typeof this._map[UU]) {
+           var zU = this._map[UU];
+           this.hash[UU] = XU, this.list[zU] = XU, this._idList[zU] = UU
+         } else this._map[UU] = this.list.length, this.hash[UU] = XU, this.list.push(XU), this._idList.push(UU)
+       }
+       remove(UU) {
+         var XU = this._map[UU];
+         this.hash[UU] = null, this.list[XU] = null, this._pendingRemovals.push(UU)
+       }
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
+       }
+       flush() {
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L584-L600` → after: `L1026-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1026-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1026-L1296) · [Before (L584-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L584-L600)

```diff
-       },
-       PM = (MM, rM) => rM ? {
-         move: MM.rightStick,
-         look: MM.leftStick
-       } : {
-         move: MM.leftStick,
-         look: MM.rightStick
-       },
-       nM = (MM, rM) => {
-         const iM = (0, OM.i)(MM, rM),
-           SM = Math.min(1, Math.hypot(iM.x, iM.y));
-         return {
-           magnitude: SM,
-           speed: Math.min(1, SM / .8),
-           headingOffset: 0 === SM ? 0 : Math.atan2(iM.x, -iM.y),
-           x: iM.x,
- ... (1 more removed lines; see GitHub link above)
+         this._pendingRemovals.length = 0
+       }
+     }
+   },
+   38801: (UU, XU, zU) => {
+     UU = zU.nmd(UU);
+     var cU = "__lodash_hash_undefined__",
+       yU = 9007199254740991,
+       QU = "[object Arguments]",
+       AU = "[object Boolean]",
+       FU = "[object Date]",
+       oU = "[object Function]",
+       DU = "[object GeneratorFunction]",
+       EU = "[object Map]",
+       YU = "[object Number]",
+       NU = "[object Object]",
+ ... (255 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L603-L627` → after: `L1418-L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1418-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1418-L1503) · [Before (L603-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L603-L627)

```diff
-       QM = (MM, rM) => {
-         let {
-           sprintPressed: iM,
-           magnitude: OM,
-           autoSprint: SM,
-           nowMs: jM
-         } = rM;
-         const aM = iM ? jM : MM.latchedAtMs,
-           PM = (MM => {
-             let {
-               running: rM,
-               magnitude: iM,
-               sprintPressed: OM,
-               autoSprint: SM
-             } = MM;
-             return !(iM < .5) && (!!OM || !!(SM && iM >= .9) || rM)
- ... (9 more removed lines; see GitHub link above)
+       sX = function(UU) {
+         return zX.call(UU)
+       };
+ 
+     function nX(UU, XU) {
+       return !!(XU = null == XU ? yU : XU) && ("number" == typeof UU || SU.test(UU)) && UU > -1 && UU % 1 == 0 && UU < XU
+     }
+ 
+     function mX(UU) {
+       var XU = UU && UU.constructor;
+       return UU === ("function" == typeof XU && XU.prototype || bU)
+     }
+ 
+     function lX(UU) {
+       if (null != UU) {
+         try {
+ ... (70 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L629-L637` → after: `L1505-L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1505-L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1505-L1551) · [Before (L629-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L629-L637)

```diff
-       },
-       zM = (MM, rM, iM) => iM && MM.gyroAiming && "button" === MM.gyroActivation && MM.gyroButton !== rM ? MM.gyroButton : null,
-       LM = (MM, rM) => rM ? {
-         ...MM,
-         isHeld: iM => iM !== rM && MM.isHeld(iM),
-         wasPressed: iM => iM !== rM && MM.wasPressed(iM),
-         wasReleased: iM => iM !== rM && MM.wasReleased(iM),
-         value: iM => iM === rM ? 0 : MM.value(iM)
-       } : MM
+         if (oU < yU || FU > QU) return 1 / 0;
+         FU > yU && (yU = FU), oU < QU && (QU = oU)
+       }
+       return yU > QU ? 1 / 0 : yU
+     }
+     UU.exports = function(UU, zU, cU, yU) {
+       var QU = XU(zU, cU, yU);
+       if (QU === 1 / 0) UU = null;
+       else {
+         UU = UU || [];
+         for (var AU = 0; AU < zU.length; AU++) UU[AU] = zU[AU] + cU[AU] * QU
+       }
+       return UU
+     }, UU.exports.distance = XU
+   },
+   38473: (UU, XU, zU) => {
+ ... (31 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L639` → after: `L1553-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1553-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1553-L1607) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L639)

```diff
-   41665: (MM, rM, iM) => {
+   38476: (UU, XU) => {
+     function zU(UU) {
+       var XU = 32;
+       return (UU &= -UU) && XU--, 65535 & UU && (XU -= 16), 16711935 & UU && (XU -= 8), 252645135 & UU && (XU -= 4), 858993459 & UU && (XU -= 2), 1431655765 & UU && (XU -= 1), XU
+     }
+     XU.INT_BITS = 32, XU.INT_MAX = 2147483647, XU.INT_MIN = -1 << 31, XU.sign = function(UU) {
+       return (UU > 0) - (UU < 0)
+     }, XU.abs = function(UU) {
+       var XU = UU >> 31;
+       return (UU ^ XU) - XU
+     }, XU.min = function(UU, XU) {
+       return XU ^ (UU ^ XU) & -(UU < XU)
+     }, XU.max = function(UU, XU) {
+       return UU ^ (UU ^ XU) & -(UU < XU)
+     }, XU.isPow2 = function(UU) {
+       return !(UU & UU - 1) && !!UU
+ ... (39 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L641-L642` → after: `L1609-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1609-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1609-L1610) · [Before (L641-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L641-L642)

```diff
-       c: () => SM,
-       e: () => OM
+       Color3: () => cU.b,
+       e: () => cU.e
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L644-L665` → after: `L1612-L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1612-L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1612-L1624) · [Before (L644-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L644-L665)

```diff
-     const OM = MM => {
-       let {
-         mode: rM,
-         sneakHeld: iM,
-         sneakPressed: OM,
-         sneakTogglePressed: SM,
-         descending: jM,
-         canCrouch: aM,
-         toggled: PM
-       } = MM;
-       return aM ? jM ? {
-         crouchHeld: iM,
-         toggled: !1
-       } : "hold" === rM ? {
-         crouchHeld: iM,
-         toggled: SM ? !PM : PM
- ... (6 more removed lines; see GitHub link above)
+     var cU = zU(37923);
+     (0, cU.f)()
+   },
+   38502: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => yU
+     });
+     var cU = zU(38505);
+     class yU {
+       static GetPlanes(UU) {
+         const XU = [];
+         for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
+         return yU.GetPlanesToRef(UU, XU), XU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L667` → after: `L1626-L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1626-L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1626-L1664) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L667)

```diff
-     };
+       static GetNearPlaneToRef(UU, XU) {
+         const zU = UU.m;
+         XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
+       }
+       static GetFarPlaneToRef(UU, XU) {
+         const zU = UU.m;
+         XU.normal.x = zU[3] - zU[2], XU.normal.y = zU[7] - zU[6], XU.normal.z = zU[11] - zU[10], XU.d = zU[15] - zU[14], XU.normalize()
+       }
+       static GetLeftPlaneToRef(UU, XU) {
+         const zU = UU.m;
+         XU.normal.x = zU[3] + zU[0], XU.normal.y = zU[7] + zU[4], XU.normal.z = zU[11] + zU[8], XU.d = zU[15] + zU[12], XU.normalize()
+       }
+       static GetRightPlaneToRef(UU, XU) {
+         const zU = UU.m;
+         XU.normal.x = zU[3] - zU[0], XU.normal.y = zU[7] - zU[4], XU.normal.z = zU[11] - zU[8], XU.d = zU[15] - zU[12], XU.normalize()
+       }
+ ... (23 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L669-L682` → after: `L1666-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1666-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1666-L1740) · [Before (L669-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L669-L682)

```diff
-       constructor() {
-         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
-       }
-       lostToPadScreen() {
-         this.regainPending = !0
-       }
-       filter(MM, rM) {
-         this.regainPending && (this.regainPending = !1, this.regainedAtMs = rM, this.graceEndsMs = rM + 500);
-         const iM = rM < this.graceEndsMs;
-         return iM && (MM.sneakPressed || MM.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, rM + 300))), MM.sneakHeld ? iM && MM.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
-           sneakHeld: MM.sneakHeld && !this.ignoringHeld,
-           sneakPressed: MM.sneakPressed && !this.ignoringHeld,
-           sneakTogglePressed: MM.sneakTogglePressed && !iM
-         }
+       constructor(UU, XU, zU, yU) {
+         this.normal = new cU.q(UU, XU, zU), this.d = yU
+       }
+       cyU() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let UU = this.normal.getHashCode();
+         return UU = 397 * UU ^ this.d, UU
+       }
+ ... (59 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L686-L687` → after: `L1745-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1745-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1745-L1756) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L686-L687)

```diff
-   41640: (MM, rM, iM) => {
-     iM(9451)
+   37814: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       Matrix: () => cU.e,
+       Quaternion: () => cU.f,
+       RegisterMathVector: () => cU.h,
+       TmpVectors: () => cU.l,
+       Vector2: () => cU.m,
+       Sp: () => cU.q,
+       Vector4: () => cU.t
+     });
+     var cU = zU(37819);
+     (0, cU.h)()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L689` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1758) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L689)

```diff
-   41642: (MM, rM, iM) => {
+   38845: (UU, XU, zU) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L691` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1760) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L691)

```diff
-       c: () => EM
+       d: () => cU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L693-L779` → after: `L1762-L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1762-L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/247.js#L1762-L1770) · [Before (L693-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/247.js#L693-L779)

```diff
-     var OM = iM(22),
-       SM = iM(9383),
-       jM = iM(9400),
-       aM = iM(8731),
-       PM = iM(8776),
-       nM = iM(8743),
-       QM = iM(41650),
-       zM = iM(41652),
-       LM = iM(8792),
-       mM = iM(8723),
-       HM = iM(9324),
-       hM = iM(9408);
-     const JM = [{
-         isOpen: SM.i,
-         openButton: () => (0, aM.m)("emoteWheel"),
-         aim: MM => {
- ... (71 more removed lines; see GitHub link above)
+     class cU {
+       constructor(UU, XU, zU, cU) {
+         this.x = UU, this.y = XU, this.width = zU, this.height = cU
+       }
+       toGlobal(UU, XU) {
+         return new cU(this.x * UU, this.y * XU, this.width * UU, this.height * XU)
+       }
+       toGlobalToRef(UU, XU, zU) {
+         return zU.x = this.x * UU, zU.y = this.y * XU, zU.width = this.width * UU, zU.height = this.height * XU, this
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 1. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L2)

```diff
- export const ids = [248];
+ export const ids = [248, 254, 258];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L4)

```diff
-   39471: (MM, rM, iM) => {
+   41323: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L6)

```diff
-       d: () => hM
+       d: () => AU,
+       h: () => FU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L8-L605` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L9-L58) · [Before (L8-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L8-L605)

```diff
-     var OM = iM(181),
-       SM = iM(38623);
-     const jM = 1.2,
-       aM = {
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         vz: .5,
- ... (582 more removed lines; see GitHub link above)
+     var cU = zU(39493),
+       yU = zU(41134),
+       QU = zU(41309),
+       AU = {};
+     class FU {
+       constructor(UU) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
+       }
+       add(UU) {
+         const XU = UU.getSimpleName();
+         this.attached[XU] ? cU.b.Warn("camera input of type " + XU + " already exists on camera") : (this.attached[XU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(t … [truncated]
+       }
+       remove(UU) {
+         for (const XU in this.attached) {
+           const zU = this.attached[XU];
+           if (zU === UU) return zU.detachControl(), zU.camera = null, delete this.attached[XU], void this.rebuildInputCheck()
+ ... (34 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L607` → after: `L60-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L60-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L60-L191) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L607)

```diff
-       };
+       }
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       }
+       serialize(UU) {
+         const XU = {};
+         for (const zU in this.attached) {
+           const UU = this.attached[zU],
+             cU = yU.b.Serialize(UU);
+           XU[UU.getClassName()] = cU
+         }
+         UU.inputsmgr = XU
+       }
+       parse(UU) {
+         const XU = UU.inputsmgr;
+         if (XU) {
+ ... (116 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L609-L610` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L193-L194) · [Before (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L609-L610)

```diff
-     function hM(MM) {
-       return HM[MM]
+     function NU() {
+       YU || (YU = !0, oU.e.AddNodeConstructor("Light_Type_3", ((UU, XU) => () => new EU(UU, QU.q.Zero(), XU))), (0, DU.h)("BABYLON.HemisphericLight", EU))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L613` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L197) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L613)

```diff
-   38005: (MM, rM, iM) => {
+   37919: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L615` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L199-L200) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L615)

```diff
-       e: () => OM
+       Color3: () => cU.b,
+       e: () => cU.e
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L617-L773` → after: `L202-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L202-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L202-L246) · [Before (L617-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L617-L773)

```diff
-     const OM = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
- ... (141 more removed lines; see GitHub link above)
+     var cU = zU(37923);
+     (0, cU.f)()
+   },
+   38502: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => yU
+     });
+     var cU = zU(38505);
+     class yU {
+       static GetPlanes(UU) {
+         const XU = [];
+         for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
+         return yU.GetPlanesToRef(UU, XU), XU
+       }
+       static GetNearPlaneToRef(UU, XU) {
+         const zU = UU.m;
+ ... (29 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L777` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L250) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L777)

```diff
-   38627: (MM, rM, iM) => {
+   38505: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L779` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L252) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L779)

```diff
-       b: () => aM
+       d: () => yU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L781-L800` → after: `L254-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L254-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L254-L364) · [Before (L781-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L781-L800)

```diff
-     var OM = iM(347),
-       SM = iM.n(OM),
-       jM = iM(2e3);
-     let aM;
-     var PM, nM, QM, zM, LM, mM, HM, hM, JM;
-     const dM = [2, 0, 1, 8, "c", "a", 9, 7, 5, 38, "d", 255, "length", "undefined", void 0, "e", 70, 71, 63, 6, "fromCodePoint", 12, "push", 3, null, 111, 18, "i", 91, 19, 8191, 88, 13, 14, 4, "b", 53, 116, 127, 128, 129, 130, 124, 125, 126, 131, 132, 133, 120, 121, 122, 123, 139 … [truncated]
- 
-     function yM(...MM) {
-       return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
-         for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = '1@8"=]$}/w4?3vaC+hHkLBm{|%YuI`ZVWje!5tAoE*nXpb6#dD;G.FlT>yQNJs&9K<2,fcU):Pxi7MRgr_z(0qO[^~S', MM[dM[0]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[0]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[-dM[9]] = dM[1], MM[dM[7]] = -dM … [truncated]
-           if (MM[dM[6]] = MM[dM[5]].indexOf(MM[dM[0]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
-             if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[6]];
-             else {
-               RM(MM[dM[7]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[-dM[9]], MM[-dM[9]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
-               do {
-                 RM(MM[dM[10]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[-dM[9]] -= dM[3])
- ... (4 more removed lines; see GitHub link above)
+     var cU = zU(37819);
+     class yU {
+       constructor(UU, XU, zU, yU) {
+         this.normal = new cU.q(UU, XU, zU), this.d = yU
+       }
+       cyU() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let UU = this.normal.getHashCode();
+ ... (95 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L803-L804` → after: `L377-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L377-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L377-L427) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L803-L804)

```diff
-     function lM(...MM) {
-       return MM[dM[12]] = dM[2], typeof zM !== dM[13] && zM ? (new zM).decode(new LM(MM[dM[1]])) : typeof mM !== dM[13] && mM ? mM.from(MM[dM[1]]).toString("utf-8") : JM(MM[dM[1]])
+     function oU(UU) {
+       let XU = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const zU = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         QU = [],
+         oU = UU.width || UU.size || 1,
+         DU = UU.height || UU.size || 1,
+         EU = UU.depth || UU.size || 1,
+         YU = UU.wrap || !1;
+       let NU = void 0 === UU.topBaseAt ? 1 : UU.topBaseAt,
+         IU = void 0 === UU.bottomBaseAt ? 0 : UU.bottomBaseAt;
+       NU = (NU + 4) % 4, IU = (IU + 4) % 4;
+       let pU = [2, 0, 3, 1][NU],
+         aU = [2, 0, 1, 3][IU],
+         tU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (YU) {
+         XU = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], tU = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+ ... (35 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L807-L808` → after: `L430-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L430-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L430-L435) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L807-L808)

```diff
-     function EM(...MM) {
-       if (MM[dM[12]] = dM[23], MM[dM[1]] === yM(109)) return MM[dM[2]] + MM[dM[0]]
+     function DU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const cU = new QU.b(UU, zU);
+       XU.sideOrientation = QU.b._GetDefaultSideOrientation(XU.sideOrientation), cU._originalBuilderSideOrientation = XU.sideOrientation;
+       return oU(XU).applyToMesh(cU, XU.updatable), cU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L811-L862` → after: `L457-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L457-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L457-L482) · [Before (L811-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L811-L862)

```diff
-     function UM() {}
-     RM(PM = {}, nM = ['?D{Phci}ew"g(NLEat;/', ".elVDf0|5ljg1u/k*E;:;z{`]KZ}S_qEd$g.L", 'P{IxB;F}%L=g%]xoMfbIKd#vky/uQD^Iz"KPgT+/X&PD$][mlbaVBNL8', 'K"3`SyF@~&0;_5J5~PG/Pg]_83:IX8', "!Gw:<Fw_JaM>Vzhuz$,]_71Q&H[`D:<{[<1uwJY56Ca:?)]VAx&.9Q63=wl", "*3.`DM*qMFcIzD%IclXxJM@FFKZg.+bYwfY … [truncated]
-       var MM, rM, iM, OM = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }];
-       RM(MM = void 0, rM = []);
-       try {
-         RM(MM = Object, rM[dM[22]]("".__proto__.constructor.name))
-       } catch (LM) {}
-       MM: for (iM = dM[1]; iM < OM[dM[12]]; iM++) try {
- ... (36 more removed lines; see GitHub link above)
+     function DU(UU) {
+       const XU = [],
+         zU = [],
+         cU = UU.lines,
+         yU = UU.colors,
+         AU = [];
+       let FU = 0;
+       for (let QU = 0; QU < cU.length; QU++) {
+         const UU = cU[QU];
+         for (let cU = 0; cU < UU.length; cU++) {
+           const {
+             x: oU,
+             y: DU,
+             z: EU
+           } = UU[cU];
+           if (zU.push(oU, DU, EU), yU) {
+ ... (10 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L864-L867` → after: `L484-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L484-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L484-L487) · [Before (L864-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L864-L867)

```diff
-         MM[dM[12]] = dM[23];
-         const iM = tM;
-         return SM()[rM(112) + rM(113)](iM, MM[dM[0]]), SM()[rM(114)](MM[dM[1]], iM, SM()[rM(115)](iM, MM[dM[2]]))
-       };
+       }
+       const oU = new QU.c;
+       return oU.indices = XU, oU.positions = zU, yU && (oU.colors = AU), oU
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L869-L870` → after: `L489-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L489-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L489-L507) · [Before (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L869-L870)

```diff
-     function RM() {
-       RM = function() {}
+     function EU(UU) {
+       const XU = UU.dashSize || 3,
+         zU = UU.gapSize || 1,
+         yU = UU.dashNb || 200,
+         AU = UU.points,
+         FU = [],
+         oU = [],
+         DU = cU.q.Zero();
+       let EU, YU, NU, IU = 0,
+         pU = 0;
+       for (NU = 0; NU < AU.length - 1; NU++) AU[NU + 1].subtractToRef(AU[NU], DU), IU += DU.length();
+       const aU = IU / yU,
+         tU = XU * aU / (XU + zU);
+       for (NU = 0; NU < AU.length - 1; NU++) {
+         AU[NU + 1].subtractToRef(AU[NU], DU), EU = Math.floor(DU.length() / aU), DU.normalize();
+         for (let UU = 0; UU < EU; UU++) YU = aU * UU, FU.push(AU[NU].x + YU * DU.x, AU[NU].y + YU * DU.y, AU[NU].z + YU * DU.z), FU.push(AU[NU].x + (YU + tU) * DU.x, AU[NU].y + (YU + tU) * DU.y, AU[NU].z + (YU + tU) * DU.z), oU.push(pU, pU + 1), pU += 2
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L908-L909` → after: `L510-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L510-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L510-L523) · [Before (L908-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L908-L909)

```diff
-         function JM(...MM) {
-           return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = hM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
+     function YU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const cU = XU.instance,
+         yU = XU.lines,
+         QU = XU.colors;
+       if (cU) {
+         const UU = cU.getVerticesData(FU.h.PositionKind);
+         let XU, zU;
+         QU && (XU = cU.getVerticesData(FU.h.ColorKind));
+         let AU = 0,
+           oU = 0;
+         for (let cU = 0; cU < yU.length; cU++) {
+           const FU = yU[cU];
+           for (let yU = 0; yU < FU.length; yU++) UU[AU] = FU[yU].x, UU[AU + 1] = FU[yU].y, UU[AU + 2] = FU[yU].z, QU && XU && (zU = QU[cU], XU[oU] = zU[yU].r, XU[oU + 1] = zU[yU].g, XU[oU + 2] = zU[yU].b, XU[oU + 3] = zU[yU].a, oU += 4), AU += 3
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L912-L935` → after: `L532-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L532-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L532-L543) · [Before (L912-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L912-L935)

```diff
-         function yM(...MM) {
-           function rM() {}
-           MM[dM[12]] = dM[1], RM(MM[dM[5]] = function(...MM) {
-             for (RM(MM[dM[12]] = dM[0], MM[dM[5]] = dM[1], MM[dM[62]] = dM[1], MM[dM[4]] = new rM(dM[1]), MM[dM[8]] = MM[dM[4]], MM[-dM[63]] = MM[dM[1]], MM[dM[7]] = MM[dM[2]]); MM[-dM[63]] !== dM[24] || MM[dM[7]] !== dM[24];) RM(MM[dM[62]] = (MM[-dM[63]] ? MM[-dM[63]].val : dM[1 … [truncated]
-             return MM[dM[5]] && (MM[dM[8]].next = new rM(MM[dM[5]])), MM[dM[4]].next
-           }, console.log(MM[dM[5]]))
-         }
-         JM(145) in UM && yM(), RM(uM(CM, GM, gM), uM(eM, gM, GM), SM()[JM(dM[63])](bM, gM, eM));
-         const tM = SM()[JM(147)](gM),
-           pM = SM()[JM(148)](GM, gM) / MM[dM[8]] / tM,
-           WM = Math[JM(dM[70])](pM, dM[1]) + dM[2];
-         if (MM[dM[8]] * MM[dM[8]] < SM()[dM[65]](eM)) {
-           function sM(...MM) {
-             for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = ':6`~9_aMGTELOgeWVuv/.>wxq,![YyfhzZj)8*nS?;DCU|l0"^FrB#R4QA%XP@i=s]o13$m}{H7pKIbt&(d5<NJc2k+', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[35]].length, MM[dM[34]] = [], MM[dM[67]] = dM[1], MM[dM[68]] = dM[1], MM[dM[60 … [truncated]
-               if (MM[dM[6]] = MM[dM[2]].indexOf(MM[dM[35]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
-                 if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
- ... (8 more removed lines; see GitHub link above)
+     function NU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const cU = XU.colors ? [XU.colors] : null;
+       return YU(UU, {
+         lines: [XU.points],
+         updatable: XU.updatable,
+         instance: XU.instance,
+         colors: cU,
+         useVertexAlpha: XU.useVertexAlpha,
+         material: XU.material
+       }, zU)
+     }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L937-L940` → after: `L545-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L545-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L545-L624) · [Before (L937-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L937-L940)

```diff
-           function DM(...MM) {
-             return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = sM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
-           }
-           SM()[DM(150)](GM, GM, eM, WM)
+     function IU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const QU = XU.points,
+         FU = XU.instance,
+         DU = XU.gapSize || 1,
+         YU = XU.dashSize || 3;
+       if (FU) {
+         const UU = UU => {
+           const XU = cU.q.Zero(),
+             zU = UU.length / 6;
+           let yU, AU, oU, DU, EU = 0,
+             YU = 0;
+           for (oU = 0; oU < QU.length - 1; oU++) QU[oU + 1].subtractToRef(QU[oU], XU), EU += XU.length();
+           const NU = EU / zU,
+             IU = FU._creationDataStorage.dashSize,
+             pU = IU * NU / (IU + FU._creationDataStorage.gapSize);
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L942-L961` → after: `L626-L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L626-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L626-L655) · [Before (L942-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L942-L961)

```diff
-         RM(MM[dM[69]] = (0, jM.B)(MM[dM[69]], 1, Math[JM(dM[70])](dM[2], Math[JM(151)](dM[1], -pM, dM[2] - tM / MM[dM[8]]))), SM()[JM(152)](GM, GM, bM))
-       }
-       const zM = wM;
-       RM(SM()[rM(153)](zM, GM, gM), zM[dM[2]] = dM[1], MM[dM[64]] = SM()[rM(154)](zM)), QM || (MM[dM[64]] *= MM[dM[69]]);
-       const LM = MM[dM[19]][rM(155) + rM(156) + rM(157)],
-         mM = LM ? Math[rM(158)](LM, MM[dM[64]]) : MM[dM[64]];
-       SM()[rM(159) + rM(160)](zM, zM);
-       const HM = MM[dM[7]] !== dM[24] && void 0 !== MM[dM[7]] ? MM[dM[7]] : MM[dM[19]][rM(161) + rM(162) + rM(163) + rM(164)];
-       if (mM > dM[1]) {
-         function kM(...MM) {
-           for (RM(MM[dM[12]] = dM[2], MM[dM[71]] = 'D4z|5u8(*F{n}h21?@&Lk!iPQ"Y)M+l7X3sSZvVEJ`9y>6%Tp~NmC.:BWU^AwxfcaoHKg,/q$e[dRIt#0G_O;<j]rb=', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[-dM[72]] = MM[dM[35]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[dM[19]] = dM[1], MM[dM[60 … [truncated]
-             if (MM[dM[6]] = MM[dM[71]].indexOf(MM[dM[35]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
-               if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
-               else {
-                 RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[60]] << MM[dM[19]], MM[dM[19]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
-                 do {
- ... (4 more removed lines; see GitHub link above)
+       }
+       getClassName() {
+         return "LinesMesh"
+       }
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
+       }
+       set material(UU) {
+         const XU = this.material;
+         if (XU === UU) return;
+         const zU = XU && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(UU), zU && XU?.dispose()
+       }
+       _setInternalMaterial(UU) {
+         this._setMaterial(UU), this.material && (this.material.fillMode = DU.c.LineListDrawMode, this.material.disableLighting = !0)
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L963-L965` → after: `L657-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L657-L673) · [Before (L963-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L963-L965)

```diff
- 
-         function ZM(...MM) {
-           return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = kM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
+         return this
+       }
+       _draw(UU, XU, zU) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const cU = this.nS().qp();
+         return this._unIndexed ? cU.drawArraysType(DU.c.LineListDrawMode, UU.verticesStart, UU.verticesCount, zU) : cU.drawElementsType(DU.c.LineListDrawMode, UU.indexStart, UU.indexCount, zU), this
+       }
+       dispose(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || XU) && this.material?.dispose(!1, !1, !0), super.dispose(UU)
+       }
+       clone(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           zU = arguments.length > 2 ? arguments[2] : void 0;
+         if (XU && void 0 === XU._addToSceneRootNodes) {
+           const zU = XU;
+ ... (1 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L967-L985` → after: `L675-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L675-L681) · [Before (L967-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L967-L985)

```diff
-         let oM = MM[dM[0]][rM(165) + rM(166)] * HM;
-         if (!QM) {
-           function YM(...MM) {
-             for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = '<toEDiTspPMUawhxRY81}KfyH0g;F!#?@JW"mnO`|NVLb%]X[4z>_^9=vde&({CZ5B3QAruj,2$q76k.)Sc+*Il~G/:', MM[-dM[73]] = "" + (MM[dM[1]] || ""), MM[dM[23]] = MM[-dM[73]].length, MM[dM[34]] = [], MM[dM[8]] = dM[1], MM[dM[19]] = dM[1], MM[dM[ … [truncated]
-               if (MM[dM[6]] = MM[dM[2]].indexOf(MM[-dM[73]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
-                 if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[6]];
-                 else {
-                   RM(MM[dM[7]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[dM[19]], MM[dM[19]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
-                   do {
-                     RM(MM[dM[34]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[19]] -= dM[3])
-                   } while (MM[dM[19]] > dM[7]);
-                   MM[dM[7]] = -dM[2]
-                 } return MM[dM[7]] > -dM[2] && MM[dM[34]].push((MM[dM[8]] | MM[dM[7]] << MM[dM[19]]) & dM[11]), lM(MM[dM[34]])
-           }
- 
-           function NM(...MM) {
- ... (3 more removed lines; see GitHub link above)
+         return new NU(UU, this.nS(), XU, this, zU)
+       }
+       createInstance(UU) {
+         const XU = new IU(UU, this);
+         if (this.XM) {
+           XU.XM = {};
+           for (const UU in this.XM) XU.XM[UU] = this.XM[UU]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L987-L1142` → after: `L683-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L683-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L683-L702) · [Before (L987-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L987-L1142)

```diff
-         let fM = MM[dM[0]][ZM(169) + ZM(170) + "ss"] * mM;
-         if (mM < .3) {
-           function AM(...MM) {
-             for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'NfjGAsoJBbeQpCanXiVITkPdRMOK[9/(>1=UxgEq_3h{uS*LDWl:Hr%t.2~4;cYmZ}7,|+68!z)0v"#<&^`5$w]y?@F', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[75]] = MM[dM[35]].length, MM[dM[34]] = [], MM[-dM[77]] = dM[1], MM[dM[78]] = dM[1], MM[dM[ … [truncated]
-               if (MM[dM[76]] = MM[dM[5]].indexOf(MM[dM[35]][MM[dM[66]]]), MM[dM[76]] !== -dM[2])
-                 if (MM[dM[74]] < dM[1]) MM[dM[74]] = MM[dM[76]];
-                 else {
-                   RM(MM[dM[74]] += MM[dM[76]] * dM[28], MM[-dM[77]] |= MM[dM[74]] << MM[dM[78]], MM[dM[78]] += (MM[dM[74]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
-                   do {
-                     RM(MM[dM[34]].push(MM[-dM[77]] & dM[11]), MM[-dM[77]] >>= dM[3], MM[dM[78]] -= dM[3])
-                   } while (MM[dM[78]] > dM[7]);
-                   MM[dM[74]] = -dM[2]
-                 } return MM[dM[74]] > -dM[2] && MM[dM[34]].push((MM[-dM[77]] | MM[dM[74]] << MM[dM[78]]) & dM[11]), lM(MM[dM[34]])
-           }
- 
-           function xM(...MM) {
- ... (140 more removed lines; see GitHub link above)
+         return XU
+       }
+       serialize(UU) {
+         super.serialize(UU), UU.color = this.color.cyU(), UU.alpha = this.alpha
+       }
+       static Parse(UU, XU) {
+         const zU = new NU(UU.name, XU);
+         return zU.color = QU.b.FromArray(UU.color), zU.alpha = UU.alpha, zU
+       }
+     }
+     NU.ForceGLSL = !1;
+     class IU extends oU.b {
+       constructor(UU, XU) {
+         super(UU, XU), this.intersectionThreshold = XU.intersectionThreshold
+       }
+       getClassName() {
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1144-L1161` → after: `L704-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L704-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L704-L745) · [Before (L1144-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L1144-L1161)

```diff
-               function eM(...MM) {
-                 return RM(MM[dM[12]] = dM[0], MM[dM[5]] = (MM[dM[1]] & dM[97]) + (MM[dM[2]] & dM[97]), MM[dM[35]] = (MM[dM[1]] >> dM[80]) + (MM[dM[2]] >> dM[80]) + (MM[dM[5]] >> dM[80])), MM[dM[35]] << dM[80] | MM[dM[5]] & dM[97]
-               }
-               return RM(MM[dM[12]] = dM[1], MM[dM[35]] = dM[1], MM[dM[4]] = ""), MM[dM[10]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168007 … [truncated]
-                 hex: function(MM) {
-                   return SM(function(MM) {
-                     return zM(CM(QM(MM), MM.length * dM[3]))
-                   }(aM(MM)))
-                 },
-                 b64: rM,
-                 any: iM,
-                 hex_hmac: function(...MM) {
-                   return MM[dM[12]] = dM[0], SM(OM(aM(MM[dM[1]]), aM(MM[dM[2]])))
-                 },
-                 b64_hmac: rM,
-                 any_hmac: iM
- ... (2 more removed lines; see GitHub link above)
+     function aU() {
+       pU || (pU = !0, FU.b._LinesMeshParser = (UU, XU) => NU.Parse(UU, XU))
+     }(cU = NU.prototype).enableEdgesRendering ?? (cU.enableEdgesRendering = (0, YU.k)("LinesMesh", "enableEdgesRendering")), (yU = IU.prototype).enableEdgesRendering ?? (yU.enableEdgesRendering = (0, YU.k)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   39486: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => QU
+     });
+     var cU = zU(39493);
+     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
+       ...UU
+     } : null : UU.clone(XU) : null;
+     class QU {
+       static DeepCopy(UU, XU, zU, QU) {
+         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const FU = function(UU) {
+ ... (26 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1170` → after: `L751-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L751-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L751-L762) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L1170)

```diff
-   38623: (MM, rM, iM) => {
+   38649: (UU, XU, zU) => {
+     function cU() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
+         const XU = 16 * Math.random() | 0;
+         return ("x" === UU ? XU : 3 & XU | 8).toString(16)
+       }))
+     }
+     zU.d(XU, {
+       d: () => cU
+     })
+   },
+   39493: (UU, XU, zU) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1172-L1173` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L764) · [Before (L1172-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L1172-L1173)

```diff
-       c: () => nM,
-       g: () => PM
+       b: () => cU
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1175-L1229` → after: `L766-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L766-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/248.js#L766-L817) · [Before (L1175-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/248.js#L1175-L1229)

```diff
-     var OM = iM(38627),
-       SM = iM(2e3);
-     const jM = 2,
-       aM = 1,
-       PM = {
-         vz: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
- ... (39 more removed lines; see GitHub link above)
+     class cU {
+       static _CheckLimit(UU, XU) {
+         let zU = cU._LogLimitOutputs[UU];
+         return zU ? zU.current++ : (zU = {
+           limit: XU,
+           current: 1
+         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
+       }
+       static _GenerateLimitMessage(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const zU = cU._LogLimitOutputs[UU];
+         if (!zU || !cU.MessageLimitReached) return;
+         const yU = this._Levels[XU];
+         zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
+       }
+       static _AddLogEntry(UU) {
+ ... (36 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L2)

```diff
- export const ids = [249];
+ export const ids = [249, 254];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L4` → after: `L4-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L4-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L4-L486) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L4)

```diff
-   40906: (MM, rM, iM) => {
+   44532: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(44458),
+       yU = zU(41108);
+     let QU = !1;
+ 
+     function AU() {
+       QU || (QU = !0, yU.e.prototype._sphericalPolynomialTargetSize = 0, yU.e.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(yU.e.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = cU.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+ ... (467 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L6-L10` → after: `L488-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L488-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L488-L613) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L6-L10)

```diff
-       getBlockFaces: () => mM,
-       getIngameIconUrl: () => JM,
-       getItemIconUrl: () => hM,
-       getItemTextureUrl: () => HM,
-       getParticleTextureUrl: () => dM
+       AbstractThreeMfSerializer: () => lF,
+       BVHExporter: () => dA,
+       ContentTypeFileName: () => IF,
+       DefaultXmlSerializerFormatOptions: () => VA,
+       DefaultXmlSerializerNumberOptions: () => vA,
+       EXT_lights_area: () => ty,
+       EXT_mesh_gpu_instancing: () => Hc,
+       EXT_texture_avif: () => yA,
+       EXT_texture_webp: () => UA,
+       GLTF2Export: () => uc,
+       GLTFData: () => DU,
+       GetXmlFieldMeta: () => uA,
+       GetXmlName: () => fA,
+       IsQualifiedName: () => LA,
+       KHR_draco_mesh_compression: () => bc,
+       KHR_interactivity: () => Dy,
+ ... (110 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L12-L18` → after: `L615-L13835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L615-L13835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L615-L13835) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L12-L18)

```diff
-     var OM = iM(4843),
-       SM = iM(37975),
-       jM = iM(9810),
-       aM = iM(3571);
-     const PM = new Set,
-       nM = new Set;
-     let QM = null;
+     var cU = zU(37814),
+       yU = zU(63941),
+       QU = zU(41374);
+     class AU {
+       static OBJ(UU, XU, zU, AU) {
+         const FU = [];
+         let oU = 1,
+           DU = 1;
+         XU && (zU || (zU = "mat"), FU.push("mtllib " + zU + ".mtl"));
+         for (let EU = 0; EU < UU.length; EU++) {
+           const zU = UU[EU],
+             YU = zU.name || `mesh${EU}}`;
+           FU.push(`o ${YU}`);
+           let NU = null;
+           if (AU) {
+             const UU = zU.computeWorldMatrix(!0);
+ ... (13205 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L21-L23` → after: `L13838-L13839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR13838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L13838-L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L13838-L13839) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L21-L23)

```diff
-       PM.has(MM) || (PM.add(MM), nM.add(MM), QM ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${nM.size} names`, [...nM]), nM.clear(), QM = null
-       }), 1e3))
+       const XU = UU.m;
+       return `( ${pA(XU,0)}, ${pA(XU,4)}, ${pA(XU,8)}, ${pA(XU,12)} )`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L27-L30` → after: `L13843-L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR13843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L13843-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L13843-L13860) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L27-L30)

```diff
-       try {
-         return (0, jM.getDefaultTexture)(MM, rM).url
-       } catch {
-         return zM(MM), null
+       return `(${UU[XU+0]}, ${UU[XU+1]}, ${UU[XU+2]}, ${UU[XU+3]})`
+     }
+ 
+     function aA(UU, XU) {
+       const zU = "Object_" + UU.uniqueId,
+         cU = IA(XU);
+       return `def Xform "${zU}" (\n\tprepend references = @./geometries/Geometry_${UU.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${cU}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    re … [truncated]
+     }
+ 
+     function tA(UU) {
+       switch (UU) {
+         case PU.b.TEXTURE_CLAMP_ADDRESSMODE:
+           return "clamp";
+         case PU.b.TEXTURE_MIRROR_ADDRESSMODE:
+           return "mirror";
+         case PU.b.TEXTURE_WRAP_ADDRESSMODE:
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L35-L49` → after: `L13865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR13865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L13865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L13865) · [Before (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L35-L49)

```diff
-       var rM, iM;
-       const jM = SM.k[MM];
-       if (!jM || jM.itemTexture || !jM.textureInfo) return null;
-       const {
-         textureInfo: PM,
-         texturePerSide: nM
-       } = jM, QM = MM => {
-         return "string" === typeof(rM = nM && Array.isArray(PM) ? PM[nM[MM]] : PM) ? LM(rM, aM.f.BLOCK) : rM && "object" === typeof rM && "animTextures" in rM ? LM((0, OM.j)(rM), aM.f.BLOCK) : null;
-         var rM
-       }, zM = QM(2);
-       return zM ? {
-         top: zM,
-         left: null !== (rM = QM(4)) && void 0 !== rM ? rM : zM,
-         right: null !== (iM = QM(0)) && void 0 !== iM ? iM : zM
-       } : null
+       return `(${UU.x}, ${UU.y})`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L53-L55` → after: `L13869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR13869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L13869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L13869) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L53-L55)

```diff
-       var rM;
-       const iM = SM.k[MM];
-       return LM(null !== (rM = null === iM || void 0 === iM ? void 0 : iM.itemTexture) && void 0 !== rM ? rM : "string" === typeof(null === iM || void 0 === iM ? void 0 : iM.textureInfo) ? iM.textureInfo : MM, aM.f.ITEM)
+       return `(${UU.r}, ${UU.g}, ${UU.b})`
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L59-L60` → after: `L13873-L14213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR13873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L13873-L14213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L13873-L14213) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L59-L60)

```diff
-       var rM, iM;
-       return SM.k[MM] ? null !== (rM = null === (iM = mM(MM)) || void 0 === iM ? void 0 : iM.top) && void 0 !== rM ? rM : HM(MM) : null
+       return "image/jpeg" === UU || "image/png" === UU
+     }
+ 
+     function BA(UU, XU, zU, yU, QU, AU) {
+       const FU = UU.getInternalTexture().uniqueId + "_" + UU.invertY,
+         DU = UU.mimeType || (0, oU.d)(UU.getInternalTexture()?.url ?? ""),
+         EU = GA(DU) ? DU : "image/png",
+         YU = "image/jpeg" === EU ? "jpg" : "png";
+       QU[FU] = {
+         texture: UU,
+         mimeType: EU,
+         ext: YU
+       };
+       const NU = UU.coordinatesIndex > 0 ? "st" + UU.coordinatesIndex : "st",
+         IU = new cU.Vector2(UU.uScale, UU.vScale),
+         pU = new cU.Vector2(UU.uOffset, UU.vOffset),
+ ... (325 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L64` → after: `L14217-L14223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L14217-L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L14217-L14223) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L64)

```diff
-       return LM(MM, aM.f.ICON)
+       return "string" === typeof UU?.name
+     }
+     const eA = Symbol("__xml:meta$__"),
+       CA = Symbol("__xml:name$__");
+ 
+     function wA(UU, XU) {
+       Object.prototype.hasOwnProperty.call(UU.metadata, eA) || (UU.metadata[eA] = []), UU.metadata[eA].push(XU)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L68-L71` → after: `L14227-L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR14227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L14227-L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L14227-L14228) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L68-L71)

```diff
-       try {
-         return iM(3724)(`./${MM}.png`)
-       } catch {
-         return zM(MM), null
+       return (XU, zU) => {
+         XU[CA] = UU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L74-L178` → after: `L14231-L14390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR14231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L14231-L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L14231-L14390) · [Before (L74-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L74-L178)

```diff
-   },
-   38005: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => OM
-     });
-     const OM = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
- ... (89 more removed lines; see GitHub link above)
+ 
+     function OA() {
+       return (UU, XU) => wA(XU, {
+         kind: "none",
+         prop: String(XU.name),
+         ignore: !0
+       })
+     }
+ 
+     function SA(UU) {
+       return (XU, zU) => wA(zU, {
+         kind: "attr",
+         prop: String(zU.name),
+         ...UU
+       })
+     }
+ ... (144 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L180-L195` → after: `L14392-L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR14392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L14392-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L14392-L14402) · [Before (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L180-L195)

```diff
-       },
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
-       },
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
+         const cU = fA(XU);
+         if (!cU) return;
+         const yU = HA(cU),
+           QU = this._getPrefix(yU),
+           AU = MA(yU.name, QU);
+         UU.ele(null, AU), this._writeObjectContent(UU, XU, zU), this._builder.end()
+       }
+       _getPrefix(UU) {
+         if (UU.ns) {
+           const XU = this._ns.get(UU.ns.toLowerCase());
+           if ("xmlns" !== XU) return XU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L197-L206` → after: `L14404-L14410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR14404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L14404-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L14404-L14410) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L197-L206)

```diff
-       },
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
+       }
+       _writeObjectContent(UU, XU, zU) {
+         const cU = uA(XU) ?? [],
+           yU = new Map;
+         for (const AU of cU) {
+           const UU = yU.get(AU.prop) ?? [];
+           UU.push(AU), yU.set(AU.prop, UU)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L208-L235` → after: `L14412-L16191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR14412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L14412-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/249.js#L14412-L16191) · [Before (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/249.js#L208-L235)

```diff
-       },
-       "skyblock:forged:iron-iron-iron": {
-         name: "Old Faithful",
-         lore: "It has never let anyone down. It never will.",
-         damageMultiplier: 1.15,
-         cooldownMultiplier: .94,
-         ability: "warcry"
-       },
-       "skyblock:forged:iron-wood-wood": {
-         name: "Militia Blade",
-         lore: "Handed out at the outpost gate when the rift first opened.",
-         damageMultiplier: 1.09,
-         cooldownMultiplier: .97,
-         ability: "warcry"
-       },
-       "skyblock:forged:stone-stone-stone": {
- ... (12 more removed lines; see GitHub link above)
+         const QU = Object.keys(XU).sort(((UU, XU) => {
+           const zU = (yU.get(UU) ?? []).some((UU => "attr" === UU.kind));
+           return zU === (yU.get(XU) ?? []).some((UU => "attr" === UU.kind)) ? 0 : zU ? -1 : 1
+         }));
+         for (const AU of QU) {
+           const cU = XU[AU];
+           if (null === cU || void 0 === cU) continue;
+           const QU = yU.get(AU);
+           if (QU) {
+             if (QU.some((UU => !0 === UU.ignore || "none" === UU.kind))) continue;
+             for (const XU of QU) {
+               const zU = XU.name ?? XU.prop.toLowerCase();
+               if (zU) switch (XU.kind) {
+                 case "attr": {
+                   let yU = null;
+                   if ("number" === typeof cU && this._nFmt && (yU = this._nFmt.toString(cU)), XU.formatter) {
+ ... (1764 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/250.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/250.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L4)

```diff
-   38044: (MM, rM, iM) => {
+   37841: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L6-L8)

```diff
-       d: () => jM,
-       f: () => OM,
-       h: () => SM
+       b: () => yU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L10-L66` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L8-L15) · [Before (L10-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L10-L66)

```diff
-     const OM = 1 / 2.2,
-       SM = 2.2;
-     Math.sqrt(5);
-     let jM = .001
-   },
-   38074: (MM, rM, iM) => {
-     function OM(MM) {
-       return parseInt(MM.toString().replace(/\W/g, ""))
-     }
- 
-     function SM(MM, rM) {
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(MM - rM) <= iM
-     }
- 
-     function jM(MM, rM, iM) {
- ... (41 more removed lines; see GitHub link above)
+     var cU = zU(37846);
+     class yU {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L68-L71` → after: `L17-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L17-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L17-L33) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L68-L71)

```diff
- 
-     function hM(MM) {
-       const rM = MM.toString(16);
-       return MM <= 15 ? ("0" + rM).toUpperCase() : rM.toUpperCase()
+     yU.Instances = [], yU.OnEnginesDisposedObservable = new cU.e, yU._LastCreatedScene = null, yU.UseFallbackTexture = !0, yU.FallbackTexture = ""
+   },
+   37834: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => cU
+     });
+     class cU {
+       static SetMatrixPrecision(UU) {
+         if (cU.MatrixTrackPrecisionChange = !1, UU && !cU.MatrixUse64Bits && cU.MatrixTrackedMatrices)
+           for (let XU = 0; XU < cU.MatrixTrackedMatrices.length; ++XU) {
+             const UU = cU.MatrixTrackedMatrices[XU],
+               zU = UU._m;
+             UU._m = new Array(16);
+             for (let XU = 0; XU < 16; ++XU) UU._m[XU] = zU[XU]
+           }
+         cU.MatrixUse64Bits = UU, cU.MatrixCurrentType = cU.MatrixUse64Bits ? Array : Float32Array, cU.MatrixTrackedMatrices = null
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L75-L116` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L49) · [Before (L75-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L75-L116)

```diff
-       if (Math.log2) return Math.floor(Math.log2(MM));
-       if (MM < 0) return NaN;
-       if (0 === MM) return -1 / 0;
-       let rM = 0;
-       if (MM < 1) {
-         for (; MM < 1;) rM++, MM *= 2;
-         rM = -rM
-       } else if (MM > 1)
-         for (; MM > 1;) rM++, MM = Math.floor(MM / 2);
-       return rM
-     }
- 
-     function dM(MM, rM) {
-       return MM - Math.floor(MM / rM) * rM
-     }
- 
- ... (26 more removed lines; see GitHub link above)
+       UU.updateFlag = cU._UpdateFlagSeed++
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L120-L122` → after: `L53-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L53-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L53-L88) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L120-L122)

```diff
-       const OM = EM(MM, rM);
-       let SM;
-       return SM = -iM < OM && OM < iM ? rM : CM(MM, rM = MM + OM, iM), SM
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const yU = UU.cyU(),
+         QU = XU.cyU(),
+         AU = yU[0],
+         FU = yU[1],
+         oU = yU[2],
+         DU = yU[3],
+         EU = yU[4],
+         YU = yU[5],
+         NU = yU[6],
+         IU = yU[7],
+         pU = yU[8],
+         aU = yU[9],
+         tU = yU[10],
+         gU = yU[11],
+         kU = yU[12],
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L126` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L92-L93) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L126)

```diff
-       return (MM - rM) / (iM - rM)
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       QU(UU, XU, zU.cyU(), cU), yU(zU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L179-L181` → after: `L97-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L97-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L97-L99) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L179-L181)

```diff
-       const iM = [];
-       for (let OM = 0; OM < MM; ++OM) iM.push(rM());
-       return iM
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const cU = UU.cyU();
+       XU[zU] = cU[0], XU[zU + 1] = cU[1], XU[zU + 2] = cU[2], XU[zU + 3] = cU[3], XU[zU + 4] = cU[4], XU[zU + 5] = cU[5], XU[zU + 6] = cU[6], XU[zU + 7] = cU[7], XU[zU + 8] = cU[8], XU[zU + 9] = cU[9], XU[zU + 10] = cU[10], XU[zU + 11] = cU[11], XU[zU + 12] = cU[12], XU[zU + 13]  … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L185` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L103-L104) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L185)

```diff
-       return OM(MM, rM)
+       const zU = DU(UU, XU.cyU());
+       return zU && yU(XU), zU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L195-L212` → after: `L108-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L108-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L108-L162) · [Before (L195-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L195-L212)

```diff
-       const iM = jM.map((iM => function(MM, rM, iM) {
-         const OM = MM[rM];
-         if ("function" !== typeof OM) return null;
-         const SM = function() {
-           const OM = MM.length,
-             jM = SM.previous.apply(MM, arguments);
-           return iM(rM, OM), jM
-         };
-         return OM.next = SM, SM.previous = OM, MM[rM] = SM, () => {
-           const iM = SM.previous;
-           if (!iM) return;
-           const OM = SM.next;
-           OM ? (iM.next = OM, OM.previous = iM) : (iM.next = void 0, MM[rM] = iM), SM.next = void 0, SM.previous = void 0
-         }
-       }(MM, iM, rM)));
-       return () => {
- ... (2 more removed lines; see GitHub link above)
+       const zU = UU.cyU(),
+         cU = zU[0],
+         yU = zU[1],
+         QU = zU[2],
+         AU = zU[3],
+         FU = zU[4],
+         oU = zU[5],
+         DU = zU[6],
+         EU = zU[7],
+         YU = zU[8],
+         NU = zU[9],
+         IU = zU[10],
+         pU = zU[11],
+         aU = zU[12],
+         tU = zU[13],
+         gU = zU[14],
+ ... (39 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L215` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L166) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L215)

```diff
-   38085: (MM, rM, iM) => {
+   37819: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L217-L218` → after: `L168-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L168-L174) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L217-L218)

```diff
-       b: () => jM,
-       e: () => SM
+       e: () => aU,
+       f: () => pU,
+       h: () => BU,
+       l: () => gU,
+       m: () => YU,
+       q: () => NU,
+       t: () => IU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L220-L223` → after: `L176-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L176-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L176-L487) · [Before (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L220-L223)

```diff
-     const OM = {};
- 
-     function SM(MM, rM) {
-       OM[MM] = rM
+     var cU = zU(37825),
+       yU = zU(37827),
+       QU = zU(37834),
+       AU = zU(37841),
+       FU = zU(37855),
+       oU = zU(37861),
+       DU = zU(37863);
+     const EU = UU => parseInt(UU.toString().replace(/\W/g, ""));
+     class YU {
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this.x = UU, this.y = XU
+       }
+       toString() {
+         return `{X: ${this.x} Y: ${this.y}}`
+ ... (296 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L225-L227` → after: `L489-L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L489-L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/250.js#L489-L2916) · [Before (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/250.js#L225-L227)

```diff
- 
-     function jM(MM) {
-       return OM[MM]
+     YU._V8PerformanceHack = new YU(.5, .5), YU._ZeroReadOnly = YU.Zero();
+     class NU {
+       get x() {
+         return this._x
+       }
+       set x(UU) {
+         this._x = UU, this._isDirty = !0
+       }
+       get y() {
+         return this._y
+       }
+       set y(UU) {
+         this._y = UU, this._isDirty = !0
+       }
+       get z() {
+         return this._z
+ ... (2412 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L3)

```diff
- export const ids = [251, 258];
+ export const ids = [251];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L5-L25` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L4-L9) · [Before (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L5-L25)

```diff
-   39285: MM => {
-     MM.exports = function(MM) {
-       return null != MM && null != MM.constructor && "function" === typeof MM.constructor.isBuffer && MM.constructor.isBuffer(MM)
-     }
-   },
-   39276: (MM, rM, iM) => {
-     var OM = iM(39280),
-       SM = iM(39283),
-       jM = iM(39285);
-     iM.g.__TYPEDARRAY_POOL || (iM.g.__TYPEDARRAY_POOL = {
-       UINT8: SM([32, 0]),
-       UINT16: SM([32, 0]),
-       UINT32: SM([32, 0]),
-       INT8: SM([32, 0]),
-       INT16: SM([32, 0]),
-       INT32: SM([32, 0]),
- ... (5 more removed lines; see GitHub link above)
+   37923: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => YU,
+       e: () => NU,
+       f: () => aU,
+       i: () => IU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L27-L70` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L11-L14) · [Before (L27-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L27-L70)

```diff
-     var aM = "undefined" !== typeof Uint8ClampedArray,
-       PM = iM.g.__TYPEDARRAY_POOL;
-     PM.UINT8C || (PM.UINT8C = SM([32, 0])), PM.BUFFER || (PM.BUFFER = SM([32, 0]));
-     var nM = PM.DATA,
-       QM = PM.BUFFER;
- 
-     function zM(MM) {
-       if (MM) {
-         var rM = MM.length || MM.byteLength,
-           iM = OM.log2(rM);
-         nM[iM].push(MM)
-       }
-     }
- 
-     function LM(MM) {
-       MM = OM.nextPow2(MM);
- ... (28 more removed lines; see GitHub link above)
+     var cU = zU(37827),
+       yU = zU(37825),
+       QU = zU(37855),
+       AU = zU(37863);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L73` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L17) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L73)

```diff
-       return new Float32Array(LM(4 * MM), 0, MM)
+       return Math.pow(UU, yU.h)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L77` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L21) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L77)

```diff
-       return new Float64Array(LM(8 * MM), 0, MM)
+       return UU <= .04045 ? .0773993808 * UU : Math.pow(.947867299 * (UU + .055), 2.4)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L81` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L25) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L81)

```diff
-       return aM ? new Uint8ClampedArray(LM(MM), 0, MM) : mM(MM)
+       return Math.pow(UU, yU.d)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L85-L212` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L29) · [Before (L85-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L85-L212)

```diff
-       return new DataView(LM(MM), 0, MM)
-     }
-     rM.free = function(MM) {
-       if (jM(MM)) QM[OM.log2(MM.length)].push(MM);
-       else {
-         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(MM) && (MM = MM.buffer), !MM) return;
-         var rM = MM.length || MM.byteLength,
-           iM = 0 | OM.log2(rM);
-         nM[iM].push(MM)
-       }
-     }, rM.freeUint8 = rM.freeUint16 = rM.freeUint32 = rM.freeInt8 = rM.freeInt16 = rM.freeInt32 = rM.freeFloat32 = rM.freeFloat = rM.freeFloat64 = rM.freeDouble = rM.freeUint8Clamped = rM.freeDataView = function(MM) {
-       zM(MM.buffer)
-     }, rM.freeArrayBuffer = zM, rM.freeBuffer = function(MM) {
-       QM[OM.log2(MM.length)].push(MM)
-     }, rM.malloc = function(MM, rM) {
-       if (void 0 === rM || "arraybuffer" === rM) return LM(MM);
- ... (112 more removed lines; see GitHub link above)
+       return UU <= .0031308 ? 12.92 * UU : 1.055 * Math.pow(UU, .41666) - .055
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L214-L221` → after: `L31-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L31-L36) · [Before (L214-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L214-L221)

```diff
- 
-     function nM(MM, rM, iM, OM) {
-       for (var SM = 0, jM = 0, aM = 0, nM = MM.length; aM < nM; ++aM) {
-         var QM = MM[aM];
-         if (!PM(rM, QM)) {
-           for (var zM = 0; zM < 2 * rM; ++zM) iM[SM++] = QM[zM];
-           OM[jM++] = aM
-         }
+     class YU {
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = UU, this.g = XU, this.b = zU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L223-L244` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L38-L39) · [Before (L223-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L223-L244)

```diff
-       return jM
-     }
- 
-     function QM(MM, rM, iM, OM) {
-       var PM = MM.length,
-         QM = rM.length;
-       if (!(PM <= 0 || QM <= 0)) {
-         var zM = MM[0].length >>> 1;
-         if (!(zM <= 0)) {
-           var LM, mM = SM.mallocDouble(2 * zM * PM),
-             HM = SM.mallocInt32(PM);
-           if ((PM = nM(MM, zM, mM, HM)) > 0) {
-             if (1 === zM && OM) jM.init(PM), LM = jM.sweepComplete(zM, iM, 0, PM, mM, HM, 0, PM, mM, HM);
-             else {
-               var hM = SM.mallocDouble(2 * zM * QM),
-                 JM = SM.mallocInt32(QM);
- ... (6 more removed lines; see GitHub link above)
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L246-L283` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L41-L42) · [Before (L246-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L246-L283)

```diff
-     }
- 
-     function zM(MM, rM) {
-       OM.push([MM, rM])
-     }
-   },
-   39299: (MM, rM) => {
-     var iM = "d",
-       OM = "ax",
-       SM = "fp",
-       jM = "es",
-       aM = "rs",
-       PM = "re",
-       nM = "rb",
-       QM = "bs",
-       zM = "be",
- ... (22 more removed lines; see GitHub link above)
+       getClassName() {
+         return "Color3"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L285-L364` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L44-L46) · [Before (L285-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L285-L364)

```diff
-       PM.push("if(re-rs>be-bs){"), MM ? (nM(!0, !1), PM.push("}else{"), nM(!1, !1)) : (PM.push("if(fp){"), nM(!0, !0), PM.push("}else{"), nM(!0, !1), PM.push("}}else{if(fp){"), nM(!1, !0), PM.push("}else{"), nM(!1, !1), PM.push("}")), PM.push("}}return " + rM);
-       var QM = OM.join("") + PM.join("");
-       return new Function(QM)()
-     }
-     rM.partial = HM(!1), rM.full = HM(!0)
-   },
-   39296: (MM, rM, iM) => {
-     MM.exports = function(MM, rM, iM, jM, zM, gM, uM, RM, pM) {
-       ! function(MM, rM) {
-         var iM = 8 * SM.log2(rM + 1) * (MM + 1) | 0,
-           jM = SM.nextPow2(UM * iM);
-         CM.length < jM && (OM.free(CM), CM = OM.mallocInt32(jM));
-         var aM = SM.nextPow2(GM * iM);
-         eM.length < aM && (OM.free(eM), eM = OM.mallocDouble(aM))
-       }(MM, jM + uM);
-       var WM, sM = 0,
- ... (64 more removed lines; see GitHub link above)
+       getHashCode() {
+         let UU = 255 * this.r | 0;
+         return UU = 397 * UU ^ 255 * this.g, UU = 397 * UU ^ 255 * this.b, UU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L366-L411` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L48-L50) · [Before (L366-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L366-L411)

```diff
-     };
-     var OM = iM(39276),
-       SM = iM(39280),
-       jM = iM(39299),
-       aM = jM.partial,
-       PM = jM.full,
-       nM = iM(39288),
-       QM = iM(39308),
-       zM = iM(39316),
-       LM = 128,
-       mM = 1 << 22,
-       HM = 1 << 22,
-       hM = zM("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
-       JM = zM("lo===p0", ["p0"]),
-       dM = zM("lo<p0", ["p0"]),
-       yM = zM("hi<=p0", ["p0"]),
- ... (30 more removed lines; see GitHub link above)
+       toArray(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return UU[XU] = this.r, UU[XU + 1] = this.g, UU[XU + 2] = this.b, this
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L413-L434` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L52-L54) · [Before (L413-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L413-L434)

```diff
-     }
- 
-     function tM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
-       var zM = 2 * MM,
-         LM = PM * zM,
-         mM = nM[LM + rM];
-       MM: for (var HM = OM, hM = OM * zM; HM < SM; ++HM, hM += zM) {
-         var JM = aM[HM];
-         if (JM !== QM) {
-           var dM = jM[hM + rM],
-             yM = jM[hM + rM + MM];
-           if (!(mM < dM || yM < mM)) {
-             for (var lM = rM + 1; lM < MM; ++lM) {
-               dM = jM[hM + lM], yM = jM[hM + lM + MM];
-               var EM = nM[LM + lM],
-                 UM = nM[LM + lM + MM];
- ... (6 more removed lines; see GitHub link above)
+       zY(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return YU.FromArrayToRef(UU, XU, this), this
```
