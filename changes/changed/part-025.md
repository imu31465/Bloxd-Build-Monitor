# Changed — Bundle Modifications Report (Part 025 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `25 / 99` (**292** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 024](part-024.md) · [Part 026 →](part-026.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (62 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 14. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L436-L477` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L56-L58) · [Before (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L436-L477)

```diff
-     }
-   },
-   39308: (MM, rM, iM) => {
-     MM.exports = function(MM, rM, iM, aM, PM, nM) {
-       if (aM <= iM + 1) return iM;
-       var QM = iM,
-         zM = aM,
-         LM = aM + iM >>> 1,
-         mM = 2 * MM,
-         HM = LM,
-         hM = PM[mM * LM + rM];
-       for (; QM < zM;) {
-         if (zM - QM < SM) {
-           jM(MM, rM, QM, zM, PM, nM), hM = PM[mM * LM + rM];
-           break
-         }
- ... (26 more removed lines; see GitHub link above)
+       toColor4() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         return new NU(this.r, this.g, this.b, UU)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L479-L521` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L60-L61) · [Before (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L479-L521)

```diff
-       return OM(MM, rM, iM, LM, PM, nM, PM[mM * LM + rM])
-     };
-     var OM = iM(39316)("lo<p0", ["p0"]),
-       SM = 8;
- 
-     function jM(MM, rM, iM, OM, SM, jM) {
-       for (var aM = 2 * MM, PM = aM * (iM + 1) + rM, nM = iM + 1; nM < OM; ++nM, PM += aM)
-         for (var QM = SM[PM], zM = nM, LM = aM * (nM - 1); zM > iM && SM[LM + rM] > QM; --zM, LM -= aM) {
-           for (var mM = LM, HM = LM + aM, hM = 0; hM < aM; ++hM, ++mM, ++HM) {
-             var JM = SM[mM];
-             SM[mM] = SM[HM], SM[HM] = JM
-           }
-           var dM = jM[zM];
-           jM[zM] = jM[zM - 1], jM[zM - 1] = dM
-         }
-     }
- ... (27 more removed lines; see GitHub link above)
+       cyU() {
+         return [this.r, this.g, this.b]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L523-L621` → after: `L63-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L63-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L63-L211) · [Before (L523-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L523-L621)

```diff
-     }
- 
-     function OM(MM, rM, iM) {
-       rM *= 2;
-       var OM = iM[MM *= 2],
-         SM = iM[MM + 1];
-       iM[MM] = iM[rM], iM[MM + 1] = iM[rM + 1], iM[rM] = OM, iM[rM + 1] = SM
-     }
- 
-     function SM(MM, rM, iM) {
-       rM *= 2, iM[MM *= 2] = iM[rM], iM[MM + 1] = iM[rM + 1]
-     }
- 
-     function jM(MM, rM, iM, OM) {
-       rM *= 2, iM *= 2;
-       var SM = OM[MM *= 2],
- ... (83 more removed lines; see GitHub link above)
+       toLuminance() {
+         return .3 * this.r + .59 * this.g + .11 * this.b
+       }
+       multiply(UU) {
+         return new YU(this.r * UU.r, this.g * UU.g, this.b * UU.b)
+       }
+       multiplyToRef(UU, XU) {
+         return XU.r = this.r * UU.r, XU.g = this.g * UU.g, XU.b = this.b * UU.b, XU
+       }
+       multiplyInPlace(UU) {
+         return this.r *= UU.r, this.g *= UU.g, this.b *= UU.b, this
+       }
+       multiplyByFloats(UU, XU, zU) {
+         return new YU(this.r * UU, this.g * XU, this.b * zU)
+       }
+       divide(UU) {
+ ... (133 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L623-L656` → after: `L213-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L213-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L213-L237) · [Before (L623-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L623-L656)

```diff
-         for (eM = 0; eM < gM; ++eM) {
-           var pM = 0 | hM[2 * eM + 1];
-           if (pM >= aM) JM(zM, LM, RM--, pM = pM - aM | 0);
-           else if (pM >= 0) JM(nM, QM, uM--, pM);
-           else if (pM <= -aM) {
-             pM = -pM - aM | 0;
-             for (var WM = 0; WM < uM; ++WM) {
-               if (void 0 !== (sM = rM(nM[WM], pM))) return sM
-             }
-             dM(zM, LM, RM++, pM)
-           } else {
-             pM = -pM - 1 | 0;
-             for (WM = 0; WM < RM; ++WM) {
-               var sM;
-               if (void 0 !== (sM = rM(pM, zM[WM]))) return sM
-             }
- ... (18 more removed lines; see GitHub link above)
+         const oU = yU,
+           DU = yU - QU;
+         return 0 !== yU && (FU = DU / yU), yU != QU && (yU == XU ? (AU = (zU - cU) / DU, zU < cU && (AU += 6)) : yU == zU ? AU = (cU - XU) / DU + 2 : yU == cU && (AU = (XU - zU) / DU + 4), AU *= 60), UU.r = AU, UU.g = FU, UU.b = oU, UU
+       }
+       toLinearSpace() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const XU = new YU;
+         return this.toLinearSpaceToRef(XU, UU), XU
+       }
+       toLinearSpaceToRef(UU) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = oU(this.r), UU.g = oU(this.g), UU.b = oU(this.b)) : (UU.r = FU(this.r), UU.g = FU(this.g), UU.b = FU(this.b)), this
+       }
+       toGammaSpace() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const XU = new YU;
+         return this.toGammaSpaceToRef(XU, UU), XU
+ ... (9 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L659-L770` → after: `L240-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L240-L242) · [Before (L659-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L659-L770)

```diff
-         for (bM = 0; bM < uM; ++bM) {
-           var sM = 0 | hM[2 * bM + 1],
-             DM = 1 & sM;
-           if (bM < uM - 1 && sM >> 1 === hM[2 * bM + 3] >> 1 && (DM = 2, bM += 1), sM < 0) {
-             for (var kM = -(sM >> 1) - 1, ZM = 0; ZM < WM; ++ZM) {
-               if (void 0 !== (oM = rM(mM[ZM], kM))) return oM
-             }
-             if (0 !== DM)
-               for (ZM = 0; ZM < RM; ++ZM) {
-                 if (void 0 !== (oM = rM(nM[ZM], kM))) return oM
-               }
-             if (1 !== DM)
-               for (ZM = 0; ZM < pM; ++ZM) {
-                 var oM;
-                 if (void 0 !== (oM = rM(zM[ZM], kM))) return oM
-               }
- ... (96 more removed lines; see GitHub link above)
+         QU >= 0 && QU <= 1 ? (FU = yU, oU = AU) : QU >= 1 && QU <= 2 ? (FU = AU, oU = yU) : QU >= 2 && QU <= 3 ? (oU = yU, DU = AU) : QU >= 3 && QU <= 4 ? (oU = AU, DU = yU) : QU >= 4 && QU <= 5 ? (FU = AU, DU = yU) : QU >= 5 && QU <= 6 && (FU = yU, DU = AU);
+         const EU = zU - yU;
+         return cU.r = FU + EU, cU.g = oU + EU, cU.b = DU + EU, cU
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L772-L843` → after: `L244-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L244-L246) · [Before (L772-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L772-L843)

```diff
-     };
-     var OM = iM(39276),
-       SM = iM(39280),
-       jM = iM(39294),
-       aM = 1 << 28,
-       PM = 1024,
-       nM = OM.mallocInt32(PM),
-       QM = OM.mallocInt32(PM),
-       zM = OM.mallocInt32(PM),
-       LM = OM.mallocInt32(PM),
-       mM = OM.mallocInt32(PM),
-       HM = OM.mallocInt32(PM),
-       hM = OM.mallocDouble(8192);
- 
-     function JM(MM, rM, iM, OM) {
-       var SM = rM[OM],
- ... (56 more removed lines; see GitHub link above)
+       static FromHSV(UU, XU, zU) {
+         const cU = new YU(0, 0, 0);
+         return YU.HSVtoRGBToRef(UU, XU, zU, cU), cU
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L845-L847` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L248-L249) · [Before (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L845-L847)

```diff
- 
-       function QM() {
-         PM.timeout || (PM.timeout = !0, setTimeout(zM, 1))
+       static FromHexString(UU) {
+         return new YU(0, 0, 0).fromHexString(UU)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L849-L851` → after: `L251-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L251-L253) · [Before (L849-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L849-L851)

```diff
- 
-       function zM() {
-         PM.timeout = !1, LM()
+       static FromArray(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new YU(UU[XU], UU[XU + 1], UU[XU + 2])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L853-L988` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L255-L258) · [Before (L853-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L853-L988)

```diff
- 
-       function LM() {
-         PM.multiComps.length && function(MM) {
-           for (var rM = 0; rM < MM.length; rM++) {
-             var {
-               entID: iM,
-               data: OM
-             } = MM[rM], SM = OM.hash[iM];
-             if (SM) {
-               for (var jM = 0; jM < SM.length; jM++) SM[jM] || (SM.splice(jM, 1), jM--);
-               0 === SM.length && (OM.remove(iM), PM.removals.push(OM))
-             }
-           }
-           MM.length = 0
-         }(PM.multiComps), PM.removals.length && function(MM) {
-           for (var rM = 0; rM < MM.length; rM++) {
- ... (120 more removed lines; see GitHub link above)
+       static FromArrayToRef(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           zU = arguments.length > 2 ? arguments[2] : void 0;
+         zU.r = UU[XU], zU.g = UU[XU + 1], zU.b = UU[XU + 2]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L990-L1001` → after: `L260-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L260-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L260-L324) · [Before (L990-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L990-L1001)

```diff
-     };
-     var OM = iM(39243)
-   },
-   39243: MM => {
-     function rM(MM, rM) {
-       var iM = MM._map[rM];
-       if (delete MM.hash[rM], delete MM._map[rM], iM === MM.list.length - 1) MM.list.pop(), MM._idList.pop();
-       else {
-         var OM = MM.list.pop();
-         MM.list[iM] = OM;
-         var SM = MM._idList.pop();
-         MM._idList[iM] = SM, MM._map[SM] = iM
+       static FromInts(UU, XU, zU) {
+         return new YU(UU / 255, XU / 255, zU / 255)
+       }
+       static Lerp(UU, XU, zU) {
+         const cU = new YU(0, 0, 0);
+         return YU.LerpToRef(UU, XU, zU, cU), cU
+       }
+       static LerpToRef(UU, XU, zU, cU) {
+         cU.r = UU.r + (XU.r - UU.r) * zU, cU.g = UU.g + (XU.g - UU.g) * zU, cU.b = UU.b + (XU.b - UU.b) * zU
+       }
+       static Hermite(UU, XU, zU, cU, yU) {
+         const QU = yU * yU,
+           AU = yU * QU,
+           FU = 2 * AU - 3 * QU + 1,
+           oU = -2 * AU + 3 * QU,
+           DU = AU - 2 * QU + yU,
+ ... (49 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1004` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L327-L328) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1004)

```diff
-     MM.exports = class {
+     YU._V8PerformanceHack = new YU(.5, .5, .5), YU._BlackReadOnly = YU.Black();
+     class NU {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1006` → after: `L330-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L330-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L330-L499) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1006)

```diff
-         this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         this.r = UU, this.g = XU, this.b = zU, this.a = cU
+       }
+       cyU() {
+         return [this.r, this.g, this.b, this.a]
+       }
+       toArray(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return UU[XU] = this.r, UU[XU + 1] = this.g, UU[XU + 2] = this.b, UU[XU + 3] = this.a, this
+       }
+       zY(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.r = UU[XU], this.g = UU[XU + 1], this.b = UU[XU + 2], this.a = UU[XU + 3], this
+ ... (154 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1008-L1012` → after: `L501-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L501-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L501-L504) · [Before (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1008-L1012)

```diff
-       add(MM, rM) {
-         if ("number" === typeof this._map[MM]) {
-           var iM = this._map[MM];
-           this.hash[MM] = rM, this.list[iM] = rM, this._idList[iM] = MM
-         } else this._map[MM] = this.list.length, this.hash[MM] = rM, this.list.push(rM), this._idList.push(MM)
+       toGammaSpace() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const XU = new NU;
+         return this.toGammaSpaceToRef(XU, UU), XU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1014-L1016` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L506-L507) · [Before (L1014-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1014-L1016)

```diff
-       remove(MM) {
-         var rM = this._map[MM];
-         this.hash[MM] = null, this.list[rM] = null, this._pendingRemovals.push(MM)
+       toGammaSpaceToRef(UU) {
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = EU(this.r), UU.g = EU(this.g), UU.b = EU(this.b)) : (UU.r = DU(this.r), UU.g = DU(this.g), UU.b = DU(this.b)), UU.a = this.a, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1018-L1019` → after: `L509-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L509-L510) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1018-L1019)

```diff
-       dispose() {
-         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
+       static FromHexString(UU) {
+         return "#" !== UU.substring(0, 1) || 9 !== UU.length && 7 !== UU.length ? new NU(0, 0, 0, 0) : new NU(0, 0, 0, 1).fromHexString(UU)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1021-L1024` → after: `L512-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L512-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L512-L562) · [Before (L1021-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1021-L1024)

```diff
-       flush() {
-         for (var MM = 0; MM < this._pendingRemovals.length; MM++) {
-           var iM = this._pendingRemovals[MM];
-           null === this.hash[iM] && rM(this, iM)
+       static Lerp(UU, XU, zU) {
+         return NU.LerpToRef(UU, XU, zU, new NU)
+       }
+       static LerpToRef(UU, XU, zU, cU) {
+         return cU.r = UU.r + (XU.r - UU.r) * zU, cU.g = UU.g + (XU.g - UU.g) * zU, cU.b = UU.b + (XU.b - UU.b) * zU, cU.a = UU.a + (XU.a - UU.a) * zU, cU
+       }
+       static Hermite(UU, XU, zU, cU, yU) {
+         const QU = yU * yU,
+           AU = yU * QU,
+           FU = 2 * AU - 3 * QU + 1,
+           oU = -2 * AU + 3 * QU,
+           DU = AU - 2 * QU + yU,
+           EU = AU - QU,
+           YU = UU.r * FU + zU.r * oU + XU.r * DU + cU.r * EU,
+           IU = UU.g * FU + zU.g * oU + XU.g * DU + cU.g * EU,
+           pU = UU.b * FU + zU.b * oU + XU.b * DU + cU.b * EU,
+ ... (35 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1026` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L564) · [Before (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1026)

```diff
-         this._pendingRemovals.length = 0
+         return UU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1030-L1069` → after: `L590-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L590-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L590-L604) · [Before (L1030-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1030-L1069)

```diff
-   39027: (MM, rM, iM) => {
-     MM = iM.nmd(MM);
-     var OM = "__lodash_hash_undefined__",
-       SM = 9007199254740991,
-       jM = "[object Arguments]",
-       aM = "[object Boolean]",
-       PM = "[object Date]",
-       nM = "[object Function]",
-       QM = "[object GeneratorFunction]",
-       zM = "[object Map]",
-       LM = "[object Number]",
-       mM = "[object Object]",
-       HM = "[object Promise]",
-       hM = "[object RegExp]",
-       JM = "[object Set]",
-       dM = "[object String]",
- ... (24 more removed lines; see GitHub link above)
+   37825: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => QU,
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
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1072` → after: `L607-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L607-L608) · [Before (L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1072)

```diff
-       return MM.set(rM[0], rM[1]), MM
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(UU - XU) <= zU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1075-L1076` → after: `L611-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L611-L613) · [Before (L1075-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1075-L1076)

```diff
-     function xM(MM, rM) {
-       return MM.add(rM), MM
+     function QU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
+       return UU < XU - cU || UU > zU + cU
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1079-L1083` → after: `L616-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L616-L617) · [Before (L1079-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1079-L1083)

```diff
-     function vM(MM, rM, iM, OM) {
-       var SM = -1,
-         jM = MM ? MM.length : 0;
-       for (OM && jM && (iM = MM[++SM]); ++SM < jM;) iM = rM(iM, MM[SM], SM, MM);
-       return iM
+     function AU(UU, XU) {
+       return UU === XU ? UU : Math.random() * (XU - UU) + UU
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1086-L1091` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L620-L621) · [Before (L1086-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1086-L1091)

```diff
-     function FM(MM) {
-       var rM = !1;
-       if (null != MM && "function" != typeof MM.toString) try {
-         rM = !!(MM + "")
-       } catch (iM) {}
-       return rM
+     function FU(UU, XU, zU) {
+       return UU + (XU - UU) * zU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1094-L1099` → after: `L624-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L624-L626) · [Before (L1094-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1094-L1099)

```diff
-     function BM(MM) {
-       var rM = -1,
-         iM = Array(MM.size);
-       return MM.forEach((function(MM, OM) {
-         iM[++rM] = [OM, MM]
-       })), iM
+     function oU(UU, XU, zU) {
+       let cU = tU(XU - UU, 360);
+       return cU > 180 && (cU -= 360), UU + cU * NU(zU)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1102-L1105` → after: `L629-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L629-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L629-L631) · [Before (L1102-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1102-L1105)

```diff
-     function XM(MM, rM) {
-       return function(iM) {
-         return MM(rM(iM))
-       }
+     function DU(UU, XU, zU) {
+       let cU;
+       return cU = UU != XU ? NU((zU - UU) / (XU - UU)) : 0, cU
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1108-L1113` → after: `L634-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L634-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L634-L637) · [Before (L1108-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1108-L1113)

```diff
-     function IM(MM) {
-       var rM = -1,
-         iM = Array(MM.size);
-       return MM.forEach((function(MM) {
-         iM[++rM] = MM
-       })), iM
+     function EU(UU, XU, zU, cU, yU) {
+       const QU = yU * yU,
+         AU = yU * QU;
+       return UU * (2 * AU - 3 * QU + 1) + zU * (-2 * AU + 3 * QU) + XU * (AU - 2 * QU + yU) + cU * (AU - QU)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1151-L1157` → after: `L640-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L640-L642) · [Before (L1151-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1151-L1157)

```diff
-     function gr(MM) {
-       var rM = -1,
-         iM = MM ? MM.length : 0;
-       for (this.clear(); ++rM < iM;) {
-         var OM = MM[rM];
-         this.set(OM[0], OM[1])
-       }
+     function YU(UU, XU, zU, cU, yU) {
+       const QU = yU * yU;
+       return 6 * (QU - yU) * UU + (3 * QU - 4 * yU + 1) * XU + 6 * (-QU + yU) * zU + (3 * QU - 2 * yU) * cU
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1161-L1166` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L646-L648) · [Before (L1161-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1161-L1166)

```diff
-       var rM = -1,
-         iM = MM ? MM.length : 0;
-       for (this.clear(); ++rM < iM;) {
-         var OM = MM[rM];
-         this.set(OM[0], OM[1])
-       }
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+       return Math.min(zU, Math.max(XU, UU))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1170-L1175` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L652) · [Before (L1170-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1170-L1175)

```diff
-       var rM = -1,
-         iM = MM ? MM.length : 0;
-       for (this.clear(); ++rM < iM;) {
-         var OM = MM[rM];
-         this.set(OM[0], OM[1])
-       }
+       return UU -= 2 * Math.PI * Math.floor((UU + Math.PI) / (2 * Math.PI))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1179` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L656-L657) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1179)

```diff
-       this.__data__ = new ur(MM)
+       const XU = UU.toString(16);
+       return UU <= 15 ? ("0" + XU).toUpperCase() : XU.toUpperCase()
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1182-L1195` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L660-L669) · [Before (L1182-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1182-L1195)

```diff
-     function Wr(MM, rM) {
-       var iM = Ir(MM) || function(MM) {
-           return function(MM) {
-             return function(MM) {
-               return !!MM && "object" == typeof MM
-             }(MM) && Kr(MM)
-           }(MM) && rr.call(MM, "callee") && (!Qr.call(MM, "callee") || ir.call(MM) == jM)
-         }(MM) ? function(MM, rM) {
-           for (var iM = -1, OM = Array(MM); ++iM < MM;) OM[iM] = rM(iM);
-           return OM
-         }(MM.length, String) : [],
-         OM = iM.length,
-         SM = !!OM;
-       for (var aM in MM) !rM && !rr.call(MM, aM) || SM && ("length" == aM || vr(aM, OM)) || iM.push(aM);
+     function aU(UU) {
+       if (Math.log2) return Math.floor(Math.log2(UU));
+       if (UU < 0) return NaN;
+       if (0 === UU) return -1 / 0;
+       let XU = 0;
+       if (UU < 1) {
+         for (; UU < 1;) XU++, UU *= 2;
+         XU = -XU
+       } else if (UU > 1)
+         for (; UU > 1;) XU++, UU = Math.floor(UU / 2);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1205-L1207` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L674) · [Before (L1205-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1205-L1207)

```diff
-       for (var iM = MM.length; iM--;)
-         if (Xr(MM[iM][0], rM)) return iM;
-       return -1
+       return UU - Math.floor(UU / XU) * XU
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1210-L1335` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L677-L678) · [Before (L1210-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1210-L1335)

```diff
-     function kr(MM, rM, iM, OM, SM, HM, lM) {
-       var WM;
-       if (OM && (WM = HM ? OM(MM, SM, HM, lM) : OM(MM)), void 0 !== WM) return WM;
-       if (!Vr(MM)) return MM;
-       var sM = Ir(MM);
-       if (sM) {
-         if (WM = function(MM) {
-             var rM = MM.length,
-               iM = MM.constructor(rM);
-             rM && "string" == typeof MM[0] && rr.call(MM, "index") && (iM.index = MM.index, iM.input = MM.input);
-             return iM
-           }(MM), !rM) return function(MM, rM) {
-           var iM = -1,
-             OM = MM.length;
-           rM || (rM = Array(OM));
-           for (; ++iM < OM;) rM[iM] = MM[iM];
- ... (110 more removed lines; see GitHub link above)
+     function gU(UU, XU, zU) {
+       return (UU - XU) / (zU - XU)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1338-L1343` → after: `L681-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L681-L682) · [Before (L1338-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1338-L1343)

```diff
-     function Yr(MM, rM) {
-       var iM = MM.__data__;
-       return function(MM) {
-         var rM = typeof MM;
-         return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
-       }(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
+     function kU(UU, XU, zU) {
+       return UU * (zU - XU) + XU
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1347-L1350` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L686-L687) · [Before (L1347-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1347-L1350)

```diff
-       var iM = function(MM, rM) {
-         return null == MM ? void 0 : MM[rM]
-       }(MM, rM);
-       return Zr(iM) ? iM : void 0
+       let zU = tU(XU - UU, 360);
+       return zU > 180 && (zU -= 360), zU
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1423` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L691-L692) · [Before (L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1423)

```diff
-       return !!(rM = null == rM ? SM : rM) && ("number" == typeof MM || sM.test(MM)) && MM > -1 && MM % 1 == 0 && MM < rM
+       const zU = tU(UU, 2 * XU);
+       return XU - Math.abs(zU - XU)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1426-L1440` → after: `L695-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L695-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L695-L697) · [Before (L1426-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1426-L1440)

```diff
-     function Fr(MM) {
-       var rM = MM && MM.constructor;
-       return MM === ("function" == typeof rM && rM.prototype || TM)
-     }
- 
-     function Br(MM) {
-       if (null != MM) {
-         try {
-           return Mr.call(MM)
-         } catch (rM) {}
-         try {
-           return MM + ""
-         } catch (rM) {}
-       }
-       return ""
+     function ZU(UU, XU, zU) {
+       let cU = NU(zU);
+       return cU = -2 * cU * cU * cU + 3 * cU * cU, XU * cU + UU * (1 - cU)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1443-L1468` → after: `L700-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L700-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L700-L702) · [Before (L1443-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1443-L1468)

```diff
-     function Xr(MM, rM) {
-       return MM === rM || MM !== MM && rM !== rM
-     }(hr && xr(new hr(new ArrayBuffer(1))) != UM || Jr && xr(new Jr) != zM || dr && xr(dr.resolve()) != HM || yr && xr(new yr) != JM || lr && xr(new lr) != lM) && (xr = function(MM) {
-       var rM = ir.call(MM),
-         iM = rM == mM ? MM.constructor : void 0,
-         OM = iM ? Br(iM) : void 0;
-       if (OM) switch (OM) {
-         case Ur:
-           return UM;
-         case Gr:
-           return zM;
-         case Cr:
-           return HM;
-         case er:
-           return JM;
-         case br:
- ... (10 more removed lines; see GitHub link above)
+     function RU(UU, XU, zU) {
+       let cU;
+       return cU = Math.abs(XU - UU) <= zU ? XU : UU + Math.sign(XU - UU) * zU, cU
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1474-L1476` → after: `L705-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L705-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L705-L708) · [Before (L1474-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1474-L1476)

```diff
-     function Tr(MM) {
-       var rM = Vr(MM) ? ir.call(MM) : "";
-       return rM == nM || rM == QM
+     function PU(UU, XU, zU) {
+       const cU = GU(UU, XU);
+       let yU;
+       return yU = -zU < cU && cU < zU ? XU : RU(UU, XU = UU + cU, zU), yU
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1479-L1481` → after: `L711-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L711-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L711-L712) · [Before (L1479-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1479-L1481)

```diff
-     function Vr(MM) {
-       var rM = typeof MM;
-       return !!MM && ("object" == rM || "function" == rM)
+     function WU(UU, XU, zU) {
+       return (UU - XU) / (zU - XU)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1498-L1508` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L716) · [Before (L1498-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1498-L1508)

```diff
-       for (var OM = MM.length, SM = -1 / 0, jM = 1 / 0, aM = 0; aM < OM; aM++) {
-         var PM = (iM[0][aM] - MM[aM]) / rM[aM],
-           nM = (iM[1][aM] - MM[aM]) / rM[aM];
-         if (PM > nM) {
-           var QM = PM;
-           PM = nM, nM = QM
-         }
-         if (nM < SM || PM > jM) return 1 / 0;
-         PM > SM && (SM = PM), nM < jM && (jM = nM)
-       }
-       return SM > jM ? 1 / 0 : SM
+       return (zU - XU) * UU + XU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1523-L1550` → after: `L719-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L719-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L719-L721) · [Before (L1523-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1523-L1550)

```diff
-     function SM(MM) {
-       for (var rM, iM, SM = 0, jM = MM.length, aM = 0; aM < MM.length;) {
-         for (rM = MM[aM], iM = 0; aM < jM && MM[aM] === rM;) ++aM, ++iM;
-         SM += OM.log2(iM) / 7 | 0, SM += OM.log2(rM >>> 0) / 7 | 0, SM += 2
-       }
-       return SM
-     }
-     rM.size = SM, rM.encode = function(MM, rM) {
-       rM || (rM = new Uint8Array(SM(MM)));
-       for (var iM, OM, jM = 0, aM = rM.length, PM = 0; PM < MM.length;) {
-         for (iM = MM[PM], OM = 0; PM < MM.length && MM[PM] === iM;) ++PM, ++OM;
-         for (; jM < aM && OM >= 128;) rM[jM++] = 128 + (127 & OM), OM >>>= 7;
-         if (jM >= aM) throw new Error("RLE buffer overflow");
-         for (rM[jM++] = OM, iM >>>= 0; jM < aM && iM >= 128;) rM[jM++] = 128 + (127 & iM), iM >>>= 7;
-         if (jM >= aM) throw new Error("RLE buffer overflow");
-         rM[jM++] = iM
- ... (12 more removed lines; see GitHub link above)
+     function LU(UU, XU) {
+       const zU = UU % XU;
+       return 0 === zU ? XU : LU(XU, zU)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1553-L1604` → after: `L750-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L750-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L750-L754) · [Before (L1553-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1553-L1604)

```diff
-   38716: (MM, rM) => {
-     function iM(MM) {
-       var rM = 32;
-       return (MM &= -MM) && rM--, 65535 & MM && (rM -= 16), 16711935 & MM && (rM -= 8), 252645135 & MM && (rM -= 4), 858993459 & MM && (rM -= 2), 1431655765 & MM && (rM -= 1), rM
-     }
-     rM.INT_BITS = 32, rM.INT_MAX = 2147483647, rM.INT_MIN = -1 << 31, rM.sign = function(MM) {
-       return (MM > 0) - (MM < 0)
-     }, rM.abs = function(MM) {
-       var rM = MM >> 31;
-       return (MM ^ rM) - rM
-     }, rM.min = function(MM, rM) {
-       return rM ^ (MM ^ rM) & -(MM < rM)
-     }, rM.max = function(MM, rM) {
-       return MM ^ (MM ^ rM) & -(MM < rM)
-     }, rM.isPow2 = function(MM) {
-       return !(MM & MM - 1) && !!MM
- ... (36 more removed lines; see GitHub link above)
+   37827: (UU, XU, zU) => {
+     function cU(UU, XU) {
+       const zU = [];
+       for (let cU = 0; cU < UU; ++cU) zU.push(XU());
+       return zU
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1606-L1657` → after: `L756-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L756-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L756-L758) · [Before (L1606-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1606-L1657)

```diff
-   },
-   38167: (MM, rM, iM) => {
-     iM.d(rM, {
-       Color3: () => OM.d,
-       d: () => OM.h
-     });
-     var OM = iM(38173);
-     (0, OM.i)()
-   },
-   38740: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => SM
-     });
-     var OM = iM(38744);
-     class SM {
-       static GetPlanes(MM) {
- ... (36 more removed lines; see GitHub link above)
+ 
+     function yU(UU, XU) {
+       return cU(UU, XU)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1662` → after: `L761-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L761-L763) · [Before (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1662)

```diff
-       d: () => SM
+       d: () => cU,
+       f: () => yU,
+       i: () => AU
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1664-L1740` → after: `L765-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L765-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L765-L784) · [Before (L1664-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1664-L1740)

```diff
-     var OM = iM(38040);
-     class SM {
-       constructor(MM, rM, iM, SM) {
-         this.normal = new OM.q(MM, rM, iM), this.d = SM
-       }
-       HOM() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let MM = this.normal.getHashCode();
- ... (61 more removed lines; see GitHub link above)
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
+           if (!zU) return;
+           const cU = yU.next;
+           cU ? (zU.next = cU, cU.previous = zU) : (zU.next = void 0, UU[XU] = zU), yU.next = void 0, yU.previous = void 0
+ ... (4 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1758` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L788) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1758)

```diff
-   39078: (MM, rM, iM) => {
+   37863: (UU, XU, zU) => {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1760` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L790-L791) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1760)

```diff
-       e: () => OM
+       e: () => QU,
+       h: () => yU
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1762-L1774` → after: `L793-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L793-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L793-L796) · [Before (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1762-L1774)

```diff
-     class OM {
-       constructor(MM, rM, iM, OM) {
-         this.x = MM, this.y = rM, this.width = iM, this.height = OM
-       }
-       toGlobal(MM, rM) {
-         return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
-       }
-       toGlobalToRef(MM, rM, iM) {
-         return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
-       }
-       clone() {
-         return new OM(this.x, this.y, this.width, this.height)
-       }
+     const cU = {};
+ 
+     function yU(UU, XU) {
+       cU[UU] = XU
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L1776-L1782` → after: `L798-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L798-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/251.js#L798-L800) · [Before (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/251.js#L1776-L1782)

```diff
-   },
-   38885: (MM, rM, iM) => {
-     function OM() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
-         const rM = 16 * Math.random() | 0;
-         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
-       }))
+ 
+     function QU(UU) {
+       return cU[UU]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L2)

```diff
- export const ids = [252, 258, 262];
+ export const ids = [252];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4-L446` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L4) · [Before (L4-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L4-L446)

```diff
-   41354: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM,
-       e: () => PM
-     });
-     var OM = iM(39711),
-       SM = iM(41121),
-       jM = iM(41323),
-       aM = {};
-     class PM {
-       constructor(MM) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = MM, this.checkInputs = () => {}
-       }
-       add(MM) {
-         const rM = MM.getSimpleName();
-         this.attached[rM] ? OM.e.Warn("camera input of type " + rM + " already exists on camera") : (this.attached[rM] = MM, MM.camera = this.camera, MM.checkInputs && (this.checkInputs = this._addCheckInputs(MM.checkInputs.bind(MM))), this.attachedToElement && MM.attachControl(t … [truncated]
- ... (427 more removed lines; see GitHub link above)
+   37841: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L450-L696` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L8-L11) · [Before (L450-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L450-L696)

```diff
-     var OM = iM(38040),
-       SM = iM(41502),
-       jM = iM(41508),
-       aM = iM(41546),
-       PM = iM(41250),
-       nM = iM(39711);
- 
-     function QM(MM) {
-       const rM = [],
-         iM = [],
-         OM = MM.lines,
-         SM = MM.colors,
-         aM = [];
-       let PM = 0;
-       for (let jM = 0; jM < OM.length; jM++) {
-         const MM = OM[jM];
- ... (231 more removed lines; see GitHub link above)
+     var cU = zU(37846);
+     class yU {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L698-L699` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L13-L14) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L698-L699)

```diff
-       getClassName() {
-         return "InstancedLinesMesh"
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L702-L706` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L17) · [Before (L702-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L702-L706)

```diff
-     let hM = !1;
- 
-     function JM() {
-       hM || (hM = !0, PM.d._LinesMeshParser = (MM, rM) => mM.Parse(MM, rM))
-     }(OM = mM.prototype).enableEdgesRendering ?? (OM.enableEdgesRendering = (0, LM.j)("LinesMesh", "enableEdgesRendering")), (SM = HM.prototype).enableEdgesRendering ?? (SM.enableEdgesRendering = (0, LM.j)("InstancedLinesMesh", "enableEdgesRendering"))
+     yU.Instances = [], yU.OnEnginesDisposedObservable = new cU.e, yU._LastCreatedScene = null, yU.UseFallbackTexture = !0, yU.FallbackTexture = ""
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L708` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L19) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L708)

```diff
-   39705: (MM, rM, iM) => {
+   39486: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L710` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L21) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L710)

```diff
-       b: () => jM
+       c: () => QU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L712` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L23) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L712)

```diff
-     var OM = iM(39711);
+     var cU = zU(39493);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L745` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L56) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L745)

```diff
-             OM.e.Warn(nM.message)
+             cU.b.Warn(oU.message)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L751` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L62) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L751)

```diff
-   38885: (MM, rM, iM) => {
+   38649: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L755` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L66) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L755)

```diff
-         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
+         return ("x" === UU ? XU : 3 & XU | 8).toString(16)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L762` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L73) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L762)

```diff
-   39711: (MM, rM, iM) => {
+   39493: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L764` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L75) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L764)

```diff
-       e: () => OM
+       b: () => cU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L785` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L96) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L785)

```diff
-         const rM = MM => MM < 10 ? "0" + MM : "" + MM,
+         const XU = UU => UU < 10 ? "0" + UU : "" + UU,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L800` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L111) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L800)

```diff
-         const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
+         const oU = `<div style='color:${AU.color}'>${QU}</div><br>`;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L833` → after: `L144-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L144-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L144-L290) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L833)

```diff
-   41190: (MM, rM, iM) => {
+   37846: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+     });
+     const cU = "undefined" !== typeof WeakRef;
+     class yU {
+       constructor(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           zU = arguments.length > 2 ? arguments[2] : void 0,
+           cU = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(UU, XU, zU, cU)
+       }
+       initialize(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           zU = arguments.length > 2 ? arguments[2] : void 0,
+           cU = arguments.length > 3 ? arguments[3] : void 0;
+ ... (131 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L835` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L292-L293) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L835)

```diff
-       b: () => OM.d
+       e: () => QU,
+       h: () => yU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L837-L838` → after: `L295-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L295-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/252.js#L295-L303) · [Before (L837-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/252.js#L837-L838)

```diff
-     var OM = iM(41196);
-     (0, OM.b)()
+     const cU = {};
+ 
+     function yU(UU, XU) {
+       cU[UU] = XU
+     }
+ 
+     function QU(UU) {
+       return cU[UU]
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253, 258];
+ export const ids = [253];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L4)

```diff
-   44485: (MM, rM, iM) => {
+   37880: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L6)

```diff
-       d: () => aM
+       d: () => FU,
+       g: () => AU,
+       i: () => yU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L13483` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L10-L12) · [Before (L8-L13483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L13483)

```diff
-     var OM = iM(44412),
-       SM = iM(41091);
-     let jM = !1;
- 
-     function aM() {
-       jM || (jM = !0, SM.c.prototype._sphericalPolynomialTargetSize = 0, SM.c.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(SM.c.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = OM.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = MM, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
- ... (13460 more removed lines; see GitHub link above)
+     const cU = 1024,
+       yU = 16,
+       QU = 36e4;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L13486-L13500` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L15) · [Before (L13486-L13500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L13486-L13500)

```diff
-         this.name = sj, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
-       }
-       dispose() {}
-       get wasUsed() {
-         return this._wasUsed
-       }
-       async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
-         const OM = [];
-         return iM instanceof Vr && (iM.transmissionWeight > 0 && iM.transmissionScatterTexture && OM.push(iM.transmissionScatterTexture), iM.subsurfaceWeight > 0 && iM.subsurfaceColorTexture && OM.push(iM.subsurfaceColorTexture)), OM
-       }
-       _isExtensionEnabled(MM) {
-         if (MM.unlit) return !1;
-         const rM = MM.transmissionWeight > 0 && !MM.geometryThinWalled && MM.transmissionDepth > 0 && !MM.transmissionScatter.equals(BM.d.Black()),
-           iM = MM.subsurfaceWeight > 0 && !MM.geometryThinWalled;
-         return !(!rM && !iM)
+         this.boneCount = UU, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * UU), this.position = new Float64Array(3 * UU), this.scale = new Float64Array(3 * UU).fill(1), this.touched = new Uint8Arra … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L13502-L13516` → after: `L17-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L17-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L17-L24) · [Before (L13502-L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L13502-L13516)

```diff
-       postExportMaterialAsync(MM, rM, iM) {
-         return new Promise((MM => {
-           if (iM instanceof Vr && this._isExtensionEnabled(iM)) {
-             this._wasUsed = !0;
-             let MM = fM.q.Zero(),
-               OM = 0;
-             if (iM.transmissionWeight > 0) {
-               MM = function(MM) {
-                 const rM = new fM.q(Math.sqrt(1 - MM.x), Math.sqrt(1 - MM.y), Math.sqrt(1 - MM.z)),
-                   iM = new fM.q(1, 1, 1),
-                   OM = iM.subtract(rM),
-                   SM = iM.subtract(new fM.q(.139, .139, .139).multiplyInPlace(rM)),
-                   jM = iM.add(new fM.q(1.17, 1.17, 1.17).multiplyInPlace(rM));
-                 return OM.multiplyInPlace(SM).divideInPlace(jM)
-               }(new fM.q(iM.transmissionScatter.r, iM.transmissionScatter.g, iM.transmissionScatter.b)), OM = iM.transmissionScatterAnisotropy
+       clampToLimits() {
+         for (let UU = 0; UU < this.boneCount; UU++)
+           if (0 !== this.touched[UU])
+             for (let XU = 3 * UU; XU < 3 * UU + 3; XU++) {
+               const UU = this.rotation[XU],
+                 zU = this.position[XU],
+                 AU = this.scale[XU];
+               UU >= -36e4 && UU <= QU || (this.rotation[XU] = oU(UU, QU)), zU >= -1024 && zU <= cU || (this.position[XU] = oU(zU, cU)), AU >= -yU && AU <= yU || (this.scale[XU] = oU(AU, yU, 1))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L13613-L13635` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L27-L31) · [Before (L13613-L13635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L13613-L13635)

```diff
-       dispose() {}
-       get wasUsed() {
-         return this._wasUsed
-       }
-       postExportTexture(MM, rM, iM) {
-         if (iM.Hk() || br.e.Warn(`${MM}: "scene" is not defined for Babylon texture ${iM.name}!`), (0 !== iM.uAng || 0 !== iM.vAng) && (br.e.Warn(`${MM}: Texture ${iM.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== iM.uRotationCenter || 0 !== iM.vRotatio … [truncated]
-         const OM = {};
-         let SM = !1;
-         if (0 === iM.uOffset && 0 === iM.vOffset || (OM.offset = [iM.uOffset, iM.vOffset], SM = !0), 1 === iM.uScale && 1 === iM.vScale || (OM.scale = [iM.uScale, iM.vScale], SM = !0), 0 !== iM.wAng) {
-           if (0 !== iM.uRotationCenter || 0 !== iM.vRotationCenter) {
-             if (iM.homogeneousRotationInUVTransform && iM.uScale !== iM.vScale) return void br.e.Warn(`${MM}: Texture ${iM.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Bj}.`);
-             br.e.Warn(`${MM}: Texture ${iM.name} with non-origin rotation center will be exported using an adjusted offset with ${Bj}.`), OM.offset = function(MM) {
-               const {
-                 uOffset: rM,
-                 vOffset: iM,
-                 uRotationCenter: OM,
- ... (7 more removed lines; see GitHub link above)
+       reset() {
+         for (let UU = 0; UU < this.boneCount; UU++)
+           if (0 !== this.touched[UU]) {
+             this.touched[UU] = 0;
+             for (let XU = 3 * UU; XU < 3 * UU + 3; XU++) this.rotation[XU] = 0, this.position[XU] = 0, this.scale[XU] = 1
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L13705-L14294` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L37) · [Before (L13705-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L13705-L14294)

```diff
-         this.name = ja, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = MM
-       }
-       dispose() {}
-       postExportTexture(MM, rM) {
-         const iM = this._exporter._textures[rM.index],
-           OM = iM.source;
-         if (void 0 === OM) return;
-         const SM = this._exporter._images[OM];
-         "image/avif" === (SM.mimeType || (0, qj.j)(SM.uri)) && (iM.source = void 0, iM.extensions || (iM.extensions = {}), iM.extensions[ja] = {
-           source: OM
-         }, this._wasUsed = !0)
-       }
-     }
-     let Pa = !1;
- 
-     function na() {
- ... (574 more removed lines; see GitHub link above)
+         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * UU), this.position = new Float64Arra … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14296-L14333` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L39-L40) · [Before (L14296-L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14296-L14333)

```diff
-     }
- 
-     function Aa(MM, rM) {
-       return rM ? `${rM}:${MM}` : MM
-     }
-     const xa = Object.freeze({
-         eps: 1e-6,
-         maxDecimalsCap: 15,
-         trimTrailingZeros: !0,
-         allowScientific: !1,
-         snapNearZero: !0
-       }),
-       va = Object.freeze({
-         number: xa
-       });
- 
- ... (22 more removed lines; see GitHub link above)
+       touch(UU, XU, zU) {
+         0 === this.touched[UU] && (this.touched[UU] = 1, this.touchedBones[this.touchedCount++] = UU), this.boneWeight[UU] += XU, zU && (this.overrides[UU] = 1)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14335-L14347` → after: `L42-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L42-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L42-L55) · [Before (L14335-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14335-L14347)

```diff
-       toString(MM) {
-         if (!Number.isFinite(MM)) throw new Error(`Cannot format non-finite number: ${MM}`);
-         const rM = this._o,
-           iM = this._clampInt(rM.maxDecimalsCap ?? 15, 0, 20),
-           OM = rM.trimTrailingZeros ?? !0,
-           SM = rM.snapNearZero ?? !0,
-           jM = rM.zeroThreshold ?? rM.eps,
-           aM = 1 / rM.eps;
-         let PM, nM = Math.round(MM * aM) / aM;
-         if (Object.is(nM, -0) && (nM = 0), SM && Math.abs(nM) <= jM && (nM = 0), PM = void 0 !== rM.fixedDecimals ? this._clampInt(rM.fixedDecimals, 0, iM) : this._clampInt(Math.ceil(-Math.log10(rM.eps)), 0, iM), rM.allowScientific, 0 === PM) return String(Math.trunc(nM));
-         let QM = nM.toFixed(PM);
-         if (OM && void 0 === rM.fixedDecimals && (QM = QM.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(QM)) throw new Error(`Scientific notation not allowed in XML output: ${QM}`);
-         return QM
+       applyTo(UU, XU, zU) {
+         let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         for (let yU = 0; yU < this.touchedCount; yU++) {
+           const QU = this.touchedBones[yU],
+             AU = this.boneWeight[QU];
+           if (zU || 1 === this.overrides[QU]) {
+             const zU = XU * Math.min(1, AU);
+             for (let XU = 3 * QU; XU < 3 * QU + 3; XU++) UU.rotation[XU] += (this.rotation[XU] / AU - UU.rotation[XU]) * zU, UU.position[XU] += (this.position[XU] / AU - UU.position[XU]) * zU, UU.scale[XU] += (1 + this.scaleDelta[XU] / AU - UU.scale[XU]) * zU
+           } else {
+             const zU = cU && AU > 1 ? XU / AU : XU;
+             for (let XU = 3 * QU; XU < 3 * QU + 3; XU++) UU.rotation[XU] += this.rotation[XU] * zU, UU.position[XU] += this.position[XU] * zU, UU.scale[XU] *= 1 + this.scaleDelta[XU] * zU
+           }
+           UU.touched[QU] = 1
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14349-L14350` → after: `L57-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L57-L63) · [Before (L14349-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14349-L14350)

```diff
-       _clampInt(MM, rM, iM) {
-         return Number.isFinite(MM) ? (MM = Math.trunc(MM), Math.max(rM, Math.min(iM, MM))) : rM
+       clear() {
+         for (let UU = 0; UU < this.touchedCount; UU++) {
+           const XU = this.touchedBones[UU];
+           this.touched[XU] = 0, this.overrides[XU] = 0, this.boneWeight[XU] = 0;
+           for (let UU = 3 * XU; UU < 3 * XU + 3; UU++) this.rotation[UU] = 0, this.position[UU] = 0, this.scaleDelta[UU] = 0
+         }
+         this.touchedCount = 0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14354-L14359` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L67-L69) · [Before (L14354-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14354-L14359)

```diff
-     function Ia(MM) {
-       return MM instanceof Date
-     }
- 
-     function Ka(MM) {
-       return "string" === typeof MM
+     function oU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       return Number.isNaN(UU) ? zU : Math.min(XU, Math.max(-XU, UU))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14363` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L83-L84) · [Before (L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14363)

```diff
-       return "string" === typeof MM || "number" === typeof MM || "boolean" === typeof MM || "bigint" === typeof MM || Ia(MM)
+       if ("pX" in UU) return dU.createAnimationScript(UU);
+       return new EU(UU).createAnimationScript()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14366-L14367` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L87-L89) · [Before (L14366-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14366-L14367)

```diff
-     function Ta(MM) {
-       return "number" === typeof MM || "boolean" === typeof MM || "bigint" === typeof MM || Ia(MM)
+     function oU(UU, XU, zU, yU) {
+       const QU = UU.pX <= 0 ? 1 : XU + zU * Math.max(0, yU) / UU.pX;
+       return UU.aX === cU.k.LoopOnLastFrame ? QU % 1 : UU.aX === cU.k.NoLoop && QU >= 1 ? null : Math.min(1, QU)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14370-L14390` → after: `L92-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L92-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L92-L101) · [Before (L14370-L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14370-L14390)

```diff
-       constructor(MM, rM) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = MM, this._format = Ba(rM), this._nFmt = new Xa(this._format)
-       }
-       withNamespace() {
-         for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-         for (const OM of rM) this._assignNamespace(OM);
-         return this
-       }
-       serialize(MM, rM) {
-         if (!(rM = rM ?? fa(MM))) throw new Error("can not find name for given object");
-         const iM = Na(rM);
-         iM.ns && this._assignNamespace(iM.ns, "xmlns"), this._gatherNamespaces(MM, new WeakSet);
-         const OM = this._builder.ele(null, iM.name);
-         for (const [SM, jM] of Array.from(this._ns.entries())) OM.att("xmlns", jM, SM);
-         this._writeObjectContent(OM, MM, (new WeakSet).add(MM)), this._builder.end()
-       }
- ... (5 more removed lines; see GitHub link above)
+       createAnimationScript(UU) {
+         const {
+           pX: XU,
+           loop: zU,
+           tX: cU
+         } = UU;
+         return {
+           pX: Math.round(XU),
+           aX: this.createLoopMode(null !== zU && void 0 !== zU && zU),
+           tX: this.createNodeSkeletonAnimationScript(null !== cU && void 0 !== cU ? cU : null)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14399-L14402` → after: `L104-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L104-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L104-L111) · [Before (L14399-L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14399-L14402)

```diff
-       _getPrefix(MM) {
-         if (MM.ns) {
-           const rM = this._ns.get(MM.ns.toLowerCase());
-           if ("xmlns" !== rM) return rM
+       createLoopMode(UU) {
+         switch (UU) {
+           case !1:
+             return cU.k.NoLoop;
+           case !0:
+             return cU.k.LoopOnLastFrame;
+           case "hold-on-last-frame":
+             return cU.k.HoldOnLastFrame
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14405-L14416` → after: `L115-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L115-L118) · [Before (L14405-L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14405-L14416)

```diff
-       _writeObjectContent(MM, rM, iM) {
-         const OM = oa(rM) ?? [],
-           SM = new Map;
-         for (const aM of OM) {
-           const MM = SM.get(aM.prop) ?? [];
-           MM.push(aM), SM.set(aM.prop, MM)
-         }
-         const jM = Object.keys(rM).sort(((MM, rM) => {
-           const iM = (SM.get(MM) ?? []).some((MM => "attr" === MM.kind));
-           return iM === (SM.get(rM) ?? []).some((MM => "attr" === MM.kind)) ? 0 : iM ? -1 : 1
-         }));
-         for (const aM of jM) {
+       createNodeSkeletonAnimationScript(UU) {
+         if (null === UU) return null;
+         const XU = {};
+         for (const zU in UU) {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14418-L14440` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L120) · [Before (L14418-L14440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14418-L14440)

```diff
-           if (null === OM || void 0 === OM) continue;
-           const jM = SM.get(aM);
-           if (jM) {
-             if (jM.some((MM => !0 === MM.ignore || "none" === MM.kind))) continue;
-             for (const rM of jM) {
-               const iM = rM.name ?? rM.prop.toLowerCase();
-               if (iM) switch (rM.kind) {
-                 case "attr": {
-                   let SM = null;
-                   if ("number" === typeof OM && this._nFmt && (SM = this._nFmt.toString(OM)), rM.formatter) {
-                     SM = new rM.formatter(this._format).toString(OM)
-                   }
-                   if (SM = SM ?? OM.toString(), SM) {
-                     const rM = Na(iM),
-                       OM = this._getPrefix(rM),
-                       jM = Aa(rM.name, OM);
- ... (7 more removed lines; see GitHub link above)
+           XU[zU] = this.createNodeAnimationScript(cU)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14443-L14455` → after: `L124-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L124-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L124-L131) · [Before (L14443-L14455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14443-L14455)

```diff
-       _gatherNamespaces(MM, rM) {
-         if (rM.has(MM)) return;
-         if (rM.add(MM), Array.isArray(MM)) {
-           for (const iM of MM) qa(iM) || this._gatherNamespaces(iM, rM);
-           return
-         }
-         const iM = fa(MM);
-         iM && this._assignNamespace(iM);
-         const OM = oa(MM) ?? [],
-           SM = new Map;
-         for (const aM of OM) {
-           const MM = SM.get(aM.prop) ?? [];
-           MM.push(aM), SM.set(aM.prop, MM)
+       createNodeAnimationScript(UU) {
+         const {
+           timeline: XU
+         } = UU, zU = XU.filter((UU => Number.isFinite(UU.timeFraction)));
+         return zU.sort(((UU, XU) => UU.timeFraction - XU.timeFraction)), {
+           rotation: this.createTimelineFromKeyframes(zU, "rotation", IU),
+           position: this.createTimelineFromKeyframes(zU, "position", aU),
+           scale: this.createTimelineFromKeyframes(zU, "scale", aU, gU)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14458` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L137) · [Before (L14458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14458)

```diff
-         for (const aM of Object.keys(MM)) {
+         for (const DU of UU) {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14463-L14464` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L140-L141) · [Before (L14463-L14464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14463-L14464)

```diff
-             if (iM.some((MM => !0 === MM.ignore || "none" === MM.kind))) continue;
-             for (const MM of iM) MM.name && this._assignNamespace(MM.name)
+             const XU = this.createAnimationFrameWithoutPrecomputes(DU.timeFraction, UU, cU);
+             YU(XU) && yU.push(XU)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14468` → after: `L144-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L144-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L144-L156) · [Before (L14468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14468)

```diff
-         for (const aM of jM) qa(aM) || this._gatherNamespaces(aM, rM)
+         const QU = [];
+         for (let DU = 0; DU < yU.length; DU++) {
+           var AU, FU, oU;
+           const UU = yU[DU],
+             XU = null !== (AU = yU[DU - 1]) && void 0 !== AU ? AU : UU,
+             cU = null !== (FU = yU[DU + 1]) && void 0 !== FU ? FU : UU,
+             EU = null !== (oU = yU[DU + 2]) && void 0 !== oU ? oU : cU;
+           QU.push({
+             ...UU,
+             ...zU(XU.post, XU.timeFraction, UU.post, UU.timeFraction, cU.pre, cU.timeFraction, EU.pre, EU.timeFraction)
+           })
+         }
+         return QU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14470-L14477` → after: `L158-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L158-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L158-L170) · [Before (L14470-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14470-L14477)

```diff
-       _assignNamespace(MM, rM) {
-         const iM = Na(MM);
-         if (iM?.ns) {
-           const MM = iM.ns.toLowerCase();
-           this._ns.get(MM) || this._ns.set(MM, rM ?? this._buildNsPrefix(MM))
-         } else if ("xmlns" === rM) {
-           const MM = iM.name.toLowerCase();
-           this._ns.get(MM) || this._ns.set(MM, rM ?? this._buildNsPrefix(MM))
+       createAnimationFrameWithoutPrecomputes(UU, XU, zU) {
+         let cU, yU, QU = null;
+         var AU;
+         if ("object" === typeof XU && "point" in XU) QU = null !== (AU = XU.GX) && void 0 !== AU ? AU : null, cU = XU.point, yU = XU.point;
+         else if ("object" === typeof XU && "pre" in XU) {
+           var FU;
+           QU = null !== (FU = XU.GX) && void 0 !== FU ? FU : null, cU = XU.pre, yU = XU.post
+         } else cU = XU, yU = XU;
+         return {
+           timeFraction: UU,
+           GX: this.createLerpMode(QU),
+           pre: zU(cU),
+           post: zU(yU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14480-L14490` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L173-L174) · [Before (L14480-L14490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14480-L14490)

```diff
-       _buildNsPrefix(MM) {
-         let rM, iM = !1;
-         do {
-           rM = "ns" + this._prefixCount++;
-           for (const MM of Array.from(this._ns.values()))
-             if (MM === rM) {
-               iM = !0;
-               break
-             }
-         } while (iM);
-         return rM
+       createLerpMode(UU) {
+         return null === UU ? cU.i.Linear : DU.LERP_MODE_SCHEMA_MAPPING[UU]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14493-L14498` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L177-L180) · [Before (L14493-L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14493-L14498)

```diff
-     class ca {}
-     var MP;
-     ca.OpenTag = "<", ca.CloseTag = ">", ca.Slash = "/", ca.Question = "?", ca.Quote = '"', ca.Equal = "=", ca.Space = " ", ca.Semicolon = ":", ca.Dec = "<?xml", ca.Xml = "xml", ca.Xmlns = "xmlns", ca.Xsi = "xsi", ca.VersionKeyword = "version", ca.EncodingKeyword = "encoding", ca … [truncated]
-       function(MM) {
-         MM[MM.Declaration = 0] = "Declaration", MM[MM.Tag = 1] = "Tag", MM[MM.Attribute = 2] = "Attribute", MM[MM.Text = 3] = "Text"
-       }(MP || (MP = {}));
+     DU.LERP_MODE_SCHEMA_MAPPING = {
+       linear: cU.i.Linear,
+       "catmull-rom-spline": cU.i.CatmullRomSpline
+     };
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14501-L14504` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L183) · [Before (L14501-L14504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14501-L14504)

```diff
-         this._ctxStack = [], this._d = 0, this._w = MM
-       }
-       dec(MM, rM, iM) {
-         return this._w.write(ca.Dec), this._writeAttStr(ca.VersionKeyword, MM), rM && this._writeAttStr(ca.EncodingKeyword, rM), void 0 !== iM && this._writeAttStr(ca.StandaloneKeyword, iM ? "yes" : "no"), this._w.write(ca.Question, ca.CloseTag), this
+         this.animationSchema = UU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14506-L14521` → after: `L185-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L185-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L185-L194) · [Before (L14506-L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14506-L14521)

```diff
-       att(MM, rM, iM) {
-         const OM = this._peekContext();
-         if (!OM) throw new Error("att() without open element");
-         if (OM.closed) throw new Error(`att() after start tag closed for <${OM.name}>`);
-         if (this._isXmlnsDecl(MM, rM)) {
-           if (rM === ca.Xmlns) OM.defaultNs = iM, this._registerNamespace(OM, "", iM), this._writeAttStr(ca.Xmlns, iM);
-           else if (MM) this._registerNamespace(OM, rM, iM), this._writeAttStr(`${MM}:${rM}`, iM);
-           else {
-             const MM = rM.slice(6);
-             this._registerNamespace(OM, MM, iM), this._writeAttStr(rM, iM)
-           }
-           return OM.lastToken = MP.Attribute, this
-         }
-         let SM = rM;
-         if (MM) {
-           SM = `${this._ensurePrefixDeclared(OM,MM)}:${rM}`
+       createAnimationScript() {
+         const {
+           animation_length: UU,
+           loop: XU,
+           bones: zU
+         } = this.animationSchema;
+         return {
+           pX: Math.round(1e3 * UU),
+           aX: this.createLoopMode(null !== XU && void 0 !== XU && XU),
+           tX: this.createNodeSkeletonAnimationScript(null !== zU && void 0 !== zU ? zU : null)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14525-L14530` → after: `L197-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L197-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L197-L204) · [Before (L14525-L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14525-L14530)

```diff
-       ele(MM, rM) {
-         const iM = this._peekContext();
-         iM && this._closeOpenTagIfNeeded(iM);
-         let OM = rM;
-         if (MM) {
-           OM = `${this._lookupPrefix(MM)??MM}:${rM}`
+       createLoopMode(UU) {
+         switch (UU) {
+           case !1:
+             return cU.k.NoLoop;
+           case !0:
+             return cU.k.LoopOnLastFrame;
+           case "hold_on_last_frame":
+             return cU.k.HoldOnLastFrame
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14532-L14557` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L206) · [Before (L14532-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14532-L14557)

```diff
-         return this._pushContext(OM, ++this._d), this._w.write(ca.OpenTag, OM), this
-       }
-       text(MM) {
-         const rM = this._peekContext();
-         if (!rM) throw new Error("text() without open element");
-         return this._closeOpenTagIfNeeded(rM), rM.lastToken = MP.Text, this._w.write(this._escText(MM)), this
-       }
-       end() {
-         const MM = this._popContext();
-         return MM && (this._d--, MM.closed ? this._w.write(ca.OpenTag, ca.Slash, MM.name, ca.CloseTag) : this._w.write(ca.Slash, ca.CloseTag)), this
-       }
-       _pushContext(MM, rM) {
-         const iM = new rP.Context(MM, rM);
-         return this._ctxStack.push(iM), iM
-       }
-       _popContext() {
- ... (10 more removed lines; see GitHub link above)
+         throw new Error(`Invalid Blockbench loop mode schema: ${UU}`)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14559-L14590` → after: `L208-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L208-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L208-L213) · [Before (L14559-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14559-L14590)

```diff
-       _lookupPrefix(MM) {
-         let rM = this._ctxStack.length - 1;
-         if (rM >= 0)
-           do {
-             const iM = this._ctxStack[rM--],
-               OM = iM.ns2prefix?.get(MM);
-             if (OM) return OM
-           } while (rM >= 0)
-       }
-       _escText(MM) {
-         return MM.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-       }
-       _escAttr(MM) {
-         return this._escText(MM).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
-       }
-       _isXmlnsDecl(MM, rM) {
- ... (16 more removed lines; see GitHub link above)
+       createNodeSkeletonAnimationScript(UU) {
+         if (null === UU) return null;
+         const XU = {};
+         for (const zU in UU) {
+           const cU = UU[zU];
+           XU[zU] = this.createNodeAnimationScript(cU)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14593-L14646` → after: `L217-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L217-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L217-L227) · [Before (L14593-L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14593-L14646)

```diff
-       _ensurePrefixDeclared(MM, rM) {
-         const iM = this._lookupPrefix(rM);
-         if (iM) return iM;
-         if (MM.closed) throw new Error(`can not declare namespace after start tag closed for <${MM.name}>`);
-         const OM = this._allocPrefix(MM);
-         return this._writeAttStr(`${ca.Xmlns}:${OM}`, rM), this._registerNamespace(MM, OM, rM), OM
-       }
-       _closeOpenTagIfNeeded(MM) {
-         MM.closed || (this._w.write(ca.CloseTag), MM.closed = !0)
-       }
-     }
-     rP.Context = class {
-       constructor(MM, rM) {
-         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = MM, this.depth = rM
-       }
-     };
- ... (38 more removed lines; see GitHub link above)
+       createNodeAnimationScript(UU) {
+         const {
+           rotation: XU,
+           position: zU,
+           scale: cU
+         } = UU;
+         return {
+           rotation: this.createAnimationTimeline(null !== XU && void 0 !== XU ? XU : null, GU, IU, !0),
+           position: this.createAnimationTimeline(null !== zU && void 0 !== zU ? zU : null, ZU, aU, !1),
+           scale: this.createAnimationTimeline(null !== cU && void 0 !== cU ? cU : null, tU, aU, !1)
+         }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14648-L14649` → after: `L229-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L229-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L229-L265) · [Before (L14648-L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14648-L14649)

```diff
-       clear() {
-         this._pending = "", this._pendingChars = 0, this.count = 0
+       createAnimationTimeline(UU, XU, zU, cU) {
+         if (null === UU) return [];
+         (Array.isArray(UU) || "number" === typeof UU) && (UU = {
+           "0.0": UU
+         });
+         const yU = Object.entries(UU).map((UU => {
+           let [zU, cU] = UU;
+           const yU = Number(zU) / this.animationSchema.animation_length;
+           return this.createAnimationFrameWithoutPrecomputes(yU, cU, XU)
+         })).filter(YU);
+         yU.sort(((UU, XU) => UU.timeFraction - XU.timeFraction)), cU && function(UU) {
+           for (let XU = 1; XU < UU.length; XU++) {
+             const zU = UU[XU - 1].post,
+               cU = UU[XU],
+               yU = RU(cU.pre),
+               QU = RU(cU.post),
+ ... (21 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14651-L14674` → after: `L267-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L267-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L267-L281) · [Before (L14651-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14651-L14674)

```diff
-     }
-     const SP = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
-       jP = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
-     var aP, PP;
-     ! function(MM) {
-       MM.micron = "micron", MM.millimeter = "millimeter", MM.centimeter = "centimeter", MM.inch = "inch", MM.foot = "foot", MM.meter = "meter"
-     }(aP || (aP = {})),
-     function(MM) {
-       MM.model = "model", MM.solidsupport = "solidsupport", MM.support = "support", MM.surface = "surface", MM.other = "other"
-     }(PP || (PP = {}));
-     const nP = "http://schemas.openxmlformats.org/package/2006/content-types",
-       QP = "http://schemas.openxmlformats.org/package/2006/relationships";
-     var zP;
-     ! function(MM) {
-       MM.Relationships = "application/vnd.openxmlformats-package.relationships+xml", MM.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", MM.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", MM.Colors = "application/vnd.ms-package.3dmanufactur … [truncated]
-     }(zP || (zP = {}));
- ... (8 more removed lines; see GitHub link above)
+       createAnimationFrameWithoutPrecomputes(UU, XU, zU) {
+         let cU, yU, QU = null;
+         if ("object" === typeof XU && "post" in XU) {
+           var AU;
+           QU = null !== (AU = XU.lerp_mode) && void 0 !== AU ? AU : null, yU = zU(XU.post), cU = void 0 !== XU.pre ? zU(XU.pre) : yU
+         } else {
+           const UU = zU(XU);
+           yU = UU, cU = UU
+         }
+         return {
+           timeFraction: UU,
+           GX: this.createLerpMode(QU),
+           pre: cU,
+           post: yU
+         }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14676-L14677` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L283-L284) · [Before (L14676-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14676-L14677)

```diff
-       static IsThreeDimModel(MM) {
-         return MM === dP.ThreeDimModel
+       createLerpMode(UU) {
+         return null === UU ? cU.i.Linear : EU.LERP_MODE_SCHEMA_MAPPING[UU]
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14680-L14883` → after: `L287-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L287-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L287-L289) · [Before (L14680-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14680-L14883)

```diff
-     dP.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", dP.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", dP.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", dP.MustPre … [truncated]
-     let yP = (() => {
-         let MM, rM, iM = [sa({
-             ns: nP,
-             name: "Types"
-           })],
-           OM = [];
-         rM = class {
-           constructor() {
-             this.items = []
-           }
-         };
-         return (0, wM.p)(rM, "ThreeMfContentTypes"), (() => {
-           const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           (0, wM.i)(null, MM = {
-             value: rM
- ... (188 more removed lines; see GitHub link above)
+ 
+     function YU(UU) {
+       return Number.isFinite(UU.timeFraction) && NU(UU.pre) && NU(UU.post)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14885-L14894` → after: `L291-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L291-L293) · [Before (L14885-L14894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14885-L14894)

```diff
-     class CP {
-       static Zero() {
-         return new CP([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
-       }
-       constructor(MM) {
-         this.values = MM
-       }
-       toString() {
-         return this.values.join(" ")
-       }
+ 
+     function NU(UU) {
+       return Number.isFinite(UU[0]) && Number.isFinite(UU[1]) && Number.isFinite(UU[2])
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14896-L14901` → after: `L295-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L295-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L295-L304) · [Before (L14896-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14896-L14901)

```diff
-     class eP {
-       constructor(MM) {
-         this.o = MM, this._f = new Xa(MM)
-       }
-       toString(MM) {
-         return MM.values.map((MM => this._f.toString(MM))).join(" ")
+ 
+     function IU(UU, XU, zU, cU, yU, QU, AU, FU) {
+       const oU = QU - XU,
+         DU = QU - cU,
+         EU = FU - cU,
+         YU = [null, null, null];
+       for (let NU = 0; NU < YU.length; NU++) YU[NU] = pU(UU[NU], zU[NU], yU[NU], AU[NU], oU, EU);
+       return {
+         BX: DU,
+         ZX: YU
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L14904-L15887` → after: `L307-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L307-L312) · [Before (L14904-L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L14904-L15887)

```diff
-     let bP = (() => {
-         let MM, rM, iM, OM, SM, jM = [sa({
-             ns: SP,
-             name: "model"
-           })],
-           aM = [],
-           PM = [],
-           nM = [],
-           QM = [],
-           zM = [],
-           LM = [],
-           mM = [];
-         rM = class {
-           constructor() {
-             this.unit = (0, wM.m)(this, PM, aP.millimeter), this.requiredextensions = ((0, wM.m)(this, nM), (0, wM.m)(this, QM, void 0)), this.recommendedextensions = ((0, wM.m)(this, zM), (0, wM.m)(this, LM, void 0)), this.metadata = (0, wM.m)(this, mM)
-           }
- ... (968 more removed lines; see GitHub link above)
+ 
+     function pU(UU, XU, zU, cU, QU, AU) {
+       return {
+         PX: yU.d.computeShortestRotation(UU, zU) / QU,
+         WX: yU.d.computeShortestRotation(XU, cU) / AU,
+         delta: yU.d.computeShortestRotation(XU, zU)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L15890-L15895` → after: `L315-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L315-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L315-L328) · [Before (L15890-L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L15890-L15895)

```diff
-     class xP extends AP {
-       constructor(MM) {
-         super(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PP.model), this._object.content = new kP
-       }
-       withComponent(MM, rM) {
-         return this._object.content.component.push(new ZP(MM, rM)), this
+ 
+     function aU(UU, XU, zU, cU, yU, QU, AU, FU) {
+       const oU = QU - XU,
+         DU = QU - cU,
+         EU = FU - cU,
+         YU = [null, null, null];
+       for (let NU = 0; NU < YU.length; NU++) YU[NU] = {
+         PX: (yU[NU] - UU[NU]) / oU,
+         WX: (AU[NU] - zU[NU]) / EU,
+         delta: yU[NU] - zU[NU]
+       };
+       return {
+         BX: DU,
+         ZX: YU
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L15898-L15939` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L331-L333) · [Before (L15898-L15939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L15898-L15939)

```diff
-     class vP extends AP {
-       constructor(MM) {
-         super(MM, PP.model)
-       }
-       withPostProcessHandlers(MM, rM) {
-         return this._vh = MM, this._th = rM, this
-       }
-       withData(MM) {
-         return this._object.content = this._buildMesh(MM), this
-       }
-       withMaterial(MM, rM) {
-         return this._object.pid = MM, this._object.pindex = rM, this
-       }
-       _buildMesh(MM) {
-         const rM = this._buildVertices(MM.positions),
-           iM = this._buildTriangle(MM.indices);
- ... (26 more removed lines; see GitHub link above)
+ 
+     function tU(UU) {
+       return gU("number" === typeof UU ? [UU, UU, UU] : UU)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L15941-L15962` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L335-L337) · [Before (L15941-L15962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L15941-L15962)

```diff
-     class FP {
-       constructor(MM) {
-         this._m = new oP(MM)
-       }
-       withColor(MM, rM) {
-         this._m.base = this._m.base ?? [];
-         let iM = this._m.base.find((rM => rM.name.toLowerCase() === MM.toLowerCase()));
-         return iM ? (iM.displaycolor = this._rgbaToHex(rM), this) : (iM = new fP(MM, this._rgbaToHex(rM)), this._m.base.push(iM), this)
-       }
-       build() {
-         return this._m
-       }
-       _rgbaToHex(MM) {
-         const rM = MM => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(MM, 1 / 2.2)))),
-           iM = rM(MM.r).toString(16).padStart(2, "0").toUpperCase(),
-           OM = rM(MM.g).toString(16).padStart(2, "0").toUpperCase(),
- ... (6 more removed lines; see GitHub link above)
+ 
+     function gU(UU) {
+       return [kU(UU[0]), kU(UU[1]), kU(UU[2])]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L15964-L15993` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L339-L341) · [Before (L15964-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L15964-L15993)

```diff
-     class BP {
-       constructor() {
-         this._model = new bP, this._objects = new Map
-       }
-       withMetaData(MM, rM, iM, OM) {
-         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new wP(MM, rM, iM, OM)), this
-       }
-       withMaterial(MM) {
-         return MM instanceof FP && (MM = MM.build()), MM && (this._model.resources = this._model.resources ?? new gP, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(MM)), this
-       }
-       withMesh(MM) {
-         return MM instanceof vP && (MM = MM.build()), this._model.resources = this._model.resources ?? new gP, this._model.resources.object.push(MM), this
-       }
-       withComponents(MM) {
-         return MM instanceof xP && (MM = MM.build()), this._model.resources = this._model.resources ?? new gP, this._model.resources.object.push(MM), this
-       }
- ... (14 more removed lines; see GitHub link above)
+ 
+     function kU(UU) {
+       return Number.isFinite(UU) ? Math.min(AU.i, Math.max(-AU.i, UU)) : UU
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L15995-L16018` → after: `L343-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L343-L346) · [Before (L15995-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L15995-L16018)

```diff
-     BP.KnownMetaSet = new Set(bP.KnownMeta.map((MM => MM.toLowerCase())));
-     class XP {
-       withContentType(MM) {
-         this._cts || (this._cts = new yP);
-         const rM = this._cts.items;
-         return rM.some((rM => rM.ext === MM.ext && rM.ct === MM.ct)) || rM.push(MM), this
-       }
-       withRelationship(MM) {
-         this._rs || (this._rs = new EP);
-         const rM = this._rs.items;
-         return rM.some((rM => rM.id === MM.id)) || rM.push(MM), this.withContentType(new lP("rels", zP.Relationships)), this
-       }
-       withModel(MM) {
-         return MM instanceof BP && (MM = MM.build()), this._m = MM, this.withContentType(new lP("model", zP.Model)), this
-       }
-       build() {
- ... (8 more removed lines; see GitHub link above)
+ 
+     function GU(UU) {
+       const [XU, zU, cU] = UU, AU = -(0, QU.l)(XU), FU = -(0, QU.l)(zU), oU = (0, QU.l)(cU), DU = yU.d.quaternionFromEulerZYX(AU, FU, oU);
+       return yU.d.eulerYXZFromQuaternion(DU)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L16020-L16059` → after: `L348-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L348-L355) · [Before (L16020-L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L16020-L16059)

```diff
-     class IP {
-       constructor(MM) {
-         this._o = MM
-       }
-       get options() {
-         return this._o
-       }
-       async serializeAsync(MM) {
-         const rM = await this.ensureZipLibReadyAsync();
-         if (!rM) return;
-         const iM = rM.Zip,
-           OM = rM.ZipDeflate;
-         if (!iM || !OM) throw new Error("fflate Zip / ZipDeflate not available");
-         const SM = function(MM, rM, iM) {
-           const SM = new OM(rM, {
-             level: 6
- ... (24 more removed lines; see GitHub link above)
+     EU.LERP_MODE_SCHEMA_MAPPING = {
+       linear: cU.i.Linear,
+       catmullrom: cU.i.CatmullRomSpline
+     };
+     const BU = 1 / 16;
+ 
+     function ZU(UU) {
+       return [-UU[0] * BU, UU[1] * BU, UU[2] * BU]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L16061-L16073` → after: `L357-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L357-L360) · [Before (L16061-L16073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L16061-L16073)

```diff
-     class KP {
-       static async SerializeToMemoryAsync(MM) {
-         const rM = new Array;
-         let iM = 0;
-         for (var OM = arguments.length, SM = new Array(OM > 1 ? OM - 1 : 0), jM = 1; jM < OM; jM++) SM[jM - 1] = arguments[jM];
-         if (await MM.serializeAsync((function(MM, OM, SM) {
-             rM.push(OM), iM += OM.length
-           }), ...SM), !iM) return;
-         const aM = new Uint8Array(iM);
-         let PM = 0;
-         for (const nM of rM) aM.set(nM, PM), PM += nM.length;
-         return aM
-       }
+ 
+     function RU(UU) {
+       const [XU, zU, cU] = UU;
+       return [XU >= 0 ? Math.PI - XU : -Math.PI - XU, PU(zU + Math.PI), PU(cU + Math.PI)]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L16075-L16091` → after: `L362-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L362-L364) · [Before (L16075-L16091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L16075-L16091)

```diff
-     class qP {}
-     qP.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
-     class TP {
-       constructor() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
-           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-         this._from = MM, this._to = rM, this._step = iM, this._i = MM
-       }
-       next() {
-         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
-         const MM = this._i;
-         return this._i += this._step, MM
-       }
-       reset() {
-         return this._i = this._from, this
- ... (1 more removed lines; see GitHub link above)
+ 
+     function PU(UU) {
+       return yU.d.mod(UU + Math.PI, 2 * Math.PI) - Math.PI
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L16093-L16192` → after: `L366-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L366-L368) · [Before (L16093-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L16093-L16192)

```diff
-     class VP extends IP {
-       constructor() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         super({
-           ...VP.DefaultOptions,
-           ...MM
-         })
-       }
-       toModel(MM) {
-         for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
-         iM = iM.filter((MM => MM instanceof LO.d || MM instanceof HM.b));
-         const SM = new TP,
-           jM = MM,
-           aM = new Map,
-           PM = this.options.exportInstances ? [] : null;
-         for (let nM = 0; nM < iM.length; nM++) {
- ... (84 more removed lines; see GitHub link above)
+ 
+     function WU(UU, XU) {
+       return Math.abs(yU.d.computeShortestRotation(UU[0], XU[0])) + Math.abs(yU.d.computeShortestRotation(UU[1], XU[1])) + Math.abs(yU.d.computeShortestRotation(UU[2], XU[2]))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L16194-L16197` → after: `L370-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L370-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/253.js#L370-L390) · [Before (L16194-L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/253.js#L16194-L16197)

```diff
-     VP.DefaultOptions = {
-       unit: aP.meter,
-       exportInstances: !1
-     }, VP._PositionKind = "position", VP._R_BJS_TO_3MF = fM.d.RotationX(Math.PI / 2).multiply(fM.d.Scaling(1, -1, 1))
+     const dU = new DU
+   },
+   37870: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU,
+       f: () => QU,
+       i: () => cU,
+       k: () => yU
+     });
+     let cU = function(UU) {
+         return UU[UU.Linear = 0] = "Linear", UU[UU.CatmullRomSpline = 1] = "CatmullRomSpline", UU
+       }({}),
+       yU = function(UU) {
+         return UU[UU.NoLoop = 0] = "NoLoop", UU[UU.LoopOnLastFrame = 1] = "LoopOnLastFrame", UU[UU.HoldOnLastFrame = 2] = "HoldOnLastFrame", UU
+       }({}),
+       QU = function(UU) {
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/254.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/254.js#L4)

```diff
-   38064: (MM, rM, iM) => {
+   37919: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/254.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/254.js#L6)

```diff
-       c: () => SM
+       Color3: () => cU.b,
+       e: () => cU.e
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L8-L2917` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/254.js#L9-L10) · [Before (L8-L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/254.js#L8-L2917)

```diff
-     var OM = iM(38068);
-     class SM {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
-   },
-   38056: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => OM
-     });
-     class OM {
- ... (2894 more removed lines; see GitHub link above)
+     var cU = zU(37923);
+     (0, cU.f)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L4` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/255.js#L4-L40) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/255.js#L4)

```diff
-   38173: (MM, rM, iM) => {
+   63966: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       DEVTOOLS_SHADERS: () => QU,
+       registerDevtoolsShader: () => AU
+     });
+     var cU = zU(40961),
+       yU = zU(37946);
+     const QU = {
+       devtoolsNormal: function(UU) {
+         return {
+           vertex: `\n\t\t\t${(0,yU.c)(UU,"position","vec3")}\n\t\t\t${(0,yU.c)(UU,"normal","vec3")}\n\t\t\t${(0,yU.tb)(UU,"worldViewProjection","mat4")}\n\t\t\t${(0,yU.tb)(UU,"world","mat4")}\n\t\t\t${(0,yU.Bb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yU.Fb)(UU,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,yU.Bb)(UU,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,yU.Q)(UU,`\n\t\t\t\t\n\t\t\t\t${(0,yU.C)(UU,"vec3","normalColor",`abs(${(0,yU.R)(UU,"vNormal")})`)}\n\t\t\t\t${(0,yU.M)(UU)} = ${(0,yU.k)(UU,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(UU) {
+         return {
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L6-L7` → after: `L42-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L42-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/255.js#L42-L66) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/255.js#L6-L7)

```diff
-       d: () => LM,
-       h: () => mM,
+       $: () => PU,
+       B: () => YU,
+       Bb: () => tU,
+       C: () => EU,
+       F: () => WU,
+       Fb: () => GU,
+       H: () => OU,
+       Ib: () => LU,
+       L: () => QU,
+       Lb: () => eU,
+       M: () => uU,
+       P: () => rU,
+       Q: () => BU,
+       R: () => CU,
+       S: () => qU,
+       T: () => HU,
+ ... (9 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L9` → after: `L68-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L68-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/255.js#L68-L78) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/255.js#L9)

```diff
-       j: () => HM
+       ib: () => nU,
+       k: () => oU,
+       mb: () => MU,
+       nb: () => ZU,
+       o: () => fU,
+       r: () => iU,
+       rb: () => DU,
+       tb: () => gU,
+       u: () => NU,
+       x: () => IU,
+       xb: () => wU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L11-L30` → after: `L80-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L80-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/255.js#L80-L268) · [Before (L11-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/255.js#L11-L30)

```diff
-     var OM = iM(38048),
-       SM = iM(38044),
-       jM = iM(38074),
-       aM = iM(38085);
- 
-     function PM(MM) {
-       return Math.pow(MM, SM.h)
-     }
- 
-     function nM(MM) {
-       return MM <= .04045 ? .0773993808 * MM : Math.pow(.947867299 * (MM + .055), 2.4)
-     }
- 
-     function QM(MM) {
-       return Math.pow(MM, SM.f)
-     }
- ... (4 more removed lines; see GitHub link above)
+     const cU = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function yU(UU) {
+       return UU === cU.WGSL
+     }
+ 
+     function QU(UU, XU, zU) {
+       return yU(UU) ? zU : XU
+     }
+     const AU = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (173 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L32-L801` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/255.js#L270-L280) · [Before (L32-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/255.js#L32-L801)

```diff
-       constructor() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = MM, this.g = rM, this.b = iM
-       }
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
-       }
-       getClassName() {
-         return "Color3"
-       }
-       getHashCode() {
-         let MM = 255 * this.r | 0;
-         return MM = 397 * MM ^ 255 * this.g, MM = 397 * MM ^ 255 * this.b, MM
-       }
- ... (754 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersRepository : cU.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersStore : cU.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.IncludesShadersStore : cU.IncludesShadersStoreWGSL
+       }
+     }
+     cU.ShadersRepository = "src/Shaders/", cU.ShadersStore = {}, cU.IncludesShadersStore = {}, cU.ShadersRepositoryWGSL = "src/ShadersWGSL/", cU.ShadersStoreWGSL = {}, cU.IncludesShadersStoreWGSL = {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L4)

```diff
-   38064: (MM, rM, iM) => {
+   42167: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L6)

```diff
-       c: () => SM
+       noaDevTools: () => YU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L8-L17` → after: `L8-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L8-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L8-L249) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L8-L17)

```diff
-     var OM = iM(38068);
-     class SM {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
+     var cU = zU(38194),
+       yU = zU(38178),
+       QU = zU(3043),
+       AU = zU(1800),
+       FU = zU(42077);
+ 
+     function oU(UU) {
+       const {
+         WY: XU
+       } = UU, zU = XU.engine, cU = {
+         width: zU.getRenderWidth(),
+         height: zU.getRenderHeight()
+       };
+       return {
+         canvas: zU.getRenderingCanvas(),
+         maxTextureSize: zU.getCaps().maxTextureSize,
+ ... (226 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L19` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L251) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L19)

```diff
-   39705: (MM, rM, iM) => {
+   42077: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L21` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L253-L254) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L21)

```diff
-       b: () => jM
+       e: () => FU,
+       i: () => oU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L23-L37` → after: `L256-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L256-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L256-L348) · [Before (L23-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L23-L37)

```diff
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
-           } while (MM = Object.getPrototypeOf(MM));
-           return rM
-         }(MM);
+     var cU = zU(1817);
+     const yU = 33177600,
+       QU = 3e4;
+     let AU = !1;
+ 
+     function FU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: FU = 1,
+         type: oU = "image/png",
+         quality: DU
+       } = cU;
+       return UU.BY() ? AU ? Promise.reject(new Error("A screenshot is already being taken")) : (AU = !0, new Promise(((cU, EU) => {
+         let YU, NU = 2,
+           IU = null;
+         const pU = () => {
+ ... (77 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L39-L161` → after: `L350-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L350-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L350-L364) · [Before (L39-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L39-L161)

```diff
-           if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
-           if (QM.endsWith("Observable")) continue;
-           if (iM && -1 !== iM.indexOf(QM)) continue;
-           const PM = MM[QM],
-             zM = typeof PM;
-           if ("function" !== zM) try {
-             if ("object" === zM)
-               if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
-               else if (PM instanceof Array) {
-               if (rM[QM] = [], PM.length > 0)
-                 if ("object" == typeof PM[0])
-                   for (let MM = 0; MM < PM.length; MM++) {
-                     const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
-                   } else rM[QM] = PM.slice(0)
-             } else rM[QM] = SM(PM, rM, aM);
-             else rM[QM] = PM
- ... (107 more removed lines; see GitHub link above)
+           const UU = XU._noaFaceGroups;
+           UU && AU(XU, UU)
+         }
+       } else QU = Math.max(0, QU - 1)
+     }
+ 
+     function oU(UU, XU, zU) {
+       let yU = -1,
+         QU = 0;
+       for (let AU = 0; AU < cU.c; AU++) {
+         const zU = UU[AU],
+           FU = UU[AU + 1];
+         FU > zU && XU & 1 << cU.b[AU] && (yU < 0 && (yU = zU), QU = FU)
+       }
+       return yU < 0 ? (zU[0] = 0, zU[1] = 0, 0) : (zU[0] = yU, zU[1] = QU - yU, QU - yU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L165-L276` → after: `L368-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L368-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L368-L412) · [Before (L165-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L165-L276)

```diff
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = MM, this.mask = rM, this.scope = iM, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
-       }
-       remove() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(MM)
-       }
-     }
-     class aM {
-       static FromPromise(MM, rM) {
-         const iM = new aM;
-         return MM.then((MM => {
-           iM.notifyObservers(MM)
-         })).catch((MM => {
-           if (!rM) throw MM;
-           rM.notifyObservers(MM)
- ... (96 more removed lines; see GitHub link above)
+         this.aY = UU, this.engine = XU, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(UU, XU) {
+         if (!XU) return;
+         const zU = XU.getProjectionMatrix().m,
+           AU = 0 === QU && 0 === zU[15],
+           FU = XU.globalPosition,
+           {
+             engine: DU
+           } = this,
+           EU = AU ? (0, yU.e)(zU, DU.getRenderWidth(), DU.getRenderHeight()) : 0;
+         FU.x === this.eyeX && FU.y === this.eyeY && FU.z === this.eyeZ && EU === this.focalPx && AU === this.culling || (this.epoch++, this.eyeX = FU.x, this.eyeY = FU.y, this.eyeZ = FU.z, this.focalPx = EU, this.culling = AU);
+         const {
+           epoch: YU,
+           range: NU
+         } = this, IU = this.aY / 2, pU = IU * Math.sqrt(3), aU = UU.data, tU = UU.length;
+ ... (29 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L280-L290` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L416) · [Before (L280-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L280-L290)

```diff
-   63884: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       AsyncLoop: () => OM.c,
-       RegisterTools: () => OM.d,
-       Tools: () => OM.e,
-       className: () => OM.g
-     });
-     var OM = iM(41205);
-     (0, OM.d)()
-   },
-   38085: (MM, rM, iM) => {
+   38178: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L295` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L421-L423) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L295)

```diff
-     const OM = {};
+     const cU = new WeakSet;
+     let yU = 0;
+     const QU = new Set;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L298` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L426) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L298)

```diff
-       OM[MM] = rM
+       UU._data = XU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L302` → after: `L430-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L430-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/256.js#L430-L579) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/256.js#L302)

```diff
-       return OM[MM]
+       var XU, zU;
+       (null !== (XU = null === (zU = UU.getBuffer()) || void 0 === zU ? void 0 : zU.xY) && void 0 !== XU ? XU : 0) > 0 && (cU.add(UU), 0 === yU ? AU(UU, null) : QU.add(UU))
+     }
+ 
+     function oU(UU) {
+       yU++;
+       for (const zU of function(UU) {
+           const XU = new Set;
+           for (const yU of UU) {
+             const UU = yU.geometry;
+             for (const yU of Object.values(null !== (zU = null === UU || void 0 === UU ? void 0 : UU.getVertexBuffers()) && void 0 !== zU ? zU : {})) {
+               var zU;
+               const UU = yU.getWrapperBuffer();
+               cU.has(UU) && XU.add(UU)
+             }
+           }
+ ... (134 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257];
+ export const ids = [257, 258];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L4)

```diff
-   38116: (MM, rM, iM) => {
+   41340: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L7-L8` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L7) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L7-L8)

```diff
-       g: () => aM,
-       i: () => SM
+       f: () => NU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L10-L12` → after: `L9-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L9-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L9-L102) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L10-L12)

```diff
-     const OM = 1024,
-       SM = 16,
-       jM = 36e4;
+     var cU = zU(41113),
+       yU = zU(41121),
+       QU = zU(37819),
+       AU = zU(37923),
+       FU = zU(41346),
+       oU = zU(41314),
+       DU = zU(37863);
+     let EU = (() => {
+         var UU;
+         let XU, zU, oU = FU.b,
+           DU = [],
+           EU = [],
+           YU = [],
+           NU = [];
+         return UU = class extends oU {
+           constructor(UU, XU, zU, yU) {
+ ... (78 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L14-L25` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L104-L107) · [Before (L14-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L14-L25)

```diff
-       constructor(MM) {
-         this.boneCount = MM, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * MM), this.position = new Float64Array(3 * MM), this.scale = new Float64Array(3 * MM).fill(1), this.touched = new Uint8Arra … [truncated]
-       }
-       clampToLimits() {
-         for (let MM = 0; MM < this.boneCount; MM++)
-           if (0 !== this.touched[MM])
-             for (let rM = 3 * MM; rM < 3 * MM + 3; rM++) {
-               const MM = this.rotation[rM],
-                 iM = this.position[rM],
-                 aM = this.scale[rM];
-               MM >= -36e4 && MM <= jM || (this.rotation[rM] = nM(MM, jM)), iM >= -1024 && iM <= OM || (this.position[rM] = nM(iM, OM)), aM >= -SM && aM <= SM || (this.scale[rM] = nM(aM, SM, 1))
-             }
+       static GetPlanes(UU) {
+         const XU = [];
+         for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
+         return yU.GetPlanesToRef(UU, XU), XU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L27-L32` → after: `L109-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L109-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L109-L139) · [Before (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L27-L32)

```diff
-       reset() {
-         for (let MM = 0; MM < this.boneCount; MM++)
-           if (0 !== this.touched[MM]) {
-             this.touched[MM] = 0;
-             for (let rM = 3 * MM; rM < 3 * MM + 3; rM++) this.rotation[rM] = 0, this.position[rM] = 0, this.scale[rM] = 1
-           }
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
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L36-L55` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L149-L150) · [Before (L36-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L36-L55)

```diff
-       constructor(MM) {
-         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * MM), this.position = new Float64Arra … [truncated]
-       }
-       touch(MM, rM, iM) {
-         0 === this.touched[MM] && (this.touched[MM] = 1, this.touchedBones[this.touchedCount++] = MM), this.boneWeight[MM] += rM, iM && (this.overrides[MM] = 1)
-       }
-       applyTo(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         for (let SM = 0; SM < this.touchedCount; SM++) {
-           const jM = this.touchedBones[SM],
-             aM = this.boneWeight[jM];
-           if (iM || 1 === this.overrides[jM]) {
-             const iM = rM * Math.min(1, aM);
-             for (let rM = 3 * jM; rM < 3 * jM + 3; rM++) MM.rotation[rM] += (this.rotation[rM] / aM - MM.rotation[rM]) * iM, MM.position[rM] += (this.position[rM] / aM - MM.position[rM]) * iM, MM.scale[rM] += (1 + this.scaleDelta[rM] / aM - MM.scale[rM]) * iM
-           } else {
-             const iM = OM && aM > 1 ? rM / aM : rM;
- ... (4 more removed lines; see GitHub link above)
+       constructor(UU, XU, zU, yU) {
+         this.normal = new cU.q(UU, XU, zU), this.d = yU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L57-L63` → after: `L152-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L152-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L152-L223) · [Before (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L57-L63)

```diff
-       clear() {
-         for (let MM = 0; MM < this.touchedCount; MM++) {
-           const rM = this.touchedBones[MM];
-           this.touched[rM] = 0, this.overrides[rM] = 0, this.boneWeight[rM] = 0;
-           for (let MM = 3 * rM; MM < 3 * rM + 3; MM++) this.rotation[MM] = 0, this.position[MM] = 0, this.scaleDelta[MM] = 0
-         }
-         this.touchedCount = 0
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
+       normalize() {
+         const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let XU = 0;
+ ... (56 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L66-L69` → after: `L226-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L226-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L226-L244) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L66-L69)

```diff
- 
-     function nM(MM, rM) {
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       return Number.isNaN(MM) ? iM : Math.min(rM, Math.max(-rM, MM))
+     yU._TmpMatrix = cU.e.Identity()
+   },
+   38845: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => cU
+     });
+     class cU {
+       constructor(UU, XU, zU, cU) {
+         this.x = UU, this.y = XU, this.width = zU, this.height = cU
+       }
+       toGlobal(UU, XU) {
+         return new cU(this.x * UU, this.y * XU, this.width * UU, this.height * XU)
+       }
+       toGlobalToRef(UU, XU, zU) {
+         return zU.x = this.x * UU, zU.y = this.y * XU, zU.width = this.width * UU, zU.height = this.height * XU, this
+       }
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L72` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L247) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L72)

```diff
-   38111: (MM, rM, iM) => {
+   39486: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L74-L75` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L249) · [Before (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L74-L75)

```diff
-       d: () => nM,
-       f: () => PM
+       c: () => QU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L77-L84` → after: `L251-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L251-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L251-L287) · [Before (L77-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L77-L84)

```diff
-     var OM = iM(38097),
-       SM = iM(332),
-       jM = iM(2e3),
-       aM = iM(38116);
- 
-     function PM(MM) {
-       if ("yS" in MM) return wM.createAnimationScript(MM);
-       return new zM(MM).createAnimationScript()
+     var cU = zU(39493);
+     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
+       ...UU
+     } : null : UU.clone(XU) : null;
+     class QU {
+       static DeepCopy(UU, XU, zU, QU) {
+         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const FU = function(UU) {
+           const XU = [];
+           do {
+             const zU = Object.getOwnPropertyNames(UU);
+             for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
+           } while (UU = Object.getPrototypeOf(UU));
+           return XU
+         }(UU);
+         for (const DU of FU) {
+ ... (21 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L86-L89` → after: `L289-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L289-L295) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L86-L89)

```diff
- 
-     function nM(MM, rM, iM, SM) {
-       const jM = MM.yS <= 0 ? 1 : rM + iM * Math.max(0, SM) / MM.yS;
-       return MM.lS === OM.h.LoopOnLastFrame ? jM % 1 : MM.lS === OM.h.NoLoop && jM >= 1 ? null : Math.min(1, jM)
+   },
+   38649: (UU, XU, zU) => {
+     function cU() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
+         const XU = 16 * Math.random() | 0;
+         return ("x" === UU ? XU : 3 & XU | 8).toString(16)
+       }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L92-L102` → after: `L306-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L306-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L306-L311) · [Before (L92-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L92-L102)

```diff
-       createAnimationScript(MM) {
-         const {
-           yS: rM,
-           loop: iM,
-           GS: OM
-         } = MM;
-         return {
-           yS: Math.round(rM),
-           lS: this.createLoopMode(null !== iM && void 0 !== iM && iM),
-           GS: this.createNodeSkeletonAnimationScript(null !== OM && void 0 !== OM ? OM : null)
-         }
+       static _CheckLimit(UU, XU) {
+         let zU = cU._LogLimitOutputs[UU];
+         return zU ? zU.current++ : (zU = {
+           limit: XU,
+           current: 1
+         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L104-L122` → after: `L313-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L313-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L313-L318) · [Before (L104-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L104-L122)

```diff
-       createLoopMode(MM) {
-         switch (MM) {
-           case !1:
-             return OM.h.NoLoop;
-           case !0:
-             return OM.h.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return OM.h.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${MM}`)
-       }
-       createNodeSkeletonAnimationScript(MM) {
-         if (null === MM) return null;
-         const rM = {};
-         for (const iM in MM) {
-           const OM = MM[iM];
- ... (3 more removed lines; see GitHub link above)
+       static _GenerateLimitMessage(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const zU = cU._LogLimitOutputs[UU];
+         if (!zU || !cU.MessageLimitReached) return;
+         const yU = this._Levels[XU];
+         zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L124-L132` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L320-L321) · [Before (L124-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L124-L132)

```diff
-       createNodeAnimationScript(MM) {
-         const {
-           timeline: rM
-         } = MM, iM = rM.filter((MM => Number.isFinite(MM.timeFraction)));
-         return iM.sort(((MM, rM) => MM.timeFraction - rM.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(iM, "rotation", HM),
-           position: this.createTimelineFromKeyframes(iM, "position", JM),
-           scale: this.createTimelineFromKeyframes(iM, "scale", JM, yM)
-         }
+       static _AddLogEntry(UU) {
+         cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L134-L141` → after: `L323-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L323-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L323-L354) · [Before (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L134-L141)

```diff
-       createTimelineFromKeyframes(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM => MM;
-         const SM = [];
-         for (const QM of MM) {
-           const MM = QM[rM];
-           if (MM) {
-             const rM = this.createAnimationFrameWithoutPrecomputes(QM.timeFraction, MM, OM);
-             LM(rM) && SM.push(rM)
+       static _FormatMessage(UU) {
+         const XU = UU => UU < 10 ? "0" + UU : "" + UU,
+           zU = new Date;
+         return "[" + XU(zU.getHours()) + ":" + XU(zU.getMinutes()) + ":" + XU(zU.getSeconds()) + "]: " + UU
+       }
+       static _LogDisabled(UU, XU) {}
+       static _LogEnabled() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           XU = arguments.length > 1 ? arguments[1] : void 0,
+           zU = arguments.length > 2 ? arguments[2] : void 0;
+         const yU = Array.isArray(XU) ? XU[0] : XU;
+         if (void 0 !== zU && !cU._CheckLimit(yU, zU)) return;
+         const QU = cU._FormatMessage(yU),
+           AU = this._Levels[UU],
+           FU = Array.isArray(XU) ? XU.slice(1) : [];
+         AU.logFunc && AU.logFunc("BJS - " + QU, ...FU);
+ ... (16 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L158-L171` → after: `L357-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L357-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L357-L412) · [Before (L158-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L158-L171)

```diff
-       createAnimationFrameWithoutPrecomputes(MM, rM, iM) {
-         let OM, SM, jM = null;
-         var aM;
-         if ("object" === typeof rM && "point" in rM) jM = null !== (aM = rM.bS) && void 0 !== aM ? aM : null, OM = rM.point, SM = rM.point;
-         else if ("object" === typeof rM && "pre" in rM) {
-           var PM;
-           jM = null !== (PM = rM.bS) && void 0 !== PM ? PM : null, OM = rM.pre, SM = rM.post
-         } else OM = rM, SM = rM;
-         return {
-           timeFraction: MM,
-           bS: this.createLerpMode(jM),
-           pre: iM(OM),
-           post: iM(SM)
-         }
+     }
+     cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
+   },
+   63944: (UU, XU, zU) => {
+ ... (40 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L173-L174` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L414-L416) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L173-L174)

```diff
-       createLerpMode(MM) {
-         return null === MM ? OM.f.Linear : QM.LERP_MODE_SCHEMA_MAPPING[MM]
+       bind() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         super.bind(UU), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L177-L180` → after: `L419-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L419-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L419-L456) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L177-L180)

```diff
-     QM.LERP_MODE_SCHEMA_MAPPING = {
-       linear: OM.f.Linear,
-       "catmull-rom-spline": OM.f.CatmullRomSpline
-     };
+     EU.VertexUrl = "fxaa", EU.FragmentUrl = "fxaa", EU.Uniforms = ["texelSize"];
+     class YU extends QU.c {
+       getClassName() {
+         return "FxaaPostProcess"
+       }
+       constructor(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           yU = arguments.length > 3 ? arguments[3] : void 0,
+           QU = arguments.length > 4 ? arguments[4] : void 0,
+           AU = arguments.length > 5 ? arguments[5] : void 0,
+           FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const oU = {
+           uniforms: EU.Uniforms,
+           size: "number" === typeof XU ? XU : void 0,
+           camera: zU,
+           samplingMode: yU || cU.e.BILINEAR_SAMPLINGMODE,
+ ... (22 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L182-L195` → after: `L458-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L458-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L458-L549) · [Before (L182-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L182-L195)

```diff
-       constructor(MM) {
-         this.animationSchema = MM
-       }
-       createAnimationScript() {
-         const {
-           animation_length: MM,
-           loop: rM,
-           bones: iM
-         } = this.animationSchema;
-         return {
-           yS: Math.round(1e3 * MM),
-           lS: this.createLoopMode(null !== rM && void 0 !== rM && rM),
-           GS: this.createNodeSkeletonAnimationScript(null !== iM && void 0 !== iM ? iM : null)
-         }
+       constructor(UU, XU, zU) {
+         this.name = UU, this._parentTask = XU, this._context = zU, this.disabled = !1
+       }
+       setInitializeFunc(UU) {
+         this._initFunc = UU
+       }
+       setExecuteFunc(UU) {
+         this._executeFunc = UU
+       }
+       _execute() {
+         this.disabled || this._executeFunc(this._context)
+       }
+       _initialize() {
+         this._initFunc?.(this._context)
+       }
+       _isValid() {
+ ... (76 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L197-L204` → after: `L551-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L551-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L551-L606) · [Before (L197-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L197-L204)

```diff
-       createLoopMode(MM) {
-         switch (MM) {
-           case !1:
-             return OM.h.NoLoop;
-           case !0:
-             return OM.h.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return OM.h.HoldOnLastFrame
+     }
+     var ZU = zU(37846);
+     class RU {
+       get name() {
+         return this._name
+       }
+       set name(UU) {
+         this._name = UU
+       }
+       get disabled() {
+         return this._disabled
+       }
+       set disabled(UU) {
+         this._disabled = UU
+       }
+       get passes() {
+ ... (40 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L206-L213` → after: `L608-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L608-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L608-L631) · [Before (L206-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L206-L213)

```diff
-         throw new Error(`Invalid Blockbench loop mode schema: ${MM}`)
-       }
-       createNodeSkeletonAnimationScript(MM) {
-         if (null === MM) return null;
-         const rM = {};
-         for (const iM in MM) {
-           const OM = MM[iM];
-           rM[iM] = this.createNodeAnimationScript(OM)
+         let cU, yU = null,
+           QU = [],
+           AU = null;
+         for (const FU of this._passesDisabled) {
+           const UU = FU._isValid();
+           if (UU) throw new Error(`Pass "${FU.name}" is not valid. ${UU}`);
+           if (BU.IsRenderPass(FU)) {
+             const UU = Array.isArray(FU.renderTarget) ? FU.renderTarget : [FU.renderTarget];
+             yU = [];
+             for (const XU of UU) void 0 !== XU && yU.push(this._frameGraph.textureManager.getTextureFromHandle(XU));
+             QU = UU, AU = void 0 !== FU.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(FU.renderTargetDepth) : null
+           } else GU.IsObjectListPass(FU) && (cU = FU.objectList)
+         }
+         if (this._passesDisabled.length > 0) {
+           if (!this._checkSameRenderTarget(XU, yU)) {
+             let UU = !0;
+ ... (8 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L217-L226` → after: `L634-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L634-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L634-L640) · [Before (L217-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L217-L226)

```diff
-       createNodeAnimationScript(MM) {
-         const {
-           rotation: rM,
-           position: iM,
-           scale: OM
-         } = MM;
-         return {
-           rotation: this.createAnimationTimeline(null !== rM && void 0 !== rM ? rM : null, EM, HM, !0),
-           position: this.createAnimationTimeline(null !== iM && void 0 !== iM ? iM : null, GM, JM, !1),
-           scale: this.createAnimationTimeline(null !== OM && void 0 !== OM ? OM : null, dM, JM, !1)
+       _execute() {
+         const UU = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
+         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const XU of UU) XU._execute()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L229-L263` → after: `L644-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L644-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L644-L650) · [Before (L229-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L229-L263)

```diff
-       createAnimationTimeline(MM, rM, iM, OM) {
-         if (null === MM) return [];
-         (Array.isArray(MM) || "number" === typeof MM) && (MM = {
-           "0.0": MM
-         });
-         const SM = Object.entries(MM).map((MM => {
-           let [iM, OM] = MM;
-           const SM = Number(iM) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(SM, OM, rM)
-         })).filter(LM);
-         SM.sort(((MM, rM) => MM.timeFraction - rM.timeFraction)), OM && function(MM) {
-           for (let rM = 1; rM < MM.length; rM++) {
-             const iM = MM[rM - 1].post,
-               OM = MM[rM],
-               SM = CM(OM.pre),
-               jM = CM(OM.post),
- ... (19 more removed lines; see GitHub link above)
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const UU of this._passes) UU._initialize();
+           for (const UU of this._passesDisabled) UU._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L267-L274` → after: `L653-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L653-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L653-L688) · [Before (L267-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L267-L274)

```diff
-       createAnimationFrameWithoutPrecomputes(MM, rM, iM) {
-         let OM, SM, jM = null;
-         if ("object" === typeof rM && "post" in rM) {
-           var aM;
-           jM = null !== (aM = rM.lerp_mode) && void 0 !== aM ? aM : null, SM = iM(rM.post), OM = void 0 !== rM.pre ? iM(rM.pre) : SM
-         } else {
-           const MM = iM(rM);
-           SM = MM, OM = MM
+       _checkSameRenderTarget(UU, XU) {
+         if (null === UU || null === XU) return UU === XU;
+         if (UU.length !== XU.length) return !1;
+         for (let zU = 0; zU < UU.length; zU++)
+           if (UU[zU] !== XU[zU]) return !1;
+         return !0
+       }
+     }
+     class PU extends RU {
+       get alphaMode() {
+         return this.postProcess.alphaMode
+       }
+       set alphaMode(UU) {
+         this.postProcess.alphaMode = UU
+       }
+       get drawWrapper() {
+ ... (20 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L276-L280` → after: `L690-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L690-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L690-L701) · [Before (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L276-L280)

```diff
-         return {
-           timeFraction: MM,
-           bS: this.createLerpMode(jM),
-           pre: OM,
-           post: SM
+         const yU = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
+         this._outputWidth = yU.size.width, this._outputHeight = yU.size.height;
+         const QU = this._frameGraph.addRenderPass(this.name);
+         if (QU.depthReadOnly = this.depthReadOnly, QU.stencilReadOnly = this.stencilReadOnly, QU.addDependencies(this.sourceTexture), QU.setRenderTarget(this.outputTexture), QU.setRenderTargetDepth(this.depthAttachmentTexture), QU.setExecuteFunc((UU => {
+             UU.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && UU.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), XU?.(UU), this.viewport && UU.setViewport(this.viewport), UU.applyFullScreenEffect(this._postProcessDrawWra … [truncated]
+               void 0 !== this.sourceTexture && UU.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), zU?.(UU), this.postProcess.bind()
+             }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), UU.restoreDefaultFramebuffer(), UU.popDebugGroup()
+           })), !UU) {
+           const UU = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
+           UU.depthReadOnly = this.depthReadOnly, UU.stencilReadOnly = this.stencilReadOnly, UU.addDependencies(this.sourceTexture), UU.setRenderTarget(this.outputTexture), UU.setRenderTargetDepth(this.depthAttachmentTexture), UU.setExecuteFunc((UU => {
+             void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && UU.setViewport(this.viewport), UU.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
+           }))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L283-L284` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L705-L706) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L283-L284)

```diff
-       createLerpMode(MM) {
-         return null === MM ? OM.f.Linear : zM.LERP_MODE_SCHEMA_MAPPING[MM]
+       dispose() {
+         this.postProcess.dispose(), super.dispose()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L287-L304` → after: `L709-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L709-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L709-L721) · [Before (L287-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L287-L304)

```diff
- 
-     function LM(MM) {
-       return Number.isFinite(MM.timeFraction) && mM(MM.pre) && mM(MM.post)
-     }
- 
-     function mM(MM) {
-       return Number.isFinite(MM[0]) && Number.isFinite(MM[1]) && Number.isFinite(MM[2])
-     }
- 
-     function HM(MM, rM, iM, OM, SM, jM, aM, PM) {
-       const nM = jM - rM,
-         QM = jM - OM,
-         zM = PM - OM,
-         LM = [null, null, null];
-       for (let mM = 0; mM < LM.length; mM++) LM[mM] = hM(MM[mM], iM[mM], SM[mM], aM[mM], nM, zM);
-       return {
- ... (2 more removed lines; see GitHub link above)
+     class WU extends PU {
+       constructor(UU, XU, zU) {
+         super(UU, XU, zU || new EU(UU, XU.engine))
+       }
+       getClassName() {
+         return "FrameGraphFXAATask"
+       }
+       record() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           XU = arguments.length > 1 ? arguments[1] : void 0,
+           zU = arguments.length > 2 ? arguments[2] : void 0;
+         const cU = super.record(UU, XU, zU);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, cU
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L307-L312` → after: `L724-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L724-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L724-L730) · [Before (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L307-L312)

```diff
- 
-     function hM(MM, rM, iM, OM, jM, aM) {
-       return {
-         uS: SM.d.computeShortestRotation(MM, iM) / jM,
-         RS: SM.d.computeShortestRotation(rM, OM) / aM,
-         delta: SM.d.computeShortestRotation(rM, iM)
+     var dU = zU(44524);
+     class LU extends PU {
+       constructor(UU, XU, zU) {
+         super(UU, XU, zU || new dU.f(UU, XU.engine))
+       }
+       getClassName() {
+         return "FrameGraphPassTask"
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L315-L328` → after: `L733-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L733-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L733-L819) · [Before (L315-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L315-L328)

```diff
- 
-     function JM(MM, rM, iM, OM, SM, jM, aM, PM) {
-       const nM = jM - rM,
-         QM = jM - OM,
-         zM = PM - OM,
-         LM = [null, null, null];
-       for (let mM = 0; mM < LM.length; mM++) LM[mM] = {
-         uS: (SM[mM] - MM[mM]) / nM,
-         RS: (aM[mM] - iM[mM]) / zM,
-         delta: SM[mM] - iM[mM]
-       };
-       return {
-         wS: QM,
-         tS: LM
+     var eU = zU(41202),
+       CU = zU(41271),
+       wU = zU(41235),
+       qU = zU(41340),
+       OU = zU(37923);
+     class SU {
+       getRenderCamera(UU) {
+         if (this._renderCamera) return this._renderCamera;
+         {
+           let XU;
+           return XU = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, UU && XU && XU.isRigCamera ? XU.rigParent : XU
+         }
+       }
+       setRenderCamera(UU) {
+         this._renderCamera = UU
+       }
+ ... (71 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L332-L333` → after: `L847-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L847-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L847-L886) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L332-L333)

```diff
-     function dM(MM) {
-       return yM("number" === typeof MM ? [MM, MM, MM] : MM)
+     function fU(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         AU = arguments.length > 6 ? arguments[6] : void 0,
+         FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       const {
+         height: DU,
+         width: EU
+       } = sU(UU, XU, zU);
+       if (!DU || !EU) return void NU.b.Error("Invalid 'size' parameter !");
+       const YU = XU.nS();
+       let pU = YU.activeCamera !== XU;
+       if (YU.frameGraph) {
+         const UU = rU.FindMainObjectRenderer(YU.frameGraph);
+         UU && (pU = UU.camera !== XU)
+ ... (24 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L335-L337` → after: `L888-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L888-L898) · [Before (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L335-L337)

```diff
- 
-     function yM(MM) {
-       return [lM(MM[0]), lM(MM[1]), lM(MM[2])]
+     async function iU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         yU = arguments.length > 4 ? arguments[4] : void 0,
+         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       return await new Promise(((oU, DU) => {
+         fU(UU, XU, zU, (UU => {
+           "undefined" !== typeof UU ? oU(UU) : DU(new Error("Data is undefined"))
+         }), cU, FU, yU, QU, AU)
+       }))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L339-L341` → after: `L900-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L900-L911) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L339-L341)

```diff
- 
-     function lM(MM) {
-       return Number.isFinite(MM) ? Math.min(aM.i, Math.max(-aM.i, MM)) : MM
+     async function HU(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         QU = arguments.length > 5 ? arguments[5] : void 0,
+         AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return await new Promise((FU => {
+         fU(UU, XU, {
+           width: zU,
+           height: cU
+         }, (() => {
+           FU()
+         }), yU, !0, QU, AU)
+       }))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L344-L346` → after: `L914-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L914-L986) · [Before (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L344-L346)

```diff
-     function EM(MM) {
-       const [rM, iM, OM] = MM, aM = -(0, jM.l)(rM), PM = -(0, jM.l)(iM), nM = (0, jM.l)(OM), QM = SM.d.quaternionFromEulerZYX(aM, PM, nM);
-       return SM.d.eulerYXZFromQuaternion(QM)
+     function MU(UU, XU, QU, AU) {
+       let FU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         oU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+         DU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         EU = arguments.length > 7 ? arguments[7] : void 0,
+         IU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         gU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         kU = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
+         GU = arguments.length > 11 ? arguments[11] : void 0,
+         BU = arguments.length > 12 ? arguments[12] : void 0,
+         ZU = arguments.length > 13 ? arguments[13] : void 0,
+         RU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
+         PU = arguments.length > 15 ? arguments[15] : void 0;
+       const WU = XU.nS();
+       if (WU.frameGraph) return void VU(WU.frameGraph, XU, QU, FU, oU, DU, EU, GU, ZU, !AU).then((UU => {
+         AU && AU(UU)
+ ... (57 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L348-L355` → after: `L988-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L988-L1003) · [Before (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L348-L355)

```diff
-     zM.LERP_MODE_SCHEMA_MAPPING = {
-       linear: OM.f.Linear,
-       catmullrom: OM.f.CatmullRomSpline
-     };
-     const UM = 1 / 16;
- 
-     function GM(MM) {
-       return [-MM[0] * UM, MM[1] * UM, MM[2] * UM]
+     async function vU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         AU = arguments.length > 6 ? arguments[6] : void 0,
+         FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         DU = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
+         EU = arguments.length > 10 ? arguments[10] : void 0,
+         YU = arguments.length > 11 ? arguments[11] : void 0,
+         NU = arguments.length > 12 ? arguments[12] : void 0;
+       return await new Promise(((IU, pU) => {
+         MU(UU, XU, zU, (UU => {
+           "undefined" !== typeof UU ? IU(UU) : pU(new Error("Data is undefined"))
+         }), cU, yU, QU, AU, FU, oU, DU, EU, YU, NU)
+       }))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L357-L360` → after: `L1005-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L1005-L1092) · [Before (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L357-L360)

```diff
- 
-     function CM(MM) {
-       const [rM, iM, OM] = MM;
-       return [rM >= 0 ? Math.PI - rM : -Math.PI - rM, eM(iM + Math.PI), eM(OM + Math.PI)]
+     async function VU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         AU = arguments.length > 6 ? arguments[6] : void 0,
+         FU = arguments.length > 7 ? arguments[7] : void 0,
+         oU = arguments.length > 8 ? arguments[8] : void 0,
+         DU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         EU = arguments.length > 10 ? arguments[10] : void 0;
+       const YU = UU.engine,
+         NU = UU.textureManager,
+         {
+           height: IU,
+           width: aU,
+           finalWidth: tU,
+           finalHeight: kU
+ ... (72 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L363-L364` → after: `L1095-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1095-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L1095-L1109) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L363-L364)

```diff
-     function eM(MM) {
-       return SM.d.mod(MM + Math.PI, 2 * Math.PI) - Math.PI
+     function sU(UU, XU, zU) {
+       let cU = 0,
+         yU = 0,
+         QU = 0,
+         AU = 0;
+       if ("object" === typeof zU) {
+         const FU = zU.precision ? Math.abs(zU.precision) : 1;
+         zU.width && zU.height ? (cU = zU.height * FU, yU = zU.width * FU) : zU.width && !zU.height ? (yU = zU.width * FU, cU = Math.round(yU / UU.getAspectRatio(XU))) : zU.height && !zU.width ? (cU = zU.height * FU, yU = Math.round(cU * UU.getAspectRatio(XU))) : (yU = Math.round( … [truncated]
+       } else isNaN(zU) || (cU = zU, yU = zU, QU = zU, AU = zU);
+       return yU && (yU = Math.floor(yU)), cU && (cU = Math.floor(cU)), QU && (QU = Math.floor(QU)), AU && (AU = Math.floor(AU)), {
+         height: 0 | cU,
+         width: 0 | yU,
+         finalWidth: 0 | QU,
+         finalHeight: 0 | AU
+       }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L367-L368` → after: `L1121-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L1121-L1124) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L367-L368)

```diff
-     function bM(MM, rM) {
-       return Math.abs(SM.d.computeShortestRotation(MM[0], rM[0])) + Math.abs(SM.d.computeShortestRotation(MM[1], rM[1])) + Math.abs(SM.d.computeShortestRotation(MM[2], rM[2]))
+     function lU() {
+       if (mU) return;
+       mU = !0;
+       IU.j.CreateScreenshot = fU, IU.j.CreateScreenshotAsync = iU, IU.j.CreateScreenshotUsingRenderTarget = MU, IU.j.CreateScreenshotUsingRenderTargetAsync = vU
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L370-L390` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/257.js#L1126) · [Before (L370-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/257.js#L370-L390)

```diff
-     const wM = new QM
-   },
-   38097: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM,
-       e: () => jM,
-       f: () => OM,
-       h: () => SM
-     });
-     let OM = function(MM) {
-         return MM[MM.Linear = 0] = "Linear", MM[MM.CatmullRomSpline = 1] = "CatmullRomSpline", MM
-       }({}),
-       SM = function(MM) {
-         return MM[MM.NoLoop = 0] = "NoLoop", MM[MM.LoopOnLastFrame = 1] = "LoopOnLastFrame", MM[MM.HoldOnLastFrame = 2] = "HoldOnLastFrame", MM
-       }({}),
-       jM = function(MM) {
- ... (5 more removed lines; see GitHub link above)
+     lU()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L4-L10` → after: `L4-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L4-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L257) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L10)

```diff
-   38167: (MM, rM, iM) => {
-     iM.d(rM, {
-       Color3: () => OM.d,
-       d: () => OM.h
-     });
-     var OM = iM(38173);
-     (0, OM.i)()
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
+         XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
+       }
+       static GetFarPlaneToRef(UU, XU) {
+ ... (238 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/259.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/259.js#L2)

```diff
- export const ids = [259];
+ export const ids = [258, 259];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/259.js#L4)

```diff
-   63918: (MM, rM, iM) => {
+   63952: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6-L15` → after: `L6-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/259.js#L6-L184) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/259.js#L6-L15)

```diff
-       DEVTOOLS_SHADERS: () => jM,
-       registerDevtoolsShader: () => aM
-     });
-     var OM = iM(40964),
-       SM = iM(38188);
-     const jM = {
-       devtoolsNormal: function(MM) {
-         return {
-           vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.e)(MM,"normal","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\t\t\t${(0,SM.zb)(MM,"world","mat4")}\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,SM.Fb)(MM,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t\n\t\t\t\t${(0,SM.B)(MM,"vec3","normalColor",`abs(${(0,SM.U)(MM,"vNormal")})`)}\n\t\t\t\t${(0,SM.M)(MM)} = ${(0,SM.n)(MM,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+       RegisterShaderMaterial: () => cU.d,
+       ShaderMaterial: () => cU.o,
+       ShaderMaterialCreateFromSnippetAsync: () => cU.h,
+       ShaderMaterialParse: () => cU.n,
+       ShaderMaterialParseFromFileAsync: () => cU.i,
+       ShaderMaterialParseFromSnippetAsync: () => cU.k
+     });
+     var cU = zU(41549);
+     (0, cU.d)()
+   },
+   38502: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => yU
+     });
+     var cU = zU(38505);
+     class yU {
+ ... (163 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L17-L280` → after: `L186-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L186-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/259.js#L186-L269) · [Before (L17-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/259.js#L17-L280)

```diff
-       },
-       devtoolsWhite: function(MM) {
-         return {
-           vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\t\t\t\t${(0,SM.l)(MM)} = ${(0,SM.Db)(MM,"worldViewProjection")} * ${(0,SM.n)(MM,"vec4",(0,SM.Hb)(MM,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t${(0,SM.M)(MM)} = ${(0,SM.n)(MM,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(MM) {
-         return {
-           vertex: `\n\t\t\t${(0,SM.e)(MM,"position","vec3")}\n\t\t\t${(0,SM.zb)(MM,"worldViewProjection","mat4")}\n\t\t\t${(0,SM.zb)(MM,"world","mat4")}\n\t\t\t${(0,SM.zb)(MM,"cameraPosition","vec3")}\n\t\t\t${(0,SM.Fb)(MM,"vDepth","float","mediump")}\n\n\t\t\t${(0,SM.Gb)(MM,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,SM.Fb)(MM,"vDepth","float","mediump")}\n\t\t\t${(0,SM.zb)(MM,"maxDepth","float")}\n\t\t\t${(0,SM.zb)(MM,"minDepth","float")}\n\n\t\t\t${(0,SM.R)(MM,`\n\t\t\t\t\n\t\t\t\t${(0,SM.B)(MM,"float","normalizedDepth",`clamp((${(0,SM.U)(MM,"vDepth")} - ${ … [truncated]
-         }
-       }
-     };
- 
-     function aM(MM, rM) {
- ... (248 more removed lines; see GitHub link above)
+       }
+     }
+   },
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
+     zU.d(XU, {
+ ... (68 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L4)

```diff
-   42174: (MM, rM, iM) => {
+   38557: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L6)

```diff
-       noaDevTools: () => LM
+       c: () => YU,
+       f: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L8-L12` → after: `L9-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L9-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L9-L3406) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L8-L12)

```diff
-     var OM = iM(38423),
-       SM = iM(38404),
-       jM = iM(3063),
-       aM = iM(1830),
-       PM = iM(42067);
+     var cU = zU(9808),
+       yU = zU(9782),
+       QU = zU(344);
+     const AU = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+ ... (3382 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L22-L37` → after: `L3410-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3410-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3410-L3564) · [Before (L22-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L22-L37)

```diff
-         canvas: iM.getRenderingCanvas(),
-         maxTextureSize: iM.getCaps().maxTextureSize,
-         lL: () => !MM.eL,
-         resize: (MM, rM) => {
-           iM.setSize(MM, rM)
-         },
-         restoreSize: () => {
-           iM.setSize(OM.width, OM.height), rM.resize()
-         },
-         onFrameDrawn: iM => {
-           const OM = () => {
-             rM.IU && iM()
-           };
-           return MM.on("afterRender", OM), () => {
-             MM.off("afterRender", OM)
-           }
+         [`${UU} Banner`]: {
+           positions: [{
+             block: `${UU} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${UU} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+         },
+         [`${UU} Banner|meta|rot2|bot`]: {
+           positions: [{
+             block: `${UU} Banner|meta|rot2|bot`,
+ ... (139 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L74-L227` → after: `L3569-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3569-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3569-L3662) · [Before (L74-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L74-L227)

```diff
-             function eM() {
-               var MM;
-               GM && (GM = !1, (0, OM.f)(dM.meshes, !1)), null === (MM = CM) || void 0 === MM || MM(), CM = null, UM.forEach((MM => {
-                 const rM = EM.get(MM);
-                 rM && (MM.material = rM)
-               }))
-             }
-             if (mM) {
-               const MM = [],
-                 rM = [];
-               UM.forEach((iM => {
-                 const OM = iM.name.toLowerCase(),
-                   SM = iM.aY().boundingBox.center,
-                   jM = dM.activeCamera.position.subtract(SM).length();
-                 OM.includes("sky") || OM.includes("background") || OM.includes("environment") || jM > 1e3 ? rM.push(iM) : MM.push(iM)
-               })), LM("devtoolsNormal", hM);
- ... (138 more removed lines; see GitHub link above)
+     function oU(UU) {
+       const XU = (0, QU._b)(UU);
+       return {
+         [XU]: {
+           positions: [{
+             block: XU,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${XU} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${XU} Top Right`,
+ ... (78 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L235-L242` → after: `L3665-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3665-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3665-L3742) · [Before (L235-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L235-L242)

```diff
-       downloadScene(MM, rM) {
-         return zM(MM, rM)
-       }
-       async setAmbientLightIntensity(MM) {
-         const {
-           Color3: rM
-         } = await Promise.all([iM.e(255), iM.e(258)]).then((() => iM(38167)));
-         (0, jM.f)().CL.Hk().ambientColor = rM.FromArray([MM, MM, MM])
+     }
+ 
+     function DU(UU) {
+       const XU = `_${UU} Back`,
+         zU = `_${UU} Dish`;
+       return {
+         [UU]: {
+           positions: [{
+             block: UU,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: XU,
+             x: 0,
+             y: 0,
+ ... (62 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L244-L247` → after: `L3744-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3744-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3744-L3766) · [Before (L244-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L244-L247)

```diff
-       capturePhoto(MM, rM, iM) {
-         return function(MM, rM, iM, OM) {
-           return (0, PM.d)(nM(MM), rM, iM, OM)
-         }((0, jM.f)(), MM, rM, iM)
+     }
+ 
+     function EU(UU) {
+       const XU = `Small ${UU} Pod`;
+       return {
+         [XU]: {
+           positions: [{
+             block: XU,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${UU} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L251` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3792) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L251)

```diff
-   42067: (MM, rM, iM) => {
+   38994: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L253` → after: `L3794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3794) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L253)

```diff
-       d: () => PM,
+       e: () => oU,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L256-L266` → after: `L3797-L3803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3797-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3797-L3803) · [Before (L256-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L256-L266)

```diff
-     var OM = iM(1845);
-     const SM = 33177600,
-       jM = 3e4;
-     let aM = !1;
- 
-     function PM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const {
-         scale: PM = 1,
-         type: nM = "image/png",
-         quality: QM
+     var cU = zU(9782),
+       yU = zU(9836),
+       QU = zU(9845);
+     const AU = yU.s.map((UU => {
+       let {
+         dx: XU,
+         dz: zU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L268-L318` → after: `L3805-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3805-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3805-L3810) · [Before (L268-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L268-L318)

```diff
-       return MM.lL() ? aM ? Promise.reject(new Error("A screenshot is already being taken")) : (aM = !0, new Promise(((OM, zM) => {
-         let LM, mM = 2,
-           HM = null;
-         const hM = () => {
-           var rM;
-           aM = !1, null === (rM = HM) || void 0 === rM || rM(), clearTimeout(LM);
-           try {
-             MM.restoreSize()
-           } catch (iM) {
-             console.error("A screenshot couldn't size the canvas back", iM)
-           }
-         };
-         LM = setTimeout((() => {
-           hM(), zM(new Error("No frame was drawn to capture"))
-         }), jM);
-         try {
- ... (35 more removed lines; see GitHub link above)
+       return [XU, 0, zU]
+     }));
+ 
+     function FU(UU) {
+       const XU = cU.h[UU];
+       return !!XU && UU !== cU.d && !XU.model && !XU.BI && !1 !== XU.solid && !XU.Ft
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L320-L325` → after: `L3812-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3812-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3812-L3835) · [Before (L320-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L320-L325)

```diff
-     async function nM(MM, rM, iM) {
-       try {
-         const SM = await PM(MM, rM, iM);
-         (0, OM.c)(SM.blob, `bloxd-screenshot-${SM.width}x${SM.height}-${Date.now()}.png`)
-       } catch (SM) {
-         console.error("Error taking screenshot:", SM)
+     class oU {
+       constructor(UU) {
+         this.model = UU, this.reshapeOffsets = [...AU, [0, -1, 0]]
+       }
+       handles(UU) {
+         const XU = cU.h[UU];
+         return (null === XU || void 0 === XU ? void 0 : XU.model) === this.model && void 0 !== XU.attachedTop
+       }
+       affects(UU) {
+         return this.handles(UU) || FU(UU) || (0, QU.u)(cU.h[UU])
+       }
+       shape(UU, XU, zU, AU, oU) {
+         let DU = this.handles(UU(XU, zU + 1, AU)) ? yU.j : 0;
+         return yU.s.forEach(((oU, EU) => {
+           let {
+             dx: YU,
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L329-L345` → after: `L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3839) · [Before (L329-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L329-L345)

```diff
-   38423: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => QM,
-       f: () => PM,
-       j: () => aM
-     });
-     var OM = iM(38418),
-       SM = iM(38426);
-     let jM = 0;
- 
-     function aM(MM, rM) {
-       const iM = MM;
-       iM._noaFaceGroups = null !== rM && void 0 !== rM ? rM : null, iM._noaFaceEpoch = -1, iM._noaFaceMask = -1, iM._noaFaceCount = -1, iM._noaFaceMaterial = null;
-       const OM = MM.iG;
-       OM && 1 === OM.length && (OM[0].indexStart = 0, OM[0].indexCount = MM.getTotalIndices())
-     }
- ... (1 more removed lines; see GitHub link above)
+   38743: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L347-L351` → after: `L3841-L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3841-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3841-L3852) · [Before (L347-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L347-L351)

```diff
-       if (rM) {
-         jM++;
-         for (const rM of MM) {
-           const MM = rM._noaFaceGroups;
-           MM && aM(rM, MM)
+       var zU;
+       XU || (XU = {});
+       const cU = null !== (zU = XU.customAttributes) && void 0 !== zU ? zU : {};
+       var yU, QU, AU;
+       "Gun" === (null === UU || void 0 === UU ? void 0 : UU.type) && (cU.shotsLeft = null !== (yU = null !== (QU = cU.shotsLeft) && void 0 !== QU ? QU : null === (AU = cU.gunStats) || void 0 === AU ? void 0 : AU.clipSize) && void 0 !== yU ? yU : UU.clipSize);
+       if (cU.enchantmentTier && (cU.enchantmentTier = cU.enchantmentTier.toString()), cU.enchantments)
+         for (const YU in cU.enchantments) {
+           const UU = cU.enchantments[YU];
+           if ("number" !== typeof UU) {
+             const XU = parseInt(UU);
+             isNaN(XU) || XU < 0 ? cU.enchantments[YU] = void 0 : cU.enchantments[YU] = XU > 1e9 ? 1e9 : XU
+           }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L353-L408` → after: `L3854-L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3854-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3854-L3860) · [Before (L353-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L353-L408)

```diff
-       } else jM = Math.max(0, jM - 1)
-     }
- 
-     function nM(MM, rM, iM) {
-       let SM = -1,
-         jM = 0;
-       for (let aM = 0; aM < OM.g; aM++) {
-         const iM = MM[aM],
-           PM = MM[aM + 1];
-         PM > iM && rM & 1 << OM.c[aM] && (SM < 0 && (SM = iM), jM = PM)
-       }
-       return SM < 0 ? (iM[0] = 0, iM[1] = 0, 0) : (iM[0] = SM, iM[1] = jM - SM, jM - SM)
-     }
-     class QM {
-       constructor(MM, rM) {
-         this.HL = MM, this.engine = rM, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
- ... (40 more removed lines; see GitHub link above)
+       if (cU.enchantmentData)
+         for (const YU in cU.enchantmentData) {
+           const UU = cU.enchantmentData[YU];
+           if (!UU) continue;
+           if ("object" !== typeof UU) {
+             cU.enchantmentData[YU] = void 0;
+             continue
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L410` → after: `L3862-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3862-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3862-L3866) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L410)

```diff
-           rM && 0 === MM._noaFaceCount || (JM[yM++] = MM)
+           const XU = UU.icon,
+             zU = UU.description;
+           var FU, oU, DU, EU;
+           if ("string" !== typeof XU) cU.enchantmentData[YU].icon = null !== (FU = null === XU || void 0 === XU || null === (oU = XU.toString) || void 0 === oU ? void 0 : oU.call(XU)) && void 0 !== FU ? FU : void 0;
+           if ("string" !== typeof zU) cU.enchantmentData[YU].description = null !== (DU = null === zU || void 0 === zU || null === (EU = zU.toString) || void 0 === EU ? void 0 : EU.call(zU)) && void 0 !== DU ? DU : void 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L412-L413` → after: `L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3868) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L412-L413)

```diff
-         MM.length = yM
-       }
+       return XU.customAttributes = cU, XU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L421-L423` → after: `L3882-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3882-L3886) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L421-L423)

```diff
-     const OM = new WeakSet;
-     let SM = 0;
-     const jM = new Set;
+     var cU = zU(9782),
+       yU = zU(9821),
+       QU = zU(38994);
+     const AU = (0, cU.j)("Noticeboard"),
+       FU = (0, cU.j)("Standing Noticeboard|meta|rot4|lrud");
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L425-L426` → after: `L3888-L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3888-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3888-L3889) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L425-L426)

```diff
-     function aM(MM, rM) {
-       MM._data = rM
+     function oU(UU) {
+       return AU <= UU && UU <= FU
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L431` → after: `L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3899) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L431)

```diff
-       (null !== (rM = null === (iM = MM.getBuffer()) || void 0 === iM ? void 0 : iM.vL) && void 0 !== rM ? rM : 0) > 0 && (OM.add(MM), 0 === SM ? aM(MM, null) : jM.add(MM))
+       return "string" === typeof(null === UU || void 0 === UU || null === (XU = UU.persisted) || void 0 === XU || null === (zU = XU.shared) || void 0 === zU ? void 0 : zU.text)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L435` → after: `L3903-L3952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3903-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3903-L3952) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L435)

```diff
-       SM++;
+       return tU(UU) && "" !== UU.persisted.shared.text.trim()
+     }
+ 
+     function kU(UU, XU) {
+       let [zU, , cU] = XU;
+       const [QU, , AU] = yU.s[UU][IU];
+       return zU * QU + cU * AU
+     }
+ 
+     function GU(UU, XU, zU) {
+       return zU[1] - XU[1] || kU(UU, XU) - kU(UU, zU)
+     }
+ 
+     function BU(UU, XU, zU, QU, FU) {
+       var oU;
+       let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU(XU[0], XU[1], XU[2]);
+ ... (34 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L437-L445` → after: `L3954-L3962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3954-L3962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3954-L3962) · [Before (L437-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L437-L445)

```diff
-           const rM = new Set;
-           for (const SM of MM) {
-             const MM = SM.geometry;
-             for (const SM of Object.values(null !== (iM = null === MM || void 0 === MM ? void 0 : MM.getVertexBuffers()) && void 0 !== iM ? iM : {})) {
-               var iM;
-               const MM = SM.getWrapperBuffer();
-               OM.has(MM) && rM.add(MM)
-             }
-           }
+           let {
+             anchor: XU,
+             rot: zU,
+             width: cU,
+             height: QU
+           } = UU;
+           const [AU, , FU] = yU.s[zU][IU], oU = [];
+           for (let yU = 0; yU < QU; yU++)
+             for (let UU = 0; UU < cU; UU++) oU.push([XU[0] + AU * UU, XU[1] - yU, XU[2] + FU * UU]);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L447-L452` → after: `L3964-L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3964-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3964-L3984) · [Before (L447-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L447-L452)

```diff
-         }(MM)) iM.getData() || QM(iM), jM.add(iM);
-       let rM = !0;
-       return () => {
-         if (rM && (rM = !1, SM--, 0 === SM)) {
-           for (const MM of jM) aM(MM, null);
-           jM.clear()
+         }(UU))
+         if (tU(XU(zU[0], zU[1], zU[2]))) return zU;
+       return null
+     }
+ 
+     function PU(UU, XU, zU, yU, QU) {
+       const AU = UU(zU, yU, QU);
+       if (!oU(AU)) return null;
+       const {
+         rootId: FU,
+         rot: DU
+       } = cU.h[AU].meta, EU = [
+         [zU, yU, QU]
+       ], NU = new Set([EU[0].join()]);
+       let IU = EU[0],
+         pU = null;
+ ... (5 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L457-L462` → after: `L3999-L4017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3999-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L3999-L4017) · [Before (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L457-L462)

```diff
-     function QM(MM) {
-       const rM = MM.getBuffer();
-       if (!rM || !(rM.vL > 0)) return;
-       const iM = MM._engine,
-         OM = new Uint8Array(rM.vL);
-       iM.bindArrayBuffer(rM), iM._gl.getBufferSubData(iM._gl.ARRAY_BUFFER, 0, OM), iM._resetVertexBufferBinding(), aM(MM, OM)
+     function WU(UU, XU, zU, AU, FU) {
+       if (null !== zU && oU(zU)) {
+         const {
+           rootName: UU,
+           rot: XU
+         } = cU.h[zU].meta;
+         if (yU.s[XU].some((UU => {
+             let [XU, zU, cU] = UU;
+             return XU === AU[0] && zU === AU[1] && cU === AU[2]
+           }))) return {
+           root: UU,
+           rot: XU
+         }
+       }
+       const [DU, EU] = yU.i[FU], YU = UU(XU[0] - DU, XU[1], XU[2] - EU);
+       return {
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L465` → after: `L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4020) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L465)

```diff
-   38418: (MM, rM, iM) => {
+   38981: (UU, XU, zU) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L467-L468` → after: `L4022-L4024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4022-L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4022-L4024) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L467-L468)

```diff
-       c: () => aM,
-       g: () => jM,
+       d: () => gU,
+       h: () => BU,
+       i: () => PU,
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L470-L473` → after: `L4026-L4031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4026-L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4026-L4031) · [Before (L470-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L470-L473)

```diff
-       l: () => OM,
-       n: () => PM,
-       r: () => SM,
-       t: () => QM
+       m: () => pU,
+       o: () => YU,
+       q: () => IU,
+       u: () => dU,
+       x: () => LU,
+       z: () => NU
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L475-L486` → after: `L4033-L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4033-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4033-L4239) · [Before (L475-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L475-L486)

```diff
-     const OM = 6,
-       SM = [0, 2, 4, 1, 3, 5, 0, 2],
-       jM = 6,
-       aM = [1, 0, 3, 2, 5, 4];
-     for (let zM = jM; zM < SM.length; zM++)
-       if (SM[zM] !== SM[zM - jM]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
-     const PM = SM.length + 1,
-       nM = (() => {
-         const MM = [];
-         for (let rM = 0; rM < jM; rM++) MM[SM[rM]] = rM;
-         return MM
-       })();
+     var cU = zU(7056),
+       yU = zU(37780),
+       QU = zU(9782);
+     const AU = (0, QU.j)("Water"),
+       FU = (0, QU.j)("Lava"),
+       oU = (0, QU.j)("Air"),
+       DU = {
+         physicsState: {
+           type: cU.o.CAR,
+           tier: cU.j.KART
+         },
+         validBlockIds: "solidBlocks",
+         meshSize: 4,
+         placeSound: null
+       },
+       EU = {
+ ... (191 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L489` → after: `L4242-L4244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4242-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4242-L4244) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L489)

```diff
-       return !!MM && MM.backFaceCulling && (0 === MM.transparencyMode || 1 === MM.transparencyMode)
+       for (const XU of yU.b)
+         if (YU[XU].meshItemName === UU) return XU;
+       return null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L506-L507` → after: `L4247-L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4247-L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4247-L4421) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L506-L507)

```diff
-     function PM(MM, rM, iM) {
-       return Math.min(Math.abs(MM[0] * rM), Math.abs(MM[5] * iM)) / 2
+     function pU(UU, XU) {
+       const zU = UU.validBlockIds;
+       if (Array.isArray(zU)) return zU.includes(XU);
+       if (XU === oU) return !1;
+       if ("solidBlocks" === zU) return !0 !== QU.h[XU].BI;
+       if ("solidBlocksOrFluid" === zU) return !0;
+       throw new Error(`Unsupported validBlockIds for ${XU}: ${JSON.stringify(zU)}`)
+     }
+     const aU = {
+         meshAttachment: {
+           size: .12,
+           offset: [0, 1.8, -.24],
+           rotation: [0, 0, 0]
+         }
+       },
+       tU = {
+ ... (159 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L510-L511` → after: `L4426-L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4426-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4426-L4427) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L510-L511)

```diff
-     function nM(MM, rM) {
-       return SM + jM * MM * MM / rM
+     function PU(UU) {
+       return ZU.has(UU)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L514-L516` → after: `L4430-L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4430-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4430-L4431) · [Before (L514-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L514-L516)

```diff
-     function QM(MM, rM, iM, SM, jM) {
-       const aM = OM.n;
-       return zM(MM[aM], MM[aM + 1], MM[aM + 2], MM[aM + 3], MM[aM + 4], MM[aM + 5], rM, iM, SM, jM)
+     function WU(UU) {
+       return RU.has(UU)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L519-L520` → after: `L4434-L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4434-L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4434-L4437) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L519-L520)

```diff
-     function zM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
-       return (aM <= MM - QM ? 0 : 1) | (aM >= rM + QM ? 0 : 2) | (PM <= iM - QM ? 0 : 4) | (PM >= OM + QM ? 0 : 8) | (nM <= SM - QM ? 0 : 16) | (nM >= jM + QM ? 0 : 32)
+     function dU(UU) {
+       return UU === cU.o.DEFAULT || function(UU) {
+         return ZU.has(UU) || RU.has(UU)
+       }(UU)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L540-L542` → after: `L4440-L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4440-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4440-L4441) · [Before (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L540-L542)

```diff
-     function HM(MM, rM) {
-       const iM = OM.k[rM];
-       return MM[iM + 1] - MM[iM]
+     function LU(UU) {
+       return !dU(UU) && UU !== cU.o.SLEEPING
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L545-L577` → after: `L4455-L4462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4455-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/260.js#L4455-L4462) · [Before (L545-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/260.js#L545-L577)

```diff
-     function hM(MM, rM, iM) {
-       let SM = 0;
-       for (let aM = 0; aM < OM.l; aM++) HM(MM, aM) > 0 && (SM |= 1 << aM);
-       if (0 === (rM &= SM)) return 0;
-       if (rM === SM) return iM[0] = 0, iM[1] = MM[OM.g], 1;
-       let jM = null,
-         PM = 1 / 0;
-       for (const QM of function(MM) {
-           let rM = mM[MM];
-           if (rM) return rM;
-           const iM = new Map,
-             OM = (MM, rM) => {
-               const OM = 4 * MM + rM.length / 2;
-               iM.has(OM) || iM.set(OM, {
-                 Nj: MM,
-                 windows: rM
- ... (17 more removed lines; see GitHub link above)
+     function AU(UU) {
+       const XU = UU.indexOf("|");
+       return -1 === XU ? {
+         item: UU,
+         clientPredictedThrower: null
+       } : {
+         item: UU.slice(0, XU),
+         clientPredictedThrower: UU.slice(XU + 1)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261, 262];
+ export const ids = [261];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L4)

```diff
-   41362: (MM, rM, iM) => {
+   38809: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L7` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L6-L11) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L6-L7)

```diff
-       d: () => zM,
-       e: () => mM
+       c: () => DU,
+       f: () => cU,
+       j: () => FU,
+       m: () => yU,
+       o: () => AU,
+       r: () => QU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L92` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L13-L18) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L9-L92)

```diff
-     var OM = iM(41099),
-       SM = iM(41105),
-       jM = iM(38040),
-       aM = iM(38173),
-       PM = iM(41366),
-       nM = iM(41328),
-       QM = iM(38085);
-     let zM = (() => {
-         var MM;
-         let rM, iM, nM = PM.d,
-           QM = [],
-           zM = [],
-           LM = [],
-           mM = [];
-         return MM = class extends nM {
-           constructor(MM, rM, iM, SM) {
- ... (68 more removed lines; see GitHub link above)
+     const cU = 1.001,
+       yU = .501,
+       QU = .025,
+       AU = .75,
+       FU = .08,
+       oU = 4;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L95` → after: `L21-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L21-L35) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L95)

```diff
-       LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_3", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.HemisphericLight", zM))
+       const UU = yU,
+         XU = QU,
+         zU = UU - XU / 2,
+         cU = (2 * UU - 2 * XU) / (2 * oU - 1),
+         AU = [];
+       for (const yU of [-zU, zU])
+         for (const QU of [-zU, zU])
+           for (let zU = 0; zU < oU; zU++) {
+             const FU = -UU + XU + cU * (2 * zU + .5);
+             AU.push([cU, XU, XU, FU, yU, QU]), AU.push([XU, cU, XU, yU, FU, QU]), AU.push([XU, XU, cU, yU, QU, FU])
+           }
+       for (const yU of [-zU, zU])
+         for (const UU of [-zU, zU])
+           for (const cU of [-zU, zU]) AU.push([XU, XU, XU, yU, UU, cU]);
+       return AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L98` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L38) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L98)

```diff
-   38740: (MM, rM, iM) => {
+   39203: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L100` → after: `L40-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L40-L56) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L100)

```diff
-       d: () => SM
+       A: () => RU,
+       B: () => WU,
+       C: () => ZU,
+       E: () => BU,
+       G: () => NU,
+       H: () => aU,
+       J: () => gU,
+       K: () => yU,
+       b: () => EU,
+       d: () => oU,
+       h: () => GU,
+       j: () => DU,
+       m: () => FU,
+       p: () => AU,
+       r: () => QU,
+       s: () => PU,
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L102-L140` → after: `L58-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L58-L61) · [Before (L102-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L102-L140)

```diff
-     var OM = iM(38744);
-     class SM {
-       static GetPlanes(MM) {
-         const rM = [];
-         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
-         return SM.GetPlanesToRef(MM, rM), rM
-       }
-       static GetNearPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
-       }
-       static GetFarPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
-       }
-       static GetLeftPlaneToRef(MM, rM) {
- ... (23 more removed lines; see GitHub link above)
+     var cU = zU(9874);
+ 
+     function yU(UU) {
+       return Math.floor(UU).toLocaleString("en-US")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L142-L224` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L63-L73) · [Before (L142-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L142-L224)

```diff
-   },
-   38744: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => SM
-     });
-     var OM = iM(38040);
-     class SM {
-       constructor(MM, rM, iM, SM) {
-         this.normal = new OM.q(MM, rM, iM), this.d = SM
-       }
-       HOM() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
- ... (67 more removed lines; see GitHub link above)
+     const QU = 2e3,
+       AU = .005,
+       FU = .001,
+       oU = 2,
+       DU = "Fluid Tank",
+       EU = "Coolant Mixer",
+       YU = 144;
+ 
+     function NU(UU) {
+       const XU = UU.split("|")[0];
+       return (0, cU.o)(XU) ? XU === cU.e ? "cryo" : "water" : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L226-L243` → after: `L75-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L75-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L75-L102) · [Before (L226-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L226-L243)

```diff
-     SM._TmpMatrix = OM.d.Identity()
-   },
-   39078: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => OM
-     });
-     class OM {
-       constructor(MM, rM, iM, OM) {
-         this.x = MM, this.y = rM, this.width = iM, this.height = OM
-       }
-       toGlobal(MM, rM) {
-         return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
-       }
-       toGlobalToRef(MM, rM, iM) {
-         return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
-       }
- ... (2 more removed lines; see GitHub link above)
+     const IU = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 1, 0],
+         [0, -1, 0],
+         [0, 0, 1],
+         [0, 0, -1]
+       ],
+       pU = 63;
+ 
+     function aU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const zU = XU ? function(UU, XU, zU) {
+         const cU = IU.findIndex((cU => {
+           let [yU, QU, AU] = cU;
+           return yU === UU && QU === XU && AU === zU
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L246-L285` → after: `L105-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L105-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L105-L164) · [Before (L246-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L246-L285)

```diff
-   },
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
- ... (24 more removed lines; see GitHub link above)
+ 
+     function tU(UU) {
+       return "pipe" === UU || "tank" === UU || "maker" === UU
+     }
+ 
+     function gU(UU, XU, zU) {
+       return 0 !== (UU.faces & 1 << zU) && 0 !== (XU.faces & 1 << (1 ^ zU)) && (tU(UU.kind) || tU(XU.kind))
+     }
+     const kU = (UU, XU, zU, cU) => ({
+         input: UU,
+         inputAmount: cU,
+         output: XU,
+         outputAmount: zU
+       }),
+       GU = {
+         Condenser: {
+ ... (44 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L287` → after: `L166-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L166-L169) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L287)

```diff
-       }
+       };
+ 
+     function BU(UU, XU) {
+       return 1e3 * (null !== XU && void 0 !== XU ? XU : 0) / UU.opMs
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L289-L295` → after: `L171-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L171-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L171-L175) · [Before (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L289-L295)

```diff
-   },
-   38885: (MM, rM, iM) => {
-     function OM() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
-         const rM = 16 * Math.random() | 0;
-         return ("x" === MM ? rM : 3 & rM | 8).toString(16)
-       }))
+ 
+     function ZU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const zU = BU(GU["Coolant Mixer"], YU) * XU;
+       return UU <= 0 ? 0 : Math.ceil(UU / zU - 1e-9)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L297-L299` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L177-L179) · [Before (L297-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L297-L299)

```diff
-     iM.d(rM, {
-       d: () => OM
-     })
+     const RU = "baf2Water",
+       PU = "baf2waterclose",
+       WU = "baf2wateropen"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L301` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L181) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L301)

```diff
-   39711: (MM, rM, iM) => {
+   39196: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L303` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L183-L184) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L303)

```diff
-       e: () => OM
+       e: () => SU,
+       i: () => rU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L305-L356` → after: `L186-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L186-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L186-L208) · [Before (L305-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L305-L356)

```diff
-     class OM {
-       static _CheckLimit(MM, rM) {
-         let iM = OM._LogLimitOutputs[MM];
-         return iM ? iM.current++ : (iM = {
-           limit: rM,
-           current: 1
-         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
-       }
-       static _GenerateLimitMessage(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const iM = OM._LogLimitOutputs[MM];
-         if (!iM || !OM.MessageLimitReached) return;
-         const SM = this._Levels[rM];
-         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
-       }
-       static _AddLogEntry(MM) {
- ... (36 more removed lines; see GitHub link above)
+     var cU = zU(9782),
+       yU = zU(9821);
+     const QU = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var AU = zU(9836),
+       FU = zU(38994),
+       oU = zU(9834);
+     const DU = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (7 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L358-L417` → after: `L210-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L210-L212) · [Before (L358-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L358-L417)

```diff
-     OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels =  … [truncated]
-       color: "white",
-       logFunc: console.log,
-       name: "Log"
-     }, {
-       color: "orange",
-       logFunc: console.warn,
-       name: "Warn"
-     }, {}, {
-       color: "red",
-       logFunc: console.error,
-       name: "Error"
-     }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
-   },
-   63893: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
- ... (44 more removed lines; see GitHub link above)
+ 
+     function YU(UU, XU) {
+       return UU[0] === XU[0] && UU[1] === XU[1]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L419-L449` → after: `L214-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L214-L216) · [Before (L419-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L419-L449)

```diff
-     zM.VertexUrl = "fxaa", zM.FragmentUrl = "fxaa", zM.Uniforms = ["texelSize"];
-     class LM extends jM.b {
-       getClassName() {
-         return "FxaaPostProcess"
-       }
-       constructor(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-           SM = arguments.length > 3 ? arguments[3] : void 0,
-           jM = arguments.length > 4 ? arguments[4] : void 0,
-           aM = arguments.length > 5 ? arguments[5] : void 0,
-           PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-         const nM = {
-           uniforms: zM.Uniforms,
-           size: "number" === typeof rM ? rM : void 0,
-           camera: iM,
-           samplingMode: SM || OM.h.BILINEAR_SAMPLINGMODE,
- ... (15 more removed lines; see GitHub link above)
+ 
+     function NU(UU, XU) {
+       return UU[0] * XU[0] + UU[1] * XU[1] === 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L451-L476` → after: `L218-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L218-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L218-L227) · [Before (L451-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L451-L476)

```diff
-     var mM = iM(39711),
-       HM = iM(41205),
-       hM = iM(44478),
-       JM = iM(44458),
-       dM = iM(41003);
-     const yM = 0;
-     class lM {
-       constructor(MM, rM, iM) {
-         this.name = MM, this._parentTask = rM, this._context = iM, this.disabled = !1
-       }
-       setInitializeFunc(MM) {
-         this._initFunc = MM
-       }
-       setExecuteFunc(MM) {
-         this._executeFunc = MM
-       }
- ... (10 more removed lines; see GitHub link above)
+     const IU = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
+     var pU = zU(9867);
+ 
+     function aU(UU, XU, zU, cU, yU) {
+       return XU < pU.n || XU >= pU.n + pU.r || Math.floor(UU / pU.w) === Math.floor(cU / pU.w) && Math.floor(zU / pU.w) === Math.floor(yU / pU.w)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L478-L494` → after: `L229-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L229-L245) · [Before (L478-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L478-L494)

```diff
-     class EM extends lM {
-       static IsObjectListPass(MM) {
-         return void 0 !== MM.setObjectList
-       }
-       get objectList() {
-         return this._objectList
-       }
-       setObjectList(MM) {
-         this._objectList = MM
-       }
-       constructor(MM, rM, iM, OM) {
-         super(MM, rM, iM), this._engine = OM
-       }
-       _isValid() {
-         const MM = super._isValid();
-         return MM || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
- ... (1 more removed lines; see GitHub link above)
+     const tU = "Splitter",
+       gU = "Sorting Gate",
+       kU = new Set(pU.J),
+       GU = new Set([...pU.J, "Belt Loader", "Fast Loader", gU]),
+       BU = new Set(pU.u),
+       ZU = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 0, 1],
+         [0, 0, -1],
+         [0, 1, 0],
+         [0, -1, 0]
+       ];
+ 
+     function RU(UU) {
+       var XU, zU;
+ ... (1 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L496-L550` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L247-L249) · [Before (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L496-L550)

```diff
-     class UM extends lM {
-       static IsRenderPass(MM) {
-         return void 0 !== MM.setRenderTarget
-       }
-       get renderTarget() {
-         return this._renderTarget
-       }
-       get renderTargetDepth() {
-         return this._renderTargetDepth
-       }
-       get frameGraphRenderTarget() {
-         return this._frameGraphRenderTarget
-       }
-       constructor(MM, rM, iM, OM) {
-         super(MM, rM, iM), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = OM
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function PU(UU) {
+       return RU(UU) === pU.h && (0, pU.T)(cU.h[UU].name)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L552-L658` → after: `L251-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L251-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L251-L265) · [Before (L552-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L552-L658)

```diff
-     var GM = iM(38068);
-     class CM {
-       get name() {
-         return this._name
-       }
-       set name(MM) {
-         this._name = MM
-       }
-       get disabled() {
-         return this._disabled
-       }
-       set disabled(MM) {
-         this._disabled = MM
-       }
-       get passes() {
-         return this._passes
- ... (91 more removed lines; see GitHub link above)
+     var WU = zU(9827),
+       dU = zU(9848);
+     const LU = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
+ 
+     function eU(UU) {
+       var XU, zU;
+       const yU = null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta;
+       return (null === yU || void 0 === yU ? void 0 : yU.rootName) !== dU.o ? null : {
+         rot: null !== (zU = yU.rot) && void 0 !== zU ? zU : 1,
+         half: (0, dU.f)(yU.rootName, yU.metaStr)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L661-L707` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L268-L270) · [Before (L661-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L661-L707)

```diff
-     class eM extends CM {
-       get alphaMode() {
-         return this.postProcess.alphaMode
-       }
-       set alphaMode(MM) {
-         this.postProcess.alphaMode = MM
-       }
-       get drawWrapper() {
-         return this._postProcessDrawWrapper
-       }
-       constructor(MM, rM, iM) {
-         super(MM, rM), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = iM, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
-       }
-       isReady() {
-         return this.postProcess.isReady()
-       }
- ... (31 more removed lines; see GitHub link above)
+ 
+     function CU(UU, XU, zU, cU) {
+       return eU(UU(XU, zU, cU))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L709-L722` → after: `L272-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L272-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L272-L279) · [Before (L709-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L709-L722)

```diff
-     class bM extends eM {
-       constructor(MM, rM, iM) {
-         super(MM, rM, iM || new zM(MM, rM.engine))
-       }
-       getClassName() {
-         return "FrameGraphFXAATask"
-       }
-       record() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           rM = arguments.length > 1 ? arguments[1] : void 0,
-           iM = arguments.length > 2 ? arguments[2] : void 0;
-         const OM = super.record(MM, rM, iM);
-         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, OM
-       }
+ 
+     function wU(UU, XU, zU, cU, yU) {
+       let {
+         rot: QU,
+         half: AU
+       } = yU;
+       const [FU, oU] = (0, dU.l)(QU, AU), DU = CU(UU, XU + FU, zU, cU + oU);
+       return null !== DU && DU.rot === QU && DU.half === dU.q[AU]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L724-L727` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L281-L284) · [Before (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L724-L727)

```diff
-     var wM = iM(44469);
-     class tM extends eM {
-       constructor(MM, rM, iM) {
-         super(MM, rM, iM || new wM.f(MM, rM.engine))
+     var qU = zU(39200);
+     const OU = [new class {
+       constructor() {
+         this.reshapeOffsets = IU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L729-L743` → after: `L286-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L286-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L286-L306) · [Before (L729-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L729-L743)

```diff
-       getClassName() {
-         return "FrameGraphPassTask"
-       }
-     }
-     var gM = iM(41196),
-       uM = iM(41283),
-       RM = iM(41242),
-       pM = iM(41362),
-       WM = iM(38173);
-     class sM {
-       getRenderCamera(MM) {
-         if (this._renderCamera) return this._renderCamera;
-         {
-           let rM;
-           return rM = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, MM && rM && rM.isRigCamera ? rM.rigParent : rM
+       handles(UU) {
+         var XU;
+         return "Stairs" === (null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.model)
+       }
+       affects(UU) {
+         return this.handles(UU)
+       }
+       shape(UU, XU, zU, yU, QU) {
+         const AU = this.stairsOf(QU),
+           FU = this.cornerAt(UU, XU, zU, yU, AU),
+           DU = AU.half === oU.e.top ? "top" : "bot";
+         return (0, cU.j)(`${cU.h[QU].meta.rootName}|meta|rot${AU.rot}|${DU}${null===FU?"":`|${FU}`}`)
+       }
+       stairsOf(UU) {
+         const {
+           rot: XU,
+ ... (5 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L746-L750` → after: `L309-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L309-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L309-L334) · [Before (L746-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L746-L750)

```diff
-       setRenderCamera(MM) {
-         this._renderCamera = MM
-       }
-       _getSharedGizmoLight() {
-         return this._sharedGizmoLight || (this._sharedGizmoLight = new pM.d("shared gizmo light", new QM.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = WM.d.Gray()), this._sharedGizmoLight
+       stairsAt(UU, XU, zU, cU) {
+         const yU = UU(XU, zU, cU);
+         return this.handles(yU) ? this.stairsOf(yU) : null
+       }
+       cornerAt(UU, XU, zU, cU, yU) {
+         let {
+           rot: QU,
+           half: AU
+         } = yU;
+         const FU = DU[QU],
+           oU = yU => {
+             let [FU, oU] = yU;
+             const DU = this.stairsAt(UU, XU + FU, zU, cU + oU);
+             return null !== DU && DU.rot === QU && DU.half === AU
+           },
+           IU = this.stairsAt(UU, XU + FU[0], zU, cU + FU[1]);
+ ... (10 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L752-L753` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L336-L338) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L752-L753)

```diff
-       static get DefaultUtilityLayer() {
-         return null == sM._DefaultUtilityLayer ? sM._CreateDefaultUtilityLayerFromScene(nM.c.LastCreatedScene) : sM._DefaultUtilityLayer
+     }, new class {
+       constructor() {
+         this.reshapeOffsets = QU, this.rootIds = new Set(yU.e.map((UU => (0, cU.j)(UU))))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L755-L758` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L340-L343) · [Before (L755-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L755-L758)

```diff
-       static _CreateDefaultUtilityLayerFromScene(MM) {
-         return sM._DefaultUtilityLayer = new sM(MM), sM._DefaultUtilityLayer.originalScene.Rk.addOnce((() => {
-           sM._DefaultUtilityLayer = null
-         })), sM._DefaultUtilityLayer
+       handles(UU) {
+         var XU;
+         const zU = null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta;
+         return void 0 !== zU && this.rootIds.has(zU.rootId)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L760-L761` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L345-L346) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L760-L761)

```diff
-       static get DefaultKeepDepthUtilityLayer() {
-         return null == sM._DefaultKeepDepthUtilityLayer ? sM._CreateDefaultKeepUtilityLayerFromScene(nM.c.LastCreatedScene) : sM._DefaultKeepDepthUtilityLayer
+       affects(UU) {
+         return this.handles(UU)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L763-L766` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L348-L349) · [Before (L763-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L763-L766)

```diff
-       static _CreateDefaultKeepUtilityLayerFromScene(MM) {
-         return sM._DefaultKeepDepthUtilityLayer = new sM(MM), sM._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, sM._DefaultKeepDepthUtilityLayer.originalScene.Rk.addOnce((() => {
-           sM._DefaultKeepDepthUtilityLayer = null
-         })), sM._DefaultKeepDepthUtilityLayer
+       placedBy(UU) {
+         return cU.h[UU].meta.rootName === yU.k ? null : yU.k
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L768-L797` → after: `L351-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L351-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L351-L386) · [Before (L768-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L768-L797)

```diff
-       constructor(MM) {
-         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this.originalScene = MM, this.handleEvents = rM, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.process … [truncated]
-           virtual: !0,
-           useFloatingOrigin: MM.floatingOriginMode
-         }), this.utilityLayerScene.useRightHandedSystem = MM.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), rM && (this._originalPointerObserver = MM.onPrePoi … [truncated]
-           if (!this.utilityLayerScene.activeCamera) return;
-           if (!this.pickingEnabled) return;
-           if (!this.processAllEvents && rM.type !== uM.d.POINTERMOVE && rM.type !== uM.d.POINTERUP && rM.type !== uM.d.POINTERDOWN && rM.type !== uM.d.POINTERDOUBLETAP) return;
-           this.utilityLayerScene.pointerX = MM.pointerX, this.utilityLayerScene.pointerY = MM.pointerY;
-           const iM = rM.event;
-           if (MM.isPointerCaptured(iM.pointerId)) return void(this._pointerCaptures[iM.pointerId] = !1);
-           const OM = iM => {
-               let OM;
-               if (rM.nearInteractionPickingInfo) OM = rM.nearInteractionPickingInfo.pickedMesh.Hk() == iM ? rM.nearInteractionPickingInfo : new RM.c;
- ... (14 more removed lines; see GitHub link above)
+       shape(UU, XU, zU, QU, AU) {
+         const {
+           rootId: FU,
+           rootName: oU,
+           rot: DU
+         } = cU.h[AU].meta;
+         let EU = 0;
+         return yU.s[DU].forEach(((yU, AU) => {
+           var oU;
+           let [YU, NU, IU] = yU;
+           const pU = null === (oU = cU.h[UU(XU + YU, zU + NU, QU + IU)]) || void 0 === oU ? void 0 : oU.meta;
+           (null === pU || void 0 === pU ? void 0 : pU.rootId) === FU && pU.rot === DU && (EU |= 1 << AU)
+         })), (0, cU.j)((0, yU.c)(oU, DU, EU))
+       }
+     }, ...AU.d.map((UU => new FU.e(UU))), new class {
+       constructor() {
+ ... (20 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L799-L806` → after: `L388-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L388-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L388-L440) · [Before (L799-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L799-L806)

```diff
-         })), this._originalPointerObserver && MM.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, iM || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((MM => {
-           this.shouldRender && MM == this.getRenderCamera() && this.render()
-         }))), this._sceneDisposeObserver = this.originalScene.Rk.add((() => {
-           this.dispose()
-         })), this._updateCamera()
-       }
-       _notifyObservers(MM, rM, iM) {
-         MM.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new uM.j(MM.type, MM.event, rM), MM.type), this._lastPointerEvents[iM.pointerId] = !0)
+           return (0, cU.j)((0, pU._)(QU, !1))
+         }(UU, XU, zU, yU, oU) : (0, cU.j)((0, pU.L)(FU, oU, function(UU, XU, zU, yU, QU) {
+           const [AU, FU] = pU.e[QU - 1], oU = (QU, AU) => function(UU, XU, zU) {
+             var yU;
+             const QU = null === (yU = cU.h[UU]) || void 0 === yU ? void 0 : yU.meta;
+             if (!QU) return !1;
+             const AU = QU.rootName,
+               FU = GU.has(AU) || PU(UU);
+             if (!FU && !BU.has(AU) && AU !== tU) return !1;
+             const [oU, DU] = pU.e[QU.rot - 1];
+             if (FU && oU === -XU && DU === -zU) return !0;
+             if (BU.has(AU)) return oU === XU && DU === zU;
+             const EU = cU.h[UU].name;
+             return (AU === tU ? (0, pU.W)(EU, oU, DU) : AU === gU ? [(0, pU.M)(EU, oU, DU)] : []).some((UU => {
+               let [cU, yU] = UU;
+               return cU === -XU && yU === -zU
+ ... (37 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L808-L812` → after: `L442-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L442-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L442-L446) · [Before (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L808-L812)

```diff
-       render() {
-         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
-           const MM = this.utilityLayerScene.activeCamera.Hk(),
-             rM = this.utilityLayerScene.activeCamera;
-           rM._scene = this.utilityLayerScene, rM.leftCamera && (rM.leftCamera._scene = this.utilityLayerScene), rM.rightCamera && (rM.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), rM._scene = MM, rM.leftCamera && (rM.leftCamera._scene = MM), rM. … [truncated]
+       reshapedHalf(UU, XU, zU, cU, yU) {
+         if (null !== yU.half && wU(UU, XU, zU, cU, yU)) return yU.half;
+         for (const QU of ["right", "left"]) {
+           const [AU, FU] = (0, dU.l)(yU.rot, QU), oU = CU(UU, XU + AU, zU, cU + FU);
+           if (null !== oU && oU.rot === yU.rot && oU.half === dU.q[QU]) return QU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L815-L816` → after: `L450-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L450-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L450-L462) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L815-L816)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Rk.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+     }, new qU.b];
+ 
+     function SU(UU, XU, zU, cU, yU) {
+       let QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       for (const AU of OU)
+         if (AU.handles(yU)) return AU.shape(UU, XU, zU, cU, yU, QU);
+       return yU
+     }
+ 
+     function rU(UU) {
+       for (const cU of OU) {
+         var XU, zU;
+         if (cU.handles(UU)) return null !== (XU = null === (zU = cU.placedBy) || void 0 === zU ? void 0 : zU.call(cU, UU)) && void 0 !== XU ? XU : null
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L818-L819` → after: `L464-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L464-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L464-L487) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L818-L819)

```diff
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+       return null
+     }
+   },
+   39200: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => dU,
+       e: () => BU,
+       g: () => GU
+     });
+     var cU = zU(9782),
+       yU = zU(9808),
+       QU = zU(9874),
+       AU = zU(39203),
+       FU = zU(9867);
+     const oU = (0, AU.H)("pipe"),
+       DU = (0, AU.H)("tank"),
+ ... (8 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L824-L825` → after: `L491-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L491-L492) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L824-L825)

```diff
-       FindMainCamera: function(MM) {
-         return MM.findMainCamera()
+         water: NU(!0, ["Condenser"], ["Centrifuge", "Synthesizer", AU.b]),
+         cryo: NU(!1, [AU.b], [])
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L827-L828` → after: `L494-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L494-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L494-L501) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L827-L828)

```diff
-       FindMainObjectRenderer: function(MM) {
-         return MM.findMainObjectRenderer()
+       pU = new Set([...IU.water.roots, ...IU.cryo.roots]),
+       aU = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+         py: [0, 1, 0],
+         pz: [0, 0, 1]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L830-L845` → after: `L503-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L503-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L503-L523) · [Before (L830-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L830-L845)

```diff
-       CreateUtilityLayerRenderer: function(MM) {
-         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const iM = MM.YJ,
-           OM = new sM(iM, rM, !0);
-         OM.utilityLayerScene.activeCamera = iM.activeCamera;
-         let SM = DM.FindMainCamera(iM.frameGraph);
-         !SM && iM.cameras.length > 0 && (SM = iM.cameras[0]), SM && (OM.setRenderCamera(SM), OM.utilityLayerScene.activeCamera = SM);
-         const jM = iM.onAfterRenderObservable.add((() => {
-           OM.render()
-         }));
-         return OM.utilityLayerScene.Rk.addOnce((() => {
-           iM.onAfterRenderObservable.remove(jM)
-         })), OM
-       }
-     };
-     let kM = null;
+       tU = yU.h.map((UU => aU[UU])),
+       gU = tU.map((UU => {
+         let [XU, zU, cU] = UU;
+         return AU.w.findIndex((UU => {
+           let [yU, QU, AU] = UU;
+           return yU === XU && QU === zU && AU === cU
+         }))
+       }));
+ 
+     function kU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const zU = cU.h[UU],
+         yU = null === zU || void 0 === zU ? void 0 : zU.meta.rootName,
+         NU = IU[XU];
+       if (!yU || !NU.roots.has(yU)) return null;
+       if ((0, QU.o)(yU)) return (0, AU.G)(zU.name) === XU ? oU : null;
+ ... (5 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L848-L852` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L526) · [Before (L848-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L848-L852)

```diff
-       let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         aM = arguments.length > 6 ? arguments[6] : void 0,
-         PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
+       let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L854-L885` → after: `L528-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L528-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L528-L535) · [Before (L854-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L854-L885)

```diff
-         height: QM,
-         width: zM
-       } = xM(MM, rM, iM);
-       if (!QM || !zM) return void mM.e.Error("Invalid 'size' parameter !");
-       const LM = rM.Hk();
-       let hM = LM.activeCamera !== rM;
-       if (LM.frameGraph) {
-         const MM = DM.FindMainObjectRenderer(LM.frameGraph);
-         MM && (hM = MM.camera !== rM)
-       }
-       hM ? YM(MM, rM, iM, (MM => {
-         if (jM) {
-           const rM = new Blob([MM]);
-           HM.e.DownloadBlob(rM), OM && OM("")
-         } else OM && OM(MM)
-       }), SM, 1, MM.getCreationOptions().antialias, void 0, void 0, void 0, void 0, aM) : MM.onEndFrameObservable.addOnce((() => {
- ... (16 more removed lines; see GitHub link above)
+         makers: FU
+       } = IU[QU];
+       return tU.some(((DU, EU) => {
+         var YU, NU;
+         let [IU, pU, aU] = DU;
+         const tU = UU(XU + IU, zU + pU, yU + aU),
+           GU = kU(tU, QU);
+         return null !== GU && FU.has(null !== (YU = null === (NU = cU.h[tU]) || void 0 === NU ? void 0 : NU.meta.rootName) && void 0 !== YU ? YU : "") && !(0, AU.J)(oU, GU, gU[EU])
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L888-L911` → after: `L538-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L538-L541) · [Before (L888-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L888-L911)

```diff
-     async function oM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         SM = arguments.length > 4 ? arguments[4] : void 0,
-         jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((nM, QM) => {
-         ZM(MM, rM, iM, (MM => {
-           "undefined" !== typeof MM ? nM(MM) : QM(new Error("Data is undefined"))
-         }), OM, PM, SM, jM, aM)
-       }))
-     }
-     async function fM(MM, rM, iM, OM) {
-       let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         jM = arguments.length > 5 ? arguments[5] : void 0,
-         aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
- ... (8 more removed lines; see GitHub link above)
+ 
+     function BU(UU) {
+       const XU = cU.h[UU];
+       return XU ? (0, AU.G)(XU.name) : null
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L914-L986` → after: `L545-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L545-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L545-L556) · [Before (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L914-L986)

```diff
-     function YM(MM, rM, jM, aM) {
-       let PM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         nM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         QM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         zM = arguments.length > 7 ? arguments[7] : void 0,
-         HM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         yM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         lM = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         EM = arguments.length > 11 ? arguments[11] : void 0,
-         UM = arguments.length > 12 ? arguments[12] : void 0,
-         GM = arguments.length > 13 ? arguments[13] : void 0,
-         CM = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         eM = arguments.length > 15 ? arguments[15] : void 0;
-       const bM = rM.Hk();
-       if (bM.frameGraph) return void AM(bM.frameGraph, rM, jM, PM, nM, QM, zM, EM, GM, !aM).then((MM => {
-         aM && aM(MM)
- ... (57 more removed lines; see GitHub link above)
+     function RU(UU) {
+       if (!ZU) {
+         ZU = new Map;
+         for (const UU of ["water", "cryo"])
+           for (let XU = 0; XU < 64; XU++)
+             for (const zU of [!1, !0]) ZU.set((0, QU.r)(UU, XU, zU), {
+               BI: UU,
+               mask: XU,
+               full: zU
+             })
+       }
+       return ZU.get(UU)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L988-L1002` → after: `L558-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L558-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L558-L572) · [Before (L988-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L988-L1002)

```diff
-     async function NM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         aM = arguments.length > 6 ? arguments[6] : void 0,
-         PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         QM = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         zM = arguments.length > 10 ? arguments[10] : void 0,
-         LM = arguments.length > 11 ? arguments[11] : void 0,
-         mM = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((HM, hM) => {
-         YM(MM, rM, iM, (MM => {
-           "undefined" !== typeof MM ? HM(MM) : hM(new Error("Data is undefined"))
-         }), OM, SM, jM, aM, PM, nM, QM, zM, LM, mM)
+     const PU = new Map(Array.from({
+       length: QU.m + 1
+     }, ((UU, XU) => [(0, QU.s)(XU), XU])));
+ 
+     function WU(UU, XU, zU, yU, QU, AU) {
+       return tU.some(((FU, oU) => {
+         var DU, EU, YU;
+         let [NU, IU, pU] = FU;
+         if (0 === (AU >> oU & 1)) return !1;
+         const aU = null !== (DU = null === (EU = cU.h[UU(XU + NU, zU + IU, yU + pU)]) || void 0 === EU ? void 0 : EU.name) && void 0 !== DU ? DU : "",
+           tU = RU(aU);
+         return tU ? tU.BI === QU && tU.full : (null !== (YU = function(UU) {
+           var XU;
+           return null !== (XU = PU.get(UU)) && void 0 !== XU ? XU : null
+         }(aU)) && void 0 !== YU ? YU : 0) > 0
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1005-L1059` → after: `L575-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L575-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L575-L577) · [Before (L1005-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L1005-L1059)

```diff
-     async function AM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         aM = arguments.length > 6 ? arguments[6] : void 0,
-         PM = arguments.length > 7 ? arguments[7] : void 0,
-         nM = arguments.length > 8 ? arguments[8] : void 0,
-         QM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         zM = arguments.length > 10 ? arguments[10] : void 0;
-       const LM = MM.engine,
-         mM = MM.textureManager,
-         {
-           height: HM,
-           width: JM,
-           finalWidth: dM,
-           finalHeight: lM
- ... (39 more removed lines; see GitHub link above)
+     class dU {
+       constructor() {
+         this.reshapeOffsets = tU
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1061-L1077` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L579-L580) · [Before (L1061-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L1061-L1077)

```diff
-       if (dM !== JM || lM !== HM) {
-         const rM = new tM("pass", MM);
-         rM.sourceTexture = gM, rM.targetTexture = MM.textureManager.createRenderTargetTexture("pass_output", {
-           size: {
-             width: dM,
-             height: lM
-           },
-           options: {
-             createMipMaps: !1,
-             types: [0],
-             formats: [5],
-             samples: 1,
-             labels: ["screenshot_final_texture"],
-             useSRGBBuffers: [!1]
-           },
-           sizeIsPercentage: !1
- ... (1 more removed lines; see GitHub link above)
+       handles(UU) {
+         return null !== BU(UU)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1079-L1108` → after: `L582-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L582-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L582-L613) · [Before (L1079-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L1079-L1108)

```diff
-       const uM = DM.FindMainObjectRenderer(MM);
-       let RM = null;
-       uM && (RM = uM.camera, uM.camera = rM), LM.getCaps().parallelShaderCompile = void 0, await MM.buildAsync();
-       const pM = zM ?? (mM.hasHistoryTextures ? 32 : 1);
-       for (let hM = 0; hM < pM; ++hM) MM.execute();
-       MM.pausedExecution = !0, LM.getCaps().parallelShaderCompile = wM;
-       for (let hM = CM; hM < GM.length; ++hM) MM.tasks[hM].dispose();
-       MM.tasks.length = CM, uM && RM && (uM.camera = RM);
-       const WM = MM.textureManager.getTextureFromHandle(gM);
-       return WM.incrementReferences(), mM.resetBackBufferTextures(), await MM.buildAsync(), MM.pausedExecution = eM, new Promise((MM => {
-         LM._readTexturePixels(WM, dM, lM, -1, 0, null, !0, !1, 0, 0).then((async rM => {
-           WM.dispose(), UM(dM, lM, rM, QM ? void 0 : rM => MM(rM), OM, aM, !0, void 0, PM), QM && MM(null)
-         }))
-       }))
-     }
- 
- ... (14 more removed lines; see GitHub link above)
+       affects(UU) {
+         var XU, zU;
+         return pU.has(null !== (XU = null === (zU = cU.h[UU]) || void 0 === zU ? void 0 : zU.meta.rootName) && void 0 !== XU ? XU : "")
+       }
+       placedBy(UU) {
+         var XU;
+         return (null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta.rootName) === QU.e ? QU.i : null
+       }
+       shape(UU, XU, zU, yU, FU, DU) {
+         var EU, YU, NU;
+         const IU = null !== (EU = null === (YU = cU.h[FU]) || void 0 === YU ? void 0 : YU.name) && void 0 !== EU ? EU : "",
+           pU = DU || IU !== QU.i ? null !== (NU = (0, AU.G)(IU)) && void 0 !== NU ? NU : "water" : function(UU, XU, zU, cU) {
+             return tU.some(((yU, QU) => {
+               let [FU, DU, EU] = yU;
+               const YU = kU(UU(XU + FU, zU + DU, cU + EU), "cryo");
+               return null !== YU && "port" !== YU.kind && (0, AU.J)(oU, YU, gU[QU])
+ ... (16 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1111-L1119` → after: `L616-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L616-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L616-L641) · [Before (L1111-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L1111-L1119)

```diff
-     const vM = {
-       CreateScreenshot: ZM,
-       CreateScreenshotAsync: oM,
-       CreateScreenshotWithResizeAsync: fM,
-       CreateScreenshotUsingRenderTarget: YM,
-       CreateScreenshotUsingRenderTargetAsync: NM,
-       CreateScreenshotForFrameGraphAsync: AM
-     };
-     let FM = !1;
+   },
+   38938: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => cU,
+       g: () => QU
+     });
+     const cU = ["Chest", "Loot Chest", "Moonstone Chest"],
+       yU = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+ ... (10 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1121-L1124` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/261.js#L643-L644) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/261.js#L1121-L1124)

```diff
-     function BM() {
-       if (FM) return;
-       FM = !0;
-       HM.e.CreateScreenshot = ZM, HM.e.CreateScreenshotAsync = oM, HM.e.CreateScreenshotUsingRenderTarget = YM, HM.e.CreateScreenshotUsingRenderTargetAsync = NM
+     function QU(UU) {
+       return yU.find((XU => XU.exactMatch ? UU === XU.name : UU.includes(XU.name)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L4-L7) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L4)

```diff
-   38740: (MM, rM, iM) => {
+   39926: (UU, XU, zU) => {
+     function cU(UU) {
+       return !(!UU.lobbyLeaderboardInfo && !UU.lobbyManage)
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6` → after: `L9-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L9-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L9-L30) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L6)

```diff
-       d: () => SM
+       c: () => cU
+     })
+   },
+   39900: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => QU,
+       h: () => AU
+     });
+     var cU = zU(31);
+     let yU = !1;
+ 
+     function QU() {
+       return yU
+     }
+ 
+     function AU(UU) {
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8` → after: `L32-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L32-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L32-L70) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L8)

```diff
-     var OM = iM(38744);
+     var cU = zU(31),
+       yU = zU(2032);
+ 
+     function QU(UU) {
+       let {
+         taskId: XU,
+         progress: zU
+       } = UU;
+       const cU = yU.d.get("_tasks");
+       null !== cU && void 0 !== cU && cU[XU] && yU.d.apply({
+         _tasks: {
+           ...cU,
+           [XU]: {
+             ...cU[XU],
+             progress: zU
+           }
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L10-L13` → after: `L72-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L72-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L72-L85) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L10-L13)

```diff
-       static GetPlanes(MM) {
-         const rM = [];
-         for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
-         return SM.GetPlanesToRef(MM, rM), rM
+       constructor(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
+           pEU: !0
+         };
+         this.callbacks = XU, this.options = zU, this.gcU = void 0, this.sessionId = void 0, this.tC = [], this.aEU = !1, this.kp = !1, this.tEU = void 0, this.pC = 0, this.aQU = 0, this.gEU = (UU, XU) => {
+           if (this.kp) return;
+           const zU = Number(UU);
+           this.aEU ? this.kEU(zU, XU) : this.tC.push({
+             id: zU,
+             payload: XU
+           })
+         }, this.dispose = () => {
+           this.kp || (this.kp = !0, NU.delete(this), this.tC.length = 0, this.tEU())
+         }, this.gcU = UU, this.sessionId = UU.sessionId, NU.set(this, []), this.tEU = this.GEU()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L15-L17` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L87-L88) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L15-L17)

```diff
-       static GetNearPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
+       BEU(UU) {
+         this.tEU(), this.gcU = UU, this.sessionId = UU.sessionId, this.pC = 0, this.aQU = 0, this.tEU = this.GEU()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L19-L21` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L90-L91) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L19-L21)

```diff
-       static GetFarPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
+       get zC() {
+         return this.aQU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L23-L25` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L93-L95) · [Before (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L23-L25)

```diff
-       static GetLeftPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
+       GEU() {
+         const UU = this.gcU.iG("*", this.gEU);
+         return this.options.pEU && this.gcU.vG(this.dispose), UU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L27-L29` → after: `L97-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L97-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L97-L110) · [Before (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L27-L29)

```diff
-       static GetRightPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
+       kEU(UU, XU) {
+         try {
+           (0, DU._b)(UU) && (XU = (0, DU.b)(UU, EU.XY.from(XU)));
+           const zU = NU.get(this)[UU];
+           if ("function" !== typeof zU) {
+             if (this.callbacks.ZEU) return void this.callbacks.ZEU(UU, XU);
+             throw new Error(`No onMessage handler registered for message id ${UU}`)
+           }
+           zU(XU)
+         } catch (zU) {
+           this.callbacks.REU(`Error in onMessage ${UU} with payload ${JSON.stringify(XU)}`, zU)
+         } finally {
+           this.pC++
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L31-L33` → after: `L112-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L112-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L112-L121) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L31-L33)

```diff
-       static GetTopPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
+       PEU() {
+         for (const {
+             id: UU,
+             payload: XU
+           }
+           of this.tC) {
+           if (this.kp) break;
+           this.kEU(UU, XU)
+         }
+         this.tC.length = 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L35-L37` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L123-L124) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L35-L37)

```diff
-       static GetBottomPlaneToRef(MM, rM) {
-         const iM = MM.m;
-         rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
+       oR() {
+         return this.kp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L39-L40` → after: `L126-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L126-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L126-L151) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L39-L40)

```diff
-       static GetPlanesToRef(MM, rM) {
-         SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
+       WEU() {
+         if (this.aEU || this.kp) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
+         return {
+           iG: (UU, XU) => {
+             if (this.aEU || this.kp) throw new Error("Trying to call onMessage after registration finished");
+             this.iG(UU, XU)
+           },
+           finishRegistration: () => {
+             if (this.kp) throw new Error("Cannot finish message registration after disposal");
+             this.aEU = !0, this.PEU()
+           }
+         }
+       }
+       iG(UU, XU) {
+         var zU, cU;
+         null === (zU = (cU = this.callbacks).dEU) || void 0 === zU || zU.call(cU);
+ ... (10 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L42-L45` → after: `L153-L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L153-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L153-L1562) · [Before (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L42-L45)

```diff
-       static IsPointInFrustum(MM, rM) {
-         for (let iM = 0; iM < 6; iM++)
-           if (rM[iM].dotCoordinate(MM) < 0) return !1;
-         return !0
+       Wk() {
+         this.dispose(), this.gcU.Wk()
+       }
+       leave() {
+         this.dispose(), this.gcU.leave()
+       }
+     }
+     let pU = 0;
+     var aU = zU(4084);
+     class tU extends IU {
+       constructor(UU) {
+         super(UU, {
+           dEU: () => {
+             (0, FU.o)(!0) && (0, cU.lL)()
+           },
+           REU: (UU, XU) => {
+ ... (1394 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L49` → after: `L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L1566) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L49)

```diff
-   38744: (MM, rM, iM) => {
+   39803: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L51` → after: `L1568-L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1568-L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L1568-L1876) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L51)

```diff
-       d: () => SM
+       c: () => xz,
+       e: () => hz
+     });
+     var cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU, xU, JU, jU, KU, bU, TU, hU, UX, XX, zX, cX, yX, QX, AX, FX, oX, DX, EX, YX, NX, IX, pX, aX, tX, gX, kX,  … [truncated]
+       hX = zU(37874),
+       Uz = zU(39812),
+       Xz = zU(39819),
+       zz = zU(9694),
+       cz = zU(638),
+       yz = zU(633),
+       Qz = zU(37523);
+     let Az = (cU = (0, zz.type)("number"), yU = (0, zz.type)("number"), QU = (0, zz.type)("number"), AU = (0, zz.type)("number"), FU = (0, zz.type)("number"), oU = (0, zz.type)("number"), DU = (0, zz.type)("string"), EU = class extends zz.Schema {
+         constructor() {
+           super(...arguments), (0, Uz.c)(this, "id", YU, this), (0, Uz.c)(this, "amount", NU, this), (0, Uz.c)(this, "x", IU, this), (0, Uz.c)(this, "y", pU, this), (0, Uz.c)(this, "z", aU, this), (0, Uz.c)(this, "size", tU, this), (0, Uz.c)(this, "attributes", gU, this)
+         }
+       }, YU = (0, Xz.d)(EU.prototype, "id", [cU], {
+ ... (293 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L53` → after: `L1878-L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1878-L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L1878-L1944) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L53)

```diff
-     var OM = iM(38040);
+ 
+     function Yz(UU) {
+       return Object.keys(zz.Metadata.getFields(UU))
+     }
+     const Nz = Yz(Ez);
+     for (const Uc of cz.s)
+       if (!Nz.includes(Uc)) throw new Error(`Mob Schema is missing a networked property: "${Uc}"`);
+     const Iz = Yz((vX = (0, zz.type)("string"), VX = (0, zz.type)("float32"), sX = (0, zz.type)("float32"), nX = (0, zz.type)("float32"), mX = (0, zz.type)("float32"), lX = class extends oz {
+       constructor() {
+         super(...arguments), (0, Uz.c)(this, "soundName", xX, this), (0, Uz.c)(this, "volume", JX, this), (0, Uz.c)(this, "refDistance", jX, this), (0, Uz.c)(this, "maxHearDist", KX, this), (0, Uz.c)(this, "rate", bX, this)
+       }
+     }, xX = (0, Xz.d)(lX.prototype, "soundName", [vX], {
+       configurable: !0,
+       enumerable: !0,
+       writable: !0,
+       initializer: function() {
+ ... (51 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L55-L56` → after: `L1946-L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1946-L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L1946-L2484) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L55-L56)

```diff
-       constructor(MM, rM, iM, SM) {
-         this.normal = new OM.q(MM, rM, iM), this.d = SM
+       constructor(UU, XU) {
+         this.bloxd = UU, this.eId = XU, this.WN = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
+       }
+       initClient(UU) {
+         var XU, zU, cU;
+         this.colyseusEntity = UU, this.meshKind = UU.meshKind, this.meshOpts = UU.meshOpts, this.leaderboardTop = UU.leaderboardTop, this.WN.xG.add([UU.x, UU.y, UU.z], 1, 1, null, null, !1, !1, this.eId), this.WN.xG.sH(this.eId, "smoothToServerPos");
+         const yU = "Person" === this.meshKind;
+         this.WN.xG.sH(this.eId, "meshRotation", {
+           isServerControlled: !0,
+           ...yU ? {
+             defaultRotationsPerSecond: .5
+           } : {},
+           childrenNodeParams: yU ? [{
+             nodeName: "HeadMesh",
+             softTolerance: Wz.j,
+             hardTolerance: null
+ ... (523 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L58-L59` → after: `L2486-L2501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2486-L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2486-L2501) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L58-L59)

```diff
-       HOM() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       setupItemHandlers() {
+         this.roomStateCallbacks.items.lG(((UU, XU) => {
+           this.allItems[XU] = UU, (0, Mz.h)(this.WN, XU, [UU.x, UU.y, UU.z], UU.id, {
+             amount: UU.amount,
+             attributes: JSON.parse(UU.attributes),
+             uX: (0, hX.b)(this.WN).cantPickUpItem(XU),
+             size: UU.size,
+             predictedAt: (0, vz.b)().client.itemDropPrediction.onServerItemAdded(XU)
+           });
+           const zU = this.createStateCallbacks(UU);
+           for (const cU of Yz(Az)) this.onItemFieldChange(XU, cU, UU[cU]), this.addDetacher(XU, this.listenForFutureChanges(zU, cU, (UU => {
+             this.onItemFieldChange(XU, cU, UU)
+           })))
+         })), this.roomStateCallbacks.items.Cw(((UU, XU) => {
+           delete this.allItems[XU], this.detach(XU), (0, vz.b)().client.itemDropPrediction.onServerItemRemoved(XU), this.WN.xG.qXU(XU, this.WN.xG.names.itemState) && this.WN.xG.deleteEntity(XU), (0, hX.b)(this.WN).disposeEntity(XU)
+         }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L61-L62` → after: `L2503-L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2503-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2503-L2732) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L61-L62)

```diff
-       clone() {
-         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
+       onItemFieldChange(UU, XU, zU) {
+         if (XU in bz) {
+           if (this.WN.xG.qXU(UU, "itemState")) {
+             const cU = this.WN.xG.getState(UU, "smoothToServerPos");
+             (0, mz.setServerPositionAxis)(cU, bz[XU], zU), (0, vz.b)().client.itemDropPrediction.onServerItemMoved(UU)
+           }
+           return
+         }
+         if (!this.WN.xG.qXU(UU, "itemState")) return;
+         const cU = this.WN.xG.getState(UU, "itemState");
+         "amount" === XU && zU !== cU.amount && (cU.creationTime = Date.now()), cU[XU] = "attributes" === XU ? JSON.parse(zU) : zU
+       }
+       dispose() {
+         if (!this.kp) {
+           this.kp = !0, this.WN.off("beforeInputs", this.onFrame), this.WN.off("LY", this.aG), this.queuedSetups.clear(), this.promotedSetups.clear();
+           for (const UU of this.deferredSetups.values()) TX.k.unsubscribe(UU);
+ ... (214 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L64-L65` → after: `L2734-L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2734-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2734-L2745) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L64-L65)

```diff
-       getClassName() {
-         return "Plane"
+       noteEdit(UU, XU, zU) {
+         const QU = (0, cU.W)(UU),
+           AU = (0, cU.W)(XU),
+           FU = (0, cU.W)(zU),
+           oU = this.now();
+         if (QU !== this.lastChunkX || AU !== this.lastChunkY || FU !== this.lastChunkZ) {
+           this.lastChunkX = QU, this.lastChunkY = AU, this.lastChunkZ = FU, this.lastChunkId = (0, yU.b)(QU, AU, FU), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, oU);
+           for (const [UU, XU] of this.editedAt) {
+             if (XU >= oU - 3e5) break;
+             this.editedAt.delete(UU)
+           }
+         } else this.editedAt.set(this.lastChunkId, oU)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L67-L69` → after: `L2747-L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2747-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2747-L2750) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L67-L69)

```diff
-       getHashCode() {
-         let MM = this.normal.getHashCode();
-         return MM = 397 * MM ^ this.d, MM
+       chunksEditedSince(UU) {
+         const XU = [];
+         for (const [zU, cU] of this.editedAt) cU >= UU && XU.push(zU);
+         return XU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L71-L72` → after: `L2752-L2789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2752-L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2752-L2789) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L71-L72)

```diff
-       normalize() {
-         const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+     }
+   },
+   39888: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => IX,
+       g: () => VX,
+       h: () => OX,
+       i: () => sX
+     });
+     var cU = zU(4063),
+       yU = zU(9339),
+       QU = zU(37405),
+       AU = zU(1482),
+       FU = zU(37478),
+       oU = zU(39807),
+       DU = zU(39799),
+ ... (22 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L74-L105` → after: `L2791-L2793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2791-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2791-L2793) · [Before (L74-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L74-L105)

```diff
-         return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
-       }
-       transform(MM) {
-         const rM = SM._TmpMatrix;
-         MM.invertToRef(rM);
-         const iM = rM.m,
-           OM = this.normal.x,
-           jM = this.normal.y,
-           aM = this.normal.z,
-           PM = this.d,
-           nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
-           QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
-           zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
-           LM = OM * iM[12] + jM * iM[13] + aM * iM[14] + PM * iM[15];
-         return new SM(nM, QM, zM, LM)
-       }
- ... (16 more removed lines; see GitHub link above)
+         return this.clicks.forEach((zU => {
+           zU > Date.now() - UU && XU++
+         })), XU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L107-L108` → after: `L2795-L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2795-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2795-L2803) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L107-L108)

```diff
-       isFrontFacingTo(MM, rM) {
-         return OM.q.Dot(this.normal, MM) <= rM
+       getMaxClickSeparationInMs(UU) {
+         if (0 === this.clicks.size) return this.storeForMs;
+         let XU = 0,
+           zU = Date.now() - UU;
+         this.clicks.forEach((cU => {
+           cU < Date.now() - UU || (XU = Math.max(XU, Math.abs(cU - zU)), zU = cU)
+         }));
+         const cU = Math.abs(Date.now() - zU);
+         return Math.max(XU, cU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L110-L111` → after: `L2805-L2808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2805-L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2805-L2808) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L110-L111)

```diff
-       signedDistanceTo(MM) {
-         return OM.q.Dot(MM, this.normal) + this.d
+     }
+     class PU {
+       constructor(UU) {
+         this.storeForMs = UU, this.clickDownDurations = new ZU.b
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L113-L114` → after: `L2810-L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2810-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2810-L2816) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L113-L114)

```diff
-       static FromArray(MM) {
-         return new SM(MM[0], MM[1], MM[2], MM[3])
+       registerClickDownDuration(UU) {
+         this.clickDownDurations.enqueue({
+           dur: UU,
+           atTime: Date.now()
+         });
+         const XU = Date.now() - this.storeForMs;
+         for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < XU;) this.clickDownDurations.dequeue()
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L116-L118` → after: `L2818-L2824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2818-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2818-L2824) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L116-L118)

```diff
-       static FromPoints(MM, rM, iM) {
-         const OM = new SM(0, 0, 0, 0);
-         return OM.copyFromPoints(MM, rM, iM), OM
+       clickDownDurationsCheck(UU) {
+         if (UU > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
+         let XU = 0,
+           zU = 0;
+         return this.clickDownDurations.forEach((cU => {
+           cU.atTime > Date.now() - UU && (XU++, zU = Math.max(zU, cU.dur))
+         })), `${XU}:${zU}`
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L120-L122` → after: `L2826-L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2826-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/262.js#L2826-L2879) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/262.js#L120-L122)

```diff
-       static FromPositionAndNormal(MM, rM) {
-         const iM = new SM(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(MM, rM, iM)
+     }
+     var WU = zU(37211),
+       dU = zU(39900),
+       LU = zU(27),
+       eU = zU(3043),
+       CU = zU(1360),
+       wU = zU(2601),
+       qU = zU(4871),
+       OU = zU(142),
+       SU = zU(38914),
+       rU = zU(39158),
+       uU = zU(646),
+       fU = zU(37203),
+       iU = zU(13),
+       HU = zU(9782),
+       MU = zU(1236),
+ ... (38 more added lines; see GitHub link above)
```
