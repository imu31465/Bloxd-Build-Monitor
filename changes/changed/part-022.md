# Changed — Bundle Modifications Report (Part 022 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `22 / 99` (**301** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/214.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/214.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25)

#### 2. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L6-L7)

```diff
-       c: () => PM,
-       e: () => jM
+       e: () => aU,
+       g: () => RU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L9-L14` → after: `L9-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L9-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L9-L58) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L9-L14)

```diff
-     var OM = iM(4443);
-     let SM = null;
- 
-     function jM(MM) {
-       return null !== SM && MM === SM
-     }
+     zU(34837);
+     var cU = zU(61),
+       yU = zU(1492),
+       QU = zU(2005),
+       AU = zU(2047),
+       FU = zU(27),
+       oU = zU(2616),
+       DU = zU(37345),
+       EU = zU(37354),
+       YU = zU(34824),
+       NU = zU(34835),
+       IU = zU(34853),
+       pU = zU(1305);
+     const aU = (0, cU.memo)((function() {
+       var UU;
+       const {
+ ... (34 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L17-L64` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L61) · [Before (L17-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L17-L64)

```diff
-       this.uB = !1, this.stopPropagation = !1, this.pB = !1, this.disabled = !1
-     }
-     class PM {
-       constructor(MM, rM) {
-         this.version = "0.7.0";
-         var iM = Object.assign({}, new aM, rM || {});
-         this.element = MM || document, this.uB = !!iM.uB, this.stopPropagation = !!iM.stopPropagation, this.pB = !!iM.pB, this.disabled = !!iM.disabled, this.filterEvents = (MM, rM) => !0, this.ignoreEvent = MM => !1, this.down = new OM.EventEmitter, this.up = new OM.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           mrM: 0,
-           HrM: 0,
-           hrM: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
-           currID: null
- ... (32 more removed lines; see GitHub link above)
+       return QU.gameBridge.lookup("cameraZoom", null)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L68` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L82) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L68)

```diff
-       for (var rM in MM) MM[rM] = 0
+       ZU = UU, gU[0].current || kU.current || GU.current ? WU(UU) : BU = UU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L72-L78` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L86) · [Before (L72-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L72-L78)

```diff
-       window.addEventListener("keydown", dM.bind(null, MM, !0), !1), window.addEventListener("keyup", dM.bind(null, MM, !1), !1);
-       var rM = {
-         passive: !0
-       };
-       MM.element.addEventListener("touchstart", HM.bind(void 0, MM), {
-         passive: !1
-       }), MM.element.addEventListener("touchend", JM.bind(void 0, MM), rM), MM.element.addEventListener("mousedown", yM.bind(null, MM, !0), rM), window.document.addEventListener("mouseup", yM.bind(null, MM, !1), rM), MM.element.addEventListener("touchmove", lM.bind(null, MM), rM) … [truncated]
+       return ((0, DU.e)(UU) - (0, DU.e)(0)) * window.innerHeight / 100
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L84-L85` → after: `L89-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L89-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L89-L95) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L84-L85)

```diff
-     function HM(MM, rM) {
-       rM.preventDefault(), hM(rM)
+     function WU(UU) {
+       var XU;
+       if (null === (XU = GU.current) || void 0 === XU || XU.call(GU, PU(UU)), gU[0].current) {
+         const XU = `${(0,DU.e)(UU)}vh`;
+         gU[0].current.style.transform = `translateX(calc(0px - ${XU}))`, gU[1].current.style.transform = `translateX(calc(0px + ${XU}))`, gU[2].current.style.transform = `translateY(calc(0px - ${XU}))`, gU[3].current.style.transform = `translateY(calc(0px + ${XU}))`
+       }
+       kU.current && (kU.current.style.filter = `blur(${Math.round(UU/10)}px)`)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L89-L97` → after: `L99-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L99-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L99-L176) · [Before (L89-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L89-L97)

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
+       let {
+         custom: XU,
+         touch: zU
+       } = UU;
+       const QU = (0, yU.j)("aimingOverlay", "none"),
+         AU = "1.2vh",
+         FU = "0.3vh";
+       (0, cU.useEffect)((() => {
+         BU && WU(BU)
+       }), []);
+       const oU = (0, cU.useRef)(null !== XU);
+       return (0, cU.useLayoutEffect)((() => {
+         var UU;
+         XU ? null === (UU = GU.current) || void 0 === UU || UU.call(GU, PU(ZU)) : oU.current && WU(ZU);
+         oU.current = null !== XU
+       }), [XU]), (0, pU.jsxs)(pU.Fragment, {
+ ... (62 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L101` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L191) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L101)

```diff
-       for (var iM = rM.changedTouches, OM = 0; OM < iM.length; ++OM) iM[OM].identifier === mM && (mM = null)
+       return Math.max(1, Math.round(UU * XU))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L104-L108` → after: `L194-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L194-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L194-L244) · [Before (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L104-L108)

```diff
-     function dM(MM, rM, iM) {
-       if (!MM.ignoreEvent(iM)) try {
-         bM(MM, iM), rM && iM.isTrusted && !iM.repeat && MM._keyStates[iM.code] && wM(MM, iM.code)
-       } finally {
-         tM(iM.code, rM, MM, iM)
+     function oU(UU, XU) {
+       const zU = XU * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
+         cU = function(UU, XU) {
+           if (UU.lines) return FU(UU.lineThickness, XU) % 2;
+           if (UU.dot) return FU(UU.dotSize, XU) % 2;
+           return DU(UU, XU) % 2
+         }(UU, XU),
+         yU = EU(UU.lineThickness * zU, cU),
+         QU = FU(UU.lineLength, zU),
+         AU = Math.round(UU.gap * zU),
+         oU = UU.outline > 0 ? FU(UU.outline, zU) : 0,
+         NU = [];
+       if (UU.lines && (NU.push({
+           x: yU + AU,
+           y: 0,
+           w: QU,
+ ... (35 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L110-L126` → after: `L246-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L246-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L246-L268) · [Before (L110-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L110-L126)

```diff
-     }
- 
-     function yM(MM, rM, iM) {
-       if (!MM.ignoreEvent(iM)) try {
-         bM(MM, iM)
-       } finally {
-         ! function(MM, rM, iM) {
-           if ("pointerId" in iM)
-             if (rM) {
-               if (null !== MM._touches.currID) return;
-               MM._touches.currID = iM.pointerId
-             } else {
-               if (MM._touches.currID !== iM.pointerId) return;
-               MM._touches.currID = null
-             } var OM = "button" in iM ? iM.button + 1 : 1;
-           tM("Mouse" + OM, rM, MM, iM)
- ... (1 more removed lines; see GitHub link above)
+       const IU = NU.map((UU => ({
+         ...UU,
+         x: UU.x - oU,
+         y: UU.y - oU,
+         w: UU.w + 2 * oU,
+         h: UU.h + 2 * oU
+       })));
+       let pU = null,
+         aU = null;
+       if (UU.circle) {
+         const XU = FU(UU.circleThickness, zU),
+           QU = function(UU, XU) {
+             return UU + (UU % 2 === XU ? 0 : 1)
+           }(DU(UU, zU), cU),
+           AU = (yU - QU) / 2;
+         pU = YU(AU, QU, XU), oU > 0 && (aU = YU(AU - oU, QU + 2 * oU, XU + 2 * oU))
+ ... (7 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L131-L145` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L273) · [Before (L131-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L131-L145)

```diff
-       var iM = rM.movementX || rM.mozMovementX || 0,
-         OM = rM.movementY || rM.mozMovementY || 0;
-       if (rM.touches && 0 === (iM | OM)) {
-         var SM = function(MM) {
-           hM(MM);
-           for (let rM = 0; rM < MM.changedTouches.length; ++rM)
-             if (MM.changedTouches[rM].identifier == mM) {
-               const iM = MM.changedTouches[rM],
-                 OM = [iM.clientX - zM, iM.clientY - LM];
-               return zM = iM.clientX, LM = iM.clientY, OM
-             } return console.error(`Did not find touch id ${mM}`), [0, 0]
-         }(rM);
-         iM = SM[0], OM = SM[1]
-       }
-       MM.oB.dx += iM, MM.oB.dy += OM
+       return Math.round(UU.circleRadius * XU * 2 + FU(UU.circleThickness, XU))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L149-L159` → after: `L277-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L277-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L277-L287) · [Before (L149-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L149-L159)

```diff
-       bM(MM, rM);
-       var iM = 1;
-       switch (rM.deltaMode) {
-         case 0:
-           iM = 1;
-           break;
-         case 1:
-           iM = 12;
-           break;
-         case 2:
-           iM = MM.element.clientHeight || window.innerHeight
+       return Math.max(2 - XU, 2 * Math.round((UU - XU) / 2) + XU)
+     }
+ 
+     function YU(UU, XU, zU) {
+       const cU = 2 * zU >= XU - 1;
+       return {
+         x: UU,
+         y: UU,
+         size: XU,
+         border: Math.min(zU, Math.floor(XU / 2)),
+         filled: cU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L165-L176` → after: `L294-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L294-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L294-L295) · [Before (L165-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L165-L176)

```diff
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
+       return UU && XU ? `scale(${IU})` : "scale(1)"
+     }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L178-L179` → after: `L297-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L297-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L297-L302) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L178-L179)

```diff
-     function CM(MM, rM) {
-       return !!MM[GM[rM]] || ("AltRight" === rM || "ControlLeft" === rM) && "function" === typeof MM.getModifierState && !0 === MM.getModifierState("AltGraph")
+     function aU(UU) {
+       return "classic" === UU.settings.style ? (0, NU.jsx)(kU, {
+         ...UU
+       }) : (0, NU.jsx)(dU, {
+         ...UU
+       })
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L183-L193` → after: `L307-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L307-L317) · [Before (L183-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L183-L193)

```diff
-       for (var iM in MM._modifiersHeldThroughBlur = {}, GM) MM._keyStates[iM] && (MM._modifiersHeldThroughBlur[iM] = !0);
-       rM && rM.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (MM) {
-           return !0
-         }
-       }() && (clearTimeout(MM._blurRelease), MM._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var rM in MM._modifiersHeldThroughBlur = {}, MM._keyStates) MM._keyStates[rM] && !/^Mouse\d/.test(rM) && wM(MM, rM)
-       }), 0))
+       const zU = {};
+       if (UU.color !== AU.g.color && (zU.color = (0, AU.i)(UU.color)), UU.opacity !== AU.g.opacity && (zU.opacity = UU.opacity / 100), UU.outline !== AU.g.outline || UU.outlineColor !== AU.g.outlineColor) {
+         const XU = UU.outline,
+           cU = (0, AU.i)(UU.outlineColor);
+         zU.textShadow = XU > 0 ? `-${XU}px 0 ${cU}, 0 ${XU}px ${cU}, ${XU}px 0 ${cU}, 0 -${XU}px ${cU}` : "none"
+       }
+       if (UU.size !== AU.g.size) {
+         const cU = UU.size / 100;
+         zU.fontSize = XU ? `calc(max(1.3rem, 18px) * ${cU})` : `calc(1.3rem * ${cU})`, zU.marginTop = `-${tU}em`, zU.transformOrigin = `50% calc(50% + ${tU}em)`
+       }
+       return zU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L196-L199` → after: `L320-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L320-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L320-L341) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L196-L199)

```diff
-     function bM(MM, rM) {
-       var iM = MM._modifiersHeldThroughBlur;
-       if (iM && rM.isTrusted && document.hasFocus())
-         for (var OM in iM) delete iM[OM], MM._keyStates[OM] && OM !== rM.code && (CM(rM, OM) || wM(MM, OM))
+     function kU(UU) {
+       let {
+         settings: XU,
+         touch: zU,
+         inPreview: cU,
+         inEditor: QU,
+         pressed: AU = !1,
+         pressRef: FU
+       } = UU;
+       return (0, NU.jsx)("div", {
+         className: yU()("Crosshair", {
+           Touch: zU,
+           CrosshairInPreview: cU,
+           CrosshairInEditor: QU || cU
+         }),
+         ref: FU,
+ ... (6 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L203-L214` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L345) · [Before (L203-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L203-L214)

```diff
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
+       return UU / XU + "px"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L218-L233` → after: `L349-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L349-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L349-L354) · [Before (L218-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L218-L233)

```diff
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
-       }))), "button" in OM || (iM.uB && !OM.defaultPrevented && OM.preventDefault(), iM.stopPropagation && OM.stopPropagation()))
+       return {
+         ...PU(UU, XU, zU),
+         width: GU(UU.w, zU),
+         height: GU(UU.h, zU),
+         background: cU
+       }
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L236-L237` → after: `L357-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L357-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L357-L366) · [Before (L236-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L236-L237)

```diff
-     function gM(MM, rM) {
-       return MM ? !rM : rM
+     function ZU(UU, XU, zU) {
+       return {
+         left: GU(UU.x, XU),
+         top: GU(UU.y, XU),
+         width: GU(UU.size, XU),
+         height: GU(UU.size, XU),
+         borderWidth: GU(UU.border, XU),
+         borderColor: zU,
+         background: UU.filled ? zU : void 0
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L239-L253` → after: `L368-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L368-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L368-L373) · [Before (L239-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L239-L253)

```diff
-   },
-   37620: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => JM,
-       d: () => dM
-     });
-     var OM = iM(44),
-       SM = iM(1516),
-       jM = iM(2084),
-       aM = iM(37559),
-       PM = iM(625),
-       nM = iM(1116),
-       QM = iM.n(nM),
-       zM = iM(1303);
-     const LM = [mM()];
+     const RU = {
+       left: [-1, 0],
+       right: [1, 0],
+       up: [0, -1],
+       down: [0, 1]
+     };
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L255` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L375-L376) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L255)

```diff
-     function mM() {
+     function PU(UU, XU, zU) {
+       const [cU, yU] = UU.arm ? RU[UU.arm] : [0, 0], QU = Math.round(XU * zU);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L257-L261` → after: `L378-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L378-L379) · [Before (L257-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L257-L261)

```diff
-         source: null,
-         direction: null,
-         mN: null,
-         timeout: void 0,
-         writtenAngle: null
+         left: GU(UU.x + cU * QU, zU),
+         top: GU(UU.y + yU * QU, zU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L266` → after: `L384-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L384-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L384-L388) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L266)

```diff
-       return LM.find((rM => null !== rM.source && rM.source === MM))
+       return UU.arm ? {
+         "data-arm": UU.arm,
+         "data-x": UU.x,
+         "data-y": UU.y
+       } : {}
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L270-L289` → after: `L392-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L392-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L392-L428) · [Before (L270-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L270-L289)

```diff
-       clearTimeout(MM.timeout), MM.source = null, MM.direction = null, MM.writtenAngle = null, MM.mN && (MM.mN.style.rotate = "")
-     }
-     const JM = (0, OM.memo)((function() {
-       const [, MM] = (0, OM.useReducer)((MM => MM + 1), 0);
-       return (0, SM.d)("damagedByOtherPlayer", (rM => {
-         let {
-           xj: iM,
-           direction: OM
-         } = rM;
-         const SM = iM || "nonDirectional",
-           jM = function(MM) {
-             var rM;
-             const iM = null !== (rM = HM(MM)) && void 0 !== rM ? rM : LM.find((MM => null === MM.source));
-             if (iM) return iM;
-             const OM = {
-               source: null,
- ... (4 more removed lines; see GitHub link above)
+       let {
+         settings: XU,
+         inPreview: zU,
+         inEditor: cU,
+         pressed: FU = !1,
+         spread: DU,
+         spreadRef: EU
+       } = UU;
+       const YU = (0, QU.useRef)(null),
+         {
+           box: pU,
+           dpr: aU
+         } = function(UU) {
+           const [XU, zU] = (0, QU.useState)({
+             box: {
+               left: 0,
+ ... (21 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L291-L306` → after: `L430-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L430-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L430-L464) · [Before (L291-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L291-L306)

```diff
-             return LM.push(OM), OM
-           }(SM);
-         clearTimeout(jM.timeout), jM.source = SM, jM.direction = OM, jM.timeout = setTimeout((() => {
-           hM(jM), MM()
-         }), 800), MM()
-       })), (0, jM.c)("kill", (rM => {
-         let {
-           killer: iM,
-           victim: OM
-         } = rM;
-         const SM = iM.local && HM(OM.id);
-         SM && (hM(SM), MM())
-       })), (0, OM.useEffect)((() => {
-         const MM = (0, aM.h)("turnDamageIndicators", dM);
-         return () => {
-           MM(), LM.forEach(hM)
+             cU();
+             const yU = new ResizeObserver(cU);
+             return yU.observe(XU), window.addEventListener("resize", cU), window.addEventListener("scroll", cU, !0), () => {
+               yU.disconnect(), window.removeEventListener("resize", cU), window.removeEventListener("scroll", cU, !0)
+             }
+           }), [UU]), XU
+         }(YU),
+         tU = (0, QU.useRef)(aU);
+       tU.current = aU;
+       const gU = oU(XU, aU, FU && XU.growOnClick ? IU : 1),
+         kU = function(UU, XU, zU) {
+           const cU = Math.round((UU.left + UU.width / 2) * zU - XU / 2),
+             yU = Math.round((UU.top + UU.height / 2) * zU - XU / 2);
+           return {
+             x: cU / zU - UU.left,
+             y: yU / zU - UU.top
+ ... (19 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L308-L312` → after: `L466-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L466-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L466-L480) · [Before (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L308-L312)

```diff
-       }), []), (0, zM.jsx)("div", {
-         className: "DirectionalDamage",
-         children: LM.map(((MM, rM) => (0, zM.jsx)("div", {
-           ref: rM => {
-             MM.mN = rM
+       }), [EU]);
+       const LU = null !== DU && void 0 !== DU ? DU : dU.current;
+       return (0, NU.jsx)("div", {
+         ref: YU,
+         className: yU()("CrosshairShapes", {
+           CrosshairInPreview: zU,
+           CrosshairInEditor: cU || zU,
+           CrosshairSpreads: void 0 !== EU
+         }),
+         children: (0, NU.jsx)("div", {
+           className: "CrosshairShapesOrigin",
+           style: {
+             left: kU.x,
+             top: kU.y,
+             opacity: XU.opacity / 100
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L314-L316` → after: `L482-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L482-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L482-L498) · [Before (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L314-L316)

```diff
-           className: QM()("DamageIndicator", {
-             DamageIndicatorFullCircle: (0, PM.J)(MM.direction),
-             DamageIndicatorIdle: null === MM.source
+           children: (0, NU.jsxs)("div", {
+             className: "CrosshairShapesPress",
+             children: [gU.ringOutline && (0, NU.jsx)("div", {
+               className: "CrosshairRing",
+               style: ZU(gU.ringOutline, aU, RU)
+             }), gU.outlines.map(((UU, XU) => (0, NU.jsx)("div", {
+               className: "CrosshairPart",
+               ...WU(UU),
+               style: BU(UU, LU, aU, RU)
+             }, `o${XU}`))), gU.ring && (0, NU.jsx)("div", {
+               className: "CrosshairRing",
+               style: ZU(gU.ring, aU, GU)
+             }), gU.fills.map(((UU, XU) => (0, NU.jsx)("div", {
+               className: "CrosshairPart",
+               ...WU(UU),
+               style: BU(UU, LU, aU, GU)
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L318` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L500) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L318)

```diff
-         }, rM)))
+         })
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L330` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L504) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L330)

```diff
-   34822: (MM, rM, iM) => {
+   34845: (UU, XU, zU) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L332-L333` → after: `L506-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L506-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L506-L508) · [Before (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L332-L333)

```diff
-       b: () => SM,
-       d: () => jM
+       c: () => EU,
+       g: () => tU,
+       i: () => aU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L335` → after: `L510-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L510-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L510-L517) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L335)

```diff
-     let OM = !1;
+     var cU = zU(34827);
+     const yU = "XH1-",
+       QU = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
+       AU = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
+       FU = ["color", "outlineColor"],
+       oU = 1 + 3 * FU.length + AU.length + 1,
+       DU = Math.ceil(8 * oU / Math.log2(62)),
+       EU = yU.length + DU;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L337` → after: `L519-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L519-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L519-L521) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L337)

```diff
-     function SM() {
+     function YU(UU) {
+       let XU = 90;
+       for (const zU of UU) XU = 31 * XU + zU & 255;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L341-L342` → after: `L527-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L527-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L527-L537) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L341-L342)

```diff
-     function jM(MM) {
-       return OM !== MM && (OM = MM, !0)
+     function pU(UU, XU) {
+       let zU = 0n;
+       for (const yU of UU) {
+         const UU = NU.indexOf(yU);
+         if (UU < 0) return null;
+         zU = zU * IU + BigInt(UU)
+       }
+       if (zU >> BigInt(8 * XU) !== 0n) return null;
+       const cU = [];
+       for (let yU = 0; yU < XU; yU++) cU.unshift(Number(0xffn & zU)), zU >>= 8n;
+       return cU
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L352-L353` → after: `L540-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L540-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L540-L563) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L352-L353)

```diff
-     function SM(MM, rM) {
-       return MM && !rM
+     function aU(UU) {
+       let XU = "shapes" === UU.style ? 1 : 0;
+       QU.forEach(((zU, cU) => {
+         UU[zU] && (XU |= 1 << cU + 1)
+       }));
+       const zU = [XU];
+       for (const yU of FU) {
+         const XU = (0, cU.h)(yU, UU[yU]);
+         zU.push(XU >> 16 & 255, XU >> 8 & 255, 255 & XU)
+       }
+       for (const yU of AU) {
+         const {
+           min: XU,
+           step: QU
+         } = cU.e[yU];
+         zU.push(Math.round(((0, cU.h)(yU, UU[yU]) - XU) / QU))
+ ... (8 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L356-L357` → after: `L566-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L566-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L566-L571) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L356-L357)

```diff
-     function jM() {
-       return SM(OM.d.get("isTouchScreen"), OM.d.get("clientEscMenuOptions").touchActionButtons)
+     function tU(UU) {
+       for (const XU of UU.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${DU}})`, "gi"))) {
+         const UU = gU(pU(XU[1], oU));
+         if (UU) return UU
+       }
+       return null
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L359-L531` → after: `L573-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L573-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L573-L591) · [Before (L359-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L359-L531)

```diff
-   },
-   41747: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       startPadGameplay: () => GM
-     });
-     iM(41640);
-     var OM = iM(41642),
-       SM = iM(4129),
-       jM = iM(19),
-       aM = iM(40103),
-       PM = iM(4069),
-       nM = iM(40134),
-       QM = iM(22),
-       zM = iM(3063),
-       LM = iM(39433),
-       mM = iM(9451),
- ... (157 more removed lines; see GitHub link above)
+ 
+     function gU(UU) {
+       if (!UU || UU.length !== oU || YU(UU.slice(0, -1)) !== UU[UU.length - 1]) return null;
+       const XU = UU[0],
+         zU = {
+           ...cU.g,
+           style: 1 & XU ? "shapes" : "classic"
+         };
+       QU.forEach(((UU, cU) => {
+         zU[UU] = 0 !== (XU & 1 << cU + 1)
+       }));
+       let yU = 1;
+       for (const cU of FU) zU[cU] = UU[yU] << 16 | UU[yU + 1] << 8 | UU[yU + 2], yU += 3;
+       for (const QU of AU) {
+         const {
+           min: XU,
+ ... (3 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L535` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L596) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L535)

```diff
-   37544: (MM, rM, iM) => {
+   34827: (UU, XU, zU) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L537-L539` → after: `L598-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L598-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L598-L600) · [Before (L537-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L537-L539)

```diff
-       B: () => lM,
-       b: () => jM,
-       f: () => JM,
+       e: () => cU,
+       g: () => yU,
+       h: () => QU,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L541-L542` → after: `L602-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L602-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L602-L603) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L541-L542)

```diff
-       j: () => PM,
-       m: () => mM,
+       l: () => oU,
+       p: () => EU,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L544-L546` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L605) · [Before (L544-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L544-L546)

```diff
-       u: () => LM,
-       x: () => EM,
-       y: () => hM
+       s: () => AU
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L548-L559` → after: `L607-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L607-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L607-L683) · [Before (L548-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L548-L559)

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
+     const cU = {
+         opacity: {
+           min: 5,
+           max: 100,
+           step: 1
+         },
+         outline: {
+           min: 0,
+           max: 4,
+           step: .1
+         },
+         size: {
+           min: 25,
+           max: 400,
+           step: 5
+         },
+ ... (61 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L561-L562` → after: `L685-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L685-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L685-L695) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L561-L562)

```diff
-     function QM(MM) {
-       nM = MM
+     function QU(UU, XU) {
+       var zU;
+       const {
+         min: QU,
+         max: AU,
+         step: FU
+       } = cU[UU];
+       if (!Number.isFinite(XU)) return yU[UU];
+       const oU = (null !== (zU = String(FU).split(".")[1]) && void 0 !== zU ? zU : "").length,
+         DU = Number((Math.round(XU / FU) * FU).toFixed(oU));
+       return Math.min(AU, Math.max(QU, DU))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L566-L571` → after: `L698-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L698-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L698-L702) · [Before (L566-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L566-L571)

```diff
-     function LM(MM) {
-       zM = !0;
-       try {
-         MM.onClick()
-       } finally {
-         zM = !1
+     function AU(UU, XU, zU) {
+       const cU = "number" === typeof zU ? QU(XU, zU) : zU;
+       return {
+         ...UU,
+         [XU]: cU
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L580-L581` → after: `L706-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L706-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L706-L708) · [Before (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L580-L581)

```diff
-     function HM() {
-       return PM().filter((MM => MM.panel && !MM.disabled))
+     function FU(UU, XU) {
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
+       return Object.keys(yU).every((cU => zU.includes(cU) || UU[cU] === XU[cU]))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L585-L595` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L712) · [Before (L585-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L585-L595)

```diff
-       const rM = HM(),
-         iM = rM.findIndex((MM => MM.id === nM));
-       return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
-     }
- 
-     function JM() {
-       return null !== nM && HM().length > 1
-     }
- 
-     function dM() {
-       QM(null)
+       return FU(UU, yU)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L598-L604` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L715-L716) · [Before (L598-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L598-L604)

```diff
-     function yM() {
-       "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
-     }
- 
-     function lM() {
-       const MM = nM;
-       return QM(null), MM
+     function DU(UU) {
+       return `#${UU.toString(16).padStart(6,"0")}`
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L608-L610` → after: `L720-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L720-L721) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L608-L610)

```diff
-       return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
-         aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
-       }
+       const XU = /^#?([0-9a-f]{6})$/i.exec(UU.trim());
+       return XU ? parseInt(XU[1], 16) : null
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L613` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L724) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L613)

```diff
-   37542: (MM, rM, iM) => {
+   34853: (UU, XU, zU) => {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L615-L623` → after: `L726-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L726-L727) · [Before (L615-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L615-L623)

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
+       d: () => YU,
+       f: () => NU
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L625-L629` → after: `L729-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L729-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L729-L733) · [Before (L625-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L625-L629)

```diff
-     var OM = iM(19),
-       SM = iM(22),
-       jM = iM(1313),
-       aM = iM(37544);
-     const PM = "clientGameUiChanged";
+     var cU = zU(61),
+       yU = zU(42),
+       QU = zU(34845),
+       AU = zU(34827);
+     const FU = "crosshairCode";
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L633-L642` → after: `L738-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L738-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L738-L741) · [Before (L633-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L633-L642)

```diff
-       return nM
-     }
- 
-     function zM(MM, rM) {
-       const iM = {
-         content: MM,
-         menu: rM
-       };
-       return nM = iM, SM.i.Tz(PM, nM, !0), () => {
-         nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
+       if (null === oU) {
+         var UU;
+         const XU = yU.k.getItem(FU);
+         oU = null !== (UU = "string" === typeof XU ? (0, QU.g)(XU) : null) && void 0 !== UU ? UU : AU.g
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L652-L654` → after: `L747-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L747-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L747-L748) · [Before (L652-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L652-L654)

```diff
-       return LM = MM, () => {
-         LM === MM && (LM = null)
-       }
+       oU = UU, (0, AU.l)(UU) ? yU.k.removeItem(FU) : yU.k.setItem(FU, (0, QU.i)(UU));
+       for (const XU of DU) XU()
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L659-L663` → after: `L752-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L752-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L752-L761) · [Before (L659-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L659-L663)

```diff
-       const MM = OM.d.get("openInGameMenuName");
-       "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
-         openInGameMenuName: "clientGame",
-         openEverythingMenuName: null
-       })
+       const [UU, XU] = (0, cU.useState)(EU);
+       return (0, cU.useEffect)((() => {
+         const UU = () => {
+           XU(EU())
+         };
+         return UU(), zU = UU, DU.add(zU), () => {
+           DU.delete(zU)
+         };
+         var zU
+       }), []), UU
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L666-L667` → after: `L773-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L773-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L773-L774) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L666-L667)

```diff
-     function dM() {
-       EM(!1)
+     function QU(UU) {
+       return UU === (0, yU.e)().SXU ? (0, yU.e)().pM : UU
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L670-L671` → after: `L777-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L777-L778) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L670-L671)

```diff
-     function yM() {
-       EM(hM)
+     function AU(UU) {
+       return !(0, cU.P)(UU) && QU(UU) === (0, yU.e)().pM
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L675-L681` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L783) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L675-L681)

```diff
-       hM && EM(!1)
-     }
- 
-     function EM(MM) {
-       "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
-         openInGameMenuName: MM ? "inventory" : null
-       }), MM || (0, aM.i)(), hM = !1
+       return (0, yU.e)().physics[FU][1]
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L684` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L786) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L684)

```diff
-   37440: (MM, rM, iM) => {
+   37478: (UU, XU, zU) => {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L688-L700` → after: `L790-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L790-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L790-L1033) · [Before (L688-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L688-L700)

```diff
-     var OM = iM(313),
-       SM = iM(19),
-       jM = iM(34822),
-       aM = iM(1717),
-       PM = iM(2093);
- 
-     function nM(MM, rM) {
-       var iM, nM, QM;
-       if (!SM.d.get("isKeydownEnabled") || MM.repeat) return;
-       const zM = MM.code;
-       "Escape" === MM.key ? (0, aM.k)(MM) : null !== (iM = PM.v.OpenSettings) && void 0 !== iM && iM.includes(zM) ? (0, aM.B)(MM, OM.m.SETTINGS) : null !== (nM = PM.v.OpenCharacterCustomization) && void 0 !== nM && nM.includes(zM) ? (0, jM.b)() || (0, aM.B)(MM, OM.m.CUSTOMISATION … [truncated]
-         showDebugOverlay: !SM.d.get("showDebugOverlay")
-       })
+     var cU = zU(37480),
+       yU = zU(212),
+       QU = zU(5378),
+       AU = zU(37484),
+       FU = zU(37148),
+       oU = zU(37532),
+       DU = zU(37487),
+       EU = zU(352),
+       YU = zU.n(EU),
+       NU = zU(3043),
+       IU = zU(37523),
+       pU = zU(31),
+       aU = zU(27),
+       tU = zU(37492),
+       gU = zU(37495),
+       kU = zU(37502),
+ ... (228 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L703-L710` → after: `L1036-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L1036-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L1036-L1039) · [Before (L703-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L703-L710)

```diff
-   40024: (MM, rM, iM) => {
-     function OM(MM, rM, iM, OM, SM) {
-       var jM = {};
-       return Object.keys(OM).forEach((function(MM) {
-         jM[MM] = OM[MM]
-       })), jM.enumerable = !!jM.enumerable, jM.configurable = !!jM.configurable, ("value" in jM || jM.initializer) && (jM.writable = !0), jM = iM.slice().reverse().reduce((function(iM, OM) {
-         return OM(MM, rM, iM) || iM
-       }), jM), SM && void 0 !== jM.initializer && (jM.value = jM.initializer ? jM.initializer.call(SM) : void 0, jM.initializer = void 0), void 0 === jM.initializer && (Object.defineProperty(MM, rM, jM), jM = null), jM
+   37562: (UU, XU, zU) => {
+     function cU(UU, XU) {
+       var zU, cU, yU, QU, AU, FU, oU, DU;
+       return UU.name === XU.name && ((null === (zU = UU.attributes) || void 0 === zU || null === (cU = zU.customAttributes) || void 0 === cU ? void 0 : cU.stackKey) === (null === (yU = XU.attributes) || void 0 === yU || null === (QU = yU.customAttributes) || void 0 === QU ? void  … [truncated]
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L713` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L1042) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L713)

```diff
-       e: () => OM
+       d: () => cU
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L716-L723` → after: `L1045-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L1045-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L1045-L1059) · [Before (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L716-L723)

```diff
-   40016: (MM, rM, iM) => {
-     function OM(MM, rM, iM, OM) {
-       iM && Object.defineProperty(MM, rM, {
-         enumerable: iM.enumerable,
-         configurable: iM.configurable,
-         writable: iM.writable,
-         value: iM.initializer ? iM.initializer.call(OM) : void 0
-       })
+   37662: (UU, XU, zU) => {
+     function cU(UU) {
+       return UU.includes("Leaf Bed")
+     }
+ 
+     function yU(UU) {
+       return / Bed(?: Head)?(?:\||$)/.test(UU) && !cU(UU)
+     }
+ 
+     function QU(UU) {
+       return UU.includes(" Strongbed")
+     }
+ 
+     function AU(UU) {
+       return cU(UU) || yU(UU) || QU(UU)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L726` → after: `L1062-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L1062-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L1062-L1065) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L726)

```diff
-       d: () => OM
+       b: () => AU,
+       c: () => cU,
+       g: () => QU,
+       j: () => yU
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/214.js` (Changed code · before: `L728` → after: `L1067-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b474f9b6a126c0c586d7c6cd259d9bf4aff33ad7646c4470a4a427464d11fc25) · [After (L1067-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/214.js#L1067-L1088) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/214.js#L728)

```diff
-   }
+   },
+   37659: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => DU
+     });
+     var cU = zU(37662),
+       yU = zU(9782);
+     const QU = [],
+       AU = [],
+       FU = [],
+       oU = [];
+     for (const EU of Object.keys(yU.l))(0, cU.c)(EU) ? QU.push(EU) : (0, cU.j)(EU) && AU.push(EU), (0, cU.g)(EU) && FU.push(EU), (EU.includes(" Bed Head") || EU.includes(" Strongbed Head")) && oU.push(EU);
+     const DU = {
+       leafBeds: QU,
+       woolBeds: AU,
+       strongBeds: FU,
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/215.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/215.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166)

#### 1. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L7` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L4-L29) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L4-L7)

```diff
-   34852: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => UQ,
-       i: () => IH
+   34884: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       MAX_BLOCK_ID: () => cU,
+       armourReductionOf: () => VU,
+       clipSizeOf: () => vU,
+       creativeAltNames: () => AX,
+       creativeCategoryOf: () => TU,
+       creativeItemCategories: () => FU,
+       creativeItemCategoryIcons: () => oU,
+       creativeItemIds: () => bU,
+       descriptionOf: () => iU,
+       displayNameOf: () => fU,
+       dropsNothing: () => mU,
+       enchantmentPerksOf: () => jU,
+       gunTypeOf: () => nU,
+       harvestsNullLevelOf: () => lU,
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L9-L207` → after: `L31-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L31-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L31-L57) · [Before (L9-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L9-L207)

```diff
-     const OM = "0.9.4",
-       SM = {
-         DEBUG: !1,
-         LIB_VERSION: "1.438.7",
-         LIB_NAME: "web",
-         JS_SDK_VERSION: OM
-       };
-     var jM = SM;
-     const aM = "$early_access_features",
-       PM = "$active_feature_flags",
-       nM = "$feature_flag_details",
-       QM = "$feature_flag_errors",
-       zM = "$feature_flag_evaluated_at",
-       LM = "$feature_flag_request_id",
-       mM = "$minimal_flag_called_events",
-       HM = "$enabled_feature_flags",
- ... (183 more removed lines; see GitHub link above)
+     const cU = 8574,
+       yU = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       QU = "S-$SW$$R&$SH2$)$'$)$4$)$X*$I6$-$%$%$cD1$WE1$%%%$]5$b7$RI4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$Oa0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TW3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       AU = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       FU = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       oU = {
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L211-L219` → after: `L61-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L61-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L61-L67) · [Before (L211-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L211-L219)

```diff
-     function Yi(MM) {
-       return "u" > typeof Event && Ni(MM, Event)
-     }
- 
-     function Ni(MM, rM) {
-       try {
-         return MM instanceof rM
-       } catch (MM) {
-         return !1
+     function IU(UU, XU, zU) {
+       const cU = NU(UU);
+       let yU = null,
+         QU = [];
+       return UU => {
+         const AU = cU(UU);
+         if (0 !== AU) return null === yU && (yU = XU.split(EU.r), QU = new Array(yU.length)), QU[AU - 1] ??= zU(yU[AU - 1])
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L226-L233` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L71-L72) · [Before (L226-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L226-L233)

```diff
-     function Fi(MM, rM, iM, OM, SM, jM, aM) {
-       try {
-         var PM = MM[jM](aM),
-           nM = PM.value
-       } catch (MM) {
-         return void iM(MM)
-       }
-       PM.done ? rM(nM) : Promise.resolve(nM).then(OM, SM)
+     function pU(UU) {
+       return UU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L237-L252` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L76) · [Before (L237-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L237-L252)

```diff
-       return function() {
-         var rM = this,
-           iM = arguments;
-         return new Promise((function(OM, SM) {
-           var jM = MM.apply(rM, iM);
- 
-           function aM(MM) {
-             Fi(jM, OM, SM, aM, PM, "next", MM)
-           }
- 
-           function PM(MM) {
-             Fi(jM, OM, SM, aM, PM, "throw", MM)
-           }
-           aM(void 0)
-         }))
-       }
+       return UU === EU.g ? null : (0, EU.A)(UU)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L254` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L78-L79) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L254)

```diff
-     const Xi = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
+     const tU = IU("T$$#&#$T'#$F$#$$%$B#$>#$##=$$1$.)$*#$(&$)#)$N$#$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$+##$&#$$%$*/$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$*&$T$&$($$$*$(#$$1$$1$$1$$1$$1$$1$$)$$)$$)$$)$$)$*)$N2#$.($$1$$)$T$$$,#$4#$)##$V'#$)#[$$+#$#$($$'#%$&$$N)*$4#$ … [truncated]
+       gU = IU("$J$#$&$$F&$23$$J$$$A$$c$$,^'$&H2$$'$$'$$0$*9$$R$#49$$($$&$$%$$$#,C(##$$#$&U)#$#$$($B+#2R$$1#7$%#+$6#$$)$J$O$#*-$1#M1$$a$$&'#%$&)$$4$.&$(;$*%$$$$$#$$#$,Z/$$T&$&V$$$Z-$###$%/V$O$$&2$*5#X$#$V%.$&2$&#$*&$$5$$E$#c2R1$&$$cc$c]$$$R%$*G=$]/=$2:$J5-$b*#G$$,<#%$+##$#4+#+##$+ … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L256-L272` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L81-L82) · [Before (L256-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L256-L272)

```diff
-       Ki = function(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         if (!MM) return !1;
-         const iM = function(MM, rM) {
-             let iM = "";
-             for (let OM = 0; rM.length > OM; OM++) {
-               const MM = rM[OM];
-               iM += MM.length + ":" + MM
-             }
-             return MM.length + ":" + MM + "|" + rM.length + ":" + iM
-           }(MM, rM),
-           OM = Ii.get(iM);
-         if (void 0 !== OM) return OM;
-         const SM = MM.toLowerCase(),
-           jM = Xi.concat(rM).some((MM => -1 !== SM.indexOf(MM.toLowerCase())));
-         return 256 > Ii.size || Ii.clear(), Ii.set(iM, jM), jM
- ... (1 more removed lines; see GitHub link above)
+       GU = new Map;
+     let BU = -1;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L274-L275` → after: `L84-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L84-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L84-L108) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L274-L275)

```diff
-     function qi(MM, rM, iM, OM, SM) {
-       return rM > iM && (OM.warn("min cannot be greater than max."), rM = iM), Ri(MM) ? MM > iM ? (OM.warn(" cannot be  greater than max: " + iM + ". Using max value instead."), iM) : rM > MM ? (OM.warn(" cannot be less than min: " + rM + ". Using min value instead."), rM) : MM : … [truncated]
+     function ZU(UU, XU, zU) {
+       BU !== (0, DU.i)() && (BU = (0, DU.i)(), kU.clear(), GU.clear());
+       let cU = UU.get(XU);
+       return void 0 === cU && (cU = zU(), void 0 !== cU && UU.set(XU, cU)), cU
+     }
+     const RU = IU("_$bN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$O&%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       PU = IU("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       WU = IU(".G^+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       dU = IU("&aO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$HD$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       LU = IU(">G^+#%#)$)%9$", "none|sniper", pU),
+       eU = IU("*G^+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", pU),
+       CU = NU("]%]V+#c&M.$4E2$44$44$44$49$4/$4/$4/$"),
+       wU = NU("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$V$,$"),
+       qU = IU("$TO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($]$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (UU => "" === UU ? null : Number(UU))),
+       OU = IU("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
+       SU = IU(",bN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($Y$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L477-L559` → after: `L112-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L112-L116) · [Before (L477-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L477-L559)

```diff
-       let rM = "";
-       for (let iM = 0; MM.length > iM; iM++) {
-         const OM = MM.charCodeAt(iM);
-         if (55296 > OM || OM > 56319) rM += 56320 > OM || OM > 57343 ? MM[iM] : "\ufffd";
-         else {
-           const OM = MM.charCodeAt(iM + 1);
-           56320 > OM || OM > 57343 ? rM += "\ufffd" : (rM += MM[iM] + MM[iM + 1], iM++)
-         }
-       }
-       return rM
-     }
- 
-     function aS(MM, rM) {
-       if (!rM) return MM;
-       let iM = [];
-       try {
- ... (67 more removed lines; see GitHub link above)
+       const XU = gU(UU);
+       return null !== XU ? XU : ZU(GU, UU, (() => {
+         var XU;
+         return null !== (XU = (0, EU.B)(fU(UU))) && void 0 !== XU ? XU : void 0
+       }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L563` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L120) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L563)

```diff
-       return MM ? MM.split("#")[0] : MM
+       return RU(UU)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L567-L599` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L124) · [Before (L567-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L567-L599)

```diff
-       try {
-         return MM()
-       } catch (MM) {
-         return
-       }
-     }
- 
-     function hS(MM, rM) {
-       const iM = setTimeout(MM, rM);
-       return null != iM && iM.unref && (null == iM || iM.unref()), iM
-     }
- 
-     function JS(MM, rM, iM) {
-       return dS.apply(this, arguments)
-     }
- 
- ... (17 more removed lines; see GitHub link above)
+       return PU(UU)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L603-L639` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L128) · [Before (L603-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L603-L639)

```diff
-       return yS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
-         return typeof MM
-       } : function(MM) {
-         return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
-       }, yS(MM)
-     }
- 
-     function lS(MM, rM, iM) {
-       return (rM = function(MM) {
-         var rM = function(MM) {
-           if ("object" != yS(MM) || !MM) return MM;
-           var rM = MM[Symbol.toPrimitive];
-           if (void 0 !== rM) {
-             var iM = rM.call(MM, "string");
-             if ("object" != yS(iM)) return iM;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
- ... (21 more removed lines; see GitHub link above)
+       return WU(UU)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L643-L651` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L132) · [Before (L643-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L643-L651)

```diff
-       for (var rM = 1; arguments.length > rM; rM++) {
-         var iM = null != arguments[rM] ? arguments[rM] : {};
-         rM % 2 ? ES(Object(iM), !0).forEach((function(rM) {
-           lS(MM, rM, iM[rM])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ES(Object(iM)).forEach((function(rM) {
-           Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
-         }))
-       }
-       return MM
+       return dU(UU)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L656-L688` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L136) · [Before (L656-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L656-L688)

```diff
-       var rM;
-       const iM = globalThis._posthogChunkIds,
-         OM = globalThis._debugIds;
-       if (!iM && !OM) return;
-       const SM = iM ? Object.keys(iM) : [],
-         jM = OM ? Object.keys(OM) : [];
-       if (bS && tS(iM, SM, CS) && tS(OM, jM, eS)) return bS;
-       CS = iM ? US({}, iM) : void 0, eS = OM ? US({}, OM) : void 0, bS = {}, null !== (rM = GS) && void 0 !== rM || (GS = {});
-       const aM = (rM, iM) => {
-         for (const SM of rM) {
-           const rM = iM[SM];
-           if (!rM) continue;
-           const jM = null == GS ? void 0 : GS[SM];
-           if (jM) {
-             bS[jM] = rM;
-             continue
- ... (17 more removed lines; see GitHub link above)
+       return LU(UU)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L892-L947` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L140) · [Before (L892-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L892-L947)

```diff
-       if (!MM || "<anonymous>" === MM) return !1;
-       const rM = uS.exec(MM);
-       return !rM || RS.includes(rM[1].toLowerCase())
-     }
- 
-     function WS(MM, rM, iM, OM, SM) {
-       const jM = {
-         platform: MM,
-         filename: rM,
-         function: "<anonymous>" === iM ? "?" : iM,
-         in_app: pS(rM)
-       };
-       return bi(OM) || (jM.lineno = OM), bi(SM) || (jM.colno = SM), jM
-     }
-     const sS = (MM, rM) => {
-         const iM = -1 !== MM.indexOf("safari-extension"),
- ... (40 more removed lines; see GitHub link above)
+       return eU(UU)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L951-L1001` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L144) · [Before (L951-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L951-L1001)

```diff
-       for (let rM = 1; 10 >= rM; rM++) {
-         const iM = MM.length - 2 * rM;
-         if (0 > iM) break;
-         let OM = !0;
-         for (let SM = 0; rM > SM; SM++)
-           if (!xS(MM[iM + SM], MM[iM + rM + SM])) {
-             OM = !1;
-             break
-           } if (OM) {
-           for (let OM = 0; rM > OM; OM++) MM[iM + OM] = MM[iM + rM + OM];
-           return MM.length = iM + rM, {
-             start: iM,
-             length: rM
-           }
-         }
-       }
- ... (35 more removed lines; see GitHub link above)
+       return 0 !== wU(UU)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1115-L1122` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L148) · [Before (L1115-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1115-L1122)

```diff
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
-       const iM = Object.keys(MM);
-       if (iM.sort(), !iM.length) return "[object has no keys]";
-       for (let OM = iM.length; OM > 0; OM--) {
-         const MM = iM.slice(0, OM).join(", ");
-         if (rM >= MM.length) return OM === iM.length ? MM : MM.length > rM ? `${MM.slice(0,rM)}...` : MM
-       }
-       return ""
+       return qU(UU)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1248-L1318` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L152) · [Before (L1248-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1248-L1318)

```diff
-       var rM;
-       return MM ? {
-         enabled: null !== (rM = MM.enabled) && void 0 !== rM ? rM : zj.enabled,
-         max_bytes: Hj(MM.max_bytes, zj.max_bytes)
-       } : US({}, zj)
-     }
-     var mj = class {
-       constructor(MM) {
-         this._entries = [], this._totalBytes = 0, this._config = Lj(MM)
-       }
-       setConfig(MM) {
-         this._config = Lj(MM), this._trimToMaxBytes()
-       }
-       add(MM) {
-         const rM = function(MM) {
-           let rM;
- ... (55 more removed lines; see GitHub link above)
+       return 0 !== CU(UU)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1330` → after: `L156-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L156-L159) · [Before (L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1330)

```diff
-       return "string" == typeof MM || MM
+       const XU = OU(UU);
+       if (void 0 === XU || XU.startsWith(EU.q)) return null === XU || void 0 === XU ? void 0 : XU.slice(EU.q.length);
+       const zU = (0, DU.f)(UU);
+       return void 0 === zU ? void 0 : `${zU}${EU.r}${XU}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1334` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L163-L164) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1334)

```diff
-       return "string" == typeof MM ? MM : void 0
+       var XU;
+       return null !== (XU = SU(UU)) && void 0 !== XU ? XU : YU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1336-L1370` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L166) · [Before (L1336-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1336-L1370)

```diff
-     const yj = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
-       lj = "NativeGzipValidationError",
-       Ej = MM => MM.length >= 2 && 31 === MM[0] && 139 === MM[1],
-       Uj = (MM, rM) => MM === Qi.GZipJS || rM === Qi.GZipJS || "gzip" === rM,
-       Gj = MM => !(!MM || "object" != typeof MM) && "NotReadableError" === ("name" in MM ? String(MM.name) : "");
-     let Cj;
-     const ej = MM => {
-         throw LS(lj, `Native gzip produced invalid output: ${MM}`)
-       },
-       bj = (wj = Bi((function*(MM, rM) {
-         18 > MM.size && ej("too-short");
-         const iM = new Uint8Array(yield MM.slice(0, 10).arrayBuffer());
-         Ej(iM) && 8 === iM[2] || ej("invalid-header");
-         const OM = new DataView(yield MM.slice(MM.size - 8).arrayBuffer());
-         OM.getUint32(0, !0) !== (MM => {
-           const rM = (() => {
- ... (19 more removed lines; see GitHub link above)
+     let KU = null;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1373-L1412` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L169-L174) · [Before (L1373-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1373-L1412)

```diff
-       return tj = Bi((function*(MM) {
-         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           iM = arguments.length > 2 ? arguments[2] : void 0;
-         try {
-           const rM = (new TextEncoder).encode(MM),
-             iM = new globalThis.CompressionStream("gzip"),
-             SM = iM.writable.getWriter(),
-             jM = SM.write(rM).then((() => SM.close())).catch((OM = Bi((function*(MM) {
-               try {
-                 yield SM.abort(MM)
-               } catch (MM) {}
-               throw MM
-             })), function(MM) {
-               return OM.apply(this, arguments)
-             })),
-             aM = new Response(iM.readable).blob(),
- ... (24 more removed lines; see GitHub link above)
+       if (null === KU) {
+         const UU = [],
+           XU = new EU.t(yU);
+         let zU = 0;
+         for (; !XU.done;) zU += (0, EU.J)(XU.next()), UU.push(zU);
+         KU = Object.freeze(UU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1443-L1499` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L180) · [Before (L1443-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1443-L1499)

```diff
-       return function(MM) {
-         return Zj.test(MM)
-       }(MM) || vj.test(MM) || Fj.test(MM)
-     }
- 
-     function ia(MM) {
-       return MM.split("&", 129).length > 128
-     }
- 
-     function Oa(MM, rM, iM) {
-       return ra(MM) || rM.includes(";") && function(MM) {
-         return MM.split(";").some((MM => ra(MM.split("=", 1)[0])))
-       }(rM) ? uj : Yj.test(rM) ? iM ? Qa(rM, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : uj : rM
- ... (41 more removed lines; see GitHub link above)
+       return rU(UU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1504-L1552` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L185) · [Before (L1504-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1504-L1552)

```diff
-       if (MM.length > 8192 && Aj.test(MM)) return uj;
-       const {
-         address: OM,
-         suffix: SM
-       } = rM.stripPunctuation ? function(MM) {
-         let rM = MM.length;
-         for (; rM > 0 && ".,;:!?)]}'".includes(MM[rM - 1]);) rM--;
-         return {
-           address: MM.slice(0, rM),
-           suffix: MM.slice(rM)
-         }
-       }(MM) : {
-         address: MM,
-         suffix: ""
-       };
-       let jM;
- ... (33 more removed lines; see GitHub link above)
+       return 0 !== ((null !== (zU = uU(UU)) && void 0 !== zU ? zU : 0) & XU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1555-L1585` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L188-L189) · [Before (L1555-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1555-L1585)

```diff
-     function Qa(MM, rM) {
-       return MM.replace(oj, (iM => function(MM, rM) {
-         const iM = function(MM) {
-           if (!MM.includes("://")) return [];
-           const rM = [...MM.matchAll(xj)].map((MM => MM.index)),
-             iM = [],
-             OM = {
-               query: !1,
-               fragment: !1,
-               fragmentQuery: !1
-             };
-           let SM = 0,
-             jM = !1,
-             aM = "";
-           for (let PM = 0; MM.length > PM && rM.length > SM; PM++) {
-             rM[SM] === PM && (PM > 0 && "=" !== aM && iM.push(PM), SM++);
- ... (15 more removed lines; see GitHub link above)
+     function UX(UU) {
+       return hU(UU, EU.d.OnlyInSearch)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1589` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L193) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1589)

```diff
-       return MM.replace(kj, uj)
+       return hU(UU, EU.d.OnlyInCategory)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1593-L1600` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L197) · [Before (L1593-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1593-L1600)

```diff
-       let rM = 0,
-         iM = !1;
-       for (let OM = MM.length - 1; OM >= 0; OM--) {
-         let SM = MM.charCodeAt(OM) - 48;
-         if (0 > SM || SM > 9) return !1;
-         iM && (SM *= 2, SM > 9 && (SM -= 9)), rM += SM, iM = !iM
-       }
-       return rM % 10 == 0
+       return hU(UU, EU.d.DevOnly)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1604-L1619` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L201) · [Before (L1604-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1604-L1619)

```diff
-       const rM = [];
-       for (let jM = Vj.exec(MM); null !== jM; jM = Vj.exec(MM)) rM.push({
-         digits: jM[0],
-         start: jM.index,
-         end: jM.index + jM[0].length
-       });
-       let iM = "",
-         OM = 0,
-         SM = 0;
-       for (; rM.length > SM;) {
-         let jM = "",
-           aM = -1;
-         for (let MM = SM; rM.length > MM && (jM += rM[MM].digits, 19 >= jM.length); MM++) jM.length >= 13 && La(jM) && (aM = MM);
-         0 > aM ? SM++ : (iM += MM.slice(OM, rM[SM].start) + uj, OM = rM[aM].end, SM = aM + 1)
-       }
-       return iM + MM.slice(OM)
+       return !hU(UU, EU.d.HiddenByDefault) && void 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1623-L1631` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L204-L207) · [Before (L1623-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1623-L1631)

```diff
-     function ha(MM, rM) {
-       try {
-         return ya(MM, rM, {
-           ancestors: new WeakSet,
-           remainingNodes: 1e4
-         }, 0)
-       } catch (MM) {
-         return []
-       }
+     function yX(UU, XU, zU, cU) {
+       var yU;
+       const QU = null !== (yU = uU(UU)) && void 0 !== yU ? yU : 0;
+       return 0 !== (QU & EU.d.DisabledInPublicLobbies) && XU || 0 !== (QU & EU.d.DisabledInProduction) && !0 || !zU || !cU && 0 !== (QU & EU.d.DevOnly)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1633-L1924` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L209) · [Before (L1633-L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1633-L1924)

```diff
- 
-     function Ja(MM, rM, iM, OM) {
-       if (0 >= iM.remainingNodes) return {
-         stringValue: OS
-       };
-       if (iM.remainingNodes--, si(MM)) return {
-         boolValue: MM
-       };
-       if ("bigint" == typeof MM) return function(MM, rM) {
-         const iM = MM.toString(),
-           OM = BigInt("9223372036854775808");
-         return MM >= OM || -OM > MM ? (null == rM || rM.debug(`Attribute ${iM} is outside the int64 range; encoding it as a string`), {
-           stringValue: iM
-         }) : {
-           intValue: iM
-         }
- ... (276 more removed lines; see GitHub link above)
+     let QX = null;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L1927-L2409` → after: `L212-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L212-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L212-L221) · [Before (L1927-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L1927-L2409)

```diff
-       return .75 + .5 * Math.random()
-     }
- 
-     function pa(MM, rM, iM, OM) {
-       const SM = Math.min(Math.max(0, rM - 1), 6),
-         jM = MM * Math.pow(2, SM);
-       return Math.round((void 0 === OM ? jM : Math.min(jM, Math.max(OM, MM))) * iM)
-     }
-     var Wa = class {
-       constructor(MM, rM, iM, OM, SM) {
-         let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
-           aM = arguments.length > 6 ? arguments[6] : void 0;
-         var PM;
-         this._instance = MM, this._config = rM, this._logger = iM, this._getContext = OM, this._onReady = SM, this._waitForStoragePersist = jM, this._scopeName = aM, this._flushTimer = new ua((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance … [truncated]
-       }
-       clearQueue() {
- ... (467 more removed lines; see GitHub link above)
+       if (null === QX) {
+         const UU = AU.split(EU.r),
+           XU = new Map,
+           zU = new EU.t(QU);
+         let cU = 0,
+           yU = 0;
+         for (; !zU.done;) {
+           cU += (0, EU.J)(zU.next());
+           const QU = zU.next();
+           XU.set(cU, Object.freeze(UU.slice(yU, yU + QU))), yU += QU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/215.js` (Changed code · before: `L2411-L2463` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5a134c42e5c7223b64c2c3a4efb123f648cdeaceb6b23a8df997e9df2b416166) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/215.js#L223) · [Before (L2411-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/215.js#L2411-L2463)

```diff
-       },
-       Ba = function(MM) {
-         const rM = {};
-         return Aa(MM, (function(MM, iM) {
-           (wi(MM) && MM.length > 0 || Ri(MM)) && (rM[iM] = MM)
-         })), rM
-       };
- 
-     function Xa(MM) {
-       const rM = US({}, MM);
-       for (const iM of ["name", "message", "stack", "cause", "errors"]) try {
-         iM in MM && (rM[iM] = MM[iM])
-       } catch (MM) {}
-       return rM
-     }
-     const Ia = ["herokuapp.com", "vercel.app", "netlify.app"];
- ... (37 more removed lines; see GitHub link above)
+         QX = XU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/216.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/216.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800)

#### 1. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L4-L11509` → after: `L4-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L4-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L76) · [Before (L4-L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/216.js#L4-L11509)

```diff
-   34860: function(module, __unused_webpack_exports, __webpack_require__) {
-     var n;
-     this || self, n = function() {
-       return function() {
-         var __webpack_modules__ = {
-             4264: function(MM, rM, iM) {
-               MM.exports = iM(7588)
-             },
-             5036: function(MM, rM, iM) {
-               iM(1719), iM(5677), iM(6394), iM(5334), iM(6969), iM(2021), iM(8328), iM(2129);
-               var OM = iM(1287);
-               MM.exports = OM.Promise
-             },
-             2582: function(MM, rM, iM) {
-               iM(1646), iM(6394), iM(2004), iM(462), iM(8407), iM(2429), iM(1172), iM(8288), iM(1274), iM(8201), iM(6626), iM(3211), iM(9952), iM(15), iM(9831), iM(7521), iM(2972), iM(6956), iM(5222), iM(2257);
-               var OM = iM(1287);
- ... (11490 more removed lines; see GitHub link above)
+   44209: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => QU
+     });
+     var cU = zU(61),
+       yU = zU(3021);
+ 
+     function QU(UU, XU, zU) {
+       const QU = (0, cU.useRef)(null),
+         {
+           width: AU,
+           height: FU
+         } = (0, yU.d)(UU);
+       (0, cU.useEffect)((() => {
+         const zU = XU(UU.current);
+         return QU.current = zU, () => {
+ ... (57 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L11511-L11543` → after: `L78-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L78-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/216.js#L78-L317) · [Before (L11511-L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/216.js#L11511-L11543)

```diff
- 
-           function Nj(MM, iM, OM) {
-             var SM, jM = this && this.__awaiter || function(MM, rM, iM, OM) {
-                 return new(iM || (iM = Promise))((function(SM, jM) {
-                   function aM(MM) {
-                     try {
-                       nM(OM.next(MM))
-                     } catch (MM) {
-                       jM(MM)
-                     }
-                   }
- 
-                   function PM(MM) {
-                     try {
-                       nM(OM.throw(MM))
-                     } catch (MM) {
- ... (17 more removed lines; see GitHub link above)
+         }
+       }
+     }
+     const FU = AU([0, 0, 0], [0, 0, 0], .07),
+       oU = (0, yU.d)((0, cU.g)(FU), "mobIdle"),
+       DU = AU([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
+       EU = AU([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
+       YU = (0, yU.d)((0, cU.g)(DU), "gunReady"),
+       NU = (0, yU.d)((0, cU.g)(EU), "gunAimed")
+   },
+   39453: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => yU,
+       g: () => QU
+     });
+     const cU = new WeakMap;
+ ... (224 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/216.js` (Changed code · before: `L11545-L11892` → after: `L319-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e893271a1bbc254d0b1e65be206575a35ae22945f167c448f95d42af2abfe800) · [After (L319-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/216.js#L319-L332) · [Before (L11545-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/216.js#L11545-L11892)

```diff
-             var QM = [],
-               zM = -1,
-               LM = "",
-               mM = "",
-               HM = function() {
-                 OM(1, zM = -1), OM(2, LM = ""), OM(3, mM = "")
-               },
-               hM = function(MM) {
-                 return jM(void 0, void 0, void 0, ti().mark((function rM() {
-                   return ti().wrap((function(rM) {
-                     for (;;) switch (rM.prev = rM.next) {
-                       case 0:
-                         return rM.next = 2, PM.removeItem(MM);
-                       case 2:
-                       case "end":
-                         return rM.stop()
- ... (332 more removed lines; see GitHub link above)
+             return () => {
+               for (const UU of XU) window.clearTimeout(UU)
+             }
+           }), [UU]), XU
+         }(XU),
+         NU = (0, cU.useMemo)((() => ({
+           figures: AU,
+           shown: YU
+         })), [AU, YU]);
+       return (0, oU.b)(yU, EU, NU), (0, DU.jsx)("div", {
+         className: QU()("MobPreview", zU),
+         ref: yU
+       })
+     }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/217.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/217.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/217.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/217.js#L2)

```diff
- export const ids = [217, 218];
+ export const ids = [217];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/217.js#L4)

```diff
-   34868: (MM, rM, iM) => {
+   44200: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L6-L49` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/217.js#L6-L14) · [Before (L6-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/217.js#L6-L49)

```diff
-       reportJsMainStall: () => PM,
-       resetJsMainStallReport: () => nM
-     });
-     var OM = iM(34877),
-       SM = iM(3258),
-       jM = iM(34880);
-     let aM = !1;
- 
-     function PM(MM, rM, iM, PM) {
-       aM || (aM = !0, (0, SM.reportClientError)("wasm_load", (0, jM.d)(MM, rM, iM, PM, (0, jM.e)()), "JS-mainStall", !0, OM.CAPPED_COUNTS_VISIT_CAP))
-     }
- 
-     function nM() {
-       aM = !1
-     }
-   },
- ... (28 more removed lines; see GitHub link above)
+       MobPreview: () => YU
+     });
+     var cU = zU(61),
+       yU = zU(1106),
+       QU = zU.n(yU),
+       AU = zU(44209),
+       FU = zU(34900),
+       oU = zU(44212),
+       DU = zU(1305);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L52-L58` → after: `L17-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L17-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/217.js#L17-L34) · [Before (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/217.js#L52-L58)

```diff
-       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
-     }
-     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
- 
-     function aM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
-         context: SM
+       return FU.h.openMob(UU)
+     }
+     const YU = (0, cU.memo)((function(UU) {
+       let {
+         mobType: XU,
+         variation: zU = null,
+         animation: yU = oU.j,
+         className: FU
+       } = UU;
+       const YU = (0, cU.useRef)(null),
+         NU = (0, cU.useMemo)((() => ({
+           mobType: XU,
+           variation: zU,
+           animation: yU
+         })), [XU, zU, yU]);
+       return (0, AU.b)(YU, EU, NU), (0, DU.jsx)("div", {
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L60-L74` → after: `L36-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L36-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/217.js#L36-L129) · [Before (L60-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/217.js#L60-L74)

```diff
-     }
- 
-     function PM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
-         context: SM
-       })
-     }
- 
-     function nM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
-         context: SM
-       })
-     }
-   },
-   34885: (MM, rM, iM) => {
+     }))
+   },
+   44209: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => QU
+     });
+     var cU = zU(61),
+       yU = zU(3021);
+ 
+     function QU(UU, XU, zU) {
+       const QU = (0, cU.useRef)(null),
+         {
+           width: AU,
+           height: FU
+         } = (0, yU.d)(UU);
+       (0, cU.useEffect)((() => {
+ ... (78 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/217.js` (Changed code · before: `L76-L80` → after: `L131-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-37e9db75fcfcd3180a3ac38fab66d59855fbc980041e9a0843a58a09910299b5) · [After (L131-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/217.js#L131-L289) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/217.js#L76-L80)

```diff
-       return String(MM).replace(/\d/g, (MM => String.fromCharCode(97 + Number(MM))))
-     }
-     iM.d(rM, {
-       b: () => OM
-     })
+       var XU;
+       return {
+         ...AU.store,
+         yaw: AU.store.yaw + (null !== (XU = cU.d[UU].previewYaw) && void 0 !== XU ? XU : 0)
+       }
+     }
+     const QU = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       AU = {
+         player: QU,
+         store: {
+           ...QU,
+ ... (143 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/218.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/218.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82)

#### 1. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/218.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/218.js#L4)

```diff
-   34877: (MM, rM, iM) => {
+   37093: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/218.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/218.js#L6-L10)

```diff
-       CAPPED_COUNTS_VISIT_CAP: () => jM,
-       reportCappedWasmFailure: () => nM,
-       reportUncappedWasmFailure: () => PM,
-       reportWasmCrash: () => SM,
-       reportWasmFailure: () => aM
+       default: () => zX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L12-L21` → after: `L8-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L8-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/218.js#L8-L110) · [Before (L12-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/218.js#L12-L21)

```diff
-     var OM = iM(3258);
- 
-     function SM(MM) {
-       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
-     }
-     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
- 
-     function aM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
-         context: SM
+     var cU = zU(61);
+     const yU = "newPlayerDeal",
+       QU = 36e5,
+       AU = [4, 12, 20, 20, 30];
+     const FU = 12 * QU;
+ 
+     function oU(UU) {
+       return UU - FU
+     }
+ 
+     function DU(UU, XU, zU) {
+       const cU = oU(zU);
+       return XU >= cU && XU < zU && (null === UU.lastShownAt || UU.lastShownAt < cU)
+     }
+ 
+     function EU(UU, XU) {
+ ... (87 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L25-L27` → after: `L114-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L114-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/218.js#L114-L398) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/218.js#L25-L27)

```diff
-     function PM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
-         context: SM
+     function vU(UU) {
+       let {
+         arm: XU,
+         children: zU
+       } = UU;
+       return (0, cU.useEffect)((() => {
+         (0, CU.H)(!0)
+       }), []), (0, CU.N)(XU, "popup"), zU
+     }
+ 
+     function VU(UU) {
+       let XU = null;
+       BU.NotificationProvider.showCustomPopup({
+         body: zU => (0, HU.jsx)(vU, {
+           arm: UU.arm,
+           children: (0, HU.jsx)(MU, {
+ ... (269 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L31-L33` → after: `L402-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L402-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/218.js#L402-L446) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/218.js#L31-L33)

```diff
-     function nM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
-         context: SM
+     function aU(UU) {
+       let {
+         offered: XU,
+         needsLogin: zU,
+         busy: cU,
+         highlight: yU,
+         onBuy: oU
+       } = UU;
+       const {
+         t: DU
+       } = (0, AU.I)(), {
+         pack: pU
+       } = XU, aU = (0, YU.g)(XU.package);
+       return (0, IU.jsxs)("div", {
+         className: QU()("NewPlayerDealPack", {
+           NewPlayerDealPackHighlight: yU
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/218.js` (Changed code · before: `L36` → after: `L449-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d178424d59e218d905b05e97347e8375e6eb36d1ae0044f7408c2e90c8578b82) · [After (L449-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/218.js#L449-L610) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/218.js#L36)

```diff
-   }
+ 
+     function tU(UU) {
+       let {
+         view: XU,
+         needsLogin: zU,
+         busy: yU,
+         highlight: FU,
+         onBuy: oU
+       } = UU;
+       const {
+         t: DU
+       } = (0, AU.I)();
+       return (0, IU.jsxs)("div", {
+         className: QU()("NewPlayerDealPacks", XU.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
+         children: [XU.packs.map(((UU, XU) => (0, IU.jsxs)(cU.Fragment, {
+           children: [XU > 0 && (0, IU.jsx)("div", {
+ ... (146 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/219.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/219.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L2)

```diff
- export const ids = [218, 219];
+ export const ids = [219];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L4-L10` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L4-L7) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L4-L10)

```diff
-   34877: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       CAPPED_COUNTS_VISIT_CAP: () => jM,
-       reportCappedWasmFailure: () => nM,
-       reportUncappedWasmFailure: () => PM,
-       reportWasmCrash: () => SM,
-       reportWasmFailure: () => aM
+   34948: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => yU,
+       d: () => QU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L12-L23` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L9) · [Before (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L12-L23)

```diff
-     var OM = iM(3258);
- 
-     function SM(MM) {
-       (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
-     }
-     const jM = OM.MAX_ERRORS_PER_VISIT - 4;
- 
-     function aM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
-         context: SM
-       })
-     }
+     var cU = zU(3626);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L25-L28` → after: `L11-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L11-L22) · [Before (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L25-L28)

```diff
-     function PM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
-         context: SM
-       })
+     function yU() {
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const UU = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const XU = new BroadcastChannel(cU.n);
+         XU.postMessage({
+           stored: UU
+         }), XU.close()
+       } catch {
+         return null
+       }
+       return UU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L31-L34` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L25-L27) · [Before (L31-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L31-L34)

```diff
-     function nM(MM, rM, iM, SM) {
-       (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
-         context: SM
-       })
+     function QU(UU) {
+       const XU = "object" === typeof UU && null !== UU ? UU.stored : null;
+       return "string" === typeof XU ? XU : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L37` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L30) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L37)

```diff
-   37215: (MM, rM, iM) => {
+   34945: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L40-L42` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L33-L34) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L40-L42)

```diff
-       e: () => bM,
-       i: () => wM,
-       j: () => CM
+       g: () => yU,
+       i: () => QU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L44-L63` → after: `L36-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L36-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L36-L47) · [Before (L44-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L44-L63)

```diff
-     var OM = iM(37233),
-       SM = iM(3185),
-       jM = iM(37244),
-       aM = iM(3188),
-       PM = iM(34877),
-       nM = iM(3248),
-       QM = iM(3632),
-       zM = iM(3629),
-       LM = iM(37218),
-       mM = iM(3258),
-       HM = iM(37223),
-       hM = iM(37229),
-       JM = iM(4088);
-     let dM = !1;
-     const yM = 40;
-     var lM = iM(2562);
- ... (4 more removed lines; see GitHub link above)
+     var cU = zU(3626);
+     async function yU(UU, XU, zU) {
+       let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
+       const QU = AU(await UU.getItem(cU.i, XU));
+       if (null === QU || yU()) return null;
+       const FU = await UU.getItem(cU.j, XU);
+       return yU() ? null : (await async function(UU) {
+         await Promise.all([UU.removeItem(cU.i), UU.removeItem(cU.j)])
+       }(UU).catch(zU), {
+         pack: QU,
+         source: "string" === typeof FU ? FU : null
+       })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L66-L67` → after: `L50-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L50-L53) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L66-L67)

```diff
-     function GM() {
-       return (0, OM.h)()
+     function QU(UU) {
+       return (0, cU.w)() ? Promise.resolve(null) : yU(UU, !1, (UU => {
+         console.error("Error removing temporary texture pack: ", UU)
+       }), cU.w)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L70-L73` → after: `L56-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L56-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L56-L59) · [Before (L70-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L70-L73)

```diff
-     function CM() {
-       if (UM()) return "this browser has no WebAssembly";
-       const MM = (0, SM.t)();
-       return "compile" === MM || "instantiate" === MM ? `the core wasm didn't load here (${(0,SM.j)()})` : null
+     function AU(UU) {
+       if ("object" !== typeof UU || null === UU) return null;
+       const XU = UU.metaData;
+       return "object" !== typeof XU || null === XU || "string" !== typeof XU.id ? null : UU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L75-L76` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L61-L64) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L75-L76)

```diff
-     async function eM(MM) {
-       return await (0, jM.i)(jM.e, void 0, MM)
+   },
+   53774: (UU, XU, zU) => {
+     function cU(UU) {
+       return null === UU.gameSource ? "player" : "customGame"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L79-L82` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L74-L75) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L79-L82)

```diff
-     function bM() {
-       UM() || (0, lM.f)((() => {
-         eM()
-       }))
+     function QU(UU) {
+       return "" === UU || "string" === typeof UU && yU.test(UU)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L85-L116` → after: `L78-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L78-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L78-L89) · [Before (L85-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L85-L116)

```diff
-     function wM() {
-       if (UM()) return async () => ((0, nM.l)("unsupported", 0), tM("unsupported", "This browser has no WebAssembly"), !1);
-       const MM = {
-         reloadFailedDownload: !0
-       };
-       return eM(MM), async () => {
-         var rM;
-         const iM = performance.now();
-         await eM(MM);
-         const OM = (performance.now() - iM) / 1e3;
-         if ((0, SM.R)()) return (0, nM.l)("ready", OM), dM || (dM = !0, (0, SM.W)((() => {
-           if ("call" !== (0, SM.t)()) return;
-           const MM = (0, SM.p)(),
-             rM = (0, LM.k)(MM, SM.I, SM.ab),
-             iM = (0, SM.y)().buffer.byteLength,
-             OM = (0, LM.f)(rM.kind, rM.refusedBytes),
- ... (16 more removed lines; see GitHub link above)
+     function AU(UU) {
+       return "object" === typeof UU && null !== UU && ("earth" === UU.type || Object.entries(UU).every((UU => {
+         let [XU, zU] = UU;
+         return "type" === XU || QU(zU)
+       })))
+     }
+     const FU = /(?:src|image|image-set|cross-fade)\(/i,
+       oU = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
+       DU = /url\(/gi,
+       EU = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
+       YU = new Set([...EU.map((UU => new URL(UU).origin)), "https://fonts.gstatic.com"]),
+       NU = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L118-L119` → after: `L91-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L91-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L91-L110) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L118-L119)

```diff
-     function tM(MM, rM) {
-       (0, zM.i)(EM, `Bloxd wasm ${MM}, so the game can't start: ${rM}`, rM, MM)
+     function IU(UU) {
+       var XU, zU;
+       if (UU.includes("\\") || FU.test(UU)) return !0;
+       const cU = [...UU.matchAll(oU)];
+       return cU.length !== (null !== (XU = null === (zU = UU.match(DU)) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0) || !cU.every((UU => {
+         var XU, zU, cU;
+         let {
+           groups: yU
+         } = UU;
+         return function(UU) {
+           try {
+             return EU.every((XU => {
+               const zU = new URL(UU, XU);
+               return "data:" === zU.protocol || YU.has(zU.origin) || NU.has(zU.href)
+             }))
+           } catch {
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L134-L136` → after: `L114-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L114-L117) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L134-L136)

```diff
-       if (MM instanceof WebAssembly.RuntimeError) return !0;
-       const rM = MM instanceof Error ? MM.stack : void 0;
-       return "string" === typeof rM && jM.test(rM)
+       var XU, zU, cU, yU, FU, oU, DU;
+       const EU = [...Object.values(null !== (XU = UU.textureOverrides) && void 0 !== XU ? XU : {}), ...Object.values(null !== (zU = UU.modelOverrides) && void 0 !== zU ? zU : {})],
+         YU = [...Object.values(null !== (cU = null === (yU = UU.customCss) || void 0 === yU ? void 0 : yU.fontFaces) && void 0 !== cU ? cU : {}), ...Object.values(null !== (FU = null === (oU = UU.customCss) || void 0 === oU ? void 0 : oU.classStyles) && void 0 !== FU ? FU : {})]. … [truncated]
+       return !EU.every(QU) || !Object.values(null !== (DU = UU.skyBoxes) && void 0 !== DU ? DU : {}).every(AU) || YU.some((UU => "string" === typeof UU && IU(UU)))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L139-L146` → after: `L120-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L120-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L120-L137) · [Before (L139-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L139-L146)

```diff
-     function PM(MM, rM, iM) {
-       var SM;
-       const aM = MM instanceof Error ? MM.name : "thrown",
-         PM = (MM instanceof Error && null !== (SM = MM.stack) && void 0 !== SM ? SM : "").split("\n").filter((MM => jM.test(MM))).slice(0, 8).map((MM => MM.trim())),
-         nM = null === rM ? "wasm memory unknown" : `wasm memory ${Math.round(rM/2**20)} MB`,
-         QM = null === iM.panic ? "" : `, panic: ${(0,OM.i)(iM.panic)}`,
-         zM = `${aM}: ${MM instanceof Error?MM.message:String(MM)}`;
-       return `${(0,OM.o)(iM.kind,iM.refusedBytes)} ${zM} (${nM})${QM}${PM.length>0?` | ${PM.join(" < ")}`:""}`
+     function aU(UU, XU) {
+       if (null === UU || "player" === XU || !pU(UU)) return UU;
+       const zU = {
+         ...UU
+       };
+       return UU.textureOverrides && (zU.textureOverrides = gU(UU.textureOverrides, QU, "texture")), UU.modelOverrides && (zU.modelOverrides = gU(UU.modelOverrides, QU, "model")), UU.skyBoxes && (zU.skyBoxes = gU(UU.skyBoxes, AU, "sky")), UU.customCss && (zU.customCss = function(U … [truncated]
+         const XU = UU => gU(UU, (UU => "string" === typeof UU && !IU(UU)), "CSS"),
+           {
+             fontFaces: zU,
+             classStyles: cU
+           } = tU(UU) ? UU : {},
+           yU = {};
+         for (const [QU, AU] of Object.entries(tU(cU) ? cU : {})) yU[QU] = XU(AU);
+         return {
+           fontFaces: (Array.isArray(zU) ? zU : []).map(XU),
+           classStyles: yU
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L151-L159` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L141) · [Before (L151-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L151-L159)

```diff
-       var rM;
-       let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(MM instanceof Error) || !nM.test(MM.message)) return {};
-       if (!("detached" in iM)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, SM.V)(null === (rM = (0, SM.M)(iM, "detached")) || void 0 === rM ? void 0 : rM.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
+       return "object" === typeof UU && null !== UU && !Array.isArray(UU)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L163-L174` → after: `L144-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L144-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L144-L160) · [Before (L163-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L163-L174)

```diff
-     function LM(MM) {
-       let rM = "[object Object]";
-       try {
-         rM = String(MM)
-       } catch {}
-       if ("[object Object]" !== rM) return rM;
-       try {
-         var iM, OM;
-         return null !== (iM = null === (OM = JSON.stringify(MM)) || void 0 === OM ? void 0 : OM.slice(0, zM)) && void 0 !== iM ? iM : rM
-       } catch {
-         return rM
-       }
+     function gU(UU, XU, zU) {
+       const cU = Object.entries(tU(UU) ? UU : {}),
+         yU = cU.filter((UU => {
+           let [, zU] = UU;
+           return !XU(zU)
+         }));
+       if (yU.length > 0) {
+         const UU = yU.map((UU => {
+           let [XU] = UU;
+           return XU
+         }));
+         console.warn(`Ignoring a custom game texture pack's ${zU} files that name another site: ${UU.join(", ")}`)
+       }
+       return Object.fromEntries(cU.filter((UU => {
+         let [, zU] = UU;
+         return XU(zU)
+ ... (1 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L177-L273` → after: `L163-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L163-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L163-L167) · [Before (L177-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L177-L273)

```diff
-   37266: (MM, rM, iM) => {
-     MM.exports = iM.p + "static/media/bloxd_wasm_bg.5656165110e66edd3713.wasm"
-   },
-   37242: (MM, rM, iM) => {
-     MM.exports = iM.p + "static/media/bloxd_wasm_textures_bg.3e0bb5a054f9d6224a0d.wasm"
-   },
-   37253: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       Or: () => OM,
-       EnvelopeKind: () => SM,
-       NO: () => jM,
-       PhysicsEngine: () => aM,
-       TO: () => PM,
-       PS: () => nM,
-       ES: () => QM,
-       US: () => zM,
- ... (81 more removed lines; see GitHub link above)
+   53776: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => pU,
+       e: () => GU,
+       h: () => kU
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L276-L314` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L184-L185) · [Before (L276-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L276-L314)

```diff
-       __destroy_into_raw() {
-         const MM = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, kM.unregister(this), MM
-       }
-       free() {
-         const MM = this.__destroy_into_raw();
-         Er.Kc06(MM, 0)
-       }
-       qL(MM, rM) {
-         const iM = Er.IzVN(this.__wbg_ptr, MM, rM);
-         if (iM[2]) throw mr(iM[1]);
-         return iM[0] >>> 0
-       }
-       TL(MM) {
-         const rM = Er.qFXB(this.__wbg_ptr, MM);
-         if (rM[2]) throw mr(rM[1]);
- ... (23 more removed lines; see GitHub link above)
+       constructor(UU) {
+         this.host = UU, this.ready = void 0, this.state = IU, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L316-L318` → after: `L187-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L187-L190) · [Before (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L316-L318)

```diff
-       constructor() {
-         const MM = Er.qiDZ();
-         return this.__wbg_ptr = MM, kM.register(this, this.__wbg_ptr, this), this
+       readyWithin(UU) {
+         return Promise.race([this.ready, new Promise((XU => {
+           setTimeout(XU, UU)
+         }))])
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L320-L321` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L192-L193) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L320-L321)

```diff
-       Sm() {
-         return Er.C29Q(this.__wbg_ptr) >>> 0
+       current() {
+         return this.state
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L323-L324` → after: `L195-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L195-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L195-L199) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L323-L324)

```diff
-       jm() {
-         return Er.OOHq(this.__wbg_ptr) >>> 0
+       playerState() {
+         return {
+           pack: this.playerPack,
+           gameSource: null
+         }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L326-L327` → after: `L201-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L201-L204) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L326-L327)

```diff
-       am() {
-         return Er.Dq6j(this.__wbg_ptr) >>> 0
+       onPlayerPackChange(UU) {
+         return this.ownListeners.add(UU), () => {
+           this.ownListeners.delete(UU)
+         }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L329-L330` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L206-L207) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L329-L330)

```diff
-       IL(MM) {
-         return Er.xYZj(this.__wbg_ptr, MM) >>> 0
+       isUsingCustomGameTexturePack(UU) {
+         return (0, YU.h)(this.state, UU)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L332-L334` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L209-L210) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L332-L334)

```diff
-       reserve(MM, rM) {
-         const iM = Er.H6q9(this.__wbg_ptr, MM, rM);
-         if (iM[1]) throw mr(iM[0])
+       setGamePackConfirm(UU) {
+         this.confirmGamePack = UU
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L336-L339` → after: `L212-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L212-L217) · [Before (L336-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L336-L339)

```diff
-       Qm(MM, rM) {
-         const iM = nr(MM, Er.GR8u),
-           OM = Ur;
-         Er.osw8(this.__wbg_ptr, iM, OM, rM)
+       subscribe(UU) {
+         return this.listeners.set(UU, null), this.ready.then((() => {
+           this.deliver(UU)
+         })), () => {
+           this.listeners.delete(UU)
+         }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L341-L342` → after: `L219-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L219-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L219-L247) · [Before (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L341-L342)

```diff
-       text() {
-         let MM, rM;
+       async setPlayerPack(UU) {
+         const XU = tU(UU) ? null : UU;
+         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(XU), this.change({
+           pack: XU,
+           gameSource: null
+         }, !1);
+         const zU = await this.storePlayerPack(XU);
+         return zU && this.announce(), zU
+       }
+       async packForGame(UU, XU, zU) {
+         await this.readyWithin(Math.max(0, (null !== zU && void 0 !== zU ? zU : performance.now() + EU.c) - performance.now()));
+         const yU = ++this.picks,
+           QU = (0, cU.l)(UU) ? (0, cU.p)(UU) : null;
+         if (null === QU) return void this.usePlayerPack();
+         let AU;
+         const FU = function(UU) {
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L344-L345` → after: `L249-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L249-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L249-L255) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L344-L345)

```diff
-           const iM = Er.cdEF(this.__wbg_ptr);
-           return MM = iM[0], rM = iM[1], TM(iM[0], iM[1])
+           const UU = await Promise.race([XU.packKey(QU), FU.passed]);
+           if (null !== UU && this.onGamePack && this.state.gameSource === UU) return;
+           if (null !== UU && UU === this.skippedKey) return void(this.kp || this.picks !== yU || this.usePlayerPack());
+           AU = null === UU ? null : await Promise.race([aU(QU, UU, XU), FU.passed])
+         } catch (YU) {
+           const UU = !this.kp && this.picks === yU && this.holdsOtherGamePack(QU);
+           return this.host.warn(`the texture pack of ${QU} didn't load: ${UU?"the player's own shows":"the pack in play stays"}`, YU), void(UU && this.usePlayerPack())
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L347` → after: `L257-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L257-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L257-L279) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L347)

```diff
-           Er.SWNS(MM, rM, 1)
+           FU.clear()
+         }
+         if (this.kp || this.picks !== yU) return;
+         null !== AU && (0, DU.h)(AU.pack) && (this.host.warn(`the texture pack of ${QU} names files on other sites: the player's own shows`, null), AU = null);
+         const oU = null === AU || await this.confirmed(AU.pack, QU) ? null : AU.key;
+         this.kp || this.picks !== yU || (null !== oU && (this.skippedKey = oU, AU = null), null === AU ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
+           pack: AU.pack,
+           gameSource: AU.key
+         }, !0)))
+       }
+       endGamePack() {
+         this.picks++, this.usePlayerPack()
+       }
+       holdsOtherGamePack(UU) {
+         return this.onGamePack && "" !== this.state.gameSource && !this.isUsingCustomGameTexturePack(UU)
+       }
+ ... (7 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L350-L886` → after: `L282-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L282-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L282-L366) · [Before (L350-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L350-L886)

```diff
-     }
-     Symbol.dispose && (jM.prototype[Symbol.dispose] = jM.prototype.free);
-     class aM {
-       __destroy_into_raw() {
-         const MM = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, ZM.unregister(this), MM
-       }
-       free() {
-         const MM = this.__destroy_into_raw();
-         Er.gQek(MM, 0)
-       }
-       Lm(MM, rM) {
-         vM(rM, OM);
-         const iM = Er.RaGm(this.__wbg_ptr, MM, rM.__wbg_ptr);
-         if (iM[2]) throw mr(iM[1]);
-         return iM[0] >>> 0
- ... (521 more removed lines; see GitHub link above)
+       async readPlayerPack() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (null !== UU && this.ownAnnouncements.delete(UU)) return;
+         await this.ready;
+         const XU = this.ownChanges;
+         let zU;
+         try {
+           zU = await this.host.store.getItem(AU.e, !0)
+         } catch (yU) {
+           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", yU)
+         }
+         if (this.kp || this.ownChanges !== XU) return;
+         const cU = gU(zU);
+         (0, NU.d)(cU, this.playerPack) || (this.ownChanges++, this.setOwn(cU), this.onGamePack || this.change({
+           pack: cU,
+           gameSource: null
+ ... (69 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L888-L889` → after: `L368-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L368-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L368-L372) · [Before (L888-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L888-L889)

```diff
-       jh() {
-         return Er.we1W(this.__wbg_ptr) >>> 0
+       usePlayerPack() {
+         this.onGamePack && this.change({
+           pack: this.playerPack,
+           gameSource: null
+         }, !1)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L891-L909` → after: `L374-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L374-L379) · [Before (L891-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L891-L909)

```diff
-     }
- 
-     function mM() {
-       const MM = Er.XhAF();
-       var rM = BM(MM[0], MM[1]).slice();
-       return Er.SWNS(MM[0], 4 * MM[1], 4), rM
-     }
- 
-     function HM(MM, rM) {
-       let iM, OM;
-       try {
-         const SM = Pr(MM, Er.GR8u),
-           jM = Ur,
-           aM = Lr(rM, Er.GR8u, Er.idyS),
-           PM = Ur,
-           nM = Er.fWEg(SM, jM, aM, PM);
- ... (3 more removed lines; see GitHub link above)
+       async storePlayerPack(UU) {
+         try {
+           return null === UU ? (await this.host.store.removeItem(AU.e), !0) : await this.host.store.setItem(AU.e, UU)
+         } catch (XU) {
+           return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", XU), !1
+         }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L911-L994` → after: `L381-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L381-L385) · [Before (L911-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L911-L994)

```diff
-     }
- 
-     function hM() {
-       const MM = Er.aq0i();
-       var rM = BM(MM[0], MM[1]).slice();
-       return Er.SWNS(MM[0], 4 * MM[1], 4), rM
-     }
- 
-     function JM(MM) {
-       return 0 !== Er.f1AT(MM)
-     }
- 
-     function dM(MM, rM) {
-       const iM = Lr(MM, Er.GR8u, Er.idyS),
-         OM = Ur,
-         SM = Er.ef2O(iM, OM, rM);
- ... (68 more removed lines; see GitHub link above)
+       change(UU, XU) {
+         if (!this.kp) {
+           this.changes++, this.onGamePack = XU, this.state = UU;
+           for (const UU of [...this.listeners.keys()]) this.deliver(UU)
+         }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L996-L1023` → after: `L387-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L387-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L387-L393) · [Before (L996-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L996-L1023)

```diff
-     }
- 
-     function WM(MM) {
-       Er.GJHO(xM(MM))
-     }
- 
-     function sM() {
-       return {
-         __proto__: null,
-         chc3: {
-           __proto__: null,
-           BOhm: function(MM, rM) {
-             return xM(Error(TM(MM, rM)))
-           },
-           qvwV: function(MM, rM) {
-             throw new Error(TM(MM, rM))
- ... (12 more removed lines; see GitHub link above)
+       deliver(UU) {
+         if (!this.kp && this.listeners.has(UU) && this.listeners.get(UU) !== this.state) {
+           this.listeners.set(UU, this.state);
+           try {
+             UU(this.state)
+           } catch (XU) {
+             this.host.warn("a texture pack listener threw", XU)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1028-L1160` → after: `L398-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L398-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L398-L410) · [Before (L1028-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L1028-L1160)

```diff
-     Symbol.dispose && (LM.prototype[Symbol.dispose] = LM.prototype.free);
-     const DM = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((MM => Er.A1cn(MM, 1))),
-       kM = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((MM => Er.Kc06(MM, 1))),
-       ZM = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
-       } : new FinalizationRegistry((MM => Er.gQek(MM, 1))),
-       oM = "undefined" === typeof FinalizationRegistry ? {
-         register: () => {},
-         unregister: () => {}
- ... (117 more removed lines; see GitHub link above)
+     async function aU(UU, XU, zU) {
+       const cU = (0, oU.c)(await zU.fetchPack(XU));
+       if (null !== cU) return {
+         pack: cU,
+         key: XU
+       };
+       const yU = await zU.packKey(UU);
+       if (null === yU) return null;
+       const QU = (0, oU.c)(await zU.fetchPack(yU));
+       if (null === QU) throw new Error(`no texture pack at ${yU}`);
+       return {
+         pack: QU,
+         key: yU
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1166-L1189` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L415) · [Before (L1166-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L1166-L1189)

```diff
-       const rM = Or(MM);
-       return function(MM) {
-         MM < 1028 || (Sr[MM] = jr, jr = MM)
-       }(MM), rM
-     }
-     let Hr = new TextDecoder("utf-8", {
-       ignoreBOM: !0,
-       fatal: !0
-     });
-     Hr.decode();
-     const hr = 2146435072;
-     let Jr = 0;
-     const dr = new TextEncoder;
-     "encodeInto" in dr || (dr.encodeInto = function(MM, rM) {
-       const iM = dr.encode(MM);
-       return rM.set(iM), {
- ... (8 more removed lines; see GitHub link above)
+       return null === UU || UU.metaData.id === yU.b
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1193-L1199` → after: `L419-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L419-L420) · [Before (L1193-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L1193-L1199)

```diff
-       if (void 0 !== Er) return Er;
-       void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
-         module: MM
-       } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
-       const rM = sM();
-       MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
-       return Gr(new WebAssembly.Instance(MM, rM), MM)
+       const XU = (0, oU.c)(UU);
+       return tU(XU) ? null : XU
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1202-L1207` → after: `L423-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L423-L424) · [Before (L1202-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L1202-L1207)

```diff
-       if (void 0 !== Er) return Er;
-       void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
-         module_or_path: MM
-       } = MM) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
-       const rM = sM();
-       ("string" === typeof MM || "function" === typeof Request && MM instanceof Request || "function" === typeof URL && MM instanceof URL) && (MM = fetch(MM));
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QU.e;
+       if (null === UU.pack) return null;
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1209-L1237` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L426-L427) · [Before (L1209-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L1209-L1237)

```diff
-         instance: iM,
-         module: OM
-       } = await async function(MM, rM) {
-         if ("function" === typeof Response && MM instanceof Response) {
-           if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
-           if ("function" === typeof WebAssembly.instantiateStreaming) try {
-             return await WebAssembly.instantiateStreaming(MM, rM)
-           } catch (iM) {
-             if (! function(MM) {
-                 switch (MM) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
- ... (13 more removed lines; see GitHub link above)
+         packAssets: cU
+       } = await Promise.all([zU.e(221), zU.e(52)]).then((() => zU(64155)));
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/219.js` (Changed code · before: `L1265-L1271` → after: `L432-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-31fc917c23da80856baeba86ab5e3709f4dc6b007b50188f9799115e005d27f0) · [After (L432-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/219.js#L432-L436) · [Before (L1265-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/219.js#L1265-L1271)

```diff
-       return (0, SM.M)((() => MM), OM, aM)
-     }
-   },
-   37238: (MM, rM, iM) => {
-     function OM(MM, rM) {
-       return new Error(`${MM}: ${rM instanceof Error?`${rM.name}: ${rM.message}`:String(rM)}`, {
-         cause: rM
+       const XU = (0, AU.A)();
+       return null === XU ? () => {} : (XU.onmessage = XU => {
+         UU.readPlayerPack((0, FU.d)(XU.data))
+       }, () => {
+         XU.close()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/220.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/220.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557)

#### 1. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/220.js#L4)

```diff
-   34920: (MM, rM, iM) => {
+   34956: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L6-L8` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/220.js#L6-L9) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/220.js#L6-L8)

```diff
-       ALL_DEV_TOOLS: () => aM,
-       coreDevTools: () => QM,
-       devTools: () => nM
+       packDisplayName: () => aU,
+       packModelMessage: () => tU,
+       packModelSummary: () => kU,
+       refusedPackModels: () => gU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L10-L17` → after: `L11-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L11-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/220.js#L11-L152) · [Before (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/220.js#L10-L17)

```diff
-     var OM = iM(656),
-       SM = iM(1327),
-       jM = iM(34926);
-     const aM = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
-     async function PM() {
-       const {
-         noaDevTools: MM
-       } = await iM.e(260).then((() => iM(42174)));
+     var cU = zU(34959),
+       yU = zU(34968);
+     const QU = "DRACO",
+       AU = 0,
+       FU = 1,
+       oU = 0,
+       DU = 1,
+       EU = 32768;
+ 
+     function YU(UU) {
+       const XU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
+       let zU = 0;
+       const cU = () => {
+           if (zU >= UU.byteLength) throw new RangeError("past the stream");
+           return UU[zU++]
+         },
+ ... (126 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/220.js` (Changed code · before: `L20-L56` → after: `L155-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9c02ba0210ac88250571a560713157c6ed661f983e86a1a448ee373ab76ec557) · [After (L155-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/220.js#L155-L162) · [Before (L20-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/220.js#L20-L56)

```diff
-     const nM = new class {
-         constructor() {
-           this.loadHost = PM, this.tools = aM
-         }
-         setHost(MM) {
-           this.tools = null === MM ? aM : MM.tools, this.loadHost = null === MM ? PM : async () => MM
-         }
-         supports(MM) {
-           return this.tools.has(MM)
-         }
-         async downloadScene(MM, rM) {
-           const iM = await this.loadHost();
-           await iM.downloadScene(MM, rM)
-         }
-         async setAmbientLightIntensity(MM) {
-           const rM = await this.loadHost();
- ... (21 more removed lines; see GitHub link above)
+ 
+     function kU(UU, XU) {
+       const zU = Object.keys(XU);
+       if (0 === zU.length) return null;
+       if (1 === zU.length) return tU(UU, zU[0], XU[zU[0]]);
+       const cU = zU.map((UU => `"${UU}" ${XU[UU]}`)).join("; ");
+       return `Texture pack "${UU}": ${zU.length} models were not loaded (${cU}). The default models are used instead.`
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/221.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/221.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L4-L7` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L8) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L4-L7)

```diff
-   37320: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       isMoreOptionsInFooter: () => fM,
-       showOnboardingPopup: () => YM
+   34959: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => OU,
+       g: () => qU,
+       i: () => wU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L9-L43` → after: `L10-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L10-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L10-L48) · [Before (L9-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L9-L43)

```diff
-     var OM = iM(44),
-       SM = iM(1188),
-       jM = iM(1429),
-       aM = iM(1520),
-       PM = iM(1135),
-       nM = iM(4675),
-       QM = iM(1645),
-       zM = iM(1641),
-       LM = iM(2362),
-       mM = iM(1116),
-       HM = iM.n(mM),
-       hM = iM(1144),
-       JM = iM(37322),
-       dM = iM(2488),
-       yM = iM(3881),
-       lM = iM(1142),
- ... (19 more removed lines; see GitHub link above)
+     var cU = zU(34968);
+     const yU = {
+         fileBytes: 4194304,
+         vertices: 65535,
+         indices: 196608,
+         accessorElements: 196608,
+         primitives: 64,
+         nodes: 128,
+         meshes: 64,
+         materials: 8,
+         images: 8,
+         imageSide: 1024
+       },
+       QU = {
+         items: 1024,
+         perFile: 1024,
+ ... (23 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L45-L69` → after: `L50-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L50-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L50-L75) · [Before (L45-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L45-L69)

```diff
-         children: [OM("homePage:onboardingMoreOptions"), (0, UM.jsx)(EM.b, {
-           name: rM ? "caret-up" : "caret-down"
-         })]
-       })
-     }
-     const eM = Object.entries(QM.d).filter((MM => {
-       let [, rM] = MM;
-       return "default" === rM.cosmeticPack
-     }));
- 
-     function bM(MM) {
-       return zM.d.default.colourGroups[MM].colours.map(((MM, rM) => {
-         let {
-           rbg: iM,
-           order: OM
-         } = MM;
- ... (9 more removed lines; see GitHub link above)
+         TEXCOORD_1: YU,
+         TEXCOORD_2: YU,
+         TEXCOORD_3: YU,
+         TEXCOORD_4: YU,
+         TEXCOORD_5: YU
+       },
+       IU = new Set(cU.i.map((UU => {
+         let [XU] = UU;
+         return XU
+       }))),
+       pU = {
+         1: "line",
+         2: "line loop",
+         3: "line strip",
+         5: "triangle strip",
+         6: "triangle fan"
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L73-L75` → after: `L95-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L95-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L95-L116) · [Before (L73-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L73-L75)

```diff
-       if (void 0 === rM || "default" !== (null === (iM = (0, LM.m)(MM, rM)) || void 0 === iM ? void 0 : iM.cosmeticPack)) return null;
-       const OM = (0, LM.i)(rM);
-       return OM && [OM[0], Number(OM[1])]
+       return `${UU.normalized?"normalized ":""}${null!==(XU=cU.g[UU.componentType])&&void 0!==XU?XU:UU.componentType} ${UU.type}`
+     }
+ 
+     function PU(UU) {
+       const XU = XU => {
+         var zU;
+         return null !== (zU = UU[XU]) && void 0 !== zU ? zU : -1
+       };
+       return 255 === XU(0) && 216 === XU(1) ? "JPEG" : 82 === XU(0) && 73 === XU(1) && 87 === XU(8) && 69 === XU(9) ? "WebP" : 171 === XU(0) && 75 === XU(1) && 84 === XU(2) && 88 === XU(3) ? "KTX2" : "non-PNG"
+     }
+ 
+     function WU(UU) {
+       return UU.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((XU, zU) => UU[zU] === XU)) && 73 === UU[12] && 72 === UU[13] && 68 === UU[14] && 82 === UU[15]
+     }
+ 
+     function dU(UU) {
+ ... (6 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L79-L211` → after: `L120-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L120-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L120-L201) · [Before (L79-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L79-L211)

```diff
-       return `${MM}_${rM}_${iM}`
-     }
- 
-     function RM(MM) {
-       let {
-         label: rM,
-         colours: iM,
-         picked: OM,
-         onPick: jM
-       } = MM;
-       const {
-         t: aM
-       } = (0, SM.A)();
-       return (0, UM.jsxs)("div", {
-         className: "OnboardingColours",
-         children: [(0, UM.jsx)("div", {
- ... (117 more removed lines; see GitHub link above)
+       var cU, yU;
+       const QU = null === (cU = UU.bufferViews) || void 0 === cU ? void 0 : cU[zU];
+       if (!QU || !XU || 0 !== QU.buffer) return null;
+       const AU = null !== (yU = QU.byteOffset) && void 0 !== yU ? yU : 0;
+       return !GU(AU) || !GU(QU.byteLength) || AU + QU.byteLength > XU.byteLength ? null : XU.subarray(AU, AU + QU.byteLength)
+     }
+ 
+     function CU(UU, XU) {
+       var zU, yU, QU;
+       const AU = cU.o[XU.type],
+         FU = cU.d[XU.componentType];
+       if (!AU || !FU || !Number.isInteger(XU.count) || XU.count < 0) return !1;
+       if (void 0 === XU.bufferView) return !0;
+       const oU = null === (zU = UU.bufferViews) || void 0 === zU ? void 0 : zU[XU.bufferView],
+         DU = null !== (yU = XU.byteOffset) && void 0 !== yU ? yU : 0;
+       if (!oU || !GU(DU) || DU % FU !== 0) return !1;
+ ... (66 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L213-L234` → after: `L203-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L203-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L203-L328) · [Before (L213-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L213-L234)

```diff
-               })
-             }, iM)
-           }))
-         }), jM && (0, UM.jsx)(CM, {
-           open: rM,
-           onToggle: iM
-         }), rM && (0, UM.jsxs)("div", {
-           ref: pM,
-           id: GM,
-           className: "OnboardingMore",
-           children: [(0, UM.jsx)("div", {
-             className: "OnboardingMorePreview",
-             children: (0, UM.jsx)(dM.c, {
-               cosmetics: bM
-             })
-           }), (0, UM.jsxs)("div", {
- ... (6 more removed lines; see GitHub link above)
+               }
+               return !1
+             }(UU, sU)) return FU;
+           const nU = null === (zU = UU.asset) || void 0 === zU ? void 0 : zU.version;
+           if ("string" !== typeof nU || !/^2\.\d+/.test(nU)) return `uses glTF version ${null!==nU&&void 0!==nU?nU:"(none)"}`;
+           const mU = null === (AU = UU.asset) || void 0 === AU ? void 0 : AU.minVersion;
+           if (void 0 !== mU && "2.0" !== mU) return `uses glTF version ${mU}`;
+           for (const cU of null !== (lU = UU.extensionsRequired) && void 0 !== lU ? lU : []) {
+             var lU;
+             if (!DU.has(cU)) return `requires the glTF extension ${cU}`
+           }
+           if (null !== (YU = UU.animations) && void 0 !== YU && YU.length) return "has animations";
+           if (null !== (tU = UU.skins) && void 0 !== tU && tU.length) return "uses skins";
+           const xU = null !== (GU = UU.buffers) && void 0 !== GU ? GU : [];
+           for (const [cU, yU] of xU.entries()) {
+             if (void 0 !== yU.uri) return oU;
+ ... (110 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L236-L334` → after: `L330-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L330-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L330-L472) · [Before (L236-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L236-L334)

```diff
-                 (0, nM.i)("eyes"), LM.current.eyes = MM, sM({
-                   eyes: uM("eyes", null !== (rM = null === DM || void 0 === DM ? void 0 : DM[0]) && void 0 !== rM ? rM : "0", MM)
-                 })
-               }
-             }), (0, UM.jsx)(RM, {
-               label: aM("homePage:onboardingSkinColour"),
-               colours: tM,
-               picked: null === kM || void 0 === kM ? void 0 : kM[1],
-               onPick: MM => {
-                 (0, nM.i)("skin"), LM.current.skin = MM, sM({
-                   skin: uM("skin", "0", MM)
-                 })
-               }
-             })]
-           })]
-         })]
- ... (83 more removed lines; see GitHub link above)
+                 if (5123 !== UU.componentType && 5125 !== UU.componentType) return `stores indices as ${null!==(tX=cU.g[UU.componentType])&&void 0!==tX?tX:UU.componentType}`;
+                 if (!QU && void 0 === UU.bufferView) return FU;
+                 DU = UU.count
+               }
+               if (4 === yU && DU % 3 !== 0) return FU
+             }
+           }
+           let gX = 0,
+             kX = 0,
+             GX = 0;
+           for (let cU = 0; cU < TU.length; cU++) {
+             const UU = TU[cU].mesh;
+             if (void 0 !== UU && AX.has(cU))
+               for (const XU of hU[UU].primitives) GX++, gX += jU[XU.attributes.POSITION].count, void 0 !== XU.indices && (kX += jU[XU.indices].count)
+           }
+           const BX = null !== (vU = null !== (VU = gU(gX, yU.vertices, "vertices")) && void 0 !== VU ? VU : gU(kX, yU.indices, "indices")) && void 0 !== vU ? vU : gU(GX, yU.primitives, "primitives");
+ ... (127 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L336-L532` → after: `L474-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L474-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L474-L494) · [Before (L336-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L336-L532)

```diff
-         field: (0, UM.jsxs)("div", {
-           className: "OnboardingNameField",
-           ref: uM,
-           children: [(0, UM.jsx)("div", {
-             className: "OnboardingSubtitle",
-             children: rM("general:name")
-           }), null === bM && (0, UM.jsx)(kM.d, {}), null !== bM && (0, UM.jsxs)("div", {
-             className: "OnboardingNameRow",
-             children: [(0, UM.jsx)(ZM.b, {
-               className: "OnboardingNameInput",
-               ariaLabel: rM("general:name"),
-               maxLength: WM.g,
-               defaultValue: bM,
-               domRef: QM,
-               forcedText: hM ? bM : null,
-               onEnter: () => {
- ... (181 more removed lines; see GitHub link above)
+         json: FU,
+         bin: aU,
+         fileBytes: zU.byteLength
+       }
+     }
+ 
+     function YU(UU) {
+       const XU = UU.slice(UU.indexOf(",") + 1),
+         zU = Uint8Array.fromBase64;
+       if (zU) return zU(XU).buffer;
+       const cU = atob(XU),
+         yU = new Uint8Array(cU.length);
+       for (let QU = 0; QU < cU.length; QU++) yU[QU] = cU.charCodeAt(QU);
+       return yU.buffer
+     }
+     async function NU(UU) {
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L534-L604` → after: `L496-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L496-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/221.js#L496-L531) · [Before (L534-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/221.js#L534-L604)

```diff
-       offline: "homePage:onboardingNameNoAccount",
-       outdated: "general:updatedReloading",
-       busy: "homePage:changeNameTooFast",
-       server: "homePage:changeNameFailed"
-     };
- 
-     function QM(MM) {
-       return nM[MM]
-     }
- 
-     function zM(MM) {
-       return (0, PM.c)(MM) ? "outdated" : MM instanceof OM.e ? 429 === MM.httpCode ? "busy" : "server" : "offline"
-     }
- 
-     function LM(MM, rM, iM) {
-       return (0, aM.postJsonWithMetricsCookiesAndJsonResponse)(`${jM.clientSideServerUrls.indexUrl}${rM}`, iM, {
- ... (55 more removed lines; see GitHub link above)
+         5120: "i8",
+         5121: "u8",
+         5122: "i16",
+         5123: "u16",
+         5125: "u32",
+         5126: "f32"
+       },
+       pU = {
+         5120: 1,
+         5121: 1,
+         5122: 2,
+         5123: 2,
+         5125: 4,
+         5126: 4
+       },
+       aU = {
+ ... (20 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/222.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/222.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L4-L14` → after: `L4-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/222.js#L4-L15) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/222.js#L4-L14)

```diff
-   34959: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => BM,
-       h: () => er,
-       i: () => Cr,
-       l: () => wr,
-       p: () => Qr,
-       q: () => Lr,
-       t: () => Hr,
-       v: () => br,
-       y: () => mr
+   34975: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       animatedBlockTextures: () => oU,
+       armourAtlasUrl: () => AU,
+       averageColors: () => DU,
+       blockAtlasUrls: () => QU,
+       blockAtlasWidth: () => cU,
+       buildHash: () => YU,
+       builtTextureIndexFingerprint: () => EU,
+       imagesPerAtlas: () => yU,
+       outputHash: () => NU,
+       rotatedBlockTextures: () => FU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L16-L577` → after: `L17-L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L17-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/222.js#L17-L10909) · [Before (L16-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/222.js#L16-L577)

```diff
-     var OM = iM(243),
-       SM = iM(19),
-       jM = iM(83),
-       aM = iM(1717),
-       PM = iM(4809),
-       nM = iM(3230),
-       QM = iM(3235),
-       zM = iM(30);
-     const {
-       windows: LM,
-       target: mM,
-       stepDown: HM,
-       stepUp: hM,
-       noGain: JM
-     } = QM.c, dM = 1e3 / 60 * 1.08, yM = 1e3 / 55, lM = 1e3 / 45, EM = 1e3 / 30 * .92, UM = 1e3 / 30 * 1.08;
-     class GM {
- ... (546 more removed lines; see GitHub link above)
+     const cU = 8,
+       yU = [256, 256, 256, 256, 256, 256, 114],
+       QU = [zU(34981), zU(34988), zU(34993), zU(34995), zU(34999), zU(35001), zU(35010)],
+       AU = zU(35017),
+       FU = {
+         "alloy_kiln_top[rot[1": zU(35023),
+         "alloy_kiln_top[rot[2": zU(35028),
+         "alloy_kiln_top[rot[3": zU(35031),
+         "alloy_kiln_top[rot[4": zU(35033),
+         "auto_bench_top[rot[1": zU(35039),
+         "auto_bench_top[rot[2": zU(35041),
+         "auto_bench_top[rot[3": zU(35048),
+         "auto_bench_top[rot[4": zU(35054),
+         "belt_tunnel_exit_top[rot[1": zU(35061),
+         "belt_tunnel_exit_top[rot[2": zU(35070),
+         "belt_tunnel_exit_top[rot[3": zU(35076),
+ ... (10877 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/223.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/223.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L59` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L5) · [Before (L4-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L59)

```diff
-   37546: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => JM,
-       e: () => CM
-     });
-     iM(34999);
-     var OM = iM(44),
-       SM = iM(1516),
-       jM = iM(2039),
-       aM = iM(2084),
-       PM = iM(19),
-       nM = iM(2640),
-       QM = iM(37554),
-       zM = iM(37559),
-       LM = iM(34985),
-       mM = iM(34997),
- ... (40 more removed lines; see GitHub link above)
+   40549: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L61-L82` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L7) · [Before (L61-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L61-L82)

```diff
-       return jM.gameBridge.lookup("cameraZoom", null)
-     }
-     const yM = [{
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }, {
-         current: null
-       }],
-       lM = {
-         current: null
-       },
-       EM = {
-         current: null
- ... (6 more removed lines; see GitHub link above)
+       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L86` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L11) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L86)

```diff
-       return ((0, QM.g)(MM) - (0, QM.g)(0)) * window.innerHeight / 100
+       return UU instanceof Uint8Array && (!cU() || !Buffer.isBuffer(UU))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L90-L95` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L15) · [Before (L90-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L90-L95)

```diff
-       var rM;
-       if (null === (rM = EM.current) || void 0 === rM || rM.call(EM, eM(MM)), yM[0].current) {
-         const rM = `${(0,QM.g)(MM)}vh`;
-         yM[0].current.style.transform = `translateX(calc(0px - ${rM}))`, yM[1].current.style.transform = `translateX(calc(0px + ${rM}))`, yM[2].current.style.transform = `translateY(calc(0px - ${rM}))`, yM[3].current.style.transform = `translateY(calc(0px + ${rM}))`
-       }
-       lM.current && (lM.current.style.filter = `blur(${Math.round(MM/10)}px)`)
+       return UU instanceof ArrayBuffer
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L99-L191` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L19) · [Before (L99-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L99-L191)

```diff
-       let {
-         custom: rM,
-         touch: iM
-       } = MM;
-       const jM = (0, SM.e)("aimingOverlay", "none"),
-         aM = "1.2vh",
-         PM = "0.3vh";
-       (0, OM.useEffect)((() => {
-         UM && bM(UM)
-       }), []);
-       const nM = (0, OM.useRef)(null !== rM);
-       return (0, OM.useLayoutEffect)((() => {
-         var MM;
-         rM ? null === (MM = EM.current) || void 0 === MM || MM.call(EM, eM(GM)) : nM.current && bM(GM);
-         nM.current = null !== rM
-       }), [rM]), (0, hM.jsxs)(hM.Fragment, {
- ... (77 more removed lines; see GitHub link above)
+       return !!cU() && Buffer.isBuffer(UU)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L193-L268` → after: `L21-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L21-L35) · [Before (L193-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L193-L268)

```diff
- 
-     function nM(MM, rM) {
-       const iM = rM * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
-         OM = function(MM, rM) {
-           if (MM.lines) return PM(MM.lineThickness, rM) % 2;
-           if (MM.dot) return PM(MM.dotSize, rM) % 2;
-           return QM(MM, rM) % 2
-         }(MM, rM),
-         SM = zM(MM.lineThickness * iM, OM),
-         jM = PM(MM.lineLength, iM),
-         aM = Math.round(MM.gap * iM),
-         nM = MM.outline > 0 ? PM(MM.outline, iM) : 0,
-         mM = [];
-       if (MM.lines && (mM.push({
-           x: SM + aM,
-           y: 0,
- ... (60 more removed lines; see GitHub link above)
+     var FU = zU(40557).b,
+       oU = zU(40563).c,
+       DU = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
+     XU.e = function(UU) {
+       if (!yU(UU) && !QU(UU) && !AU(UU)) throw new TypeError(DU);
+       var XU = !1,
+         zU = !1;
+       yU(UU) ? XU = !0 : QU(UU) && (zU = !0, UU = new Uint8Array(UU));
+       var cU, FU, EU, YU = new oU(UU),
+         NU = YU.maxCompressedLength();
+       if (XU ? (cU = new Uint8Array(NU), EU = YU.compressToBuffer(cU)) : zU ? (cU = new ArrayBuffer(NU), FU = new Uint8Array(cU), EU = YU.compressToBuffer(FU)) : (cU = Buffer.alloc(NU), EU = YU.compressToBuffer(cU)), !cU.slice) {
+         var IU = new Uint8Array(Array.prototype.slice.call(cU, 0, EU));
+         if (XU) return IU;
+         if (zU) return IU.buffer;
+         throw new Error("Not implemented")
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L273` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L44) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L273)

```diff
-       return Math.round(MM.circleRadius * rM * 2 + PM(MM.circleThickness, rM))
+       return 506832829 * UU >>> XU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L277` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L48) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L277)

```diff
-       return Math.max(2 - rM, 2 * Math.round((MM - rM) / 2) + rM)
+       return UU[XU] + (UU[XU + 1] << 8) + (UU[XU + 2] << 16) + (UU[XU + 3] << 24)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L281-L341` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L52) · [Before (L281-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L281-L341)

```diff
-       const OM = 2 * iM >= rM - 1;
-       return {
-         x: MM,
-         y: MM,
-         size: rM,
-         border: Math.min(iM, Math.floor(rM / 2)),
-         filled: OM
-       }
-     }
-     var mM = iM(1303);
-     const HM = 1.4;
- 
-     function hM(MM, rM) {
-       return MM && rM ? `scale(${HM})` : "scale(1)"
-     }
- 
- ... (45 more removed lines; see GitHub link above)
+       return UU[XU] === UU[zU] && UU[XU + 1] === UU[zU + 1] && UU[XU + 2] === UU[zU + 2] && UU[XU + 3] === UU[zU + 3]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L344-L345` → after: `L55-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L55-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L55-L60) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L344-L345)

```diff
-     function EM(MM, rM) {
-       return MM / rM + "px"
+     function AU(UU, XU, zU, cU, yU) {
+       return zU <= 60 ? (cU[yU] = zU - 1 << 2, yU += 1) : zU < 256 ? (cU[yU] = 240, cU[yU + 1] = zU - 1, yU += 2) : (cU[yU] = 244, cU[yU + 1] = zU - 1 & 255, cU[yU + 2] = zU - 1 >>> 8, yU += 3),
+         function(UU, XU, zU, cU, yU) {
+           var QU;
+           for (QU = 0; QU < yU; QU++) zU[cU + QU] = UU[XU + QU]
+         }(UU, XU, cU, yU, zU), yU + zU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L349-L380` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L64) · [Before (L349-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L349-L380)

```diff
-       return {
-         ...eM(MM, rM, iM),
-         width: EM(MM.w, iM),
-         height: EM(MM.h, iM),
-         background: OM
-       }
-     }
- 
-     function GM(MM, rM, iM) {
-       return {
-         left: EM(MM.x, rM),
-         top: EM(MM.y, rM),
-         width: EM(MM.size, rM),
-         height: EM(MM.size, rM),
-         borderWidth: EM(MM.border, rM),
-         borderColor: iM,
- ... (16 more removed lines; see GitHub link above)
+       return cU < 12 && zU < 2048 ? (UU[XU] = 1 + (cU - 4 << 2) + (zU >>> 8 << 5), UU[XU + 1] = 255 & zU, XU + 2) : (UU[XU] = 2 + (cU - 1 << 2), UU[XU + 1] = 255 & zU, UU[XU + 2] = zU >>> 8, XU + 3)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L383-L388` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L67-L69) · [Before (L383-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L383-L388)

```diff
-     function bM(MM) {
-       return MM.arm ? {
-         "data-arm": MM.arm,
-         "data-x": MM.x,
-         "data-y": MM.y
-       } : {}
+     function oU(UU, XU, zU, cU) {
+       for (; cU >= 68;) XU = FU(UU, XU, zU, 64), cU -= 64;
+       return cU > 64 && (XU = FU(UU, XU, zU, 60), cU -= 60), FU(UU, XU, zU, cU)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L391-L433` → after: `L72-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L72-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L72-L88) · [Before (L391-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L391-L433)

```diff
-     function wM(MM) {
-       let {
-         settings: rM,
-         inPreview: iM,
-         inEditor: OM,
-         pressed: PM = !1,
-         spread: QM,
-         spreadRef: zM
-       } = MM;
-       const LM = (0, jM.useRef)(null),
-         {
-           box: hM,
-           dpr: JM
-         } = function(MM) {
-           const [rM, iM] = (0, jM.useState)({
-             box: {
- ... (27 more removed lines; see GitHub link above)
+     function DU(UU, XU, FU, DU, EU) {
+       for (var YU = 1; 1 << YU <= FU && YU <= 14;) YU += 1;
+       var NU = 32 - (YU -= 1);
+       "undefined" === typeof zU[YU] && (zU[YU] = new Uint16Array(1 << YU));
+       var IU, pU = zU[YU];
+       for (IU = 0; IU < pU.length; IU++) pU[IU] = 0;
+       var aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU = XU + FU,
+         LU = XU,
+         eU = XU,
+         CU = !0;
+       if (FU >= 15)
+         for (aU = dU - 15, gU = cU(yU(UU, XU += 1), NU); CU;) {
+           BU = 32, kU = XU;
+           do {
+             if (tU = gU, ZU = BU >>> 5, BU += 1, kU = (XU = kU) + ZU, XU > aU) {
+               CU = !1;
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L435-L563` → after: `L90-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L90-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L90-L105) · [Before (L435-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L435-L563)

```diff
-           }), [MM]), rM
-         }(LM),
-         dM = (0, jM.useRef)(JM);
-       dM.current = JM;
-       const yM = nM(rM, JM, PM && rM.growOnClick ? HM : 1),
-         lM = function(MM, rM, iM) {
-           const OM = Math.round((MM.left + MM.width / 2) * iM - rM / 2),
-             SM = Math.round((MM.top + MM.height / 2) * iM - rM / 2);
-           return {
-             x: OM / iM - MM.left,
-             y: SM / iM - MM.top
-           }
-         }(hM, yM.cell, JM),
-         EM = (0, aM.i)(rM.color),
-         CM = (0, aM.i)(rM.outlineColor),
-         wM = (0, jM.useRef)(0);
- ... (113 more removed lines; see GitHub link above)
+             gU = cU(yU(UU, kU), NU), GU = LU + pU[tU], pU[tU] = XU - LU
+           } while (!QU(UU, XU, GU));
+           if (!CU) break;
+           EU = AU(UU, eU, XU - eU, DU, EU);
+           do {
+             for (RU = XU, PU = 4; XU + PU < dU && UU[XU + PU] === UU[GU + PU];) PU += 1;
+             if (XU += PU, EU = oU(DU, EU, RU - GU, PU), eU = XU, XU >= aU) {
+               CU = !1;
+               break
+             }
+             pU[cU(yU(UU, XU - 1), NU)] = XU - 1 - LU, GU = LU + pU[WU = cU(yU(UU, XU), NU)], pU[WU] = XU - LU
+           } while (QU(UU, XU, GU));
+           if (!CU) break;
+           gU = cU(yU(UU, XU += 1), NU)
+         }
+       return eU < dU && (EU = AU(UU, eU, dU - eU, DU, EU)), EU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L567-L571` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L109) · [Before (L567-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L567-L571)

```diff
-       for (const rM of MM.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${QM}})`, "gi"))) {
-         const MM = yM(hM(rM[1], nM));
-         if (MM) return MM
-       }
-       return null
+       this.array = UU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L573-L592` → after: `L111-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L111-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L111-L124) · [Before (L573-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L573-L592)

```diff
- 
-     function yM(MM) {
-       if (!MM || MM.length !== nM || LM(MM.slice(0, -1)) !== MM[MM.length - 1]) return null;
-       const rM = MM[0],
-         iM = {
-           ...OM.e,
-           style: 1 & rM ? "shapes" : "classic"
-         };
-       jM.forEach(((MM, OM) => {
-         iM[MM] = 0 !== (rM & 1 << OM + 1)
-       }));
-       let SM = 1;
-       for (const OM of PM) iM[OM] = MM[SM] << 16 | MM[SM + 1] << 8 | MM[SM + 2], SM += 3;
-       for (const jM of aM) {
-         const {
-           min: rM,
- ... (4 more removed lines; see GitHub link above)
+     EU.prototype.maxCompressedLength = function() {
+       var UU = this.array.length;
+       return 32 + UU + Math.floor(UU / 6)
+     }, EU.prototype.compressToBuffer = function(UU) {
+       var XU, zU = this.array,
+         cU = zU.length,
+         yU = 0,
+         QU = 0;
+       for (QU = function(UU, XU, zU) {
+           do {
+             XU[zU] = 127 & UU, (UU >>>= 7) > 0 && (XU[zU] += 128), zU += 1
+           } while (UU > 0);
+           return zU
+         }(cU, UU, QU); yU < cU;) QU = DU(zU, yU, XU = Math.min(cU - yU, 65536), UU, QU), yU += XU;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L594` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L126) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L594)

```diff
-     }
+     }, XU.c = EU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L596-L683` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L128-L129) · [Before (L596-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L596-L683)

```diff
-   34989: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => OM,
-       e: () => SM,
-       f: () => jM,
-       i: () => QM,
-       j: () => nM,
-       m: () => zM,
-       p: () => PM,
-       t: () => aM
-     });
-     const OM = {
-         opacity: {
-           min: 5,
-           max: 100,
-           step: 1
- ... (72 more removed lines; see GitHub link above)
+   40557: (UU, XU) => {
+     var zU = [0, 255, 65535, 16777215, 4294967295];
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L685` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L131) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L685)

```diff
-     function jM(MM, rM) {
+     function cU(UU, XU, zU, cU, yU) {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L687-L708` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L133) · [Before (L687-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L687-L708)

```diff
-       const {
-         min: jM,
-         max: aM,
-         step: PM
-       } = OM[MM];
-       if (!Number.isFinite(rM)) return SM[MM];
-       const nM = (null !== (iM = String(PM).split(".")[1]) && void 0 !== iM ? iM : "").length,
-         QM = Number((Math.round(rM / PM) * PM).toFixed(nM));
-       return Math.min(aM, Math.max(jM, QM))
-     }
- 
-     function aM(MM, rM, iM) {
-       const OM = "number" === typeof iM ? jM(rM, iM) : iM;
-       return {
-         ...MM,
-         [rM]: OM
- ... (6 more removed lines; see GitHub link above)
+       for (QU = 0; QU < yU; QU++) zU[cU + QU] = UU[XU + QU]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L711-L716` → after: `L136-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L136-L138) · [Before (L711-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L711-L716)

```diff
-     function nM(MM) {
-       return PM(MM, SM)
-     }
- 
-     function QM(MM) {
-       return `#${MM.toString(16).padStart(6,"0")}`
+     function yU(UU, XU, zU, cU) {
+       var yU;
+       for (yU = 0; yU < cU; yU++) UU[XU + yU] = UU[XU - zU + yU]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L720-L721` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L142) · [Before (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L720-L721)

```diff
-       const rM = /^#?([0-9a-f]{6})$/i.exec(MM.trim());
-       return rM ? parseInt(rM[1], 16) : null
+       this.array = UU, this.pos = 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L724-L741` → after: `L178-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L178-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L178-L198) · [Before (L724-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L724-L741)

```diff
-   35006: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => LM,
-       f: () => mM
-     });
-     var OM = iM(44),
-       SM = iM(30),
-       jM = iM(35003),
-       aM = iM(34989);
-     const PM = "crosshairCode";
-     let nM = null;
-     const QM = new Set;
- 
-     function zM() {
-       if (null === nM) {
-         var MM;
- ... (2 more removed lines; see GitHub link above)
+   36961: UU => {
+     UU.exports = function(UU, XU, zU, cU) {
+       var yU = self || window;
+       try {
+         try {
+           var QU;
+           try {
+             QU = new yU.Blob([UU])
+           } catch (DU) {
+             (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
+           }
+           var AU = yU.URL || yU.webkitURL,
+             FU = AU.createObjectURL(QU),
+             oU = new yU[XU](FU, zU);
+           return AU.revokeObjectURL(FU), oU
+         } catch (DU) {
+ ... (5 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L764` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L202) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L764)

```diff
-   37722: (MM, rM, iM) => {
+   40705: (UU, XU, zU) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L770-L784` → after: `L211-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L211-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L211-L302) · [Before (L770-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L770-L784)

```diff
-     var OM = iM(625),
-       SM = iM(3063);
- 
-     function jM(MM) {
-       return MM === (0, SM.f)().IMM ? (0, SM.f)().eD : MM
-     }
- 
-     function aM(MM) {
-       return !(0, OM.J)(MM) && jM(MM) === (0, SM.f)().eD
-     }
-     const PM = "gravity";
- 
-     function nM() {
-       return (0, SM.f)().physics[PM][1]
-     }
+     var cU = zU(40714);
+     const yU = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
+       QU = [-1, 1, 2, 3, 4, 5, 6, 8],
+       AU = UU => {
+         if (!UU || UU.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
+         const XU = new cU.b(UU),
+           zU = FU(XU),
+           {
+             frequencyIndex: yU,
+             sampleRate: AU
+           } = oU(XU),
+           DU = XU.readBits(4);
+         let EU = null;
+         DU >= 1 && DU <= 7 && (EU = QU[DU]);
+         let YU = zU,
+           NU = !1,
+ ... (76 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L786` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L304) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L786)

```diff
-   37699: (MM, rM, iM) => {
+   40714: (UU, XU, zU) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L788` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L306) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L788)

```diff
-       e: () => eM
+       b: () => cU
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L823-L896` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L310) · [Before (L823-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L823-L896)

```diff
-         this._howl = void 0, this._volumeMultiplier = void 0, this._loadFailed = !1, this._unloaded = !1, this._volumeMultiplier = new nM.h, this._howl = (0, PM.countDecodesAs)(new jM.Howl({
-           src: [...(0, OM.r)(MM).src],
-           pool: 15
-         }), "sound"), this._howl.once("loaderror", (() => {
-           this._loadFailed = !0
-         }))
-       }
-       play() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const rM = this._howl.play(aM.e);
-         MM && this._howl.loop(!0, rM);
-         let iM = 1;
-         this._howl.volume(this._volumeMultiplier.getTotalMultipliedVal(), rM);
-         const OM = {
-           stop: () => {
-             var MM;
- ... (58 more removed lines; see GitHub link above)
+         this.bytes = UU, this.pos = 0
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L898-L904` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L312-L313) · [Before (L898-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L898-L904)

```diff
-       unloadOnceIdle() {
-         (0, aM.i)(this._howl, (() => {
-           this._unloaded = !0
-         }))
-       }
-       setGlobalVolume(MM) {
-         this._volumeMultiplier.setMultiplierType("globalVolume", MM), this._howl.volume(MM)
+       seekToByte(UU) {
+         this.pos = 8 * UU
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L906-L933` → after: `L315-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L315-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L315-L320) · [Before (L906-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L906-L933)

```diff
-       _setPannerAttr(MM) {
-         let {
-           id: rM,
-           coneInnerAngle: iM = 360,
-           coneOuterAngle: OM = 360,
-           coneOuterGain: SM = 0,
-           distanceModel: jM = "inverse",
-           maxDistance: aM = 1e3,
-           panningModel: PM = "HRTF",
-           refDistance: nM = HM.l,
-           rolloffFactor: QM = 1
-         } = MM;
-         const zM = this.liveHowl();
-         if (null === zM) return;
-         zM.pannerAttr({
-           coneOuterAngle: OM
- ... (12 more removed lines; see GitHub link above)
+       readBit() {
+         const UU = Math.floor(this.pos / 8),
+           XU = this.bytes[UU] ?? 0,
+           zU = 7 - (7 & this.pos),
+           cU = (XU & 1 << zU) >> zU;
+         return this.pos++, cU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L935-L941` → after: `L322-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L322-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L322-L326) · [Before (L935-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L935-L941)

```diff
-     }
-     const eM = new class {
-       constructor() {
-         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new dM.e, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, hM.i.subscribe("appManagerUpdated|soundVolume", (MM => {
-           const rM = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
-           for (const iM of rM) iM.setGlobalVolume(MM)
-         }))
+       readBits(UU) {
+         if (1 === UU) return this.readBit();
+         let XU = 0;
+         for (let zU = 0; zU < UU; zU++) XU <<= 1, XU |= this.readBit();
+         return XU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L943-L955` → after: `L328-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L328-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L328-L334) · [Before (L943-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L943-L955)

```diff
-       play(MM, rM) {
-         var iM;
-         let jM, aM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (iM = (0, mM.f)()) || void 0 === iM ? void 0 : iM.eD,
-           PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HM.i,
-           nM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HM.l,
-           zM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-         var hM;
-         (0, mM.f)() ? jM = !!Array.isArray(aM) || (0, QM.e)(aM) !== (null === (hM = (0, mM.f)()) || void 0 === hM ? void 0 : hM.eD): jM = !1;
-         const JM = (0, OM.j)(MM),
-           yM = this.loadSound(jM ? this.spatialSounds : this.stereoSounds, MM);
-         if (!jM) {
-           const MM = yM.play(zM);
-           return MM.setRelativeVolume(rM), MM
+       writeBits(UU, XU) {
+         const zU = this.pos + UU;
+         for (let cU = this.pos; cU < zU; cU++) {
+           const UU = Math.floor(cU / 8);
+           let yU = this.bytes[UU];
+           const QU = 7 - (7 & cU);
+           yU &= ~(1 << QU), yU |= (XU & 1 << zU - cU - 1) >> zU - cU - 1 << QU, this.bytes[UU] = yU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L957-L1010` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L336) · [Before (L957-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L957-L1010)

```diff
-         const lM = (0, mM.f)(),
-           EM = Array.isArray(aM) ? aM : lM.hU.XE(aM),
-           CM = lM.hU.XE(lM.eD);
-         if (!EM || LM().sqrDist(EM, CM) > PM * PM) return GM;
-         let eM;
-         if (!zM) {
-           if (!this.spatialVoices.admit({
-               group: UM.has(JM) ? null : (0, dM.i)(MM),
-               loudness: (0, dM.f)(rM, LM().RQ(EM, CM), nM),
-               startMs: performance.now(),
-               getDurationMs: () => {
-                 var MM, rM;
-                 return null !== (MM = null === (rM = eM) || void 0 === rM ? void 0 : rM.getDurationMs()) && void 0 !== MM ? MM : 0
-               },
-               isAlive: () => {
-                 var MM, rM;
- ... (38 more removed lines; see GitHub link above)
+         this.pos = zU
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1012-L1020` → after: `L338-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L338-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L338-L348) · [Before (L1012-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1012-L1020)

```diff
-       loadSound(MM, rM) {
-         const iM = MM[rM];
-         if (iM) return iM;
-         const SM = this.makeSound(MM, rM);
-         for (const aM of null !== (jM = (0, OM.q)(rM)) && void 0 !== jM ? jM : []) {
-           var jM;
-           MM[aM] || this.makeSound(MM, aM)
-         }
-         return SM
+       copyBits(UU, XU) {
+         let zU = 0;
+         for (; zU < UU - 7; zU += 8) this.writeBits(8, XU.readBits(8));
+         const cU = UU - zU;
+         cU > 0 && this.writeBits(cU, XU.readBits(cU))
+       }
+       readAlignedByte() {
+         if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
+         const UU = this.pos / 8,
+           XU = this.bytes[UU] ?? 0;
+         return this.pos += 8, XU
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1022-L1025` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L350-L351) · [Before (L1022-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1022-L1025)

```diff
-       makeSound(MM, rM) {
-         (0, EM.c)(rM);
-         const iM = new CM(rM);
-         return iM.setGlobalVolume(JM.d.get("soundVolume")), MM[rM] = iM, iM
+       skipBits(UU) {
+         this.pos += UU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1027-L1028` → after: `L353-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L353-L354) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1027-L1028)

```diff
-       freeSoundsAfterGame() {
-         this.idlePreloadGeneration++, this.idlePreloads.clear(), this.freeSounds()
+       getBitsLeft() {
+         return 8 * this.bytes.length - this.pos
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1030-L1032` → after: `L356-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L356-L358) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1030-L1032)

```diff
-       freeSounds() {
-         for (const MM of [this.stereoSounds, this.spatialSounds])
-           for (const [rM, iM] of Object.entries(MM)) !yM.b.has((0, OM.j)(rM)) && iM.loaded() && (iM.unloadOnceIdle(), delete MM[rM])
+       clone() {
+         const UU = new cU(this.bytes);
+         return UU.pos = this.pos, UU
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1036-L1040` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L362) · [Before (L1036-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1036-L1040)

```diff
-   37787: (MM, rM, iM) => {
-     function OM(MM, rM) {
-       var iM, OM, SM, jM, aM, PM, nM, QM;
-       return MM.name === rM.name && ((null === (iM = MM.attributes) || void 0 === iM || null === (OM = iM.customAttributes) || void 0 === OM ? void 0 : OM.stackKey) === (null === (SM = rM.attributes) || void 0 === SM || null === (jM = SM.customAttributes) || void 0 === jM ? void  … [truncated]
-     }
+   40725: (UU, XU, zU) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1042-L1051` → after: `L364-L7308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L364-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L364-L7308) · [Before (L1042-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1042-L1051)

```diff
-       d: () => OM
-     })
-   },
-   37858: (MM, rM, iM) => {
-     function OM(MM) {
-       return MM.includes("Leaf Bed")
-     }
- 
-     function SM(MM) {
-       return / Bed(?: Head)?(?:\||$)/.test(MM) && !OM(MM)
+       b: () => hU,
+       d: () => oU,
+       e: () => UX,
+       g: () => KU,
+       j: () => DU,
+       m: () => nU,
+       q: () => pX,
+       u: () => gU,
+       w: () => kU,
+       y: () => bU,
+       A: () => ZU,
+       B: () => iU,
+       E: () => jU,
+       K: () => sU,
+       H: () => GU,
+       M: () => eU,
+ ... (6929 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1053-L1055` → after: `L7310-L7362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR7310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L7310-L7362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L7310-L7362) · [Before (L1053-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1053-L1055)

```diff
- 
-     function jM(MM) {
-       return MM.includes(" Strongbed")
+     const pU = [],
+       aU = [];
+     let tU = 0;
+     const gU = (UU, XU) => {
+       for (const cU of aU)
+         if (cU.canvas.width === UU && cU.canvas.height === XU) return cU.age = tU++, {
+           canvas: cU.canvas,
+           context: cU.context,
+           isNew: !1
+         };
+       let zU;
+       if ("undefined" !== typeof OffscreenCanvas) zU = new OffscreenCanvas(UU, XU);
+       else {
+         if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideo … [truncated]
+         zU = document.createElement("canvas"), zU.width = UU, zU.height = XU
+       }
+ ... (37 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1057-L1059` → after: `L7364-L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR7364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L7364-L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L7364-L7913) · [Before (L1057-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1057-L1059)

```diff
- 
-     function aM(MM) {
-       return OM(MM) || SM(MM) || jM(MM)
+     const GU = UU => "undefined" !== typeof VideoFrame && UU instanceof VideoFrame,
+       BU = (UU, XU, zU) => {
+         const yU = Math.min(UU.left, XU),
+           QU = Math.min(UU.top, zU),
+           AU = Math.min(UU.width, XU - yU),
+           FU = Math.min(UU.height, zU - QU);
+         return (0, cU.J)(AU >= 0), (0, cU.J)(FU >= 0), {
+           left: yU,
+           top: QU,
+           width: AU,
+           height: FU
+         }
+       },
+       ZU = (UU, XU) => {
+         if (!UU || "object" !== typeof UU) throw new TypeError(XU + "crop, when provided, must be an object.");
+         if (!Number.isInteger(UU.left) || UU.left < 0) throw new TypeError(XU + "crop.left must be a non-negative integer.");
+ ... (534 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1062-L1063` → after: `L8073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR8073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L8073) · [Before (L1062-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1062-L1063)

```diff
-       e: () => aM,
-       g: () => OM,
+       d: () => AU,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1066` → after: `L8077-L8132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR8077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L8077-L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L8077-L8132) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1066)

```diff
-     })
+     });
+     const cU = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
+       yU = /^WEBVTT(.|\n)*?\n{2}/,
+       QU = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
+     class AU {
+       constructor(UU) {
+         this.preambleText = null, this.preambleEmitted = !1, this.options = UU
+       }
+       parse(UU) {
+         let XU;
+         if (UU = UU.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), cU.lastIndex = 0, !this.preambleText) {
+           if (!yU.test(UU)) throw new Error("WebVTT preamble incorrect.");
+           XU = cU.exec(UU);
+           const zU = UU.slice(0, XU?.index ?? UU.length).trimEnd();
+           if (!zU) throw new Error("No WebVTT preamble provided.");
+           this.preambleText = zU, XU && (UU = UU.slice(XU.index), cU.lastIndex = 0)
+ ... (40 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1068` → after: `L8134-L8135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR8134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L8134-L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L8134-L8135) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1068)

```diff
-   37855: (MM, rM, iM) => {
+   40747: (UU, XU, zU) => {
+     var cU;
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1070` → after: `L8137-L8140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR8137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L8137-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L8137-L8140) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1070)

```diff
-       c: () => QM
+       b: () => DU,
+       d: () => EU,
+       g: () => NU,
+       i: () => AU
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1072-L1085` → after: `L8142-L8214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR8142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L8142-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L8142-L8214) · [Before (L1072-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1072-L1085)

```diff
-     var OM = iM(37858),
-       SM = iM(9816);
-     const jM = [],
-       aM = [],
-       PM = [],
-       nM = [];
-     for (const zM of Object.keys(SM.p))(0, OM.g)(zM) ? jM.push(zM) : (0, OM.l)(zM) && aM.push(zM), (0, OM.h)(zM) && PM.push(zM), (zM.includes(" Bed Head") || zM.includes(" Strongbed Head")) && nM.push(zM);
-     const QM = {
-       leafBeds: jM,
-       woolBeds: aM,
-       strongBeds: PM,
-       beds: [...jM, ...aM, ...PM],
-       bedHeads: nM,
-       blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
+     var yU = zU(40752),
+       QU = zU(40687);
+     "undefined" !== typeof(cU || (cU = zU.t(yU, 2))) && (cU || (cU = zU.t(yU, 2)));
+     class AU extends QU.f {
+       constructor() {
+         super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
+       }
+       _setMonotonicity(UU) {
+         !1 !== this._monotonicity && (this._monotonicity = UU)
+       }
+       _dispatchWrite(UU, XU) {
+         this.onwrite?.(UU, XU), this._emit("write", {
+           start: UU,
+           end: XU
+         })
+       }
+ ... (57 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L1088` → after: `L8248-L8305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR8248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L8248-L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/223.js#L8248-L8305) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/223.js#L1088)

```diff
-   34999: () => {}
+   40742: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => yU
+     });
+     var cU = zU(40687);
+     class yU {
+       constructor(UU, XU) {
+         if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, UU._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
+         this.target = UU, UU._setMonotonicity(XU), UU._writerAcquired = !0
+       }
+       start() {
+         (0, cU.J)(!this.started), this.target._start(), this.started = !0
+       }
+       write(UU) {
+         (0, cU.J)(this.started && !this.finalized), this.maybeTrackWrites(UU), this.target._write(UU, this.pos), this.pos += UU.byteLength
+       }
+ ... (42 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/224.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/224.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L4)

```diff
-   35037: (MM, rM, iM) => {
+   44182: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L6-L29` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L6-L7) · [Before (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L6-L29)

```diff
-       MAX_BLOCK_ID: () => OM,
-       armourReductionOf: () => AM,
-       clipSizeOf: () => NM,
-       creativeAltNames: () => ar,
-       creativeCategoryOf: () => VM,
-       creativeItemCategories: () => PM,
-       creativeItemCategoryIcons: () => nM,
-       creativeItemIds: () => TM,
-       descriptionOf: () => oM,
-       displayNameOf: () => ZM,
-       dropsNothing: () => FM,
-       enchantmentPerksOf: () => KM,
-       gunTypeOf: () => vM,
-       harvestsNullLevelOf: () => BM,
-       isDevOnlyItem: () => ir,
-       itemIsDisabled: () => Sr,
- ... (8 more removed lines; see GitHub link above)
+       loadGlbAsset: () => dX,
+       loadGlbTree: () => WX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L31-L51` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L9-L11) · [Before (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L31-L51)

```diff
-     const OM = 8558,
-       SM = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
-       jM = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
-       aM = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
-       PM = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
-       nM = {
-         building: "Stone Bricks",
-         colours: "Magenta Wool",
-         nature: "Grass Block",
-         decoration: "Lantern",
-         utility: "Workbench",
-         tools: "Iron Pickaxe",
-         combat: "Iron Sword",
-         food: "Apple",
-         mobs: "Pig Spawn Orb",
-         materials: "Iron Bar",
- ... (5 more removed lines; see GitHub link above)
+     var cU = zU(38649),
+       yU = zU(142),
+       QU = zU(1211);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L54-L58` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L14) · [Before (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L54-L58)

```diff
-       let rM = null;
-       return iM => {
-         var OM;
-         return rM ??= (0, zM.y)(MM, 10096), null !== (OM = rM[iM]) && void 0 !== OM ? OM : 0
-       }
+       return (0, yU.isDiscordClient)() ? `https://${QU.d.discordDomain}/${UU.href}` : UU.href
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L61-L68` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L23-L24) · [Before (L61-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L61-L68)

```diff
-     function HM(MM, rM, iM) {
-       const OM = mM(MM);
-       let SM = null,
-         jM = [];
-       return MM => {
-         const aM = OM(MM);
-         if (0 !== aM) return null === SM && (SM = rM.split(zM.s), jM = new Array(SM.length)), jM[aM - 1] ??= iM(SM[aM - 1])
-       }
+     function EU() {
+       return DU()('(()=>{class UU extends Error{}function XU(XU,zU){const cU=XU._malloc(zU);if(0===cU)throw new UU(`Draco: the decoder\'s heap refused ${zU} bytes`);return cU}function zU(zU,cU,yU,QU){let AU=null,FU=null,oU=null;try{AU=new zU.Decoder,FU=new zU.DecoderBuffer,FU.Ini … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L71-L72` → after: `L43-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L43-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L43-L74) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L71-L72)

```diff
-     function hM(MM) {
-       return MM
+     function PU() {
+       if (!tU) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+       const {
+         scriptUrl: UU,
+         wasmBinaryUrl: XU
+       } = tU;
+       return gU ??= fetch(XU).then((UU => {
+         if (!UU.ok) throw new Error(`Draco: fetching ${XU} failed: ${UU.status}`);
+         return UU.arrayBuffer()
+       })), gU.catch((() => {
+         gU = null
+       })), ZU.workersStarted++, Promise.all([gU, (0, IU.j)()]).then((XU => {
+         let [zU] = XU;
+         return new Promise(((XU, cU) => {
+           const yU = new EU;
+           yU.onerror = UU => {
+ ... (16 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L76` → after: `L78-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L78-L80) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L76)

```diff
-       return MM === zM.g ? null : (0, zM.z)(MM)
+       const XU = kU.indexOf(UU); - 1 !== XU && kU.splice(XU, 1);
+       const zU = GU.shift();
+       zU && LU(zU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L84-L107` → after: `L83-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L83-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L83-L118) · [Before (L84-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L84-L107)

```diff
-     function GM(MM, rM, iM) {
-       UM !== (0, QM.h)() && (UM = (0, QM.h)(), lM.clear(), EM.clear());
-       let OM = MM.get(rM);
-       return void 0 === OM && (OM = iM(), void 0 !== OM && MM.set(rM, OM)), OM
-     }
-     const CM = HM("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$K&%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
-       eM = HM("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
-       bM = HM(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
-       wM = HM("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$FD$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
-       tM = HM(">W]+#%#)$)%9$", "none|sniper", hM),
-       gM = HM("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", hM),
-       uM = mM("]%LV+#c&M.$4C2$44$44$44$49$4/$4/$4/$"),
-       RM = mM("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
-       pM = HM("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($Z$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (MM => "" === MM ? null : Number(MM))),
-       WM = HM("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
-       sM = HM(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($W$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
- ... (8 more removed lines; see GitHub link above)
+     function dU(UU, XU) {
+       UU.busy = !0, UU.releaseTimer && (clearTimeout(UU.releaseTimer), UU.releaseTimer = null);
+       UU.worker.then((zU => {
+         const cU = BU++;
+         zU.onmessage = yU => {
+           let {
+             data: QU
+           } = yU;
+           if (("decoded" === QU.id || "decodeError" === QU.id) && QU.seq === cU) {
+             if (zU.onmessage = null, zU.onerror = null, "decoded" === QU.id) return ZU.decodes++, XU.resolve({
+               indices: QU.indices,
+               attributes: QU.attributes,
+               totalVertices: QU.totalVertices
+             }), void(() => {
+               const XU = GU.shift();
+               XU ? dU(UU, XU) : (UU.busy = !1, UU.releaseTimer = setTimeout((() => {
+ ... (20 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L112-L115` → after: `L123-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L123-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L123-L149) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L112-L115)

```diff
-       const rM = yM(MM);
-       return null !== rM ? rM : GM(EM, MM, (() => {
-         var rM;
-         return null !== (rM = (0, zM.D)(ZM(MM))) && void 0 !== rM ? rM : void 0
+       const XU = kU.find((UU => !UU.busy));
+       if (XU) dU(XU, UU);
+       else {
+         if (RU ??= (0, NU.d)() ? 1 : function(UU, XU) {
+             const zU = UU ? Math.max(1, Math.min(Math.floor(.5 * UU), 4)) : 1;
+             return XU ? Math.min(zU, pU) : zU
+           }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, YU.isMobile)()), kU.length < RU) {
+           const XU = {
+             worker: PU(),
+             busy: !0,
+             releaseTimer: null
+           };
+           return kU.push(XU), ZU.mostWorkers = Math.max(ZU.mostWorkers, kU.length), void dU(XU, UU)
+         }
+         GU.push(UU)
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L120` → after: `L165-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L165-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L165-L341) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L120)

```diff
-       return CM(MM)
+       const XU = (0, OU.i)(UU.byteLength);
+       if (XU) throw new qU.n(XU);
+       const {
+         json: zU,
+         bin: cU
+       } = (0, qU.w)(UU), yU = (0, OU.g)(zU, cU);
+       if (yU) throw new qU.n(yU);
+       try {
+         return function(UU, XU) {
+           var zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU;
+           const gU = new Map,
+             kU = zU => {
+               let cU = gU.get(zU);
+               if (!cU) {
+                 var yU;
+                 const QU = UU.bufferViews[zU],
+ ... (161 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L123-L124` → after: `L367-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L367-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L367-L370) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L123-L124)

```diff
-     function YM(MM) {
-       return eM(MM)
+     function iU(UU, XU) {
+       var zU;
+       const cU = null !== (zU = fU.get(UU)) && void 0 !== zU ? zU : XU(UU);
+       return fU.set(UU, cU), cU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L128` → after: `L374-L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L374-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L374-L378) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L128)

```diff
-       return bM(MM)
+       const XU = UU.bufferView,
+         zU = 5125 === UU.componentType ? Uint32Array : Uint16Array,
+         cU = XU.bytes.buffer,
+         yU = XU.bytes.byteOffset + (UU.byteOffset || 0);
+       return yU % zU.BYTES_PER_ELEMENT !== 0 ? new zU(cU.slice(yU, yU + UU.count * zU.BYTES_PER_ELEMENT), 0) : new zU(cU, yU, UU.count)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L131-L132` → after: `L381-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L381-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L381-L390) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L131-L132)

```diff
-     function AM(MM) {
-       return wM(MM)
+     function MU(UU, XU) {
+       if (UU.min && UU.max) return [new Float64Array(UU.min), new Float64Array(UU.max)];
+       const zU = XU.find((UU => {
+           let {
+             kind: XU
+           } = UU;
+           return "position" === XU
+         })),
+         cU = zU ? (0, wU.k)(zU, UU.count) : new Float32Array(0);
+       return (0, wU.u)(cU.length / 3, ((UU, XU) => cU[3 * UU + XU]))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L136` → after: `L394-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L394-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L394-L429) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L136)

```diff
-       return tM(MM)
+       const XU = UU.attributes.map((UU => {
+           var XU, zU;
+           let {
+             kind: cU,
+             accessor: yU
+           } = UU;
+           const {
+             bufferView: QU,
+             numComponents: AU
+           } = yU;
+           if (!QU) {
+             return {
+               kind: cU,
+               data: iU(yU, (() => new Float32Array(AU * yU.count))),
+               offset: 0,
+               stride: 4 * AU,
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L139-L140` → after: `L433-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L433-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L433-L453) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L139-L140)

```diff
-     function vM(MM) {
-       return gM(MM)
+     function sU(UU, XU) {
+       const zU = XU.attributes.map((UU => {
+         let {
+           kind: XU,
+           data: zU,
+           size: cU,
+           byteOffset: yU,
+           byteStride: QU,
+           normalized: AU
+         } = UU;
+         return {
+           kind: XU,
+           data: zU,
+           offset: yU,
+           stride: QU,
+           components: cU,
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L144` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L457-L458) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L144)

```diff
-       return 0 !== RM(MM)
+       const XU = UU.lastIndexOf("/");
+       return XU < 0 ? UU : UU.substring(XU + 1)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L148` → after: `L462-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L462-L463) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L148)

```diff
-       return pM(MM)
+       const XU = UU.lastIndexOf("/");
+       return XU < 0 ? "" : UU.substring(0, XU + 1)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L152` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L467) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L152)

```diff
-       return 0 !== uM(MM)
+       return UU.name || `node${UU.index}`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L156-L159` → after: `L490-L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L490-L492) · [Before (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L156-L159)

```diff
-       const rM = WM(MM);
-       if (void 0 === rM || rM.startsWith(zM.o)) return null === rM || void 0 === rM ? void 0 : rM.slice(zM.o.length);
-       const iM = (0, QM.g)(MM);
-       return void 0 === iM ? void 0 : `${iM}${zM.s}${rM}`
+       var XU, zU, cU, yU;
+       const QU = null !== (XU = UU.minFilter) && void 0 !== XU ? XU : 9987;
+       return 9729 === (null !== (zU = UU.magFilter) && void 0 !== zU ? zU : 9729) ? null !== (cU = JU[QU]) && void 0 !== cU ? cU : 3 : null !== (yU = jU[QU]) && void 0 !== yU ? yU : 4
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L164` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L501) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L164)

```diff
-       return null !== (rM = sM(MM)) && void 0 !== rM ? rM : LM
+       return null !== (XU = bU[null !== UU && void 0 !== UU ? UU : 10497]) && void 0 !== XU ? XU : 1
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L168-L176` → after: `L504-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L504-L505) · [Before (L168-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L168-L176)

```diff
-     function TM() {
-       if (null === qM) {
-         const MM = [],
-           rM = new zM.t(SM);
-         let iM = 0;
-         for (; !rM.done;) iM += (0, zM.I)(rM.next()), MM.push(iM);
-         qM = Object.freeze(MM)
-       }
-       return qM
+     function hU(UU) {
+       return 9728 === UU.minFilter || 9729 === UU.minFilter
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L180` → after: `L509-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L509-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L509-L515) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L180)

```diff
-       return DM(MM)
+       var XU, zU, cU;
+       const yU = Float64Array.from(null !== (XU = UU.scale) && void 0 !== XU ? XU : [1, 1, 1]);
+       return UU.hasCamera && (yU[0] = -1), {
+         translation: Float64Array.from(null !== (zU = UU.translation) && void 0 !== zU ? zU : [0, 0, 0]),
+         rotation: Float64Array.from(null !== (cU = UU.rotation) && void 0 !== cU ? cU : [0, 0, 0, 1]),
+         scale: yU
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L184-L185` → after: `L519-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L519-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L519-L654) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L184-L185)

```diff
-       var iM;
-       return 0 !== ((null !== (iM = kM(MM)) && void 0 !== iM ? iM : 0) & rM)
+       let {
+         translation: zU,
+         rotation: cU,
+         scale: yU
+       } = UU;
+       const QU = new Float32Array(16);
+       return (0, CU.e)(yU, 0, cU, 0, zU, 0, QU), XU && (0, CU.q)(QU, XU, 0, QU), QU
+     }
+     class zX {
+       constructor(UU, XU, zU, cU) {
+         this.model = UU, this.decode = XU, this.fileInfo = zU, this.uniqueRootUrl = cU, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
+         const yU = new Set,
+           QU = (XU, zU) => {
+             const cU = UU.nodes[XU];
+             if (this.parents.has(cU)) throw new qU.m(`/nodes/${XU}: Invalid recursive node hierarchy`);
+             this.parents.set(cU, zU);
+ ... (120 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L189` → after: `L704-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L704-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L704-L709) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L189)

```diff
-       return cM(MM, zM.d.OnlyInSearch)
+       if (null === UU || void 0 === UU || !UU.min || !UU.max) return null;
+       const [XU, zU, cU] = UU.min, [yU, QU, AU] = UU.max, {
+         BoundingInfo: FU,
+         Sp: oU
+       } = (0, yX.c)();
+       return new FU(new oU(XU, zU, cU), new oU(yU, QU, AU))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L193` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L713) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L193)

```diff
-       return cM(MM, zM.d.OnlyInCategory)
+       (0, QX.e)(UU) || (UU.geometry && UU.geometry.useBoundingInfoFromGeometry ? UU._updateBoundingInfo() : UU.refreshBoundingInfo(!0, !0))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L196-L197` → after: `L807-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L807-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L807-L811) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L196-L197)

```diff
-     function ir(MM) {
-       return cM(MM, zM.d.DevOnly)
+     function kX(UU, XU) {
+       UU.metadata = UU.metadata || {};
+       const zU = UU._internalMetadata = UU._internalMetadata || {},
+         cU = zU.oq = zU.oq || {};
+       (cU.pointers = cU.pointers || []).push(XU)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L200-L201` → after: `L814-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L814-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L814-L818) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L200-L201)

```diff
-     function Or(MM) {
-       return !cM(MM, zM.d.HiddenByDefault) && void 0
+     function GX(UU, XU) {
+       if (XU && Object.keys(XU).length > 0) {
+         const zU = UU.metadata = UU.metadata || {};
+         (zU.oq = zU.oq || {}).extras = XU
+       }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L204-L207` → after: `L821-L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L821-L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L821-L1029) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L204-L207)

```diff
-     function Sr(MM, rM, iM, OM) {
-       var SM;
-       const jM = null !== (SM = kM(MM)) && void 0 !== SM ? SM : 0;
-       return 0 !== (jM & zM.d.DisabledInPublicLobbies) && rM || 0 !== (jM & zM.d.DisabledInProduction) && !0 || !iM || !OM && 0 !== (jM & zM.d.DevOnly)
+     function BX(UU, XU) {
+       XU.position = UU.translation ? NX.Sp.FromArray(UU.translation) : NX.Sp.Zero(), XU.rotationQuaternion = UU.rotation ? NX.Quaternion.FromArray(UU.rotation) : NX.Quaternion.Identity(), XU.RY = UU.scale ? NX.Sp.FromArray(UU.scale) : NX.Sp.One()
+     }
+     class ZX {
+       constructor(UU, XU) {
+         if (this.sa = UU, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, XU) {
+           const XU = UU.qp(),
+             zU = UU.bS.add((() => {
+               this.dispose()
+             })),
+             cU = XU.wp.add((() => {
+               for (const UU of [...this.geometries, ...this.meshes, ...this.textures]) UU._rebuild()
+             }));
+           this.release = () => {
+             UU.bS.remove(zU), XU.wp.remove(cU)
+           }
+ ... (193 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L212-L223` → after: `L1033-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L1033-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/224.js#L1033-L1081) · [Before (L212-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/224.js#L212-L223)

```diff
-       if (null === jr) {
-         const MM = aM.split(zM.s),
-           rM = new Map,
-           iM = new zM.t(jM);
-         let OM = 0,
-           SM = 0;
-         for (; !iM.done;) {
-           OM += (0, zM.I)(iM.next());
-           const jM = iM.next();
-           rM.set(OM, Object.freeze(MM.slice(SM, SM + jM))), SM += jM
-         }
-         jr = rM
+       YX.g.dracoDecodes = ZU.decodes, YX.g.dracoWorkersStarted = ZU.workersStarted, YX.g.dracoMostWorkers = ZU.mostWorkers
+     }
+     async function WX(UU, XU, zU, yU, QU) {
+       try {
+         return await async function(UU, XU, zU, yU, QU, AU) {
+           var FU;
+           let oU;
+           const DU = null === (FU = (0, tX.e)()) || void 0 === FU ? void 0 : FU.WY,
+             EU = null !== DU && void 0 !== DU && DU.Ua && XU === DU.nS() ? DU : null,
+             YU = QU && !EU;
+           return await cX(UU, XU, zU, yU, cU.d, (UU => (oU = new ZX(XU, YU), new RX(UU, XU, oU, YU, new DX(XU, yU), AU, EU).load())), !QU), oU
+         }(UU, XU, zU, eU, yU, QU)
+       } finally {
+         PX()
+       }
+     }
+ ... (33 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/225.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/225.js#L4-L6)

```diff
-   44184: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => jM
+   44194: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => QU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/225.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/225.js#L8-L9)

```diff
-     var OM = iM(44),
-       SM = iM(3047);
+     var cU = zU(36961),
+       yU = zU.n(cU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L11-L26` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/225.js#L11-L12) · [Before (L11-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/225.js#L11-L26)

```diff
-     function jM(MM, rM, iM) {
-       const jM = (0, OM.useRef)(null),
-         {
-           width: aM,
-           height: PM
-         } = (0, SM.d)(MM);
-       (0, OM.useEffect)((() => {
-         const iM = rM(MM.current);
-         return jM.current = iM, () => {
-           iM.close(), jM.current = null
-         }
-       }), [MM, rM]), (0, OM.useEffect)((() => {
-         aM <= 0 || PM <= 0 || jM.current.resize(aM, PM)
-       }), [aM, PM]), (0, OM.useEffect)((() => {
-         jM.current.show(iM)
-       }), [iM])
+     function QU() {
+       return yU()('/*! For license information please see fecih8.procGen.worker.0c2636d3.worker.js.LICENSE.txt */\n(()=>{var UU={69:UU=>{const XU="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,zU=()=>XU.now(),cU=UU=>UU===1/0||(UU= … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L29-L76` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/225.js#L15-L24) · [Before (L29-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/225.js#L29-L76)

```diff
-   44187: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => mM,
-       c: () => LM,
-       d: () => nM
-     });
-     var OM = iM(38111),
-       SM = iM(39673);
- 
-     function jM(MM, rM) {
-       let [iM, OM, SM] = MM;
-       return [0, .5, 1].map((MM => ({
-         timeFraction: MM,
-         rotation: {
-           bS: "catmull-rom-spline",
-           point: [iM, OM, SM + (.5 === MM ? rM : 0)]
- ... (32 more removed lines; see GitHub link above)
+   36961: UU => {
+     UU.exports = function(UU, XU, zU, cU) {
+       var yU = self || window;
+       try {
+         try {
+           var QU;
+           try {
+             QU = new yU.Blob([UU])
+           } catch (DU) {
+             (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/226.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/226.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843)

#### 1. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/226.js#L4)

```diff
-   44180: (MM, rM, iM) => {
+   44220: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/226.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/226.js#L6)

```diff
-       MobPreview: () => LM
+       default: () => QU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L8-L14` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/226.js#L8-L9) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/226.js#L8-L14)

```diff
-     var OM = iM(44),
-       SM = iM(1116),
-       jM = iM.n(SM),
-       aM = iM(44184),
-       PM = iM(35051),
-       nM = iM(44187),
-       QM = iM(1303);
+     var cU = zU(36961),
+       yU = zU.n(cU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L16-L17` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/226.js#L11-L12) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/226.js#L16-L17)

```diff
-     function zM(MM) {
-       return PM.l.openMob(MM)
+     function QU() {
+       return yU()('(()=>{var UU={19:(UU,XU,zU)=>{UU.exports=zU.p+"static/media/bloxd_wasm_bg.0f9c10d0d401d306b045.wasm"},23:(UU,XU,zU)=>{UU.exports=zU.p+"static/media/bloxd_wasm_textures_bg.25fe60e88eb857bf3bdf.wasm"},13:(UU,XU,zU)=>{UU.exports=zU.p+"static/media/zstdDecodeWorker … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L38-L110` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/226.js#L15-L24) · [Before (L38-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/226.js#L38-L110)

```diff
-   44184: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => jM
-     });
-     var OM = iM(44),
-       SM = iM(3047);
- 
-     function jM(MM, rM, iM) {
-       const jM = (0, OM.useRef)(null),
-         {
-           width: aM,
-           height: PM
-         } = (0, SM.d)(MM);
-       (0, OM.useEffect)((() => {
-         const iM = rM(MM.current);
-         return jM.current = iM, () => {
- ... (57 more removed lines; see GitHub link above)
+   36961: UU => {
+     UU.exports = function(UU, XU, zU, cU) {
+       var yU = self || window;
+       try {
+         try {
+           var QU;
+           try {
+             QU = new yU.Blob([UU])
+           } catch (DU) {
+             (QU = new(yU.BlobBuilder || yU.WebKitBlobBuilder || yU.MozBlobBuilder || yU.MSBlobBuilder)).append(UU), QU = QU.getBlob()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/227.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/227.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L4-L17)

```diff
-   37331: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       default: () => ir
-     });
-     var OM = iM(44);
-     const SM = "newPlayerDeal",
-       jM = 36e5,
-       aM = [4, 12, 20, 20, 30];
-     const PM = 12 * jM;
- 
-     function nM(MM) {
-       return MM - PM
-     }
- 
+   41910: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L19-L20` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L6-L8) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L19-L20)

```diff
-       const OM = nM(iM);
-       return rM >= OM && rM < iM && (null === MM.lastShownAt || MM.lastShownAt < OM)
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(UU, XU).getContext("2d", zU);
+       const cU = document.createElement("canvas");
+       return cU.width = UU, cU.height = XU, cU.getContext("2d", zU)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L24-L31` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L12) · [Before (L24-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L24-L31)

```diff
-       const {
-         arrival: iM,
-         now: OM,
-         endsAt: SM,
-         playedOnDevice: PM
-       } = rM;
-       return !(OM >= SM || !PM) && (!(!QM(MM, OM, SM) && 0 !== MM.shownCount && null !== MM.lastShownAt) || "open" === iM && OM - MM.lastShownAt >= (nM = MM.shownCount, aM[Math.min(Math.max(nM, 1), aM.length) - 1] * jM));
-       var nM
+       return UU.getContext("2d", XU)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L33-L59` → after: `L14-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L14-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L14-L26) · [Before (L33-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L33-L59)

```diff
-     var LM = iM(313),
-       mM = iM(1548),
-       HM = iM(19),
-       hM = iM(2401),
-       JM = iM(3381),
-       dM = iM(3385),
-       yM = iM(2060),
-       lM = iM(1202),
-       EM = iM(1144);
-     var UM = iM(1429),
-       GM = iM(30),
-       CM = iM(673),
-       eM = iM(2741),
-       bM = iM(1438),
-       wM = iM(2743),
-       tM = iM(2397),
- ... (11 more removed lines; see GitHub link above)
+     zU.d(XU, {
+       c: () => yU,
+       d: () => cU
+     })
+   },
+   41867: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => FU
+     });
+     const cU = 1 << 20,
+       yU = 1 << 21,
+       QU = 1024,
+       AU = 2048;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L61-L111` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L28-L32) · [Before (L61-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L61-L111)

```diff
-     function YM(MM) {
-       let {
-         shownView: rM,
-         close: iM
-       } = MM;
-       const {
-         t: SM
-       } = (0, WM.A)(), jM = (0, uM.S)(), {
-         purchaseUnderWay: aM,
-         notice: PM,
-         needsLogin: nM,
-         buyPack: QM
-       } = (0, oM.e)("popup", ((MM, rM) => {
-         iM(!1), (0, pM.e)(MM, rM)
-       })), zM = null === jM;
-       (0, OM.useEffect)((() => {
- ... (35 more removed lines; see GitHub link above)
+     function FU(UU, XU, zU) {
+       const FU = UU + cU,
+         oU = XU + QU,
+         DU = zU + cU;
+       return FU < 0 || FU >= yU || DU < 0 || DU >= yU || oU < 0 || oU >= AU ? -1 : (FU * yU + DU) * AU + oU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L114-L121` → after: `L49-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L49-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L49-L180) · [Before (L114-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L114-L121)

```diff
-     function NM(MM) {
-       let {
-         arm: rM,
-         children: iM
-       } = MM;
-       return (0, OM.useEffect)((() => {
-         (0, uM.M)(!0)
-       }), []), (0, uM.U)(rM, "popup"), iM
+     function cU(UU) {}
+ 
+     function yU(UU) {}
+ 
+     function QU(UU) {}
+ 
+     function AU(UU) {}
+ 
+     function FU(UU) {}
+ 
+     function oU(UU, XU, zU) {}
+ 
+     function DU(UU) {}
+ 
+     function EU(UU) {}
+   },
+ ... (116 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L125-L142` → after: `L185-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L185-L188) · [Before (L125-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L125-L142)

```diff
-       let rM = null;
-       UM.NotificationProvider.showCustomPopup({
-         body: iM => (0, fM.jsx)(NM, {
-           arm: MM.arm,
-           children: (0, fM.jsx)(YM, {
-             shownView: MM,
-             close: MM => {
-               rM ??= MM, iM()
-             }
-           })
-         }),
-         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
-         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
-         disableExitButton: !0,
-         unlockPointerKey: "NewPlayerDealPopup"
-       }).getResult().then((iM => {
- ... (2 more removed lines; see GitHub link above)
+       if (0 === UU) return FU;
+       const XU = new QU.e(cU.Yb);
+       for (let zU = 0; zU < cU.Yb; zU++) XU[zU] = UU >>> 8 * zU & 255;
+       return XU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L144-L147` → after: `L190-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L190-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L190-L235) · [Before (L144-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L144-L147)

```diff
-     const xM = 2500,
-       vM = 6e4;
-     const FM = 500,
-       BM = 6e4;
+     class DU {
+       constructor(UU, XU) {
+         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new AU(XU, {
+           ptr: () => UU.AN(),
+           xY: () => UU.wAU(),
+           reserve: XU => UU.VAU(XU)
+         }), this.net = new AU(XU, {
+           ptr: () => UU.HAU(),
+           xY: () => UU.iAU(),
+           reserve: XU => UU.sAU(XU)
+         }), this.worker = new AU(XU, {
+           ptr: () => UU.YFU(),
+           xY: () => UU.EFU(),
+           reserve: XU => UU.nAU(XU)
+         }), this.cmd = new AU(XU, {
+           ptr: () => UU.BAU(),
+ ... (30 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L149-L155` → after: `L237-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L237-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L237-L249) · [Before (L149-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L149-L155)

```diff
-     function XM(MM) {
-       const rM = Date.now() + BM;
-       return new Promise((iM => {
-         const OM = () => {
-           MM() ? (0, wM.e)() || UM.NotificationProvider.hasPopup() || (0, bM.m)() || (0, uM.v)() || null !== HM.d.get("openEverythingMenuName") ? Date.now() > rM ? iM(!1) : setTimeout(OM, FM) : iM(!0) : iM(!1)
-         };
-         OM()
+     function SU(UU, XU) {
+       UU.forEachWorkerOut(((zU, yU, QU) => {
+         if ((0, cU.oe)(zU)) try {
+           var AU;
+           null === (AU = XU.worldgen) || void 0 === AU || AU.take(zU, QU)
+         } catch (oU) {
+           UU.crash(RU, oU)
+         } else try {
+           var FU;
+           null === (FU = XU.mesh) || void 0 === FU || FU.take(zU, yU, QU)
+         } catch (oU) {
+           UU.crash(OU, oU)
+         }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L158-L160` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L252) · [Before (L158-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L158-L160)

```diff
-     const IM = "newPlayerDealPointerDeferred_";
-     let KM = !1,
-       qM = null;
+     const rU = 1048576;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L163-L164` → after: `L255-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L255-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L255-L261) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L163-L164)

```diff
-       var iM;
-       return (null === (iM = qM) || void 0 === iM ? void 0 : iM.accountId) === rM && qM.shownCount === MM.shownCount
+       let zU = !1;
+       const cU = () => {
+         zU = !1, XU()
+       };
+       return () => {
+         !zU && UU.cursor >= rU && (zU = !0, queueMicrotask(cU))
+       }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L167-L197` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L265-L266) · [Before (L167-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L167-L197)

```diff
-     function VM(MM, rM, iM) {
-       return !!TM(rM, iM) && (qM = null, (0, uM.A)(iM), AM(MM), !0)
-     }
-     async function cM(MM, rM, iM, OM) {
-       if (KM) return !1;
-       let SM;
-       KM = !0;
-       try {
-         SM = await async function(MM) {
-           const {
-             newPlayerDeal: rM,
-             counted: iM
-           } = await (0, EM.postJsonWithMetricsCookiesAndJsonResponse)(`${lM.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
-             shownCount: MM
-           }, {
-             retries: 1
- ... (15 more removed lines; see GitHub link above)
+     function iU(UU) {
+       return wU.has(UU.site) ? UU.error instanceof WebAssembly.RuntimeError || (0, yU.l)(UU.error) : !fU.has(UU.site) && UU.error instanceof Error
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L199` → after: `L268-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L268-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L268-L273) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L199)

```diff
-     let Mr = null;
+     const HU = "events",
+       MU = [],
+       vU = "debugLog",
+       VU = "terrainTextures",
+       sU = "sunShadowTextures",
+       nU = new TextDecoder;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L201-L202` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L275) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L201-L202)

```diff
-     function rr(MM, rM, iM, SM, jM) {
-       var aM;
+     function mU(UU, XU) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L204-L232` → after: `L277-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L277-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L277-L315) · [Before (L204-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L204-L232)

```diff
-         gameState: PM
-       } = (0, HM.m)(["gameState"]), mM = "landingPage" === PM, {
-         pointing: hM
-       } = (0, eM.f)(), JM = (0, OM.useRef)(hM);
-       JM.current = hM;
-       const dM = (0, OM.useRef)(MM);
-       dM.current = MM;
-       const lM = (0, OM.useRef)(rM);
-       lM.current = rM;
-       const EM = (0, OM.useRef)(iM);
-       EM.current = iM;
-       const [UM, bM] = (0, OM.useState)(null), wM = (0, OM.useRef)(0), tM = (0, OM.useRef)(0), gM = (0, OM.useRef)(!1), uM = (0, OM.useCallback)((MM => {
-         "open" === function(MM) {
-           const rM = MM ? (0, CM.e)() : (0, CM.peekVisitSessionId)(),
-             iM = null !== rM && rM === Mr ? "return" : "open";
-           return Mr = rM, iM
- ... (13 more removed lines; see GitHub link above)
+         site: zU,
+         error: yU,
+         header: QU
+       } = UU, AU = QU ? (0, cU.ke)(QU.lastError) : "noFrame", FU = `CORE-${zU===aU?AU:zU}`, oU = null === yU || void 0 === yU ? "" : ` ${(0,EU.l)(yU)}`, DU = {
+         site: zU,
+         wasmBuild: XU.wasm,
+         clientVersion: XU.client
+       };
+       return QU && (DU.status = String(QU.status), DU.lastError = AU, DU.lastErrorCode = String(QU.lastError), DU.lastErrorDetail = String(QU.lastErrorDetail), DU.errorCount = String(QU.errorCount), DU.frameIndex = String(QU.frameIndex), DU.tickIndex = String(QU.tickIndex)), {
+         code: FU,
+         message: `core ${zU}, last error ${AU};${oU}`,
+         details: DU
+       }
+     }
+     class lU {
+       constructor(UU, XU, zU) {
+ ... (23 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L234-L244` → after: `L317-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L317-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L317-L352) · [Before (L234-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L234-L244)

```diff
-       }), [mM, uM]);
-       const RM = null !== (aM = null === MM || void 0 === MM ? void 0 : MM.endsAt) && void 0 !== aM ? aM : null;
-       (0, OM.useEffect)((() => {
-         if (!mM || null === RM) return;
-         const MM = nM(RM) - Date.now();
-         if (MM <= 0 || MM > yM.c) return;
-         const rM = setTimeout((() => {
-           uM(!1)
-         }), MM);
-         return () => {
-           clearTimeout(rM)
+       }
+       get isStopped() {
+         return this.stopped
+       }
+       frame(UU, XU) {
+         var zU;
+         let QU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this.stopped) return !1;
+         if (!this.writePendingInput()) return !1;
+         const {
+           input: AU,
+           net: FU,
+           worker: oU,
+           cmd: DU
+         } = this.rings, EU = FU.cursor, YU = XU && !this.drawsHeld;
+         let tU = cU.L.Fatal;
+ ... (20 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L246-L275` → after: `L354-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L354-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L354-L390) · [Before (L246-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L246-L275)

```diff
-       }), [mM, RM, uM]);
-       const pM = null !== MM && null !== SM && null === jM;
-       (0, OM.useEffect)((() => {
-         if (null === UM || !pM || tM.current >= UM.seq) return;
-         const MM = () => wM.current === UM.seq && "landingPage" === HM.d.get("gameState"),
-           rM = setTimeout((() => {
-             const rM = dM.current,
-               iM = lM.current;
-             if (null === rM || null === iM || !MM()) return;
-             tM.current = UM.seq;
-             const OM = Date.now(),
-               jM = TM(iM, SM);
-             if (!(jM || zM(iM, {
-                 arrival: UM.kind,
-                 now: OM,
-                 endsAt: rM.endsAt,
- ... (14 more removed lines; see GitHub link above)
+         ZU ??= null === (zU = this.gameHost) || void 0 === zU ? void 0 : zU.takeFault();
+         const LU = this.stopped || null !== RU || void 0 !== ZU;
+         this.rings.reset(LU ? AU.cursor : gU, LU ? oU.cursor : GU, LU ? DU.cursor : BU);
+         const eU = null === RU && void 0 === ZU,
+           CU = eU && !this.stopped && tU === cU.L.Fatal && 0 === this.core.CI(),
+           wU = eU && !CU ? this.headerView() : null,
+           qU = CU ? {
+             ...null !== (OU = this.lastHeader) && void 0 !== OU ? OU : (0, cU.Ee)(new Uint32Array(cU.fb)),
+             status: cU.L.Fatal,
+             lastError: cU.K.CoreBusy,
+             lastErrorDetail: 0
+           } : null === wU ? null : (0, cU.Ee)(wU);
+         var OU;
+         null !== qU && (this.lastHeader = qU);
+         const SU = null !== qU && tU !== cU.L.Fatal,
+           rU = SU && null !== wU ? wU[cU.jb.NetInKept] : 0,
+ ... (21 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L277-L303` → after: `L392-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L392-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L392-L410) · [Before (L277-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L277-L303)

```diff
-       }), [UM, pM, SM])
-     }
- 
-     function ir() {
-       const {
-         userContext: MM
-       } = (0, gM.b)(), rM = (0, hM.usePurchasesAllowed)(), [iM, jM] = (0, OM.useState)(RM.m);
-       (0, OM.useEffect)((() => (jM((0, RM.m)()), (0, RM.q)(jM))), []);
-       const aM = (0, uM.d)(MM);
-       ! function(MM, rM, iM) {
-         const [jM, aM] = (0, OM.useState)(0);
-         (0, OM.useEffect)((() => {
-           if (!rM || null === MM) return;
-           if (null !== iM) return void(0, uM.J)(MM, (0, RM.h)());
-           if (null !== (0, uM.j)(MM)) return;
-           let OM, jM = !1;
- ... (11 more removed lines; see GitHub link above)
+         for (const cU of HU) {
+           if (this.stopped) return !1;
+           try {
+             var VU, sU;
+             null === (VU = (sU = this.handlers).onNetEvent) || void 0 === VU || VU.call(sU, cU)
+           } catch (nU) {
+             return this.crashOn(WU, nU), !1
+           }
+         }
+         return this.handEnvEvents()
+       }
+       handEnvEvents() {
+         for (const QU of this.graceEvents) {
+           if (this.stopped) return !1;
+           try {
+             var UU, XU;
+ ... (3 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L305-L363` → after: `L412-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L412-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L412-L447) · [Before (L305-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L305-L363)

```diff
-         }), [MM, rM, iM, jM])
-       }(aM, null !== (0, uM.n)(MM) && (rM || null !== iM), iM);
-       const PM = (0, uM.S)();
-       return rr(PM, (0, uM.n)(MM), MM, aM, iM),
-         function() {
-           const {
-             userContext: MM
-           } = (0, gM.b)(), {
-             gameState: rM
-           } = (0, HM.m)(["gameState"]);
-           (0, OM.useEffect)((() => {
-             if ("landingPage" !== rM || !MM.isLoggedIn() && !(0, hM.guestsMayBuy)()) return;
-             const iM = (0, uM.g)(MM),
-               OM = (0, tM.u)((MM => iM.includes(MM.item)));
-             null !== OM && ((0, mM.reportAnalyticsClick)({
-               id: "store.login_resume",
- ... (43 more removed lines; see GitHub link above)
+         }
+         for (const QU of this.envEvents) {
+           if (this.stopped) return !1;
+           try {
+             var zU, cU;
+             null === (zU = (cU = this.handlers).onEnvEvent) || void 0 === zU || zU.call(cU, QU)
+           } catch (yU) {
+             return this.crashOn(dU, yU), !1
+           }
+         }
+         return !this.stopped
+       }
+       setEventWalker(UU) {
+         this.eventWalker = UU
+       }
+       writePendingInput() {
+ ... (20 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L365-L366` → after: `L449-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L449-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L449-L788) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L365-L366)

```diff
-           }), [iM, MM, rM])
-         }(PM, aM, iM), null
+             QU++
+           }
+           QU > 0 && this.unsentOptions.splice(0, QU)
+         } catch (XU) {
+           return this.crash(gU, XU), !1
+         }
+         return !0
+       }
+       setHoldDraws(UU) {
+         this.drawsHeld = UU
+       }
+       setUiPrefs(UU) {
+         this.unsentUiPrefs = {
+           ...UU
+         }
+       }
+ ... (324 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L369` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L791) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L369)

```diff
-   35070: (MM, rM, iM) => {
+   41871: (UU, XU, zU) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L372` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L794) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L372)

```diff
-       i: () => dM
+       g: () => QU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L374-L385` → after: `L796-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L796-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L796-L797) · [Before (L374-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L374-L385)

```diff
-     iM(35072);
-     var OM = iM(44),
-       SM = iM(1116),
-       jM = iM.n(SM),
-       aM = iM(1188),
-       PM = iM(1520),
-       nM = iM(2796),
-       QM = iM(1398),
-       zM = iM(2382),
-       LM = iM(3449),
-       mM = iM(2412),
-       HM = iM(1303);
+     var cU = zU(5179);
+     let yU = null;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L388-L399` → after: `L800-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L800-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L800-L807) · [Before (L388-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L388-L399)

```diff
-       let {
-         endsAt: rM,
-         className: iM
-       } = MM;
-       return (0, HM.jsxs)("span", {
-         className: jM()("NewPlayerDealClock", iM),
-         children: [(0, HM.jsx)(QM.b, {
-           name: "hourglass"
-         }), (0, HM.jsx)(nM.f, {
-           toTime: rM
-         })]
-       })
+       yU = {
+         scanned: !1
+       };
+       try {
+         return UU()
+       } finally {
+         yU = null
+       }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L402-L447` → after: `L810-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L810-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L810-L833) · [Before (L402-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L402-L447)

```diff
-     function JM(MM) {
-       let {
-         offered: rM,
-         needsLogin: iM,
-         busy: OM,
-         highlight: SM,
-         onBuy: nM
-       } = MM;
-       const {
-         t: QM
-       } = (0, aM.A)(), {
-         pack: hM
-       } = rM, JM = (0, LM.c)(rM.package);
-       return (0, HM.jsxs)("div", {
-         className: jM()("NewPlayerDealPack", {
-           NewPlayerDealPackHighlight: SM
- ... (30 more removed lines; see GitHub link above)
+     function AU() {
+       const UU = yU;
+       if (null === UU) return (0, cU.f)();
+       const XU = (0, cU.f)(!UU.scanned);
+       return UU.scanned = !0, XU
+     }
+   },
+   41927: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => cU
+     });
+     const cU = {
+       webgpu: "rust_webgpu",
+       webgl: "rust_webgl2",
+       webgl1: "rust_webgl1"
+     }
+ ... (8 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L451-L484` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L837) · [Before (L451-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L451-L484)

```diff
-       let {
-         view: rM,
-         needsLogin: iM,
-         busy: SM,
-         highlight: PM,
-         onBuy: nM
-       } = MM;
-       const {
-         t: QM
-       } = (0, aM.A)();
-       return (0, HM.jsxs)("div", {
-         className: jM()("NewPlayerDealPacks", rM.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
-         children: [rM.packs.map(((MM, rM) => (0, HM.jsxs)(OM.Fragment, {
-           children: [rM > 0 && (0, HM.jsx)("div", {
-             className: "NewPlayerDealDivider",
-             "aria-hidden": !0,
- ... (18 more removed lines; see GitHub link above)
+       return ["pl", "ru", "tr", "uk", "vi"].includes(UU)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L487` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L845) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L487)

```diff
-   35077: (MM, rM, iM) => {
+   36981: (UU, XU, zU) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L489-L490` → after: `L847-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L847-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L847-L850) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L489-L490)

```diff
-       c: () => wM,
-       e: () => gM
+       d: () => FU,
+       h: () => DU,
+       j: () => AU,
+       l: () => YU
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L492-L512` → after: `L852-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L852-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L852-L854) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L492-L512)

```diff
-     iM(35072);
-     var OM = iM(3442),
-       SM = iM(1548),
-       jM = iM(2401),
-       aM = iM(3432),
-       PM = iM(3411),
-       nM = iM(3439),
-       QM = iM(3385),
-       zM = iM(1188),
-       LM = iM(1429),
-       mM = iM(1142),
-       HM = iM(1520),
-       hM = iM(1398),
-       JM = iM(2382),
-       dM = iM(2910),
-       yM = iM(2779),
- ... (5 more removed lines; see GitHub link above)
+     var cU = zU(36972),
+       yU = zU(13);
+     const QU = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L514-L518` → after: `L856-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L856-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L856-L859) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L514-L518)

```diff
-     function eM(MM, rM) {
-       null !== MM && (0, yM.u)(MM) || ((0, SM.reportAnalyticsClick)({
-         id: "store.purchase_done",
-         value: `self:${rM.pack.packageId}`
-       }), null !== MM && (0, yM.z)(MM), wM(rM.pack.gems))
+     function AU(UU) {
+       if (UU instanceof WebAssembly.RuntimeError) return !0;
+       const XU = UU instanceof Error ? UU.stack : void 0;
+       return "string" === typeof XU && QU.test(XU)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L522-L538` → after: `L863-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L863-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L863-L869) · [Before (L522-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L522-L538)

```diff
-       const SM = (0, yM.d)(rM);
-       switch (MM.kind) {
-         case "completed":
-           eM(SM, iM);
-           break;
-         case "pending":
-           jM = MM.intentId, aM = () => {
-             dM.i.refresh(), eM(SM, iM)
-           }, CM || (CM = !0, GM.listen()), GM.follow(jM, aM);
-           break;
-         case "unknownPackage":
-           (0, yM.N)(rM, null);
-           break;
-         case "failed":
-           MM.errorKey === OM.d.newPlayerDealUnavailable && (0, yM.N)(rM, null)
-       }
- ... (1 more removed lines; see GitHub link above)
+       var yU;
+       const AU = UU instanceof Error ? UU.name : "thrown",
+         FU = (UU instanceof Error && null !== (yU = UU.stack) && void 0 !== yU ? yU : "").split("\n").filter((UU => QU.test(UU))).slice(0, 8).map((UU => UU.trim())),
+         oU = null === XU ? "wasm memory unknown" : `wasm memory ${Math.round(XU/2**20)} MB`,
+         DU = null === zU.panic ? "" : `, panic: ${(0,cU.e)(zU.panic)}`,
+         EU = `${AU}: ${UU instanceof Error?UU.message:String(UU)}`;
+       return `${(0,cU.l)(zU.kind,zU.refusedBytes)} ${EU} (${oU})${DU}${FU.length>0?` | ${FU.join(" < ")}`:""}`
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L542-L549` → after: `L874-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L874-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L874-L882) · [Before (L542-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L542-L549)

```diff
-       LM.NotificationProvider.showCustomPopup({
-         body: rM => (0, UM.jsx)(tM, {
-           gems: MM,
-           close: rM
-         }),
-         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
-         disableExitButton: !0
-       })
+       var XU;
+       let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(UU instanceof Error) || !oU.test(UU.message)) return {};
+       if (!("detached" in zU)) return {
+         arrayBufferDetached: "absent"
+       };
+       return {
+         arrayBufferDetached: (0, yU.W)(null === (XU = (0, yU.P)(zU, "detached")) || void 0 === XU ? void 0 : XU.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+       }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L553-L576` → after: `L887-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L887-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L887-L897) · [Before (L553-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L553-L576)

```diff
-       let {
-         gems: rM,
-         close: iM
-       } = MM;
-       const {
-         t: OM
-       } = (0, zM.A)();
-       return (0, UM.jsxs)("div", {
-         className: "NewPlayerDealAdded",
-         children: [(0, UM.jsxs)("div", {
-           className: "NewPlayerDealAddedHead",
-           children: [(0, UM.jsx)(hM.b, {
-             name: "circle-check"
-           }), (0, UM.jsx)(JM.b, {
-             amount: rM
-           }), (0, UM.jsx)("span", {
- ... (8 more removed lines; see GitHub link above)
+       let XU = "[object Object]";
+       try {
+         XU = String(UU)
+       } catch {}
+       if ("[object Object]" !== XU) return XU;
+       try {
+         var zU, cU;
+         return null !== (zU = null === (cU = JSON.stringify(UU)) || void 0 === cU ? void 0 : cU.slice(0, EU)) && void 0 !== zU ? zU : XU
+       } catch {
+         return XU
+       }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L579-L587` → after: `L916-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L916-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L916-L934) · [Before (L579-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L579-L587)

```diff
-     function gM(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.e;
-       const {
-         userContext: iM
-       } = (0, mM.b)(), {
-         purchaseUnderWay: OM,
-         notice: SM,
-         buy: nM
-       } = (0, PM.d)(rM), QM = (0, lM.m)(), zM = iM.mayBuy() || (0, jM.guestsMayBuy)(), LM = null === QM ? !zM : QM.guest && !iM.isLoggedIn();
+     function yU(UU, XU) {
+       return QU(UU, XU) ? `trap=alloc_failed ${XU} bytes` : `trap=${UU}`
+     }
+ 
+     function QU(UU, XU) {
+       return "unreachable" === UU && XU > 0
+     }
+ 
+     function AU(UU, XU, zU) {
+       const cU = function(UU) {
+         return UU instanceof WebAssembly.RuntimeError ? /unreachable/i.test(UU.message) ? "unreachable" : /out of bounds/i.test(UU.message) ? "out_of_bounds" : "runtime_error" : (UU instanceof RangeError || UU instanceof Error && "InternalError" === UU.name) && /call stack|recurs … [truncated]
+       }(UU);
+       if ("unreachable" !== cU) return {
+         kind: cU,
+         panic: null,
+         refusedBytes: 0
+ ... (3 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L589-L606` → after: `L936-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L936-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L936-L938) · [Before (L589-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L589-L606)

```diff
-         purchaseUnderWay: OM,
-         notice: SM,
-         needsLogin: LM,
-         buyPack: function(OM, SM) {
-           (0, yM.G)("new_player_deal.buy", (0, EM.b)(OM.arm, MM, SM.pack.packageId)), null === QM ? nM(function(MM) {
-             return {
-               sku: MM.pack.packageId,
-               tier: MM.tier,
-               amount: MM.pack.gems,
-               bonusPercent: 0,
-               package: MM.package
-             }
-           }(SM), null, {
-             followPending: !1
-           }).then((MM => {
-             bM(MM, iM, SM)
- ... (2 more removed lines; see GitHub link above)
+         kind: cU,
+         panic: QU > 0 ? null : yU,
+         refusedBytes: QU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L609-L610` → after: `L941-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L941-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/227.js#L941-L946) · [Before (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/227.js#L609-L610)

```diff
-   },
-   35072: () => {}
+     const FU = 300;
+ 
+     function oU(UU) {
+       return UU.replace(/\s*\n\s*/g, " / ").slice(0, FU)
+     }
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/228.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/228.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L4)

```diff
-   35103: (MM, rM, iM) => {
+   37201: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L6)

```diff
-       d: () => SM,
+       b: () => AU,
+       c: () => yU,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L9-L27` → after: `L10-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L10-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L10-L64) · [Before (L9-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L9-L27)

```diff
-     var OM = iM(3657);
- 
-     function SM() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const MM = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const rM = new BroadcastChannel(OM.i);
-         rM.postMessage({
-           stored: MM
-         }), rM.close()
-       } catch {
-         return null
-       }
-       return MM
-     }
- 
- ... (3 more removed lines; see GitHub link above)
+     var cU = zU(1877);
+     class yU extends Error {
+       constructor(UU) {
+         super("The game server didn't answer in time"), this.leg = UU, this.name = "SeatRequestTimedOut"
+       }
+     }
+     const QU = new class {
+       constructor() {
+         this.count = 0, this.answers = 0, this.waiting = new Set
+       }
+       get answered() {
+         return this.answers
+       }
+       answer() {
+         this.answers++
+       }
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L30-L163` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L67) · [Before (L30-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L30-L163)

```diff
-   35100: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM,
-       f: () => SM,
-       g: () => jM
-     });
-     var OM = iM(3657);
-     async function SM(MM, rM, iM) {
-       let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const jM = aM(await MM.getItem(OM.e, rM));
-       if (null === jM || SM()) return null;
-       const PM = await MM.getItem(OM.f, rM);
-       return SM() ? null : (await async function(MM) {
-         await Promise.all([MM.removeItem(OM.e), MM.removeItem(OM.f)])
-       }(MM).catch(iM), {
-         pack: jM,
- ... (118 more removed lines; see GitHub link above)
+   36977: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L169-L178` → after: `L74-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L74-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L74-L380) · [Before (L169-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L169-L178)

```diff
-     var OM = iM(1073),
-       SM = iM(2263),
-       jM = iM(3647),
-       aM = iM(3657),
-       PM = iM(35103),
-       nM = iM(35100),
-       QM = iM(53774),
-       zM = iM(42090),
-       LM = iM(42065),
-       mM = iM(5463);
+     const cU = 1024,
+       yU = 1024 * cU;
+ 
+     function QU(UU) {
+       return 2 ** Math.floor(Math.log2(Math.max(1, UU / yU)))
+     }
+ 
+     function AU(UU) {
+       return (UU / yU).toFixed(1)
+     }
+   },
+   37188: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => QU,
+       g: () => oU,
+       j: () => FU,
+ ... (291 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L180-L181` → after: `L382-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L382-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L382-L409) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L180-L181)

```diff
-       pack: null,
-       gameSource: null
+         targetBytes: AU,
+         leastBytes: oU
+       },
+       BU = {
+         targetBytes: FU,
+         leastBytes: oU
+       };
+ 
+     function ZU(UU) {
+       return {
+         targetBytes: UU,
+         leastBytes: 0
+       }
+     }
+ 
+     function RU(UU) {
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L184-L195` → after: `L412-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L412-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L412-L541) · [Before (L184-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L184-L195)

```diff
-       constructor(MM) {
-         this.host = MM, this.ready = void 0, this.state = HM, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
-       }
-       readyWithin(MM) {
-         return Promise.race([this.ready, new Promise((rM => {
-           setTimeout(rM, MM)
-         }))])
-       }
-       current() {
-         return this.state
-       }
-       playerState() {
+       constructor(UU, XU, zU) {
+         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dU;
+         this.memory = UU, this.readPeakStoredChunks = XU, this.onError = zU, this.clock = cU, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.gcSheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt … [truncated]
+           reserves: 0,
+           allocations: 0
+         }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null, this.gcPressure = null
+       }
+       setShed(UU, XU, zU) {
+         this.shedding = {
+           shed: UU,
+           oY: XU,
+           readDistanceInUse: zU
+         }
+       }
+       shedDistanceInUse() {
+         return this.distanceInUse
+ ... (114 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L197-L198` → after: `L543-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L543-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L543-L549) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L197-L198)

```diff
-           pack: this.playerPack,
-           gameSource: null
+           wasmMainMiB: Number((0, cU.i)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, cU.i)(this.workersMemoryBytes())),
+           peakStoredChunks: this.peakStoredChunks,
+           refusedReserves: AU,
+           refusedAllocations: FU,
+           sheds: this.sheds,
+           ...null === (QU = this.footprint) || void 0 === QU ? void 0 : QU.snapshot()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L201-L203` → after: `L552-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L552-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L552-L608) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L201-L203)

```diff
-       onPlayerPackChange(MM) {
-         return this.ownListeners.add(MM), () => {
-           this.ownListeners.delete(MM)
+       workersMemoryBytes() {
+         let UU = 0;
+         for (const {
+             stats: XU,
+             gone: zU
+           }
+           of this.workers.values()) UU += zU ? 0 : XU.memoryBytes;
+         return UU
+       }
+       checkFootprint() {
+         null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
+       }
+       checkGcPressure(UU) {
+         const XU = this.gcPressure;
+         if (null === XU) return;
+         if (null !== XU.nextAt || "undefined" !== typeof document && document.hidden || (XU.nextAt = UU + 6e4), null === XU.nextAt || UU < XU.nextAt) return;
+ ... (41 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L206-L437` → after: `L611-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L611-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/228.js#L611-L615) · [Before (L206-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/228.js#L206-L437)

```diff
-       isUsingCustomGameTexturePack(MM) {
-         return (0, LM.c)(this.state, MM)
-       }
-       setGamePackConfirm(MM) {
-         this.confirmGamePack = MM
-       }
-       subscribe(MM) {
-         return this.listeners.set(MM, null), this.ready.then((() => {
-           this.deliver(MM)
-         })), () => {
-           this.listeners.delete(MM)
-         }
-       }
-       async setPlayerPack(MM) {
-         const rM = dM(MM) ? null : MM;
-         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(rM), this.change({
- ... (216 more removed lines; see GitHub link above)
+     }
+ 
+     function eU(UU) {
+       const XU = (UU, XU) => `${UU}/${(0,cU.i)(XU)}`;
+       return `memory ${(0,cU.i)(UU.memoryBytes)} live ${(0,cU.i)(UU.liveBytes)} peak ${(0,cU.i)(UU.peakLiveBytes)} unused ${(0,cU.i)(UU.unusedBytes)} ceiling ${(0,cU.i)(UU.ceilingBytes)} MiB; grows upFront ${XU(UU.grows.upFront,UU.grownBytes.upFront)} ahead ${XU(UU.grows.ahead,UU … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/229.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/229.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/229.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/229.js#L4)

```diff
-   35106: (MM, rM, iM) => {
+   37027: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6-L9` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/229.js#L6-L10) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/229.js#L6-L9)

```diff
-       packDisplayName: () => hM,
-       packModelMessage: () => JM,
-       packModelSummary: () => yM,
-       refusedPackModels: () => dM
+       ITEM_FILES_WITHOUT_SPRITE: () => FU,
+       ITEM_SPRITES: () => QU,
+       ITEM_SPRITES_WITHOUT_FILE: () => AU,
+       ITEM_SPRITE_RUNS: () => yU,
+       MAX_SPRITE_ITEM_ID: () => cU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L11-L157` → after: `L12-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/229.js#L12-L16) · [Before (L11-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/229.js#L11-L157)

```diff
-     var OM = iM(35113),
-       SM = iM(35120);
-     const jM = "DRACO",
-       aM = 0,
-       PM = 1,
-       nM = 0,
-       QM = 1,
-       zM = 32768;
- 
-     function LM(MM) {
-       const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
-       let iM = 0;
-       const OM = () => {
-           if (iM >= MM.byteLength) throw new RangeError("past the stream");
-           return MM[iM++]
-         },
- ... (131 more removed lines; see GitHub link above)
+     const cU = 10113,
+       yU = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       QU = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       AU = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       FU = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/230.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/230.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341)

#### 1. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L4-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/230.js#L4-L616) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/230.js#L4)

```diff
-   35113: (MM, rM, iM) => {
+   37036: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       CreateCustomLobby: () => wU
+     });
+     zU(37039);
+     var cU = zU(5057),
+       yU = zU(61),
+       QU = zU(1726),
+       AU = zU(1106),
+       FU = zU.n(AU),
+       oU = zU(3490),
+       DU = zU(1131),
+       EU = zU(1203),
+       YU = zU(5026),
+       NU = zU(1494),
+       IU = zU(37046),
+ ... (597 more added lines; see GitHub link above)
```
