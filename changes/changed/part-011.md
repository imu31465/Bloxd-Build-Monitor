# Changed — Bundle Modifications Report (Part 011 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `11 / 56` (**292** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/244.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/244.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38)

#### 5. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L67-L69` → after: `L220-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L220-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L220-L226) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L67-L69)

```diff
-       getHashCode() {
-         let GG = this.normal.getHashCode();
-         return GG = 397 * GG ^ this.d, GG
+       return null
+     }, nM.get.hwb = function(MM) {
+       if (!MM) return null;
+       var rM = MM.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
+       if (rM) {
+         var iM = parseFloat(rM[4]);
+         return [(parseFloat(rM[1]) % 360 + 360) % 360, QM(parseFloat(rM[2]), 0, 100), QM(parseFloat(rM[3]), 0, 100), QM(isNaN(iM) ? 1 : iM, 0, 1)]
```

#### 6. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L71-L74` → after: `L228-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L228-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L228-L286) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L71-L74)

```diff
-       normalize() {
-         const GG = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
-         let bG = 0;
-         return 0 !== GG && (bG = 1 / GG), this.normal.x *= bG, this.normal.y *= bG, this.normal.z *= bG, this.d *= bG, this
+       return null
+     }, nM.to.hex = function() {
+       var MM = SM(arguments);
+       return "#" + zM(MM[0]) + zM(MM[1]) + zM(MM[2]) + (MM[3] < 1 ? zM(Math.round(255 * MM[3])) : "")
+     }, nM.to.rgb = function() {
+       var MM = SM(arguments);
+       return MM.length < 4 || 1 === MM[3] ? "rgb(" + Math.round(MM[0]) + ", " + Math.round(MM[1]) + ", " + Math.round(MM[2]) + ")" : "rgba(" + Math.round(MM[0]) + ", " + Math.round(MM[1]) + ", " + Math.round(MM[2]) + ", " + MM[3] + ")"
+     }, nM.to.rgb.percent = function() {
+       var MM = SM(arguments),
+         rM = Math.round(MM[0] / 255 * 100),
+         iM = Math.round(MM[1] / 255 * 100),
+         OM = Math.round(MM[2] / 255 * 100);
+       return MM.length < 4 || 1 === MM[3] ? "rgb(" + rM + "%, " + iM + "%, " + OM + "%)" : "rgba(" + rM + "%, " + iM + "%, " + OM + "%, " + MM[3] + ")"
+     }, nM.to.hsl = function() {
+       var MM = SM(arguments);
+       return MM.length < 4 || 1 === MM[3] ? "hsl(" + MM[0] + ", " + MM[1] + "%, " + MM[2] + "%)" : "hsla(" + MM[0] + ", " + MM[1] + "%, " + MM[2] + "%, " + MM[3] + ")"
+ ... (43 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L76-L88` → after: `L288-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L288-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L288-L458) · [Before (L76-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L76-L88)

```diff
-       transform(GG) {
-         const bG = SG._TmpMatrix;
-         GG.invertToRef(bG);
-         const ZG = bG.m,
-           wG = this.normal.x,
-           LG = this.normal.y,
-           yG = this.normal.z,
-           kG = this.d,
-           UG = wG * ZG[0] + LG * ZG[1] + yG * ZG[2] + kG * ZG[3],
-           YG = wG * ZG[4] + LG * ZG[5] + yG * ZG[6] + kG * ZG[7],
-           VG = wG * ZG[8] + LG * ZG[9] + yG * ZG[10] + kG * ZG[11],
-           pG = wG * ZG[12] + LG * ZG[13] + yG * ZG[14] + kG * ZG[15];
-         return new SG(UG, YG, VG, pG)
+       if (PM[this.model])
+         for (QM = SM[this.model].channels, iM = 0; iM < QM; iM++) {
+           const MM = PM[this.model][iM];
+           MM && (this.color[iM] = MM(this.color[iM]))
+         }
+       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
+     }
+     nM.prototype = {
+       toString() {
+         return this.string()
+       },
+       toJSON() {
+         return this[this.model]()
+       },
+       string(MM) {
+         let rM = this.model in OM.to ? this : this.rgb();
+ ... (155 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L90-L91` → after: `L460-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L460-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L460-L474) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L90-L91)

```diff
-       dotCoordinate(GG) {
-         return this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z + this.d
+     };
+     for (const HM of Object.keys(SM)) {
+       if (jM.includes(HM)) continue;
+       const {
+         channels: MM
+       } = SM[HM];
+       nM.prototype[HM] = function() {
+         if (this.model === HM) return new nM(this);
+         for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+         return rM.length > 0 ? new nM(rM, HM) : new nM([...(OM = SM[this.model][HM].raw(this.color), Array.isArray(OM) ? OM : [OM]), this.valpha], HM);
+         var OM
+       }, nM[HM] = function() {
+         for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
+         let SM = iM[0];
+         return "number" === typeof SM && (SM = mM(iM, MM)), new nM(SM, HM)
```

#### 9. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L93-L105` → after: `L476-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L476-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L476-L482) · [Before (L93-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L93-L105)

```diff
-       copyFromPoints(GG, bG, ZG) {
-         const wG = bG.x - GG.x,
-           SG = bG.y - GG.y,
-           LG = bG.z - GG.z,
-           yG = ZG.x - GG.x,
-           kG = ZG.y - GG.y,
-           UG = ZG.z - GG.z,
-           YG = SG * UG - LG * kG,
-           VG = LG * yG - wG * UG,
-           pG = wG * kG - SG * yG,
-           fG = Math.sqrt(YG * YG + VG * VG + pG * pG);
-         let QG;
-         return QG = 0 !== fG ? 1 / fG : 0, this.normal.x = YG * QG, this.normal.y = VG * QG, this.normal.z = pG * QG, this.d = -(this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z), this
+     }
+ 
+     function QM(MM) {
+       return function(rM) {
+         return function(MM, rM) {
+           return Number(MM.toFixed(rM))
+         }(rM, MM)
```

#### 10. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L107-L108` → after: `L484-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L484-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L484-L498) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L107-L108)

```diff
-       isFrontFacingTo(GG, bG) {
-         return wG.p.Dot(this.normal, GG) <= bG
+     }
+ 
+     function zM(MM, rM, iM) {
+       MM = Array.isArray(MM) ? MM : [MM];
+       for (const OM of MM)(PM[OM] || (PM[OM] = []))[rM] = iM;
+       return MM = MM[0],
+         function(OM) {
+           let SM;
+           return void 0 !== OM ? (iM && (OM = iM(OM)), SM = this[MM](), SM.color[rM] = OM, SM) : (SM = this[MM]().color[rM], iM && (SM = iM(SM)), SM)
+         }
+     }
+ 
+     function LM(MM) {
+       return function(rM) {
+         return Math.max(0, Math.min(MM, rM))
```

#### 11. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L110-L111` → after: `L500-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L500-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L500-L571) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L110-L111)

```diff
-       signedDistanceTo(GG) {
-         return wG.p.Dot(GG, this.normal) + this.d
+     }
+ 
+     function mM(MM, rM) {
+       for (let iM = 0; iM < rM; iM++) "number" !== typeof MM[iM] && (MM[iM] = 0);
+       return MM
+     }
+     MM.exports = nM
+   },
+   37597: (MM, rM, iM) => {
+     const OM = iM(37604),
+       SM = {};
+     for (const aM of Object.keys(OM)) SM[OM[aM]] = aM;
+     const jM = {
+       rgb: {
+         channels: 3,
+         labels: "rgb"
+ ... (56 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L113-L114` → after: `L573-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L573-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L573-L631) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L113-L114)

```diff
-       static FromArray(GG) {
-         return new SG(GG[0], GG[1], GG[2], GG[3])
+     };
+     MM.exports = jM;
+     for (const aM of Object.keys(jM)) {
+       if (!("channels" in jM[aM])) throw new Error("missing channels property: " + aM);
+       if (!("labels" in jM[aM])) throw new Error("missing channel labels property: " + aM);
+       if (jM[aM].labels.length !== jM[aM].channels) throw new Error("channel and label counts mismatch: " + aM);
+       const {
+         channels: MM,
+         labels: rM
+       } = jM[aM];
+       delete jM[aM].channels, delete jM[aM].labels, Object.defineProperty(jM[aM], "channels", {
+         value: MM
+       }), Object.defineProperty(jM[aM], "labels", {
+         value: rM
+       })
+     }
+ ... (43 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L116-L118` → after: `L633-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L633-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L633-L690) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L116-L118)

