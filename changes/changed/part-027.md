# Changed — Bundle Modifications Report (Part 027 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `27 / 99` (**283** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 026](part-026.md) · [Part 028 →](part-028.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 12. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L62-L71` → after: `L791-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L791-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L791-L2161) · [Before (L62-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L62-L71)

```diff
-         this.startPoint = MM, this.midPoint = rM, this.endPoint = iM;
-         const OM = Math.pow(rM.x, 2) + Math.pow(rM.y, 2),
-           SM = (Math.pow(MM.x, 2) + Math.pow(MM.y, 2) - OM) / 2,
-           aM = (OM - Math.pow(iM.x, 2) - Math.pow(iM.y, 2)) / 2,
-           nM = (MM.x - rM.x) * (rM.y - iM.y) - (rM.x - iM.x) * (MM.y - rM.y);
-         this.centerPoint = new jM.o((SM * (rM.y - iM.y) - aM * (MM.y - rM.y)) / nM, ((MM.x - rM.x) * aM - (rM.x - iM.x) * SM) / nM), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = PM.BetweenTwoPoints(this.centerPoint, this.startPoint);
-         const QM = this.startAngle.degrees();
-         let zM = PM.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
-           LM = PM.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
-         zM - QM > 180 && (zM -= 360), zM - QM < -180 && (zM += 360), LM - zM > 180 && (LM -= 360), LM - zM < -180 && (LM += 360), this.orientation = zM - QM < 0 ? 0 : 1, this.angle = PM.FromDegrees(0 === this.orientation ? QM - LM : LM - QM)
+         this.closed = UU, this.UY = XU, this.menu = zU, this.view = void 0, this.dismiss = () => {
+           this.closePanel() && this.menu.dismiss()
+         }, this.onMenuClosed = () => {
+           this.closePanel()
+         }, this.view = UU
+       }
+       getView() {
+         return this.view
+       }
+       show(UU) {
+         this.set(UU), this.menu.open(this)
+       }
+       close() {
+         this.closePanel() && this.menu.close()
+       }
+       set(UU) {
+ ... (1355 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L76-L146` → after: `L3205-L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3205-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3205-L3291) · [Before (L76-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L76-L146)

```diff
-         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new jM.o(MM, rM))
-       }
-       addLineTo(MM, rM) {
-         if (this.closed) return this;
-         const iM = new jM.o(MM, rM),
-           OM = this._points[this._points.length - 1];
-         return this._points.push(iM), this._length += iM.subtract(OM).length(), this
-       }
-       addArcTo(MM, rM, iM, OM) {
-         let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const aM = this._points[this._points.length - 1],
-           PM = new jM.o(MM, rM),
-           QM = new jM.o(iM, OM),
-           zM = new nM(aM, PM, QM);
-         let LM = zM.angle.radians() / SM;
- ... (55 more removed lines; see GitHub link above)
+         this.publishPlace = UU, this.publishMood = XU, this.place = null, this.mood = null
+       }
+       getPlace() {
+         return this.place
+       }
+       getMood() {
+         return this.mood
+       }
+       PY(UU) {
+         const XU = performance.now();
+         switch (UU[0]) {
+           case "hudMood": {
+             const [, zU, cU, yU, QU, AU, FU] = UU;
+             return this.mood = {
+               energy: zU,
+               earningsPercent: cU,
+ ... (71 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L149` → after: `L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3294) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L149)

```diff
-         return rM
+         this.publishPlace(this.place)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L151-L152` → after: `L3296-L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3296-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3296-L3299) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L151-L152)

```diff
-       close() {
-         return this.closed = !0, this
+       getRunStart(UU) {
+         var XU;
+         const zU = "hudHome" === (null === (XU = this.place) || void 0 === XU ? void 0 : XU.kind) ? this.place.runStartedAt : null;
+         return null !== zU && Math.abs(zU - UU) < 500 ? zU : UU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L154-L160` → after: `L3301-L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3301-L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3301-L3320) · [Before (L154-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L154-L160)

```diff
-       length() {
-         let MM = this._length;
-         if (this.closed) {
-           const rM = this._points[this._points.length - 1];
-           MM += this._points[0].subtract(rM).length()
-         }
-         return MM
+     }
+ 
+     function sz(UU) {
+       switch (UU[0]) {
+         case "hudTier":
+           return {
+             kind: UU[0], tierKey: UU[1], locked: UU[2]
+           };
+         case "hudBay":
+           return {
+             kind: UU[0], materialKey: UU[1], objectKey: UU[2], percent: UU[3]
+           };
+         case "hudBayEmpty":
+           return {
+             kind: UU[0]
+           };
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L162-L183` → after: `L3322-L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3322-L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3322-L3448) · [Before (L162-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L162-L183)

```diff
-       area() {
-         const MM = this._points.length;
-         let rM = 0;
-         for (let iM = MM - 1, OM = 0; OM < MM; iM = OM++) rM += this._points[iM].x * this._points[OM].y - this._points[OM].x * this._points[iM].y;
-         return .5 * rM
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(MM) {
-         if (MM < 0 || MM > 1) return jM.o.Zero();
-         const rM = MM * this.length();
-         let iM = 0;
-         for (let OM = 0; OM < this._points.length; OM++) {
-           const MM = (OM + 1) % this._points.length,
-             SM = this._points[OM],
- ... (6 more removed lines; see GitHub link above)
+     }
+     var nz = zU(3796),
+       mz = zU(1274),
+       lz = zU(212);
+     const xz = JSON.parse('{"d":{"constructionSiteA":{"name":"Construction Site A"},"quarry":{"name":"The Quarry","skill":"Mining"},"industry":{"name":"Demolition Yard","skill":"Demolition"},"market":{"name":"Market Street","skill":"Market"},"lumberMill":{"name":"Lumber Mill","sk … [truncated]
+       Jz = lz.f.aY,
+       jz = 1e3 * Jz,
+       Kz = Jz,
+       bz = Kz + 2 * Jz,
+       Tz = 4 * bz + Kz;
+ 
+     function hz(UU, XU, zU) {
+       return XU >= UU.x0 && XU <= UU.x1 && zU >= UU.z0 && zU <= UU.z1
+     }
+     const Uc = xz.e,
+       Xc = Object.fromEntries(Object.entries(xz.d).map((UU => {
+ ... (111 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L187` → after: `L3451-L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3451-L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3451-L3454) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L187)

```diff
-         return jM.o.Zero()
+         case "hudSpleef":
+           return {
+             key: "spleef", name: UU("greenvilleGame:placeSpleef"), eyebrow: null
+           }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L189-L190` → after: `L3456-L3681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3456-L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3456-L3681) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L189-L190)

```diff
-       static StartingAt(MM, rM) {
-         return new QM(MM, rM)
+     }
+ 
+     function Fc(UU) {
+       let {
+         controller: XU,
+         children: zU
+       } = UU;
+       (0, kU.j)(Mz, null);
+       const [cU, yU] = (0, FU.useState)(null);
+       (0, nz.l)(cU, ".RightElements");
+       const QU = XU.getPlace();
+       return (0, RU.jsx)(tU.e, {
+         placement: "topRight",
+         children: (0, RU.jsx)("div", {
+           className: "GreenvilleHudColumn",
+           children: (0, RU.jsxs)("div", {
+ ... (210 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L194-L222` → after: `L3833-L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3833-L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3833-L3862) · [Before (L194-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L194-L222)

```diff
-       static CreateQuadraticBezier(MM, rM, iM, OM) {
-         OM = OM > 2 ? OM : 3;
-         const SM = [],
-           aM = (MM, rM, iM, OM) => (1 - MM) * (1 - MM) * rM + 2 * MM * (1 - MM) * iM + MM * MM * OM;
-         for (let PM = 0; PM <= OM; PM++) SM.push(new jM.q(aM(PM / OM, MM.x, rM.x, iM.x), aM(PM / OM, MM.y, rM.y, iM.y), aM(PM / OM, MM.z, rM.z, iM.z)));
-         return new zM(SM)
-       }
-       static CreateCubicBezier(MM, rM, iM, OM, SM) {
-         SM = SM > 3 ? SM : 4;
-         const aM = [],
-           PM = (MM, rM, iM, OM, SM) => (1 - MM) * (1 - MM) * (1 - MM) * rM + 3 * MM * (1 - MM) * (1 - MM) * iM + 3 * MM * MM * (1 - MM) * OM + MM * MM * MM * SM;
-         for (let nM = 0; nM <= SM; nM++) aM.push(new jM.q(PM(nM / SM, MM.x, rM.x, iM.x, OM.x), PM(nM / SM, MM.y, rM.y, iM.y, OM.y), PM(nM / SM, MM.z, rM.z, iM.z, OM.z)));
-         return new zM(aM)
-       }
-       static CreateHermiteSpline(MM, rM, iM, OM, SM) {
-         const aM = [],
- ... (13 more removed lines; see GitHub link above)
+       constructor(UU) {
+         this.UY = UU, this.view = null
+       }
+       getView() {
+         return this.view
+       }
+       PY(UU) {
+         const XU = performance.now();
+         switch (UU[0]) {
+           case "hide":
+             this.view = null;
+             break;
+           case "marketIdle":
+             this.view = {
+               job: null,
+               waypoints: Gc(UU[1])
+ ... (14 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L224-L231` → after: `L3864-L3876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3864-L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3864-L3876) · [Before (L224-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L224-L231)

```diff
-           OM.push(OM[0])
-         } else {
-           const iM = [];
-           iM.push(MM[0].clone()), iM.push(...MM), iM.push(MM[MM.length - 1].clone());
-           let PM = 0;
-           for (; PM < iM.length - 3; PM++) {
-             aM = 0;
-             for (let MM = 0; MM < rM; MM++) OM.push(jM.q.CatmullRom(iM[PM], iM[PM + 1], iM[PM + 2], iM[PM + 3], aM)), aM += SM
+           case "marketDeliver": {
+             const [zU, cU, yU, QU, AU, FU] = UU;
+             this.view = {
+               job: {
+                 kind: zU,
+                 parcelsLeft: cU,
+                 delivered: yU,
+                 gold: QU,
+                 endsAt: XU + FU
+               },
+               waypoints: Gc(AU)
+             };
+             break
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L271` → after: `L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L3879) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L271)

```diff
-         return new zM(PM)
+         this.UY(this.view)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L274` → after: `L4168-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4168-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4168-L4171) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L274)

```diff
-         this._length = 0, this._points = MM, this._length = this._computeLength(MM)
+         this.market = UU, this.waypoints = new rc.d({
+           labels: "GreenvilleMarketWaypointLabels",
+           distance: "GreenvilleMarketWaypointDistance"
+         }, "greenvilleGame:marketDistance")
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L276-L277` → after: `L4173-L4181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4173-L4181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4173-L4181) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L276-L277)

```diff
-       getPoints() {
-         return this._points
+       frame(UU, XU) {
+         this.waypoints.setRender(UU);
+         const zU = this.market.getView();
+         if (zU && this.waypoints.hasMarkers())
+           for (const {
+               key: cU,
+               target: yU
+             }
+             of zU.waypoints) this.waypoints.update(cU, yU[0], yU[1] + 1, yU[2], XU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L279-L280` → after: `L4183-L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4183-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4183-L4222) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L279-L280)

```diff
-       length() {
-         return this._length
+     }
+     const fc = {
+       Street: "St",
+       Avenue: "Ave",
+       Road: "Rd",
+       Lane: "Ln"
+     };
+ 
+     function ic(UU, XU) {
+       return XU.map(((XU, zU) => {
+         const cU = XU.lastIndexOf(" "),
+           yU = XU.slice(cU + 1);
+         let QU = fc[yU];
+         return void 0 === QU && (console.warn(`Greenville street "${XU}" has no suffix abbreviation`), QU = yU), {
+           axis: UU,
+           line: zU,
+ ... (24 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L282-L287` → after: `L4224-L4237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4224-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4224-L4237) · [Before (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L282-L287)

```diff
-       continue (MM) {
-         const rM = this._points[this._points.length - 1],
-           iM = this._points.slice(),
-           OM = MM.getPoints();
-         for (let SM = 1; SM < OM.length; SM++) iM.push(OM[SM].subtract(OM[0]).add(rM));
-         return new zM(iM)
+     }
+     let sc = null;
+ 
+     function nc(UU, XU, zU, cU) {
+       if (cU && "outside" !== cU.kind) {
+         const {
+           box: zU
+         } = cU;
+         if (!hz(zU, UU, XU) && hz({
+             x0: zU.x0 - 2,
+             z0: zU.z0 - 2,
+             x1: zU.x1 + 2,
+             z1: zU.z1 + 2
+           }, UU, XU)) return cU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L289-L291` → after: `L4239-L4459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4239-L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4239-L4459) · [Before (L289-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L289-L291)

```diff
-       _computeLength(MM) {
-         let rM = 0;
-         for (let iM = 1; iM < MM.length; iM++) rM += MM[iM].subtract(MM[iM - 1]).length();
+       return function(UU, XU, zU) {
+         const {
+           eastWest: cU,
+           northSouth: yU
+         } = Hc;
+         switch (UU.kind) {
+           case "outside":
+             return Mc;
+           case "street": {
+             const XU = UU.segment * bz + Kz,
+               zU = UU.line * bz;
+             return {
+               kind: "street",
+               box: "eastWest" === UU.axis ? Vc(XU, zU, bz - Kz, Kz) : Vc(zU, XU, Kz, bz - Kz),
+               street: Hc[UU.axis][UU.line],
+               block: 100 * (UU.segment + 1)
+ ... (205 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L295-L303` → after: `L4529-L4535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4529-L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4529-L4535) · [Before (L295-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L295-L303)

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
+     const bc = "greenvilleNavAddress",
+       Tc = "greenvilleNavPlots",
+       hc = "greenvilleNavMarkers",
+       Uy = 5 * Math.PI / 180,
+       Xy = {
+         kind: "outside"
+       };
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L305-L333` → after: `L4537-L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4537-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L4537-L5143) · [Before (L305-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L305-L333)

```diff
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
-         for (const QM of PM) {
-           if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
-           if (QM.endsWith("Observable")) continue;
-           if (iM && -1 !== iM.indexOf(QM)) continue;
-           const PM = MM[QM],
-             zM = typeof PM;
- ... (13 more removed lines; see GitHub link above)
+       constructor(UU, XU, zU, cU) {
+         this.map = UU, this.publishAddress = XU, this.publishPlots = zU, this.publishMarkers = cU, this.address = Xy, this.addressKey = mc(Xy), this.block = {
+           x: NaN,
+           z: NaN
+         }, this.plots = void 0, this.markers = [], this.terrain = null, this.qY = null, this.worldResize = null, this.worldPx = 0, this.arrowTrack = null, this.arrow = null, this.zoom = 0, this.lastFrameMs = NaN, this.written = {
+           u: NaN,
+           v: NaN,
+           scale: NaN,
+           heading: NaN
+         }, this.reducedMotion = null, this.logLocalScale = void 0, this.mountTerrain = UU => {
+           this.terrain.mount(UU)
+         }, this.mountWorld = UU => {
+           var XU;
+           this.qY = UU, this.written = {
+             u: NaN,
+             v: NaN,
+ ... (591 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L339` → after: `L5613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L5613) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L339)

```diff
-   39711: (MM, rM, iM) => {
+   40307: (UU, XU, zU) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L341` → after: `L5615-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R5615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L5615-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L5615-L5616) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L341)

```diff
-       e: () => OM
+       c: () => FU,
+       f: () => AU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L344-L393` → after: `L5626-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L5626-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/269.js#L5626-L5650) · [Before (L344-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/269.js#L344-L393)

```diff
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
-         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
- ... (34 more removed lines; see GitHub link above)
+       constructor(UU) {
+         this.averages = UU, this.byId = new Map
+       }
+       get(UU) {
+         var XU, zU, AU, FU, oU;
+         const DU = this.byId.get(UU);
+         if (void 0 !== DU) return DU;
+         const EU = null !== (XU = null === (zU = cU.h[UU]) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : "",
+           YU = EU.split("|")[0],
+           NU = null !== (AU = this.averages[EU]) && void 0 !== AU ? AU : this.averages[YU],
+           IU = null !== (FU = null !== (oU = null === NU || void 0 === NU ? void 0 : NU[0]) && void 0 !== oU ? oU : yU[YU]) && void 0 !== FU ? FU : 0 === (null === NU || void 0 === NU ? void 0 : NU.length) ? null : QU;
+         return this.byId.set(UU, IU), IU
+       }
+       getDrawnIds() {
+         const UU = new Uint8Array(65536);
+         for (let XU = 1; XU < 65536; XU++) void 0 !== cU.h[XU] && null !== this.get(XU) && (UU[XU] = 1);
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L22` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L9) · [Before (L4-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L22)

```diff
-   39858: (MM, rM, iM) => {
-     var OM = {
-       "./cape_cow_cream.png": 28492,
-       "./cape_cow_normal.png": 28499,
-       "./cape_creator_level1.png": 28508,
-       "./cape_creator_level2.png": 28515,
-       "./cape_creator_level3.png": 28523,
-       "./cape_none.png": 28531,
-       "./cape_pig.png": 28533,
-       "./cape_sheep.png": 28538,
-       "./cape_super.png": 28544,
-       "./cape_super_inverted.png": 28553,
-       "./cape_youtuber.png": 28560
-     };
- 
-     function SM(MM) {
- ... (3 more removed lines; see GitHub link above)
+   40644: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => DU
+     });
+     var cU = zU(5139);
+     const yU = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L25-L37` → after: `L12-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L12-L18) · [Before (L25-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L25-L37)

```diff
-       if (!iM.o(OM, MM)) {
-         var rM = new Error("Cannot find module '" + MM + "'");
-         throw rM.code = "MODULE_NOT_FOUND", rM
-       }
-       return OM[MM]
-     }
-     SM.keys = function() {
-       return Object.keys(OM)
-     }, SM.resolve = jM, MM.exports = SM, SM.id = 39858
-   },
-   40219: (MM, rM, iM) => {
-     function OM(MM) {
-       return void 0 === MM ? void 0 : [MM[0], MM[1], MM[2]]
+       return new Promise(((XU, zU) => {
+         UU.onsuccess = () => {
+           XU(UU.result)
+         }, UU.onerror = () => {
+           zU(UU.error)
+         }
+       }))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L41-L60` → after: `L22-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L22-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L22-L31) · [Before (L41-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L41-L60)

```diff
-       const rM = MM.particles;
-       return {
-         opts: {
-           texture: rM.texture,
-           vL: rM.vL,
-           minLifeTime: rM.minLifeTime,
-           maxLifeTime: rM.maxLifeTime,
-           minSize: rM.minSize,
-           maxSize: rM.maxSize,
-           minEmitPower: rM.minEmitPower,
-           maxEmitPower: rM.maxEmitPower,
-           emitRate: rM.emitRate,
-           gravity: OM(rM.gravity),
-           dir1: OM(rM.dir1),
-           dir2: OM(rM.dir2),
-           colorGradients: rM.colorGradients,
- ... (4 more removed lines; see GitHub link above)
+       return new Promise(((XU, zU) => {
+         UU.oncomplete = () => {
+           XU()
+         }, UU.onerror = () => {
+           zU(UU.error)
+         }, UU.onabort = () => {
+           var XU;
+           zU(null !== (XU = UU.error) && void 0 !== XU ? XU : new Error("IndexedDB transaction aborted"))
+         }
+       }))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L81-L82` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L35) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L81-L82)

```diff
-       var rM;
-       return null !== (rM = (0, OM.d)(aM, MM)) && void 0 !== rM ? rM : null
+       return IDBKeyRange.bound([UU], [UU, []])
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L85-L87` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L38-L39) · [Before (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L85-L87)

```diff
-     function QM(MM) {
-       var rM;
-       return null !== (rM = (0, OM.d)(PM, MM)) && void 0 !== rM ? rM : null
+     function oU(UU, XU) {
+       return IDBKeyRange.bound([UU, XU], [UU, XU, []])
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L98-L119` → after: `L43-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L43-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L43-L52) · [Before (L98-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L98-L119)

```diff
-         this.pose = {
-           pos: [0, 0, 0],
-           yaw: 0,
-           mode: "flying",
-           seated: !1,
-           clip: void 0
-         }, this.dd = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
-       }
-       step(MM) {
-         var rM;
-         const {
-           feet: iM,
-           heading: OM,
-           tuning: aM
-         } = MM, PM = Math.min(Math.max(MM.dt, 0), .1), {
-           pose: nM,
- ... (6 more removed lines; see GitHub link above)
+         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
+       }
+       get working() {
+         return !this.failed
+       }
+       static get supported() {
+         try {
+           return "undefined" !== typeof indexedDB
+         } catch {
+           return !1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L121-L133` → after: `L54-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L54-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L54-L158) · [Before (L121-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L121-L133)

```diff
-         this.lastFeet[0] = iM[0], this.lastFeet[1] = iM[1], this.lastFeet[2] = iM[2], this.stillS = this.speed > .3 ? 0 : this.stillS + PM;
-         const LM = this.stillS >= .6 ? "perched" : "flying";
-         "flying" === LM && "perched" === nM.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += PM, nM.mode = LM;
-         const mM = Math.sin(OM),
-           HM = Math.cos(OM);
-         "perched" === LM ? (jM(zM, iM, aM.perchOffset, mM, HM), zM[1] += MM.headTopY - iM[1]) : (jM(zM, iM, aM.followOffset, mM, HM), zM[1] += SM(aM, MM.timeS));
-         const {
-           pos: hM
-         } = nM, JM = Math.hypot(zM[0] - hM[0], zM[1] - hM[1], zM[2] - hM[2]);
-         if (!this.started || JM > 8 || "perched" === LM && (this.perchLocked || JM < .05)) this.perchLocked = this.started && "perched" === LM, hM[0] = zM[0], hM[1] = zM[1], hM[2] = zM[2], QM[0] = QM[1] = QM[2] = 0;
-         else {
-           const MM = aM.followStiffness;
-           for (let rM = 0; rM < 3; rM++) QM[rM] += (MM * MM * (zM[rM] - hM[rM]) - 2 * MM * QM[rM]) * PM, hM[rM] += QM[rM] * PM
+       }
+       putRecording(UU) {
+         this.write(["recordings"], (XU => {
+           XU.objectStore("recordings").put(UU)
+         }))
+       }
+       putVideoSequence(UU, XU, zU) {
+         this.write(["recordings", "videoSequences"], (cU => {
+           cU.objectStore("recordings").put(UU), cU.objectStore("videoSequences").put({
+             recordingId: UU.recordingId,
+             segmentId: XU,
+             sequence: zU
+           })
+         }))
+       }
+       appendVideo(UU, XU) {
+ ... (89 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L139-L140` → after: `L161-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L161-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L161-L165) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L139-L140)

```diff
-       reset() {
-         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       async deleteRecording(UU) {
+         const XU = (await this.open()).transaction([...yU], "readwrite");
+         XU.objectStore("recordings").delete(UU);
+         for (const zU of yU.slice(1)) XU.objectStore(zU).delete(FU(UU));
+         await AU(XU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L142-L143` → after: `L167-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L167-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L167-L247) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L142-L143)

```diff
-       HS(MM) {
-         return "perched" === MM ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       async forgetSent(UU, XU) {
+         const zU = (await this.open()).transaction([...yU], "readwrite"),
+           {
+             recordingId: cU
+           } = UU;
+         zU.objectStore("recordings").put(UU);
+         for (const yU of XU.videoSegmentIds) zU.objectStore("videoHeaders").delete([cU, yU]), zU.objectStore("videoChunks").delete(oU(cU, yU)), zU.objectStore("videoSequences").delete([cU, yU]), zU.objectStore("videoProgress").delete([cU, yU]);
+         for (const yU of XU.telemetrySequences) zU.objectStore("telemetry").delete([cU, yU]);
+         for (const yU of XU.domSequences) zU.objectStore("dom").delete([cU, yU]);
+         for (const yU of XU.domTailChunks) zU.objectStore("domTail").delete(oU(cU, yU));
+         await AU(zU)
+       }
+       write(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU => {
+           this.fail(UU)
+         };
+ ... (65 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L156` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L251) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L156)

```diff
-   40192: (MM, rM, iM) => {
+   40586: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L158` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L253-L255) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L158)

```diff
-       c: () => jM
+       b: () => oU,
+       d: () => QU,
+       h: () => FU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L160-L161` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L257-L258) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L160-L161)

```diff
-     var OM = iM(38034),
-       SM = iM(38839);
+     var cU = zU(40578);
+     const yU = new TextEncoder;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L164-L202` → after: `L261-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L261-L263) · [Before (L164-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L164-L202)

```diff
-       var iM;
-       MM.blendMode = rM.blendMode, MM.minLifeTime = rM.minLifeTime, MM.maxLifeTime = rM.maxLifeTime, MM.minSize = rM.minSize, MM.maxSize = rM.maxSize, MM.minEmitPower = rM.minEmitPower, MM.maxEmitPower = rM.maxEmitPower;
-       const jM = null !== (iM = rM.gravity) && void 0 !== iM ? iM : [0, 0, 0];
-       MM.gravity = new OM.sh(jM[0], jM[1], jM[2]);
-       for (const OM of rM.colorGradients) MM.addColorGradient(OM.timeFraction, (0, SM.i)(OM.minColor), OM.maxColor ? (0, SM.i)(OM.maxColor) : void 0)
-     }
-   },
-   39774: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => EM,
-       e: () => CM,
-       h: () => GM,
-       k: () => bM,
-       o: () => wM,
-       r: () => lM
-     });
- ... (23 more removed lines; see GitHub link above)
+       return new Blob([yU.encode(`${JSON.stringify(UU)}\n`), XU], {
+         type: "text/plain"
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L204-L250` → after: `L265-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L265-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L265-L306) · [Before (L204-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L204-L250)

```diff
-     async function EM(MM, rM) {
-       (0, jM.D)(null);
-       const iM = (0, aM.n)((0, aM.k)(rM.useWebGpu, !0));
-       (0, mM.setWebGpuRequested)("lite" === iM.requested && (0, mM.getWebGpuSupported)());
-       const PM = (0, aM.f)(iM.source);
-       null !== PM && console.info(`Renderer: ${iM.requested} from ${PM}`), null !== iM.fallbackReason && console.warn(`Renderer: ${iM.fallbackReason}`);
-       let zM = iM.fallbackReason;
-       if ("webgl2" !== iM.choice) {
-         const PM = await async function(MM, rM, iM, aM) {
-           const PM = await (0, mM.probeWebGpuAdapter)();
-           if ("usable" !== PM) return (0, mM.setWebGpuFallbackReason)(PM), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
-           if (iM && !0 === hM.g.getItem(dM.N) && !0 !== hM.g.getItem(OM.fc)) return (0, mM.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), dM.e;
-           let zM = "load_failed";
-           try {
-             const {
-               create: iM
- ... (31 more removed lines; see GitHub link above)
+     class AU {
+       constructor(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
+         this.token = UU, this.relay = XU, this.nowMs = zU, this.refused = !1, this.skipUntilMs = 0
+       }
+       async send(UU, XU, zU, yU, AU) {
+         if (this.goesDirect(XU, zU)) return null;
+         const FU = QU({
+             token: this.token,
+             contentType: zU,
+             target: UU
+           }, XU),
+           oU = {
+             method: "POST",
+             headers: {
+               "Content-Type": "text/plain"
+ ... (26 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L273-L275` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L311) · [Before (L273-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L273-L275)

```diff
-       eM(MM) || CM().catch((MM => {
-         console.warn("Failed to prefetch noa's Babylon backend.", MM)
-       }))
+       return void 0 === (null === UU || void 0 === UU ? void 0 : UU.relay) ? null : new AU(UU.token, UU.relay)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L277-L283` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L313-L320) · [Before (L277-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L277-L283)

```diff
- 
-     function wM(MM) {
-       (0, JM.f)((() => {
-         eM(MM) ? (0, jM.s)().load().catch((MM => {
-           console.warn("Failed to prefetch the Lite renderer.", MM)
-         })) : bM(MM)
-       }))
+     class oU {
+       constructor() {
+         this.relays = new Map
+       }
+       for (UU) {
+         let XU = this.relays.get(UU.recordingId);
+         return void 0 === XU && (XU = FU(UU.partJoiner), this.relays.set(UU.recordingId, XU)), XU
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L286` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L323) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L286)

```diff
-   39788: (MM, rM, iM) => {
+   40622: (UU, XU, zU) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L288-L289` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L325-L327) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L288-L289)

```diff
-       b: () => PM,
-       e: () => aM
+       c: () => pU,
+       g: () => IU,
+       k: () => oU
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L291-L293` → after: `L329-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L329-L332) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L291-L293)

```diff
-     var OM = iM(19),
-       SM = iM(34971),
-       jM = iM(3230);
+     var cU = zU(40578),
+       yU = zU(1220),
+       QU = zU(40594);
+     const AU = 1024;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L296-L297` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L335) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L296-L297)

```diff
-       var rM;
-       return null !== (rM = MM.parentElement) && void 0 !== rM ? rM : MM
+       return 6e4 + Math.ceil(UU / 16384 * 1e3)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L300-L335` → after: `L338-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L338-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L338-L346) · [Before (L300-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L300-L335)

```diff
-     function PM(MM, rM) {
-       if (MM.clientWidth <= 0 || MM.clientHeight <= 0 || SM.c.isHeld()) return null;
-       const iM = (0, jM.o)(),
-         [aM, PM] = rM.size(iM);
-       return (0, jM.t)(aM, PM, iM, OM.d.get("clientEscMenuOptions").pixelScale)
-     }
-   },
-   42285: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       openCharacterPreview: () => Qr
-     });
-     var OM = iM(39083),
-       SM = iM(3063),
-       jM = iM(605),
-       aM = iM(38111),
-       PM = iM(2367),
- ... (20 more removed lines; see GitHub link above)
+     function oU(UU, XU, zU) {
+       const yU = new FormData;
+       let QU = XU.byteLength + AU;
+       for (const [AU, FU] of Object.entries(UU.fields)) yU.append(AU, FU), QU += (0, cU.e)(AU) + (0, cU.e)(FU);
+       return yU.append("file", new Blob([XU], {
+         type: zU
+       })), {
+         form: yU,
+         byteLength: QU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L339-L341` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L350-L351) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L339-L341)

```diff
-     function eM(MM) {
-       MM.unfreezeWorldMatrix();
-       for (const rM of MM.getChildren()) eM(rM)
+     function DU(UU, XU, zU) {
+       return new QU.b(`Segment ${UU} failed with ${XU}${null===zU?"":` (${zU})`}`, XU, zU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L343-L358` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L353-L355) · [Before (L343-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L343-L358)

```diff
-     async function bM(MM, rM, iM, OM) {
-       let {
-         keepTransforms: SM,
-         backFaceCulling: jM
-       } = OM;
-       const aM = await (0, UM.i)(rM, MM),
-         PM = (0, UM.b)(null !== iM && void 0 !== iM ? iM : rM, MM, void 0, jM);
-       (0, UM.k)(aM, PM, {
-         keepTransforms: SM,
-         backFaceCulling: jM,
-         onProcessedMesh: rM => {
-           MM.JOM(rM, !1), rM.isVisible = !1
-         }
-       });
-       for (const nM of aM.rootNodes) eM(nM);
-       return aM
+ 
+     function EU(UU) {
+       if (UU < 200 || UU > 299) throw DU("POST", UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L362-L363` → after: `L359-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L359-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L359-L370) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L362-L363)

```diff
-       MM.isVisible = rM;
-       for (const iM of MM.getChildMeshes()) iM.isVisible = rM
+       if ((UU < 200 || UU > 299) && (!XU || 412 !== UU)) throw DU("PUT", UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+     }
+     async function NU(UU) {
+       var XU, zU;
+       if (UU.ok) return null;
+       let cU;
+       try {
+         cU = await UU.text()
+       } catch (yU) {
+         return console.warn("Session replay couldn't read storage's error answer", yU), null
+       }
+       return null !== (XU = null === (zU = /<Code>([^<]+)<\/Code>/.exec(cU)) || void 0 === zU ? void 0 : zU[1]) && void 0 !== XU ? XU : null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L366-L367` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L373-L376) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L366-L367)

```diff
-       constructor(MM, rM, iM) {
-         this.YJ = MM, this.thinInstMgr = rM, this.Zk = iM, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       constructor(UU) {
+         var XU;
+         let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this.segmentUploadUrl = UU, this.deadline = void 0, this.relay = void 0, this.deadline = zU.deadline, this.relay = null !== (XU = zU.relay) && void 0 !== XU ? XU : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L369-L390` → after: `L378-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L378-L379) · [Before (L369-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L369-L390)

```diff
-       loadModel(MM, rM, iM) {
-         const OM = (0, UM.f)(MM, rM);
-         return OM in this.modelCache || (this.modelCache[OM] = (async () => {
-           try {
-             const OM = await bM(this.YJ, MM, rM, {
-                 keepTransforms: void 0 !== iM,
-                 backFaceCulling: !1
-               }),
-               SM = new Map;
-             for (const MM of OM.getNodes()) SM.set(MM.name, MM);
-             const jM = void 0 === iM ? null : (0, GM.m)(iM, (MM => {
-               const rM = SM.get(MM);
-               return rM ? (0, GM.i)(rM) : null
-             }));
-             return {
-               nodesByName: SM,
- ... (6 more removed lines; see GitHub link above)
+       requestPutUrl(UU) {
+         return this.presign(UU)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L392-L434` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L381-L382) · [Before (L392-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L392-L434)

```diff
-       async update(MM, rM) {
-         var iM;
-         const {
-           thinInstMgr: OM,
-           Zk: SM
-         } = this;
-         this.cosmeticNames[MM] = rM;
-         const jM = this.attachmentsByType[MM];
-         if (jM)
-           for (const {
-               mesh: PM,
-               destNode: nM,
-               bones: QM
-             }
-             of jM) {
-             null !== QM && (0, lM.mb)(this.shownBones, QM), wM(PM, !1);
- ... (27 more removed lines; see GitHub link above)
+       requestPostTargets(UU) {
+         return this.presign(UU)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L436-L437` → after: `L384-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L384-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L384-L394) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L436-L437)

```diff
-       writePoses(MM) {
-         for (const rM of this.shownBones) rM.write(MM)
+       async presign(UU) {
+         const XU = await fetch(this.segmentUploadUrl, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: JSON.stringify(UU),
+           signal: this.signal(6e4)
+         });
+         if (!XU.ok) throw new QU.b(`Segment presign failed with ${XU.status}`, XU.status);
+         return await XU.json()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L439-L452` → after: `L396-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L396-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L396-L432) · [Before (L439-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L439-L452)

```diff
-     }
-     var gM = iM(42212),
-       uM = iM(38233),
-       RM = iM(39774),
-       pM = iM(40186),
-       WM = iM(40222),
-       sM = iM(40219),
-       DM = iM(40192),
-       kM = iM(3563);
-     const ZM = [0, 1, 0];
-     class oM {
-       constructor(MM) {
-         this.node = MM, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
-         for (const rM of MM.getChildTransformNodes()) this.nodesByName.set(rM.name, rM), this.rests.set(rM.name, (0, GM.i)(rM))
+       async put(UU, XU, zU, yU) {
+         const QU = await this.sendThroughRelay({
+           method: "PUT",
+           url: UU,
+           ifNoneMatch: yU
+         }, XU, zU);
+         if (null !== QU) return void YU(QU, yU);
+         const AU = {
+             method: "PUT",
+             headers: {
+               "Content-Type": zU,
+               ...yU ? {
+                 "If-None-Match": "*"
+               } : {}
+             },
+             body: XU,
+ ... (21 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L454-L456` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L434-L435) · [Before (L454-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L454-L456)

```diff
-       play(MM, rM) {
-         const iM = this.clip(MM);
-         iM && (iM.pose.pose(rM), (0, GM.q)(iM.pose, iM.nodes))
+       async sendThroughRelay(UU, XU, zU) {
+         return null === this.relay ? null : await this.relay.send(UU, XU, zU, this.signal(FU(XU.byteLength)), this.deadline)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L458-L470` → after: `L437-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L437-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L437-L439) · [Before (L458-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L458-L470)

```diff
-       clip(MM) {
-         let rM = this.clips.get(MM);
-         if (void 0 === rM) {
-           const iM = (0, GM.m)(MM, (MM => {
-             var rM;
-             return null !== (rM = this.rests.get(MM)) && void 0 !== rM ? rM : null
-           }));
-           rM = iM && {
-             pose: iM,
-             nodes: iM.boneNames.map((MM => this.nodesByName.get(MM)))
-           }, this.clips.set(MM, rM)
-         }
-         return rM
+       signal(UU) {
+         const XU = (0, yU.n)(UU);
+         return void 0 === this.deadline ? XU : (0, yU.i)([this.deadline, XU])
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L479-L480` → after: `L443-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L443-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L443-L447) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L479-L480)

```diff
-       constructor(MM, rM) {
-         this.YJ = MM, this.scale = rM, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promi … [truncated]
+       async requestPutUrl(UU) {
+         return {
+           uploadUrl: "",
+           ifNoneMatch: !1
+         }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L482-L491` → after: `L449-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L449-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L449-L457) · [Before (L482-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L482-L491)

```diff
-       async setPet(MM) {
-         var rM;
-         this.petName = MM, null === (rM = this.shownPet) || void 0 === rM || rM.node.kR(!1), this.shownPet = null;
-         const iM = (0, pM.k)(MM);
-         if (!iM) return;
-         let OM;
-         try {
-           OM = await this.petNode(iM.model)
-         } catch {
-           return
+       async requestPostTargets(UU) {
+         return {
+           targets: Array.from({
+             length: UU.parts.count
+           }, (() => ({
+             url: "",
+             fields: {}
+           }))),
+           expiresInSecs: 900
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L533-L575` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L460-L461) · [Before (L533-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L533-L575)

```diff
-       writePose(MM) {
-         var rM;
-         if (!this.shownPet) return;
-         const iM = (0, pM.k)(this.petName),
-           {
-             scale: OM
-           } = this;
-         if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, iM);
-         const [SM, jM, aM] = iM.followOffset, {
-           node: PM
-         } = this.shownPet;
-         PM.position.set(SM * OM, (jM + (0, WM.g)(iM, MM) - 1) * OM, aM * OM), PM.rotation.y = iM.yawOffset, PM.UL.P_(iM.scale * OM), null !== (rM = iM.clips) && void 0 !== rM && rM.fly && this.shownPet.play(iM.clips.fly, MM)
-       }
-       isolatePet() {
-         this.petIsolated = !0
-       }
- ... (27 more removed lines; see GitHub link above)
+       put() {
+         return Promise.resolve()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L577-L579` → after: `L463-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L463-L464) · [Before (L577-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L577-L579)

```diff
-       particleTexture(MM) {
-         let rM = this.particleTextures.get(MM);
-         return rM || (rM = (0, uM.t)(this.YJ, (0, kM.f)(MM)), this.particleTextures.set(MM, rM)), rM
+       post() {
+         return Promise.resolve()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L582-L610` → after: `L467-L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L467-L473) · [Before (L582-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L582-L610)

```diff
-     var NM = iM(38122),
-       AM = (iM(42220), iM(41564), iM(42227), iM(35055)),
-       xM = iM(42291);
-     let vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr;
-     const rr = document.createElement("canvas");
-     async function ir() {
-       await new Promise((MM => {
-         setTimeout((() => {
-           MM()
-         }), 100)
-       }))
-     }
-     rr.classList.add("CharCustomisationPreviewCanvas");
-     const Or = {};
- 
-     function Sr(MM, rM) {
- ... (13 more removed lines; see GitHub link above)
+   },
+   40569: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+     });
+     var cU = zU(36961),
+       yU = zU.n(cU);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L612-L614` → after: `L475-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L475-L476) · [Before (L612-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L612-L614)

```diff
-     function jr(MM, rM) {
-       const [iM, OM] = (0, xM.d)(MM, rM, window.devicePixelRatio);
-       vM.setSize(Math.max(iM, Math.floor(MM)), Math.max(OM, Math.floor(rM)))
+     function QU() {
+       return yU()('(()=>{var UU={10:(UU,XU,zU)=>{function cU(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function yU(UU){return UU instanceof Uint8Array&&(!cU()||!Buffer.isBuffer(UU))}function QU(UU){return UU  … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L618-L645` → after: `L479-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L479-L481) · [Before (L618-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L618-L645)

```diff
-       constructor(MM, rM) {
-         this.framing = rM, this.ready = Mr, this.dev = {
-           canvas: () => rr,
-           isolateHead(MM) {
-             const rM = KM.getNodeNames(qM);
-             for (let iM = 0; iM < rM.length; iM++) "HeadMesh" !== rM[iM] && "__root__" !== rM[iM] && "TorsoNode" !== rM[iM] && KM.setNodeEnabled(qM, iM, !1);
-             if (MM) {
-               const MM = KM.getNamedNode(qM, "HeadMesh");
-               KM.setNodeDisableColorWrite(qM, MM, !0, (MM => {
-                 const rM = new JM.StandardMaterial(`${MM.name}_depthOnly`, MM.Hk());
-                 return rM.disableColorWrite = !0, rM
-               }))
-             }
-             KM.setPosition(qM, 0, -12, 0), Sr("pet", "pet_none"), Sr("aura", "aura_none")
-           },
-           isolatePet() {
- ... (12 more removed lines; see GitHub link above)
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
+         this.quietMs = UU, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L647-L672` → after: `L483-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L483-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L483-L497) · [Before (L647-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L647-L672)

```diff
-       isReady() {
-         return !!XM
-       }
-       setCosmetic(MM, rM) {
-         Sr(MM, rM)
-       }
-       playEmote(MM) {
-         if (!TM) return;
-         if (!MM) return void TM.stopAnimation(nM.e.Emote);
-         const rM = (0, aM.f)((0, PM.e)(MM).animation);
-         TM.startAnimation(rM, nM.e.Emote, 0, PM.b)
-       }
-       async untilDrawn(MM) {
-         if (await ir(), "cape" === MM && IM) {
-           const MM = IM.material,
-             rM = null === MM || void 0 === MM ? void 0 : MM.diffuseTexture;
- ... (10 more removed lines; see GitHub link above)
+       pack(UU) {
+         return new Promise(((XU, zU) => {
+           var cU;
+           const yU = null !== (cU = this.worker) && void 0 !== cU ? cU : this.start();
+           if (null === yU) return void zU(this.failure);
+           const QU = this.nextId++;
+           this.waiting.set(QU, {
+             resolve: XU,
+             reject: zU
+           });
+           const AU = {
+             id: QU,
+             text: UU
+           };
+           yU.postMessage(AU), this.watchdog ??= this.startWatchdog()
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L675-L682` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L500-L501) · [Before (L675-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L675-L682)

```diff
-       setOrbit(MM) {
-         nr(MM)
-       }
-       resetCamera() {
-         FM.inertialAlphaOffset = 0, FM.inertialBetaOffset = 0, FM.inertialRadiusOffset = 0, nr(AM.d[this.framing])
-       }
-       resize(MM, rM) {
-         jr(MM, rM)
+       forgetWaiting() {
+         this.waiting.clear(), this.stopWatchdog()
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L685` → after: `L504-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L504-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L504-L549) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L685)

```diff
-         this.closed || (this.closed = !0, ar--, 0 === ar && vM.stopRenderLoop())
+         this.fail(new Error("page recording packer closed"))
+       }
+       start() {
+         if (null !== this.failure) return null;
+         try {
+           this.worker = new QU
+         } catch (UU) {
+           return this.broke(`didn't start: ${String(UU)}`), null
+         }
+         return this.worker.onmessage = UU => {
+           const {
+             id: XU,
+             bytes: zU,
+             inflatedBytes: cU
+           } = UU.data, yU = this.waiting.get(XU);
+           this.waiting.delete(XU), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === yU || void 0 === yU || yU.resolve({
+ ... (30 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L729` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L553) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L729)

```diff
-   39852: (MM, rM, iM) => {
+   40543: (UU, XU, zU) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L731` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L555) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L731)

```diff
-       c: () => mM
+       b: () => yU
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L733-L737` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L557) · [Before (L733-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L733-L737)

```diff
-     var OM = iM(38181),
-       SM = iM(38278),
-       jM = iM(38310),
-       aM = iM(38198),
-       PM = iM(38188);
+     var cU = zU(40549);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L740-L761` → after: `L560-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L560-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L560-L564) · [Before (L740-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L740-L761)

```diff
-       return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, PM.B)(MM, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, PM.B)(MM, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
-     }
- 
-     function QM(MM, rM) {
-       let iM = (0, PM.Db)(MM, "skele" + (rM - 1));
-       for (let SM = rM - 2; SM >= 0; SM--) iM = (0, PM.sb)(MM, `boneIdx == ${SM}`, (0, PM.Db)(MM, `skele${SM}`), iM);
- ... (6 more removed lines; see GitHub link above)
+       const XU = (new TextEncoder).encode(UU);
+       return {
+         bytes: (0, cU.e)(XU),
+         inflatedBytes: XU.byteLength
+       }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L806` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L567) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L806)

```diff
-   39720: (MM, rM, iM) => {
+   40603: (UU, XU, zU) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L811-L897` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L571-L572) · [Before (L811-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L811-L897)

```diff
-     var OM = iM(38181),
-       SM = iM(38310),
-       jM = iM(38188),
-       aM = iM(38198);
-     const PM = "bloxdTextLodBias",
-       nM = [{
-         name: PM,
-         type: "float"
-       }],
-       QM = "bloxdTextSample",
-       zM = {
-         planes: -.5,
-         boards: -.5
-       },
-       LM = {
-         name: "TextSampler",
- ... (71 more removed lines; see GitHub link above)
+     const cU = 20;
+     let yU = Date.now() - performance.now();
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L899-L916` → after: `L574-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L574-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L574-L577) · [Before (L899-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L899-L916)

```diff
-     function PM(MM) {
-       aM = MM
-     }
- 
-     function nM(MM) {
-       if (!aM) throw new Error("No SkyMaterial: WebGL2's backend installs it");
-       return new aM("sky", MM)
-     }
- 
-     function QM(MM, rM, iM) {
-       if (!(0, OM.f)(MM)) return void MM.material.forceCompilation(MM, rM);
-       const aM = () => {
-         if (MM.xG()) return void jM.delete(MM);
-         const OM = (0, SM.Y)(MM.material);
-         if (![null === OM || void 0 === OM ? void 0 : OM.diffuseTexture, null === OM || void 0 === OM ? void 0 : OM.opacityTexture, null === OM || void 0 === OM ? void 0 : OM.emissiveTexture, null === OM || void 0 === OM ? void 0 : OM.reflectionTexture].every((MM => !MM || iM.pre … [truncated]
-         jM.delete(MM), rM()
- ... (2 more removed lines; see GitHub link above)
+     function QU() {
+       const UU = performance.now(),
+         XU = Date.now();
+       return Math.abs(XU - (UU + yU)) > cU && (yU = XU - UU), UU + yU
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L919` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L580) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L919)

```diff
-   42291: (MM, rM, iM) => {
+   40573: (UU, XU, zU) => {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L923-L924` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L584-L585) · [Before (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L923-L924)

```diff
-     const OM = 4e5,
-       SM = 2;
+     var cU = zU(40576),
+       yU = zU(1203);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L926-L929` → after: `L587-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L587-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L587-L591) · [Before (L926-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L926-L929)

```diff
-     function jM(MM, rM, iM) {
-       let [jM, aM] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [MM, rM], PM = Math.min(Number.isFinite(iM) && iM > 0 ? iM : 1, SM);
-       const nM = Math.max(0, jM, MM) * Math.max(0, aM, rM) * PM * PM;
-       return nM > OM && (PM *= Math.sqrt(OM / nM)), [Math.max(1, Math.floor(Math.max(0, MM) * PM)), Math.max(1, Math.floor(Math.max(0, rM) * PM))]
+     function QU() {
+       return {
+         segmentUploadUrl: `${yU.clientSideServerUrls.indexUrl}${cU.m}`,
+         manifestUrl: `${yU.clientSideServerUrls.indexUrl}${cU.i}`
+       }
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L932` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L594) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L932)

```diff
-   42233: (MM, rM, iM) => {
+   40578: (UU, XU, zU) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L934-L936` → after: `L596-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L596-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L596-L598) · [Before (L934-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L934-L936)

```diff
-       e: () => AM,
-       i: () => lM,
-       m: () => IM
+       c: () => cU,
+       d: () => QU,
+       e: () => yU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L938-L959` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L600) · [Before (L938-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L938-L959)

```diff
-     var OM = iM(41374),
-       SM = iM(42241),
-       jM = iM(42283),
-       aM = iM(42248),
-       PM = iM(38797),
-       nM = iM(38809),
-       QM = iM(38815),
-       zM = iM(38822),
-       LM = iM(38227),
-       mM = iM(38233),
-       HM = iM(42256),
-       hM = iM(38198),
-       JM = iM(38217),
-       dM = iM(38188);
- 
-     function yM(MM, rM) {
- ... (6 more removed lines; see GitHub link above)
+     const cU = 32768;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L962-L984` → after: `L603-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L603-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L603-L619) · [Before (L962-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L962-L984)

```diff
-       const rM = class extends HM.d {
-           constructor(rM, iM) {
-             const OM = (0, JM.Y)(rM),
-               SM = OM && (0, JM.v)(OM, MM.name);
-             for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
-             super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return MM.className
-           }
-           isCompatible(MM) {
-             return MM === dM.b.GLSL || MM === dM.b.WGSL
-           }
-         },
-         iM = (0, hM.i)(MM);
-       for (const [OM, SM] of Object.entries(hM.d)) {
- ... (7 more removed lines; see GitHub link above)
+       return (new TextEncoder).encode(UU).byteLength
+     }
+     const QU = new class {
+       constructor() {
+         this.inFlightBytes = 0, this.inFlightLabels = new Map
+       }
+       async fetch(UU, XU, zU, cU) {
+         if (this.inFlightBytes + zU > 49152) return await fetch(UU, XU);
+         this.inFlightBytes += zU, this.countLabel(cU, 1);
+         const yU = () => {
+           this.inFlightBytes -= zU, this.countLabel(cU, -1)
+         };
+         let QU;
+         try {
+           QU = await fetch(UU, {
+             ...XU,
+ ... (1 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L988-L1036` → after: `L628-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L628-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L628-L630) · [Before (L988-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L988-L1036)

```diff
-       return rM
-     }
-     class EM extends(lM(PM.b)) {}
-     var UM = iM(40931),
-       GM = iM(42260),
-       CM = iM(42265);
- 
-     function eM(MM, rM, iM) {
-       return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
-         const {
-           width: OM
-         } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
-           var SM;
-           const jM = Math.round(MM.getSize().height / OM),
-             aM = null === rM || void 0 === rM ? void 0 : rM[iM];
-           return {
- ... (33 more removed lines; see GitHub link above)
+       isInFlight(UU) {
+         var XU;
+         return (null !== (XU = this.inFlightLabels.get(UU)) && void 0 !== XU ? XU : 0) > 0
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1038-L1048` → after: `L632-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L632-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L632-L636) · [Before (L1038-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1038-L1048)

```diff
-       async setTextureArrayData(MM, rM) {
-         const iM = this.featureState,
-           {
-             width: OM,
-             height: SM
-           } = MM.getSize(),
-           jM = this._material.shaderLanguage;
-         if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
-         if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
-         const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
-         (0, wM.c)(this._material, iM, aM, OM, jM)
+       sendBeacon(UU, XU) {
+         const zU = yU(XU);
+         return !(this.inFlightBytes + zU > 57344) && this.beaconSent(navigator.sendBeacon(UU, new Blob([XU], {
+           type: "text/plain"
+         })), zU)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1050-L1066` → after: `L638-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L638-L639) · [Before (L1050-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1050-L1066)

```diff
-     }
-     var gM = iM(42269),
-       uM = iM(41410),
-       RM = iM(38034),
-       pM = iM(42278),
-       WM = iM(41508),
-       sM = iM(41400),
-       DM = iM(42212),
-       kM = iM(38457),
-       ZM = iM(42280);
-     class oM extends gM.b {
-       getData() {
-         return null
-       }
-       _rebuild() {}
-       restore() {
- ... (1 more removed lines; see GitHub link above)
+       sendUploadBeacon(UU, XU, zU) {
+         return !(this.inFlightBytes + zU > 40960) && this.beaconSent(navigator.sendBeacon(UU, XU), zU)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1068-L1093` → after: `L641-L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L641-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L641-L643) · [Before (L1068-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1068-L1093)

```diff
-     }
-     const fM = {
-       Mesh: pM.d,
-       TransformNode: DM.e,
-       Vz: gM.b,
-       VertexBuffer: gM.e,
-       BoundingInfo: uM.d,
-       sh: RM.sh,
-       ArenaBuffer: oM,
-       SubMesh: sM.e,
-       VertexData: WM.d,
-       MirroredGeometry: ZM.d,
-       meshFromArrays: ZM.h,
-       plainMeshFromArrays: ZM.k
-     };
-     (0, kM.g)(fM);
- ... (10 more removed lines; see GitHub link above)
+       countLabel(UU, XU) {
+         var zU;
+         void 0 !== UU && this.inFlightLabels.set(UU, (null !== (zU = this.inFlightLabels.get(UU)) && void 0 !== zU ? zU : 0) + XU)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1095-L1096` → after: `L645-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L645-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L645-L648) · [Before (L1095-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1095-L1096)

```diff
-       dispose(MM) {
-         (0, YM.m)(this._material), super.dispose(MM)
+       beaconSent(UU, XU) {
+         return UU && (this.inFlightBytes += XU, setTimeout((() => {
+           this.inFlightBytes -= XU
+         }), 1e4)), UU
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1099-L1109` → after: `L651-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L651-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L651-L654) · [Before (L1099-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1099-L1109)

```diff
- 
-     function AM(MM, rM) {
-       if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
-       const {
-         r: iM,
-         g: SM,
-         b: jM
-       } = rM.specularColor;
-       0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
-     }(0, zM.f)({
-       disableUnusedSpecularTerm: AM
+   },
+   40607: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1111-L1145` → after: `L656-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L656-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L656-L676) · [Before (L1111-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1111-L1145)

```diff
-     var xM = iM(38235),
-       vM = iM(38467);
-     const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
-     class BM extends(lM(QM.g)) {
-       constructor(MM, rM) {
-         super(MM, rM), this.dh = !1, rM.ditherOnlyWhileFading && (vM.f.add(MM), this.prewarmDitherTwins(MM))
-       }
-       prewarmDitherTwins(MM) {
-         const rM = new WeakSet;
-         MM.onEffectCreatedObservable.add((iM => {
-           let {
-             effect: OM,
-             subMesh: SM
-           } = iM;
-           if (this.featureState.prewarmingDither || rM.has(OM)) return;
-           rM.add(OM);
- ... (19 more removed lines; see GitHub link above)
+     var cU = zU(40578),
+       yU = zU(1220);
+     const QU = 6e4;
+     async function AU(UU, XU) {
+       const zU = JSON.stringify(XU);
+       try {
+         const XU = await cU.d.fetch(UU, {
+           method: "POST",
+           headers: {
+             "Content-Type": "application/json"
+           },
+           body: zU,
+           signal: (0, yU.n)(QU)
+         }, (0, cU.e)(zU));
+         return await async function(UU) {
+           if (!UU.ok) return 413 === UU.status ? "refused" : "retryLater";
+ ... (5 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1237` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L680) · [Before (L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1237)

```diff
-   42280: (MM, rM, iM) => {
+   40613: (UU, XU, zU) => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1240-L1241` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L683) · [Before (L1240-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1240-L1241)

```diff
-       h: () => LM,
-       k: () => mM
+       e: () => oU
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1243-L1343` → after: `L685-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L685-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L685-L688) · [Before (L1243-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1243-L1343)

```diff
-     var OM = iM(42269),
-       SM = iM(41167),
-       jM = iM(41410),
-       aM = iM(41512),
-       PM = iM(42278),
-       nM = iM(41508),
-       QM = iM(38347);
-     class zM extends aM.e {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (MM, rM) => {
-           this.releaseUnlessInstanced(rM)
-         }, this.onLinked = null
-       }
-       link(MM) {
-         var rM;
-         (0, QM.j)(MM), this.model = MM, null === (rM = this.onLinked) || void 0 === rM || rM.call(this, MM)
- ... (85 more removed lines; see GitHub link above)
+     var cU = zU(40578);
+     const yU = 16384,
+       QU = 100,
+       AU = (0, cU.e)(',"domSegments":[]');
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1345-L1363` → after: `L690-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L690-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L690-L723) · [Before (L1345-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1345-L1363)

```diff
-     function LM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
-       const SM = (0, QM.i)(rM),
-         {
-           positions: jM,
-           normals: LM,
-           uvs: mM,
-           indices: HM,
-           named: hM = {}
-         } = rM,
-         JM = new nM.d;
-       JM.positions = jM, JM.normals = null !== LM && void 0 !== LM ? LM : null, JM.uvs = null !== mM && void 0 !== mM ? mM : null, JM.indices = HM;
-       const dM = new zM(aM.e.RandomId(), iM, JM, !1, OM);
-       for (const {
-           kind: aM,
-           components: PM
- ... (3 more removed lines; see GitHub link above)
+     function FU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU;
+       const {
+         domSegments: FU,
+         ...oU
+       } = UU.manifest, DU = () => ({
+         ...UU,
+         manifest: {
+           ...oU,
+           videoSegments: [],
+           telemetrySegments: [],
+           games: []
+         },
+         creatorGrants: []
+       }), EU = (0, cU.e)(JSON.stringify(DU())), YU = [];
+       let NU = {
+ ... (18 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1366-L1373` → after: `L726-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L726-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L726-L748) · [Before (L1366-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1366-L1373)

```diff
-     function mM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const SM = new PM.d(MM, iM),
-         {
-           positions: jM,
-           normals: aM,
-           uvs: QM,
-           indices: zM
+     function oU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
+       return FU(UU, function(UU) {
+         var XU;
+         return [...UU.creatorGrants.map((UU => ({
+           list: "creatorGrants",
+           value: UU
+         }))), ...UU.manifest.games.map((UU => ({
+           list: "games",
+           value: UU
+         }))), ...UU.manifest.videoSegments.map((UU => ({
+           list: "videoSegments",
+           value: UU
+         }))), ...UU.manifest.telemetrySegments.map((UU => ({
+           list: "telemetrySegments",
+           value: UU
+ ... (7 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1375-L1380` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L750-L751) · [Before (L1375-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1375-L1380)

```diff
-       return Object.assign(new nM.d, {
-         positions: jM,
-         normals: aM,
-         uvs: QM,
-         indices: zM
-       }).applyToMesh(SM, OM), SM
+         return XU
+       }))
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1383-L1407` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L754) · [Before (L1383-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1383-L1407)

```diff
-   42265: (MM, rM, iM) => {
-     function OM(MM, rM, iM) {
-       const OM = rM * rM * 4,
-         SM = MM[0].layers,
-         jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
-         aM = new Uint8Array(jM * OM);
-       MM.forEach(((rM, iM) => {
-         const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
-         aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
-       }));
-       const PM = Math.max(1, Math.min(jM, iM || jM));
-       if (PM === jM) return [{
-         pixels: aM,
-         layers: jM
-       }];
-       const nM = [];
- ... (9 more removed lines; see GitHub link above)
+   40594: (UU, XU, zU) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1409-L1410` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L756) · [Before (L1409-L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1409-L1410)

```diff
-       c: () => OM,
-       f: () => jM
+       b: () => cU
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1412-L1428` → after: `L758-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L758-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L758-L762) · [Before (L1412-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1412-L1428)

```diff
-     const SM = new WeakMap;
- 
-     function jM(MM, rM, iM) {
-       var OM, jM;
-       const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
-       SM.set(MM, aM);
-       const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
-       aM.set(rM[0], PM);
-       const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
-       if (nM) return nM.built;
-       const QM = {
-         urls: [...rM],
-         built: iM()
-       };
-       return PM.push(QM), QM.built.catch((() => {
-         PM.splice(PM.indexOf(QM), 1)
- ... (1 more removed lines; see GitHub link above)
+     class cU extends Error {
+       constructor(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         super(UU), this.status = XU, this.storageCode = zU
+       }
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1431-L1436` → after: `L765-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L765-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L765-L775) · [Before (L1431-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1431-L1436)

```diff
-   39794: (MM, rM, iM) => {
-     function OM(MM, rM) {
-       return "object" === typeof MM && null !== MM ? Object.assign(MM, {
-         startStep: rM
-       }) : MM
-     }
+   40576: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => FU,
+       i: () => yU,
+       j: () => QU,
+       m: () => cU,
+       n: () => AU
+     });
+     const cU = "/index/replay/segment-upload-url",
+       yU = "/index/replay/manifest";
+     const QU = 65536;
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1439` → after: `L778-L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L778-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L778-L781) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1439)

```diff
-       return "object" === typeof MM && null !== MM && "startStep" in MM ? MM.startStep : null
+       return {
+         count: Math.ceil(UU.segmentDurationMs / UU.partDurationMs) + 1,
+         maxBytes: Math.ceil(1.5 * UU.bitrate / 8 * (UU.partDurationMs / 1e3)) + 32768
+       }
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1441-L1444` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/270.js#L783) · [Before (L1441-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/270.js#L1441-L1444)

```diff
-     iM.d(rM, {
-       d: () => SM,
-       g: () => OM
-     })
+     const FU = 432e5
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L8` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L7) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L8)

```diff
-   42188: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       openMobLineupPreview: () => NM,
-       openMobPreview: () => YM,
-       openPetPreview: () => AM
+   40667: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => gD,
+       e: () => nI
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L10-L37` → after: `L9-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L9-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L9-L131) · [Before (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L10-L37)

```diff
-     var OM = iM(40931),
-       SM = iM(41190),
-       jM = iM(42190),
-       aM = iM(38167),
-       PM = iM(38034),
-       nM = iM(41358),
-       QM = iM(42212),
-       zM = iM(39471),
-       LM = iM(38122),
-       mM = iM(38097),
-       HM = iM(38025),
-       hM = iM(39363),
-       JM = iM(39354),
-       dM = iM(39083),
-       yM = iM(39139),
-       lM = iM(39109),
- ... (12 more removed lines; see GitHub link above)
+     const cU = "0.9.4",
+       yU = {
+         DEBUG: !1,
+         LIB_VERSION: "1.438.7",
+         LIB_NAME: "web",
+         JS_SDK_VERSION: cU
+       };
+     var QU = yU;
+     const AU = "$early_access_features",
+       FU = "$active_feature_flags",
+       oU = "$feature_flag_details",
+       DU = "$feature_flag_errors",
+       EU = "$feature_flag_evaluated_at",
+       YU = "$feature_flag_request_id",
+       NU = "$minimal_flag_called_events",
+       IU = "$enabled_feature_flags",
+ ... (107 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L39-L56` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L133-L134) · [Before (L39-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L39-L56)

```diff
-     function pM() {
-       if (null !== gM) return gM;
-       const MM = document.createElement("canvas");
-       MM.classList.add("MobPreviewCanvas");
-       const rM = new OM.e(MM, !0, {
-         preserveDrawingBuffer: !0
-       });
-       rM.LOM = (0, UM.f)().CL.engine.LOM;
-       const iM = new SM.b(rM);
-       iM.clearColor = new aM.d(0, 0, 0, 0), iM.ambientColor = new aM.Color3(1, 1, 1);
-       const QM = new jM.c("Td", Math.PI / 2, Math.PI / 2, CM, PM.sh.Zero(), iM),
-         zM = new nM.e("light", new PM.sh(-.1, 1, -.3), iM);
-       return zM.diffuse = new aM.Color3(1, 1, 1), zM.specular = new aM.Color3(1, 1, 1), zM.groundColor = new aM.Color3(.5, .5, .5), gM = {
-         engine: rM,
-         YJ: iM,
-         canvas: MM,
- ... (2 more removed lines; see GitHub link above)
+     function Nz(UU, XU) {
+       return -1 !== UU.indexOf(XU)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L60-L62` → after: `L144-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L144-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L144-L161) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L60-L62)

```diff
-       return uM[MM] ??= (0, dM.u)(MM, pM().YJ, !0).catch((rM => {
-         throw delete uM[MM], rM
-       })), uM[MM]
+       var XU;
+       const zU = [];
+       return null !== (XU = JSON.stringify(UU, (function(UU, XU) {
+         if ("bigint" == typeof XU) return XU.toString();
+         if ("function" != typeof XU && "symbol" != typeof XU) {
+           if (XU instanceof Error) return {
+             name: XU.name,
+             message: XU.message,
+             stack: XU.stack
+           };
+           if (XU && "object" == typeof XU) {
+             for (; zU.length > 0 && zU[zU.length - 1] !== this;) zU.pop();
+             if (zU.includes(XU)) return "[Circular]";
+             zU.push(XU)
+           }
+           return XU
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L66-L69` → after: `L191-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L191-L195) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L66-L69)

```diff
-       let rM = RM.get(MM);
-       return rM || (rM = EM.A[MM].loadModel(pM().YJ, !1).then((MM => (MM.kR(!1), MM)), (rM => {
-         throw RM.delete(MM), rM
-       })), RM.set(MM, rM)), rM
+       return null === UU || "object" != typeof UU
+     }
+ 
+     function uz(UU, XU) {
+       return {}.toString.call(UU) === `[object ${XU}]`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L73-L121` → after: `L199-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L199-L207) · [Before (L73-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L73-L121)

```diff
-       var rM, iM, OM;
-       let {
-         mobType: SM,
-         variation: jM,
-         animation: aM
-       } = MM, nM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, CM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const wM = null !== (rM = null === nM || void 0 === nM ? void 0 : nM.size) && void 0 !== rM ? rM : 1,
-         tM = null !== (iM = null === nM || void 0 === nM ? void 0 : nM.cosmetics) && void 0 !== iM ? iM : [],
-         gM = null !== (OM = null === nM || void 0 === nM ? void 0 : nM.QG) && void 0 !== OM ? OM : null;
-       let uM = !1,
-         RM = null,
-         DM = null;
-       const {
-         engine: kM,
-         YJ: ZM
-       } = pM(), oM = ZM.onBeforeRenderObservable.add((() => {
- ... (33 more removed lines; see GitHub link above)
+       switch ({}.toString.call(UU)) {
+         case "[object Error]":
+         case "[object Exception]":
+         case "[object DOMException]":
+         case "[object DOMError]":
+         case "[object WebAssembly.Exception]":
+           return !0;
+         default:
+           return Hz(UU, Error)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L126-L130` → after: `L216-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L216-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L216-L220) · [Before (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L126-L130)

```diff
-       return DM({
-         mobType: "NPC",
-         variation: null,
-         animation: MM.animation
-       }, MM, rM)
+       try {
+         return UU instanceof XU
+       } catch (UU) {
+         return !1
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L133-L159` → after: `L226-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L226-L231) · [Before (L133-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L133-L159)

```diff
-     function ZM(MM) {
-       let {
-         mobType: rM,
-         variation: iM,
-         metaInfo: OM,
-         tamed: SM
-       } = MM, jM = !1, aM = null, PM = 0;
-       const nM = (0, UM.f)(),
-         QM = nM.CL.Dk,
-         zM = MM => {
-           PM += tM * (MM / 1e3) % (2 * Math.PI), QM.setRotationEulerY(aM, PM)
-         };
-       return WM(rM).then((MM => {
-         if (jM) return;
-         aM = (0, dM.i)(rM, wM, !0, !0), QM.setPosition(aM, 0, -wM, 0), MM.meshApi.updateVariation(aM, rM, iM);
-         const PM = {
- ... (11 more removed lines; see GitHub link above)
+     function sz(UU, XU, zU, cU, yU, QU, AU) {
+       try {
+         var FU = UU[QU](AU),
+           oU = FU.value
+       } catch (UU) {
+         return void zU(UU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L162-L171` → after: `L235-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L235-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L235-L250) · [Before (L162-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L162-L171)

```diff
-     class oM {
-       constructor(MM, rM) {
-         this.place = rM, this.remove = null;
-         const {
-           engine: iM,
-           YJ: OM,
-           canvas: SM
-         } = pM();
-         MM.appendChild(SM), iM.resize(), iM.runRenderLoop((() => {
-           OM.render()
+ 
+     function nz(UU) {
+       return function() {
+         var XU = this,
+           zU = arguments;
+         return new Promise((function(cU, yU) {
+           var QU = UU.apply(XU, zU);
+ 
+           function AU(UU) {
+             sz(QU, cU, yU, AU, FU, "next", UU)
+           }
+ 
+           function FU(UU) {
+             sz(QU, cU, yU, AU, FU, "throw", UU)
+           }
+           AU(void 0)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L174` → after: `L253-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L253-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L253-L285) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L174)

```diff
-       show(MM) {
+     }
+     const mz = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
+       lz = new Map,
+       xz = function(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+         if (!UU) return !1;
+         const zU = function(UU, XU) {
+             let zU = "";
+             for (let cU = 0; XU.length > cU; cU++) {
+               const UU = XU[cU];
+               zU += UU.length + ":" + UU
+             }
+             return UU.length + ":" + UU + "|" + XU.length + ":" + zU
+           }(UU, XU),
+           cU = lz.get(zU);
+         if (void 0 !== cU) return cU;
+ ... (17 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L176` → after: `L287-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L287-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L287-L293) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L176)

```diff
-         null === (rM = this.remove) || void 0 === rM || rM.call(this), this.remove = this.place(MM)
+         const zU = Date.now(),
+           cU = String(UU);
+         let yU = this._buckets[cU];
+         return yU ? this._applyRefill(yU, zU) : (yU = {
+           tokens: this._bucketSize,
+           lastAccess: zU
+         }, this._buckets[cU] = yU), 0 === yU.tokens || (yU.tokens--, 0 === yU.tokens && (null === (XU = this._onBucketRateLimited) || void 0 === XU || XU.call(this, UU)), 0 === yU.tokens)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L178-L183` → after: `L295-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L295-L296) · [Before (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L178-L183)

```diff
-       resize(MM, rM) {
-         const {
-           engine: iM,
-           canvas: OM
-         } = pM();
-         OM.width = MM, OM.height = rM, iM.resize()
+       stop() {
+         this._buckets = {}
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L185` → after: `L298-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L298-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L298-L447) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L185)

```diff
-       close() {
+     };
+     const Kz = "Mobile",
+       bz = "Android",
+       Tz = "Tablet",
+       hz = "Android Tablet",
+       Uc = "iPad",
+       Xc = "Apple Watch",
+       zc = "Safari",
+       cc = "BlackBerry",
+       yc = "Samsung Internet",
+       Qc = "Chrome",
+       Ac = "Chrome iOS",
+       Fc = "Internet Explorer",
+       oc = "Internet Explorer Mobile",
+       Dc = "Opera",
+       Ec = "Microsoft Edge",
+ ... (134 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L187` → after: `L449-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L449-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L449-L484) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L187)

```diff
-         pM().engine.stopRenderLoop(), null === (MM = this.remove) || void 0 === MM || MM.call(this), this.remove = null
+         const cU = bc(UU);
+         return cU === Uc || cU === hz || "Kobo" === cU || "Kindle Fire" === cU || cU === Pc ? Tz : cU === Ic || cU === ac || cU === pc || cU === Zc ? "Console" : cU === Xc ? "Wearable" : cU ? Kz : "Android" === (null == XU ? void 0 : XU.userAgentDataPlatform) && (null !== (zU = n … [truncated]
+         var yU, QU, AU
+       },
+       hc = /\bFBAV\/(\d+(?:\.\d+)*)/i,
+       Uy = [
+         [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
+         [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
+         [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", hc],
+         [/\bFBAN\/EMA\b/i, "Facebook Lite", hc],
+         [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", hc],
+         [/\bLinkedInApp(?:\]?\/(\d+(?:\.\d+)*))?\b/i, "LinkedIn"],
+         [/\bTwitter(?:Android| for (?:iPhone|iPad|Android))(?:\/(\d+(?:\.\d+)*))?\b/i, "Twitter"],
+         [/\b(?:musical_ly|trill)(?:[_/](\d+\.\d+(?:\.\d+)*))?(?=\b|_)/i, "TikTok", /\bapp_version\/(\d+(?:\.\d+)*)/i],
+         [/\b(?:MicroMessenger|WeChat)\/(\d+(?:\.\d+)*)?/i, "WeChat"],
+         [/\bLine\/(\d+(?:\.\d+)*)?/i, "Line"],
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L190-L195` → after: `L488-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L488-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L488-L509) · [Before (L190-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L190-L195)

```diff
-     class fM {
-       constructor(MM) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new oM(MM, (() => () => {}))
+ 
+     function yy(UU, XU) {
+       if (!XU) return UU;
+       let zU = [];
+       try {
+         zU = Object.keys(XU)
+       } catch (UU) {
+         zU = []
+       }
+       for (const cU of zU) {
+         let zU;
+         try {
+           zU = XU[cU]
+         } catch (UU) {
+           zU = zy
+         }
+ ... (6 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L197-L198` → after: `L511-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L511-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L511-L524) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L197-L198)

```diff
-       show(MM) {
-         MM.figures !== this.view.figures && this.preload(MM.figures), this.view = MM, this.place()
+       return UU
+     }
+     Date, Date;
+     const Qy = 3e5;
+     var Ay = class {
+       record(UU) {
+         if ("too-large" === UU.kind) return;
+         if ("retry-later" !== UU.kind) return void this.reset();
+         if (!UU.retryAfterMs) return;
+         const XU = this.isOpen(),
+           zU = Date.now(),
+           cU = Math.min(UU.retryAfterMs, Qy);
+         if (!XU) return this._installedAt = zU, void(this._until = zU + cU);
+         this._until = Math.max(this._until, Math.min(zU + cU, this._installedAt + Qy))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L200-L201` → after: `L526-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L526-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L526-L530) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L200-L201)

```diff
-       resize(MM, rM) {
-         this.preview.resize(MM, rM), this.aspect = MM / rM, this.place()
+       remainingMs() {
+         const UU = Date.now();
+         if (this._installedAt - 5e3 > UU) return this.reset(), 0;
+         const XU = Math.min(Qy, Math.max(0, this._until - UU));
+         return 0 === XU && this.reset(), XU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L203-L206` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L532-L533) · [Before (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L203-L206)

```diff
-       close() {
-         this.preview.close();
-         for (const MM of this.placed) null === MM || void 0 === MM || MM.remove();
-         this.placed = []
+       isOpen() {
+         return this.remainingMs() > 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L208-L214` → after: `L535-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L535-L536) · [Before (L208-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L208-L214)

```diff
-       preload(MM) {
-         const rM = () => {};
-         WM("NPC").catch(rM);
-         for (const {
-             QG: iM
-           }
-           of MM) null !== iM && sM(iM).catch(rM)
+       reset() {
+         this._until = 0, this._installedAt = 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L216-L233` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L538-L539) · [Before (L216-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L216-L233)

```diff
-       place() {
-         const {
-           figures: MM,
-           shown: rM
-         } = this.view, iM = MM.map(((iM, OM) => {
-           var SM;
-           const jM = null !== (SM = this.placed[OM]) && void 0 !== SM ? SM : null;
-           if (!rM[OM]) return null === jM || void 0 === jM || jM.remove(), null;
-           const aM = (PM = (OM + .5) / MM.length, nM = this.aspect, (.5 - PM) * (2 * CM * Math.tan(pM().camera.fov / 2)) * nM);
-           var PM, nM;
-           return null !== jM && jM.figure === iM && jM.x === aM ? jM : (null === jM || void 0 === jM || jM.remove(), {
-             figure: iM,
-             x: aM,
-             remove: kM(iM, aM)
-           })
-         }));
- ... (2 more removed lines; see GitHub link above)
+       constructor() {
+         this._until = 0, this._installedAt = 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L235` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L541-L542) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L235)

```diff
-     }
+     };
+     const Fy = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L237-L238` → after: `L544-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L544-L546) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L237-L238)

```diff
-     function YM(MM) {
-       return new oM(MM, DM)
+     function oy(UU, XU) {
+       return "string" == typeof(zU = UU) && Fy.test(zU) ? UU : XU();
+       var zU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L241-L242` → after: `L549-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L549-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L549-L559) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L241-L242)

```diff
-     function NM(MM) {
-       return new fM(MM)
+     function Dy(UU, XU) {
+       const zU = new Error(XU);
+       try {
+         Object.defineProperty(zU, "name", {
+           value: UU,
+           writable: !0,
+           enumerable: !0,
+           configurable: !0
+         })
+       } catch (UU) {}
+       return zU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L246` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L563) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L246)

```diff
-       return new oM(MM, ZM)
+       return UU ? UU.split("#")[0] : UU
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L260-L270` → after: `L567-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L567-L571) · [Before (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L260-L270)

```diff
-       return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, PM.B)(MM, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, PM.B)(MM, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+       try {
+         return UU()
+       } catch (UU) {
+         return
+       }
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L274-L277` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L575-L576) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L274-L277)

```diff
-       let iM = (0, PM.Db)(MM, "skele" + (rM - 1));
-       for (let SM = rM - 2; SM >= 0; SM--) iM = (0, PM.sb)(MM, `boneIdx == ${SM}`, (0, PM.Db)(MM, `skele${SM}`), iM);
-       const OM = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,PM.B)(MM,"int","boneIdx",(0,PM.wb)(MM,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,PM.B)(MM,"vec3","bone",iM)}\n\t\t\t\t${(0,PM.B)(MM,"vec2","pivot",(0,PM.n)(MM,"vec2","0.0",`${(0,PM.Hb)(MM,"position")}.z`))}\n\t\t\t\t${(0,PM.Y)(MM)?`positi … [truncated]
+       const zU = setTimeout(UU, XU);
+       return null != zU && zU.unref && (null == zU || zU.unref()), zU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L280-L281` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L579-L580) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L280-L281)

```diff
-     function zM(MM) {
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,PM.n)(MM,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+     function Iy(UU, XU, zU) {
+       return py.apply(this, arguments)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L283-L321` → after: `L582-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L582-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L582-L597) · [Before (L283-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L283-L321)

```diff
-     const LM = {
-         x: 0,
-         y: 0,
-         z: 0,
-         cz(MM, rM) {
-           return this.x = MM[rM], this.y = MM[rM + 1], this.z = MM[rM + 2], this
-         }
-       },
-       mM = {
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (MM, rM) => ({
-           ...(0, OM.b)("CAPE"),
-           BLOXD_CAPE_BONES: `${MM}`,
-           BLOXD_CAPE_MAX_Y: (0, SM.xb)(rM)
- ... (23 more removed lines; see GitHub link above)
+ 
+     function py() {
+       return (py = nz((function*(UU, XU, zU) {
+         let cU;
+         try {
+           return yield Promise.race([UU, new Promise(((UU, yU) => {
+             cU = Ny((() => {
+               try {
+                 null == zU || zU(), UU()
+               } catch (UU) {
+                 yU(UU)
+               }
+             }), XU)
+           }))])
+         } finally {
+           clearTimeout(cU)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L323-L363` → after: `L599-L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L599-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L599-L618) · [Before (L323-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L323-L363)

```diff
-       };
-     (0, aM.l)(mM)
-   },
-   39720: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => zM,
-       d: () => LM
-     });
-     var OM = iM(38181),
-       SM = iM(38310),
-       jM = iM(38188),
-       aM = iM(38198);
-     const PM = "bloxdTextLodBias",
-       nM = [{
-         name: PM,
-         type: "float"
- ... (25 more removed lines; see GitHub link above)
+       }))).apply(this, arguments)
+     }
+ 
+     function ay(UU) {
+       return ay = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
+         return typeof UU
+       } : function(UU) {
+         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
+       }, ay(UU)
+     }
+ 
+     function ty(UU, XU, zU) {
+       return (XU = function(UU) {
+         var XU = function(UU) {
+           if ("object" != ay(UU) || !UU) return UU;
+           var XU = UU[Symbol.toPrimitive];
+ ... (4 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L365-L388` → after: `L620-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L620-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L620-L637) · [Before (L365-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L365-L388)

```diff
-         }
-       };
-     (0, aM.l)(LM)
-   },
-   42227: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       CapeMaterialPlugin: () => UM,
-       HueTintMaterialPlugin: () => GM,
-       LifeformMaterialPlugin: () => CM,
-       OverlayMaterialPlugin: () => eM
-     });
-     var OM = iM(42233),
-       SM = iM(38984);
-     class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
-     var aM = iM(38275);
-     class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
- ... (8 more removed lines; see GitHub link above)
+           return String(UU)
+         }(UU);
+         return "symbol" == ay(XU) ? XU : XU + ""
+       }(XU)) in UU ? Object.defineProperty(UU, XU, {
+         value: zU,
+         enumerable: !0,
+         configurable: !0,
+         writable: !0
+       }) : UU[XU] = zU, UU
+     }
+ 
+     function gy(UU, XU) {
+       var zU = Object.keys(UU);
+       if (Object.getOwnPropertySymbols) {
+         var cU = Object.getOwnPropertySymbols(UU);
+         XU && (cU = cU.filter((function(XU) {
+ ... (2 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L390-L391` → after: `L639-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L639-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L639-L649) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L390-L391)

```diff
-       dispose(MM) {
-         (0, zM.m)(this._material), super.dispose(MM)
+       return zU
+     }
+ 
+     function ky(UU) {
+       for (var XU = 1; arguments.length > XU; XU++) {
+         var zU = null != arguments[XU] ? arguments[XU] : {};
+         XU % 2 ? gy(Object(zU), !0).forEach((function(XU) {
+           ty(UU, XU, zU[XU])
+         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : gy(Object(zU)).forEach((function(XU) {
+           Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
+         }))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L393-L434` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L651) · [Before (L393-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L393-L434)

```diff
-     }(0, OM.m)(mM.e, HM), (0, mM.f)({
-       disableUnusedSpecularTerm: OM.e,
-       isLightingDisabled: MM => MM instanceof LM.StandardMaterial && MM.disableLighting
-     });
-     var hM = iM(39720);
-     class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
-     var dM = iM(39852),
-       yM = iM(38178),
-       lM = iM(39126),
-       EM = iM(38287);
-     class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
-     class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
-     class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
-     class eM extends((0, OM.i)(EM.c)) {}(0, OM.m)(EM.c, eM)
-   },
-   42233: (MM, rM, iM) => {
- ... (26 more removed lines; see GitHub link above)
+       return UU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L438-L446` → after: `L656-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L656-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L656-L671) · [Before (L438-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L438-L446)

```diff
-       const rM = class extends HM.d {
-           constructor(rM, iM) {
-             const OM = (0, JM.Y)(rM),
-               SM = OM && (0, JM.v)(OM, MM.name);
-             for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
-             super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return MM.className
+       var XU;
+       const zU = globalThis._posthogChunkIds,
+         cU = globalThis._debugIds;
+       if (!zU && !cU) return;
+       const yU = zU ? Object.keys(zU) : [],
+         QU = cU ? Object.keys(cU) : [];
+       if (Ry && Wy(zU, yU, By) && Wy(cU, QU, Zy)) return Ry;
+       By = zU ? ky({}, zU) : void 0, Zy = cU ? ky({}, cU) : void 0, Ry = {}, null !== (XU = Gy) && void 0 !== XU || (Gy = {});
+       const AU = (XU, zU) => {
+         for (const yU of XU) {
+           const XU = zU[yU];
+           if (!XU) continue;
+           const QU = null == Gy ? void 0 : Gy[yU];
+           if (QU) {
+             Ry[QU] = XU;
+             continue
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L448-L449` → after: `L673-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L673-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L673-L680) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L448-L449)

```diff
-           isCompatible(MM) {
-             return MM === dM.b.GLSL || MM === dM.b.WGSL
+           const AU = UU(yU);
+           for (let UU = AU.length - 1; UU >= 0; UU--) {
+             var cU;
+             const zU = null === (cU = AU[UU]) || void 0 === cU ? void 0 : cU.filename;
+             if (zU) {
+               Ry[zU] = XU, Gy[yU] = zU;
+               break
+             }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L463-L464` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L683-L684) · [Before (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L463-L464)

```diff
-       }
-       return rM
+       };
+       return cU && AU(QU, cU), zU && AU(yU, zU), Ry
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L472-L500` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L688) · [Before (L472-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L472-L500)

```diff
-       return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
-         const {
-           width: OM
-         } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
-           var SM;
-           const jM = Math.round(MM.getSize().height / OM),
-             aM = null === rM || void 0 === rM ? void 0 : rM[iM];
-           return {
-             pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
-             layers: jM
-           }
-         })), jM = iM.ph().getCaps().texture2DArrayMaxLayerCount, PM = (0, CM.c)(SM, OM, jM).map((MM => {
-           let {
-             pixels: rM,
-             layers: SM
-           } = MM;
- ... (13 more removed lines; see GitHub link above)
+       return UU && zU ? XU.length === Object.keys(zU).length && XU.every((XU => UU[XU] === zU[XU])) : UU === zU
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L502-L504` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L690) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L502-L504)

```diff
-     const bM = new WeakMap;
-     var wM = iM(38829);
-     class tM extends(lM(nM.g)) {
+     var dy = class {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L506-L512` → after: `L692-L693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L692-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L692-L693) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L506-L512)

```diff
-         super(MM, rM), this.loaded = new Set, this.mirrors = void 0, this.mirrors = rM.textures.map((MM => MM.mirror)), this.mirrors.forEach(((MM, rM) => {
-           MM.onLoadObservable.add((MM => {
-             this.setTextureArrayData(MM, rM).catch((MM => {
-               console.error(`Failed to build the texture arrays, at atlas ${rM}`, MM)
-             }))
-           }))
-         })), (0, wM.j)(rM, MM.shaderLanguage)
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+         this.coercers = UU, this.stackParser = XU, this.modifiers = zU
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L514-L538` → after: `L695-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L695-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L695-L707) · [Before (L514-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L514-L538)

```diff
-       async setTextureArrayData(MM, rM) {
-         const iM = this.featureState,
-           {
-             width: OM,
-             height: SM
-           } = MM.getSize(),
-           jM = this._material.shaderLanguage;
-         if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
-         if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
-         const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
-         (0, wM.c)(this._material, iM, aM, OM, jM)
-       }
-     }
-     var gM = iM(42269),
-       uM = iM(41410),
-       RM = iM(38034),
- ... (9 more removed lines; see GitHub link above)
+       buildFromUnknown(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const zU = XU && XU.mechanism || {
+             handled: !0,
+             type: "generic"
+           },
+           cU = this.buildCoercingContext(zU, XU, 0).apply(UU),
+           yU = this.buildParsingContext(XU),
+           QU = this.parseStacktrace(cU, yU);
+         return {
+           $exception_list: this.convertToExceptionList(QU, zU),
+           $exception_level: "error"
+         }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L540-L542` → after: `L709-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L709-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L709-L714) · [Before (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L540-L542)

```diff
-       _rebuild() {}
-       restore() {
-         super._rebuild()
+       modifyFrames(UU) {
+         var XU = this;
+         return nz((function*() {
+           for (const zU of UU) zU.stacktrace && zU.stacktrace.frames && Gz(zU.stacktrace.frames) && (zU.stacktrace.frames = yield XU.applyModifiers(zU.stacktrace.frames));
+           return UU
+         }))()
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L544-L569` → after: `L716-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L716-L723) · [Before (L544-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L544-L569)

```diff
-     }
-     const fM = {
-       Mesh: pM.d,
-       TransformNode: DM.e,
-       Vz: gM.b,
-       VertexBuffer: gM.e,
-       BoundingInfo: uM.d,
-       sh: RM.sh,
-       ArenaBuffer: oM,
-       SubMesh: sM.e,
-       VertexData: WM.d,
-       MirroredGeometry: ZM.d,
-       meshFromArrays: ZM.h,
-       plainMeshFromArrays: ZM.k
-     };
-     (0, kM.g)(fM);
- ... (10 more removed lines; see GitHub link above)
+       coerceFallback(UU) {
+         var XU;
+         return {
+           type: "Error",
+           value: "Unknown error",
+           stack: null === (XU = UU.syntheticException) || void 0 === XU ? void 0 : XU.stack,
+           synthetic: !0
+         }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L571-L572` → after: `L725-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L725-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L725-L735) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L571-L572)

```diff
-       dispose(MM) {
-         (0, YM.m)(this._material), super.dispose(MM)
+       parseStacktrace(UU, XU) {
+         var zU;
+         let cU, yU;
+         if (null != UU.cause && (cU = this.parseStacktrace(UU.cause, XU)), "" != UU.stack && null != UU.stack) try {
+           yU = this.applyChunkIds(this.stackParser(UU.stack, UU.synthetic ? XU.skipFirstLines : 0), XU.chunkIdMap)
+         } catch (UU) {}
+         return ky(ky({}, UU), {}, {
+           cause: cU,
+           stack: yU,
+           errors: null === (zU = UU.errors) || void 0 === zU ? void 0 : zU.map((UU => this.parseStacktrace(UU, XU)))
+         })
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L574-L592` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L737-L738) · [Before (L574-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L574-L592)

```diff
-     }
- 
-     function AM(MM, rM) {
-       if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
-       const {
-         r: iM,
-         g: SM,
-         b: jM
-       } = rM.specularColor;
-       0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
-     }(0, zM.f)({
-       disableUnusedSpecularTerm: AM
-     });
-     var xM = iM(38235),
-       vM = iM(38467);
-     const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
- ... (3 more removed lines; see GitHub link above)
+       applyChunkIds(UU, XU) {
+         return UU.map((UU => (UU.filename && XU && (UU.chunk_id = XU[UU.filename]), UU)))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L594-L607` → after: `L740-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L740-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L740-L743) · [Before (L594-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L594-L607)

```diff
-       prewarmDitherTwins(MM) {
-         const rM = new WeakSet;
-         MM.onEffectCreatedObservable.add((iM => {
-           let {
-             effect: OM,
-             subMesh: SM
-           } = iM;
-           if (this.featureState.prewarmingDither || rM.has(OM)) return;
-           rM.add(OM);
-           const jM = null === SM || void 0 === SM ? void 0 : SM.getMesh();
-           jM && !FM.test(OM.defines) && MM.Hk().onAfterRenderObservable.addOnce((() => {
-             this.prewarmDither(jM) || rM.delete(OM)
-           }))
-         }))
+       applyCoercers(UU, XU) {
+         for (const zU of this.coercers)
+           if (zU.match(UU)) return zU.coerce(UU, XU);
+         return this.coerceFallback(XU)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L609-L616` → after: `L745-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L745-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L745-L791) · [Before (L609-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L609-L616)

```diff
-       prewarmDither(MM) {
-         if (this.dh || MM.xG()) return !1;
-         const rM = new sM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
-         this.featureState.prewarmingDither = !0;
-         try {
-           this._material.isReadyForSubMesh(MM, rM)
-         } finally {
-           this.featureState.prewarmingDither = !1
+       applyModifiers(UU) {
+         var XU = this;
+         return nz((function*() {
+           let zU = UU;
+           for (const UU of XU.modifiers) zU = yield UU(zU);
+           return zU
+         }))()
+       }
+       convertToExceptionList(UU, XU) {
+         const zU = [],
+           cU = (UU, yU, QU) => {
+             var AU;
+             const FU = zU.length,
+               oU = void 0 === yU ? ky(ky({
+                 type: "string" == typeof XU.type && XU.type.length > 0 ? XU.type : "generic"
+               }, "boolean" == typeof XU.handled ? {
+ ... (31 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L620-L621` → after: `L794-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L794-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L794-L885) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L620-L621)

```diff
-       dispose(MM) {
-         this.dh = !0, super.dispose(MM)
+       getAggregateErrors(UU) {
+         try {
+           if (fz(UU)) {
+             let zU = Object.getPrototypeOf(UU);
+             for (let cU = 0; zU && 100 > cU; cU++) {
+               var XU;
+               const cU = null === (XU = Object.getOwnPropertyDescriptor(zU, "constructor")) || void 0 === XU ? void 0 : XU.value;
+               if ("function" == typeof cU && "AggregateError" === cU.name) {
+                 const XU = UU.errors;
+                 return Gz(XU) ? XU : void 0
+               }
+               zU = Object.getPrototypeOf(zU)
+             }
+           }
+         } catch (UU) {}
+       }
+ ... (76 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L626-L627` → after: `L897-L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L897-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L897-L904) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L626-L627)

```diff
-     function IM(MM, rM) {
-       XM.set(MM, rM)
+     function wy(UU, XU, zU, cU, yU) {
+       const QU = {
+         platform: UU,
+         filename: XU,
+         function: "<anonymous>" === zU ? "?" : zU,
+         in_app: Cy(XU)
+       };
+       return Pz(cU) || (QU.lineno = cU), Pz(yU) || (QU.colno = yU), QU
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L629-L632` → after: `L906-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L906-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L906-L909) · [Before (L629-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L629-L632)

```diff
-     IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
-       create: (MM, rM) => {
-         const iM = new OM.StandardMaterial(MM.name, rM);
-         return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
+     const qy = (UU, XU) => {
+         const zU = -1 !== UU.indexOf("safari-extension"),
+           cU = -1 !== UU.indexOf("safari-web-extension");
+         return zU || cU ? [-1 !== UU.indexOf("@") ? UU.split("@")[0] : "?", zU ? `safari-extension:${XU}` : `safari-web-extension:${XU}`] : [UU, XU]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L634-L653` → after: `L911-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L911-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L911-L927) · [Before (L634-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L634-L653)

```diff
-       write: (MM, rM, iM) => {
-         (0, xM.U)(MM.mirror, rM, iM)
-       },
-       addFeature: (MM, rM, iM) => {
-         const OM = XM.get(rM.feature);
-         if (!OM) throw new Error(`${rM.feature.name} has no plugin class (registerPluginClass)`);
-         new OM(MM.mirror, rM.state, ...iM)
-       },
-       texture: (MM, rM, iM) => {
-         let {
-           url: OM,
-           noMipmap: SM,
-           invertY: jM,
-           samplingMode: PM,
-           data: nM,
-           sets: QM
- ... (4 more removed lines; see GitHub link above)
+       Oy = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
+       Sy = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
+       ry = /\((\S*)(?::(\d+))(?::(\d+))\)/,
+       uy = (UU, XU) => {
+         const zU = Oy.exec(UU);
+         if (zU) {
+           const [, UU, cU, yU] = zU;
+           return wy(XU, UU, "?", +cU, +yU)
+         }
+         const cU = Sy.exec(UU);
+         if (cU) {
+           if (cU[2] && 0 === cU[2].indexOf("eval")) {
+             const UU = ry.exec(cU[2]);
+             UU && (cU[2] = UU[1], cU[3] = UU[2], cU[4] = UU[3])
+           }
+           const [UU, zU] = qy(cU[1] || "?", cU[2]);
+ ... (1 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L680-L692` → after: `L930-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L930-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L930-L942) · [Before (L680-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L680-L692)

```diff
-       cube: (MM, rM, iM) => {
-         let {
-           rootUrl: OM,
-           files: jM,
-           noMipmap: PM,
-           luminance: nM
-         } = iM;
-         const {
-           samplingMode: QM
-         } = MM.sampler, zM = QM === (0, mM.y)(PM) ? null : () => {
-           (0, xM.M)(LM, QM)
-         }, LM = new SM.d(OM, rM, null, PM, jM, zM, null, (0, mM.v)(nM));
-         LM.coordinatesMode = aM.c.SKYBOX_MODE, (0, mM.F)(MM, LM)
+       fy = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
+       iy = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
+       Hy = (UU, XU) => {
+         const zU = fy.exec(UU);
+         if (zU) {
+           if (zU[3] && zU[3].indexOf(" > eval") > -1) {
+             const UU = iy.exec(zU[3]);
+             UU && (zU[1] = zU[1] || "eval", zU[3] = UU[1], zU[4] = UU[2], zU[5] = "")
+           }
+           let UU = zU[3],
+             cU = zU[1] || "?";
+           return [cU, UU] = qy(cU, UU), wy(XU, UU, cU, zU[4] ? +zU[4] : void 0, zU[5] ? +zU[5] : void 0)
+         }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L694-L791` → after: `L944-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L944-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L944-L964) · [Before (L694-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L694-L791)

```diff
-       canvas: (MM, rM, iM) => {
-         let {
-           width: OM,
-           height: SM,
-           mipmaps: PM,
-           samplingMode: nM,
-           hasAlpha: QM = !1,
-           wrap: zM = aM.c.CLAMP_ADDRESSMODE
-         } = iM;
-         const LM = new jM.b(rM, {
-           width: OM,
-           height: SM
-         }, MM, PM, nM);
-         LM.hasAlpha = QM, LM.wrapU = zM, LM.wrapV = zM;
-         const mM = (0, xM.C)(LM);
-         return (0, xM.F)(mM, LM), mM
- ... (82 more removed lines; see GitHub link above)
+       My = /\(error: (.*)\)/;
+ 
+     function vy(UU, XU) {
+       return UU.filename === XU.filename && UU.function === XU.function && UU.module === XU.module && UU.lineno === XU.lineno && UU.colno === XU.colno
+     }
+ 
+     function Vy(UU) {
+       for (let XU = 1; 10 >= XU; XU++) {
+         const zU = UU.length - 2 * XU;
+         if (0 > zU) break;
+         let cU = !0;
+         for (let yU = 0; XU > yU; yU++)
+           if (!vy(UU[zU + yU], UU[zU + XU + yU])) {
+             cU = !1;
+             break
+           } if (cU) {
+ ... (5 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L795-L802` → after: `L967-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L967-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L967-L1087) · [Before (L795-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L795-L802)

```diff
-       static mergeMeshes(MM, rM, iM, OM, SM, jM) {
-         const nM = MM[0].Hk(),
-           QM = new PM.d(MM[0].name + "_merged", nM),
-           LM = new zM(aM.e.RandomId(), nM, void 0, !1, QM);
-         try {
-           if (!PM.d.MergeMeshes(MM, rM, iM, QM, SM, jM)) return QM.dispose(), null
-         } catch (mM) {
-           throw QM.dispose(), mM
+     }
+ 
+     function sy(UU, XU) {
+       const zU = XU.start + XU.length,
+         cU = my(UU, XU);
+       cU && UU.splice(zU + cU === UU.length ? zU : XU.start, cU)
+     }
+ 
+     function ny(UU, XU) {
+       let zU = XU.start;
+       for (; zU > 0 && vy(UU[zU - 1], UU[zU - 1 + XU.length]);) zU--;
+       return XU.start - zU
+     }
+ 
+     function my(UU, XU) {
+       const zU = XU.start + XU.length;
+ ... (105 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L804` → after: `L1089-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1089-L1093) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L804)

```diff
-         return LM.relink(), QM
+       };
+     const by = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
+     var Ty = class {
+       match(UU) {
+         return "string" == typeof UU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L806-L807` → after: `L1095-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1095-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1095-L1103) · [Before (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L806-L807)

```diff
-       removeVerticesData(MM) {
-         this.releaseUnlessInstanced(MM), super.removeVerticesData(MM)
+       coerce(UU, XU) {
+         var zU;
+         const [cU, yU] = this.getInfos(UU);
+         return {
+           type: null != cU ? cU : "Error",
+           value: null != yU ? yU : UU,
+           stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
+           synthetic: !0
+         }
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L809-L810` → after: `L1105-L1109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1105-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1105-L1109) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L809-L810)

```diff
-       dispose() {
-         this.release(), super.dispose()
+       getInfos(UU) {
+         let XU = "Error",
+           zU = UU;
+         const cU = UU.match(by);
+         return cU && (XU = cU[1], zU = cU[2]), [XU, zU]
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L812-L814` → after: `L1111-L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1111-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1111-L1325) · [Before (L812-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L812-L814)

```diff
-       releaseUnlessInstanced(MM) {
-         var rM;
-         MM && null !== (rM = this.getVertexBuffer(MM)) && void 0 !== rM && rM.getIsInstanced() || this.release()
+     };
+     const hy = ["fatal", "error", "warning", "log", "info", "debug"];
+ 
+     function UQ(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
+       const zU = Object.keys(UU);
+       if (zU.sort(), !zU.length) return "[object has no keys]";
+       for (let cU = zU.length; cU > 0; cU--) {
+         const UU = zU.slice(0, cU).join(", ");
+         if (XU >= UU.length) return cU === zU.length ? UU : UU.length > XU ? `${UU.slice(0,XU)}...` : UU
+       }
+       return ""
+     }
+     var XQ = class {
+         match(UU) {
+           return "object" == typeof UU && null !== UU
+ ... (199 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L816-L817` → after: `L1327-L1412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1327-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1327-L1412) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L816-L817)

```diff
-       release() {
-         this.model && ((0, QM.p)(this.model), this.model = null)
+     };
+ 
+     function IQ(UU) {
+       return "string" == typeof UU || UU
+     }
+ 
+     function pQ(UU) {
+       return "string" == typeof UU ? UU : void 0
+     }
+     const aQ = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
+       tQ = "NativeGzipValidationError",
+       gQ = UU => UU.length >= 2 && 31 === UU[0] && 139 === UU[1],
+       kQ = (UU, XU) => UU === Dz.GZipJS || XU === Dz.GZipJS || "gzip" === XU,
+       GQ = UU => !(!UU || "object" != typeof UU) && "NotReadableError" === ("name" in UU ? String(UU.name) : "");
+     let BQ;
+     const ZQ = UU => {
+ ... (70 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L821-L839` → after: `L1442-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1442-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1442-L1449) · [Before (L821-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L821-L839)

```diff
-     function LM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
-       const SM = (0, QM.i)(rM),
-         {
-           positions: jM,
-           normals: LM,
-           uvs: mM,
-           indices: HM,
-           named: hM = {}
-         } = rM,
-         JM = new nM.d;
-       JM.positions = jM, JM.normals = null !== LM && void 0 !== LM ? LM : null, JM.uvs = null !== mM && void 0 !== mM ? mM : null, JM.indices = HM;
-       const dM = new zM(aM.e.RandomId(), iM, JM, !1, OM);
-       for (const {
-           kind: aM,
-           components: PM
- ... (3 more removed lines; see GitHub link above)
+     function hQ(UU) {
+       return function(UU) {
+         return rQ.test(UU)
+       }(UU) || VQ.test(UU) || sQ.test(UU)
+     }
+ 
+     function UA(UU) {
+       return UU.split("&", 129).length > 128
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L843-L859` → after: `L1453-L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1453-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1453-L1497) · [Before (L843-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L843-L859)

```diff
-       let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const SM = new PM.d(MM, iM),
-         {
-           positions: jM,
-           normals: aM,
-           uvs: QM,
-           indices: zM
-         } = rM;
-       return Object.assign(new nM.d, {
-         positions: jM,
-         normals: aM,
-         uvs: QM,
-         indices: zM
-       }).applyToMesh(SM, OM), SM
-     }
-   },
- ... (1 more removed lines; see GitHub link above)
+       return hQ(UU) || XU.includes(";") && function(UU) {
+         return UU.split(";").some((UU => hQ(UU.split("=", 1)[0])))
+       }(XU) ? LQ : iQ.test(XU) ? zU ? FA(XU, {
+         allowNestedUrls: !1,
+         stripPunctuation: !0
+       }) : LQ : XU
+     }
+ 
+     function zA(UU, XU) {
+       const zU = new URLSearchParams;
+       let cU = !1,
+         yU = !1;
+       for (const [QU, AU] of new URLSearchParams(UU)) {
+         const UU = oA(QU),
+           FU = oA(AU);
+         cU || (cU = UU !== QU || FU !== AU);
+ ... (29 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L861-L873` → after: `L1499-L1603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1499-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1499-L1603) · [Before (L861-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L861-L873)

```diff
-       const OM = rM * rM * 4,
-         SM = MM[0].layers,
-         jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
-         aM = new Uint8Array(jM * OM);
-       MM.forEach(((rM, iM) => {
-         const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
-         aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
-       }));
-       const PM = Math.max(1, Math.min(jM, iM || jM));
-       if (PM === jM) return [{
-         pixels: aM,
-         layers: jM
-       }];
+       return "#" === UU ? !XU.fragment && (XU.fragment = !0) : "?" === UU && (XU.fragment ? "=" !== zU && !XU.fragmentQuery && (XU.fragmentQuery = !0) : !XU.query && (XU.query = !0))
+     }
+ 
+     function AA(UU, XU) {
+       var zU;
+       if (UU.length > 8192 && MQ.test(UU)) return LQ;
+       const {
+         address: cU,
+         suffix: yU
+       } = XU.stripPunctuation ? function(UU) {
+         let XU = UU.length;
+         for (; XU > 0 && ".,;:!?)]}'".includes(UU[XU - 1]);) XU--;
+         return {
+           address: UU.slice(0, XU),
+           suffix: UU.slice(XU)
+         }
+ ... (89 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L875-L876` → after: `L1605-L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1605-L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1605-L1727) · [Before (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L875-L876)

```diff
-       for (let QM = 0; QM < jM; QM += PM) {
-         const MM = Math.min(jM, QM + PM);
+       for (let QU = KQ.exec(UU); null !== QU; QU = KQ.exec(UU)) XU.push({
+         digits: QU[0],
+         start: QU.index,
+         end: QU.index + QU[0].length
+       });
+       let zU = "",
+         cU = 0,
+         yU = 0;
+       for (; XU.length > yU;) {
+         let QU = "",
+           AU = -1;
+         for (let UU = yU; XU.length > UU && (QU += XU[UU].digits, 19 >= QU.length); UU++) QU.length >= 13 && DA(QU) && (AU = UU);
+         0 > AU ? yU++ : (zU += UU.slice(cU, XU[yU].start) + LQ, cU = XU[AU].end, yU = AU + 1)
+       }
+       return zU + UU.slice(cU)
+     }
+ ... (107 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L878-L879` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1729) · [Before (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L878-L879)

```diff
-           pixels: aM.slice(QM * OM, MM * OM),
-           layers: MM - QM
+           stringValue: zy
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L882` → after: `L1732-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1732-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1732-L1764) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L882)

```diff
-       return nM
+       return UU.length > AU && yU.push({
+         stringValue: Xy
+       }), yU
+     }
+ 
+     function aA(UU, XU, zU, cU) {
+       const yU = [];
+       for (const QU in UU)
+         if (YA.call(UU, QU)) {
+           if (!QU) {
+             null == XU || XU.debug("Dropping an attribute with an empty key");
+             continue
+           }
+           if (yU.length >= 1e3 || 0 >= zU.remainingNodes) {
+             null == XU || XU.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
+             break
+ ... (17 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L891-L904` → after: `L1768-L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1768-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/271.js#L1768-L1785) · [Before (L891-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/271.js#L891-L904)

```diff
-       var OM, jM;
-       const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
-       SM.set(MM, aM);
-       const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
-       aM.set(rM[0], PM);
-       const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
-       if (nM) return nM.built;
-       const QM = {
-         urls: [...rM],
-         built: iM()
-       };
-       return PM.push(QM), QM.built.catch((() => {
-         PM.splice(PM.indexOf(QM), 1)
-       })), QM.built
+       return ky(ky(ky(ky({}, yy({}, UU.resourceAttributes)), {}, {
+         "service.name": UU.serviceName || "unknown_service"
+       }, UU.environment && {
+         "deployment.environment": UU.environment
+       }), UU.serviceVersion && {
+         "service.version": UU.serviceVersion
+       }), {}, {
+         "telemetry.sdk.name": XU,
+         "telemetry.sdk.version": zU
+       })
+     }
+     const gA = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];
+ 
+     function kA(UU, XU) {
+       const zU = yy({}, UU),
+         cU = {};
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L7)

```diff
-   42144: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => jM,
-       h: () => aM
+   40909: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       playDocsSound: () => oU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L9-L10` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/272.js#L8-L12) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/272.js#L9-L10)

```diff
-     var OM = iM(2050);
-     let SM = !1;
+     var cU = zU(5378),
+       yU = zU(37480),
+       QU = zU(1203),
+       AU = zU(37484);
+     const FU = new Map;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L12-L46` → after: `L14-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L14-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/272.js#L14-L26) · [Before (L12-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/272.js#L12-L46)

```diff
-     function jM() {
-       SM = !0
-     }
- 
-     function aM() {
-       SM && (SM = !1, (0, OM.c)())
-     }
-   },
-   42135: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM,
-       f: () => jM,
-       j: () => PM
-     });
-     var OM = iM(41669),
-       SM = iM(41677);
- ... (19 more removed lines; see GitHub link above)
+     function oU(UU, XU, zU, oU, DU) {
+       let EU, YU = 0;
+       if (XU) EU = new cU.Howl({
+         src: [`${QU.clientSideServerUrls.staticUrl}/sounds/music/${UU}.mp3`],
+         html5: !0,
+         volume: zU
+       });
+       else {
+         const XU = (0, yU.y)(UU);
+         YU = XU.ms / 1e3, EU = FU.get(UU), EU || (EU = new cU.Howl({
+           src: [...XU.src],
+           volume: 1
+         }), FU.set(UU, EU))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L48-L175` → after: `L28-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L28-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/272.js#L28-L71) · [Before (L48-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/272.js#L48-L175)

```diff
-     }
- 
-     function aM(MM) {
-       const {
-         terrainOpaque: rM,
-         terrainTransparent: iM,
-         earthSky: OM,
-         skyMeshes: SM,
-         regular: jM,
-         thin: aM,
-         line: PM,
-         text: nM,
-         particles: QM
-       } = MM;
-       return rM + iM + OM + SM + jM + aM + PM + nM + QM
-     }
- ... (112 more removed lines; see GitHub link above)
+       const NU = XU ? EU.play() : EU.play(AU.d);
+       EU.volume(zU, NU), oU > 0 && EU.seek(oU, NU);
+       const IU = () => {
+         const UU = EU.duration();
+         return XU || UU > 0 ? UU : YU
+       };
+       let pU = !1;
+       const aU = UU => {
+           pU || (pU = !0, EU.off("play", tU, NU), EU.off("end", gU, NU), EU.off("loaderror", GU), EU.off("playerror", kU, NU), XU && EU.unload(), DU.onEnd(UU))
+         },
+         tU = () => {
+           DU.onPlay(IU())
+         },
+         gU = () => {
+           aU(!1)
+         },
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L8)

```diff
-   40515: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM,
-       g: () => SM,
-       j: () => jM
+   40922: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => JU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L10-L43` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L8-L66) · [Before (L10-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L10-L43)

```diff
-     var OM = iM(44);
- 
-     function SM(MM) {
-       return PM(MM, nM)
-     }
- 
-     function jM(MM) {
-       return PM(MM, QM)
-     }
- 
-     function aM(MM) {
-       return `${Math.floor(MM/60)}:${String(MM%60).padStart(2,"0")}`
-     }
- 
-     function PM(MM, rM) {
-       const [, iM] = (0, OM.useState)(null);
- ... (18 more removed lines; see GitHub link above)
+     zU(7044);
+     var cU = zU(61),
+       yU = zU(40929),
+       QU = zU(41199),
+       AU = zU(41295),
+       FU = zU(41331),
+       oU = zU(41348),
+       DU = zU(37919),
+       EU = zU(37814),
+       YU = zU(41473),
+       NU = zU(41532),
+       IU = (zU(41563), zU(1236)),
+       pU = zU(212),
+       aU = zU(1193),
+       tU = zU(27),
+       gU = zU(3021),
+ ... (43 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L46-L54` → after: `L69-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L69-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L69-L81) · [Before (L46-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L46-L54)

```diff
-       return Math.max(0, Math.ceil(nM(MM)))
-     }
-   },
-   40543: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => SM
-     });
-     var OM = iM(40551);
-     async function SM() {
+       let {
+         heatmap: XU,
+         scale: zU,
+         fullyOpaqueFrom: SU,
+         bounds: HU,
+         fitBounds: MU,
+         schematic: vU,
+         controls: VU,
+         onStepTime: sU,
+         onShowAllTime: nU,
+         onTogglePlaying: mU,
+         getReadout: xU = null
+       } = UU;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L56-L79` → after: `L83-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L83-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L83-L102) · [Before (L56-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L56-L79)

```diff
-         averageColors: MM
-       } = await iM.e(231).then((() => iM(35131)));
-       return new OM.c(MM)
-     }
-   },
-   40520: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => nM
-     });
-     var OM = iM(37624),
-       SM = iM(1188),
-       jM = iM(1258),
-       aM = iM(39491),
-       PM = iM(39543);
-     class nM {
-       constructor(MM, rM) {
- ... (8 more removed lines; see GitHub link above)
+         t: JU
+       } = (0, aU.I)(), {
+         clientEscMenuOptions: QX
+       } = (0, tU.q)(["clientEscMenuOptions"]), oX = (0, cU.useRef)(null), DX = (0, cU.useRef)(null), EX = (0, cU.useRef)(null), YX = (0, gU.d)(oX), [NX, IX] = (0, cU.useState)(!1), [pX, aX] = (0, cU.useState)(!1), [tX, gX] = (0, cU.useState)(!0), kX = (0, cU.useRef)(!1), [GX, BX] … [truncated]
+       wX[0] === CX[0] && wX[1] === CX[1] && wX[2] === CX[2] || (qX(CX), null !== LX && eX({
+         ...LX,
+         position: AX(LX.position, AX(wX, FX(CX, -1)))
+       }));
+       const OX = (0, cU.useMemo)((() => function(UU) {
+           return [UU.max[0] - UU.min[0] + 1, UU.max[1] - UU.min[1] + 1, UU.max[2] - UU.min[2] + 1]
+         }(HU)), [HU]),
+         SX = (0, cU.useMemo)((() => function(UU, XU) {
+           const zU = [],
+             cU = [];
+           for (const [yU, QU] of Object.entries(UU.frequencies)) {
+             const UU = Number(yU);
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L81-L142` → after: `L104-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L104-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L104-L136) · [Before (L81-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L81-L142)

```diff
-         }, window.addEventListener("resize", this.pE), null === (iM = window.visualViewport) || void 0 === iM || iM.addEventListener("resize", this.pE)
-       }
-       bindMarker(MM) {
-         const rM = this.refs.get(MM);
-         if (rM) return rM;
-         const iM = rM => {
-           var OM;
-           null === (OM = this.markers.get(MM)) || void 0 === OM || OM.stopObserving(), this.markers.delete(MM), rM && !this.dh ? (this.markers.set(MM, this.mount(rM)), this.refs.set(MM, iM)) : this.refs.delete(MM)
-         };
-         return this.refs.set(MM, iM), iM
-       }
-       hasMarkers() {
-         return this.markers.size > 0
-       }
-       setRender(MM) {
-         this.render = MM
- ... (46 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(zU),
+             values: Float64Array.from(cU),
+             count: cU.length
+           }
+         }(XU, CX)), [XU, CX]),
+         rX = WU * QX.cameraFOV / 100,
+         uX = YX.height > 0 ? YX.width / YX.height : 1,
+         fX = (0, cU.useMemo)((() => function(UU, XU) {
+           return {
+             min: [UU.min[0] - XU[0], UU.min[1] - XU[1], UU.min[2] - XU[2]],
+             max: [UU.max[0] - XU[0] + 1, UU.max[1] - XU[1] + 1, UU.max[2] - XU[2] + 1]
+           }
+         }(MU, CX)), [MU, CX]),
+         iX = zX(fX, uX, rX),
+         HX = null !== LX && void 0 !== LX ? LX : iX,
+ ... (17 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L144-L200` → after: `L138-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L138-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L138-L172) · [Before (L144-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L144-L200)

```diff
-             labelsBelow: 0,
-             target: null,
-             metres: null,
-             metresShownAt: 0,
-             stopObserving: () => {}
-           },
-           iM = MM.querySelector(`.${this.classes.labels}`),
-           OM = new ResizeObserver((() => {
-             rM.halfSize = {
-               width: Math.max(MM.offsetWidth, iM.offsetWidth) / 2,
-               height: MM.offsetHeight / 2
-             }, rM.labelsBelow = iM.offsetTop + iM.offsetHeight - MM.offsetHeight, this.place(rM)
-           }));
-         return OM.observe(MM, {
-           box: "border-box"
-         }), OM.observe(iM, {
- ... (41 more removed lines; see GitHub link above)
+             cU = function(UU, XU, zU, cU) {
+               let yU = 0,
+                 QU = 1 / 0;
+               for (const YU of [0, 1, 2]) {
+                 if (0 === XU[YU]) {
+                   if (UU[YU] < 0 || UU[YU] > zU[YU]) return null;
+                   continue
+                 }
+                 const cU = (0 - UU[YU]) / XU[YU],
+                   AU = (zU[YU] - UU[YU]) / XU[YU];
+                 yU = Math.max(yU, Math.min(cU, AU)), QU = Math.min(QU, Math.max(cU, AU))
+               }
+               if (yU > QU) return null;
+               const AU = [0, 1, 2].map((cU => Math.min(zU[cU] - 1, Math.max(0, Math.floor(UU[cU] + XU[cU] * yU))))),
+                 FU = [0, 1, 2].map((UU => Math.sign(XU[UU]))),
+                 oU = [0, 1, 2].map((zU => {
+ ... (19 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L202-L227` → after: `L174-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L174-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L174-L186) · [Before (L202-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L202-L227)

```diff
-         } else {
-           if (null === this.view) return void console.warn(`[greenville] backpack ${MM[0]} with no backpack shown`);
-           {
-             var rM, iM;
-             const OM = MM[1],
-               SM = this.view.contents.find((MM => {
-                 let [rM] = MM;
-                 return rM === OM
-               })),
-               jM = this.view.contents.filter((MM => {
-                 let [rM] = MM;
-                 return rM !== OM
-               })),
-               aM = null !== (rM = null === SM || void 0 === SM ? void 0 : SM[1]) && void 0 !== rM ? rM : 0,
-               PM = null !== (iM = null === SM || void 0 === SM ? void 0 : SM[2]) && void 0 !== iM ? iM : 0;
-             "shard" === MM[0] ? this.view = {
- ... (10 more removed lines; see GitHub link above)
+         }), [ZX, XU, CX, HX, OX, zU, SU]),
+         {
+           keyHandlers: VX
+         } = (0, ZU.g)({
+           isEnabled: ZX,
+           claimedKeyCodes: qU,
+           ON: UU => {
+             eX((XU => function(UU, XU) {
+               const zU = [Math.sin(UU.heading), 0, Math.cos(UU.heading)],
+                 cU = AX(AX(FX(zU, XU.forward), FX(XX(UU.heading), XU.right)), [0, XU.up, 0]);
+               return {
+                 ...UU,
+                 position: AX(UU.position, cU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L230` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L247-L249) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L230)

```diff
-           }
+           }(UU, MX.current.fieldOfView)
+         } catch (zU) {
+           return console.error("Failed to start the 3D heatmap", zU), void IX(!0)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L232-L256` → after: `L251-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L251-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L251-L350) · [Before (L232-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L232-L256)

```diff
-         this.Tz(this.view)
-       }
-     }
-     var HM = iM(1116),
-       hM = iM.n(HM),
-       JM = iM(19),
-       dM = iM(37538),
-       yM = iM(2026),
-       lM = iM(1516),
-       EM = iM(2093),
-       UM = iM(1188);
-     const GM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAF1CAYAAADftMc3AAAQAElEQVR4Aex9B6AkV3XlfVXd///J82dGYaRRFpJGKEwQCkgzGkVQAgQG5YDxEmxss7Yx0YE1YAzYJngNthevwQbDgvECZndtDJhkhNLMKIxGWZN+Tp1TVb29p/q/P+/Xr+pYnfv/vv3Sfffde+uduq9eVXcb1MK/7fdfe34Lh+8P3fdA13mgZYDeft/V73By+c … [truncated]
-     var CM = iM(1303);
-     const eM = (0, PM.forwardRef)((function(MM, rM) {
-       let {
-         contents: iM,
- ... (9 more removed lines; see GitHub link above)
+         return EX.current = XU, XU.engine.runRenderLoop((() => {
+           const UU = XU.camera;
+           UU.fov !== XU.targetFieldOfView && (UU.fov += (XU.targetFieldOfView - UU.fov) * (UU.fov > XU.targetFieldOfView ? .3 : .2), Math.abs(XU.targetFieldOfView - UU.fov) < 5e-4 && (UU.fov = XU.targetFieldOfView), XU.needsRender = !0), XU.needsRender && (XU.sa.render(), XU.need … [truncated]
+         })), () => {
+           EX.current = null, XU.engine.dispose()
+         }
+       }), []), (0, cU.useEffect)((() => {
+         const UU = DX.current;
+         if (!UU) return;
+         const XU = () => {
+             kX.current = !1, aX(document.pointerLockElement === UU)
+           },
+           zU = () => {
+             kX.current && (kX.current = !1, gX(!1))
+           },
+           cU = XU => {
+ ... (84 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L259-L296` → after: `L354-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L354-L356) · [Before (L259-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L259-L296)

```diff
-         className: "GreenvilleBackpackBag",
-         children: [jM, (0, CM.jsx)("img", {
-           className: hM()("GreenvilleBackpackArt", {
-             Full: SM
-           }),
-           src: GM,
-           alt: "",
-           draggable: !1
-         }), (0, CM.jsx)("div", {
-           className: "GreenvilleBackpackWindow",
-           children: aM.map((MM => {
-             let [rM, iM] = MM;
-             const SM = Math.min(1 - PM, iM / OM),
-               jM = (0, CM.jsx)(wM, {
-                 item: rM,
-                 below: PM,
- ... (22 more removed lines; see GitHub link above)
+         children: [(0, PU.jsx)("canvas", {
+           className: "StudioHeatmapMapCanvas",
+           ref: DX,
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L298-L299` → after: `L358-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L358-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L358-L417) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L298-L299)

```diff
-             bottom: `calc(var(--rise) * ${iM})`,
-             height: `calc(var(--rise) * ${OM} + var(--slant))`
+             width: `${YX.width}px`,
+             height: `${YX.height}px`
+           },
+           tabIndex: 0,
+           "aria-label": JU("3D heatmap"),
+           onClick: () => {
+             const UU = DX.current;
+             if (null === UU) return;
+             if (UU.focus({
+                 preventScroll: !0
+               }), pX || !tX) return;
+             const XU = UU.requestPointerLock();
+             XU instanceof Promise ? XU.catch((UU => {
+               UU instanceof DOMException && ("WrongDocumentError" === UU.name || "NotSupportedError" === UU.name) && gX(!1)
+             })) : kX.current = !0
+           },
+ ... (44 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L301-L307` → after: `L419-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L419-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L419-L443) · [Before (L301-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L301-L307)

```diff
-           children: Array.from({
-             length: 18
-           }, ((MM, iM) => (0, CM.jsx)("div", {
-             className: "GreenvilleBackpackOreTile",
-             children: (0, CM.jsx)(yM.b, {
-               itemName: rM,
-               amount: 0
+           onFlip: () => {
+             eX((UU => function(UU, XU) {
+               return cX(UU, XU, {
+                 heading: UU.heading + Math.PI,
+                 pitch: -UU.pitch
+               })
+             }(null !== UU && void 0 !== UU ? UU : MX.current.fittedView, yX(fX))))
+           }
+         }), null !== vX && (0, PU.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === xU ? JU("studio:heatmapBlockReadout", {
+             x: vX.x,
+             y: vX.y,
+             z: vX.z,
+             count: (0, IU.I)(vX.value)
+           }) : xU(vX.x, vX.y, vX.z, vX.value)
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L309-L340` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L445-L446) · [Before (L309-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L309-L340)

```diff
-           }, iM)))
-         })
-       })),
-       tM = [{
-         transform: "scale(1)"
-       }, {
-         transform: "scale(1.12, 0.86)",
-         offset: .3
-       }, {
-         transform: "scale(0.96, 1.05)",
-         offset: .65
-       }, {
-         transform: "scale(1)"
-       }],
-       gM = [{
-         transform: "scale(1.3)"
- ... (16 more removed lines; see GitHub link above)
+           })]
+         })]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L346` → after: `L452-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L452-L456) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L346)

```diff
-         view: rM
+         heading: XU,
+         pitch: zU,
+         onViewFrom: yU,
+         onTurn: QU,
+         onFlip: AU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L350-L467` → after: `L460-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L460-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L460-L541) · [Before (L350-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L350-L467)

```diff
-       } = (0, UM.A)(), {
-         isTouchScreen: OM
-       } = (0, JM.m)(["isTouchScreen"]), [SM, jM] = (0, PM.useState)([]), aM = (0, PM.useRef)(null), nM = (0, PM.useRef)(null), QM = (0, PM.useRef)([]), zM = (0, PM.useRef)({
-         arrival: rM.arrival,
-         showToken: rM.showToken
-       }), {
-         arrival: LM,
-         showToken: mM
-       } = rM;
-       (0, PM.useLayoutEffect)((() => {
-         var MM;
-         if (mM !== zM.current.showToken) jM([]);
-         else if (null !== LM && LM.token !== (null === (MM = zM.current.arrival) || void 0 === MM ? void 0 : MM.token) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
-           const MM = {
-             id: uM++,
-             item: LM.item,
- ... (102 more removed lines; see GitHub link above)
+       } = (0, aU.I)(), oU = (0, cU.useRef)(null), DU = UX({
+         heading: XU,
+         pitch: zU
+       }), EU = XX(XU), YU = DX(DU, EU), NU = sU + nU + 2, IU = VU.flatMap((UU => [1, -1].map((XU => {
+         const zU = FX(UU.direction, XU);
+         return {
+           ...UU,
+           sign: XU,
+           direction: zU,
+           endX: NU + oX(zU, EU) * sU,
+           endY: NU - oX(zU, YU) * sU,
+           depth: oX(zU, DU)
+         }
+       })))).sort(((UU, XU) => XU.depth - UU.depth));
+       return (0, PU.jsxs)("svg", {
+         className: "StudioHeatmap3DGizmo",
+ ... (66 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L469` → after: `L543-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L543-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L543-L554) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L469)

```diff
-           })]
+           }, `${zU?"+":"-"}${UU.name}`)
+         })), (0, PU.jsx)("circle", {
+           className: "StudioHeatmap3DGizmoEnd",
+           "data-middle": !0,
+           cx: NU,
+           cy: NU,
+           r: mU,
+           fill: "#d0d0d0",
+           fillOpacity: .85,
+           children: (0, PU.jsx)("title", {
+             children: FU("View from the opposite side")
+           })
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L475-L477` → after: `L560-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L560-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L560-L563) · [Before (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L475-L477)

```diff
-       let {
-         shards: rM,
-         shardsPerItem: iM
+       var XU, zU, cU;
+       const {
+         chunkGridOrigin: yU,
+         camera: QU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L479-L488` → after: `L565-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L565-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L565-L582) · [Before (L479-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L479-L488)

```diff
-       return (0, CM.jsx)("div", {
-         className: "GreenvilleBackpackShards",
-         children: Array.from({
-           length: iM
-         }, ((MM, iM) => (0, CM.jsx)("span", {
-           className: hM()("GreenvilleBackpackShard", {
-             Filled: iM < rM
-           })
-         }, iM)))
-       })
+       if (null === yU) return;
+       const AU = [QU.position.x, QU.position.y, QU.position.z],
+         FU = [0, 2].map((UU => Math.floor((AU[UU] + yU[UU]) / pU.f.aY))),
+         oU = UU.chunkGridCentre;
+       if (null !== oU && oU.every(((UU, XU) => UU === FU[XU]))) return;
+       const YU = null === (XU = null === (zU = UU.chunkGrid) || void 0 === zU ? void 0 : zU.isVisible) || void 0 === XU || XU;
+       null === (cU = UU.chunkGrid) || void 0 === cU || cU.dispose();
+       const [IU, aU] = [0, 2].map(((UU, XU) => {
+         const zU = [];
+         for (let cU = FU[XU] - rU; cU <= FU[XU] + rU + 1; cU++) zU.push(cU * pU.f.aY - yU[UU]);
+         return zU
+       })), tU = -yU[1], gU = [];
+       for (const DU of aU) gU.push([new EU.Sp(IU[0], tU, DU), new EU.Sp(IU[IU.length - 1], tU, DU)]);
+       for (const DU of IU) gU.push([new EU.Sp(DU, tU, aU[0]), new EU.Sp(DU, tU, aU[aU.length - 1])]);
+       const kU = (0, NU.b)("Heatmap3DChunkGrid", {
+         lines: gU
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L491-L522` → after: `L585-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L585-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L585-L590) · [Before (L491-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L491-L522)

```diff
-     function sM(MM) {
-       let {
-         drop: rM,
-         onLanded: iM
-       } = MM;
-       const OM = (0, PM.useRef)(null);
-       return (0, PM.useLayoutEffect)((() => {
-         const {
-           driftEm: MM,
-           spinDeg: SM
-         } = rM, jM = OM.current.animate([{
-           transform: `translate(${MM}em, -3.2em) rotate(${SM}deg) scale(1.2)`,
-           opacity: 0
-         }, {
-           transform: `translate(${.7*MM}em, -2.4em) rotate(${.7*SM}deg) scale(1.1)`,
-           opacity: 1,
- ... (16 more removed lines; see GitHub link above)
+     function bU(UU, XU, zU, cU) {
+       UU.fUU("matrix", function(UU, XU) {
+         const zU = new Float32Array(16 * XU);
+         for (let cU = 0; cU < XU; cU++) {
+           const XU = 16 * cU;
+           zU[XU] = 1, zU[XU + 5] = 1, zU[XU + 10] = 1, zU[XU + 12] = UU[3 * cU], zU[XU + 13] = UU[3 * cU + 1], zU[XU + 14] = UU[3 * cU + 2], zU[XU + 15] = 1
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L524-L531` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L592-L593) · [Before (L524-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L524-L531)

```diff
-       }), [rM, iM]), (0, CM.jsx)("div", {
-         ref: OM,
-         className: "GreenvilleBackpackFalling",
-         children: (0, CM.jsx)(yM.b, {
-           itemName: rM.item,
-           amount: 0
-         })
-       })
+         return zU
+       }(XU, cU), 16, !0), UU.fUU("color", zU, 4, !0), UU.isVisible = cU > 0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L557-L565` → after: `L597-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L597-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L597-L624) · [Before (L557-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L557-L565)

```diff
-       var rM;
-       let {
-         sounds: iM
-       } = MM;
-       const OM = null === (rM = (0, ZM.f)("currencyAmounts")) || void 0 === rM ? void 0 : rM.gold;
-       return !OM || OM.hidden ? null : (0, CM.jsx)(vM, {
-         gold: OM.amount,
-         sounds: iM
-       })
+       const {
+         camera: XU,
+         translucent: zU
+       } = UU, cU = [XU.position.x, XU.position.y, XU.position.z], yU = UU.translucentSortedFrom;
+       if (null !== yU && Math.hypot(cU[0] - yU[0], cU[1] - yU[1], cU[2] - yU[2]) < SU) return;
+       UU.translucentSortedFrom = cU;
+       const QU = new Float64Array(zU.count),
+         AU = new Uint32Array(zU.count);
+       for (let DU = 0; DU < zU.count; DU++) {
+         const UU = zU.Ut[3 * DU] - cU[0],
+           XU = zU.Ut[3 * DU + 1] - cU[1],
+           yU = zU.Ut[3 * DU + 2] - cU[2];
+         QU[DU] = UU * UU + XU * XU + yU * yU, AU[DU] = DU
+       }
+       AU.sort(((UU, XU) => QU[XU] - QU[UU]));
+       const FU = new Float32Array(3 * zU.count),
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L569-L651` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L628) · [Before (L569-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L569-L651)

```diff
-       let {
-         gold: rM,
-         sounds: iM
-       } = MM;
-       const OM = (0, oM.b)(),
-         [SM, jM] = (0, PM.useState)([]),
-         aM = (0, PM.useRef)(null),
-         nM = (0, PM.useRef)(null),
-         QM = (0, PM.useRef)(null),
-         zM = (0, PM.useRef)(rM);
-       (0, PM.useLayoutEffect)((() => {
-         const MM = rM - zM.current;
-         if (zM.current = rM, !(MM <= 0) && (iM.onGain(), !OM && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
-           const rM = function(MM) {
-             const rM = Math.max(1, Math.min(8, Math.floor(MM))),
-               iM = Math.floor(MM / rM),
- ... (67 more removed lines; see GitHub link above)
+       return [Math.sin(UU.heading) * Math.cos(UU.pitch), -Math.sin(UU.pitch), Math.cos(UU.heading) * Math.cos(UU.pitch)]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L655-L708` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L632) · [Before (L655-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L655-L708)

```diff
-       let {
-         coin: rM,
-         target: iM,
-         onLanded: OM
-       } = MM;
-       const SM = (0, PM.useRef)(null);
-       return (0, PM.useEffect)((() => {
-         var MM;
-         const jM = (null !== (MM = AM) && void 0 !== MM ? MM : iM.current).getBoundingClientRect(),
-           {
-             burst: aM
-           } = rM,
-           PM = window.innerWidth / 2,
-           nM = window.innerHeight / 2,
-           QM = jM.left + jM.width / 2,
-           zM = jM.top + jM.height / 2,
- ... (38 more removed lines; see GitHub link above)
+       return [Math.cos(UU), 0, -Math.sin(UU)]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L710-L722` → after: `L634-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L634-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L634-L652) · [Before (L710-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L710-L722)

```diff
-     class BM {
-       constructor(MM, rM, iM) {
-         this.pacer = MM, this.send = rM, this.onAnswersTimedOut = iM, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
-           if (!this.flushing) {
-             this.flushing = !0;
-             try {
-               for (; this.queued.length > 0 && this.pacer.tryStart();) {
-                 const MM = this.queued.shift();
-                 this.unanswered.push(MM), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(MM)
-               }
-             } finally {
-               this.flushing = !1
-             }
+ 
+     function zX(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: HU,
+         pitch: MU
+       };
+       const yU = [UU.max[0] - UU.min[0], UU.max[1] - UU.min[1], UU.max[2] - UU.min[2]],
+         QU = UX(cU),
+         AU = XX(cU.heading),
+         FU = DX(QU, AU),
+         oU = Math.tan(zU / 2),
+         DU = oU * XU;
+       let EU = 1;
+       for (const YU of [-yU[0] / 2, yU[0] / 2])
+         for (const UU of [-yU[1] / 2, yU[1] / 2])
+           for (const XU of [-yU[2] / 2, yU[2] / 2]) {
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L724-L810` → after: `L654-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L654-L657) · [Before (L724-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L724-L810)

```diff
-         }, this.onAnswerTimeout = () => {
-           this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
-         }, MM.subscribe(this.flush)
-       }
-       getPending() {
-         return [...this.unanswered, ...this.queued]
-       }
-       dL() {
-         return 0 === this.unanswered.length && 0 === this.queued.length
-       }
-       getLastSent() {
-         return this.unanswered.at(-1)
-       }
-       getLastPending() {
-         var MM;
-         return null !== (MM = this.queued.at(-1)) && void 0 !== MM ? MM : this.unanswered.at(-1)
- ... (71 more removed lines; see GitHub link above)
+       return {
+         position: AX([UU.min[0] + yU[0] / 2, UU.min[1] + yU[1] / 2, UU.min[2] + yU[2] / 2], FX(QU, -EU * vU)),
+         heading: cU.heading,
+         pitch: cU.pitch
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L813-L864` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L660-L669) · [Before (L813-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L813-L864)

```diff
-     const KM = "greenvilleDepotView",
-       qM = {
-         open: !1,
-         explosives: [],
-         picked: 0,
-         selected: 0,
-         level: 1,
-         line: "demolitionDepotIntro"
-       };
-     class TM extends IM {
-       constructor(MM, rM, iM, OM) {
-         super(qM, MM, rM), this.picks = void 0, this.select = MM => {
-           this.set({
-             ...this.getView(),
-             selected: MM
-           })
- ... (36 more removed lines; see GitHub link above)
+ 
+     function cX(UU, XU, zU) {
+       const cU = QX(UU),
+         yU = QX(zU),
+         QU = AX(UU.position, FX(XU, -1)),
+         AU = [0, 1, 2].reduce(((UU, XU) => AX(UU, FX(yU[XU], oX(QU, cU[XU])))), [0, 0, 0]);
+       return {
+         position: AX(XU, AU),
+         heading: zU.heading,
+         pitch: zU.pitch
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L875-L883` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L674) · [Before (L875-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L875-L883)

```diff
-       var rM;
-       let {
-         item: iM,
-         className: OM
-       } = MM;
-       return (0, CM.jsx)(ir.b, {
-         className: OM,
-         text: null !== (rM = (0, Mr.displayNameOf)((0, rr.d)(iM))) && void 0 !== rM ? rM : iM
-       })
+       return FX(AX(UU.min, UU.max), .5)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L887-L1373` → after: `L678-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L678-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L678-L680) · [Before (L887-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L887-L1373)

```diff
-       let {
-         item: rM
-       } = MM;
-       return (0, CM.jsx)(yM.b, {
-         itemName: rM,
-         amount: 0
-       })
-     }
- 
-     function ar(MM) {
-       let {
-         open: rM,
-         onDismiss: iM,
-         title: OM,
-         className: SM,
-         headerExtra: jM,
- ... (471 more removed lines; see GitHub link above)
+       const XU = UX(UU),
+         zU = XX(UU.heading);
+       return [XU, zU, DX(XU, zU)]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L1377-L1641` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L684) · [Before (L1377-L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L1377-L1641)

```diff
-       return "sell" === rM.action ? function(MM, rM) {
-         let iM = MM.goldOwned;
-         const OM = MM.sellLines.map((MM => {
-           const [OM, SM, jM] = MM;
-           return null !== rM && rM !== OM ? MM : (iM += SM * jM, [OM, 0, jM])
-         }));
-         return {
-           ...MM,
-           goldOwned: iM,
-           sellLines: OM
-         }
-       }(MM, rM.item) : "accept" === rM.action ? function(MM, rM) {
-         var iM;
-         const OM = MM.orders[rM];
-         return {
-           ...MM,
- ... (249 more removed lines; see GitHub link above)
+       return [UU[0] + XU[0], UU[1] + XU[1], UU[2] + XU[2]]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L1651-L1808` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L688) · [Before (L1651-L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L1651-L1808)

```diff
-       return MM.IQ ? MM.ready ? "Ready" : MM.slot === rM ? "Tracking" : "Accepted" : "New"
-     }
- 
-     function fr(MM) {
-       let {
-         state: rM
-       } = MM;
-       const {
-         t: iM
-       } = (0, UM.A)();
-       return (0, CM.jsx)("span", {
-         className: hM()("GreenvilleBoardBadge GreenvilleLumberState", rM, {
-           Muted: "Accepted" === rM
-         }),
-         children: iM(`greenvilleGame:${Zr[rM]}`)
-       })
- ... (142 more removed lines; see GitHub link above)
+       return [UU[0] * XU, UU[1] * XU, UU[2] * XU]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L1811-L1849` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L691-L692) · [Before (L1811-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L1811-L1849)

```diff
-     function vr(MM) {
-       let {
-         view: rM,
-         controller: iM
-       } = MM;
-       const {
-         t: OM
-       } = (0, UM.A)();
-       return (0, CM.jsxs)(CM.Fragment, {
-         children: [(0, CM.jsx)(nr, {
-           className: "GreenvilleLumberTickets",
-           roomy: !0,
-           children: rM.orders.map((MM => {
-             const SM = or(MM, rM.tracked);
-             return (0, CM.jsxs)(Qr, {
-               icon: (0, CM.jsx)(jr, {
- ... (23 more removed lines; see GitHub link above)
+     function oX(UU, XU) {
+       return UU[0] * XU[0] + UU[1] * XU[1] + UU[2] * XU[2]
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4703-L5597` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/273.js#L696) · [Before (L4703-L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/273.js#L4703-L5597)

```diff
-       return {
-         left: (hS - MM) / hS * 100 + "%",
-         top: rM / hS * 100 + "%"
-       }
-     }
- 
-     function bS(MM) {
-       let {
-         axis: rM,
-         line: iM
-       } = MM;
-       const OM = .3,
-         SM = 3 * iM + OM,
-         jM = hS - .6;
-       return "eastWest" === rM ? {
-         x: OM,
- ... (879 more removed lines; see GitHub link above)
+       return [UU[1] * XU[2] - UU[2] * XU[1], UU[2] * XU[0] - UU[0] * XU[2], UU[0] * XU[1] - UU[1] * XU[0]]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L12` → after: `L4-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L4-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/274.js#L4-L614) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/274.js#L4-L12)

```diff
-   40915: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       playDocsSound: () => nM
-     });
-     var OM = iM(5265),
-       SM = iM(37705),
-       jM = iM(1202),
-       aM = iM(37713);
-     const PM = new Map;
+   41309: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => tU,
+       e: () => GU
+     });
+     var cU = zU(41113),
+       yU = zU(41121),
+       QU = zU(41210),
+       AU = zU(37846),
+       FU = zU(37819),
+       oU = zU(41314),
+       DU = zU(39493),
+       EU = zU(37863),
+       YU = zU(40989),
+       NU = zU(38845),
+       IU = zU(38502),
+ ... (595 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L14-L32` → after: `L616-L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L616-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/274.js#L616-L1322) · [Before (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/274.js#L14-L32)

```diff
-     function nM(MM, rM, iM, nM, QM) {
-       let zM, LM = 0;
-       if (rM) zM = new OM.Howl({
-         src: [`${jM.clientSideServerUrls.staticUrl}/sounds/music/${MM}.mp3`],
-         html5: !0,
-         volume: iM
-       });
-       else {
-         const rM = (0, SM.r)(MM);
-         LM = rM.ms / 1e3, zM = PM.get(MM), zM || (zM = new OM.Howl({
-           src: [...rM.src],
-           volume: 1
-         }), PM.set(MM, zM))
-       }
-       const mM = rM ? zM.play() : zM.play(aM.e);
-       zM.volume(iM, mM), nM > 0 && zM.seek(nM, mM);
- ... (3 more removed lines; see GitHub link above)
+     function gU(UU, XU) {
+       const zU = UU.type,
+         cU = tU.GetConstructorFromName(zU, UU.name, XU, UU.interaxial_distance, UU.isStereoscopicSideBySide),
+         yU = aU.b.Parse(cU, UU, XU);
+       if (void 0 !== UU.parentId && (yU._waitingParentId = UU.parentId), void 0 !== UU.parentInstanceIndex && (yU._waitingParentInstanceIndex = UU.parentInstanceIndex), yU.inputs && (yU.inputs.parse(UU), yU._setupInputs()), UU.upVector && (yU.upVector = FU.q.FromArray(UU.upVector … [truncated]
+         const XU = UU.interaxial_distance ? {
+           interaxialDistance: UU.interaxial_distance
+         } : {};
+         yU.setCameraRigMode(UU.cameraRigMode, XU)
+       }
+       if (UU.animations) {
+         for (let XU = 0; XU < UU.animations.length; XU++) {
+           const zU = UU.animations[XU],
+             cU = (0, EU.e)("BABYLON.Animation");
+           cU && yU.animations.push(cU.Parse(zU))
+         }
+ ... (691 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L34-L42` → after: `L1324-L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1324-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/274.js#L1324-L1384) · [Before (L34-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/274.js#L34-L42)

```diff
-       let hM = !1;
-       const JM = MM => {
-           hM || (hM = !0, zM.off("play", dM, mM), zM.off("end", yM, mM), zM.off("loaderror", EM), zM.off("playerror", lM, mM), rM && zM.unload(), QM.onEnd(MM))
-         },
-         dM = () => {
-           QM.onPlay(HM())
-         },
-         yM = () => {
-           JM(!1)
+       if (this._bindTextureDirectly(DU, EU, !0), this._setupDepthStencilTexture(EU, UU, 0 !== YU.comparisonFunction && YU.bilinearFiltering, YU.comparisonFunction, YU.samples), void 0 !== YU.depthTextureFormat) {
+         if (15 !== YU.depthTextureFormat && 16 !== YU.depthTextureFormat && 17 !== YU.depthTextureFormat && 13 !== YU.depthTextureFormat && 14 !== YU.depthTextureFormat && 18 !== YU.depthTextureFormat) return yU.b.Error(`Depth texture ${YU.depthTextureFormat} format is not suppor … [truncated]
+         EU.format = YU.depthTextureFormat
+       } else EU.format = YU.generateStencil ? 13 : 16;
+       const NU = (0, FU.c)(EU.format),
+         IU = this._getWebGLTextureTypeFromDepthTextureFormat(EU.format),
+         pU = NU ? QU.DEPTH_STENCIL : QU.DEPTH_COMPONENT,
+         aU = this._getInternalFormatFromDepthTextureFormat(EU.format, !0, NU);
+       return EU.is2DArray ? QU.texImage3D(DU, 0, aU, EU.width, EU.height, AU, 0, pU, IU, null) : EU.is3D ? QU.texImage3D(DU, 0, aU, EU.width, EU.height, oU, 0, pU, IU, null) : QU.texImage2D(DU, 0, aU, EU.width, EU.height, 0, pU, IU, null), this._bindTextureDirectly(DU, null), thi … [truncated]
+     }, QU.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(UU, XU) {
+       if (this.Fa < 2 || !UU) return 1;
+       if (UU.samples === XU) return XU;
+       const zU = this._gl;
+       XU = Math.min(XU, this.getCaps().maxMSAASamples), UU._depthStencilBuffer && (zU.deleteRenderbuffer(UU._depthStencilBuffer), UU._depthStencilBuffer = null), UU._MSAAFramebuffer && (zU.deleteFramebuffer(UU._MSAAFramebuffer), UU._MSAAFramebuffer = null);
+       const cU = UU.texture?._hardwareTexture;
+       if (cU?.releaseMSAARenderBuffers(), UU.texture && XU > 1 && "function" === typeof zU.renderbufferStorageMultisample) {
+ ... (45 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L44-L45` → after: `L1386-L1564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1386-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/274.js#L1386-L1564) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/274.js#L44-L45)

```diff
-         lM = (rM, iM) => {
-           console.error(`Could not play docs sound ${MM}`, iM), JM(!0)
+         enumerable: !1,
+         configurable: !0
+       })
+     }();
+     var AU = zU(40940),
+       FU = zU(39493),
+       oU = zU(41036);
+     let DU = !1;
+     ! function() {
+       function UU(UU, XU, zU, cU) {
+         let yU, QU = 1;
+         1 === cU ? yU = new Float32Array(XU * zU * 4) : 2 === cU ? (yU = new Uint16Array(XU * zU * 4), QU = 15360) : yU = 7 === cU ? new Uint32Array(XU * zU * 4) : new Uint8Array(XU * zU * 4);
+         for (let AU = 0; AU < XU; AU++)
+           for (let cU = 0; cU < zU; cU++) {
+             const zU = 3 * (cU * XU + AU),
+               FU = 4 * (cU * XU + AU);
+ ... (163 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L47-L48` → after: `L1566-L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1566-L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/274.js#L1566-L1622) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/274.js#L47-L48)

```diff
-         EM = (iM, OM) => {
-           rM || PM.get(MM) !== zM || (PM.delete(MM), zM.unload()), lM(iM, OM)
+         yU = this._gl;
+       this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, zU, !0), this._setupDepthStencilTexture(zU, UU, cU.bilinearFiltering, cU.comparisonFunction);
+       for (let QU = 0; QU < 6; QU++) cU.generateStencil ? yU.texImage2D(yU.TEXTURE_CUBE_MAP_POSITIVE_X + QU, 0, yU.DEPTH24_STENCIL8, UU, UU, 0, yU.DEPTH_STENCIL, yU.UNSIGNED_INT_24_8, null) : yU.texImage2D(yU.TEXTURE_CUBE_MAP_POSITIVE_X + QU, 0, yU.DEPTH_COMPONENT24, UU, UU, 0, y … [truncated]
+       return this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(zU), zU
+     }, yU.ThinEngine.prototype._setCubeMapTextureParams = function(UU, XU, zU) {
+       const cU = this._gl;
+       cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_MAG_FILTER, cU.LINEAR), cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_MIN_FILTER, XU ? cU.LINEAR_MIPMAP_LINEAR : cU.LINEAR), cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_WRAP_S, cU.CLAMP_TO_EDGE), cU.texParameteri(cU.T … [truncated]
+     }, yU.ThinEngine.prototype.createCubeTexture = function(UU, XU, zU, cU) {
+       let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         AU = arguments.length > 6 ? arguments[6] : void 0,
+         DU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+         EU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         YU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+         NU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
+         IU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
+ ... (41 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L50-L71` → after: `L1624-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1624-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/274.js#L1624-L2191) · [Before (L50-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/274.js#L50-L71)

```diff
-       return zM.on("play", dM, mM), zM.once("end", yM, mM), zM.once("loaderror", EM), zM.once("playerror", lM, mM), {
-         pause: () => {
-           zM.pause(mM)
-         },
-         resume: () => {
-           zM.play(mM)
-         },
-         seek: MM => {
-           const rM = HM(),
-             iM = Math.max(MM, 0);
-           zM.seek(rM > 0 ? Math.min(iM, rM) : iM, mM)
-         },
-         XE: () => {
-           const MM = zM.seek(mM);
-           return "number" === typeof MM ? Math.max(0, MM) : 0
-         },
- ... (6 more removed lines; see GitHub link above)
+       cU.generateStencilBuffer = cU.generateDepthBuffer && cU.generateStencilBuffer, (1 !== cU.type || this._caps.textureFloatLinearFiltering) && (2 !== cU.type || this._caps.textureHalfFloatLinearFiltering) || (cU.samplingMode = 1);
+       const yU = this._gl,
+         QU = new AU.e(this, 5);
+       this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, QU, !0);
+       const oU = this._getSamplingParameters(cU.samplingMode, cU.generateMipMaps);
+       1 !== cU.type || this._caps.textureFloat || (cU.type = 0, FU.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), yU.texParameteri(yU.TEXTURE_CUBE_MAP, yU.TEXTURE_MAG_FILTER, oU.mag), yU.texParameteri(yU.TEXTURE_CUBE_MAP … [truncated]
+       for (let AU = 0; AU < 6; AU++) yU.texImage2D(yU.TEXTURE_CUBE_MAP_POSITIVE_X + AU, 0, this._getRGBABufferInternalSizedFormat(cU.type, cU.format), UU, UU, 0, this._getInternalFormat(cU.format), this._getWebGLTextureType(cU.type), null);
+       const DU = yU.createFramebuffer();
+       return this._bindUnboundFramebuffer(DU), zU._depthStencilBuffer = this._setupFramebufferDepthAttachments(cU.generateStencilBuffer, cU.generateDepthBuffer, UU, UU), cU.generateMipMaps && yU.generateMipmap(yU.TEXTURE_CUBE_MAP), this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, n … [truncated]
+     });
+     var aU = zU(41103),
+       tU = zU(41108);
+     let gU = !1;
+     gU || (gU = !0, yU.ThinEngine.prototype.createPrefilteredCubeTexture = function(UU, XU, cU, yU) {
+       let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         oU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+ ... (552 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L249` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L56) · [Before (L4-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L249)

```diff
-   40928: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       default: () => IM
-     });
-     iM(6922);
-     var OM = iM(44),
-       SM = iM(40931),
-       jM = iM(41190),
-       aM = iM(41313),
-       PM = iM(41358),
-       nM = iM(41374),
-       QM = iM(38167),
-       zM = iM(38034),
-       LM = iM(41495),
-       mM = iM(41543),
-       HM = (iM(41564), iM(1229)),
- ... (230 more removed lines; see GitHub link above)
+   41237: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => FU,
+       e: () => aU,
+       g: () => DU,
+       h: () => oU
+     });
+     var cU = zU(41032),
+       yU = zU(39493),
+       QU = zU(41177),
+       AU = zU(41085);
+     class FU {
+       get oR() {
+         return this._isDisposed
+       }
+       constructor(UU, XU, zU) {
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L251-L255` → after: `L58-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L58-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L58-L119) · [Before (L251-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L251-L255)

```diff
-         return zr.current = rM, rM.engine.runRenderLoop((() => {
-           const MM = rM.camera;
-           MM.fov !== rM.targetFieldOfView && (MM.fov += (rM.targetFieldOfView - MM.fov) * (MM.fov > rM.targetFieldOfView ? .3 : .2), Math.abs(rM.targetFieldOfView - MM.fov) < 5e-4 && (MM.fov = rM.targetFieldOfView), rM.needsRender = !0), rM.needsRender && (rM.YJ.render(), rM.need … [truncated]
-         })), () => {
-           zr.current = null, rM.engine.dispose()
+       }
+       update(UU) {
+         this.create(UU)
+       }
+       updateDirectly(UU, XU, zU) {
+         let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, UU, cU ? XU : XU * Float32Array.BYTES_PER_ELEMENT, zU ? zU * this.byteStride : void 0), this._data = 0 === XU && void 0 === zU ? UU : null)
+       }
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
+       }
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
+       }
+     }
+     class oU {
+ ... (46 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L257-L447` → after: `L121-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L121-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L121-L180) · [Before (L257-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L257-L447)

```diff
-       }), []), (0, OM.useEffect)((() => {
-         const MM = Qr.current;
-         if (!MM) return;
-         const rM = () => {
-             lr.current = !1, Jr(document.pointerLockElement === MM)
-           },
-           iM = () => {
-             lr.current && (lr.current = !1, yr(!1))
-           },
-           OM = rM => {
-             const iM = !Yr.current.canLock && document.activeElement === MM && 0 !== (1 & rM.buttons);
-             if (document.pointerLockElement !== MM && !iM) return;
-             const OM = Yr.current.mouseSensitivity * tM;
-             gr((MM => function(MM, rM, iM) {
-               const OM = 2 * Math.PI;
-               return {
- ... (175 more removed lines; see GitHub link above)
+       }
+       _computeHashCode() {
+         this.hashCode = (oU._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
+       }
+       _rebuild() {
+         this._buffer?._rebuild()
+       }
+       getKind() {
+         return this._kind
+       }
+       isUpdatable() {
+         return this._buffer.isUpdatable()
+       }
+       getData() {
+         return this._buffer.getData()
+       }
+ ... (44 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L451-L556` → after: `L184-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L184-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L184-L205) · [Before (L451-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L451-L556)

```diff
-       let {
-         heading: rM,
-         pitch: iM,
-         onViewFrom: SM,
-         onTurn: jM,
-         onFlip: aM
-       } = MM;
-       const {
-         t: PM
-       } = (0, JM.A)(), nM = (0, OM.useRef)(null), QM = Mr({
-         heading: rM,
-         pitch: iM
-       }), zM = rr(rM), LM = Qr(QM, zM), mM = xM + vM + 2, HM = AM.flatMap((MM => [1, -1].map((rM => {
-         const iM = Pr(MM.direction, rM);
-         return {
-           ...MM,
- ... (90 more removed lines; see GitHub link above)
+       switch (UU) {
+         case oU.UVKind:
+         case oU.UV2Kind:
+         case oU.UV3Kind:
+         case oU.UV4Kind:
+         case oU.UV5Kind:
+         case oU.UV6Kind:
+           return 2;
+         case oU.NormalKind:
+         case oU.PositionKind:
+           return 3;
+         case oU.ColorKind:
+         case oU.ColorInstanceKind:
+         case oU.MatricesIndicesKind:
+         case oU.MatricesIndicesExtraKind:
+         case oU.MatricesWeightsKind:
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L560-L593` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L209) · [Before (L560-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L560-L593)

```diff
-       var rM, iM, OM;
-       const {
-         chunkGridOrigin: SM,
-         camera: jM
-       } = MM;
-       if (null === SM) return;
-       const aM = [jM.position.x, jM.position.y, jM.position.z],
-         PM = [0, 2].map((MM => Math.floor((aM[MM] + SM[MM]) / hM.f.HL))),
-         nM = MM.chunkGridCentre;
-       if (null !== nM && nM.every(((MM, rM) => MM === PM[rM]))) return;
-       const LM = null === (rM = null === (iM = MM.chunkGrid) || void 0 === iM ? void 0 : iM.isVisible) || void 0 === rM || rM;
-       null === (OM = MM.chunkGrid) || void 0 === OM || OM.dispose();
-       const [HM, JM] = [0, 2].map(((MM, rM) => {
-         const iM = [];
-         for (let OM = PM[rM] - DM; OM <= PM[rM] + DM + 1; OM++) iM.push(OM * hM.f.HL - SM[MM]);
-         return iM
- ... (18 more removed lines; see GitHub link above)
+       return UU instanceof Int8Array ? oU.BYTE : UU instanceof Uint8Array ? oU.UNSIGNED_BYTE : UU instanceof Int16Array ? oU.SHORT : UU instanceof Uint16Array ? oU.UNSIGNED_SHORT : UU instanceof Int32Array ? oU.INT : UU instanceof Uint32Array ? oU.UNSIGNED_INT : oU.FLOAT
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L597-L616` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L213) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L597-L616)

```diff
-       const {
-         camera: rM,
-         translucent: iM
-       } = MM, OM = [rM.position.x, rM.position.y, rM.position.z], SM = MM.translucentSortedFrom;
-       if (null !== SM && Math.hypot(OM[0] - SM[0], OM[1] - SM[1], OM[2] - SM[2]) < sM) return;
-       MM.translucentSortedFrom = OM;
-       const jM = new Float64Array(iM.count),
-         aM = new Uint32Array(iM.count);
-       for (let QM = 0; QM < iM.count; QM++) {
-         const MM = iM.Sd[3 * QM] - OM[0],
-           rM = iM.Sd[3 * QM + 1] - OM[1],
-           SM = iM.Sd[3 * QM + 2] - OM[2];
-         jM[QM] = MM * MM + rM * rM + SM * SM, aM[QM] = QM
-       }
-       aM.sort(((MM, rM) => jM[rM] - jM[MM]));
-       const PM = new Float32Array(3 * iM.count),
- ... (4 more removed lines; see GitHub link above)
+       return (0, QU.r)(UU)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L619-L624` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L216-L219) · [Before (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L619-L624)

```diff
-     function cM(MM, rM) {
-       const iM = (iM, OM, SM) => new zM.sh(0 === iM ? MM[0] : rM[0], 0 === OM ? MM[1] : rM[1], 0 === SM ? MM[2] : rM[2]),
-         OM = [];
-       for (const SM of [0, 1])
-         for (const MM of [0, 1]) OM.push([iM(0, SM, MM), iM(1, SM, MM)], [iM(SM, 0, MM), iM(SM, 1, MM)], [iM(SM, MM, 0), iM(SM, MM, 1)]);
-       return OM
+     function NU(UU, XU, zU, cU, yU, AU, FU, oU) {
+       (0, QU.j)(UU, XU, zU, cU, yU, AU, FU, ((UU, XU) => {
+         for (let zU = 0; zU < cU; zU++) oU(UU[zU], XU + zU)
+       }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L627-L628` → after: `L222-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L222-L223) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L627-L628)

```diff
-     function Mr(MM) {
-       return [Math.sin(MM.heading) * Math.cos(MM.pitch), -Math.sin(MM.pitch), Math.cos(MM.heading) * Math.cos(MM.pitch)]
+     function IU(UU, XU, zU, cU, yU, AU, FU, oU) {
+       return (0, QU.n)(UU, XU, zU, cU, yU, AU, FU, oU)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L631-L632` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L228-L229) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L631-L632)

```diff
-     function rr(MM) {
-       return [Math.cos(MM), 0, -Math.sin(MM)]
+     function aU() {
+       pU || (pU = !0, oU.DeduceStride = DU, oU.GetDataType = EU, oU.GetTypeByteLength = YU, oU.ForEach = NU, oU.GetFloatData = IU)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L634-L657` → after: `L231-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L231-L241) · [Before (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L634-L657)

```diff
- 
-     function ir(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: fM,
-         pitch: YM
-       };
-       const SM = [MM.max[0] - MM.min[0], MM.max[1] - MM.min[1], MM.max[2] - MM.min[2]],
-         jM = Mr(OM),
-         aM = rr(OM.heading),
-         PM = Qr(jM, aM),
-         nM = Math.tan(iM / 2),
-         QM = nM * rM;
-       let zM = 1;
-       for (const LM of [-SM[0] / 2, SM[0] / 2])
-         for (const MM of [-SM[1] / 2, SM[1] / 2])
-           for (const rM of [-SM[2] / 2, SM[2] / 2]) {
- ... (8 more removed lines; see GitHub link above)
+   },
+   41032: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => cU
+     });
+     class cU {
+       get underlyingResource() {
+         return null
+       }
+       constructor() {
+         this.references = 0, this.xY = 0, this.is32Bits = !1, this.uniqueId = cU._Counter++
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L660-L669` → after: `L244-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L244-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L244-L308) · [Before (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L660-L669)

```diff
- 
-     function Or(MM, rM, iM) {
-       const OM = jr(MM),
-         SM = jr(iM),
-         jM = ar(MM.position, Pr(rM, -1)),
-         aM = [0, 1, 2].reduce(((MM, rM) => ar(MM, Pr(SM[rM], nr(jM, OM[rM])))), [0, 0, 0]);
-       return {
-         position: ar(rM, aM),
-         heading: iM.heading,
-         pitch: iM.pitch
+     cU._Counter = 0
+   },
+   41235: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => QU
+     });
+     var cU = zU(37819),
+       yU = zU(41237);
+     class QU {
+       constructor() {
+         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
+       }
+       getNormal() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!this.pickedMesh || XU && !this.pickedMesh.isVerticesDataPresent(yU.h.NormalKind)) return null;
+ ... (49 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L673-L674` → after: `L319-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L319-L327) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L673-L674)

```diff
-     function Sr(MM) {
-       return Pr(ar(MM.min, MM.max), .5)
+     function QU() {
+       yU || (yU = !0, cU.ThinEngine.prototype.updateDynamicIndexBuffer = function(UU, XU) {
+         let zU;
+         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(UU), zU = UU.is32Bits ? XU instanceof Uint32Array ? XU : new Uint32Array(XU) : XU instanceof Uint16Array ? XU : new Uint16Array(XU), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, zU, … [truncated]
+       }, cU.ThinEngine.prototype.updateDynamicVertexBuffer = function(UU, XU, zU, cU) {
+         this.bindArrayBuffer(UU), void 0 === zU && (zU = 0);
+         const yU = XU.byteLength || XU.length;
+         void 0 === cU || cU >= yU && 0 === zU ? XU instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zU, new Float32Array(XU)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zU, XU) : XU instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, zU, new Floa … [truncated]
+       })
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L676-L680` → after: `L329-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L329-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L329-L366) · [Before (L676-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L676-L680)

```diff
- 
-     function jr(MM) {
-       const rM = Mr(MM),
-         iM = rr(MM.heading);
-       return [rM, iM, Qr(rM, iM)]
+   },
+   41042: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => cU
+     });
+     class cU {
+       get underlyingResource() {
+         return this._webGLTexture
+       }
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           XU = arguments.length > 1 ? arguments[1] : void 0;
+         if (this._MSAARenderBuffers = null, this._context = XU, !UU && (UU = XU.createTexture(), !UU)) throw new Error("Unable to create webGL texture");
+         this.set(UU)
+       }
+       setUsage() {}
+ ... (22 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L682-L684` → after: `L368-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L368-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L368-L440) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L682-L684)

```diff
- 
-     function ar(MM, rM) {
-       return [MM[0] + rM[0], MM[1] + rM[1], MM[2] + rM[2]]
+   },
+   41003: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => kU
+     });
+     var cU = zU(37846),
+       yU = zU(40954),
+       QU = zU(37841),
+       AU = zU(39493),
+       FU = zU(37834),
+       oU = zU(41010);
+     class DU {
+       constructor() {
+         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, UU && this.reset()
+       }
+ ... (57 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L686-L688` → after: `L442-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L442-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L442-L529) · [Before (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L686-L688)

```diff
- 
-     function Pr(MM, rM) {
-       return [MM[0] * rM, MM[1] * rM, MM[2] * rM]
+     class EU {
+       get isDirty() {
+         return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
+       }
+       get func() {
+         return this._func
+       }
+       set func(UU) {
+         this._func !== UU && (this._func = UU, this._isStencilFuncDirty = !0)
+       }
+       get backFunc() {
+         return this._func
+       }
+       set backFunc(UU) {
+         this._backFunc !== UU && (this._backFunc = UU, this._isStencilFuncDirty = !0)
+       }
+ ... (72 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L690-L692` → after: `L531-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L531-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L531-L609) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L690-L692)

```diff
- 
-     function nr(MM, rM) {
-       return MM[0] * rM[0] + MM[1] * rM[1] + MM[2] * rM[2]
+     class YU {
+       constructor() {
+         this.reset()
+       }
+       reset() {
+         this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = YU.ALWAYS, this.opStencilFail = YU.KEEP, this.opDepthFail = YU.KEEP, this.opStencilDepthPass = YU.REPLACE, this.backFunc = YU.ALWAYS, this.backOpStencilFail = YU.KEEP, this.backOpDepthF … [truncated]
+       }
+       get stencilFunc() {
+         return this.func
+       }
+       set stencilFunc(UU) {
+         this.func = UU
+       }
+       get stencilBackFunc() {
+         return this.backFunc
+       }
+ ... (63 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L696` → after: `L619-L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L619-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/275.js#L619-L9690) · [Before (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/275.js#L696)

```diff
-       return [MM[1] * rM[2] - MM[2] * rM[1], MM[2] * rM[0] - MM[0] * rM[2], MM[0] * rM[1] - MM[1] * rM[0]]
+       if (XU) {
+         const {
+           requestAnimationFrame: zU
+         } = XU;
+         if ("function" === typeof zU) return zU(UU)
+       }
+       if ((0, aU.h)()) {
+         const {
+           requestAnimationFrame: zU
+         } = XU || window;
+         if ("function" === typeof zU) return zU(UU)
+       } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(UU);
+       return setTimeout(UU, 16)
+     }
+     class kU {
+       get frameId() {
+ ... (9056 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L2)

```diff
- export const ids = [276];
+ export const ids = [276, 659];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L2281` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L4) · [Before (L4-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L2281)

```diff
-   41323: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => dM,
-       d: () => EM
-     });
-     var OM = iM(41099),
-       SM = iM(41105),
-       jM = iM(41213),
-       aM = iM(38068),
-       PM = iM(38040),
-       nM = iM(41328),
-       QM = iM(39711),
-       zM = iM(38085),
-       LM = iM(40990),
-       mM = iM(39078),
-       HM = iM(38740),
- ... (2262 more removed lines; see GitHub link above)
+   40961: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2502-L2584` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L9-L10) · [Before (L2502-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L2502-L2584)

```diff
-       static get ForceFullSceneLoadingForIncremental() {
-         return OM._ForceFullSceneLoadingForIncremental
-       }
-       static set ForceFullSceneLoadingForIncremental(MM) {
-         OM._ForceFullSceneLoadingForIncremental = MM
-       }
-       static get ShowLoadingScreen() {
-         return OM._ShowLoadingScreen
-       }
-       static set ShowLoadingScreen(MM) {
-         OM._ShowLoadingScreen = MM
-       }
-       static get loggingLevel() {
-         return OM._LoggingLevel
-       }
-       static set loggingLevel(MM) {
- ... (67 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersRepository : cU.ShadersRepositoryWGSL
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2586-L2587` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L12-L13) · [Before (L2586-L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L2586-L2587)

```diff
-       getActiveTextures() {
-         return super.getActiveTextures().concat(...this.B_.map((MM => MM ? MM.getActiveTextures() : [])))
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.ShadersStore : cU.ShadersStoreWGSL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2589-L2593` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L15-L16) · [Before (L2589-L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L2589-L2593)

```diff
-       hasTexture(MM) {
-         if (super.hasTexture(MM)) return !0;
-         for (let rM = 0; rM < this.B_.length; rM++)
-           if (this.B_[rM]?.hasTexture(MM)) return !0;
-         return !1
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? cU.IncludesShadersStore : cU.IncludesShadersStoreWGSL
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2650-L2667` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L19) · [Before (L2650-L2667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L2650-L2667)

```diff
- 
-     function QM() {
-       PM || (PM = !0, aM.ParseMultiMaterial = nM, (0, jM.e)("BABYLON.MultiMaterial", aM))
-     }
-   },
-   41337: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM, SM, jM = iM(38040);
-     ! function(MM) {
-       MM[MM.LOCAL = 0] = "LOCAL", MM[MM.WORLD = 1] = "WORLD", MM[MM.BONE = 2] = "BONE"
-     }(OM || (OM = {}));
-     class aM {}
-     aM.X = new jM.q(1, 0, 0), aM.Y = new jM.q(0, 1, 0), aM.Z = new jM.q(0, 0, 1),
-       function(MM) {
- ... (2 more removed lines; see GitHub link above)
+     cU.ShadersRepository = "src/Shaders/", cU.ShadersStore = {}, cU.IncludesShadersStore = {}, cU.ShadersRepositoryWGSL = "src/ShadersWGSL/", cU.ShadersStoreWGSL = {}, cU.IncludesShadersStoreWGSL = {}
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2669-L2672` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L21-L23) · [Before (L2669-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L2669-L2672)

```diff
-   41086: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => nM,
-       c: () => QM
+   63962: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       postprocessVertexShader: () => AU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2674-L2713` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/276.js#L25-L31) · [Before (L2674-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/276.js#L2674-L2713)

```diff
-     var OM = iM(38040);
-     const SM = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / ( … [truncated]
-       jM = [() => 1, MM => MM.y, MM => MM.z, MM => MM.x, MM => MM.x * MM.y, MM => MM.y * MM.z, MM => 3 * MM.z * MM.z - 1, MM => MM.x * MM.z, MM => MM.x * MM.x - MM.y * MM.y],
-       aM = (MM, rM) => SM[MM] * jM[MM](rM),
-       PM = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
-     class nM {
-       constructor() {
-         this.preScaled = !1, this.l00 = OM.q.Zero(), this.l1_1 = OM.q.Zero(), this.l10 = OM.q.Zero(), this.l11 = OM.q.Zero(), this.l2_2 = OM.q.Zero(), this.l2_1 = OM.q.Zero(), this.l20 = OM.q.Zero(), this.l21 = OM.q.Zero(), this.l22 = OM.q.Zero()
-       }
-       addLight(MM, rM, iM) {
-         OM.l.sh[0].set(rM.r, rM.g, rM.b);
-         const SM = OM.l.sh[0],
-           jM = OM.l.sh[1];
-         SM.scaleToRef(iM, jM), jM.scaleToRef(aM(0, MM), OM.l.sh[2]), this.l00.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(1, MM), OM.l.sh[2]), this.l1_1.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(2, MM), OM.l.sh[2]), this.l10.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(3, MM), OM.l.sh[2] … [truncated]
-       }
-       scaleInPlace(MM) {
- ... (24 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "postprocessVertexShader",
+       QU = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (93 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L4)

```diff
-   41250: (MM, rM, iM) => {
+   41177: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L6)

```diff
-       d: () => PM,
+       b: () => NU,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L8-L9` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L8-L12) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L8-L9)

```diff
-       h: () => QM,
-       j: () => nM
+       j: () => oU,
+       l: () => IU,
+       n: () => DU,
+       r: () => FU,
+       s: () => EU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L11-L42` → after: `L14-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L14-L44) · [Before (L11-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L11-L42)

```diff
-     var OM = iM(41026),
-       SM = iM(39711),
-       jM = iM(41167),
-       aM = iM(41072);
-     class PM {
-       get xG() {
-         return this._isDisposed
-       }
-       constructor(MM, rM, iM) {
-         let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-           nM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           QM = arguments.length > 7 ? arguments[7] : void 0,
-           zM = arguments.length > 8 ? arguments[8] : void 0;
-         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, aM.c)(), MM && MM.Hk ? this._engine = MM.Hk().ph() : this._engine = MM, this._updatable = iM, this._instanced = PM, this._divisor = QM || 1, this._label = zM, rM instanceof OM.c ? (this._data = null, this._buffer = rM) … [truncated]
- ... (16 more removed lines; see GitHub link above)
+     var cU = zU(39493),
+       yU = zU(41179);
+ 
+     function QU(UU, XU, zU, cU) {
+       switch (XU) {
+         case 5120: {
+           let XU = UU.getInt8(zU);
+           return cU && (XU = Math.max(XU / 127, -1)), XU
+         }
+         case 5121: {
+           let XU = UU.getUint8(zU);
+           return cU && (XU /= 255), XU
+         }
+         case 5122: {
+           let XU = UU.getInt16(zU, !0);
+           return cU && (XU = Math.max(XU / 32767, -1)), XU
+ ... (15 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L44-L45` → after: `L46-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L46-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L46-L75) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L44-L45)

```diff
-       getStrideSize() {
-         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
+     }
+ 
+     function AU(UU, XU, zU, cU, QU) {
+       switch (XU) {
+         case 5120:
+           cU && (QU = Math.round(127 * QU)), UU.setInt8(zU, QU);
+           break;
+         case 5121:
+           cU && (QU = Math.round(255 * QU)), UU.setUint8(zU, QU);
+           break;
+         case 5122:
+           cU && (QU = Math.round(32767 * QU)), UU.setInt16(zU, QU, !0);
+           break;
+         case 5123:
+           cU && (QU = Math.round(65535 * QU)), UU.setUint16(zU, QU, !0);
+           break;
+ ... (14 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L47-L49` → after: `L77-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L77-L93) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L47-L49)

```diff
-       create() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         !MM && this._buffer || (MM = MM || this._data, MM && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, MM), this._data = MM) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(MM, this._label), this._data = MM … [truncated]
+     }
+ 
+     function FU(UU) {
+       switch (UU) {
+         case 5120:
+         case 5121:
+           return 1;
+         case 5122:
+         case 5123:
+         case 5131:
+           return 2;
+         case 5124:
+         case 5125:
+         case 5126:
+           return 4;
+         default:
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L51-L56` → after: `L95-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L95-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L95-L116) · [Before (L51-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L51-L56)

```diff
-       _rebuild() {
-         if (this._data) this._buffer = null, this.create(this._data);
-         else {
-           if (!this._buffer) return;
-           if (this._buffer.vL > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.vL, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.vL, void 0, this._label));
-           SM.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+     }
+ 
+     function oU(UU, XU, zU, cU, yU, oU, DU, EU) {
+       const YU = new Array(cU),
+         NU = new Array(cU);
+       if (UU instanceof Array) {
+         let yU = XU / 4;
+         const QU = zU / 4;
+         for (let XU = 0; XU < oU; XU += cU) {
+           for (let XU = 0; XU < cU; XU++) YU[XU] = NU[XU] = UU[yU + XU];
+           EU(NU, XU);
+           for (let XU = 0; XU < cU; XU++) YU[XU] !== NU[XU] && (UU[yU + XU] = NU[XU]);
+           yU += QU
+         }
+       } else {
+         const IU = ArrayBuffer.isView(UU) ? new DataView(UU.buffer, UU.byteOffset, UU.byteLength) : new DataView(UU),
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L59-L60` → after: `L119-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L119-L128) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L59-L60)

```diff
-       update(MM) {
-         this.create(MM)
+     }
+ 
+     function DU(UU, XU, zU, yU, QU, AU, DU, EU) {
+       const YU = XU * FU(zU),
+         NU = DU * XU;
+       if (5126 !== zU || QU !== YU) {
+         const cU = new Float32Array(NU);
+         return oU(UU, yU, QU, XU, zU, NU, AU, ((UU, zU) => {
+           for (let yU = 0; yU < XU; yU++) cU[zU + yU] = UU[yU]
+         })), cU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L62-L64` → after: `L130-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L130-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L130-L139) · [Before (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L62-L64)

```diff
-       updateDirectly(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, MM, OM ? rM : rM * Float32Array.BYTES_PER_ELEMENT, iM ? iM * this.byteStride : void 0), this._data = 0 === rM && void 0 === iM ? MM : null)
+       if (!(UU instanceof Array || UU instanceof Float32Array) || 0 !== yU || UU.length !== NU) {
+         if (UU instanceof Array) {
+           const XU = yU / 4;
+           return UU.slice(XU, XU + NU)
+         }
+         if (ArrayBuffer.isView(UU)) {
+           const XU = UU.byteOffset + yU;
+           return 0 !== (3 & XU) && (cU.b.Warn("Float array must be aligned to 4-bytes border"), EU = !0), EU ? new Float32Array(UU.buffer.slice(XU, XU + NU * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(UU.buffer, XU, NU)
+         }
+         return new Float32Array(UU, yU, NU)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L66-L67` → after: `L141-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L141-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L141-L193) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L66-L67)

```diff
-       _increaseReferences() {
-         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
+       return EU ? UU.slice() : UU
+     }
+ 
+     function EU(UU, XU, zU, yU, QU, AU, DU) {
+       const EU = FU(zU),
+         YU = function(UU) {
+           switch (UU) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+             case 5131:
+               return Uint16Array;
+ ... (37 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L69-L70` → after: `L195-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L195-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L195-L225) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L69-L70)

```diff
-       dispose() {
-         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
+       return 1 !== EU && 0 !== (pU & EU - 1) && (cU.b.Warn("Array must be aligned to border of element size. Data will be copied."), DU = !0), DU ? new YU(IU.slice(pU, pU + NU * EU)) : new YU(IU, pU, NU)
+     }
+ 
+     function YU(UU, XU, zU, yU, QU, AU, DU, EU) {
+       const YU = XU * FU(zU),
+         NU = DU * XU;
+       if (EU.length !== NU) throw new Error("Output length is not valid");
+       if (5126 === zU && QU === YU)
+         if (UU instanceof Array) {
+           const XU = yU / 4;
+           EU.set(UU, XU)
+         } else if (ArrayBuffer.isView(UU)) {
+         const XU = UU.byteOffset + yU;
+         if (0 !== (3 & XU)) return cU.b.Warn("Float array must be aligned to 4-bytes border"), void EU.set(new Float32Array(UU.buffer.slice(XU, XU + NU * Float32Array.BYTES_PER_ELEMENT)));
+         const zU = new Float32Array(UU.buffer, XU, NU);
+         EU.set(zU)
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L74-L86` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L246-L247) · [Before (L74-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L74-L86)

```diff
-       get xG() {
-         return this._isDisposed
-       }
-       get instanceDivisor() {
-         return this._instanceDivisor
-       }
-       set instanceDivisor(MM) {
-         const rM = 0 != MM;
-         this._instanceDivisor = MM, rM !== this._instanced && (this._instanced = rM, this._computeHashCode())
-       }
-       get _maxVerticesCount() {
-         const MM = this.getData();
-         return MM ? Array.isArray(MM) ? MM.length / (this.byteStride / 4) - this.byteOffset / 4 : (MM.byteLength - this.byteOffset) / this.byteStride : 0
+       constructor() {
+         this.children = []
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L88-L98` → after: `L249-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L249-L250) · [Before (L88-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L88-L98)

```diff
-       constructor(MM, rM, iM, OM, SM, aM, LM, mM, HM, hM) {
-         let JM, dM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
-           yM = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
-           lM = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
-           EM = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
-         if (this._isDisposed = !1, this.engine = MM, "object" === typeof OM && null !== OM ? (JM = OM.updatable ?? !1, SM = OM.postponeInternalCreation, aM = OM.stride, LM = OM.instanced, mM = OM.offset, HM = OM.size, hM = OM.type, dM = OM.normalized ?? !1, yM = OM.useBytes ?? !1 … [truncated]
-           const MM = this.getData();
-           this.type = MM ? zM(MM) : nM.FLOAT
-         } else this.type = hM;
-         const UM = (0, jM.n)(this.type);
-         yM ? (this._size = HM || (aM ? aM / UM : QM(iM)), this.byteStride = aM || this._buffer.byteStride || this._size * UM, this.byteOffset = mM || 0) : (this._size = HM || aM || QM(iM), this.byteStride = aM ? aM * UM : this._buffer.byteStride || this._size * UM, this.byteOffse … [truncated]
+       isValid(UU) {
+         return !0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L100-L119` → after: `L252-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L252-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L252-L271) · [Before (L100-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L100-L119)

```diff
-       static _GetTypeHashIndex(MM) {
-         switch (MM) {
-           case nM.BYTE:
-             return 0;
-           case nM.UNSIGNED_BYTE:
-             return 1;
-           case nM.SHORT:
-             return 2;
-           case nM.UNSIGNED_SHORT:
-             return 3;
-           case nM.INT:
-             return 4;
-           case nM.UNSIGNED_INT:
-             return 5;
-           case nM.FLOAT:
-             return 6;
- ... (4 more removed lines; see GitHub link above)
+       process(UU, XU, zU) {
+         let cU = "";
+         if (this.line) {
+           let zU = this.line;
+           const yU = XU.processor;
+           if (yU) {
+             yU.lineProcessor && (zU = yU.lineProcessor(zU, XU.isFragment, XU.processingContext));
+             const cU = XU.processor?.attributeKeywordName ?? "attribute",
+               QU = XU.isFragment && XU.processor?.varyingFragmentKeywordName ? XU.processor?.varyingFragmentKeywordName : !XU.isFragment && XU.processor?.varyingVertexKeywordName ? XU.processor?.varyingVertexKeywordName : "varying";
+             if (!XU.isFragment && yU.attributeProcessor && this.line.startsWith(cU)) zU = yU.attributeProcessor(this.line, UU, XU.processingContext);
+             else if (yU.varyingProcessor && (yU.varyingCheck?.(this.line, XU.isFragment) || !yU.varyingCheck && this.line.startsWith(QU))) zU = yU.varyingProcessor(this.line, XU.isFragment, UU, XU.processingContext);
+             else if (yU.uniformProcessor && yU.uniformRegexp && yU.uniformRegexp.test(this.line)) XU.lookForClosingBracketForUniformBuffer || (zU = yU.uniformProcessor(this.line, XU.isFragment, UU, XU.processingContext));
+             else if (yU.uniformBufferProcessor && yU.uniformBufferRegexp && yU.uniformBufferRegexp.test(this.line)) XU.lookForClosingBracketForUniformBuffer || (zU = yU.uniformBufferProcessor(this.line, XU.isFragment, XU.processingContext), XU.lookForClosingBracketForUniformBuffe … [truncated]
+             else if (yU.textureProcessor && yU.textureRegexp && yU.textureRegexp.test(this.line)) zU = yU.textureProcessor(this.line, XU.isFragment, UU, XU.processingContext);
+             else if ((yU.uniformProcessor || yU.uniformBufferProcessor) && this.line.startsWith("uniform") && !XU.lookForClosingBracketForUniformBuffer) {
+               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? yU.uniformProcessor && (zU = yU.uniformProcessor(this.line, XU.isFragment, UU, XU.processingContext)) : yU.uniformBufferProcessor && (zU = yU.uniformBufferProcessor(this.line, XU.isFragment,  … [truncated]
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L122-L135` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L276-L279) · [Before (L122-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L122-L135)

```diff
-       _computeHashCode() {
-         this.hashCode = (nM._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
-       }
-       _rebuild() {
-         this._buffer?._rebuild()
-       }
-       getKind() {
-         return this._kind
-       }
-       isUpdatable() {
-         return this._buffer.isUpdatable()
-       }
-       getData() {
-         return this._buffer.getData()
+     }
+     class yU {
+       constructor() {
+         this._lines = []
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L137-L139` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L281-L282) · [Before (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L137-L139)

```diff
-       getFloatData(MM, rM) {
-         const iM = this.getData();
-         return iM ? (0, jM.m)(iM, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, MM, rM) : null
+       get currentLine() {
+         return this._lines[this.lineIndex]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L141-L142` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L284-L285) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L141-L142)

```diff
-       getBuffer() {
-         return this._buffer.getBuffer()
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L144-L145` → after: `L287-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L287-L311) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L144-L145)

```diff
-       getWrapperBuffer() {
-         return this._buffer
+       set lines(UU) {
+         this._lines.length = 0;
+         for (const XU of UU) {
+           if (!XU || "\r" === XU) continue;
+           if ("#" === XU[0]) {
+             this._lines.push(XU);
+             continue
+           }
+           const UU = XU.trim();
+           if (!UU) continue;
+           if (UU.startsWith("//")) {
+             this._lines.push(XU);
+             continue
+           }
+           const zU = UU.indexOf(";");
+           if (-1 === zU) this._lines.push(UU);
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L147-L148` → after: `L313-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L313-L320) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L147-L148)

```diff
-       getStrideSize() {
-         return this.byteStride / (0, jM.n)(this.type)
+     }
+     class QU extends cU {
+       process(UU, XU, zU) {
+         for (let cU = 0; cU < this.children.length; cU++) {
+           const yU = this.children[cU];
+           if (yU.isValid(UU)) return yU.process(UU, XU, zU)
+         }
+         return ""
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L150-L151` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L322-L325) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L150-L151)

```diff
-       diM() {
-         return this.byteOffset / (0, jM.n)(this.type)
+     }
+     class AU extends cU {
+       isValid(UU) {
+         return this.testExpression.isTrue(UU)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L153-L154` → after: `L327-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L327-L330) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L153-L154)

```diff
-       getSize() {
-         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, jM.n)(this.type) : this._size
+     }
+     class FU {
+       isTrue(UU) {
+         return !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L156-L157` → after: `L332-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L332-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L332-L391) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L156-L157)

```diff
-       getIsInstanced() {
-         return this._instanced
+       static postfixToInfix(UU) {
+         const XU = [];
+         for (const zU of UU)
+           if (void 0 === FU._OperatorPriority[zU]) XU.push(zU);
+           else {
+             const UU = XU[XU.length - 1],
+               cU = XU[XU.length - 2];
+             XU.length -= 2, XU.push(`(${cU}${zU}${UU})`)
+           } return XU[XU.length - 1]
+       }
+       static infixToPostfix(UU) {
+         const XU = FU._InfixToPostfixCache.get(UU);
+         if (XU) return XU.accessTime = Date.now(), XU.result;
+         if (!UU.includes("&&") && !UU.includes("||") && !UU.includes(")") && !UU.includes("(")) return [UU];
+         const zU = [];
+         let cU = -1;
+ ... (44 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L159-L160` → after: `L393-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L393-L395) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L159-L160)

```diff
-       getInstanceDivisor() {
-         return this._instanceDivisor
+       isTrue(UU) {
+         let XU = void 0 !== UU[this.define];
+         return this.not && (XU = !XU), XU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L162-L163` → after: `L397-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L397-L400) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L162-L163)

```diff
-       create(MM) {
-         this._buffer.create(MM), this._alignBuffer()
+     }
+     class DU extends FU {
+       isTrue(UU) {
+         return this.leftOperand.isTrue(UU) || this.rightOperand.isTrue(UU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L165-L166` → after: `L402-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L402-L405) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L165-L166)

```diff
-       update(MM) {
-         this._buffer.update(MM), this._alignBuffer()
+     }
+     class EU extends FU {
+       isTrue(UU) {
+         return this.leftOperand.isTrue(UU) && this.rightOperand.isTrue(UU)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L168-L170` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L407-L410) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L168-L170)

```diff
-       updateDirectly(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this._buffer.updateDirectly(MM, rM, void 0, iM), this._alignBuffer()
+     }
+     class YU extends FU {
+       constructor(UU, XU, zU) {
+         super(), this.define = UU, this.operand = XU, this.testValue = zU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L172-L173` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L412-L413) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L172-L173)

```diff
-       dispose() {
-         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
+       toString() {
+         return `${this.define} ${this.operand} ${this.testValue}`
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L175-L178` → after: `L415-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L415-L439) · [Before (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L175-L178)

```diff
-       forEach(MM, rM) {
-         (0, jM.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, MM, this.normalized, ((MM, iM) => {
-           for (let OM = 0; OM < this._size; OM++) rM(MM[OM], iM + OM)
-         }))
+       isTrue(UU) {
+         let XU = !1;
+         const zU = parseInt(void 0 != UU[this.define] ? UU[this.define] : this.define),
+           cU = parseInt(void 0 != UU[this.testValue] ? UU[this.testValue] : this.testValue);
+         if (isNaN(zU) || isNaN(cU)) return !1;
+         switch (this.operand) {
+           case ">":
+             XU = zU > cU;
+             break;
+           case "<":
+             XU = zU < cU;
+             break;
+           case "<=":
+             XU = zU <= cU;
+             break;
+           case ">=":
+ ... (9 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L184-L204` → after: `L454-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L454-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L454-L485) · [Before (L184-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L184-L204)

```diff
-       switch (MM) {
-         case nM.UVKind:
-         case nM.UV2Kind:
-         case nM.UV3Kind:
-         case nM.UV4Kind:
-         case nM.UV5Kind:
-         case nM.UV6Kind:
-           return 2;
-         case nM.NormalKind:
-         case nM.PositionKind:
-           return 3;
-         case nM.ColorKind:
-         case nM.ColorInstanceKind:
-         case nM.MatricesIndicesKind:
-         case nM.MatricesIndicesExtraKind:
-         case nM.MatricesWeightsKind:
- ... (5 more removed lines; see GitHub link above)
+       UU.processor && UU.processor.initializeShaders && UU.processor.initializeShaders(UU.processingContext)
+     }
+ 
+     function PU(UU, XU, zU, cU) {
+       XU.processor?.preProcessShaderCode && (UU = XU.processor.preProcessShaderCode(UU, XU.isFragment)), OU(UU, XU, (UU => {
+         XU.processCodeAfterIncludes && (UU = XU.processCodeAfterIncludes(XU.isFragment ? "fragment" : "vertex", UU, XU.defines));
+         const yU = function(UU, XU, zU) {
+           let cU = function(UU, XU) {
+             if (XU.processor?.noPrecision) return UU;
+             const zU = XU.shouldUseHighPrecisionShader; - 1 === UU.indexOf("precision highp float") ? UU = zU ? "precision highp float;\n" + UU : "precision mediump float;\n" + UU : zU || (UU = UU.replace("precision highp float", "precision mediump float"));
+             return UU
+           }(UU, XU);
+           if (!XU.processor) return cU;
+           if (0 === XU.processor.shaderLanguage && -1 !== cU.indexOf("#version 3") && (cU = cU.replace("#version 300 es", ""), !XU.processor.parseGLES3)) return cU;
+           const yU = XU.defines,
+             QU = qU(XU, zU);
+ ... (16 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L209` → after: `L490-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L490-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L490-L500) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L209)

```diff
-       return MM instanceof Int8Array ? nM.BYTE : MM instanceof Uint8Array ? nM.UNSIGNED_BYTE : MM instanceof Int16Array ? nM.SHORT : MM instanceof Uint16Array ? nM.UNSIGNED_SHORT : MM instanceof Int32Array ? nM.INT : MM instanceof Uint32Array ? nM.UNSIGNED_INT : nM.FLOAT
+       const XU = /defined\((.+)\)/.exec(UU);
+       if (XU && XU.length) return new oU(XU[1].trim(), "!" === UU[0]);
+       const zU = ["==", "!=", ">=", "<=", "<", ">"];
+       let cU = "",
+         yU = 0;
+       for (cU of zU)
+         if (yU = UU.indexOf(cU), yU > -1) break;
+       if (-1 === yU) return new oU(UU);
+       const QU = UU.substring(0, yU).trim(),
+         AU = UU.substring(yU + cU.length).trim();
+       return new YU(QU, cU, AU)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L212-L213` → after: `L503-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L503-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L503-L522) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L212-L213)

```diff
-     function LM(MM) {
-       return (0, jM.n)(MM)
+     function LU(UU, XU) {
+       const zU = new AU,
+         cU = UU.substring(0, XU);
+       let yU = UU.substring(XU);
+       return yU = yU.substring(0, (yU.indexOf("//") + 1 || yU.length + 1) - 1).trim(), zU.testExpression = "#ifdef" === cU ? new oU(yU) : "#ifndef" === cU ? new oU(yU, !0) : function(UU) {
+         UU = UU.replace(pU, "defined[$1]");
+         const XU = FU.infixToPostfix(UU),
+           zU = [];
+         for (const yU of XU)
+           if ("||" !== yU && "&&" !== yU) zU.push(yU);
+           else if (zU.length >= 2) {
+           let UU = zU[zU.length - 1],
+             XU = zU[zU.length - 2];
+           zU.length -= 2;
+           const cU = "&&" == yU ? new EU : new DU;
+           "string" === typeof UU && (UU = UU.replace(aU, "defined($1)")), "string" === typeof XU && (XU = XU.replace(aU, "defined($1)")), cU.leftOperand = "string" === typeof XU ? dU(XU) : XU, cU.rightOperand = "string" === typeof UU ? dU(UU) : UU, zU.push(cU)
+ ... (4 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L216-L219` → after: `L525-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L525-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L525-L538) · [Before (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L216-L219)

```diff
-     function mM(MM, rM, iM, OM, SM, aM, PM, nM) {
-       (0, jM.h)(MM, rM, iM, OM, SM, aM, PM, ((MM, rM) => {
-         for (let iM = 0; iM < OM; iM++) nM(MM[iM], rM + iM)
-       }))
+     function eU(UU, XU, zU, yU) {
+       let QU;
+       for (; CU(UU, zU, yU);) {
+         QU = UU.currentLine;
+         const AU = QU.substring(0, 5).toLowerCase();
+         if ("#else" === AU) {
+           const zU = new cU;
+           return XU.children.push(zU), void CU(UU, zU, yU)
+         }
+         if ("#elif" === AU) {
+           const UU = LU(QU, 5);
+           XU.children.push(UU), zU = UU
+         }
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L222-L223` → after: `L541-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L541-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L541-L584) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L222-L223)

```diff
-     function HM(MM, rM, iM, OM, SM, aM, PM, nM) {
-       return (0, jM.m)(MM, rM, iM, OM, SM, aM, PM, nM)
+     function CU(UU, XU, zU) {
+       for (; UU.canRead;) {
+         UU.lineIndex++;
+         const yU = UU.currentLine;
+         if (yU.indexOf("#") >= 0) {
+           const cU = ZU.exec(yU);
+           if (cU && cU.length) {
+             switch (cU[0]) {
+               case "#ifdef": {
+                 const cU = new QU;
+                 XU.children.push(cU);
+                 const AU = LU(yU, 6);
+                 cU.children.push(AU), eU(UU, cU, AU, zU);
+                 break
+               }
+               case "#else":
+ ... (28 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L228-L229` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L587-L590) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L228-L229)

```diff
-     function JM() {
-       hM || (hM = !0, nM.DeduceStride = QM, nM.GetDataType = zM, nM.GetTypeByteLength = LM, nM.ForEach = mM, nM.GetFloatData = HM)
+     function wU(UU, XU, zU, QU) {
+       const AU = new cU,
+         FU = new yU;
+       return FU.lineIndex = -1, FU.lines = UU.split("\n"), CU(FU, AU, QU), AU.process(XU, zU, QU)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L231-L241` → after: `L592-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L592-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L592-L598) · [Before (L231-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L231-L241)

```diff
-   },
-   41026: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => OM
-     });
-     class OM {
-       get underlyingResource() {
-         return null
-       }
-       constructor() {
-         this.references = 0, this.vL = 0, this.is32Bits = !1, this.uniqueId = OM._Counter++
+ 
+     function qU(UU, XU) {
+       const zU = UU.defines,
+         cU = {};
+       for (const yU of zU) {
+         const UU = yU.replace("#define", "").replace(";", "").trim().split(" ");
+         cU[UU[0]] = UU.length > 1 ? UU[1] : ""
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L244-L286` → after: `L602-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L602-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L602-L622) · [Before (L244-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L244-L286)

```diff
-     OM._Counter = 0
-   },
-   41242: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => jM
-     });
-     var OM = iM(38040),
-       SM = iM(41250);
-     class jM {
-       constructor() {
-         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
-       }
-       getNormal() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!this.pickedMesh || rM && !this.pickedMesh.isVerticesDataPresent(SM.j.NormalKind)) return null;
- ... (27 more removed lines; see GitHub link above)
+ 
+     function OU(UU, XU, zU) {
+       let cU;
+       for (BU.length = 0; null !== (cU = tU.exec(UU));) BU.push(cU);
+       let yU = [UU],
+         QU = !1;
+       for (const FU of BU) {
+         let UU = FU[1];
+         if (-1 !== UU.indexOf("__decl__") && (UU = UU.replace(gU, ""), XU.supportsUniformBuffers && (UU = UU.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), UU += "Declaration"), !XU.includesShadersStore[UU]) {
+           const cU = XU.shadersRepository + "ShadersInclude/" + UU + ".fx";
+           return void SU.loadFile(cU, (cU => {
+             XU.includesShadersStore[UU] = cU, OU(yU.join(""), XU, zU)
+           }))
+         } {
+           let zU = XU.includesShadersStore[UU];
+           if (FU[2]) {
+ ... (5 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L289-L294` → after: `L625-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L625-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L625-L642) · [Before (L289-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L289-L294)

```diff
-           let iM = MM.getWorldMatrix();
-           MM.nonUniformScaling && (OM.l.Matrix[0].jR(iM), iM = OM.l.Matrix[0], iM.setTranslationFromFloats(0, 0, 0), iM.invert(), iM.transposeToRef(OM.l.Matrix[1]), iM = OM.l.Matrix[1]), OM.q.TransformNormalToRef(rM, iM, rM)
-         };
-         if (MM && QM(this.pickedMesh, iM), this.ray) {
-           const rM = OM.l.sh[0].jR(iM);
-           MM || QM(this.pickedMesh, rM), OM.q.Dot(rM, this.ray.direction) > 0 && iM.negateInPlace()
+           if (FU[4]) {
+             const UU = FU[5];
+             if (-1 !== UU.indexOf("..")) {
+               const cU = UU.split(".."),
+                 yU = parseInt(cU[0]);
+               let QU = parseInt(cU[1]),
+                 AU = zU.slice(0);
+               zU = "", isNaN(QU) && (QU = XU.indexParameters[cU[1]]);
+               for (let UU = yU; UU < QU; UU++) XU.supportsUniformBuffers || (AU = AU.replace(kU, ((UU, XU) => XU + "{X}"))), zU += AU.replace(GU, UU.toString()) + "\n"
+             } else XU.supportsUniformBuffers || (zU = zU.replace(kU, ((UU, XU) => XU + "{X}"))), zU = zU.replace(GU, UU)
+           }
+           const cU = [];
+           for (const UU of yU) {
+             const XU = UU.split(FU[0]);
+             for (let UU = 0; UU < XU.length - 1; UU++) cU.push(XU[UU]), cU.push(zU);
+             cU.push(XU[XU.length - 1])
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L298-L308` → after: `L645-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L645-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L645-L651) · [Before (L298-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L298-L308)

```diff
-       getTextureCoordinates() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SM.j.UVKind;
-         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(MM)) return null;
-         const rM = this.pickedMesh.hOM();
-         if (!rM) return null;
-         const iM = this.pickedMesh.getVerticesData(MM);
-         if (!iM) return null;
-         let jM = OM.o.FromArray(iM, 2 * rM[3 * this.faceId]),
-           aM = OM.o.FromArray(iM, 2 * rM[3 * this.faceId + 1]),
-           PM = OM.o.FromArray(iM, 2 * rM[3 * this.faceId + 2]);
-         return jM = jM.scale(this.bu), aM = aM.scale(this.bv), PM = PM.scale(1 - this.bu - this.bv), new OM.o(jM.x + aM.x + PM.x, jM.y + aM.y + PM.y)
+       BU.length = 0;
+       const AU = yU.join("");
+       QU ? OU(AU.toString(), XU, zU) : zU(AU)
+     }
+     const SU = {
+       loadFile: (UU, XU, zU, cU, yU, QU) => {
+         throw (0, NU.m)("FileTools")
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L312` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L655) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L312)

```diff
-   41072: (MM, rM, iM) => {
+   40983: (UU, XU, zU) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L314` → after: `L657-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L657-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L657-L661) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L314)

```diff
-       c: () => jM
+       c: () => yU,
+       d: () => QU,
+       h: () => FU,
+       k: () => AU,
+       m: () => oU
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L316-L317` → after: `L663-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L663-L664) · [Before (L316-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L316-L317)

```diff
-     var OM = iM(40949);
-     let SM = !1;
+     var cU = zU(40989);
+     const yU = {};
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L319-L327` → after: `L666-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L666-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L666-L727) · [Before (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L319-L327)

```diff
-     function jM() {
-       SM || (SM = !0, OM.ThinEngine.prototype.updateDynamicIndexBuffer = function(MM, rM) {
-         let iM;
-         this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(MM), iM = MM.is32Bits ? rM instanceof Uint32Array ? rM : new Uint32Array(rM) : rM instanceof Uint16Array ? rM : new Uint16Array(rM), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, iM, … [truncated]
-       }, OM.ThinEngine.prototype.updateDynamicVertexBuffer = function(MM, rM, iM, OM) {
-         this.bindArrayBuffer(MM), void 0 === iM && (iM = 0);
-         const SM = rM.byteLength || rM.length;
-         void 0 === OM || OM >= SM && 0 === iM ? rM instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, new Float32Array(rM)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, rM) : rM instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, new Floa … [truncated]
-       })
+     function QU(UU, XU) {
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (XU ? XU + "\n" : "") + UU
+     }
+ 
+     function AU(UU, XU, zU, QU, AU, FU, oU) {
+       const DU = oU || yU.loadFile;
+       if (!DU) throw (0, cU.m)("FileTools");
+       return DU(UU, XU, zU, QU, AU, FU)
+     }
+ 
+     function FU(UU, XU, zU, cU) {
+       if (UU) return XU ? UU.IS_NDC_HALF_ZRANGE = "" : delete UU.IS_NDC_HALF_ZRANGE, zU ? UU.USE_REVERSE_DEPTHBUFFER = "" : delete UU.USE_REVERSE_DEPTHBUFFER, void(cU ? UU.USE_EXACT_SRGB_CONVERSIONS = "" : delete UU.USE_EXACT_SRGB_CONVERSIONS);
+       {
+         let UU = "";
+         return XU && (UU += "#define IS_NDC_HALF_ZRANGE"), zU && (UU && (UU += "\n"), UU += "#define USE_REVERSE_DEPTHBUFFER"), cU && (UU && (UU += "\n"), UU += "#define USE_EXACT_SRGB_CONVERSIONS"), UU
+       }
+ ... (46 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L330` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L730) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L330)

```diff
-   41040: (MM, rM, iM) => {
+   40989: (UU, XU, zU) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L332` → after: `L732-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L732-L735) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L332)

```diff
-       d: () => OM
+       e: () => DU,
+       i: () => EU,
+       k: () => oU,
+       m: () => yU
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L334-L357` → after: `L737-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L737-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L737-L751) · [Before (L334-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L334-L357)

```diff
-     class OM {
-       get underlyingResource() {
-         return this._webGLTexture
-       }
-       constructor() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           rM = arguments.length > 1 ? arguments[1] : void 0;
-         if (this._MSAARenderBuffers = null, this._context = rM, !MM && (MM = rM.createTexture(), !MM)) throw new Error("Unable to create webGL texture");
-         this.set(MM)
-       }
-       setUsage() {}
-       set(MM) {
-         this._webGLTexture = MM
-       }
-       reset() {
-         this._webGLTexture = null, this._MSAARenderBuffers = null
- ... (8 more removed lines; see GitHub link above)
+     const cU = {};
+ 
+     function yU(UU) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !cU[UU]) return cU[UU] = !0, `${UU} needs to be imported before as it contains a side-effect required by your code.`
+     }
+     const QU = {};
+     let AU = !1,
+       FU = 0;
+ 
+     function oU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const cU = function() {
+         if ((zU || AU) && 0 === FU) {
+           const zU = `${UU}.${XU}`;
+           QU[zU] || (QU[zU] = !0, console.warn(`[Babylon.js] ${zU}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L359-L365` → after: `L753-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L753-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L753-L773) · [Before (L359-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L359-L365)

```diff
-       }
-       getMSAARenderBuffer() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._MSAARenderBuffers?.[MM] ?? null
-       }
-       release() {
-         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
+       };
+       return cU.__isSideEffectStub = !0, cU
+     }
+ 
+     function DU(UU) {
+       return !!UU && !UU.__isSideEffectStub
+     }
+ 
+     function EU(UU, XU) {
+       return {
+         get() {},
+         set(UU) {
+           Object.defineProperty(this, XU, {
+             value: UU,
+             writable: !0,
+             configurable: !0,
+ ... (5 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L369` → after: `L777-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L777-L795) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L369)

```diff
-   41005: (MM, rM, iM) => {
+   40971: (UU, XU, zU) => {
+     function cU() {
+       return "undefined" !== typeof window
+     }
+ 
+     function yU() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function QU() {
+       return "undefined" !== typeof document
+     }
+ 
+     function AU(UU) {
+       let XU = "",
+         zU = UU.firstChild;
+ ... (3 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L371-L1168` → after: `L797-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L797-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L797-L801) · [Before (L371-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L371-L1168)

```diff
-       d: () => lM
-     });
-     var OM = iM(38068),
-       SM = iM(40957),
-       jM = iM(38064),
-       aM = iM(39711),
-       PM = iM(38056),
-       nM = iM(41009);
-     class QM {
-       constructor() {
-         let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, MM && this.reset()
-       }
-       get isDirty() {
-         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
-       }
- ... (782 more removed lines; see GitHub link above)
+       b: () => AU,
+       c: () => QU,
+       e: () => yU,
+       h: () => cU
+     })
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1170` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L803) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L1170)

```diff
-   40975: (MM, rM, iM) => {
+   41168: (UU, XU, zU) => {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1172-L9114` → after: `L805-L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L805-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L805-L822) · [Before (L1172-L9114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L1172-L9114)

```diff
-       d: () => mM,
-       g: () => EM,
-       k: () => hM,
-       n: () => HM,
-       p: () => JM,
-       q: () => lM,
-       u: () => LM,
-       v: () => QM,
-       z: () => zM,
-       A: () => nM,
-       B: () => PM
-     });
-     class OM {
-       constructor() {
-         this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
-       }
- ... (7927 more removed lines; see GitHub link above)
+       b: () => cU,
+       f: () => yU,
+       h: () => QU
+     });
+     class cU extends Error {}
+     cU._setPrototypeOf = Object.setPrototypeOf || ((UU, XU) => (UU.__proto__ = XU, UU));
+     const yU = {
+       MeshInvalidPositionsError: 0,
+       UnsupportedTextureError: 1e3,
+       GLTFLoaderUnexpectedMagicError: 2e3,
+       SceneLoaderError: 3e3,
+       LoadFileError: 4e3,
+       RequestFileError: 4001,
+       ReadFileError: 4002
+     };
+     class QU extends cU {
+ ... (2 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9116-L9131` → after: `L824-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L824-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L824-L855) · [Before (L9116-L9131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9116-L9131)

```diff
-       _advancePhysicsEngineStep(MM) {}
-       _animate(MM) {}
-       animate() {
-         if (this._engine.isDeterministicLockStep()) {
-           let MM = Math.max(ji.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ji.MaxDeltaTime)) + this._timeAccumulator;
-           const rM = this._engine.getTimeStep(),
-             iM = 1e3 / rM / 1e3;
-           let OM = 0;
-           const SM = this._engine.getLockstepMaxSteps();
-           let jM = Math.floor(MM / rM);
-           for (jM = Math.min(jM, SM); MM > 0 && OM < jM;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = rM * iM, this._animate(rM), this.onAfterAnimationsObservable.notifyObservers(this), this.FN && this._advancePhysicsEngineStep(rM), this.onAfterStepO … [truncated]
-           this._timeAccumulator = MM < 0 ? 0 : MM
-         } else {
-           const MM = this.useConstantAnimationDeltaTime ? 16 : Math.max(ji.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ji.MaxDeltaTime));
-           this._animationRatio = .06 * MM, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.FN && this._advancePhysicsEngineStep(MM)
-         }
+     }
+   },
+   41152: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => qU,
+       g: () => GU,
+       k: () => LU,
+       o: () => CU,
+       q: () => WU,
+       s: () => RU,
+       w: () => PU,
+       A: () => fU,
+       E: () => dU,
+       H: () => BU
+     });
+     var cU = zU(41160),
+ ... (16 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9133-L9134` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L857-L860) · [Before (L9133-L9134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9133-L9134)

```diff
-       _clear() {
-         (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
+     }
+     class gU extends FU.h {
+       constructor(UU, XU) {
+         super(UU, FU.f.RequestFileError), this.request = XU, this.name = "RequestFileError", FU.b._setPrototypeOf(this, gU.prototype)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9136-L9140` → after: `L862-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L862-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L862-L888) · [Before (L9136-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9136-L9140)

```diff
-       _checkCameraRenderTarget(MM) {
-         if (MM?.outputRenderTarget && !MM?.isRigCamera && (MM.outputRenderTarget._cleared = !1), MM?.rigCameras?.length)
-           for (let rM = 0; rM < MM.rigCameras.length; ++rM) {
-             const iM = MM.rigCameras[rM].outputRenderTarget;
-             iM && (iM._cleared = !1)
+     }
+     class kU extends FU.h {
+       constructor(UU, XU) {
+         super(UU, FU.f.ReadFileError), this.file = XU, this.name = "ReadFileError", FU.b._setPrototypeOf(this, kU.prototype)
+       }
+     }
+     const GU = {
+         DefaultRetryStrategy: class {
+           static ExponentialBackoff() {
+             let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
+               XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
+             return (zU, cU, yU) => 0 !== cU.status || yU >= UU || -1 !== zU.indexOf("file:") ? -1 : Math.pow(2, yU) * XU
+           }
+         }.ExponentialBackoff(),
+         BaseUrl: "",
+         CorsBehavior: "anonymous",
+ ... (11 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9142-L9169` → after: `L890-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L890-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L890-L906) · [Before (L9142-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9142-L9169)

```diff
-       }
-       resetDrawCache(MM) {
-         if (this.meshes)
-           for (const rM of this.meshes) rM.resetDrawCache(MM)
-       }
-       _renderWithFrameGraph() {
-         let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.activeCamera = null, this.activeCameras = null, MM)
-           for (const iM of this.cameras)
-             if (iM.update(), 0 !== iM.cameraRigMode)
-               for (let MM = 0; MM < iM._rigCameras.length; MM++) iM._rigCameras[MM].update();
-         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
-         try {
-           this._renderWithFrameGraphAfterBeforeRender(rM)
-         } finally {
- ... (12 more removed lines; see GitHub link above)
+       },
+       ZU = {
+         getRequiredSize: null
+       },
+       RU = function(UU, XU, zU, yU) {
+         let QU, FU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+           EU = arguments.length > 5 ? arguments[5] : void 0,
+           YU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : DU.b.LastCreatedEngine;
+         if ("undefined" === typeof HTMLImageElement && !YU?._features.forceBitmapOverHTMLImageElement) return zU("LoadImage is only supported in web or BabylonNative environments."), null;
+         if (YU?._features.forceBitmapOverHTMLImageElement && "string" !== typeof UU && "undefined" !== typeof Blob) {
+           let cU;
+           if (UU instanceof Blob) cU = UU;
+           else {
+             const XU = UU instanceof ArrayBuffer ? UU : (0, pU.l)(UU);
+             cU = new Blob([XU], {
+               type: FU
+ ... (1 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9171` → after: `L908-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L908-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L908-L914) · [Before (L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9171)

```diff
-           OM.e.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+           return YU.createImageBitmap(cU, {
+             premultiplyAlpha: "none",
+             colorSpaceConversion: "none",
+             ...EU
+           }).then(XU).catch((XU => {
+             zU && zU("Error while trying to load image: " + UU, XU)
+           })), null
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9173-L9175` → after: `L916-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L916-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L916-L949) · [Before (L9173-L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9173-L9175)

```diff
-         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
-         for (let iM = 0, OM = this._beforeClearStage; iM < OM.length; iM++) {
-           OM[iM].action()
+         let NU = !1;
+         if (UU instanceof ArrayBuffer || ArrayBuffer.isView(UU))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let XU;
+             XU = UU instanceof ArrayBuffer ? UU : (0, pU.l)(UU), QU = URL.createObjectURL(new Blob([XU], {
+               type: FU
+             })), NU = !0
+           } else QU = `data:${FU};base64,` + (0, oU.f)(UU);
+         else UU instanceof Blob ? (QU = URL.createObjectURL(UU), NU = !0) : (QU = GU.CleanUrl(UU), QU = GU.PreprocessUrl(QU));
+         const IU = XU => {
+           if (zU) {
+             const cU = QU || UU.toString();
+             zU(`Error while trying to load image: ${0===cU.indexOf("http")||cU.length<=128?cU:cU.slice(0,128)+"..."}`, XU)
+           }
+         };
+         if (YU?._features.forceBitmapOverHTMLImageElement) return WU(QU, (cU => {
+ ... (18 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9177` → after: `L951-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L951-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L951-L997) · [Before (L9177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9177)

```diff
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+         BU(QU, aU);
+         const tU = [],
+           gU = () => {
+             for (const UU of tU) UU.target.removeEventListener(UU.name, UU.handler);
+             tU.length = 0
+           };
+         tU.push({
+           target: aU,
+           name: "load",
+           handler: () => {
+             gU(), XU(aU), NU && aU.src && URL.revokeObjectURL(aU.src)
+           }
+         }), tU.push({
+           target: aU,
+           name: "error",
+           handler: UU => {
+ ... (31 more added lines; see GitHub link above)
```