```diff
-       static FromPoints(GG, bG, ZG) {
-         const wG = new SG(0, 0, 0, 0);
-         return wG.copyFromPoints(GG, bG, ZG), wG
+       var aM, PM;
+       return iM
+     }, jM.keyword.rgb = function(MM) {
+       return OM[MM]
+     }, jM.rgb.xyz = function(MM) {
+       let rM = MM[0] / 255,
+         iM = MM[1] / 255,
+         OM = MM[2] / 255;
+       rM = rM > .04045 ? ((rM + .055) / 1.055) ** 2.4 : rM / 12.92, iM = iM > .04045 ? ((iM + .055) / 1.055) ** 2.4 : iM / 12.92, OM = OM > .04045 ? ((OM + .055) / 1.055) ** 2.4 : OM / 12.92;
+       return [100 * (.4124 * rM + .3576 * iM + .1805 * OM), 100 * (.2126 * rM + .7152 * iM + .0722 * OM), 100 * (.0193 * rM + .1192 * iM + .9505 * OM)]
+     }, jM.rgb.lab = function(MM) {
+       const rM = jM.rgb.xyz(MM);
+       let iM = rM[0],
+         OM = rM[1],
+         SM = rM[2];
+       iM /= 95.047, OM /= 100, SM /= 108.883, iM = iM > .008856 ? iM ** (1 / 3) : 7.787 * iM + 16 / 116, OM = OM > .008856 ? OM ** (1 / 3) : 7.787 * OM + 16 / 116, SM = SM > .008856 ? SM ** (1 / 3) : 7.787 * SM + 16 / 116;
+ ... (42 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L120-L122` → after: `L692-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L692-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L692-L732) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L120-L122)

```diff
-       static FromPositionAndNormal(GG, bG) {
-         const ZG = new SG(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(GG, bG, ZG)
+     }, jM.hsv.hsl = function(MM) {
+       const rM = MM[0],
+         iM = MM[1] / 100,
+         OM = MM[2] / 100,
+         SM = Math.max(OM, .01);
+       let jM, aM;
+       aM = (2 - iM) * OM;
+       const PM = (2 - iM) * SM;
+       return jM = iM * SM, jM /= PM <= 1 ? PM : 2 - PM, jM = jM || 0, aM /= 2, [rM, 100 * jM, 100 * aM]
+     }, jM.hwb.rgb = function(MM) {
+       const rM = MM[0] / 360;
+       let iM = MM[1] / 100,
+         OM = MM[2] / 100;
+       const SM = iM + OM;
+       let jM;
+       SM > 1 && (iM /= SM, OM /= SM);
+ ... (25 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L124-L125` → after: `L734-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L734-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L734-L795) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L124-L125)

```diff
-       static FromPositionAndNormalToRef(GG, bG, ZG) {
-         return ZG.normal.oW(bG), ZG.normal.normalize(), ZG.d = -GG.dot(ZG.normal), ZG
+       return [255 * QM, 255 * zM, 255 * LM]
+     }, jM.cmyk.rgb = function(MM) {
+       const rM = MM[0] / 100,
+         iM = MM[1] / 100,
+         OM = MM[2] / 100,
+         SM = MM[3] / 100;
+       return [255 * (1 - Math.min(1, rM * (1 - SM) + SM)), 255 * (1 - Math.min(1, iM * (1 - SM) + SM)), 255 * (1 - Math.min(1, OM * (1 - SM) + SM))]
+     }, jM.xyz.rgb = function(MM) {
+       const rM = MM[0] / 100,
+         iM = MM[1] / 100,
+         OM = MM[2] / 100;
+       let SM, jM, aM;
+       return SM = 3.2406 * rM + -1.5372 * iM + -.4986 * OM, jM = -.9689 * rM + 1.8758 * iM + .0415 * OM, aM = .0557 * rM + -.204 * iM + 1.057 * OM, SM = SM > .0031308 ? 1.055 * SM ** (1 / 2.4) - .055 : 12.92 * SM, jM = jM > .0031308 ? 1.055 * jM ** (1 / 2.4) - .055 : 12.92 * jM,  … [truncated]
+     }, jM.xyz.lab = function(MM) {
+       let rM = MM[0],
+         iM = MM[1],
+ ... (46 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L127-L129` → after: `L797-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L797-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L797-L858) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L127-L129)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(GG, bG, ZG) {
-         const SG = -(bG.x * GG.x + bG.y * GG.y + bG.z * GG.z);
-         return wG.p.Dot(ZG, bG) + SG
+       let rM;
+       MM -= 16;
+       return [Math.floor(MM / 36) / 5 * 255, Math.floor((rM = MM % 36) / 6) / 5 * 255, rM % 6 / 5 * 255]
+     }, jM.rgb.hex = function(MM) {
+       const rM = (((255 & Math.round(MM[0])) << 16) + ((255 & Math.round(MM[1])) << 8) + (255 & Math.round(MM[2]))).toString(16).toUpperCase();
+       return "000000".substring(rM.length) + rM
+     }, jM.hex.rgb = function(MM) {
+       const rM = MM.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
+       if (!rM) return [0, 0, 0];
+       let iM = rM[0];
+       3 === rM[0].length && (iM = iM.split("").map((MM => MM + MM)).join(""));
+       const OM = parseInt(iM, 16);
+       return [OM >> 16 & 255, OM >> 8 & 255, 255 & OM]
+     }, jM.rgb.hcg = function(MM) {
+       const rM = MM[0] / 255,
+         iM = MM[1] / 255,
+ ... (46 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L134-L150` → after: `L903-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L903-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L903-L949) · [Before (L134-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L134-L150)

```diff
-   39086: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => LG
-     });
-     var wG = ZG(39093);
-     const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
-       ...GG
-     } : null : GG.clone(bG) : null;
-     class LG {
-       static DeepCopy(GG, bG, ZG, LG) {
-         let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kG = function(GG) {
-           const bG = [];
-           do {
-             const ZG = Object.getOwnPropertyNames(GG);
-             for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
- ... (1 more removed lines; see GitHub link above)
+   37592: (MM, rM, iM) => {
+     const OM = iM(37597),
+       SM = iM(37612),
+       jM = {};
+     Object.keys(OM).forEach((MM => {
+       jM[MM] = {}, Object.defineProperty(jM[MM], "channels", {
+         value: OM[MM].channels
+       }), Object.defineProperty(jM[MM], "labels", {
+         value: OM[MM].labels
+       });
+       const rM = SM(MM);
+       Object.keys(rM).forEach((iM => {
+         const OM = rM[iM];
+         jM[MM][iM] = function(MM) {
+           const rM = function() {
+             for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
+ ... (31 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L152-L156` → after: `L951-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L951-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L951-L956) · [Before (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L152-L156)

```diff
-         }(GG);
-         for (const YG of kG) {
-           if ("_" === YG[0] && (!LG || -1 === LG.indexOf(YG))) continue;
-           if (YG.endsWith("Observable")) continue;
-           if (ZG && -1 !== ZG.indexOf(YG)) continue;
+         }(),
+         iM = [MM];
+       for (rM[MM].distance = 0; iM.length;) {
+         const MM = iM.pop(),
+           SM = Object.keys(OM[MM]);
+         for (let OM = SM.length, jM = 0; jM < OM; jM++) {
```

#### 19. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L158-L172` → after: `L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L958) · [Before (L158-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L158-L172)

```diff
-             VG = typeof kG;
-           if ("function" !== VG) try {
-             if ("object" === VG)
-               if (kG instanceof Uint8Array) bG[YG] = Uint8Array.from(kG);
-               else if (kG instanceof Array) {
-               if (bG[YG] = [], kG.length > 0)
-                 if ("object" == typeof kG[0])
-                   for (let GG = 0; GG < kG.length; GG++) {
-                     const ZG = SG(kG[GG], bG, yG); - 1 === bG[YG].indexOf(ZG) && bG[YG].push(ZG)
-                   } else bG[YG] = kG.slice(0)
-             } else bG[YG] = SG(kG, bG, yG);
-             else bG[YG] = kG
-           } catch (UG) {
-             wG.c.Warn(UG.message)
-           }
+             aM = rM[OM]; - 1 === aM.distance && (aM.distance = rM[MM].distance + 1, aM.parent = MM, iM.unshift(OM))
```

#### 20. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L177-L182` → after: `L988-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L988-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L988-L1137) · [Before (L177-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L177-L182)

```diff
-   38311: (GG, bG, ZG) => {
-     function wG() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
-         const bG = 16 * Math.random() | 0;
-         return ("x" === GG ? bG : 3 & bG | 8).toString(16)
-       }))
+   37604: MM => {
+     MM.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (134 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L188-L242` → after: `L1140-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1140-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L1140-L1153) · [Before (L188-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L188-L242)

```diff
-   39093: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => wG
-     });
-     class wG {
-       static _CheckLimit(GG, bG) {
-         let ZG = wG._LogLimitOutputs[GG];
-         return ZG ? ZG.current++ : (ZG = {
-           limit: bG,
-           current: 1
-         }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
-       }
-       static _GenerateLimitMessage(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const ZG = wG._LogLimitOutputs[GG];
-         if (!ZG || !wG.MessageLimitReached) return;
- ... (39 more removed lines; see GitHub link above)
+   37577: (MM, rM, iM) => {
+     var OM = iM(37585),
+       SM = Array.prototype.concat,
+       jM = Array.prototype.slice,
+       aM = MM.exports = function(MM) {
+         for (var rM = [], iM = 0, aM = MM.length; iM < aM; iM++) {
+           var PM = MM[iM];
+           OM(PM) ? rM = SM.call(rM, jM.call(PM)) : rM.push(PM)
+         }
+         return rM
+       };
+     aM.wrap = function(MM) {
+       return function() {
+         return MM(aM(arguments))
```

#### 22. `bundles/bloxd.io/chunks/js/244.js` (Changed code · before: `L245-L257` → after: `L1156-L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38R1156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-02bf192068fe234baf876d223e1789e8c3290928bf26b4be8dd454910399ea38) · [After (L1156-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/244.js#L1156-L1160) · [Before (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/244.js#L245-L257)

```diff
-     wG.NoneLogLevel = 0, wG.MessageLogLevel = 1, wG.WarningLogLevel = 2, wG.ErrorLogLevel = 4, wG.AllLogLevel = 7, wG.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wG._LogCache = "", wG._LogLimitOutputs = {}, wG._Levels =  … [truncated]
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
-     }], wG.errorsCount = 0, wG.Log = wG._LogEnabled.bind(wG, wG.MessageLogLevel), wG.Warn = wG._LogEnabled.bind(wG, wG.WarningLogLevel), wG.Error = wG._LogEnabled.bind(wG, wG.ErrorLogLevel)
+   },
+   37585: MM => {
+     MM.exports = function(MM) {
+       return !(!MM || "string" === typeof MM) && (MM instanceof Array || Array.isArray(MM) || MM.length >= 0 && (MM.splice instanceof Function || Object.getOwnPropertyDescriptor(MM, MM.length - 1) && "String" !== MM.constructor.name))
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/245.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/245.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc)

#### 1. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L2)

```diff
- export const ids = [244, 245];
+ export const ids = [245];
```

#### 2. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L4-L16` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L4) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L4-L16)

```diff
-   61809: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       RegisterShaderMaterial: () => wG.e,
-       ShaderMaterial: () => wG.o,
-       ShaderMaterialCreateFromSnippetAsync: () => wG.h,
-       ShaderMaterialParse: () => wG.n,
-       ShaderMaterialParseFromFileAsync: () => wG.k,
-       ShaderMaterialParseFromSnippetAsync: () => wG.l
-     });
-     var wG = ZG(40851);
-     (0, wG.e)()
-   },
-   38167: (GG, bG, ZG) => {
+   37705: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L18` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L6-L14) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L18)

```diff
-       d: () => SG
+       b: () => Pr,
+       f: () => lr,
+       g: () => mr,
+       j: () => Qr,
+       m: () => Hr,
+       p: () => Lr,
+       q: () => Er,
+       r: () => zr,
+       v: () => Jr
```

#### 4. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L20-L58` → after: `L16-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L16-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L16-L148) · [Before (L20-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L20-L58)

```diff
-     var wG = ZG(38175);
-     class SG {
-       static GetPlanes(GG) {
-         const bG = [];
-         for (let ZG = 0; ZG < 6; ZG++) bG.push(new wG.b(0, 0, 0, 0));
-         return SG.GetPlanesToRef(GG, bG), bG
-       }
-       static GetNearPlaneToRef(GG, bG) {
-         const ZG = GG.m;
-         bG.normal.x = ZG[3] + ZG[2], bG.normal.y = ZG[7] + ZG[6], bG.normal.z = ZG[11] + ZG[10], bG.d = ZG[15] + ZG[14], bG.normalize()
-       }
-       static GetFarPlaneToRef(GG, bG) {
-         const ZG = GG.m;
-         bG.normal.x = ZG[3] - ZG[2], bG.normal.y = ZG[7] - ZG[6], bG.normal.z = ZG[11] - ZG[10], bG.d = ZG[15] - ZG[14], bG.normalize()
-       }
-       static GetLeftPlaneToRef(GG, bG) {
- ... (23 more removed lines; see GitHub link above)
+     const OM = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       SM = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       jM = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       aM = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       PM = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       nM = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       QM = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       zM = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       LM = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       mM = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       HM = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       hM = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       JM = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       dM = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       yM = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       lM = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (117 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L60-L142` → after: `L150-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L150-L152) · [Before (L60-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L60-L142)

```diff
-   },
-   38175: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => SG
-     });
-     var wG = ZG(37439);
-     class SG {
-       constructor(GG, bG, ZG, SG) {
-         this.normal = new wG.p(GG, bG, ZG), this.d = SG
-       }
-       mwG() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new SG(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
- ... (67 more removed lines; see GitHub link above)
+ 
+     function Qr(MM) {
+       return nr(MM).group
```

#### 6. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L144-L186` → after: `L154-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L154-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L154-L156) · [Before (L144-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L144-L186)

```diff
-     SG._TmpMatrix = wG.e.Identity()
-   },
-   39086: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => LG
-     });
-     var wG = ZG(39093);
-     const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
-       ...GG
-     } : null : GG.clone(bG) : null;
-     class LG {
-       static DeepCopy(GG, bG, ZG, LG) {
-         let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kG = function(GG) {
-           const bG = [];
-           do {
- ... (27 more removed lines; see GitHub link above)
+ 
+     function zr(MM) {
+       return nr(MM).file
```

#### 7. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L188-L194` → after: `L158-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L158-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L158-L195) · [Before (L188-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L188-L194)

```diff
-   },
-   38311: (GG, bG, ZG) => {
-     function wG() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
-         const bG = 16 * Math.random() | 0;
-         return ("x" === GG ? bG : 3 & bG | 8).toString(16)
-       }))
+ 
+     function Lr(MM) {
+       return ar.has(MM)
+     }
+ 
+     function mr(MM, rM) {
+       return Hr(MM).includes(rM)
+     }
+ 
+     function Hr(MM) {
+       if (!(MM in jr)) throw new Error(`Invalid sound group ${MM}`);
+       return Object.keys(jr[MM].sounds)
+     }
+     const hr = new Map;
+ 
+     function Jr(MM) {
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L200` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L198) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L200)

```diff
-   39093: (GG, bG, ZG) => {
+   37713: (MM, rM, iM) => {
```

#### 9. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L202` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L200-L201) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L202)

```diff
-       c: () => wG
+       e: () => OM,
+       i: () => jM
```

#### 10. `bundles/bloxd.io/chunks/js/245.js` (Changed code · before: `L204-L255` → after: `L203-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31ccR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-bac7addcefb3cac5a95ae1d99a3172b3d417fd4242b888e2bf46cc9188ea31cc) · [After (L203-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/245.js#L203-L216) · [Before (L204-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/245.js#L204-L255)

```diff
-     class wG {
-       static _CheckLimit(GG, bG) {
-         let ZG = wG._LogLimitOutputs[GG];
-         return ZG ? ZG.current++ : (ZG = {
-           limit: bG,
-           current: 1
-         }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
-       }
-       static _GenerateLimitMessage(GG) {
-         let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const ZG = wG._LogLimitOutputs[GG];
-         if (!ZG || !wG.MessageLimitReached) return;
-         const SG = this._Levels[bG];
-         ZG.current === ZG.limit && wG[SG.name](wG.MessageLimitReached.replace(/%LIMIT%/g, "" + ZG.limit).replace(/%TYPE%/g, SG.name ?? ""))
-       }
-       static _AddLogEntry(GG) {
- ... (36 more removed lines; see GitHub link above)
+     const OM = "__default",
+       SM = ["end", "stop", "playerror"];
+ 
+     function jM(MM, rM) {
+       const iM = () => {
+         if (function(MM) {
+             return "loaded" === MM.state() && !MM.playing() && !MM._playLock
+           }(MM)) {
+           for (const rM of SM) MM.off(rM, iM);
+           MM.unload(), null === rM || void 0 === rM || rM()
+         }
+       };
+       for (const OM of SM) MM.on(OM, iM);
+       iM()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/246.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/246.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835)

#### 1. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L4)

```diff
-   38207: (GG, bG, ZG) => {
+   40765: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L6)

```diff
-       e: () => pG,
+       c: () => OM,
```

#### 3. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L9-L3292` → after: `L9-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L9-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L9-L78) · [Before (L9-L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L9-L3292)

```diff
-     var wG = ZG(9280),
-       SG = ZG(9249),
-       LG = ZG(352);
-     const yG = {
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
- ... (3268 more removed lines; see GitHub link above)
+     const OM = "The world isn't loaded, so no blocks can be seen.",
+       SM = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40140: (MM, rM, iM) => {
+     function OM(MM) {
+       return !(!MM.lobbyLeaderboardInfo && !MM.lobbyManage)
+     }
+     iM.d(rM, {
+       d: () => OM
+     })
+   },
+   37767: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       f: () => SM
+     });
+ ... (54 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3406` → after: `L81-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L81-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L81-L86) · [Before (L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3406)

```diff
-     };
+       return {
+         ...MM,
+         type: rM,
+         ironChest: iM
+       }
+     }
```

#### 5. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3409-L3512` → after: `L89-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L89-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L89-L131) · [Before (L3409-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3409-L3512)

```diff
-       return {
-         [`${GG} Banner`]: {
-           positions: [{
-             block: `${GG} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${GG} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${GG} Banner|meta|rot2|bot`]: {
-           positions: [{
- ... (88 more removed lines; see GitHub link above)
+       const rM = zM(MM),
+         iM = null === rM || void 0 === rM ? void 0 : rM.ownerDbId,
+         OM = function(MM) {
+           var rM;
+           let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zM(MM);
+           const OM = LM(MM),
+             SM = mM.get(OM);
+           return SM ? SM.lastOpened < (null !== (rM = null === iM || void 0 === iM ? void 0 : iM.passkeyLastUpdated) && void 0 !== rM ? rM : 0) ? (mM.delete(OM), null) : [...SM.oa] : null
+         }(MM, rM);
+       return void 0 === iM ? {
+         cachedPasskey: OM
+       } : {
+         ownerDbId: iM,
+         cachedPasskey: OM
+       }
+     }(0, QM.h)(aM.b, (MM => {
+ ... (27 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3514-L3525` → after: `L133-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L133-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L133-L159) · [Before (L3514-L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3514-L3525)

```diff
-         [`${GG} Banner|meta|rot1|top`]: {
-           positions: [{
-             block: `${GG} Banner|meta|rot1|top`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${GG} Banner Flag`,
-             x: 0,
-             y: -1,
-             z: 0
-           }]
+         ironChestOpenRequested: {
+           watch: MM => (0, OM.j)("OpenIronChest", (rM => {
+             let {
+               pos: iM
+             } = rM;
+             MM(function(MM) {
+               return {
+                 pos: MM,
+                 ...yM(MM)
+               }
+             }(iM))
+           }))
+         }
+       },
+       EM = {
+         writeOnBoard(MM) {
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3527-L3538` → after: `L161-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L161-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L161-L172) · [Before (L3527-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3527-L3538)

```diff
-         [`${GG} Banner|meta|rot2|top`]: {
-           positions: [{
-             block: `${GG} Banner|meta|rot2|top`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${GG} Banner Flag|meta|rot2|top`,
-             x: 0,
-             y: -1,
-             z: 0
-           }]
+         writeBook(MM) {
+           var rM;
+           let {
+             pages: iM,
+             title: OM,
+             published: SM
+           } = MM;
+           null === (rM = (0, jM.e)()) || void 0 === rM || rM.send(PM.d.UpdateBook, (0, PM.X)({
+             aQ: iM,
+             nQ: OM,
+             QQ: SM
+           }))
```

#### 8. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3540-L3551` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L174-L176) · [Before (L3540-L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3540-L3551)

```diff
-         [`${GG} Banner|meta|rot3|top`]: {
-           positions: [{
-             block: `${GG} Banner|meta|rot3|top`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${GG} Banner Flag|meta|rot3|top`,
-             x: 0,
-             y: -1,
-             z: 0
-           }]
+         writeNameTag(MM) {
+           var rM;
+           null === (rM = (0, jM.e)()) || void 0 === rM || rM.send(PM.d.UpdateNameTag, MM)
```

#### 9. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3553-L3564` → after: `L178-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L178-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L178-L188) · [Before (L3553-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3553-L3564)

```diff
-         [`${GG} Banner|meta|rot4|top`]: {
-           positions: [{
-             block: `${GG} Banner|meta|rot4|top`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${GG} Banner Flag|meta|rot4|top`,
-             x: 0,
-             y: -1,
-             z: 0
-           }]
+         setCustomLobbyBlock(MM) {
+           let {
+             pos: rM,
+             blockName: iM
+           } = MM;
+           const OM = (0, jM.p)(),
+             SM = (0, jM.e)();
+           OM && SM && SM.send(PM.d.SetCustomLobbyBlock, (0, PM.K)({
+             jP: OM.blockIdOf(iM),
+             SP: rM
+           }))
```

#### 10. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3570` → after: `L209-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L209-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L209-L222) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3570)

```diff
-       const bG = (0, LG.ac)(GG);
+       const rM = (0, jM.e)();
+       if (null !== rM) return MM(rM);
+       let iM = null;
+       const OM = (0, SM.x)((() => {
+         const rM = (0, jM.e)();
+         null !== rM && null === iM && (OM(), iM = MM(rM))
+       }));
+       return () => {
+         var MM;
+         OM(), null === (MM = iM) || void 0 === MM || MM()
+       }
+     }
+ 
+     function nM(MM, rM, iM) {
```

#### 11. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3572-L3639` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L224-L226) · [Before (L3572-L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3572-L3639)

```diff
-         [bG]: {
-           positions: [{
-             block: bG,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${bG} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${bG} Top Right`,
-             x: -1,
-             y: 1,
-             z: 0
- ... (52 more removed lines; see GitHub link above)
+         current: () => {
+           const iM = (0, jM.e)();
+           return null === iM ? rM : MM(iM)()
```

#### 12. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3641-L3663` → after: `L228-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L228-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L228-L235) · [Before (L3641-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3641-L3663)

```diff
-         [`${bG}|meta|rot4`]: {
-           positions: [{
-             block: `${bG}|meta|rot4`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${bG} Top Left|meta|rot4`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${bG} Top Right|meta|rot4`,
-             x: 0,
-             y: 1,
-             z: -1
- ... (7 more removed lines; see GitHub link above)
+         watch: rM => PM((OM => {
+           const SM = MM(OM);
+           let jM = SM();
+           return rM(jM), iM((() => {
+             const MM = SM();
+             MM !== jM && (jM = MM, rM(MM))
+           }))
+         }))
```

#### 13. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3671-L3742` → after: `L254-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L254-L258) · [Before (L3671-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3671-L3742)

```diff
-         [GG]: {
-           positions: [{
-             block: GG,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: bG,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
-             block: ZG,
-             x: 0,
-             y: 1,
-             z: -1
- ... (56 more removed lines; see GitHub link above)
+         current: () => aM().states[MM].current(),
+         watch: rM => (0, SM.h)((iM => {
+           const OM = iM.itemBridgeSources.states[MM];
+           return rM(OM.current()), OM.watch(rM)
+         }))
```

#### 14. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3749-L3766` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L264) · [Before (L3749-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3749-L3766)

```diff
-         [bG]: {
-           positions: [{
-             block: bG,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${GG} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_Small ${GG} Pod Top`,
-             x: 0,
-             y: 2,
-             z: 0
- ... (2 more removed lines; see GitHub link above)
+         watch: rM => (0, SM.h)((iM => iM.itemBridgeSources.events[MM].watch(rM)))
```

#### 15. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3769-L3789` → after: `L267-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L267-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L267-L297) · [Before (L3769-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3769-L3789)

```diff
-     for (const fG in yG) {
-       for (const GG of yG[fG].positions)
-         if (GG.id = SG.l[GG.block].id, fG === GG.block && (0 !== GG.x || 0 !== GG.y || 0 !== GG.z)) throw new Error(`Multiblock "${fG}" has main block "${GG.block}" at non-origin position (${GG.x}, ${GG.y}, ${GG.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       yG[SG.l[fG].id] = yG[fG]
-     }
-     const pG = {};
-     for (const fG in yG)
-       for (const {
-           block: GG,
-           x: bG,
-           y: ZG,
-           z: wG
-         }
-         of yG[fG].positions) {
-         const LG = {
-           mainMultiblock: fG,
- ... (5 more removed lines; see GitHub link above)
+     const QM = {
+       states: {
+         inventory: PM("inventory"),
+         hotbar: PM("hotbar"),
+         crafting: PM("crafting"),
+         heldItemAim: PM("heldItemAim")
+       },
+       events: {
+         hotbarSlotRequested: nM("hotbarSlotRequested"),
+         hotbarScrolled: nM("hotbarScrolled"),
+         numberKeyPressed: nM("numberKeyPressed"),
+         inventoryDropRequested: nM("inventoryDropRequested"),
+         chestToggled: nM("chestToggled"),
+         chestRefreshed: nM("chestRefreshed"),
+         inventorySynced: nM("inventorySynced"),
+         enchantingTableOpened: nM("enchantingTableOpened")
+ ... (15 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3792` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L301) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3792)

```diff
-   38641: (GG, bG, ZG) => {
+   41734: (MM, rM, iM) => {
```

#### 17. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3794-L3795` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L303) · [Before (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3794-L3795)

```diff
-       c: () => UG,
-       d: () => kG
+       c: () => PM
```

#### 18. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3797-L3806` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L305) · [Before (L3797-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3797-L3806)

```diff
-     var wG = ZG(9249),
-       SG = ZG(9309),
-       LG = ZG(9318);
-     const yG = SG.v.map((GG => {
-       let {
-         dx: bG,
-         dz: ZG
-       } = GG;
-       return [bG, 0, ZG]
-     }));
+     var OM = iM(40765);
```

#### 19. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3809-L3835` → after: `L308-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L308-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L308-L310) · [Before (L3809-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3809-L3835)

```diff
-       const bG = wG.l[GG];
-       return !!bG && GG !== wG.e && !bG.model && !bG.UQ && !1 !== bG.solid && !bG.bd
-     }
-     class UG {
-       constructor(GG) {
-         this.model = GG, this.reshapeOffsets = [...yG, [0, -1, 0]]
-       }
-       handles(GG) {
-         const bG = wG.l[GG];
-         return (null === bG || void 0 === bG ? void 0 : bG.model) === this.model && void 0 !== bG.attachedTop
-       }
-       affects(GG) {
-         return this.handles(GG) || kG(GG) || (0, LG.s)(wG.l[GG])
-       }
-       shape(GG, bG, ZG, yG, UG) {
-         let YG = this.handles(GG(bG, ZG + 1, yG)) ? SG.k : 0;
- ... (11 more removed lines; see GitHub link above)
+       return {
+         current: () => MM,
+         watch: () => () => {}
```

#### 20. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3838-L3860` → after: `L313-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L313-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L313-L446) · [Before (L3838-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3838-L3860)

```diff
-   },
-   38409: (GG, bG, ZG) => {
-     function wG(GG, bG) {
-       var ZG;
-       bG || (bG = {});
-       const wG = null !== (ZG = bG.customAttributes) && void 0 !== ZG ? ZG : {};
-       var SG, LG, yG;
-       "Gun" === (null === GG || void 0 === GG ? void 0 : GG.type) && (wG.shotsLeft = null !== (SG = null !== (LG = wG.shotsLeft) && void 0 !== LG ? LG : null === (yG = wG.gunStats) || void 0 === yG ? void 0 : yG.clipSize) && void 0 !== SG ? SG : GG.clipSize);
-       if (wG.enchantmentTier && (wG.enchantmentTier = wG.enchantmentTier.toString()), wG.enchantments)
-         for (const pG in wG.enchantments) {
-           const GG = wG.enchantments[pG];
-           if ("number" !== typeof GG) {
-             const bG = parseInt(GG);
-             isNaN(bG) || bG < 0 ? wG.enchantments[pG] = void 0 : wG.enchantments[pG] = bG > 1e9 ? 1e9 : bG
-           }
-         }
- ... (7 more removed lines; see GitHub link above)
+ 
+     function jM() {}
+     const aM = Object.freeze([0, 0, 0]),
+       PM = {
+         states: {
+           health: SM({
+             health: null,
+             maxHealth: null,
+             shield: null,
+             maxShield: null
+           }),
+           inventory: SM({
+             player: [],
+             chestOrCreative: [],
+             chest: null,
+             creative: !1,
+ ... (118 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3862-L3866` → after: `L448-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L448-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L448-L544) · [Before (L3862-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3862-L3866)

```diff
-           const bG = GG.icon,
-             ZG = GG.description;
-           var kG, UG, YG, VG;
-           if ("string" !== typeof bG) wG.enchantmentData[pG].icon = null !== (kG = null === bG || void 0 === bG || null === (UG = bG.toString) || void 0 === UG ? void 0 : UG.call(bG)) && void 0 !== kG ? kG : void 0;
-           if ("string" !== typeof ZG) wG.enchantmentData[pG].description = null !== (YG = null === ZG || void 0 === ZG || null === (VG = ZG.toString) || void 0 === VG ? void 0 : VG.call(ZG)) && void 0 !== YG ? YG : void 0
+         },
+         commands: {
+           selectHotbarSlot: jM,
+           removeInventoryItem: () => !1,
+           swapInventorySlots: () => !1,
+           moveInventoryItem: () => !1,
+           quickMoveInventoryItem: () => null,
+           closeChest: jM,
+           setInventoryOpen: jM,
+           changeIronChestPasskey: jM,
+           dragReplayCamera: jM,
+           applyTemporaryThirdPerson: jM,
+           holdEmoteWheel: jM,
+           recordFlyingMiddleText: jM,
+           focusCrafting: jM,
+           craftRecipe: () => ({
+ ... (81 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3868-L3872` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L546) · [Before (L3868-L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3868-L3872)

```diff
-       return bG.customAttributes = wG, bG
-     }
-     ZG.d(bG, {
-       e: () => wG
-     })
+       }
```

#### 23. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3874` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L548) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3874)

```diff
-   38634: (GG, bG, ZG) => {
+   41674: (MM, rM, iM) => {
```

#### 24. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3879-L3880` → after: `L552-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L552-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L552-L554) · [Before (L3879-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3879-L3880)

```diff
-       i: () => pG,
-       j: () => iG
+       g: () => tM,
+       k: () => eM,
+       m: () => GM
```

#### 25. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3882-L3886` → after: `L556-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L556-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L556-L569) · [Before (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3882-L3886)

```diff
-     var wG = ZG(9249),
-       SG = ZG(9292),
-       LG = ZG(38641);
-     const yG = (0, wG.p)("Noticeboard"),
-       kG = (0, wG.p)("Standing Noticeboard|meta|rot4|lrud");
+     var OM = iM(40325),
+       SM = iM(1229),
+       jM = iM(2067),
+       aM = iM(2078),
+       PM = iM(3693),
+       nM = iM(37767),
+       QM = iM(1373),
+       zM = iM(41677),
+       LM = iM(5214),
+       mM = iM(2619),
+       HM = iM(41682),
+       hM = iM(41691),
+       JM = iM(41723);
+     let dM = null;
```

#### 26. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3889` → after: `L572-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L572-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L572-L581) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3889)

```diff
-       return yG <= GG && GG <= kG
+       const rM = new Map,
+         iM = iM => {
+           if ("string" !== typeof iM) return;
+           let OM = rM.get(iM);
+           return void 0 === OM && (OM = MM(iM), void 0 !== OM && rM.set(iM, OM)), OM
+         };
+       return new Proxy({}, {
+         get: (MM, rM) => iM(rM),
+         has: (MM, rM) => void 0 !== iM(rM)
+       })
```

#### 27. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3898-L3899` → after: `L585-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L585-L586) · [Before (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3898-L3899)

```diff
-       var bG, ZG;
-       return "string" === typeof(null === GG || void 0 === GG || null === (bG = GG.persisted) || void 0 === bG || null === (ZG = bG.shared) || void 0 === ZG ? void 0 : ZG.text)
+       const rM = (0, PM.d)(MM);
+       return void 0 !== rM && (0, PM.g)(rM) === MM
```

#### 28. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3903-L3904` → after: `L590-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L590-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L590-L607) · [Before (L3903-L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3903-L3904)

```diff
-       return dG(GG) && "" !== GG.persisted.shared.text.trim()
-     }
+       var rM;
+       const iM = null === (rM = (0, zM.e)()) || void 0 === rM ? void 0 : rM.tables;
+       if (void 0 === iM || !lM(MM)) return;
+       const OM = {
+           displayName: iM.getDisplayName(MM)
+         },
+         SM = iM.getItemStat(MM, "description");
+       void 0 !== SM && null !== SM && (OM.description = SM);
+       const {
+         rootName: jM
+       } = iM.getMetaInfo(MM);
+       jM !== MM && (OM.rootName = jM);
+       const aM = iM.getItemStat(MM, "armourReduction");
+       return void 0 !== aM && null !== aM && (OM.armourReduction = aM), OM
+     }(0, zM.r)((MM => {
+       dM = MM
+ ... (2 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3906-L3909` → after: `L609-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L609-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L609-L743) · [Before (L3906-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3906-L3909)

```diff
-     function rG(GG, bG) {
-       let [ZG, , wG] = bG;
-       const [LG, , yG] = SG.v[GG][QG];
-       return ZG * LG + wG * yG
+     function GM() {
+       return Boolean(jM.d.get("useInventory") && jM.d.get("useFullInventory"))
+     }
+     let CM = null;
+     const eM = {
+         inventory: function() {
+           const MM = JM.d.states.inventory;
+           let rM = null;
+           const iM = MM => {
+             var iM;
+             return null === MM.chest ? MM : ((null === (iM = rM) || void 0 === iM ? void 0 : iM.from) === MM && rM.chestVersion === (0, hM.b)() || (rM = {
+               from: MM,
+               chestVersion: (0, hM.b)(),
+               view: {
+                 ...MM,
+                 chest: (0, hM.i)(MM.chest)
+ ... (119 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3912-L3913` → after: `L746-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L746-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L746-L747) · [Before (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3912-L3913)

```diff
-     function zG(GG, bG, ZG) {
-       return ZG[1] - bG[1] || rG(GG, bG) - rG(GG, ZG)
+     function SM(MM) {
+       return MM instanceof RangeError && /call stack/i.test(MM.message) || MM instanceof Error && "InternalError" === MM.name && /recursion/i.test(MM.message)
```

#### 31. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3916` → after: `L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L751) · [Before (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3916)

```diff
-     function EG(GG, bG, ZG, LG, kG) {
+     function aM(MM) {
```

#### 32. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3918-L3921` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L753) · [Before (L3918-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3918-L3921)

```diff
-       let VG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GG(bG[0], bG[1], bG[2]);
-       if (!(YG[VG - yG] & 1 << ZG)) return null;
-       const [pG, fG, QG] = SG.v[kG][ZG], KG = [bG[0] + pG, bG[1] + fG, bG[2] + QG], hG = GG(KG[0], KG[1], KG[2]), dG = null === (UG = wG.l[hG]) || void 0 === UG ? void 0 : UG.meta;
-       return (null === dG || void 0 === dG ? void 0 : dG.rootId) === LG && dG.rot === kG && YG[hG - yG] & 1 << (1 ^ ZG) ? KG : null
+       return MM instanceof WebAssembly.RuntimeError || MM instanceof OM || SM(MM) && jM.test(null !== (rM = MM.stack) && void 0 !== rM ? rM : "")
```

#### 33. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3924-L3949` → after: `L756-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L756-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L756-L758) · [Before (L3924-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3924-L3949)

```diff
-     function oG(GG, bG, ZG, LG) {
-       const yG = GG(bG, ZG, LG);
-       if (!UG(yG)) return null;
-       const {
-         rootId: kG,
-         rot: YG
-       } = wG.l[yG].meta, pG = (bG, ZG) => {
-         let wG = bG,
-           SG = 1;
-         for (let LG = EG(GG, wG, ZG, kG, YG); LG && SG < VG; LG = EG(GG, wG, ZG, kG, YG)) wG = LG, SG++;
-         return {
-           end: wG,
-           cells: SG
-         }
-       }, dG = pG(pG([bG, ZG, LG], fG).end, KG).end, JG = pG(dG, QG).cells, [rG, , zG] = SG.v[YG][QG];
-       let oG = 1;
- ... (10 more removed lines; see GitHub link above)
+     function PM(MM, rM) {
+       if (aM(MM)) throw MM;
+       console.error(rM, MM)
```

#### 34. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3952-L3966` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L761-L762) · [Before (L3952-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3952-L3966)

```diff
-     function XG(GG, bG) {
-       for (const ZG of function(GG) {
-           let {
-             anchor: bG,
-             rot: ZG,
-             width: wG,
-             height: LG
-           } = GG;
-           const [yG, , kG] = SG.v[ZG][QG], UG = [];
-           for (let SG = 0; SG < LG; SG++)
-             for (let GG = 0; GG < wG; GG++) UG.push([bG[0] + yG * GG, bG[1] - SG, bG[2] + kG * GG]);
-           return UG
-         }(GG))
-         if (dG(bG(ZG[0], ZG[1], ZG[2]))) return ZG;
-       return null
+     function nM(MM, rM, iM, SM, jM) {
+       if (rM % SM !== 0 || rM + iM > MM.byteLength) throw new OM(`${jM}: ${iM} bytes at ${rM}, ${SM}-aligned, outside ${MM.byteLength} bytes of memory`)
```

#### 35. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L3970-L3996` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L766) · [Before (L3970-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L3970-L3996)

```diff
-       const yG = GG(ZG, SG, LG);
-       if (!UG(yG)) return null;
-       const {
-         rootId: kG,
-         rot: YG
-       } = wG.l[yG].meta, VG = [
-         [ZG, SG, LG]
-       ], fG = new Set([VG[0].join()]);
-       let QG = VG[0],
-         KG = null;
-       for (let wG = 0; wG < VG.length; wG++) {
-         const ZG = VG[wG];
-         if (zG(YG, ZG, QG) < 0 && (QG = ZG), dG(bG(ZG[0], ZG[1], ZG[2]))) {
-           const bG = oG(GG, ZG[0], ZG[1], ZG[2]);
-           (!KG || zG(YG, bG.anchor, KG.anchor) < 0) && (KG = bG)
-         }
- ... (11 more removed lines; see GitHub link above)
+       return 0 === iM ? null : (nM(rM, iM, OM * MM.BYTES_PER_ELEMENT, MM.BYTES_PER_ELEMENT, SM), new MM(rM, iM, OM))
```

#### 36. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4000-L4017` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L770) · [Before (L4000-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L4000-L4017)

```diff
-       if (null !== ZG && UG(ZG)) {
-         const {
-           rootName: GG,
-           rot: bG
-         } = wG.l[ZG].meta;
-         if (SG.v[bG].some((GG => {
-             let [bG, ZG, wG] = GG;
-             return bG === yG[0] && ZG === yG[1] && wG === yG[2]
-           }))) return {
-           root: GG,
-           rot: bG
-         }
-       }
-       const [YG, VG] = SG.l[kG], pG = GG(bG[0] - YG, bG[1], bG[2] - VG);
-       return {
-         root: (0, LG.d)(pG) ? SG.B : SG.y,
- ... (2 more removed lines; see GitHub link above)
+       return 0 === rM ? null : (nM(MM, rM, iM, OM, SM), new DataView(MM, rM, iM))
```

#### 37. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4020` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L773) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L4020)

```diff
-   38649: (GG, bG, ZG) => {
+   41677: (MM, rM, iM) => {
```

#### 38. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4023-L4025` → after: `L777-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L777-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L777-L783) · [Before (L4023-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L4023-L4025)

```diff
-       g: () => yG,
-       k: () => SG,
-       n: () => kG
+       e: () => JM,
+       h: () => dM,
+       i: () => mM,
+       m: () => HM,
+       p: () => zM,
+       r: () => LM,
+       t: () => hM
```

#### 39. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4027-L4029` → after: `L785-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L785-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L785-L808) · [Before (L4027-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L4027-L4029)

```diff
-     var wG = ZG(359);
-     const SG = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...ZG(595).u.map((GG => `${GG} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
-       LG = ["Obby RPG"];
+     class OM extends Error {
+       constructor(MM) {
+         super(`the join's code did not load: ${MM instanceof Error?MM.message:String(MM)}`, {
+           cause: MM
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === MM || void 0 === MM ? void 0 : MM.request
+       }
+     }
+     let SM = null,
+       jM = null,
+       aM = null;
+     const PM = [];
+     let nM = null;
+ 
+     function QM(MM, rM) {
+       try {
+         MM(rM)
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4032-L4038` → after: `L811-L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L811-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L811-L835) · [Before (L4032-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L4032-L4038)

```diff
-       const bG = GG.indexOf("|");
-       return -1 === bG ? {
-         item: GG,
-         clientPredictedThrower: null
-       } : {
-         item: GG.slice(0, bG),
-         clientPredictedThrower: GG.slice(bG + 1)
+       PM.push(MM), null !== nM && QM(MM, nM)
+     }
+ 
+     function mM(MM) {
+       return SM ??= Promise.all([iM.e(84), iM.e(111), iM.e(86), iM.e(244), iM.e(89), iM.e(245), iM.e(224), iM.e(109), iM.e(264), iM.e(296), iM.e(48), iM.e(213), iM.e(232), iM.e(222), iM.e(205), iM.e(206), iM.e(170), iM.e(101), iM.e(134), iM.e(272), iM.e(68)]).then((() => iM(45248 … [truncated]
+         rM.loadAudio(MM), nM = rM;
+         for (const MM of PM) QM(MM, rM);
+         return rM
+       })).catch((MM => {
+         throw SM = null, MM
+       })), SM
+     }
+     async function HM(MM, rM) {
+       try {
+         const iM = await mM(MM);
+         await iM.loadClientGame(rM)
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/246.js` (Changed code · before: `L4041` → after: `L838-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5f87420983d72042bee1bf09087748be4f0717de8429d38b04e6b152d241e835) · [After (L838-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/246.js#L838-L856) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/246.js#L4041)

```diff
-     const kG = [...SG, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
+ 
+     function JM() {
+       return aM
+     }
+     async function dM(MM) {
+       const rM = jM;
+       if ((null === rM || void 0 === rM ? void 0 : rM.running) !== MM) throw new Error("the core's session has ended");
+       const iM = await mM(rM.shell.audio).catch((MM => {
+         throw new OM(MM)
+       }));
+       if (null !== aM) return aM;
+       if (jM !== rM || MM.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (aM = iM.startGameHost(MM, rM.shell), null === aM) throw new Error("the core's shared tables didn't read, so the game can't start");
+       return aM
+     }
+ 
+ ... (3 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/247.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/247.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f)

#### 1. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L4)

```diff
-   38468: (GG, bG, ZG) => {
+   37852: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L6-L11` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L6-L7) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L6-L11)

```diff
-       d: () => YG,
-       f: () => wG,
-       j: () => kG,
-       n: () => SG,
-       r: () => yG,
-       s: () => LG
+       c: () => GM,
+       d: () => UM
```

#### 3. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L13-L18` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L9-L26) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L13-L18)

```diff
-     const wG = 1.001,
-       SG = .501,
-       LG = .025,
-       yG = .75,
-       kG = .08,
-       UG = 4;
+     var OM = iM(4589),
+       SM = iM(1516),
+       jM = iM(44),
+       aM = iM(6944),
+       PM = iM(4581),
+       nM = iM(1313),
+       QM = iM(2039),
+       zM = iM(2006),
+       LM = iM(1520),
+       mM = iM(1188),
+       HM = iM(37855),
+       hM = iM(1116),
+       JM = iM.n(hM),
+       dM = iM(1360),
+       yM = iM(1398),
+       lM = iM(1287),
+ ... (2 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L21-L83` → after: `L29-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L29-L31) · [Before (L21-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L21-L83)

```diff
-       const GG = SG,
-         bG = LG,
-         ZG = GG - bG / 2,
-         wG = (2 * GG - 2 * bG) / (2 * UG - 1),
-         yG = [];
-       for (const SG of [-ZG, ZG])
-         for (const LG of [-ZG, ZG])
-           for (let ZG = 0; ZG < UG; ZG++) {
-             const kG = -GG + bG + wG * (2 * ZG + .5);
-             yG.push([wG, bG, bG, kG, SG, LG]), yG.push([bG, wG, bG, SG, kG, LG]), yG.push([bG, bG, wG, SG, LG, kG])
-           }
-       for (const SG of [-ZG, ZG])
-         for (const GG of [-ZG, ZG])
-           for (const wG of [-ZG, ZG]) yG.push([bG, bG, bG, SG, GG, wG]);
-       return yG
-     }
- ... (47 more removed lines; see GitHub link above)
+       const {
+         t: MM
+       } = (0, mM.A)(), [rM, iM] = (0, jM.useState)(!1), [hM, GM] = (0, jM.useState)(null), [eM, bM] = (0, jM.useState)(1), [wM, tM] = (0, jM.useState)(!1), [gM, uM] = (0, jM.useState)(!1), RM = (0, jM.useRef)(0), pM = (0, jM.useRef)(!1), WM = (0, jM.useRef)(!1), sM = (0, jM.useRe … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L85-L102` → after: `L33-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L33-L35) · [Before (L85-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L85-L102)

```diff
-     function hG(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       const ZG = bG ? function(GG, bG, ZG) {
-         const wG = QG.findIndex((wG => {
-           let [SG, LG, yG] = wG;
-           return SG === GG && LG === bG && yG === ZG
-         }));
-         return wG < 0 ? 0 : 1 << wG
-       }(bG[0], bG[1], bG[2]) : 0;
-       return "maker" === GG ? {
-         kind: GG,
-         faces: ZG
-       } : "user" === GG ? {
-         kind: GG,
-         faces: KG & ~ZG
-       } : {
- ... (2 more removed lines; see GitHub link above)
+       function kM() {
+         const MM = null !== hM && void 0 !== hM ? hM : "Rested Speed";
+         QM.gameBridge.send("wakeUp", gM ? MM : null), DM.current = null, iM(!1), GM(null), bM(1), tM(!1), uM(!1)
```

#### 6. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L106-L111` → after: `L38-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L38-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L38-L139) · [Before (L106-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L106-L111)

```diff
-     function dG(GG) {
-       return "pipe" === GG || "tank" === GG || "maker" === GG
-     }
- 
-     function JG(GG, bG, ZG) {
-       return 0 !== (GG.faces & 1 << ZG) && 0 !== (bG.faces & 1 << (1 ^ ZG)) && (dG(GG.kind) || dG(bG.kind))
+       function ZM() {
+         return !wM && (kM(), !0)
+       }
+       return (0, SM.d)("PlayerPhysicsTypeUpdate", (MM => {
+         MM !== DM.current && (DM.current = MM, MM === aM.n.SLEEPING ? (WM.current || (RM.current = QM.gameBridge.lookup("cameraZoom", null), WM.current = !0), pM.current = !0, QM.gameBridge.send("setCameraZoom", 3), iM(!0), bM(function() {
+           for (const MM of QM.gameBridge.lookup("blocksStandingOn", null)) {
+             if (HM.c.leafBeds.includes(MM)) return console.log(`Found leaf bed: ${MM}`), 1;
+             if (HM.c.woolBeds.includes(MM)) return console.log(`Found woold bed: ${MM}`), 2;
+             if (HM.c.strongBeds.includes(MM)) return console.log(`Found strong bed ${MM}`), 3
+           }
+           return 1
+         }())) : (WM.current = !1, iM(!1), GM(null), bM(1)))
+       })), (0, jM.useEffect)((() => () => {
+         (0, nM.v)(UM)
+       }), []), (0, jM.useEffect)((() => {
+         rM ? (0, nM.z)(UM) : ((0, nM.v)(UM), pM.current && (QM.gameBridge.send("setCameraZoom", RM.current), pM.current = !1))
+ ... (86 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L113-L140` → after: `L141-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L141-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L141-L150) · [Before (L113-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L113-L140)

```diff
-     const rG = (GG, bG, ZG, wG) => ({
-         input: GG,
-         inputAmount: wG,
-         output: bG,
-         outputAmount: ZG
-       }),
-       zG = {
-         Condenser: {
-           kind: "Condenser",
-           opMs: 2e3,
-           inputSlot: null,
-           fuelSlot: null,
-           outputSlots: [],
-           recipes: [],
-           powerPerOp: 60,
-           fluidMade: 12,
- ... (12 more removed lines; see GitHub link above)
+     const CM = (0, jM.memo)((function(MM) {
+       let {
+         children: rM,
+         restedEffect: iM,
+         vQ: OM,
+         setChosenRestedEffect: SM
+       } = MM;
+       return iM === OM ? (0, EM.jsx)(LM.p, {
+         onClick: MM => {
+           MM.stopPropagation()
```

#### 8. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L142-L151` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L152-L155) · [Before (L142-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L142-L151)

```diff
-         Synthesizer: {
-           kind: "Synthesizer",
-           opMs: 6e3,
-           inputSlot: 0,
-           fuelSlot: null,
-           outputSlots: [1, 2, 3],
-           recipes: [],
-           powerPerOp: 120,
-           waterPerOp: 12,
-           synth: !0
+         children: rM
+       }) : (0, EM.jsx)(LM.i, {
+         onClick: MM => {
+           SM(iM), MM.stopPropagation()
```

#### 9. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L153-L179` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L157-L159) · [Before (L153-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L153-L179)

```diff
-         "Coolant Mixer": {
-           kind: "Coolant Mixer",
-           opMs: 12e3,
-           inputSlot: 0,
-           fuelSlot: null,
-           outputSlots: [],
-           recipes: [rG("Biomass", "", 0, 1)],
-           powerPerOp: 720,
-           waterPerOp: 144,
-           cryoMade: pG,
-           couplable: !0,
-           couplerSlot: 1
-         }
-       };
- 
-     function EG(GG, bG) {
- ... (11 more removed lines; see GitHub link above)
+         children: rM
+       })
+     }))
```

#### 10. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L181` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L161) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L181)

```diff
-   38822: (GG, bG, ZG) => {
+   41656: (MM, rM, iM) => {
```

#### 11. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L183-L184` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L163) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L183-L184)

```diff
-       c: () => cG,
-       f: () => lG
+       d: () => qM
```

#### 12. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L186-L265` → after: `L165-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L165-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L165-L196) · [Before (L186-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L186-L265)

```diff
-     var wG = ZG(9249),
-       SG = ZG(9292);
-     const LG = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1],
-       [0, 1, 0],
-       [0, -1, 0]
-     ];
-     var yG = ZG(9309),
-       kG = ZG(38641),
-       UG = ZG(9303);
-     const YG = {
-       1: [0, -1],
-       2: [-1, 0],
- ... (64 more removed lines; see GitHub link above)
+     var OM = iM(19),
+       SM = iM(22),
+       jM = iM(4613),
+       aM = iM(313),
+       PM = iM(1717),
+       nM = iM(8731),
+       QM = iM(4633),
+       zM = iM(9315),
+       LM = iM(8776),
+       mM = iM(8743),
+       HM = iM(8785),
+       hM = iM(1464),
+       JM = iM(1765),
+       dM = iM(8792),
+       yM = iM(9259),
+       lM = iM(9403),
+ ... (16 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L268-L284` → after: `L199-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L199-L201) · [Before (L268-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L268-L284)

```diff
- 
-     function IG(GG, bG, ZG, wG) {
-       return mG(GG(bG, ZG, wG))
-     }
- 
-     function FG(GG, bG, ZG, wG, SG) {
-       let {
-         rot: LG,
-         half: yG
-       } = SG;
-       const [kG, UG] = (0, CG.m)(LG, yG), YG = IG(GG, bG + kG, ZG, wG + UG);
-       return null !== YG && YG.rot === LG && YG.half === CG.s[yG]
-     }
-     var vG = ZG(38829);
-     const aG = [new class {
-       constructor() {
- ... (1 more removed lines; see GitHub link above)
+     class gM {
+       constructor(MM, rM) {
+         this.press = MM, this.release = rM, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 14. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L286-L288` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L203-L205) · [Before (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L286-L288)

```diff
-       handles(GG) {
-         var bG;
-         return "Stairs" === (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.model)
+       update(MM, rM, iM, OM) {
+         if (MM && null === this.downAtMs) return this.downAtMs = iM, this.latched = OM, void(this.token = this.press(OM));
+         null !== this.downAtMs && (this.latched ? MM && this.end() : !rM && iM - this.downAtMs >= 40 && this.end())
```

#### 15. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L290-L291` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L207-L208) · [Before (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L290-L291)

```diff
-       affects(GG) {
-         return this.handles(GG)
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 16. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L293-L297` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L210-L211) · [Before (L293-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L293-L297)

```diff
-       shape(GG, bG, ZG, SG, LG) {
-         const yG = this.stairsOf(LG),
-           kG = this.cornerAt(GG, bG, ZG, SG, yG),
-           YG = yG.half === UG.d.top ? "top" : "bot";
-         return (0, wG.p)(`${wG.l[LG].meta.rootName}|meta|rot${yG.rot}|${YG}${null===kG?"":`|${kG}`}`)
+       unlatch() {
+         this.latched = !1
```

#### 17. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L299-L307` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L213-L214) · [Before (L299-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L299-L307)

```diff
-       stairsOf(GG) {
-         const {
-           rot: bG,
-           halfblockPlacement: ZG
-         } = wG.l[GG].meta;
-         return {
-           rot: bG,
-           half: ZG
-         }
+       cancel() {
+         null !== this.downAtMs && this.end()
```

#### 18. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L309-L311` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L216-L218) · [Before (L309-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L309-L311)

```diff
-       stairsAt(GG, bG, ZG, wG) {
-         const SG = GG(bG, ZG, wG);
-         return this.handles(SG) ? this.stairsOf(SG) : null
+       end() {
+         const MM = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(MM)
```

#### 19. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L313` → after: `L220-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L220-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L220-L312) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L313)

```diff
-       cornerAt(GG, bG, ZG, wG, SG) {
+     }
+     const uM = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       RM = MM => {
+         let rM = null;
+         const iM = new wM.c,
+           OM = () => {
+             rM && (((MM, rM, iM) => {
+               switch (iM.kind) {
+                 case "reload":
+                   return void rM.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void rM.specialActionUp(iM.action);
+                 case "customButton":
+ ... (77 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L315-L316` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L314-L315) · [Before (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L315-L316)

```diff
-           rot: LG,
-           half: yG
+           bodies: rM,
+           press: OM
```

#### 21. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L318-L322` → after: `L317-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L317-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L317-L367) · [Before (L318-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L318-L322)

```diff
-         const kG = YG[LG],
-           UG = SG => {
-             let [kG, UG] = SG;
-             const YG = this.stairsAt(GG, bG + kG, ZG, wG + UG);
-             return null !== YG && YG.rot === LG && YG.half === yG
+         iM(rM, OM)
+       })),
+       KM = {
+         running: !1,
+         latchedAtMs: -1 / 0
+       },
+       qM = MM => {
+         const rM = {
+           x: 0,
+           y: 0,
+           magnitude: 0,
+           headingOffset: 0,
+           jumpHeld: !1,
+           jumpPressed: !1,
+           running: !1,
+           sprintHeld: !1
+ ... (35 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L324-L332` → after: `L369-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L369-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L369-L491) · [Before (L324-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L324-L332)

```diff
-           QG = this.stairsAt(GG, bG + kG[0], ZG, wG + kG[1]);
-         if (null !== QG && QG.half === yG) {
-           const GG = YG[QG.rot];
-           if (fG(kG, GG) && !UG([-GG[0], -GG[1]])) return pG(GG, VG(kG)) ? "outerLeft" : "outerRight"
-         }
-         const KG = this.stairsAt(GG, bG - kG[0], ZG, wG - kG[1]);
-         if (null !== KG && KG.half === yG) {
-           const GG = YG[KG.rot];
-           if (fG(kG, GG) && !UG(GG)) return pG(GG, VG(kG)) ? "innerLeft" : "innerRight"
+           Lr = function() {
+             let OM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+             zr(), Sr = !1, OM || (Or = !1, iM = KM, Object.assign(rM, {
+               x: 0,
+               y: 0,
+               magnitude: 0,
+               headingOffset: 0,
+               jumpHeld: !1,
+               jumpPressed: !1,
+               running: !1,
+               sprintHeld: !1
+             }), MM.stopMoving())
+           };
+         let mr = !1;
+         const Hr = function(OM, SM, jM) {
+             let aM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+ ... (107 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L369-L411` → after: `L494-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L494-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L494-L525) · [Before (L369-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L369-L411)

```diff
-       handles(GG) {
-         const bG = XG(GG);
-         return rG.has(bG) || bG === KG.g
-       }
-       affects(GG) {
-         const bG = XG(GG);
-         return zG.has(bG) || EG.has(bG) || bG === dG || bG === KG.g || void 0 !== KG.b[bG]
-       }
-       shape(GG, bG, ZG, SG, LG, yG) {
-         const {
-           rootName: kG,
-           rot: UG
-         } = wG.l[LG].meta;
-         return kG === KG.g ? yG ? LG : function(GG, bG, ZG, SG, LG) {
-           const [yG, kG] = KG.e[LG - 1];
-           for (let UG = 1; UG <= KG.C; UG++) {
- ... (27 more removed lines; see GitHub link above)
+   },
+   41652: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => hM,
+       d: () => dM,
+       h: () => HM
+     });
+     var OM = iM(1313),
+       SM = iM(4613),
+       jM = iM(9383),
+       aM = iM(37852),
+       PM = iM(1818),
+       nM = iM(1181),
+       QM = iM(8792),
+       zM = iM(9324),
+       LM = iM(9408);
+ ... (16 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L413` → after: `L527-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L527-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L527-L540) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L413)

```diff
-     }, new class {
+   },
+   41650: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM,
+       f: () => nM,
+       h: () => PM,
+       i: () => zM,
+       l: () => aM,
+       n: () => jM,
+       o: () => QM,
+       s: () => LM
+     });
+     var OM = iM(8723);
+     class SM {
```

#### 25. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L415` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L542) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L415)

```diff
-         this.reshapeOffsets = WG, this.rootId = (0, wG.p)(CG.q)
+         this.fullTiltSinceMs = null
```

#### 26. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L417` → after: `L544-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L544-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L544-L548) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L417)

```diff
-       handles(GG) {
+       update(MM, rM, iM) {
+         const SM = (0, OM.i)(MM, rM.lookDeadzone);
+         if (Math.hypot(SM.x, SM.y) < .9 || Math.abs(SM.x) < Math.abs(SM.y)) return this.fullTiltSinceMs = null, 1;
+         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = iM);
+         const jM = (aM = rM.lookSensitivityX, Math.min(1, 100 / aM));
```

#### 27. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L419` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L550) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L419)

```diff
-         return (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta.rootId) === this.rootId
+         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (iM - this.fullTiltSinceMs - 250 * jM) / (200 * jM)))
```

#### 28. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L421-L422` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L552-L553) · [Before (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L421-L422)

```diff
-       affects(GG) {
-         return this.handles(GG)
+       reset() {
+         this.fullTiltSinceMs = null
```

#### 29. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L424-L438` → after: `L555-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L555-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L555-L582) · [Before (L424-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L424-L438)

```diff
-       shape(GG, bG, ZG, SG, LG, yG) {
-         const kG = mG(LG);
-         return (0, wG.p)((UG = kG.rot, null !== (YG = yG ? this.reshapedHalf(GG, bG, ZG, SG, kG) : this.placedHalf(GG, bG, ZG, SG, kG.rot)) ? (0, CG.e)(CG.q, UG, YG) : 1 === UG ? CG.q : `${CG.q}|meta|rot${UG}`));
-         var UG, YG
-       }
-       placedHalf(GG, bG, ZG, wG, SG) {
-         const [LG, yG] = iG.c[SG];
-         for (const [kG, UG] of [
-             ["right", 1],
-             ["left", -1]
-           ]) {
-           const YG = bG + UG * LG,
-             VG = wG + UG * yG,
-             pG = IG(GG, YG, ZG, VG);
-           if (null !== pG && pG.rot === SG && (null === pG.half || !FG(GG, YG, ZG, VG, pG))) return kG
+     }
+     const jM = (MM, rM, iM, SM, jM) => {
+         let aM = 1;
+         return "boost" === iM.lookCurve ? aM = MM.update(rM, iM, jM) : MM.reset(),
+           function(MM, rM) {
+             let {
+               yawBoost: iM = 1,
+               aiming: SM = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const jM = (0, OM.h)((0, OM.i)(MM, rM.lookDeadzone), rM.lookCurve),
+               aM = 220 * Math.PI / 180,
+               PM = SM ? rM.aimLookSensitivity / 100 : 1,
+               nM = rM.lookSensitivityX / 100 * PM,
+               QM = rM.lookSensitivityY / 100 * PM;
+             return {
+               yawRadPerSec: jM.x * aM * nM * iM * (rM.invertLookX ? -1 : 1),
+ ... (12 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L440-L446` → after: `L584-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L584-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L584-L600) · [Before (L440-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L440-L446)

```diff
-         return null
-       }
-       reshapedHalf(GG, bG, ZG, wG, SG) {
-         if (null !== SG.half && FG(GG, bG, ZG, wG, SG)) return SG.half;
-         for (const LG of ["right", "left"]) {
-           const [yG, kG] = (0, CG.m)(SG.rot, LG), UG = IG(GG, bG + yG, ZG, wG + kG);
-           if (null !== UG && UG.rot === SG.rot && UG.half === CG.s[LG]) return LG
+       },
+       PM = (MM, rM) => rM ? {
+         move: MM.rightStick,
+         look: MM.leftStick
+       } : {
+         move: MM.leftStick,
+         look: MM.rightStick
+       },
+       nM = (MM, rM) => {
+         const iM = (0, OM.i)(MM, rM),
+           SM = Math.min(1, Math.hypot(iM.x, iM.y));
+         return {
+           magnitude: SM,
+           speed: Math.min(1, SM / .8),
+           headingOffset: 0 === SM ? 0 : Math.atan2(iM.x, -iM.y),
+           x: iM.x,
+ ... (1 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L448-L465` → after: `L602-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L602-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L602-L637) · [Before (L448-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L448-L465)

```diff
-         return null
-       }
-     }, new vG.b];
- 
-     function cG(GG, bG, ZG, wG, SG) {
-       let LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       for (const yG of aG)
-         if (yG.handles(SG)) return yG.shape(GG, bG, ZG, wG, SG, LG);
-       return SG
-     }
- 
-     function lG(GG) {
-       for (const wG of aG) {
-         var bG, ZG;
-         if (wG.handles(GG)) return null !== (bG = null === (ZG = wG.placedBy) || void 0 === ZG ? void 0 : ZG.call(wG, GG)) && void 0 !== bG ? bG : null
-       }
- ... (2 more removed lines; see GitHub link above)
+       },
+       QM = (MM, rM) => {
+         let {
+           sprintPressed: iM,
+           magnitude: OM,
+           autoSprint: SM,
+           nowMs: jM
+         } = rM;
+         const aM = iM ? jM : MM.latchedAtMs,
+           PM = (MM => {
+             let {
+               running: rM,
+               magnitude: iM,
+               sprintPressed: OM,
+               autoSprint: SM
+             } = MM;
+ ... (20 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L467` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L639) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L467)

```diff
-   38829: (GG, bG, ZG) => {
+   41665: (MM, rM, iM) => {
```

#### 33. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L471` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L642) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L471)

```diff
-       g: () => zG
+       e: () => OM
```

#### 34. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L473-L554` → after: `L644-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L644-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L644-L665) · [Before (L473-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L473-L554)

```diff
-     var wG = ZG(9249),
-       SG = ZG(9280),
-       LG = ZG(9341),
-       yG = ZG(38837),
-       kG = ZG(9334);
-     const UG = (0, yG.E)("pipe"),
-       YG = (0, yG.E)("tank"),
-       VG = (0, yG.E)("port"),
-       pG = "Reactor Port";
- 
-     function fG(GG, bG, ZG) {
-       const wG = new Set([LG.f, LG.e, pG, ...bG, ...ZG, ...GG ? [yG.g] : []]);
-       return {
-         makers: new Set(bG),
-         roots: wG
-       }
- ... (66 more removed lines; see GitHub link above)
+     const OM = MM => {
+       let {
+         mode: rM,
+         sneakHeld: iM,
+         sneakPressed: OM,
+         sneakTogglePressed: SM,
+         descending: jM,
+         canCrouch: aM,
+         toggled: PM
+       } = MM;
+       return aM ? jM ? {
+         crouchHeld: iM,
+         toggled: !1
+       } : "hold" === rM ? {
+         crouchHeld: iM,
+         toggled: SM ? !PM : PM
+ ... (6 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L556-L574` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L667) · [Before (L556-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L556-L574)

```diff
-       return oG.get(GG)
-     }
-     const uG = new Map(Array.from({
-       length: LG.j + 1
-     }, ((GG, bG) => [(0, LG.q)(bG), bG])));
- 
-     function iG(GG, bG, ZG, SG, LG, yG) {
-       return dG.some(((kG, UG) => {
-         var YG, VG, pG;
-         let [fG, QG, KG] = kG;
-         if (0 === (yG >> UG & 1)) return !1;
-         const hG = null !== (YG = null === (VG = wG.l[GG(bG + fG, ZG + QG, SG + KG)]) || void 0 === VG ? void 0 : VG.name) && void 0 !== YG ? YG : "",
-           dG = XG(hG);
-         return dG ? dG.UQ === LG && dG.full : (null !== (pG = function(GG) {
-           var bG;
-           return null !== (bG = uG.get(GG)) && void 0 !== bG ? bG : null
- ... (3 more removed lines; see GitHub link above)
+     };
```

#### 36. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L577-L613` → after: `L670-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L670-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L670-L682) · [Before (L577-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L577-L613)

```diff
-         this.reshapeOffsets = dG
-       }
-       handles(GG) {
-         return null !== EG(GG)
-       }
-       affects(GG) {
-         var bG, ZG;
-         return KG.has(null !== (bG = null === (ZG = wG.l[GG]) || void 0 === ZG ? void 0 : ZG.meta.rootName) && void 0 !== bG ? bG : "")
-       }
-       placedBy(GG) {
-         var bG;
-         return (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta.rootName) === LG.e ? LG.f : null
-       }
-       shape(GG, bG, ZG, SG, kG, YG) {
-         var VG, pG, fG;
-         const QG = null !== (VG = null === (pG = wG.l[kG]) || void 0 === pG ? void 0 : pG.name) && void 0 !== VG ? VG : "",
- ... (21 more removed lines; see GitHub link above)
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(MM, rM) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = rM, this.graceEndsMs = rM + 500);
+         const iM = rM < this.graceEndsMs;
+         return iM && (MM.sneakPressed || MM.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, rM + 300))), MM.sneakHeld ? iM && MM.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: MM.sneakHeld && !this.ignoringHeld,
+           sneakPressed: MM.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: MM.sneakTogglePressed && !iM
+         }
```

#### 37. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L617` → after: `L686-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L686-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L686-L689) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L617)

```diff
-   38602: (GG, bG, ZG) => {
+   41640: (MM, rM, iM) => {
+     iM(9451)
+   },
+   41642: (MM, rM, iM) => {
```

#### 38. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L619-L620` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L691) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L619-L620)

```diff
-       c: () => wG,
-       f: () => LG
+       c: () => EM
```

#### 39. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L622-L634` → after: `L693-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L693-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L693-L716) · [Before (L622-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L622-L634)

```diff
-     const wG = ["Chest", "Loot Chest", "Moonstone Chest"],
-       SG = [{
-         name: "Workbench",
-         exactMatch: !0
-       }, {
-         name: "Furnace",
-         exactMatch: !0
-       }, {
-         name: "Artisan Bench",
-         exactMatch: !0
-       }, {
-         name: "Potion Table",
-         exactMatch: !0
+     var OM = iM(22),
+       SM = iM(9383),
+       jM = iM(9400),
+       aM = iM(8731),
+       PM = iM(8776),
+       nM = iM(8743),
+       QM = iM(41650),
+       zM = iM(41652),
+       LM = iM(8792),
+       mM = iM(8723),
+       HM = iM(9324),
+       hM = iM(9408);
+     const JM = [{
+         isOpen: SM.i,
+         openButton: () => (0, aM.m)("emoteWheel"),
+         aim: MM => {
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L636-L637` → after: `L718-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L718-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L718-L729) · [Before (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L636-L637)

```diff
-         name: "Salvaging Table",
-         exactMatch: !0
+         isOpen: HM.c,
+         openButton: () => (0, aM.m)("chat"),
+         aim: MM => {
+           OM.i.Tz(HM.e, MM)
+         },
+         commit: MM => {
+           OM.i.Tz(HM.j, MM)
+         },
+         close: () => {
+           OM.i.Tz(HM.h)
+         },
+         keptOpenBy: [zM.c]
```

#### 41. `bundles/bloxd.io/chunks/js/247.js` (Changed code · before: `L639-L645` → after: `L731-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879fR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c8d33ebed70b48d9580e9e2cead5b33fa82349d4c4454f137724c246d6c9879f) · [After (L731-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/247.js#L731-L780) · [Before (L639-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/247.js#L639-L645)

```diff
-         name: "Enchanting Table",
-         exactMatch: !1
-       }];
- 
-     function LG(GG) {
-       return SG.find((bG => bG.exactMatch ? GG === bG.name : GG.includes(bG.name)))
-     }
+         isOpen: hM.s,
+         openButton: () => (0, aM.m)("actionButton"),
+         aim: MM => {
+           OM.i.Tz(hM.b, MM)
+         },
+         commit: MM => {
+           OM.i.Tz(hM.j, MM)
+         },
+         close: () => {
+           OM.i.Tz(hM.f)
+         }
+       }],
+       dM = () => {
+         var MM;
+         return null !== (MM = JM.find((MM => MM.isOpen()))) && void 0 !== MM ? MM : null
+       },
+ ... (34 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/248.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/248.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6)

#### 1. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L12` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L4) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4-L12)

```diff
-   39519: (GG, bG, ZG) => {
-     function wG(GG) {
-       return !(!GG.lobbyLeaderboardInfo && !GG.lobbyManage)
-     }
-     ZG.d(bG, {
-       b: () => wG
-     })
-   },
-   39423: (GG, bG, ZG) => {
+   39471: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L14` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L6) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L14)

```diff
-       b: () => LG
+       d: () => hM
```

#### 3. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L16-L115` → after: `L8-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L8-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L8-L115) · [Before (L16-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L16-L115)

```diff
-     var wG = ZG(19),
-       SG = ZG(1923);
- 
-     function LG(GG) {
-       let {
-         taskId: bG,
-         progress: ZG
-       } = GG;
-       const wG = SG.c.get("_tasks");
-       null !== wG && void 0 !== wG && wG[bG] && SG.c.apply({
-         _tasks: {
-           ...wG,
-           [bG]: {
-             ...wG[bG],
-             progress: ZG
-           }
- ... (84 more removed lines; see GitHub link above)
+     var OM = iM(181),
+       SM = iM(38623);
+     const jM = 1.2,
+       aM = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         vz: .5,
+ ... (92 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L117-L150` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L117-L119) · [Before (L117-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L117-L150)

```diff
-           finishRegistration: () => {
-             if (this.pK) throw new Error("Cannot finish message registration after disposal");
-             this.qYG = !0, this.DYG()
-           }
-         }
-       }
-       OJ(GG, bG) {
-         var ZG, wG;
-         null === (ZG = (wG = this.callbacks).OYG) || void 0 === ZG || ZG.call(wG);
-         const SG = fG.get(this);
-         for (; GG > SG.length;) SG[SG.length] = null;
-         SG[GG] = bG
-       }
-       send(GG, bG) {
-         this.xYG(), (0, pG.E)(bG) ? this.eZG.Im(GG, bG) : this.eZG.send(GG, bG)
-       }
- ... (18 more removed lines; see GitHub link above)
+           hitBoxDimensions: {
+             width: OM.f.Sy + .4,
+             height: OM.f.jy + .6
```

#### 5. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L152-L1211` → after: `L121-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L121-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L121-L128) · [Before (L152-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L152-L1211)

```diff
-           tYG: (GG, bG) => {
-             var ZG;
-             null === (ZG = (0, UG.i)()) || void 0 === ZG || ZG.Jh(GG, bG)
-           }
-         }, {
-           sYG: !1
-         }), (0, hG.g)(GG)
-       }
-       Qm(GG, bG) {
-         return !!(0, hG.n)((0, hG.d)(), this.eZG, GG, bG) && (this.xYG(), !0)
-       }
-       TYG(GG) {
-         this.BYG(), super.TYG(GG), (0, hG.g)(GG)
-       }
-       KJ() {
-         super.KJ(), this.BYG()
- ... (1044 more removed lines; see GitHub link above)
+           eyeHeight: OM.f.jy * OM.f.playerEyeToHeightRatio,
+           rideHeight: OM.f.jy - .1,
+           vz: SM.g.vz,
+           WrM: !0
+         },
+         Pig: {
+           poseNameRise: {
+             sitting: 1.4
```

#### 6. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1213-L1214` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L130-L132) · [Before (L1213-L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L1213-L1214)

```diff
-           onGaveUp: (GG, bG) => {
-             wG.onGaveUp(GG, bG)
+           physicsBodyDimensions: {
+             width: .5,
+             height: .8
```

#### 7. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1216-L1458` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L134-L136) · [Before (L1216-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L1216-L1458)

```diff
-           freeze: bG,
-           releaseSeat: bG => {
-             GG(bG).then((GG => {
-               GG.leave(!0)
-             }), (GG => {
-               console.warn("Couldn't release the held seat of a game left while reconnecting", GG)
-             }))
-           }
-         })
-       }
-       onInitialInfo(GG, bG) {
-         this.session.onInitialInfo(GG, bG)
-       }
-       isResuming() {
-         return this.session.isResuming()
-       }
- ... (227 more removed lines; see GitHub link above)
+           hitBoxDimensions: {
+             width: 1.5,
+             height: 1.2
```

#### 8. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1460-L1533` → after: `L138-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L138-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L138-L215) · [Before (L1460-L1533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L1460-L1533)

```diff
-           canReconnect: !GG,
-           canPlayAgain: GG,
-           requiresRefresh: !1,
-           automaticallyReconnect: !1
-         }), (0, Qb.navigatePreserveSearch)("/")
-       }
-       sinceJoined() {
-         return null === this.joinedAt ? "" : (0, lb.d)(performance.now() - this.joinedAt)
-       }
-       onRoomLeft(GG, bG) {
-         var ZG;
-         if (GG === LG.b.gameOrPluginKick.code) return;
-         if (console.log(`Left room with code ${GG}`), GG === LG.b.serverUpdating.code) return (0, vb.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, UG.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
-         this.wf.Jh(`Kicked from server with code ${GG}`, new Error);
-         const wG = Object.keys(LG.b).find((bG => LG.b[bG].code === GG));
-         (0, vb.reportClientError)("disconnect", "Left room", null !== wG && void 0 !== wG ? wG : String(GG));
- ... (58 more removed lines; see GitHub link above)
+           eyeHeight: .8,
+           rideHeight: .5,
+           vz: .5,
+           WrM: !1
+         },
+         Cow: {
+           physicsBodyDimensions: {
+             width: .5,
+             height: 1.1
+           },
+           hitBoxDimensions: {
+             width: 1.6,
+             height: 1.4
+           },
+           eyeHeight: 1.2,
+           rideHeight: 1,
+ ... (62 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L1535-L2100` → after: `L217-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L217-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L217-L381) · [Before (L1535-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L1535-L2100)

```diff
-           game: this.gameNameWithVariation,
-           ...(0, lb.k)()
-         })
-       }
-     }
-   },
-   39353: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => HZ,
-       g: () => BZ
-     });
-     var wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, lG, jG, PG, MG, AG, sG, qG, nG, gG, eG, RG, TG, HG, tG, DG, NG, OG, xG, BG, Gb, bb, Zb, wb, Sb, Lb, yb, kb, Ub, Yb, Vb, pb, fb, Qb, Kb, hb, db, Jb, rb,  … [truncated]
-       Bb = ZG(37500),
-       GZ = ZG(39368),
-       bZ = ZG(39376),
-       ZZ = ZG(9157),
- ... (550 more removed lines; see GitHub link above)
+           defaultPose: "zombie"
+         },
+         "Draugr Skeleton": nM,
+         "Frost Golem": aM,
+         "Frost Zombie": {
+           ...nM,
+           defaultPose: "zombie"
+         },
+         "Frost Skeleton": nM,
+         "Draugr Knight": {
+           physicsBodyDimensions: {
+             width: OM.f.Sy,
+             height: OM.f.jy
+           },
+           hitBoxDimensions: {
+             width: OM.f.Sy + .4,
+ ... (149 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2102-L2103` → after: `L383-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L383-L385) · [Before (L2102-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L2102-L2103)

```diff
-           removeMeshComponent: () => {
-             "Person" !== kG && "BloxdBlock" !== kG || SG.YM(this.eId, "rigAnimation"), SG.YM(this.eId, SG.names.mesh), SG.SbG(this.eId, SG.names.meshAttachments) && SG.YM(this.eId, SG.names.meshAttachments), SG.YM(this.eId, "entityName"), SG.YM(this.eId, "autoRotate"), SG.YM(this … [truncated]
+           hitBoxDimensions: {
+             width: .5,
+             height: 2.5
```

#### 11. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2105-L2968` → after: `L387-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L387-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L387-L390) · [Before (L2105-L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L2105-L2968)

```diff
-           hideDist: null !== (bG = UG.hideDist) && void 0 !== bG ? bG : 80,
-           movingHideDist: null !== (ZG = UG.hideDist) && void 0 !== ZG ? ZG : 120,
-           displayOutsideLoadedChunk: UG.hideDist > 100,
-           immediatelyUpdate: !0,
-           bU: "BloxdBlock" === kG ? UG.blockName : kG
-         })
-       }
-       queueMeshRebuild() {
-         this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
-           this.meshRebuildQueued = !1, this.pK || this.updateHidingMeshMgr()
-         })))
-       }
-       getSpec() {
-         return (0, rZ.e)({
-           meshKind: this.meshKind,
-           meshOpts: this.meshOpts
- ... (848 more removed lines; see GitHub link above)
+           eyeHeight: 1.5,
+           rideHeight: 2,
+           vz: .5,
+           WrM: !1
```

#### 12. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2970-L2983` → after: `L392-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L392-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L392-L404) · [Before (L2970-L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L2970-L2983)

```diff
-         oG = (GG, ZG) => {
-           ZG && eb(QG.d.TouchDownFirePrimary), GG ? AG() : ((0, lG.f)(), bG().ywG()), ZG || eb(QG.d.DownFirePrimary), gb(!0), yG.click();
-           const SG = yG.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
-             LG = yG.getMaxClickSeparationInMs(1e4) < 20,
-             kG = yG.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
-           if (SG || LG || kG) {
-             let GG;
-             if (SG) GG = 30;
-             else if (LG) GG = 50;
-             else {
-               if (!kG) throw new Error("???");
-               GG = 70
-             }(0, wG.sendColyMessage)(VG.Gj, GG)
-           }
+         "Desert Fennec": {
+           physicsBodyDimensions: {
+             width: .4,
+             height: .8
+           },
+           hitBoxDimensions: {
+             width: .8,
+             height: .8
+           },
+           eyeHeight: .65,
+           rideHeight: .6,
+           vz: .5,
+           WrM: !1
```

#### 13. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L2985-L3000` → after: `L406-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L406-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L406-L418) · [Before (L2985-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L2985-L3000)

```diff
-         vG = new gG.b,
-         aG = rG((() => {
-           gG.b.stopRunning();
-           const GG = Date.now() - fG;
-           pG.registerClickDownDuration(GG), bG().wwG(), eb(QG.d.UpFirePrimary), gb(!1);
-           const ZG = pG.clickDownDurationsCheck(4e4);
-           (0, wG.sendColyMessage)(VG.cg, ZG)
-         }));
-       let cG = 0;
-       GG.inputs.down.on("primary-fire", (function(GG) {
-         cG = aG.press(), aG.owns(cG) && (fG = Date.now(), Math.abs(performance.now() - GG.timeStamp) > 5e3 || (oG(GG.altKey, "changedTouches" in GG), Kb(GG)))
-       })), GG.inputs.up.on("primary-fire", (function(GG) {
-         aG.release(cG) && Kb(GG, !0)
-       }));
-       const jG = () => {
-           bG().lYG(), eb(QG.d.DownFireSecondary), gb(!0), GG.RGG && !GG.RGG.position && (0, YG.e)()
+         "Armour Collector": {
+           physicsBodyDimensions: {
+             width: 1,
+             height: 3.5
+           },
+           hitBoxDimensions: {
+             width: 2,
+             height: 3.7
+           },
+           eyeHeight: 3.1,
+           rideHeight: 3.6,
+           vz: .5,
+           WrM: !1
```

#### 14. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3002-L3016` → after: `L420-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L420-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L420-L432) · [Before (L3002-L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3002-L3016)

```diff
-         PG = rG((() => {
-           bG().ZwG(), eb(QG.d.UpFireSecondary), gb(!1)
-         }));
-       let MG = 0;
-       GG.inputs.down.on("alt-fire", (function(GG) {
-         MG = PG.press(), PG.owns(MG) && (jG(), Kb(GG))
-       })), GG.inputs.up.on("alt-fire", (function(GG) {
-         PG.release(MG) && Kb(GG, !0)
-       }));
-       const AG = () => bG().AYG();
-       GG.inputs.down.on("mid-fire", (() => {
-         (0, nG.e)() || AG()
-       }));
-       const TG = GG => {
-           (0, wG.sendColyMessage)(VG.jh, GG, !0)
+         "Furnace Knight": {
+           physicsBodyDimensions: {
+             width: .8,
+             height: 2.4
+           },
+           hitBoxDimensions: {
+             width: 1.6,
+             height: 2.5
+           },
+           eyeHeight: 2,
+           rideHeight: 2.45,
+           vz: .5,
+           WrM: !1
```

#### 15. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3018-L3141` → after: `L434-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L434-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L434-L437) · [Before (L3018-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3018-L3141)

```diff
-         kb = GG => {
-           (0, wG.sendColyMessage)(VG.kh, {
-             mk: GG,
-             Ik: Vb()
-           }, !0)
-         };
-       for (const wG of ["SpecialAction1", "SpecialAction2"]) GG.inputs.down.on(wG, (() => {
-         TG(wG)
-       })), GG.inputs.up.on(wG, (() => {
-         kb(wG)
-       }));
-       const Yb = () => {
-         const GG = bG();
-         GG.isGun() && GG.reload(Date.now())
-       };
-       GG.inputs.down.on("ReloadGun", Yb);
- ... (108 more removed lines; see GitHub link above)
+         "Lil Knight": {
+           physicsBodyDimensions: {
+             width: .8,
+             height: 2.4
```

#### 16. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3143-L3158` → after: `L439-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L439-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L439-L446) · [Before (L3143-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3143-L3158)

```diff
-           projectWorldPosToScreenPos: Eb,
-           projectWorldPosToViewport: ob
-         })
-       })), GG.camera.XF = (0, xG.startLookDebug)("js"), GG.inputs.jF = xG.noteLookDroppedCopy, (0, OG.m)("remesh") && (0, bb.i)(GG), GG.on("beforeInputs", (() => {
-         if ((0, CG.c)()) return GG.inputs.pD.dx = 0, void(GG.inputs.pD.dy = 0);
-         if (GG.camera.pD.dx += GG.inputs.pD.dx, GG.camera.pD.dy += GG.inputs.pD.dy, 0 !== GG.inputs.pD.dx || 0 !== GG.inputs.pD.dy) {
-           GG.Hr.getState(GG.sA, "playerCameraAdjustment").lastPointerMove = Date.now()
-         }
-         GG.inputs.pD.dx = 0, GG.inputs.pD.dy = 0
-       }));
-       let ib = 0;
-       const Cb = [0, 0, 0],
-         Wb = [0, 0, 0],
-         mb = {
-           base: Cb,
-           max: Wb
+           hitBoxDimensions: {
+             width: 1.6,
+             height: 2.55
+           },
+           eyeHeight: 2,
+           rideHeight: 2.5,
+           vz: .5,
+           WrM: !1
```

#### 17. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3160-L3246` → after: `L448-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L448-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L448-L605) · [Before (L3160-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3160-L3246)

```diff
-         Ib = GG => {
-           const bG = qG.d.droppedBlockSize / 2;
-           return [0, 1, 2].every((ZG => GG[ZG] >= Cb[ZG] - bG && GG[ZG] <= Wb[ZG] + bG))
-         };
-       GG.on("Tp", (function(bG) {
-         hG.l.xh("noaTick", bG);
-         const ZG = (0, mG.e)().client;
-         if (ZG.triggerGameCallback("Tp", bG), ZG.isClientGameSessionActive()) try {
-           UG.e.Tp(bG)
-         } catch (yG) {
-           console.error("Error ticking audio entities", yG)
-         }
-         if (!GG.Hr.kZG(GG.sA).isAlive) return;
-         Date.now() - ib > 9e3 && (! function() {
-           const GG = (0, mG.i)();
-           "number" === typeof GG.Qr.speedMultiplier && "number" === typeof GG.Qr.jumpAmount && (0, wG.sendColyMessage)(VG.Ih, {
- ... (71 more removed lines; see GitHub link above)
+         "Glass Gremlin": {
+           physicsBodyDimensions: {
+             width: .6,
+             height: 2.5
+           },
+           hitBoxDimensions: {
+             width: 1,
+             height: 2.6
+           },
+           eyeHeight: 2.2,
+           rideHeight: 2.55,
+           vz: .5,
+           WrM: !1
+         },
+         "Glass Bro": {
+           physicsBodyDimensions: {
+ ... (142 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3248-L3251` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L607) · [Before (L3248-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3248-L3251)

```diff
-       })), dG.c.subscribe("droppedItemScale", (GG => {
-         Ub = "number" === typeof GG && isFinite(GG) ? GG : yb
-       }))
-     }
+       };
```

#### 19. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3253-L3259` → after: `L609-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L609-L610) · [Before (L3253-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3253-L3259)

```diff
-     function lb() {
-       const GG = (0, mG.i)();
-       if (GG)
-         for (const bG in zG.B) {
-           GG.inputs.unbind(bG);
-           for (const ZG of zG.B[bG]) GG.inputs.bind(bG, ZG)
-         }
+     function hM(MM) {
+       return HM[MM]
```

#### 20. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3261-L3284` → after: `L612-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L612-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L612-L716) · [Before (L3261-L3284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3261-L3284)

```diff
-     ab(Jb = {}, rb = ["!rJz9NUuvxD/@jMr>QH", "08WDC8`NCvF_{rzPf$*z$6wVn3xOp,^:c&l006>&gx^Gp>[P+yH", "(3Ul+|sm[3dl;?w=i(Z8p?r;;V28b9W:yVt", "=W82Z>VCYsPj|[WXLpX,BG^BN(_29{?s_c[XGWOhRphiY[u}e5!,J7mj0>yyt", "Xrli>j7bvjB^Q^JXKln$P%phjYf3U9,[@:8W1", '&LUia0#WHcAX.egP`|3iU|S=@ces{JZs#W … [truncated]
-       ab(GG[Wb[13]] = Wb[1], GG[Wb[16]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], GG[Wb[2]] = Wb[19], GG[-Wb[14]] = []);
-       try {
-         ab(GG[Wb[2]] = Object, GG[-Wb[14]][Wb[25]]("".__proto__.constructor.name))
-       } catch (rb) {}
-       GG: for (GG[Wb[15]] = Wb[1]; GG[Wb[15]] < GG[Wb[16]][Wb[13]]; GG[Wb[15]]++) try {
-         for (GG[Wb[2]] = GG[Wb[16]][GG[Wb[15]]](), GG[Wb[17]] = Wb[1]; GG[Wb[17]] < GG[-Wb[14]][Wb[13]]; GG[Wb[17]]++)
-           if (typeof GG[Wb[2]][GG[-Wb[14]][GG[Wb[17]]]] === Wb[18]) continue GG;
- ... (8 more removed lines; see GitHub link above)
+   },
+   38005: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => OM
+     });
+     const OM = {
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
+ ... (89 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3286-L3302` → after: `L718-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L718-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L718-L733) · [Before (L3286-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3286-L3302)

```diff
-     }()), ab(db = (...GG) => {
-       ab(GG[Wb[13]] = Wb[2], GG[-Wb[27]] = Wb[1]);
-       for (const bG in GG[Wb[1]]) GG[-Wb[27]]++;
-       return GG[-Wb[27]]
-     }, hb = () => {
-       if (Yb++ === Wb[40]) {
-         function GG(...GG) {
-           for (ab(GG[Wb[13]] = Wb[2], GG[Wb[2]] = 'GMD>%|uoHa[lh6v4Qew]#p9:n/x(y,KdFf~kz}E0172Vq=.@+rA35{BsYgUNb*_OJT;$`tXC!?<m"i)P8^&ScLIWZRj', GG[-Wb[28]] = "" + (GG[Wb[1]] || ""), GG[Wb[20]] = GG[-Wb[28]].length, GG[Wb[36]] = [], GG[Wb[15]] = Wb[1], GG[Wb[31]] = Wb[1], GG[Wb[3 … [truncated]
-             if (GG[Wb[29]] = GG[Wb[2]].indexOf(GG[-Wb[28]][GG[Wb[11]]]), GG[Wb[29]] !== -Wb[2])
-               if (GG[Wb[30]] < Wb[1]) GG[Wb[30]] = GG[Wb[29]];
-               else {
-                 ab(GG[Wb[30]] += GG[Wb[29]] * Wb[28], GG[Wb[15]] |= GG[Wb[30]] << GG[Wb[31]], GG[Wb[31]] += (GG[Wb[30]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
-                 do {
-                   ab(GG[Wb[36]].push(GG[Wb[15]] & Wb[12]), GG[Wb[15]] >>= Wb[11], GG[Wb[31]] -= Wb[11])
-                 } while (GG[Wb[31]] > Wb[7]);
-                 GG[Wb[30]] = -Wb[2]
- ... (1 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 22. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3304-L3306` → after: `L735-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L735-L744) · [Before (L3304-L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3304-L3306)

```diff
- 
-         function bG(...bG) {
-           return bG[Wb[13]] = Wb[2], typeof Jb[bG[Wb[1]]] === Wb[18] ? Jb[bG[Wb[1]]] = GG(rb[bG[Wb[1]]]) : Jb[bG[Wb[1]]]
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
```

#### 23. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3309-L3441` → after: `L788-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L788-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L788-L801) · [Before (L3309-L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3309-L3441)

```diff
-         function ZG(...GG) {
-           ab(GG[Wb[13]] = Wb[1], GG[Wb[26]] = function(...GG) {
-             function bG(...GG) {
-               return GG[Wb[13]] = Wb[37], LG(wG(yG(GG[Wb[1]]), yG(GG[Wb[2]])))
-             }
- 
-             function ZG(...GG) {
-               return GG[Wb[13]] = Wb[4],
-                 function(...GG) {
-                   var bG, ZG, wG, SG;
-                   for (ab(GG[Wb[13]] = Wb[37], GG[Wb[60]] = GG[Wb[2]].length, GG[Wb[4]] = Array()), GG[Wb[51]] = Array(Math.ceil(GG[Wb[1]].length / Wb[37])), bG = Wb[1]; bG < GG[Wb[51]].length; bG++) GG[Wb[51]][bG] = GG[Wb[1]].charCodeAt(bG * Wb[37]) << Wb[11] | GG[Wb[1]].charCod … [truncated]
-                   for (; GG[Wb[51]].length > Wb[1];) {
-                     for (ab(SG = Array(), wG = Wb[1]), bG = Wb[1]; bG < GG[Wb[51]].length; bG++) ab(wG = (wG << Wb[44]) + GG[Wb[51]][bG], ZG = Math.floor(wG / GG[Wb[60]]), wG -= ZG * GG[Wb[60]]), (SG.length > Wb[1] || ZG > Wb[1]) && (SG[SG.length] = ZG);
-                     ab(GG[Wb[4]][GG[Wb[4]].length] = wG, GG[Wb[51]] = SG)
-                   }
-                   for (GG[Wb[40]] = "", bG = GG[Wb[4]].length - Wb[2]; bG >= Wb[1]; bG--) GG[Wb[40]] += GG[Wb[2]].charAt(GG[Wb[4]][bG]);
- ... (117 more removed lines; see GitHub link above)
+     function yM(...MM) {
+       return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
+         for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = '1@8"=]$}/w4?3vaC+hHkLBm{|%YuI`ZVWje!5tAoE*nXpb6#dD;G.FlT>yQNJs&9K<2,fcU):Pxi7MRgr_z(0qO[^~S', MM[dM[0]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[0]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[-dM[9]] = dM[1], MM[dM[7]] = -dM … [truncated]
+           if (MM[dM[6]] = MM[dM[5]].indexOf(MM[dM[0]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
+             if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[6]];
+             else {
+               RM(MM[dM[7]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[-dM[9]], MM[-dM[9]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+               do {
+                 RM(MM[dM[10]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[-dM[9]] -= dM[3])
+               } while (MM[-dM[9]] > dM[7]);
+               MM[dM[7]] = -dM[2]
+             } return MM[dM[7]] > -dM[2] && MM[dM[10]].push((MM[dM[8]] | MM[dM[7]] << MM[-dM[9]]) & dM[11]), lM(MM[dM[10]])
+       }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
+     }
```

#### 24. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3443-L3445` → after: `L803-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L803-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L803-L805) · [Before (L3443-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3443-L3445)

```diff
-             function hG(...GG) {
-               return GG[Wb[13]] = Wb[2], YG(GG[Wb[1]], Wb[7]) ^ YG(GG[Wb[1]], Wb[63]) ^ VG(GG[Wb[1]], Wb[4])
-             }
+     function lM(...MM) {
+       return MM[dM[12]] = dM[2], typeof zM !== dM[13] && zM ? (new zM).decode(new LM(MM[dM[1]])) : typeof mM !== dM[13] && mM ? mM.from(MM[dM[1]]).toString("utf-8") : JM(MM[dM[1]])
+     }
```

#### 25. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3447-L3449` → after: `L807-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L807-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L807-L809) · [Before (L3447-L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3447-L3449)

```diff
-             function dG(...GG) {
-               return GG[Wb[13]] = Wb[2], YG(GG[Wb[1]], 17) ^ YG(GG[Wb[1]], Wb[67]) ^ VG(GG[Wb[1]], Wb[66])
-             }
+     function EM(...MM) {
+       if (MM[dM[12]] = dM[23], MM[dM[1]] === yM(109)) return MM[dM[2]] + MM[dM[0]]
+     }
```

#### 26. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3451-L3458` → after: `L811-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L811-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L811-L867) · [Before (L3451-L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3451-L3458)

```diff
-             function JG(...bG) {
-               var ZG, wG, SG, LG, yG, kG, UG, YG, VG, JG, zG, EG;
-               for (ab(bG[Wb[13]] = Wb[37], bG[Wb[26]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), bG[Wb[0]] = new Array(Wb[38])), ab(bG[Wb[1]][bG[Wb[2]] >> Wb[40]] |= Wb[39] << Wb[65] - bG[Wb[2]] % Wb[45], bG[Wb[1 … [truncated]
-                 for (ab(ZG = bG[Wb[26]][Wb[1]], wG = bG[Wb[26]][Wb[2]], SG = bG[Wb[26]][Wb[37]], LG = bG[Wb[26]][Wb[4]], yG = bG[Wb[26]][Wb[51]], kG = bG[Wb[26]][Wb[40]], UG = bG[Wb[26]][Wb[9]], YG = bG[Wb[26]][Wb[7]]), JG = Wb[1]; JG < Wb[38]; JG++) ab(bG[Wb[0]][JG] = JG < Wb[44 … [truncated]
-                 ab(bG[Wb[26]][Wb[1]] = rG(ZG, bG[Wb[26]][Wb[1]]), bG[Wb[26]][Wb[2]] = rG(wG, bG[Wb[26]][Wb[2]]), bG[Wb[26]][Wb[37]] = rG(SG, bG[Wb[26]][Wb[37]]), bG[Wb[26]][Wb[4]] = rG(LG, bG[Wb[26]][Wb[4]]), bG[Wb[26]][Wb[51]] = rG(yG, bG[Wb[26]][Wb[51]]), bG[Wb[26]][Wb[40]] = r … [truncated]
-               }
-               return bG[Wb[26]]
-             }
+     function UM() {}
+     RM(PM = {}, nM = ['?D{Phci}ew"g(NLEat;/', ".elVDf0|5ljg1u/k*E;:;z{`]KZ}S_qEd$g.L", 'P{IxB;F}%L=g%]xoMfbIKd#vky/uQD^Iz"KPgT+/X&PD$][mlbaVBNL8', 'K"3`SyF@~&0;_5J5~PG/Pg]_83:IX8', "!Gw:<Fw_JaM>Vzhuz$,]_71Q&H[`D:<{[<1uwJY56Ca:?)]VAx&.9Q63=wl", "*3.`DM*qMFcIzD%IclXxJM@FFKZg.+bYwfY … [truncated]
+       var MM, rM, iM, OM = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }];
+       RM(MM = void 0, rM = []);
+       try {
+         RM(MM = Object, rM[dM[22]]("".__proto__.constructor.name))
+       } catch (LM) {}
+       MM: for (iM = dM[1]; iM < OM[dM[12]]; iM++) try {
+ ... (41 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3460-L3481` → after: `L869-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L869-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L869-L872) · [Before (L3460-L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3460-L3481)

```diff
-             function rG(...GG) {
-               return ab(GG[Wb[13]] = Wb[37], GG[Wb[37]] = (GG[Wb[1]] & Wb[69]) + (GG[Wb[2]] & Wb[69]), GG[-Wb[14]] = (GG[Wb[1]] >> Wb[44]) + (GG[Wb[2]] >> Wb[44]) + (GG[Wb[37]] >> Wb[44])), GG[-Wb[14]] << Wb[44] | GG[Wb[37]] & Wb[69]
-             }
-             return ab(GG[Wb[13]] = Wb[1], GG[-Wb[52]] = Wb[1], GG[Wb[17]] = ""), GG[Wb[68]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168007 … [truncated]
-               hex: function(...GG) {
-                 return GG[Wb[13]] = Wb[2], SG(function(...GG) {
-                   return GG[Wb[13]] = Wb[2], UG(JG(kG(GG[Wb[1]]), GG[Wb[1]].length * Wb[11]))
-                 }(yG(GG[Wb[1]])))
-               },
-               b64: bG,
-               any: ZG,
-               hex_hmac: function(...GG) {
-                 return GG[Wb[13]] = Wb[37], SG(wG(yG(GG[Wb[1]]), yG(GG[Wb[2]])))
-               },
-               b64_hmac: bG,
-               any_hmac: ZG
- ... (6 more removed lines; see GitHub link above)
+     function RM() {
+       RM = function() {}
+     }
+     aM = (...MM) => {
```

#### 28. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3483-L3486` → after: `L874-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L874-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L874-L877) · [Before (L3483-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3483-L3486)

```diff
-         return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = function(...GG) {
-           for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = 'p0ZTgfJtLDreRkUQqPEFHl8XSo":7x,=`%]<3&|?(}y4zw~/)+abhCYMI[2!_Bs5jm{G$>A^61K9NiWOV#v@*ud.cn;', GG[Wb[37]] = "" + (GG[Wb[1]] || ""), GG[Wb[20]] = GG[Wb[37]].length, GG[Wb[51]] = [], GG[-Wb[70]] = Wb[1], GG[Wb[71]] = Wb[1], GG[Wb[3 … [truncated]
-             if (GG[Wb[29]] = GG[Wb[26]].indexOf(GG[Wb[37]][GG[Wb[11]]]), GG[Wb[29]] !== -Wb[2])
-               if (GG[Wb[39]] < Wb[1]) GG[Wb[39]] = GG[Wb[29]];
+         return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
+           for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'H*$:?M[)p#!,m18e3V>TLRDuBa%fS<"+cE/X];@{vQs.G5=~0P7U4yYtICA&blZ`F9n2jKz_}NidW|^wJgrxq(6oOhk', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[35]].length, MM[dM[34]] = [], MM[dM[8]] = dM[1], MM[dM[36]] = dM[1], MM[dM[7]] = … [truncated]
+             if (MM[dM[27]] = MM[dM[5]].indexOf(MM[dM[35]][MM[dM[3]]]), MM[dM[27]] !== -dM[2])
+               if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[27]];
```

#### 29. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3488` → after: `L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L879) · [Before (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3488)

```diff
-                 ab(GG[Wb[39]] += GG[Wb[29]] * Wb[28], GG[-Wb[70]] |= GG[Wb[39]] << GG[Wb[71]], GG[Wb[71]] += (GG[Wb[39]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
+                 RM(MM[dM[7]] += MM[dM[27]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[dM[36]], MM[dM[36]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
```

#### 30. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3490-L3493` → after: `L881-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L881-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L881-L884) · [Before (L3490-L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3490-L3493)

```diff
-                   ab(GG[Wb[51]].push(GG[-Wb[70]] & Wb[12]), GG[-Wb[70]] >>= Wb[11], GG[Wb[71]] -= Wb[11])
-                 } while (GG[Wb[71]] > Wb[7]);
-                 GG[Wb[39]] = -Wb[2]
-               } return GG[Wb[39]] > -Wb[2] && GG[Wb[51]].push((GG[-Wb[70]] | GG[Wb[39]] << GG[Wb[71]]) & Wb[12]), Ib(GG[Wb[51]])
+                   RM(MM[dM[34]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[36]] -= dM[3])
+                 } while (MM[dM[36]] > dM[7]);
+                 MM[dM[7]] = -dM[2]
+               } return MM[dM[7]] > -dM[2] && MM[dM[34]].push((MM[dM[8]] | MM[dM[7]] << MM[dM[36]]) & dM[11]), lM(MM[dM[34]])
```

#### 31. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3496-L3514` → after: `L887-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L887-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L887-L894) · [Before (L3496-L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3496-L3514)

```diff
-       if (mb(Wb[84]) + "R" in vb && function(...GG) {
-           function bG(...GG) {
-             return GG[Wb[13]] = Wb[2], GG[Wb[1]][Wb[2]] * Wb[73] + (GG[Wb[1]][Wb[1]] < Wb[1] ? Wb[72] | GG[Wb[1]][Wb[1]] : GG[Wb[1]][Wb[1]])
-           }
- 
-           function ZG(...GG) {
-             switch (GG[Wb[13]] = Wb[2], ((GG[Wb[1]] & Wb[72]) !== Wb[1]) * Wb[2] + (GG[Wb[1]] < Wb[1]) * Wb[37]) {
-               case Wb[1]:
-                 return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])];
-               case Wb[2]:
-                 return [GG[Wb[1]] % Wb[72] - Wb[72], Math.trunc(GG[Wb[1]] / Wb[73]) + Wb[2]];
-               case Wb[37]:
-                 return [((GG[Wb[1]] + Wb[72]) % Wb[72] + Wb[72]) % Wb[72], Math.round(GG[Wb[1]] / Wb[73])];
-               case Wb[4]:
-                 return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])]
-             }
- ... (3 more removed lines; see GitHub link above)
+       MM[dM[12]] = dM[3];
+       const iM = MM[dM[1]][rM(dM[37])][rM(117) + rM(118) + rM(119)](MM[dM[2]]);
+       MM[dM[3]] = MM[dM[1]][rM(dM[37])][rM(dM[48]) + rM(dM[49]) + rM(dM[50]) + rM(dM[51])](iM);
+       const OM = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[39]) + rM(dM[40]) + rM(dM[41]) + dM[15]) : MM[dM[3]][rM(dM[39]) + rM(dM[40]) + rM(dM[41]) + dM[15]],
+         aM = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[45]) + rM(dM[46]) + rM(dM[47])) : MM[dM[3]][rM(dM[45]) + rM(dM[46]) + rM(dM[47])];
+       RM(SM()[rM(134)](GM, dM[1], dM[1], MM[dM[8]]), SM().Md(GM, GM, SM()[rM(135)], MM[dM[23]].heading), SM()[rM(136)](gM, MM[dM[34]].dd), gM[dM[2]] = dM[1]);
+       const QM = MM[dM[0]][rM(137) + rM(138)]();
+       if (RM(MM[dM[3]] = MM[dM[1]][rM(dM[37])][rM(dM[48]) + rM(dM[49]) + rM(dM[50]) + rM(dM[51])](iM), MM[dM[69]] = MM[dM[3]] === dM[24] ? MM[dM[1]][rM(dM[37])][rM(dM[42]) + rM(dM[43]) + rM(dM[44]) + rM(dM[38])](MM[dM[2]], rM(dM[52]) + rM(dM[53])) : MM[dM[3]][rM(dM[52]) + rM(dM[5 … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3516-L3518` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L896-L898) · [Before (L3516-L3518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3516-L3518)

```diff
-           for (ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = '$?!:*&u58+1>{,0(y/7#F|nY2cJ@ho]avj^VOC~Re6;B9"X`dp)}=z<HQAs4SUrN[fEtL_IklP.Kg3wDMqbWTx%ZGmi', GG[-Wb[77]] = "" + (GG[Wb[1]] || ""), GG[Wb[78]] = GG[-Wb[77]].length, GG[Wb[21]] = [], GG[Wb[15]] = Wb[1], GG[-Wb[79]] = Wb[1], GG[Wb … [truncated]
-             if (GG[Wb[47]] = GG[Wb[26]].indexOf(GG[-Wb[77]][GG[Wb[55]]]), GG[Wb[47]] !== -Wb[2])
-               if (GG[Wb[7]] < Wb[1]) GG[Wb[7]] = GG[Wb[47]];
+           for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'O9aUzm=lwpHkZA3D|7r*^Kc{Fn0P?NT!E1#4d8"QJuy`(gBV5><2.o}xLWC_i+~bv6S,&f:@Y$)]%/hs[Ij;GtReqXM', MM[-dM[58]] = "" + (MM[dM[1]] || ""), MM[dM[23]] = MM[-dM[58]].length, MM[-dM[61]] = [], MM[dM[8]] = dM[1], MM[dM[50]] = dM[1], MM[dM[6 … [truncated]
+             if (MM[dM[6]] = MM[dM[5]].indexOf(MM[-dM[58]][MM[dM[59]]]), MM[dM[6]] !== -dM[2])
+               if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
```

#### 33. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3520` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L900) · [Before (L3520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3520)

```diff
-                 ab(GG[Wb[7]] += GG[Wb[47]] * Wb[28], GG[Wb[15]] |= GG[Wb[7]] << GG[-Wb[79]], GG[-Wb[79]] += (GG[Wb[7]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
+                 RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[60]] << MM[dM[50]], MM[dM[50]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
```

#### 34. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3522-L3525` → after: `L902-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L902-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L902-L905) · [Before (L3522-L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3522-L3525)

```diff
-                   ab(GG[Wb[21]].push(GG[Wb[15]] & Wb[12]), GG[Wb[15]] >>= Wb[11], GG[-Wb[79]] -= Wb[11])
-                 } while (GG[-Wb[79]] > Wb[7]);
-                 GG[Wb[7]] = -Wb[2]
-               } return GG[Wb[7]] > -Wb[2] && GG[Wb[21]].push((GG[Wb[15]] | GG[Wb[7]] << GG[-Wb[79]]) & Wb[12]), Ib(GG[Wb[21]])
+                   RM(MM[-dM[61]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[50]] -= dM[3])
+                 } while (MM[dM[50]] > dM[7]);
+                 MM[dM[60]] = -dM[2]
+               } return MM[dM[60]] > -dM[2] && MM[-dM[61]].push((MM[dM[8]] | MM[dM[60]] << MM[dM[50]]) & dM[11]), lM(MM[-dM[61]])
```

#### 35. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3529` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L909) · [Before (L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3529)

```diff
-           return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = wG(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
+           return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = hM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
```

#### 36. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3534` → after: `L925-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L925-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L925-L934) · [Before (L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3534)

```diff
-             return GG[Wb[13]] = Wb[2], GG[Wb[1]][Wb[2]] * Wb[73] + (GG[Wb[1]][Wb[1]] < Wb[1] ? Wb[72] | GG[Wb[1]][Wb[1]] : GG[Wb[1]][Wb[1]])
+             for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = ':6`~9_aMGTELOgeWVuv/.>wxq,![YyfhzZj)8*nS?;DCU|l0"^FrB#R4QA%XP@i=s]o13$m}{H7pKIbt&(d5<NJc2k+', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[35]].length, MM[dM[34]] = [], MM[dM[67]] = dM[1], MM[dM[68]] = dM[1], MM[dM[60 … [truncated]
+               if (MM[dM[6]] = MM[dM[2]].indexOf(MM[dM[35]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
+                 if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
+                 else {
+                   RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[67]] |= MM[dM[60]] << MM[dM[68]], MM[dM[68]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                   do {
+                     RM(MM[dM[34]].push(MM[dM[67]] & dM[11]), MM[dM[67]] >>= dM[3], MM[dM[68]] -= dM[3])
+                   } while (MM[dM[68]] > dM[7]);
+                   MM[dM[60]] = -dM[2]
+                 } return MM[dM[60]] > -dM[2] && MM[dM[34]].push((MM[dM[67]] | MM[dM[60]] << MM[dM[68]]) & dM[11]), lM(MM[dM[34]])
```

#### 37. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3538-L3547` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L938) · [Before (L3538-L3547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3538-L3547)

```diff
-             switch (GG[Wb[13]] = Wb[2], ((GG[Wb[1]] & Wb[72]) !== Wb[1]) * Wb[2] + (GG[Wb[1]] < Wb[1]) * Wb[37]) {
-               case Wb[1]:
-                 return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])];
-               case Wb[2]:
-                 return [GG[Wb[1]] % Wb[72] - Wb[72], Math.trunc(GG[Wb[1]] / Wb[73]) + Wb[2]];
-               case Wb[37]:
-                 return [((GG[Wb[1]] + Wb[72]) % Wb[72] + Wb[72]) % Wb[72], Math.round(GG[Wb[1]] / Wb[73])];
-               case Wb[4]:
-                 return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])]
-             }
+             return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = sM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
```

#### 38. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3549` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L940) · [Before (L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3549)

```diff
-           GG[Wb[13]] = Wb[1], ab(GG[-Wb[80]] = bG([Wb[37], Wb[51]]), GG[Wb[2]] = bG([Wb[2], Wb[37]]), GG[-Wb[82]] = GG[-Wb[80]] + GG[Wb[2]], GG[Wb[81]] = GG[-Wb[82]] - GG[Wb[2]], GG[Wb[51]] = GG[Wb[81]] * Wb[37], GG[-Wb[83]] = GG[Wb[51]] / Wb[37], console.log(ZG(GG[-Wb[82]])), co … [truncated]
+           SM()[DM(150)](GM, GM, eM, WM)
```

#### 39. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3551` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L942) · [Before (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3551)

```diff
-         return void(SG(132) + "U" in vb && LG())
+         RM(MM[dM[69]] = (0, jM.B)(MM[dM[69]], 1, Math[JM(dM[70])](dM[2], Math[JM(151)](dM[1], -pM, dM[2] - tM / MM[dM[8]]))), SM()[JM(152)](GM, GM, bM))
```

#### 40. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3553-L3554` → after: `L944-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L944-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L944-L950) · [Before (L3553-L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3553-L3554)

```diff
-       const ZG = window[bG(Wb[47])];
-       if (typeof ZG !== bG(134) + "on" || GG instanceof ZG || (0, MG.F)(GG)) {
+       const zM = wM;
+       RM(SM()[rM(153)](zM, GM, gM), zM[dM[2]] = dM[1], MM[dM[64]] = SM()[rM(154)](zM)), QM || (MM[dM[64]] *= MM[dM[69]]);
+       const LM = MM[dM[19]][rM(155) + rM(156) + rM(157)],
+         mM = LM ? Math[rM(158)](LM, MM[dM[64]]) : MM[dM[64]];
+       SM()[rM(159) + rM(160)](zM, zM);
+       const HM = MM[dM[7]] !== dM[24] && void 0 !== MM[dM[7]] ? MM[dM[7]] : MM[dM[19]][rM(161) + rM(162) + rM(163) + rM(164)];
+       if (mM > dM[1]) {
```

#### 41. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3556-L3558` → after: `L952-L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L952-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L952-L954) · [Before (L3556-L3558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3556-L3558)

```diff
-           for (ab(GG[Wb[13]] = Wb[2], GG[-Wb[76]] = 'znBDToJlNsHfSKLrIX=:xu|%YR8GbqO@5<m?"324ejt~&19]^Zdy}[PEM/A#ipgQ*{>UC)0$+,(cv6W;wV`_.kF!ha7', GG[Wb[37]] = "" + (GG[Wb[1]] || ""), GG[Wb[4]] = GG[Wb[37]].length, GG[Wb[15]] = [], GG[Wb[40]] = Wb[1], GG[Wb[88]] = Wb[1], GG[Wb[55 … [truncated]
-             if (GG[Wb[29]] = GG[-Wb[76]].indexOf(GG[Wb[37]][GG[Wb[6]]]), GG[Wb[29]] !== -Wb[2])
-               if (GG[Wb[55]] < Wb[1]) GG[Wb[55]] = GG[Wb[29]];
+           for (RM(MM[dM[12]] = dM[2], MM[dM[71]] = 'D4z|5u8(*F{n}h21?@&Lk!iPQ"Y)M+l7X3sSZvVEJ`9y>6%Tp~NmC.:BWU^AwxfcaoHKg,/q$e[dRIt#0G_O;<j]rb=', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[-dM[72]] = MM[dM[35]].length, MM[dM[10]] = [], MM[dM[8]] = dM[1], MM[dM[19]] = dM[1], MM[dM[60 … [truncated]
+             if (MM[dM[6]] = MM[dM[71]].indexOf(MM[dM[35]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
+               if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
```

#### 42. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3560` → after: `L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L956) · [Before (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3560)

```diff
-                 ab(GG[Wb[55]] += GG[Wb[29]] * Wb[28], GG[Wb[40]] |= GG[Wb[55]] << GG[Wb[88]], GG[Wb[88]] += (GG[Wb[55]] & Wb[32]) > Wb[33] ? Wb[34] : Wb[35]);
+                 RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[60]] << MM[dM[19]], MM[dM[19]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
```

#### 43. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3562-L3569` → after: `L958-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L958-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L958-L961) · [Before (L3562-L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3562-L3569)

```diff
-                   ab(GG[Wb[15]].push(GG[Wb[40]] & Wb[12]), GG[Wb[40]] >>= Wb[11], GG[Wb[88]] -= Wb[11])
-                 } while (GG[Wb[88]] > Wb[7]);
-                 GG[Wb[55]] = -Wb[2]
-               } return GG[Wb[55]] > -Wb[2] && GG[Wb[15]].push((GG[Wb[40]] | GG[Wb[55]] << GG[Wb[88]]) & Wb[12]), Ib(GG[Wb[15]])
-         }
- 
-         function kG(...GG) {
-           return GG[Wb[13]] = Wb[2], typeof Jb[GG[Wb[1]]] === Wb[18] ? Jb[GG[Wb[1]]] = yG(rb[GG[Wb[1]]]) : Jb[GG[Wb[1]]]
+                   RM(MM[dM[10]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[19]] -= dM[3])
+                 } while (MM[dM[19]] > dM[7]);
+                 MM[dM[60]] = -dM[2]
+               } return MM[dM[60]] > -dM[2] && MM[dM[10]].push((MM[dM[8]] | MM[dM[60]] << MM[dM[19]]) & dM[11]), lM(MM[dM[10]])
```

#### 44. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3573-L3585` → after: `L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L965) · [Before (L3573-L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3573-L3585)

```diff
-           var bG;
-           ab(GG[Wb[13]] = Wb[1], bG = function(...GG) {
-             ab(GG[Wb[13]] = Wb[2], this.rp = GG[Wb[1]], this.length = Wb[1], this.map = {}, this.head = Wb[89], this.tail = Wb[89])
-           }, bG.prototype.get = function(...GG) {
-             var bG;
-             return ab(GG[Wb[13]] = Wb[2], bG = this.map[GG[Wb[1]]]), bG ? (this.remove(bG), this.insert(bG.key, bG.val), bG.val) : -Wb[2]
-           }, bG.prototype.put = function(GG, bG) {
-             this.map[GG] ? (this.remove(this.map[GG]), this.insert(GG, bG)) : this.length === this.rp ? (this.remove(this.head), this.insert(GG, bG)) : (this.insert(GG, bG), this.length++)
-           }, bG.prototype.remove = function(...GG) {
-             ab(GG[Wb[13]] = Wb[2], GG[Wb[26]] = GG[Wb[1]].prev, GG[Wb[37]] = GG[Wb[1]].next), GG[Wb[37]] && (GG[Wb[37]].prev = GG[Wb[26]]), GG[Wb[26]] && (GG[Wb[26]].next = GG[Wb[37]]), this.head === GG[Wb[1]] && (this.head = GG[Wb[37]]), this.tail === GG[Wb[1]] && (this.tail = G … [truncated]
-           }, bG.prototype.insert = function(...GG) {
-             ab(GG[Wb[13]] = Wb[37], GG[Wb[90]] = new List(GG[Wb[1]], GG[Wb[2]]), this.tail ? (this.tail.next = GG[Wb[90]], GG[Wb[90]].prev = this.tail, this.tail = GG[Wb[90]]) : (this.tail = GG[Wb[90]], this.head = GG[Wb[90]]), this.map[GG[Wb[1]]] = GG[Wb[90]])
-           }, console.log(bG))
+           return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = kM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
```

#### 45. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3587-L3589` → after: `L967-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L967-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L967-L968) · [Before (L3587-L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3587-L3589)

```diff
-         if (kG(136) + Wb[30] in vb && UG(), GG[kG(Wb[68]) + kG(Wb[48])] === Wb[91])(0, pG[Wb[0]])("2 " + (0, fG[Wb[21]])(GG));
-         else if (db(GG) < Wb[66])(0, pG[Wb[0]])("3 ");
-         else {
+         let oM = MM[dM[0]][rM(165) + rM(166)] * HM;
+         if (!QM) {
```

#### 46. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3591-L3595` → after: `L970-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L970-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L970-L979) · [Before (L3591-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3591-L3595)

```diff
-             ab(GG[Wb[13]] = Wb[1], GG[Wb[92]] = function(...bG) {
-               return ab(bG[Wb[13]] = Wb[4], bG[Wb[26]] = {}), bG[Wb[37]].length !== bG[Wb[1]].length + bG[Wb[2]].length ? Wb[91] : GG[Wb[2]](bG[Wb[1]], bG[Wb[2]], bG[Wb[37]], Wb[1], Wb[1], Wb[1], bG[Wb[26]])
-             }, GG[Wb[2]] = function(...bG) {
-               return ab(bG[Wb[13]] = Wb[7], bG[Wb[26]] = Wb[91]), bG[Wb[40]] >= bG[Wb[37]].length || (bG[Wb[9]]["" + bG[Wb[4]] + bG[Wb[51]] + bG[Wb[40]]] !== Wb[19] ? bG[Wb[9]]["" + bG[Wb[4]] + bG[Wb[51]] + bG[Wb[40]]] : (bG[Wb[37]][bG[Wb[40]]] === bG[Wb[1]][bG[Wb[4]]] && bG[Wb[3 … [truncated]
-             }, console.log(GG[Wb[92]]))
+             for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = '<toEDiTspPMUawhxRY81}KfyH0g;F!#?@JW"mnO`|NVLb%]X[4z>_^9=vde&({CZ5B3QAruj,2$q76k.)Sc+*Il~G/:', MM[-dM[73]] = "" + (MM[dM[1]] || ""), MM[dM[23]] = MM[-dM[73]].length, MM[dM[34]] = [], MM[dM[8]] = dM[1], MM[dM[19]] = dM[1], MM[dM[ … [truncated]
+               if (MM[dM[6]] = MM[dM[2]].indexOf(MM[-dM[73]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
+                 if (MM[dM[7]] < dM[1]) MM[dM[7]] = MM[dM[6]];
+                 else {
+                   RM(MM[dM[7]] += MM[dM[6]] * dM[28], MM[dM[8]] |= MM[dM[7]] << MM[dM[19]], MM[dM[19]] += (MM[dM[7]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                   do {
+                     RM(MM[dM[34]].push(MM[dM[8]] & dM[11]), MM[dM[8]] >>= dM[3], MM[dM[19]] -= dM[3])
+                   } while (MM[dM[19]] > dM[7]);
+                   MM[dM[7]] = -dM[2]
+                 } return MM[dM[7]] > -dM[2] && MM[dM[34]].push((MM[dM[8]] | MM[dM[7]] << MM[dM[19]]) & dM[11]), lM(MM[dM[34]])
```

#### 47. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3619` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L983) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3619)

```diff
-             return GG[Wb[13]] = Wb[2], GG[Wb[1]][Wb[2]] * Wb[73] + (GG[Wb[1]][Wb[1]] < Wb[1] ? Wb[72] | GG[Wb[1]][Wb[1]] : GG[Wb[1]][Wb[1]])
+             return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = YM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
```

#### 48. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3621` → after: `L985-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L985-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L985-L988) · [Before (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3621)

```diff
- 
+           oM *= MM[dM[0]][NM(dM[68]) + NM(168)]
+         }
+         let fM = MM[dM[0]][ZM(169) + ZM(170) + "ss"] * mM;
+         if (mM < .3) {
```

#### 49. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3623-L3632` → after: `L990-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L990-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L990-L999) · [Before (L3623-L3632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3623-L3632)

```diff
-             switch (GG[Wb[13]] = Wb[2], ((GG[Wb[1]] & Wb[72]) !== Wb[1]) * Wb[2] + (GG[Wb[1]] < Wb[1]) * Wb[37]) {
-               case Wb[1]:
-                 return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])];
-               case Wb[2]:
-                 return [GG[Wb[1]] % Wb[72] - Wb[72], Math.trunc(GG[Wb[1]] / Wb[73]) + Wb[2]];
-               case Wb[37]:
-                 return [((GG[Wb[1]] + Wb[72]) % Wb[72] + Wb[72]) % Wb[72], Math.round(GG[Wb[1]] / Wb[73])];
-               case Wb[4]:
-                 return [GG[Wb[1]] % Wb[72], Math.trunc(GG[Wb[1]] / Wb[73])]
-             }
+             for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = 'NfjGAsoJBbeQpCanXiVITkPdRMOK[9/(>1=UxgEq_3h{uS*LDWl:Hr%t.2~4;cYmZ}7,|+68!z)0v"#<&^`5$w]y?@F', MM[dM[35]] = "" + (MM[dM[1]] || ""), MM[dM[75]] = MM[dM[35]].length, MM[dM[34]] = [], MM[-dM[77]] = dM[1], MM[dM[78]] = dM[1], MM[dM[ … [truncated]
+               if (MM[dM[76]] = MM[dM[5]].indexOf(MM[dM[35]][MM[dM[66]]]), MM[dM[76]] !== -dM[2])
+                 if (MM[dM[74]] < dM[1]) MM[dM[74]] = MM[dM[76]];
+                 else {
+                   RM(MM[dM[74]] += MM[dM[76]] * dM[28], MM[-dM[77]] |= MM[dM[74]] << MM[dM[78]], MM[dM[78]] += (MM[dM[74]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                   do {
+                     RM(MM[dM[34]].push(MM[-dM[77]] & dM[11]), MM[-dM[77]] >>= dM[3], MM[dM[78]] -= dM[3])
+                   } while (MM[dM[78]] > dM[7]);
+                   MM[dM[74]] = -dM[2]
+                 } return MM[dM[74]] > -dM[2] && MM[dM[34]].push((MM[-dM[77]] | MM[dM[74]] << MM[dM[78]]) & dM[11]), lM(MM[dM[34]])
```

#### 50. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3790-L3832` → after: `L1002-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1002-L1003) · [Before (L3790-L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3790-L3832)

```diff
-     function yG() {
-       var GG, bG, ZG, wG;
-       const yG = (0, LG.i)(),
-         kG = null !== (GG = null === (bG = yG.Hr.nbG(yG.sA)) || void 0 === bG ? void 0 : bG.selectedItem) && void 0 !== GG ? GG : null,
-         UG = kG ? (0, LG.e)().getItemStat(yG.sA, kG.name, "attackCooldownMs") : null,
-         YG = (0, SG.ud)(UG, null === kG || void 0 === kG || null === (ZG = kG.attributes.customAttributes) || void 0 === ZG || null === (wG = ZG.enchantments) || void 0 === wG ? void 0 : wG["Attack Speed"]);
-       return Math.max(56, Math.ceil((YG + 30) / 3))
-     }
-     class kG {
-       constructor(GG, bG) {
-         this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [GG], this.dueMs = GG, this.intervalMs = bG
-       }
-       spacedBy(GG, bG) {
-         if (GG === this.intervalMs) return this;
-         const ZG = this.tries[this.tries.length - 1],
-           wG = new kG(ZG, GG);
- ... (27 more removed lines; see GitHub link above)
+           function xM(...MM) {
+             return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = AM(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
```

#### 51. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3895-L3915` → after: `L1006-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1006-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1006-L1010) · [Before (L3895-L3915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3895-L3915)

```diff
-     function KG(GG) {
-       const {
-         added: bG,
-         removed: ZG,
-         settingChanges: wG
-       } = YG.apply(GG);
-       for (const {
-           playerId: SG,
-           name: LG
-         }
-         of ZG) void 0 === LG || dG(SG) || yG.b.delete(LG);
-       for (const {
-           playerId: LG,
-           settings: yG
-         }
-         of wG)
- ... (5 more removed lines; see GitHub link above)
+           function vM(...MM) {
+             RM(MM[dM[12]] = dM[1], MM[dM[35]] = function(...MM) {
+               function rM(...MM) {
+                 return MM[dM[12]] = dM[0], jM(OM(aM(MM[dM[1]]), aM(MM[dM[2]])))
+               }
```

#### 52. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3917-L3923` → after: `L1012-L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1012-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1012-L1025) · [Before (L3917-L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3917-L3923)

```diff
-     function hG(GG) {
-       let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YG.getSettings(GG);
-       if (bG) {
-         (0, SG.f)(GG);
-         for (const ZG in bG)(0, SG.b)(GG, ZG, bG[ZG])
-       }
-     }
+               function iM(...MM) {
+                 return MM[dM[12]] = dM[23],
+                   function(...MM) {
+                     var rM, iM, OM, SM;
+                     for (RM(MM[dM[12]] = dM[0], MM[dM[0]] = MM[dM[2]].length, MM[dM[35]] = Array()), MM[-dM[90]] = Array(Math.ceil(MM[dM[1]].length / dM[0])), rM = dM[1]; rM < MM[-dM[90]].length; rM++) MM[-dM[90]][rM] = MM[dM[1]].charCodeAt(rM * dM[0]) << dM[3] | MM[dM[1]].charCo … [truncated]
+                     for (; MM[-dM[90]].length > dM[1];) {
+                       for (RM(SM = Array(), OM = dM[1]), rM = dM[1]; rM < MM[-dM[90]].length; rM++) RM(OM = (OM << dM[80]) + MM[-dM[90]][rM], iM = Math.floor(OM / MM[dM[0]]), OM -= iM * MM[dM[0]]), (SM.length > dM[1] || iM > dM[1]) && (SM[SM.length] = iM);
+                       RM(MM[dM[35]][MM[dM[35]].length] = OM, MM[-dM[90]] = SM)
+                     }
+                     for (MM[-dM[18]] = "", rM = MM[dM[35]].length - dM[2]; rM >= dM[1]; rM--) MM[-dM[18]] += MM[dM[2]].charAt(MM[dM[35]][rM]);
+                     for (MM[dM[15]] = Math.ceil(MM[dM[1]].length * dM[3] / (Math.log(MM[dM[2]].length) / Math.log(dM[0]))), rM = MM[-dM[18]].length; rM < MM[dM[15]]; rM++) MM[-dM[18]] = MM[dM[2]][dM[1]] + MM[-dM[18]];
+                     return MM[-dM[18]]
+                   }(OM(aM(MM[dM[1]]), aM(MM[dM[2]])), MM[dM[0]])
+               }
```

#### 53. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3925-L3958` → after: `L1027-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1027-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1027-L1033) · [Before (L3925-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3925-L3958)

```diff
-     function dG(GG) {
-       return GG === (0, UG.i)().ybG || (0, UG.e)().client.hasEntity(GG)
-     }(0, LG.onGameReset)(pG)
-   },
-   38490: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => WG,
-       f: () => XG,
-       g: () => iG,
-       k: () => CG,
-       o: () => mG
-     });
-     var wG = ZG(37432),
-       SG = ZG(38499),
-       LG = ZG(364),
-       yG = ZG.n(LG),
- ... (18 more removed lines; see GitHub link above)
+               function OM(...MM) {
+                 RM(MM[dM[12]] = dM[0], MM[dM[79]] = QM(MM[dM[1]])), MM[dM[79]].length > dM[80] && (MM[dM[79]] = CM(MM[dM[79]], MM[dM[1]].length * dM[3]));
+                 var rM = Array(dM[80]),
+                   iM = Array(dM[80]);
+                 for (MM[dM[81]] = dM[1]; MM[dM[81]] < dM[80]; MM[dM[81]]++) RM(rM[MM[dM[81]]] = 909522486 ^ MM[dM[79]][MM[dM[81]]], iM[MM[dM[81]]] = 1549556828 ^ MM[dM[79]][MM[dM[81]]]);
+                 return MM[dM[34]] = CM(rM.concat(QM(MM[dM[2]])), dM[82] + MM[dM[2]].length * dM[3]), zM(CM(iM.concat(MM[dM[34]]), EM(xM(176), dM[82], 256)))
+               }
```

#### 54. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3960-L3984` → after: `L1035-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1035-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1035-L1058) · [Before (L3960-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3960-L3984)

```diff
-     function XG(GG, bG) {
-       var ZG, SG;
-       const LG = uG(GG, bG);
-       if (LG) {
-         const GG = LG.x,
-           bG = LG.y,
-           ZG = GG - 50,
-           wG = bG - 50;
-         return Math.abs(ZG) <= kG.b && Math.abs(wG) <= (0, kG.g)() ? {
-           x: GG,
-           y: bG
-         } : FG(ZG, wG)
-       }
-       VG.fGG(bG[0], bG[1], bG[2]),
-         function(GG) {
-           const bG = GG.HK.GwG(),
- ... (9 more removed lines; see GitHub link above)
+               function SM(...rM) {
+                 function OM(...MM) {
+                   return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
+                     for (RM(MM[dM[12]] = dM[2], MM[dM[8]] = '~>7]8<Au{i+Z)4T^RS=Jh*;g9z_UdtloYsBfP:jLyDv@m`KI!%1[0FN2bqC5VMc3prkX.Qe/}EwH,x6$a&(?|O"GnW#', MM[dM[83]] = "" + (MM[dM[1]] || ""), MM[dM[4]] = MM[dM[83]].length, MM[-dM[45]] = [], MM[-dM[84]] = dM[1], MM[dM[78]] = dM[1] … [truncated]
+                       if (MM[dM[6]] = MM[dM[8]].indexOf(MM[dM[83]][MM[dM[3]]]), MM[dM[6]] !== -dM[2])
+                         if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
+                         else {
+                           RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[-dM[84]] |= MM[dM[60]] << MM[dM[78]], MM[dM[78]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                           do {
+                             RM(MM[-dM[45]].push(MM[-dM[84]] & dM[11]), MM[-dM[84]] >>= dM[3], MM[dM[78]] -= dM[3])
+                           } while (MM[dM[78]] > dM[7]);
+                           MM[dM[60]] = -dM[2]
+                         } return MM[dM[60]] > -dM[2] && MM[-dM[45]].push((MM[-dM[84]] | MM[dM[60]] << MM[dM[78]]) & dM[11]), lM(MM[-dM[45]])
+                   }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
+                 }
+                 rM[dM[12]] = dM[2];
+ ... (8 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3986-L3997` → after: `L1060-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1060-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1060-L1084) · [Before (L3986-L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3986-L3997)

```diff
-     function uG(GG, bG) {
-       const ZG = GG.HK.Dv(),
-         SG = ZG.CK(),
-         LG = SG.getRenderWidth(),
-         yG = SG.getRenderHeight();
-       oG.width = LG, oG.height = yG;
-       const kG = GG.HK.GwG(),
-         VG = kG ? EG.fGG(kG.eye[0], kG.eye[1], kG.eye[2]) : GG.HK.camera.globalPosition;
-       UG.fGG(VG.x + 10 * bG[0], VG.y + 10 * bG[1], VG.z + 10 * bG[2]);
-       const pG = kG ? wG.Matrix.FromArrayToRef(kG.viewProjectionMatrix, 0, rG) : ZG.getTransformMatrix();
-       return wG.mK.ProjectToRef(UG, JG, pG, oG, YG), YG.z < 0 || YG.z > 1 ? null : (KG.x = YG.x / LG * 100, KG.y = YG.y / yG * 100, KG)
-     }
+               function jM(...rM) {
+                 function OM(...MM) {
+                   return MM[dM[12]] = dM[2], typeof PM[MM[dM[1]]] === dM[13] ? PM[MM[dM[1]]] = function(...MM) {
+                     for (RM(MM[dM[12]] = dM[2], MM[dM[40]] = 'u_(b);B%"g$nEqxodte7}:V*T6|F4>H`=,D]cR8z{A@95^Yklmh~N+PM.LI<i/SCwWZ0Jy3[&U!?K2pXr#vjafQGOs1', MM[-dM[86]] = "" + (MM[dM[1]] || ""), MM[-dM[87]] = MM[-dM[86]].length, MM[dM[34]] = [], MM[-dM[88]] = dM[1], MM[dM[19]] = d … [truncated]
+                       if (MM[dM[6]] = MM[dM[40]].indexOf(MM[-dM[86]][MM[dM[66]]]), MM[dM[6]] !== -dM[2])
+                         if (MM[dM[60]] < dM[1]) MM[dM[60]] = MM[dM[6]];
+                         else {
+                           RM(MM[dM[60]] += MM[dM[6]] * dM[28], MM[-dM[88]] |= MM[dM[60]] << MM[dM[19]], MM[dM[19]] += (MM[dM[60]] & dM[30]) > dM[31] ? dM[32] : dM[33]);
+                           do {
+                             RM(MM[dM[34]].push(MM[-dM[88]] & dM[11]), MM[-dM[88]] >>= dM[3], MM[dM[19]] -= dM[3])
+                           } while (MM[dM[19]] > dM[7]);
+                           MM[dM[60]] = -dM[2]
+                         } return MM[dM[60]] > -dM[2] && MM[dM[34]].push((MM[-dM[88]] | MM[dM[60]] << MM[dM[19]]) & dM[11]), lM(MM[dM[34]])
+                   }(nM[MM[dM[1]]]) : PM[MM[dM[1]]]
+                 }
+                 rM[dM[12]] = dM[2];
+ ... (9 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L3999-L4001` → after: `L1086-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1086-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1086-L1090) · [Before (L3999-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L3999-L4001)

```diff
-     function iG(GG, bG) {
-       return XG(GG, IG(GG, bG))
-     }
+               function aM(...MM) {
+                 var rM, iM;
+                 for (RM(MM[dM[12]] = dM[2], MM[dM[8]] = "", MM[dM[0]] = -dM[2]); ++MM[dM[0]] < MM[dM[1]].length;) RM(rM = MM[dM[1]].charCodeAt(MM[dM[0]]), iM = MM[dM[0]] + dM[2] < MM[dM[1]].length ? MM[dM[1]].charCodeAt(MM[dM[0]] + dM[2]) : dM[1]), 55296 <= rM && rM <= 56319 && 5 … [truncated]
+                 return MM[dM[8]]
+               }
```

#### 57. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4003-L4009` → after: `L1092-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1092-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1092-L1096) · [Before (L4003-L4009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4003-L4009)

```diff
-     function CG(GG, bG) {
-       const ZG = uG(GG, IG(GG, bG));
-       return ZG && {
-         x: ZG.x,
-         y: ZG.y
-       }
-     }
+               function QM(...MM) {
+                 for (RM(MM[dM[12]] = dM[2], MM[dM[2]] = Array(MM[dM[1]].length >> dM[0])), MM[-dM[94]] = dM[1]; MM[-dM[94]] < MM[dM[2]].length; MM[-dM[94]]++) MM[dM[2]][MM[-dM[94]]] = dM[1];
+                 for (MM[-dM[94]] = dM[1]; MM[-dM[94]] < MM[dM[1]].length * dM[3]; MM[-dM[94]] += dM[3]) MM[dM[2]][MM[-dM[94]] >> dM[8]] |= (MM[dM[1]].charCodeAt(MM[-dM[94]] / dM[3]) & dM[11]) << dM[74] - MM[-dM[94]] % dM[95];
+                 return MM[dM[2]]
+               }
```

#### 58. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4011-L4014` → after: `L1098-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1098-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1098-L1101) · [Before (L4011-L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4011-L4014)

```diff
-     function WG(GG) {
-       var bG, ZG;
-       return 1 / (null !== (bG = null === (ZG = GG.HK.GwG()) || void 0 === ZG ? void 0 : ZG.projectionMatrix[0]) && void 0 !== bG ? bG : GG.HK.Dv().activeCamera.getProjectionMatrix().m[0])
-     }
+               function zM(...MM) {
+                 for (RM(MM[dM[12]] = dM[2], MM[dM[5]] = ""), MM[dM[0]] = dM[1]; MM[dM[0]] < MM[dM[1]].length * dM[95]; MM[dM[0]] += dM[3]) MM[dM[5]] += String.fromCharCode(MM[dM[1]][MM[dM[0]] >> dM[8]] >>> dM[74] - MM[dM[0]] % dM[95] & dM[11]);
+                 return MM[dM[5]]
+               }
```

#### 59. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4016-L4022` → after: `L1103-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1103-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1103-L1105) · [Before (L4016-L4022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4016-L4022)

```diff
-     function mG(GG, bG, ZG) {
-       const wG = GG.HK.GwG(),
-         SG = wG ? wG.worldMatrix : GG.HK.Dv().activeCamera.getWorldMatrix().m,
-         LG = GG.zf;
-       for (let yG = 0; yG < 3; yG++) bG[yG] = SG[12 + yG] + LG[yG], ZG[yG] = SG[8 + yG];
-       yG().normalize(ZG, ZG)
-     }
+               function LM(...MM) {
+                 return MM[dM[12]] = dM[0], MM[dM[1]] >>> MM[dM[2]] | MM[dM[1]] << dM[95] - MM[dM[2]]
+               }
```

#### 60. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4024-L4029` → after: `L1107-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1107-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1107-L1109) · [Before (L4024-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4024-L4029)

```diff
-     function IG(GG, bG) {
-       const ZG = GG.zf,
-         wG = GG.HK.GwG(),
-         SG = wG ? EG.fGG(wG.eye[0], wG.eye[1], wG.eye[2]) : GG.HK.camera.globalPosition;
-       return QG[0] = bG[0] - ZG[0] - SG.x, QG[1] = bG[1] - ZG[1] - SG.y, QG[2] = bG[2] - ZG[2] - SG.z, yG().normalize(QG, QG), QG
-     }
+               function mM(...MM) {
+                 return MM[dM[12]] = dM[0], MM[dM[1]] >>> MM[dM[2]]
+               }
```

#### 61. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4031-L4105` → after: `L1111-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1111-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1111-L1113) · [Before (L4031-L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4031-L4105)

```diff
-     function FG(GG, bG) {
-       return (0, kG.c)(GG, bG, kG.b, (0, kG.g)())
-     }
-   },
-   39362: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => fG
-     });
-     var wG = ZG(188),
-       SG = ZG(364),
-       LG = ZG.n(SG),
-       yG = ZG(37102),
-       kG = ZG(37105),
-       UG = ZG(2751);
-     const YG = wG.d.td * wG.d.playerEyeToHeightRatio,
-       VG = 250,
- ... (59 more removed lines; see GitHub link above)
+               function HM(...MM) {
+                 return MM[dM[12]] = dM[23], MM[dM[1]] & MM[dM[2]] ^ ~MM[dM[1]] & MM[dM[0]]
+               }
```

#### 62. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4107-L4109` → after: `L1115-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1115-L1117) · [Before (L4107-L4109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4107-L4109)

```diff
-     function SG(GG) {
-       return "refetchCode" === GG || "devDownloadJson" === GG || GG.startsWith("Plugin")
-     }
+               function hM(...MM) {
+                 return MM[dM[12]] = dM[23], MM[dM[1]] & MM[dM[2]] ^ MM[dM[1]] & MM[dM[0]] ^ MM[dM[2]] & MM[dM[0]]
+               }
```

#### 63. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4111-L4132` → after: `L1119-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1119-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1119-L1121) · [Before (L4111-L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4111-L4132)

```diff
-     function LG(GG, bG) {
-       "refetchCode" !== GG ? "Plugin|MobAiPlugin|ShowPetUi" !== GG ? Promise.all([ZG.e(109), ZG.e(110), ZG.e(105), ZG.e(107), ZG.e(218)]).then((() => ZG(42179))).then((ZG => {
-         let {
-           runClientGameMessage: wG
-         } = ZG;
-         wG(GG, bG)
-       })).catch((bG => {
-         console.error(`Game message ${GG} failed`, bG)
-       })) : wG.l.xh("showPetUi", bG) : wG.l.xh("refetchCode")
-     }
-   },
-   39412: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => VG
-     });
-     var wG = ZG(1177),
- ... (6 more removed lines; see GitHub link above)
+               function JM(...MM) {
+                 return MM[dM[12]] = dM[2], LM(MM[dM[1]], dM[0]) ^ LM(MM[dM[1]], dM[32]) ^ LM(MM[dM[1]], 22)
+               }
```

#### 64. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4134-L4154` → after: `L1123-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1123-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1123-L1125) · [Before (L4134-L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4134-L4154)

```diff
-     function VG(GG) {
-       let {
-         AS: bG,
-         sS: ZG
-       } = GG;
-       const VG = null !== bG && void 0 !== bG ? bG : (0, kG.d)().gameNameWithVariation;
-       (0, wG.J)(VG) && ((0, YG.h)(), (0, yG.cb)((() => {
-         console.log("Received matchmaking order from game server to game", bG), (0, LG.n)("inGameReplay"), (0, UG.navigatePreserveSearch)((0, SG.d)(VG, null !== ZG && void 0 !== ZG ? ZG : void 0))
-       }), "video_start"))
-     }
-   },
-   39404: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => UG,
-       f: () => yG,
-       i: () => kG,
- ... (5 more removed lines; see GitHub link above)
+               function yM(...MM) {
+                 return MM[dM[12]] = dM[2], LM(MM[dM[1]], dM[19]) ^ LM(MM[dM[1]], 11) ^ LM(MM[dM[1]], dM[84])
+               }
```

#### 65. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4156-L4161` → after: `L1127-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1127-L1129) · [Before (L4156-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4156-L4161)

```diff
-     function yG(GG, bG) {
-       wG.l.xh("newUiRequest", {
-         id: GG,
-         clientParameters: bG
-       }, !0)
-     }
+               function UM(...MM) {
+                 return MM[dM[12]] = dM[2], LM(MM[dM[1]], dM[7]) ^ LM(MM[dM[1]], dM[26]) ^ mM(MM[dM[1]], dM[23])
+               }
```

#### 66. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4163-L4167` → after: `L1131-L1133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1131-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1131-L1133) · [Before (L4163-L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4163-L4167)

```diff
-     function kG(GG) {
-       wG.l.xh("removeUiRequest", GG, !0);
-       const bG = LG.get(GG);
-       bG && (bG.tearDownNotification(), LG.delete(GG))
-     }
+               function GM(...MM) {
+                 return MM[dM[12]] = dM[2], LM(MM[dM[1]], 17) ^ LM(MM[dM[1]], dM[29]) ^ mM(MM[dM[1]], dM[64])
+               }
```

#### 67. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4169-L4173` → after: `L1135-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1135-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1135-L1142) · [Before (L4169-L4173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4169-L4173)

```diff
-     function UG() {
-       wG.l.xh("clearUiRequests");
-       for (const GG of LG.values()) GG.tearDownNotification();
-       LG.clear()
-     }
+               function CM(...rM) {
+                 var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, lM;
+                 for (RM(rM[dM[12]] = dM[0], rM[dM[53]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), rM[dM[35]] = new Array(dM[96])), RM(rM[dM[1]][rM[dM[2]] >> dM[8]] |= dM[39] << dM[74] - rM[dM[2]] % dM[95], rM[dM[ … [truncated]
+                   for (RM(iM = rM[dM[53]][dM[1]], OM = rM[dM[53]][dM[2]], SM = rM[dM[53]][dM[0]], jM = rM[dM[53]][dM[23]], aM = rM[dM[53]][dM[34]], PM = rM[dM[53]][dM[8]], nM = rM[dM[53]][dM[19]], QM = rM[dM[53]][dM[7]]), LM = dM[1]; LM < dM[96]; LM++) RM(rM[dM[35]][LM] = LM < dM … [truncated]
+                   RM(rM[dM[53]][dM[1]] = eM(iM, rM[dM[53]][dM[1]]), rM[dM[53]][dM[2]] = eM(OM, rM[dM[53]][dM[2]]), rM[dM[53]][dM[0]] = eM(SM, rM[dM[53]][dM[0]]), rM[dM[53]][dM[23]] = eM(jM, rM[dM[53]][dM[23]]), rM[dM[53]][dM[34]] = eM(aM, rM[dM[53]][dM[34]]), rM[dM[53]][dM[8]] =  … [truncated]
+                 }
+                 return rM[dM[53]]
+               }
```

#### 68. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4175-L4214` → after: `L1144-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1144-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1144-L1161) · [Before (L4175-L4214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4175-L4214)

```diff
-     function YG(GG, bG, ZG, wG) {
-       const yG = SG.NotificationProvider.showPromptPopup({
-         title: bG,
-         confirmText: "general:yes",
-         cancelText: "general:no",
-         destructive: ZG,
-         unlockPointerKey: "uiRequestPopup"
-       });
-       LG.set(GG, yG), yG.getResult().then((bG => {
-         LG.delete(GG), "notificationTornDown" !== bG && wG(bG)
-       }))
-     }
-   },
-   39396: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       c: () => wG
- ... (24 more removed lines; see GitHub link above)
+               function eM(...MM) {
+                 return RM(MM[dM[12]] = dM[0], MM[dM[5]] = (MM[dM[1]] & dM[97]) + (MM[dM[2]] & dM[97]), MM[dM[35]] = (MM[dM[1]] >> dM[80]) + (MM[dM[2]] >> dM[80]) + (MM[dM[5]] >> dM[80])), MM[dM[35]] << dM[80] | MM[dM[5]] & dM[97]
+               }
+               return RM(MM[dM[12]] = dM[1], MM[dM[35]] = dM[1], MM[dM[4]] = ""), MM[dM[10]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -168007 … [truncated]
+                 hex: function(MM) {
+                   return SM(function(MM) {
+                     return zM(CM(QM(MM), MM.length * dM[3]))
+                   }(aM(MM)))
+                 },
+                 b64: rM,
+                 any: iM,
+                 hex_hmac: function(...MM) {
+                   return MM[dM[12]] = dM[0], SM(OM(aM(MM[dM[1]]), aM(MM[dM[2]])))
+                 },
+                 b64_hmac: rM,
+                 any_hmac: iM
+ ... (2 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4217-L4246` → after: `L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1165) · [Before (L4217-L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4217-L4246)

```diff
-         for (const wG of GG.nG) {
-           const GG = this.members.get(wG);
-           var ZG;
-           if (GG) this.members.delete(wG), bG.removed.push({
-             playerId: wG,
-             name: null !== (ZG = GG.name) && void 0 !== ZG ? ZG : void 0
-           })
-         }
-         return bG
-       }
-       has(GG) {
-         return this.members.has(GG)
-       }
-       ids() {
-         return [...this.members.keys()]
-       }
- ... (14 more removed lines; see GitHub link above)
+         oM > fM && (oM = fM), RM(SM()[ZM(185)](zM, zM, oM), MM[dM[34]][ZM(186) + ZM(187)](zM))
```

#### 70. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4250` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1170) · [Before (L4250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4250)

```diff
-   39435: (GG, bG, ZG) => {
+   38623: (MM, rM, iM) => {
```

#### 71. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4252-L4253` → after: `L1172-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1172-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1172-L1173) · [Before (L4252-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4252-L4253)

```diff
-       b: () => wG,
-       e: () => SG
+       c: () => nM,
+       g: () => PM
```

#### 72. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4255` → after: `L1175-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1175-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1175-L1217) · [Before (L4255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4255)

```diff
-     const wG = ["description", "label"];
+     var OM = iM(38627),
+       SM = iM(2e3);
+     const jM = 2,
+       aM = 1,
+       PM = {
+         vz: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.8,
+         canRun: !0,
+         jumpMultiplier: 1,
+         upwardImpulseOnUse: 0,
+         canAutoStep: !0,
+ ... (27 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/248.js` (Changed code · before: `L4257-L4262` → after: `L1219-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1bbd12d50a60368502adf259f2f0556e3ac954fc999b2ed162191d8dd8b0faa6) · [After (L1219-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/248.js#L1219-L1229) · [Before (L4257-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/248.js#L4257-L4262)

```diff
-     function SG(GG) {
-       const bG = GG.type;
-       return {
-         type: bG,
-         params: GG[bG]
-       }
+     function nM(MM, rM, iM, PM, nM, QM, zM) {
+       if (nM.speed) return (0, OM.b)(rM, iM, PM, nM, QM, zM, MM), void(nM.ticksToReachMaxIdleFriction = jM);
+       const LM = PM.isOnGround(),
+         mM = rM.bloxd.getSyncedClientOptions(rM.bloxd.getPlayerReader(iM)),
+         HM = null === mM ? rM.bloxd.getClientPredictedOption(iM, "groundFrictionScale") : mM.groundFrictionScale,
+         hM = null === mM ? rM.bloxd.getClientPredictedOption(iM, "airFrictionScale") : mM.airFrictionScale,
+         JM = LM ? HM : hM,
+         dM = Math.max(aM, JM),
+         yM = nM.ticksToReachMaxIdleFriction / jM,
+         lM = (0, SM.B)(dM, JM, yM);
+       QM.friction = MM.standingFriction * ((null === mM ? rM.bloxd.getClientPredictedOption(iM, "airMomentumConservation") : mM.airMomentumConservation) ? lM : JM), nM.ticksToReachMaxIdleFriction > 0 && nM.ticksToReachMaxIdleFriction--
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/249.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/249.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479)

#### 1. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L8` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/249.js#L4-L10) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/249.js#L4-L8)

```diff
-   41481: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       b: () => yG,
-       e: () => VG,
-       h: () => YG
+   40906: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       getBlockFaces: () => mM,
+       getIngameIconUrl: () => JM,
+       getItemIconUrl: () => hM,
+       getItemTextureUrl: () => HM,
+       getParticleTextureUrl: () => dM
```

#### 2. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L10-L26` → after: `L12-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L12-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/249.js#L12-L30) · [Before (L10-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/249.js#L10-L26)

```diff
-     var wG, SG = ZG(37471),
-       LG = ZG(37439);
-     ! function(GG) {
-       GG[GG.CW = 0] = "CW", GG[GG.CCW = 1] = "CCW"
-     }(wG || (wG = {}));
-     class yG {
-       static Interpolate(GG, bG, ZG, wG, SG) {
-         if (0 === GG) return 0;
-         const LG = 1 - 3 * wG + 3 * bG,
-           yG = 3 * wG - 6 * bG,
-           kG = 3 * bG;
-         let UG = GG;
-         for (let YG = 0; YG < 5; YG++) {
-           const bG = UG * UG;
-           UG -= (LG * (bG * UG) + yG * bG + kG * UG - GG) * (1 / (3 * LG * bG + 2 * yG * UG + kG)), UG = Math.min(1, Math.max(0, UG))
-         }
- ... (1 more removed lines; see GitHub link above)
+     var OM = iM(4843),
+       SM = iM(37975),
+       jM = iM(9810),
+       aM = iM(3571);
+     const PM = new Set,
+       nM = new Set;
+     let QM = null;
+ 
+     function zM(MM) {
+       PM.has(MM) || (PM.add(MM), nM.add(MM), QM ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${nM.size} names`, [...nM]), nM.clear(), QM = null
+       }), 1e3))
+     }
+ 
+     function LM(MM, rM) {
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L29-L31` → after: `L33-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L33-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/249.js#L33-L71) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/249.js#L29-L31)

```diff
-     class kG {
-       constructor(GG) {
-         this._radians = GG, this._radians < 0 && (this._radians += 2 * Math.PI)
+ 
+     function mM(MM) {
+       var rM, iM;
+       const jM = SM.k[MM];
+       if (!jM || jM.itemTexture || !jM.textureInfo) return null;
+       const {
+         textureInfo: PM,
+         texturePerSide: nM
+       } = jM, QM = MM => {
+         return "string" === typeof(rM = nM && Array.isArray(PM) ? PM[nM[MM]] : PM) ? LM(rM, aM.f.BLOCK) : rM && "object" === typeof rM && "animTextures" in rM ? LM((0, OM.j)(rM), aM.f.BLOCK) : null;
+         var rM
+       }, zM = QM(2);
+       return zM ? {
+         top: zM,
+         left: null !== (rM = QM(4)) && void 0 !== rM ? rM : zM,
+         right: null !== (iM = QM(0)) && void 0 !== iM ? iM : zM
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L296` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/249.js#L75) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/249.js#L296)

```diff
-   39086: (GG, bG, ZG) => {
+   38005: (MM, rM, iM) => {
```

#### 5. `bundles/bloxd.io/chunks/js/249.js` (Changed code · before: `L300-L334` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-3942b52676d2e3ef6cbb666f88586b810a076c2f4a370c65863bd9f79d942479) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/249.js#L79-L178) · [Before (L300-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/249.js#L300-L334)

```diff
-     var wG = ZG(39093);
-     const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
-       ...GG
-     } : null : GG.clone(bG) : null;
-     class LG {
-       static DeepCopy(GG, bG, ZG, LG) {
-         let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const kG = function(GG) {
-           const bG = [];
-           do {
-             const ZG = Object.getOwnPropertyNames(GG);
-             for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
-           } while (GG = Object.getPrototypeOf(GG));
-           return bG
-         }(GG);
-         for (const YG of kG) {
- ... (19 more removed lines; see GitHub link above)
+     const OM = {
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
+ ... (84 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/250.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/250.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977)

#### 1. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L340` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/250.js#L4) · [Before (L4-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/250.js#L4-L340)

```diff
-   41579: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       openCharacterPreview: () => HG
-     });
-     var wG = ZG(38503),
-       SG = ZG(2751),
-       LG = ZG(580),
-       yG = ZG(37503),
-       kG = ZG(2228),
-       UG = ZG(37491),
-       YG = ZG(40197),
-       VG = ZG(40467),
-       pG = ZG(41476),
-       fG = ZG(37432),
-       QG = ZG(40629),
-       KG = ZG(37618),
- ... (321 more removed lines; see GitHub link above)
+   38044: (MM, rM, iM) => {
```

#### 2. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L343-L383` → after: `L7-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L7-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/250.js#L7-L136) · [Before (L343-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/250.js#L343-L383)

```diff
-       f: () => pG
-     });
-     var wG = ZG(37523),
-       SG = ZG(37803),
-       LG = ZG(37532),
-       yG = ZG(37547);
-     const kG = "bloxdTextLodBias",
-       UG = [{
-         name: kG,
-         type: "float"
-       }],
-       YG = "bloxdTextSample",
-       VG = {
-         planes: -.5,
-         boards: -.5
-       },
- ... (25 more removed lines; see GitHub link above)
+       f: () => OM,
+       h: () => SM
+     });
+     const OM = 1 / 2.2,
+       SM = 2.2;
+     Math.sqrt(5);
+     let jM = .001
+   },
+   38074: (MM, rM, iM) => {
+     function OM(MM) {
+       return parseInt(MM.toString().replace(/\W/g, ""))
+     }
+ 
+     function SM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
+       return Math.abs(MM - rM) <= iM
+ ... (114 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L385-L477` → after: `L138-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L138-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/250.js#L138-L180) · [Before (L385-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/250.js#L385-L477)

```diff
-       CapeMaterialPlugin: () => EG,
-       HueTintMaterialPlugin: () => oG,
-       LifeformMaterialPlugin: () => XG,
-       OverlayMaterialPlugin: () => uG
-     });
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
- ... (77 more removed lines; see GitHub link above)
+       Clamp: () => mM,
+       DeltaAngle: () => EM,
+       Denormalize: () => lM,
+       ExtractAsInt: () => OM,
+       Hermite: () => zM,
+       Hermite1stDerivative: () => LM,
+       HighestCommonFactor: () => tM,
+       ILog2: () => JM,
+       InverseLerp: () => QM,
+       Lerp: () => PM,
+       LerpAngle: () => nM,
+       MoveTowards: () => CM,
+       MoveTowardsAngle: () => eM,
+       Normalize: () => yM,
+       NormalizeRadians: () => HM,
+       OutsideRange: () => jM,
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L480-L896` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/250.js#L183-L185) · [Before (L480-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/250.js#L480-L896)

```diff
-     class zG extends(rG(kG.c)) {}
-     var EG = ZG(40197),
-       oG = ZG(41539),
-       XG = ZG(41544);
- 
-     function uG(GG, bG, ZG) {
-       return (0, XG.g)(ZG, bG.urls, (() => async function(GG, bG, ZG) {
-         const {
-           width: wG
-         } = GG[0].getSize(), SG = GG.map(((GG, ZG) => {
-           var SG;
-           const LG = Math.round(GG.getSize().height / wG),
-             yG = null === bG || void 0 === bG ? void 0 : bG[ZG];
-           return {
-             pixels: yG && yG.byteLength === wG * wG * LG * 4 ? yG : null !== (SG = iG.get(GG.getInternalTexture())) && void 0 !== SG ? SG : GG._readPixelsSync(),
-             layers: LG
- ... (401 more removed lines; see GitHub link above)
+ 
+     function SM(MM, rM) {
+       return OM(MM, rM)
```

#### 5. `bundles/bloxd.io/chunks/js/250.js` (Changed code · before: `L900-L944` → after: `L189-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-5c8321e6e2b383f9665a39635433ae5a21b5ac50bac0fed711a1b907ef06c977) · [After (L189-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/250.js#L189-L211) · [Before (L900-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/250.js#L900-L944)

```diff
-       g: () => LG
-     });
-     const SG = new WeakMap;
- 
-     function LG(GG, bG, ZG) {
-       var wG, LG;
-       const yG = null !== (wG = SG.get(GG)) && void 0 !== wG ? wG : new Map;
-       SG.set(GG, yG);
-       const kG = null !== (LG = yG.get(bG[0])) && void 0 !== LG ? LG : [];
-       yG.set(bG[0], kG);
-       const UG = kG.find((GG => GG.urls.length === bG.length && GG.urls.every(((GG, ZG) => GG === bG[ZG]))));
-       if (UG) return UG.built;
-       const YG = {
-         urls: [...bG],
-         built: ZG()
-       };
- ... (29 more removed lines; see GitHub link above)
+       g: () => SM,
+       j: () => aM
+     });
+     const jM = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function aM(MM, rM) {
+       const iM = jM.map((iM => function(MM, rM, iM) {
+         const OM = MM[rM];
+         if ("function" !== typeof OM) return null;
+         const SM = function() {
+           const OM = MM.length,
+             jM = SM.previous.apply(MM, arguments);
+           return iM(rM, OM), jM
+         };
+         return OM.next = SM, SM.previous = OM, MM[rM] = SM, () => {
+           const iM = SM.previous;
+ ... (7 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/251.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/251.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b)

#### 1. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L2)

```diff
- export const ids = [251];
+ export const ids = [251, 258];
```

#### 2. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L4-L8` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L5-L25) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L4-L8)

```diff
-   41472: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       openMobLineupPreview: () => qG,
-       openMobPreview: () => sG,
-       openPetPreview: () => nG
+   39285: MM => {
+     MM.exports = function(MM) {
+       return null != MM && null != MM.constructor && "function" === typeof MM.constructor.isBuffer && MM.constructor.isBuffer(MM)
+     }
+   },
+   39276: (MM, rM, iM) => {
+     var OM = iM(39280),
+       SM = iM(39283),
+       jM = iM(39285);
+     iM.g.__TYPEDARRAY_POOL || (iM.g.__TYPEDARRAY_POOL = {
+       UINT8: SM([32, 0]),
+       UINT16: SM([32, 0]),
+       UINT32: SM([32, 0]),
+       INT8: SM([32, 0]),
+       INT16: SM([32, 0]),
+       INT32: SM([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L10-L37` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L27-L31) · [Before (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L10-L37)

```diff
-     var wG = ZG(40197),
-       SG = ZG(40467),
-       LG = ZG(41476),
-       yG = ZG(37618),
-       kG = ZG(37432),
-       UG = ZG(40629),
-       YG = ZG(41498),
-       VG = ZG(38874),
-       pG = ZG(37511),
-       fG = ZG(37491),
-       QG = ZG(37429),
-       KG = ZG(38783),
-       hG = ZG(38781),
-       dG = ZG(38503),
-       JG = ZG(38569),
-       rG = ZG(38537),
- ... (12 more removed lines; see GitHub link above)
+     var aM = "undefined" !== typeof Uint8ClampedArray,
+       PM = iM.g.__TYPEDARRAY_POOL;
+     PM.UINT8C || (PM.UINT8C = SM([32, 0])), PM.BUFFER || (PM.BUFFER = SM([32, 0]));
+     var nM = PM.DATA,
+       QM = PM.BUFFER;
```

#### 4. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L39-L56` → after: `L33-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L33-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L33-L38) · [Before (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L39-L56)

```diff
-     function vG() {
-       if (null !== mG) return mG;
-       const GG = document.createElement("canvas");
-       GG.classList.add("MobPreviewCanvas");
-       const bG = new wG.b(GG, !0, {
-         preserveDrawingBuffer: !0
-       });
-       bG.iwG = (0, EG.i)().HK.engine.iwG;
-       const ZG = new SG.d(bG);
-       ZG.clearColor = new yG.e(0, 0, 0, 0), ZG.ambientColor = new yG.Color3(1, 1, 1);
-       const YG = new LG.d("nd", Math.PI / 2, Math.PI / 2, XG, kG.mK.Zero(), ZG),
-         VG = new UG.d("light", new kG.mK(-.1, 1, -.3), ZG);
-       return VG.diffuse = new yG.Color3(1, 1, 1), VG.specular = new yG.Color3(1, 1, 1), VG.groundColor = new yG.Color3(.5, .5, .5), mG = {
-         engine: bG,
-         Ah: ZG,
-         canvas: GG,
- ... (2 more removed lines; see GitHub link above)
+     function zM(MM) {
+       if (MM) {
+         var rM = MM.length || MM.byteLength,
+           iM = OM.log2(rM);
+         nM[iM].push(MM)
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L60-L62` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L42-L45) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L60-L62)

```diff
-       return IG[GG] ??= (0, dG.y)(GG, vG().Ah, !0).catch((bG => {
-         throw delete IG[GG], bG
-       })), IG[GG]
+       MM = OM.nextPow2(MM);
+       var rM = OM.log2(MM),
+         iM = nM[rM];
+       return iM.length > 0 ? iM.pop() : new ArrayBuffer(MM)
```

#### 6. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L66-L69` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L49) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L66-L69)

```diff
-       let bG = FG.get(GG);
-       return bG || (bG = zG.z[GG].loadModel(vG().Ah, !1).then((GG => (GG.DW(!1), GG)), (bG => {
-         throw FG.delete(GG), bG
-       })), FG.set(GG, bG)), bG
+       return new Uint8Array(LM(MM), 0, MM)
```

#### 7. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L73-L122` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L53) · [Before (L73-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L73-L122)

```diff
-       var bG, ZG, wG;
-       let {
-         mobType: SG,
-         variation: LG,
-         animation: yG
-       } = GG, UG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, XG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const CG = null !== (bG = null === UG || void 0 === UG ? void 0 : UG.size) && void 0 !== bG ? bG : 1,
-         WG = null !== (ZG = null === UG || void 0 === UG ? void 0 : UG.cosmetics) && void 0 !== ZG ? ZG : [],
-         mG = null !== (wG = null === UG || void 0 === UG ? void 0 : UG.qE) && void 0 !== wG ? wG : null;
-       let IG = !1,
-         FG = null,
-         lG = null;
-       const {
-         engine: jG,
-         Ah: PG
-       } = vG(), MG = PG.onBeforeRenderObservable.add((() => {
- ... (34 more removed lines; see GitHub link above)
+       return new Uint16Array(LM(2 * MM), 0, MM)
```

#### 8. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L125-L130` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L56-L57) · [Before (L125-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L125-L130)

```diff
-     function jG(GG, bG) {
-       return lG({
-         mobType: "NPC",
-         variation: null,
-         animation: GG.animation
-       }, GG, bG)
+     function hM(MM) {
+       return new Uint32Array(LM(4 * MM), 0, MM)
```

#### 9. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L134-L160` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L61) · [Before (L134-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L134-L160)

```diff
-       let {
-         mobType: bG,
-         variation: ZG,
-         metaInfo: wG,
-         tamed: SG
-       } = GG, LG = !1, yG = null, kG = 0;
-       const UG = (0, EG.i)(),
-         YG = UG.HK.Vl,
-         VG = GG => {
-           kG += WG * (GG / 1e3) % (2 * Math.PI), YG.setRotationEulerY(yG, kG)
-         };
-       return aG(bG).then((GG => {
-         if (LG) return;
-         yG = (0, dG.l)(bG, CG, !0, !0), YG.setPosition(yG, 0, -CG, 0), GG.meshApi.updateVariation(yG, bG, ZG);
-         const kG = {
-           wool: "Sheared" !== wG,
- ... (11 more removed lines; see GitHub link above)
+       return new Int8Array(LM(MM), 0, MM)
```

#### 10. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L162-L188` → after: `L63-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L63-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L63-L65) · [Before (L162-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L162-L188)

```diff
-     class MG {
-       constructor(GG, bG) {
-         this.place = bG, this.remove = null;
-         const {
-           engine: ZG,
-           Ah: wG,
-           canvas: SG
-         } = vG();
-         GG.appendChild(SG), ZG.resize(), ZG.runRenderLoop((() => {
-           wG.render()
-         }))
-       }
-       show(GG) {
-         var bG;
-         null === (bG = this.remove) || void 0 === bG || bG.call(this), this.remove = this.place(GG)
-       }
- ... (11 more removed lines; see GitHub link above)
+ 
+     function dM(MM) {
+       return new Int16Array(LM(2 * MM), 0, MM)
```

#### 11. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L190-L234` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L67-L69) · [Before (L190-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L190-L234)

```diff
-     class AG {
-       constructor(GG) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new MG(GG, (() => () => {}))
-       }
-       show(GG) {
-         GG.figures !== this.view.figures && this.preload(GG.figures), this.view = GG, this.place()
-       }
-       resize(GG, bG) {
-         this.preview.resize(GG, bG), this.aspect = GG / bG, this.place()
-       }
-       close() {
-         this.preview.close();
-         for (const GG of this.placed) null === GG || void 0 === GG || GG.remove();
- ... (29 more removed lines; see GitHub link above)
+ 
+     function yM(MM) {
+       return new Int32Array(LM(4 * MM), 0, MM)
```

#### 12. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L238` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L73) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L238)

```diff
-       return new MG(GG, lG)
+       return new Float32Array(LM(4 * MM), 0, MM)
```

#### 13. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L242` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L77) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L242)

```diff
-       return new AG(GG)
+       return new Float64Array(LM(8 * MM), 0, MM)
```

#### 14. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L246` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L81) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L246)

```diff
-       return new MG(GG, PG)
+       return aM ? new Uint8ClampedArray(LM(MM), 0, MM) : mM(MM)
```

#### 15. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L260-L270` → after: `L85-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L85-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L85-L186) · [Before (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L260-L270)

```diff
-       return `\n\t\t\t\t${(0,kG.z)(GG,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, kG.B)(GG, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, kG.B)(GG, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, kG.m)(GG, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+       return new DataView(LM(MM), 0, MM)
+     }
+     rM.free = function(MM) {
+       if (jM(MM)) QM[OM.log2(MM.length)].push(MM);
+       else {
+         if ("[object ArrayBuffer]" !== Object.prototype.toString.call(MM) && (MM = MM.buffer), !MM) return;
+         var rM = MM.length || MM.byteLength,
+           iM = 0 | OM.log2(rM);
+         nM[iM].push(MM)
+       }
+     }, rM.freeUint8 = rM.freeUint16 = rM.freeUint32 = rM.freeInt8 = rM.freeInt16 = rM.freeInt32 = rM.freeFloat32 = rM.freeFloat = rM.freeFloat64 = rM.freeDouble = rM.freeUint8Clamped = rM.freeDataView = function(MM) {
+       zM(MM.buffer)
+     }, rM.freeArrayBuffer = zM, rM.freeBuffer = function(MM) {
+       QM[OM.log2(MM.length)].push(MM)
+     }, rM.malloc = function(MM, rM) {
+       if (void 0 === rM || "arraybuffer" === rM) return LM(MM);
+ ... (86 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L274-L277` → after: `L210-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L210-L212) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L274-L277)

```diff
-       let ZG = (0, kG.ub)(GG, "skele" + (bG - 1));
-       for (let SG = bG - 2; SG >= 0; SG--) ZG = (0, kG.nb)(GG, `boneIdx == ${SG}`, (0, kG.ub)(GG, `skele${SG}`), ZG);
-       const wG = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,kG.B)(GG,"int","boneIdx",(0,kG.qb)(GG,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,kG.B)(GG,"vec3","bone",ZG)}\n\t\t\t\t${(0,kG.B)(GG,"vec2","pivot",(0,kG.m)(GG,"vec2","0.0",`${(0,kG.Cb)(GG,"position")}.z`))}\n\t\t\t\t${(0,kG.V)(GG)?`positi … [truncated]
+       for (var iM = 0; iM < MM; ++iM)
+         if (!(rM[iM] <= rM[iM + MM])) return !0;
+       return !1
```

#### 17. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L280-L288` → after: `L215-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L215-L220) · [Before (L280-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L280-L288)

```diff
-     function VG(GG) {
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,kG.m)(GG,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
-     }
-     const pG = {
-         x: 0,
-         y: 0,
-         z: 0,
-         hZG(GG, bG) {
-           return this.x = GG[bG], this.y = GG[bG + 1], this.z = GG[bG + 2], this
+     function nM(MM, rM, iM, OM) {
+       for (var SM = 0, jM = 0, aM = 0, nM = MM.length; aM < nM; ++aM) {
+         var QM = MM[aM];
+         if (!PM(rM, QM)) {
+           for (var zM = 0; zM < 2 * rM; ++zM) iM[SM++] = QM[zM];
+           OM[jM++] = aM
```

#### 18. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L290-L363` → after: `L222-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L222-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L222-L241) · [Before (L290-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L290-L363)

```diff
-       },
-       fG = {
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (GG, bG) => ({
-           ...(0, wG.c)("CAPE"),
-           BLOXD_CAPE_BONES: `${GG}`,
-           BLOXD_CAPE_MAX_Y: (0, SG.tb)(bG)
-         }),
-         getUniforms(GG) {
-           return (0, LG.d)(function(GG) {
-             const bG = [];
-             for (let ZG = 0; ZG < GG; ZG++) bG.push({
-               name: `skele${ZG}`,
-               type: "highp vec3"
- ... (58 more removed lines; see GitHub link above)
+       }
+       return jM
+     }
+ 
+     function QM(MM, rM, iM, OM) {
+       var PM = MM.length,
+         QM = rM.length;
+       if (!(PM <= 0 || QM <= 0)) {
+         var zM = MM[0].length >>> 1;
+         if (!(zM <= 0)) {
+           var LM, mM = SM.mallocDouble(2 * zM * PM),
+             HM = SM.mallocInt32(PM);
+           if ((PM = nM(MM, zM, mM, HM)) > 0) {
+             if (1 === zM && OM) jM.init(PM), LM = jM.sweepComplete(zM, iM, 0, PM, mM, HM, 0, PM, mM, HM);
+             else {
+               var hM = SM.mallocDouble(2 * zM * QM),
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L366-L427` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L245-L246) · [Before (L366-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L366-L427)

```diff
-       };
-     (0, yG.n)(pG)
-   },
-   41509: (GG, bG, ZG) => {
-     ZG.r(bG), ZG.d(bG, {
-       CapeMaterialPlugin: () => EG,
-       HueTintMaterialPlugin: () => oG,
-       LifeformMaterialPlugin: () => XG,
-       OverlayMaterialPlugin: () => uG
-     });
-     var wG = ZG(41515),
-       SG = ZG(38416);
-     class LG extends((0, wG.g)(SG.b)) {}(0, wG.i)(SG.b, LG);
-     var yG = ZG(37518);
-     class kG extends((0, wG.g)(yG.e)) {}(0, wG.i)(yG.e, kG);
-     var UG = ZG(38256);
- ... (46 more removed lines; see GitHub link above)
+       }
+     }
```

#### 20. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L430-L434` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L249) · [Before (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L430-L434)

```diff
-       return Object.assign((function(GG, ZG, wG, SG) {
-         return bG(this.featureState, GG, ZG, wG, SG)
-       }), {
-         BQ: GG
-       })
+       OM.push([MM, rM])
```

#### 21. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L438-L443` → after: `L266-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L266-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L266-L280) · [Before (L438-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L438-L443)

```diff
-       const bG = class extends QG.b {
-           constructor(bG, ZG) {
-             const wG = (0, hG.eb)(bG),
-               SG = wG && (0, hG.z)(wG, GG.name);
-             for (var LG = arguments.length, yG = new Array(LG > 2 ? LG - 2 : 0), kG = 2; kG < LG; kG++) yG[kG - 2] = arguments[kG];
-             super(bG, GG.name, GG.priority, SG ? SG.defines : GG.defines(...yG), !1), this.featureState = void 0, this.featureState = ZG, this._pluginManager._addPlugin(this), this._enable(!0), (0, hG.B)(this._material, GG, this.featureState, this._pluginDefineNames)
+       var rM = "bruteForce" + (MM ? "Full" : "Partial"),
+         OM = [],
+         aM = mM.slice();
+       MM || aM.splice(3, 0, SM);
+       var PM = ["function " + rM + "(" + aM.join() + "){"];
+ 
+       function nM(rM, SM) {
+         var aM = function(MM, rM, OM) {
+           var SM = "bruteForce" + (MM ? "Red" : "Blue") + (rM ? "Flip" : "") + (OM ? "Full" : ""),
+             aM = ["function ", SM, "(", mM.join(), "){", "var ", jM, "=2*", iM, ";"],
+             PM = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
+             nM = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (OM ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
+           return MM ? aM.push(PM, "Q", ":", nM) : aM.push(nM, "Q", ":", PM), OM ? aM.push("if(y1<x0||x1<y0)continue;") : rM ? aM.push("if(y0<=x0||x1<y0)continue;") : aM.push("if(y0<x0||x1<y0)continue;"), aM.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b … [truncated]
+             name: SM,
+             code: aM.join("")
```

#### 22. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L445-L446` → after: `L282-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L282-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L282-L336) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L445-L446)

```diff
-           getClassName() {
-             return GG.className
+         }(rM, SM, MM);
+         OM.push(aM.code), PM.push("return " + aM.name + "(" + mM.join() + ");")
+       }
+       PM.push("if(re-rs>be-bs){"), MM ? (nM(!0, !1), PM.push("}else{"), nM(!1, !1)) : (PM.push("if(fp){"), nM(!0, !0), PM.push("}else{"), nM(!0, !1), PM.push("}}else{if(fp){"), nM(!1, !0), PM.push("}else{"), nM(!1, !1), PM.push("}")), PM.push("}}return " + rM);
+       var QM = OM.join("") + PM.join("");
+       return new Function(QM)()
+     }
+     rM.partial = HM(!1), rM.full = HM(!0)
+   },
+   39296: (MM, rM, iM) => {
+     MM.exports = function(MM, rM, iM, jM, zM, gM, uM, RM, pM) {
+       ! function(MM, rM) {
+         var iM = 8 * SM.log2(rM + 1) * (MM + 1) | 0,
+           jM = SM.nextPow2(UM * iM);
+         CM.length < jM && (OM.free(CM), CM = OM.mallocInt32(jM));
+         var aM = SM.nextPow2(GM * iM);
+ ... (39 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L448-L449` → after: `L338-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L338-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L338-L362) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L448-L449)

```diff
-           isCompatible(GG) {
-             return GG === dG.c.GLSL || GG === dG.c.WGSL
+           var Mr = hM(MM, ZM, oM, fM, IM, KM, vM, FM);
+           if (oM < Mr)
+             if (MM * (Mr - oM) < LM) {
+               if (void 0 !== (WM = PM(MM, ZM + 1, rM, oM, Mr, IM, KM, YM, NM, qM, TM))) return WM
+             } else if (ZM === MM - 2) {
+             if (void 0 !== (WM = BM ? nM.sweepBipartite(MM, rM, YM, NM, qM, TM, oM, Mr, IM, KM) : nM.sweepBipartite(MM, rM, oM, Mr, IM, KM, YM, NM, qM, TM))) return WM
+           } else bM(sM++, ZM + 1, oM, Mr, YM, NM, BM, -1 / 0, 1 / 0), bM(sM++, ZM + 1, YM, NM, oM, Mr, 1 ^ BM, -1 / 0, 1 / 0);
+           if (Mr < fM) {
+             var rr = QM(MM, ZM, YM, NM, qM, TM),
+               ir = qM[DM * rr + ZM],
+               Or = JM(MM, ZM, rr, NM, qM, TM, ir);
+             if (Or < NM && bM(sM++, ZM, Mr, fM, Or, NM, (4 | BM) + (XM ? 16 : 0), ir, FM), YM < rr && bM(sM++, ZM, Mr, fM, YM, rr, (2 | BM) + (XM ? 16 : 0), vM, ir), rr + 1 === Or) {
+               if (void 0 !== (WM = XM ? tM(MM, ZM, rM, Mr, fM, IM, KM, rr, qM, TM[rr]) : wM(MM, ZM, rM, BM, Mr, fM, IM, KM, rr, qM, TM[rr]))) return WM
+             } else if (rr < Or) {
+               var Sr;
+               if (XM) {
+ ... (9 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L464` → after: `L366-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L366-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L366-L393) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L464)

```diff
-       return bG
+     };
+     var OM = iM(39276),
+       SM = iM(39280),
+       jM = iM(39299),
+       aM = jM.partial,
+       PM = jM.full,
+       nM = iM(39288),
+       QM = iM(39308),
+       zM = iM(39316),
+       LM = 128,
+       mM = 1 << 22,
+       HM = 1 << 22,
+       hM = zM("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
+       JM = zM("lo===p0", ["p0"]),
+       dM = zM("lo<p0", ["p0"]),
+       yM = zM("hi<=p0", ["p0"]),
+ ... (12 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L471-L481` → after: `L396-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L396-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L396-L408) · [Before (L471-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L471-L481)

```diff
-     function uG(GG, bG, ZG) {
-       return (0, XG.g)(ZG, bG.urls, (() => async function(GG, bG, ZG) {
-         const {
-           width: wG
-         } = GG[0].getSize(), SG = GG.map(((GG, ZG) => {
-           var SG;
-           const LG = Math.round(GG.getSize().height / wG),
-             yG = null === bG || void 0 === bG ? void 0 : bG[ZG];
-           return {
-             pixels: yG && yG.byteLength === wG * wG * LG * 4 ? yG : null !== (SG = iG.get(GG.getInternalTexture())) && void 0 !== SG ? SG : GG._readPixelsSync(),
-             layers: LG
+     function wM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
+       var LM = 2 * MM,
+         mM = nM * LM,
+         HM = QM[mM + rM];
+       MM: for (var hM = SM, JM = SM * LM; hM < jM; ++hM, JM += LM) {
+         var dM = aM[JM + rM],
+           yM = aM[JM + rM + MM];
+         if (!(HM < dM || yM < HM) && (!OM || HM !== dM)) {
+           for (var lM, EM = PM[hM], UM = rM + 1; UM < MM; ++UM) {
+             dM = aM[JM + UM], yM = aM[JM + UM + MM];
+             var GM = QM[mM + UM],
+               CM = QM[mM + UM + MM];
+             if (yM < GM || CM < dM) continue MM
```

#### 26. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L483-L490` → after: `L410-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L410-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L410-L432) · [Before (L483-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L483-L490)

```diff
-         })), LG = ZG.CK().getCaps().texture2DArrayMaxLayerCount, kG = (0, XG.c)(SG, wG, LG).map((GG => {
-           let {
-             pixels: bG,
-             layers: SG
-           } = GG;
-           return {
-             atlas: new oG.b(bG, wG, wG, SG, EG.b.TEXTUREFORMAT_RGBA, ZG, !0, !1, yG.d.NEAREST_NEAREST_MIPLINEAR),
-             layers: SG
+           if (void 0 !== (lM = OM ? iM(zM, EM) : iM(EM, zM))) return lM
+         }
+       }
+     }
+ 
+     function tM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
+       var zM = 2 * MM,
+         LM = PM * zM,
+         mM = nM[LM + rM];
+       MM: for (var HM = OM, hM = OM * zM; HM < SM; ++HM, hM += zM) {
+         var JM = aM[HM];
+         if (JM !== QM) {
+           var dM = jM[hM + rM],
+             yM = jM[hM + rM + MM];
+           if (!(mM < dM || yM < mM)) {
+             for (var lM = rM + 1; lM < MM; ++lM) {
+ ... (7 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L492-L569` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L434) · [Before (L492-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L492-L569)

```diff
-         }));
-         return GG.forEach(((GG, bG) => {
-           const wG = GG.getInternalTexture();
-           iG.has(wG) || (! function(GG, bG) {
-             const ZG = bG.createRawTexture(new Uint8Array(4), 1, 1, EG.b.TEXTUREFORMAT_RGBA, !1, !1, yG.d.NEAREST_SAMPLINGMODE);
-             GG._hardwareTexture.release(), bG.unbindAllTextures(), ZG._swapAndDie(GG, !1)
-           }(wG, ZG.CK()), iG.set(wG, SG[bG].pixels))
-         })), kG
-       }(GG, bG.pixels, ZG)))
-     }
-     const iG = new WeakMap;
-     var CG = ZG(38248);
-     class WG extends(rG(UG.i)) {
-       constructor(GG, bG) {
-         super(GG, bG), this.loaded = new Set, this.mirrors = void 0, this.mirrors = bG.textures.map((GG => GG.mirror)), this.mirrors.forEach(((GG, bG) => {
-           GG.onLoadObservable.add((GG => {
- ... (62 more removed lines; see GitHub link above)
+         }
```

#### 28. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L571-L572` → after: `L436-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L436-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L436-L477) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L571-L572)

```diff
-       dispose(GG) {
-         (0, sG.k)(this._material), super.dispose(GG)
+     }
+   },
+   39308: (MM, rM, iM) => {
+     MM.exports = function(MM, rM, iM, aM, PM, nM) {
+       if (aM <= iM + 1) return iM;
+       var QM = iM,
+         zM = aM,
+         LM = aM + iM >>> 1,
+         mM = 2 * MM,
+         HM = LM,
+         hM = PM[mM * LM + rM];
+       for (; QM < zM;) {
+         if (zM - QM < SM) {
+           jM(MM, rM, QM, zM, PM, nM), hM = PM[mM * LM + rM];
+           break
+         }
+ ... (26 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L576-L616` → after: `L512-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L512-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L512-L519) · [Before (L576-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L576-L616)

```diff
-     function nG(GG, bG) {
-       if (!(bG instanceof wG.StandardMaterial) || bG.specularTexture) return;
-       const {
-         r: ZG,
-         g: SG,
-         b: LG
-       } = bG.specularColor;
-       0 === ZG && 0 === SG && 0 === LG && (GG.SPECULARTERM = !1)
-     }(0, VG.h)({
-       disableUnusedSpecularTerm: nG
-     });
-     var gG = ZG(37647),
-       eG = ZG(37980);
-     const RG = new RegExp(`^#define ${YG.c}\\s*$`, "m");
-     class TG extends(rG(YG.f)) {
-       constructor(GG, bG) {
- ... (25 more removed lines; see GitHub link above)
+     function iM(MM, rM, iM) {
+       for (var OM = 2 * (MM + 1), SM = MM + 1; SM <= rM; ++SM) {
+         for (var jM = iM[OM++], aM = iM[OM++], PM = SM, nM = OM - 2; PM-- > MM;) {
+           var QM = iM[nM - 2],
+             zM = iM[nM - 1];
+           if (QM < jM) break;
+           if (QM === jM && zM < aM) break;
+           iM[nM] = QM, iM[nM + 1] = zM, nM -= 2
```

#### 30. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L618-L621` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L521) · [Before (L618-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L618-L621)

```diff
-         return null !== bG.effect
-       }
-       dispose(GG) {
-         this.pK = !0, super.dispose(GG)
+         iM[nM] = jM, iM[nM + 1] = aM
```

#### 31. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L626-L627` → after: `L525-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L525-L529) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L626-L627)

```diff
-     function tG(GG, bG) {
-       HG.set(GG, bG)
+     function OM(MM, rM, iM) {
+       rM *= 2;
+       var OM = iM[MM *= 2],
+         SM = iM[MM + 1];
+       iM[MM] = iM[rM], iM[MM + 1] = iM[rM + 1], iM[rM] = OM, iM[rM + 1] = SM
```

#### 32. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L629-L635` → after: `L531-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L531-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L531-L606) · [Before (L629-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L629-L635)

```diff
-     tG(kG.c, zG), tG(UG.i, WG), tG(YG.f, TG), tG(VG.l, qG), (0, pG.c)({
-       create: (GG, bG) => {
-         const ZG = new wG.StandardMaterial(GG.name, bG);
-         return (0, gG.r)(GG, ZG), ZG.detailMap._pluginDefineNames
-       },
-       write: (GG, bG, ZG) => {
-         (0, gG.U)(GG.mirror, bG, ZG)
+ 
+     function SM(MM, rM, iM) {
+       rM *= 2, iM[MM *= 2] = iM[rM], iM[MM + 1] = iM[rM + 1]
+     }
+ 
+     function jM(MM, rM, iM, OM) {
+       rM *= 2, iM *= 2;
+       var SM = OM[MM *= 2],
+         jM = OM[MM + 1];
+       OM[MM] = OM[rM], OM[MM + 1] = OM[rM + 1], OM[rM] = OM[iM], OM[rM + 1] = OM[iM + 1], OM[iM] = SM, OM[iM + 1] = jM
+     }
+ 
+     function aM(MM, rM, iM, OM, SM) {
+       rM *= 2, SM[MM *= 2] = SM[rM], SM[rM] = iM, SM[MM + 1] = SM[rM + 1], SM[rM + 1] = OM
+     }
+ 
+ ... (60 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L637-L640` → after: `L608-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L608-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L608-L641) · [Before (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L637-L640)

```diff
-       addFeature: (GG, bG, ZG) => {
-         const wG = HG.get(bG.feature);
-         if (!wG) throw new Error(`${bG.feature.name} has no plugin class (registerPluginClass)`);
-         new wG(GG.mirror, bG.state, ...ZG)
+       sweepBipartite: function(MM, rM, iM, OM, SM, PM, mM, HM, yM, lM) {
+         for (var EM = 0, UM = 2 * MM, GM = MM - 1, CM = UM - 1, eM = iM; eM < OM; ++eM) {
+           var bM = PM[eM],
+             wM = UM * eM;
+           hM[EM++] = SM[wM + GM], hM[EM++] = -(bM + 1), hM[EM++] = SM[wM + CM], hM[EM++] = bM
+         }
+         for (eM = mM; eM < HM; ++eM) {
+           bM = lM[eM] + aM;
+           var tM = UM * eM;
+           hM[EM++] = yM[tM + GM], hM[EM++] = -bM, hM[EM++] = yM[tM + CM], hM[EM++] = bM
+         }
+         var gM = EM >>> 1;
+         jM(hM, gM);
+         var uM = 0,
+           RM = 0;
+         for (eM = 0; eM < gM; ++eM) {
+ ... (18 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L642-L653` → after: `L643-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L643-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L643-L647) · [Before (L642-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L642-L653)

```diff
-       texture: (GG, bG, ZG) => {
-         let {
-           url: wG,
-           noMipmap: SG,
-           invertY: LG,
-           samplingMode: kG,
-           data: UG,
-           sets: YG
-         } = ZG;
-         if (!UG) {
-           const ZG = new yG.d(wG, bG, SG, LG, kG);
-           return Object.assign(ZG, YG), void(0, fG.G)(GG, ZG)
+       sweepComplete: function(MM, rM, iM, OM, SM, aM, PM, yM, lM, EM) {
+         for (var UM = 0, GM = 2 * MM, CM = MM - 1, eM = GM - 1, bM = iM; bM < OM; ++bM) {
+           var wM = aM[bM] + 1 << 1,
+             tM = GM * bM;
+           hM[UM++] = SM[tM + CM], hM[UM++] = -wM, hM[UM++] = SM[tM + eM], hM[UM++] = wM
```

#### 35. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L655-L658` → after: `L649-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L649-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L649-L664) · [Before (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L655-L658)

```diff
-         const VG = {},
-           pG = new Promise(((GG, bG) => {
-             VG.onLoad = GG, VG.onError = (GG, ZG) => {
-               bG(new Error(`${UG.context}: ${(null===ZG||void 0===ZG?void 0:ZG.message)||GG||"Failed to load texture"}`))
+         for (bM = PM; bM < yM; ++bM) {
+           wM = EM[bM] + 1 << 1;
+           var gM = GM * bM;
+           hM[UM++] = lM[gM + CM], hM[UM++] = 1 | -wM, hM[UM++] = lM[gM + eM], hM[UM++] = 1 | wM
+         }
+         var uM = UM >>> 1;
+         jM(hM, uM);
+         var RM = 0,
+           pM = 0,
+           WM = 0;
+         for (bM = 0; bM < uM; ++bM) {
+           var sM = 0 | hM[2 * bM + 1],
+             DM = 1 & sM;
+           if (bM < uM - 1 && sM >> 1 === hM[2 * bM + 3] >> 1 && (DM = 2, bM += 1), sM < 0) {
+             for (var kM = -(sM >> 1) - 1, ZM = 0; ZM < WM; ++ZM) {
+               if (void 0 !== (oM = rM(mM[ZM], kM))) return oM
```

#### 36. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L660-L678` → after: `L666-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L666-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L666-L680) · [Before (L660-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L660-L678)

```diff
-           })),
-           {
-             mimeType: QG,
-             bytes: KG,
-             label: hG
-           } = UG,
-           dG = {
-             noMipmap: SG,
-             invertY: !1,
-             samplingMode: kG,
-             ...VG,
-             mimeType: QG,
-             loaderOptions: void 0,
-             useSRGBBuffer: !1
-           },
-           JG = new yG.d(null, bG, dG);
- ... (3 more removed lines; see GitHub link above)
+             if (0 !== DM)
+               for (ZM = 0; ZM < RM; ++ZM) {
+                 if (void 0 !== (oM = rM(nM[ZM], kM))) return oM
+               }
+             if (1 !== DM)
+               for (ZM = 0; ZM < pM; ++ZM) {
+                 var oM;
+                 if (void 0 !== (oM = rM(zM[ZM], kM))) return oM
+               }
+             0 === DM ? dM(nM, QM, RM++, kM) : 1 === DM ? dM(zM, LM, pM++, kM) : 2 === DM && dM(mM, HM, WM++, kM)
+           } else {
+             kM = (sM >> 1) - 1;
+             0 === DM ? JM(nM, QM, RM--, kM) : 1 === DM ? JM(zM, LM, pM--, kM) : 2 === DM && JM(mM, HM, WM--, kM)
+           }
+         }
```

#### 37. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L680-L692` → after: `L682-L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L682-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L682-L725) · [Before (L680-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L680-L692)

```diff
-       cube: (GG, bG, ZG) => {
-         let {
-           rootUrl: wG,
-           files: LG,
-           noMipmap: kG,
-           luminance: UG
-         } = ZG;
-         const {
-           samplingMode: YG
-         } = GG.sampler, VG = YG === (0, fG.x)(kG) ? null : () => {
-           (0, gG.K)(pG, YG)
-         }, pG = new SG.b(wG, bG, null, kG, LG, VG, null, (0, fG.v)(UG));
-         pG.coordinatesMode = yG.d.SKYBOX_MODE, (0, fG.G)(GG, pG)
+       scanBipartite: function(MM, rM, iM, OM, SM, PM, zM, LM, mM, HM, yM, lM) {
+         var EM = 0,
+           UM = 2 * MM,
+           GM = rM,
+           CM = rM + MM,
+           eM = 1,
+           bM = 1;
+         OM ? bM = aM : eM = aM;
+         for (var wM = SM; wM < PM; ++wM) {
+           var tM = wM + eM,
+             gM = UM * wM;
+           hM[EM++] = zM[gM + GM], hM[EM++] = -tM, hM[EM++] = zM[gM + CM], hM[EM++] = tM
+         }
+         for (wM = mM; wM < HM; ++wM) {
+           tM = wM + bM;
+           var uM = UM * wM;
+ ... (28 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L694-L709` → after: `L727-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L727-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L727-L770) · [Before (L694-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L694-L709)

```diff
-       canvas: (GG, bG, ZG) => {
-         let {
-           width: wG,
-           height: SG,
-           mipmaps: kG,
-           samplingMode: UG,
-           hasAlpha: YG = !1,
-           wrap: VG = yG.d.CLAMP_ADDRESSMODE
-         } = ZG;
-         const pG = new LG.b(bG, {
-           width: wG,
-           height: SG
-         }, GG, kG, UG);
-         pG.hasAlpha = YG, pG.wrapU = VG, pG.wrapV = VG;
-         const fG = (0, gG.B)(pG);
-         return (0, gG.E)(fG, pG), fG
+       scanComplete: function(MM, rM, iM, OM, SM, PM, QM, zM, LM, mM, HM) {
+         for (var JM = 0, dM = 2 * MM, yM = rM, lM = rM + MM, EM = OM; EM < SM; ++EM) {
+           var UM = EM + aM,
+             GM = dM * EM;
+           hM[JM++] = PM[GM + yM], hM[JM++] = -UM, hM[JM++] = PM[GM + lM], hM[JM++] = UM
+         }
+         for (EM = zM; EM < LM; ++EM) {
+           UM = EM + 1;
+           var CM = dM * EM;
+           hM[JM++] = mM[CM + yM], hM[JM++] = -UM
+         }
+         var eM = JM >>> 1;
+         jM(hM, eM);
+         var bM = 0;
+         for (EM = 0; EM < eM; ++EM) {
+           var wM = 0 | hM[2 * EM + 1];
+ ... (28 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L711` → after: `L772-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L772-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L772-L794) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L711)

```diff
-     })
+     };
+     var OM = iM(39276),
+       SM = iM(39280),
+       jM = iM(39294),
+       aM = 1 << 28,
+       PM = 1024,
+       nM = OM.mallocInt32(PM),
+       QM = OM.mallocInt32(PM),
+       zM = OM.mallocInt32(PM),
+       LM = OM.mallocInt32(PM),
+       mM = OM.mallocInt32(PM),
+       HM = OM.mallocInt32(PM),
+       hM = OM.mallocDouble(8192);
+ 
+     function JM(MM, rM, iM, OM) {
+       var SM = rM[OM],
+ ... (7 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L713-L730` → after: `L796-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L796-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L796-L843) · [Before (L713-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L713-L730)

```diff
-   41565: (GG, bG, ZG) => {
-     ZG.d(bG, {
-       e: () => VG,
-       g: () => pG,
-       k: () => fG
-     });
-     var wG = ZG(41552),
-       SG = ZG(40447),
-       LG = ZG(40681),
-       yG = ZG(40797),
-       kG = ZG(41560),
-       UG = ZG(40795),
-       YG = ZG(37845);
-     class VG extends yG.e {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (GG, bG) => {
- ... (2 more removed lines; see GitHub link above)
+   39283: MM => {
+     function rM(MM, iM, OM) {
+       var SM = 0 | MM[OM];
+       if (SM <= 0) return [];
+       var jM, aM = new Array(SM);
+       if (OM === MM.length - 1)
+         for (jM = 0; jM < SM; ++jM) aM[jM] = iM;
+       else
+         for (jM = 0; jM < SM; ++jM) aM[jM] = rM(MM, iM, OM + 1);
+       return aM
+     }
+     MM.exports = function(MM, iM) {
+       switch ("undefined" === typeof iM && (iM = 0), typeof MM) {
+         case "number":
+           if (MM > 0) return function(MM, rM) {
+             var iM, OM;
+ ... (32 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L732-L734` → after: `L845-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L845-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L845-L847) · [Before (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L732-L734)

```diff
-       link(GG) {
-         var bG;
-         (0, YG.n)(GG), this.model = GG, null === (bG = this.onLinked) || void 0 === bG || bG.call(this, GG)
+ 
+       function QM() {
+         PM.timeout || (PM.timeout = !0, setTimeout(zM, 1))
```

#### 42. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L736-L793` → after: `L849-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L849-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L849-L851) · [Before (L736-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L736-L793)

```diff
-       relink() {
-         this.release();
-         const GG = [];
-         for (const SG of Object.values(this._vertexBuffers))
-           if (!SG.getIsInstanced()) {
-             const {
-               byteOffset: bG,
-               byteStride: ZG,
-               type: wG,
-               normalized: LG
-             } = SG;
-             GG.push({
-               kind: SG.getKind(),
-               data: SG.getData(),
-               offset: bG,
-               stride: ZG,
- ... (42 more removed lines; see GitHub link above)
+ 
+       function zM() {
+         PM.timeout = !1, LM()
```

#### 43. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L795-L802` → after: `L853-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L853-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L853-L971) · [Before (L795-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L795-L802)

```diff
-       static mergeMeshes(GG, bG, ZG, wG, SG, LG) {
-         const UG = GG[0].Dv(),
-           YG = new kG.d(GG[0].name + "_merged", UG),
-           pG = new VG(yG.e.RandomId(), UG, void 0, !1, YG);
-         try {
-           if (!kG.d.MergeMeshes(GG, bG, ZG, YG, SG, LG)) return YG.dispose(), null
-         } catch (fG) {
-           throw YG.dispose(), fG
+ 
+       function LM() {
+         PM.multiComps.length && function(MM) {
+           for (var rM = 0; rM < MM.length; rM++) {
+             var {
+               entID: iM,
+               data: OM
+             } = MM[rM], SM = OM.hash[iM];
+             if (SM) {
+               for (var jM = 0; jM < SM.length; jM++) SM[jM] || (SM.splice(jM, 1), jM--);
+               0 === SM.length && (OM.remove(iM), PM.removals.push(OM))
+             }
+           }
+           MM.length = 0
+         }(PM.multiComps), PM.removals.length && function(MM) {
+           for (var rM = 0; rM < MM.length; rM++) {
+ ... (103 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L804` → after: `L973-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L973-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L973-L988) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L804)

```diff
-         return pG.relink(), YG
+         return MM
+       }, this.removeMultiComponent = function(iM, OM, jM) {
+         var aM = rM[OM],
+           nM = SM[OM];
+         if (!nM) throw new Error(`Unknown component: ${OM}.`);
+         if (!aM.multi) throw new Error("removeMultiComponent called on non-multi component");
+         return function(MM, rM, iM, OM) {
+           var SM = iM.hash[MM];
+           if (SM) {
+             var jM = SM[OM];
+             jM && (SM[OM] = null, rM.vW && rM.vW(MM, jM), PM.multiComps.push({
+               entID: MM,
+               data: iM
+             }), QM())
+           }
+         }(iM, aM, nM, jM), MM
```

#### 45. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L806-L807` → after: `L990-L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L990-L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L990-L1016) · [Before (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L806-L807)

```diff
-       removeVerticesData(GG) {
-         this.releaseUnlessInstanced(GG), super.removeVerticesData(GG)
+     };
+     var OM = iM(39243)
+   },
+   39243: MM => {
+     function rM(MM, rM) {
+       var iM = MM._map[rM];
+       if (delete MM.hash[rM], delete MM._map[rM], iM === MM.list.length - 1) MM.list.pop(), MM._idList.pop();
+       else {
+         var OM = MM.list.pop();
+         MM.list[iM] = OM;
+         var SM = MM._idList.pop();
+         MM._idList[iM] = SM, MM._map[SM] = iM
+       }
+     }
+     MM.exports = class {
+       constructor() {
+ ... (11 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L810` → after: `L1019-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1019-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1019-L1104) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L810)

```diff
-         this.release(), super.dispose()
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
+       }
+       flush() {
+         for (var MM = 0; MM < this._pendingRemovals.length; MM++) {
+           var iM = this._pendingRemovals[MM];
+           null === this.hash[iM] && rM(this, iM)
+         }
+         this._pendingRemovals.length = 0
+       }
+     }
+   },
+   39027: (MM, rM, iM) => {
+     MM = iM.nmd(MM);
+     var OM = "__lodash_hash_undefined__",
+       SM = 9007199254740991,
+       jM = "[object Arguments]",
+ ... (70 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L812-L814` → after: `L1106-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1106-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1106-L1156) · [Before (L812-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L812-L814)

```diff
-       releaseUnlessInstanced(GG) {
-         var bG;
-         GG && null !== (bG = this.getVertexBuffer(GG)) && void 0 !== bG && bG.getIsInstanced() || this.release()
+     }
+ 
+     function IM(MM) {
+       var rM = -1,
+         iM = Array(MM.size);
+       return MM.forEach((function(MM) {
+         iM[++rM] = MM
+       })), iM
+     }
+     var KM = Array.prototype,
+       qM = Function.prototype,
+       TM = Object.prototype,
+       VM = oM["__core-js_shared__"],
+       cM = function() {
+         var MM = /[^.]+$/.exec(VM && VM.keys && VM.keys.IE_PROTO || "");
+         return MM ? "Symbol(src)_1." + MM : ""
+ ... (35 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L816-L817` → after: `L1158-L1165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1158-L1165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1158-L1165) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L816-L817)

```diff
-       release() {
-         this.model && ((0, YG.v)(this.model), this.model = null)
+     }
+ 
+     function ur(MM) {
+       var rM = -1,
+         iM = MM ? MM.length : 0;
+       for (this.clear(); ++rM < iM;) {
+         var OM = MM[rM];
+         this.set(OM[0], OM[1])
```

#### 49. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L822-L836` → after: `L1200-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1200-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1200-L1296) · [Before (L822-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L822-L836)

```diff
-       let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kG.d(GG, ZG);
-       const SG = (0, YG.k)(bG),
-         {
-           positions: LG,
-           normals: pG,
-           uvs: fG,
-           indices: QG,
-           named: KG = {}
-         } = bG,
-         hG = new UG.e;
-       hG.positions = LG, hG.normals = null !== pG && void 0 !== pG ? pG : null, hG.uvs = null !== fG && void 0 !== fG ? fG : null, hG.indices = QG;
-       const dG = new VG(yG.e.RandomId(), ZG, hG, !1, wG);
-       for (const {
-           kind: yG,
-           components: kG
+       var OM = MM[rM];
+       rr.call(MM, rM) && Xr(OM, iM) && (void 0 !== iM || rM in MM) || (MM[rM] = iM)
+     }
+ 
+     function Dr(MM, rM) {
+       for (var iM = MM.length; iM--;)
+         if (Xr(MM[iM][0], rM)) return iM;
+       return -1
+     }
+ 
+     function kr(MM, rM, iM, OM, SM, HM, lM) {
+       var WM;
+       if (OM && (WM = HM ? OM(MM, SM, HM, lM) : OM(MM)), void 0 !== WM) return WM;
+       if (!Vr(MM)) return MM;
+       var sM = Ir(MM);
+       if (sM) {
+ ... (81 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L838-L839` → after: `L1298-L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1298-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1298-L1315) · [Before (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L838-L839)

```diff
-         of SG.vertexAttributes) yG in KG && wG.setVerticesData(yG, KG[yG], !1, kG);
-       return dG.link(SG), wG
+       }
+       lM || (lM = new pr);
+       var oM = lM.get(MM);
+       if (oM) return oM;
+       if (lM.set(MM, WM), !sM) var fM = iM ? function(MM) {
+         return function(MM, rM, iM) {
+           var OM = rM(MM);
+           return Ir(MM) ? OM : function(MM, rM) {
+             for (var iM = -1, OM = rM.length, SM = MM.length; ++iM < OM;) MM[SM + iM] = rM[iM];
+             return MM
+           }(OM, iM(MM))
+         }(MM, cr, Ar)
+       }(MM) : cr(MM);
+       return function(MM, rM) {
+         for (var iM = -1, OM = MM ? MM.length : 0; ++iM < OM && !1 !== rM(MM[iM], iM, MM););
+       }(fM || MM, (function(SM, jM) {
+ ... (2 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L842-L856` → after: `L1318-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1318-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1318-L1320) · [Before (L842-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L842-L856)

```diff
-     function fG(GG, bG, ZG) {
-       let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const SG = new kG.d(GG, ZG),
-         {
-           positions: LG,
-           normals: yG,
-           uvs: YG,
-           indices: VG
-         } = bG;
-       return Object.assign(new UG.e, {
-         positions: LG,
-         normals: yG,
-         uvs: YG,
-         indices: VG
-       }).applyToMesh(SG, wG), SG
+     function Zr(MM) {
+       return !(!Vr(MM) || (rM = MM, cM && cM in rM)) && (Tr(MM) || FM(MM) ? Or : WM).test(Br(MM));
+       var rM
```

#### 52. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L858-L880` → after: `L1322-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1322-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1322-L1333) · [Before (L858-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L858-L880)

```diff
-   },
-   41544: (GG, bG, ZG) => {
-     function wG(GG, bG, ZG) {
-       const wG = bG * bG * 4,
-         SG = GG[0].layers,
-         LG = SG * (GG.length - 1) + GG[GG.length - 1].layers,
-         yG = new Uint8Array(LG * wG);
-       GG.forEach(((bG, ZG) => {
-         const LG = ZG + 1 < GG.length ? Math.min(bG.layers, SG) : bG.layers;
-         yG.set(new Uint8Array(bG.pixels.buffer, bG.pixels.byteOffset, LG * wG), ZG * SG * wG)
-       }));
-       const kG = Math.max(1, Math.min(LG, ZG || LG));
-       if (kG === LG) return [{
-         pixels: yG,
-         layers: LG
-       }];
- ... (7 more removed lines; see GitHub link above)
+ 
+     function or(MM) {
+       var rM = new MM.constructor(MM.byteLength);
+       return new ar(rM).set(new ar(MM)), rM
+     }
+ 
+     function fr(MM, rM, iM, OM) {
+       iM || (iM = {});
+       for (var SM = -1, jM = rM.length; ++SM < jM;) {
+         var aM = rM[SM],
+           PM = OM ? OM(iM[aM], MM[aM], aM, iM, MM) : void 0;
+         sr(iM, aM, void 0 === PM ? MM[aM] : PM)
```

#### 53. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L884-L886` → after: `L1337-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1337-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1337-L1461) · [Before (L884-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L884-L886)

```diff
-     ZG.d(bG, {
-       c: () => wG,
-       g: () => LG
+ 
+     function Yr(MM, rM) {
+       var iM = MM.__data__;
+       return function(MM) {
+         var rM = typeof MM;
+         return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
+       }(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
+     }
+ 
+     function Nr(MM, rM) {
+       var iM = function(MM, rM) {
+         return null == MM ? void 0 : MM[rM]
+       }(MM, rM);
+       return Zr(iM) ? iM : void 0
+     }
+     gr.prototype.clear = function() {
+ ... (109 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L888` → after: `L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1463) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L888)

```diff
-     const SG = new WeakMap;
+     var Ir = Array.isArray;
```

#### 55. `bundles/bloxd.io/chunks/js/251.js` (Changed code · before: `L892-L904` → after: `L1571-L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242bR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-59f02c1f0238add15e7a075edeaf4302a72f52c99d894a0a157b21372aaa242b) · [After (L1571-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/251.js#L1571-L1741) · [Before (L892-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/251.js#L892-L904)

```diff
-       const yG = null !== (wG = SG.get(GG)) && void 0 !== wG ? wG : new Map;
-       SG.set(GG, yG);
-       const kG = null !== (LG = yG.get(bG[0])) && void 0 !== LG ? LG : [];
-       yG.set(bG[0], kG);
-       const UG = kG.find((GG => GG.urls.length === bG.length && GG.urls.every(((GG, ZG) => GG === bG[ZG]))));
-       if (UG) return UG.built;
-       const YG = {
-         urls: [...bG],
-         built: ZG()
-       };
-       return kG.push(YG), YG.built.catch((() => {
-         kG.splice(kG.indexOf(YG), 1)
-       })), YG.built
+       return rM = (MM > 65535) << 4, rM |= iM = ((MM >>>= rM) > 255) << 3, rM |= iM = ((MM >>>= iM) > 15) << 2, (rM |= iM = ((MM >>>= iM) > 3) << 1) | (MM >>>= iM) >> 1
+     }, rM.log10 = function(MM) {
+       return MM >= 1e9 ? 9 : MM >= 1e8 ? 8 : MM >= 1e7 ? 7 : MM >= 1e6 ? 6 : MM >= 1e5 ? 5 : MM >= 1e4 ? 4 : MM >= 1e3 ? 3 : MM >= 100 ? 2 : MM >= 10 ? 1 : 0
+     }, rM.popCount = function(MM) {
+       return 16843009 * ((MM = (858993459 & (MM -= MM >>> 1 & 1431655765)) + (MM >>> 2 & 858993459)) + (MM >>> 4) & 252645135) >>> 24
+     }, rM.countTrailingZeros = iM, rM.nextPow2 = function(MM) {
+       return MM += 0 === MM, --MM, MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) + 1
+     }, rM.prevPow2 = function(MM) {
+       return MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) - (MM >>> 1)
+     }, rM.parity = function(MM) {
+       return MM ^= MM >>> 16, MM ^= MM >>> 8, MM ^= MM >>> 4, 27030 >>> (MM &= 15) & 1
+     };
+     var OM = new Array(256);
+     ! function(MM) {
+       for (var rM = 0; rM < 256; ++rM) {
+         var iM = rM,
+ ... (155 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/252.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/252.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f)

#### 1. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L2)

```diff
- export const ids = [252];
+ export const ids = [252, 258, 262];
```

#### 2. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L4)

```diff
-   41427: (GG, bG, ZG) => {
+   41354: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L6-L7)

```diff
-       e: () => LG,
-       f: () => yG
+       c: () => aM,
+       e: () => PM
```

#### 4. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L9-L17` → after: `L9-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L9-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L9-L93) · [Before (L9-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L9-L17)

```diff
-     var wG = ZG(1910);
-     let SG = !1;
- 
-     function LG() {
-       SG = !0
-     }
- 
-     function yG() {
-       SG && (SG = !1, (0, wG.d)())
+     var OM = iM(39711),
+       SM = iM(41121),
+       jM = iM(41323),
+       aM = {};
+     class PM {
+       constructor(MM) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = MM, this.checkInputs = () => {}
+       }
+       add(MM) {
+         const rM = MM.getSimpleName();
+         this.attached[rM] ? OM.e.Warn("camera input of type " + rM + " already exists on camera") : (this.attached[rM] = MM, MM.camera = this.camera, MM.checkInputs && (this.checkInputs = this._addCheckInputs(MM.checkInputs.bind(MM))), this.attachedToElement && MM.attachControl(t … [truncated]
+       }
+       remove(MM) {
+         for (const rM in this.attached) {
+           const iM = this.attached[rM];
+           if (iM === MM) return iM.detachControl(), iM.camera = null, delete this.attached[rM], void this.rebuildInputCheck()
+ ... (69 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L20` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L96) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L20)

```diff
-   41423: (GG, bG, ZG) => {
+   41358: (MM, rM, iM) => {
```

#### 6. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L22-L24` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L98) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L22-L24)

```diff
-       e: () => yG,
-       f: () => LG,
-       j: () => kG
+       e: () => OM.d
```

#### 7. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L26-L99` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L100-L101) · [Before (L26-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L26-L99)

```diff
-     var wG = ZG(40954),
-       SG = ZG(40971);
- 
-     function LG(GG) {
-       if (GG.queries.drawCensus() < wG.Bb.BYTES) return null;
-       const bG = GG.memoryData(GG.scratch(), wG.Bb.BYTES, 4, "the draw census");
-       return null === bG ? null : {
-         terrainOpaque: wG.Bb.terrainOpaque(bG, 0),
-         terrainTransparent: wG.Bb.terrainTransparent(bG, 0),
-         terrainPack: wG.Bb.terrainPack(bG, 0),
-         earthSky: wG.Bb.earthSky(bG, 0),
-         skyMeshes: wG.Bb.skyMeshes(bG, 0),
-         regular: wG.Bb.regular(bG, 0),
-         thin: wG.Bb.thin(bG, 0),
-         line: wG.Bb.line(bG, 0),
-         text: wG.Bb.text(bG, 0),
- ... (58 more removed lines; see GitHub link above)
+     var OM = iM(41362);
+     (0, OM.e)()
```

#### 8. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L101` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L103) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L101)

```diff
-   41410: (GG, bG, ZG) => {
+   41362: (MM, rM, iM) => {
```

#### 9. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L104-L105` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L106) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L104-L105)

```diff
-       f: () => fG,
-       i: () => QG
+       e: () => mM
```

#### 10. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L107-L119` → after: `L108-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L108-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L108-L191) · [Before (L107-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L107-L119)

```diff
-     var wG = ZG(1915),
-       SG = ZG(1257),
-       LG = ZG(40971),
-       yG = ZG(40989),
-       kG = ZG(40993),
-       UG = ZG(41012);
-     const YG = new SG.c;
-     let VG = !1;
- 
-     function pG(GG) {
-       const bG = (0, LG.f)();
-       return null !== bG && +GG === bG.api.localId
-     }
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(38173),
+       PM = iM(41366),
+       nM = iM(41328),
+       QM = iM(38085);
+     let zM = (() => {
+         var MM;
+         let rM, iM, nM = PM.d,
+           QM = [],
+           zM = [],
+           LM = [],
+           mM = [];
+         return MM = class extends nM {
+           constructor(MM, rM, iM, SM) {
+ ... (68 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L122-L140` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L194) · [Before (L122-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L122-L140)

```diff
-       VG || (VG = !0, (0, UG.l)(yG.j, (GG => {
-         var bG, ZG;
-         const wG = (0, kG.f)(yG.j, GG);
-         if (!(0, kG.d)(wG)) return;
-         const SG = wG;
-         pG(SG.cG) && QG(SG.lG, {
-           icon: SG.Rb,
-           level: SG.Hb,
-           displayName: null !== (bG = SG.jG) && void 0 !== bG ? bG : null,
-           durationMs: null !== (ZG = SG.Tb) && void 0 !== ZG ? ZG : null
-         })
-       })), (0, UG.l)(yG.U, (GG => {
-         const bG = (0, kG.f)(yG.U, GG);
-         if (!(0, kG.d)(bG)) return;
-         const ZG = bG;
-         pG(ZG.cG) && wG.e.remove(ZG.lG)
- ... (3 more removed lines; see GitHub link above)
+       LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_3", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.HemisphericLight", zM))
```

#### 12. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L142-L146` → after: `L196-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L196-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L196-L247) · [Before (L142-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L142-L146)

```diff
- 
-     function QG(GG, bG) {
-       wG.e.update(GG, bG), YG.forEach((bG => {
-         bG(GG)
-       }))
+   },
+   38167: (MM, rM, iM) => {
+     iM.d(rM, {
+       Color3: () => OM.d,
+       d: () => OM.h
+     });
+     var OM = iM(38173);
+     (0, OM.i)()
+   },
+   38740: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => SM
+     });
+     var OM = iM(38744);
+     class SM {
+       static GetPlanes(MM) {
+ ... (36 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L148-L150` → after: `L249-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L249-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L249-L330) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L148-L150)

```diff
-     const KG = {
-       localEffectUpdated: {
-         watch: GG => YG.add(GG)
+   },
+   38744: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => SM
+     });
+     var OM = iM(38040);
+     class SM {
+       constructor(MM, rM, iM, SM) {
+         this.normal = new OM.q(MM, rM, iM), this.d = SM
+       }
+       HOM() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+ ... (66 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L154` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L348) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L154)

```diff
-   41413: (GG, bG, ZG) => {
+   39078: (MM, rM, iM) => {
```

#### 15. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L156` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L350) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L156)

```diff
-       b: () => VG
+       e: () => OM
```

#### 16. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L158-L192` → after: `L352-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L352-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L352-L365) · [Before (L158-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L158-L192)

```diff
-     var wG = ZG(4818),
-       SG = ZG(4810),
-       LG = ZG(40999),
-       yG = ZG(41012);
-     const kG = new Set(wG.Q),
-       UG = wG.Q.map((GG => (new TextEncoder).encode(GG))),
-       YG = new Map;
- 
-     function VG(GG, bG) {
-       var ZG;
-       return null === (ZG = YG.get(GG)) || void 0 === ZG ? void 0 : ZG[bG]
-     }(0, yG.l)(wG.jc.NewOtherEntitySettings, (GG => {
-       GG.payloadKind === SG.jc.Msgpack && UG.some((bG => function(GG, bG) {
-         const ZG = bG[0];
-         for (let wG = GG.indexOf(ZG); - 1 !== wG && wG + bG.length <= GG.length; wG = GG.indexOf(ZG, wG + 1)) {
-           let ZG = 1;
- ... (19 more removed lines; see GitHub link above)
+     class OM {
+       constructor(MM, rM, iM, OM) {
+         this.x = MM, this.y = rM, this.width = iM, this.height = OM
+       }
+       toGlobal(MM, rM) {
+         return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
+       }
+       toGlobalToRef(MM, rM, iM) {
+         return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
+       }
+       clone() {
+         return new OM(this.x, this.y, this.width, this.height)
+       }
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L194` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L367) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L194)

```diff
-   41404: (GG, bG, ZG) => {
+   41495: (MM, rM, iM) => {
```

#### 18. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L196-L198` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L369) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L196-L198)

```diff
-       c: () => QG,
-       f: () => YG,
-       g: () => pG
+       e: () => QM
```

#### 19. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L200-L207` → after: `L371-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L371-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L371-L375) · [Before (L200-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L200-L207)

```diff
-     var wG = ZG(39396),
-       SG = ZG(1903),
-       LG = ZG(1257),
-       yG = ZG(40989),
-       kG = ZG(40993),
-       UG = ZG(41012);
-     const YG = new wG.c;
-     let VG = {};
+     var OM = iM(38040),
+       SM = iM(38173),
+       jM = iM(41502),
+       aM = iM(41508),
+       PM = iM(41520);
```

#### 20. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L210` → after: `L378-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L378-L427) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L210)

```diff
-       return VG[GG]
+       let rM = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const iM = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         jM = [],
+         nM = MM.width || MM.size || 1,
+         QM = MM.height || MM.size || 1,
+         zM = MM.depth || MM.size || 1,
+         LM = MM.wrap || !1;
+       let mM = void 0 === MM.topBaseAt ? 1 : MM.topBaseAt,
+         HM = void 0 === MM.bottomBaseAt ? 0 : MM.bottomBaseAt;
+       mM = (mM + 4) % 4, HM = (HM + 4) % 4;
+       let hM = [2, 0, 3, 1][mM],
+         JM = [2, 0, 1, 3][HM],
+         dM = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (LM) {
+         rM = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], dM = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let MM = [
+ ... (34 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L215` → after: `L431-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L431-L435) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L215)

```diff
-       return fG.add(GG)
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const OM = new jM.d(MM, iM);
+       rM.sideOrientation = jM.d._GetDefaultSideOrientation(rM.sideOrientation), OM._originalBuilderSideOrientation = rM.sideOrientation;
+       return nM(rM).applyToMesh(OM, rM.updatable), OM
```

#### 22. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L217-L277` → after: `L437-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L437-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L437-L444) · [Before (L217-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L217-L277)

```diff
- 
-     function KG(GG) {
-       fG.callEach(GG, "a roster listener")
-     }(0, UG.l)(yG.$, (GG => {
-       const bG = (0, kG.f)(yG.$, GG);
-       if (void 0 === bG) return;
-       const ZG = bG.PG.some((GG => {
-           let {
-             MG: bG,
-             AG: ZG
-           } = GG;
-           return null !== ZG && YG.has(bG) && YG.getName(bG) !== ZG
-         })),
-         {
-           added: wG,
-           removed: LG,
- ... (45 more removed lines; see GitHub link above)
+     let zM = !1;
+     zM || (zM = !0, aM.d.CreateBox = nM, jM.d.CreateBox = function(MM, rM) {
+       return QM(MM, {
+         size: rM,
+         sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
+         updatable: arguments.length > 3 ? arguments[3] : void 0
+       }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     })
```

#### 23. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L279` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L446) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L279)

```diff
-   41421: (GG, bG, ZG) => {
+   41543: (MM, rM, iM) => {
```

#### 24. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L281-L284` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L448) · [Before (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L281-L284)

```diff
-       b: () => mG,
-       d: () => dG,
-       g: () => aG,
-       i: () => cG
+       b: () => LM
```

#### 25. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L286-L296` → after: `L450-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L450-L455) · [Before (L286-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L286-L296)

```diff
-     var wG = ZG(1230),
-       SG = ZG(589),
-       LG = ZG(80),
-       yG = ZG(4818),
-       kG = ZG(40954),
-       UG = ZG(40986),
-       YG = ZG(40971),
-       VG = ZG(41413),
-       pG = ZG(41404),
-       fG = ZG(40993),
-       QG = ZG(41012);
+     var OM = iM(38040),
+       SM = iM(41502),
+       jM = iM(41508),
+       aM = iM(41546),
+       PM = iM(41250),
+       nM = iM(39711);
```

#### 26. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L299-L315` → after: `L458-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L458-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L458-L483) · [Before (L299-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L299-L315)

```diff
-       let {
-         deadEId: bG,
-         killerEId: ZG,
-         killerLifeformType: wG,
-         withItem: SG,
-         killstreak: LG
-       } = GG;
-       return {
-         killer: EG({
-           eId: ZG,
-           lifeformType: wG
-         }),
-         victim: EG({
-           eId: bG
-         }),
-         withItem: SG,
- ... (1 more removed lines; see GitHub link above)
+       const rM = [],
+         iM = [],
+         OM = MM.lines,
+         SM = MM.colors,
+         aM = [];
+       let PM = 0;
+       for (let jM = 0; jM < OM.length; jM++) {
+         const MM = OM[jM];
+         for (let OM = 0; OM < MM.length; OM++) {
+           const {
+             x: nM,
+             y: QM,
+             z: zM
+           } = MM[OM];
+           if (iM.push(nM, QM, zM), SM) {
+             const MM = SM[jM],
+ ... (10 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L320-L329` → after: `L490-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L490-L504) · [Before (L320-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L320-L329)

```diff
-       let {
-         killer: bG,
-         victim: ZG,
-         withItem: wG
-       } = GG;
-       return {
-         killer: EG(bG),
-         victim: EG(ZG),
-         withItem: wG,
-         killstreak: 0
+       const rM = MM.dashSize || 3,
+         iM = MM.gapSize || 1,
+         SM = MM.dashNb || 200,
+         aM = MM.points,
+         PM = [],
+         nM = [],
+         QM = OM.q.Zero();
+       let zM, LM, mM, HM = 0,
+         hM = 0;
+       for (mM = 0; mM < aM.length - 1; mM++) aM[mM + 1].subtractToRef(aM[mM], QM), HM += QM.length();
+       const JM = HM / SM,
+         dM = rM * JM / (rM + iM);
+       for (mM = 0; mM < aM.length - 1; mM++) {
+         aM[mM + 1].subtractToRef(aM[mM], QM), zM = Math.floor(QM.length() / JM), QM.normalize();
+         for (let MM = 0; MM < zM; MM++) LM = JM * MM, PM.push(aM[mM].x + LM * QM.x, aM[mM].y + LM * QM.y, aM[mM].z + LM * QM.z), PM.push(aM[mM].x + (LM + dM) * QM.x, aM[mM].y + (LM + dM) * QM.y, aM[mM].z + (LM + dM) * QM.z), nM.push(hM, hM + 1), hM += 2
```

#### 28. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L333-L334` → after: `L510-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L510-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L510-L529) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L333-L334)

```diff
-     function dG(GG) {
-       iG && WG((() => "killed" === GG.kind ? KG(GG.body) : hG(GG.body)))
+     function LM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const OM = rM.instance,
+         SM = rM.lines,
+         jM = rM.colors;
+       if (OM) {
+         const MM = OM.getVerticesData(PM.j.PositionKind);
+         let rM, iM;
+         jM && (rM = OM.getVerticesData(PM.j.ColorKind));
+         let aM = 0,
+           nM = 0;
+         for (let OM = 0; OM < SM.length; OM++) {
+           const PM = SM[OM];
+           for (let SM = 0; SM < PM.length; SM++) MM[aM] = PM[SM].x, MM[aM + 1] = PM[SM].y, MM[aM + 2] = PM[SM].z, jM && rM && (iM = jM[OM], rM[nM] = iM[SM].r, rM[nM + 1] = iM[SM].g, rM[nM + 2] = iM[SM].b, rM[nM + 3] = iM[SM].a, nM += 4), aM += 3
+         }
+         return OM.updateVerticesData(PM.j.PositionKind, MM, !1, !1), jM && rM && OM.updateVerticesData(PM.j.ColorKind, rM, !1, !1), OM.refreshBoundingInfo(), OM
+ ... (4 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L340-L341` → after: `L533-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L533-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L533-L542) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L340-L341)

```diff
-       var ZG;
-       return pG.f.has(GG) ? null === (ZG = pG.f.getSettings(GG)) || void 0 === ZG ? void 0 : ZG[bG] : (0, VG.b)(GG, bG)
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const OM = rM.colors ? [rM.colors] : null;
+       return LM(MM, {
+         lines: [rM.points],
+         updatable: rM.updatable,
+         instance: rM.instance,
+         colors: OM,
+         useVertexAlpha: rM.useVertexAlpha,
+         material: rM.material
+       }, iM)
```

#### 30. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L344-L360` → after: `L545-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L545-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L545-L624) · [Before (L344-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L344-L360)

```diff
-     function EG(GG) {
-       var bG, ZG, yG, kG, VG;
-       let {
-         eId: fG,
-         name: QG,
-         colour: KG,
-         lifeformType: hG
-       } = GG;
-       if (void 0 === fG || null === fG || "" === fG) {
-         const GG = QG || null;
-         return {
-           id: null,
-           shownName: GG,
-           lifeformType: null === GG && null !== hG && void 0 !== hG ? hG : null,
-           colour: KG || null,
-           local: !1,
- ... (1 more removed lines; see GitHub link above)
+     function HM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const jM = rM.points,
+         PM = rM.instance,
+         QM = rM.gapSize || 1,
+         LM = rM.dashSize || 3;
+       if (PM) {
+         const MM = MM => {
+           const rM = OM.q.Zero(),
+             iM = MM.length / 6;
+           let SM, aM, nM, QM, zM = 0,
+             LM = 0;
+           for (nM = 0; nM < jM.length - 1; nM++) jM[nM + 1].subtractToRef(jM[nM], rM), zM += rM.length();
+           const mM = zM / iM,
+             HM = PM._creationDataStorage.dashSize,
+             hM = HM * mM / (HM + PM._creationDataStorage.gapSize);
+ ... (64 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L363-L380` → after: `L627-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L627-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L627-L690) · [Before (L363-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L363-L380)

```diff
-       const dG = String(fG),
-         EG = null === (bG = (0, YG.f)()) || void 0 === bG ? void 0 : bG.api,
-         oG = void 0 !== EG && String(EG.localId) === dG,
-         XG = null !== (ZG = pG.f.getName(dG)) && void 0 !== ZG ? ZG : null,
-         uG = null !== (yG = zG(dG, "hideNameSeed")) && void 0 !== yG ? yG : null;
-       let iG = null === XG ? null : (0, wG.b)(XG, !LG.featureFlags.canSeeRealPlayerNames, uG) || null,
-         CG = null;
-       if (null === iG && void 0 !== EG) {
-         const GG = EG.getEntityType(dG);
-         "Player" !== GG && (iG = (0, UG.i)(EG, +dG) || null), CG = SG.m.includes(GG) ? GG : null
-       }
-       return {
-         id: dG,
-         shownName: iG,
-         lifeformType: null === iG && null !== (kG = null !== (VG = CG) && void 0 !== VG ? VG : hG) && void 0 !== kG ? kG : null,
-         colour: KG || zG(dG, "killfeedColour") || (oG ? JG : rG),
- ... (2 more removed lines; see GitHub link above)
+       getClassName() {
+         return "LinesMesh"
+       }
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
+       }
+       set material(MM) {
+         const rM = this.material;
+         if (rM === MM) return;
+         const iM = rM && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(MM), iM && rM?.dispose()
+       }
+       _setInternalMaterial(MM) {
+         this._setMaterial(MM), this.material && (this.material.fillMode = QM.c.LineListDrawMode, this.material.disableLighting = !0)
+       }
+       get checkCollisions() {
+ ... (48 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L383-L390` → after: `L693-L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L693-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L693-L700) · [Before (L383-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L383-L390)

```diff
-     const oG = 32;
-     let XG = [],
-       uG = null,
-       iG = !1,
-       CG = !1;
- 
-     function WG(GG) {
-       null === uG ? (XG.length === oG && XG.shift(), XG.push(GG)) : uG(GG())
+     mM.ForceGLSL = !1;
+     class HM extends nM.e {
+       constructor(MM, rM) {
+         super(MM, rM), this.intersectionThreshold = rM.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 33. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L394-L439` → after: `L705-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L705-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L705-L724) · [Before (L394-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L394-L439)

```diff
-       CG || (CG = !0, (0, QG.l)(yG.jc.PlayerKilled, (GG => {
-         const bG = (0, fG.j)(GG);
-         (0, fG.d)(bG) && WG((() => KG(bG)))
-       })), (0, QG.l)(yG.jc.CustomKillfeed, (GG => {
-         const bG = (0, fG.j)(GG);
-         (0, fG.d)(bG) && (0, fG.d)(bG.killer) && (0, fG.d)(bG.victim) && WG((() => hG(bG)))
-       })), (0, QG.f)((() => {
-         XG = []
-       })))
-     }
-     const IG = Object.freeze([0, 0, 0]),
-       FG = [0, 0, 0],
-       vG = [0, 0, 0],
-       aG = {
-         kill: {
-           watch(GG) {
- ... (30 more removed lines; see GitHub link above)
+       hM || (hM = !0, PM.d._LinesMeshParser = (MM, rM) => mM.Parse(MM, rM))
+     }(OM = mM.prototype).enableEdgesRendering ?? (OM.enableEdgesRendering = (0, LM.j)("LinesMesh", "enableEdgesRendering")), (SM = HM.prototype).enableEdgesRendering ?? (SM.enableEdgesRendering = (0, LM.j)("InstancedLinesMesh", "enableEdgesRendering"))
+   },
+   39705: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => jM
+     });
+     var OM = iM(39711);
+     const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
+       ...MM
+     } : null : MM.clone(rM) : null;
+     class jM {
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
+           const rM = [];
+ ... (4 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L444` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L762) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L444)

```diff
-   39396: (GG, bG, ZG) => {
+   39711: (MM, rM, iM) => {
```

#### 35. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L446` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L764) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L446)

```diff
-       c: () => wG
+       e: () => OM
```

#### 36. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L449-L450` → after: `L767-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L767-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L767-L772) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L449-L450)

```diff
-       constructor() {
-         this.members = new Map
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
```

#### 37. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L452-L481` → after: `L774-L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L774-L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L774-L779) · [Before (L452-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L452-L481)

```diff
-       apply(GG) {
-         const bG = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const wG of GG.PG) {
-           let GG = this.members.get(wG.MG);
-           if (GG || (GG = {
-               name: null,
-               settings: {}
-             }, this.members.set(wG.MG, GG), bG.added.push(wG.MG)), null !== wG.AG && (GG.name = wG.AG), null !== wG.sG || wG.qG.length > 0) {
-             const ZG = null === wG.sG ? {} : JSON.parse(wG.sG);
-             Object.assign(GG.settings, ZG);
-             for (const bG of wG.qG) delete GG.settings[bG], ZG[bG] = void 0;
-             bG.settingChanges.push({
- ... (14 more removed lines; see GitHub link above)
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
```

#### 38. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L483-L484` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L781-L782) · [Before (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L483-L484)

```diff
-       has(GG) {
-         return this.members.has(GG)
+       static _AddLogEntry(MM) {
+         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
```

#### 39. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L486-L487` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L784-L787) · [Before (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L486-L487)

```diff
-       ids() {
-         return [...this.members.keys()]
+       static _FormatMessage(MM) {
+         const rM = MM => MM < 10 ? "0" + MM : "" + MM,
+           iM = new Date;
+         return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
```

#### 40. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L489-L491` → after: `L789-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L789-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L789-L801) · [Before (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L489-L491)

```diff
-       getName(GG) {
-         var bG, ZG;
-         return null !== (bG = null === (ZG = this.members.get(GG)) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : void 0
+       static _LogDisabled(MM, rM) {}
+       static _LogEnabled() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           rM = arguments.length > 1 ? arguments[1] : void 0,
+           iM = arguments.length > 2 ? arguments[2] : void 0;
+         const SM = Array.isArray(rM) ? rM[0] : rM;
+         if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
+         const jM = OM._FormatMessage(SM),
+           aM = this._Levels[MM],
+           PM = Array.isArray(rM) ? rM.slice(1) : [];
+         aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
+         const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
+         OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
```

#### 41. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L493-L495` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L803-L804) · [Before (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L493-L495)

```diff
-       getSettings(GG) {
-         var bG;
-         return null === (bG = this.members.get(GG)) || void 0 === bG ? void 0 : bG.settings
+       static get LogCache() {
+         return OM._LogCache
```

#### 42. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L497-L499` → after: `L806-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L806-L807) · [Before (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L497-L499)

```diff
-       getSetting(GG, bG) {
-         var ZG;
-         return null === (ZG = this.members.get(GG)) || void 0 === ZG ? void 0 : ZG.settings[bG]
+       static ClearLogCache() {
+         OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
```

#### 43. `bundles/bloxd.io/chunks/js/252.js` (Changed code · before: `L501-L502` → after: `L809-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2fR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d7699881ca2534cca8e12f194b1a2f89ca5209d87749d914a23c86406b573c2f) · [After (L809-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/252.js#L809-L816) · [Before (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/252.js#L501-L502)

```diff
-       clear() {
-         this.members.clear()
+       static set LogLevels(MM) {
+         OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
+         const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
+         for (const iM of rM)
+           if ((MM & iM) === iM) {
+             const MM = this._Levels[iM];
+             OM[MM.name] = OM._LogEnabled.bind(OM, iM)
+           }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 1. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/253.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/253.js#L2)

```diff
- export const ids = [253];
+ export const ids = [253, 258];
```
